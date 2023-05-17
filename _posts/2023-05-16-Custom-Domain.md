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

[Dynadot](https://www.dynadot.com/) 免费支持 WHOIS 信息隐私保护，网上很多文章推荐的是在阿里云注册域名，阿里云不支持支持 WHOIS 信息隐私保护，如果不是搭建的国内网站，不建议在阿里云购买域名。

## 在仓库里添加 CNAME 文件

文件里填写要绑定的主域名，不要包含 Http:// 和 www

![GitHub Domain CNAME](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/GitHub%20Domain%20CNAME.webp)

进入设置，找到 Custom domain 添加域名后保存即可（添加CNAME文件并在文件中填写绑定的域名后应该会自动保存，看看有没有自动保存），这一步可以省略，找到这个设置只是为了确认添加成功。

![GitHub Custom Domain](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/GitHub%20Custom%20Domain.webp)

## 添加 A 记录指向 GitHub 博客 IP 地址

开始菜单打开 CMD， PING 你的 GitHub 博客地址 username.github.io 得到一个 IP 地址。

![ping username.github.io](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/ping%20username.github.io.webp)

添加两个 A 记录，记录值为上一步骤得到的 IP 地址，主机记录分别为：“www”，一个为“@”，这样通过 tigress.cc 和 www.tigress.cc 都能访问到你的博客了。 WWW 记录为可选项，毕竟现在越来越多的网站不使用 www 也可以访问，www 对于用户的存在感已经很低了。

![DNS Set up A Record to Github IP Address](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/DNS%20Set%20up%20A%20Record%20to%20Github%20IP%20Address.webp)
