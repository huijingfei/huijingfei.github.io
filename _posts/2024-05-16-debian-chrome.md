---
layout: post
title: ﻿如何在 Debian 12、11 或 10 上安装 Google Chrome 浏览器
tags:
    - Debian
    - Linux
    - Chrome Browser
    - 谷歌浏览器
    - Debian 12
---

![ ﻿如何在 Debian 12、11 或 10 上安装 Google Chrome 浏览器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/chrome/Install%20Google%20Chrome%20on%20Debian%2012.avif)

本指南将演示如何在 Debian 12、11 或 10 Linux 系统上利用命令行终端和谷歌官方 APT 代码库（包括稳定版、测试版和不稳定版）安装 Google Chrome 浏览器。

谷歌 Chrome 浏览器是首屈一指的网络浏览器，融合了速度、效率和强大的安全功能，适合从休闲冲浪者到精通技术的开发人员等各种用户使用。它与谷歌生态系统的无缝集成提高了工作效率，而庞大的扩展库则使其功能远远超出了基本的浏览范围。对于 Linux 用户来说，Chrome 浏览器利用 Linux 的优势进一步增强了其吸引力。

## 对于 Debian 用户来说，Google Chrome 的主要亮点包括：

速度与效率： 经过优化，页面加载速度快，网页导航延迟最小。

扩展生态系统： 丰富的扩展功能可根据您的需求定制浏览器。

开发工具： 先进的网络开发工具，提供深入的洞察力和调试功能。

沙盒技术： 通过隔离网站进程，提供额外的安全保护。

跨平台同步： 促进跨设备浏览数据的无缝同步。

自定义： 提供各种主题和设置，打造个性化浏览环境。

隐私控制： 强大的隐私设置，包括隐身模式和特定网站权限。

准备好安装了吗？让我们开始吧。

## 在 Debian 上导入 Google Chrome APT 仓库

在 Debian Linux 上安装 Google Chrome 浏览器的第一步是确保你的系统是最新的。通过更新系统，你可以减少在安装 Google Chrome 浏览器过程中可能出现的兼容性问题。

要更新 Debian 系统，你需要打开终端并执行以下命令：
      
    apt update && apt upgrade

更新系统后，下一步就是安装特定的软件包。这些软件包对安装过程至关重要。它们包括 software-properties-common、apt-transport-https、ca-certificates 和 curl。

执行以下命令即可安装这些软件包：

    apt install software-properties-common apt-transport-https ca-certificates curl -y
 
请记住，您的系统可能已经安装了这些软件包，因为它们是常见的依赖项。

导入 Google Chrome APT 仓库

安装 Google Chrome 浏览器的后续步骤包括合并 Google Chrome 存储库。首先要导入用于数字签名的 GPG 密钥。
执行以下命令即可实现：
      
    curl -fSsL https://dl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor | sudo tee /usr/share/keyrings/google-chrome.gpg >> /dev/null

该命令确保成功导入 GPG 密钥，这是安装过程的前提条件。缺少这一步骤会导致安装不完整。

***出现错误：sudo: unable to resolve host hp（hp 是我本机电脑的名称）: Name or service not known 的解决方法***

    cat /etc/hostname
    hp

然后再查看 hosts 文件

    cat /etc/hosts
    # Standard host addresses
    127.0.0.1  localhost
    ::1        localhost ip6-localhost ip6-loopback
    ff02::1    ip6-allnodes
    ff02::2    ip6-allrouters

在第一行 localhost 后边加上 hostsname 文件中的 hp（对应 hp 应为你的电脑上查看 hostsname 的名称）

    vim /etc/hosts
    # Standard host addresses
    127.0.0.1  localhost hp
    ::1        localhost ip6-localhost ip6-loopback
    ff02::1    ip6-allnodes
    ff02::2    ip6-allrouters

成功导入 GPG 密钥后，执行以下命令导入 Google Chrome 浏览器软件源：

    echo deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main | sudo tee /etc/apt/sources.list.d/google-chrome.list
 
 要完成 Google Chrome 浏览器软件源的整合，必须使用 apt update 命令更新软件源列表。此步骤使用新添加的 Google Chrome 代码库更新 apt 源列表。
 
执行以下命令更新版本库列表：

    apt update

成功更新系统、安装所需软件包并加入 Google Chrome 浏览器软件源后，就可以继续安装 Google Chrome 浏览器了。

### 通过 APT 在 Debian 上安装 Google Chrome 浏览器

首先安装谷歌浏览器稳定版。由于经过全面测试，该版本通常是最安全可靠的通用选择。

