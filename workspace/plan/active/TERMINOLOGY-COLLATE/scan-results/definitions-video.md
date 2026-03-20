# Video Domain — Definitions & Sources

## video:protocol

| Term | Definition | Source URL |
|------|-----------|------------|
| DASH | Dynamic Adaptive Streaming over HTTP (DASH) is an adaptive bitrate streaming technique that enables high-quality streaming by breaking content into small segments served over HTTP at different bitrates. | https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP |
| HLS | HTTP Live Streaming (HLS) is an HTTP-based adaptive bitrate streaming protocol developed by Apple that encodes video into multiple quality levels with an index playlist, allowing players to adapt to network conditions. | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |
| RTMP | Real-Time Messaging Protocol (RTMP) is a communication protocol for streaming audio, video, and data over the Internet, operating on top of TCP using port 1935. | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |
| RTMPS | RTMPS is RTMP over a TLS/SSL connection, adding encryption to protect transmitted media and metadata from interception. | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |
| SRT | Secure Reliable Transport (SRT) is an open-source video transport protocol using UDP with reliable transmission, packet recovery, low latency (default 120ms), and AES encryption. | https://en.wikipedia.org/wiki/Secure_Reliable_Transport |
| WebRTC | Web Real-Time Communication (WebRTC) is an open-source project providing browsers and mobile apps with real-time peer-to-peer audio, video, and data exchange without intermediary servers. | https://en.wikipedia.org/wiki/WebRTC |
| WHEP | WebRTC-HTTP Egress Protocol (WHEP) is a simple HTTP-based protocol allowing WebRTC viewers to watch content from streaming services via a single-shot SDP offer/answer exchange. | https://datatracker.ietf.org/doc/draft-ietf-wish-whep/ |
| WHIP | WebRTC-HTTP Ingestion Protocol (WHIP) is an HTTP-based protocol (RFC 9725) for WebRTC-based ingestion of content into streaming services via SDP offer/answer exchange. | https://www.rfc-editor.org/rfc/rfc9725.html |

## video:encoding

| Term | Definition | Source URL |
|------|-----------|------------|
| ABR (Adaptive Bitrate) | Adaptive bitrate streaming detects a user's bandwidth and device in real time, adjusting stream quality by switching between multiple pre-encoded bitrate levels. | https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming |
| AV1 | AOMedia Video 1 (AV1) is an open, royalty-free video coding format developed by the Alliance for Open Media as a successor to VP9. | https://en.wikipedia.org/wiki/AV1 |
| B-frames | A B-frame (bidirectional predicted picture) references both previous and future frames for prediction, achieving the highest compression ratio among frame types. | https://en.wikipedia.org/wiki/Video_compression_picture_types |
| Bitrate | Bitrate is the number of bits conveyed per unit of time (bit/s); in video it determines data used per second of content, directly affecting quality and file size. | https://en.wikipedia.org/wiki/Bit_rate |
| CBR | Constant bitrate (CBR) is an encoding mode where output data rate remains constant regardless of content complexity, useful for streaming over limited-capacity channels. | https://en.wikipedia.org/wiki/Constant_bitrate |
| Codec | A codec (coder-decoder) is software or hardware that compresses and decompresses digital video, typically using lossy compression to reduce file size. | https://en.wikipedia.org/wiki/Video_codec |
| CRF | Constant Rate Factor (CRF) is a video encoding mode targeting consistent perceptual quality by dynamically adjusting quantization based on frame complexity, on a scale from 0 (lossless) to 51 (lowest). | https://slhck.info/video/2017/02/24/crf-guide.html |
| Encoding ladder | An encoding ladder is a structured set of video renditions at varying resolutions and bitrates designed to deliver optimal viewing across different network conditions and devices. | https://cloudinary.com/glossary/encoding-ladder |
| Fixed segment | A fixed segment is a video segment of predetermined constant duration used in HTTP-based streaming protocols like HLS and DASH. | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |
| Frame rate | Frame rate is the frequency at which consecutive frames are captured or displayed, expressed in fps; common rates include 24 (cinema), 30 (broadcast), and 60 (high-motion). | https://en.wikipedia.org/wiki/Frame_rate |
| GOP | A group of pictures (GOP) is the ordered arrangement of I-frames and inter-frames (P/B-frames) within a coded video stream, beginning with an I-frame. | https://en.wikipedia.org/wiki/Group_of_pictures |
| H.264 | H.264 (Advanced Video Coding / MPEG-4 Part 10) is the most widely used video compression standard, providing good quality at substantially lower bitrates than previous standards. | https://en.wikipedia.org/wiki/Advanced_Video_Coding |
| HEVC / H.265 | High Efficiency Video Coding (HEVC/H.265) is a video compression standard offering 25-50% better compression than H.264 at the same quality, supporting up to 8K UHD. | https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding |
| Keyframe | A keyframe (I-frame) stores a complete image independently without reference to other frames, serving as a reference point for surrounding predictive frames. | https://en.wikipedia.org/wiki/Video_compression_picture_types |
| Keyframe interval | Keyframe interval is the distance (in frames or seconds) between consecutive keyframes; shorter intervals improve seek accuracy, longer intervals improve compression. | https://en.wikipedia.org/wiki/Group_of_pictures |
| Output profile | An output profile is a predefined set of encoding parameters (resolution, bitrate, codec, frame rate) defining a single rendition in a transcoding workflow. | https://en.wikipedia.org/wiki/Advanced_Video_Coding |
| Resolution | Resolution is the pixel dimensions of a video frame (width x height); common resolutions include 720p (HD), 1080p (Full HD), and 2160p (4K UHD). | https://en.wikipedia.org/wiki/Display_resolution |
| VP9 | VP9 is an open, royalty-free video coding format developed by Google as the successor to VP8, competing with HEVC/H.265. | https://en.wikipedia.org/wiki/VP9 |

