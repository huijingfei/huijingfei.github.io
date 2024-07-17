---
layout: post
title: ﻿如何在 Debian 12、11 或 10 上安装 Opera Browser 浏览器
subtitle: 在基于 Debian 的 Linux 发行版上安装 Opera 浏览器
tags:
    - Debian
---

![ ﻿如何在 Debian 12、11 或 10 上安装 Opera 浏览器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/opera/How-to-Install-Opera-Browser-on-Debian-Linux.avif)

本指南将演示如何在 Debian 12、11 或 10 Linux 系统上利用命令行终端和 Opera 官方 APT 代码库（包括稳定版、测试版和不稳定版）安装 Opera 浏览器，该代码库提供最新的稳定版、测试版和开发人员版，并为未来更新提供便利。

Opera 浏览器是一款功能丰富的多功能网页浏览器，集速度、安全和效率于一身，能很好地满足用户的不同需求。它与 Debian Linux 10、11 和 12 版本的兼容性进一步巩固了其作为 Linux 爱好者首选的地位。本指南旨在简化安装过程，确保即使是 Linux 新手也能自信地完成安装。

## 对于 Debian 用户来说，Opera 浏览器的主要亮点包括：

速度与性能： Opera 专为快速浏览而设计，最大限度地缩短了加载时间，提升了整体用户体验。

安全功能： 内置广告拦截器和 VPN，强调用户隐私和安全。

创新的界面： 提供直观的设计和可定制的功能，带来友好的用户体验。

资源效率： Opera 经过优化，资源使用率较低，非常适合硬件配置较低的系统。

集成社交媒体： 内置访问流行社交媒体平台的功能，增强了易用性。

高级标签管理： 创新的标签管理选项改进了多任务处理和组织。

节能模式： 节能模式可延长笔记本电脑的电池使用时间，非常适合外出使用。

安装过程简洁明了，用户界面友好。本指南将清晰的说明与 Debian 的命令行效率相结合，指导您从添加 Opera APT 资源库到完成设置，只需几个简单的步骤。

## 在 Debian 上导入 Opera APT 仓库

### 第 1 步：在安装 Opera 浏览器之前更新 Debian

首先，更新您的 Debian 系统，以防止安装过程中出现任何问题：
      
    apt update && apt upgrade
    
apt update 命令会从配置源检索软件包信息，而 apt upgrade 则会安装系统上当前安装的所有软件包的最新版本。

### 第 2 步：安装 Opera 安装所需的软件包

接下来，您需要安装一些依赖项以方便 Opera 安装。运行以下命令：

    apt install software-properties-common apt-transport-https ca-certificates curl -y
 
此命令安装所需的软件包：

software-properties-common：提供所用 apt 仓库的抽象概念，简化存储库管理。

apt-transport-https：允许使用通过 HTTPS 协议访问仓库。

curl：用于通过 URL 传输数据的命令行工具。

ca-certificates：包含包验证所需的 CA 证书。

这些是几乎所有 Linux 发行版上常见且安全的软件包。

### 第 3 步：导入 Opera APT 仓库

在导入 Opera 软件源之前，你需要导入 GPG 密钥，以验证已安装软件包的真实性。这将确保你安装的是来自官方源的正版软件包。使用以下命令导入 GPG 密钥：
      
    curl -fSsL https://deb.opera.com/archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/opera.gpg > /dev/null

该命令使用 curl 下载 GPG 密钥，使用 gpg --dearmor 对其进行处理，并将其保存到 /usr/share/keyrings/opera.gpg 文件中。
接下来，使用以下命令导入 Opera 软件源：

    echo deb [arch=amd64 signed-by=/usr/share/keyrings/opera.gpg] https://deb.opera.com/opera-stable/ stable non-free | sudo tee /etc/apt/sources.list.d/opera.list
 
该命令将创建一个新的版本库文件 /etc/apt/sources.list.d/opera.list，其中包含指向 Opera 版本库的适当内容。
 
### 第 4 步：导入 Opera Repo 后更新 APT 包索引

    apt update

该命令可确保您的系统了解 Opera 软件库中的最新软件包，从而安装所需的 Opera 浏览器版本。

## 在 Debian 上安装 Opera 浏览器

导入软件源后，就可以安装 Opera 浏览器了。您可以选择安装稳定版、测试版或开发者版浏览器，也可以根据自己的喜好安装所有三个版本，因为它们共享单独的安装。

由于你已在上一节更新了版本库列表，因此可以使用以下命令直接安装稳定版 Opera：

    apt install opera-stable
      
在安装过程中，系统可能会提示您配置 Opera 以允许升级最新版本。请务必选择 "否 "并按下 "回车键 "完成安装。选择 "是 "可能会导致未来升级时出现多种冲突。如果遇到问题，请参阅教程末尾的故障排除部分。

请记住，您安装的每个版本（稳定版、测试版和开发版）都会出现此提示。请务必选择 "否"，以避免多次导入源代码列表时出现问题。

![在安装过程中，系统可能会提示您配置 Opera 以允许升级最新版本。请务必选择 "否 "并按下 "回车键 "完成安装。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/opera/select-no-to-importing-new-opera-browser-sources-list-on-debian-linux.png)

要安装具有新功能的 Opera 测试版，请使用以下命令：

    apt install opera-beta

请注意，根据 Opera 的发布周期，测试版不一定总是领先于稳定版。您最终使用的可能是旧版客户端，因此在使用测试版时请谨慎。

Opera 开发者版本可供有兴趣尝试最新功能和改进的用户使用。要安装开发者版本，请运行以下命令：

    apt install opera-developer
      
## 在 Debian 上启动 Opera 浏览器

