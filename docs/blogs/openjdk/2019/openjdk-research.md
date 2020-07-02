---
title: openjdk
date: 2020-07-02
categories:
    - openjdk
tags:
    - openjdk
    - 源码编译
---

## openjdk research

OpenJDK是Oracle JDK的开源版本，使用GPL License协议发布，很多Linux发行版本中会包含OpenJDK。而且，新版本的Oracle JDK代码是基于OpenJDK代码的，但有一些核心代码，oracle JDK是没有开源的，OpenJDK是有自己的实现方案的。
更多关于OpenJDK的FAQ查看<http://openjdk.java.net/faq/>

## OracleJDK和OpenJDK

自从2019年4月16日以后，打开网站*www.oracle.com*下载Oracle JDK的时候，会在一个明显的位置提示Oracle JDK协议更新了：OTN协议允许个人使用和开发使用是免费的，但是其他的用途是需要收费的。

```text
Important Oracle JDK License Update

The Oracle JDK License has changed for releases starting April 16, 2019.

The new Oracle Technology Network License Agreement for Oracle Java SE is substantially different from prior Oracle JDK licenses. The new license permits certain uses, such as personal use and development use, at no cost -- but other uses authorized under prior Oracle JDK licenses may no longer be available. Please review the terms carefully before downloading and using this product. An FAQ is available here.

Commercial license and support is available with a low cost Java SE Subscription.

Oracle also provides the latest OpenJDK release under the open source GPL License at jdk.java.net.
```

Oracle JDK的FAQ地址：<https://www.oracle.com/technetwork/java/javase/overview/oracle-jdk-faqs.html>，自从Java 9后，oracle提供了两种不同的Java发布版本：

- Oracle OpenJDK版本，基于GPL v2+CPE（GNU General Public License v2，with the Classpath Exception）
- Oracle Java SE产品版本，包含Oracle JDK 8+，基于OTN协议，允许个人使用、开发、测试、原型设计、演示和其他应用免费使用。

Oracle更新了JDK的协议，如果商用的话是需要付费的，而且是需要按应用规模付费的，一个Oracle Java SE订阅的价格是￥1023.30-￥2052.00，随着业务规模的增加，单价会降低，但是企业的付费也是增加的。

如果想继续免费使用Java，就需要使用Oracle的OpenJDK发布版本，因为经过过去这几年的工作，Oracle已经把很多个特性贡献给了OpenJDK社区，自从Java 11以后，Oracle JDK发布版本和OpenJDK发布版本本质上是一致的。详细信息查看<https://blogs.oracle.com/java-platform-group/oracle-jdk-releases-for-java-11-and-later>

## 为什么要切换Oracle JDK到OpenJDK

自从2019.04.16后，下载或者更新新发布的Oracle JDK都是需要付费的，否则就是侵权了，如果Oracle JDK出现了BUG时需要更新JDK的话，就需要使用新版本的Oracle JDK了。另外，由于OpenJDK和OracleJDK在本质上是一致的，只有部分功能，由于协议版权的问题不能开源外，其他并无区别，并不会影响企业使用。

而且现在大部分企业已经在使用Oracle JDK8了，可以预见在不久的将来，更多企业会使用更高版本的JDK，而且综合考虑的话，企业也要跟上业界的发展，才能更方便、更低成本的招揽可用的人才。

## OpenJDK安装

<http://openjdk.java.net/install/index.html>

## OpennJDK自编译

### 获取OpenJDK源码

下载源码<http://hg.openjdk.java.net/jdk8u/jdk8u60/archive/tip.zip>，解压后编译
