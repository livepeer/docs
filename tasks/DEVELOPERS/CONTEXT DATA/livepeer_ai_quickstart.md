# Quickstart: AI Inference on Livepeer

This guide helps developers submit and run real-time video AI inference jobs using the Livepeer Gateway and ComfyStream architecture.

Whether you’re building overlays, object detection, transcription, or style transfer—Livepeer’s AI stack offers GPU-executed compute across a distributed node network.

---

## 🧪 Prerequisites

- [Node.js](https://nodejs.org/en) >= 18
- [Livepeer Studio account](https://livepeer.studio) *(for credit auth)*
- RTMP streaming tool (e.g. [OBS](https://obsproject.com/))

Optional:
- Your own AI Worker Gateway (ComfyStream, Whisper, SDXL)
- Python env with `livepeer-ai` plugin (for BYOC)

---

## 🏁 1. Start a Video Stream

Use Livepeer Studio or REST API:

```bash
curl -X POST https://livepeer.studio/api/stream \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{ "name": "ai-demo" }'
```

Stream to the RTMP ingest URL with OBS or `ffmpeg`:
```bash
ffmpeg -re -i myfile.mp4 -c:v libx264 -f flv rtmp://rtmp.livepeer.studio/live/STREAM_KEY
```

---

## 🤖 2. Submit an AI Task

Use REST or GraphQL:

```bash
curl -X POST https://livepeer.studio/api/ai/infer \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "streamId": "stream-id",
    "task": "object-detection",
    "model": "yolov8",
    "params": { "threshold": 0.4 }
  }'
```

### Supported Tasks:
- `whisper-transcribe`
- `whisper-translate`
- `object-detection`
- `style-transfer`
- `segment-blur`
- `custom-pipeline` *(ComfyStream)*

📘 See: [`/ai/tasks`](https://livepeer.studio/docs/api#ai-tasks)

---

## 🛰 3. Monitor AI Job Status

Use session ID or task ID:

```bash
GET /ai/session/{id}
```

Or subscribe to:
```graphql
subscription {
  aiStatusUpdated(streamId: "stream-id") {
    status
    latency
    outputUrl
  }
}
```

---

## 🛠 Custom Pipeline (BYOC)

Run your own AI gateway node:

```bash
git clone https://github.com/livepeer/comfystream
cd comfystream
./run-gateway.sh --model whisper \
  --gpu --publicKey=0x123...
```

Then register it with the protocol (or testnet gateway registry):

```bash
livepeer-cli gateway register \
  --addr=1.2.3.4:5040 --model=whisper
```

---

## 🧪 Example: Frame Translation

```json
POST /ai/infer
{
  "streamId": "xyz",
  "task": "whisper-translate",
  "model": "whisper-large",
  "lang": "es"
}
```

This will convert spoken Spanish to English captions in real time.

---

## 📎 Resources

- [Livepeer AI Docs](https://livepeer.studio/docs/ai)
- [ComfyStream GitHub](https://github.com/livepeer/comfystream)
- [Gateway Node Protocol](../../livepeer-network/technical-stack)
- [AI Pipeline Reference](../ai-pipelines/overview)
- [Deploy a Worker](../deployment-recipes/ai-gateway-on-gcp)

📎 End of `livepeer-ai.mdx`

