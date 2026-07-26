---
layout: post
title:  OpenWRT 25.12 命令行完整配置指南
subtitle: 📡 OpenWRT 从刷机到上网的全流程命令大全
tags:
    - OpenWRT
---

![📡 OpenWRT 软件管理命令大全](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/openwrt.webp)

# 前言

刚刚刷好OpenWRT系统？别急，跟着这个指南一步步来。我会带你从最基础的网络设置，到WiFi配置，再到各种高级功能，整个过程中我都会告诉你哪些配置需要重启服务才能生效。让我们开始吧！

---

## 第一步：系统和网络基础配置

刚刷好系统，首先要配置一些最基本的东西：网络 IP、主机名、时区。这些都是系统运行的基础，必须先设置好。

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

### 设置系统信息（时区、主机名等）

网络配置好了，顺便把系统的基本信息也设置一下。包括主机名和时区，这样日志和系统时间才能正确显示。

**设置主机名、时区和时区名称：**

```bash
# 设置路由器的主机名（显示在网络中和管理界面）
uci set system.@system[0].hostname='OpenWrt'

# 设置时区为 CST-8（中国标准时间）
uci set system.@system[0].timezone='CST-8'

# 设置时区数据库（Asia/Taipei 是中国时区的标准值）
uci set system.@system[0].zonename='Asia/Taipei'
```

**保存配置：**

```bash
uci commit system
```

**让设置立即生效（重启系统服务）：**

```bash
/etc/init.d/system reload
```

> **💡 时区说明：**
> - `CST-8` 是时区偏移量（中国在 UTC+8）
> - `Asia/Taipei` 是标准的时区数据库名称
> - 这样设置后，系统时间和日志都会正确显示中国时间

**其他常见时区设置参考：**

| 地区 | timezone | zonename |
|-----|----------|----------|
| 中国 | `CST-8` | `Asia/Shanghai` 或 `Asia/Taipei` |
| 香港 | `HKT-8` | `Asia/Hong_Kong` |
| 台湾 | `CST-8` | `Asia/Taipei` |
| 新加坡 | `SGT-8` | `Asia/Singapore` |
| 日本 | `JST-9` | `Asia/Tokyo` |
| 泰国 | `ICT-7` | `Asia/Bangkok` |
| 美国（东部） | `EST5EDT` | `America/New_York` |
| 欧洲（西部） | `WET0WEST` | `Europe/London` |

> **提示：** 使用 `zonename` 的标准值更准确（会自动处理夏令时等），推荐优先使用。

### 设置 Root 密码（重要！用于 SSH 登陆）

现在设置管理员密码，这样才能保护你的路由器安全。没有设置密码的话，任何人都能 SSH 连接上来。

**方式一：直接设置密码（最简单）**

```bash
passwd
```

执行后会提示输入新密码，输入两次确认即可。

**方式二：用命令设置密码（适合脚本自动化）**

```bash
# 方式 2a：使用 OpenWrt 内置的加密函数
echo -e 'YourPassword123\nYourPassword123' | passwd

# 方式 2b：直接设置哈希密码（需要先生成哈希值）
# 先生成密码哈希
HASH=$(openssl passwd -crypt 'YourPassword123')
# 然后设置
uci set system.@system[0].root_password="$HASH"
uci commit system
```

> **⚠️ 重要提示：**
> - 密码最好设置为 12 位以上，包含大小写字母、数字和符号
> - 不要使用简单密码，否则容易被暴力破解
> - 设置好后记住密码，忘记了找回会很麻烦

---

## 备份和恢复配置（重要！建议先做）

都说"常在河边走，哪有不湿鞋"。所以在开始配置之前，先学会备份。万一后面配置出了问题，备份可以救你一命！

### 在路由器上直接备份

最简单的方法，直接在路由器上打包备份：

```bash
sysupgrade -b /tmp/backup-OpenWrt-$(date +%Y-%m-%d).tar.gz
```

这个命令会在 `/tmp` 目录下生成一个日期命名的备份文件（比如 `backup-OpenWrt-2026-07-23.tar.gz`）。

### 下载备份文件到电脑

**方法一：用 scp 下载**

```bash
scp -O root@192.168.1.3:/tmp/backup-OpenWrt-*.tar.gz ~/Downloads/
```

