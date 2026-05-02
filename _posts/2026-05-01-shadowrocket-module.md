---
layout: post
title: 手动维护的 iOS 小火箭 Shadowrocket Rules 屏蔽规则 / 去开屏广告模块
subtitle: 去开屏广告模块搭配直连规则模块，小火箭精准分流
tags:
    - Shadowrocket
---
[![平价机场](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/ssrsub.webp)](https://sub.ssrsub.com/#/register?code=PnpWSPpi)

## 为什么由配置文件升级为模块

小火箭使用的 Geolite2 数据库只包含 ip 数据，不同于 v2ray 同时包含 geosite 和  geoip，如果网站域名不在规则文件列表内，那么先由 DNS 解析为 ip，再根据 ip 位置判断这个域名应该直连还是走代理。

为了避免 DNS 泄漏，一般由本地或者国内 DNS 解析列表内直连地址，不在列表内的域名默认走远程 DNS 解析；这样会造成两种不好的体验，首先对于小众网站即使是国内 ip，访问也有很大的延迟，另外远程 DNS 会把某些网站解析到国外的 ip，同样会造成访问延迟甚至无法访问。

为了解决这个问题，引入了[直连模块](https://raw.githubusercontent.com/GMOogway/shadowrocket-rules/master/sr_direct_list.module)，但是模块的优先级大于规则文件，直连规则会造成规则文件内的广告屏蔽规则失效，所以就把广告屏蔽规则转移到了模块，规则文件只负责基础配置。

如果只是轻度使用小火箭，[原规则文件](https://tigress.cc/2024/03/31/shadowrocket-rules/)是可以继续使用的，单独使用规则文件即可；如果除了日常的 APP，还经常访问一些小众的域名，那么搭配模块使用，不仅可以实现 APP 去除开屏广告，更可以实现国内外流量精准分流，覆盖日常 99.9% 使用场景。

## 基本完美的小火箭分流配置

首先复制去开屏广告模块地址，在小火箭模块界面点击右上角 + 号添加模块。

[https://raw.githubusercontent.com/huijingfei/Shadowrocket-Rules/refs/heads/main/sr_app_ad.module](https://raw.githubusercontent.com/huijingfei/Shadowrocket-Rules/refs/heads/main/sr_app_ad.module)

然后复制直连模块地址，在小火箭模块界面右上角 + 号添加模块。

[https://raw.githubusercontent.com/GMOogway/shadowrocket-rules/master/sr_direct_list.module](https://raw.githubusercontent.com/GMOogway/shadowrocket-rules/master/sr_direct_list.module)

确保去开屏广告模块在最上方，优先级高于直连模块，如果直连模块在开屏广告模块上边，要手动拖动直连模块到开屏广告模块下边；点击三个点，按住三条横杠拖动即可。

<table align="center">
  <tr>
    <td><img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/heads/main/Images/shadowrocket-module%2001.avif"></td>
    <td><img src="https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/heads/main/Images/shadowrocket-module%2002.avif"></td>
  </tr>
</table>

规则文件可以使用这个地址，复制后到小火箭配置界面，点击右上角 + 号添加配置文件，或者直接扫码添加。

[https://raw.githubusercontent.com/huijingfei/Shadowrocket-Rules/refs/heads/main/sr_app_ad_general.conf](https://raw.githubusercontent.com/huijingfei/Shadowrocket-Rules/refs/heads/main/sr_app_ad_general.conf)

![小火箭配置](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/sr_app_ad_general.webp)

这个配置文件仅包含基础配置，以后主要更新去广告模块，直连模块由他人维护，个人以后基本不再维护直连规则。https 解密（主要用于部分 APP 的开屏广告屏蔽，不能通过简单域名屏蔽实现广告去除）开启方法参考原博文[https://tigress.cc/2024/03/31/shadowrocket-rules/](https://tigress.cc/2024/03/31/shadowrocket-rules/)。
