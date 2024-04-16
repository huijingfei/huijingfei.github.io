---
layout: post
title: ﻿为你的外贸网站添加 Cookie Banner
tags:
    - 用户意见征求设置
    - 谷歌分析
    - Google Tag Manager
    - 广告意见个性化征求信号
    - 欧盟地区用户意见征求政策
---
## 外贸商家的网站如何添加用户意见征求设置？

首先我们来看一下谷歌分析后台谷歌给出的提示：

若要验证贵商家在出于广告目的向 Google 发送个人数据之前，是否会征求最终用户的意见，请实现广告效果衡量意见征求信号。为此，您可以使用意见征求管理平台或 Consent Mode API。 

简单的理解就是如果要继续在谷歌上投广告来推广网站的产品，并使用谷歌分析来追踪用户的浏览数据以及转化情况，那么我们就必须添加这个用户意见征求设置，如果不设置的话，广告的效果就会大打折扣。

谷歌认证的意见征求管理平台均提供免费以及付费的选择，在这里我推荐 [CookieYes Cookie Consent Solution](https://www.cookieyes.com/)，Cookie Yes 对博客类网站个人网站免费，当然是有限制的：100个网页以内或者每个月25000个页面浏览。对于做外贸时间长的商家可能网站上不止100个网页，或者网站流量比较大大，所以最佳选项还是使用 Consent Mode API，相信广大商家和我一样是没有编码能力的，好在有人已经开源了相关的意见征求模板。

![CookieYes Price](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/cookie%20banner/cookieyes%20price.webp)

## 集成到 Google Tag Manager 中

打开 Google Tag Manager [管理页面](https://tagmanager.google.com/)，选择你要添加的网站容器。

![GTM container](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/cookie%20banner/GTM%20container.webp)

点击左侧导航栏的模板，再点击代码模板右侧的新建。

![tag template](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/cookie%20banner/tag%20template.webp)

去 Github 上下载一个文件 [gtm_template.tpl](https://github.com/68publishers/cookie-consent/blob/main/gtm_template.tpl)，在模板编辑器中导入。

![template editor](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/cookie%20banner/Template%20editor.webp)

成功导入后点击保存，关掉模板编辑器；点击左侧导航栏的代码标签，点击新建：代码配置选择 Cookie Consent；触发条件：选择 Consent Initialization - All Pages 用户意见征求初始化；点击保存。

![new tag](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/cookie%20banner/new%20tag.webp)

最后提交更改，就可以打开你的网站预览 cookie banner 意见征求模板了。

![cookie banner](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/cookie%20banner/Cookie%20Banner.webp)

谷歌分析的后台需要最长48小时才能接收到意见征求信号，我们等两天就可以看到网站数据流这里的感叹号编程✅，并提示：已启用广告效果衡量意见征求信号，已启用广告个性化意见征求信号。

![stream data](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/cookie%20banner/stream%20data.webp)

### 基本选项

除了默认的以外，我们还可以设置 cookie banner 的参数，以下选项仅供参考。

| Field                               | Description                                                                                                                                                                                                                                                  |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Package version                     | Version of the package `68publishers/cookie-consent`. Valid inputs are the `latest` or a version in formats `x.x.x`, `x.x.x-beta.x` and `x.x.x-alpha-x`. For available versions see the [releases](https://github.com/68publishers/cookie-consent/releases). |
| Make consent required               | The page will be blocked until a user action.                                                                                                                                                                                                                |
| Show the widget as soon as possible | The widget will be displayed automatically on the page load. You must trigger the widget manually by calling `CookieConsentWrapper.unwrap().show()` if the option is disabled.                                                                               |
| Hide from bots                      | Enable if you don't want the plugin to run when a bot/crawler/webdriver is detected.                                                                                                                                                                         |
| Revision                            | Revision number of your terms of use of cookies. For more information [see below](#how-to-manage-revisions).                                                                                                                                                 |
| Delay                               | Number of milliseconds before showing the consent modal.                                                                                                                                                                                                     |

### Cookies 选项

| Field                       | Description                                                                                                                                                                                                            |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cookie name                 | The name of a cookie value that holds information about the user's consent.                                                                                                                                            |
| Cookie domain               | The domain name for the cookie that holds information about the user's consent, for example ".example.com". If the value is empty, it is automatically set in a browser using the "window.location.hostname" variable. |
| Cookie expiration           | Expiration of the cookie in days.                                                                                                                                                                                      |
| Enable cookies auto-clear   | All cookies will be deleted based on the user's consent and a selected strategy if the option is enabled.                                                                                                              |
| Cookies auto-clear strategy | Strategy for cookies auto-clear feature.                                                                                                                                                                               |
| Cookie names                | Names of the cookies that will be deleted or kept (based on a selected strategy).                                                                                                                                      |

### Storage options

The following types of storage are available:

- Functionality storage
- Security storage
- Personalization storage
- Ad storage
- Ad user data
- Ad personalization
- Analytics storage

### 翻译设置

模板支持多语言翻译:

- [English - en](src/resources/translations/en.json)
- [Czech - cs](src/resources/translations/cs.json)
- [Slovak - sk](src/resources/translations/sk.json)
- [Spanish - es](src/resources/translations/es.json)
- [French - fr](src/resources/translations/fr.json)
- [German - de](src/resources/translations/de.json)
- [Bulgarian - bg](src/resources/translations/bg.json)
- [Hungarian - hu](src/resources/translations/hu.json)
- [Polish - pl](src/resources/translations/pl.json)
- [Romanian - ro](src/resources/translations/ro.json)
- [Slovenian - sl](src/resources/translations/sl.json)
- [Finnish - fi](src/resources/translations/fi.json)
- [Dutch - nl](src/resources/translations/nl.json)
- [Croatian - hr](src/resources/translations/hr.json)
- [Italian - it](src/resources/translations/it.json)
- [Norwegian - no](src/resources/translations/no.json)
- [Swedish - sv](src/resources/translations/se.json)
- [Ukrainian - uk](src/resources/translations/ua.json)

### 其他版本 cookie banner 推荐

[Google Tag Manager Consent Mode Examples](https://github.com/googleanalytics/gtm-consent-mode-examples)

[Consent Mode (Google tags)](https://github.com/gtm-templates-simo-ahava/consent-mode)

Welcome to our [website](https://blog.tigress.cc/)
