# Glossary — Solutions Tab

**Tab folder**: `v2/solutions/`
**Date**: 2026-03-20
**Terms**: 74
**Source**: Agent deep-read + classified-by-tag.md

---

### ABR (Adaptive Bitrate)

**Definition**: Streaming technique that detects viewer bandwidth in real time and switches between pre-encoded bitrate levels to maintain continuous playback.
**External**: [Adaptive bitrate streaming — Wikipedia](https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming)
**Tags**: `video:encoding`, `video:playback`
**Status**: current
**Pages**: `solutions/transcoding`, `solutions/playback`

---

### Access Control

**Definition**: Restricts who can view streams or assets via signed JWTs, API keys, or webhook authorization callbacks.
**Context**: Livepeer Studio implements access control through playback policies attached to stream or asset objects; viewers must present a valid signed JWT or pass a webhook check before the player will resolve the playback URL.
**Tags**: `video:studio`, `technical:security`
**Status**: current
**Pages**: `solutions/access-control`, `solutions/api`

---

### AES-CBC

**Definition**: AES (Advanced Encryption Standard) in Cipher Block Chaining mode — symmetric encryption where each plaintext block is XOR'd with the previous ciphertext block before encryption.
**External**: [Block cipher mode of operation — Wikipedia](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)
**Tags**: `technical:security`
**Status**: current
**Pages**: `solutions/access-control`

---

### API Key

