# Broadcasting on Livepeer

Broadcasting to Livepeer using existing broadcasting tools is
easy. After a Livepeer node is running, it exposes an RTMP interface
on port 1935. You can broadcast into Livepeer using this port.

## Install Livepeer and Have the Node Running

The following instructions assume that you have followed the
[installation instructions] (http://livepeer.readthedocs.io/en/latest/node.html#installation)

and [have the node running](node.html).

Note: make sure you have deposited ETH if you would like to broadcast.

## Broadcasting Using OBS

Start by reading our [step by step guide](https://github.com/livepeer/wiki/wiki/How-to:-set-up-a-broadcasting-node-using-Livepeer-and-OBS#you-are-now-ready-to-broadcast-on-livepeer)

It is far more convenient to broadcast using existing tools that have
features for screen capture, composites, overlays, multiple video and
audio sources, etc. One such tool is
[OBS](https://obsproject.com/). To use OBS you have to change one
setting:

* Settings -> Stream -> URL. Set it as `rtmp://localhost:1935/movie`
* Start streaming as usual.

The tricky part is that OBS is not aware of the Livepeer Manifest
IDs. You can find the manifestID in the console output of the Livepeer
node. Or you can request it from the Livepeer node through curl:

```
$ curl http://localhost:8935/manifestID
```

Now that you have the manifestID you can share it or play the stream as
described above using the web player or ffplay.

## Playing the Stream

You can request your stream in a number of ways.

* Request the stream using your channel through the per-broadcaster [web player](http://media.livepeer.org). Use the Eth address that is printed out in the Livepeer CLI or the node output. 
* Request the stream using the manifest ID through the [web player](http://media.livepeer.org/player.html).
* Request the stream using `ffplay`

```
$ ffplay http://localhost:8935/stream/{streamID}.m3u8
```

When you're finished broadcasting you can type `q` to stop the stream.


## Broadcasting Using FFMPEG

To broadcast using ffmpeg you can try the following command:

For Mac:
```
ffmpeg -f avfoundation -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie
```

For Linux:
```
ffmpeg -f dshow -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie
```

As described above, you can now find the manifestID and share it to play.

## Broadcasting from Mobile

There is not currently a natively Livepeer aware mobile app, but much
like [using OBS](#broadcasting-using-obs), as described above, you can
use any existing mobile broadcasting tool such as ManyCam on iOS or
RTMPCamera on Android to broadcast into Livepeer.

Instead of setting the rtmp output to `localhost:1935`, you'll want to
set it to a remote Livepeer node that you are running on a
server. Replace `localhost` with the IP address of the server.

The tricky part will be finding the manifestID since the app
won't be aware.

A good solution to this would be for someone to fork one of the open
source mobile broadcasting apps to make it Livepeer aware, by fetching
the manifestID from the server and displaying it when the user starts
broadcasting. Another solution we're working on is making web and
mobile native Livepeer clients, so there's no need to connect to a
remote node.

## Reaching Many Viewers at Scale

Any user on the Livepeer network who has the ID for your stream should
be able to request and access it. The current relay-based solution for
delivering the video works in a p2p fashion, but may be susceptible to
user churn or low bandwidth connections. Future versions of the
software promise resilience against this by implementing more robust
p2p protocols.

In the meantime however, if you would like to take your output video
and make it available via a conventional CDN, then you have the option
to do so.

* Run a Livepeer node on a server, and expose port `8935`.
* Configure your CDN to cache video content running at
`http://hostname:8935/stream/{streamID}.m3u8`

Now any requests that come into your site or DApp for video streaming
through Livepeer will pull the video from the network, but will be
served off of a CDN. In the future, we would like to replace this
option with the p2p network that Livepeer forms around a stream.

## FAQ
Check out our Broadcasting Forum for [frequently asked questions] (https://forum.livepeer.org/c/using-livepeer-for-broadcasting)

If you have any questions, reach out to Chris Hobcroft on our [community chat] (https://discord.gg/RR4kFAh)