**方法二：管道直接下载（推荐）**

这个方法最直接，直接备份并下载，一条命令搞定：

```bash
ssh root@192.168.1.3 "sysupgrade -b -" > ~/Downloads/backup-OpenWrt-$(date +%Y-%m-%d).tar.gz
```

> **💡 提示：** 把这个文件妥善保存。建议放在云盘里备份，真的救过急！

### 恢复配置

如果出问题了，或者想把配置复制到另一台路由器，用恢复命令：

**第一步：上传备份文件到路由器**

```bash
scp -O ~/Downloads/backup-OpenWrt-2026-07-23.tar.gz root@192.168.1.3:/tmp/
```

**第二步：恢复配置**

```bash
sysupgrade -r /tmp/backup-OpenWrt-2026-07-23.tar.gz
```

恢复完成后，路由器会自动重启。等个30秒就能用新IP重新连接了。

> **⚠️ 警告：** 恢复配置会覆盖现在的设置，如果不确定，先做好当前配置的备份！

---

## 第二步：检查和配置无线硬件

### 查看无线接口信息

现在我们来看看这个路由的无线硬件。OpenWRT会把各个频段（2.4G、5G等）识别为不同的射频芯片，我们需要先确认一下硬件配置。

```bash
uci show wireless
```

这个命令会显示所有的无线配置信息。你会看到类似这样的输出结构：
```
wireless.radio0=wifi-device
wireless.radio0.type='mac80211'
wireless.radio0.hwmode='11g'
wireless.radio0.disabled='1'
...
wireless.default_radio0=wifi-iface
wireless.default_radio0.device='radio0'
wireless.default_radio0.network='lan'
wireless.default_radio0.disabled='0'
...
```

**关键要点：** 如果输出中有 `radio0` 和 `radio1`，说明有两个射频，既有2.4G又有5G。

### 安装 WiFi 驱动（如果需要）

有些系统可能驱动不完整，特别是刚刷好的时候。在 OpenWRT 25.12 中，推荐安装最新的驱动。首先更新软件源，然后安装WiFi驱动：

```bash
apk update
apk add wpad-basic-mbedtls
```

> **ℹ️ WiFi 驱动选择指南：**
> 
> OpenWRT 25.12 的默认推荐是 **`wpad-basic-mbedtls`**，它在低配置和中配置路由器上表现最好，占用资源少。
>
> 如果你的路由器硬件配置比较好（比如有足够的内存和 CPU），可以用功能更多的版本：
> - **`wpad-openssl`** - 加密库使用 OpenSSL，支持更多高级功能
> - **`wpad-wolfssl`** - 加密库使用 WolfSSL，性能和功能介于两者之间
>
> **怎么选？** 保险起见，先用默认的 `wpad-basic-mbedtls`。如果你的硬件足够好且需要高级功能，再换成 `wpad-openssl`。

---

## 第三步：配置WiFi网络

好了，硬件确认没问题。现在该配置WiFi了。我们分别设置2.4G和5G两个频段。为了效率，先把所有配置都设置好，最后一次性重启WiFi服务。

### 配置 2.4G WiFi

```bash
# 启用 2.4G WiFi 接口
uci set wireless.default_radio0.disabled='0'

# 设置 SSID（WiFi名称）
uci set wireless.default_radio0.ssid='YourSSID-2G'

# 设置加密方式
# psk2 是 WPA2-PSK，比较稳定，大多数设备都支持
uci set wireless.default_radio0.encryption='psk2'

# 设置 WiFi 密码（至少 8 个字符）
uci set wireless.default_radio0.key='YourPassword123'

# 设WiFi信道（2.4G通常用1-13，信道11是中国常用）
uci set wireless.radio0.channel='11'

# 设置频宽为 40MHz（2.4G 最多就这样了）
uci set wireless.radio0.htmode='HT40'
```

> **💡 2.4G 信道选择：** 中国常用信道是 1、6、11（互不干扰）。干扰多的话可以试试 13。

### 配置 5G WiFi

接下来配置5G。5G的优势是速度快、干扰少，适合视频或大文件传输。

