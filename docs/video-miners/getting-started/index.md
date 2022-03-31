---
title: Quickstart 
sidebar_position: 1
---

This Quickstart guide provides steps to follow in order for you to be able to install and understand how to set up an Orchestrator for video mining and use your GPU for transcoding.

Livepeer [architecture](/video-miners/core-concepts/architecture) supports several modes of operation you can choose from based on your use case and preferences.

The following includes detailed high-level descriptions and links with instructions about **how to set up a [combined Livepeer Orchestrator and Transcoder](/video-miners/core-concepts/architecture)**.

## What You Need to Know

- Familiarity with platform capabilities highlighted in [Protocol Core Concepts](/protocol/core-concepts/).
- How to work with a command-line interface
    -  `wget` is recommended (alternatively, `cURL`  can be used)
    - [grpcurl](https://github.com/fullstorydev/grpcurl#grpcurl) for interacting with gRPC servers for testing and monitoring
- Basic familiarity with installing binaries directly or with Docker
- Familiarity with networking concepts and configuration (URLs, ports and port forwarding, static IPs, )
- Understanding of how to send and receive funds using [EVM-based networks](/installation/connect-to-ethereum)  

## Technical Requirements

To install and run `livepeer` on the network, you will need to meet the following technical requirements:  

**Operating Systems** 

Linux, Darwin (macOS), or Windows

**Hardware** 

Livepeer supports [NVIDIA **GPUs**](/video-miners/reference/gpu-support) for encoding/decoding. 

> **Note:** Additional hardware support will be added in the future; please refer to [GPU Support](/video-miners/reference/gpu-support) for a full list. 

**Network** 

- **Bandwidth** should provide a recommended minimum 1G upload/download. [**Test your available bandwith**](/video-miners/reference/bandwidth).
- **Static IP/Hostname** to receive video streams 
(to get started, a Dynamic IP will suffice but **should be static for ongoing use**).
- **Ports and Routing**: ability to open ports and modify port forwarding.

## Installation Workflow

**Current Releases** for supported operating systems are found on our Github repository [releases page](https://github.com/livepeer/go-livepeer/releases).

Depending on your workflow, you can install Livepeer:
> * [Using a binary release](/installation/install-livepeer/binary-release)
> * [Using a Docker image](/installation/install-livepeer/docker)
> * [From the source code](/installation/install-livepeer/installing-for-development)

## Start Video Mining

You will be setting up a [combined orchestrator and transcoder](video-miners/how-to-guides/o-t-split) that you will be able to manage, make discoverable on the network, and view on the Livepeer Explorer. For advanced users, it may be preferable to run an [orchestrator / transcoder split](video-miners/how-to-guides/o-t-split).

### Choosing your role

There are multiple ways to participate as a Video Miner on the network:

- [Orchestrator](/video-miners/#types-of-video-miners)
    
- [Transcoder](/video-miners/#types-of-video-miners)

This guide focuses on the steps necessary to participate as a [combined Orchestrator/Transcoder](/video-miners/core-concepts/architecture).

### Install `livepeer`

You can follow the instructions provided for your chosen [installation workflow](#installation-workflow).


### Check your bandwidth

You can check upload/download bandwidth with these [speedtest tools](/video-miners/reference/bandwidth), or use your own. Low bandwidth will result in poor performance on the network.

### Assess concurrent stream capabilities

To ensure optimal performance, you should [assess the concurrent stream capabilities](/video-miners/reference/concurrency-check) on the [hardware](/video-miners/reference/gpu-support) you will be using to operate on the network.

### Test your Benchmarking

You can download test streams and test your GPU capacity with the [benchmarking tool](/video-miners/how-to-guides/benchmarking) `livepeer_bench.exe`.

To do this, you should:

- Download the [test streams](/video-miners/how-to-guides/benchmarking#download-the-test-stream) folder and save it in your `livepeer` folder.

- Save the [JSON](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json) file `transcodingOptions.json` and save it in your `livepeer` folder.

> #### To run `livepeer_bench`

- Be sure to set the `-nvidia` GPU flag; otherwise, the benchmarking will default to CPU transcoding and drastically impact the results

-  Set the `-concurrentSessions all` to transcode all the test segments, or specify the number of segments you want to test.

- Run the benchmarking tool `livepeer_bench.exe` 

> **Realtime Duration Ratio**: You should target a ratio of 1.0 or lower; 1.0 represents real-time transcoding, and anything lower than that is faster than realtime. Higher ratios reflect poor performance.


**For Example:**

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> \ # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS>
PAUSE    
```
> **Note:** *Pause is not required but will keep the log open so you can make changes. You can remove it once you have completed your testing.*

> **Note:** To avoid performance issues, it is highly recommended you run a benchmarking test to gauge the capacity of your GPU before proceeding.

### Set Static IP and Set Up Port Forwarding

> **Note:** In your initial setup for testing, you can use a dynamic IP, but **to operate on the network, IPs must be static**.

When receiving streams for broadcasters, the IP should be static to ensure broadcasters can access the same location each time they want to connect. For some configurations or business goals, it may be helpful use a hostname instead to provide more operational flexibility. 

#### Ports and Forwarding
- Ensure that port `8935` can receive external requests.
- Set up port forwarding to forward requests to the service URI to port `8935`

Depending on your operational setup, this may need to be done via your router.

### Start an Orchestrator on Arbitrum Testnet

Follow the Arbitrum [Testnet](/video-miners/getting-started/testnet) guide.
 
### Navigate to the Livepeer Explorer on Arbitrum Testnet

 Once you've successfully completed the [Testnet](/video-miners/getting-started/testnet) instructions, you should be able to see your Orchestrator on the [Testnet Explorer](https://arbitrum-rinkeby.explorer.livepeer.org/orchestrators).

## Video Mining on Arbitrum Mainnet

Once you have been able to connect and activate on the test network, you are ready to start transcoding on Arbitrum Mainnet:

- Make sure to [Fund your account](/video-miners/getting-started/activation#fund-your-account-with-eth-and-lpt) with ETH for transaction fees, and LPT to stake.

- When starting your orchestrator, be sure to set the `ethUrl` and `network` flags to connect to the [Arbitrum Mainnet](http:///installation/connect-to-ethereum) instead of testnet

### Start an Orchestrator on the Arbitrum Mainnet

Follow the tutorial to [start a combined orchestrator / transcoder](/video-miners/getting-started/activation#start-a-combined-orchestrator-and-transcoder).

Once you've started your combined orchestrator/transcoder with parameters pointing at Arbitrum Mainnet, follow the guide to [activate your orchestrator](/video-miners/getting-started/activation#activate).

### Navigate to the Livepeer Explorer on Arbitrum Mainnet

Once you have activated your orchestrator on the Arbitrum Mainnet, you should be able to see it on the [Livepeer Explorer](https://explorer.livepeer.org/leaderboard). 

## Optimize your Orchestrator

The following [How-to Guides](/video-miners/how-to-guides/) provide further instruction on how video miners can optimize an activated orchestrator.

