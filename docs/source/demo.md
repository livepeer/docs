# Testing on the Demo Network

Livepeer is pleased to offer a demo network that can be used to evaluate the Livepeer Transcoding API. This demo network will transcode a live RTMP input stream to a live HLS output stream. The HLS playlist will contain the source stream and two transcoded renditions: `352x240` at `30fps`, and `480x360` at `30fps`. The HLS output can be used for Adaptive Bitrate Streaming, and is compatible with video players that follows the HLS specification.

Please [contact us](mailto:beta@liveeer.org?subject=Ingest+URL+Provision+Request) to apply for access to the demo network.


## Setup: obtain an ingest server URL from Livepeer

Livepeer will give you a set of RTMP `<ingest-url>`, HLS `<streaming-url>`, and `<status-url>`. The `manifestID` parameter in the ingest URL can be used to form the output URL. 

**For example:**
The ingest URL can be:
```
rtmp://<ingest-url>/?manifestID=stream1
```

the streaming URL can be: 
```
http://<stream-url>/stream/stream1.m3u8
```

and the status URL can be:
```
http://<status-url>/status
```

## 1. Create your source streamer and / or capture software.

There are many tools for this. Some common ones include:

* FFmpeg from a mac laptop
  * ```
    ffmpeg -f avfoundation -framerate 60 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -acodec aac -b 500k -x264-params keyint=120:min-keyint=120 -f flv rtmp://<ingest-url>/?manifestID=stream1
    ```
* FFmpeg for a video file
  * ```
    ffmpeg -re -i <input-video-file> -c:a copy -c:v copy -f flv rtmp://<ingest-url>/?manifestID=stream1
    ```
* [OBS](https://obsproject.com/) for desktops and laptops
  * Refer to our [guide](https://livepeer.readthedocs.io/en/latest/broadcasting.html#broadcasting-to-a-local-node-using-obs) on using OBS with Livepeer
* [ManyCam](https://manycam.com) for mobile

* Re-stream or proxy RTMP traffic from your existing network into Livepeer

## 2. Get status about your source stream

Using the status endpoint, you can get status of all of the streams on a Livepeer node.  For example:
```
curl http://<status-url>/status | jq
```

You should see something like
```
{
  "Manifests": {
    "stream1": "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-STREAM-INF:PROGRAM-ID=0,BANDWIDTH=4000000,RESOLUTION=1280x720\njohn/source.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=0,BANDWIDTH=1200000,RESOLUTION=640x360\njohn/P360p30fps16x9.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=0,BANDWIDTH=600000,RESOLUTION=426x240\njohn/P240p30fps16x9.m3u8\n"
  },
  "Version": "0.3.3-0.3.2-42-g063c2f9"
}
```
If you see an error like `-bash: jq: command not found`, use 
```
curl http://<status-url>/status
```

## 3. View your stream

An easy option is to use the [Livepeer player](http://media.livepeer.org/).  Simply put the stream output URL there to view your stream.  For example: 
```
http://<streaming-url>/stream/stream1.m3u8
```

## FAQs

**Q: How can I obtain an ingest URL?**\
**A:** Contact beta@livepeer.org with the title "Ingest URL Provision Request".

**Q: How much does the transcoding service cost?**\
**A:** For a limited period of March 2019 to September 2019, the transcoding service is completely free of charge.  In the future, Livepeer will be less than $0.05 per hour per stream.

**Q: How many streams can I send to the Livepeer transcoding API?**\
**A:** Please limit to five streams on the demo network. There is no limit to the length of the video. If more streams are needed for evaluation, contact us; we will be able to accommodate you up to 50 streams.

**Q: What's the latency I should expect?**\
**A:** This depends on the video segment length.  For the default setting, you should expect 10-15 sec latency for now.

**Q: Does Livepeer offer CDN distribution of the transcoded content?**\
**A:** Livepeer is a video transcoding network, not a content distribution network. However, Livepeer is able to serve as the origin point for most CDN services.

**Q: Does Livepeer offer any data to the video streams?**\
**A:** Currently the Livepeer transcoding API does NOT offer any data to the video streams.  In the next release, users will be able to register an API hook to get callback events when the streams start or stop.

**Q: Can you store video into my Amazon S3 or Google Cloud Storage bucket?**\
**A:** Yes; contact us if you need this set up for your testing.

**Q: How do I authenticate streams or know when a stream starts?**\
**A:** A RTMP authentication webhook is available; contact us if you need this set up for your testing.

**Q: Does the API also do VOD transcoding?**\
**A:** Currently the Livepeer transcoding API does not offer VOD transcoding.
