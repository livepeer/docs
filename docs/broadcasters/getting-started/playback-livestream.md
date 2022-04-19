---
title: Playback a Livestream
sidebar_position: 5
---

## Playback a Livestream

### Using the Aqueduct Dashboard

The Aqueduct dashboard (powered by MistServer) simplifies the process of serving a stream. To display your stream, replace the stream name placeholders with the stream name from the Aqueduct dashboard on port 4242 and embed the following code in your page.

```html
<div class="mistvideo" id="<my_id>">
  <noscript>
    <a href="http://localhost:8080/<stream_name>.html" target="_blank">
      Click here to play this video
    </a>
  </noscript>
  <script>
    var a = function(){
      mistPlay("afptest",{
        target: document.getElementById("<my_id>")
      });
    };
    if (!window.mistplayers) {
      var p = document.createElement("script");
      p.src = "http://localhost:8080/player.js"
      document.head.appendChild(p);
      p.onload = a;
    }
    else { a(); }
  </script>
</div>
```


### Using localhost
To play back your livestream, use the playback url that was created for you by
your broadcaster node.

`http://localhost:8080/<stream_name>.html`

### Playback in HTML

```html
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

<video id="my-player" controls style="width: 100%; max-width: 500px" />

<script>
  const videoEl = document.querySelector("#my-player");
  const src = "http://localhost:1935/stream/current.m3u8";
  if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
    // Some browers (safari and ie edge) support HLS natively
    videoEl.src = src;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(videoEl);
  } else {
    console.error("This is a legacy browser that doesn't support MSE");
  }
</script>
```

### Playback in React

```js
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const src = "http://localhost:8935/stream/current.m3u8";

  useEffect(() => {
    let hls;
    if (videoRef.current) {
      const video = videoRef.current;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Some browers (safari and ie edge) support HLS natively
        video.src = src;
      } else if (Hls.isSupported()) {
        // This will run in all other modern browsers
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        console.error("This is a legacy browser that doesn't support MSE");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoRef]);

  return (
    <video
      controls
      ref={videoRef}
      style={{ width: "100%", maxWidth: "500px" }}
    />
  );
}
```

### Playback in Swift

```swift
import SwiftUI
import AVKit

struct ContentView: View {
    private let player = AVPlayer(url: URL(string: "http://localhost:1935/stream/current.m3u8")!)

    var body: some View {
        //  VideoPlayer comes from SwiftUI
        //  Alternatively, you can use AVPlayerLayer or AVPlayerViewController
        VideoPlayer(player: player)
            .onAppear() {
                player.play()
            }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

### Playback in Android

```java
implementation 'com.google.android.exoplayer:exoplayer-hls:2.X.X'

// Create a player instance.
SimpleExoPlayer player = new SimpleExoPlayer.Builder(context).build();
// Set the media item to be played.
player.setMediaItem(MediaItem.fromUri("http://localhost:1935/stream/current.m3u8"));
// Prepare the player.
player.prepare();
```
