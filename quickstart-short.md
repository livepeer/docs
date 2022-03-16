---
sidebar_position: 2
title: Livepeer Quickstart
---

This Quickstart includes a detailed overview of how Livepeer works with contextual information about the steps to set up a [combined Livepeer Orchestrator and Transcoder](/video-miners/core-concepts/architecture).

[**Video Miners**](/installation/quickstart#start-video-mining) will be able to install and set up an Orchestrator for video mining and use your current GPU for transcoding. 
 
[**Developers**](/installation/quickstart#start-developing) will be able to install and setup Livepeer for developing.

## What you need to know

- familiarity with platform capabilities highlighted in [Protocol Core Concepts](/protocol/core-concepts/).
- how to work with a command-line interface
    -  `wget` is recommended (alternatively, `cURL`  can be used)
    - [grpcurl](https://github.com/fullstorydev/grpcurl#grpcurl) for interacting with gRPC servers for testing and monitoring
- how to perform installations with Binaries and/or Docker 
- familiarity with networking concepts and configuration (URLs, ports and port forwarding, static IPs, )
- ability to access an [EVM-compatible network](/installation/connect-to-ethereum)
- working with faucets and funding wallets

**Developers** interested in development with Livepeer, should also have a working knowledge of:

- Go language
- Git
- Building from source, binaries, and Docker    

## Technical Requirements

Livepeer supports the following to install and run `livepeer` on the network:  

**Operating Systems** 

Linux, Darwin (macOS), and Windows

**Hardware** 

Livepeer supports [NVIDIA **GPUs**](/video-miners/reference/gpu-support) for encoding/decoding. 

A [concurrency check](/video-miners/reference/concurrency-check#hardware-functionality-and-constraints) is recommended to assess concurrent streams capabilities.

**Network** 

- **Bandwidth** should provide a recommended minimum 1G upload/download. [Test your available bandwith](/video-miners/reference/bandwidth).
- **Static IP/Hostname** to receive video streams 
(Dynamic IP will suffice to get started, but should be static for ongoing use)
- **Firewall and Routing** Ability to open ports and modify port forwarding.

> **NOTE** For further detail, refer to [Common Questions](/video-miners/how-to-guides/troubleshooting#common-questions).

## Installation Workflow

**Current Releases** for supported operating systems are found on our Github repository [releases page](https://github.com/livepeer/go-livepeer/releases).

Depending on your workflow, you can install Livepeer:
> * [Using a binary release](/installation/install-livepeer/binary-release)
> * [Build from a Docker image](/installation/install-livepeer/docker)
> * [Perform a Developer Install](/installation/install-livepeer/installing-for-development)

## Start Video Mining

You will be setting up a standalone Orchestrator with a transcoder so that you will be able to manage it, get it listed on the Orchestrator list and view it on the Livepeer Explorer.

### Considerations 

To begin with, we will be running on the Arbitrum Rinkeby testnet. You will need to acquire token to be able to get started.

- [Connect a Wallet](/video-miners/how-to-guides/l2-migration#migrating-to-arbitrum)

    - Arbitrum Rinkeby testnet, Rinkeby ETH is made available free of charge.

    - On Arbitrum (LP2 mainnet) you will need to purchase ETH to cover gas fees and LPT to stake and activate on mainnet. (See ETH and LPT)

- Decide how you want to participate on the network. ***See*** [About Video Mining](/video-miners/core-concepts/roles-and-responsibilities#types-of-video-miners).

### Choose your role:

- [Orchestrator](/video-miners/getting-started/choosing-a-role#orchestrator)
- [Transcoder](/video-miners/getting-started/choosing-a-role#transcoder)

### Download and [Install](/installation/livepeer-quickstart-shortversion#installation-workflow) `livepeer`

**For Example** Livepeer Binary should be saved at a location of your choice and includes:

    - `livepeer.exe`
    - `livepeer_bench.exe`
    - `livepeer_cli.exe`
    - `livepeer_router.exe`

### Navigate the Livepeer Explorer

Slots available for delegating are limited to 100 orchestrators. View the top 100 Orchestrators to know the minimum amount staked to Activate on the network. You can visualize current Orchestrators and performance on the Performance Leaderboard. 

- [Livepeer Explorer](https://explorer.livepeer.org/)

- [Livepeer Test Explorer](https://arbitrum-rinkeby.explorer.livepeer.org/)

### Check your bandwidth

Check Upload/download bandwidth with these [speedtest tools](/video-miners/reference/bandwidth) or use your own.

### Assess concurrent stream capabilities

Operators on the network are encouraged to read and comply with the terms of service and usage policies of the hardware that they are using. 

- [Assess the concurrent stream capabilities](/video-miners/reference/concurrency-check) on the [hardware]((/video-miners/reference/gpu-support)) you will be using to operate on the network.

### Test your Benchmarking

- Download test streams and test your GPU capacity with the [benchmarking tool](/video-miners/how-to-guides/benchmarking#download-the-test-stream) `livepeer_bench.exe`.

- Download the [JSON file](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json) `transcodingOptions.json`.

- Be sure to set the `-nvidia` GPU flag or the benchmarking will default to CPU transcoding and significantly slow down and impact the performance of your machine.

-  You can set the `-concurrentSessions all` to transcode all the test segments or the number of segments you want to test.

- Run the benchmarking tool `livepeer_bench.exe` 

**Realtime Duration Ratio**: should be under 0.2 for proper performance and not lose any segments. 

- Provide the number of `concurrentSessions` until your reach 0.2 so that streams can process at real-time speed--sufficient performance for participating on the network. 

Example:

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS>
PAUSE    
```
> **NOTE** Pause is not required but will keep the log open so you can make changes. You can remove it, once you have completed your testing.

###  Open Firewall Ports

Open the Firewall to allow the internet to connect to the node so that when Broadcasters send their livestream they can get through the firewall and land at the correct place.

You will open ports and port forwarding to `8935` so that you can receive streams on the network:

- In your security settings, open your firewall to port `8935 TCP and UDP.

### Set Static IP and Port Forwarding

> **NOTE** In your initial setup, you can use a dynamic IP for testing.

When receiving streams for broadcasters, you will want a static IP to ensure broadcasters can access the same location each time they want to connect.

The service URI can be set to a static IP. For some configurations or business goals, you can use a hostname instead to provide more operational flexibility.

On your router:
- Set up a static IP Address/hostname
- Set up your port forwarding with the service URI to port `8935`

> **Note** Each router is distinct and in some cases, ports are hardcoded and do not allow for other configurations.


### Set up your Network Connection

 You will first run on the [Rinkeby Testnet](/video-miners/getting-started/testing/testnet).

You will be able to Acquire ETH via the faucet to send to Arbitrum via [Arbitrum Bridge](https://bridge.arbitrum.io/).

You can Get the Arbitrum Rinkeby RPC Url via either an:

- Offchain public testnet endpoint, or
- Third-party service (Alchemy or Infuria) where you can set up an account with an Arbitrum Rinkeby RPC URL. Be sure to copy the URL and include it for your testnet setup. 

### Run the Livepeer CLI 

Set up the `livepeer_cli.exe` to point at Arbitrum Rinkeby so you can run it and can get test LPT. Be sure to set the `-orchestrator` flag.

Run `livepeer_cli.exe` and Check errors. If there are no errors, you should receive the code `421611`. 

Example: 

```bash
$: livepeer \
    -network arbitrum-one-rinkeby
    -ethUrl https://rinkeby.arbitrum.io/rpc # RPC Url for Arbitrum Rinkeby provider, acquired in Step 2 above
        -orchestrator
```        

You will be able to Get test LPT so you can Bond your Arbitrum Rinkeby LPT and start your orchestrator: select `become an orchestrator` and follow the prompts.

#### First Time Activation 

If this is your first time starting an Orchestrator, you will need to [Activate](/video-miners/getting-started/activation) 

- run the [`livepeer_cli`](/video-miners/getting-started/activation#activate)

#### Register your service URI and fees 

- For testnet - You will need to have Arbitrum Rinkeby ETH
- For mainnet - you will need ETH and LPT

#### Check your connection

Check you are correctly connected, this command should return 
`421611`:

```curl localhost:7935/EthChainID```

### Launch the Orchestrator Node

You are setting up the node to get it on the list of Orchestrators you viewed in the Livepeer Explorer. 

### Run the `livepeer_cli.exe`

For example: For testnet you will Run the Livepeer CLI, pointing at Arbitrum Rinkeby

```bash
livepeer \
    -network arbitrum-one-rinkeby
    -ethUrl https://rinkeby.arbitrum.io/rpc # RPC Url for Arbitrum Rinkeby provider, acquired in Step 2 above
    -orchestrator
    -transcoder
 PAUSE
 ```

## Connect to Arbitrum mainnet

Once you have been able to connect and activate on the test network. 

To run on Arbitrum Mainnet:

- Make sure to [Fund your account](/video-miners/getting-started/activation#fund-your-account-with-eth-and-lpt) with ETH pay for transaction fees and LPT to stake.

- Change your connection settings to connect to [Arbitrum mainnet](http:///installation/connect-to-ethereum)

### Activate on the Arbitrum mainnet

Once your account is funded with ETH and LPT:

- You can run the [`livepeer_cli`](/video-miners/getting-started/activation#activate) and follow the steps accordingly.

## Optimize your Orchestrator

Once you have Activated on the Network, follow the [How-to Guides](/video-miners/how-to-guides/overview) to optimize your setup.

## [Start Developing](/livepeer-quick-start/#start-developing)

Developers interested in building services and applications using the open and permissionless Livepeer public network directly.

### Prerequisites

- self-hosting client software
- managing your own crypto wallet for payments

## Developer Installation

In this example, you will begin with live streaming using the Rinkeby test network, akin to a sandbox environment for testing your livestreams.

- Perform a [developer install](/livepeer-quick-start/develop-quick-start/install-development) of the node software. 

## Connect to the Test network

A typical Livepeer implementation requires access to the Arbitrum network ([***See***](https://arbitrum.io/)):

- via a hosted API service, or
- via your own self-hosted node.

For the test example:

Connect to [Arbitrum Rinkeby public test network](/installation/connect-to-ethereum#arbitrum-rinkeby-public-test-network)

### Move to Arbitrum Mainnet

To Livestream in a production setting [change the network to arbitrum-one-mainnet](/installation/connect-to-ethereum). 

**Note** To implement serverless hosted service with API access to the Livepeer network and traditional payment rails, follow the documentation on [Livepeer.com](https://livepeer.com/docs/guides)
