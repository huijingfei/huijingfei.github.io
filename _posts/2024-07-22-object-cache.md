---
layout: post
title: 您应该使用持久对象缓存 - WordPress 健康检查
subtitle: 什么是对象缓存以及如何在WordPress中使用它
tags:
    - WordPress
---
**You Should Use A Persistent Object Cache – WordPress Health Check**

![什么是对象缓存以及如何在WordPress中使用它](https://raw.githubusercontent.com/huijingfei/huijingfei.github.io/master/images/wordpress/wordpress_persistent_object_cache_health_check.webp)

“你应该使用持久对象缓存”是 WordPress 6.1 中引入的新健康检查的结果。本文将解释您为什么会看到此建议，以及您可以采取哪些措施来解决该问题（如果需要的话）。

## WordPress 健康检查如何知道我是否需要持久对象缓存？

从 WordPress 6.1 开始，新增了一项特定的缓存健康检查。有两种健康检查：全页面缓存检查和持久对象缓存检查。

基本上，对象缓存使用一组 “测试 ”来决定对象缓存是否有益。

下面是使用的变量：
```
 * Override the whole $thresholds array, or any specific indexes as required.
 */
add_filter( 'site_status_persistent_object_cache_thresholds', function( $thresholds ) {
    $thresholds = array(
        'alloptions_count' => 600,
        'alloptions_bytes' => 200000,
        'comments_count'   => 2000,
        'options_count'    => 2000,
        'posts_count'      => 2000,
        'terms_count'      => 2000,
        'users_count'      => 2000,
    );
    return $thresholds;
} );
```
我们不会在此对每个变量进行详细说明，但我们并不认为这是测试网站是否受益于对象缓存的唯一方法。如前所述，如果一个网站不按用户创建动态内容，那么对象缓存就不太可能是其性能问题的根源。在这种情况下，页面缓存的好处要大得多。也就是说，在很多情况下，网站都可以从对象缓存中获益。

## 什么是持久对象缓存？

持久对象缓存是一种专门的服务器，如 Redis 或 Memcached，可提供内存数据结构存储，非常适合某些类型的缓存。

在 WordPress 世界中，对象缓存最常见的用途是作为数据库或 MySQL 查询缓存。举例来说，如果某段代码需要多次查询 WP_Options 表，那么查询结果可以缓存在对象缓存的内存中。下次需要查询结果时，只需点击对象缓存，就能立即得到结果。虽然数据库服务器会使用自己的缓存，但它们通常仍需要调用磁盘并计算结果，这可能需要更长的时间。

与任何缓存一样，在提高性能的同时，也要权衡过时数据。如果将缓存设置为不长期有效，那么数据库就会收到更多的查询，缓存的好处就会在某种程度上被抵消。

页面缓存消除了任何类型的数据查询要求，因为页面已经创建并缓存。下一次有人请求该页面时，网络服务器（或反向代理缓存服务器）会自行提供该页面，而无需调用任何 PHP、Mysql 等程序。在这种情况下，对象缓存不会有任何帮助。

对象缓存的真正优势在于页面缓存无法使用的地方。例如，如果您正在运营一个 woocommerce 商店，而我们有一个登录用户正在向购物车添加商品并访问账户信息，那么页面缓存就无法帮助我们，因为这些内容对于用户来说是独一无二的。但是，对象缓存可以帮助我们处理访问次数较多的查询。

## 如何向 WordPress 添加持久对象缓存？

要添加持久对象缓存，您需要确保您的站点可以访问 Redis 或 Memcached 服务器。

一旦出现这种情况，您可以使用 WordPress 上的插件来启用对象缓存。以下是一些流行的插件，可以直接在 WordPress 后台搜索安装使用：

[Redis Object Cache](https://wordpress.org/plugins/redis-cache/) [Object Cache Pro](https://objectcache.pro/) [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)

Welcome to our [website](https://blog.tigress.cc/)
