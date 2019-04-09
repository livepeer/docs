# Broadcasting To A Livepeer Node

Broadcasting to Livepeer using existing broadcasting tools is
easy. After a Livepeer node is running, it exposes an RTMP interface
on port 1935. You can broadcast into Livepeer using this port.

## Install Livepeer and Have the Node Running

The following instructions assume that you have followed the
[installation instructions](http://livepeer.readthedocs.io/en/latest/node.html#installation)

and [have the node running](node.html).

Note: make sure you have deposited ETH if you would like to broadcast.

## Broadcasting To A Local Node Using OBS

Start by reading our [step by step guide](https://github.com/livepeer/wiki/wiki/Blueprint:-set-up-a-broadcasting-node-using-Livepeer-and-OBS)

It is far more convenient to broadcast using existing tools that have
features for screen capture, composites, overlays, multiple video and
audio sources, etc. One such tool is
[OBS](https://obsproject.com/). To use OBS you have to change two
settings:

* Settings -> Stream -> URL. Set it as `rtmp://localhost:1935`
* Settings -> Output -> Output Mode. Set it to Advanced. Ensure the following settings are enabled:
  * Encoder: x264
  * Rate Control: CBR
  * Keyframe Interval: 4
* Start streaming as usual.

If the broadcast is successful, you should see a log in the terminal like:
```

Video Created With ManifestID: 710ed610

```

If you have used `-currentManifest` to start your Livepeer node, you can verify that the broadcast is successful by running `curl http://localhost:8935/stream/current.m3u8`.  It should return a valid HLS playlist like:

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:PROGRAM-ID=0,BANDWIDTH=4000000,RESOLUTION=1120x700
710ed610/source.m3u8
```

## Playing The Local Video Stream

Make sure you have used `-currentManifest` to start your Livepeer node. You can watch your stream via:

* Playing the stream through the [Livepeer media player](http://media.livepeer.org). Use `http://localhost:8935/stream/current.m3u8` as the URL for the video stream.
* Playing the stream using `ffplay`

```
$ ffplay http://localhost:8935/stream/current.m3u8
```


## Broadcasting To A Local Node Using FFMPEG

To broadcast using ffmpeg you can try the following command:

For Mac:
```
ffmpeg -f avfoundation -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie
```

For Linux:
```
ffmpeg -f dshow -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie
```

You can now verify if the broadcast is successful.

## Broadcasting To A Remote Node From Mobile

There is not currently a natively Livepeer aware mobile app, but much
like [using OBS](#broadcasting-using-obs), as described above, you can
use any existing mobile broadcasting tool such as ManyCam on iOS or
RTMPCamera on Android to broadcast into Livepeer.

Instead of setting the rtmp output to `localhost:1935`, you'll want to
set it to a remote Livepeer node that you are running on a
server. Replace `localhost` with the IP address of the server.

Make sure the node is started with `-currentManifest` to make this process easier.

## Reaching Many Viewers at Scale

If you would like to take your output video and make it available via a 
conventional CDN, then you have the option to do so.

* Run a Livepeer node on a server, and expose ports `8935 and 1935`.
* Boot up the livepeer node with the --rtmpAddr 0.0.0.0 and -httpAddr 0.0.0.0 flags
* Configure your CDN to cache video content running at
`http://hostname:8935/stream/{streamID}.m3u8`

Now any requests that come into your site or DApp for video streaming
through Livepeer will pull the video from the network, but will be
served off of a CDN. In the future, we would like to replace this
option with the p2p network that Livepeer forms around a stream.

## FAQ
Check out our Broadcasting Forum for [frequently asked questions](https://forum.livepeer.org/c/using-livepeer-for-broadcasting)

If you have any questions, reach out to Chris Hobcroft on our [community chat](https://discord.gg/RR4kFAh)
