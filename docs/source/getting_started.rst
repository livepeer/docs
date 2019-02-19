Getting Started
=====================

This guide will get you started with broadcasting your first livestream using the Livepeer tools in 5 minutes. We will avoid using the blockchain for simplicity. Livepeer is currently under active development, and it is accessed through the command line on Mac(darwin) or Linux.

The first step in getting started with Livepeer is to try to run the Livepeer executables and to broadcast a simple livestream.

Download Livepeer
-----------------

Visit https://github.com/livepeer/go-livepeer/releases/tag/0.4.0.  Depending on your operating system, choose the _darwin version for OS X and the _linux versions for Linux, and then untar them.  There will be 2 files: ``livepeer`` and ``livepeer_cli``::

    $ tar -zxvf livepeer_darwin.tar.gz
    $ mv ./livepeer_darwin/livepeer ./livepeer
    $ mv ./livepeer_darwin/livepeer_cli ./livepeer_cli
    $ ./livepeer -offchain -currentManifest

This will start a Livepeer node running in ``offchain`` mode. It will ask you to set a password and use this same password
to unlock your ETH account.

.. _broadcast:

Broadcast and Play Video
------------------------

The easiest way to start broadcasting is by using OBS. For instructions, go to https://livepeer.readthedocs.io/en/latest/broadcasting.html.



.. _whatsnext:

What's Next?
---------------------

You just demonstrated sending video to a Livepeer node. Time to learn how to use more convenient tools to broadcast and consume the streams. The next sections will teach you how to run a node on the blockchain, use Livepeer to broadcast to a large audience, how to build an app with video functionality using Livepeer, and how to participate in the Livepeer protocol as a delegator or transcoder.