要安装谷歌浏览器稳定版，请执行以下命令：

    apt install google-chrome-stable
      
除了稳定版，谷歌 Chrome 浏览器还提供测试版和不稳定版。由于其潜在的不稳定性，谷歌不建议将这些版本用于日常使用。不过，渴望尝试新功能的技术爱好者可能会发现这些版本很有吸引力。

要安装 Google Chrome Beta 或 Unstable 版本，请执行以下命令之一：

    apt install google-chrome-beta

    apt install google-chrome-unstable

请注意，可以安装所有三个版本的 Google Chrome 浏览器，因为它们都是作为单独的安装程序运行的。

### 使用 CLI 方法启动 Google Chrome 浏览器

你可以使用特定版本的命令直接从终端启动 Google Chrome 浏览器，每个版本都有自己独特的命令。
      
使用下面的命令启动稳定版的 Google Chrome 浏览器：

    google-chrome-stable

如果您选择安装测试版，请使用此命令：

    google-chrome-beta

如果你选择安装不稳定版，请使用此命令：

    google-chrome-unstable

### 通过图形用户界面启动谷歌浏览器

大多数桌面用户可以直接从桌面环境启动 Google Chrome 浏览器。通常，这一过程需要导航到应用程序图标。谷歌浏览器的一般访问路径如下：

Activities > Show Applications > Google Chrome {version}

![通过图形用户界面启动谷歌浏览器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/chrome/launch-google-chrome-on-debian-12-11-or-10-linux.avif)

## 在 Debian 上首次运行 Google Chrome

第一次打开 Google Chrome 时，会出现几个提示。首先，浏览器将要求您创建钥匙串密码，这是一种旨在存储网站和应用程序的所有密码的安全措施。 Google Chrome 还会询问您是否要将其设置为系统的默认浏览器，替换当前浏览器（默认为 Firefox）。此可选选项可以简化您的网页浏览体验。

![在 Debian 上首次运行 Google Chrome](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/chrome/first-time-pop-up-about-accepting-google-chrome-as-the-default-browser-for-debian-12-11-or-10.avif)
      
在此提示中，您会看到一个复选框，要求您同意向 Google 发送使用统计和崩溃报告。虽然这些数据有助于谷歌改进其浏览器，但您可以同意或不同意这一提议。

决定之后，点击 "确定 "按钮继续。接下来，Google Chrome 浏览器允许你登录以获得更个性化的体验。不过，如果你愿意，可以点击浏览器标签页中的 "X "跳过这一步。

![在 Debian 上使用 Google Chrome 的首次使用技巧](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/chrome/google-chrome-successfully-installed-on-debian-12-11-or-10-linux.avif)
      
## 在 Debian 上使用 Google Chrome 的首次使用技巧
      
本指南提供了在 Debian Linux 上使用 Google Chrome 浏览器的基本技巧和窍门。它有助于优化浏览器的功能，并根据你的喜好定制其外观。

### 在 Debian 上使用 Google Chrome 浏览器的一些技巧
      
以下是一些可改善您在 Debian Linux 上使用 Google Chrome 体验的一般提示：

同步您的 Google 帐户：要在所有设备上同步您的书签、历史记录、密码和其他设置，请使用您的 Google 帐户登录 Google Chrome。

使用扩展：扩展可以显着增强浏览器的功能。 Linux 上推荐的一些 Chrome 扩展包括：

标签休眠：自动暂停不活动的选项卡，使您的浏览器速度更快。

会话恢复：允许您从上次中断的位置恢复选项卡。

悬停缩放：使您可以通过将光标悬停在图像上来缩放图像。

下载选项卡：允许您下载选项卡或链接的完整内容。

快速拨号：内置新选项卡的绝佳替代品。

会话管理器：此扩展允许您保存和恢复会话。

### 谷歌浏览器自定义技巧

让您的 Chrome 浏览器具有视觉吸引力可以显着增强您的浏览体验。以下是自定义 Chrome 浏览器的一些提示：

深色模式：Chrome 提供了深色主题，可将浏览器的配色方案更改为更深的颜色，使眼睛在弱光条件下更加舒适。要启用它，请在地址栏中输入 chrome://flags，在搜索栏中输入“深色模式”，然后从下拉菜单中选择“强制网页内容采用深色模式”。

主题：您可以使用各种主题自定义 Chrome 浏览器的外观。要更改 Chrome 上的主题，请导航至设置菜单中“外观”菜单下的“主题”菜单。 Chrome 网上应用店中的主题库允许您浏览各种主题并选择最适合您需求的主题。

Chrome Linux 主题：此主题是用独特且现代的外观自定义 Linux 系统的好方法。其多种颜色选择使您可以自定义系统以符合您的个性和喜好。

