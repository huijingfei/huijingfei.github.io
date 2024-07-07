---
layout: post
title: 如何在 Debian 12、11 或 10 上搭建使用 LEMP 环境安装 WordPress
subtitle: Linux 保姆级教程部署 LEMP 环境安装 WordPress 网站
tags:
    - WordPress
    - LEMP
---
![如何在 Debian 12、11 或 10 上使用 LEMP 安装 WordPress](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/How-to-Install-WordPress-with-Nginx-MariaDB-PHP-on-Debian-Linux.webp)

WordPress 是内容管理系统中的一盏明灯，代表着多功能性和以用户为中心的设计。对于那些热衷于在 Debian 系统上安装这一著名内容管理系统的用户，本教程将专门演示如何在 Debian 12、11 或 10 系统上使用 LEMP 安装 WordPress，确保无缝集成，满足您的网站开发需求。

**为什么 WordPress 占据 CMS 领域的主导地位：**

⭐以用户为中心的设计： WordPress 的直观界面既适合精通技术的用户，也适合初学者，简化了网站创建和管理的过程。

⭐无限定制： WordPress 拥有丰富的模板、插件和主题库，用户可以根据自己的独特构想和品牌形象创建网站。

⭐充满活力的社区： WordPress的核心在于其充满激情的社区。这个由开发人员和爱好者组成的庞大网络推动着平台的发展，并为用户提供宝贵的支持。

⭐成本效益： 作为开源软件，WordPress 可以免费使用。再加上可从众多托管服务提供商中灵活选择，WordPress 成为网站开发的高性价比解决方案。

⭐市场领先： 虽然 Drupal 和 Joomla 等内容管理系统各有千秋，但 WordPress 无与伦比的易用性和适应性已巩固了其作为大部分网络首选的地位。

随着我们对本教程的深入研究，您将了解到如何在您的 Debian 系统上充分发挥 WordPress 的潜力，为建立一个强大、动态的网站铺平道路。

## 在 Debian 12、11 或 10 上安装适用于 WordPress 的 LEMP

### 第一步：在安装 LEMP 栈之前更新 Debian

在安装 WordPress 之前，请更新您的 Debian 系统，以防止潜在的冲突。打开终端并运行
```
sudo apt update && sudo apt upgrade
```
该命令将更新可用软件包并升级系统。

### 第二步：安装必要的软件包

即使您已经安装了WordPress的一些必要软件包，也要仔细检查以确保没有遗漏。运行以下命令
```
sudo apt install curl git wget unzip zip
```
该命令将安装或确认WordPress所需的软件包。

### 第三步：安装Nginx--LEMP安装的第1部分

要建立LEMP堆栈，需要安装Nginx。运行以下命令
```
sudo apt install nginx
```
安装完成后，检查 Nginx 是否正在运行：
```
systemctl status nginx
```
![在 Debian Linux 上使用 LEMP 安装 WordPress 后，显示 Nginx 成功状态的终端截图。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-example-checking-nginx-status-after-install-terminal.png)

如果 Nginx 服务未处于活动状态，您可以使用以下命令将其设置为活动状态：

```
sudo systemctl enable nginx --now
```
该命令确保 Nginx 在每次服务器重启时启动，这对 LEMP 堆栈的正常运行至关重要。

**为Nginx设置 UFW 防火墙**

为确保安全并允许外部访问标准网络端口，在Nginx服务器上配置UFW防火墙至关重要。好消息是，Nginx提供的配置文件简化了UFW的设置过程。

***安装 UFW：***

如果尚未在 Debian 系统中安装 UFW，请执行以下命令：
```
sudo apt install ufw
```
***激活 UFW：***

安装完成后，就是激活 UFW 的时候了。默认情况下，UFW 会阻止所有传入连接，同时允许所有传出连接。使用以下命令激活防火墙
```
sudo ufw enable
```
***查看Nginx配置文件：***

要查看 UFW 可用的 Nginx 配置文件，请运行以下命令：
```
sudo ufw app list
```
从输出结果中，你会注意到

⭐Nginx 使用 80 端口（HTTP）

⭐Nginx Secure 使用 443 端口（HTTPS）

⭐Nginx Full包含两个端口

***为 Nginx 配置 UFW：***

如果想同时启用HTTP和HTTPS访问，请选择Nginx Full配置文件：
```
sudo ufw allow 'Nginx Full'
```

