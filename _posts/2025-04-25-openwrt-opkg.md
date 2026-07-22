---
layout: post
title:  OpenWRT 常用命令整理
subtitle: 📡 ​​OpenWRT 软件管理命令大全​​
tags:
    - OpenWRT
---

![📡 OpenWRT 软件管理命令大全](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/openwrt.webp)

# 前言

刚刚刷好OpenWRT系统？别急，跟着这个指南一步步来。我会带你从最基础的网络设置，到WiFi配置，再到各种高级功能，整个过程中我都会告诉你哪些配置需要重启服务才能生效。让我们开始吧！

---

## 第一步：网络基础配置

### 设置 LAN 口 IP 地址

刚刷好系统的路由器，首先要设置一下LAN口的IP，这样才能方便管理。OpenWRT 25.12 使用 CIDR 表示法（/24 表示子网掩码 255.255.255.0）。如果你想改成 `192.168.1.3`（子网掩码 255.255.255.0），就用下面的命令：

```bash
uci set network.lan.ipaddr='192.168.1.3/24'
uci commit network
/etc/init.d/network restart
```

或者分开设置（兼容性更好）：
```bash
uci set network.lan.ipaddr='192.168.1.3'
uci set network.lan.netmask='255.255.255.0'
uci commit network
/etc/init.d/network restart
```

> **💡 提示：** 执行 `network restart` 后，你的SSH连接会短暂断开，记得用新IP地址重新连接。等个10秒左右就能重新登陆了。

---

## 第二步：检查和配置无线硬件

### 查看无线接口信息

现在我们来看看这个路由的无线硬件。OpenWRT会把各个频段（2.4G、5G等）识别为不同的射频芯片，我们需要先确认一下硬件配置。

```bash
uci show wireless | grep hwmode
```

**硬件模式对照表：**

| 硬件模式 | 频率 | 说明 |
|---------|-----|------|
| `11g` 或包含 `2g/ax` | 2.4GHz | 2.4G 接口（需要启用） |
| `11a` 或包含 `5g/ac/ax` | 5GHz | 5G 接口（需要启用） |

如果你的输出中包含 `radio0` 和 `radio1`，说明有两个射频，那就是既有2.4G又有5G。

### 安装 WiFi 驱动（如果需要）

有些系统可能驱动不完整，特别是刚刷好的时候。在 OpenWRT 25.12 中，推荐安装最新的驱动。首先更新软件源，然后安装WiFi驱动：

```bash
apk update
apk add wpad-openssl
```

> **ℹ️ 说明：** OpenWRT 25.12 改用 `apk` 包管理器（来自 Alpine Linux）。推荐使用 `wpad-openssl` 或 `wpad-wolfssl`，比旧版本的 `wpad-basic` 更稳定。

---

## 第三步：配置WiFi网络

好了，硬件确认没问题。现在该配置WiFi了。我们分别设置2.4G和5G两个频段。

### 配置 2.4G WiFi

```bash
# 首先启用 2.4G 射频
uci set wireless.radio0.disabled='0'

# 设置 SSID（WiFi名称）和加密方式
# psk2 是 WPA2-PSK，比较稳定，大多数设备都支持
uci set wireless.default_radio0.ssid='YourSSID-2G'
uci set wireless.default_radio0.encryption='psk2'
uci set wireless.default_radio0.key='你的WiFi密码'

# 如果你想用更安全的 WPA3（OpenWRT 25.12 推荐），用 sae 模式：
# uci set wireless.default_radio0.encryption='sae'

# 提交配置
uci commit wireless

# 重启WiFi服务使配置生效
wifi reload
```

### 配置 5G WiFi

接下来配置5G。5G的优势是速度快、干扰少，适合视频或大文件传输。

```bash
# 启用 5G 射频
uci set wireless.radio1.disabled='0'

# 设置 SSID 和加密方式
# 5G 可以用更安全的 WPA3-SAE（sae）
uci set wireless.default_radio1.ssid='YourSSID-5G'
uci set wireless.default_radio1.encryption='sae'
uci set wireless.default_radio1.key='你的WiFi密码'

# 如果设备不支持 WPA3，也可以用 WPA2：
# uci set wireless.default_radio1.encryption='psk2'

# 提交配置
uci commit wireless

# 重启WiFi服务
wifi reload
```

> **✨ 新手友好提示：** 2G和5G用同一个密码会方便得多，设备可以自动选择最佳频段。

---

## 第四步：高级网络配置

