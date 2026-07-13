---
layout: post
title:  OpenWRT 常用命令整理
subtitle: 📡 ​​OpenWRT 软件管理命令大全​​
tags:
    - OpenWRT
---

![📡 ​​OpenWRT 软件管理命令大全​​](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/openwrt.webp)

### 设置 LAN 口 IP 地址

```bash
uci set network.lan.ipaddr='192.168.1.3'
uci commit network
```

---

### 查看无线接口信息

检查硬件模式，确认 2.4G 和 5G 接口：

```bash
uci show wireless | grep hwmode
```

**硬件模式说明：**

| 硬件模式 | 频率 | 说明 |
|---------|-----|------|
| `11g` 或包含 `2g/ax` | 2.4GHz | 2.4G 接口 |
| `11a` 或包含 `5g/ac/ax` | 5GHz | 5G 接口 |

### 安装 WiFi 驱动

```bash
opkg update
opkg install wpad-basic-wolfssl
```

### 配置 2.4G WiFi

```bash
# 启用 2.4G 射频
uci set wireless.radio0.disabled='0'

# 设置 SSID 和加密方式（psk2 代表 WPA2-PSK）
uci set wireless.default_radio0.ssid='CU-2g'
uci set wireless.default_radio0.encryption='psk2'
uci set wireless.default_radio0.key='请在此处输入您的WiFi密码'

# 提交配置
uci commit wireless
```

### 配置 5G WiFi

```bash
# 启用 5G 射频
uci set wireless.radio1.disabled='0'

# 设置 SSID 和加密方式（sae 代表 WPA3-SAE Personal）
uci set wireless.default_radio1.ssid='CU-5g'
uci set wireless.default_radio1.encryption='sae'
uci set wireless.default_radio1.key='请在此处输入您的WiFi密码'

# 提交配置
uci commit wireless
```

---

### 设置 IPv6 中继模式

```bash
# 设置 LAN 口的 IPv6 模式为中继 (relay)
uci set dhcp.lan.dhcpv6='relay'
uci set dhcp.lan.ra='relay'
uci set dhcp.lan.ndp='relay'

# 创建或修改 WAN/WAN6 接口的中继配置（以 wan6 为主接口）
uci set dhcp.wan6=dhcp
uci set dhcp.wan6.interface='wan6'
uci set dhcp.wan6.dhcpv6='relay'
uci set dhcp.wan6.ra='relay'
uci set dhcp.wan6.ndp='relay'
uci set dhcp.wan6.master='1'

# 提交 dhcp 配置
uci commit dhcp
```

### 应用网络配置

```bash
# 重启网络服务
# 注意：SSH 连接可能会断开，请使用新 IP 192.168.1.3 重新连接
/etc/init.d/network restart

# 重启 DHCP/IPv6 服务
/etc/init.d/odhcpd restart

# 重新加载无线配置
wifi reload
```

---

## 系统升级

**上传固件**

```bash
scp /path/to/your/firmware-sysupgrade.bin root@192.168.1.3:/tmp/sysupgrade.bin
```

**查看可用升级包**

```bash
sysupgrade -l
```

**执行系统升级**

```bash
sysupgrade -v /tmp/sysupgrade.bin
```

**保留自定义配置**

如果您想保留放在 `/root/` 或 `/usr/bin/` 下的脚本，可以将其路径写入 `/etc/sysupgrade.conf` 文件中。

---

### 启用软件和硬件流量分载

```bash
# 1. 启用软件流量分载（必需前提）
uci set firewall.@defaults[0].flow_offloading='1'

# 2. 启用硬件流量分载
uci set firewall.@defaults[0].flow_offloading_hw='1'

# 3. 提交防火墙配置修改
uci commit firewall

# 4. 重启防火墙服务使其生效
/etc/init.d/firewall restart
```

### 验证配置

检查防火墙配置文件中的默认设置段落：

```bash
uci show firewall.@defaults[0]
```

**成功标志：** 输出中包含以下两行

```
firewall.@defaults[0].flow_offloading='1'
firewall.@defaults[0].flow_offloading_hw='1'
```

### 检查内核层流表（nftables 版本）

对于 OpenWrt 22.03 及以上版本（使用 nftables）：

```bash
nft list flowtables
```

**成功标志：** 有输出内容（通常包含 `flowtable ft`），说明分载机制已在内核层生效。

---

## 快速参考

| 操作 | 命令 |
|------|------|
| 设置 LAN IP | `uci set network.lan.ipaddr='192.168.1.3'` |
| 启用 WiFi | `uci set wireless.radio0.disabled='0'` |
| 重启网络 | `/etc/init.d/network restart` |
| 重启防火墙 | `/etc/init.d/firewall restart` |
| 升级系统 | `sysupgrade -v /tmp/sysupgrade.bin` |

---

**注意事项：**
- 执行网络重启后，SSH 连接会断开，需要使用新 IP 地址重新连接
- 所有 `uci commit` 命令不要遗漏，否则配置不会生效
- 在升级固件前，建议备份当前配置

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
```
opkg update
opkg upgrade luci 
opkg list-upgradable | grep luci- | cut -f 1 -d ' ' | xargs opkg upgrade
```
在ssh下，先“opkg update”，获取更新。之后再更新“ luci-” 开头的包。如果 要全部无条件更新，就去掉过滤“ grep luci- |”

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
