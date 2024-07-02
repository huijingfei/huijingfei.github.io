---
layout: post
title: 如何在 Debian 12、11 或 10 上用 Let's Encrypt 加密 Nginx
subtitle: 如何在 Debian 服务器上开启网站 HTTPS 加密访问
tags:
    - 网站 HTTPS 加密
    - Let's Encrypt
---

![如何在 Debian 服务器上开启网站 HTTPS 加密访问](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/How-to-Secure-Nginx-with-Lets-Encrypt-on-Debian.webp)
在 Debian 上使用 Let's Encrypt 保护您的 Nginx 服务器，确保为您的网络应用程序提供稳健的加密和更高的安全性。这个简单的过程可以大大提高网站的可信度和性能。

⭐免费 SSL/TLS 证书： Let's Encrypt 提供免费、自动和开放的证书，在不影响安全性的情况下节约成本。

⭐自动化： 利用 Certbot 轻松实现证书签发和更新自动化，减少管理开销。

⭐改进搜索引擎优化： HTTPS 深受搜索引擎青睐，可提高网站排名。

⭐增强安全性： 利用强大的加密功能保护敏感数据，确保服务器与客户端之间的安全连接。

⭐信任和信誉： 通过 HTTPS 挂锁图标赢得用户的信任，展示对安全的承诺。

⭐合规性： 满足数据保护的行业标准和监管要求。

通过在 Debian 上使用 Let's Encrypt 保护 Nginx 服务器的安全，您可以为用户提供安全的浏览体验，同时获得提高搜索引擎优化和用户信任度的好处。

让我们深入了解在基于 Debian 的服务器上安装和配置 Let's Encrypt 所需的步骤。

## 在为 Nginx 安装 Certbot 之前更新 Debian 软件包存储库

在安装 Certbot 之前，确保更新 Debian 系统中的软件包仓库和现有软件包至关重要。保持系统更新可确保您安装的是最新版本的 Certbot 及其依赖程序。

执行以下命令更新软件包库并升级现有软件包：
```
sudo apt update && sudo apt upgrade
```
**安装 Certbot Nginx 插件**

现在您的 Debian 系统已经更新，下一步就是安装 Certbot 及其 Nginx 插件。Nginx 插件至关重要，因为它能让 Certbot 与 Nginx 交互，自动获取和更新证书，并配置 Nginx 以使用这些证书。

运行以下命令安装 Certbot 和 Nginx 插件：

```
sudo apt install certbot python3-certbot-nginx
```
**Certbot 配置和 SSL 证书生成**

成功安装 Certbot 及其 Nginx 插件后，下一步就是运行 Certbot 为域名生成并安装 SSL 证书。为了指示 Certbot 我们正在使用 Nginx，我们使用了 --nginx 选项。运行 Certbot 的命令还包含其他各种选项，有助于提高设置的安全性。

--agree-tos选项告诉Certbot，你同意Let's Encrypt的服务条款。--redirect选项指示Certbot设置一个从HTTP到HTTPS的永久301重定向，确保您网站的所有流量都经过加密。hsts选项会添加一个Strict-Transport-Security（严格传输安全）标头，确保与服务器的安全连接。最后，--staple-ocsp 选项可启用 OCSP Stapling 功能，该功能可在提高 SSL 协商性能的同时维护访问者隐私。

通过--email选项提供的电子邮件地址将被Let's Encrypt用于发送与SSL证书相关的通知，如续期提醒和安全公告。

请将 you@example.com 替换为实际电子邮件地址，将 yourdomain.com 替换为域名。运行以下命令
```
sudo certbot --nginx --agree-tos --redirect --hsts --staple-ocsp --email you@example.com -d yourdomain.com
```
成功执行命令后，Certbot 将为您的域名生成 SSL 证书，配置 Nginx 以使用该证书，并应用指定的安全选项。这样，您的服务器连接就安全了，您的网站也可以通过 HTTPS 访问。

## 其他 Certbot 配置方法

对于喜欢更有指导性和互动性方法的人，Certbot 提供了另一种方法，提示您选择信息和配置。下面介绍如何使用这种方法：

运行以下命令：
```
sudo certbot --nginx
```
Certbot 将启动互动会话。以下是您可能会遇到的提示：

1. 输入电子邮件地址（用于紧急更新和安全通知）： 提供您的电子邮件地址。Let's Encrypt 将使用该地址与你的证书进行通信。

2. 同意 Let's Encrypt 服务条款： 您将被要求同意服务条款。输入 A 表示同意。

3. 与电子前线基金会共享你的电子邮件，以获取他们的工作更新： 如果你想支持电子前沿基金会，输入 Y 表示同意。否则，输入 N 表示否。

4. 您希望为哪些域名激活 HTTPS： Certbot 将显示它可以签发证书的域名。输入与您的域名相对应的数字，或全部留空。

5. 选择适当的操作： 您可以选择

    ✨1: 尝试重新安装证书

    ✨2: 更新和更换证书（每 7 天限制 ~5 次）

    选择适合您需要的选项。

