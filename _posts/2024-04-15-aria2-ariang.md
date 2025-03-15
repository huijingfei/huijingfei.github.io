---
layout: post
title: ﻿在 Debian/Ubuntu 中安装配置 aria2 并使用 AriaNG Web-UI
subtitle: 在基于 Debian 的 Linux 发行版中安装使用 Aria2+AriaNG
tags:
    - Debian
---
[通过 uget 配置 aria2 插件下载](https://tigress.cc/2024/04/15/aria2-ariang/#%E9%80%9A%E8%BF%87-uget-%E8%B0%83%E7%94%A8-aria2-%E4%B8%8B%E8%BD%BD)

## 安装 aria2

在 Debian/Ubuntu 中可以直接通过软件源安装：
```
apt install aria2 -y
```
## 配置 aria2

**新建 aria2 文件夹**
```
mkdir /etc/aria2
```
**新建 session 文件**
```
touch /etc/aria2/aria2.session
```
**设置 aria2.session 可写**
```
chmod 777 /etc/aria2/aria2.session
```
**创建 aria2 配置文件**
```
vi /etc/aria2/aria2.conf
```   
把下面的aria2配置文件模板写入“aria2.conf”，需要修改的有下载目录“dir”以及连接秘钥“rpc-secret”。

[aria2.conf](https://github.com/huijingfei/AriaNg/releases/download/1.0/aria2.conf)

**创建服务文件**
```
vi /etc/systemd/system/aria2.service
```
复制粘贴以下内容到 aria2.service 文件中
```
[Unit]
Description=Aria2c
Requires=network.target
After=dhcpcd.service

[Service]
ExecStart=/usr/bin/aria2c --conf-path=/etc/aria2/aria2.conf

[Install]
WantedBy=default.target
```      
**然后输入以下命令设置开机启动**
```
sudo systemctl enable aria2

sudo systemctl start aria2
```
最后重启系统

## 使用 Web-UI

打开这个链接 [AriaNG](http://ariang.mayswind.net/latest/#!/downloading)，如果是 https 加密链接，要把 s 去掉；也可以到 [GitHub Release](https://github.com/mayswind/AriaNg) 页面下载最新版源文件，直接使用使用默认浏览器打开 index.html 即可。

## 注意⚠️

初次使用 Web-UI，需要到 AriaNG 设置 ➡️ 设置 RPC 地址和密钥。

默认地址为：http://localhost:6800/jsonrpc

密钥则为 aria2.conf 配置文件中 rpc-secret='' 修改的链接密钥。

## 下载脚本
```
cd /etc/aria2
      
wget https://github.com/P3TERX/aria2.conf/raw/master/script.conf

wget https://github.com/P3TERX/aria2.conf/raw/master/core

wget https://github.com/P3TERX/aria2.conf/raw/master/clean.sh

wget https://github.com/P3TERX/aria2.conf/raw/master/delete.sh
``` 
## 更新 tracker 列表

在 Aria2 配置文件 (aria2.conf) 所在目录执行以下命令即可获取最新 tracker 列表并自动添加到配置文件中。
```
bash <(curl -fsSL git.io/tracker.sh)
```
## 下载 DHT 文件
```
mkdir $HOME/.aria2/

cd $HOME/.aria2/

wget https://github.com/P3TERX/aria2.conf/raw/master/dht.dat
```
DHT 网络节点数据文件。提升 BT 下载率和下载速度的关键之一。相关科普：[《解决 Aria2 无法下载磁力链接、BT种子和速度慢的问题》](https://p3terx.com/archives/solved-aria2-cant-download-magnetic-link-bt-seed-and-slow-speed.html)
     
### 本文参考了以下配置

[aira2.conf](https://github.com/P3TERX/aria2.conf)

[Install Web Based Download Utility with Aria2 WebUI on Debian/Ubuntu](https://i12bretro.github.io/tutorials/0254.html)

本文为个人备份设置，仅供参考。另推荐使用以下项目部署以获得最佳使用体验

[Aria2 Pro (Docker)](https://github.com/P3TERX/docker-aria2-pro)
    
[Aria2 一键安装管理脚本 增强版 (GNU/Linux)](https://github.com/P3TERX/aria2.sh)

### 通过浏览器扩展

取代内置下载管理器。开启后，将检测下载链接，直接通过插件把链接发送到 Aria2；

[火狐 aria2 插件 Aria2 Download Manager Integration](https://addons.mozilla.org/en-US/firefox/addon/aria2-integration/)

[Aria2-Explorer for Chrome](https://chromewebstore.google.com/detail/aria2-explorer/mpkodccbngfoacfalldjimigbofkhgjn?hl=en-US&utm_source=ext_sidebar)

## 通过 uget 调用 aria2 下载
```
apt install uget
```
在 uget 设置 → 插件，配置 aria2；其中 aria2 URL 默认的不需要改，密钥则填写配置文件中自己设定的密钥。

![通过 uget 调用 aria2 下载](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/uget%20aria2.webp)

通过 uget 调用 aira2 的好处是无需配置 aria2 服务文件，可以通过 uget 来启动或者退出 aria2，如果已经在上文配置好了 aria2 开机启动，那么这里的选项可以取消勾选。

Arguments:
```
--enable-rpc=true -D --disable-ipv6 --check-certificate=false --conf-path=/etc/aria2/aria2.conf
```

Welcome to our [website](https://blog.tigress.cc/)
