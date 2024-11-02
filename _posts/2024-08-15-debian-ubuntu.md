---
layout: post
title:  用于服务器的 Debian 与 Ubuntu，如何选择？
subtitle: Debian 与 Ubuntu。哪一个是更适合专业的服务器操作系统？
tags:
    - Debian
---
![Debian 与 Ubuntu。哪一个是更适合专业的服务器操作系统？](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/debian-vs-ubuntu-for-server.avif)

如果您要建立一个新的服务器，最关键的决定之一就是您要使用的操作系统。

[Debian](https://www.debian.org/) 和 [Ubuntu](https://ubuntu.com/download) 既可用作桌面操作系统，也可用作服务器。它们是历史上最流行的两个 Linux 发行版。众所周知，Ubuntu 是基于 Debian 的发行版。不过，它并不是一个完全的复制品，两者之间既有很大的相似之处，也有很大的不同之处。换句话说，它们是一枚硬币的两面。

要了解这两个操作系统的服务器，并选择哪个更好，应该说这在很大程度上取决于你的喜好。

你可能听说过 Debian 是给专家用的发行版，而 Ubuntu 则是给初学者用的发行版。就目前而言，确实如此。不过，这种区别更多的是历史性而非现代性的。

## 发行版本：Debian Stable 与 Ubuntu LTS

Debian 和 Ubuntu 之间最明显的区别之一是这两个发行版的发布方式。Debian 有基于稳定性的分级模式。而 Ubuntu 则定期发布 LTS（长期支持）版本。

Debian 稳定版在下一个稳定版发布后的一年内都会得到支持。因此，当稳定版准备就绪时就会发布。不幸的是，这让 Debian 变得有点难以预测，因为在下一个稳定版定稿之前，你不知道何时需要升级。因此，如果稳定版每两年发布一次，而你在稳定版发布之初就开始使用，那么你将获得三年的更新。

Ubuntu 的模式更为传统。首先，开发人员确保每两年发布一次 LTS 版本。因此，无论是否有新的 LTS 版本发布，Ubuntu LTS 版本都会为你提供五年的支持。这就意味着，你可以在一台电脑上部署最新的 LTS 版本，而不用担心它长年得不到安全更新。

如果你的服务器不只几台，或者只有一些应用程序，无法承受停机测试升级的时间，或者没有时间花一天或一周的时间测试升级，那么 Ubuntu 就比 Debian 更有优势。

## 软件：Debian Stable 与 Ubuntu LTS

这两个发行版使用相同的软件包管理系统，你经常能找到为这两个发行版打包的软件。不过，在表面之下，还有一些关键的区别需要注意。

Debian 的稳定版非常稳定。在稳如磐石的可靠性方面，很少有发行版能与之媲美。但是，Debian 的稳定是有代价的。您将无法使用所有最新发布的软件和最新的尖端技术。至少不是开箱即用。Debian 稳定版中的软件通常都比较过时。通常在发行版发布之初就已经过时，但这对服务器来说不是问题。

Debian 对自由软件持严格的态度。他们认为专有软件是不得已而为之。因此，在 Debian 的默认安装中找不到任何专有软件。取而代之的是，该项目将所有软件都放在一个单独的软件库中，您必须在安装后手动启用。
此外，如果您需要非自由软件，您需要在每个软件仓库中添加非自由和贡献部分。

另一方面，Debian 不鼓励使用专有软件，而 Ubuntu 的开发者却对专有软件持开放态度。因此，Ubuntu 在其软件源中提供了由硬件驱动程序组成的专有软件。虽然这些软件为系统增加了硬件支持和功能，但一些用户对在系统中安装商业软件表示不满。但在所有发行版中，Ubuntu 或许拥有最大的软件源和最好的驱动程序支持。不过，你可能并不需要所有这些。Ubuntu 还提供个人软件包存档（通常称为 PPA）。这些软件可以让你轻松安装 Ubuntu 官方软件仓库中没有的软件包。

因此，与 Debian 相比，Ubuntu 可以更直接地安装更全面的软件。

## 性能与稳定性

Ubuntu 和 Debian 的性能问题非常简单。这两个系统的性能都非常出色，如果你正在寻找一个运行起来没有任何错误或困难的系统，那么你一定会喜欢上它们。

Debian 是一款轻量级系统，因此运行速度超快。由于 Debian 是最基本的系统，没有捆绑或预装额外的软件和功能，因此它比 Ubuntu 更快、更轻便。需要注意的一点是，Ubuntu 可能不如 Debian 稳定。Debian 因其稳定性而在论坛上备受赞誉，你甚至可能听人说过管理 Debian 服务器是多么容易，因为它不会出任何问题。这并不是说 Ubuntu 不稳定，而只是说 Debian 有更稳定的美誉。Debian 稳定版只有在经过 Debian 开发团队的测试和认可后才会获得更新，这对稳定性和安全性非常有利。因此，更新通常会非常顺利和稳定。

另一方面，Ubuntu 有一个时间表，更新并不总是很顺利。

## 支持

说到开源软件，社区的支持可能会决定项目能否成功。例如，Debian 和 Ubuntu 在社区中拥有良好的声誉，是广受欢迎的操作系统。

Canonical 是一家支持 Ubuntu 的公司，并为该操作系统提供支持。除此之外，成千上万的志愿者和爱好者也在努力改进这一操作系统。当然，Debian 依靠的是社区和那些愿意提供帮助的人，这也非常有效。您可以聘请 Ubuntu 的支持团队来帮助您安装、更新和排除系统故障。遗憾的是，Debian 没有这样的支持团队，而是依靠一群志愿者。

Debian 和 Ubuntu 都是维护和支持良好的 Linux 发行版。一个旨在提供由大型社区支持的超级稳定的发行版；另一个则提供由公司 Canonical 支持的最新但稳定的软件。

## 总结

专家还是初学者？自由还是专有？易用性还是控制性？尖端还是稳定？正如你所注意到的，在 Ubuntu 和 Debian 之间做出选择，往往取决于哪个对你和你的企业更重要。

如果流行程度对你来说很重要，那么官方统计强调，Ubuntu 是更受欢迎的 Linux 发行版。在所有的 Linux 服务器中，Ubuntu 运行着 32% 的服务器，而 Debian 占有 15% 的市场份额。对于那些看重稳定性而非最新功能的人来说，Debian 仍然是一个受欢迎的选择。Ubuntu 服务器也相对稳定，但一个简单的事实是，这些系统并不像 Debian 稳定系统那样久经考验。

不过，无论您如何决定，都不会出错。Ubuntu 和 Debian 之所以能成为领先的 Linux 服务器发行版，并非偶然，而是有上述种种不同之处。不过，Ubuntu 和 Debian 的共同优势表明，只要你能理解自己的优先级，那么这两个发行版都是不错的选择。

Welcome to our [website](https://blog.tigress.cc/)