---
layout: post
title: 什么是安全启动？
subtitle: 如何检查您的电脑上是否启用了安全启动？
tags:
    - Windows
---

![在 Windows 11 电脑上保持启用安全启动](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/secure%20boot/windows%20secure%20boot.webp)

🖥  安全启动是现代 PC 的一项重要安全功能，有助于在启动过程中保护您的数据免受恶意软件的侵害。

🖥  虽然安全启动主要与 Windows 相关，但它也是一种行业标准，也受到 Ubuntu 等各种 Linux 发行版的支持。

🖥  除非您需要安装不兼容的软件，否则请在 Windows 11 电脑上保持启用安全启动，因为这有助于保护您的系统。

如果你拥有一台相对现代的电脑，你可能听说过一种名为安全启动的功能。它是安装 Windows 11 的系统要求之一，顾名思义，它是一项安全功能。但它到底有多重要，你是否应该在电脑上启用安全启动功能呢？简短的回答是：是的，应该。

安全启动是现代 PC 所配备的众多安全系统之一，它在确保 PC 可以继续运行而不影响数据或自身可用性方面发挥着至关重要的作用。让我们来详细了解一下。

## 什么是安全启动？

![什么是安全启动？](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/secure%20boot/What%20is%20Secure%20Boot%3F%20.webp)
安全启动是一项行业标准，不仅 Windows 支持，Ubuntu 等各种 Linux 发行版也支持。安全启动是一个过程，在这个过程中，计算机在接通电源后会检查计算机上安装的所有软件的签名，以确保这些软件是可信的。这包括 UEFI 固件驱动程序、EFI 应用程序和操作系统本身。

如果其中一个元素的签名与受信任软件数据库不匹配，计算机将无法正常启动，需要启动恢复程序。这样可以防止恶意软件启动计算机，并可能危及您的数据，甚至根本无法使用电脑。

病毒和恶意软件可以通过多种方式进行攻击，但将自身注入启动过程是最危险的方案之一，因为它可以确保病毒始终在运行，并从你打开电脑的那一刻起就能对你的电脑造成危害。安全启动就是为了防止这种情况发生，从而大大降低攻击范围和使用电脑的风险，这也是 Windows 11 强制采用安全启动的原因。

尽管如此，安全启动并不是一个无懈可击的系统，特定 PC 的固件或硬件中的漏洞可能会危及安全启动。不过，这种情况并不常见。

## 我需要打开安全启动吗？

最有可能的是，不。如果您有一台支持安全启动的现代笔记本电脑或 PC，则考虑到它对于保护您的系统的重要性，该功能是开箱即用的。但是，可以关闭安全启动，并且检查安全启动是否已启用绝不是一个坏主意。

如果您想执行此操作，只需打开“开始”菜单并输入 msinfo32，然后按 Enter。您将看到一个名为“安全启动状态”的字段，应将其设置为“打开”。

![检查安全启动是否已启用](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/secure%20boot/windows-11-system-information-secure-boot-enabled.webp)

如果已关闭，可以在个人电脑 BIOS 中重新启用安全启动，制造商不同，启用方式也不同。

## 为什么要关闭安全启动？

既然安全启动如此重要，你可能会想为什么要关闭它，主要原因很简单。由于安全启动会检查操作系统的签名，这就意味着操作系统本身需要得到信任，电脑才能正常工作。由于 Linux 发行版层出不穷，并非所有发行版都能从原始设备制造商处获得安全启动密钥，这意味着有些操作系统即使完全正常，也会被视为 "不可信任"。

因此，知名度较低的 Linux 发行版要求你在 Windows 11 PC 上安装前关闭安全启动，这种情况并不少见。如果你真的需要特定的软件，你必须愿意承担这样的风险。值得庆幸的是，像 Ubuntu / Debian 这样的主流发行版都支持安全启动，但你必须根据具体情况进行检查。

![像 Ubuntu / Debian 这样的主流发行版都支持安全启动](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/secure%20boot/major%20distributions%20like%20Ubuntu%20do%20support%20Secure%20Boot.webp)

**如果可以，你应该继续启用安全启动**

最重要的是，如果你的电脑是 Windows 11，而且不需要任何与安全启动不兼容的软件，你就应该启用该功能。它是保护电脑免受恶意攻击的重要一环，有助于保持电脑正常运行和数据安全。

如果你确实需要特定的 Linux 发行版或某种与安全启动不兼容的软件，那么你可以在电脑固件中关闭该功能。不过，如果你这样做了，在浏览互联网时就应该加倍小心，避免把自己暴露给潜在的攻击者。

Welcome to our [website](https://blog.tigress.cc/)
