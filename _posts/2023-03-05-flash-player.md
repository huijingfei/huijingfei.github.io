---
layout: post
title: 2023 年在 Windows/macOS/Linux 启用干净无广告的 Adobe Flash Player 的方法
subtitle: Adobe Flash Player 永久去广告去限制特别版下载
tags:
    - Windows
---
## 介绍 
![Flash Player](https://github.com/huijingfei/Blog_Gitalk/raw/main/Images/QQ%20farm.webp)

Adobe 在 2020 年彻底终止了对 Flash Player 的支持, 随后各大主流浏览器（Chrome, Firefox, Safari 等）也开始纷纷移除 Flash Player 的相关代码。目前在这些浏览器的最新版本中，即使你的电脑上安装了 Flash Player 也无法正常使用它。

尽管 Adobe 停止了对 Flash Player 的支持，但在某些特定场景下，用户和企业可能仍需要使用 Flash，这时他们可能需要采取额外的措施，如使用仍支持 Flash 的浏览器插件或寻找替代技术解决方案。然而，考虑到 Flash 的安全风险和浏览器的逐渐淘汰，最推荐的做法是转向现代 Web 标准，以确保内容的长期可访问性和安全性。

所以 Flash Player 的缺失也给部分用户带来了不便（比如我这种想要玩经典页游的人），本文将会介绍在三大主流桌面平台 Windows/macOS/Linux 安装纯净版 Flash Player 的方法。

So how to enable Adobe flash player in Firefox and Chromium?

## 现有的解决方案及其不足之处

**国产浏览器**

为了迎合部分用户的需求，一些国产浏览器保留了对 Flash Player 的支持。

但是这些国产浏览器（百度、360、QQ 等），明面山推送各种广告，背地里窃取隐私，而且对于访问给国外网站不太友好。

我的建议是，不要使用任何国产浏览器。如果你的电脑上安装了什么国产浏览器，你应该立马卸载掉它们，因为即使你不启动它们，他们也会在后台窃取隐私。

你的首选应该是开源浏览器（例如 Firefox, Chromium），其次是国际化的闭源浏览器（例如 Safari, Chrome）。

## 本文所使用的所有浏览器都是开源浏览器。

**中国特供版 Flash Player**

Flash Player 由美国的 [Adobe](https://www.adobe.com/) 公司开发，由于国内的网络环境比较特殊，时至今日依然有部分网站死守 Flash Player 绝不松手（而你还往往拿它们没办法），于是 Adobe 在 2020 年宣布停止对 Flash Player 的支持后又将它交给了国内的重橙网络代理，使其依然能够在大陆地区使用。

中国特供版 Flash，主要指的是 Adobe 与重橙网络合作在国内发行的版本，存在以下几个显著风险：

1. 隐私收集：有报道指出，该版本的用户协议中明确表示会收集用户隐私信息，包括但不限于用户计算机的基本信息、使用习惯等，这引发了用户对个人隐私泄露的担忧。

2. 安全漏洞：相较于国际版，中国特供版 Flash 被曝存在严重的安全问题，可能容易遭受黑客攻击，安装广告软件或恶意代码，给用户的电脑系统安全带来威胁。

3. 广告和弹窗：用户反映，特供版 Flash 在运行过程中会推送广告和弹窗，这些额外的功能不仅干扰正常使用，还可能成为潜在的安全隐患点。

4. 服务依赖：安装中国特供版 Flash 后，会伴随一个名为 FlashHelperService 的服务，该服务与 Flash 紧密绑定，如果服务停止，Flash 可能无法正常工作。这限制了用户对软件的控制权。

5. 规避措施难度：即便用户尝试通过安装国际版 Flash 来避免上述问题，但由于一些技术限制和策略，国内用户可能面临安装和使用的障碍。

因此，直接安装中国特供版 Flash Player 是一个极其冒险的行为，请参考本文教程安装使用去广告版本的 Flash Player。

**开源 Flash Player 替代品**

Flash Player 目前有两个开源解决方案：

[Ruffle](https://ruffle.rs/): Rust 写的 Flash Player 替代品，可以正常播放视频，但是对 Action Script 3 的支持还不完善，值得注意的一点是[Ruffle](https://ruffle.rs/)的开发非常活跃，后续可以关注下，[Ruffle](https://ruffle.rs/)作为插件可以在最新版 Chrome 和 Firefox 上使用。

[Lightspark](http://lightspark.github.io/)：C/C++ 写的 Flash Player 替代品，同样完成度不高，播放视频足够了，但打游戏还差点意思。

### 使用低版本 Firefox 和 Chrome

虽然最新版的 Chrome 和 Firefox 移除了 Flash Player 的相关代码，但是较低的版本中依然支持Flash，这里只作为一个可选项但是并不推荐（本文推荐使用 Basilisk/Pale Moon：[Basilisk web browser](https://www.basilisk-browser.org/) / [Pale Moon官方下载地址](https://www.palemoon.org/download.shtml)）。

[archive.org](https://archive.org/) 上面保留了支持 Flash Player 的最后一个版本的 Firefox 和 Chrome，有需要的可以从这里下载：[下载链接](https://archive.org/download/Firefox_Chrome_Adobe_Flash)

该网站在中国大陆地区无法正常访问，需要翻墙。

下载的版本是便携版，无需安装，解压后双击 “FirefoxPortable.exe” 即可使用。

这个便携版内置了 Flash，所以你也无需安装 Flash Player，直接访问你想访问的网站即可。

### 在 Windows 上使用 Pale Moon 和去广告版 Flash Player 独立运行组件

有人在 GitLab 上开发了一个项目 [Clean Flash Player](https://gitlab.com/cleanflash/installer)，它在中国特供版 Flash Player 的基础上进行了魔改，移除了各种限制，删除了和收集隐私与推送广告相关的文件。

有需要的可以从 [Release Page](https://gitlab.com/cleanflash/installer/-/releases) 下载最新版。

低版本的 Firefox 虽然能用 Flash，但是由于长期未更新，它也同样存在各种安全漏洞和 Bug。 Pale Moon 是一个基于 Firefox 开发的浏览器，和 Firefox 一样免费开源无广告。

**Pale Moon is an Open Source, Goanna-based web browser focused on efficiency and customization. Make sure to get the most out of your browser!**

Goanna fork 自 Gecko，Goanna 是 [Pale Moon](https://www.palemoon.org/), [Basilisk web browser](https://www.basilisk-browser.org/) 浏览器的排版引擎。

[Pale Moon](https://www.palemoon.org/download.shtml)和 [Basilisk web browser](https://www.basilisk-browser.org/) 一样开源跨平台支持 Windows、Mac、Linux，并且支持 Fire IE 插件；[Basilisk web browser](https://www.basilisk-browser.org/) 支持 flash 但是已经不支持 Fire IE。

[Pale Moon官方下载地址](https://www.palemoon.org/download.shtml)

Pale Moon 没有内置 Flash Player，所以安装完后还需要安装 [Flash Player](https://gitlab.com/cleanflash/installer/-/releases) 独立运行组件。

### 在 macOS 上安装 Pale Moon 和 Flash 去广告版

首先下载并安装 Pale Moon：[Pale Moon官方下载地址](https://www.palemoon.org/download.shtml)

然后下载 [darktohka/clean-flash-builds](https://github.com/darktohka/clean-flash-builds)，这是一个开源构建的纯净版 Flash Player，下载的时候选最新版 Mac NPAPI 版本。

下载完成之后解压，然后打开访达，按下 Command+Shift+G ，输入 “~/Library/Internet Plug-Ins/” 并回车。

把解压后得到的 “FlashPlayer-10.6.plugin” 和 “flashplayer.xpt” 复制到这个文件夹下。

### 在 Linux 上安装 Pale Moon 和 Flash 去广告版

首先安装 Pale Moon: [官方下载地址](https://www.palemoon.org/download.shtml)

Debian 11 稳定版用户可以使用以下源安装[Pale Moon](https://www.palemoon.org/download.shtml)
```
echo 'deb http://download.opensuse.org/repositories/home:/stevenpusser:/palemoon-mx_linux/Debian_11/ /' | sudo tee /etc/apt/sources.list.d/home:stevenpusser:palemoon-mx_linux.list
curl -fsSL https://download.opensuse.org/repositories/home:stevenpusser:palemoon-mx_linux/Debian_11/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_stevenpusser_palemoon-mx_linux.gpg > /dev/null
sudo apt update
sudo apt install palemoon
```
Debian 12 稳定版用户可以使用以下源安装[Pale Moon](https://www.palemoon.org/download.shtml) 
```
echo 'deb http://download.opensuse.org/repositories/home:/stevenpusser:/palemoon-mx_linux/Debian_12/ /' | sudo tee /etc/apt/sources.list.d/home:stevenpusser:palemoon-mx_linux.list
curl -fsSL https://download.opensuse.org/repositories/home:stevenpusser:palemoon-mx_linux/Debian_12/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/home_stevenpusser_palemoon-mx_linux.gpg > /dev/null
sudo apt update
sudo apt install palemoon
```
```   
sudo apt install palemoon
```
Debian 和 Ubuntu 其他版本用户可以在 [software.opensuse.org](https://software.opensuse.org/download.html?project=home%3Astevenpusser%3Apalemoon-GTK3&package=palemoon) 添加对应的源。

接下来下载 [darktohka/clean-flash-builds](https://github.com/darktohka/clean-flash-builds)，选 Linux 版 64 位 NPAPI：[下载链接](https://github.com/darktohka/clean-flash-builds/releases/tag/v1.7)

把解压后得到的 libflashplayer.so 放到 ~/.moonchild productions/pale moon/yourown.default/plugins 目录下。

### 推荐使用 [Basilisk web browser](https://www.basilisk-browser.org/)

[Basilisk web browser](https://www.basilisk-browser.org/) 最初由 Palemoon 开发，外观更加现代化，现在由另外一个开发团队独立开发，使用方法同 Palemoon。

本文转自：[sainnhe's blog](https://www.sainnhe.dev/post/enable-flash-player-in-2022/) 并做了部分修改。推荐博文 [Pale Moon 浏览器安装使用(Fire IE)解雇 IE 插件，实现双核浏览器功能](https://tigress.cc/2023/01/30/Pale-Moon/)

![Flash Player](https://github.com/huijingfei/Blog_Gitalk/raw/main/Images/Qzone%20farm.webp)
