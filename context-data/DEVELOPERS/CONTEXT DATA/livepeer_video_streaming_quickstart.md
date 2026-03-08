# Quickstart: Real-Time Video Streaming with Livepeer

This guide walks you through ingesting, broadcasting, and viewing video using Livepeer’s decentralized infrastructure. It’s perfect for developers building streaming apps, creator tools, or community platforms.

---

## 🧪 Prerequisites

- [Node.js](https://nodejs.org/en) >= 18
- [Livepeer Studio account](https://livepeer.studio) *(for API access and stream keys)*
- RTMP encoder like [OBS](https://obsproject.com/) or `ffmpeg`

Optional:
- Frontend framework (Next.js, React)
- Player (HLS.js, Livepeer Player)

---

## 🎥 1. Create a Stream

Create a stream via REST:

```bash
curl -X POST https://livepeer.studio/api/stream \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "name": "my-first-stream" }'
```

Response:
```json
{
  "id": "abc123",
  "streamKey": "abcd-efgh",
  "ingest": "rtmp://rtmp.livepeer.studio/live"
}
```

---

## 🚀 2. Go Live

Start streaming with `ffmpeg`:

```bash
ffmpeg -re -i input.mp4 -c:v libx264 -preset veryfast -f flv \
  rtmp://rtmp.livepeer.studio/live/abcd-efgh
```

Or via OBS using the ingest URL + stream key.

---

## 🎞 3. Playback

After 10–20 seconds of buffering, Livepeer generates an HLS playback URL:

```bash
GET /api/stream/{id}
```

```json
"playbackUrl": "https://cdn.livepeer.studio/hls/abc123/index.m3u8"
```

Embed in your frontend:

```html
<video controls autoplay>
  <source src="https://cdn.livepeer.studio/hls/abc123/index.m3u8" type="application/x-mpegURL" />
</video>
```

---

## 🧰 SDK Example (React)

```tsx
import { Player } from '@livepeer/react';

<Player playbackId="abc123" autoPlay muted />
```

You can also use `@livepeer/core` for more advanced session and stream handling.

---

## 🧪 Bonus: Enable AI Enhancements

Once you have a stream, you can overlay:

- Captions (Whisper)
- Filters (Stable Diffusion)
- Object detection (YOLO)

Example:
```bash
POST /ai/infer
{
  "streamId": "abc123",
  "task": "whisper-transcribe",
  "model": "whisper-large"
}
```

---

## 📎 Resources

- [Livepeer Studio Dashboard](https://livepeer.studio/dashboard)
- [Livepeer SDK](https://github.com/livepeer/js-sdk)
- [Player Docs](https://livepeer.org/docs/guides/player)
- [OBS Setup Guide](https://obsproject.com/wiki/Streaming-With-OBS)
- [AI Inference](../livepeer-ai)
- [Gateway Tech](../../livepeer-network/technical-stack)

📎 End of `video-streaming.mdx`

