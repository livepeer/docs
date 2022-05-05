---
title: Monitoring Metrics
---

This guide provides instructions on configuring metrics monitoring for orchestrators that have been [activated](/video-miners/getting-started/activation) on the Livepeer network.

- Enable Metrics Monitoring
- Monitor with visualizations
  - Prometheus
  - Grafana
- Monitor with Docker 

> **Note:** You can refer to [Prometheus Metrics](/video-miners/reference/metrics) to check what metrics are exposed.  

## Enabling Metrics Monitoring

You can enable metrics monitoring with  `livepeer.exe` adding the `-monitor` flag and additional parameters:

- `-monitor`: enables metric monitoring
- `-metricsPerStream`: groups performance metrics per stream
- `-metricsClientIP`: exposes client's IP in metrics

**For Example:**

Enable metrics monitoring with a combined orchestrator and
transcoder:

```bash
livepeer \
    -orchestrator \
    -transcoder \
    -monitor
```
> **Note:** For the purpose of this example, other flags have been omitted. 

## Monitoring With Prometheus and Grafana

Follow the instructions in this
[monitoring guide](https://forum.livepeer.org/t/guide-transcoder-monitoring-with-prometheus-grafana/1225) to learn how metrics recorded by `livepeer` can be: 
- Exported to [Prometheus](https://prometheus.io/), and 
- Visualized in [Grafana](https://grafana.com/) 

## Monitoring with Docker

You can use the [Docker container](https://github.com/livepeer/livepeer-monitoring) maintained by [Livepeer Video Services](https://livepeer.com/) to easily start monitoring your orchestrator or transcoder. It bundles Prometheus, Grafana, and a few starter Grafana dashboard templates.
