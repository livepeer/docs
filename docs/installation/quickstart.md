---
sidebar_position: 1
title: Quickstart Guide
---


Orchestrators who wish to run a node, provide transcoding services, or develop video streaming to integrate with your applications can quickly get up and running in just a few steps:

1. Check the specified requirements and pre-requisites  
2. Follow the Installation workflow for 
> - [video miners](/installation/quickstart#start-video-mining)
> - [developers](/installation/quickstart#start-developing)

>**Recommendations** If you are new to Livepeer, you can familiarize yourself futher about our platform capabilities highlighted in [Core Concepts](/protocol/core-concepts/overview) of the Protocol. 

### Technical Requirements

1. Make sure you have sufficient capability to install and run livepeer on the network:

At Livepeer we support:

**Operating Systems** Linux, Darwin (macOS), and Windows

**Graphics Processing**
- **GPU** [NVIDIA](/video-miners/reference/gpu-support)

- **CPU** Alternatively, may be used if you do not have [NVIDIA], but is not currently recommended.

**Network [Bandwidth](/video-miners/reference/bandwidth)**


### What you need to know

**Anyone working with Livepeer** will have prior experience with the following:

- working knowledge of a command line interface
	-  `wget` is recommended 
	- (alternatively, `cURL`  can be used)
- working with Binary and/or Docker installation
- familiary with networking concepts
- access to an EVM-compatible network (`livepeer` requires access to the Arbitrum network)	


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
2. Connect to an Ethereum network
3. Activate on the network
4. Test to ensure they can receive work on the network
5. Call reward to distribute LPT rewards


## [Start Developing](/video-developers/getting-started/overview)

1. Perform a [developer install](/installation/install-livepeer/installing-for-development) of the node software 
2. Connect an orchestrator with separate transcoders
3. Benchmark transcoding
4. Set transcoding session limits
5. Setup orchestrator and transcoder metrics monitoring
6. Dual mine
7. Set pricing
8. Vote
9. Troubleshooting


You will be able to:
1. Configure your broadcasting preferences
2. Integrate with a CDN
3. Withdraw your broadcaster funds
4. Enable verification (experimental)
5. Troubleshoot Live Peer


