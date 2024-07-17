---
layout: post
title: 如何在 Windows 10 和 Windows 11 上修复错误代码 0x80004005
subtitle: 如何修复在 Windows 10 和 Windows 11 无法链接局域网的电脑和打印机
tags:
    - Windows
---

## 主要提示：

Windows 喜欢抛出神秘的错误代码，其可能的原因有无数种，解决办法至少也有无数种。错误代码 0x80004005 也不例外，不过它确实有一些常见的原因。以下是您可以尝试在 Windows 10 或 Windows 11 上修复它的一些方法。

## 什么原因导致错误代码 0x80004005？

一般来说，当 Windows 无法访问文件或文件夹时，就会出现错误代码 0x80004005。它通常显示为 "错误 0x80004005： 不明错误"。
以下是潜在原因的不完全列表：

1️⃣：你的 Windows 用户账户没有文件或文件夹的所有权或正确的访问权限。

2️⃣：您尝试使用不支持加密压缩文件（如 ZIP 文件）的程序解压缩或打开此类文件。

3️⃣：您的杀毒软件阻止了对文件的访问

4️⃣：网络配置设置错误或服务未运行，导致无法连接网络上的其他计算机或网络附加存储设备 (NAS)

5️⃣：文件损坏导致 Windows Update 崩溃

尽管错误代码 0x80004005 比大多数 Windows 错误信息更具体，但仍有大量潜在原因和大量潜在修复方法。

## 避免归档文件错误

存档文件可以让你做各种各样的事情，尽管并非所有存档文件都支持相同的功能。你可以压缩文件、捆绑多个文件、加密文件或在多个归档文件中分割大文件。

文件资源管理器可以自行打开、创建和解压缩 ZIP 文件，但也仅此而已。它无法处理大多数其他存档文件格式，如 RAR、7Z 或 Tarball。此外，大多数压缩文件都支持加密等功能，通过密码锁定文件访问权限。文件资源管理器不支持归档文件格式提供的任何高级功能。你会收到 "错误 0x80004005： 如果尝试使用文件资源管理器解压缩加密的 ZIP 文件，会出现 "错误 0x80004005：未指定的错误"。

解决方法很简单： 使用支持加密文件的其他程序。

有大量程序可用于管理压缩文件。其中一些，如 7-Zip 和 PeaZip 是完全免费的。这两款软件都是很好的选择，用哪个都不会错。

WinZip 和 WinRAR 是另外两个突出的选择，但从技术上讲都不是免费的。WinZip 提供 30 天的免费试用期，之后如果想继续使用，就需要购买。WinRAR 也提供试用期，但在试用期结束后，它会继续让你无限期地使用它。

## 排除 Windows 更新故障

错误 0x80004005 也可能在您尝试运行 Windows 更新时出现。通常情况下，它会在 Windows 更新因断电或网络中断等原因中断后出现。

首先要尝试 Windows 更新的内置故障排除程序。故障排除程序可能会自动解决导致错误的问题。

如果失败，您可以尝试手动删除所有更新文件并重新启动更新服务 - 如果错误是由于下载损坏造成的，那么应该可以解决问题。

## 修复网络相关原因

错误代码 0x80004005 最常出现在用户尝试连接网络附加存储（NAS）时，但在其他情况下也会发生。该错误并不具体，无法明确指出问题所在，但有几个可能的罪魁祸首。如果你正在运行两台 Windows PC，并试图通过局域网进行连接，那么你应该检查两台电脑上的所有这些设置。

## 检查服务器信息块 (SMB) 设置

SMB 是一种协议，可让同一网络中的计算机像客户端和服务器一样进行通信和运行。它最常用于实现计算机与打印机或计算机与 NAS 之间的通信，但也可用于其他用途。
目前使用的 SMB 有几个版本。SMB 第一版（或称 SMBv1）是最古老的标准，出于安全原因，现在已经很少使用。SMBv2 和 SMBv3 仍在普遍使用。

如果错误与 SMB 问题有关，有几种可能性：

1️⃣：SMB 服务未运行