**Definition**: Secret unique identifier sent with API requests to authenticate the caller and authorize access to platform resources.
**External**: [API key — Wikipedia](https://en.wikipedia.org/wiki/API_key)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `solutions/api`, `solutions/quickstart`

---

### Asset

**Definition**: Stored video file (VOD) managed by Livepeer Studio, identified by a unique ID with associated metadata and playback URLs.
**Context**: An asset is the Studio object created when a video file is uploaded; it stores transcoded renditions, a playback ID, and optional access-control settings, and is distinct from the live Stream object.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/vod`, `solutions/api`

---

### AT Protocol

**Definition**: Authenticated Transfer Protocol — open decentralized social networking standard developed by Bluesky, enabling federated identity and data portability.
**External**: [AT Protocol — Wikipedia](https://en.wikipedia.org/wiki/AT_Protocol)
**Tags**: `technical:social`
**Status**: current
**Pages**: `solutions/integrations`

---

### Avatar

**Definition**: Graphical representation of a user or AI entity, ranging from 2D images to fully animated 3D digital characters driven by AI models.
**External**: [Avatar (computing) — Wikipedia](https://en.wikipedia.org/wiki/Avatar_(computing))
**Tags**: `ai:application`
**Status**: current
**Pages**: `solutions/ai`, `solutions/use-cases`

---

### B-frames

**Definition**: Bidirectional predicted video frames that reference both preceding and following frames to achieve the highest compression ratio in a coded video stream.
**External**: [Video compression picture types — Wikipedia](https://en.wikipedia.org/wiki/Video_compression_picture_types)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `solutions/encoding`, `solutions/livestreaming`

---

### Bearer Token

**Definition**: Access token carried in an HTTP Authorization header, used by API clients to authenticate requests without re-sending credentials.
**External**: [Authorization header — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `solutions/api`

---

### Bitrate

**Definition**: Number of bits conveyed per second of video; determines the data throughput rate of an encoded stream, directly affecting quality and file size.
**External**: [Bit rate — Wikipedia](https://en.wikipedia.org/wiki/Bit_rate)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `solutions/encoding`, `solutions/transcoding`

---

### Broadcaster (deprecated)

**Definition**: Legacy term for a node that published streams and submitted video for transcoding; replaced by the term "Gateway" in current protocol documentation.
**Also known as**: Gateway (current term)
**External**: [Livepeer Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md)
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `solutions/livestreaming`

---

### C2PA

**Definition**: Coalition for Content Provenance and Authenticity — open standard producing tamper-evident manifests that record the origin and edit history of media files.
**External**: [C2PA specification](https://c2pa.org/)
**Tags**: `technical:security`
**Status**: current
**Pages**: `solutions/provenance`, `solutions/ai`

---

### CBR (Constant Bitrate)

**Definition**: Video encoding mode where the output data rate remains constant regardless of content complexity, trading compression efficiency for predictable file sizes.
**External**: [Constant bitrate — Wikipedia](https://en.wikipedia.org/wiki/Constant_bitrate)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `solutions/encoding`, `solutions/transcoding`

---

### Clip

**Definition**: Short excerpt from a livestream or VOD asset defined by start and end timestamps, used for highlights or shareable segments.
**Context**: Livepeer Studio exposes a Clip API that accepts a stream or session ID and timestamp range; the resulting clip is stored as a new asset with its own playback ID.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/clips`

---

### CORS (Cross-Origin Resource Sharing)

**Definition**: HTTP mechanism that lets servers specify which origins outside their own domain are allowed to make browser requests to their resources.
**External**: [CORS — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `solutions/api`, `solutions/player`

---

### CRF (Constant Rate Factor)

**Definition**: Encoding quality control parameter that targets consistent perceptual quality by adjusting quantization per frame; scale runs 0–51 with lower values producing higher quality.
**External**: [CRF guide — slhck.info](https://slhck.info/video/2017/02/24/crf-guide.html)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `solutions/encoding`, `solutions/transcoding`

---

### Dashboard

**Definition**: Web-based management interface in Livepeer Studio for creating and managing streams, assets, API keys, and viewing analytics.
**Context**: The Livepeer Studio Dashboard is the primary no-code interface; developers use it to generate stream keys, copy playback IDs, configure multistream targets, and inspect viewership data without writing API calls.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/dashboard`, `solutions/index`

---

### Daydream

**Definition**: Livepeer's hosted real-time AI video platform that turns live camera input into AI-transformed visuals with sub-second latency.
**Context**: Daydream is a Livepeer-built product demonstrating the network's real-time AI video capabilities; it provides an interactive interface where users apply generative pipelines to live streams in the browser.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `solutions/ai`

---

### Embody

**Definition**: Special Purpose Entity bringing embodied avatar workloads (Live2D, Three.js, Unreal Engine) into Livepeer as intelligent public pipelines.
**Context**: Embody is a Livepeer ecosystem SPE focused on avatar and NPC creation; it extends the network with pipelines that animate virtual characters driven by AI inference, enabling real-time interactive digital embodiment.
**Tags**: `livepeer:product`, `ai:application`
**Status**: current
**Pages**: `solutions/ai`, `solutions/use-cases`

---

### Encrypted Asset

**Definition**: Media file protected by encryption at rest so that only authorized parties holding the correct decryption key can access its content.
**Context**: In Livepeer Studio, assets can be marked for encryption; the platform stores the file encrypted and gates decryption through the access-control system, requiring a valid playback policy before serving the key to a player.
**Tags**: `technical:security`, `video:studio`
**Status**: current
**Pages**: `solutions/access-control`, `solutions/vod`

---

### Endpoint

**Definition**: Specific URL path at which an API receives requests and returns responses for a defined operation.
**External**: [Web API — Wikipedia](https://en.wikipedia.org/wiki/Web_API)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `solutions/api`

---

### Fediverse

**Definition**: Federation of social networking platforms that communicate via open protocols such as ActivityPub, enabling cross-platform interaction without centralized control.
**External**: [Fediverse — Wikipedia](https://en.wikipedia.org/wiki/Fediverse)
**Tags**: `technical:social`
**Status**: current
**Pages**: `solutions/integrations`

---

### Frameworks

**Definition**: Product by the MistServer team bridging Livepeer's transcoding infrastructure and real-world applications; provides libraries and integration tools for embedding Livepeer services.
**Context**: Frameworks is a Livepeer ecosystem product (SPE pilot) that packages MistServer-based infrastructure components into developer-friendly libraries, lowering integration effort for new applications.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `solutions/sdks`, `solutions/api`

---

### Gateway

**Definition**: Node that submits jobs, routes video or AI work to orchestrators, manages payment flows, and provides a protocol interface between users and the Livepeer Network.
**Context**: In the Solutions context, the Gateway is the network layer that Livepeer Studio uses internally to deliver transcoding and AI services; developers using Studio APIs interact with it indirectly through the Studio API rather than connecting to gateway nodes directly.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `solutions/network`

---

### HLS (HTTP Live Streaming)

**Definition**: Apple's adaptive streaming protocol that encodes video into multiple quality levels, segments them, and serves them with an index playlist (`.m3u8`) over standard HTTP.
**External**: [HTTP Live Streaming — Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `solutions/playback`, `solutions/livestreaming`

---

### Ingest

**Definition**: Process of receiving a live video stream from a broadcaster's encoder into a media server, typically over RTMP, SRT, or WebRTC/WHIP.
**External**: [Real-Time Messaging Protocol — Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:processing`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/streaming`

---

### JSON (JavaScript Object Notation)

**Definition**: Lightweight, human-readable data interchange format using key-value pairs and ordered lists, widely used for API request and response bodies.
**External**: [JSON — Wikipedia](https://en.wikipedia.org/wiki/JSON)
**Tags**: `technical:protocol`
**Status**: current
**Pages**: `solutions/api`

---

### JWT (JSON Web Token)

**Definition**: Compact, URL-safe token format carrying signed claims used for stateless authentication; in video access control, a signed JWT proves viewer entitlement without a server round-trip for every request.
**External**: [JSON Web Token — jwt.io](https://jwt.io/introduction)
**Tags**: `technical:security`
**Status**: current
**Pages**: `solutions/access-control`, `solutions/api`

---

### Keyframe Interval

**Definition**: Distance in frames or seconds between consecutive keyframes (I-frames); a shorter interval improves seeking accuracy while a longer interval improves compression efficiency.
**External**: [Group of pictures — Wikipedia](https://en.wikipedia.org/wiki/Group_of_pictures)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `solutions/encoding`, `solutions/livestreaming`

---

### Latency

**Definition**: Time delay accumulating between video capture at the source and display on the viewer's device, incurred at every stage of the encode-ingest-transcode-deliver pipeline.
**External**: [Latency — Wikipedia](https://en.wikipedia.org/wiki/Latency_(audio))
**Tags**: `video:playback`, `technical:infra`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/webrtc`

---

### Livepeer Network

**Definition**: The live operational decentralized system of orchestrators, workers, gateways, and broadcasters performing video transcoding and AI inference work.
**Context**: From the Solutions perspective, the Livepeer Network is the underlying compute layer that Livepeer Studio draws on; when a Studio API call triggers transcoding, the work is dispatched to orchestrator nodes on the network rather than processed on centralized servers.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `solutions/index`, `solutions/network`

---

### Livepeer Studio

**Definition**: Hosted developer platform providing APIs, SDKs, and a dashboard for adding live and on-demand video experiences to applications, backed by the Livepeer Network.
**Context**: Livepeer Studio is the primary product entry point for developers; it abstracts network complexity behind REST APIs and a web dashboard, handling stream management, transcoding, access control, analytics, and billing.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `solutions/index`, `solutions/api`

---

### Livestream

**Definition**: Real-time or near-real-time transmission of video and audio over a network to viewers as it is captured, without pre-recording.
**External**: [Live streaming — Wikipedia](https://en.wikipedia.org/wiki/Live_streaming)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/index`

---

### MistServer

**Definition**: Open-source media server providing live video ingest, transcoding, and delivery capabilities, used within Livepeer's infrastructure to handle protocol translation and stream routing.
**External**: [MistServer](https://mistserver.org/)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `solutions/architecture`

---

### MP4

**Definition**: MPEG-4 Part 14 digital multimedia container format for storing video, audio, subtitles, and still images in a single file.
**External**: [MP4 file format — Wikipedia](https://en.wikipedia.org/wiki/MP4_file_format)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/vod`, `solutions/encoding`

---

### Multistream

**Definition**: Simultaneous restreaming of a single live input to multiple external destination platforms (e.g., YouTube, Twitch) in a single broadcast session.
**Context**: Livepeer Studio's Multistream feature lets developers configure multiple target URLs and stream keys on a Stream object; the platform fans out the ingest to all targets automatically, so the broadcaster does not need to send separate streams.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/multistream`, `solutions/livestreaming`

---

### OBS (Open Broadcaster Software)

**Definition**: Free, open-source application for screen capture and live streaming, supporting RTMP, RTMPS, SRT, and WebRTC output protocols.
**External**: [OBS Studio — Wikipedia](https://en.wikipedia.org/wiki/OBS_Studio)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/guides`

---

### Orchestrator

**Definition**: Supply-side operator contributing GPU or CPU resources to the Livepeer Network; receives jobs from gateways, performs transcoding or AI inference, and earns ETH fees and LPT rewards.
**Context**: In the Solutions tab, orchestrators are referenced as the network layer powering Livepeer Studio's transcoding and AI pipeline features; they are distinct from Studio itself and operate independently on the Livepeer Network.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `solutions/network`, `solutions/architecture`

---

### Playback ID

**Definition**: Public identifier for retrieving playback URLs for a stream or asset without exposing the private stream key or internal asset ID.
**Context**: Every Stream and Asset in Livepeer Studio is assigned a Playback ID at creation; clients pass this ID to the playback API or embed it in the player to resolve the correct HLS or WebRTC URL.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/playback`, `solutions/api`

---

### Playback Policy

**Definition**: Access rules (public or JWT-required) attached to a stream or asset that determine what authentication viewers must present before playback is allowed.
**Context**: Livepeer Studio playback policies are configured per-stream or per-asset; setting a policy to `jwt` mode requires every viewer to present a signed JWT from the application's signing key before the player can retrieve a valid playback URL.
**Tags**: `video:studio`, `technical:security`
**Status**: current
**Pages**: `solutions/access-control`, `solutions/api`

---

### Player

**Definition**: Livepeer's embeddable video player component (lvpr.tv) with built-in support for HLS adaptive bitrate streaming and WebRTC low-latency fallback.
**Context**: The Livepeer Player is a hosted iframe-embeddable player and a React SDK component (`@livepeer/react`) that resolves playback from a Playback ID, handles ABR switching, and supports access-controlled streams without custom player configuration.
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/player`, `solutions/playback`

---

### Project

**Definition**: Organizational container in Livepeer Studio that groups related streams, assets, and API keys under a single namespace for multi-tenant or multi-environment management.
**Context**: Studio Projects allow teams to isolate production and staging resources, or separate different customer accounts, each with independent API keys and usage metrics.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/dashboard`, `solutions/api`

---

### Provenance

**Definition**: Verified chain of custody and edit history of a digital asset, confirming its origin and tracking modifications over time.
**External**: [C2PA specification](https://c2pa.org/)
**Tags**: `technical:security`
**Status**: current
**Pages**: `solutions/provenance`, `solutions/ai`

---

### Rebuffer Ratio

**Definition**: Rebuffering duration divided by total playback duration, expressing the fraction of viewing time spent waiting for the player to buffer data.
**External**: [The four elements of video performance — Mux](https://www.mux.com/blog/the-four-elements-of-video-performance)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/analytics`, `solutions/playback`

---

### Recording

**Definition**: Stored archive of a live stream session automatically saved as a VOD asset when recording is enabled on the stream object.
**Context**: Livepeer Studio supports per-stream recording configuration; when enabled, each broadcast session is captured and, upon stream end, made available as a new Asset with its own playback ID.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/recording`

---

### Rendition

**Definition**: Single encoded version of a source video at a specific resolution, bitrate, and codec configuration, produced during transcoding.
**External**: [Video rendition — Cloudinary Glossary](https://cloudinary.com/glossary/video-rendition)
**Tags**: `video:processing`
**Status**: current
**Pages**: `solutions/transcoding`, `solutions/encoding`

---

### Resolution

**Definition**: Pixel dimensions of a video frame expressed as width × height (e.g., 1920×1080); common tiers are 360p, 480p, 720p, 1080p, and 4K.
**External**: [Display resolution — Wikipedia](https://en.wikipedia.org/wiki/Display_resolution)
**Tags**: `video:encoding`
**Status**: current
**Pages**: `solutions/encoding`, `solutions/transcoding`

---

### REST (Representational State Transfer)

**Definition**: Architectural style for distributed hypermedia systems using standard HTTP methods (GET, POST, PUT, DELETE) for stateless resource interaction.
**External**: [REST — Wikipedia](https://en.wikipedia.org/wiki/REST)
**Tags**: `technical:protocol`
**Status**: current
**Pages**: `solutions/api`

---

### Room

**Definition**: Multi-participant WebRTC video session managed by Livepeer Studio, enabling multiple users to simultaneously broadcast and receive audio and video.
**Context**: The Studio Room API creates and manages multi-party WebRTC sessions; each Room has a unique ID and participant tokens, and Livepeer handles the signaling and media routing infrastructure.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/webrtc`, `solutions/api`

---

### RTMP (Real-Time Messaging Protocol)

**Definition**: TCP-based protocol for streaming audio, video, and data over a network, operating on port 1935; the dominant ingest protocol for live broadcasting software.
**External**: [RTMP — Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/ingest`

---

### RTMPS

**Definition**: RTMP transported over a TLS/SSL connection, adding encryption to protect live video streams and metadata during ingest.
**External**: [RTMP — Wikipedia](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/ingest`

---

### SDK (Software Development Kit)

**Definition**: Collection of tools, libraries, and documentation enabling developers to build applications that integrate with a platform's APIs.
**External**: [Software development kit — Wikipedia](https://en.wikipedia.org/wiki/Software_development_kit)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `solutions/sdks`, `solutions/api`

---

### Segment

**Definition**: Time-sliced chunk of a video stream (typically 2–10 seconds) independently addressable over HTTP and used as the unit of transcoding and adaptive delivery.
**External**: [HTTP Live Streaming — Wikipedia](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
**Tags**: `video:processing`, `livepeer:protocol`
**Status**: current
**Pages**: `solutions/transcoding`, `solutions/encoding`

---

### Segmentation

**Definition**: Process of dividing a continuous video stream into short discrete chunks for HTTP-based delivery and adaptive bitrate switching between quality levels.
**External**: [Dynamic Adaptive Streaming over HTTP — Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
**Tags**: `video:processing`
**Status**: current
**Pages**: `solutions/transcoding`, `solutions/encoding`

---

### Session

**Definition**: Active connection between a gateway and orchestrator, or in Studio terms, a single continuous broadcast period on a Stream object with its own metrics, recording, and viewership data.
**Context**: In Livepeer Studio, each time a broadcaster connects to a Stream's ingest endpoint a new Session is created; sessions capture per-broadcast metadata including duration, bitrate, and recording status, and are queryable via the API after the stream ends.
**Tags**: `livepeer:protocol`, `video:studio`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/api`

---

### Signing Key

**Definition**: Public/private cryptographic keypair used to sign and verify JWTs that gate access to access-controlled streams and assets in Livepeer Studio.
**Context**: Developers create Signing Keys in the Studio dashboard or via API; the private key signs viewer JWTs server-side, and Livepeer verifies signatures against the registered public key before granting playback access.
**Tags**: `video:studio`, `technical:security`
**Status**: current
**Pages**: `solutions/access-control`, `solutions/api`

---

### SPE (Special Purpose Entity)

**Definition**: Treasury-funded organizational unit with a defined scope, budget, accountability structure, and term length, used to execute specific ecosystem workstreams.
**Context**: In the Solutions tab, SPEs such as Streamplace, Embody, and Daydream are referenced as platform-layer projects funded through the Livepeer governance treasury to build products and capabilities on top of the network.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `solutions/governance`

---

### SRT (Secure Reliable Transport)

**Definition**: Open-source UDP-based streaming protocol with packet recovery, low latency, and built-in AES encryption, designed for reliable transmission over unpredictable networks.
**External**: [Secure Reliable Transport — Wikipedia](https://en.wikipedia.org/wiki/Secure_Reliable_Transport)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/ingest`

---

### Stream

**Definition**: Top-level Livepeer Studio object representing a live broadcast channel, configured with a stream key, playback ID, transcoding profiles, and optional recording and multistream settings.
**Context**: A Stream is a persistent Studio resource that persists across broadcast sessions; each time a broadcaster connects using the stream key a new Session is created under it, keeping channel configuration stable between live events.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/api`

---

### Stream Key

**Definition**: Secret credential used by broadcasters to authenticate and push live video to a stream's ingest endpoint; equivalent to a password for the RTMP or SRT connection.
**Context**: Stream Keys are generated per Stream object in Livepeer Studio; they should be kept private and rotated if compromised, as anyone holding the key can broadcast to that stream channel.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/livestreaming`, `solutions/api`

---

### StreamDiffusion

**Definition**: Optimized real-time diffusion pipeline using stream batching and stochastic similarity filtering to apply generative image transformations to live video at interactive frame rates.
**External**: [StreamDiffusion — GitHub](https://github.com/cumulo-autumn/StreamDiffusion)
**Tags**: `ai:model`
**Status**: current
**Pages**: `solutions/ai`, `solutions/pipelines`

---

### Streamplace

**Definition**: Project building the video infrastructure layer for decentralized social platforms, focused on the AT Protocol ecosystem and enabling open video publishing.
**Context**: Streamplace is a Livepeer ecosystem project (SPE) that uses Livepeer's transcoding and delivery infrastructure to power video for decentralized social applications built on the AT Protocol (Bluesky) stack.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `solutions/ai`, `solutions/use-cases`

---

### Thumbnail

**Definition**: Reduced-size preview image representing a video frame, used for recognition, navigation, and social sharing previews.
**External**: [Thumbnail — Wikipedia](https://en.wikipedia.org/wiki/Thumbnail)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/vod`, `solutions/playback`

---

### Transcoding

**Definition**: Direct digital-to-digital conversion of video from one encoding configuration to another, producing multiple adaptive renditions at different resolutions and bitrates for cross-device delivery.
**External**: [Transcoding — Wikipedia](https://en.wikipedia.org/wiki/Transcoding)
**Tags**: `video:processing`
**Status**: current
**Pages**: `solutions/transcoding`, `solutions/index`

---

### TTFF (Time to First Frame)

**Definition**: Duration from the moment a viewer presses play to the first video frame rendered on screen; a key quality-of-experience metric for streaming performance.
**External**: [Time to first frame — SVTA Wiki](https://wiki.svta.org/time-to-first-frame/)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/analytics`, `solutions/playback`

---

### TUS Upload

**Definition**: Resumable file upload protocol over HTTP that allows interrupted large file uploads to resume from where they stopped rather than restarting from the beginning.
**External**: [TUS protocol](https://tus.io/)
**Tags**: `technical:security`
**Status**: current
**Pages**: `solutions/vod`, `solutions/api`

---

### Viewership

**Definition**: Audience metrics including view counts, watch time, unique viewers, and geographic distribution tracked for streams and assets.
**Context**: Livepeer Studio provides a Viewership API returning per-asset or per-stream engagement metrics; data is collected from the Livepeer Player or via the `reportPlayback` API endpoint in custom players.
**Tags**: `video:studio`
**Status**: current
**Pages**: `solutions/analytics`, `solutions/api`

---

### VOD (Video on Demand)

**Definition**: Video delivery model allowing users to access pre-recorded content at any time of their choosing, as opposed to a scheduled live broadcast.
**External**: [Video on demand — Wikipedia](https://en.wikipedia.org/wiki/Video_on_demand)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/vod`, `solutions/index`

---

### Webhook

**Definition**: HTTP callback mechanism where a server sends an automated POST request to a configured URL when a specified platform event occurs.
**External**: [Webhook — Wikipedia](https://en.wikipedia.org/wiki/Webhook)
**Tags**: `technical:dev`
**Status**: current
**Pages**: `solutions/webhooks`, `solutions/api`

---

### WebRTC (Web Real-Time Communication)

**Definition**: Open-source project and W3C/IETF standard providing browsers and mobile apps with peer-to-peer real-time audio, video, and data exchange over UDP.
**External**: [WebRTC — Wikipedia](https://en.wikipedia.org/wiki/WebRTC)
**Tags**: `video:protocol`, `technical:protocol`
**Status**: current
**Pages**: `solutions/webrtc`, `solutions/livestreaming`

---

### WebVTT (Web Video Text Tracks)

**Definition**: W3C standard format for displaying timed text (captions, subtitles, chapters, metadata) synchronized with HTML5 video playback.
**External**: [WebVTT — Wikipedia](https://en.wikipedia.org/wiki/WebVTT)
**Tags**: `video:playback`
**Status**: current
**Pages**: `solutions/vod`, `solutions/subtitles`

---

### WHEP (WebRTC-HTTP Egress Protocol)

**Definition**: IETF draft protocol enabling viewers to watch content from streaming services via WebRTC using a standardized SDP offer/answer HTTP exchange.
**External**: [WHEP draft — IETF](https://datatracker.ietf.org/doc/draft-ietf-wish-whep/)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `solutions/webrtc`, `solutions/playback`

---

### WHIP (WebRTC-HTTP Ingestion Protocol)

**Definition**: RFC 9725 standard protocol for WebRTC-based live video ingestion via a simple HTTP SDP offer/answer exchange, enabling browser-native broadcasting without plugins.
**External**: [WHIP — RFC 9725](https://www.rfc-editor.org/rfc/rfc9725.html)
**Tags**: `video:protocol`
**Status**: current
**Pages**: `solutions/webrtc`, `solutions/ingest`

---

### World Model

**Definition**: Neural network that represents and predicts environment dynamics, enabling an AI agent to plan by simulating outcomes rather than acting purely from direct observation.
**External**: [Generative artificial intelligence — Wikipedia](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
**Tags**: `ai:application`
**Status**: current
**Pages**: `solutions/ai`, `solutions/use-cases`
