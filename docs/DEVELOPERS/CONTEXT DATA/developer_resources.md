# Developer Resources

This page catalogs all primary tools, SDKs, and reference libraries available to developers integrating with the Livepeer protocol and network infrastructure.

Includes CLI, REST API, JavaScript SDK, and pre-built examples for stream setup, AI task definitions, and Gateway protocol interaction.

---

## 🧰 Core Tools

| Tool | Description | Link |
|------|-------------|------|
| Livepeer CLI | Onchain interactions, node registration, stream mgmt | [GitHub](https://github.com/livepeer/go-livepeer) |
| Studio API | HTTP endpoints for ingest/playback, task submission | [Docs](https://livepeer.studio/docs/api) |
| JavaScript SDK | JS/TS tools for stream lifecycle and publishing | [GitHub](https://github.com/livepeer/js-sdk) |


---

## 🎛 Gateway Protocol Interfaces

| Interface | Description | Docs |
|-----------|-------------|------|
| Gateway PubSub | Task coordination layer for video/AI | [Protocol Doc](../livepeer-network/technical-stack) |
| Worker JSON | Job payload schema for AI execution | [Spec](../ai-inference-on-livepeer/ai-pipelines/overview) |
| gRPC Adapter | Real-time payload stream for low latency | [BYOC Guide](../ai-inference-on-livepeer/ai-pipelines/byoc) |


---

## 📦 Model Registry

| Model | Type | Sample Node | Source |
|-------|------|-------------|--------|
| whisper-large | transcription | whisper-node | [openai/whisper](https://github.com/openai/whisper) |
| sdxl | diffusion/image | diffusion-node | [stability-ai/sdxl](https://github.com/Stability-AI/SDXL) |
| yolov8 | object detection | detect-node | [ultralytics/yolov8](https://github.com/ultralytics/ultralytics) |
| segment-anything | mask generation | sam-node | [facebookresearch/segment-anything](https://github.com/facebookresearch/segment-anything) |


---

## 🧪 Examples & Templates

- [Quickstart Pipeline Payloads](https://github.com/livepeer/recipes)
- [OBS Streaming to Livepeer](https://livepeer.studio/docs/guides/streaming)
- [ComfyStream Setup Scripts](https://github.com/livepeer/comfystream)
- [Whisper + Caption Overlay Template](https://forum.livepeer.org/t/caption-overlay-pipeline)
- [Stable Diffusion + RTMP](https://forum.livepeer.org/t/sdxl-rtmp-live-filter)


---

## 🧠 Learning Resources

- [Livepeer AI Concepts](../ai-inference-on-livepeer/ai-pipelines/overview)
- [AI Gateway Protocol](../livepeer-network/technical-stack)
- [BYOC GPU Setup](../ai-inference-on-livepeer/ai-pipelines/byoc)
- [Job Lifecycle Diagrams](../livepeer-network/job-lifecycle)
- [CLI Command Reference](https://github.com/livepeer/go-livepeer#cli-commands)

📎 End of `resources.mdx`

