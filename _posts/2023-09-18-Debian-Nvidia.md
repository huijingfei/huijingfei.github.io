---
layout: post
title: ﻿Debian 12 Bookworm 安装 Nvidia 独立显卡驱动以及显卡模式切换
subtitle: 基于 Debian 的 Linux 发行版安装英伟达 GPU Driver 显卡驱动
tags:
    - Debian
---

## 一：安装 Nvidia Linux 显卡驱动

***1. 使用 vi/nano 或者其他文本编辑器编辑 /etc/apt/sources.list 这个文件，替换为以下镜像或者国内其他的镜像站点。***

中科大镜像站
```
deb https://mirrors.ustc.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
#deb-src https://mirrors.ustc.edu.cn/debian/ bookworm main contrib non-free non-free-firmware

deb https://mirrors.ustc.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
#deb-src https://mirrors.ustc.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware

deb https://mirrors.ustc.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
#deb-src https://mirrors.ustc.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware

deb https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware
#deb-src https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware
```
[Debian 软件仓库镜像使用帮助](https://help.mirrors.cernet.edu.cn/debian/)

***2. 更新下系统***
```
apt update && apt upgrade
```
***3. 安装 Nvidia 驱动***
```
apt install linux-headers-amd64 nvidia-driver nvidia-smi nvidia-kernel-dkms
```
一般来说安装 nvidia-driver 这个包就可以。 如果不确定，可以安装使用 nvidia-detect 命令识别 GPU 来确认推荐的驱动程序包。
   
***4. 检查驱动是否正常工作:***
```
nvidia-smi 
```
如果提示错误 NVIDIA-SMI has failed because it could not communicate with the NVIDIA driver. 那么是因为你的电脑或者笔记本启用了安全启动，解决方法为进 BIOS 关闭安全启动，或者使用 mokutil 更新 Nvidia UEFI 安全启动签名。

**使用 mokutil 导入密钥的方法:**

安装 nvidia 官方仓库的包，所以密钥都已经帮我们生成好了，只需要我们手动导入即可；生成的密钥在 /var/lib/dkms 下，后缀名为 der 的就是你要的密钥文件。
```
mokutil --import /var/lib/dkms/mok.pub
```
输入，回车之后，系统会让你输入密码，随意，尽量简单，输完还会让你重输一次确认，该密码主要是用来确认证书是由“自然人”安装的，不是恶意程序导入的，在你待会儿重启的时候，甚至在grub都没加载之前，主板就会开始问你是否导入证书以用来安全启动认证，到时候你就输入这个密码，确认即可。
```
reboot
```
重启之后选择 Enrool MOK ➡️ Continue ➡️ Yes，输入上文设置的简单易输的密码，回车 ➡️ Reboot。
   
若 nvidia-smi 提示以下信息，那么说明 Nvidia 驱动安装成功了。
   
   ![nvidia-smi](https://github.com/huijingfei/Blog_Gitalk/raw/main/Images/nvidia-smi.webp)
   
***5. 禁用开源驱动***

一般来说安装 NVIDIA 专有驱动会自动禁用 Nouveau 驱动，首先 通过命令 ls /etc/modprobe.d/ 查看是否有类似 blacklist-nvidia-nouveau.conf 这样的文件，如果没有通过以下命令添加：
```
sudo echo blacklist nouveau > /etc/modprobe.d/blacklist-nvidia-nouveau.conf
sudo update-initramfs -u
```   
***6. 安装 nvidia-driver 包后，重新启动计算机。***

## 二：在 Intel/AMD 和 NVIDIA GPU 之间切换。

与 Ubuntu 不同，Debian 没有用于在台式机/笔记本电脑中的集成显卡和 NVIDIA GPU 之间切换的 nvidia-prime 软件包。然而，有一个免费的开源工具 “envycontrol” 可以让切换显卡非常轻松。

1️⃣ 首先，从其发布页面下载软件包（其“python3-envycontrol_xxx_all.deb”）：[Download Envycontrol](https://github.com/bayasdev/envycontrol/releases)

![python3-envycontrol](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/python3-envycontrol.webp)

2️⃣ 下载软件包后，打开终端并运行命令来安装它：
```
sudo dpkg -i python3-envycontrol*.deb
```
3️⃣ 安装 envycontrol 后，您可以运行以下命令之一来切换 GPU 模式：
   
切换到集成显卡 (Intel 或者 AMD):
```
sudo envycontrol -s integrated
```
切换到混合模式，平衡性能和功耗:
```
sudo envycontrol -s hybrid --rtd3
```
切换到 NVIDIA 独立显卡模式，:
```
sudo envycontrol -s nvidia --force-comp
```   
4️⃣ 完成 GPU 模式切换后，请记住重新启动计算机以应用更改。

5️⃣ 对于gnome 桌面用户，可以安装 [GPU profile selector](https://extensions.gnome.org/extension/5009/gpu-profile-selector/) 插件，可以更好的切换 GPU 模式。

![GPU profile selector](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/GPU%20profile%20selector.webp)

6️⃣ 完成后，您应该能够通过右上角的系统菜单（又名“快速设置”）切换 GPU。

![GPU profile selector](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/Debian%20GPU%20profile%20selector.webp)

点击切换模式后，会提示输入密码确认，完成后稍等一会系统会重新启动。笔记本直接选择混合模式平衡性能与功耗，台式机则选择 Nvidia 独立显卡。

![envycontrol Switch GPU verify](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/envycontrol%20Switch%20GPU%20verify.webp)

7️⃣ 要验证哪个显卡处于活动状态，请运行命令：
```
glxinfo |grep -E "OpenGL vendor|OpenGL renderer"
```
或者
```
envycontrol --query
```
   ![envycontrol --query](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/envycontrol%20--query.webp)

## 对于 GNOME 桌面，“设置”中的“关于”页面还可以告诉您正在使用哪个显卡。

   ![Debian About Page](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/Debian%20About%20Page.webp)
