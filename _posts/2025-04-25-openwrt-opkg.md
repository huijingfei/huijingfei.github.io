---
layout: post
title:  OpenWRT 常用命令整理
subtitle: 📡 ​​OpenWRT 软件管理命令大全​​
tags:
    - Linux
---

![📡 ​​OpenWRT 软件管理命令大全​​](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/openwrt.webp)

## 🔍 查找软件包​​

​​列出所有可用软件包​​：
```
opkg list
```
​​按名称搜索软件​​（如 luci）：
```
opkg list | grep luci
```
​​查看已安装软件​​：
```
opkg list-installed
```
​​查找软件依赖关系​​（如 wireguard）：
```
opkg depends wireguard
```
## ​​🔄 更新软件包​​

​​更新软件源列表​​（必须先执行）：
```
opkg update
```
​​升级所有可更新软件​​：
```
opkg upgrade
```
​​单独升级某个软件​​（如 luci-app-adblock）：
```
opkg install luci-app-adblock --force-upgrade
```
​​清除旧版本缓存​​：
```
opkg clean
```
## ​​📌 安装/卸载软件​​

​​安装新软件​​（如 tcpdump）：
```
opkg install tcpdump
```
​​卸载软件​​（如 firewall）：
```
opkg remove firewall
```
​​强制卸载（忽略依赖）​​：
```
opkg remove <package> --force-depends
```
## ​​⚙️ 高级操作​​

​​从特定源安装​​（如测试版仓库）：
```
opkg install <package> -t testing
```
​​查看软件详情​​（如版本、描述）：
```
opkg info <package>
```
​​修复损坏的依赖​​：
```
opkg install --force-reinstall <package>
```
## ​​💡 实用技巧​​

​​批量操作​​：
```
opkg install package1 package2 package3
```
​​下载但不安装​​（手动安装）：
```
opkg download <package>
```
​​查看可用存储空间​​：
```
df -h
```
## ⚠️ 注意事项​​

​​操作前备份​​：
```
tar -czvf /tmp/backup.tar.gz /etc/config/
```
​​空间不足​​：先清理缓存或扩展 Overlay 分区

​​固件兼容性​​：确保软件包匹配你的 OpenWRT 版本（如 21.02 vs 22.03）

（遇到错误？尝试添加 --force-overwrite 参数覆盖冲突文件！）
