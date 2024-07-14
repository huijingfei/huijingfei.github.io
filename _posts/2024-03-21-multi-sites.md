---
layout: post
title: ﻿在阿里云轻量应用服务器上搭建多个 WordPress 网站
tags:
    - Linux
    - WordPress
    - Nginx
    - Websites
    - 阿里云轻量应用服务器

---
## 一：前言

首先阿里云轻量应用服务器分为不同的应用镜像和系统镜像，本文的镜像环境是 WordPress 镜像，系统默认为 Alibaba Cloud Linux，如果选择其他系统镜像那么需要自己手动安装 WordPress 环境。
应用镜像(13款)提供 WordPress、LAMP、Docker 和 Node.js 等选择，减少了应用的上传、安装等环节，实现应用的开箱即用。

注意⚠️：本文教程仅供参考思路，不建议使用默认为 Alibaba Cloud Linux 的 WordPress 镜像，建议参考这篇文章[使用 Debian 系统搭建 WordPress 网站](https://tigress.cc/2024/06/16/wordpress-lemp/)。

系统镜像(8款)适用于熟悉操作系统和应用环境配置的用户，系统镜像提供一个纯净的操作系统初始环境，您可以根据需要自行安装应用。

也就是说本文是在已有一个 WordPress 网站的情况下搭建第二个 WordPress 网站，其他系统环境仅供参考；使用此方法可以依次搭建第三第四个 WordPress 网站，只要服务器配置允许。

基本分为三个步骤，第一：为新网站安装 WordPress。第二：为新网站配置数据库。第三：配置Nginx。

注意⚠️：在操作前先创建一个快照备份，以防万一。

## 二：安装WordPress

第一个网站的默认安装路径为 /data/wwwroot/wordpress，那么我们连接到服务器后，首先为新网站创建一个文件夹。

    mkdir /data/wwwroot/site2/

然后下载 WordPress。

    cd /data/wwwroot/site2/

    wget https://wordpress.org/latest.tar.gz

解压 WordPress 安装包。

    tar -xzvf latest.tar.gz

此时在 site2 路径下，有一个 WordPress 安装包 latest.tar.gz 和 解压好的 WordPress 目录； 先删掉安装包 latest.tar.gz，再进入 WordPress 目录。 

    rm latest.tar.gz

    cd wordpress/
  
## 三：配置数据库

    mysql -u root -p

数据库密码可以使用 sudo cat /root/ReadMe 命令查看；输入密码后配置数据库。

    create database wp_site2 default character set utf8 collate utf8_unicode_ci;

    grant all on wp_site2.* to 'user_site2'@'localhost' identified by 'password';

    flush privileges;

    exit

上文的 identified by 'password' 最好设置一个复杂一点的密码，并随手记下来。

复制一份 WordPress 配置文件并编辑。

    cp wp-config-sample.php wp-config.php

    vim wp-config.php
  
依次修改数据库名称，用户名以及密码（此处的 Password 为上文中设置好的密码）。

  ![DB name](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/DB%20name.webp)

继续下拉，删除红框中的内容，复制箭头所指的链接🔗并在浏览器中打开，全选复制网页中的内容，替换到原来红框的位置。

  ![DB key](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/DB%20key.webp)

  ![WordPress api](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/WordPress%20api.webp)

## 四：配置 Nginx 文件

Nginx 配置文件默认在 /usr/local/nginx/conf/vhost/ 路径下，此目录下已经有一个 wordpress.conf 文件；首先我们编辑这个文件。

    cd /usr/local/nginx/conf/vhost/

    vim wordpress.conf

默认的配置文件 Server 为空，把他修改为  server_name site1.com www.site1.com; 这里的 site1 应该是你搭建的第一个网站的域名。


  ![Nginx](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/Nginx.webp)

默认的路径不用改；然后复制一份配置文件并编辑。

    cp wordpress.conf site2.conf

    vim site2.conf

这里的 server_name 后边改为 site2.com www.site2.com; 这里的 site2 是你搭建的第二个网站的域名。这里的路径修改为：   root /data/wwwroot/site2/wordpress;

修改完成测试一下：

    nginx -t

如图，如果提示 successful，那就没问题了。

  ![Nginx-t](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/Nginx-t.webp)

重启 Nginx 服务。

    systemctl restart nginx

最后就可以在浏览器中输入 site2.com 来完成 WordPress 的安装了。

  ![install WordPress](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/install%20WordPress.webp)

## 五：安装插件错误提示 Failed to connect to FTP server

执行以下命令可以解决：

    chown -R www:www /data/wwwroot/site2/wordpress

安装完插件后，可以把文件拥有者改回 root：

    chown -R root:root /data/wwwroot/site2/wordpress

## 六：本文参考了以下 YouTube 视频，并根据阿里云轻量应用服务器 WordPress 镜像环境做了部分修改。

<iframe width="560" height="315" src="https://www.youtube.com/embed/P7W4iYkFaOU?si=pShkDj1KSxIYRyr9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
