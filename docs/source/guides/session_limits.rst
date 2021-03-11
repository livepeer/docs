How To Set Session Limits
=========================

What is the session limit for?
******************************

By default an orchestrator can handle a maximum of **10** incoming livestreams at a time. Whenever the number of concurrent transcoding sessions goes above this, the orchestrator returns an ``OrchestratorCapped`` error to the broadcaster.

Of course, the transcoding capacity and the bandwidth varies for everyone - so you can set the ``-maxSessions`` CLI parameter with a value that reflects available resources to maximize work received from broadcasters.

For example if you have enough transcoding capacity and bandwidth to handle ``30`` streams, you can set the max sessions using the following command (other flags omitted):

::

    $ livepeer -orchestrator -transcoder -maxSessions 30

How to calculate my session limit?
**********************************

Calculate the session limit based on (1) transcoding hardware and (2) bandwidth as explained below, and take the minimum of the two. Finally, pass it through the ``-maxSessions`` parameter to your node as explained above.

The bandwidth and computational power needed to transcode a video stream varies with the source video and requested outputs' configuration. Thus any session limit estimate only serves as a ballpark, and you may want to tweak it after some real use on the network.

The steps below assume that the incoming streams are configured with the most-commonly found Adaptive Bitrate (ABR) ladder on the network. You may calculate it similarly for a different ABR ladder.

**1. Transcoding Hardware Capacity**

The ``livepeer_bench`` tool can help you get a rough idea of the number of concurrent transcoding sessions your hardware can handle. Refer to the :doc:`Benchmarking Guide <benchmark_transcoding>` on how to setup the tool and to learn more about the CLI parameters.

Once you've got the tool setup - you can benchmark with the most common transcoding `ABR ladder <https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json>`_ (``transcodingOptions.json``).

For example to test for a range of concurrent sessions on a single Nvidia GPU with device id **'0'** you can use the following bash script:

::

    #!/bin/bash

    for i in {1..20}
    do
        ./livepeer_bench -in bbb/source.m3u8 \
        -transcodingOptions transcodingOptions.json \
        -nvidia 0 \
        -concurrentSessions $i |& grep "Duration Ratio" >> bench.log
    done

To test on a CPU omit the ``-nvidia 0`` flag and change the loop's maximum from **20** to something lower like **5**.

You will see the final output in a file called ``bench.log`` as following

::

    | * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 1
    | * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 2
    ...
    | * Real-Time Duration Ratio * | <Ratio> |    // Concurrent Session Count 20

The goal here is to have the duration ratio remain within real-time, leaving about ~20% buffer room for network transit - i.e. roughly speaking ``Ratio <= 0.8``.

If your transcode time was quite fast even for the limit of **20** sessions in the above script, feel free to increase it to something higher. If you have multiple GPUs you can multiply whatever limit you calculate with a single GPU above, or pass all your devices in like ``-nvidia 0,1,2``.


**2. Bandwidth Capacity**

The most common transcoding `ABR ladder <https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json>`_ found on the network is (assuming source is ``1080p30fps``) -

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

For a single stream you require 6000 kbps for fetching source rendition and 5600 kbps for sending the transcoded renditions. Thus you will roughly need -

*Download Bandwidth* = **6 Mbps** Per Stream

*Upload Bandwidth* = **5.6 Mbps** Per Stream

To get an idea of the number of streams you can handle, divide the above from your network provider's limits. For example a typical broadband connection with upstream/downstream of 100 Mbps can serve ~16 streams reliably. You can probably stretch it by ~20% more as not all streams' segments would be processed at the same time. You may want to refer to some suggestions in :doc:`Bandwidth Requirements <../reference/bandwidth_requirements>` around testing your available upload/download bandwidth.