6. 选择是否将 HTTP 流量重定向到 HTTPS：系统会询问你是否要将 HTTP 流量重定向到 HTTPS。这对大多数网站都是可取的：

    ✨1: 不重定向 - 不再更改网络服务器配置。
    
    ✨2: 重定向 - 将所有请求重定向到安全的 HTTPS 访问。
    
    选择选项 2 可提高安全性。

完成所有提示后，Certbot 将输出一条与前面提到的类似的信息，显示证书文件的位置和更多信息。

## 证书续期试运行

在执行自动续订计划之前，最好先确认续订流程是否正常运行。为此，您可以启动一次模拟运行，在不做任何实际更改的情况下模拟续订流程：
```
sudo certbot renew --dry-run
```

## 设置证书续订计划

如果试运行没有任何问题，现在就可以开始安排证书自动更新了。首先，使用此命令在编辑模式下打开 crontab 文件：
```
sudo crontab -e
```
然后，在文件底部添加以下一行。这一行设置了每天凌晨 2:30 的更新检查：
```
30 2 * * * /usr/bin/certbot renew --quiet
```
保存并关闭文件后，您就成功设置了一个自动程序。每天，cron 都会检查是否有证书需要更新。除非出现错误，否则 --quiet 标志可确保该任务在后台运行，不产生输出。

## 使用 NGINX 配置增强 SSL

在这部分可选内容中，您将调整域名的 NGINX 配置以优化性能。这包括设置 SSL 证书、配置会话参数和实施安全增强。

**编辑 NGINX 配置文件**

首先，您需要访问 NGINX 中域的配置文件。执行以下命令：
```
sudo nano /etc/nginx/sites-available/your_domain
```

这将在名为 nano 的文本编辑器中打开域名的配置文件。进入后，在服务器块中进行以下调整。

**指定 SSL 证书和密钥**

首先，设置 SSL 证书及其相应私钥的路径：
```
ssl_certificate /path/to/signed_cert_plus_intermediates;
ssl_certificate_key /path/to/private_key;
```

**配置 SSL 会话**

现在，您需要配置 SSL 会话参数。这将控制会话的存储时间，并确保有效重建安全连接：

```
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;  # approximately 40000 sessions
ssl_session_tickets off;
```
**配置 Diffie-Hellman 参数**

为进一步提高安全性，应配置 Diffie-Hellman (DH) 参数。DH 算法可确保在建立 SSL/TLS 连接时进行安全的密钥交换。

首先，生成一个 Diffie-Hellman 参数文件。一般来说，密钥长度越长，安全性越高。常见的密钥长度为 2048 位和 4096 位。虽然 2048 位通常被认为已经足够，但选择 4096 位会提供更高的安全性，尽管会牺牲性能。在做出决定前，请考虑您的安全要求和服务器的能力。

要生成 2048 位 DH 参数文件，请使用以下命令：
```
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

另外，为了提高安全性，也可以通过执行此命令创建 4096 位密钥：
```
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 4096
```

生成文件后，在 NGINX 配置中指定其位置。用刚刚创建的文件的路径更新 ssl_dhparam 指令：
```
ssl_dhparam /etc/ssl/certs/dhparam.pem;
```
**设置协议和密码**

为确保高安全性和兼容性，请指定应使用哪些 SSL 协议和密码：
```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers [long string of ciphers here];
ssl_prefer_server_ciphers off;
```
**实施 HSTS**

添加 HTTP 严格传输安全（HSTS）以执行安全连接：
```
add_header Strict-Transport-Security "max-age=63072000" always;
```
**启用 OCSP Stapling**

OCSP stapling 是一项改进 SSL 证书验证过程的功能。打开它可确保使用根 CA 和中间证书验证信任链：
```
ssl_stapling on;
ssl_stapling_verify on;
ssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates;
```
**指定 DNS 解析器**

最后，设置 DNS 解析器的 IP 地址。这对 OCSP 装订至关重要：
```
resolver 1.1.1.1
```
如果不想使用 Cloudflare 提供的解析器，请确保将 1.1.1.1 替换为解析器的实际 IP 地址。

**验证并应用更改**

完成后，保存并退出文件。验证 NGINX 配置以确保没有语法错误至关重要。运行此命令进行检查：
```
sudo nginx -t
```
如果没有问题，请通过重新加载 NGINX 来应用更改：
```
sudo systemctl restart nginx
```
## 最终总结

在本文中，我们介绍了在 Debian 10、11 和 12 上使用 Let's Encrypt SSL 证书保护 Nginx 的安全。我们强调了 SSL 证书对服务器和客户端之间安全通信的重要性。从安装 Certbot 开始，我们讲解了如何从 Let's Encrypt 获取免费 SSL 证书，配置 Nginx 以使用证书，使用 cron 作业自动更新，以及使用 Diffie-Hellman 参数增强安全性。

最后，监控日志和定期更新系统是必不可少的。这些做法将帮助你随时了解潜在问题，保护服务器免受最新安全漏洞的侵害。

Welcome to our [website](https://blog.tigress.cc/)
