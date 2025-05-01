---
layout: post
title: OpenWrt 屏蔽域名方法
subtitle: OpenWrt 如何屏蔽指定网址
tags:
    - OpenWRT
---

![OpenWrt 屏蔽域名方法](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/OpenWrt%20Wireless%20Freedom.webp)

## ​​🚧 OpenWrt 屏蔽特定域名的方法​​

在 OpenWrt 路由器上屏蔽特定域名（如广告、恶意网站），可以通过 ​​DNS过滤​​、​​防火墙规则​​ 或 ​​Hosts文件​​ 实现。以下是几种常用方法：

##​​ 📌 方法1：使用 dnsmasq 屏蔽域名（推荐）​​

​​适用场景​​：简单、高效，适用于所有连接该路由器的设备。

​​**1. 登录 OpenWrt SSH​​**

`ssh root@192.168.1.1`

​​**2. 编辑 dnsmasq 配置文件​​​​**

`vi /etc/dnsmasq.conf`

添加以下内容（将 example.com 替换为要屏蔽的域名）：
```
address=/example.com/0.0.0.0
```
### 📌 ​​说明​​：

✨0.0.0.0 表示将域名解析到无效IP，使访问失效。  

✨支持通配符，如 address=/ads.com/0.0.0.0 会屏蔽 xxx.ads.com。  

​​​​**3. 重启 dnsmasq 服务​​​​**
```
/etc/init.d/dnsmasq restart
```
或
```
service dnsmasq reload
```
**​​4. 验证是否生效​​**
```
nslookup example.com
```
如果返回 0.0.0.0，说明屏蔽成功。

##​​ 📌 方法2：修改 Hosts 文件​​

​​适用场景​​：适合少量域名屏蔽，兼容性高。

​​**1. 编辑 /etc/hosts​​**
```
vi /etc/hosts
```
添加：
```
0.0.0.0 example.com
0.0.0.0 www.example.com
```
**​​2. 重启网络​​**
```
/etc/init.d/network restart
```
##​​ 📌 方法3：使用 iptables 防火墙屏蔽（高级）​​
​​
适用场景​​：彻底阻止访问，即使DNS解析正常也无法连接。

​​**1. 添加防火墙规则​​**
```
iptables -I FORWARD -p tcp --dport 80 -m string --string "Host: example.com" --algo bm -j DROP
iptables -I FORWARD -p tcp --dport 443 -m string --string "Host: example.com" --algo bm -j DROP
```
**​​2. 保存规则​​**

    uci add firewall rule
    uci set firewall.@rule[-1].name='Block example.com'
    uci set firewall.@rule[-1].src='lan'
    uci set firewall.@rule[-1].dest='wan'
    uci set firewall.@rule[-1].target='DROP'
    uci set firewall.@rule[-1].proto='tcp'
    uci set firewall.@rule[-1].dest_port='80,443'
    uci commit
    /etc/init.d/firewall restart

## 📌 方法4：使用 AdGuard Home（广告屏蔽）​​
​​
适用场景​​：需要批量屏蔽广告、跟踪域名。

​​**1. 安装 AdGuard Home​​**

    opkg update
    opkg install adguardhome

**2. 配置域名黑名单​​**

访问 http://192.168.1.1:3000，在 ​​Filters → DNS Blocklist​​ 添加：
```
||example.com^
```
##​​ 📌 方法5：使用 LuCI 网页界面（新手友好）​​

1.登录 http://192.168.1.1 → ​​Network → DHCP and DNS​​。

2.在 ​​"Domain overrides"​​ 添加：
```
example.com → 0.0.0.0
```
3.保存并应用。
​​
## 💡 总结​​

​​dnsmasq​​：通用、简单，支持通配符，生效快，需SSH操作

​​Hosts​​​​：少量域名，	兼容性强，手动维护麻烦

​​iptables​​	​​：彻底屏蔽（防DNS绕过），	即使改DNS也无法访问，	规则复杂，影响性能

​​AdGuard​​​​：批量屏蔽广告/恶意网站，可视化管理，支持列表订阅，需额外安装软件

​​LuCI​​​​：新手用户，无需命令行，功能较基础

（需要批量屏蔽1000+域名？推荐使用 ​​dnsmasq + 外部黑名单​​，如 [StevenBlack/hosts](https://github.com/StevenBlack/hosts)）🚀