不过，你的要求可能有所不同：

如果只需 HTTPS 访问，请选择 Nginx Secure 配置文件：
```
sudo ufw allow 'Nginx Secure'
```
仅 HTTP 访问，选择 Nginx HTTP 配置文件：
```
sudo ufw allow 'Nginx HTTP'
```
您还可以制定其他 UFW 规则，以确保服务器和使用 WordPress 的 LEMP 设置的安全，如果面向公众，则应确保投入时间锁定服务器。

### 第四步：安装 MariaDB – LEMP 安装的第 2 部分

与 MySQL 相比，MariaDB 以性能更强而著称，是 LEMP 堆栈中的数据库组件。如果您想从 MariaDB.org 官方软件仓库安装特定版本的 MariaDB，请参考在 Debian 上安装 MariaDB 11.x 或 10.x 的指南。这可以进一步优化WordPress的性能。

要安装 MariaDB，请运行
```
sudo apt install mariadb-server mariadb-client
```
安装完成后，检查 MariaDB 的状态：
```
systemctl status mariadb
```
![终端截图显示了在 Debian Linux 上安装 WordPress 和 LEMP 后 MariaDB 的活动状态。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-example-checking-mariadb-status-terminal-after-install.png)

该命令显示 MariaDB 的服务状态和任何潜在错误。

如果 MariaDB 没有运行，请使用以下命令启动它
```
sudo systemctl enable mariadb --now
```

这将确保每次系统重启时都能启动 MariaDB，这对稳定的 LEMP 堆栈和 WordPress 设置至关重要。

**使用安全脚本保护 MariaDB**

为了保护数据，你必须确保 MariaDB 安装的安全性。新安装的 MariaDB 可能会有宽松的安全默认设置，从而使其面临威胁。然而，mysql_secure_installation 脚本可以增强数据库的防御能力。

运行安全脚本
```
sudo mysql_secure_installation
```

该脚本会引导你完成几项安全配置：

⭐设置 root 密码或选择 unix_socket，以防止未经授权的访问。

⭐删除匿名用户账户，限制授权用户访问数据库。

⭐限制根用户账户的远程登录。

⭐删除测试数据库，以避免未经授权的访问和潜在的数据泄漏。

认真回答每个提示；这些设置会对数据库的安全性产生深远影响。完成上述步骤后，您的 MariaDB 设置就可以安全运行了。
```
NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user. If you've just installed MariaDB, and
haven't set the root password yet, you should just press enter here.

Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password or using the unix_socket ensures that nobody
can log into the MariaDB root user without the proper authorisation.

You already have your root account protected, so you can safely answer 'n'.

Switch to unix_socket authentication [Y/n] Y <---- Type Y then press the ENTER KEY.
Enabled successfully!
Reloading privilege tables..
 ... Success!


You already have your root account protected, so you can safely answer 'n'.

Change the root password? [Y/n] Y <---- Type Y then press the ENTER KEY.
New password: 
Re-enter new password: 
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] Y <---- Type Y then press the ENTER KEY.
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] Y <---- Type Y then press the ENTER KEY.
 ... Success!

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] Y <---- Type Y then press the ENTER KEY.
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] Y <---- Type Y then press the ENTER KEY.
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```
这些安全措施可确保您的 MariaDB 安装安全可靠，免受威胁。

### 第五步：安装 PHP、PHP-FPM - LEMP 安装的第 3 部分

要获得一个完整的LEMP堆栈，您需要安装PHP。PHP 是连接 Nginx 和 MariaDB 的桥梁，PHP-FPM 和 WordPress 的其他重要模块将为其提供便利。

运行以下命令安装 PHP、PHP-FPM 和所需模块：
```
sudo apt install php php-fpm php-mbstring php-bcmath php-xml php-mysql php-common php-gd php-cli php-curl php-zip php-imagick php-ldap php-intl
```
安装完成后，检查 PHP 服务的状态，类似于检查 MariaDB 和 Nginx 的状态。在本例中，我们使用的是 PHP 7.4：
```
systemctl status php7.4-fpm
```
输出应该是这样的

![一项重要的终端检查可确保 PHP FPM 在 Debian Linux 上安装 WordPress 和 LEMP 后顺利运行。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-example-php-fpm-status-ok-terminal-check.png)

## 在 Debian 12、11 或 10 上使用 LEMP 为 WordPress 进行安装前配置

