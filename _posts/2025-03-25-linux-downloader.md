---
layout: post
title:  最流行的 Linux 的最佳下载管理器
subtitle: 提升下载效率：适用于 Linux 的优秀下载工具
tags:
    - Linux
---
![Linux 最佳下载工具](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/download%20manager.webp)

Windows 上的下载管理器是每个 Linux 新手都非常想念的工具之一，像 Internet Download Manager、Download Accelerator Plus 和 Free Download Manager 这样的程序非常受欢迎，但这些工具在 Linux 或类 Unix 系统下是不可用的。

不过，不用担心，您会找到几款适用于 Linux 的替代下载管理器，它们可以帮助您在 Linux 桌面系统上管理和加速文件下载。

### 最佳 Linux 下载管理器

在本文中，我们将讨论适用于 Linux 发行版的最佳下载管理器，这些下载管理器包括：

*   XDM
*   FireDM
*   DownThemAll
*   uGet
*   FlareGet
*   Persepolis
*   MultiGet
*   KGet
*   Pyload
*   Motrix

#### 1. XDM – Xtreme Download Manager

正如其开发者所说，“[XDM](https://xtremedownloadmanager.com/) 凭借其智能动态文件分段技术，可以将下载速度提高高达 5 倍。” 当然，它是 Linux 桌面系统上最好的下载管理器之一，具有加速下载、恢复下载和浏览器集成功能。

XDM 可以完美地集成到最流行的网络浏览器中，如 Chrome、Firefox、Opera、Vivaldi 和 Chromium。它还可以捕获浏览器中的下载链接并自动将其添加到下载队列中。

它还带有一个内置的视频转换器，允许您将下载的视频转换为多种格式，以便以后在您的手机或电视上观看（支持 100 多种设备）。

**XDM 的特性：**

*   下载任何流媒体视频。
*   支持稍后暂停/恢复已下载的文件。
*   每个下载的文件支持 32 个分段，这使得下载过程更快。
*   支持从著名的网站（如 Youtube、MetaCafe、Vimeo 等）捕获多种格式（如 WebM、MP4、AVI 等）的多媒体文件。
*   支持多种协议，如 HTTP、HTTPS 和 FTP。
*   除了 Windows 支持外，还支持大多数 Linux 发行版。
*   支持快速从剪贴板获取 URL。
*   为大多数网络浏览器（如 Firefox、Chrome/Chromium 和 Safari）提供了集成扩展。
*   一个非常漂亮的 GUI，类似于 Internet Download Manager。
*   许多其他特性。

要在 Ubuntu 或其他 Linux 发行版上安装最新稳定版本的 Xtreme Download Manager，请使用 wget 命令下载 [XDM Linux 安装程序](https://xtremedownloadmanager.com/#downloads) tar 文件，将其解压缩并运行安装脚本进行安装。
```
$ wget https://github.com/subhra74/xdm/releases/download/7.2.11/xdm-setup-7.2.11.tar.xz
$ tar -xvf xdm-setup-7.2.11.tar.xz
$ sudo sh install.sh
```
![XDM](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/XDM.jpg)

#### 2. FireDM [已停止开发]

[FireDM](https://github.com/firedm/FireDM) 是一款开源互联网下载管理器，使用 Python 开发，基于“LibCurl”和“youtube_dl”工具。它具有多连接、高速机制，并可以从 Youtube 和其他各种流媒体网站下载文件和视频。

**FireDM 的特性：**

✨多连接下载（多线程）。

✨自动文件分段和死链刷新。

✨支持 Youtube 和许多流媒体网站。

✨下载整个视频播放列表或选定的视频。

✨在下载时观看带有字幕的视频。

FireDM 可以使用 Pip 包管理器在 Ubuntu 和其他 Ubuntu 衍生版上安装。
```
$ sudo apt install python3-pip
$ sudo apt install ffmpeg libcurl4-openssl-dev libssl-dev python3-pip python3-pil python3-pil.imagetk python3-tk python3-dbus
$ sudo apt install fonts-symbola fonts-linuxlibertine fonts-inconsolata fonts-emojione
$ python3 -m pip install firedm --user --upgrade --no-cache
```
![FireDM](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/FireDM.png)

#### 3. DownThemAll

与列表中的其他程序不同，[DownThemAll](https://addons.mozilla.org/en-GB/firefox/addon/downthemall/) 实际上不是一个独立的程序，而是一个 Firefox 插件，但它在下载多个文件方面非常出色，并且在选择要下载的链接方面非常有效，并且会记住您上次的决定，以便您可以将更多下载加入队列。

正如我所说，它是一个浏览器插件，可以安装在所有可用的平台（如 Windows、Linux、BSD、Mac OS X 等）上。

**DownThemAll 的特性：**

✨正如开发者所说：“DownThemAll 可以将您的下载速度提高高达 400%”。

✨支持下载网页上的所有图像和链接。

✨支持同时下载多个文件，并支持为每个文件设置下载速度。

✨支持从 Firefox 浏览器自动抓取下载链接。

✨能够自定义许多设置以实现 Firefox 和 DownThemAll 之间的集成。

✨能够在下载后自动检查 SHA1 和 MD5 哈希值。

✨还有很多。

![DownThemAll](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/DownThemAll.png)

DownThemAll 插件也作为 [Chrome 扩展程序](https://chrome.google.com/webstore/detail/downthemall/nljkibfhlpcnanjgbnlnbjecgicbjkge?hl=en)提供。

#### 4. uGet 下载管理器

[uGet](https://ugetdm.com/) 是最著名的下载管理器之一，它是一款非常优秀的下载管理器，使用 GTK+ 库构建，适用于 Windows 和 Linux。

**uGet 的特性：**

✨支持同时下载多个文件，并能够为所有文件或每个文件设置最大下载速度。

✨支持下载 Torrent 和 Metalink 文件。

✨支持从匿名 FTP 或使用用户名和密码下载文件。

✨支持从本地文件抓取 URL 列表并全部下载。

✨支持通过命令行界面下载文件。

✨每个下载的文件支持 16 个分段。

✨能够自动从剪贴板抓取 URL。

✨能够与 Firefox 的 FlashGot 附加组件集成。

✨许多其他特性。

uGet 可以从大多数 Linux 发行版的官方存储库下载，包括 Ubuntu、Debian、Linux Mint 和 elementary OS。
```
$ sudo apt-get update
$ sudo apt-get install uget
```
在基于 RHEL 的系统中，您可以使用 yum 或 dnf 命令轻松地从官方存储库安装 uGet。
```
$ sudo dnf install uget
或者
$ sudo yum install uget
```
在 Arch 和 Manjaro Linux 上使用以下命令安装 uget：
```
$ sudo pacman -S uget
```
在 OpenSuse 上使用以下命令安装 uget：
```
$ sudo zypper install uget
```
![uGet](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/uGet.png)

#### 5. FlareGet 下载管理器

[FlareGet](https://flareget.com/) 是另一款下载管理器，它有两个版本，一个是免费版，另一个是付费版，但它们都是闭源的，并且可以在 Windows 和 Linux 上运行。

**FlareGet 的特性：**

✨多线程支持。

✨每个文件支持最多 4 个分段（免费版，付费版最多可达 32 个）。

✨支持大多数 Linux 发行版，并支持与大多数网络浏览器集成。

✨支持 HTTP、HTTPS 和 FTP 协议。

✨支持自动从剪贴板抓取 URL。

✨支持自动从 Youtube 抓取视频。

✨GUI 提供 18 种不同的语言。

✨许多其他特性。

![FlareGet](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/FlareGet.png)

要在 Linux 发行版中安装 FlareGet，请下载适合您的 Linux 发行版架构的 [FlareGet 二进制包](https://flareget.com/download.html)，并使用默认的包管理器进行安装。

#### 6. Persepolis 下载管理器

[Persepolis](https://persepolisdm.github.io/) 是一款免费、开源且跨平台的下载管理器，也是 aria2（一个命令行下载管理器）的图形化界面。它使用 Python 语言编写，专为 GNU/Linux 发行版、BSDs、macOS 和 Microsoft Windows 开发。

✨多段下载

✨计划下载

✨下载队列

✨搜索和下载来自 Youtube、Vimeo、DailyMotion 等网站的视频。

要在 Debian/Ubuntu 和其他 Debian 发行版上安装 Persepolis 下载管理器，请使用以下命令。
```
$ sudo apt update
$ sudo apt install persepolis
```
在 Arch 和其他基于 Arch 的 Linux 发行版上。
```
$ sudo yaourt -S persepolis
```
在 Fedora 和其他基于 Fedora 的 Linux 发行版上。
```
$ sudo dnf install persepolis
```
对于 openSUSE Tumbleweed，以 root 用户身份运行以下命令：
```
# zypper addrepo https://download.opensuse.org/repositories/home:hayyan71/openSUSE_Tumbleweed/home:hayyan71.repo
# zypper refresh
# zypper install persepolis
```
![Persepolis](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/Persepolis.png)

#### 7. MultiGet [已停止开发]

[MultiGet](http://multiget.sourceforge.net/) 是另一款免费、开源且易于使用的图形界面（基于 wxWidgets）文件下载管理器，适用于 Linux，使用 C++ 编程语言编写。

✨支持 HTTP 和 FTP 协议

✨支持多任务多线程

✨支持恢复文件下载

✨剪贴板监视 - 复制 URL 时提示下载。

✨还支持 SOCKS 4、4a、5 代理，FTP 代理，HTTP 代理

要在 Debian/Ubuntu 和其他 Debian 发行版上安装 MultiGet 下载管理器，请使用以下命令。
```
$ sudo apt-get install multiget
```
![MultiGet](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/MultiGet.jpg)

#### 8. KGet 下载管理器

[KGet](https://kde.org/applications/internet/kget/) 是一款功能强大且用户友好的 Linux 文件下载管理器，支持 FTP 和 HTTP(S) 协议，暂停和恢复文件下载，支持包含多个下载 URL 的 Metalink 等功能。

要在 Debian/Ubuntu 和其他 Debian 发行版上安装 KGet 下载管理器，请使用以下命令。
```
$ sudo apt-get install kget
```
在 Fedora 和基于 Fedora 的发行版上。
```
$ sudo dnf install kget
```
在 Arch 和其他基于 Arch 的 Linux 发行版上。
```
$ sudo yaourt -S kget
```
![KGet](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/KGet.png)

#### 9. PyLoad 下载管理器

[PyLoad](https://pyload.net/) 是一款免费开源的 Linux 文件下载管理器，使用 Python 编程语言编写，旨在极其轻量级、易于扩展且完全可通过 Web 管理。

要安装 PyLoad 下载管理器，您必须在系统上安装 [Pip 包管理器](https://www.tecmint.com/install-pip-in-linux/)，然后才能按如下所示进行安装。
```
$ pip install pyload-ng
```
![PyLoad](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/PyLoad.png)

#### 10. Motrix

[Motrix](https://github.com/agalwood/Motrix) 是一款开源、功能齐全、简洁易用的下载管理器，支持通过 HTTP、FTP、BitTorrent、Magnet 等方式下载文件，最多可同时进行 10 个下载任务。

您可以下载 Motrix AppImage 并在所有 Linux 发行版上直接运行，或者使用 Snap 安装 Motrix，更多 Linux 安装包格式请参见 [GitHub/release](https://github.com/agalwood/Motrix/releases)。

![Motrix](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/download%20manager/Motrix.png)

这些是 Linux 上可用的一些最佳下载管理器。您以前尝试过其中任何一个吗？使用体验如何？您知道任何其他应该添加到此列表中的下载管理器吗？请在评论中与我们分享。


