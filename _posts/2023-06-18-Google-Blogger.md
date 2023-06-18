---
layout: post
title: Google Blogger 博客如何绑定自定义域名？
tags:
    - Blog
    - Google Blogger
    - 谷歌 博客
---
Google Blogger 自定义域名相对 GitHub 博客自定义域名简单一些；不同的是 Google Blogger 只能绑定子域名, 而 GitHub Blog 主域名子域名都可以绑定；Google Blogger 设置完成后需要等待的时间更长一些。

## Google Blogger 绑定自定义域名分几步？

首先告诉大家答案：分三步。

第一步：去 [Dynadot](https://www.dynadot.com/) 注册一个域名。

![Dynadot 域名注册](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/Dynadot%20%E5%9F%9F%E5%90%8D%E6%B3%A8%E5%86%8C.webp)

第二步：在 Blogger 设置-自定义域名 选项里填入子域名：可以是 www 开头，也可以 blog， news 等开头。

![Google Blogger Custom Domain](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/Google%20Blogger%20Custom%20Domain.webp)

第三步：在 Google Search Console 中完成对域名的验证，添加 CNAME 记录指向 ghs.google.com, 值可以是 www，也可以是 blog， news 等等。

![添加 CNAME 记录 指向 Google Blogger](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/Custom-Domain-on-Blogger-CNAME-DNS-Records%20Blogger%20%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E6%B7%BB%E5%8A%A0%20CNAME%20%E8%AE%B0%E5%BD%95.webp)

以上三步完成后就可以耐心等待了，我的 Google Blogger 地址为 [biz.tigress.cc](https://biz.tigress.cc/)。

## 需要注意的几点

第一：如果没有在 Google Search Console 中完成对域名的验证，那么谷歌会提示不能验证你对域名的所有权，那么按照谷歌的提示需要添加两条 CNAME 记录。

![Google Search Console 域名验证](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/Google%20Search%20Console%20%E5%9F%9F%E5%90%8D%E9%AA%8C%E8%AF%81.webp)

第二：设置完成后等待时间较长，没有耐心的会删除 CNAME 记录重新操作，此时谷歌博客不会再提示两条 CNAME 的记录值。刚开始我也遇到这个问题，在网上搜索后发现有的博主会在旧版 Search Console 中找到添加的域名认证，删除后谷歌博客便会再次提示。

其实第二条记录完全不需要设置，只要已经在现有 Google Search Console 版本中完成了对域名的认证即可，而第一条 CNAME 记录对于所有人都是一样的，指向 ghs.google.com 即可。

![添加 CNAME 记录 指向 Google Blogger](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/Custom-Domain-on-Blogger-CNAME-DNS-Records%20Blogger%20%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E6%B7%BB%E5%8A%A0%20CNAME%20%E8%AE%B0%E5%BD%95.webp)

第三：Google Blogger 不能绑定绑定主域名，所以我的主域名是帮定在 GitHub 博客的，那么在 Google Blogger 后台重定向网域这里就要保持关闭的状态。

![Google Blogger 重定向网域](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/Google%20Blogger%20%E9%87%8D%E5%AE%9A%E5%90%91%E7%BD%91%E5%9F%9F.webp)

第四：第一条 CNAME 添加的记录值 www 或者其他值必须与 Google Blogger 后台填写的子域名相对应。 比如我的 Google Blogger 地址为[biz.tigress.cc](https://biz.tigress.cc/)，CNAME 记录如下：

![域名后台添加 CNAME 记录指向 Google Blogger](https://github.com/huijingfei/huijingfei.github.io/raw/master/images/%E5%9F%9F%E5%90%8D%E5%90%8E%E5%8F%B0%E6%B7%BB%E5%8A%A0%20CNAME%20%E8%AE%B0%E5%BD%95%E6%8C%87%E5%90%91%20Google%20Blogger.webp)

写在最后，在完成所有的设置以后请耐心等待一个小时以上，切勿做任何删除操作以免造成不必要的麻烦。
