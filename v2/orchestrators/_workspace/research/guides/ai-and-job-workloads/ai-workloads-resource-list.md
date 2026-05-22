# Sources and References — AI Workloads Section

Research log for `ai-workloads-overview.mdx`, `batch-ai-setup.mdx`, `realtime-ai-setup.mdx`, and `model-vram-reference.mdx`.

<CustomDivider />

## GitHub Repositories

### Livepeer Core

1. **livepeer/go-livepeer** — Primary orchestrator node software. Source for AI worker flag documentation (`-aiWorker`, `-aiModels`, `-aiModelsDir`), Docker image pull commands, capability advertisement mechanics, and container lifecycle management.
   https://github.com/livepeer/go-livepeer

2. **livepeer/go-livepeer — `ai/worker/docker.go`** — Container image mapping (`livePipelineToImage`). Source for how pipeline names map to Docker images and the integration requirement for custom pipelines.
   https://github.com/livepeer/go-livepeer/blob/master/ai/worker/docker.go

3. **livepeer/ai-worker** — AI runner container. Source for pipeline interface, runner architecture, `dl_checkpoints.sh` model download system, and BYOC external container contract (`/health` endpoint requirement).
   https://github.com/livepeer/ai-worker

4. **livepeer/ai-worker — Pipeline interface** — `runner/src/runner/live/pipelines/interface.py`. Source for the `Pipeline` abstract class, `BaseParams`, `VideoFrame`, `VideoOutput`, `put_video_frame`, `get_processed_video_frame`, `update_params`, `stop`, and `prepare_models` methods used in the custom pipeline development section.
   https://github.com/livepeer/ai-worker/blob/main/runner/src/runner/live/pipelines/interface.py

5. **livepeer/ai-worker — `dl_checkpoints.sh`** — Source for the model download and preparation pipeline, `PREPARE_MODELS` environment variable, and `run_pipeline_prepare` function. Referenced in custom pipeline integration requirements.
   https://github.com/livepeer/ai-worker/blob/main/runner/dl_checkpoints.sh

6. **livepeer/comfystream** — ComfyStream repository. Source for real-time AI pipeline runtime, WebRTC frame ingestion/emission, async frame queue architecture, warm model management, and Livepeer AI worker integration.
   https://github.com/livepeer/comfystream

7. **livepeer/ComfyUI-Stream-Pack** — Custom ComfyUI nodes for Livepeer streaming. Referenced with REVIEW flag — README states no nodes have been added; canonical node locations need Rick confirmation before publishing.
   https://github.com/livepeer/ComfyUI-Stream-Pack

8. **livepeer/docs — `docs-v2` branch** — Source for existing page content, aiModels.json examples, pipeline VRAM notes, Ollama runner setup, SFAST/DEEPCACHE documentation, troubleshooting content, and all existing `rc-ai-pipelines.mdx` and `r-hosting-models.mdx` content.
   https://github.com/livepeer/docs/tree/docs-v2

### Reference Implementations

9. **daydreamlive/scope-runner** — Reference implementation of a custom live pipeline extending the Livepeer `ai-runner` interface. Source for the `Pipeline` class implementation pattern, `frame_queue`, `asyncio.to_thread` pattern for blocking model inference.
   https://github.com/daydreamlive/scope-runner

10. **daydreamlive/scope-runner — `pipeline.py`** — Specific file cited as real-world pipeline implementation reference.
    https://github.com/daydreamlive/scope-runner/blob/dec9ecf7e306892df9cfae21759c23fdf15b0510/src/scope_runner/pipeline/pipeline.py

### Third-party Tools and Models

11. **chengzeyi/stable-fast** — Stable Fast optimisation framework. Source for SFAST flag documentation: up to 25% faster inference, no quality loss, first inference has compilation overhead.
    https://github.com/chengzeyi/stable-fast

12. **horseee/DeepCache** — DeepCache paper and implementation. Source for DEEPCACHE flag documentation: up to 50% faster inference, minor quality impact, not suitable for Lightning/Turbo models.
    https://github.com/horseee/DeepCache

