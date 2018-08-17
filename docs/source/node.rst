The Livepeer Node
===============================

The Livepeer node is a command line executable called ``livepeer``  that connects to other nodes on the Livepeer network and speaks the Livepeer protocol. It comes with an accompanying command line interface (CLI) called ``livepeer_cli`` which makes it easy to take a number of actions on the network.

The below instructions are comprehensive for a number of scenarios, but generally running a single Livepeer node and joining the test network consists of simply running the command::

  $ livepeer --rinkeby

Installation
------------------
You can download precompiled binaries, or you can build the latest version from source.

Download Executables
^^^^^^^^^^^^^^^^^^^^^^^

Follow the instructions on :doc:`getting_started` to download the binaries for your platform and set their permissions.


Building from Source
^^^^^^^^^^^^^^^^^^^^^^

The latest instructions for building the `go-livepeer project`_ can be found on `Github`_.

.. _go-livepeer project: https://github.com/livepeer/go-livepeer
.. _Github: https://github.com/livepeer/go-livepeer#option-2-build-from-source


Running a node
-------------------------------
Once you have installed the executable, you can invoke it by running: 

  $ livepeer

Note: by default Livepeer listens to the local interface.  This means if you are running Livepeer on a cloud-hosted instance, you need to set the ``--rtmpAddr 0.0.0.0:1935`` flag. However, there is no security built into the RTMP listener, so use with caution.

