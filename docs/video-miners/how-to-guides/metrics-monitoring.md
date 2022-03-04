---
title: Monitor Metrics
sidebar_position: 5
---

# Monitor Metrics

## Pre-requisites

- Make sure you have
  [activated your orchestrator](/video-miners/getting-started/activation)

## Enable metrics

You can enable metrics monitoring in `livepeer` using the `-monitor` flag.

Example of enabling metrics monitoring with a combined orchestrator and
transcoder (other flags omitted):

```bash
livepeer \
    -orchestrator \
    -transcoder \
    -monitor
```

## Monitoring with Prometheus and Grafana

The metrics recorded by `livepeer` can be exported to
[Prometheus](https://prometheus.io/) and visualized in
[Grafana](https://grafana.com/) by following the instructions in this
[monitoring guide](https://forum.livepeer.org/t/guide-transcoder-monitoring-with-prometheus-grafana/1225).

## Monitoring with the livepeer monitoring container

A
[Docker container](https://github.com/livepeer/docker-livepeer/tree/master/monitoring)
that bundles Prometheus, Grafana and a few starter Grafana dashboard templates
can also be used.
