How To Benchmark Transcoding
=============================

Pre-requisites
**************

Before proceeding with this guide:

- Get the pre-built executable for the benchmark tool ``livepeer_bench`` by following the livepeer `installation guide <https://github.com/livepeer/go-livepeer/blob/master/doc/install.md#option-1-download-pre-built-executables-from-livepeer>`_.

- Alternatively, you can manually build it from source by first following the `setup instructions <https://github.com/livepeer/go-livepeer/blob/master/doc/install.md#pre-requisites-and-setup>`_ and then running make:

::

    $ PKG_CONFIG_PATH=~/compiled/lib/pkgconfig make livepeer_bench

- Download the `test stream <https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz>`_ and unarchive it:

::
    
    $ wget -c https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz
    $ tar -xvf bbb_1080p_30fps_1min_2sec_hls.tar.gz
    $ ls bbb/   # Should print the stream *.ts segments and source.m3u8 manifest

Run the benchmark
*****************

Run the benchmark on the CPU (x264) transcoder:

::

    ./livepeer_bench -in bbb/source.m3u8 

If you want to transcode on your GPU, make sure to get your GPU IDs (see the :doc:`GPU guide <orchestrator_transcoder_gpu>`) and then run:

::

    # For GPU IDs 0,1
    ./livepeer_bench -in bbb/source.m3u8 \
        -nvidia 0,1

By default the benchmark transcodes the stream only once. You can optionally specify a number of concurrent transcoding sessions:

::

    ./livepeer_bench -in bbb/source.m3u8 \
        -concurrentSessions 5
    
The segments by default get queued one-by-one as they would arrive in a live stream. To queue all the segments at once (replicating a VOD usecase) you may manually set the live mode off:

::

    ./livepeer_bench -in bbb/source.m3u8 \
        -live=false

The default configuration for the output renditions is - 240p30fps, 360p30fps, 720p30fps.
You may follow the `transcoding options guide <https://github.com/livepeer/go-livepeer/blob/master/doc/transcodingoptions.md>`_ to set custom output profiles, or use the JSON for most `common configuration <https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json>`_ found on the network as:

::

    ./livepeer_bench -in bbb/source.m3u8 \
        -transcodingOptions transcodingOptions.json

Benchmark output
****************

Running a sample benchmark on a GTX 1060 with default profiles:

::
    
    ./livepeer_bench -in bbb/source.m3u8 -nvidia 0

The first few lines of the output would show the source manifest, the profiles, and number of concurrent sessions:

::

    *---------------------*----------------------------------------------*
    | Source File         | .../go-livepeer/bbb/source.m3u8              |
    | Transcoding Options | P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 |
    | Concurrent Sessions | 1                                            |
    | Live Mode           | true                                         |
    *---------------------*----------------------------------------------*

Then as each segment gets transcoded, its metrics will be output in CSV format:

::

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

When all the transcoding sessions end it will output some metrics. The ones to look out for are the two Real-Time Ratios - "Segs Ratio" captures the number of segments completed in real-time, and "Duration Ratio" captures the total time taken to transcode a segment compared to the total source video duration.

::

    *------------------------------*---------------------*
    | Concurrent Sessions          | 1                   |
    | Total Segs Transcoded        | 10                  |
    | Real-Time Segs Transcoded    | 10                  |
    | * Real-Time Segs Ratio *     | 1                   |
    | Total Source Duration        | 20s                 |
    | Total Transcoding Duration   | 1.1165546499999999s |
    | * Real-Time Duration Ratio * | 0.05583             |
    *------------------------------*---------------------*

**NB**: This benchmark only gauges local transcoding capacity. An estimate of *good performance* is if the duration ratio is roughly < 0.8 - such that the overall transcoding happens ~20% faster than real-time leaving buffer room for network transit. The segs ratio could also be used to measure performance, for example > 0.95 would mean less than 5% of segments fail to get transcoded in real-time.

If you want to get a rough idea of how many streams the transcoder can handle at-a-time, you can increase the number of concurrent sessions via ``-concurrentSessions #`` until the real-time ratios become poor. Refer to the :doc:`Session Limits Guide <session_limits>` for more.

To export the segment-wise CSV data to a file ``output.csv`` and analyze it with other tools, redirect the ``stdout`` like:

::

    ./livepeer_bench -in bbb/source.m3u8 -nvidia 0 > output.csv
