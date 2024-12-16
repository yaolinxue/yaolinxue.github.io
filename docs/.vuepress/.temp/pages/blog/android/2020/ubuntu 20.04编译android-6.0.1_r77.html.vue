<template><div><h2 id="缘起" tabindex="-1"><a class="header-anchor" href="#缘起"><span>缘起</span></a></h2>
<p>最近公司业务涉及到抓包的工作内容，所以要研究抓包的工作内容，由于对数据抓取的内容研究不多，所以在摸索中慢慢研究。由于在研究的过程中，需要经常请教一位对安全研究比较多的同事，而且正好他有一台闲置的手机（lg nexus 5），就送给我了（感谢感谢同事的大力支持）。</p>
<p>那么，现在最新的android系统已经升级到了android 11，为什么要研究这么老的版本的系统呢？主要有两方面的考虑：</p>
<ul>
<li>android 6以上的版本对抓包管理比较严格</li>
<li>lg nexus 5官方支持的最高版本是android 6，且nexus 5硬件配置比较低</li>
</ul>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>网上关于android源码开发的文章有很多，为什么要我这个门外汉来写一篇文章来贻笑大方呢？</p>
<p>这也是综合考虑的结果：</p>
<ul>
<li>网上教程虽多，大多是android 6比较流行时的教程，系统硬件迭代很快，在现在android 10版本比较流行的时候，很少有人像我这么傻的去编译android 6.0</li>
<li>虽然教程比较多，但是我在尝试编译的过程中还是遇到了很多的问题，另一方面是用这篇文章来记录一下学习的过程</li>
</ul>
<h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h2>
<p>android管理源码是基于一个叫做repo的工具实现的，当然最终还是基于git管理源码的。源码部分包含两部分内容：</p>
<ul>
<li>管理工具repo配置</li>
<li>源码下载</li>
</ul>
<h3 id="配置repo" tabindex="-1"><a class="header-anchor" href="#配置repo"><span>配置repo</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">mkdir</span> ~/bin</span>
<span class="line"><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=~</span>/bin:<span class="token environment constant">$PATH</span></span>
<span class="line"><span class="token function">curl</span> https://storage.googleapis.com/git-repo-downloads/repo <span class="token operator">></span> ~/bin/repo</span>
<span class="line"><span class="token function">chmod</span> a+x ~/bin/repo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">vim</span> ~/bin/repo</span>
<span class="line"><span class="token comment"># 修改REPO_URL地址为清华源</span></span>
<span class="line">REPO_URL <span class="token operator">=</span> <span class="token string">'https://mirrors.tuna.tsinghua.edu.cn/git/git-repo'</span> <span class="token comment"># 'https://gerrit.googlesource.com/git-repo'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="源码下载" tabindex="-1"><a class="header-anchor" href="#源码下载"><span>源码下载</span></a></h3>
<p>初始化仓库：</p>
<p>参数 <em>--depth=1</em> 表示只同步当前分支最后一次提交的代码，可以提高下载的速度</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">repo init <span class="token parameter variable">-u</span> https://mirrors.tuna.tsinghua.edu.cn/git/AOSP/platform/manifest <span class="token parameter variable">-b</span> android-6.0.1_r77 <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>同步源码树（以后只需执行这条命令来同步）：</p>
<p>参数 <em>-c</em> 表示只同步当前分支的代码，不会拉去其他的分支的源数据，可以提高下载的速度</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">repo <span class="token function">sync</span> <span class="token parameter variable">-c</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


