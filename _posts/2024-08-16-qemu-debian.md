---
layout: post
title:  如何在 Debian 12 上安装和设置 Qemu
subtitle: Ubuntu Server/Debian下的 KVM 虚拟机创建及管理详解
tags:
    - Debian
---
无论您管理企业数据中心还是在家运行一些 Linux 机器，虚拟化都有可能简化您的基础设施。关键服务可以容器化到隔离但可移植的虚拟机 (VM) 中，从而实现高效的资源分配和灵活性。但虚拟化软件在专有平台上的许可成本历来很高。转向开源解决方案 QEMU 和 KVM – 免费解锁高性能、可扩展的虚拟化。

在这份综合指南中，您将获得有关在 Linux 上安装、配置和管理 QEMU/KVM 虚拟环境的专家见解。按照实际操作进行操作，您很快就会像专业人士一样进行虚拟化！

Qemu 是模拟器，代表开源的 "快速模拟器"。除了模拟器，它还被称为虚拟器。它可用于在 Windows、MacOS 和 Linux 等多种平台上运行任何操作系统，无论其架构如何。运行 Qemu 非常简单，因为它不需要运行任何主机补丁，因此使用起来简单可靠。第二种模式仅适用于 Linux 发行版。

![如何在 Debian 12 上安装和设置 Qemu](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/debian%20qemu.jpg)

## QEMU 和 KVM 简介：强大的组合

在较高级别上，QEMU 处理虚拟机的模拟工作负载，而 KVM 则利用处理器上的硬件扩展进行优化。但深入研究后会发现各组件之间存在复杂的相互作用。

**QEMU – 多才多艺的模拟器**

QEMU 于 2000 年代初开发，作为主要专注于完全虚拟客户操作系统的模拟器进入虚拟化领域。它拥有动态翻译软件层和跨架构 4 支持，早在容器出现之前就可以在 x86 硬件上运行 PowerPC/Sparc 等替代平台。但多年来，QEMU 的功能不断发展——最终集成了 Linux 内核本身以实现更紧密的耦合。与 KVM 配合作为加速器后端，QEMU 现在可以编排 I/O、存储控制器、BIOS 和引导加载程序、设备直通等。同时将最繁重的计算工作转移到硬件上。

分析师估计，目前有超过 7500 万个 QEMU/KVM 实例跨云和企业数据中心运行。它的速度和多功能性无疑推动了采用。

**KVM - 硬件性能的一剂强心针**

基于内核的虚拟机建立在 QEMU 的基础上，与商品 x86 处理器中的硬件虚拟化扩展相连接。英特尔 VT-x 等扩展最初由芯片供应商于 2006 年添加，用于协助多租户安全和分区，允许客户虚拟机监控器全速运行，而不影响保护功能。因此，QEMU 带来了丰富的仿真功能，而 KVM 则带来了更高的性能。双赢！

但启用这些基于处理器的功能需要一些初始步骤。让我们准备好你的 Debian 主机...

## Qemu 的主要功能是什么？

Qemu 的主要功能有：

🖥它支持不同架构的各种平台

🖥可在两种不同模式下运行

🖥允许用户在虚拟环境中运行操作系统的所有进程

🖥用户可以执行用户级模拟

🖥为了排除故障，Qemu 允许用户随时拍摄快照

🖥它允许不同的网络通信，包括桥接网络、NAT 和用户模式网络

🖥可通过命令行界面使用

了解了这些主要功能后，建议用户按照下一节介绍的方法在 Debian 12 上安装 Qemu。

## 如何在 Debian 12 上安装 Qemu？

要在 Debian 12 上安装 Qemu，请按照以下步骤操作。

步骤 1：打开终端

要通过执行一些简单的命令在 Debian 12 上安装 Qemu，请使用 CTRL+ALT+T 快捷键打开终端：

![打开终端](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-470-1024x412.webp)

步骤 2：更新所有软件包

为确保在 Debian 12 上安装更新版 Qemu，请使用 apt 命令的 "update "选项更新软件包：

![更新所有软件包](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-480.webp)

步骤 3：在 Debian 12 上安装 Qemu

要在 Debian 12 上安装 Qemu，请运行以下命令：
```
sudo apt install qemu-system libvirt-daemon-system libvirt-clients bridge-utils virt-manager -y
```
![在 Debian 12 上安装 Qemu](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-481.webp)

这意味着 Qemu 已成功安装在 Debian 12 上。

## 如何使用 Debian 12 在 Qemu 上安装稳定系统？

