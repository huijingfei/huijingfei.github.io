---
layout: post
title: 手动维护的 iOS 小火箭 Shadowrocket Rules 分流规则 / 白名单规则
subtitle: 小火箭去开屏广告配置文件规则，https 解密规则；Shadowrocket Ad Block Rules Geolite2
tags:
    - Shadowrocket
---
[![可乐云专线机场免费试用](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/shadowrocket/free%20shadowrocket.webp)](https://ccola.xn--vuqr2hh88bion.xn--io0a7i/#/register?code=EIYihGZw)

## 手动维护的 iOS 小火箭 Shadowrocket Rules 分流规则 Geolite2 数据库 (白名单规则) / 去广告规则

小火箭配置文件指的是访问网站需要直连还是代理的分流规则，例如访问腾讯阿里抖音等网站直连，访问谷歌脸书等走代理。网上一些自动生成的规则具有局限性，例如一些图片视频链接不在规则内，导致一些国内网站或者 APP 访问速度慢，错误的走了代理，在代理线路不好的时候尤其明显，所以才有了这个手动更新的规则。本白名单规则手动更新，时间不固定，专注于改善 APP 体验的小火箭分流去广告规则。

🛑 精简部分不常访问的小语种网站。

🛑 精简部分垃圾广告域名。

🛑 完善欧美主流网站规则。

🛑 加入部分 APP 广告屏蔽规则。

🛑 完善部分手机 APP 的分流规则。

🛑 更改小火箭 Shadowrocket 默认 DNS 设置为支持 DOH/DOT 的国际大厂 DNS。

🛑 添加常用 SSL 证书域名。

**注意⚠️：局域网无法使用国际大厂 DNS，如果你的网络较好或者能够忍受较高的网络延迟，请使用 Google 和 Cloudflare DNS，否则请使用以下 DNS备用**

360 DNS
```
https://doh.360.cn
dot.360.cn
```
OneDNS
```
https://doh-pure.onedns.net/dns-query
dot-pure.onedns.net
```
------------------------------------------------------

**免费公共 DNS 服务器推荐**

[免费公共 DNS 服务器大全](https://tigress.cc/2025/03/03/dns-list/)

[免费公共 IPv4/IPv6/DoT/DoH DNS 服务器大全](https://dns.icoa.cn/)

[全球公共DNS服务器地址汇总（包含DoT/DoH）](https://www.luyouwang.com/dns-dot-doh)

**自用小火箭规则：**
```
https://raw.githubusercontent.com/huijingfei/Shadowrocket-Rules/main/sr_app_ad.conf
```
    
直连：top500 网站中可直连的境外网站、中国网站
    
代理：默认代理其余的所有境外网站

**去广告规则模块：**

本规则专注于去除 APP 开屏广告，如需去除网页广告，可搭配使用模块使用屏蔽列表。
```
https://raw.githubusercontent.com/GMOogway/shadowrocket-rules/master/sr_reject_list.module
```
------------------------------------------------------

**付费机场推荐**

“可乐云”机场，成立于2020年，是一款快速、稳定的网络加速器。本产品特点支持主流电脑端一键app加速，可免去第三方客户端的复杂配置问题, 并支持 Clash、v2ray、Shadowrocket 小火箭等第三方客户端。游戏、软件全时段享用、流媒体当地全解锁，畅游网络世界。“可乐云”机场稳定经营，持续更新，致力于创造更好的云机场服务。

“可乐云”专线机场提供小杯、中杯、大杯三种不同的套餐，个人购买小杯即可，外贸公司团队可购买中杯或者大杯。
 
购买链接：[https://52.cola52.site/#/register?code=EIYihGZw](https://ccola.xn--vuqr2hh88bion.xn--io0a7i/#/register?code=EIYihGZw)

[![可乐云专线机场免费试用](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/shadowrocket/cola.webp)](https://ccola.xn--vuqr2hh88bion.xn--io0a7i/#/register?code=EIYihGZw)

**小火箭添加订阅方法**

小火箭右上角点击 ➕，类型选择 Subscribe，然后在 URL 处添加订阅链接，最后点击保存即可；订阅链接可以在机场后台首页点击一键订阅，复制订阅地址。

![小火箭添加订阅方法](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/shadowrocket/shadowrocket%20subscribe.webp)

**ShadowRocket GeoLite2 数据库：**

设置页 ➡️ 下拉找到 GeoLite2 数据库 ➡️ 以下两个建议选择 Country-only-cn-private.mmdb ➡️ 复制地址后粘贴到 URL 处，点击更新即可

[https://git.io/GeoLite2-Country.mmdb](https://git.io/GeoLite2-Country.mmdb) 数据比较全，文件较大。

[Country-only-cn-private.mmdb](https://raw.githubusercontent.com/Loyalsoldier/geoip/release/Country-only-cn-private.mmdb) 文件较小，只包含 GEOIP,CN 和 GEOIP,PRIVATE。

如果没有特殊需求，使用 [Country-only-cn-private.mmdb](https://raw.githubusercontent.com/Loyalsoldier/geoip/release/Country-only-cn-private.mmdb) 即可。

**规则使用方法**

方法一：用 ShadowRocket 扫描二维码即可。

![二维码](https://github.com/huijingfei/Shadowrocket-Rules/blob/main/QR%20Code/shadowrocket.png?raw=true)

方法二：在 ShadowRocket 应用中，进入 [配置] 页面，点击右上角加号，将规则[文件地址](https://raw.githubusercontent.com/huijingfei/Shadowrocket-Rules/main/sr_app_ad.conf)粘贴到 url 处，点击“下载”即可。

![手动维护的 iOS 小火箭 Shadowrocket 规则](https://github.com/huijingfei/Blog_Gitalk/raw/main/Images/Shadowrocket%20rules.webp)

初次使用去广告规则，部分 APP 因为广告缓存的原因还会出现少量开屏广告，大部分 APP 可以通过清除缓存实现去广告，微博 APP 清除缓存无法清除开屏广告，可以重装或者等几天广告过期后即可。

### 部分 APP 无法使用代理访问解决方法

将相关域名加入跳过代理，建行生活有效，其他未测试。网络环境变化需开关代理一次（例如从 WIFI 换成数据网络），否则仍将提示无法使用代理访问。

    www.baidu.com： 网上国网、多看阅读、顺丰金融、广东农信、丰云行、中国银行缤纷生活、通信行程卡app、趣智校园、趣听音乐、光大手机银行、掌上12333、沃视频
 
    yunbusiness.ccb.com： 建行生活
 
    wxh.wo.cn： 沃小号
 
    gate.lagou.com： 拉勾招聘
 
    www.abchina.com.cn： 中国农业银行
 
    www.shanbay.com  扇贝单词消息中心
 
    www.google.com  成都公积金
 
    login-service.mobile-bank.psbc.com,mobile-bank.psbc.com： 中国邮政储蓄银行

### IOS ShadowRocket 小火箭去除 APP 开屏广告

将广告域名链接🔗加入屏蔽列表，APP 无法下载到广告图片视频，实现去除开屏广告的效果。本规则已实现常用 APP 的去除开屏广告，部分由于规则多变复杂，尚未达到完全去除。（建行生活开屏广告规则因误杀太多，所以不做屏蔽；本规则旨在尽量不影响正常使用的情况下，尽可能的精准去除开屏广告）

![APP开屏广告示例](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/APP%20AD.webp)

开屏视频广告

![APP开屏视频广告](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/APP%20VIDEO%20AD.webp)

![淘宝系飞猪开屏广告](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/CLOUD%20VIDEO%20AD.webp)

### 开启 https 解密

注意⚠️：开启 https 解密后，尽量不要直接使用更新配置，这会导致已信任的证书被覆盖，可采用复制粘贴的方法替换规则列表。部分 APP 广告需要开启解密，这部分 APP 不能通过简单的把域名加入屏蔽列表屏蔽广告，否则会屏蔽应用内正常图片的显示，必须解密后对单独对广告图片地址进行屏蔽。

点击使用的配置文件后的感叹号 i → HTTPS 解密 → 开启 HTTPS 解密 → 点击允许 → 前往手机的设置，不是 Shadowrocket 的 → 看到已下载描述文件 → 安装 → 输入手机的解锁密码 → 安装 → 安装 → 前往手机的设置 → 通用 → 关于本机 → 证书信任设置 → 找到 Shadowrocket 点绿它以信任该根证书 → 继续

1️⃣去小火箭点击配置文件后的感叹号 i → HTTPS 解密 → 开启 HTTPS 解密安装证书，会提示下载描述文件。

![Install Certificate](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/Install%20Certificate.webp)

2️⃣前往手机的设置安装描述文件。

![VPN Device](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/VPN%20Device.webp)

3️⃣再去关于手机，点击证书信任设置。

![Trust setting](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/Trust%20setting.webp)

4️⃣最后回到小火箭开启。

### 视频广告

<iframe width="1280" height="720" src="https://www.youtube.com/embed/cZGwcOBh318?si=tr7F9wdWF15tWMds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### v2rayN 自定义规则

直接下载[v2rayN-Rule-Whitelist.json](https://github.com/huijingfei/Shadowrocket-Rules/releases)，V2rayN路由设置中从文件导入即可，或者直接复制txt文件中的规则，然后在V2rayN路由设置中从剪切板导入。

### v2ray 路由规则文件

[v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)可代替 V2Ray 官方 geoip.dat 和 geosite.dat。

### v2rayA 防止 DNS 污染 ➡️ 自定义高级设置

Domain Query Servers
```
202.99.160.68->direct
52.80.52.52->direct
123.125.81.6->direct
https://doh.360.cn:443/dns-query->direct
https://doh-pure.onedns.net:443/dns-query->direct
```
External Domain Query Servers
```
https://cloudflare-dns.com:443/dns-query->proxy
https://dns.google:443/dns-query->proxy
https://hk-hkg.doh.sb:443/dns-query->proxy
https://doh.opendns.com:443/dns-query->proxy
```
