---
slug: /video-miners/core-concepts/roles-and-responsibilities
sidebar_position: 2
title: Roles and Responsibilities

---

# Roles and Responsibilities

Video miners in the Livepeer network provide video transcoding services (and in
the future other video infrastructure services as well) that allow developers to
build scalable video applications and are compensated with Livepeer token (LPT)
and Ether (ETH). While the term "miner" was popularized in the context of
Proof-of-Work (PoW) blockchains such as Bitcoin where it referred to
participants that used computational power to secure the blockchain, in the
context of Livepeer, the term miner refers to participants that use
computational power to provide video transcoding services in an open marketplace
to developers.

## Types of Video Miners

Video miners can take on different roles in the network:

- Orchestrators are responsible for receiving video from broadcasters and
  returning transcoded results
- Transcoders are responsible for transcoding video

Orchestrators coordinate work on the network. They earn LPT rewards by staking
their own LPT and attracting the stake of delegators by sharing earnings, and
earn ETH fees by providing high quality transcoding service to broadcasters. The
quality of transcoding service is influenced by a combination of factors
including economic security (the stake of the orchestrator and its delegators
which can be slashed if the work is performed incorrectly), geographic coverage
and transcoding capacity (affected by bandwidth and computational capacity).
Since a broadcaster selects orchestrators to send work to based on these
factors, an orchestrator's earning potential depends on its ability to perform
well in each of these areas.

Transcoders perform work on the network. They provide computational capacity to
orchestrators with hardware resources. An orchestrator can also be a transcoder
itself, but also has the option of outsourcing transcoding to one or many
separate transcoders similar to how PoW mining pools outsource PoW hashing to
one or many separate miners. Orchestrators that outsource transcoding to one or
many separate transcoders are commonly referred to as
[transcoding pools](/video-miners/core-concepts/pools).

## Transcoding

Transcoding is the process of taking an input source video in one format and
bitrate, and converting it to many output rendition videos with different
formats and bitrates such that the video can be played on the majority of the
devices in the world at any internet connection speed. Additional details on
transcoding can be found in
[this blog post](https://livepeer.com/blog/intro-to-transcoding).

In the Livepeer network, broadcasters and video miners establish a price for
transcoding on the open market. Once a broadcaster has selected one or many
video miners to work with it will send segments of a video stream to the video
miners with micropayments based on the agreed upon price. The video miners then
return transcoded results for each segment to the broadcasters.

