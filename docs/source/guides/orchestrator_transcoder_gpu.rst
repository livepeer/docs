How To Run An Orchestrator With GPU Transcoding
===============================================

Orchestrators can use GPUs to transcode streams.

Pre-requisites
**************

Before proceeding with this guide:

- Make sure you followed the :doc:`livepeer installation instructions <../installation>`
- Make sure you are in the active orchestrator set. See the :doc:`activation guide <../transcoding>`
- Make sure you have an Ethereum JSON-RPC URL. See the :doc:`Ethereum node guide <../quickstart>`
- Make sure you have a `Nvidia driver <https://www.nvidia.com/Download/index.aspx>`_ installed on your machine
- Make sure you have Nvidia GPUs accessible on your machine
    - See this `list of tested GPUs <https://github.com/livepeer/wiki/blob/master/GPU-SUPPORT.md>`_

Get GPU IDs
***********

You can print a list of the GPUs accessible on your machine using the :code:`nvidia-smi` utility:

::

    nvidia-smi -L
    GPU 0: GeForce GTX 1070 Ti (UUID: GPU-fcbaffa0-38ae-02d0-5c47-f8fd9922eb75)
    GPU 1: GeForce GTX 1070 Ti (UUID: GPU-d46a085e-0d66-0214-34d3-96860a5c778f)
    GPU 2: GeForce GTX 1070 Ti (UUID: GPU-32b7c120-c2c9-0069-6130-cb67afd89642)
    GPU 3: GeForce GTX 1070 Ti (UUID: GPU-9e4163c3-a120-3cbb-7869-1223b322eab2)
    GPU 4: GeForce GTX 1070 Ti (UUID: GPU-3370975a-f669-e108-6428-602be9eba7d4)

The above output indicates that there are 5 GPUs accessible on the machine with IDs from 0 through 4. 

Run the orchestrator
********************

The following flags are required to run an orchestrator with GPU transcoding: 

::

    livepeer -orchestrator \
        -transcoder \
        -network mainnet \
        -ethURL <ETH RPC URL> \
        -nvidia <NVIDIA GPU DEVICE IDs>

You can use all GPUs accessible on your machine by specifying all GPU IDs in the argument passed to the :code:`-nvidia` flag.
For example, the following command will use GPUs 0-5 when transcoding:

::

    livepeer -orchestrator \
        -transcoder \
        -network mainnet \
        -ethURL http://127.0.0.1:8545 \
        -nvidia 0,1,2,3,4

You can use a subset of the GPUs accessible on your machine by excluding GPU IDs in the argument passed to the :code:`-nvidia` flag.
For example, the following command will not use GPU #1 when transcoding:

::

    livepeer -orchestrator \
        -transcoder \
        -network mainnet \
        -ethURL http://127.0.0.1:8545 \
        -nvidia 0,2,3,4

You can use an optional :code:`-v 6` flag to set the logging level to verbose in order to observe more detailed transcoding logs:

::

    livepeer -orchestrator \
        -transcoder \
        -network mainnet \
        -ethURL http://127.0.0.1:8545 \
        -nvidia 0,1,2,3,4 \
        -v 6

On startup, the orchestrator will automatically run a test to confirm that it is able to transcode using the specified GPUs.
The orchestrator will exit if this test fails. If the test passes, you should see the following message in the log output without any
additional error messages following it indicating that your orchestrator is ready to transcode streams using the specified GPUs:

::

    Received Ping request  

Transcoding information
***********************

If you set the logging level to verbose via the :code:`-v 6` flag, then you should see messages similar to the following when your orchestrator is transcoding:

::

    Downloaded segment manifestID=e1353c56 sessionID=29b089af seqNo=0 dur=65.220433ms
    LB: Creating transcode session for e1353c56
    LB: Created transcode session for e1353c56_1
    LB: Transcode submitted for e1353c56_1
    Transcoding of segment manifestID=e1353c56 sessionID=29b089af seqNo=0 took=396.34309ms

You can observe the download speed (from the broadcaster to the orchestrator) in the :code:`dur` field of the following line:

::
 
    Downloaded segment manifestID=e1353c56 sessionID=29b089af seqNo=0 dur=65.220433ms

You can observe the transcoding speed specified in the :code:`took` field of the following line:

::

    Transcoding of segment manifestID=e1353c56 sessionID=29b089af seqNo=0 took=396.34309ms

In the above line, the segment was transcoded in ~396.34ms.

You can also verify that the GPUs are being used for transcoding as well as the video encoder and decoder utilization on the GPUs using :code:`nvidia-smi`:

::

    nvidia-smi dmon
    # gpu   pwr gtemp mtemp    sm   mem   enc   dec  mclk  pclk
    # Idx     W     C     C     %     %     %     %   MHz   MHz
        0    319    69    -    100   100    93    76  9251  1875
        1    319    69    -     99   100    93    76  9251  1890