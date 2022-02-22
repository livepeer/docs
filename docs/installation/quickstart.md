---
sidebar_position: 2
title: Quickstart Guide
---

## How to set up a Livepeer Orchestrator


**Video Miners** will be able to install and setup Livepeer to use your current GPU for video mining. 

**Developers** will be able to install and setup Livepeer for developing.

Set up an Orchestrators to run a node, provide transcoding services, or develop video streaming to integrate with your applications can quickly get up and running in just a few steps:


1. Check the specified requirements and pre-requisites  
2. Follow the Installation workflow for 
> - [video miners](/installation/quickstart#start-video-mining)
> - [developers](/installation/quickstart#start-developing)
3. Benchmarking
4. Launching a Livepeer Node



>**Recommendations** If you are new to Livepeer, you can familiarize yourself futher about our platform capabilities highlighted in [Core Concepts](/protocol/core-concepts/overview) of the Protocol. 

### Technical Requirements

1. Make sure you have sufficient capability to install and run livepeer on the network:

At Livepeer we support:

**Operating Systems** Linux, Darwin (macOS), and Windows

**Graphics Processing**

- **GPU** [NVIDIA](/video-miners/reference/gpu-support)

- **CPU** Alternatively, may be used if you do not have [NVIDIA], but is not currently recommended.

- **Network** 
	
	- **[Bandwidth](/video-miners/reference/bandwidth)**

	- **Static IP** to receive video streams at the same address 

> **Note** dynamic IP will suffice for the purposes of this setup

___________________________________________


### What you need to know

- working knowledge of a command line interface
	-  `wget` is recommended 
	- (alternatively, `cURL`  can be used)
- working with Binary and/or Docker installation
- familiary with networking concepts
- access to an EVM-compatible network ([Livepeer Network](https://docs.livepeer.org/installation/connect-to-ethereum)))	


**Developers** interested in development with Livepeer, should have prior experience:
- working with Go language
- working knowledge of Git
- building from source and/or
- building from Docker	

## Installation Workflow

**[Current Releases](https://github.com/livepeer/go-livepeer/releases) for your operating system** can be found in our Github repository on the [releases page](https://github.com/livepeer/go-livepeer/releases).

2. Depending on your workflow, instructions are provided so that you can install Livepeer:
> * [using a binary release](/installation/install-livepeer/binary-release), found on our github release page, or
> * [Docker image](/installation/install-livepeer/docker), found in our docker hub repo

> **Developers** have the option to follow instructions on how to perform a [developer install](http://localhost:3000/installation/install-livepeer/installing-for-development)


## [Start Video Mining](/video-miners/getting-started/choosing-a-role)

Before getting started, [Choose a role](/video-miners/getting-started/choosing-a-role) as an Orchestrator or Transcoder.

1. Install the node software
	- [Binary](/installation/install-livepeer/binary-release), or
	- [Docker](/installation/install-livepeer/docker)  
1. Connect to the network
1. Activate on the network
1. Test to ensure you can receive work on the network
1. Call reward to distribute LPT rewards
1. Connect an orchestrator with separate transcoders
1. Benchmark transcoding
1. Set transcoding session limits
1. Setup orchestrator and transcoder metrics monitoring
1. Dual mine
1. Set pricing
1. Vote
1. Troubleshooting

## [Start Developing](/video-developers/getting-started/overview)

1. Perform a [developer install](/installation/install-livepeer/installing-for-development) of the node software 
2. Run a broadcaster
3. Deposit broadcasting funds
4. Create a livestream
5. Playback a livestream


Once you are set up, developers will be able to:
1. Configure your broadcasting preferences
2. Integrate with a CDN
3. Withdraw your broadcaster funds
4. Enable verification (experimental)
5. Troubleshoot Livepeer


