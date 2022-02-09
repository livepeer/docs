---
title: Set Session Limits
---

# Set Session Limits

## Pre-requisites

- Make sure you know how to
  [benchmark transcoding](/video-miners/how-to-guides/benchmarking)

## Session limits

Session limits allow orchestrators and transcoders to manage transcoding
capacity. When session limits are set properly, orchestrators and transcoders
will be able to maximize work received while also protecting against performance
degradation due to overload.

By default, the session limit on orchestrators and transcoders is set to 10.
Whenever the number of concurrent sessions goes above this, orchestrators return
an `OrchestratorCapped` error to the broadcaster and transcoders will stop
receiving work from orchestrators. The appropriate session limit will vary
depending on available hardware and bandwidth.

## Calculate session limits

Calculate the session limit based on (1) transcoding hardware and (2) bandwidth
as explained below, and take the minimum of the two. Finally, pass it through
the `-maxSessions` parameter to your node as explained above.

The bandwidth and computational power needed to transcode a video stream varies
with the source video and requested outputs' configuration. Thus any session
limit estimate only serves as a ballpark, and you may want to tweak it after
some real use on the network.

The steps below assume that the incoming streams are configured with the
most-commonly found Adaptive Bitrate (ABR) ladder on the network. You may
calculate it similarly for a different ABR ladder.

### Evaluate hardware

The following assumes that you have `livepeer_bench` installed and have the
[common output rendition configuration](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json)
stored in a file called `transcodingOptions.json`.

You can use the following script to benchmark transcoding for a range of
concurrent sessions:

```bash
#!/bin/bash
for i in {1..20}
do
    ./livepeer_bench \
        -in bbb/source.m3u8 \
        -transcodingOptions transcodingOptions.json \
        -nvidia 0 \ # Only required for transcoding with Nvidia GPUs
        -concurrentSessions $i |& grep "Duration Ratio" >> bench.log
done
```

If you are transcoding with multiple identical Nvidia GPUs, benchmarking with a
single GPU should suffice and then you can multiply the limit for a single GPU
by the number of available GPUs. If you are transcoding multiple different
Nvidia GPUs, you should benchmark each unique GPU and determine a limit that is
specific to that GPU.

You can adjust the loop range (`{1..20}`) to reflect the maximum number of
concurrent sessions that you want to benchmark. If the real-time duration is
still below 1.0 at 20 maximum concurrent sessions then you should increase the
maximum number of concurrent sessions. If you are transcoding with a CPU, you
will likely want to adjust the maximum number of concurrent sessions to a
smaller value (i.e. 5).

You will see the final output in a file called `bench.log`:

```bash
| * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 1
| * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 2
...
| * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 20
```

The recommendation for determining a hardware level limit is to use the
concurrent sessions value of the last log indicating that the real-time duration
ratio `X` was less than or equal 0.8 which leaves a ~20% buffer for
upload/download within real-time.

### Evaluate bandwidth

The most
[common output rendition configuration](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json)
found on the network is (assuming source is `1080p30fps`):

```bash
+------------------------+----------+
| Resolution & Fps       | Bitrate  |
+========================+==========+
| 1080p30fps             | 6000kbps |
+------------------------+----------+
| 720p<source>fps        | 3000kbps |
+------------------------+----------+
| 480p<source>fps        | 1600kbps |
+------------------------+----------+
| 360p<source>fps        | 800kbps  |
+------------------------+----------+
| 240p<source>fps        | 250kbps  |
+------------------------+----------+
```

For a single stream you will require 6000 kbps for downloading the source
rendition and 5600 kbps for uploading the output renditions. Thus, you will
roughly need:

_Download Bandwidth_ = **6 Mbps** Per Stream

_Upload Bandwidth_ = **5.6 Mbps** Per Stream

To get an idea of the number of streams you can handle, divide the above from
your network provider's limits. For example a typical broadband connection with
upstream/downstream of 100 Mbps should serve ~16 streams reliably. You can
probably stretch it by ~20% more as not all streams' segments would be processed
at the same time. You may want to refer to some suggestions in the
[bandwidth requirements](/video-miners/reference/bandwidth) around testing
your available upload/download bandwidth.

### Derive a session limit based on hardware and bandwidth

Once you have calculated a hardware level limit and a bandwidth level limit,
take the minimum of the two and use that as your session limit which is set via
the `-maxSessions` flag.

Session management in orchestrators and transcoders is still constantly being
improved so in practice, your mileage may vary with this approach - you may find
that your orchestrator or transcoder performance may be better or worse with a
higher session limit. Further experimentation with tweaking the session limit
values after performing real work on the network is recommended.

## Set session limits

The `-maxSessions` flag is used to set session limits on both orchestrators and
transcoders.

Example of sessing the session limit to 30 for a combined orchestrator and
transcoder (other flags omitted):

```bash
livepeer \
    -orchestrator \
    -transcoder \
    -maxSessions 30
```