## video:processing

| Term | Definition | Source URL |
|------|-----------|------------|
| Delivery | Delivery is the stage where encoded video is transmitted from origin servers or CDNs to end-user devices for playback. | https://en.wikipedia.org/wiki/Streaming_media |
| Dispersal | Dispersal is the distribution of encoded video segments across multiple nodes in a decentralized network for redundancy and parallel retrieval. | https://docs.livepeer.org/ |
| Encoding | Encoding is compressing raw video into a digital format using a codec, reducing file size via transform, quantization, and entropy coding. | https://en.wikipedia.org/wiki/Video_codec |
| Ingest | Ingest is receiving a live video stream from a broadcaster's encoder into a media server, typically via RTMP, SRT, or WebRTC. | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |
| Quality Ladder | A quality ladder is the ordered set of encoding profiles ranging from lowest to highest quality, used by adaptive bitrate streaming to select the best rendition. | https://cloudinary.com/glossary/encoding-ladder |
| Rendition | A rendition is a single encoded version of a source video at a specific resolution, bitrate, and codec configuration for adaptive bitrate streaming. | https://cloudinary.com/glossary/video-rendition |
| Segmentation | Segmentation divides a continuous video stream into short discrete chunks for HTTP-based delivery, enabling adaptive bitrate switching and efficient caching. | https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP |
| Segment | A segment is an individual chunk of a video stream (typically 2-10 seconds) independently addressable and downloadable over HTTP, the fundamental delivery unit in HLS and DASH. | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |
| Transcoding | Transcoding is the direct digital-to-digital conversion of video from one encoding to another, used to produce multiple renditions for adaptive streaming. | https://en.wikipedia.org/wiki/Transcoding |

## video:playback

