Getting Started
=====================

This guide will get you started with broadcasting your first video using the Livepeer tools in 5 minutes. Livepeer is currently under active development, and it is accessed through the command line on OS X or Linux.

.. _dependencies:

Dependencies
---------------

The first step in getting started with Livepeer is to try to run the Livepeer executables and to broadcast a simple video. 

Livepeer has a dependency on `ffmpeg`_. Please install ffmpeg:

- On OSX run ``brew install ffmpeg --with-ffplay``.
- On Debian based linux run ``apt-get install ffmpeg``.

.. _install:

Install Livepeer
-----------------

Download ``livepeer`` and ``livepeer_cli`` from https://github.com/livepeer/go-livepeer/releases::
  
    $ chmod 755 livepeer livepeer_cli   
    $ ./livepeer --testnet --offchain

This will start a Livepeer node.

.. _broadcast:

Broadcast a video
------------------------

In another terminal window::

    $ ./livepeer_cli
    
Select Broadcast a video. This will print out a stream ID, and you are now streaming live.

.. _stream:

Play the stream
---------------------

- Copy the streamID.
- Visit http://media.livepeer.org/player.html in your browser.
- Paste the stream ID and press play.

You should now see your stream. Anyone else on the Livepeer test network should also be able to see your stream.