```bash
# 启用 5G WiFi 接口
uci set wireless.default_radio1.disabled='0'

# 设置 SSID（WiFi名称）
uci set wireless.default_radio1.ssid='YourSSID-5G'

# 设置加密方式
# 5G 可以用更安全的 WPA3-SAE（sae）
uci set wireless.default_radio1.encryption='sae'

# 设置 WiFi 密码（至少 8 个字符）
uci set wireless.default_radio1.key='YourPassword123'

# 设置5G信道
# 中国允许的5G信道：36, 40, 44, 48, 149, 153, 157, 161, 165
# 建议用 36、44、149、157、165（这些信道干扰最少）
uci set wireless.radio1.channel='36'

# 设置频宽（VHT80 是 80MHz，能跑满 WiFi 5 速度；VHT160 是 160MHz，更快但可能不稳定）
uci set wireless.radio1.htmode='VHT80'
```

> **💡 5G 信道和频宽选择：** 
> - 信道 36-48 和 149-165 互不干扰，建议选其中之一
> - VHT80（80MHz）最稳定，也能发挥 WiFi 5 的性能
> - VHT160（160MHz）最快，但需要硬件支持且干扰敏感

### WiFi 6（802.11ax）频宽设置

如果你的路由器支持 WiFi 6，可以用下面的命令配置更高的频宽。WiFi 6 使用 `HE` 模式：

```bash
# WiFi 6 - 80MHz 频宽（推荐）
uci set wireless.radio1.htmode='HE80'

# WiFi 6 - 160MHz 频宽（更快但需要硬件支持）
uci set wireless.radio1.htmode='HE160'

# 应用配置
uci commit wireless
wifi reload
```

> **💡 WiFi 6 频宽说明：**
> - `HE80` - 80MHz，最稳定，大多数 WiFi 6 设备都支持
> - `HE160` - 160MHz，理论速度更快，但需要高端硬件和好的环境

### WiFi 7（802.11be）频宽设置

如果你有最新的支持 WiFi 7 的路由器，可以用下面的命令配置。WiFi 7 使用 `EHT` 模式：

```bash
# WiFi 7 - 80MHz 频宽
uci set wireless.radio1.htmode='EHT80'

# WiFi 7 - 160MHz 频宽（推荐）
uci set wireless.radio1.htmode='EHT160'

# WiFi 7 - 320MHz 频宽（最快！但需要最新硬件和好的环境）
uci set wireless.radio1.htmode='EHT320'

# 应用配置
uci commit wireless
wifi reload
```

> **💡 WiFi 7 频宽说明：**
> - `EHT80` - 80MHz，最稳定
> - `EHT160` - 160MHz，性能和稳定性的平衡点
> - `EHT320` - 320MHz，最快，理论速度可达 46Gbps，但需要极好的环境和最新的设备支持

**WiFi 标准频宽对比表：**

| WiFi 标准 | 模式代码 | 80MHz | 160MHz | 320MHz |
|---------|--------|-------|--------|--------|
| WiFi 5 (802.11ac) | `VHT` | ✅ VHT80 | ✅ VHT160 | ❌ 不支持 |
| WiFi 6 (802.11ax) | `HE` | ✅ HE80 | ✅ HE160 | ❌ 不支持 |
| WiFi 7 (802.11be) | `EHT` | ✅ EHT80 | ✅ EHT160 | ✅ EHT320 |

### 一次性应用所有WiFi配置

所有WiFi配置都设置好了，现在统一提交并重启：

```bash
# 提交所有无线配置
uci commit wireless

# 一次性重启WiFi服务
wifi reload
```

> **✨ 配置技巧：** 这样做的好处是所有配置都集中在一起，只需要重启一次WiFi，速度快！

---

### WiFi 密码管理

#### 修改 WiFi 密码

如果想更改某个 WiFi 的密码，用这些命令：

**修改 2.4G WiFi 密码：**
```bash
uci set wireless.default_radio0.key='NewPassword123'
uci commit wireless
wifi reload
```

**修改 5G WiFi 密码：**
```bash
uci set wireless.default_radio1.key='NewPassword123'
uci commit wireless
wifi reload
```

> **⚠️ 注意：** 密码必须至少 8 个字符，不要设置太短的密码。

#### 查看当前 WiFi 密码

如果忘记了 WiFi 密码，可以用这些命令查询：

