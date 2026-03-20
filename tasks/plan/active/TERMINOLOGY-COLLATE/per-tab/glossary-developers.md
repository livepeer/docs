# Glossary — Developers Tab

**Tab folder**: `v2/developers/`
**Date**: 2026-03-20
**Terms**: 73
**Source**: Agent deep-read + classified-by-tag.md

---

### AI Gateway API

**Definition**: REST API endpoint layer for routing AI inference requests through Livepeer's gateway nodes to GPU orchestrators on the network.
**Context**: The AI Gateway API is the primary integration surface for developers submitting AI pipeline requests — text-to-image, live-video-to-video, LLM chat, etc. — to the decentralised Livepeer network without managing infrastructure directly.
**Tags**: `livepeer:product`, `technical:dev`
**Status**: draft
**Pages**: `developers/ai-gateway`, `developers/api`

---

### Arbitrum

**Definition**: A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain while inheriting Ethereum-grade security.
**External**: [Arbitrum documentation](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `developers/protocol`

---

### Batch AI

**Definition**: Running a trained model on a group of inputs asynchronously, optimising GPU utilisation through parallelisation.
**External**: [Google Cloud — What is batch inference?](https://cloud.google.com/discover/what-is-batch-inference)
**Tags**: `ai:pipeline`, `ai:concept`
**Status**: current
**Pages**: `developers/ai-gateway`, `developers/pipelines`

---

### BYOC (Bring Your Own Container)

**Definition**: Deployment pattern where teams supply custom Docker containers for AI workloads, enabling arbitrary Python-based models to run on the Livepeer network.
**Context**: BYOC is the Livepeer mechanism that allows builders and orchestrators to deploy containerised AI workloads — including custom pipelines not natively supported — on network compute.
**Tags**: `livepeer:deployment`, `ai:concept`
**Status**: current
**Pages**: `developers/compute`, `developers/pipelines`

---

### Cascade

**Definition**: Strategic vision for Livepeer to become the leading platform for real-time AI video pipelines, and the associated protocol upgrade enabling the AI inference subnet.
**Context**: Cascade is Livepeer's named strategic phase introducing AI inference as a first-class use case alongside transcoding, activating the AI subnet and GPU orchestrator market.
**Tags**: `livepeer:upgrade`
**Status**: current
**Pages**: `developers/protocol`

---

### Cold Start

**Definition**: Latency incurred when a model must be loaded from storage into GPU memory before the first inference request, often ranging from 5 to 90 seconds.
**Also known as**: Cold model
**External**: [OpenMetal — Cold start latency in private AI inference](https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/)
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### ComfyStream

**Definition**: Livepeer project running ComfyUI workflows as a real-time media processing backend for live streams.
**Context**: ComfyStream is a Livepeer-maintained integration layer that translates ComfyUI node graphs into streaming AI pipelines compatible with the network's live-video-to-video pipeline, enabling GPU orchestrators to serve real-time diffusion transforms.
**Tags**: `livepeer:product`, `ai:framework`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-video`

---

### ComfyUI

**Definition**: Open-source node-based graphical interface for building and executing AI image and video generation workflows.
**External**: [ComfyUI on GitHub](https://github.com/Comfy-Org/ComfyUI)
**Tags**: `ai:framework`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-video`

---

### Daydream

**Definition**: Livepeer's hosted real-time AI video platform turning live camera input into AI-transformed visuals with sub-second latency.
**Context**: Daydream is the flagship consumer-facing product demonstrating Livepeer's real-time AI video capabilities, used by developers as a reference implementation and deployment target for live-video-to-video pipelines.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `developers/ai-video`, `developers/use-cases`

---

### Delegation

**Definition**: LPT holders staking tokens toward orchestrators they trust, sharing in rewards without running infrastructure.
**Context**: Delegation is the mechanism through which passive LPT holders contribute to network security and earn yield without operating nodes, relevant to developer documentation covering the protocol economics layer.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `developers/protocol`

---

### Delegator

**Definition**: Token holder who stakes LPT to an orchestrator to secure the network, participate in governance, and earn rewards.
**Context**: In the developer context, understanding delegators is relevant when reasoning about LPT staking mechanics and the economic security of the network backing developer workloads.
**Tags**: `livepeer:role`, `web3:tokenomics`
**Status**: current
**Pages**: `developers/protocol`

---

### Developer Stack

**Definition**: Set of SDKs, APIs, UI components, and hosted services for integrating video and AI capabilities into applications.
**Context**: The Developer Stack is Livepeer's collective offering for builders — encompassing Livepeer Studio, the AI Gateway API, Livepeer.js, and PyTrickle — enabling video and AI features without managing protocol infrastructure.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `developers/index`, `developers/quickstart`

---

### Diffusion Models

**Definition**: Generative models learning to produce data by reversing a gradual noising process applied during training.
**External**: [Wikipedia — Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-video`

---

### Embedding

**Definition**: Learned numerical vector representation in continuous space where similar items map to nearby points, enabling semantic search and cross-modal reasoning.
**External**: [Wikipedia — Word embedding](https://en.wikipedia.org/wiki/Word_embedding)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Endpoint

**Definition**: Specific URL path where an API receives and processes requests.
**External**: [Wikipedia — Web API](https://en.wikipedia.org/wiki/Web_API)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `developers/api`

---

### Ethereum

**Definition**: A decentralised, open-source blockchain with smart contract functionality; native cryptocurrency is Ether (ETH).
**External**: [Wikipedia — Ethereum](https://en.wikipedia.org/wiki/Ethereum)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `developers/protocol`

---

### FrameProcessor

**Definition**: Pattern in PyTrickle for building real-time video processing applications with custom per-frame processing logic.
**Context**: FrameProcessor is the Livepeer-defined interface in the PyTrickle SDK that developers implement to apply AI transforms to individual video frames within a live stream pipeline.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-video`

---

### Gateway

**Definition**: Node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface for developers.
**Context**: In the developer context, a Gateway is the on-network relay between a developer's application (sending AI or transcoding requests) and the orchestrators performing compute — abstracting payment channels and orchestrator selection.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `developers/ai-gateway`, `developers/architecture`

---

### go-livepeer

**Definition**: Official Go implementation of the Livepeer protocol containing Broadcaster, Orchestrator, Transcoder, Gateway, and Worker roles in a single binary.
**Context**: go-livepeer is the canonical node software that developers running protocol-level infrastructure compile and configure; it is the reference implementation against which all SDK behaviour is defined.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `developers/protocol`, `developers/node`

---

### GPU Operator

**Definition**: An orchestrator operator contributing GPU hardware and AI model capacity to the Livepeer network for inference workloads.
**Context**: GPU Operators are the supply side of the Livepeer AI market; developers routing requests through the AI Gateway API ultimately land on GPU Operator infrastructure.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `developers/compute`, `developers/node`

---

### HLS (HTTP Live Streaming)

**Definition**: HTTP Live Streaming protocol by Apple that encodes video into multiple quality levels with an index playlist for adaptive bitrate delivery.
**External**: [Wikipedia — HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `developers/streaming`, `developers/playback`

---

### Image-to-Image

**Definition**: AI pipeline transforming an input image into a modified output image guided by a text prompt or conditioning signal.
**External**: [Wikipedia — Image translation](https://en.wikipedia.org/wiki/Image_translation)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Image-to-Text

**Definition**: AI pipeline generating a textual description from an input image, encompassing captioning and optical character recognition.
**External**: [Hugging Face — Image-to-Text task](https://huggingface.co/tasks/image-to-text)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Image-to-Video

**Definition**: AI pipeline generating a short video clip conditioned on a single input image, animating a still frame.
**External**: [Hugging Face — Image-to-Video task](https://huggingface.co/tasks/image-to-video)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Inference

**Definition**: Running a trained model on new input data to produce predictions or generated output, as opposed to training the model.
**External**: [Wikipedia — Inference engine](https://en.wikipedia.org/wiki/Inference_engine)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/ai-gateway`, `developers/pipelines`

---

### JWT (JSON Web Token)

**Definition**: JSON Web Token — a compact, URL-safe signed token used to authenticate and authorise requests between parties.
**External**: [Wikipedia — JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token)
**Tags**: `technical:security`
**Status**: draft
**Pages**: `developers/access-control`, `developers/api`

---

### KYC (Know Your Customer)

**Definition**: Know Your Customer — identity verification process for regulatory compliance, requiring users to provide identifying information before accessing certain features.
**External**: [Wikipedia — Know your customer](https://en.wikipedia.org/wiki/Know_your_customer)
**Tags**: `operational:process`
**Status**: current
**Pages**: `developers/access-control`

---

### LIP (Livepeer Improvement Proposal)

**Definition**: Livepeer Improvement Proposal — formal design document describing a proposed change to the protocol, governance process, or ecosystem standard.
**Context**: LIPs are the official mechanism through which protocol changes to Livepeer are proposed, debated, and ratified by stakeholders; developers working at the protocol level reference LIPs for specification authority.
**Tags**: `livepeer:protocol`, `operational:governance`
**Status**: current
**Pages**: `developers/protocol`, `developers/governance`

---

### Live-video-to-video

**Definition**: AI pipeline applying generative models to a continuous video stream frame-by-frame at interactive frame rates.
**External**: [StreamDiffusion GitHub](https://github.com/cumulo-autumn/StreamDiffusion)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-video`

---

### Livepeer Cloud

**Definition**: Platform by the Livepeer Cloud SPE increasing network accessibility with a free community AI gateway and managed developer services.
**Context**: Livepeer Cloud is a hosted offering making it easier for developers to access Livepeer's AI and video infrastructure without self-hosting gateway nodes.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `developers/index`, `developers/api`

---

### Livepeer Studio

**Definition**: Developer platform for adding live and on-demand video experiences to applications, providing stream management, asset storage, analytics, and billing.
**Context**: Livepeer Studio is the primary hosted developer product; it exposes the REST API and dashboard that most developers use to create streams, upload assets, configure access control, and monitor usage.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `developers/index`, `developers/api`

---

### Livepeer.js

**Definition**: JavaScript library for the Livepeer API providing programmatic access to Studio features including stream and asset management.
**Context**: Livepeer.js is the official JavaScript/TypeScript SDK for interacting with Livepeer Studio's REST API, designed for Node.js and browser environments.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `developers/sdks`, `developers/api`

---

### LLM (Large Language Model)

**Definition**: Large language model — neural network trained on massive text corpora to understand and generate natural language.
**External**: [Wikipedia — Large language model](https://en.wikipedia.org/wiki/Large_language_model)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### LoRA (Low-Rank Adaptation)

**Definition**: Low-Rank Adaptation — parameter-efficient fine-tuning technique injecting trainable low-rank matrices into transformer layers to specialise a model without full retraining.
**External**: [Hugging Face — LoRA training](https://huggingface.co/docs/diffusers/training/lora)
**Tags**: `ai:model`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### LPT (Livepeer Token)

**Definition**: ERC-20 governance and staking token used for orchestrator selection, delegation, reward distribution, and network security.
**Context**: LPT is the native utility token of the Livepeer protocol; developers encounter it when understanding the economic layer backing the compute they consume — staked LPT determines which orchestrators process their requests.
**Tags**: `livepeer:protocol`, `web3:token`
**Status**: current
**Pages**: `developers/protocol`, `developers/staking`

---

### Model

**Definition**: Mathematical structure (neural network with learned weights) enabling predictions or generation for new inputs, identified by a model ID and pipeline type.
**External**: [Wikipedia — Machine learning](https://en.wikipedia.org/wiki/Machine_learning)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`

---

### Model Card

**Definition**: Standardised documentation describing a model's intended use, training data, evaluation metrics, and known limitations.
**External**: [Hugging Face — Model Cards](https://huggingface.co/docs/hub/en/model-cards)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Model ID

**Definition**: Unique string identifier specifying which AI model to invoke on a repository hub, for example `stabilityai/stable-diffusion-xl-base-1.0`.
**External**: [Hugging Face — Model Cards](https://huggingface.co/docs/hub/en/model-cards)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Multimodal

**Definition**: AI systems capable of processing and integrating multiple data types — such as text, images, audio, and video — for cross-modal understanding and generation.
**External**: [Wikipedia — Multimodal learning](https://en.wikipedia.org/wiki/Multimodal_learning)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### NaaP (Network as a Platform)

**Definition**: Network-as-a-Product — the framing of delivering the Livepeer Network as a reliable, SLA-backed product layer with improved orchestrator selection and accessibility.
**Context**: NaaP is Livepeer's strategic positioning that developers build on, treating the decentralised network as a dependable infrastructure product rather than a raw peer-to-peer substrate.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `developers/protocol`, `developers/architecture`

---

### Ollama

**Definition**: Open-source tool for running large language models locally with a CLI and OpenAI-compatible REST API.
**External**: [Ollama](https://ollama.com/)
**Tags**: `ai:model`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Orchestrator

**Definition**: Supply-side operator contributing GPU resources, receiving jobs, performing transcoding or AI inference, and earning rewards from the Livepeer protocol.
**Context**: Orchestrators are the network nodes that actually execute the compute underlying developer API calls; understanding orchestrators helps developers reason about latency, availability, and pricing in the network.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `developers/architecture`, `developers/protocol`

---

### Protocol Layer

**Definition**: On-chain layer governing staking, delegation, rewards, and verification via smart contracts deployed on Arbitrum.
**Context**: The Protocol Layer is the blockchain foundation underpinning Livepeer — developers building at the application level interact with it indirectly through the SDK, while protocol developers interact with it directly via smart contracts.
**Tags**: `livepeer:protocol`, `web3:chain`
**Status**: current
**Pages**: `developers/protocol`, `developers/architecture`

---

### PyTorch

**Definition**: Open-source deep learning framework providing GPU-accelerated tensor computation and automatic differentiation, developed by Meta.
**Also known as**: Torch
**External**: [Wikipedia — PyTorch](https://en.wikipedia.org/wiki/PyTorch)
**Tags**: `ai:framework`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### PyTrickle

**Definition**: Python package for real-time video and audio streaming with custom processing, built on the Livepeer Trickle protocol.
**Context**: PyTrickle is the official Python SDK for developers building real-time AI video applications on Livepeer, providing the FrameProcessor interface for per-frame model inference.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `developers/sdks`, `developers/streaming`

---

### Real-time AI

**Definition**: Running AI models on live streaming input with latency low enough for interactive speeds, typically under 100 milliseconds.
**External**: [Ultralytics — Real-time inference](https://www.ultralytics.com/glossary/real-time-inference)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/ai-video`, `developers/pipelines`

---

### Reward Call

**Definition**: On-chain transaction an active orchestrator submits each protocol round to mint and distribute new LPT inflation rewards to itself and its delegators.
**Context**: Developers building tooling or monitoring for the protocol layer encounter reward calls as the primary mechanism by which inflationary LPT is distributed each round.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `developers/protocol`, `developers/staking`

---

### RTMP (Real-Time Messaging Protocol)

**Definition**: Real-Time Messaging Protocol for streaming audio, video, and data over TCP on port 1935, the standard ingest protocol for live broadcasting.
**External**: [Wikipedia — RTMP](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `developers/streaming`, `developers/ingest`

---

### SAM 2

**Definition**: Meta's unified foundation model for promptable segmentation in images and videos with streaming memory, enabling interactive region selection.
**External**: [Hugging Face — SAM 2](https://huggingface.co/docs/transformers/en/model_doc/sam2)
**Tags**: `ai:model`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Sampler

**Definition**: Algorithm controlling the denoising process in diffusion models by defining the noise schedule and update rule for each generation step.
**External**: [Hugging Face — Scheduler features](https://huggingface.co/docs/diffusers/en/using-diffusers/scheduler_features)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `developers/pipelines`

---

### SDXL (Stable Diffusion XL)

**Definition**: Stable Diffusion XL — advanced text-to-image model with a 3× larger UNet and dual text encoders, generating images at 1024×1024 resolution.
**External**: [Hugging Face — SDXL](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
**Tags**: `ai:model`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Segmentation

**Definition**: AI task partitioning a digital image into regions by assigning a semantic label to every pixel, identifying and outlining objects.
**Also known as**: Segmentation (AI)
**External**: [Wikipedia — Image segmentation](https://en.wikipedia.org/wiki/Image_segmentation)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Smart Contract

**Definition**: Self-executing program deployed on a blockchain that automatically enforces agreement terms without intermediaries.
**External**: [Ethereum — Smart contracts](https://ethereum.org/developers/docs/smart-contracts/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `developers/protocol`, `developers/architecture`

---

### Solidity

**Definition**: Statically-typed, contract-oriented programming language for writing smart contracts on Ethereum and EVM-compatible chains.
**External**: [Wikipedia — Solidity](https://en.wikipedia.org/wiki/Solidity)
**Tags**: `technical:dev`, `web3:concept`
**Status**: current
**Pages**: `developers/protocol`, `developers/contracts`

---

### SPE (Special Purpose Entity)

**Definition**: Special Purpose Entity — a treasury-funded organisational unit with a defined scope, fixed budget, and accountability structure for executing ecosystem workstreams.
**Context**: SPEs are Livepeer's primary funding and execution vehicle for ecosystem development; developers encounter SPEs when understanding how Livepeer Foundation allocates resources to tooling, integrations, and infrastructure projects.
**Tags**: `livepeer:entity`, `operational:governance`
**Status**: current
**Pages**: `developers/governance`, `developers/protocol`

---

### StreamDiffusion

**Definition**: Optimised real-time diffusion pipeline using stream batching and stochastic similarity filtering to reduce latency for live video transforms.
**External**: [StreamDiffusion on GitHub](https://github.com/cumulo-autumn/StreamDiffusion)
**Tags**: `ai:model`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-video`

---

### StreamPlace

**Definition**: Project building the video layer for decentralised social platforms, focused on the AT Protocol ecosystem.
**Context**: StreamPlace is a Livepeer ecosystem project demonstrating how the network's streaming infrastructure can underpin decentralised social video applications.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `developers/ai-video`, `developers/use-cases`

---

### Sub-second Latency

**Definition**: Video delivery with end-to-end delay under one second, typically achieved via WebRTC's UDP-based transport.
**External**: [Cloudflare — WebRTC WHIP/WHEP](https://blog.cloudflare.com/webrtc-whip-whep-cloudflare-stream/)
**Tags**: `video:playback`
**Status**: current
**Pages**: `developers/streaming`, `developers/webrtc`

---

### SVD (Stable Video Diffusion)

**Definition**: Stability AI's latent diffusion model generating 14–25 frame video clips at 576×1024 resolution conditioned on a single input image.
**External**: [Hugging Face — Stable Video Diffusion](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt)
**Tags**: `ai:model`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### TensorRT

**Definition**: NVIDIA's inference SDK optimising models through quantisation, layer fusion, and kernel auto-tuning for low-latency GPU inference.
**External**: [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt)
**Tags**: `ai:framework`, `technical:infra`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Text-to-Image

**Definition**: AI pipeline generating an image from a natural language text prompt using a language encoder and a diffusion model.
**External**: [Wikipedia — Text-to-image model](https://en.wikipedia.org/wiki/Text-to-image_model)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Text-to-Speech

**Definition**: AI pipeline synthesising spoken audio from written text using phonetic conversion and audio synthesis models.
**External**: [Wikipedia — Speech synthesis](https://en.wikipedia.org/wiki/Speech_synthesis)
**Tags**: `ai:pipeline`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Torch

**Definition**: Open-source deep learning framework providing GPU-accelerated tensor computation and automatic differentiation, developed by Meta.
**Also known as**: PyTorch
**External**: [Wikipedia — PyTorch](https://en.wikipedia.org/wiki/PyTorch)
**Tags**: `ai:framework`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Transcoding

**Definition**: Direct digital-to-digital conversion of video from one encoding format, resolution, or bitrate to another, producing multiple adaptive renditions.
**External**: [Wikipedia — Transcoding](https://en.wikipedia.org/wiki/Transcoding)
**Tags**: `video:processing`
**Status**: current
**Pages**: `developers/streaming`, `developers/protocol`

---

### Treasury

**Definition**: On-chain pool of LPT and ETH governed by token holders via the LivepeerGovernor contract, used to fund public goods and ecosystem development.
**Context**: The Treasury is the protocol-level funding mechanism for Livepeer ecosystem work; developers building tooling or integrations may apply for treasury grants via the governance process.
**Tags**: `livepeer:protocol`, `economic:treasury`
**Status**: current
**Pages**: `developers/protocol`, `developers/governance`

---

### Trickle Streaming Protocol

**Definition**: Low-latency HTTP-based streaming protocol for real-time media transport between Livepeer nodes, enabling frame-level AI processing on live streams.
**Context**: The Trickle Streaming Protocol is the Livepeer-native transport layer underpinning PyTrickle and the live-video-to-video pipeline, enabling sub-segment-level media delivery for real-time AI transforms.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `developers/streaming`, `developers/architecture`

---

### VRAM (Video RAM)

**Definition**: Video RAM — dedicated GPU memory used for storing graphics data, model weights, and intermediate tensors during AI inference.
**External**: [Wikipedia — Video random-access memory](https://en.wikipedia.org/wiki/Video_random-access_memory)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `developers/pipelines`, `developers/compute`

---

### Warm Model

**Definition**: AI model already loaded into GPU memory and ready to serve inference requests immediately, without cold-start delay.
**External**: [OpenMetal — Cold start latency in private AI inference](https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/)
**Tags**: `ai:concept`, `livepeer:config`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### Webhook

**Definition**: HTTP callback mechanism that sends a POST request to a configured URL when a specific platform event occurs, enabling event-driven integrations.
**External**: [Wikipedia — Webhook](https://en.wikipedia.org/wiki/Webhook)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `developers/api`, `developers/events`

---

### WebRTC

**Definition**: Open standard providing browsers and mobile apps with real-time peer-to-peer audio, video, and data exchange without plugins.
**External**: [Wikipedia — WebRTC](https://en.wikipedia.org/wiki/WebRTC)
**Tags**: `video:protocol`, `technical:protocol`
**Status**: current
**Pages**: `developers/streaming`, `developers/webrtc`

---

### Whisper

**Definition**: OpenAI's encoder-decoder transformer for speech recognition and translation, pre-trained on 680,000 hours of multilingual audio.
**External**: [Hugging Face — Whisper](https://huggingface.co/openai/whisper-large-v3)
**Tags**: `ai:model`
**Status**: current
**Pages**: `developers/pipelines`, `developers/ai-gateway`

---

### World Model

**Definition**: Neural network representing and predicting environment dynamics, enabling an AI agent to plan by simulating future outcomes.
**External**: [Wikipedia — Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
**Tags**: `ai:application`
**Status**: current
**Pages**: `developers/ai-video`, `developers/use-cases`

---

### Zero-to-Hero

**Definition**: Guided learning path taking a developer from no prior knowledge of Livepeer to competent ecosystem participation through structured tutorials and exercises.
**Context**: Zero-to-Hero is Livepeer's flagship onboarding tutorial series for new developers, providing step-by-step guides covering SDK setup, stream creation, AI pipeline integration, and protocol fundamentals.
**Tags**: `livepeer:product`, `operational:process`
**Status**: current
**Pages**: `developers/guides`, `developers/quickstart`