2️⃣：AllowInsecureGuestAuth 已禁用，而您使用的 NAS 需要它

3️⃣：您尝试使用的设备或服务需要 SMBv1

首先检查 SMB 服务的状态。打开命令提示符、PowerShell 或 Windows 终端，然后运行以下命令：
```
sc.exe qc lanmanworkstation
```
你会得到与下面非常相似的输出结果：

![检查 SMB 服务的状态](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/smb-autostart.avif)

如果 "START_TYPE "未设置为 AUTO_START，则需要启用它。在与上一条命令相同的窗口中运行接下来的两条命令。
```
sc.exe config lanmanworkstation depend= bowser/mrxsmb10/mrxsmb20/nsi

sc.exe config mrxsmb20 start= auto
```
如果一切顺利，您将看到 [SC] ChangeServiceConfig SUCCESS。

如果还不行，下一步就是尝试允许不安全的访客登录。Windows 默认阻止访客登录到使用 SMB2 的网络设备。你可能需要禁用该设置--从安全角度看，这并不理想，但这在消费类设备中相当普遍。

启动注册表编辑器（RegEdit），然后使用左侧菜单导航到 HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters ，或者直接将路径粘贴到地址栏。

![启动注册表编辑器（RegEdit）](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/path-address.avif)

您要找的 DWORD 名为 AllowInsecureGuestAuth，如果没有，您需要创建它。

右键单击空白处，鼠标移至 "新建"，然后单击 "DWORD (32 位) 值"。将其命名为 "AllowInsecureGuestAuth"，并将值设置为 1。

![AllowInsecureGuestAuth](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/Change-DWORD-value-to.avif)

将值设为 1 后，尝试执行最初出现错误 0x80004005 的操作。 

**还有一种可能与 SMB 有关。**

您尝试连接的网络设备可能要求您使用 SMBv1，即该标准的最旧版本。Windows 10 和 Windows 11 默认禁用了这一功能，但仍有可能启用它。

点击 "开始" 按钮，在搜索框中输入 "Windows 功能"，然后点击 Enter 或点击 "打开"。Windows 功能窗口尚未迁移到 "设置 "应用中，因此如果要导航到该窗口，请前往 控制面板 > 程序 > 打开或关闭 Windows 功能。

![Windows 功能](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/windows-features-search-click-open.avif)

向下滚动，直到看到 "SMB 1.0/CIFS 文件共享支持"。单击小加号按钮，然后勾选 "SMB 1.0/CIFS 客户端"、"SMB 1.0/CIFS 服务器"，并取消勾选 "SMB 1.0/CIFS 自动删除"。然后点击 "确定"。

![SMB 1.0/CIFS 文件共享支持](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/click-SMB-Client-1-then-click-OK-1.avif)

Windows 会自动下载文件，并提示您重新启动计算机。检查并查看是否成功，如果没有，也不用担心。您还可以尝试更多方法。只要记住在继续之前再次禁用 SMB 1.0/CIFS。除非有需要，否则打开它是没有意义的，而且它是一个潜在的安全漏洞。

**网络发现和共享设置**

网络设备--如网络附加存储设备（NAS）或更糟糕的网络打印机--通常都非常棘手。网络发现或共享设置往往是故障所在。以下是你需要排除这些设置作为问题根源的方法。

打开网络设置。点击 "开始 "按钮，在搜索栏中输入 "高级共享选项"，然后点击 "打开 "或回车。你也可以从控制面板导航到那里，转到 控制面板 > 网络和 Internet > 网络和共享中心 > 高级共享设置。

![高级共享设置](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/click-open-manage-advanced.avif)

您可以根据所连接的网络类型自定义共享设置，一般来说，您的家庭网络应设置为专用网络。如果不是，Windows 10 和 Windows 11 只需点击几下，即可将网络从公共网络更改为专用网络。

点击右侧的 "专用 "或小楔形（看起来像向上的箭头），打开标有 "专用 "的部分。在 "打开网络发现"、"打开网络设备自动设置 "和 "打开文件和打印机共享 "旁边的气泡或气泡上打勾。

