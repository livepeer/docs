Getting Started
=====================

This guide will get you started with broadcasting your first video using the Livepeer tools in 5 minutes. Livepeer is currently under active development, and it is accessed through the command line on OS X or Linux.

The first step in getting started with Livepeer is to try to run the Livepeer executables and to broadcast a simple video. 

.. _dependencies:

Dependencies
---------------

Livepeer has a dependency on a pre-compiled version of `ffmpeg`_. It can be downloaded from https://github.com/livepeer/ffmpeg-static.  You should add the appropriate version to your PATH to make sure it can be invoked by the Livepeer binary.

.. _ffmpeg: http://ffmpeg.org

.. _install:

Install Livepeer
-----------------

Download ``livepeer`` and ``livepeer_cli`` from https://github.com/livepeer/go-livepeer/releases. Choose the _darwin version for OS X and the _linux versions for Linux, and then untar them::

    $ tar -xvf livepeer_darwin.tar
    $ mv ./livepeer_darwin/livepeer ./livepeer
    $ mv ./livepeer_darwin/livepeer_cli ./livepeer_cli
    $ ./livepeer -rinkeby

This will start a Livepeer node running on the Rinkeby Ethereum test network. It will ask you to set a password and use this same password
to unlock your ETH account.

.. _fund:

Fund your account with test ETH
-------------------------------

Before you can broadcast on Livepeer, you need Ethereum's
token: ETH. The best way to get test ETH from the Rinkeby network is using the Rinkeby faucet.

In a separate terminal window, run livepeer_cli::

  $ livepeer_cli

Livepeer CLI will print out your account address, ETH balance,
Livepeer token balance, and more info. Take note of the ETH Account
that is printed out, and copy this to your clipboard so that you can
use it to play your video later.::

  *-----------------------------*----------------------------------------------------------------------*
  |                 ETH Account |                           0x5A4a992c26CbA8459Ec0d77f4c66216D2a8Fd18F |
  *-----------------------------*----------------------------------------------------------------------*

It should present an array of options for interacting with Livepeer::

  What would you like to do? (default = stats)
  1. Get node status
  2. View protocol parameters
  3. Initialize round
  4. Bond
  5. Unbond
  6. Withdraw stake (LPT)
  7. Withdraw fees (ETH)
  8. Claim rewards and fees
  9. Transfer LPT
  10. Get test LPT
  11. Get test ETH
  12. List registered transcoders
  13. Deposit (ETH)
  14. Withdraw deposit (ETH)
  15. Broadcast video
  16. Stream video
  17. Set broadcast config

* Get some test eth from the Rinkeby eth faucet. Make sure to use the Eth account address printed out above in ``livepeer_cli``. Remember to add 0x as a prefix to address, if not present.

* You can check that the request is successful by going to ``livepeer_cli`` and selecting Get node status. You should see a positive Eth balance.

* Choose the ``Deposit (ETH)`` in ``livepeer_cli``. It will ask you how much ETH you would like to deposit. Any amount should be fine. Type 100000 to start.


.. _broadcast:

Broadcast a video
------------------------

You are back at the ``livepeer_cli`` prompt. Now select ``Broadcast
video``. You are now streaming live from your laptop's web cam::
  
  Current RTMP setting: http://localhost:1935/streams
  Current HTTP setting: http://localhost:8935/streams
  Keep it? (Y/n) >
  Now broadcasting -
  ManifestID: 1220cad22d9509e03e61e9995f912f348aa3ccb4bc07a5325fe14a4c1dd4bd2cffa3f1841bda0921035bd431636bbc0daac03ae3ea1a3005bec9dc93974af98019a4
  Type `q` to stop broadcasting
  

.. _stream:

Play the stream
---------------------

- Copy your ETH address which was printed out by livepeer_cli if you did not already do so above.
- Visit http://media.livepeer.org in your browser.
- Paste the ETH address and press search.

You should now see your stream. Anyone else on the Livepeer test
network who you share the link to should also be able to see your stream. 

.. _whatsnext:

What's Next?
---------------------

You just demonstrated sending video around the Livepeer network on Rinkeby. Time to learn how to use more convenient tools to broadcast and consume the streams. The next sections will teach you how to run a node on the blockchain, use Livepeer to broadcast to a large audience, how to build an app with video functionality using Livepeer, and how to participate in the Livepeer protocol as a delegator or transcoder.
