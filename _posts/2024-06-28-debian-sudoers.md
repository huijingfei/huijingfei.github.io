---
layout: post
title: 如何在 Debian 12、11 或 10 上向 Sudoers 添加新用户
tags:
    - Debian 用户权限
---

![如何在 Debian 12、11 或 10 上向 Sudoers 添加新用户](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/sudoer/How-to-Add-a-New-User-to-Sudoers-on-Debian.webp)

在 Debian 中将用户添加到 sudoers 文件非常简单，并且增强了系统管理和安全性。本指南提供了一种清晰有效的方法来授予用户管理权限，确保他们可以使用超级用户权限执行命令。

易于管理：快速、安全地向受信任的用户授予管理员权限。

增强的安全性：限制对管理命令的访问，以防止未经授权的系统更改。

灵活性：自定义特定管理任务的用户权限。

效率：通过允许多个用户管理系统操作来简化日常任务。

这种简化的方法可确保您在根据需要委派职责的同时保持对系统的控制。通过执行这些步骤，您将有效地管理用户权限并保证 Debian 系统的安全。

让我们深入了解在 Debian 上向 sudoers 文件添加新用户的技术步骤。

## 更改为 Root 帐户

要在 Debian 上添加具有 sudo 权限的新用户，请首先切换到 root 帐户。您在 Debian 安装期间创建了此帐户并设置了其密码。

使用命令：
```
su
```

验证root密码正确后，用户名将显示为“root”，表明您已切换到root用户。

输出示例：
```
root@debian:/home/joshua# 
```
## 如果尚未安装，请安装“sudo”软件包
```
sudo apt install sudo
```
## 创建新用户帐户

要建立新用户，我们使用 adduser 命令，并附上您所需的用户名。例如：
```
sudo adduser <example username>
```
例如，要添加名为“josh”的用户：
```
sudo adduser josh
```
运行此命令后，Debian 将启动用户创建过程。系统会立即要求您指定密码。鉴于密码在保护帐户方面的重要性，选择弹性密码至关重要。目标是大写字母、小写字母、数字和符号的混合。密码是防止未经授权访问的第一道防线，对于具有 sudo 权限的用户来说更是如此。

![Debian 将启动用户创建过程](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/sudoer/example-set-new-password-on-new-user-account-on-debian.png)

**提供补充用户信息**

定义密码后，Debian 会寻求有关用户的其他详细信息，例如他们的全名或联系数据。尽管不是强制性的，但提供这些数据可以使具有多个用户的系统受益，从而确保用户身份的清晰度。如果您不想共享额外信息，请按 Enter 键，系统将进入后续提示。

![Debian 会寻求有关用户的其他详细信息](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/sudoer/new-user-added-to-debian-all-information-is-correct.png)

完成后，按“Y”确认您的详细信息，然后输入。

## 验证用户添加

创建后，验证 Debian 是否确实记录了新用户是谨慎的做法。一种简单的方法涉及 cat 命令，目标是 /etc/passwd 文件：
```
cat /etc/passwd
```
此命令检索所有系统用户的列表。在此列表中发现新创建的用户表示添加成功。

![检索所有系统用户的列表](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/sudoer/list-users-to-confirm-sudo-status-on-debian-linux.png)

/etc/passwd 文件是 Debian 结构的基本部分，它记录了有关用户的关键数据，包括用户名、用户 ID、组 ID、主目录和选择的 shell。作为系统管理员或用户，了解此文件的重要性可以帮助完成从用户身份验证到复杂的系统管理等任务。定期重新访问和维护该文件可确保系统的顺利运行。

## 将新用户添加到 Sudoers 组

在下一节中，学习了如何向系统添加用户后，您现在将学习如何向新添加的或现有的用户授予 sudo 权限。

为此，请执行以下命令：
```
sudo usermod -aG sudo <example username>
```
出于说明目的，如果您希望向名为“josh”的用户授予权限，您可以输入：
```
sudo usermod -aG sudo josh
```
确保用户确实已合并到 sudoers 组中至关重要。您可以通过使用 id 命令来确定这一点：
```
id <username>
```
通过将 <username> 替换为特定用户的名称，该命令提供有关用户的详细信息，封装其用户 ID、组 ID 以及任何其他组从属关系。值得注意的是，如果“sudo”出现在组列表中，则该用户被赋予了 sudo 权限。

例如，为用户“josh”运行命令将显示如下：
```
id josh
```
预期输出结果为：
```
uid=1001(josh) gid=1001(josh) groups=1001(josh),27(sudo)
```
授予 sudo 权限的另一种途径是部署 gpasswd 命令：
```
gpasswd -a <example username> sudo
```
将 <用户名> 替换为所需的用户名。此命令将用户集成到 sudo 组，授予他们 sudo 权限。

例如：
```
gpasswd -a joshua sudo
```
结果输出应该是：
```
adding joshua to group sudo
```
## 确认新的 Sudo 用户

成功授予 sudo 权限后，明智的做法是评估用户的能力。这可以使用 su 命令来实现：
```
su <example username>
```
将 <username> 替换为您授予 sudo 访问权限的用户的名称。此操作会将您转换到用户的帐户，使您能够验证他们的 sudo 功能。

举例说明：
```
su josh
```
通过执行以下命令验证用户名：“sudo whoami。”
```
sudo whoami
```
输入正确的 sudo 用户凭据后，将会出现一条确认信息，突出显示用户在 Debian 上管理管理任务的能力。

预期输出结果是：
```
root
```
恭喜，您已成功将新用户添加到 sudoers 组并授予他们在 Debian 上提升的权限。

## 结论

总而言之，当您想要将新用户添加到 Debian 上的 sudoers 组时，您可以创建用户帐户、设置其密码并授予他们 sudo 访问权限。此过程要求您登录 Debian root 帐户、创建用户帐户、选择密码、将用户添加到 sudoers 组并验证其 sudo 访问权限。请谨慎对待授予 sudo 访问权限的人，因为它提供了对系统的重要控制。只有受信任的用户才应获得这些权限以维护系统安全。

Welcome to our [website](https://blog.tigress.cc/)