Chrome GTK 主题：这是一个适用于 GNOME 桌面环境的现代、扁平化主题，旨在为用户提供现代、时尚的外观。它兼容GTK2和GTK3，支持GNOME、Xfce、LXDE等多种桌面环境。

请记住，我们的目标是创建一个适合您需求和偏好的舒适高效的工作空间。

![谷歌浏览器自定义技巧](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/chrome/example-getting-themes-for-google-chrome-on-debian-12-11-or-10-linux.avif)

## 更新谷歌浏览器

Google Chrome 浏览器的开发人员会定期发布更新，以提高浏览器的性能、修补安全漏洞并添加新功能。作为用户，保持浏览器更新以受益于这些增强功能至关重要。

要更新 Google Chrome 浏览器和其他已安装的软件包，需要运行以下命令：

    apt update && apt upgrade

该命令首先更新软件包列表（apt update），然后升级所有可升级的软件包（apt upgrade），如果有可用更新，则包括 Google Chrome 浏览器。
      
## 删除谷歌浏览器

如果你决定更换网络浏览器或需要释放系统空间，只需几条终端命令就能轻松地从 Debian Linux 系统中移除 Google Chrome 浏览器。如果你安装了稳定版的 Google Chrome，请使用以下命令移除它：

    apt remove google-chrome-stable

对于选择测试版或不稳定版的用户，命令如下

    apt remove google-chrome-beta

或

    apt remove google-chrome-unstable

分别执行。

卸载浏览器后，请考虑删除安装过程中导入的谷歌 Chrome 浏览器软件源。执行以下操作即可：

    rm /etc/apt/sources.list.d/google-chrome.list

该命令会从sources.list.d 目录中删除Google Chrome 列表文件，确保该存储库不再用于软件包更新。

## 修复 Debian 上的多个 Google Chrome“sources.list”

在 Debian Linux 上管理不同版本的 Google Chrome 浏览器需要了解可能出现的潜在问题。安装多个浏览器版本（如稳定版、测试版和不稳定版）可能会产生冲突。每次安装都会在 /etc/apt/sources.list.d/ 目录下生成一个独特的源代码列表文件，从而导致在进行apt更新时出现问题。系统可能难以处理 Google Chrome 浏览器的多个源代码列表文件。

例如，如果你按照稳定版的指南安装 Google Chrome 浏览器，后来又决定尝试使用测试版或开发者版本，就会引入额外的源代码列表文件，从而产生冲突。

![修复 Debian 上的多个 Google Chrome“sources.list](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/chrome/example-of-terminal-error-output-with-multiple-sources-for-google-chrome-on-debian-12-11-or-10.png)

### 解决源列表冲突

解决这个问题的办法在于正确管理源代码列表文件。如果你发现测试版或不稳定版的 Google Chrome 浏览器存在冲突，可以使用终端命令删除这些源文件：

     rm /etc/apt/sources.list.d/google-chrome-beta.list

     rm /etc/apt/sources.list.d/google-chrome-unstable.list

这些命令专门用于删除测试版和不稳定版 Google Chrome 浏览器的源代码列表文件。

或者，你也可以重新开始，删除所有与 Google Chrome 浏览器相关的源代码列表文件，包括稳定版的文件。这样你就可以重新建立一个干净的系统，并避免任何潜在的冲突。你可以使用以下命令删除所有 Google Chrome 浏览器源代码列表文件：

    rm /etc/apt/sources.list.d/google-chrome*

### 重新建立正确的 Google Chrome 存储库

  删除所有 Google Chrome 浏览器软件源，然后重新添加初始的正确软件源。请使用以下命令完成此操作：
  
    echo deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main | sudo tee /etc/apt/sources.list.d/google-chrome.list

此命令将重新创建 Google Chrome 浏览器源代码列表文件，并指向稳定版。最佳做法是运行 APT 更新，以确保系统能识别新添加的软件源：

     apt update

通过仔细管理源代码列表文件，你可以解决不同 Google Chrome 浏览器版本之间的冲突。这样，系统就能不受干扰地继续接收所有已安装浏览器版本的更新。

## 结论
      
总之，要在 Debian Linux 发行版上成功安装和管理 Google Chrome 浏览器，就必须注意细节并熟练掌握命令行。本指南系统地介绍了每个必要步骤，包括安装各种版本的 Google Chrome 浏览器、启动过程、定期更新，甚至在必要时卸载。此外，我们还探讨了如何排除常见问题，例如多个源列表文件引起的冲突。
      
Welcome to our [website](https://blog.tigress.cc/)