**查看 2.4G WiFi 密码：**
```bash
uci get wireless.default_radio0.key
```

**查看 5G WiFi 密码：**
```bash
uci get wireless.default_radio1.key
```

**查看所有 WiFi 配置（包括密码）：**
```bash
uci show wireless | grep key
```

这样就能看到所有 WiFi 接口的密码了。

#### 查看 WiFi SSID（WiFi 名称）

如果想查看当前的 WiFi 名称：

**查看 2.4G WiFi 名称：**
```bash
uci get wireless.default_radio0.ssid
```

**查看 5G WiFi 名称：**
```bash
uci get wireless.default_radio1.ssid
```

**查看所有 WiFi 配置（包括SSID）：**
```bash
uci show wireless | grep ssid
```

---

## 第四步：高级网络配置（可选）

### 配置 IPv6 中继模式

如果你的上游网络（上面的运营商）已经分配了IPv6地址，可以让OpenWRT把IPv6中继到LAN口。这样局域网内的设备就能直接获得公网IPv6地址了。如果不需要IPv6，这步可以跳过。

**设置IPv6中继的所有配置：**

```bash
# 设置 LAN 口的 IPv6 中继模式
uci set dhcp.lan.dhcpv6='relay'
uci set dhcp.lan.ra='relay'
uci set dhcp.lan.ndp='relay'

# 创建或修改 WAN6 接口的中继配置（以 wan6 为主接口）
uci set dhcp.wan6=dhcp
uci set dhcp.wan6.interface='wan6'
uci set dhcp.wan6.dhcpv6='relay'
uci set dhcp.wan6.ra='relay'
uci set dhcp.wan6.ndp='relay'
uci set dhcp.wan6.master='1'

# 提交所有 DHCP 配置
uci commit dhcp

# 重启 DHCP/IPv6 服务
/etc/init.d/odhcpd restart
```

### 统一应用所有网络配置

现在把所有配置统一应用。这一步会重启网络和DHCP服务，SSH可能会短暂断线：

```bash
# 重启网络服务（会断开SSH连接）
/etc/init.d/network restart

# 等待30秒左右再用新IP重新连接...
```

> **⏱️ 时间线：**
> 1. 执行 `network restart` 后，SSH 连接会断开
> 2. 等待 20-30 秒
> 3. 用新 IP 地址（比如 192.168.1.3）重新 SSH 连接
> 4. WiFi 应该已经可用了

---

## 第五步：性能优化

### 启用软件和硬件流量分载

想让路由跑得更快？启用流量分载可以大幅提升吞吐量。特别是在有线网络速度很高的情况下，这个功能特别有用。

**配置流量分载的所有设置：**

```bash
# 1. 启用软件流量分载（这是必要前提）
uci set firewall.@defaults[0].flow_offloading='1'

# 2. 启用硬件流量分载（如果CPU支持会更快）
uci set firewall.@defaults[0].flow_offloading_hw='1'

# 3. 提交防火墙配置
uci commit firewall

# 4. 一次性重启防火墙服务
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

> **💡 什么是流量分载？** 简单说就是把数据转发的工作从 CPU 卸载到网卡或其他硬件，这样 CPU 可以处理其他任务，网络速度自然更快。特别是对于千兆宽带很有帮助。

---

## 第六步：系统升级

系统升级（从一个版本升到另一个版本）和简单的软件包更新是两回事。OpenWRT 推荐使用官方的 ASU 服务来升级系统。

### 方式一：LuCI Attended Sysupgrade（推荐 - 最简单）

如果你安装了 LuCI（网页管理界面），这是最简单的升级方式。

1. **打开 LuCI 网页界面**
   ```
   http://192.168.1.3/
   ```

2. **找到升级菜单**
   - 系统 → 备份/升级
   - 或者 System → Backup/Flash Firmware

3. **点击"检查升级"按钮**
   - LuCI 会自动连接 ASU 服务器
   - 检查是否有新版本可用
   - 如果有，直接下载并升级

4. **等待升级完成**
   - 通常需要 3-5 分钟
   - 不要断电！
   - 升级完成后会自动重启

> **💡 优点：** 最安全、最方便。所有依赖关系由 ASU 服务器处理，不会导致变砖。

### 方式二：owut 工具（命令行）

如果你更喜欢命令行，可以用 `owut` 工具：

```bash
# 首先安装 owut
apk add owut

