---
title: Terminology
sidebar_position: 6
---

## Adaptive Bitrate (ABR) ladder

An Internet Video Streaming industry standard term, ABR streaming is known as "Adaptive Bitrate Streaming". The Adaptive Bitrate (ABR) ladder can be considered metaphorically and refers to "the array of segments of different quality and resolution which are available from the streaming server. If the bitrate rises, the logic in a video player can select a larger size file with better quality to play, thus resembling the "climbing up of the ladder".

<!--- https://developer.att.com/video-optimizer/docs/best-practices/adaptive-bitrate-video-streaming -->

## Capacity

Capacity refers to the total transcoding that an orchestrator or transcoder can provide in an acceptable time frame (i.e. real-time). At the moment, orchestrators and transcoders can set their capacities based on the maximum number of sessions that they can support. For an orchestrator, this maximum session count refers to the maximum number of simultaneous jobs they can receive from broadcasters. For a transcoder, this maximum session count refers to the maximum number of simultaneous transcoding tasks they can receive from broadcasters.

## Concurrent Sessions

***See*** the definition of [Sessions](video-miners/terminology#session)

## Orchestrator

Orchestrators are video miners that are responsible for receiving video from broadcasters and returning transcoded results. They can also be transcoders that transcode video themselves on their own or they can outsource transcoding to separate transcoders. They coordinate work and sometimes perform work on the
network.

## Transcoder

Transcoders are video miners that are responsible for transcoding video. They perform work on the network.

## Transcoding

Transcoding is the process of taking an input source video in one format andbitrate, and converting it to many output rendition videos with different formats and bitrates such that the video can be played on the majority of the
devices in the world at any internet connection speed. 

Additional details on transcoding can be found in [this blog post](https://livepeer.com/blog/intro-to-transcoding).

## Real-time segment ratio 

"Real-Time Segs Ratio" captures the number of segments transcoded in real-time. 

## Session

Transcoding is performed in individual sessions that are created on orchestrators and transcoders. The definition of a session differs slightly between an orchestrator and a transcoder:

- A session on an orchestrator refers to job consisting of numerous segments given to an orchestrator by a broadcaster which is identified by a session ID that the broadcaster obtains by authenticating with the orchestrator. This session usually tracks streams closely, but does not necessarily map 1:1 to streams - there are cases where there may be multiple sessions used for the same stream
- A session on a transcoder refers to an individual transcoding task (for a segment) that is sent by the orchestrator

- **Concurrent Sessions** is the sum of all of the logical TCP connection existing at a given point in time, a pathway on the network, whereby the transfer of data is considered as a session. In Livepeer, multiple concurrent sessions for a related segment may be open.

<!--- https://developer.att.com/video-optimizer/docs/best-practices/video-concurrency -->


## Stake

Stake is LPT that is locked in the Livepeer smart contracts. Orchestrators are
required to have stake in order to receive work on the network in order to
provide economic security to broadcasters.

## Stream duration ratio

"Real-Time Duration Ratio" captures the total time taken to transcode all segments relative to the total duration of all source segments.

## Video Miners

***See*** [Roles and Responsibilities](/video-miners/)

## Video Mining

***See*** [About Video Mining](/video-miners/)
