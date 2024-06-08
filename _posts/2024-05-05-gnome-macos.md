---
layout: post
title: ﻿让你的 Gnome Desktop 桌面看起来像 Mac OS 一样
subtitle: linux 桌面美化，使 Debian/Ubuntu/Fedora 等 Linux 发行版变成 MacOS 风格
tags:
    - Gnome
    - Linux 桌面美化
    - Mac OS
    - Gnome Extensions
    - Gnome Look
    - Debian
    - Ubuntu
    - Fedora
---
## 安装 Timeshift

根据不同的发行版，从软件源安装 Timeshift 并创建快照备份：

    apt install timeshift
      
    dnf install timeshift

## 安装 gnome-tweaks git

    dnf install gnome-tweaks git
      
    apt install gnome-tweaks git

## 安装 flatpak （可选，主要是用来安装 dynamicwallpaper）

    dnf install flatpak
      
    apt install flatpak
      
## 配置 Flathub

    flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
      
## 安装 extensionmanager dynamicwallpaper 

    flatpak install extensionmanager dynamicwallpaper
      
部分发行版软件源包含以上软件，个人使用的是 Debian 12，如果不安装 flatpak，可以在不安装 dynamicwallpaper 包的情况下安装桌面背景，方法见本文最后；以上可根据发行版自行选择。

## 下载图标主题

[WhiteSur icon theme](https://www.gnome-look.org/s/Gnome/p/1405756/)

[Cupertino iCons](https://www.pling.com/p/1102582/)

在 Home 路径下新建 .icons 文件夹，把下载好的图标包移动到 .icons 文件夹内，此步骤为可选项，亦可选择文末的方法安装图标主题。

## 下载安装 gtk 主题

[WhiteSur-gtk-theme](https://github.com/vinceliuice/WhiteSur-gtk-theme)

    git clone https://github.com/vinceliuice/WhiteSur-gtk-theme.git
      
    cd WhiteSur-gtk-theme/
      
    ./install.sh -t all -s 220 -i apple -t blue -l --round --darker --normal --silent-mode (也可以不配置任何参数，直接使用 ./install.sh 命令安装默认配置)
      
    sudo ./tweaks.sh -g        (GDM 主题)
      
    sudo ./tweaks.sh -f         (Firefox 主题)
      
更多用法可以使用以下命令查看帮助
      
    ./install.sh --help

## 打开 Extension Manager 安装插件
      
个人使用的是基于 Debian 的发行版 [Spiral Linux](https://spirallinux.github.io/)，这个发行版内置了大部分插件。

安装 User Themes、Dash to Dock、Dash to Dock Animator(Dash2Dock Animated)、Compiz alike magic lamp effect、Quick Settings Tweaker、Blur my Shell、Gnome 4x UI Improvements、gnome-shell-extension-appindicator gnome-shell-extension-arc-menu 等插件。其中 Dash to Dock 与 Dash2Dock Animated 选择启用一个即可，两种风格不同，互相冲突。

![Extension Manager](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/img/gnome%20extensions.webp)

打开 Dash to Dock 设置选项，点击 Behavior 选项卡，Click action 选择 minimize or show previews；

## 打开 Tweaks 设置主题外观

在 Appearance 选项卡中依次更改 Icons，Shell，Lagacy Applications 的主题；在 Window Titlebars 选项卡中更改按钮选项；在 Window 选项卡中启用 Center New Windows。

![Tweaks](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/img/gnome%20tweaks.webp)

## 配置背景图

在谷歌中搜索 Mac OS wallpaper 可以找到很多不同版本的背景，这里以 [9 Macos Ventura Wallpapers](https://hdqwalls.com/macos-ventura-wallpapers) 为例，可以下载不同分辨率的背景图。千万不要在百度或者用中文搜索，这样搜到的大多是国内站而且限制很多，绝大部分国外的网站都可以没有限制的下载高分辨率背景图。

打开 Dynamic Wallpaper，命名 Ventura，分别选择浅色背景和深色背景图；最后点击 Create，当看到提示 New dynamic wallpaper created 就可以了。

![Dynamic Wallpaper](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/img/dynamic%20wallpaper.webp)

最后打开 Gnome 的设置 App，打开 Appearance 外观选项卡，选择刚刚创建动态背景图即可。
      
### 本文参考了以下 YouTube 视频并做了部分修改

<iframe width="560" height="315" src="https://www.youtube.com/embed/pBa1uAIA32w?si=c1nobn5IPed8tnQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 图标包和背景图以及鼠标主题安装（可选）

上文提到了下载图标包到 .icons 文件夹的方法，以及使用 flatpak 安装 dynamic wallpaper 来设置桌面背景；对于不愿意使用 flatpak 或者 snap 包的可以采用以下方法：

[WhiteSur-icon-theme ](https://github.com/vinceliuice/WhiteSur-icon-theme)

[WhiteSur-wallpapers ](https://github.com/vinceliuice/WhiteSur-wallpapers)

[WhiteSur-cursors](https://github.com/vinceliuice/WhiteSur-cursors)

[Grub2themes](https://github.com/vinceliuice/grub2-themes)

安装方法同 gtk 主题的安装，其中背景图分为 whitesur/monterey/ventura 几个主题，默认为安装所有主题背景。

## 钉钉微信 QQ 图标

下载我制作好的图标 [QQ 微信钉钉图标](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/icon.zip)，图标均提取自 WhiteSur 图标包，这几个图标需要单独设置。

分别复制到如下路径：

    cp wechat.png /opt/wechat-beta/icons/

    cp qq.png /usr/share/icons/hicolor/512x512/apps/

    cp logo.ico /opt/apps/com.alibabainc.dingtalk/files/

### Debian/Ubuntu 如何安装 WeChat for Linux 微信 Linux 原生版本
      
其中微信使用的是绕过登录检测的 deb 安装包：[wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux)

另推荐微信客户端 AppImage 版：[WeChat-AppImage ](https://github.com/zydou/WeChat-AppImage)

微信微信客户端 AppImage 版本较新，同时拥有 x64 和 aarch64 版；AppImage 版需要自己设置绕登录检测。最简单的使用较新版本的方法，先安装 [wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux).deb，然后下载 [WeChat-AppImage ](https://github.com/zydou/WeChat-AppImage) 版的 .tar.xz 压缩包，解压后更改文件夹名称为 wechat-beta 然后复制整个目录到 [wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux).deb 的安装目录。

    cp -r wechat-beta /opt/

这样做是为了通过安装 deb 包在系统中配置好绕登录检测，然后替换微信安装后的文件达到手动更新版本的目的。
      
Welcome to our [website](https://blog.tigress.cc/)
