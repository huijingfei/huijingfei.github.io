---
layout: post
title:  使用 Google Tag Manager 跟踪 LinkedIn 转化
subtitle: 使用 GTM 跟踪领英转化情况
tags:
    - 外贸
---

![使用 GTM 跟踪领英转化情况](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/track-linkedin-banner.webp)

正如 Facebook 和 Twitter，LinkedIn 同样提供广告像素与转化追踪功能。就功能完善度而言，Facebook 远超同类竞品（且配套资源更丰富）。尽管如此，若您仍希望使用 LinkedIn 广告并量化其效果，本指南将提供完整解决方案——我将详解如何通过 Google Tag Manager 追踪 LinkedIn 转化。

LinkedIn 的追踪代码名为"LinkedIn Insight Tag"，其本质是再营销代码。将其部署至网站所有页面后，即可开始收集页面浏览数据（后续可设为转化指标）。此外，您还能触发额外事件标签，追踪与特定 URL 无关的行为（如表单提交、点击、视频观看等）。

## 1. Linkedin Campaign Manager

![Linkedin Campaign Manager](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/LinkedIn%20Advertise.jpg)

展开 LinkedIn 顶部导航栏 → 点击「发布广告」入口。

这对夫妇会向您打招呼；让我们加入他们。

![LinedIn Greetings](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/LinedIn%20Greetings.jpg)

领英着陆页设计可能因A/B测试存在差异，但请务必寻找「创建广告」按钮并点击。即使已有账号仍需此操作（至少我未找到登录入口）。

点击后系统将引导创建广告账户。因我已拥有账户，此处直接选择现有账户。

![Creat LinedIn Ad Account](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/Creat%20LinedIn%20Ad%20Account.jpg)

由于账户创建时间较早，您的新用户引导界面可能与我的不同。请按指引操作直至进入广告组数据看板（或新建广告系列）。本指南不涉及广告创意优化技巧，重点解析领英监测代码(Insight Tag)部署及转化追踪技术实现。

## 2. Linkedin Insight Tag

登录到 LinkedIn 广告帐户后，请找到分析 > Insight 标签。

![Linkedin Insight Tag](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/Linkedin%20Insight%20Tag.jpg)

系统将提示您部署领英监测代码(Insight Tag)，本文采用Google标签管理器(GTM)的配置路径（常规推荐方式）。

![部署领英监测代码](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/implement%20the%20Insight%20tag.jpg)

此选项将打开一个选项卡，在此您将收到 Partner ID。复制此代码并前往 Google Tag Manager。

![LinedIn Partner ID](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/LinedIn%20Partner%20ID.jpg)

单击 “标签”>“新建”>“Linkedin Insight Tag”，然后粘贴 Partner ID。没有其他字段，因此最后需要做的就是添加触发器 所有页面。如果只想在特定页面触发，可以创建一个更有针对性的基于 URL 的触发器。

![粘贴 Partner ID](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/paste%20the%20Partner%20ID.jpg)

在 GTM 预览和调试模式的帮助下，不要忘记测试整个实施过程。预期结果：洞察标签应在所有页面（如果选择了此触发器）或仅在特定页面（基于更有针对性的触发器）上触发。

如果一切正常，就发布容器，让它开始收集新数据。同时，让我们来实施转化跟踪。

## 3. Linkedin 基于页面浏览的转化（通过全站 insight tag）

LinkedIn 上有两种类型的转化--在线转化和离线转化。

顾名思义，在线转化是指在您的网站上实现的业务目标。例如，有人在您的网站上购买了产品或提交了线索表单。线下转化主要适用于本地商店，当有人看到您的广告并到店购买产品或与销售代表交谈时。

在线转化又分为基于页面的转化和基于事件的转化。 我们将继续深入探讨。

在 LinkedIn 营销活动管理器中转入 “分析”>“转化跟踪”，然后创建一个新的转化。

![Conversion Tracking in LinkedIn Campaign Manager](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/Conversion%20Tracking%20in%20LinkedIn%20Campaign%20Manager.jpg)

此时会出现一个表单，询问更多详细信息，如转化名称、转化类型等。

![Conversion Tracking Details](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/Conversion%20Tracking%20Details.jpg)

然后，您将被重定向到一个页面，在这里您可以将此转化分配给一个营销活动。从下拉菜单中选择以该转化为主要目标的营销活动。

![conversion to a campaign linkedin](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/conversion%20to%20a%20campaign%20linkedin.jpg)

