---
sidebar_position: 1
title: Livepeer Quick Start Guide
---

Orchestrators who wish to run a node, provide transcoding services, or develop video streaming to integrate with your applications can quickly get up and running in just a few steps:

1.	[Install Livepeer](/livepeer-quick-start/#installation-workflow)
2.	[Start Video Mining](/livepeer-quick-start/#start-video-mining)
	
	Transcoding or Running a Node as an Orchestrator, 

	or 
	
	[Start Developing](/livepeer-quick-start/#start-developing)

>**Note** Further information about Livepeer capabilities can be found in [Core Concepts](/core-concepts/core-concepts.md). 


## Requirements and Prerequisites

At Livepeer we support:

### Technical Requirements

**Operating Systems** Linux, Darwin (macOS), and Windows

**Graphics Processing**
- **GPU** [NVIDIA](/reference-information/video-mining-references/gpu-support)

- **CPU** Alternatively, may be used if you do not have [NVIDIA], but is not currently recommended.

**Network [Bandwidth](/reference-information/video-mining-references/bandwidth)**



### What you need to know

**Video Miners, Transcoders, Developers**
- working knowledge of a command line interface
		 `wget` is recommended
		 `cURL` alternatively can be used

- working with a Binary and/or Docker
- familiary with networking concepts
- access to an Ethereum network	

**Developers**

	- Go language
	- Git
	- building from source and/or
	- building from Docker	


## Installation Workflow

Depending on your workflow, you may prefer to install Livepeer:
- [using a binary release](/livepeer-quick-start/install-binary-release) or
- [Docker image](/livepeer-quick-start/install-docker).

**Current Release**

Find the latest release for your platform on the [releases page](https://github.com/livepeer/go-livepeer/releases).


## Start Video Mining

Before getting started, [Choose a role](/livepeer-quick-start/video-mining-quick-start/choosing-a-role) as an Orchestrator or Transcoder.

1. Install the node software
	- Docker or 
	- Binary
2. Connect to an Ethereum network
3. Activate on the network
4. Test to ensure they can receive work on the network
5. Call reward to distribute LPT rewards


## Start Developing

1. Perform a [developer install](/livepeer-quick-start/developing-quick-start/installing-for-development) of the node software 
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