要在 Qemu 上安装稳定发行版，请按以下步骤操作。

步骤 1：启动 Qemu 应用程序

打开应用程序菜单，启动 Qemu 应用程序：

![启动 Qemu 应用程序](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-474.webp)

步骤 2：创建新机器

启动机器后，点击下图中指示的图标创建新机器：

![创建新机器](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-472.webp)

第 3 步：选择安装介质

现在选择操作系统的安装方式，例如，如果要使用 iso 文件安装，则点击第一个选项：

![选择安装介质](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-475.webp)

第 4 步：选择 ISO 文件

如果您使用的是 ISO 文件，那么在这一步中，请浏览选择 ISO 文件的位置：

![选择 ISO 文件](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-471.webp)

步骤 5：选择内存和 CPU 设置

选择 ISO 文件后，为新机器分配 RAM 内存和 CPU 数量：

![选择内存和 CPU 设置](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-473.webp)

步骤 6：分配存储内存

分配完 CPU 和 RAM 内存的数量后，现在为机器分配硬盘内存：

![分配存储内存](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-476.webp)

第 7 步：选择名称

最后，为机器指定新名称后点击 "完成 "按钮：

![为机器指定新名称后点击 "完成 "按钮](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-478.webp)

按下 "完成 "按钮后，Ubuntu 操作系统就会启动：

![Ubuntu 操作系统就会启动](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-484.webp)

要么安装 Ubuntu，要么点击 "试用 Ubuntu "按钮进行测试。

## 如何在 Qemu 上建立测试/不稳定系统？

要在 Qemu 上建立测试系统或不稳定系统，请按照本节说明进行操作。

第一步：创建硬盘映像

通过设置大小和格式，使用 "qemu-img "命令创建虚拟镜像：
```
qemu-img create debian.img 2G
```
![创建硬盘映像](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-477.webp)

步骤 2：下载操作系统的 iso 文件

现在下载测试版或不稳定版操作系统的 iso 文件。例如，我们使用 wget 命令下载 Debian 测试版的 iso 文件：
```
wget  https://cdimage.debian.org/cdimage/daily-builds/daily/arch-latest/amd64/iso-cd/debian-testing-amd64-netinst.iso
```
![下载操作系统的 iso 文件](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-482.webp)

步骤 3：安装操作系统

下载完成后，使用下载的 iso 文件安装操作系统：
```
qemu-system-x86_64 -hda debian.img -cdrom debian-testing-amd64-netinst.iso -boot d -m 512
```
![安装操作系统](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-483.webp)

第 4 步：启动操作系统

最后，运行命令启动已安装的操作系统：
```
qemu-system-x86_64 -hda debian.img -m 512
```
![启动操作系统](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/qemu/image-479.webp)

这是使用 Qemu 在 Debian 12 上设置测试或不稳定操作系统的方法。

## FAQ

**如何在 Qemu 上设置网络？**

要在 Qemu 上设置联网，例如设置用户模式联网，请按照下面提到的一般语法运行命令：
```
qemu-system-<architecture> -hda mydisk.qcow2 -net user -net nic
```
对于桥接网络，请遵循一般语法：
```
qemu-system-<architecture> -hda mydisk.qcow2 -net bridge -net nic
```
**如何使用 Qemu 进行快照？**

Qemu 的主要功能之一是支持快照。要给运行中的虚拟机拍快照，请运行以下命令：
```
qemu-img snapshot -c snapshot_name mydisk.qcow2
```
**如何在 Qemu 上克隆虚拟机？**

要创建虚拟机的克隆，请按照以下通用语法运行命令：
```
qemu-img create -f qcow2 -b mydisk.qcow2 clone.qcow2
```
**如何在 Debian 12 上卸载 Qemu？**

要卸载 Debian 12 上的 Qemu，请使用 apt 命令的 "清除 "选项。该选项将删除并卸载 Debian 12 上的 Qemu 及其所有配置文件：
```
sudo apt purge qemu-system libvirt-daemon-system libvirt-clients bridge-utils virt-manager -y
```
Qemu 已成功从 Debian 12 中卸载。

## 结论

要在 Debian 12 上安装 Qemu，请打开终端并运行命令 "sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virt-manager -y"。安装完成后，为稳定操作系统或不稳定/测试操作系统设置 Qemu。本篇博文将逐步介绍在 Debian 12 上安装和设置 Qemu 的所有可能方法。

Welcome to our [website](https://blog.tigress.cc/)