最后一页是指定如何进行转化跟踪。从技术实施的角度来看，这里最重要的字段是您要跟踪的转化类型。主要有两种类型--页面加载和特定事件。

## 4. Linkedin URL/页面加载 转化

假设您有一个带有表单的登陆页面。当访问者提交表单后，他/她会被重定向到一个感谢页面（例如，URL 为 www.mywebsite.com/thank-you）。在这种情况下，请选择全站 insight tag 方法，因为关键事件（表单提交）发生在访客进入 “感谢 ”页面时。

在这里，我的朋友，你不再需要 Google 标签管理器了，因为你已经实施了可跟踪所有页面浏览的洞察标签。只需跳到 “转化 ”表单的最后一栏 “URL”，然后输入相当于已完成转化的所有 URL（页面地址）即可。

![输入相当于已完成转化的所有 URL（页面地址）即可](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/enter%20all%20the%20URLs.jpg)

但是，如果您希望跟踪的重要事件与特定 URL 无关，该怎么办？我将在本博文的下一章中解释。

## 5. Linkedin 基于事件的转化

还有一种跟踪事件的方法，但对于经验不足的 Google Tag Manager 用户或使用 Facebook Pixel 的用户来说比较麻烦。在新转化形式中，选择特定事件的像素转化方法，你会看到一小段代码。

![特定事件的像素转化方法](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/Event-specific%20pixel.jpg)

这里的转化 ID 至关重要，因为我们要使用 Google 标签管理器来实施这个标签。对于 LinkedIn，您必须在 GTM 工作区中添加一个新模板--LinkedIn Insight Tag 2.0。

前往 Google 标签管理器 > 标签 > 新建 > 社区模板库，搜索下面截图中的标签模板。

![GTM 社区模板库](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/tag%20template.jpg)

将其添加到您的工作区，您将看到一个选项，用于添加您的 Insight 合作伙伴 ID 和转化 ID（同一标签中最多可添加三个）。

![LinkedIn Insight/LinkedIn Insight Tag 2.0](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/LinkedIn%20Insight%20Tag%202.0..jpg)

您应该为这个标签指定什么样的触发器？这取决于您。这里有几个想法：

   ✨提交表单
   
   ✨访客/用户提交评论
   
   ✨播放视频

最后，我们来测试一下。假设你想在提交表单时触发 LinkedIn 事件转化标签。首先，打开 GTM 预览和调试模式，然后提交表单并检查是否触发了标签（标签应显示在预览和调试控制台中）。

然后，检查请求是否成功完成。在浏览器中，转到更多工具 > 开发人员工具。

![开发人员工具](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/Developer%20Tools.jpg)

我选择的是 Chrome 浏览器，因此在截图中使用的也是 Chrome 浏览器。在控制台（显示在屏幕底部）中，转到网络。

![Chrome 浏览器控制台（显示在屏幕底部）中，转到网络](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/refs/heads/master/images/LinkedIn%20Insight/Chrome%20Network.jpg)

打开网络选项卡后，刷新页面并尝试再次提交表单。在搜索栏中输入不带引号的 “linkedin”。如果在列表中看到一个项目，且其状态为 200，那么就可以了。200 状态代表确定。

LinkedIn 的转化可能需要 24 小时才能反映到 LinkedIn 的后台/不过，在大多数情况下，转化指标部分会在 4 小时内显示数字。

## 结论： 如何使用 Google 标签管理器跟踪 Linkedin 的转化率

就是这样！你刚刚学会了如何使用 Google Tag Manager 跟踪 LinkedIn 转化的两种方法：

   ✨基于页面加载
   
   ✨基于事件

对于基于页面浏览的转化，您只需要一个 LinkedIn Insight 标签（使用内置的 GTM 标签模板），粘贴合作伙伴 ID 并在所有页面上激活它。之后，所有转化（条件）都将通过 Linkedin 的广告账户进行管理。

如果您的转化不依赖于唯一 URL，并且在页面未重新加载时发生，则可选择另一种方式，即转化 ID。复制 ID 并将其粘贴到 Linkedin Insight 2.0 标签中。

不要忘记测试！请记住，LinkedIn 广告账户中的数据不会实时显示。请耐心等待，因为这可能需要几个小时。

如果你对如何使用 Google Tag Manager 跟踪 LinkedIn 转化率有任何疑问，请在评论中告诉我。

[告别弹窗广告，360 免费杀毒安全卫士替代品。](https://tigress.cc/2024/08/03/free-antivirus/)
