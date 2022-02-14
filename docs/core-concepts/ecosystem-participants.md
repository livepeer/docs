---
title: Ecosystem Participants
sidebar_position: 3
---

# Ecosystem Participants

The Livepeer Protocol specification lays out the various roles in the Livepeer
Network, the various transactions types supported, the cryptoeconomic security
measures in place to prevent collusion, and the token distribution mechanics. As
a high level summary, users that participate in the Livepeer protocol have one
of following roles:

1. Orchestrator
2. Transcoder
3. Broadcaster
4. Delegator
5. Core Team & Community

## Orchestrator

An **orchestrator** is a protocol-aware, smart, 24/7 process that is responsible
to the end user of the network for transcoding jobs being performed correctly.
They stake LPT to secure the work that they perform, and ensure it is done
correctly. They can be penalized if they maliciously cheat and mistranscode an
end users content.

## Transcoder

A **transcoder** on the other hand, is a simple process that knows how to take
an input segment of video, and transcode it to the desired outcome. It is not
Livepeer protocol aware, it has no requirement for high reliability or being
online 24/7, it makes no representation to the end user, and it has nothing at
risk. A user in this role can run many transcoder processes, likely connected to
many GPUs. It is possible to come up with constructions for "public transcoder
pools" that allow orchestrators to distribute work to random transcoders.

## Broadcaster

A **broadcaster** is a protocol-aware process that fulfills the demand side of
the Livepeer network, it takes input streams from the end-user on its exposed
RTMP interface to have them transcoded by the infrastructure providers running
on Livepeer. The broadcaster takes care of splitting up streams into segments
for transcoding and aggregating the transcoded results in a media playlist.
Broadcasters are able to determine the output renditions and maximum price per
pixel for transcoding jobs it sends into the Livepeer network and pay for these
jobs in ETH using
[probabilistic micropayments](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462).

## Delegator

A **delegator** is a Livepeer tokenholder who participates in the network by
"staking" its tokens towards orchestrators it believes are doing good and honest
work. You can think about staking like putting a deposit down. When a
broadcaster pays fees into the network, both orchestrators and delegators earn a
portion of those fees as a reward for ensuring a high-quality and secure
network.

## Core Team and Community

The Livepeer core team along with the broader Livepeer community drives
development of the protocol and ecosystem.

