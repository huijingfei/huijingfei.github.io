---
layout: post
title:  如何在 Debian 12、11 或 10 上安装 Microsoft Edge
subtitle: Debian12 / Ubuntu 24.04 /Linux Mint 20 安装 Microsoft Edge 浏览器
tags:
    - Debian
---
![如何在 Debian 12、11 或 10 上安装 Microsoft Edge](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/edge/How-to-Install-Microsoft-Edge-on-Debian-Linux.webp)
Microsoft Edge 最初是为 Windows 开发的，如今已扩展到 Linux，提供了以速度、安全性和效率著称的另一种浏览体验。Microsoft Edge 在 Linux 上的可用性标志着在弥合 Windows 与 Linux 环境之间的差距方面迈出了重要一步，满足了从休闲冲浪者到专业开发人员等不同用户群的需求。

Microsoft Edge 为 Debian 带来的功能：

🌐版本的灵活性： 根据您的风险承受能力和功能需求，选择稳定版、测试版或开发版。

🌐无缝集成： 增强与微软服务的兼容性，提供统一的平台体验。

🌐增强的浏览功能： 针对 Linux 系统的独特需求，对速度和安全性进行了优化。

🌐友好的用户界面： 为 Windows 用户提供熟悉的体验，简化向 Linux 的过渡。

🌐开发者友好：包括访问微软网络开发工具，提高 Linux 平台的生产力。

🌐资源效率： 旨在消耗更少的系统资源，有利于硬件配置较低的系统。

🌐定制和扩展： 支持多种扩展，允许用户定制自己的浏览器。

🌐隐私控制： 提供强大的隐私设置，让用户控制自己的网络足迹。

🌐定期更新： 确保定期实施安全和性能改进。

🌐跨平台同步： 实现不同设备和操作系统间的书签、密码和设置同步。

这些功能使 Microsoft Edge 成为 Debian Linux 12、11 或 10 用户的理想选择。它将微软熟悉的生态系统与 Debian 平台的灵活性和强大功能相结合。考虑到这些优势，让我们进入安装过程。

## 在安装 Microsoft Edge 之前更新 Debian

在安装 Microsoft Edge 之前，更新 Debian 系统以确保所有现有软件包都是最新的至关重要。这将确保您的系统拥有顺利安装 Edge 所需的最新安全补丁和依赖程序。要更新系统，请执行以下命令：
```
sudo apt update && sudo apt upgrade
```

## 安装 Microsoft Edge 的初始软件包

要成功安装 Microsoft Edge，必须安装安装所必需的特定软件包。这些软件包可能已经安装在系统中，但运行以下命令将确保它们是最新的：
```
sudo apt install software-properties-common apt-transport-https ca-certificates curl -y
```
## 导入 Microsoft APT 存储库

在此步骤中，您将导入验证 Microsoft Edge 软件包真实性所需的 GPG 密钥。这将确保你下载的软件包是真实的，可以安全安装。要下载并导入 GPG 密钥，请执行以下命令：
```
curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /etc/apt/keyrings/microsoft-edge.gpg > /dev/null
```
接下来，运行以下命令将 Microsoft Edge 资源库添加到系统的源列表中：
```
bash -c 'cat <<EOF > /etc/apt/sources.list.d/microsoft-edge.sources
### THIS FILE IS AUTOMATICALLY CONFIGURED ###
# Changes to this file will not be preserved.
# This file will not be recreated if removed.
X-Repolib-Name: Microsoft Edge
Types: deb
URIs: https://packages.microsoft.com/repos/edge-stable
Suites: stable
Components: main
Architectures: amd64
Signed-By: /usr/share/keyrings/microsoft-edge.gpg
EOF'
```
## APT 存储库导入后更新包列表

添加 Microsoft Edge 软件源后，需要刷新系统的软件包列表以识别新软件源。为此，请执行以下命令：
```
sudo apt update
```
## 通过 APT 命令完成 Microsoft Edge 浏览器安装

现在您可以继续安装 Microsoft Edge 浏览器。目前有三个分支：稳定版（推荐）、测试版和开发版（nightly）。要安装稳定版的 Microsoft Edge，请运行以下命令：
```
sudo apt install microsoft-edge-stable
```
可选：安装 Microsoft Edge 浏览器测试版或开发版

如果您想试用 Microsoft Edge 的测试版或开发版（nightly），可以安装它们而不是稳定版。请注意，不建议日常使用这些版本，尤其是在办公环境或生产服务器上。它们适用于希望探索即将发布的新功能版本或处于技术最前沿的用户。
这些版本不会取代稳定版，可以单独安装。不过，建议一次只安装一个版本。

要安装 Microsoft Edge 测试版，请运行以下命令：
```
sudo apt install microsoft-edge-beta
```
最后，您可以使用以下命令安装开发版（nightly）Microsoft Edge：
```
sudo apt install microsoft-edge-dev
```
## 启动 Microsoft Edge 浏览器

