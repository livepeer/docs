---
title: Network Roles
sidebar_position: 2
---

# Network Roles

The Livepeer Protocol specification lays out the various roles in the Livepeer
Network, the various transactions types supported, the cryptoeconomic security
measures in place to prevent collusion, and the token distribution mechanics. As
a high level summary, users that participate in the Livepeer protocol have one
of following roles:

1. Orchestrator
2. Transcoder
3. Delegator
4. Broadcaster
5. Core Team & Community

## Orchestrator

An **orchestrator** is a protocol-aware, smart, 24/7 process that is responsible to the end user of the network for transcoding jobs being performed correctly.
They stake LPT to secure the work that they perform, and ensure it is done correctly. They can be penalized if they maliciously cheat and mistranscode an end user's content.

## Transcoder

A **transcoder** is a simple process that takes an input segment of video, and transcodes it to the desired outcome.

- Transcoding is not a Livepeer protocol aware process,
- There is no requirement for high reliability or being online 24/7, makes no representation to the end user, and it has nothing at risk.

A user in this role can run many transcoder processes, likely connected to many GPUs. It is possible to come up with constructions for "public [transcoder pools](/video-miners/core-concepts/pools)" that allow orchestrators to distribute work to random transcoders.

## Delegator

A **delegator** is a Livepeer tokenholder who participates in the network by
"staking" its tokens towards orchestrators it believes are doing good and honest
work. You can think about staking like putting a deposit down. When a
broadcaster pays fees into the network, both orchestrators and delegators earn a
portion of those fees as a reward for ensuring a high-quality and secure
network.

## Broadcaster

A **broadcaster** is a protocol-aware media server or cluster of media servers which 1) deliver video and audio content to clients that request it and 2) is connected to the Livepeer network. It fulfills the demand side of the Livepeer network by taking input streams from developers, splitting up streams into segments, sending the segments to orchestrators for video processing, and aggregating the transcoded results in a media playlist. Broadcasters are able to determine the output renditions and maximum price per pixel for video processing jobs it sends into the Livepeer network and pay for these
jobs in ETH using [probabilistic micropayments](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462).

## Developer

A **developer** sends input streams to broadcasters for use in an application or service. A developer can either self-host its own broadcaster or use a third party provider such as [Livepeer Video Services](https://livepeer.com).

## Core Team and Community

The Livepeer core team along with the broader Livepeer community drives
development of the protocol and ecosystem.