13. **cumulo-autumn/StreamDiffusion** — StreamDiffusion repository. Source for Stream Batch, Residual CFG, Stochastic Similarity Filter, TinyVAE acceleration explanations, and fps benchmarks on RTX 4090.
    https://github.com/cumulo-autumn/StreamDiffusion

14. **facebookresearch/segment-anything-2** — SAM2 repository. Source for `segment-anything-2` pipeline description and model variant names.
    https://github.com/facebookresearch/segment-anything-2

15. **tencent-ailab/IP-Adapter** — IP-Adapter repository. Source for IP-Adapter description in real-time pipeline model types section.
    https://github.com/tencent-ailab/IP-Adapter

16. **IDEA-Research/DWPose** — DWPose repository. Source for pose estimation ControlNet variant in the real-time pipeline model types table.
    https://github.com/IDEA-Research/DWPose

17. **NVIDIA-AI-IOT/torch2trt** — TensorRT compilation for PyTorch models. Referenced in the real-time AI performance tuning section as the tool for TensorRT engine compilation.
    https://github.com/NVIDIA-AI-IOT/torch2trt

<CustomDivider />

## HuggingFace Model Cards

18. **SG161222/RealVisXL_V4.0_Lightning** — Primary recommended model for `text-to-image` pipeline. Source for model name, SDXL Lightning inference step count (4 steps), and sub-2-second inference time on RTX 4090.
    https://huggingface.co/SG161222/RealVisXL_V4.0_Lightning

19. **ByteDance/SDXL-Lightning** — Secondary recommended model for `text-to-image` and primary for `image-to-image`. Source for SDXL-Lightning variant description.
    https://huggingface.co/ByteDance/SDXL-Lightning

20. **openai/whisper-large-v3** — Recommended model for `audio-to-text` pipeline. Source for 12 GB VRAM requirement and per-ms-of-audio pricing unit.
    https://huggingface.co/openai/whisper-large-v3

21. **Salesforce/blip-image-captioning-large** — Recommended model for `image-to-text` pipeline. Source for 4 GB VRAM floor and per-input-pixel pricing unit.
    https://huggingface.co/Salesforce/blip-image-captioning-large

22. **stabilityai/stable-diffusion-x4-upscaler** — Recommended model for `upscale` pipeline.
    https://huggingface.co/stabilityai/stable-diffusion-x4-upscaler

23. **stabilityai/stable-video-diffusion-img2vid-xt-1-1** — Referenced as `image-to-video` pipeline model.
    https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt-1-1

24. **meta-llama/Meta-Llama-3.1-8B-Instruct** — HuggingFace ID for the LLM pipeline recommended model. Source for the model_id vs Ollama tag distinction (HuggingFace: `meta-llama/Meta-Llama-3.1-8B-Instruct`, Ollama: `llama3.1:8b`).
    https://huggingface.co/meta-llama/Meta-Llama-3.1-8B-Instruct

25. **LiheYoung/depth-anything-large-hf** — DepthAnything model for depth-conditioned ControlNet in real-time pipelines.
    https://huggingface.co/LiheYoung/depth-anything-large-hf

26. **facebook/sam2-hiera-large** — SAM2 large model variant referenced in `segment-anything-2` pipeline configuration example.
    https://huggingface.co/facebook/sam2-hiera-large

27. **google/gemma-2-9b-it** — Listed in Ollama-supported models table for LLM pipeline.
    https://huggingface.co/google/gemma-2-9b-it

28. **mistralai/Mistral-7B-Instruct-v0.3** — Listed in Ollama-supported models table for LLM pipeline.
    https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3

29. **suno/bark** — Text-to-speech model referenced in `text-to-speech` pipeline configuration example.
    https://huggingface.co/suno/bark

<CustomDivider />

## Docker Hub

30. **livepeer/go-livepeer** — Official go-livepeer Docker image. Source for Docker pull command and `-master` tag reference.
    https://hub.docker.com/r/livepeer/go-livepeer

31. **livepeer/ai-runner** — Standard AI runner container image. Source for image name used in batch pipeline container management.
    https://hub.docker.com/r/livepeer/ai-runner

