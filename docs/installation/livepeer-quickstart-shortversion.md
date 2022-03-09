---
sidebar_position: 2
title: Livepeer Quickstart
---

Orchestrators who wish to run a node, provide transcoding services, or develop video streaming to integrate with your applications can connect, activate, and optimize your implementation to run on the network:

- You can familiarize yourself further with our platform capabilities highlighted in [Core Concepts](/core-concepts/core-concepts.md). 

- Set up your environment [requirements and pre-requisites](/installation/livepeer-quickstart-shortversion#technical-requirements).

- Follow the setup workflow for: 
	- [video miners](/installation/livepeer-quickstart-shortversion#start-video-mining)
	- [developers](/installation/install-livepeer/installing-for-development)

### Technical Requirements

Livepeer supports the following to install and run `livepeer` on the network:  

**Operating Systems** Linux, Darwin (macOS), and Windows

**Graphics Processing** Livepeer supports [NVIDIA **GPUs**](/video-miners/reference/gpu-support) for encoding/decoding.

**Network** 

- [**Bandwidth**](/video-miners/reference/bandwidth) providing for a mininum 1G upload/download
- **Static IP** to receive video streams 
(Dynamic IP will suffice to get started, but should be static for ongoing use)
- **Router** Ability to open ports and modify port forwarding

### What you need to know
- working knowledge of a command line interface
		 `wget` is recommended
		 `cURL` alternatively can be used
- working with a Binary and/or Docker installations
- familiary with networking configurations
- access to an [EVM-compatible](https://ethereum.org/en/developers/docs/evm/) network (Livepeer is on [Arbitrum](/video-miners/how-to-guides/l2-migration))	

**Developers**
- Go language
- Git
- building from source and/or Docker	

### Installation Workflow

**Current Releases** for supported operating systems are found on our Github repository [releases page](https://github.com/livepeer/go-livepeer/releases).

Depending on your workflow, instructions are provided so that you can install Livepeer:
> * [Using a binary release](/installation/install-livepeer/binary-release)
> * [Build from a Docker image](/installation/install-livepeer/docker)
> * [Developer Install](/installation/install-livepeer/installing-for-development)

## Start Video Mining

You can decide how you want to participate on the network. Set up a node and transcode, simply transcode on your own, or join a transcoding pool, ***See*** [About Video Mining](/video-miners/core-concepts/roles-and-responsibilities#types-of-video-miners).

**Choose your role:**
- [Orchestrator](/video-miners/getting-started/choosing-a-role#orchestrator)
- [Transcoder](/video-miners/getting-started/choosing-a-role#transcoder)

### Architecture

This example follows the combined orchestrator and transcoder architecture that you can view in detail [***here***](/video-miners/core-concepts/architecture)

### Prerequisites
The following are steps to follow to set up your environment prior to connecting and activating on the Arbitrum mainnet network.

#### Install the node software

- [Binary](/installation/install-livepeer/binary-release)
- [Docker](/installation/install-livepeer/docker), or
- [Developer Install](/installation/install-livepeer/installing-for-development) 

#### Check and Patch the NVIDIA GPU 

1.  Make sure your [NVIDIA GPUs](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)  provides for Encoding and Decoding.  

Any GPU NVIDIA 10 series and up should have NVENC and NVDEC chips. You can find a list of [supported NVIDIAs GPUs](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new), and those supported on the Livepeer network can be found [here](https://docs.livepeer.org/video-miners/reference/gpu-support)

> **IMPORTANT** NVIDIA limits the number of concurrent streams that can run on GPUs. An NVENC patch is available to eliminate the restrictions on the number of concurrent streams. 

> **NOTE** Patches are required for all operating systems, in order to run unlimited concurrent streams.

You can access the patch tool, patches, and instructions to [Patch your GPU](/video-miners/reference/gpu-patch).

#### Benchmarking Test

Before proceeding, [test your GPU capacity](/video-miners/how-to-guides/benchmarking), downloading a test stream, running `livepeer_bench`, and analyzing the output metrics.

## Connect to Arbitrum 

1. Connect to an [EVM-Compatible network](/installation/connect-to-ethereum)

 Prior to working on the mainnet, we will be starting on the Livepeer Arbitrum Testnet, after which you can point your implementation to the mainnet. 

[Test Network](http://localhost:3000/installation/connect-to-ethereum#arbitrum-rinkeby-pub
lic-test-network)

### Activate on the network

1. Test to ensure you can receive work on the network


### Move to the mainnet

1. FPO
1. FPO
1. FPO



<!-- ## [Start Developing](/livepeer-quick-start/#start-developing)

1. Perform a [developer install](/livepeer-quick-start/develop-quick-start/install-development) of the node software 

2. Connect an orchestrator with separate transcoders

3. Benchmark transcoding
4. Set transcoding session limits
5. Setup orchestrator and transcoder metrics monitoring
6. Dual mine
7. Set pricing
8. Vote
9. Troubleshooting -->