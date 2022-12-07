---
title: Create a Livestream
sidebar_position: 4
---

# Create a Livestream

Livepeer supports livestreaming using the RTMP protocol, which is supported by
most broadcast software/hardware as well as open source software for mobile
applications.

For this guide, we will be using [OBS](https://obsproject.com/download) to stream. However, any similar RTMP-capable broadcasting software will work.

Once you have OBS downloaded and installed, follow these steps to start livestreaming:

### Configure OBS to use the Broadcaster's RTMP URL

If this is your first time using OBS, you can dismiss the setup wizard. Next, navigate to Settings -> Stream.

Select `Custom` in the dropdown, and enter the RTMP Server URL provided by your broadcaster node (`rtmp://127.0.0.1:1935/live`). Pick a name for your livestream, for example `MY_NAME`. The stream key should be `stream+MY_NAME`. Once you've entered this information, click "Ok" to save it.

### Start Streaming

At the bottom of the main OBS window is a box called 'Sources'. Click on the + (or right click inside the box) and pick the source you want. For example, select Game Capture if you're capturing a game, Window for non-game applications, or Video Capture Device for a webcam or capture card.

Double-check that all your settings are how you want them in Settings -> Output. Finally, click "Start Streaming".
