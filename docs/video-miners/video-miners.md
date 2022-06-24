---
sidebar_position: 1
title: About Video Mining
---

This section of the livepeer.org documentation is for **video miners**. Video miners in the Livepeer network provide video transcoding services.

In the context of Proof-of-Work (PoW) consensus mechanisms and protocols, e.g., Bitcoin, the term "miner" refers to participants using computational power to secure a blockchain.

Livepeer video miners participate in an open marketplace using their computational power to provide video transcoding services (and in the future, other video infrastructure services as well), enabling developers to build scalable video applications. Video miners get compensated for these services with [Livepeer token (LPT) and Ether (ETH)](/video-miners/core-concepts/earnings#fees).

## Roles and Responsibilities

Video miners can take on different roles in the network:

- [Orchestrators](/video-miners/#about-orchestrators) are responsible for receiving video from broadcasters and returning transcoded results.
- [Transcoders](/video-miners/#about-transcoders) are responsible for transcoding video.

### About Orchestrators

An orchestrator coordinates work on the network. They earn LPT rewards by staking their own LPT, and earn ETH fees for providing high-quality transcoding services to broadcasters. Their earnings are influenced by their delegated stake, which they've attracted by sharing earnings.

The quality of transcoding services is influenced by a combination of factors, including but not limited to:

- Economic security (the stake of the orchestrator and its delegators which can be slashed if the work is performed incorrectly),

- Geographic coverage and transcoding capacity (affected by bandwidth and computational capacity).

A broadcaster selects orchestrators to send work to based on these factors. Hence, an orchestrator's earning potential depends on their performance in these areas.

An orchestrator running a combined orchestrator/transcoder can perform transcoding with the additional capability of outsourcing transcoding to one or many transcoders, commonly referred to as a [transcoding pool](/video-miners/core-concepts/pools). They are similar to how PoW mining pools outsource PoW hashing to one or many separate miners.

### Running an Orchestrator

Video miners who run an orchestrator:

- Earn LPT rewards
- Participate in governance with your staked LPT
- Can scale up their operation over time to maximize the amount of work received (instead of only sharing work received by another orchestrator -- like a transcoder)
- Should be able to maintain a static IP or DNS hostname for broadcasters to access
- Should be able to maintain a publicly accessible server on the Internet
- Manage and secure Ethereum private keys
- Manage and spend ETH to pay for transactions to redeem payments and distribute rewards

### About Transcoders

A transcoder performs transcoding work on the network with their hardware resources, thus providing computational capacity to orchestrators.

Transcoding is the process of taking an input source video in one format and bitrate and converting it to many output rendition videos with different formats and bitrates such that the video can be played on most devices running video at any internet connection speed. Additional resources about transcoding can be found in [the Livepeer Blog](https://livepeer.studio/blog/intro-to-transcoding).

### Transcoding on the Livepeer Network

A broadcaster selects an orchestrator and begins streaming video to them via the Livepeer network. The orchestrator sends video segments to a transcoder. They transcode and return the segments to the orchestrator to return to the broadcaster.

In the Livepeer network, broadcasters and video miners establish a price for transcoding on the open market. The fees an orchestrator receives for the transcoded segments are based on an agreed-upon price with the broadcaster, whereas exact economics for transcoders depends entirely on the implementation of the [transcoding pool](/video-miners/core-concepts/pools) to which they belong. For example, one pool could distribute [LPT rewards and ETH fees](/video-miners/core-concepts/earnings#fees) to transcoders, while another just distributes ETH fees.

### Running a Transcoder

Video miners who run a transcoder:

- Take on a share of the work received by an orchestrator
- Receive and convert source video to required formats and bitrates
- Require less technical implementation than an orchestrator
- Understand that the compensation structure of transcoding pools will vary according to the [transcoding pools](/video-miners/core-concepts/pools) in which they participate.

To run a transcoder, see the
[transcoding pools](/video-miners/core-concepts/pools) section for information on pools that are live on the network today.

To run an orchestrator, continue to the [Livepeer Quickstart](/video-miners/getting-started/getting-started.md) guide.