### 配置 IPv6 中继模式

如果你的上游网络已经分配了IPv6地址，可以让OpenWRT把IPv6中继到LAN口。这样局域网内的设备就能直接获得公网IPv6地址了。

```bash
# 设置 LAN 口的 IPv6 中继模式
uci set dhcp.lan.dhcpv6='relay'
uci set dhcp.lan.ra='relay'
uci set dhcp.lan.ndp='relay'

# 创建或修改 WAN6 接口的中继配置（以 wan6 为主）
uci set dhcp.wan6=dhcp
uci set dhcp.wan6.interface='wan6'
uci set dhcp.wan6.dhcpv6='relay'
uci set dhcp.wan6.ra='relay'
uci set dhcp.wan6.ndp='relay'
uci set dhcp.wan6.master='1'

# 提交 DHCP 配置
uci commit dhcp

# 重启 DHCP 服务
/etc/init.d/odhcpd restart
```

### 应用所有网络配置

好的，网络配置都设置好了。现在一起应用这些配置：

```bash
# 重启网络服务
# ⚠️ 注意：这会断开SSH连接，用新IP重新连接即可
/etc/init.d/network restart

# 重启 DHCP/IPv6 服务
/etc/init.d/odhcpd restart

# 重新加载无线配置
wifi reload
```

等30秒左右，用新的IP地址重新连接。如果一切顺利，你应该能看到WiFi已经可用了。

---

## 第五步：性能优化

### 启用软件和硬件流量分载

想让路由跑得更快？启用流量分载可以大幅提升吞吐量。特别是在有线网络速度很高的情况下，这个功能特别有用。

```bash
# 1. 先启用软件流量分载（这是必要前提）
uci set firewall.@defaults[0].flow_offloading='1'

# 2. 再启用硬件流量分载（CPU支持的话会更快）
uci set firewall.@defaults[0].flow_offloading_hw='1'

# 3. 提交防火墙配置
uci commit firewall

# 4. 重启防火墙服务使其生效
/etc/init.d/firewall restart
```

**验证配置是否生效：**

```bash
# 查看防火墙配置
uci show firewall.@defaults[0]
```

如果输出中包含下面两行，说明配置成功：
```
firewall.@defaults[0].flow_offloading='1'
firewall.@defaults[0].flow_offloading_hw='1'
```

**检查内核层流表（OpenWRT 25.12 使用 nftables）：**

```bash
nft list flowtables
```

有输出内容（通常包含 `flowtable ft`）就说明分载机制已经在内核层生效了。性能妥妥的提升！

---

## 第六步：固件升级

过一段时间，OpenWRT 官方会发布新版本和安全补丁。这里教你怎么升级。

### 上传新固件

从你的电脑上传固件文件到路由器的 `/tmp` 目录：

```bash
scp /path/to/your/firmware-sysupgrade.bin root@192.168.1.3:/tmp/sysupgrade.bin
```

### 查看升级选项

```bash
sysupgrade -l
```

### 执行系统升级

**保留配置升级：**
```bash
sysupgrade -v /tmp/sysupgrade.bin
```

**从头开始升级（清空所有设置）：**
```bash
sysupgrade -n -v /tmp/sysupgrade.bin
```

> **📌 重要提示：** 升级过程中不要断电！通常需要2-5分钟，耐心等待。

### 保留自定义脚本和文件

如果你在 `/root/` 或 `/usr/bin/` 下放了自定义脚本，升级时可以自动保留。只需要把这些路径写入 `/etc/sysupgrade.conf` 文件：

```bash
# 编辑备份列表
vi /etc/sysupgrade.conf

# 添加你要保留的路径，比如：
# /root/my_script.sh
# /usr/bin/custom_tool
```

---

## 附录：软件包管理完整指南

都配置好了？现在你可能想安装一些额外功能。下面是完整的软件包管理命令。

### ℹ️ OpenWRT 25.12 改用 apk 包管理器

从 OpenWRT 25.12 开始，官方改用 `apk` 包管理器（来自 Alpine Linux），取代了之前的 `opkg`。新的 `apk` 有以下优势：

- ✅ 更轻量级，系统占用空间更小
- ✅ 依赖解析更准确，包冲突更少  
- ✅ 速度更快，安装升级更流畅
- ✅ 兼容 Alpine Linux 庞大的软件生态

如果你是从旧版本升级过来的，记得用 `apk` 替代以前的 `opkg` 命令。

