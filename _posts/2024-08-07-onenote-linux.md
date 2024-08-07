---
layout: post
title:  如何在 Linux 上安装 OneNote 桌面版
subtitle: 如何在 Debian/Ubuntu/Mint Linux 上安装 OneNote
tags:
    - Linux
---
![如何在 Debian/Ubuntu/Mint Linux 上安装 OneNote](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/onenote%20linux.webp)

微软著名的笔记程序 OneNote 已成为许多用户的首选资源。由于其强大的功能、易于使用的界面以及与其他 Microsoft 应用程序的无缝连接，它深受专业人士、学生和随时随地记下想法的欢迎。但是，如果您使用 Linux 会发生什么？

您的首选发行版上仍然可以便利的使用 OneNote 吗？

OneNote 由 Microsoft 开发，主要针对 Windows 和 macOS 设计。不过，借助一些第三方工具，您仍然可以在 Linux Mint 上安装并运行 OneNote Desktop。请继续阅读，找到在 Linux Mint 系统上安装 OneNote 过程中需要遵循的说明。

## 先决条件

在开始安装过程之前，先确保你已准备好所需的一切：

🖥 一台运行 Linux Mint（任何版本）的电脑

🖥 一个微软账户（OneNote 需要一个免费账户来同步你的笔记）

🖥 互联网连接

## 安装 OneNote

**1.使用 AppImage 或者 Flatpak**

无论您使用哪个发行版，都可以从此 GitHub 存储库的发行版部分下载最新版本的 p3x OneNote。

![p3x OneNote Linux](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/install%20p3x%20onenote%20using%20flatpak.webp)

下载 AppImage 后，输入以下命令使其成为可执行文件：
```
mkdir -p $HOME/opt
mv ~/Downloads/p3x-onenote-a.b.c-x86_64.AppImage $HOME/opt/
chmod +x $HOME/opt/p3x-onenote-a.b.c-x86_64.AppImage
```

![下载 AppImage 后，输入以下命令使其成为可执行文件](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/make%20AppImage%20an%20executable.webp)

最后，您可以使用以下命令运行 OneNote 应用程序：
```
$HOME/opt/p3x-onenote-a.b.c-x86_64.AppImage &
```
![运行 OneNote 应用程序](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/run%20the%20OneNote%20application.webp)

**2. 在 WINE 上使用 PlayOnLinux**

***第1步：安装Wine***

Wine 是一个兼容层，允许在 Linux 上运行 Windows 应用程序。打开终端并输入以下命令来安装 Wine：
```
sudo dpkg --add-architecture i386
sudo apt update
```
![输入以下命令来安装 Wine](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/install%20Wine.png)

现在，您可以安装 Wine：
```
sudo apt install wine64 wine32
```
![您可以安装 Wine](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/you%20can%20install%20Wine.png)

***第 2 步：下载并安装 PlayOnLinux***

PlayOnLinux 是 wine 的图形前端，可简化 Windows 应用程序的安装。使用以下命令安装 PlayOnLinux：
```
sudo apt install playonlinux
```
从应用程序菜单或在终端中键入以下命令启动 PlayOnLinux：
```
playonlinux
```
![启动 PlayOnLinux](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/playonlinux.webp)

***步骤 3：安装 OneNote***

在 PlayOnLinux 用户界面上，选择“安装”按钮。

在搜索字段中键入“OneNote”，然后选择“Microsoft OneNote”。

单击“安装”按钮后，按照屏幕上的说明继续操作。

PlayOnLinux 将自动下载并安装所需的文件，它还将引导您完成安装过程。

***步骤 4：配置 OneNote***

PlayOnLinux 将安装 OneNote，然后在程序菜单或桌面上创建它的快捷方式。双击快捷方式启动 OneNote。

***步骤 5：打开您的 Microsoft 帐户并登录。***

打开 OneNote 并使用您的 Microsoft 帐户登录。

就是这样！ OneNote Desktop 已在 Linux Mint 上成功安装。您现在可以开始创建数字笔记本并尝试其功能。

**3. Snaps:**

![ 记事本](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/windows/windows-11-notepad-spell-check.webp)

称为 snaps 的独立软件包与许多 Linux 发行版兼容。它们非常适合 OneNote 等应用程序，因为它们易于安装、更新和卸载。

以下是使用 Snap 在 Linux 上安装 OneNote Desktop 的方法：

1️⃣ 启动 Snap 商店。在大多数 Ubuntu 版本中，它都是预安装的。如果没有，您可以使用软件管理器来安装它。

2️⃣ 查找“OneNote”。在搜索结果中，官方的 Microsoft 软件包应该显示在搜索结果中。

3️⃣ 选择“安装”。将为您下载并安装 OneNote Desktop。

4️⃣ 打开 OneNote 桌面。可以通过搜索或打开“应用程序”菜单找到它。

5️⃣ 使用您的 Microsoft 帐户登录。通过执行此操作，您将能够从任何设备（包括移动设备或网络）访问和同步您的笔记。

![使用 Snap 在 Linux 上安装 OneNote](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/onenote/install%20OneNote%20Desktop%20on%20Linux%20using%20Snaps.webp)

## 结论

虽然 OneNote 在 Linux 上没有官方支持，但你可以使用 WINE 和 PlayOnLinux 等工具，在你喜欢的 Linux 发行版上使用 OneNote，本例中的发行版就是 Mint。或者，你也可以使用开源版本的 OneNote，如 P3X OneNote for Linux。和微软 Edge 一样，我们希望有一天微软的所有应用程序都能在 Linux 上得到支持。

Welcome to our [website](https://blog.tigress.cc/)
