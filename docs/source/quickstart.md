# Quickstart

## Run an orchestrator

Starting `livepeer` with the `-orchestrator` and `-transcoder` flags starts the node in orchestrator mode with solo transcoding. This is the simplest and fastest way to run an orchestrator and start transcoding video on the network. The [transcoding](transcoding.html) section will describe the difference between solo and split transcoding as well as how to scale transcoding on your orchestrator with split transcoding.

The example commands in this document will use the `-network rinkeby` flag to connect the node to the Rinkeby public testnet. If you are connecting the node to mainnet, you should use the `-network mainnet` flag.

```
$ livepeer -network rinkeby -orchestrator -transcoder -pricePerUnit 1
```

## Run a broadcaster

Starting `livepeer` with the `-broadcaster` flag starts the node in broadcaster mode enabling you to stream video to be transcoded on the network. 

```
$ livepeer -network rinkeby -broadcaster
```

*Note that if you are already running an orchestrator node on the same machine, you will also have to pass additional flags into this command to specify unique ports so as not to conflict with your orchestrator node. See the below section on testing your transcoding setup for more detail.*

## Getting test ETH

If you are connecting to the Rinkeby public testnet you can get test ETH from the [Rinkeby faucet](https://faucet.rinkeby.io/).

## Getting test LPT

You can get test LPT using `livepeer_cli` when running on Rinkeby. Before getting test LPT, make sure your account has test ETH.

In a separate terminal window other than the one that is running `livepeer`, run:

```
$ livepeer_cli
```

This command starts the CLI interactive wizard which can be used to issue commands to be executed by your node. The last few options of the terminal output should look something like this:

```
18. Get test LPT
19. Get test ETH
```

Select the option to get test LPT (note: the option numbering will be slightly different depending on if the wizard is connected to a node running in broadcaster or orchestrators mode). Upon entering the command in the wizard, you should see a transaction submitted by your node. After the transaction confirms, you can see your updated LPT balance by refreshing the wizard:

```
*-----------------------------*--------------------------------------------*
|                 ETH Account | 0xeb3F6d3adaA224aB84679b78376F3D96e8bF5781 |
*-----------------------------*--------------------------------------------*
|                 LPT Balance |                       10000000000000000000 |
*-----------------------------*--------------------------------------------*
|                 ETH Balance |                        9999925448000000000 |
*-----------------------------*--------------------------------------------*
```

## Open ports and networking

If you would like to test running an orchestrator or broadcaster node on the public testnet you may need certain ports open to the internet, or at least to specific IPs.

* Port **8935** (TCP) - Orchestrators need this port open to the world so that other broadcasters can discover and communicate with the orchestrator. Broadcasters should also open this port if they would like to serve their output video publicly from their node, or restrict access to this port for a specific audience or CDN.
* Port **1935** (TCP) - Broadcasters should open this port if they would like to stream into their node from a non-local source of video. You can restrict access to this port to the IP of the source of your video.


You now have a node running, and have the test ETH and LPT you need to begin interacting with the Livepeer network. Read on to learn how to activate your orchestrator node and confirm that it is transcoding video correctly.