**命令行启动 Microsoft Edge**

您可以在终端中执行相应的命令来启动 Microsoft Edge。这种方法提供了直接从命令行打开浏览器的快捷方式。请使用与您的安装的 Edge 版本相匹配的命令：
```
microsoft-edge
```

```
microsoft-edge-beta
```
```
microsoft-edge-dev
```
**图形用户界面启动 Microsoft Edge 的方法**

虽然使用终端命令可以提高效率，但对于日常使用来说，这可能不是最实用的方法。您也可以直接从桌面环境启动 Microsoft Edge。要做到这一点，请按照以下步骤操作：

🛜单击 "Activities"（通常位于屏幕左上角）。

🛜单击 "显示应用程序"（通常位于屏幕左下角，以网格状的点表示）。

🛜查找 Edge 图标，它代表 Microsoft Edge 浏览器。点击它启动浏览器。

![图形用户界面启动 Microsoft Edge 的方法](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/edge/launch-microsoft-edge-on-debian-linux.avif)

![从桌面环境启动 Microsoft Edge](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/edge/example-of-microsoft-edge-once-installed-on-debian-linux.avif)

## 其他 Microsoft Edge 命令

**更新 Microsoft Edge**

要保持 Microsoft Edge 浏览器的更新和安全，应定期检查并应用任何可用的更新。

首先，在终端运行 apt update 命令，刷新软件包列表并检查是否有可用更新：
```
sudo apt update
```
如果 Microsoft Edge 有可用更新，请使用 apt Upgrade 命令应用更新：
```
sudo apt upgrade
```
**删除 Microsoft Edge**

如果您需要从系统中卸载 Microsoft Edge，请按照以下步骤操作：

根据您安装的 Microsoft Edge 版本，使用以下命令之一删除您安装的浏览器：
```
sudo apt remove microsoft-edge-stable
```

```
sudo apt remove microsoft-edge-beta
```

```
sudo apt remove microsoft-edge-stable-dev
```
要从系统中删除 Microsoft Edge 存储库，请运行以下命令：
```
sudo rm /etc/apt/sources.list.d/microsoft-edge.sources
```
最后，删除在安装过程中导入的 GPG 密钥：
```
sudo rm /usr/share/keyrings/microsoft-edge.gpg
```
## 在 Debian 上解决 Microsoft Edge Sources.list 文件冲突问题

**删除冗余 Sources.list 文件**

在 Debian 中，安装不同版本的 Microsoft Edge（稳定版、测试版和开发版）会导致在 /etc/apt/sources.list.d/ 目录中创建单独的 sources.list 文件。使用 apt update 命令时，这些单独的文件可能会导致更新冲突，从而可能导致跳过更新。要解决此问题，您需要删除不必要的 sources.list 文件。

要单独删除这些文件，请使用以下命令：
```
sudo rm /etc/apt/sources.list.d/microsoft-edge.list
sudo rm /etc/apt/sources.list.d/microsoft-edge-beta.list
sudo rm /etc/apt/sources.list.d/microsoft-edge-dev.list
```
或者，如果想采用更简便的方法，可以在一条命令中删除所有与 Microsoft Edge 相关的 sources.list 文件：
```
sudo rm /etc/apt/sources.list.d/microsoft-edge*
```
**合并到单个存储库**

清理冗余文件后，下一步是添加单个存储库来管理所有 Microsoft Edge 版本的更新。这种方法简化了更新过程并避免了潜在的冲突。要添加存储库，请执行以下命令：
```
bash -c 'cat <<EOF > /etc/apt/sources.list.d/microsoft-edge.sources
### THIS FILE IS AUTOMATICALLY CONFIGURED ###
# Changes to this file will not be preserved.
# This file will not be recreated if removed.
X-Repolib-Name: Microsoft Edge
Types: deb
URIs: https://packages.microsoft.com/repos/edge-stable
Suites: stable
Components: main
Architectures: amd64
Signed-By: /usr/share/keyrings/microsoft-edge.gpg
EOF'
```
此命令专门为 Microsoft Edge 创建一个新的 sources.list 文件，确保从单一源管理所有版本的更新。

**更新 APT 软件包缓存**

正确设置了软件源后，最后一步就是刷新系统的软件包列表。这样可以确保系统识别新的版本库配置，并能接收相应的更新。使用以下步骤更新软件包列表：
```
sudo apt update
```
按照这些步骤，您的 Debian 系统将被配置为通过单一、无冲突的 sources.list 文件接收所有 Microsoft Edge 版本的更新。如果您不小心删除了所有 sources.list 文件，请参阅本指南前面的章节，了解如何恢复它们。

## 结论

在本教程中，我们探讨了在 Debian Linux 上安装 Microsoft Edge 的细节。从最初的设置到深入定制和 Microsoft APT 存储库设置，我们已经涵盖了很多内容。我的最终建议是？请毫不犹豫地尝试我们讨论的功能和设置。

Welcome to our [website](https://blog.tigress.cc/)
