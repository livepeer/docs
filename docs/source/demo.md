# Testing on the Demo Network

Livepeer is pleased to offer a demo network that can be used to evaluate the Livepeer Transcoding API. This demo network will transcode a live RTMP input stream to a live HLS output stream. The HLS playlist will contain the source stream and two transcoded renditions: 352x240 at 30fps, and 480x360 at 30fps. The HLS output can be used for Adaptive Bitrate Streaming, and is compatible with video players that follows the HLS specification.

Please [contact us](mailto:beta@liveeer.org?subject=Ingest+URL+Provision+Request) to apply for access to the demo network.

## 1. Obtain an ingest server URL from Livepeer

Livepeer will give you a set of RTMP ingest and HLS output URLs. The `manifestID` parameter in the ingest URL can be used to form the output URL. For example, when the ingest URL is:

```
rtmp://ingest-host.livepeer.org/?manifestID=customerName_streamName
```

then the output URL is:

```
http://ingest-host.livepeer.org/stream/customerName_streamName.m3u8
```

## 2. Set up your source streamer  and / or capture software.

There are many tools for this. Some common ones include:

* [OBS](https://obsproject.com/) for desktops and laptops
  * Refer to our [guide](https://livepeer.readthedocs.io/en/latest/broadcasting.html#broadcasting-to-a-local-node-using-obs) on using OBS with Livepeer
* [ManyCam](https://manycam.com) for mobile
* FFmpeg for the command line
  * ```
    ffmpeg -re -i <input-video-file> -c:a copy -c:v copy -f flv rtmp://ingest-host.livepeer.org/stream/customerName_streamName.m3u8
    ```
* Re-stream or proxy RTMP traffic from your existing network into Livepeer

## 3. Configure your player with the Livepeer output URL

An easy option is to use the [Livepeer player](http://media.livepeer.org/)

## 4. Start streaming, have fun!

## FAQs

**Q:** How can I obtain an ingest URL?\
**A:** Contact beta@livepeer.org with the title "Ingest URL Provision Request".

**Q:** How much does the transcoding service cost?\
**A:** For a limited period of March 2019 to September 2019, the transcoding service is completely free of charge.  In the future, Livepeer will be 10x to 50x cheaper than current cloud transcoding APIs.

**Q:** How many streams can I send to the Livepeer transcoding API?\
**A:** Please limit to five streams on the demo network. There is no limit to the length of the video. If more streams are needed for evaluation, contact us; we may be able to accommodate you up to 50 streams.

**Q:** What's the latency I should expect?\
**A:** You should expect 10-15 sec latency for now.

**Q:** Does Livepeer offer CDN distribution of the transcoded content?\
**A:** Livepeer is a video transcoding network, not a content distribution network. However, Livepeer is able to serve as the origin point for most CDN services.

**Q:** Does Livepeer offer any data to the video streams?\
**A:** Currently the Livepeer transcoding API does NOT offer any data to the video streams.  In the next release, users will be able to register an API hook to get callback events when the streams start or stop.

**Q:** Can you store video into my Amazon S3 or Google Cloud Storage bucket?\
**A:** Yes; contact us if you need this set up for your testing.

**Q:** How do I authenticate streams or know when a stream starts?\
**A:** A RTMP authentication webhook is available; contact us if you need this set up for your testing.

**Q:** Does the API also do VOD transcoding?\
**A:** Currently the Livepeer transcoding API does not offer VOD transcoding.
