---
sidebar_position: 1
title: Installation Tutorial DRAFT
---

This tutorial includes a brief overview of how Livepeer works with contextual information about the steps to setup a Livepeer Orchestrator. 

It aims to guide those new to the Livepeer and are interested in learning about how participating on the Livepeer network earn passive income utilizing your GPUs for video mining.

## About video mining on Livepeer

Our [Architecture](/video-miners/core-concepts/architecture) allows you to set up various options--architectures to perform video-mining services.

Orchestrator -- is a node set up to work in the Livepeer ecosystem to provide transcoding systems. up with transcoders encoding into pixel rates, e.g. bit rates such as 1080, 720, 

Your GPUs can be set up simply to transcode on the network or you can set up an Orchestrator, a node and transcode work, or include others who have set up their GPUs to simply transcode on the network with an Orchestrator.

Ideally, you want your GPU to be able to process as many streams encoding/transcoding quickly, with the capacity to process streams at the highest resolution possible.

Transcoding takes input as video, decoding to raw formated video and encoding into different formats and bit rates (144p,240p , 360p, 480p, 720p, 1080p HD) and quality rates 0.38 GB/hr, 1.40 GB/hr, 6.84 GB/hr

You may already be an [ETH Miner](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/#what-is-ethereum-mining) or not, and if you add your GPU on the Livepeer network to perform transcoding, or run a node with multiple transcoders, with your own GPU(s) or with those who are on the network, and earn [ETH](https://bitflyer.com/en-us/ethereum-chart) fees. instead of solving proof-of-work algorithms you will earn ETH with your GPU working to decodes and encodes video


### Livepeer Explorer

Familarize yourself with the [Livepeer Explorer](https://explorer.livepeer.org/whats-new) where you can visualize Orchestrators and earnings according to performance.
- Optimization for increased access
There are 100 available slots. In order to see where you can fit in, go to the livepeer explorer to see how 
- Gas fees L2 -- Ethereum to cover gas fees - (Also ***See*** LPT2 migration information )


## About Livepeer Installation

The following covers information to keep in mind as you go through the steps of an installation.

It is based on the video tutorial [How to set up a Livepeer Orchestrator](https://youtu.be/-gfSkX5xL-U) from the [Livepeer Academy](https://livepeer.academy/video-tutorials/)

**Note** This tutorial is for a Windows machine, from which you should be able to glean the information needed for your implementation.

### Consideration and Recommendations

Familiarity with [Livepeer Concepts](/video-miners/core-concepts/overview)

### Location
Are you located in a place where there is a high demand for transcoding, Europe, North America -- USA.

## Requirements

Before you perform an installation, it is important to understand and be able to address the following requirements for your implementation. 

This is a tutorial for windows, and checking the following will be performed through the Control Panel.


### GPU

- [Nvidia GPU](/video-miners/reference/gpu-support) (the only brand of GPU that works on the Livepeer network) 

- Other GPUs and CPUs
<!-- If you have IRIS, as is common with new Windows machines, or for your preference, `livepeer` does accomodate running  with your CPU but this is not recommended) as it does not provide for maximum performance. -->

Any GPU Nvidia 10 series and up should have NVENC and NVDEC chips. You can find a list of supported [Nvidia GPUs](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new), and those supported on the Livepeer network can be found [here]

To find your GPU capacity on your machine


### Network
Understanding of networking and ability to provide internet bandwidth sufficiently robust to stream on Livepeer [Livepeer bandwidth requirements](/video-miners/reference/bandwidth).

#### Bandwidth
Each stream requires about 6Mbs up/down per stream
e.g., 1660 super 20 streams -- 120 Mbs/sec for that video card.

- [Test your bandwidth](/video-miners/reference/bandwidth#test-your-bandwidth)
Upload -- 457 mbps
Download - 24 mbps
- [Calculating your bandwith](https://www.calculator.net/bandwidth-calculator.html) 
- Minimum and Ideal Internet Bandwidth -- 120 mbs
- - Network Knowledge -- Understanding static and dynamic IP addresses, firewalls is necessary as you change configurations during set-up and troubleshooting

#### Static IP
Static IP -- `Livepeer` will work with a dynamic IP address. However, when receiving streams for broadcasters you will want a static IP to make sure it goes to the same location each time.


### LPT -- Livepeer Token

- Required LPT - required [Livepeer token](/protocol/core-concepts/token.md) for staking for those who perform work on the network
- Livepeer explorer
- Optimization for increased access

There are 100 available slots. In order to see where you can fit in, go to the livepeer explorer to see how 
- Gas fees L2 -- Arbitrum to cover gas fees - (Also ***See*** LPT2 migration information )


### Installation Workflow

Depending on your workflow, you may prefer to install `livepeer`
[using a binary release](/installation/install-livepeer/binary-release) or
a [Docker image](/installation/install-livepeer/docker).


