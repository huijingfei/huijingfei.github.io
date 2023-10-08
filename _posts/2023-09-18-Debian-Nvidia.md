---
layout: post
title: ﻿Debian 12 Bookworm 安装 Nvidia 独立显卡驱动以及显卡模式切换
tags:
    - Debian
    - Bookworm
    - Nvidia
    - Linux
    - Driver

---

## 一：安装 Nvidia Linux 驱动

1. 使用 vi/nano 或者其他文本编辑器编辑 /etc/apt/sources.list 这个文件，替换为以下镜像或者国内其他的镜像站点。

阿里云镜像站

    deb https://mirrors.aliyun.com/debian/ bookworm main non-free non-free-firmware contrib
    deb-src https://mirrors.aliyun.com/debian/ bookworm main non-free non-free-firmware contrib
    deb https://mirrors.aliyun.com/debian-security/ bookworm-security main
    deb-src https://mirrors.aliyun.com/debian-security/ bookworm-security main
    deb https://mirrors.aliyun.com/debian/ bookworm-updates main non-free non-free-firmware contrib
    deb-src https://mirrors.aliyun.com/debian/ bookworm-updates main non-free non-free-firmware contrib
    deb https://mirrors.aliyun.com/debian/ bookworm-backports main non-free non-free-firmware contrib
    deb-src https://mirrors.aliyun.com/debian/ bookworm-backports main non-free non-free-firmware contrib

2. 执行 sudo apt-get update

3. 安装 Nvidia 驱动 sudo apt install nvidia-driver, 一般来说安装 nvidia-driver 这个包就可以。 如果不确定，可以安装使用 nvidia-detect 命令识别 GPU 来确认推荐的驱动程序包。

4. 使用命令 nvidia-smi 检查驱动是否正常工作，如果提示错误 NVIDIA-SMI has failed because it could not communicate with the NVIDIA driver. 那么是因为你的电脑或者笔记本启用了安全启动，解决方法为进 BIOS 关闭安全启动，或者使用 mokutil 更新 Nvidia UEFI 安全启动签名。

   若 nvidia-smi 提示以下信息，那么说明 Nvidia 驱动安装成功了。
   
   ![nvidia-smi](https://github.com/huijingfei/Blog_Gitalk/raw/main/Images/nvidia-smi.webp)
   
5. 禁用开源驱动

       sudo echo blacklist nouveau > /etc/modprobe.d/blacklist-nvidia-nouveau.conf
       sudo update-initramfs -u
   
7. 安装 nvidia-driver 包后，重新启动计算机。

## 二：在 Intel/AMD 和 NVIDIA GPU 之间切换。

   与 Ubuntu 不同，Debian 没有用于在台式机/笔记本电脑中的集成显卡和 NVIDIA GPU 之间切换的 nvidia-prime 软件包。然而，有一个免费的开源工具 “envycontrol” 可以让切换显卡非常轻松。

1. 首先，从其发布页面下载软件包（其“python3-envycontrol_xxx_all.deb”）：[Download Envycontrol](https://github.com/bayasdev/envycontrol/releases)

   ![python3-envycontrol](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/python3-envycontrol.webp)

2. 下载软件包后，打开终端并运行命令来安装它：

       sudo dpkg -i python3-envycontrol*.deb

3. 安装 envycontrol 后，您可以运行以下命令之一来切换 GPU 模式：

   
    切换到集成显卡 (Intel 或者 AMD):

       sudo envycontrol -s integrated

    切换到混合模式，平衡性能和功耗:

       sudo envycontrol -s hybrid --rtd3

    切换到 NVIDIA 独立显卡模式，:

       sudo envycontrol -s nvidia --force-comp

4. 完成 GPU 模式切换后，请记住重新启动计算机以应用更改。

5. 对于gnome 桌面用户，可以安装 [GPU profile selector](https://extensions.gnome.org/extension/5009/gpu-profile-selector/) 插件，可以更好的切换 GPU 模式。

   ![GPU profile selector](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/GPU%20profile%20selector.webp)

   完成后，您应该能够通过右上角的系统菜单（又名“快速设置”）切换 GPU。

   ![GPU profile selector](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/Debian%20GPU%20profile%20selector.webp)

   点击切换模式后，会提示输入密码确认，完成后稍等一会系统会重新启动。笔记本直接选择混合模式平衡性能与功耗，台式机则选择 Nvidia 独立显卡。

   ![envycontrol Switch GPU verify](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/envycontrol%20Switch%20GPU%20verify.webp)

   要验证哪个显卡处于活动状态，请运行命令：

         glxinfo |grep -E "OpenGL vendor|OpenGL renderer"

   或者

         envycontrol --query

   ![envycontrol --query](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/envycontrol%20--query.webp)

## 对于 GNOME 桌面，“设置”中的“关于”页面还可以告诉您正在使用哪个显卡。

   ![Debian About Page](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/Debian%20About%20Page.webp)
