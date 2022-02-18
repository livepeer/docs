---
sidebar_position: 1
title: Installation Tutorial
---

This tutorial walks you through the setup of a Livepeer Orchestrator and earn passive income utilizing your current GPUs for video mining on the Livepeer network.

## About Livepeer Installation

The following covers information to keep in mind as you go through the steps of an installation.

It is based on the following video tutorial [How to set up a Livepeer Orchestrator](https://youtu.be/-gfSkX5xL-U) from the [Livepeer Academy](https://livepeer.academy/video-tutorials/)

**Note** This tutorial is for a Windows machine, from which you should be able to glean the information needed for your implementation.

### Recommendations

Familiarity with [Livepeer Concepts](/video-miners/core-concepts/overview)

## Requirements

Before you perform an installation, it is important to understand and be able to address the following requirements for your implementation. 

### GPU

- [Nvidia GPU](/video-miners/reference/gpu-support) (the only brand of GPU that works on the Livepeer network)
- Other GPUs and CPUs
<!-- If you have IRIS, as is common with new Windows machines, or for your preference, `livepeer` does accomodate running  with your CPU but this is not recommended) as it does not provide for maximum performance. -->

### Network

#### Bandwidth
- Internet Bandwidth: each stream requires about 6Mbs up/down per stream
e.g., 1660 super 20 streams -- 120 Mbs/sec for that video card.
[Livepeer bandwidth requirements](/video-miners/reference/bandwidth)
[Test your bandwidth](/video-miners/reference/bandwidth#test-your-bandwidth)
[Calculating your bandwith](https://www.calculator.net/bandwidth-calculator.html) 
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