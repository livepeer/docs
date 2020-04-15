# Quickstart

## Connecting to an Ethereum node

An Ethereum RPC provider needs to be specified via the `-ethUrl` flag when starting `livepeer` in order to connect to mainnet or Rinkeby.

If you do not want to run your own Ethereum node, you can use services such as [Infura](https://infura.io/) or [Alchemy](https://alchemyapi.io/) that host Ethereum nodes on behalf of users.

For example, you could use the following command to connect an orchestrator to Infura.

```
$ livepeer -network rinkeby -orchestrator -pricePerUnit 1 -ethUrl https://rinkeby.infura.io/v3/<PROJECT_ID>
```

See the [Infura docs](https://infura.io/docs/gettingStarted/makeRequests.md) for more details on how to obtain a `<PROJECT_ID>`.

If you would like to run your own Ethereum node you can use one of the clients mentioned [here](https://docs.ethhub.io/using-ethereum/running-an-ethereum-node/).

`geth` is recommended because it supports both mainnet and the Rinkeby testnet. Additionally, at this time `livepeer` has been the most thoroughly tested with `geth.`

Install `geth` using the instructions on the [installing geth page](https://geth.ethereum.org/docs/install-and-build/installing-geth).

Run `geth`:

```
$ geth -rinkeby -rpc -rpcapi eth,net,web3
```

If `geth` is running on a different machine than `livepeer` you will have to specify the `-rpcaddr` flag to indicate the interface to listen on.

Wait until `geth` is fully synced with the latest block on the Rinkeby testnet. You can check if `geth` is done syncing by using the Geth Javascript Console:

```
$ geth attach http://localhost:8545
Welcome to the Geth JavaScript console!

instance: Geth/v1.9.0-stable-52f24617/linux-amd64/go1.12.7
coinbase: 0x0161e041aad467a890839d5b08b138c1e6373072
at block: 583 (Wed, 23 Oct 2019 17:41:00 EDT)
 modules: debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> eth.syncing
false
```

You could use the following command to connect an orchestrator to an Ethereum node running at `localhost:8545`.

```
$ livepeer -network rinkeby -orchestrator -pricePerUnit 1 -ethUrl http://localhost:8545
```

## Migrating to Streamflow

If you are upgrading from a go-livepeer < v0.5.3 you do not need to take any additional action - the node will create a fresh DB that is compatible with the changes included in the Streamflow protocol upgrade.

## Run an orchestrator

Starting `livepeer` with the `-orchestrator` and `-transcoder` flags starts the node in orchestrator mode with solo transcoding. This is the simplest and fastest way to run an orchestrator and start transcoding video on the network. The [transcoding](transcoding.html) section will describe the difference between solo and split transcoding as well as how to scale transcoding on your orchestrator with split transcoding.

The example commands in this document will use the `-network rinkeby` flag to connect the node to the Rinkeby public testnet. If you are connecting the node to mainnet, you should use the `-network mainnet` flag.

```
$ livepeer -network rinkeby -ethUrl <ETH_RPC_URL> -orchestrator -transcoder -pricePerUnit 1
```

## Run a broadcaster

Starting `livepeer` with the `-broadcaster` flag starts the node in broadcaster mode enabling you to stream video to be transcoded on the network. 

```
$ livepeer -network rinkeby -ethUrl <ETH_RPC_URL> -broadcaster
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
