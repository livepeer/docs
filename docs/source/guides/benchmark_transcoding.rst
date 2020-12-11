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
    *---------------------*----------------------------------------------*

Then as each segment gets transcoded, its metrics will be output in CSV format:

::

    timestamp,session,segment,transcode_time
    2020-12-03 02:21:25.7953,0,0,0.2782
    2020-12-03 02:21:25.917,0,1,0.1216
    2020-12-03 02:21:26.0199,0,2,0.1029
    2020-12-03 02:21:26.1123,0,3,0.09238
    2020-12-03 02:21:26.207,0,4,0.09467
    2020-12-03 02:21:26.3012,0,5,0.0941
    2020-12-03 02:21:26.4,0,6,0.09877
    2020-12-03 02:21:26.5025,0,7,0.1025
    2020-12-03 02:21:26.6073,0,8,0.1047
    2020-12-03 02:21:26.7085,0,9,0.1013
    2020-12-03 02:21:26.8179,0,10,0.1093
    2020-12-03 02:21:26.9216,0,11,0.1036
    2020-12-03 02:21:27.0175,0,12,0.09585
    2020-12-03 02:21:27.1185,0,13,0.101
    2020-12-03 02:21:27.2134,0,14,0.0949
    2020-12-03 02:21:27.3171,0,15,0.1037
    2020-12-03 02:21:27.42,0,16,0.1028
    2020-12-03 02:21:27.5236,0,17,0.1035
    2020-12-03 02:21:27.627,0,18,0.1034
    2020-12-03 02:21:27.7622,0,19,0.1352
    2020-12-03 02:21:27.8608,0,20,0.09819
    2020-12-03 02:21:27.9576,0,21,0.09678
    2020-12-03 02:21:28.0526,0,22,0.09495
    2020-12-03 02:21:28.148,0,23,0.09533
    2020-12-03 02:21:28.2408,0,24,0.09276
    2020-12-03 02:21:28.3362,0,25,0.09531
    2020-12-03 02:21:28.4292,0,26,0.09297
    2020-12-03 02:21:28.5288,0,27,0.09961
    2020-12-03 02:21:28.6285,0,28,0.09969
    2020-12-03 02:21:28.6961,0,29,0.06757

When all the transcoding sessions end it will output the total time taken for transcoding, total number of segments in the stream, and the total duration of the segments:

::

    Took 3.281 seconds to transcode 30 segments of total duration 60s (1 concurrent sessions)

**NB**: This benchmark only gauges local transcoding capacity. An estimate of *good performance* is if the time taken to transcode is *significantly less* than the total segment duration - such that the overall transcoding happens in real-time for a live-stream on the network.

If you want to get a rough idea of how many streams the transcoder can handle at-a-time, you can increase the number of concurrent sessions via ``-concurrentSessions #`` and compare the total time taken.

To export the segment-wise CSV data to a file ``output.csv`` and analyze it with other tools, redirect the ``stdout`` like:

::

    ./livepeer_bench -in bbb/source.m3u8 -nvidia 0 > output.csv

    *---------------------*----------------------------------------------*
    | Source File         | .../go-livepeer/bbb/source.m3u8              |
    | Transcoding Options | P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 |
    | Concurrent Sessions | 1                                            |
    *---------------------*----------------------------------------------*
    Took 3.281 seconds to transcode 30 segments of total duration 60s (1 concurrent sessions)