**创建 WordPress 目录结构**

要在 Debian LEMP 协议栈上安装 WordPress，您可以从 WordPress.org 官方下载页面下载最新版本，或使用以下命令直接下载：
```
wget https://wordpress.org/latest.zip
```
下载完成后，使用以下命令将压缩包解压到 /var/www/html 目录：
```
sudo unzip latest.zip -d /var/www/html/
```
接下来，通过将目录所有者权限设置为网络服务器用户，确保 WordPress 拥有正确的写入权限。

可以使用以下命令完成此操作：
```
sudo chown -R www-data:www-data /var/www/html/wordpress/
```
设置目录所有者权限后，必须使用以下命令为 WordPress 文件夹和文件设置正确的权限：

对于文件夹
```
sudo find /var/www/html/wordpress -type d -exec chmod 755 {} \;
```
对于文件
```
sudo find /var/www/html/wordpress -type f -exec chmod 644 {} \;
```
设置正确的文件夹和文件权限可确保 WordPress 安装安全并正常运行。

**为 WordPress 创建数据库**

要在 Debian LEMP 栈上运行 WordPress，必须使用 MariaDB 创建一个数据库。使用以下命令以 root 身份访问 MariaDB shell：
```
sudo mariadb -u root
```
进入 MariaDB shell 后，使用以下命令创建一个新数据库：
```
CREATE DATABASE WORDPRESSDB;
```
然后，使用以下命令为 WordPress 创建一个新的用户账户：
```
CREATE USER 'WPUSER'@localhost IDENTIFIED BY 'PASSWORD';
```
最后，使用以下命令为新创建的用户账户分配只能访问 WordPress 网站数据库的权限：
```
GRANT ALL PRIVILEGES ON WORDPRESSDB.* TO WPUSER@localhost IDENTIFIED BY 'PASSWORD';
```
创建用户账户后，使用以下命令刷新权限，以确保新更改生效：
```
FLUSH PRIVILEGES;
```
最后，键入以下命令退出 MariaDB shell
```
EXIT;
```
**设置 WordPress 配置文件**

设置 WordPress 配置文件是安装过程中的重要步骤。这涉及重命名示例 wp-config.php 文件并输入必要的配置详细信息。

使用以下命令导航到 WordPress 目录：
```
cd /var/www/html/wordpress/
```
使用以下命令将 wp-config-sample.php 复制到 wp-config.php：
```
sudo cp wp-config-sample.php wp-config.php
```
使用文本编辑器打开新复制的 wp-config.php 文件：
```
sudo nano wp-config.php
```
接下来，输入数据库名称、带密码的用户帐户以及主机 IP 地址（如有必要）。
```
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */ 

define( 'DB_NAME', 'WORDPRESSDB' );                 <--------------- 改这里的数据库名称

/* MySQL database username */ 

define( 'DB_USER', 'WPUSER );                               <--------------- 改这里的用户名称

/* MySQL database password */

define( 'DB_PASSWORD', 'PASSWORD' );             <--------------- 改这里的用户密码

/* MySQL hostname, change the IP here if external DB set up */ 

define( 'DB_HOST', 'localhost' );

/* Database Charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );

/* The Database Collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );
```
除了这些设置，您还可以在 wp-config.php 文件中添加以下内容，以改善 WordPress 的管理：
```
/** ## Save files direct method ## */
define( 'FS_METHOD', 'direct' );

/** ## Increase memory limit, 256MB is recommended ## */
define('WP_MEMORY_LIMIT', '256M');
```
专用服务器或 VPS 的内存限制会根据系统容量而有所不同。256 MB 内存限制可以小幅增减，如 128 MB、256 MB、512 MB 等。

![在 Debian Linux 上安装 WordPress 和 LEMP 过程中配置阶段的截图。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-example-setup-configuration-snapshot.avif)

**实施 WordPress 安全盐密钥**

提高 WordPress 安装的安全性至关重要，而实现这一目标的有效方法之一就是设置 WordPress 安全盐密钥。这些密钥就像一个增强的安全盾牌，可以强化 WordPress 网站，抵御潜在威胁，加强用户身份验证和数据加密。

***生成安全盐密钥***

要生成安全盐密钥，请访问 WordPress 密钥 API：[https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)。生成密钥后，将 wp-config.php 文件中的占位符行替换为唯一密钥至关重要。这一步骤可加强用户身份验证和数据加密。

