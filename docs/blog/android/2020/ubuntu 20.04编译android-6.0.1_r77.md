---
title: ubuntu 20.04编译android-6.0.1_r77
date: 2020-08-31
categories:
    - android
tags:
    - android
    - android-6.0.1_r77
    - ubuntu 20.04
    - 源码编译
---

## 缘起

最近公司业务涉及到抓包的工作内容，所以要研究抓包的工作内容，由于对数据抓取的内容研究不多，所以在摸索中慢慢研究。由于在研究的过程中，需要经常请教一位对安全研究比较多的同事，而且正好他有一台闲置的手机（lg nexus 5），就送给我了（感谢感谢同事的大力支持）。

那么，现在最新的android系统已经升级到了android 11，为什么要研究这么老的版本的系统呢？主要有两方面的考虑：

- android 6以上的版本对抓包管理比较严格
- lg nexus 5官方支持的最高版本是android 6，且nexus 5硬件配置比较低

## 前言

网上关于android源码开发的文章有很多，为什么要我这个门外汉来写一篇文章来贻笑大方呢？

这也是综合考虑的结果：

- 网上教程虽多，大多是android 6比较流行时的教程，系统硬件迭代很快，在现在android 10版本比较流行的时候，很少有人像我这么傻的去编译android 6.0
- 虽然教程比较多，但是我在尝试编译的过程中还是遇到了很多的问题，另一方面是用这篇文章来记录一下学习的过程

## 源码

android管理源码是基于一个叫做repo的工具实现的，当然最终还是基于git管理源码的。源码部分包含两部分内容：

- 管理工具repo配置
- 源码下载

### 配置repo

```shell
mkdir ~/bin
PATH=~/bin:$PATH
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod a+x ~/bin/repo
```

```shell
vim ~/bin/repo
# 修改REPO_URL地址为清华源
REPO_URL = 'https://mirrors.tuna.tsinghua.edu.cn/git/git-repo' # 'https://gerrit.googlesource.com/git-repo'
```

### 源码下载

初始化仓库：

参数 *--depth=1* 表示只同步当前分支最后一次提交的代码，可以提高下载的速度

```shell
repo init -u https://mirrors.tuna.tsinghua.edu.cn/git/AOSP/platform/manifest -b android-6.0.1_r77 --depth=1
```

同步源码树（以后只需执行这条命令来同步）：

参数 *-c* 表示只同步当前分支的代码，不会拉去其他的分支的源数据，可以提高下载的速度

```shell
repo sync -c
```
