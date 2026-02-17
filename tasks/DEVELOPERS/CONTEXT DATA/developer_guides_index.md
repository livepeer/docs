# Developer Guide Index

This page is a curated hub for all Livepeer developer guides, tutorials, and walkthroughs. It links to detailed examples, configuration files, CLI operations, AI inference techniques, and gateway or BYOC setup materials.

Each guide includes sample payloads, scripts, Livepeer SDK usage, or Mermaid diagrams to reduce integration effort for developers.

---

## 🧠 Protocol & Gateway

| Guide | Description |
|-------|-------------|
| [Understanding the Gateway Protocol](../ai-inference-on-livepeer/ai-pipelines/overview) | Pub/sub routing and job claim structure |
| [Registering Gateway Nodes](../ai-inference-on-livepeer/ai-pipelines/byoc) | Serve tasks using your own compute |
| [AI Inference Lifecycle](../livepeer-network/job-lifecycle) | Video flow from stream → frame → task → response |


---

## 🖼 AI Models and Pipelines

| Guide | Description |
|-------|-------------|
| [ComfyStream Setup](../ai-inference-on-livepeer/ai-pipelines/comfystream) | Deploy and run pipelines with ComfyUI-powered nodes |
| [Chaining Whisper + Filters](../ai-inference-on-livepeer/ai-pipelines/overview) | Define multi-step task graphs |
| [BYOC Plugin Development](./byoc) | Add YOLO, ControlNet, or custom nodes |


---

## 🚀 Getting Started

| Guide | Description |
|-------|-------------|
| [RTMP Video Streaming](../building-on-livepeer/quick-starts/video-streaming) | Basic OBS or ffmpeg integration |
| [Transcribing with Whisper](../building-on-livepeer/quick-starts/livepeer-ai) | Submit video + run whisper + overlay captions |
| [AI Quickstarts](../building-on-livepeer/quick-starts/livepeer-ai) | Model types and reference configs |


---

## 🔌 SDK & API Examples

| Guide | Description |
|-------|-------------|
| [Livepeer JS SDK](https://github.com/livepeer/js-sdk) | JavaScript tools for stream sessions and playback |
| [REST API Reference](https://livepeer.studio/docs/api) | HTTP endpoints for stream creation, task submission, etc |
| [Studio Dashboard](https://livepeer.studio/dashboard) | GUI view of jobs, logs, keys, inference stats |


---

## 🛠 Developer Recipes

> See community-contributed [Dev Cookbook](https://github.com/livepeer/recipes) for experimental patterns and component re-use.

Sample entries:
- Convert mp4 + whisper → transcript JSON
- Stable Diffusion prompt → overlay on RTMP
- Blurring faces + uploading to S3

📎 End of `developer-guides.mdx`

