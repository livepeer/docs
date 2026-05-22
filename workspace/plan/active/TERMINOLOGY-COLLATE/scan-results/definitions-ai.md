# AI Domain — Definitions & Sources

## ai:pipeline

| Term | Definition | Source URL |
|------|-----------|------------|
| AI Pipeline | An end-to-end construct orchestrating data flow through processing steps (input, preprocessing, inference, post-processing) to produce output. | https://huggingface.co/docs/transformers/en/main_classes/pipelines |
| Audio-to-text | Converting spoken language audio into written text using deep neural networks such as encoder-decoder transformers. | https://en.wikipedia.org/wiki/Speech_recognition |
| Batch AI | Running a trained model on a group of inputs asynchronously and collectively, optimizing GPU utilization through parallelization. | https://cloud.google.com/discover/what-is-batch-inference |
| Depth Estimation | Predicting the distance of surfaces in a scene from a viewpoint, producing a depth map where each pixel encodes distance. | https://en.wikipedia.org/wiki/Depth_map |
| Image-to-Image | Transforming an input image into a modified output image guided by a text prompt or conditioning signal. | https://en.wikipedia.org/wiki/Image_translation |
| Image-to-Text | Generating a textual description from an input image, encompassing captioning and optical character recognition. | https://huggingface.co/tasks/image-to-text |
| Image-to-Video | Generating a short video clip conditioned on a single input image, animating the still frame into a temporal sequence. | https://huggingface.co/tasks/image-to-video |
| Intent Classification | Determining the purpose behind a user's text or speech input by assigning it to a predefined category; core to chatbots and voice assistants. | https://labelyourdata.com/articles/machine-learning/intent-classification |
| Live-video-to-video | Applying diffusion or generative models to a continuous video stream frame-by-frame, transforming live input at interactive frame rates. | https://github.com/cumulo-autumn/StreamDiffusion |
| Object Detection | Identifying and localizing instances of object classes within images or video, outputting bounding boxes and class labels. | https://en.wikipedia.org/wiki/Object_detection |
| Pose Estimation | Determining the position and orientation of a person or object by detecting key body joints or landmarks in an image or video. | https://en.wikipedia.org/wiki/Pose_(computer_vision) |
| Segmentation (AI) | Partitioning a digital image into regions by assigning a label to every pixel, grouping pixels with similar visual characteristics. | https://en.wikipedia.org/wiki/Image_segmentation |
| Text-to-Image | Generating an image from a natural language text prompt using a language encoder and diffusion model. | https://en.wikipedia.org/wiki/Text-to-image_model |
| Text-to-Speech | Artificial production of human speech from written text using a front-end phonetic converter and back-end audio synthesizer. | https://en.wikipedia.org/wiki/Speech_synthesis |
| Upscaling | Increasing image or video resolution using AI models that predict and generate high-frequency detail not present in the source. | https://en.wikipedia.org/wiki/Image_scaling |

## ai:model

| Term | Definition | Source URL |
|------|-----------|------------|
| BLIP | Vision-language model by Salesforce using bootstrapped captioning and filtering for image understanding and generation tasks. | https://huggingface.co/docs/transformers/model_doc/blip |
| ControlNet | Neural network adding spatial conditioning controls (edge maps, depth maps, pose skeletons) to pretrained diffusion models for structural guidance. | https://huggingface.co/lllyasviel/ControlNet |
| LoRA | Low-Rank Adaptation — parameter-efficient fine-tuning injecting trainable low-rank matrices into transformer layers while freezing pretrained weights. | https://huggingface.co/docs/diffusers/training/lora |
| Ollama | Open-source tool for running large language models locally with a CLI and OpenAI-compatible REST API, keeping all data on-device. | https://ollama.com/ |
| SAM 2 | Meta's unified foundation model for promptable segmentation in images and videos, using streaming memory for real-time consistent masks. | https://huggingface.co/docs/transformers/en/model_doc/sam2 |
| SDXL | Stable Diffusion XL — advanced text-to-image model with 3x larger UNet and dual text encoders, generating 1024x1024 images. | https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0 |
| Stable Diffusion | Open-source latent diffusion model performing text-to-image generation in compressed latent space, efficient enough for consumer GPUs. | https://en.wikipedia.org/wiki/Stable_Diffusion |
| StreamDiffusion | Optimized real-time diffusion pipeline using stream batching and stochastic similarity filtering for interactive frame rates. | https://github.com/cumulo-autumn/StreamDiffusion |
| SVD (Stable Video Diffusion) | Stability AI's latent diffusion model generating 14-25 frame video clips at 576x1024 from a single input image. | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt |
| Whisper | OpenAI's encoder-decoder transformer for speech recognition and translation, pretrained on 680,000 hours of multilingual audio. | https://huggingface.co/openai/whisper-large-v3 |

## ai:concept

