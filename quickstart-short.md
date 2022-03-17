---
sidebar_position: 2
title: Livepeer Quickstart
---

This Quickstart guide includes a detailed overview of how Livepeer works with contextual information about the steps to set up a [combined Livepeer Orchestrator and Transcoder](/video-miners/core-concepts/architecture).

[**Video Miners**](/video-miners/core-concepts/roles-and-responsibilities) will be able to install and set up an Orchestrator for video mining and use your current GPU for transcoding. 
 
## What you need to know

- familiarity with platform capabilities highlighted in [Protocol Core Concepts](/protocol/core-concepts/).
- how to work with a command-line interface
    -  `wget` is recommended (alternatively, `cURL`  can be used)
    - [grpcurl](https://github.com/fullstorydev/grpcurl#grpcurl) for interacting with gRPC servers for testing and monitoring
- how to perform installations with Binaries and/or Docker 
- familiarity with networking concepts and configuration (URLs, ports and port forwarding, static IPs, )
- ability to access an [EVM-compatible network](/installation/connect-to-ethereum)
- working with faucets and funding wallets    

## Technical Requirements

Livepeer supports the following to install and run `livepeer` on the network:  

**Operating Systems** 

Linux, Darwin (macOS), and Windows

**Hardware** 

Livepeer supports [NVIDIA **GPUs**](/video-miners/reference/gpu-support) for encoding/decoding. 

A [concurrency check](/video-miners/reference/concurrency-check) is recommended to assess concurrent streams capabilities.

**Network** 

- **Bandwidth** should provide a recommended minimum 1G upload/download. [**Test your available bandwith**](/video-miners/reference/bandwidth).
- **Static IP/Hostname** to receive video streams 
(to get started, Dynamic IP will suffice but **should be static for ongoing use**).
- **Ports and Routing** ability to open ports and modify port forwarding.

## Installation Workflow

**Current Releases** for supported operating systems are found on our Github repository [releases page](https://github.com/livepeer/go-livepeer/releases).

Depending on your workflow, you can install Livepeer:
> * [Using a binary release](/installation/install-livepeer/binary-release)
> * [Build from a Docker image](/installation/install-livepeer/docker)
> * [Build from Source](/installation/install-livepeer/installing-for-development)

## Start Video Mining on Testnet

You will be setting up a standalone Orchestrator with a transcoder so that you will be able to manage it, get it listed on the Orchestrator list and view it on the Livepeer Explorer.

### Choose your role

How to participate as a Video Miner on the network:

- [Orchestrator](/video-miners/core-concepts/roles-and-responsibilities#types-of-video-miners)
    
- [Transcoder](/video-miners/core-concepts/roles-and-responsibilities#types-of-video-miners)


### Install `livepeer`

You can follow the instructions provided for your chosen [installation workflow](/installation/quickstart-short#installation-workflow).


### Check your bandwidth

You can check Upload/download bandwidth with these [speedtest tools](/video-miners/reference/bandwidth), or use your own.

### Assess concurrent stream capabilities

Operators on the network are encouraged to read and comply with the terms of service and usage policies of the hardware that they are using. 

- [Assess the concurrent stream capabilities](/video-miners/reference/concurrency-check) on the [hardware]((/video-miners/reference/gpu-support)) you will be using to operate on the network.

### Test your Benchmarking

- Download test streams and test your GPU capacity with the [benchmarking tool](/video-miners/how-to-guides/benchmarking) `livepeer_bench.exe`.

- Download the [JSON file](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json) `transcodingOptions.json`.

- Be sure to set the `-nvidia` GPU flag or the benchmarking will default to CPU transcoding and significantly slow down and impact the performance of your machine.

-  You can set the `-concurrentSessions all` to transcode all the test segments or the number of segments you want to test.

- Run the benchmarking tool `livepeer_bench.exe` 

> **Realtime Duration Ratio**: should be under 0.2 for proper performance and not lose any segments. 

- Provide the number of `concurrentSessions` until your reach 0.2 so that streams can process at real-time speed--sufficient performance for participating on the network. 

**For Example:**

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS>
PAUSE    
```
> **Note:** *Pause is not required but will keep the log open so you can make changes. You can remove it once you have completed your testing.*

> **Note:** To **avoid performance issues**, it is highly recommended you run a benchmarking test to guage the capacity of your GPU before proceeding.

###  Open Ports

Open ports and port forwarding to `8935` so that you can receive streams on the network:

- Open port `8935` TCP and UDP.

### Set Static IP and Port Forwarding

> **Note:** In your initial setup for testing, you can use a dynamic IP, but **to operate on the network, IPs must be static**.

When receiving streams for broadcasters, the IP should be static to ensure broadcasters can access the same location each time they want to connect. Alternatively, for some configurations or business goals, you can use a hostname instead to provide more operational flexibility. 

On your router:

- Set up your port forwarding with the service URI to port `8935`

> **Note:** Each router is distinct and in some cases, ports are hardcoded and do not allow for other configurations.

### Start the Orchestrator on Arbitrum Testnet

- Follow the Arbitrum [Testnet](/video-miners/getting-started/testing/testnet) guide.
 
### Navigate Livepeer Explorer on Arbitrum Testnet

 Once you've successfully completed the [Testnet](/video-miners/getting-started/testing/testnet) insructions, you should be able to see your Orchestrator on the [Testnet Explorer](https://arbitrum-rinkeby.explorer.livepeer.org/).

## Video Mining on Arbitrum Mainnet

Once you have been able to connect and activate on the test network, to run on Arbitrum Mainnet:

- Make sure to [Fund your account](/video-miners/getting-started/activation#fund-your-account-with-eth-and-lpt) with ETH for transaction fees, and LPT to stake.

- Change your parameters to connect to the [Arbitrum Mainnet](http:///installation/connect-to-ethereum).

### Start an Orchestrator on the Arbitrum Mainnet

Follow the [Start an Orchestrator](/video-miners/getting-started/activation#start-a-combined-orchestrator-and-transcoder) instuctions.

### Navigate Livepeer Explorer on Arbitrum Mainnet

Once you have completed the instructions for updating your parameters to the Arbitrum Mainnet, you should be able to see your Orchestrator on the [Livepeer Explorer](https://explorer.livepeer.org/leaderboard). 

## Optimize your Orchestrator

Once Activated on the Network, you can to optimize your setup following the [How-to Guides](/video-miners/how-to-guides/overview) .


