# Running Infrastructure - Orchestrator and Transcoder Roles

Transcoding is the process of taking an input video in one format and
bitrate, and converting it into many formats and bitrates to make it
playable on the majority of devices on the planet at any connection
speed.

In The Livepeer network, users who run nodes on their infrastructure
perform this very important function, and as a result it's important
that they have high bandwidth connections, sufficient hardware, and
reliable devOps practices. These nodes are delegated towards and
elected to perform this role, and they are rewarded with the ability
to earn fees from the network.

## Overview

This documentation will refer to two roles that infrastructure providers can play:

1. Orchestrator
2. Transcoder

An **orchestrator** is a Livepeer-aware, smart, 24/7 process that is responsible to the end user of the network for transcoding jobs being performed correctly. They stake LPT to secure the work that they perform, and ensure it is done correctly. They can be penalized if they maliciously cheat and mistranscode an end users content. When a user starts a Livepeer node on a CPU based server in `--orchestrator` mode, they are operating that process as an orchestrator.

A **transcoder** on the other hand, is a simple process that knows how to take an input segment of video, and transcode it to the desired outcome. It is not Livepeer protocol aware, it has no requirement for high reliability or being online 24/7, it makes no representation to the end user, and it has nothing at risk. While a user can start a Livepeer node on a server using the `--transcoder` flag to run a process in this role, they often will be running many transcoder processes, likely connected to many GPUs.

![Orchestrator and Transcoders](https://livepeer-assets.s3.amazonaws.com/bot.png)

An orchestrator distributes work across one or many transcoders.

The most popular, and default setup, is that whomever is playing the role of orchestrator, is also running many transcoder processes, and they are distributing the work only to their own processes.

While it is possible to come up with constructions for "public transcoder pools" that allow orchestrators to distribute work to random transcoders, the design space for this sort of setup is outside the scope of this documentation. This document will focus on teaching a user how to run their own orchestrator/transcoder setup to perform work on the Livepeer network. This includes: 

* How to run an orchestrator
* How to perform transcoding on a CPU and GPU
* How to scale out your transcoding setup behind a single orchestrator
* How to upgrade your setup from the Livepeer alpha to Streamflow
* How to put an identity on your node

## Quickstart

## GPU transcoding

## Scaling out your O/T Setup

## Migration guide from Alpha to Streamflow

## Putting an identity on your infrastructure node

## FAQ

Quicklinks:

[Transcoder Election Dashboard](https://explorer.livepeer.org/transcoders)

[Transcoder campaign thread](https://forum.livepeer.org/c/transcoders/transcoder-campaign)

[Transcoder chat](https://discord.gg/cBfD23u)


