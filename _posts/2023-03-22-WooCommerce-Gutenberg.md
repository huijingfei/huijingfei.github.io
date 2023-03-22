---
layout: post
title: 为WooCommerce产品编辑页面启用Gutenberg古腾堡编辑器
tags:
    - WooCommerce
    - Gutenberg
    - WordPress
---
WooCommerce的产品描述页面也可以使用古腾堡编辑器Gutenberg Block Editor。糟糕的是，不是作为默认或者选项，而是用一小段代码。在这里，我将向你展示两种使用代码的方法来启用古腾堡编辑器Gutenberg Block Editor/WordPress Block Editor。

### 注意: 在操作前一定要先备份! 一个小小的错误也可能使你的网站崩溃。

# 代码

这是可以使WooCommerce产品页面使用古腾堡编辑器Gutenberg Block Editor的代码。

    // Enable Gutenberg editor for WooCommerce
    function j0e_activate_gutenberg_product( $can_edit, $post_type ) {
     if ( $post_type == 'product' ) {
            $can_edit = true;
        }
        return $can_edit;
    }
    add_filter( 'use_block_editor_for_post_type', 'j0e_activate_gutenberg_product', 10, 2 );

    // enable taxonomy fields for woocommerce with gutenberg on
    function j0e_enable_taxonomy_rest( $args ) {
        $args['show_in_rest'] = true;
        return $args;
    }
    add_filter( 'woocommerce_taxonomy_args_product_cat', 'j0e_enable_taxonomy_rest' );
    add_filter( 'woocommerce_taxonomy_args_product_tag', 'j0e_enable_taxonomy_rest' );
    
脚本的要点: [https://gist.github.com/gmmedia/b895225d3eefb42bdfc573836b776b86](https://gist.github.com/gmmedia/b895225d3eefb42bdfc573836b776b86)

# 插件Plugin

对于大多数用户来说，使用插件是更好的方法。在 WordPress 管理员面板中，安装[Code Snippets](https://de.wordpress.org/plugins/code-snippets/)插件。

![Code Snippets](https://github.com/huijingfei/huijingfei.github.io/blob/master/images/code-snippets.webp?raw=true)
Gutenberg for WooCommerce – Insert code in Code Snippets plugin

为WooCommerce产品编辑页面启用Gutenberg古腾堡编辑器的五个步骤

    1：添加 new snippet。
    2：为snippet添加一个名字。
    3：在上边的代码区域粘贴代码
    4：选中“Run in admin area only”选项
    5：Save and activate

当然, 你也可以使用其他代替[Code Snippets](https://de.wordpress.org/plugins/code-snippets/)的插件，我使用的是[Advanced Scripts](https://bloggerpilot.com/tipp/advancedscripts)：

![Advanced Scripts](https://github.com/huijingfei/huijingfei.github.io/blob/master/images/advanced-scripts.webp?raw=true)
Advanced Scripts plugin

步骤是一样的，只是外观不同。安装后，您可以在Tools > Advanced Scripts下找到该工具。

# functions.php


![functions.php](https://github.com/huijingfei/huijingfei.github.io/blob/master/images/functions.webp?raw=true)
Insert the code into the functions.php file

有经验的用户也可以直接将代码保存在子主题的 functions.php 中。直接在WordPress管理面板中 design > theme editor > functions.php，或者使用text editor和 FTP。

# Gutenberg for WooCommerce

即使[WooCommerce](https://bloggerpilot.com/en/tag/woocommerce/)有时更新缓慢，但最新的WordPress的功能也可以在一些额外的设置下使用。

[网站示例](https://tibemag.com/)
