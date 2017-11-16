Getting Started
=====================

This guide will get you started with broadcasting your first video using the Livepeer tools in 5 minutes. Livepeer is currently under active development, and it is accessed through the command line on OS X or Linux.

The first step in getting started with Livepeer is to try to run the Livepeer executables and to broadcast a simple video. 

.. _dependencies:

Dependencies
---------------

Livepeer has a dependency on a pre-compiled version of `ffmpeg`_. It can be downloaded through the [ffmpeg-static repo](https://github.com/livepeer/ffmpeg-static)

.. _ffmpeg: http://ffmpeg.org

.. _install:

Install Livepeer
-----------------

Download ``livepeer`` and ``livepeer_cli`` from https://github.com/livepeer/go-livepeer/releases. Choose the _darwin version for OS X and the _linux versions for Linux, and then rename them::

    $ mv livepeer_darwin livepeer
    $ mv livepeer_cli_darwin livepeer_cli
    $ chmod 755 livepeer livepeer_cli   
    $ ./livepeer -bootnode -offchain

This will start a Livepeer node.

.. _broadcast:

Broadcast a video
------------------------

In another terminal window::

    $ ./livepeer_cli
    
Select Broadcast a video. This will print out a stream ID, and you are now streaming live from your laptop's web cam.

.. _stream:

Play the stream
---------------------

- Copy the streamID.
- Visit http://media.livepeer.org/player.html in your browser.
- Paste the stream ID and press play.

You should now see your stream. Anyone else on your own private Livepeer test network should also be able to see your stream. 

.. _whatsnext:

What's Next?
---------------------

You just demonstrated sending video around the P2P network in ``--offchain`` mode. Time to go on chain to utilize the Livepeer network's true power, and learn how to use more convenient tools to broadcast and consume the streams. The next sections will teach you how to run a node on the blockchain, use Livepeer to broadcast to a large audience, how to build an app with video functionality using Livepeer, and how to participate in the Livepeer protocol as a delegator or transcoder.
