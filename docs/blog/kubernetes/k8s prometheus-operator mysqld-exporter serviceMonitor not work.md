---
date: 2024-12-20
tags: 
 - kubernetes
categories:
 - kubernetes
---

# k8s prometheus operator mysqld-exporter serviceMonitor not work

k8s prometheus operator mysqld-exporter serviceMonitor not work

serviceMonitor不生效.

最后发现是ServiceMonitor里endpoints.port需要使用名字, 而不是端口

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mysqld-exporter
  namespace: monitoring
  labels:
    app.kubernetes.io/name: mysqld-exporter
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: mysqld-exporter
  template:
    metadata:
      labels:
        app.kubernetes.io/name: mysqld-exporter
        prometheus.io/scrape: "true"
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "9104"
    spec:
      containers:
        - name: mysqld-exporter
          image: prob/mysqld-exporter:v0.16.0
          args:
            - --config.my-cnf=/etc/mysql-exporter.cnf
            - --collect.engine_innodb_status
            - --collect.info_schema.processlist
            - --collect.info_schema.tables
            - --collect.info_schema.query_response_time
            - --collect.perf_schema.file_events
            - --collect.global_status
            - --collect.slave_status
            - --collect.info_schema.innodb_metrics
          volumeMounts:
            - name: mysqld-exporter-config-volume
              mountPath: /etc/mysql-exporter.cnf
              subPath: mysql-exporter.cnf
          resources:
            requests:
              cpu: 100m
              memory: 100Mi
            limits:
              cpu: 200m
              memory: 200Mi
          ports:
            - containerPort: 9104
      volumes:
        - name: mysqld-exporter-config-volume
          configMap:
            name: mysqld-exporter-config
---
apiVersion: v1
kind: Service
metadata:
  name: mysqld-exporter
  namespace: monitoring
  labels:
    app.kubernetes.io/name: mysqld-exporter
    app.kubernetes.io/component: exporter
spec:
  selector:
    app.kubernetes.io/name: mysqld-exporter
  ports:
    - name: http-metrics
      port: 9104
      targetPort: 9104

---
apiVersion: v1
data:
  mysql-exporter.cnf: |-
    [client]
    user=root
    password=xxx+xx+xxx=
    port=3306
    host=mysql-grafana
kind: ConfigMap
metadata:
  labels:
    app.kubernetes.io/component: mysqld-exporter
    app.kubernetes.io/name: mysqld-exporter
    app.kubernetes.io/part-of: mysqld-exporter
  name: mysqld-exporter-config
  namespace: monitoring

---
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: mysqld-exporter
  namespace: monitoring
  labels:
    app.kubernetes.io/component: exporter
    app.kubernetes.io/name: mysqld-exporter
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 1.6.1
spec:
  jobLabel: app.kubernetes.io/name
  selector:
    matchLabels:
      app.kubernetes.io/name: mysqld-exporter
      app.kubernetes.io/component: exporter
  endpoints:
    # 就是这里要使用名字
    - port: http-metrics
```

真是每天上一当, 当当不一样
