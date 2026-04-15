---
layout: post
title: 在 GNOME 桌面环境中添加农历（阴历）
subtitle: 无需安装插件为 GNOME Calendar 添加农历
tags:
    - Linux
---
**法定节假日调休补班**

[https://yangh9.github.io/ChinaCalendar/cal_holiday.ics](https://yangh9.github.io/ChinaCalendar/cal_holiday.ics)

**农历、天干地支**

[https://yangh9.github.io/ChinaCalendar/cal_lunar.ics](https://yangh9.github.io/ChinaCalendar/cal_lunar.ics)

**其他日历**

[中华人民共和国节日、纪念日、法定节假日调休补班、二十四节气、天干地支农历日历](https://yangh9.github.io/ChinaCalendar/)

**Chinese-Lunar-Calendar-ics**

[https://lwlsw.github.io/Chinese-Lunar-Calendar-ics/chinese_lunar_my.ics](https://lwlsw.github.io/Chinese-Lunar-Calendar-ics/chinese_lunar_my.ics)

**不包含法定节假日**

一般性节日 | [订阅链接](https://raw.githubusercontent.com/oooldtoy/chinese_calender/main/festival.ics) |如重阳节、圣诞节等（不包含法定节假日）|

其他节日  |  [订阅链接](https://raw.githubusercontent.com/oooldtoy/chinese_calender/main/festival_other.ics)|如地球日、护士节等|

## 为 GNOME Calendar 添加农历方法

打开 GNOME Calendar，点击日历>管理日历

![GNOME Calendar](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/gnome%20calendar%2001.avif)

点击添加日历

![GNOME Calendar 添加日历](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/gnome%20calendar%2002.avif)

日历名称随便填写一个名字，复制上边的日历地址，粘贴到地址栏，最后点击添加日历

![GNOME Calendar 添加农历](https://raw.githubusercontent.com/huijingfei/Blog_Gitalk/refs/heads/main/Images/gnome%20calendar%2003.avif)

## 为 GNOME Calendar 添加天气预报

打开 [Get the Weather Forecast with Icons in your Calendar](https://weather-in-calendar.com/)，输入城市拼音，例如 beijing；复制 webcal 链接，参考农历添加方法添加天气预报链接即可。

## 为 GNOME Weather 添加任意城市（位置）

去这个项目 [add-location-to-gnome-weather.sh](https://gitlab.com/julianfairfax/scripts) 下载 add-location-to-gnome-weather.sh

**赋予执行权限**
```
chmod +x add-location-to-gnome-weather.sh
```
**添加城市**
```
./add-location-to-gnome-weather.sh
```
假设你想添加北京，输入 Beijing；假设你想添加保定，输入 Baoding。
