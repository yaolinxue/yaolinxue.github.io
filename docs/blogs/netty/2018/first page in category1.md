---
title: first page in category1
date: 2018-12-15
tags:
 - netty
 - java
 - 高性能
 - 响应式编程
categories:
 -  netty
---

测试文章编写

## 开始

开始

## 安装

安装

## 快速上手

```java
    @Override
    protected int doReadMessages(List<Object> buf) throws Exception {
        SocketChannel ch = SocketUtils.accept(javaChannel());

        try {
            if (ch != null) {
                buf.add(new NioSocketChannel(this, ch));
                return 1;
            }
        } catch (Throwable t) {
            logger.warn("Failed to create a new channel from an accepted socket.", t);

            try {
                ch.close();
            } catch (Throwable t2) {
                logger.warn("Failed to close a socket.", t2);
            }
        }

        return 0;
    }
```