# 检查升级
owut check

# 如果有新版本，执行升级
owut upgrade
```

> **💡 owut 会自动处理所有依赖问题，和 LuCI 一样安全。**

### 方式三：OpenWrt Firmware Selector（在线生成）

如果想要完全自定义的固件（包含特定的软件包），可以用官方的 Firmware Selector：

1. **访问官方工具**
   ```
   https://firmware-selector.openwrt.org/
   ```

2. **选择你的设备**
   - 搜索你的路由器型号
   - 比如 "TP-Link Archer AX21"

3. **选择 OpenWRT 版本**
   - 建议选最新的稳定版（比如 25.12）

4. **可选：添加预装软件包**
   - 搜索并勾选你需要的软件包
   - 比如 luci, adblock, ddns 等
   - Firmware Selector 会自动解决依赖

5. **生成固件**
   - 点击"REQUEST BUILD"
   - 等待生成完成（通常几分钟）
   - 下载固件文件

6. **上传并升级**
   ```bash
   scp -O /path/to/firmware-sysupgrade.bin root@192.168.1.3:/tmp/
   ssh root@192.168.1.3 "sysupgrade -v /tmp/firmware-sysupgrade.bin"
   ```

> **💡 Firmware Selector 最灵活，特别适合要做定制化的用户。**

### 升级前的准备清单

无论用哪种方式升级，都要做好准备：

```bash
# 1. 备份当前配置（最重要！）
ssh root@192.168.1.3 "sysupgrade -b -" > ~/Downloads/backup-OpenWrt-$(date +%Y-%m-%d).tar.gz

# 2. 检查可用空间（要有足够空间放临时文件）
ssh root@192.168.1.3 "df -h"

# 3. 确保网络连接稳定
# 建议用有线连接，不要用 WiFi 升级
```

### 升级成功标志

升级完成后：

```bash
# 1. 路由器会自动重启（等待 3-5 分钟）
# 2. 用新 IP 重新连接
ssh root@192.168.1.3

# 3. 检查 OpenWRT 版本
cat /etc/os-release | grep VERSION

# 4. 如果能看到新的版本号，就说明升级成功了
```

### 如果升级失败怎么办？

如果升级出了问题（很少发生，特别是用 LuCI 或 owut 时）：

1. **设备还能启动：** 用备份文件恢复配置
   ```bash
   scp -O ~/Downloads/backup-OpenWrt-*.tar.gz root@192.168.1.3:/tmp/
   ssh root@192.168.1.3 "sysupgrade -r /tmp/backup-OpenWrt-*.tar.gz"
   ```

2. **设备无法启动：** 只能通过救砖工具（Uboot、TFTP等）恢复
   - 这种情况极其罕见（特别是用官方推荐方式时）
   - 每种设备的救砖方法都不同，建议查阅官方文档或社区论坛

> **✨ 最好的预防方式就是用 LuCI 或 owut，完全避免手动操作的风险。**

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

### ⚠️ 严格警告：禁止使用 `apk upgrade`！

**为什么官方禁止使用 `apk upgrade`？**

根据 OpenWRT 官方声明，当前版本的 apk 软件包存在以下问题：

```
❌ 多个软件包存在缺失的冲突声明
❌ 不完整的依赖关系
❌ 配置错误（hostapd-*, wpad-*, ucode-mod-* 等）
❌ 直接使用 apk upgrade 会导致设备变砖！
```

**受影响的软件包包括：**
- `hostapd-*` - WiFi 接入点软件
- `wpad-*` - WiFi 驱动套件  
- `ucode-mod-*` - 微码模块
- 各种核心库文件

**错误示例：**
```bash
# ❌ 不要这样做！会变砖！
apk upgrade

# ❌ 这样也不行
apk upgrade luci

