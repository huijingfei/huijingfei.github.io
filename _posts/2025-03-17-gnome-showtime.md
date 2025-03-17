---
layout: post
title:  Showtime： 适用于 GNOME 的现代视频播放器（附安装指南）
subtitle: Showtime - Gnome 桌面 Totem 视频播放器的替代品
tags:
    - Linux
---

当前默认的 Totem（也称为 “GNOME Videos”）视频播放器自 2022 年以来就没有进行过积极的维护，并且仍在使用 GTK3，它将被现代的 Showtime 视频播放器所取代。

它第一次引起人们的注意是在它加入 GNOME 孵化器计划时，该计划建议一个应用程序成为 GNOME 核心应用程序之前，它需要满足特定的标准，并与 GNOME 贡献者合作进一步完善。

尽管有多种 Linux 下的开源视频播放器，如 VLC、Celluloid、MPV Player、SMPlayer 等，Showtime Video Player 的与众不同之处何在？让我们一探究竟...

## 1. Showtime： 适用于 GNOME 的现代视频播放器

![Showtime： 适用于 GNOME 的现代视频播放器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/showtime/showtime-video-player.webp)

Showtime 使用 Python 编程语言编写，其现代用户界面采用 GTK4 和 Libadwaita，并与最新的 GNOME DE 以及用于音频/视频播放功能的 GStreamer 框架完美集成。

其目标是为用户提供无干扰的观看体验，您在观看喜爱的视频时也会感受到这一点。视频播放器将是无边框的，左上角有一个切换全屏的选项，右上角还有一个打开下拉菜单的选项，提供截图和键盘快捷键。

截图快捷键窗口位于播放窗口之上，让你可以通过快捷键控制音量、视频向前/向后播放 10 秒、播放/暂停，并选择齿轮来调整播放速度（0.5x、1.0x、1.25x、1.5x、2.0x）、语言和字幕。

![Showtime 快捷键](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/showtime/showtime-keyboard-shortcuts.webp)

还可以使用快捷键打开快捷键窗口来调整控制：导航到 “菜单”，点击 “键盘快捷键”，或使用 Ctrl+? 快捷键。

它还能记住视频的位置，因此如果你关闭并重新启动它，就可以选择恢复或从头开始。

总的来说，它是一款简约的视频播放器，尽管缺少一些功能，但可能会在即将到来的更新中加入，它可能会立即成为许多 Linux 用户的最爱。

不过，不要指望它能提供直接串流或播放列表管理等高级功能，因为它只专注于提供简单的视频播放体验。

## 2. 在 Debian/Ubuntu 上安装 Showtime 视频播放器

Showtime 尚处于早期阶段，一旦成熟，可能会在即将发布的 GNOME 中引入。如果你想现在就试用它，可以在安装了 Flatpak 软件包管理器的 Linux 发行版上安装 Showtime Flatpak 软件包。

例如，Ubuntu 没有自带 Flatpak 软件包管理器，所以你可以打开终端，执行以下命令来安装它。
```
$ sudo apt install flatpak
```
然后，运行此命令将 Flathub 官方软件源添加到系统中：
```
$ flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```
最后，运行此命令安装 Showtime Flatpak 软件包：
```
$ flatpak install flathub org.gnome.Showtime
```
然后，你可以从应用程序菜单中找到并启动它，或者运行以下命令直接从终端启动它：
```
$ flatpak run org.gnome.Showtime
```
首次启动时，它会要求您从文件浏览器中打开一个媒体文件，然后您就可以在 Showtime 中选择并播放视频了。

![在 Showtime 中选择并播放视频](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/showtime/showtime-opening-video.webp)

## 3. 从 Debian/Ubuntu 卸载 Showtime 视频播放器

要从系统中卸载 Showtime，可以运行以下命令：
```
$ flatpak uninstall --delete-data org.gnome.Showtime
```
之后，如果你想删除 Flatpak，请运行此命令：
```
$ sudo apt remove --purge flatpak
```
本文到此结束。如果您想深入了解，可以访问其[网站](https://apps.gnome.org/Showtime/)或跟踪其在 [GitLab](https://gitlab.gnome.org/GNOME/Incubator/showtime) 上的发布情况。

[告别弹窗广告，360 免费杀毒安全卫士替代品。](https://tigress.cc/2024/08/03/free-antivirus/)
