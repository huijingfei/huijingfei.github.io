---
layout: post
title: Debian/Ubuntu 如何安装微信 Linux 原生版本
subtitle: Debian/Ubuntu/Mint 如何安装 WeChat for Linux 微信 Linux 原生重构版本；(非Electron，非wine 版)
tags:
    - WeChat for Linux
    - 微信 Linux 原生版
---

## wechat_for_linux；weixin_for_linux；wechat-beta；微信；linux原生微信

![linux原生微信](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/Linux%20WeChat.webp)

wechat-beta版本微信-绕过登录检测：[wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux)

```
sudo dpkg -i  wechat-beta_1.0.0.145_amd64.fixed.deb 
```

另推荐微信客户端 AppImage 版：[WeChat-AppImage ](https://github.com/zydou/WeChat-AppImage)，这个版本更新一些，有 .AppImage 和 .tar.xz 两种格式；并且有 x86 和 aarch64 两种架构，我们一般选择 x86 版本的即可。

![微信客户端 AppImage 版](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/linux%20wechat%20version.webp)

微信微信客户端 AppImage 版本较新，同时拥有 x64 和 aarch64 版；但是AppImage 版需要自己设置绕登录检测：

最简单的使用较新版本的方法，先安装 [wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux).deb，

然后下载 [WeChat-AppImage ](https://github.com/zydou/WeChat-AppImage) 版的 .tar.xz 压缩包，解压后更改文件夹名称为 wechat-beta 然后复制整个目录到 [wechat_for_linux](https://github.com/lovechoudoufu/wechat_for_linux).deb 的安装目录。
```
cp -r wechat-beta /opt/
```
这样做是为了通过安装 deb 包在系统中配置好绕登录检测，然后替换微信安装后的文件达到手动更新版本的目的。

**注意：先对比一下 Deb 安装完成后的目录与 .tar.xz 压缩包解压后的目录的区别：**

![wechat-beta Linux](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/wechat-beta%20Linux.webp)

![Linux WeChat Appimage](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/Linux%20WeChat%20Appimage.webp)

可以看到 wechat-beta for Linux 目录下有个 icons 文件夹，这个是显示微信图标用的；而 .tar.xz 压缩包解压后的目录有个 licence 文件夹，这个手动设置绕登录检测用的，这个不用管，因为安装 Deb 包的时候已经设置好绕登录检测了。

为了保险起见，把 icons 文件夹先复制到 .tar.xz 压缩包解压后的目录，然后删除 /opt 下 wechat-beta 的目录：
```
rm -r /opt/wechat-beta
```
然后再把 .tar.xz 压缩包解压后的目录改名为 wechat-beta，并移动或复制到 /opt 目录下
```
mv -r wechat-beta /opt/
```
此时，到微信关于可以看到是最新版的， dpkg -l 命令其实还是老版本，这个不影响使用。如果有强迫症，可以修改以下文件中的 wechat-beta 版本信息。
```
/var/lib/dpkg/status
```
![linux 微信](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/wechat%20linux.webp)

Welcome to our [website](https://blog.tigress.cc/)