32. **tztcloud/livepeer-ollama-runner** — Ollama-based LLM runner image maintained by Cloud SPE (Titan-Z Cloud). Source for image name (`tztcloud/livepeer-ollama-runner:0.1.1`) and the Docker Compose setup pattern.
    https://hub.docker.com/r/tztcloud/livepeer-ollama-runner

33. **ollama/ollama** — Official Ollama Docker image. Used in the LLM runner Docker Compose stack.
    https://hub.docker.com/r/ollama/ollama

34. **nvidia/cuda** — NVIDIA CUDA base images. Referenced in the Docker GPU test command (`docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi`).
    https://hub.docker.com/r/nvidia/cuda

<CustomDivider />

## Academic Papers

35. **StreamDiffusion: A Pipeline-level Solution for Interactive and High-throughput Video Diffusion** — Yahiro et al., December 2023. Source for Stream Batch, Residual CFG, and Stochastic Similarity Filter architecture descriptions.
    https://arxiv.org/abs/2312.12491

36. **Adding Conditional Control to Text-to-Image Diffusion Models (ControlNet)** — Zhang et al., February 2023. Source for ControlNet description in real-time model types section.
    https://arxiv.org/abs/2302.05543

<CustomDivider />

## Livepeer Community and Ecosystem

37. **tools.livepeer.cloud — AI Network Capabilities** — Live network capability dashboard. Referenced throughout as the primary tool for verifying orchestrator pipeline registration and warm/cold status.
    https://tools.livepeer.cloud/ai/network-capabilities

38. **explorer.livepeer.org** — Livepeer Explorer. Referenced for per-orchestrator fee earnings, job count, AI leaderboard, and stake status.
    https://explorer.livepeer.org

39. **Cloud SPE blog — Ollama LLM runner guide** — Primary source for the Ollama-based LLM runner setup: Docker Compose configuration, container naming, model pull commands, `aiModels.json` LLM entry format, and verification steps. Published November 2025, maintained by Titan-Z Cloud (Cloud SPE).
    https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/

40. **Livepeer AI Subnet Announcement — Mirror.xyz** — Referenced as entry point source for Persona E (AI Native operators) and as the origin announcement for the AI subnet launch (Q3 2024).
    https://mirror.xyz/livepeer.eth

41. **Livepeer Forum — Orchestrator category** — Community intelligence source for confirmed operator pain points: `serviceAddr` networking issues, "Orchestrator not available" errors, price-per-pixel strategy discussions, pool vs solo confusion, and AI pipeline configuration questions.
    https://forum.livepeer.org/c/orchestrators/8

42. **Livepeer Discord — #orchestrators channel** — Source for real-world operator questions, VRAM OOM reports, aiModels.json configuration questions, cold-start competitive impact reports, and warm model conflict troubleshooting. Individual messages not directly citable; intelligence incorporated into troubleshooting sections.

43. **Ollama public model library** — Source for Ollama model tag formats (`llama3.1:8b`, `mistral:7b`, `gemma2:9b`) and quantisation levels used in the LLM pipeline models table. Note: carries a REVIEW flag as Livepeer-specific compatibility has not been independently confirmed for all entries.
    https://ollama.com/library

<CustomDivider />

## Products and Applications

44. **Daydream** — Generative AI video platform running on Livepeer. Referenced as a real-world application of the Cascade/live-video-to-video pipeline and as a gateway partner example.
    https://daydream.live

45. **StreamDiffusionTD** — Real-time diffusion pipeline via TouchDesigner, using Livepeer orchestrators for inference. Referenced as a Cascade real-world application.

46. **OBS AI plugins** — Live AI effects for OBS streaming via Livepeer orchestrators. Referenced as a consumer application of the real-time AI pipeline.

<CustomDivider />

## External Documentation

47. **NVIDIA Container Toolkit install guide** — Referenced in troubleshooting section for operators who encounter GPU access failures in Docker.
    https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html

<CustomDivider />

## Videos and Media

48. **Encode Club Real-Time Video AI Bootcamp — Q1 2025**
    Full bootcamp session covering ComfyStream setup, Cascade architecture, live AI video pipelines, and orchestrator setup for real-time AI. Embedded in `ai-workloads-overview.mdx` and referenced in `realtime-ai-setup.mdx`.
    https://www.youtube.com/watch?v=UKWdvJBqrNw

