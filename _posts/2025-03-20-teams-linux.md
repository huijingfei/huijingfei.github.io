---
layout: post
title:  如何在 Debian/Ubuntu 及其他衍生版本上安装 Microsoft Teams
subtitle: 如何在 RHEL/Fedora 及其他 Linux 衍生版本上安装 Microsoft Teams
tags:
    - Linux
---

这是一款非官方的 Microsoft Teams 客户端。微软的官方客户端已经退役，取而代之的是 PWA。点[这里](https://techcommunity.microsoft.com/t5/microsoft-teams-blog/microsoft-teams-progressive-web-app-now-available-on-linux/ba-p/3669846)查看相关文章.

请在 “issues ”部分报告错误和改进。我们将尽快处理。在提出新 issues 之前，请查看已打开/关闭的问题，避免重复。我们鼓励大家加入我们在 [matrix](https://matrix.to/#/#teams-for-linux_community:gitter.im) 中的聊天室，并提出问题。这可能是找到解决方案的最快方法。或者在 github 上进行讨论。

由于这是 Microsoft Teams网络版的封装，我们无法添加某些功能。这并不是因为我们不想添加，而是在某些情况下我们完全依赖于微软。我们可能会以同样的理由关闭该问题。

欢迎提出意见和建议。我们将继续为社区提供支持。

---

[![Gitter chat](https://badges.gitter.im/ismaelmartinez/teams-for-linux.png)](https://gitter.im/teams-for-linux/community "Gitter chat")
![](https://img.shields.io/github/release/IsmaelMartinez/teams-for-linux.svg?style=flat)
![](https://img.shields.io/github/downloads/IsmaelMartinez/teams-for-linux/total.svg?style=flat)
![Build & Release](https://github.com/IsmaelMartinez/teams-for-linux/workflows/Build%20&%20Release/badge.svg)
![](https://img.shields.io/librariesio/github/IsmaelMartinez/teams-for-linux)
[![Known Vulnerabilities](https://snyk.io//test/github/IsmaelMartinez/teams-for-linux/badge.svg?targetFile=package.json)](https://snyk.io//test/github/IsmaelMartinez/teams-for-linux?targetFile=package.json)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=IsmaelMartinez_teams-for-linux&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=IsmaelMartinez_teams-for-linux)

基于 [`Electron`](https://electronjs.org/) 的 Linux 版非官方 Microsoft Teams 客户端 。

## 下载

在 [releases](https://github.com/IsmaelMartinez/teams-for-linux/releases) 下可获得 `AppImage`、`rpm`、`deb`、`snap` 和 `tar.gz` 的二进制文件。

就 `AppImage` 而言，我们建议使用 [`AppImageLauncher`](https://github.com/TheAssassin/AppImageLauncher)，以获得最佳桌面体验。

我们在 https://teamsforlinux.de 上有一个专门的 deb 和 rpm repo，由 [Nils Büchner](https://github.com/nbuechner) 用心♥️托管。请按照以下说明进行安装。

### Debian/Ubuntu 及其他衍生版本
```bash
sudo mkdir -p /etc/apt/keyrings

sudo wget -qO /etc/apt/keyrings/teams-for-linux.asc https://repo.teamsforlinux.de/teams-for-linux.asc

echo "deb [signed-by=/etc/apt/keyrings/teams-for-linux.asc arch=$(dpkg --print-architecture)] https://repo.teamsforlinux.de/debian/ stable main" | sudo tee /etc/apt/sources.list.d/teams-for-linux-packages.list

sudo apt update

sudo apt install teams-for-linux
```
### RHEL/Fedora 及其他衍生产品
```bash
curl -1sLf -o /tmp/teams-for-linux.asc https://repo.teamsforlinux.de/teams-for-linux.asc; rpm --import /tmp/teams-for-linux.asc; rm -f /tmp/teams-for-linux.asc

curl -1sLf -o /etc/yum.repos.d/teams-for-linux.repo https://repo.teamsforlinux.de/rpm/teams-for-linux.repo

yum update

yum install teams-for-linux
```

或者在以下渠道下载：

[![AUR: teams-for-linux](https://img.shields.io/badge/AUR-teams--for--linux-blue.svg)](https://aur.archlinux.org/packages/teams-for-linux)

[![Pacstall: teams-for-linux-deb](https://img.shields.io/badge/Pacstall-teams--for--linux--deb-00958C)](https://github.com/pacstall/pacstall-programs/tree/master/packages/teams-for-linux-deb)

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/teams-for-linux)

<a href='https://flathub.org/apps/details/com.github.IsmaelMartinez.teams_for_linux'><img width='170' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>

## 配置和启动参数

请在 config 文件夹的 [`README.md`](app/config/README.md) 中查看启动或配置选项，以启用或禁用某些功能或行为。

## 在 firejail 中运行 teams-for-linux

在 firejail 中运行 teams-for-linux 的简单 shell 脚本托管在 https://codeberg.org/lars_uffmann/teams-for-linux-jailed。该脚本既可用于启动 t4l，也可用于加入有活动 t4l 实例的会议。

## 贡献

请参阅 [`CONTRIBUTING.md`](CONTRIBUTING.md)文件，了解有关如何从源代码运行此应用程序和/或如何贡献的更多信息。

## 已知问题

已知问题和解决方法可在 [`KNOWN_ISSUES.md`](KNOWN_ISSUES.md)文件中找到。

## 历史

请在 [`HISTORY.md`](HISTORY.md)文件中阅读本项目的历史。

## 许可证

部分图标来自 [Icon Duck](https://iconduck.com/sets/hugeicons-essential-free-icons)，采用 `CC BY 4.0` 许可。

License: [`GPLv3`](LICENSE.md)
