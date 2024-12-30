---
layout: post
title:  在 Windows 11 中重启文件资源管理器的 4 种方法
subtitle: 任务管理器未响应怎么解决？
tags:
    - Windows
---

![在 Windows 11 中重启文件资源管理器的 4 种方法](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/windows/restart%20File%20Explorer.avif)

当 Windows 10 或 11 上的文件资源管理器未响应、不稳定或无法访问项目时，重启它是让它正常工作的好办法。当文件资源管理器出现问题时，你正忙着处理事情，没有什么比无法访问文件和文件夹更恼人的了。不幸的是，它会在各种情况下发生，而且往往是在最急人的时候。

幸运的是，重新启动它并不像你想象的那么困难。有多种方法可以让你根据自己的情况使用最佳方法。有些方法会更有效，这取决于你当时在做什么。

## 1. 从任务管理器重启文件资源管理器

![从任务管理器重启文件资源管理器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/windows/1-restart-file-explorer-from-task-manager-windows-11.avif)

重启文件资源管理器的一个更直接有效的方法是通过任务管理器重启。按 Ctrl+Shift+Esc 打开任务管理器，选择 “进程 ”选项卡。右键单击 Windows 资源管理器，然后从出现的菜单中单击 “重启 ”选项。

Windows 有两个不同的组合键，如果你想查看正在运行的应用程序或停止一个应用程序，你可以用它们来打开任务管理器。

✨你可以通过同时按下 Ctrl + Shift + Esc 来打开任务管理器。这将直接打开任务管理器。
    
✨你也可以在 GINA 屏幕上按住 Ctrl + Alt + Del 来打开任务管理器。

## 2. 关闭 explorer.exe 并运行一个新实例

**当整个电脑死机时可能更有效**

![杀死 explorer.exe 并运行一个新实例](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/windows/2-kill-restart-explorer-exe-windows.avif)

如果基本重启选项不起作用，可以杀死 explorer.exe 任务并手动完全重启。

⭐按 Ctrl+Shift+Esc 并选择 “进程 ”选项卡。

⭐右键单击 Windows 资源管理器，然后从菜单中选择 “结束任务”。

⭐除了任务管理器外，其他一切都将从屏幕上消失。

⭐单击窗口顶部的运行新任务，输入 explorer.exe，然后单击确定。

结束任务后，除任务管理器外的所有内容都会从屏幕上消失。不过，运行新任务后，桌面和任务栏会重新出现，文件资源管理器也会顺利恢复工作。因此，如果上述重启方法不起作用，请使用此选项 “强制退出 ”资源管理器进程并手动重启。

## 3. 从命令行重新启动文件资源管理器

![从命令行重新启动文件资源管理器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/windows/3-restart-file-explorer-powershell-windows.avif)

当文件资源管理器未响应时，您可能无法访问任务管理器。或者，您可能不喜欢 GUI 而更喜欢命令行的简单性。无论哪种情况，您都可以从系统的 PowerShell 或命令提示符实用程序轻松重新启动文件资源管理器。

以管理员身份启动 PowerShell 或命令提示符并按顺序运行以下命令：
```
taskkill /f /im explorer.exe
```
```
start explorer.exe
```
成功运行命令后，任务栏、桌面和 Windows 体验的其他可视化元素将重新出现。

## 4. 创建批处理文件以重启文件资源管理器

**提前做好准备以防万一**

![创建批处理文件以重启文件资源管理器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/windows/5-save-bat-file-save-restart-file-explorer.avif)

如果你需要经常重启文件资源管理器，你可能会想创建一个批处理文件来简化这一过程，而不是一直在任务管理器或命令行中操作。使用记事本和三行脚本创建批处理文件非常简单。

启动记事本，复制以下三行。
```
taskkill /f /IM explorer.exe
start explorer.exe
exit
```
单击文件 > 另存为。在 “另存为 ”对话框中，选择一个方便的位置保存批处理文件。

为文件输入一个易于识别的名称。将 .txt 扩展名改为 .bat 并单击保存按钮。

按照步骤操作后，.bat 文件将保存到您选择的目录中。现在，你可以双击批处理文件，自动重启文件资源管理器。这样就省去了通过任务管理器或命令行单独重启的步骤。

在处理事情和需要访问重要文件时，最恼人的莫过于文件资源管理器未响应，让你无法访问文件和文件夹。不过，使用上述一个或多个选项就可以重新启动它，访问你最需要的文件和文件夹。

[告别弹窗广告，360 免费杀毒安全卫士替代品。](https://tigress.cc/2024/08/03/free-antivirus/)
