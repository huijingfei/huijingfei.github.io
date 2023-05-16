---
layout: post
title: GitHub 如何绑定自定义域名？
tags:
    - Blog
    - Custom Domain
    - GitHub
---
个人的 GitHub 博客已经搭建好久了，一直使用的是 username.github.io 默认域名，前不久终于在 Dynadot 以不到300块的价格买了10年的域名；在网上搜索了部分GitHub自定义域名文章后，在自己的实践下，绑定自定义域名成功，决定把自己的心得写下来。

## 首先去 [Dynadot](https://www.dynadot.com/) 注册一个域名

[Dynadot](https://www.dynadot.com/) 免费支持WHOIS信息隐私保护，网上很多文章推荐的是在阿里云注册域名，阿里云不支持支持WHOIS信息隐私保护，如果不是搭建的国内网站，不建议在阿里云购买域名。

## 在仓库里添加 CNAME 文件

文件里填写要绑定的主域名，不要包含 Http:// 和 www

进入设置，找到 Custom domain 添加域名后保存即可（添加CNAME文件并在文件中填写绑定的域名后应该会自动保存，看看有没有自动保存），这一步可以省略，找到这个设置只是为了确认添加成功。

## 添加 A 记录指向 GitHub 博客 IP 地址

开始菜单打开 CMD 并 PING 你的 GitHub 博客地址 username.github.io 得到一个 IP 地址。

添加两个A记录，记录值为上一步骤得到的 IP 地址，主机记录分别为：“www”，一个为“@”，这样通过 tigress.cc 和 www.tigress.cc 都能访问到你的博客了。 WWW 记录为可选项，毕竟现在越来越多的网站不使用 www 也可以访问，www对于用户的存在感已经很低了。