![打开文件和打印机共享](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/enable-setings-then-save.avif)

然后，向下移动到 "所有网络 "部分。

**注意⚠️：如果在启用这些设置的情况下连接到公共网络，其中一些设置可能会带来安全或隐私漏洞。如果你使用的是两台台式机，而且不会从家里搬走，那就没有问题。如果你使用的是笔记本电脑或其他便携式设备，最好在连接公共 Wi-Fi 网络前禁用它们。**

你需要点击三个设置： "打开共享，以便任何有网络访问权限的人都能读写公共文件夹中的文件"、"为使用 40 或 56 位加密的设备启用文件共享 "和 "关闭受密码保护的共享"。

注：如果两台电脑都是 Windows 设备，您应该在两台电脑上都试一下，但这些设置在服务器上比在试图连接的客户端上更重要。

![打开共享](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/all-network-settings.avif)

单击 "保存更改"，然后重新启动计算机。如果还不行，那就说明有其他问题--可能与允许局域网设备间连接的底层服务有关。

## 基本服务

SMB 只是众多软件组件中的一个，它能让你的电脑与局域网中的其他设备进行对话。Windows 有一些服务是网络共享工作所必需的：

1️⃣：DNS 客户端

2️⃣：DHCP 客户端

3️⃣：功能发现提供程序主机 (fdPHost)

4️⃣：功能发现资源发布 (fdResPub)

5️⃣：简单服务发现协议（SSDP）

6️⃣：UPnP 设备主机

DNS Client 和 DHCP Client 应该都会自动启动，而且可能运行正常。它们是计算机访问互联网所必需的；如果它们无法启动，你绝对会注意到，因为你的浏览器（和大多数其他应用程序）将无法工作。

其他设备共同为电脑提供了查看网络上其他设备并与之交互的能力。打开 "服务 "应用程序，查看它们的状态。有两种快速方法。你可以在 "开始 "菜单搜索栏中输入 "服务"，然后点击 "打开 "或回车。或者，你也可以点击 Windows+R，在运行框中输入 "services.msc"，然后点击 Enter。

![services](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/click-open-1.avif)

默认情况下，服务列表是按字母顺序排序的，如果您的服务没有按字母顺序排序，只需点击顶部的 "名称 "栏即可。向下滚动列表，检查我们列出的所有服务是否都设置为 "手动 "或 "自动"。

⚠️：如果网络发现功能已打开，共享功能已启用，并且您一直在尝试连接局域网上的设备，那么即使服务设置为手动，它们也应该在运行。如果没有，就说明出了问题。如果你的服务没有运行，而它们可能应该运行，请将它们从 "手动 "启动更改为 "自动"。

![从 "手动 "启动更改为 "自动"](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/two-services-manual-start.avif)

如果有任何服务设置为 "已禁用"，请右键单击该服务，然后单击 "属性"。

![单击 "属性"](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/click-properties.avif)

单击下拉菜单，选择 "自动 "或 "自动（延迟启动）"，然后单击 "应用 "和 "确定"。启动 Windows 时，服务将自动启动。

提示：如果你的电脑比较老，或者是低功耗的机器，你可能希望将其设置为延迟启动，这样在电脑尝试启动时就不会使 Windows 陷入困境。

![单击下拉菜单](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/drop-down-menu-then-change-to-automatic-then-click-apple-ok.avif)

仔细检查所有列出的服务，重新启动计算机，然后再试一次。

## NetBIOS

NetBIOS 是与通过局域网连接设备有关的另一个关键软件。如果它没有运行，就会导致错误 0x80004005。让我们仔细检查一下你的设置，确保不是这个问题。

点击 "开始 "按钮，在搜索栏中输入 "网络连接"，然后点击 Enter 或点击 "打开"。

![网络连接](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/search-network-connections-then-click-open.avif)

右键单击用于连接局域网的网络适配器，然后单击 "属性"。由于硬件配置不同，不同电脑上的适配器也会有所不同，但有线连接的名称中一般会有以太网，而 Wi-Fi 适配器的名称中则会有 Wi-Fi。