| Term | Definition | Source URL |
|------|-----------|------------|
| Agent | System that perceives its environment and acts autonomously to achieve goals, often powered by LLMs with tools and memory. | https://en.wikipedia.org/wiki/Intelligent_agent |
| BYOC | Bring Your Own Container — deployment pattern where users supply custom Docker containers for AI workloads rather than using pre-built environments. | https://docs.oracle.com/en-us/iaas/data-science/using/jobs-byoc.htm |
| Cold model / Cold start | Latency incurred when a model must be loaded from storage into GPU memory before serving its first request, often 5-90 seconds. | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |
| Diffusion | Generative models learning to produce data by reversing a gradual noising process — forward pass adds noise, learned reverse pass denoises. | https://en.wikipedia.org/wiki/Diffusion_model |
| Embedding | Learned numerical vector representation of data in continuous space where semantically similar items are mapped to nearby points. | https://en.wikipedia.org/wiki/Word_embedding |
| Inference | Running a trained model on new input data to produce predictions or outputs, as opposed to training which updates parameters. | https://en.wikipedia.org/wiki/Inference_engine |
| LLM | Large language model — neural network (typically transformer) trained on massive text corpora to understand and generate natural language. | https://en.wikipedia.org/wiki/Large_language_model |
| Model | Mathematical structure (neural network with learned weights) resulting from training, enabling predictions or generation for new inputs. | https://en.wikipedia.org/wiki/Machine_learning |
| Model Card | Standardized documentation describing a model's intended use, training data, evaluation metrics, limitations, and biases. | https://huggingface.co/docs/hub/en/model-cards |
| Model ID | Unique string identifier for a model on a repository hub, formatted as root-level name or namespaced (e.g., `stabilityai/sdxl`). | https://huggingface.co/docs/hub/en/model-cards |
| Multimodal | AI processing and integrating multiple data types (text, images, audio, video) for tasks like visual QA and cross-modal retrieval. | https://en.wikipedia.org/wiki/Multimodal_learning |
| Real-time AI | Running trained models on live streaming input with latency low enough for interactive speeds, typically under 100ms per inference. | https://www.ultralytics.com/glossary/real-time-inference |
| Sampler | Algorithm controlling the denoising process in diffusion models by defining noise schedule and update rule for each step. | https://huggingface.co/docs/diffusers/en/using-diffusers/scheduler_features |
| Tensor | Multi-dimensional array of numerical values serving as the fundamental data structure in neural network frameworks. | https://en.wikipedia.org/wiki/Tensor_(machine_learning) |
| Warm model | Model already loaded into GPU memory and ready to serve inference requests immediately, eliminating cold-start latency. | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |

## ai:framework

| Term | Definition | Source URL |
|------|-----------|------------|
| ComfyStream | Livepeer open-source project running ComfyUI workflows as real-time media processing backend for AI-powered live stream transformations. | https://github.com/livepeer/comfystream |
| ComfyUI | Open-source node-based graphical interface for building and executing AI image/video generation workflows via visual graph connections. | https://github.com/Comfy-Org/ComfyUI |
| CUDA | NVIDIA's parallel computing platform and API enabling software to use GPUs for general-purpose processing; foundational for deep learning. | https://en.wikipedia.org/wiki/CUDA |
| PyTorch / Torch | Open-source deep learning framework providing GPU-accelerated tensor computation and automatic differentiation for neural networks. | https://en.wikipedia.org/wiki/PyTorch |
| TensorRT | NVIDIA's inference SDK optimizing trained models through quantization, layer fusion, and kernel tuning for low-latency GPU inference. | https://developer.nvidia.com/tensorrt |

## ai:application

| Term | Definition | Source URL |
|------|-----------|------------|
| Autonomous agent | AI system independently pursuing complex goals by perceiving environment, making decisions, using tools, and acting without human supervision. | https://en.wikipedia.org/wiki/Autonomous_agent |
| Avatar | Graphical representation of a user or AI entity, from 2D images to fully animated 3D digital characters for virtual interaction. | https://en.wikipedia.org/wiki/Avatar_(computing) |
| DeAI | Decentralized AI — integrating AI computation within decentralized networks using blockchain for trustless, distributed inference and training. | https://arxiv.org/abs/2411.17461 |
| Digital twin | Virtual replica of a physical object or system continuously synchronized with real-world data for simulation and predictive analysis. | https://en.wikipedia.org/wiki/Digital_twin |
| Embody | Giving an AI agent a physical or virtual body that interacts with an environment through sensors and actuators. | https://en.wikipedia.org/wiki/Embodied_agent |
| Generative video | AI-produced video created by models (text-to-video, image-to-video) that synthesize novel temporal frame sequences from prompts. | https://en.wikipedia.org/wiki/Text-to-video_model |
| Interactive media | Digital content dynamically responding to user input in real time, combining text, images, audio, video, and animations. | https://en.wikipedia.org/wiki/Interactive_media |
| NPC | Non-player character in a game or simulation not controlled by a human, increasingly powered by AI for dynamic interactions. | https://en.wikipedia.org/wiki/Non-player_character |
| SLAM | Simultaneous Localization and Mapping — constructing a map of an unknown environment while tracking own location within it. | https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping |
| Style transfer | Using deep neural networks to apply the visual style of one image to the content of another via CNN feature activation optimization. | https://en.wikipedia.org/wiki/Neural_style_transfer |
| Synthetic data | Artificially generated data produced by algorithms rather than real-world events, used for training when real data is scarce or sensitive. | https://en.wikipedia.org/wiki/Synthetic_data |
| World model | Neural network representing and predicting environment dynamics, enabling an AI agent to plan actions by simulating outcomes internally. | https://en.wikipedia.org/wiki/Generative_artificial_intelligence |
