---
slug: /core-concepts/video-mining-concepts/architecture
title: Video Miner Architecture
side bar position: 3
---

# Video Miner Architecture

`livepeer` currently supports 3 modes of operation for video miners:

- Standalone orchestrator mode (`-orchestrator`)
- Standalone transcoder mode (`-transcoder`)
- Combined orchestrator and transcoder mode (`-orchestrator -transcoder`)

An introduction to orchestrators and transcoders can be found in the
[getting started section](/video-miner/getting-started/overview). Given
these modes of operation, video miners can consider different architectures. Two
of the most common architectures are:

- Combined orchestrator and transcoder
- Split orchestrator and transcoder

![Video miner architectures](/docs-assets/architecture.png)

The combined orchestrator and transcoder architecture allows the orchestrator to
also perform transcoding using its own hardware. Some of the benefits of using
this architecture include:

- Simple to configure
- Minimizes the number of network hops since transcoding takes place locally on
  the orchestrator

The split orchestrator and transcoder architecture allows the orchestrator to
outsource transcoding to remote transcoders. These transcoders can be run by the
same operator as the orchestrator or by third parties. For more information
about the latter, see the
[transcoding pools](/video-mining-concepts/core-concepts/pools) section. Some of the
benefits of using this architecture include:

- Enables operators to leverage remote hardware to increase an orchestrator's
  transcoding capacity
- Allows hardware connected to machines that cannot be made publicly accessible
  (i.e. lack sufficient IPs, security concerns if the machines also store
  sensitive data, etc.) to contribute to an orchestrator's transcoding capacity

An important consideration when using the split orchestrator and transcoder
architecture is the geographic proximity of the orchestrator and its
transcoders. Since orchestrators need to download results from transcoders
before returning the results to broadcasters, the extra network hop adds
additional latency to the round trip time between a broadcaster and an
orchestrator. Ways to minimize the additional latency from this extra network
hop include running the transcoders close to the orchestrators and making sure
the transcoders have sufficient bandwidth for quick downloads/uploads with the
orchestrator at least for the amount of transcoding capacity the transcoders are
expected to contribute.

