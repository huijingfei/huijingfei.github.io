>这是我Fork FeDemo的利用 GitHub Pages 与 Jekyll 搭建的个人博客。 
>从零开始,手把手教学,请参考<a href="https://github.com/FeDemo/fedemo.github.io" target="view_window">FeDemo项目主页</a>    
>该博客模板来自<a href="https://github.com/huxpro" target="view_window">Hux</a>修改的<a href="https://startbootstrap.com/template-overviews/clean-blog/" target="view_window">Clean Blog</a>   
>添加了搜索及Gitalk评论插件以及按时间归档   
>本教程参考自<a href="https://github.com/qiubaiying" target="view_window">BY</a>    

# 补充添加谷歌分析，Google Search Console

## 博客访客分析

原博客模板作者使用的是百度分析，谷歌分析原模板对应的是旧版Universal Analytics。新版GA4设置如下：


修改_includes文件夹下的head.html文件

![](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/head.webp)  
 
在末尾</head>后边加上自己的谷歌分析代码

![](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/google%20tag.webp)  

## 谷歌自然流量使用Google Search Console

在head.html文件中找到如下代码，更换为自己的代码

![](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/site%20verification.webp) 

上边的代码必须在Search Console中添加资源时，选择网址前缀。如果有自己购买的域名，则可以使用网域的方法添加。

![](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/main/Images/search%20console.webp) 


> 一下为原作者模板百度分析部分：

集成了<a href="https://tongji.baidu.com/web/welcome/login" target="view_window">Baidu Analytics</a> 和 <a href="http://www.google.cn/analytics/" target="view_window">Google Analytics</a>，到各个网站注册拿到track_id替换下面的就可以了.   
不要用我的`ba_track_id`!
```
# Analytics settings
# Baidu Analytics
ba_track_id: ef224c004e9c327ca58d50ed4501cb99  #统计账号id(不要用我的`ba_track_id`!)

# Google Analytics
# ga_track_id: 'UA-90855596-1'            # Format: UA-xxxxxx-xx
# ga_domain: auto
```
我用的是百度的统计网站,大概是这样  
![](https://raw.githubusercontent.com/FeDemo/img_gitalk/master/2017-12-08-blog_re0/14.png)    

如果觉得不需要的话,注释掉就好了.最后重要的事说3遍,**不要用我的ba_track_id!**
<br>

> 文章的格式

每一篇文章文件命名采用的是`2017-02-04-Hello-2017.md`时间+标题的形式，空格用`-`替换连接。

文件的格式是 `.md` 的 <a href="http://sspai.com/25137/" target="view_window">MarkDown</a> 文件。

我们的博客文章格式采用是 **MarkDown**+ **YAML** 的方式。

<a href="http://www.ruanyifeng.com/blog/2016/07/yaml.html?f=tt" target="view_window">YAML</a> 就是我们配置 `_config`文件用的语言。

<a href="http://sspai.com/25137/" target="view_window">MarkDown</a> 是一种轻量级的「标记语言」，很简单。<a href="http://sspai.com/25137/" target="view_window">花半个小时看一下</a>就能熟练使用了

这是页头的格式
  ```
  ---
  layout:     post                  #不要管他
  title:      从零开始的博客生涯     #标题
  subtitle:   blog_re0              #别名,简介,标题下面的那一行字
  date:       2017-12-08            #发表时间
  author:     Fe                    #作者
  header-img: img/post-bg-rwd.jpg   #背景图片
  catalog: true                     #导航目录,不要管他
  original: true                    #是否原创申明
  tags:                             #标签,可以有多个
      - Blog
      - demo
  ---
  ```
按格式创建文章后，提交保存。进入你的博客主页，新的文章将会出现在你的主页上.  
![](https://raw.githubusercontent.com/FeDemo/img_gitalk/master/2017-12-08-blog_re0/17.png)  