49. **ComfyStream Demo video**
    Live demonstration of ComfyStream running real-time AI video effects via a Livepeer orchestrator node. Embedded in `realtime-ai-setup.mdx`.
    https://www.youtube.com/watch?v=7a6kBrL0RYg

50. **Livepeer AI Subnet Setup — Batch AI Pipelines**
    Batch AI pipeline setup walkthrough. Embedded in `batch-ai-setup.mdx`.
    https://www.youtube.com/watch?v=Kf3fV00XFRU

<CustomDivider />

## Project Files (Internal)

51. **`/mnt/project/ai-runner.md`** — Custom pipeline creation guide (Wonderland internal). Primary source for: Pipeline interface implementation pattern, `PipelineSpec`, `prepare_models()`, Dockerfile structure extending `livepeer/ai-runner:live-base`, `dl_checkpoints.sh` integration pattern, `livePipelineToImage` registration requirement, uv package manager configuration, and scope-runner reference. Also source for the key limitation note: pipeline registry is not fully dynamic and requires manual changes to both `ai-runner` and `go-livepeer` repos.

52. **`/mnt/project/gpu-nodes-ia-planning.md`** — GPU Nodes tab IA planning document (Wonderland internal). Primary source for: all five operator personas (Solo Miner, Pool Worker, Pro Operator, Enterprise, AI Native), confirmed persona pain points from forum and community sources, hardware profiles per persona, journey gap analysis at each of the 6 positions, AI subnet launch date (Q3 2024), Cascade fee growth figure (&gt;131% QoQ in Q3 2025), LLM pipeline launch date (November 2025, Cloud SPE).

53. **`/mnt/project/gpu-nodes-tab-audit.md`** — GPU Nodes tab content audit (Wonderland internal). Source for existing page status assessment (stub vs weak vs outdated), phase-based agent instruction scope, and the specific gaps that the new pages must close that the old pages did not cover. Also source for the job-types.mdx gap analysis citing Cascade, LLM pipeline, and batch vs real-time distinction as missing from pre-AI docs.

<CustomDivider />

## Uploaded Source Files (Replaced by New Pages)

The following eight files were provided as the existing content to be consolidated. All were read in full and their accurate technical content was incorporated:

54. `rc-ai-pipelines.mdx` — AI Pipelines operational guide (published, most complete source)
55. `r-hosting-models.mdx` — Hosting AI Models on an Orchestrator (draft)
56. `x-ai.mdx` — AI Orchestration Quickstart (stub — content not used)
57. `x-batch-ai.mdx` — Batch AI Orchestrator Quickstart (stub — links used)
58. `x-realtime-ai.mdx` — Realtime AI Orchestrator Quickstart (stub — links used)
59. `p-ai-models.mdx` — AI Models placeholder (planned scope extracted)
60. `p-models-and-vram.mdx` — Models and VRAM placeholder (planned scope extracted)
61. `p-realtime-vs-batch.mdx` — Realtime vs Batch placeholder (planned scope extracted)

<CustomDivider />

## Notes on Verification Status

All items marked `{/* REVIEW: */}` in the output MDX files correspond to facts that could not be independently verified from available sources and require SME review before the pages publish:

| REVIEW item | Location | Who to ask |
|---|---|---|
| ComfyUI-Stream-Pack canonical node locations | `realtime-ai-setup.mdx` | Rick |
| `live-video-to-video` model_id exact format | `realtime-ai-setup.mdx` | Rick / j0sh |
| VRAM figures — validate against actual AI runner measurements | `model-vram-reference.mdx` | Rick |
| Pricing figures (Wei amounts) — verify against current Explorer | `model-vram-reference.mdx` | Alison / Rick |
| Ollama model compatibility table — Livepeer-specific testing | `batch-ai-setup.mdx` | Cloud SPE (Titan-Z) |
| Confirm path for `AI-prompt-start` | Multiple pages | Rick (docs.json) |
| Confirm path for `Hosting Models (BYOC)` | `batch-ai-setup.mdx`, `model-vram-reference.mdx` | Rick (docs.json) |

<CustomDivider />

*Total sources: 61 (including 8 uploaded source files). Research date: 13 March 2026.*
