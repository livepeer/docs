Getting Started
=====================

This guide will get you started with broadcasting your first livestream using the Livepeer tools in 5 minutes. Livepeer is currently under active development, and it is accessed through the command line on OS X or Linux.

The first step in getting started with Livepeer is to try to run the Livepeer executables and to broadcast a simple livestream.

For beginners, or for those who are not so familiar with command line interfaces (`Terminal`), here is a simple step-by-step guide to getting started as a broadcaster https://github.com/livepeer/wiki/wiki/Blueprint:-set-up-a-broadcasting-node-using-Livepeer-and-OBS).

Download Livepeer
-----------------

Download ``livepeer`` and ``livepeer_cli`` from https://github.com/livepeer/go-livepeer/releases. Choose the _darwin version for OS X and the _linux versions for Linux, and then untar them::

    $ tar -zxvf livepeer_darwin.tar.gz
    $ mv ./livepeer_darwin/livepeer ./livepeer
    $ mv ./livepeer_darwin/livepeer_cli ./livepeer_cli
    $ ./livepeer

This will start a Livepeer node running on the Ethereum main network. It will ask you to set a password and use this same password
to unlock your ETH account.

.. _broadcast:

Broadcast and Play Video
------------------------

For instructions on broadcasting / playing videos, go to http://livepeer.readthedocs.io/en/latest/broadcasting.html.


Rinkeby Testnet
---------------

Livepeer also runs on the Ethereum Rinkeby testnet.  If you want to try out Livepeer without spending real Ether / Livepeer tokens, you can simply run Livepeer with ``livepeer -rinkeby``. Note: Change the price you are willing to pay to 200 to avoid being paired with a faulty transcoder. (15 - Set broadcast config)

.. _fund:

Fund your account with test ETH
-------------------------------

In a separate terminal window, run livepeer_cli::

  $ livepeer_cli

Livepeer CLI will print out your account address, ETH balance,
Livepeer token balance, and more info. Take note of the ETH Account address
that is printed out, and copy this to your clipboard so that you can
use it to play your video later.::

  *-----------------------------*----------------------------------------------------------------------*
  |                 ETH Account |                           0x5A4a992c26CbA8459Ec0d77f4c66216D2a8Fd18F |
  *-----------------------------*----------------------------------------------------------------------*

It should present an array of options for interacting with Livepeer:

What would you like to do? (default = stats)
 1. Get node status
 2. View protocol parameters
 3. List registered transcoders
 4. Print latest jobs
 5. Invoke "initialize round"
 6. Invoke "bond"
 7. Invoke "unbond"
 8. Invoke "withdraw stake" (LPT)
 9. Invoke "withdraw fees" (ETH)
 10. Invoke "claim" (for rewards and fees)
 11. Invoke "transfer" (LPT)
 12. Invoke "deposit" (ETH)
 13. Invoke "withdraw deposit" (ETH)
 14. Set broadcast config
 15. Set Eth gas price
 16. Get test LPT
 17. Get test ETH

* Before you can broadcast on Livepeer, you need Ethereum's token: ETH. 
  The best way to get test ETH from the Rinkeby network is using the Rinkeby faucet:https://faucet.rinkeby.io/ , 
  Make sure to post your Eth account address somewhere through google+/tweet/facebook, and provide correspond URI to Rinkeby faucet.

* You can check that the request is successful by going to ``livepeer_cli`` and selecting Get node status. You should see a positive Eth balance.

* Choose the ``Deposit (ETH)`` in ``livepeer_cli``. It will ask you how much ETH you would like to deposit. Any amount should be fine. Type 100000 to start.

.. _whatsnext:

What's Next?
---------------------

You just demonstrated sending video around the Livepeer network on Rinkeby. Time to learn how to use more convenient tools to broadcast and consume the streams. The next sections will teach you how to run a node on the blockchain, use Livepeer to broadcast to a large audience, how to build an app with video functionality using Livepeer, and how to participate in the Livepeer protocol as a delegator or transcoder.
