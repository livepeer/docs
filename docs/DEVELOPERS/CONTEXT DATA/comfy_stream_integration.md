# ComfyStream Integration with Livepeer

ComfyStream is a modular AI inference engine that integrates with Livepeer’s Gateway Protocol to execute video frame pipelines on GPU-powered worker nodes.

It extends [ComfyUI](https://github.com/comfyanonymous/ComfyUI) with support for:
- Livepeer-compatible gateway binding
- Real-time stream I/O
- Dynamic node graphs and plugin chaining
- Overlay rendering and metadata export

---

## 🧱 Architecture Overview

```mermaid
flowchart LR
  A[RTMP/HLS Video Stream] --> B[Livepeer Ingest + Frame Split]
  B --> C[Gateway Task Queue]
  C --> D[ComfyStream Worker Node]
  D --> E[Model Execution]
  E --> F[Result Upload / Stream Return]
```

---

## ⚙️ Node Types in ComfyStream

| Node Type     | Description                          | Example Models        |
|---------------|--------------------------------------|------------------------|
| Whisper Node  | Transcribe / translate speech        | whisper-large         |
| Diffusion     | Style transfer, background change    | SDXL, ControlNet      |
| Detection     | Bounding boxes or masks              | YOLOv8, SAM           |
| Blur / Redact | Visual filter                       | SegmentBlur, MediaPipe|

These are exposed as modules in `nodes/*.py` and can be chained in graph format.

---

## 🔧 Example Pipeline: Caption Overlay

```json
{
  "pipeline": [
    { "task": "whisper-transcribe" },
    { "task": "caption-overlay", "font": "Roboto" }
  ]
}
```

ComfyStream automatically converts this to an internal computation graph:
```text
[WhisperNode] --> [TextOverlayNode] --> [OutputStreamNode]
```

---

## 📦 Plugin Support

You can build your own plugins:
- Implement `NodeBase` class from ComfyUI
- Register metadata + parameters
- Declare inputs/outputs for chaining

Example:
```python
class FaceBlurNode(NodeBase):
  def run(self, frame):
    result = blur_faces(frame)
    return result
```

---

## 🔌 Connecting to Livepeer Gateway

In `config.yaml`:
```yaml
gatewayURL: wss://gateway.livepeer.org
models:
  - whisper
  - sdxl
``` 

Start your node:
```bash
python run.py --adapter grpc --model whisper --gpu
```

The ComfyStream worker will:
- Listen to task queues via pub/sub
- Execute pipelines frame-by-frame
- Return inference results as overlays or JSON

---

## 🔍 Debugging Pipelines

ComfyStream logs all:
- Heartbeats to gateway
- Job payloads
- Graph errors
- Output stream metrics

Enable verbose mode:
```bash
python run.py --debug
```

---

## 📎 Resources

- [ComfyStream GitHub](https://github.com/livepeer/comfystream)
- [Livepeer Gateway Protocol](../../livepeer-network/technical-stack)
- [BYOC Setup](./byoc)
- [Plugin Examples](https://forum.livepeer.org/t/comfystream-nodes)
- [Livepeer AI Task Reference](../ai-pipelines/overview)

📎 End of `comfystream.mdx`

