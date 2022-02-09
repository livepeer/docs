---
title: Integrate a CDN
sidebar_position: 4
---

# Integrate a CDN

CDN's allow many viewers to view your transcoded video simultaneously while
protecting your broadcaster node from being inundated with requests.

Here is how to make your output video available via a conventional CDN:

1. Run a broadcaster on a server, and expose ports `8935` and `1935`.
2. Boot up broadcaster with the `-rtmpAddr 0.0.0.0` and `-httpAddr 0.0.0.0`
   flags
3. Configure your CDN to cache video content running at
   `http://hostname:8935/stream/{streamID}.m3u8`

Now any requests that come into your site or DApp for video streaming through
Livepeer will pull the video from the network, but will be served off of a CDN.
In the future, we would like to replace this option with the p2p network that
Livepeer forms around a stream.

