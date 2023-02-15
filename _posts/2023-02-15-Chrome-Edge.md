---
layout: post
title: ﻿如何禁用Microsoft Edge / Chrome在Windows 7上的系统升级提示条?
tags:
    - Chrome

---
# [干掉烦人的Edge/Chrome升级提示总共分几步？]
![Chrome/Edge升级提示](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/warning.webp)

我分别搜索中英文互联网上的解决方法，有的需要需要到注册表里寻找到相关的路径，然后再新建项目写各种值。对于非技术人员来说确实难度有点高，即使是稍微懂那么一点的光是找注册表就是个大麻烦事。而有的则是给出了一段文本，改成注册表文件，再双击添加到注册表即可，我试了一下没有成功。

在Reddit论坛上，我看到国外的大神给出了非常简单的一条命令行，使用这个方法只需要三步即可禁用Chrome/Edge升级提示。

------------------------------------------------------
1: Chrome用户复制这条命令：

------------------------------------------------------

    reg add "HKCU\Software\Policies\Google\Chrome" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f

------------------------------------------------------

2: 左下角点击开始，搜索框输入cmd，点击cmd.exe打开命令行窗口。
![cmd命令行](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/CMD.webp)

3: 粘贴刚才复制的命令，回车后看到提示：The operation completed successfully. 恭喜你，chrome的升级提示已被成功干掉。
![禁用Chrome升级提示](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/operation.webp)

# [其他基于Chromium的浏览器的命令如下]

Edge用户复制这条命令：

------------------------------------------------------

    reg add "HKCU\Software\Policies\Microsoft\Edge" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f
    
------------------------------------------------------

Brave用户复制这条命令：

------------------------------------------------------

    reg add "HKCU\Software\Policies\BraveSoftware\Brave" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f
    
------------------------------------------------------

Chromium用户复制这条命令：

------------------------------------------------------

    reg add "HKCU\Software\Policies\Chromium" /v SuppressUnsupportedOSWarning /t REG_DWORD /d 1 /f
    
------------------------------------------------------

写在最后：这个烦人的升级提示，无法在设置中关掉而且每次打开都会显示，谷歌是始作俑者。我个人认为可以把它归为流氓行为，我建议大家减少Chrome的使用，转而使用Edge/Brave等基于Chromium的浏览器，甚至更进一步使用Firefox。这种流浪程度确实比不过360，但是我们不能以五十步笑百步的态度打死360而原谅谷歌。就像家暴一样只有一次和无数次，而我们要做的就是对谷歌说不。