***整合安全盐密钥***

要将新生成的安全盐密钥嵌入 wp-config.php 文件，请在文本编辑器中打开该文件：
```
sudo nano /var/www/html/wordpress/wp-config.php
```
现在，找出 wp-config.php 文件中与样本密钥相对应的行。找到后，用新生成的密钥替换 wp-config.php 文件中的每个示例密钥。完成必要的替换后，确保保存并关闭文件。
如果使用的是 nano 编辑器，请按 "CTRL+X"，然后按 "Y "保存。

![密钥安全步骤： 在 Debian 上的 LEMP 安装过程中，在 WordPress 配置文件中添加盐密钥。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-example-adding-salt-keys-to-wordpress-config-file.png)

***为 WordPress LEMP 设置 Nginx 服务器块配置***

正确设置 Nginx 服务器块对于通过网络用户界面无缝安装 WordPress 至关重要。正确设置 "try_files $uri $uri/ /index.php?$args; "指令至关重要。省略"?$args "会干扰WordPress的REST API。为了避免安装过程中可能出现的问题，请严格按照以下说明操作。

首先在 Nginx 上为安装的 WordPress 创建一个新的服务器配置文件。在以下命令中，用实际域名替换 "example.com"：
```
sudo nano /etc/nginx/sites-available/example.com.conf
```
要使 Nginx 与 PHP 协调工作，必须在服务器块配置文件中包含 "location ~ .php$"。下面的配置示例可供参考。确保调整根路径和域名以适应你的设置：
```
server {
  listen 80;
  listen [::]:80;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  ssl_certificate /usr/local/nginx/conf/ssl/www.example.com.crt;
  ssl_certificate_key /usr/local/nginx/conf/ssl/www.example.com.key;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_ciphers TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256:EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_timeout 10m;
  ssl_session_cache builtin:1000 shared:SSL:10m;
  ssl_buffer_size 1400;
  add_header Strict-Transport-Security max-age=15768000;
  ssl_stapling on;
  ssl_stapling_verify on;
  server_name www.example.com example.com;
  root /var/www/html/wordpress;
  index index.php index.html index.htm index.nginx-debian.html;

  location / {
    try_files $uri $uri/ /index.php?$args;
  }

  location ~* /wp-sitemap.*\.xml {
    try_files $uri $uri/ /index.php$is_args$args;
  }

  client_max_body_size 100M;

  location ~ \.php$ {
    fastcgi_pass unix:/run/php/php7.4-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
    include snippets/fastcgi-php.conf;
    fastcgi_buffer_size 128k;
    fastcgi_buffers 4 128k;
    fastcgi_intercept_errors on;
  }

  gzip on;
  gzip_comp_level 6;
  gzip_min_length 1000;
  gzip_proxied any;
  gzip_disable "msie6";
  gzip_types application/atom+xml application/geo+json application/javascript application/x-javascript application/json application/ld+json application/manifest+json application/rdf+xml application/rss+xml application/xhtml+xml application/xml font/eot font/otf font/ttf image/svg+xml text/css text/javascript text/plain text/xml;

  location ~* \.(?:css(\.map)?|js(\.map)?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
    expires 90d;
    access_log off;
  }

  location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {
    add_header Access-Control-Allow-Origin "*";
    expires 90d;
    access_log off;
  }

  location ~ /\.ht {
    access_log off;
    log_not_found off;
    deny all;
  }
}
```
注意⚠️：/usr/local/nginx/conf/ssl/目录下没有 www.example.com.key www.example.com.crt 这两个文件，Nginx 会测试不通过，这两个文件在阿里云 WordPress 映像下有，可以复制该文件中的内容，然后使用 Cloudflare 证书认证。另可以参考这篇文章在 Debian 服务器上设置 HTTPS 认证：[如何在 Debian 12、11 或 10 上用 Let's Encrypt 加密 Nginx](https://tigress.cc/2024/07/02/nginx-https/)

记住，如果你安装了不同的 PHP 或 PHP-FPM 版本，或者你的 Debian 版本默认使用另一个 PHP 版本，请相应调整 Nginx 配置文件。

例如，对于 PHP-FPM 8.2，将 fastcgi_pass unix:/run/php/php8.1-fpm.sock; 改为 fastcgi_pass unix:/run/php/php8.2-fpm.sock;。配置中的版本必须与系统中的版本相匹配，这样才能顺利运行。

**了解 WordPress Nginx 服务器块**

对于那些初次设置 Nginx 和 WordPress 的人，下面是服务器模块示例的详细介绍：

***基本服务器设置：***

这些设置定义了服务器块的基本方面，如IP地址、Nginx监听端口和服务器名称。

根指令指向包含网站文件的主目录。

索引指令指示 Nginx 在为网站提供服务时如何识别索引文件。

***位置设置：***

这些设置包括各种位置块，决定了Nginx如何处理对不同URL的请求。

初始位置块利用 try_files 指令管理对网站根 URL 的请求。

随后的位置块专门处理对 WordPress sitemap.xml 文件的请求。

***PHP 处理设置：***

这些设置决定了 Nginx 处理 PHP 文件的方式。

fastcgi_pass指令指向PHP-FPM套接字文件的位置。

fastcgi_param指令将SCRIPT_FILENAME参数值分配给请求的PHP文件位置。

include 指令为 FastCGI 模块调入额外的配置文件。

fastcgi_buffer_size 和 fastcgi_buffers 等指令指定了 Nginx 和 PHP-FPM 之间数据传输的缓冲区大小。

fastcgi_intercept_errors 指令授权 Nginx 捕捉和管理 PHP 错误。

***Gzip压缩设置：***

这些设置用于配置 Gzip 压缩，以减少发送到客户端的文件大小。

gzip指令激活Gzip压缩。

gzip_comp_level 和 gzip_min_length 等指令分别决定压缩级别和压缩的最小文件大小。

gzip_proxied 指令确定哪些请求类型需要压缩。

gzip_types 指令枚举了符合压缩条件的 MIME 类型。

***文件缓存设置：***

这些设置可优化静态文件的缓存，提高网站速度。

初始位置块可确定资产和媒体文件的过期时间。

随后的位置块为字体和 SVG 文件设置过期时间。

access_log 和 log_not_found 等指令管理请求日志。

add_header 指令附加了 Access-Control-Allow-Origin 标头，允许从外部域加载字体和 SVG。

***.htaccess 文件阻止：***

该设置限制访问以 .ht 开头的文件，这些文件通常是敏感的服务器配置文件。

**使用符号链接设置Nginx服务器块**

要完成 Nginx 服务器块配置，必须激活 "sites-available "目录中的配置文件。这可以通过创建指向 "sites-enabled "目录的符号链接来实现。

执行以下命令，确保将 "example.com.conf "替换为配置文件的名称：
```
sudo ln -s /etc/nginx/sites-available/example.com.conf /etc/nginx/sites-enabled/
```
该命令在目录之间建立符号链接，允许Nginx访问配置文件。设置完成后，用以下命令验证配置
```
sudo nginx -t
```
如果测试无误，重启 Nginx 以应用服务器块更改：
```
sudo systemctl restart nginx
```
完成这些步骤后，就可以通过 Nginx 访问 WordPress 网站了。

**配置 PHP.ini，优化 WordPress 性能**

调整 PHP 设置对于实现 WordPress 的最佳性能至关重要。要在 WordPress 中高效处理媒体文件，可以考虑增加最大上传大小、帖子大小和内存限制。您可能还需要调整最大执行时间和输入变量，以防止出现潜在问题。

要访问 php.ini 文件，请使用终端。记住，该文件的位置可能因 PHP 版本而异：
```
sudo nano /etc/php/8.0/fpm/php.ini
```
```
sudo nano /etc/php/8.1/fpm/php.ini
```
```
sudo nano /etc/php/8.2/fpm/php.ini
```
```
sudo nano /etc/php/8.3/fpm/php.ini
```

要调整 PHP 设置，请在 php.ini 文件中找到并调整以下行：
```
##increase this to the maximum file size you want to upload, recommended 50 to 100MB## 
 upload_max_filesize = 100M

##increase this to the maximum post size you want to allow, recommended 50 to 100MB##
 post_max_size = 100M

##increase this to the maximum execution time, recommended 150 to 300 seconds##
 max_execution_time = 300

##increase this to the maximum GET/POST/COOKIE input variables, recommended 5000 to 10000##
max_input_vars = 5000

##increase this to the maximum memory limit, recommended 256MB or 512MB. Note that you should ensure your system has enough RAM before raising this.##
memory_limit = 256M
```
修改 PHP 设置后，重启 PHP-FPM 服务器至关重要。这样可以确保新配置处于激活状态，让 WordPress 网站以最佳状态运行。

**增加 Nginx 服务器客户端最大文件大小**

要在WordPress网站上容纳更大的文件上传，你需要调整Nginx服务器块。这可以确保Nginx能够处理更大的HTTP请求体，这在处理大型文件上传时至关重要。

修改 Nginx 服务器块

打开服务器块配置文件，插入以下一行：
```
##set to the maximum upload size you set in upload_max_filesize.##
client_max_body_size – <size>
```
确保 client_max_body_size 的值与 PHP 设置中配置的 upload_max_filesize 一致。

**重启 PHP-FPM**

为优化 WordPress 性能而调整 PHP 设置（包括上传大小、文章大小和内存限制）后，重启 PHP-FPM 服务器以使更改生效至关重要。重启服务器的确切命令取决于 PHP 版本。如果不确定 PHP 版本，请查阅系统文档。
对于不同的 PHP 版本，请使用相应的命令重启 PHP-FPM：
```
sudo systemctl restart php8.0-fpm
```
```
sudo systemctl restart php8.1-fpm
```
```
sudo systemctl restart php8.2-fpm
```
```
sudo systemctl restart php8.3-fpm
```
## 在 Debian 12、11 或 10 上安装 WordPress 前端

完成后台设置和配置后，就可以在您的域名上启动 WordPress 前端了。请访问以 "https://"或 "http://"为前缀的域名，开始安装。或者，您也可以直接访问 "https://www.yoursite.com/wp-admin/install.php"。
此 URL 将引导您进入前端安装向导。

**步骤 1：选择 WordPress 语言**

选择所需语言，然后点击 "继续"。

![在 Debian Linux 上安装 WordPress 和 LEMP 时捕获的语言选择界面。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-select-language-web-ui.avif)

**步骤 2：为 WordPress 创建管理员用户**

接下来，您将进入一个页面，提示您输入网站标题、用户名、密码和 WordPress 网站的主管理员电子邮件地址。

出于安全考虑，请确保您选择了一个可靠的密码，并提供了一个有效的电子邮件地址。记住，您可以稍后在 WordPress 设置面板中修改其他设置。

![定义管理员凭证： 在使用 LEMP 的 Debian Linux 上查看 WordPress 配置页面用户详细信息设置。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-configure-details-admin-user-password-and-email.avif)

对于那些正在开发网站并希望对谷歌或必应等搜索引擎保密的用户，可以选择 "强烈阻止搜索引擎索引"。

**步骤 3：继续并点击安装 WordPress 按钮**

填写完详细信息和偏好后，点击 "安装 WordPress "按钮。安装成功后，您将跳转到登录页面。

![](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-wordpress-web-ui-install-success-login-page-proceed.avif)

**步骤 4：继续登录 WordPress 管理页面**

输入您的登录信息，然后点击 "登录"。此操作将带您进入 WordPress 仪表板，您可以在此制作或导入您的网站。

![安装成功！WordPress Web 用户安装界面截图显示安装成功，请用户下一步登录 Wordpress。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-login-page-proceed-to-login.avif)

**步骤 5：通过 WordPress 管理查看和调整 WordPress 网站**

WordPress 仪表板是您的指挥中心。在这里，您可以撰写新文章、设计页面、处理主题和插件，以及调整网站的外观、内容和操作。

仪表板具有友好的用户界面，使您能够迅速建立自己的网站，并以最小的投入设计出迷人的专业网站。

![WordPress 网站的核心： 在 Debian 上安装 LEMP 后的管理仪表板一瞥。](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/lemp/wordpress-install-on-debian-11-or-10-with-lemp-installed-wordpress-and-opened-wordpress-admin-page.avif)

## 在 Debian 12、11 或 10 上使用 LEMP 的 WordPress 其他技巧

**使用 Let's Encrypt SSL 证书确保 WordPress 和 Nginx 的安全**

增强网络服务器的安全性至关重要，而实现这一目标的有效方法之一就是使用 SSL 证书在 HTTPS 上运行 Nginx。Let's Encrypt提供免费、自动和开放的证书颁发机构，让为Nginx服务器设置SSL证书变得更容易。

***安装 Certbot***

首先使用以下命令安装certbot软件包
```
sudo apt install python3-certbot-nginx
```
***生成 SSL 证书***

安装好 certbot 软件包后，用以下方法生成 SSL 证书：
```
sudo certbot --nginx --agree-tos --redirect --hsts --staple-ocsp --email you@example.com -d www.example.com
```
在此过程中，Certbot 会提示你输入电子邮件和域名。您还可以选择接收来自 EFF 的电子邮件。根据您的偏好决定是否选择加入。

安装证书后，您网站的 URL 将从 HTTP 切换到 HTTPS。任何试图访问旧 HTTP URL 的访客都会自动重定向到新的 HTTPS URL。此配置可确保 HTTPS 301 重定向、Strict-Transport-Security（严格传输安全）标头和 OCSP Stapling（OCSP 封装），以实现顶级安全性。

***设置证书自动更新***

为保持 SSL 证书有效，请设置 cron 作业自动更新证书。Certbot 为此提供了一个脚本。在最终完成设置之前，先进行一次干运行测试：
```
sudo certbot renew --dry-run
```
访问 crontab 配置，输入
```
sudo crontab -e
```
要自动更新 SSL 证书，可使用 cron 作业安排，命令如下：
```
00 00 */1 * * /usr/sbin/certbot-auto renew
```
这将在每天午夜尝试更新证书。

***解决 PHP 会话错误***

遇到会话保存问题，尤其是在使用某些插件时？问题的根源可能是 /var/lib/php/sessions/ 目录中的用户权限不正确。不过不用担心，你可以用一个简单的命令来解决这个问题。

****调整目录权限****

运行下面的命令设置正确的权限：
```
sudo chown -R www-data:www-data /var/lib/php/sessions/
```
该命令将 www-data 用户和组设置为 sessions 目录的所有者。这样，WordPress 就能顺利写入会话数据。这一调整对 WordPress 网站的无缝运行至关重要，主要是在使用插件处理自动任务（如发布到社交媒体）的情况下。

解决 PHP 会话错误是提高网站性能和改善用户体验的关键。

***解决 WordPress 中的 HTTPS 重定向循环问题***

如果你的 WordPress 网站在激活 HTTPS 后陷入重定向循环，很可能是因为 WordPress 一直在尝试重定向到安全的 HTTPS 版本，但循环从未完成。要解决这个问题，你可以用特定的代码行修改 wp-config.php 文件。

****修改 wp-config.php 文件****

在 wp-config.php 文件中插入以下几行代码：
```
define('FORCE_SSL_ADMIN', true);

if (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false) {
    $_SERVER['HTTPS'] = 'on';
}
```
下面是每一行的详细说明：

✨第一行将 FORCE_SSL_ADMIN 常量设为 true，确保所有管理页面都使用 HTTPS。

✨随后的代码会检查 HTTP_X_FORWARDED_PROTO 头是否包含 "https"。如果发现匹配，就会将 HTTPS 服务器变量指定为 "on"。这一操作会告知 WordPress 连接是安全的。

将这几行整合到 wp-config.php 文件中，你就能摆脱 HTTPS 重定向循环，并确保 WordPress 网站通过新的安全连接顺利运行。

***修复域名重定向循环***

WordPress 网站的重定向循环有时可能是由于 wp-config.php 文件中指定的域名与网站域名不匹配造成的。要解决这个问题，你需要验证并在可能的情况下调整配置中的域名。

****检查 wp-config.php 文件****

检查 wp-config.php 文件中的以下几行：
```
define('WP_HOME','http://example.com');
define('WP_SITEURL','http://example.com');
```
如果域名与网站域名不一致，请进行相应的更正。
但是，如果您已经对域名进行了必要的调整，但重定向循环仍然存在，那么根本原因可能是服务器配置问题。在这种情况下，最好联系托管服务提供商以获得进一步指导。

## 总结

WordPress 是一款功能强大、适应性强的内容管理系统，设置和微调都非常简单。遵守本教程中详述的程序，可以在你的 Debian 系统上建立一个强化、精简的 WordPress 设置。从微调 Nginx 到部署和增强 WordPress，你已经获得了制作一个安全、可运行的 WordPress 网站的真知灼见。坚持不懈地备份网站和刷新软件以确保最高性能和安全性至关重要。有了正确的工具和见解，使用 WordPress 创建一个精致迷人的网站就成为任何人都可以实现的目标。

Welcome to our [website](https://blog.tigress.cc/)
