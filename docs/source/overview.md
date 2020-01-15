# Overview

(Livepeer)[https://livepeer.org] is a live video streaming network protocol that is fully decentralized, highly scalable, crypto token incentivized, and results in a solution which is cheaper to an app developer or broadcaster than using traditional centralized live video solutions.

Users that participate in the Livepeer protocol have one of following roles:

1. Orchestrator
2. Transcoder
3. Broadcaster

An **orchestrator** is a protocol-aware, smart, 24/7 process that is responsible to the end user of the network for transcoding jobs being performed correctly. They stake LPT to secure the work that they perform, and ensure it is done correctly. They can be penalized if they maliciously cheat and mistranscode an end users content. When a user starts a Livepeer node on a CPU based server in `-orchestrator` mode, they are operating that process as an orchestrator.

A **transcoder** on the other hand, is a simple process that knows how to take an input segment of video, and transcode it to the desired outcome. It is not Livepeer protocol aware, it has no requirement for high reliability or being online 24/7, it makes no representation to the end user, and it has nothing at risk. While a user can start a Livepeer node on a server using the `-transcoder` flag to run a process in this role, they often will be running many transcoder processes, likely connected to many GPUs.

A **broadcaster** is a protocol-aware process that fulfills the demand side of the Livepeer network, it takes input streams from the end-user on its exposed RTMP interface to have them transcoded by the infrastructure providers running on Livepeer. The broadcaster takes care of splitting up streams into segments for transcoding and aggregating the transcoded results in a media playlist. Nodes running in `-broadcaster` mode will be able to determine the output renditions and maximum price per pixel for transcoding jobs it sends into the Livepeer network and pay for these jobs in ETH using [probabilistic micropayments](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462). 

![Orchestrator and Transcoders](https://livepeer-assets.s3.amazonaws.com/bot.png)

An orchestrator distributes work across one or many transcoders.

The most popular, and default setup, is that whomever is playing the role of orchestrator, is also running many transcoder processes, and they are distributing the work only to their own processes.

While it is possible to come up with constructions for "public transcoder pools" that allow orchestrators to distribute work to random transcoders, the design space for this sort of setup is outside the scope of this documentation. 

This document will focus on teaching a user how to run their own orchestrator/transcoder setup to perform work on the Livepeer network. This includes: 

* How to run an orchestrator
* How to scale transcoding on an orchestrator
* How to perform transcoding on a CPU and GPU
* How to run a broadcaster
* How to migrate your setup from the Livepeer alpha to Streamflow
