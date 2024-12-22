---
layout: post
title: Debian/Ubuntu 如何安装微信 Linux 原生版本
subtitle: Debian/Ubuntu/Mint 如何安装 WeChat for Linux 微信 Linux 原生重构版本；(非Electron，非 wine 版)
tags:
    - Debian
---

## wechat_for_linux；weixin_for_linux；wechat-beta；微信；Linux 原生版微信支持看一看，搜一搜，朋友圈，小程序，视频号等功能

**⚠️注意** [微信 Linux 版官方版](https://linux.weixin.qq.com/)已经可以直接安装使用，本篇文章仅作为备份。使用以下任意命令直接安装即可，Debian 测试可用， Ubuntu 未测试。
``
sudo dpkg -i WeChatLinux_x86_64.deb
sudo apt install WeChatLinux_x86_64.deb
```

![linux原生微信](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/Linux%20WeChat.webp)

wechat-beta版本微信-绕过登录检测：[wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux)

```
sudo dpkg -i  wechat-beta_1.0.0.145_amd64.fixed.deb 
```

另推荐微信客户端 AppImage 版：[WeChat-AppImage ](https://github.com/zydou/WeChat-AppImage)，这个版本更新一些，更新及时；有 .AppImage 和 .tar.xz 两种格式；并且有 x86 和 aarch64 两种架构，我们一般选择 x86 版本的即可。（⚠️ 微信团队已发布官方版AppImage, 此仓库不再维护）

[微信 Linux 版官方版下载地址](https://linux.weixin.qq.com/)，直接下载 X86 AppImage 版本，使用AppImage 版需要自己设置绕登录检测。

![微信 Linux 版官方版](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/wechat-linux/WeChat%20AppImage.webp)

最简单的使用较新版本的方法，先安装 [wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux).deb，

然后下载 [WeChat-AppImage ](https://linux.weixin.qq.com/) 版的 X86 AppImage 包，然后右键选择 properties 属性，打开 Executable as program。使用以下命令解压 AppImage 包。

```
./WeChatLinux_x86_64.AppImage --appimage-extract
```
解压后得到一个 squashfs-root 文件夹，在 /squashfs-root/opt/ 目录下有一个 wechat 文件夹，把这个文件夹复制到 Downloads 下并改名为 wechat-beta。

这样做是为了通过安装 deb 包在系统中配置好绕登录检测，然后替换微信安装后的文件达到手动更新版本的目的。

**注意：先对比一下 Deb 安装完成后的目录与 .tar.xz 压缩包解压后的目录的区别：**

![wechat-beta Linux](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/wechat-beta%20Linux.webp)

![Linux WeChat Appimage](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/Linux%20WeChat%20Appimage.webp)

可以看到 wechat-beta for Linux 目录下有个 icons 文件夹，这个是显示微信图标用的；而 .tar.xz 压缩包解压后的目录有个 licence 文件夹，这个手动设置绕登录检测用的，这个不用管，因为安装 Deb 包的时候已经设置好绕登录检测了。

⚠️：实测解压后的文件直接替换即可。

先删除 /opt 下 wechat-beta 的目录：
```
rm -r /opt/wechat-beta
```
然后再把 AppImage 包解压后的的到的 wechat 文件夹改名为 wechat-beta，并移动或复制到 /opt 目录下
```
cp -r wechat-beta /opt/
```
此时，到微信关于可以看到是最新版的， dpkg -l 命令其实还是老版本，这个不影响使用。如果有强迫症，可以修改以下文件中的 wechat-beta 版本信息。
```
/var/lib/dpkg/status
```
![linux 微信](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/wechat%20linux.webp)

⚠️：一定要把图标文件夹备份并复制到 /opt/wechat-beta/ 目录下。
```
cp -r icons /opt/wechat-beta
```

## 原生版微信支持的功能

🐧 可收发：文本消息、小黄脸表情、添加表情、商店表情、语音消息、公众号内容转发消息、小程序消息、视频号内容消息、引用的消息。

🐧 可响应其他人撤回消息。

🐧 可跟企业微信联系人发送和接收消息。

🐧 复制、删除、转发、保存（已下载的图片、文件、视频）、语音转文字（语音）、在文件夹中显示（文件）。

🐧 收发 1G 内文件，收发图片和视频（100M 内按图片发，100M~1G 按文件发）。

🐧 双人音频通话、双人视频通话、视频通话过程中可以随时开启和关闭摄像头。

Welcome to our [website](https://blog.tigress.cc/)
