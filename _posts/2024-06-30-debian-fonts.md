---
layout: post
title: 如何在 Debian 12、11 或 10 上安装 Microsoft 字体
subtitle: 在 Debian/Ubuntu 等 Linux 发行版上安装微软字体
tags:
    - Debian 字体
---

![如何在 Debian 12、11 或 10 上安装 Microsoft 字体](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/fonts/How-to-Install-Microsoft-Fonts-on-Debian.webp)

字体设计在数字内容的呈现和感知方面起着举足轻重的作用。对于 Debian 用户来说，要确保内容看起来一致而专业，往往需要使用广为认可的字体。在许多 Linux 发行版中，微软的 TrueType 核心字体（包括 Times New Roman、Arial 和 Verdana 等主要字体）是一个明显的缺失。

在 Debian 上安装微软字体的原因：

✨增强兼容性： 微软字体经常用于文档和网页设计中。安装这些字体可以确保内容按照预期显示，尤其是在 Windows 和 Linux 环境之间转换时。

✨统一的外观： 微软字体历史悠久，可提供熟悉的视觉体验，促进数字平台间的一致性。

✨多样化的字体选择： 使用微软字体库来扩充您的字体库，可为您的图形设计工作或专业文档起草提供更多的设计选择。

了解 TTF MSCore 字体： 微软的 TrueType (TTF) MSCore 字体包含一系列广泛使用的字体。TTF "表示 TrueType 字体标准，由苹果公司和微软公司共同开发，以其在数字和印刷媒体上的一致呈现而著称。TTF MSCore Fonts Installer 简化了获取这些字体并将其集成到 Linux 系统的过程，可以管理从下载到安装的所有过程。

在介绍和解释之后，让我们在系统中安装字体吧。

## 在安装 Microsoft 字体之前更新 Debian

一次性执行以下命令更新 Debian 系统。打开终端并输入：
```
sudo apt update && sudo apt upgrade
```
该命令首先运行 sudo apt update 刷新软件包列表。然后执行 sudo apt upgrade 应用更新。&& 操作符确保第二条命令只在第一条命令完成后运行。

**启动 Microsoft 字体安装**

Debian 软件源默认包含 Microsoft TrueType 核心字体，通常称为 MSCore 字体。这些字体包括 Arial、Times New Roman 和 Courier New 等流行字体，并针对清晰的屏幕文本渲染进行了优化。

要从 Debian 版本库中安装这些字体，请使用名为 ttf-mscorefonts-installer 的软件包。该软件包负责字体的获取、安装和设置。

首先，使用此命令激活 "contrib "和 "non-free "软件源：
```
sudo apt-add-repository contrib non-free -y
```
如果该命令不起作用，请输入 software-properties-common 软件包：
```
sudo apt install software-properties-common -y
```
然后，输入以下命令启动字体安装：
```
sudo apt install ttf-mscorefonts-installer
```
安装完成后，终端会显示几条状态信息。这些信息提供了安装的详细情况，例如系统下载了哪些文件、是否需要其他软件包以及总下载量。

![Debian 安装微软字体包](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/fonts/example-of-microsoft-fonts-installed-successfully-terminal-output-debian-linux.webp)

注意：在 Linux 上安装微软字体可能需要下载多个文件。所需的时间会根据你的网络连接情况而有所不同。安装完成后，你就可以立即使用微软字体，从而增强字体选项并提高与微软文档的兼容性。

## 确认 Microsoft 字体安装成功

**访问字体应用程序**

安装微软字体后，Debian 系统中的大多数应用程序都可以使用这些字体。不过，确认安装成功并确保一切正常始终是个好习惯。在 Debian 系统中，您可以通过访问 "字体 "应用程序来实现这一点。字体应用程序是一个用户友好型工具，允许您查看和管理安装在系统中的字体。

要启动字体应用程序，请按照以下步骤操作：

1️⃣：首先点击屏幕左上角的 "活动 "选项。

2️⃣：然后点击 "显示应用程序"。你会看到系统中安装的一系列应用程序。

3️⃣：滚动或使用搜索栏查找字体应用程序。

![Debian 查找字体应用程序](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/fonts/example-fonts-application-icon-on-debian-linux-to-confirm-installation-of-debian-fonts.webp)

**验证微软字体**

要确保安装了微软字体，首先要搜索 Arial。Arial 是微软字体包中最常用的字体之一。在搜索栏中输入 Arial 后，"字体 "应用程序就会显示该字体，表明其在字体库中可用。

您将看到 Arial 字体预览，表明它已准备好在您的应用程序中使用。

![Debian 验证微软字体](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/fonts/example-of-arial-microsoft-fonts-on-debian-linux.webp)

**检查其他微软字体**

不要将验证局限于 Arial。Microsoft TrueType 核心字体包包含许多其他常用字体。检查其他重要字体，确保已安装所有字体。

例如，考虑搜索 Times New Roman，这是另一种广泛使用的微软字体，就像搜索 Arial 一样。在搜索栏中输入 Times New Roman。当你在 "字体 "应用程序中找到它时，你就知道自己已经成功安装了微软字体。

这个验证过程不仅仅是重复检查。它还能帮助你了解字体应用程序的工作原理。确认系统中的微软字体后，您就可以在数字项目中使用它们，从而增强您在 Debian 上的排版体验。

![Debian 检查其他微软字体](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/fonts/example-of-times-new-roman-fonts-on-debian-linux.png)

## 管理微软字体安装

**从 Debian 中删除 Microsoft 字体**

删除微软字体和安装一样简单。帮助你安装这些字体的软件包管理器也能让你删除它们。

要删除 Microsoft 字体，请使用此命令：
```
sudo apt remove ttf-mscorefonts-installer
```
运行此命令后，APT 软件包管理器会找到并卸载 ttf-mscorefonts-installer 软件包，从而从系统中删除微软字体。

请记住，卸载 ttf-mscorefonts-installer 软件包不会改变之前使用过这些字体的文档。文档将保留其格式。不过，如果系统中不再有特定的 Microsoft 字体，那么在打开文档时可能会看到不同的字体。

## 最终总结

总之，通过使用该软件包，我们在 Debian 系统上安装、验证甚至卸载 Microsoft TrueType 核心字体的过程既全面又富有启发性。本教程旨在让您掌握增强 Debian 系统排版能力的知识，为您的应用程序带来更丰富的文本体验。我们将详细介绍整个过程的每一个步骤，揭开命令行指令的神秘面纱，确保您牢固掌握操作步骤。请记住，管理您系统的排版不仅仅是为了美观--它也是改进个性化使用体验的一步。

Welcome to our [website](https://blog.tigress.cc/)
