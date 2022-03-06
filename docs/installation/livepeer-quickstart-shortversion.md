---
sidebar_position: 5
title: Livepeer Quickstart
---

Orchestrators who wish to run a node, provide transcoding services, or develop video streaming to integrate with your applications can quickly get up and running in just a few steps:

1. Check the specified requirements and pre-requisites  
2. Follow the Installation workflow for 
> - [video miners](/installation/livepeer-quickstart-shortversion#start-video-mining)
> - [developers](/installation/install-livepeer/installing-for-development)

>**Recommendations** If you are new to Livepeer, you can familiarize yourself futher about our platform capabilities highlighted in [Core Concepts](/core-concepts/core-concepts.md). 

### Technical Requirements

Livepeer supports the following to install and run livepeer on the network:  

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
- working with a Binary and/or Docker installation
- familiary with networking concepts
- access to an Ethereum network	

**Developers**
- Go language
- Git
- building from source and/or Docker	

### Installation Workflow

**Current Releases** for supported operating system are found on our Github repository [releases page](https://github.com/livepeer/go-livepeer/releases).

Depending on your workflow, instructions are provided so that you can install Livepeer:
> * [Using a binary release](/installation/install-livepeer/binary-release)
> * [Built from a Docker image](/installation/install-livepeer/docker)
> * [Developer Install built from source](/installation/install-livepeer/installing-for-development)

## [Start Video Mining](/livepeer-quick-start/video-mining-quick-start/)
We recommend starting on our Livepeer Arbitrum Test 


Before getting started, [Choose a role](/livepeer-quick-start/video-mining-quick-start/choosing-a-role) as an Orchestrator or Transcoder.

1. Install the node software
	- [Docker](/installation/install-livepeer/docker) or 
	- [Binary](/installation/install-livepeer/binary-release)
	
1. Patch your NVIDIA GPU
1. Connect to an Ethereum network
1. Activate on the network
1. Test to ensure they can receive work on the network
1. Call reward to distribute LPT rewards


## [Start Developing](/livepeer-quick-start/#start-developing)

1. Perform a [developer install](/livepeer-quick-start/develop-quick-start/install-development) of the node software 
2. Connect an orchestrator with separate transcoders
3. Benchmark transcoding
4. Set transcoding session limits
5. Setup orchestrator and transcoder metrics monitoring
6. Dual mine
7. Set pricing
8. Vote
9. Troubleshooting