安装完成后，您现在可以启动 Opera 浏览器。有多种方法可以运行 Opera，具体取决于您的偏好和安装的版本。

**通过命令行启动 Opera 浏览器**

您可以使用适合您安装的版本的命令直接从终端启动 Opera：

稳定版的命令：

    opera

如果您安装的是测试版，请使用此命令：

    opera-beta

如果你安装的是开发者版本，请使用此命令：

    opera-developer

**通过图形用户界面启动 Opera 浏览器**

你可以从桌面环境启动它，以更方便的方式启动 Opera。根据您安装的版本，请按照以下路径操作：
点击屏幕左上角的 "活动"。

选择侧边栏底部的 "显示应用程序"（通常用网格图标表示）。

在搜索栏中搜索 "Opera"，或找到要启动版本（稳定版、测试版或开发版）的 Opera 图标。

点击相应的 Opera {version} 图标启动浏览器。

![通过图形用户界面启动 Opera 浏览器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/opera/example-of-launching-opera-browser-on-debian-linux.avif)

## Debian 上使用 Opera 浏览器的一些技巧
      
**启用 VPN 以增强隐私**

Opera 具有内置 VPN 服务，可在浏览时提供额外的隐私和安全保护。要启用 VPN：

单击左上角的“菜单”按钮（三条水平线）。

转到“设置”>“隐私和安全”。

切换启用 VPN 开关以启用 VPN 服务。

**使用快速拨号保存您最喜爱的网站**

快速拨号可让您从新标签页快速访问您喜爱的网站。要将站点添加到快速拨号：

打开一个新选项卡。

单击快速拨号部分中的“+”图标。

输入网站的 URL，然后单击“添加”。
      
## 在 Debian 上使用 Opera 浏览器自定义主题

使用自定义主题个性化您的 Opera 浏览器。更改主题：

点击菜单按钮。

转到设置 > 外观。

从可用主题中选择，或单击 "获取更多主题 "探索其他选项。

自定义侧边栏

Opera 的侧边栏提供对书签、历史记录和扩展等基本功能的快速访问。要自定义侧边栏：

右键单击侧边栏。

选择侧边栏设置。

## Debian 上使用 Opera 浏览器的其他技巧

**安装扩展**

使用 Opera 扩展工具增强您的浏览体验。安装扩展：

点击菜单按钮。

转到扩展 > 获取扩展。

浏览或搜索扩展，然后单击 "添加到 Opera "进行安装。

**从其他浏览器导入书签**

快速将书签从其他浏览器传输到 Opera。要导入书签：

单击菜单按钮。

转到书签 > 导入书签和设置。

从下拉菜单中选择当前浏览器，选择要导入的内容，然后单击导入。

有了这些技巧和自定义设置，你就能在 Debian Linux 上充分利用 Opera 浏览器。

![Debian 上使用 Opera 浏览器的其他技巧](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/opera/first-time-setup-of-opera-browser-on-debian-linux.avif)

**[解决 Linux 发行版中的 Opera 浏览器无法播放 H.264 视频的问题](https://blog.tigress.cc/2023/10/linux-opera-h264.html)**

## 更新 Opera 浏览器

虽然大多数桌面用户都依赖自动更新或自动更新通知，但了解如何使用终端手动更新 Opera 浏览器还是很有必要的。要检查更新，首先要更新系统的软件包列表：

要更新 Opera 浏览器和其他已安装的软件包，需要运行以下命令：

    apt update && apt upgrade

该命令首先更新软件包列表（apt update），然后升级所有可升级的软件包（apt upgrade），如果有可用更新，则包括 Opera 浏览器。
      
## 删除 Opera 浏览器

要删除 Opera 浏览器，请根据要卸载的版本执行相应的终端命令：

    apt remove opera-stable

    apt remove opera-beta

    apt remove opera-developer

如果你不再打算在系统上安装或使用 Opera 浏览器，最好删除 Opera Repository 和 GPG 密钥。要删除 Opera Repository，请执行以下命令：

    rm /etc/apt/sources.list.d/opera.list

最后，删除 GPG 密钥。

    rm /usr/share/keyrings/opera.gpg

## 修复 Debian 上的多个 Opera sources.list

在 Debian 系统上运行多个版本的 Opera 浏览器（如稳定版、测试版和开发版）时，可能会在 apt 更新过程中遇到问题。这些问题通常是由于每个版本的 Opera 都在 /etc/apt/sources.list.d/ 目录中添加了自己的源代码列表。

要解决这些问题，首先要删除多余的来源列表，确保保留主列表。使用以下命令删除多余列表：

    rm /etc/apt/sources.list.d/opera*

    如果不小心删除了所有来源列表，可以使用此命令恢复 Opera 资源库：

    echo deb [arch=amd64 signed-by=/usr/share/keyrings/opera.gpg] https://deb.opera.com/opera-stable/ stable non-free | sudo tee /etc/apt/sources.list.d/opera.list

精简软件源列表后，下一步就是刷新 APT 的软件包信息：

    apt update
    
该命令更新 APT 的数据库，确保它从正确的综合来源列表中检索软件包信息。

## 结论

在本指南中，我们介绍了在 Debian 系统上管理 Opera 浏览器多个版本的要点，重点是整合源代码列表并确保顺利更新。请记住，整理好源代码列表是保持浏览器设置稳定高效的关键。如果你发现自己在不同的 Opera 版本之间来回切换，请重新检查这些步骤，以简化流程。最后，请定期检查更新，随时了解 Opera 的新功能，以提升您的浏览体验。祝您浏览愉快！

Welcome to our [website](https://blog.tigress.cc/)
