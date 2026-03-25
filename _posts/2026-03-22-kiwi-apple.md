---
layout: post
title: WhiteSur-gtk-theme 替代品
subtitle: 把你的 Gnome Desktop 桌面变成 Mac OS 风格
tags:
    - Linux
---

### Kiwi is not Apple

![Kiwi is not Apple screenshot](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/Kiwi%20is%20not%20Apple%20screenshot.avif)

**Kiwi is not Apple** 是一款旨在模拟多种 macOS 特性的 [GNOME Shell 扩展](https://extensions.gnome.org/extension/8276/kiwi-is-not-apple/)。该扩展提供了一系列旨在提升使用体验的小功能，例如将窗口移动到新工作区、在快速菜单中添加用户名、自动聚焦新启动的窗口等。

#### 功能特性

*   **底层样式重塑**：对 Gnome Shell 和 GTK/Adwaita 应用进行极简的样式微调，在保持最大兼容性的同时优化视觉效果。包括缩减菜单项间距、菜单项强调色、统一顶部面板状态图标的间距等。
*   **窗口控制按钮样式**：设置 macOS 风格的窗口控制按钮（红绿黄三色按键）的样式和大小。
*   **Firefox 样式定制**：为 Firefox 浏览器应用 macOS 风格的窗口控制样式。
*   **在面板中显示窗口控制按钮**：当窗口最大化时，将控制按钮移动至顶部面板，并移除窗口标题栏以释放最大空间。
*   **显示窗口标题**：在顶部面板中显示当前活动窗口的标题。
*   **悬停显示面板**：在全屏模式下，当鼠标靠近顶部边缘时显示面板（注意：在 GTK4 应用中存在 Bug）。
*   **移动窗口至新工作区**：自动将全屏应用移动到新的工作区。
*   **设置面板透明度**：当窗口触碰到顶部面板时，可设置面板为透明或不透明。
*   **拖动透明效果**：在移动窗口时使其呈现半透明状态。
*   **电池百分比**：当电量低于 20% 且未使用电源时，在系统菜单中显示电池百分比。
*   **日历右移**：将日历移动到右侧，并隐藏通知及媒体控制组件，将其整合进“快速设置（Quick Settings）”。
*   **概览界面壁纸模糊**：在活动概览界面使用模糊处理的当前壁纸作为背景（需要安装 ImageMagick）。
*   **多语言界面**：内置 16 种语言翻译（德语、西班牙语、爱沙尼亚语、波斯语、芬兰语、法语、意大利语、韩语、立陶宛语、拉脱维亚语、挪威语、荷兰语、波兰语、葡萄牙语、瑞典语、简体中文、土耳其语），并可通过 `.po` 文件轻松扩展。

简单的说 Kiwi is not Apple 并不是通过添加新的主题而是通过微调默认的 Adwaita 主题来模拟 Mac OS 风格，这样最大程度的降低了第三方主题的兼容性问题以及由此造成的桌面环境不稳定性。由于不需要安装第三方主题，也就不需要安装 User Themes - GNOME Shell Extensions 这个扩展；

第一个选项 Move Window to New Workspace 建议关掉，否则全屏播放视频和退出全屏时，屏幕会左右滑动一下；从 Kiwi is not Apple 的 github 更新频率来说是非常快的，2025 年 6月 28 日发布了第一个测试版 v0.1-beta，不到一年的时间，已经更新到了 v1.5.5，但是目前贡献者只有三个人，和 Gnome 甚至是 WhiteSur GTK Theme 相比，差距还是很多。其他的一些不重要的选项也可以关掉， Kiwi is not Apple 会稳定很多，虽然不一定会引起桌面崩溃死机，少干活就一定少出错，尽量减少不稳定性让桌面作为工作的工具而不是玩具才是最重要的。

| <img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/Kiwi%20is%20not%20Apple%20%20version.avif" width="300"> | <img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/Kiwi%20is%20not%20Apple%20Options.avif" width="300"> | <img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/Kiwi%20is%20not%20Apple%20Extras.avif" width="300"> |
| :---: | :---: | :---: |
| Kiwi is not Apple version | Kiwi is not Apple Options | Kiwi is not Apple Extras |

### 与 Kiwi is not Apple 搭配的插件推荐

- **[Dash to Dock](https://extensions.gnome.org/extension/307/)** by michele_g
- **[Compiz alike magic lamp effect](https://extensions.gnome.org/extension/3740/)** by hermes83
- **[Kiwi Menu](https://extensions.gnome.org/extension/8697/)** by kem-a (Me)
- **[AppIndicator Support](https://extensions.gnome.org/extension/615/)** by 3v1n0
- **[Gtk4 Desktop Icons NG (DING)](https://extensions.gnome.org/extension/5263/)** by smedius
- **[Clipboard Indicator](https://extensions.gnome.org/extension/779/)** by Tudmotu
- **[Light Style](https://extensions.gnome.org/extension/6198/)** by fmuellner
- **[Weather or Not](https://extensions.gnome.org/extension/5660/)** by somepaulo

除了以上插件外，还可以安装常用的 Blur my Shell 扩展，不建议使用 apt 命令安装源里的 gnome-shell-extension-blur-my-shell，优先去 Gnome 插件网站下载 [Blur My Shell](https://extensions.gnome.org/extension/3193/blur-my-shell/)，在线安装的插件可以随时去网站更新，而在 Debian 源仓库安装的则要随着系统大版本更新；在安装了 Blur my Shell 扩展的情况下，Kiwi is not Apple 就无需开启 Overview Wallpaper Blur。

在保证桌面环境顺手的情况下，安装的插件越少越好，以上的插件我只安装了 Compiz alike magic lamp effect、Weather or Not、Blur my Shell 以及 Dash to Dock。在我使用第三方主题以及插件的过程中经常会遇到各种小问题，如果遇到系统死机， 通过命令 journalctl -b -1 -e 检查上一次死机前的最后记录，尝试更新主题和插件或者寻求替代产品。

对于像 Blur my Shell 这样功能丰富的插件，关闭不需要的选项也可以极大地提高稳定性和性能。

| <img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/Blur%20My%20Shell%20Panel.avif" width="300"> | <img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/Blur%20My%20Shell%20Applications.avif" width="300"> | <img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/Blur%20My%20Shell%20Other.avif" width="300"> |
| :---: | :---: | :---: |
| Blur my Shell Panel | Blur my Shell Applications | Blur my Shell Other |

### Flatpak 主题

分别运行以下四条命令以覆盖 xdg-config 设置，并为 Flatpak 应用启用窗口控制按钮的主题样式：

```sh
flatpak override --user --filesystem=xdg-config/gtk-3.0:ro
flatpak override --user --filesystem=xdg-config/gtk-4.0:ro
flatpak override --user --filesystem=xdg-config/environment.d/:ro
flatpak override --user --filesystem=$HOME/.local/share/gnome-shell/extensions/kiwi@kemma/:ro
```

### Mac OS 图标和鼠标指针

[MacTahoe 图标](https://github.com/vinceliuice/MacTahoe-icon-theme)

**安装提示**

安装命令:  `./install.sh`  **[选项...]**

|  OPTIONS:           | |
|:--------------------|:-------------|
|-d, --dest           | 指定图标主题安装目录（默认：$HOME/.local/share/icons）
|-n, --name           | 指定主题名称（默认：MacTahoe）
|-t, --theme          | 指定主题配色方案 [默认/紫色/粉色/红色/橙色/黄色/绿色/灰色/全部]（默认：蓝色）
|-b, --bold           | 安装粗体面板图标版本
|-r,--remove,-u,--uninstall | 卸载（删除）图标主题
|-h, --help           | 显示此帮助信息

在安装了 MacTahoe 图标的同时会安装 MacTahoe 鼠标主题，当然也可以安装[WhiteSur-鼠标指针](https://github.com/vinceliuice/WhiteSur-cursors)

**安装提示**

只需将下载后的主题解压，右键用终端打开，运行以下命令即可安装光标主题。

当前用户本地安装：

```
./install.sh
```

为所有用户进行系统级安装：

```
sudo ./install.sh
```

然后通过 Gnome Tweaks 选择图标和鼠标指针主题即可。

### 从 WhiteSur-gtk-theme 迁移注意事项


**卸载第三方主题**

- 卸载 Gtk 主题: `./install.sh -r`
- 卸载 GDM 主题: `sudo ./tweaks.sh -g -r`
- 卸载 Firefox 主题: `./tweaks.sh -f -r`
- 卸载 Flatpak Gtk 主题: `./tweaks.sh -F -r`

这里不建议卸载 GDM 主题，主要是更改用户登录界面背景，如果不小心卸载，或者新安装，下载 WhiteSur-gtk-theme 主题压缩包后解压，去所在目录下右键打开 console 或者 terminal 命令行终端，运行以下命令安装 GDM 主题：

![WhiteSur-gtk-theme zip](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/WhiteSur-gtk-theme%20zip.webp)

![WhiteSur-gtk-theme](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/kiwi/WhiteSur-gtk-theme.webp)

```sh
sudo ./tweaks.sh -g
```

如果在这里看到了残留，需要使用 sudo 权限删除：
```sh
ls /usr/share/themes
```

**请务必小心操作，确保不要删错系统自带主题（如 Adwaita, Yaru 等）**
```sh
sudo rm -rf /usr/share/themes/WhiteSur*
sudo rm -rf /usr/share/themes/MacTahoe*
```
### 总结

根据个人使用经验，Kiwi is not Apple 要比安装第三方主题更稳定一些，GNOME 作为一个全球社区项目，尤其是 Red Hat 公司提供大量人力进行核心组件（如 GNOME Shell、GTK）的开发，其核心组件以及 Adwaita 主题的品质还是值得信赖的；唯一不足的是 GNOME 的理念比较另类，用户必需的托盘、桌面图标、状态栏透明度调整、高度定制化选项等功能统统砍掉，逼迫用户去使用第三方插件和主题；以上原因间接导致了桌面环境的不稳定性。Kiwi is not Apple 不影响 GNOME 的默认属性，例如 GNOME Console (控制台) 应用程序在使用 sudo 提升至 root 权限时，标题栏会自动变为红色。
