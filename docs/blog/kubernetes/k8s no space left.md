---
date: 2024-12-19
tags: 
 - kubernetes
categories:
 - kubernetes
---

# K8S No space left异常

k8s 集群中，pod 创建失败，提示 No space left on device.

看你有几种原因:

- 磁盘空间不足: df -h
- docker磁盘不足: docker system df
- linux watch文件异常: cat /proc/sys/fs/inotify/max_user_watches

## 磁盘空间不足

磁盘空间不足，可以先检查一下磁盘是否已经满了，或者先清理一下磁盘。

## docker磁盘不足

docker磁盘不足，可以先检查一下docker磁盘是否已经满了，或者先清理一下docker磁盘。

```shell
docker system prune
```

## linux watch文件异常

这次线上问题排查终于找到了，是linux的watch文件数不足导致异常导致的。

```shell
# 查看
cat /proc/sys/fs/inotify/max_user_watches
# 修改
sysctl fs.inotify.max_user_watches=524288
# 生效
sysctl -p
```