**快速命令对比（从 opkg 到 apk）：**

| 功能 | opkg（旧） | apk（新） |
|-----|-----------|---------|
| 更新源列表 | `opkg update` | `apk update` |
| 搜索软件 | `opkg list \| grep name` | `apk search name` |
| 安装软件 | `opkg install pkg` | `apk add pkg` |
| 卸载软件 | `opkg remove pkg` | `apk del pkg` |
| 升级所有 | `opkg upgrade` | `apk upgrade` |
| 查看已装 | `opkg list-installed` | `apk info` |
| 查看详情 | `opkg info pkg` | `apk info -a pkg` |
| 清理缓存 | `opkg clean` | `apk cache clean` |

### 🔍 查找软件包

**列出所有可用软件包：**
```bash
apk search
```

**按名称搜索软件（比如搜索 luci）：**
```bash
apk search luci
```

**查看已安装的软件：**
```bash
apk info
```

**查看某个已安装软件的详细信息：**
```bash
apk info <package>
```

**查找软件的依赖关系（比如 wireguard）：**
```bash
apk info --depends wireguard
```

### 🔄 更新和升级软件

**首先更新软件源列表（必须先执行）：**
```bash
apk update
```

**升级所有可更新的软件：**
```bash
apk upgrade
```

**只升级特定软件（比如 luci）：**
```bash
apk upgrade luci
```

**清除缓存释放空间：**
```bash
apk cache clean
```

或者只删除本地缓存的包：
```bash
rm -rf /var/cache/apk/*
```

### 📌 安装和卸载软件

**安装新软件（比如 tcpdump）：**
```bash
apk add tcpdump
```

**卸载软件（比如某个不需要的包）：**
```bash
apk del <package>
```

**卸载软件及其依赖（如果没有其他软件需要）：**
```bash
apk del --recursive <package>
```

### ⚙️ 高级操作

**查看软件的详细信息（版本、大小、依赖等）：**
```bash
apk info -a <package>
```

**列出某个软件包含的所有文件：**
```bash
apk info -L <package>
```

**查看软件的维护者和许可证：**
```bash
apk info -d <package>
```

**重新安装软件（修复损坏的依赖）：**
```bash
apk fix <package>
```

**强制重新安装（清除并重新安装）：**
```bash
apk del <package> && apk add <package>
```

### 💡 实用技巧

**批量安装多个软件：**
```bash
apk add package1 package2 package3
```

**查看可用存储空间：**
```bash
df -h
```

**查看某个软件的安装大小：**
```bash
apk info -s <package>
```

**模拟安装（不真正安装，只显示会发生什么）：**
```bash
apk add --simulate <package>
```

---

## 🔐 维护和备份

### 操作前备份配置

做任何重要操作前，最好备份一下当前配置。遇到问题时可以快速恢复：

```bash
tar -czvf /tmp/backup.tar.gz /etc/config/
```

然后把备份文件下载到你的电脑上保存。

### 解决常见问题

**空间不足：**
- 先用 `apk cache clean` 清理包缓存
- 检查可用空间：`df -h`
- 如果还是不够，可能需要扩展 Overlay 分区
- 删除不需要的软件：`apk del <package>`

**软件包不兼容：**
- 确保软件包版本和你的 OpenWRT 版本匹配（都应该是25.12）
- 检查官方仓库中该软件是否支持你的 OpenWRT 版本
- 可以用 `apk search` 查看可用版本

**WiFi 连接不稳定：**
- 检查是否有干扰（2.4G 更容易被干扰）
- 尝试修改信道号
- 重启 WiFi 服务：`wifi reload`
- 查看 WiFi 日志：`logread | grep wireless`

**包管理器出错：**
- 重新更新索引：`apk update --allow-untrusted`
- 检查网络连接
- 清理损坏的缓存：`rm -rf /var/cache/apk/*` 然后 `apk update`

---

## 总结

OK，到这里你的新路由就配置得差不多了。从基础的网络设置，到WiFi配置，再到性能优化，基本覆盖了日常使用的所有方面。

**快速回顾一下核心步骤：**
1. ✅ 设置 LAN IP 并重启网络
2. ✅ 检查无线硬件并安装驱动
3. ✅ 配置2.4G和5G WiFi
4. ✅ （可选）配置IPv6中继
5. ✅ （推荐）启用流量分载
6. ✅ 定期更新固件和软件包

有什么问题欢迎留言讨论。祝你使用愉快！🎉