![网络适配器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/right-click-your-network-adapter-then-click-properites.avif)

向下滚动，直到看到 "Internet 协议版本 4 (TCP/IPv4)"，选择它，然后单击 "属性"。

![Internet 协议版本 4 (TCP/IPv4)](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/click-ipv4-then-click-properties.avif)

点击 "高级"。

![点击 "高级"](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/click-advanced.avif)

单击 "WINS "选项卡，然后查看窗口底部。默认 "设置应该有效。如果 NetBIOS 设置为 "禁用"，请启用默认设置。但是，如果选择了 "默认"，但仍出现错误，请尝试将设置更改为 "已启用"。单击 "通过 TCP/IP 启用 NetBIOS "旁边的空格，然后单击 "确定"。

![单击 "WINS "选项卡](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/click-wins-tab-set-to-enabled-then-click-ok.avif)

点击 "确定 "关闭之前打开的所有其他窗口，然后看看错误是否仍然出现。

## 禁用 IPv6

互联网协议版本 6（或称 IPv6）是未来的趋势，正在慢慢成为一种标准。然而，采用新标准并不是一个快速或简化的过程。确保对 IPv4 设备的传统支持偶尔会出现故障。

出现 "错误： 0x80004005." 解决方法当然很简单： 关闭它。大多数情况下并不需要这样做。

Windows 10 上的窗口看起来有些不同，但过程基本相同。

提示：打开 "设置 "应用程序，然后导航至 "网络和互联网">"（您的网络名称）">"硬件属性"，然后单击 DNS 设置区域中的 "编辑"。

如果同时使用 WLAN 和以太网连接局域网，请确保同时禁用这两种网络的 IPv6。

![IPv6](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/network-ipv6.avif)

向下滚动到 IPv6，然后将开关单击到关闭位置。

![关闭 IPv6](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/turn-it-off-like-a-liight-switch.avif)

再次重启电脑，看看是否仍然出现错误。

## 修复本地文件错误

错误代码 0x80004005 并不局限于网络设备，有时当你试图访问或操作本地文件或文件夹时，Windows PC 上也会出现这种情况。幸运的是，这种情况下的原因列表如下。

**权限或所有权问题**

如果你在处理本地文件时遇到 0x80004005 错误，那么问题可能出在权限或所有权上。

首先，检查你的用户账户是否拥有给你带来麻烦的文件或文件夹的所有权。如果没有，首先应尝试获取文件或文件夹的所有权。

获得文件所有权后，下一件事就是手动调整权限。右键单击文件或文件夹，然后单击 "属性"。

![单击 "属性"](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/right-click-example-then-click-properties.avif)

前往 "安全 "选项卡，选择 "用户 "组，然后查看下面列出的权限。应勾选 "完全控制"。如果没有，请单击 "编辑"。

![文件夹权限](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/0x80004005/example-folder-permissions.avif)

在列表中勾选 "完全控制"，所有其他选项也会自动启用。然后点击 "应用 "和 "确定"。

如果电脑上只有一个用户账户，你的用户账户可能同时属于用户组和管理员组。在 "属性 "窗口中检查这两个用户账户的权限--管理员组中的任何用户账户都应该拥有 "完全控制 "权限，但确定一下也无妨。

确认拥有所有权和完全控制权后，检查是否仍出现错误。

## 总结

本文是在 Windows 10 电脑之间无法访问局域网电脑，无法链接共享的打印机，提示：Windows 无法访问局域网电脑，出现错误代码 0x80004005，找不到网络路径。为了解决这个问题，搜索了中文互联网上的内容，怎奈垃圾内容太多，最终参考了这篇博文[How to Fix Error Code 0x80004005 on Windows 10 and Windows 11](https://www.howtogeek.com/810837/how-to-fix-error-code-0x80004005-on-windows-10-and-11/)。通过新建 DWORD 名为 AllowInsecureGuestAuth 的注册表，解决了无法连接局域网电脑的问题。

Welcome to our [website](https://blog.tigress.cc/)
