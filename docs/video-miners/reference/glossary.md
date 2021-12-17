---
title: Glossary
sidebar_position: 6
---

# Glossary

## Transcoding

Transcoding is the process of taking an input source video in one format and
bitrate, and converting it to many output rendition videos with different
formats and bitrates such that the video can be played on the majority of the
devices in the world at any internet connection speed. Additional details on
transcoding can be found in
[this blog post](https://livepeer.com/blog/intro-to-transcoding).

## Orchestrator

Orchestrators are video miners that are responsible for receiving video from
broadcasters and returning transcoded results. They can also be transcoders that
transcode video themselves on their own or they can outsource transcoding to
separate transcoders. They coordinate work and sometimes perform work on the
network.

## Transcoder

Transcoders are video miners that are responsible for transcoding video. They
perform work on the network.

## Stake

Stake is LPT that is locked in the Livepeer smart contracts. Orchestrators are
required to have stake in order to receive work on the network in order to
provide economic security to broadcasters.

## Session

Transcoding is performed in individual sessions that are created on
orchestrators and transcoders. The definition of a session differs slightly
between an orchestrator and a transcoder:

- A session on an orchestrator refers to job consisting of numerous segments
  given to an orchestrator by a broadcaster which is identified by a session ID
  that the broadcaster obtains by authenticating with the orchestrator. This
  session usually tracks streams closely, but does not necessarily map 1:1 to
  streams - there are cases where there may be multiple sessions used for the
  same stream
- A session on a transcoder refers to an individual transcoding task (for a
  segment) that is sent by the orchestrator

## Capacity

Capacity refers to the total transcoding that an orchestrator or transcoder can
provide in an acceptable time frame (i.e. real-time). At the moment,
orchestrators and transcoders can set their capacities based on the maximum
number of sessions that they can support. For an orchestrator, this maximum
session count refers to the maximum number of simultaneous jobs they can receive
from broadcasters. For a transcoder, this maximum session count refers to the
maximum number of simultaneous transcoding tasks they can receive from
broadcasters.