| Term | Definition | Source URL |
|------|-----------|------------|
| Latency | Latency in video streaming is the delay between capture at source and display on the viewer's device, accumulating at every pipeline stage. | https://en.wikipedia.org/wiki/Latency_(audio) |
| Livestream | A livestream is the real-time or near-real-time streaming of video and audio over a network to viewers, differentiating it from on-demand content. | https://en.wikipedia.org/wiki/Live_streaming |
| Low latency / Ultra-low latency | Low latency is streaming delay of 2-5 seconds; ultra-low latency is sub-second delay, crucial for interactive use cases like auctions and real-time communication. | https://www.wowza.com/blog/what-is-low-latency |
| MP4 | MPEG-4 Part 14 (MP4) is a digital multimedia container format for storing video, audio, subtitles, and images, the most widely used container for web video. | https://en.wikipedia.org/wiki/MP4_file_format |
| OBS | OBS Studio is a free, open-source application for screencasting and live streaming, supporting RTMP, HLS, SRT, and WebRTC output. | https://en.wikipedia.org/wiki/OBS_Studio |
| Player | A media player decodes and renders audio/video content, handling adaptive bitrate switching, buffering, DRM, and playback controls. | https://en.wikipedia.org/wiki/Media_player_software |
| Playback info | Playback info is metadata from a streaming platform API providing URLs, protocols, and format details needed to play a specific stream or asset. | https://docs.livepeer.org/api-reference/playback/get |
| Real-time | Real-time streaming is video delivery with latency low enough for bidirectional interaction, typically under 500 milliseconds via WebRTC. | https://en.wikipedia.org/wiki/WebRTC |
| Rebuffer ratio | Rebuffer ratio is rebuffering duration divided by playback duration, measuring how much of the viewer experience is spent waiting for buffering. | https://www.mux.com/blog/the-four-elements-of-video-performance |
| Streaming | Streaming is continuous delivery of multimedia over a network where media is rendered in real time by a player, as opposed to downloading the entire file first. | https://en.wikipedia.org/wiki/Streaming_media |
| Sub-second Latency | Sub-second latency is video delivery with end-to-end delay under one second, typically achieved via WebRTC's UDP-based peer-to-peer transport. | https://blog.cloudflare.com/webrtc-whip-whep-cloudflare-stream/ |
| Thumbnail | A thumbnail is a reduced-size preview image representing a video, used for recognition and navigation in video platforms. | https://en.wikipedia.org/wiki/Thumbnail |
| TTFF (Time to first frame) | Time to First Frame is the duration from play request to first video frame rendered on screen; a critical quality-of-experience metric. | https://wiki.svta.org/time-to-first-frame/ |
| VOD | Video on demand (VOD) allows users to access pre-recorded video content at any time, contrasting with live streaming's real-time consumption. | https://en.wikipedia.org/wiki/Video_on_demand |
| WebVTT | WebVTT (Web Video Text Tracks) is a W3C standard format for displaying timed text (captions, subtitles, chapters) with HTML5 video. | https://en.wikipedia.org/wiki/WebVTT |

## video:studio

| Term | Definition | Source URL |
|------|-----------|------------|
| Access control | Access control restricts who can view streams/assets, enforced via signed JWTs, API keys, or webhook authorization in Livepeer Studio. | https://docs.livepeer.org/developers/guides/access-control-jwt |
| Access key | An access key (API key) authenticates requests to a video platform's API for operations like creating streams and uploading assets. | https://docs.livepeer.org/reference/api |
| Asset | An asset is a stored video file (VOD) managed by the platform, identified by a unique ID with associated metadata and playback URLs. | https://docs.livepeer.org/guides/developing/upload-a-video-asset |
| Broadcast component | A broadcast component is a front-end UI component providing camera/microphone capture and WebRTC-based streaming via WHIP from the browser. | https://docs.livepeer.org/ |
| Clip | A clip is a short excerpt from a livestream or VOD asset defined by start and end timestamps for shareable highlights. | https://docs.livepeer.org/ |
| Dashboard | The dashboard is the web-based management interface for creating and managing streams, assets, API keys, and analytics. | https://docs.livepeer.org/ |
| Multistream / Multistream target | Multistreaming simultaneously broadcasts a live stream to multiple destinations; a target defines a specific destination URL and stream key. | https://docs.livepeer.org/api-reference/multistream/update |
| Playback ID | A playback ID is a public identifier for retrieving playback URLs without exposing the private stream key. | https://docs.livepeer.org/developers/guides/playback-a-livestream |
| Playback policy | A playback policy defines access rules (public or JWT-required) determining authentication requirements for viewers. | https://docs.livepeer.org/developers/guides/access-control-jwt |
| Project | A project is an organizational container grouping related streams, assets, and API keys under a single namespace. | https://docs.livepeer.org/reference/api |
| Recording | A recording is the stored archive of a live stream session, automatically saved as a VOD asset when recording is enabled. | https://docs.livepeer.org/guides/developing/create-a-livestream |
| Room | A room is a multi-participant WebRTC video session enabling multiple users to broadcast and receive audio/video simultaneously. | https://docs.livepeer.org/reference/api |
| Session (Studio) | A session represents a single continuous broadcast period on a stream object, with its own metrics, recording, and viewership data. | https://docs.livepeer.org/developers/guides/monitor-stream-health |
| Signing key | A signing key is a public/private keypair for signing JWTs to gate access-controlled streams and assets. | https://docs.livepeer.org/developers/guides/access-control-jwt |
| Stream | A stream is the top-level object representing a live broadcast channel with configuration (stream key, playback ID, profiles, recording, multistream targets). | https://docs.livepeer.org/guides/developing/create-a-livestream |
| Stream key | A stream key is a secret credential used by broadcasters to authenticate and push live video to the platform's ingest endpoint. | https://docs.livepeer.org/developers/guides/playback-a-livestream |
| Viewership | Viewership is audience metrics including view counts, watch time, unique viewers, and geographic data for streams and assets. | https://docs.livepeer.org/developers/guides/monitor-stream-health |
