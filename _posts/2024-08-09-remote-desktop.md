---
layout: post
title:  Windows10/11 自带远程桌面及远程连接完整教程
subtitle: 图文教程：Windows 11 远程桌面连接使用指南
tags:
    - Windows
---
![Windows10/11 自带远程桌面及远程连接完整教程](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/How%20to%20Use%20Microsoft's%20Remote%20Desktop%20Connection.webp)

您需要远程访问和控制另一台Windows PC吗？ Microsoft 的远程桌面连接工具可以帮助您完成此任务。以下是如何设置和使用它。

需要从另一台计算机或移动设备访问远程 PC？ Microsoft 的远程桌面连接 (RDC) 工具可让您进行远程连接。只要远程 Windows 计算机已打开并设置为远程连接，您就可以抓取文件、打开应用程序、解决问题或只是远程工作。

通过 RDC，您可以通过同一网络远程访问多台 Windows 计算机，无论它们是在家里还是在办公室。如果您通过 VPN 或其他安全网关远程登录雇主的网络，则可以使用 RDC 连接到办公室或企业中的其他 PC（假设您的 IT 部门允许）。

要启动或接受远程连接，计算机必须运行 Windows 10 专业版或企业版或者 Windows 11 专业版或企业版。 Windows 家庭版不支持该功能。远程桌面连接内置于 Windows 中，但也可以从 Microsoft Store 安装。如果您想从非 Windows 设备访问和控制计算机，Microsoft 的 RDC 应用程序也适用于 Mac、iOS 和 Android。

## 设置 Microsoft 远程桌面连接

首先，您或其他人必须亲自登录您想要远程访问的电脑。转至“设置”>“系统”>“远程桌面”，在此计算机上启用远程桌面。打开远程桌面旁边的开关。单击“确认”以启用设置。

![设置 Microsoft 远程桌面连接](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Set%20Up%20Microsoft%20Remote%20Desktop%20Connection.webp)

在 Windows 10 中，应启用在插入电源时时保持电脑处于唤醒状态以进行连接的选项以及使你的电脑在专用网络上可发现的选项，保持这两个选项启用；同时，请单击“高级设置”链接。选中要求计算机使用网络级身份验证 (NLA) 进行连接旁边的框。 NLA 为同一网络上的远程连接增加了更严格的安全性，因为用户在访问远程 PC 之前必须经过身份验证。

假设您要连接到同一网络上的计算机，或者您在工作网络中使用 VPN 或专用网关，则可以忽略“外部连接”部分。远程桌面端口部分显示用于侦听和接受远程连接的默认端口。

![高级设置](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Advanced%20Settings.webp)

默认情况下，任何在远程 PC 上拥有管理员帐户的用户都可以访问它。假设您使用 Microsoft 帐户或公司的用户帐户登录 Windows，并且您的帐户具有管理权限，则最好的选择是仅使用该帐户远程登录。

如果您想向其他帐户授予远程访问权限，请返回远程桌面设置屏幕，然后单击选择可以远程访问此电脑的用户。选择添加并输入该帐户的用户名。记下这台计算机的名称，因为您需要它来远程登录。如果您想更改计算机名称，请按照下列步骤操作。

![选择可以远程访问此电脑的用户](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Select%20users%20that%20can%20remotely%20access%20this%20PC.webp)

Windows 11 省去了高级设置，仅显示 PC 名称和添加可访问 PC 的另一个帐户的选项。如果您需要授予不同帐户远程访问功能，请单击选择谁可以远程访问此电脑的设置。

![选择谁可以远程访问此电脑](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Select%20who%20can%20remotely%20access%20this%20PC.webp)

## 从 Windows 连接到远程 PC

现在，假设您想从家里使用的计算机连接到这台远程 PC。要在 Windows 10 中启动远程桌面连接工具，请单击“开始”按钮，向下滚动到“Windows 附件”文件夹，然后单击“远程桌面连接”快捷方式。

![从 Windows 连接到远程 PC](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Connect%20to%20a%20Remote%20PC%20from%20Windows.webp)

在 Windows 11 中，单击“开始”按钮，然后选择“所有应用程序”按钮。向下滚动并选择 Windows 工具。在此窗口中，单击“远程桌面连接”快捷方式。

![“远程桌面连接”快捷方式](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Remote%20Desktop%20Connection.webp)

在 RDC 窗口的计算机字段中键入远程 PC 的名称或 IP 地址。单击“显示选项”按钮，然后键入您将用于登录的帐户的用户名。如果您希望保存凭据以便无需每次都输入它们，请选中“允许我保存凭据”旁边的框，然后单击“连接”。

![允许我保存凭据](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Allow%20me%20to%20save%20credentials.webp)

在凭据窗口中输入您的密码。如果您不想每次使用此帐户时都输入密码，请选中“记住我”框。单击“确定”。您可能会收到一条消息，指出无法验证远程计算机的身份。选中“不再询问此计算机的连接”旁边的框，然后单击“是”。

![不再询问此计算机的连接](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Don't%20ask%20me%20again%20for%20connections%20to%20this%20computer.webp)

您现在应该可以连接到远程计算机，以便可以运行应用程序、处理文件以及执行其他任务。屏幕顶部是一个带有各种选项的蓝色连接栏。您可以将该栏固定到位，并使用左侧的图标检查连接速度。右侧的选项可让您将远程窗口最小化到任务栏、更改窗口大小以及终止远程会话。

![连接到远程计算机](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/connect%20to%20the%20remote%20computer.webp)

在远程桌面连接的设置屏幕中，您可以调整该工具的多项设置。在“常规”选项卡下，您可以将此远程会话的设置保存到 RDP 文件，然后将该文件复制到另一台计算机以传输这些设置。 “显示”选项卡允许您更改远程窗口的大小和颜色深度。

![远程桌面连接的设置屏幕](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/setup%20screen%20for%20Remote%20Desktop%20Connection.webp)

在“本地资源”下，您可以配置音频设置、选择何时应用 Windows 组合键以及选择要在远程会话期间使用的本地资源。您还可以在“体验”选项卡下手动调整连接速度以控制性能，并通过单击“高级”选项卡设置服务器身份验证的默认操作。

![在“本地资源”下](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Under%20Local%20Resources.webp)

## 使用适用于 Windows 的远程桌面应用程序进行连接

作为内置远程桌面连接工具的替代方案，您可以使用 Microsoft Store 中的 Microsoft 远程桌面应用程序。安装并启动该程序，然后单击添加按钮并选择 PC 来设置连接。键入您要连接的计算机的名称。

![Microsoft Store 中的 Microsoft 远程桌面应用程序](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Microsoft%20Remote%20Desktop%20app.webp)

如果您希望每次都被要求输入用户名和密码，请保持用户帐户字段不变。否则，请单击“用户帐户”旁边的加号 (+)，然后输入用户名和密码。您还可以添加显示名称，该名称将用作帐户昵称。单击“保存”。

![输入用户名和密码](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/username%20and%20password.webp)

双击远程 PC 的图标以连接到它。在证书屏幕上，选中“不再询问此证书”旁边的框，然后单击“连接”。

![不再询问此证书](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/Don't%20ask%20about%20this%20certificate%20again.webp)

您现在已连接到远程电脑。远程桌面应用程序在屏幕一侧使用黑色面板，而不是屏幕顶部的蓝色条。顶部的放大镜图标可以放大和缩小，而省略号图标可以在全屏和窗口模式之间切换。单击省略号图标，然后选择“断开连接”以结束连接。

![远程桌面应用程序在屏幕一侧使用黑色面板](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/remote%20desktop/the%20Remote%20Desktop%20app%20uses%20a%20black%20panel%20on%20the%20side%20of%20the%20screen.webp)

## 从 Mac 连接到 PC

如果您从 Mac App Store 安装 Microsoft 远程桌面应用程序，则可以从 Mac 连接到远程 Windows 计算机。启动应用程序并授予必要的权限。单击“添加 PC”按钮，然后输入 PC 名称或 IP 地址。

Welcome to our [website](https://blog.tigress.cc/)
