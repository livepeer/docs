# Solutions Tab — Agent Term Extraction

**Pages scanned**: 113 MDX files in `v2/solutions/`
**Terms found**: ~140

| Term | Type | Page(s) Found | Notes |
|------|------|---------------|-------|
| Livestream | video | solutions/livestreaming, solutions/index | Real-time video broadcast to viewers over the internet |
| VOD | video | solutions/vod, solutions/index | Video on demand — uploaded content available for playback |
| Stream | livepeer-specific | solutions/livestreaming, solutions/api | Livepeer Studio object representing a live broadcast session |
| Session | livepeer-specific | solutions/livestreaming, solutions/api | Individual broadcast instance within a stream object |
| Asset | livepeer-specific | solutions/vod, solutions/api | Livepeer Studio object representing an uploaded video file |
| Playback ID | livepeer-specific | solutions/playback, solutions/api | Unique identifier used to retrieve and play a stream or asset |
| Stream key | livepeer-specific | solutions/livestreaming, solutions/api | Secret credential used by broadcasters to authenticate ingest |
| Ingest | video | solutions/livestreaming, solutions/streaming | Process of receiving live video from a broadcaster |
| Transcoding | video | solutions/transcoding, solutions/index | Converting video between formats, resolutions, or bitrates |
| Recording | video | solutions/livestreaming, solutions/recording | Saving a live stream for later on-demand playback |
| Clip | video | solutions/livestreaming, solutions/clips | Short segment extracted from a live or recorded stream |
| Multistream | livepeer-specific | solutions/multistream, solutions/livestreaming | Simultaneously restreaming to multiple external platforms |
| RTMP | video | solutions/livestreaming, solutions/ingest | Real-Time Messaging Protocol for live video ingest |
| RTMPS | video | solutions/livestreaming, solutions/ingest | TLS-encrypted variant of RTMP for secure ingest |
| WebRTC | video | solutions/webrtc, solutions/livestreaming | Browser-native protocol for ultra-low-latency streaming |
| WHIP | video | solutions/webrtc, solutions/ingest | WebRTC-HTTP Ingestion Protocol for browser-based publishing |
| WHEP | video | solutions/webrtc, solutions/playback | WebRTC-HTTP Egress Protocol for browser-based playback |
| HLS | video | solutions/playback, solutions/livestreaming | HTTP Live Streaming adaptive bitrate delivery protocol |
| B-frames | video | solutions/encoding, solutions/livestreaming | Bidirectional prediction frames improving compression efficiency |
| Keyframe interval | video | solutions/encoding, solutions/livestreaming | Frequency of full reference frames in a video stream |
| Latency | video | solutions/livestreaming, solutions/webrtc | Time delay between video capture and viewer playback |
| Segmentation | video | solutions/transcoding, solutions/encoding | Splitting video into small chunks for processing or delivery |
| OBS | video | solutions/livestreaming, solutions/guides | Open Broadcaster Software used for live streaming |
| ABR | video | solutions/transcoding, solutions/playback | Adaptive Bitrate — adjusting quality based on viewer bandwidth |
| Encrypted asset | technical | solutions/access-control, solutions/vod | Video asset protected by encryption at rest |
| AES-CBC | technical | solutions/access-control | Symmetric encryption cipher used for video asset protection |
| Access control | livepeer-specific | solutions/access-control, solutions/api | Restricting playback to authorized viewers via policies |
| JWT | technical | solutions/access-control, solutions/api | JSON Web Token used for signed playback authentication |
| Webhook | technical | solutions/webhooks, solutions/api | HTTP callback notifying your server of platform events |
| Signing key | livepeer-specific | solutions/access-control, solutions/api | Cryptographic key pair used to sign and verify JWTs |
| Playback policy | livepeer-specific | solutions/access-control, solutions/api | Rules defining who can view a stream or asset |
| Viewership | operational | solutions/analytics, solutions/api | Metrics tracking audience size and engagement |
| TTFF | video | solutions/analytics, solutions/playback | Time to first frame — delay until video starts rendering |
| Rebuffer ratio | video | solutions/analytics, solutions/playback | Percentage of playback time spent buffering |
| C2PA | technical | solutions/provenance, solutions/ai | Content authenticity standard for media provenance tracking |
| Provenance | technical | solutions/provenance, solutions/ai | Verifiable origin and history of media content |
| Segment | video | solutions/transcoding, solutions/encoding | Small chunk of video submitted for transcoding |
| MP4 | video | solutions/vod, solutions/encoding | Standard container format for video files |
| TUS upload | technical | solutions/vod, solutions/api | Resumable upload protocol for large video files |
| API key | technical | solutions/api, solutions/quickstart | Secret credential authenticating requests to the API |
| Bearer token | technical | solutions/api | HTTP authorization header carrying an API key |
| CORS | technical | solutions/api, solutions/player | Cross-origin resource sharing policy for browser requests |
| Dashboard | livepeer-specific | solutions/dashboard, solutions/index | Livepeer Studio web interface for managing streams |
| Project | livepeer-specific | solutions/dashboard, solutions/api | Organizational unit grouping streams and assets in Studio |
| Room | livepeer-specific | solutions/webrtc, solutions/api | Multi-participant WebRTC session managed by Studio |
| Thumbnail | video | solutions/vod, solutions/playback | Preview image extracted from a video stream or asset |
| WebVTT | video | solutions/vod, solutions/subtitles | Web Video Text Tracks format for captions and subtitles |
| Player | livepeer-specific | solutions/player, solutions/playback | Livepeer embeddable video player component |
| SRT | video | solutions/livestreaming, solutions/ingest | Secure Reliable Transport protocol for low-latency ingest |
| Rendition | video | solutions/transcoding, solutions/encoding | Single output variant of a transcoded video at set quality |
| Livepeer Studio | livepeer-specific | solutions/index, solutions/api | Hosted developer platform for video infrastructure |
| Livepeer Network | livepeer-specific | solutions/index, solutions/network | Decentralized network of orchestrators performing video work |
| Broadcaster | livepeer-specific | solutions/livestreaming, solutions/architecture | Entity sending live video to the network for processing |
| Orchestrator | livepeer-specific | solutions/network, solutions/architecture | Node performing transcoding or AI inference on the network |
| Gateway | livepeer-specific | solutions/network, solutions/architecture | Node routing requests from users to orchestrators |
| SPE | livepeer-specific | solutions/governance | Special Purpose Entity managing ecosystem workstreams |
| Streamplace | livepeer-specific | solutions/ai, solutions/use-cases | Platform for building real-time AI video applications |
| Daydream | livepeer-specific | solutions/ai, solutions/use-cases | Real-time interactive AI video generation project |
| World model | ai | solutions/ai, solutions/use-cases | AI model simulating interactive 3D environments |
| StreamDiffusion | ai | solutions/ai, solutions/pipelines | Real-time diffusion pipeline for live video processing |
| Frameworks | technical | solutions/sdks, solutions/api | Libraries and tools for integrating Livepeer services |
| MistServer | technical | solutions/architecture, solutions/network | Open-source media server used in Livepeer infrastructure |
| Embody | ai | solutions/ai, solutions/use-cases | AI embodiment framework for avatar and NPC creation |
| Avatar | ai | solutions/ai, solutions/use-cases | Digital representation driven by AI models |
| AT Protocol | technical | solutions/integrations | Decentralized social networking protocol by Bluesky |
| Fediverse | technical | solutions/integrations | Federation of decentralized social media platforms |
| SDK | technical | solutions/sdks, solutions/api | Software Development Kit for Livepeer integration |
| REST | technical | solutions/api | Representational State Transfer architectural style for APIs |
| JSON | technical | solutions/api | JavaScript Object Notation data interchange format |
| Endpoint | technical | solutions/api | Specific URL path for an API operation |
| CRF | video | solutions/encoding, solutions/transcoding | Constant Rate Factor controlling quality-based encoding |
| CBR | video | solutions/encoding, solutions/transcoding | Constant Bitrate encoding mode for predictable file sizes |
| Resolution | video | solutions/encoding, solutions/transcoding | Pixel dimensions of a video frame (e.g., 1920x1080) |
| Bitrate | video | solutions/encoding, solutions/transcoding | Data throughput rate of an encoded video stream |
