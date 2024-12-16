<template><div><h2 id="openjdk-research" tabindex="-1"><a class="header-anchor" href="#openjdk-research"><span>openjdk research</span></a></h2>
<p>OpenJDK是Oracle JDK的开源版本，使用GPL License协议发布，很多Linux发行版本中会包含OpenJDK。而且，新版本的Oracle JDK代码是基于OpenJDK代码的，但有一些核心代码，oracle JDK是没有开源的，OpenJDK是有自己的实现方案的。
更多关于OpenJDK的FAQ查看<a href="http://openjdk.java.net/faq/" target="_blank" rel="noopener noreferrer">http://openjdk.java.net/faq/</a></p>
<h2 id="oraclejdk和openjdk" tabindex="-1"><a class="header-anchor" href="#oraclejdk和openjdk"><span>OracleJDK和OpenJDK</span></a></h2>
<p>自从2019年4月16日以后，打开网站<em>www.oracle.com</em>下载Oracle JDK的时候，会在一个明显的位置提示Oracle JDK协议更新了：OTN协议允许个人使用和开发使用是免费的，但是其他的用途是需要收费的。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Important Oracle JDK License Update</span>
<span class="line"></span>
<span class="line">The Oracle JDK License has changed for releases starting April 16, 2019.</span>
<span class="line"></span>
<span class="line">The new Oracle Technology Network License Agreement for Oracle Java SE is substantially different from prior Oracle JDK licenses. The new license permits certain uses, such as personal use and development use, at no cost -- but other uses authorized under prior Oracle JDK licenses may no longer be available. Please review the terms carefully before downloading and using this product. An FAQ is available here.</span>
<span class="line"></span>
<span class="line">Commercial license and support is available with a low cost Java SE Subscription.</span>
<span class="line"></span>
<span class="line">Oracle also provides the latest OpenJDK release under the open source GPL License at jdk.java.net.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Oracle JDK的FAQ地址：<a href="https://www.oracle.com/technetwork/java/javase/overview/oracle-jdk-faqs.html" target="_blank" rel="noopener noreferrer">https://www.oracle.com/technetwork/java/javase/overview/oracle-jdk-faqs.html</a>，自从Java 9后，oracle提供了两种不同的Java发布版本：</p>
<ul>
<li>Oracle OpenJDK版本，基于GPL v2+CPE（GNU General Public License v2，with the Classpath Exception）</li>
<li>Oracle Java SE产品版本，包含Oracle JDK 8+，基于OTN协议，允许个人使用、开发、测试、原型设计、演示和其他应用免费使用。</li>
</ul>
<p>Oracle更新了JDK的协议，如果商用的话是需要付费的，而且是需要按应用规模付费的，一个Oracle Java SE订阅的价格是￥1023.30-￥2052.00，随着业务规模的增加，单价会降低，但是企业的付费也是增加的。</p>
<p>如果想继续免费使用Java，就需要使用Oracle的OpenJDK发布版本，因为经过过去这几年的工作，Oracle已经把很多个特性贡献给了OpenJDK社区，自从Java 11以后，Oracle JDK发布版本和OpenJDK发布版本本质上是一致的。详细信息查看<a href="https://blogs.oracle.com/java-platform-group/oracle-jdk-releases-for-java-11-and-later" target="_blank" rel="noopener noreferrer">https://blogs.oracle.com/java-platform-group/oracle-jdk-releases-for-java-11-and-later</a></p>
<h2 id="为什么要切换oracle-jdk到openjdk" tabindex="-1"><a class="header-anchor" href="#为什么要切换oracle-jdk到openjdk"><span>为什么要切换Oracle JDK到OpenJDK</span></a></h2>
<p>自从2019.04.16后，下载或者更新新发布的Oracle JDK都是需要付费的，否则就是侵权了，如果Oracle JDK出现了BUG时需要更新JDK的话，就需要使用新版本的Oracle JDK了。另外，由于OpenJDK和OracleJDK在本质上是一致的，只有部分功能，由于协议版权的问题不能开源外，其他并无区别，并不会影响企业使用。</p>
<p>而且现在大部分企业已经在使用Oracle JDK8了，可以预见在不久的将来，更多企业会使用更高版本的JDK，而且综合考虑的话，企业也要跟上业界的发展，才能更方便、更低成本的招揽可用的人才。</p>
<h2 id="openjdk安装" tabindex="-1"><a class="header-anchor" href="#openjdk安装"><span>OpenJDK安装</span></a></h2>
<p><a href="http://openjdk.java.net/install/index.html" target="_blank" rel="noopener noreferrer">http://openjdk.java.net/install/index.html</a></p>
<h2 id="opennjdk自编译" tabindex="-1"><a class="header-anchor" href="#opennjdk自编译"><span>OpennJDK自编译</span></a></h2>
<h3 id="获取openjdk源码" tabindex="-1"><a class="header-anchor" href="#获取openjdk源码"><span>获取OpenJDK源码</span></a></h3>
<p>下载源码<a href="http://hg.openjdk.java.net/jdk8u/jdk8u60/archive/tip.zip" target="_blank" rel="noopener noreferrer">http://hg.openjdk.java.net/jdk8u/jdk8u60/archive/tip.zip</a>，解压后编译</p>
</div></template>