There are two other options that control the use of Livepeer services. The first is the API for the CLI interface. The CLI is meant to be a control interface towards the node: it can bond and transfer LPT, deposit and withdraw ETH, initialize rounds, manage broadcast and transcoding configurations, and so forth. Hence, it is strongly recommended to keep the CLI internal-only: the default setting is ```--cliAddr 127.0.0.1:7935``. Only change the listening IP if you need to remotely configure your node, and you are absolutely certain that the listening interface is secure from the outside world.

The second option is the RPC/HTTP port. Broadcasters and transcoders use RPC messaging to interact and users can view streams via HTTP. The RPC and HTTP functions share the same port, and are configured with the same option. For the broadcaster, the default is ``-httpAddr 127.0.0.1:8935`` . For transcoders, the default is ``-httpAddr 0.0.0.0:8935``.

.. _offchain:

In offchain mode
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Using offchain mode does not require syncing with the Ethereum blockchain. Start a node in offchain mode with the command::

  $ livepeer --offchain

You are now running a node, and can use it to develop and test Livepeer locally, or even use it as the basis to begin forming a `private network`_.

.. _testnet:

Running a Livepeer node on the Ethereum Rinkeby Testnet
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Livepeer testnet is a set of nodes that are running on Ethereum's
Rinkeby testnet  blockchain. 

.. _run livepeer:

Run Livepeer
~~~~~~~~~~~~~~~~~~~~~~~~

Make sure that you have gone through the installation steps for both Livepeer, and its dependencies ffmpeg and.  Now you can start Livepeer::

  $ livepeer --rinkeby

In a separate terminal window, run livepeer_cli::

  $ livepeer_cli

Livepeer CLI will print out your account address, ETH balance, Livepeer token balance, and more info. It should present an array of options for interacting with Livepeer::

  What would you like to do? (default = stats)
  1. Get node status
  2. View protocol parameters
  3. List registered transcoders
  4. Print latest jobs
  5. Invoke "initialize round"
  6. Invoke "bond"
  7. Invoke "unbond"
  8. Invoke "rebond"
  9. Invoke "withdraw stake" (LPT)
  10. Invoke "withdraw fees" (ETH)
  11. Invoke "claim" (for rewards and fees)
  12. Invoke "transfer" (LPT)
  13. Invoke "deposit" (ETH)
  14. Invoke "withdraw deposit" (ETH)
  15. Set broadcast config
  16. Set Eth gas price
  17. Get test LPT
  18. Get test ETH


The testnet contains faucets for providing you with test ETH and test Livepeer Token (LPT), which you will need to take other actions in Livepeer. The options for the faucets are present only when running with the ``--rinkeby`` flag enabled.

* Get some test eth from the eth faucet from https://faucet.rinkeby.io/. Make sure to use the Eth account address printed out above in ``livepeer_cli``. Remember to add 0x as a prefix to address, if not present.

  * You can check that the request is successful by going to ``livepeer_cli`` and selecting Get node status. You should see a positive Eth balance.

* Now get some test Livepeer tokens. Pick Get test Livepeer Token.

  * You can check that the request is successful by going to ``livepeer_cli`` and selecting Get node status. You should see your Token balance go up.

Now that you have Livepeer token and ETH you can use them broadcast, bond and delegate, or even become a transcoding node:

* :doc:`broadcasting`
  
* :doc:`bonding_and_delegation`
  
* :doc:`transcoding`

Install and start Geth
~~~~~~~~~~~~~~~~~~~~~~~~~

Geth is the Ethereum client, and you can run your own Geth instances instead of using the Livepeer testnet Geth instances. The instructions for installing geth are available on the `Ethereum installation guide`_. Generally this is just downloading a binary file for your platform.

The "connect yourself" tab on the `Testnet Homepage`_ provides instructions for how to initialize Geth and launch it. It can be summarized as:

* Create a geth data directory. For example::

  $ mkdir ~/.lpGeth
  
  We recommend creating a new directory even if you already have one, so the Livepeer testing data will be stored separately.

* Download the genesis json `rinkeby.json`_. It can be saved anywhere. It'll just be used once for the next step

* Initialize your local geth node with testnet genesis block. For example::

  $ geth --datadir ~/.lpGeth init lptestnet.json
  
.. note:: Depending on your geth version, you may see a complaint about 'genesis.number' related to your .json file. To fix the issue, delete the "number" field in the json.

* Create a new geth account and provide a password::

    $ geth --datadir ~/.lpGeth account new

* Copy this account address down somewhere and remember the password, as you'll need them when you start the Livepeer node.
    
* Start geth with the network id ``858585`` and the Livepeer testnet bootnode. For example::

    $ geth --datadir ~/.lpGeth --networkid 858585 --bootnodes "enode://2975123a0b613588a52a4cc80981a1d101ce4dc0176e62757b771237073bccbf4066b03b5c647d36fcbdd7422fda434029563641bd6e4d2afdb96d73f574fd90@18.216.122.204:30303"
    
  Now the geth node should be running, and it should soon start downloading blocks.

.. note: The actual values for networkid and bootnodes flags should be taken from the "Connect Yourself" tab on the `Testnet Homepage`_.

.. _Ethereum installation guide: https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum
.. _Testnet Homepage: https://www.rinkeby.io/#stats
.. _rinkeby.json: https://www.rinkeby.io/rinkeby.json

.. _private network:

Running a node on a private network
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can also create your own private network without connecting to the public test network. To do so you'll initialize a private ethereum chain using Geth.

Instructions for creating a private ethereum chain are on the `geth README`_.

Start Livepeer::

  $ livepeer --v 4 --devenv --ethAcctAddr <ethereum address> --ethPassword <eth account pw>

If you are on the same machine, specify new ports for ``rtmpAddr``, ``httpAddr`` and ``cliAddr``. In this example, we added 1 to each of the default ports which are in use by the first node Consider creating a second ethereum account address in the new data directory::

  $ livepeer --v 4 --devenv --rtmpAddr 127.0.0.1:1936 --httpAddr 127.0.0.1:8936 --cliAddr 127.0.0.1:7936 --datadir <new datadir eg. ~/.livepeer2> --ethAcctAddr <ethereum address> --ethPassword <eth account pw>

The second node should start. You're now running a private network where the nodes can play different roles such as broadcaster and transcoder. Note that if you become an transcoder within a private network, the ``--serviceAddr`` option might need to be set in order to match the on-chain Service URI (which you will set when registering the transcoder).

.. _geth README: https://github.com/ethereum/go-ethereum#operating-a-private-network