# ❌ 即使指定版本也不安全
apk upgrade wpad-basic-mbedtls
```

**正确做法：系统升级（见第六步）**

想要升级软件包或 OpenWRT 版本，使用官方推荐的方式：

| 升级方式 | 安全性 | 便利性 | 推荐指数 |
|--------|--------|--------|--------|
| LuCI Attended Sysupgrade | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| owut 工具 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Firmware Selector | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 手动 apk upgrade | ❌❌❌ | ❌ | ❌❌❌ |

**记住：** 只用 `apk add` 安装新软件包，从不使用 `apk upgrade`！

**快速命令对比（从 opkg 到 apk）：**

| 功能 | opkg（旧） | apk（新） |
|-----|-----------|---------|
| 更新源列表 | `opkg update` | `apk update` |
| 搜索软件 | `opkg list \| grep name` | `apk search name` |
| 安装软件 | `opkg install pkg` | `apk add pkg` |
| 卸载软件 | `opkg remove pkg` | `apk del pkg` |
| ❌ 升级软件 | ~~`opkg upgrade`~~ | ~~`apk upgrade`~~ |
| 查看已装 | `opkg list-installed` | `apk info` |
| 查看详情 | `opkg info pkg` | `apk info -a pkg` |
| 清理缓存 | `opkg clean` | `apk cache clean` |
| ✅ **系统升级** | ~~`opkg upgrade`~~ | **使用 LuCI / owut / Firmware Selector** |

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

### 🔄 更新软件源（仅此而已！）

**更新软件源列表（仅用于查询新软件）：**
```bash
apk update
```

> **⚠️ 严重警告：禁止使用 `apk upgrade`！**
>
> **为什么不能用 `apk upgrade`？**
> 
> OpenWRT 官方已明确声明：**禁止使用 `apk upgrade`**，因为：
> - 多个软件包存在缺失的冲突声明
> - 不完整的依赖关系
> - 其他配置错误（如 `hostapd-*`, `wpad-*`, `ucode-mod-*` 等）
> - 直接使用 `apk upgrade` **会导致设备变砖**！
>
> **正确的升级方式见下面的"系统升级"章节。**

**清除缓存释放空间（安全的）：**
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

### 📶 WiFi 常用命令速查

**检查 WiFi 状态（是否正常运行）：**
```bash
iw dev
```

**查看已连接的 WiFi 客户端（各设备的信号强度）：**
```bash
iw dev wlan0 station dump
```

**重启所有 WiFi：**
```bash
wifi reload
```

**重启某个特定的射频（比如只重启 2.4G）：**
```bash
wifi reload radio0
```

**完全关闭所有 WiFi（临时）：**
```bash
wifi down
```

**重新打开 WiFi：**
```bash
wifi up
```

**查看 WiFi 功率和信道（检查发射功率设置）：**
```bash
iw phy phy0 info
```

---

## 🔐 维护和备份

### 操作前备份配置

做任何重要操作前，最好备份一下当前配置。遇到问题时可以快速恢复：

```bash
tar -czvf /tmp/backup.tar.gz /etc/config/
```

然后把备份文件下载到你的电脑上保存。

---

## 🔐 忘记 Root 密码的找回方法

如果不幸忘记了 root 密码，别急，有办法找回。下面介绍几种常见的恢复方法。

### 方法一：Failsafe Mode（推荐 - 最简单）

Failsafe Mode 是 OpenWRT 的安全模式，在这个模式下可以不需要密码重置配置。

**步骤：**

1. **进入 Failsafe Mode**
   - 开启路由器
   - 在启动过程中（通常前 3-5 秒），按住重置按钮（Reset）
   - 看到 LED 灯闪烁或变色（通常是绿色/红色交替闪烁），说明进入了 Failsafe Mode
   - 释放按钮

2. **连接到路由器**
   ```bash
   # 路由器会启用 TFTP 和 telnet 服务
   # Failsafe Mode 下 root 没有密码，可以直接登陆
   telnet 192.168.1.1
   ```

3. **重置密码**
   ```bash
   # 在 Failsafe Mode 中执行重置
   passwd root
   ```

4. **重启路由器**
   ```bash
   reboot
   ```

5. **用新密码登陆**
   ```bash
   ssh root@192.168.1.1
   ```

> **💡 提示：** 不同的路由器进入 Failsafe 的方法可能不同。有些是长按 Reset，有些是在启动时快速按多次。查阅你的设备文档。

### 方法二：Web 界面重置（如果还能访问 LuCI）

如果你还记得 WiFi 密码但忘记了 SSH 密码，可以试试通过 Web 界面：

1. **打开 LuCI 网页界面**
   ```
   http://192.168.1.1/
   ```

2. **系统 → 管理员密码**
   - 点击"设置管理员密码"
   - 输入新密码
   - 保存

3. **用新密码 SSH 登陆**
   ```bash
   ssh root@192.168.1.1
   ```

### 方法三：Serial Console（需要技术）

如果硬件支持，可以通过 Serial 串口连接重置密码。这需要：
- USB 转串口适配器
- 杜邦线
- 对硬件有基本了解

**步骤（仅供参考）：**

1. 打开路由器外壳，找到 Serial 接口（通常是 4 个孔）
2. 用 USB 串口线连接到电脑
3. 用串口终端工具（putty、minicom 等）连接
   ```bash
   # Linux/Mac
   minicom -D /dev/ttyUSB0 -b 115200
   
   # Windows 用 PuTTY
   ```
4. 重启路由器，进入 U-Boot 菜单
5. 在 U-Boot 中可以执行命令重置系统

> **⚠️ 警告：** Serial console 方式技术难度大，容易损坏硬件，不建议新手尝试。

### 方法四：刷机恢复

最终手段：重新刷固件。这会清除所有设置但能恢复访问权限。

1. **从官方网站下载固件**
   ```
   https://firmware.download.openwrt.org/
   ```

2. **进入 Failsafe Mode**（参考方法一）

3. **用 TFTP 上传固件**
   ```bash
   # Linux/Mac
   tftp 192.168.1.1
   > binary
   > put firmware-sysupgrade.bin
   > quit
   ```

4. **等待路由器重启**
   - 刷机通常需要 3-5 分钟
   - 完成后用默认密码登陆（通常是无密码或 "admin"）

> **⚠️ 注意：** 刷机会清除所有自定义配置，包括 WiFi 设置等。之后需要重新配置。

### 预防措施

**防止再忘记密码：**

1. **设置强密码并记录**
   ```bash
   # 建议用密码管理器（LastPass、1Password 等）保存
   passwd root
   ```

2. **定期备份配置**
   ```bash
   ssh root@192.168.1.1 "sysupgrade -b -" > backup-$(date +%Y-%m-%d).tar.gz
   ```

3. **在纸上记录密码并保存在安全地方**
   - 不要贴在路由器上
   - 不要存在不安全的地方

4. **启用 SSH 密钥认证（可选）**
   ```bash
   # 这样就不用记密码，用密钥登陆
   ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.1
   ```

---

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

**WiFi 连接不稳定或信号弱：**
- 检查是否有干扰（2.4G 更容易被干扰）
- 尝试修改信道号（2.4G 用 1、6、11；5G 用 36、149 等）
- 检查发射功率：`iw phy phy0 info | grep Power`
- 重启 WiFi 服务：`wifi reload`
- 查看 WiFi 日志：`logread | grep wireless`

**WiFi 无法启用或配置不生效：**
- 检查配置是否提交：`uci commit wireless`
- 重启 WiFi：`wifi reload`
- 查看无线配置：`uci show wireless`
- 查看是否有驱动问题：`dmesg | tail -20`

**忘记 WiFi 密码：**
- 查看 2.4G 密码：`uci get wireless.default_radio0.key`
- 查看 5G 密码：`uci get wireless.default_radio1.key`
- 查看所有密码：`uci show wireless | grep key`

**需要重置 WiFi 配置（恢复默认）：**
```bash
# 这会删除所有自定义WiFi配置，恢复到出厂状态
uci set wireless.default_radio0.disabled='1'
uci set wireless.default_radio1.disabled='1'
uci commit wireless
wifi reload
# 然后重新按上面的步骤配置WiFi
```

**系统升级失败：**
- 不要使用 `apk upgrade`！改用 LuCI Attended Sysupgrade 或 owut
- 如果升级卡住，可以按 reset 按钮进入恢复模式
- 恢复配置：`sysupgrade -r /tmp/backup-*.tar.gz`

**软件包冲突：**
- 只是 `apk add` 单个软件包时冲突，很难自动解决
- 更好的方式是用 Firmware Selector 预先配置好所有软件包
- 然后刷新整个固件，这样依赖都是正确的

---

## 总结

OK，到这里你的新路由就配置得差不多了。从基础的网络设置，到WiFi配置，再到性能优化，基本覆盖了日常使用的所有方面。

**快速回顾一下核心步骤：**
1. ✅ 设置 LAN IP、主机名和时区
2. ✅ 备份配置（以防万一）
3. ✅ 检查无线硬件并安装驱动
4. ✅ 配置2.4G和5G WiFi（包含信道和频宽）
5. ✅ （可选）配置IPv6中继
6. ✅ （推荐）启用流量分载
7. ✅ 系统升级（用官方推荐方式，不用 apk upgrade）

有什么问题欢迎留言讨论。祝你使用愉快！🎉

---

## 快速命令速查表

### WiFi 密码相关

| 操作 | 命令 |
|-----|------|
| 查看 2.4G WiFi 密码 | `uci get wireless.default_radio0.key` |
| 查看 5G WiFi 密码 | `uci get wireless.default_radio1.key` |
| 查看所有 WiFi 密码 | `uci show wireless \| grep key` |
| 修改 2.4G WiFi 密码 | `uci set wireless.default_radio0.key='NewPassword123'` |
| 修改 5G WiFi 密码 | `uci set wireless.default_radio1.key='NewPassword123'` |
| 应用密码更改 | `uci commit wireless && wifi reload` |

### WiFi SSID（名称）相关

| 操作 | 命令 |
|-----|------|
| 查看 2.4G WiFi 名称 | `uci get wireless.default_radio0.ssid` |
| 查看 5G WiFi 名称 | `uci get wireless.default_radio1.ssid` |
| 查看所有 WiFi 名称 | `uci show wireless \| grep ssid` |
| 修改 2.4G WiFi 名称 | `uci set wireless.default_radio0.ssid='NewName'` |
| 修改 5G WiFi 名称 | `uci set wireless.default_radio1.ssid='NewName'` |
| 应用名称更改 | `uci commit wireless && wifi reload` |

### WiFi 启用/禁用

| 操作 | 命令 |
|-----|------|
| 启用 2.4G WiFi | `uci set wireless.default_radio0.disabled='0' && uci commit wireless && wifi reload` |
| 启用 5G WiFi | `uci set wireless.default_radio1.disabled='0' && uci commit wireless && wifi reload` |
| 禁用 2.4G WiFi | `uci set wireless.default_radio0.disabled='1' && uci commit wireless && wifi reload` |
| 禁用 5G WiFi | `uci set wireless.default_radio1.disabled='1' && uci commit wireless && wifi reload` |
| 重启所有 WiFi | `wifi reload` |

### WiFi 状态检查

| 操作 | 命令 |
|-----|------|
| 查看所有无线配置 | `uci show wireless` |
| 查看 WiFi 设备状态 | `iw dev` |
| 查看已连接客户端 | `iw dev wlan0 station dump` |
| 查看 WiFi 日志 | `logread \| grep wireless` |
| 查看物理层信息 | `iw phy phy0 info` |

### 频宽设置速查

| WiFi 标准 | 80MHz | 160MHz | 320MHz |
|---------|-------|--------|--------|
| WiFi 5 (VHT) | `VHT80` | `VHT160` | ❌ 不支持 |
| WiFi 6 (HE) | `HE80` | `HE160` | ❌ 不支持 |
| WiFi 7 (EHT) | `EHT80` | `EHT160` | `EHT320` |

**设置命令示例：**
```bash
# WiFi 5
uci set wireless.radio1.htmode='VHT80'

# WiFi 6
uci set wireless.radio1.htmode='HE80'

# WiFi 7
uci set wireless.radio1.htmode='EHT160'

# 应用配置
uci commit wireless && wifi reload
```

### Root 密码相关

| 操作 | 命令 |
|-----|------|
| 设置 root 密码 | `passwd` |
| 查看当前用户 | `whoami` |
| 修改用户信息 | `usermod -c '名称' root` |

**忘记 root 密码的恢复方式：**
1. ✅ **Failsafe Mode**（最简单）- 按 Reset 进入安全模式
2. ✅ **Web 界面**（如果能访问 LuCI）- 在网页上重置密码
3. ⚡ **Serial Console**（技术难度大）- 用串口工具
4. 🔧 **刷机恢复**（最终手段）- 重新刷固件
