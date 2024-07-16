---
layout: post
title: ﻿如何禁用Microsoft Edge / Chrome 在 Windows 7 上的系统升级提示条?
subtitle: 一个命令禁用微软谷歌浏览器在 Windows 7 上的系统升级提示条
tags:
    - Windows
---
# [干掉烦人的Edge/Chrome升级提示总共分几步？]
![Chrome/Edge升级提示](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/warning.webp)

如果您在 Windows 7、Windows 8 或 Windows 8.1 操作系统中使用 Google Chrome 或 Microsoft Edge 网络浏览器，并且想要移除网络浏览器顶部显示的不受支持的操作系统警告消息，本文将为您提供帮助。

**为什么 Chrome 和 Edge 显示不支持的操作系统警告消息？**

Chrome 109 和 Edge 109 是这两种浏览器支持 Windows 7/8/8.1 的最后版本。Chrome 110 和 Microsoft Edge 110 版本将不支持 Windows 7/8/8.1。为了提醒用户此更改，两个浏览器都会显示此警告，以便用户可以将其设备升级到 Windows 10 或 Windows 11 操作系统。不想升级 Windows 版本的用户可以继续使用旧版本的 Chrome 和 Edge，但他们将来不会收到这些网络浏览器的任何更新。

我分别搜索中英文互联网上的解决方法，有的需要需要到注册表里寻找到相关的路径，然后再新建项目写各种值。对于非技术人员来说确实难度有点高，即使是有基础技术的光是找注册表就是个大麻烦事。而有的则是给出了一段文本，改成注册表文件，再双击添加到注册表即可，我试了一下没有成功。

在 Reddit 论坛上，我看到国外的大神给出了非常简单的一条命令行，使用这个方法只需要三步即可禁用 Chrome/Edge 升级提示条。

1: Chrome 用户复制这条命令：
```
reg add "HKCU\Software\Policies\Google\Chrome" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f
```
2: 左下角点击开始，搜索框输入cmd，点击cmd.exe打开命令行窗口。
![cmd命令行](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/CMD.webp)

3: 粘贴刚才复制的命令，回车后看到提示：The operation completed successfully. 恭喜你，chrome的升级提示已被成功干掉。
![禁用Chrome升级提示](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/operation.webp)

## [其他基于Chromium的浏览器的命令如下]

Edge用户复制这条命令：
```
reg add "HKCU\Software\Policies\Microsoft\Edge" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f
```
------------------------------------------------------

Brave用户复制这条命令：
```
reg add "HKCU\Software\Policies\BraveSoftware\Brave" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f
``` 
------------------------------------------------------

Chromium用户复制这条命令：
```
reg add "HKCU\Software\Policies\Chromium" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f
```
------------------------------------------------------

写在最后：这个烦人的升级提示，无法在设置中关掉而且每次打开都会显示，谷歌是始作俑者。我个人认为可以把它归为流氓行为，我建议大家减少Chrome的使用，转而使用Edge/Brave等基于Chromium的浏览器，甚至更进一步使用Firefox。这种流浪程度确实比不过360，但是我们不能以五十步笑百步的态度打死360而原谅谷歌。就像家暴一样只有一次和无数次，而我们要做的就是对谷歌说不。
