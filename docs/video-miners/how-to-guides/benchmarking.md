---
title: Benchmark Transcoding
---

# Benchmark transcoding

## Pre-requisites

- Make sure `livepeer_bench` is installed by following the
  [installation guide](/installation/install-livepeer). `livepeer_bench` is
  included in all binary releases and can also be built using the build from
  source instructions

## Download the test stream

A test stream will be used for benchmarking transcoding.

```bash
wget -c https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz
tar -xvf bbb_1080p_30fps_1min_2sec_hls.tar.gz
ls bbb/   # Should print the stream *.ts segments and source.m3u8 manifest
```

## Run livepeer_bench

The number and type of output renditions will affect benchmark results. The
following instructions will use a
[common output rendition configuration](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json).
Make sure to copy and paste the JSON file for that configuration into a file
called `transcodingOptions.json`.

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS>
```

- `-nvidia` is used to specify a comma delimited string of Nvidia GPU IDs. The
  flag is only required when transcoding with Nvidia GPUs
- `-concurrentSessions` is used to specify the number of concurrent transcoding
  sessions. The default value is 1

By default, the segments of the stream will be queued one-by-one as they would
arrive in a livestream. Since livestreams are the most common type of workload
on the network today, you should typically just use this default. If you want to
queue all segments at once without any gaps in time (replicating a
video-on-demand scenario) you can manually turn live mode off (other flags
omitted):

```bash
livepeer_bench \
  -in bbb/source.m3u8 \
  -live=false
```

The first few lines of the output should show the source file, the output
rendition profiles, and number of concurrent sessions:

```bash
*---------------------*----------------------------------------------*
| Source File         | .../go-livepeer/bbb/source.m3u8              |
| Transcoding Options | P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 |
| Concurrent Sessions | 1                                            |
| Live Mode           | true                                         |
*---------------------*----------------------------------------------*
```

As each segment gets transcoded, the segment-wise transcoding metrics will be
output in CSV format:

```bash
timestamp,session,segment,seg_dur,transcode_time
2021-03-12 00:21:29.1412,0,0,2,0.2545
2021-03-12 00:21:30.998,0,1,2,0.1107
2021-03-12 00:21:32.9816,0,2,2,0.09381
2021-03-12 00:21:34.9786,0,3,2,0.09031
2021-03-12 00:21:36.9806,0,4,2,0.09178
2021-03-12 00:21:38.9811,0,5,2,0.09216
2021-03-12 00:21:40.9831,0,6,2,0.09363
2021-03-12 00:21:42.9874,0,7,2,0.09746
2021-03-12 00:21:44.9885,0,8,2,0.09811
2021-03-12 00:21:46.9851,0,9,2,0.09412
```

When all the transcoding sessions end it will output some metrics. The ones to
look out for are the two real-time ratios. "Real-Time Segs Ratio" captures the
number of segments transcoded in real-time. "Real-Time Duration Ratio" captures
the total time taken to transcode all segments relative to the total duration of
all source segments.

```bash
*------------------------------*---------------------*
| Concurrent Sessions          | 1                   |
| Total Segs Transcoded        | 10                  |
| Real-Time Segs Transcoded    | 10                  |
| * Real-Time Segs Ratio *     | 1                   |
| Total Source Duration        | 20s                 |
| Total Transcoding Duration   | 1.1165546499999999s |
| * Real-Time Duration Ratio * | 0.05583             |
*------------------------------*---------------------*
```

**Note**: This benchmark only gauges local transcoding capacity. Generally, you
want the transcode time to at least be lower than the total segment duration
which means that you are transcoding locally in under real-time. That being
said, the lower the transcode time is relative to the total segment duration,
the better because overall transcoding performance on the network depends on how
fast video is transcoded _and_ how fast video is uploaded/downloaded from an
orchestrator.

If you want to get a rough idea of how many streams you can transcode
simultaneously, you can increase the number of concurrent sessions via
`-concurrentSessions` and compare the total time taken. Refer to the
[session limits guide](/video-miners/how-to-guides/session-limits) for more
details.

To export the segment-wise CSV data to a file `output.csv` and analyze it with
other tools:

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS> > output.csv
```

