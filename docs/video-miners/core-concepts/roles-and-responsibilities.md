---
title: Roles and Responsibilities
---

# Roles and Responsibilities

Video miners in the Livepeer network provide video transcoding services (and in the future other video infrastructure services as well), for which may be compensated with [Livepeer token (LPT) and Ether (ETH)](/video-miners/core-concepts/earnings#fees). The video miner services allow developers to build scalable video applications.

## About Mining on Livepeer

In the context of the Proof-of-Work (PoW) consensus mechanisms and protocols, such as Bitcoin, the term "miner" refers to participants using computational power to secure a blockchain. 

In the context of Livepeer, a video miner refers to participants who use computational power to provide video transcoding services in an open marketplace to developers.

## Types of Video Miners

Video miners can take on different roles in the network:

- [Orchestrators](/video-miners/core-concepts/roles-and-responsibilities#about-orchestrators) are responsible for receiving video from broadcasters and returning transcoded results.
- [Transcoders](/video-miners/core-concepts/roles-and-responsibilities#about-transcoders) are responsible for transcoding video.

### About Orchestrators 

Orchestrators coordinate work on the network. They earn LPT rewards by staking their own LPT, attracting the stake of delegators by sharing earnings, and earning ETH fees by providing high-quality transcoding services to broadcasters. 

The quality of transcoding services is influenced by a combination of factors, including but not limited to: 

- Economic security (the stake of the orchestrator and its delegators which can be slashed if the work is performed incorrectly), 

- Geographic coverage and transcoding capacity (affected by bandwidth and computational capacity).

Since, based on these factors, a broadcaster selects orchestrators to send work to, an orchestrator's earning potential depends on the ability to perform well in each of these areas.

An orchestrator can also be a transcoder, with the additional option of outsourcing transcoding to one or many separate transcoders; similar to how PoW mining pools outsource PoW hashing to one or many separate miners. Orchestrators outsourcing transcoding to separate transcoders are commonly referred to as
[transcoding pools](/video-miners/core-concepts/pools).

### Running an Orchestrator

Video miners who run an orchestrator:

- Earn LPT rewards
- Participate in governance with your staked LPT
- Can scale up your operation over time to maximize the amount of work received (instead of only sharing work received by another orchestrator -- like a transcoder)
- Should be able to maintain a static IP or DNS hostname for broadcasters to access
- Should be able to maintain a publicly accessible server on the Internet
- Manage and secure Ethereum private keys
- Manage and spend ETH to pay for transactions to redeem payments and distribute rewards

### About Transcoders

Transcoders perform work on the network with their hardware resources, providing computational capacity to orchestrators. 

Transcoding is the process of taking an input source video in one format and bitrate, converting it to many output rendition videos with different formats and bitrates such that the video can be played on the majority of devices running video at any internet connection speed. Additional resources about transcoding can be found in [the Livepeer Blog](https://livepeer.com/blog/intro-to-transcoding).

### Transcoding on the Livepeer Network

In the Livepeer network, broadcasters and video miners establish a price for transcoding on the open market. Exact economics for transcoders depends entirely on the implementation of the [trancoding pool](/video-miners/core-concepts/pools) they belong to. For example, one pool could distribute [LPT rewards and ETH fees](/video-miners/core-concepts/earnings#fees) to transcoders, while others just distribute ETH fees. 

Once a broadcaster has selected one or many video miners to utilize, it will send segments of a video stream to the video
miners with micropayments based on an agreed-upon price. The video miners then return transcoded results for each segment to the broadcasters.

### Running a Transcoder

Video miners who run a transcoder:

- Convert source video and convert it to any format and bitrate
- Have a minimal amount of dev-ops work, as an orchestrator may have
- Take on a share of the work received by another orchestrator
- Understand the compensation structure of transcoding pools will vary according to the [transcoding pools](/video-miners/core-concepts/pools) they participate in.

To run a transcoder, see the
[transcoding pools](/video-miners/core-concepts/pools) section for
information on pools that are live on the network today.

To run an orchestrator, continue with the next part of this section.

