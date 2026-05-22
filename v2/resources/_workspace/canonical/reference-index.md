# Resource Hub — Complete Reference Index

> Compiled 2026-04-13. Covers all v1 and v2 content. Each entry was read by an agent.
> **Legend:** Nav = appears in docs.json navigation. Dup = duplicate or near-duplicate of another entry.

---

## Technical References

API endpoints, SDK documentation, contract addresses, CLI references, protocol specs, configuration flags, hardware specs.

### API References — Livepeer Studio REST API (v1)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| introduction.mdx | v1/api-reference/ | API introduction, REST endpoint overview, base URLs | api | YES | Near-dup of v2/developers/resources/reference/apis.mdx |
| authentication.mdx | v1/api-reference/ | API key authentication, CORS-enabled keys | api | YES | Content folded into v2/developers/guides/ai/authentication.mdx |
| overview.mdx | v1/api-reference/asset/ | Asset endpoints overview | api | YES | Dup: v2/solutions/livepeer-studio/docs/api-reference/assets/overview.mdx |
| upload.mdx | v1/api-reference/asset/ | Upload video assets endpoint | api | YES | Dup: v2/solutions/livepeer-studio/docs/api-reference/assets/upload.mdx |
| upload-via-url.mdx | v1/api-reference/asset/ | Upload assets from URL | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/asset/ | Retrieve specific asset | api | YES | Dup: v2/solutions |
| get-all.mdx | v1/api-reference/asset/ | List all assets | api | YES | Dup: v2/solutions |
| update.mdx | v1/api-reference/asset/ | Update asset metadata | api | YES | Dup: v2/solutions |
| delete.mdx | v1/api-reference/asset/ | Delete asset | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/stream/ | Stream endpoints overview | api | YES | Dup: v2/solutions |
| create.mdx | v1/api-reference/stream/ | Create livestream | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/stream/ | Retrieve stream | api | YES | Dup: v2/solutions |
| get-all.mdx | v1/api-reference/stream/ | List all streams | api | YES | Dup: v2/solutions |
| update.mdx | v1/api-reference/stream/ | Update stream | api | YES | Dup: v2/solutions |
| delete.mdx | v1/api-reference/stream/ | Delete stream | api | YES | Dup: v2/solutions |
| terminate.mdx | v1/api-reference/stream/ | Terminate active stream | api | YES | Dup: v2/solutions |
| create-clip.mdx | v1/api-reference/stream/ | Create clips from livestreams | api | YES | Dup: v2/solutions |
| get-clip.mdx | v1/api-reference/stream/ | Retrieve clip | api | YES | Dup: v2/solutions |
| add-multistream-target.mdx | v1/api-reference/stream/ | Add multistream targets | api | YES | Dup: v2/solutions |
| delete-multistream-target.mdx | v1/api-reference/stream/ | Remove multistream targets | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/session/ | Session endpoints overview | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/session/ | Retrieve session | api | YES | Dup: v2/solutions |
| get-all.mdx | v1/api-reference/session/ | List sessions | api | YES | Dup: v2/solutions |
| get-recording.mdx | v1/api-reference/session/ | Get session recording | api | YES | — |
| get-clip.mdx | v1/api-reference/session/ | Get session clip | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/multistream/ | Multistream endpoints overview | api | YES | Dup: v2/solutions |
| create.mdx | v1/api-reference/multistream/ | Create multistream target | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/multistream/ | Retrieve multistream target | api | YES | Dup: v2/solutions |
| get-all.mdx | v1/api-reference/multistream/ | List multistream targets | api | YES | Dup: v2/solutions |
| update.mdx | v1/api-reference/multistream/ | Update multistream target | api | YES | Dup: v2/solutions |
| delete.mdx | v1/api-reference/multistream/ | Delete multistream target | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/room/ | Room (real-time) endpoints overview | api | YES | Dup: v2/solutions |
| create.mdx | v1/api-reference/room/ | Create room | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/room/ | Retrieve room | api | YES | Dup: v2/solutions |
| update.mdx | v1/api-reference/room/ | Update room | api | YES | Dup: v2/solutions |
| delete.mdx | v1/api-reference/room/ | Delete room | api | YES | Dup: v2/solutions |
| create-user.mdx | v1/api-reference/room/ | Create room user | api | YES | Dup: v2/solutions |
| get-user.mdx | v1/api-reference/room/ | Retrieve room user | api | YES | Dup: v2/solutions |
| update-user.mdx | v1/api-reference/room/ | Update room user | api | YES | Dup: v2/solutions |
| remove-user.mdx | v1/api-reference/room/ | Remove room user | api | YES | Dup: v2/solutions |
| start-egress.mdx | v1/api-reference/room/ | Start room recording/egress | api | YES | Dup: v2/solutions |
| stop-egress.mdx | v1/api-reference/room/ | Stop room recording | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/signing-key/ | Signing key endpoints overview | api | YES | Dup: v2/solutions |
| create.mdx | v1/api-reference/signing-key/ | Create signing key | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/signing-key/ | Retrieve signing key | api | YES | Dup: v2/solutions |
| get-all.mdx | v1/api-reference/signing-key/ | List signing keys | api | YES | Dup: v2/solutions |
| update.mdx | v1/api-reference/signing-key/ | Update signing key | api | YES | Dup: v2/solutions |
| delete.mdx | v1/api-reference/signing-key/ | Delete signing key | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/playback/ | Playback endpoints overview | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/playback/ | Get playback information | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/task/ | Task endpoints overview | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/task/ | Retrieve task | api | YES | Dup: v2/solutions |
| get-all.mdx | v1/api-reference/task/ | List tasks | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/transcode/ | Transcode endpoints overview | api | YES | Dup: v2/solutions |
| create.mdx | v1/api-reference/transcode/ | Create transcode job | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/webhook/ | Webhook endpoints overview | api | YES | Dup: v2/solutions |
| create.mdx | v1/api-reference/webhook/ | Create webhook | api | YES | Dup: v2/solutions |
| get.mdx | v1/api-reference/webhook/ | Retrieve webhook | api | YES | Dup: v2/solutions |
| get-all.mdx | v1/api-reference/webhook/ | List webhooks | api | YES | Dup: v2/solutions |
| update.mdx | v1/api-reference/webhook/ | Update webhook | api | YES | Dup: v2/solutions |
| delete.mdx | v1/api-reference/webhook/ | Delete webhook | api | YES | Dup: v2/solutions |
| overview.mdx | v1/api-reference/viewership/ | Viewership metrics overview | api | YES | Dup: v2/solutions |
| get-realtime-viewership.mdx | v1/api-reference/viewership/ | Real-time viewership data | api | YES | Dup: v2/solutions |
| get-viewership-metrics.mdx | v1/api-reference/viewership/ | Viewership metrics | api | YES | Dup: v2/solutions |
| get-usage-metrics.mdx | v1/api-reference/viewership/ | Usage metrics | api | YES | Dup: v2/solutions |
| get-creators-metrics.mdx | v1/api-reference/viewership/ | Creator metrics | api | YES | Dup: v2/solutions |
| get-public-total-views.mdx | v1/api-reference/viewership/ | Public total views | api | YES | Dup: v2/solutions |

### API References — AI Generate Endpoints (v1)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| overview.mdx | v1/api-reference/generate/ | Generate API overview for AI endpoints | ai, api | YES | — |
| text-to-image.mdx | v1/api-reference/generate/ | Text-to-image generation API | ai, api | YES | Near-dup of v1/ai/api-reference/ versions |
| image-to-image.mdx | v1/api-reference/generate/ | Image-to-image generation API | ai, api | YES | Near-dup |
| image-to-text.mdx | v1/api-reference/generate/ | Image-to-text API | ai, api | YES | Near-dup |
| image-to-video.mdx | v1/api-reference/generate/ | Image-to-video generation API | ai, api | YES | Near-dup |
| llm.mdx | v1/api-reference/generate/ | LLM inference API | ai, api | YES | Near-dup |
| audio-to-text.mdx | v1/api-reference/generate/ | Audio-to-text transcription API | ai, api | YES | Near-dup |
| segment-anything-2.mdx | v1/api-reference/generate/ | Segment Anything 2 API | ai, api | YES | Near-dup |
| text-to-speech.mdx | v1/api-reference/generate/ | Text-to-speech API | ai, api | YES | Near-dup |
| upscale.mdx | v1/api-reference/generate/ | Video upscaling API | ai, api | YES | Near-dup |

### API References — AI API (v1/ai)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| overview.mdx | v1/ai/api-reference/ | AI API introduction and overview | ai, api | YES | Near-dup of v1/api-reference/generate/ |
| text-to-image.mdx | v1/ai/api-reference/ | Text-to-image API reference with detailed params | ai, api | YES | Near-dup |
| image-to-image.mdx | v1/ai/api-reference/ | Image-to-image API reference | ai, api | YES | Near-dup |
| image-to-text.mdx | v1/ai/api-reference/ | Image-to-text API reference | ai, api | YES | Near-dup |
| image-to-video.mdx | v1/ai/api-reference/ | Image-to-video API reference | ai, api | YES | Near-dup |
| llm.mdx | v1/ai/api-reference/ | LLM inference API reference | ai, api | YES | Near-dup |
| audio-to-text.mdx | v1/ai/api-reference/ | Audio-to-text API reference | ai, api | YES | Near-dup |
| segment-anything-2.mdx | v1/ai/api-reference/ | Segment Anything 2 API reference | ai, api | YES | Near-dup |
| text-to-speech.mdx | v1/ai/api-reference/ | Text-to-speech API reference | ai, api | YES | Near-dup |
| upscale.mdx | v1/ai/api-reference/ | Video upscaling API reference | ai, api | YES | Near-dup |

### API References — AI Pipeline Specs (v1/ai)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| overview.mdx | v1/ai/pipelines/ | Overview of all AI pipelines and models | ai | YES | — |
| text-to-image.mdx | v1/ai/pipelines/ | Text-to-image pipeline specification | ai | YES | — |
| image-to-image.mdx | v1/ai/pipelines/ | Image-to-image pipeline spec | ai | YES | — |
| image-to-text.mdx | v1/ai/pipelines/ | Image-to-text pipeline spec | ai | YES | — |
| image-to-video.mdx | v1/ai/pipelines/ | Image-to-video pipeline spec | ai | YES | — |
| llm.mdx | v1/ai/pipelines/ | LLM pipeline spec | ai | YES | — |
| audio-to-text.mdx | v1/ai/pipelines/ | Audio-to-text pipeline spec | ai | YES | — |
| segment-anything-2.mdx | v1/ai/pipelines/ | Segment Anything 2 pipeline spec | ai | YES | — |
| text-to-speech.mdx | v1/ai/pipelines/ | Text-to-speech pipeline spec | ai | YES | — |
| upscale.mdx | v1/ai/pipelines/ | Video upscaling pipeline spec | ai | YES | — |

### API References — Gateway AI API (v2/gateways)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| ai.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | AI API overview for gateway operators | ai, api | YES | — |
| text-to-image.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Text-to-image endpoint reference | ai, api | YES | — |
| image-to-image.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Image-to-image endpoint reference | ai, api | YES | — |
| image-to-video.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Image-to-video endpoint reference | ai, api | YES | — |
| image-to-text.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Image-to-text endpoint reference | ai, api | YES | — |
| text-to-speech.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Text-to-speech endpoint reference | ai, api | YES | — |
| audio-to-text.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Audio-to-text endpoint reference | ai, api | YES | — |
| llm.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | LLM inference endpoint reference | ai, api | YES | — |
| upscale.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Image upscale endpoint reference | ai, api | YES | — |
| segment-anything-2.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Segment Anything 2 endpoint reference | ai, api | YES | — |
| live-video-to-video.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | Live video-to-video endpoint (realtime AI) | ai, api | YES | — |
| health.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | AI health endpoint reference | ai, api | YES | — |
| hardware-info.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | AI hardware info endpoint | ai, api | YES | — |
| hardware-stats.mdx | v2/gateways/resources/reference/technical/api-reference/AI-API/ | AI hardware stats endpoint | ai, api | YES | — |

### API References — Gateway CLI HTTP API (v2/gateways)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| cli-http-api.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | CLI HTTP API portal with all endpoints | api | YES | — |
| status.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Get node status endpoint | api | YES | — |
| protocolparameters.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Protocol parameters endpoint | protocol, api | YES | — |
| registeredorchestrators.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Registered orchestrators endpoint | protocol, api | YES | — |
| setbroadcastconfig.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Set broadcast config endpoint | api | YES | — |
| setmaxpriceforcapability.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Set max price for AI capability | ai, api | YES | — |
| bond.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Bond/stake endpoint | token, api | YES | — |
| unbond.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Unbond endpoint | token, api | YES | — |
| rebond.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Rebond endpoint | token, api | YES | — |
| reward.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Claim rewards endpoint | token, api | YES | — |
| transfertokens.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Transfer tokens endpoint | token, api | YES | — |
| signmessage.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Sign message endpoint | api | YES | — |
| activateorchestrator.mdx | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/ | Activate orchestrator endpoint | protocol, api | YES | — |

### API References — Gateway AI Worker API

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| ai-worker-api.mdx | v2/gateways/resources/reference/technical/api-reference/AI-Worker/ | Complete AI Worker API reference | ai, api | YES | — |
| health.mdx | v2/gateways/resources/reference/technical/api-reference/ | Health endpoint reference | api | YES | — |
| hardware-stats.mdx | v2/gateways/resources/reference/technical/api-reference/ | Hardware stats endpoint | api | YES | — |
| hardware-info.mdx | v2/gateways/resources/reference/technical/api-reference/ | Hardware info endpoint | api | YES | — |

### API References — Livepeer Studio (v2/solutions)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/assets/ | Assets API overview | api | YES | Dup: v1/api-reference/asset/ |
| upload.mdx | v2/solutions/livepeer-studio/docs/api-reference/assets/ | Upload asset endpoint | api | YES | Dup: v1 |
| upload-via-url.mdx | v2/solutions/livepeer-studio/docs/api-reference/assets/ | Upload via URL endpoint | api | YES | Dup: v1 |
| get-all.mdx | v2/solutions/livepeer-studio/docs/api-reference/assets/ | List assets | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/assets/ | Get asset details | api | YES | Dup: v1 |
| update.mdx | v2/solutions/livepeer-studio/docs/api-reference/assets/ | Update asset | api | YES | Dup: v1 |
| delete.mdx | v2/solutions/livepeer-studio/docs/api-reference/assets/ | Delete asset | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Streams API overview | api | YES | Dup: v1 |
| create.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Create stream | api | YES | Dup: v1 |
| get-all.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | List streams | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Get stream | api | YES | Dup: v1 |
| update.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Update stream | api | YES | Dup: v1 |
| delete.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Delete stream | api | YES | Dup: v1 |
| terminate.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Terminate stream | api | YES | Dup: v1 |
| create-clip.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Create clip | api | YES | Dup: v1 |
| get-clip.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Get clip | api | YES | Dup: v1 |
| add-multistream-target.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Add multistream target | api | YES | Dup: v1 |
| delete-multistream-target.mdx | v2/solutions/livepeer-studio/docs/api-reference/streams/ | Delete multistream target | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/multistream/ | Multistream API overview | api | YES | Dup: v1 |
| create.mdx | v2/solutions/livepeer-studio/docs/api-reference/multistream/ | Create multistream target | api | YES | Dup: v1 |
| get-all.mdx | v2/solutions/livepeer-studio/docs/api-reference/multistream/ | List targets | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/multistream/ | Get target | api | YES | Dup: v1 |
| update.mdx | v2/solutions/livepeer-studio/docs/api-reference/multistream/ | Update target | api | YES | Dup: v1 |
| delete.mdx | v2/solutions/livepeer-studio/docs/api-reference/multistream/ | Delete target | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/sessions/ | Sessions API overview | api | YES | Dup: v1 |
| get-all.mdx | v2/solutions/livepeer-studio/docs/api-reference/sessions/ | List sessions | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/sessions/ | Get session | api | YES | Dup: v1 |
| get-clip.mdx | v2/solutions/livepeer-studio/docs/api-reference/sessions/ | Get session clip | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/ | Signing keys API overview | api | YES | Dup: v1 |
| create.mdx | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/ | Create signing key | api | YES | Dup: v1 |
| get-all.mdx | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/ | List signing keys | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/ | Get signing key | api | YES | Dup: v1 |
| update.mdx | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/ | Update signing key | api | YES | Dup: v1 |
| delete.mdx | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/ | Delete signing key | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Rooms API overview | api | YES | Dup: v1 |
| create.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Create room | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Get room | api | YES | Dup: v1 |
| delete.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Delete room | api | YES | Dup: v1 |
| create-user.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Create room user | api | YES | Dup: v1 |
| get-user.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Get room user | api | YES | Dup: v1 |
| update-user.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Update room user | api | YES | Dup: v1 |
| remove-user.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Remove room user | api | YES | Dup: v1 |
| start-egress.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Start room egress | api | YES | Dup: v1 |
| stop-egress.mdx | v2/solutions/livepeer-studio/docs/api-reference/rooms/ | Stop room egress | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/tasks/ | Tasks API overview | api | YES | Dup: v1 |
| get-all.mdx | v2/solutions/livepeer-studio/docs/api-reference/tasks/ | List tasks | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/tasks/ | Get task | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/transcode/ | Transcoding API overview | api | YES | Dup: v1 |
| create.mdx | v2/solutions/livepeer-studio/docs/api-reference/transcode/ | Create transcode job | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/viewership/ | Viewership API overview | api | YES | Dup: v1 |
| get-viewership-metrics.mdx | v2/solutions/livepeer-studio/docs/api-reference/viewership/ | Viewership metrics | api | YES | Dup: v1 |
| get-realtime-viewership.mdx | v2/solutions/livepeer-studio/docs/api-reference/viewership/ | Realtime viewership | api | YES | Dup: v1 |
| get-usage-metrics.mdx | v2/solutions/livepeer-studio/docs/api-reference/viewership/ | Usage metrics | api | YES | Dup: v1 |
| get-public-total-views.mdx | v2/solutions/livepeer-studio/docs/api-reference/viewership/ | Public total views | api | YES | Dup: v1 |
| get-creators-metrics.mdx | v2/solutions/livepeer-studio/docs/api-reference/viewership/ | Creator metrics | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/webhooks/ | Webhooks API overview | api | YES | Dup: v1 |
| create.mdx | v2/solutions/livepeer-studio/docs/api-reference/webhooks/ | Create webhook | api | YES | Dup: v1 |
| get-all.mdx | v2/solutions/livepeer-studio/docs/api-reference/webhooks/ | List webhooks | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/webhooks/ | Get webhook | api | YES | Dup: v1 |
| update.mdx | v2/solutions/livepeer-studio/docs/api-reference/webhooks/ | Update webhook | api | YES | Dup: v1 |
| delete.mdx | v2/solutions/livepeer-studio/docs/api-reference/webhooks/ | Delete webhook | api | YES | Dup: v1 |
| overview.mdx | v2/solutions/livepeer-studio/docs/api-reference/playback/ | Playback API overview | api | YES | Dup: v1 |
| get.mdx | v2/solutions/livepeer-studio/docs/api-reference/playback/ | Get playback info | api | YES | Dup: v1 |

### SDK References

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| introduction.mdx | v1/sdks/ | SDKs overview — JS, Go, Python, React | sdk | YES | Near-dup of v2/developers/resources/reference/sdks.mdx |
| javascript.mdx | v1/sdks/ | JavaScript/TypeScript SDK guide | sdk | YES | — |
| go.mdx | v1/sdks/ | Go SDK guide | sdk | YES | — |
| python.mdx | v1/sdks/ | Python SDK guide | sdk | YES | — |
| getting-started.mdx | v1/sdks/react/ | React SDK getting started | sdk | YES | — |
| Broadcast.mdx | v1/sdks/react/ | Broadcast component reference | sdk | YES | — |
| Player.mdx | v1/sdks/react/ | Player component reference | sdk | YES | — |
| overview.mdx | v1/ai/sdks/ | AI SDKs overview | ai, sdk | YES | — |
| javascript.mdx | v1/ai/sdks/ | JavaScript SDK for AI | ai, sdk | YES | — |
| python.mdx | v1/ai/sdks/ | Python SDK for AI | ai, sdk | YES | — |
| go.mdx | v1/ai/sdks/ | Go SDK for AI | ai, sdk | YES | — |
| apis.mdx | v2/developers/resources/reference/ | Studio REST API and AI Gateway API reference, base URLs, auth, OpenAPI spec | api | YES | — |
| sdks.mdx | v2/developers/resources/reference/ | All official SDKs with versions, install, links (Studio + AI + React UI Kit) | sdk | YES | — |
| pricing-rate-limits.mdx | v2/developers/resources/reference/ | Pricing tiers (Free/Growth/Enterprise), transcoding costs, AI pricing, rate limits | api | YES | — |
| pytrickle.mdx | v2/developers/resources/reference/ | PyTrickle BYOC framework reference — FrameProcessor, StreamServer, TrickleClient | sdk | YES | — |
| api.mdx | v2/solutions/livepeer-studio/docs/reference/ | Studio API reference overview | api | YES | — |
| sdks.mdx | v2/solutions/livepeer-studio/docs/reference/ | Studio SDK reference (JS, Python, Go) | sdk | YES | Near-dup of v2/developers version |
| overview.mdx | v2/solutions/livepeer-studio/docs/reference/ | Reference section overview for Studio | api | YES | — |

### React SDK Components (v1/sdks/react — 36 subcomponent files)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| Root.mdx | v1/sdks/react/broadcast/ | Broadcast Root component | sdk | YES | — |
| Container.mdx | v1/sdks/react/broadcast/ | Broadcast Container component | sdk | YES | — |
| Source.mdx | v1/sdks/react/broadcast/ | Broadcast Source component | sdk | YES | — |
| Video.mdx | v1/sdks/react/broadcast/ | Broadcast Video component | sdk | YES | — |
| Audio.mdx | v1/sdks/react/broadcast/ | Broadcast Audio component | sdk | YES | — |
| Camera.mdx | v1/sdks/react/broadcast/ | Broadcast Camera component | sdk | YES | — |
| Screenshare.mdx | v1/sdks/react/broadcast/ | Broadcast Screenshare component | sdk | YES | — |
| Controls.mdx | v1/sdks/react/broadcast/ | Broadcast Controls component | sdk | YES | — |
| Status.mdx | v1/sdks/react/broadcast/ | Broadcast Status component | sdk | YES | — |
| Error.mdx | v1/sdks/react/broadcast/ | Broadcast Error component | sdk | YES | — |
| Loading.mdx | v1/sdks/react/broadcast/ | Broadcast Loading component | sdk | YES | — |
| Enabled.mdx | v1/sdks/react/broadcast/ | Broadcast Enabled component | sdk | YES | — |
| Fullscreen.mdx | v1/sdks/react/broadcast/ | Broadcast Fullscreen component | sdk | YES | — |
| PictureInPicture.mdx | v1/sdks/react/broadcast/ | Broadcast PiP component | sdk | YES | — |
| Portal.mdx | v1/sdks/react/broadcast/ | Broadcast Portal component | sdk | YES | — |
| useBroadcastContext.mdx | v1/sdks/react/broadcast/ | useBroadcastContext hook | sdk | YES | — |
| get-ingest.mdx | v1/sdks/react/broadcast/ | Get ingest information function | sdk | YES | — |
| Root.mdx | v1/sdks/react/player/ | Player Root component | sdk | YES | — |
| Container.mdx | v1/sdks/react/player/ | Player Container component | sdk | YES | — |
| Poster.mdx | v1/sdks/react/player/ | Player Poster component | sdk | YES | — |
| Video.mdx | v1/sdks/react/player/ | Player Video component | sdk | YES | — |
| Controls.mdx | v1/sdks/react/player/ | Player Controls component | sdk | YES | — |
| Play.mdx | v1/sdks/react/player/ | Player Play button | sdk | YES | — |
| Seek.mdx | v1/sdks/react/player/ | Player Seek component | sdk | YES | — |
| Time.mdx | v1/sdks/react/player/ | Player Time display | sdk | YES | — |
| Volume.mdx | v1/sdks/react/player/ | Player Volume component | sdk | YES | — |
| Fullscreen.mdx | v1/sdks/react/player/ | Player Fullscreen component | sdk | YES | — |
| PictureInPicture.mdx | v1/sdks/react/player/ | Player PiP component | sdk | YES | — |
| Live.mdx | v1/sdks/react/player/ | Player Live indicator | sdk | YES | — |
| Loading.mdx | v1/sdks/react/player/ | Player Loading component | sdk | YES | — |
| Error.mdx | v1/sdks/react/player/ | Player Error component | sdk | YES | — |
| RateSelect.mdx | v1/sdks/react/player/ | Playback rate selector | sdk | YES | — |
| VideoQualitySelect.mdx | v1/sdks/react/player/ | Quality selector | sdk | YES | — |
| Clip.mdx | v1/sdks/react/player/ | Player clip creation | sdk | YES | — |
| Portal.mdx | v1/sdks/react/player/ | Player Portal component | sdk | YES | — |
| get-src.mdx | v1/sdks/react/player/ | Get video source function | sdk | YES | — |
| useMediaContext.mdx | v1/sdks/react/player/ | useMediaContext hook | sdk | YES | — |

### Contract Addresses & Blockchain References

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| contract-addresses.mdx | v1/references/ | Contract addresses on Arbitrum/Ethereum (deprecated, redirects to v2) | contracts | YES | Dup: v2 versions |
| contract-addresses.mdx | v2/resources/references/ | Canonical contract addresses on Arbitrum One and Ethereum Mainnet | contracts | NO | Canonical source |
| livepeer-contract-addresses.mdx | v2/about/resources/reference/ | Canonical verified contract addresses for all protocol contracts | contracts | YES | Near-dup of v2/resources version |
| contract-addresses.mdx | v2/orchestrators/resources/reference/technical/ | Contract addresses relevant to orchestrators | contracts | YES | Near-dup |
| contract-addresses.mdx | v2/gateways/resources/reference/technical/ | Contract addresses relevant to gateways | contracts | YES | Near-dup |
| contracts.mdx | v2/delegators/resources/reference/ | Contract addresses relevant to delegators | contracts | YES | Near-dup |
| blockchain-contracts.mdx | v2/about/protocol/ | Smart contract architecture — BondingManager, TicketBroker, Controller, Governor, Minter | protocol, contracts | YES | — |
| subgraph.mdx | v1/references/ | The Graph subgraph reference for Livepeer protocol | protocol | NO | — |

### go-livepeer Technical References

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| gpu-support.mdx | v1/references/go-livepeer/ | GPU compatibility and support matrix | gpu | YES | Dup: v2 versions |
| hardware-requirements.mdx | v1/references/go-livepeer/ | Hardware requirements reference | infrastructure | YES | Dup: v2 versions |
| bandwidth-requirements.mdx | v1/references/go-livepeer/ | Bandwidth requirements reference | networking | YES | Dup: v2 versions |
| cli-reference.mdx | v1/references/go-livepeer/ | CLI command reference | infrastructure | YES | Dup: v2 versions |
| prometheus-metrics.mdx | v1/references/go-livepeer/ | Prometheus metrics reference | infrastructure | YES | Dup: v2 versions |
| gpu-support.mdx | v2/gateways/resources/reference/go-livepeer/ | GPU hardware compatibility matrix (NVIDIA models) | gpu | YES | Near-dup of v1 + orch version |
| hardware-requirements.mdx | v2/gateways/resources/reference/go-livepeer/ | GPU, CPU, RAM, disk requirements | infrastructure | YES | Near-dup |
| bandwidth-requirements.mdx | v2/gateways/resources/reference/go-livepeer/ | Network bandwidth requirements | networking | YES | Near-dup |
| cli-reference.mdx | v2/gateways/resources/reference/go-livepeer/ | CLI configurable options and flags | infrastructure | YES | Near-dup |
| prometheus-metrics.mdx | v2/gateways/resources/reference/go-livepeer/ | Prometheus metrics reference | infrastructure | YES | Near-dup |
| gpu-support.mdx | v2/orchestrators/resources/reference/ | GPU compatibility matrix for orchestrators | gpu | YES | Near-dup |
| cli-flags.mdx | v2/orchestrators/resources/reference/technical/ | CLI flags reference for go-livepeer | infrastructure | YES | Near-dup |

### Gateway Technical References

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| configuration-flags.mdx | v2/gateways/resources/reference/technical/ | Full reference of gateway configuration flags | infrastructure | YES | — |
| cli-commands.mdx | v2/gateways/resources/reference/technical/ | CLI commands reference | infrastructure | YES | — |
| technical-architecture.mdx | v2/gateways/resources/reference/technical/ | Technical architecture reference | infrastructure | YES | — |
| orchestrator-offerings.mdx | v2/gateways/resources/reference/technical/ | Orchestrator capabilities and offerings reference | infrastructure | NO | — |
| transcoding-options.mdx | v2/gateways/setup/transcoding/ | Transcoding profile options | video | YES | — |

### Protocol & Token References

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| livepeer-token.mdx | v2/about/protocol/ | LPT utility, supply, inflation, staking, rewards, governance | token | YES | — |
| economics.mdx | v2/about/protocol/ | LPT staking, reward distribution, ETH payments, incentive alignment | token | YES | — |
| core-mechanisms.mdx | v2/about/protocol/ | Staking, delegation, reward distribution, inflation, slashing, rounds | protocol | YES | — |
| governance-model.mdx | v2/about/protocol/ | Stake-weighted voting, LIPs, proposal process, on-chain execution | governance | YES | — |
| treasury.mdx | v2/about/protocol/ | On-chain community fund, inflation allocation, grant distribution | governance | YES | — |
| design-philosophy.mdx | v2/about/protocol/ | Why protocol uses staking, inflation, probabilistic payments (draft) | protocol | YES | — |
| technical-architecture.mdx | v2/about/protocol/ | Protocol technical overview — smart contracts, on-chain components | protocol | YES | — |
| protocol-parameters.mdx | v2/delegators/resources/reference/ | Governance-controlled values: unbonding period, inflation, thresholds | protocol | YES | — |
| api-support-matrix.mdx | v1/references/ | Video codec and format support matrix | video | YES | — |
| network-metrics.mdx | v2/about/resources/reference/ | Links to analytics, explorer, and metrics dashboards | protocol | YES | — |
| technical-roadmap.mdx | v2/about/resources/reference/ | Links to blog posts covering network vision and roadmap | protocol | YES | — |

### Operator Infrastructure References

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| model-support.mdx | v2/developers/build/ | AI pipeline types, model architectures, GPU VRAM requirements, status | ai, gpu | YES | — |
| model-demand-reference.mdx | v2/orchestrators/guides/ai-and-job-workloads/ | GPU memory planning — VRAM by pipeline, warm models, multi-GPU, pricing | ai, gpu | YES | — |
| requirements.mdx | v2/orchestrators/guides/operator-considerations/ | GPU support policy, NVENC limits, VRAM by pipeline, readiness checklist | gpu, infrastructure | YES | — |
| prepare.mdx | v2/orchestrators/setup/ | Hardware requirements for 2026 — GPU specs, CPU, RAM, network, OS | infrastructure | YES | — |
| prepare.mdx | v2/gateways/setup/ | Gateway pre-setup preparation and requirements | infrastructure | YES | — |
| setup.mdx | v2/gateways/setup/requirements/ | Gateway node requirements (hardware, network, software) | infrastructure | YES | — |

### Exchange & RPC References

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| arbitrum-exchanges.mdx | v2/orchestrators/resources/reference/ | Exchanges supporting Arbitrum One for orch operators | infrastructure | YES | Near-dup of gateways version |
| arbitrum-rpc.mdx | v2/orchestrators/resources/reference/ | Arbitrum RPC provider comparison for orch operators | infrastructure | YES | Near-dup |
| arbitrum-exchanges.mdx | v2/gateways/resources/compendium/ | Exchanges supporting Arbitrum One (CoinGecko) | infrastructure | YES | Near-dup |
| livepeer-exchanges.mdx | v2/gateways/resources/compendium/ | Exchanges supporting Livepeer token | token | YES | — |
| arbitrum-rpc.mdx | v2/gateways/resources/compendium/ | Public Arbitrum RPC endpoints (Chainlist) | infrastructure | YES | Near-dup |
| exchanges.mdx | v2/delegators/resources/compendium/ | CEX and DEX exchanges where LPT is listed with trust scores | token | YES | — |

### Changelogs (Release References)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| changelog.mdx | v2/resources/changelog/ | Documentation changelog tracking v2 structure updates | general | YES | — |
| docs.mdx | v2/resources/changelog/ | Livepeer Docs changelog | general | YES | — |
| go-livepeer.mdx | v2/resources/changelog/protocol/ | go-livepeer node software releases | protocol | YES | — |
| lips.mdx | v2/resources/changelog/protocol/ | Livepeer Improvement Proposals changelog | protocol | YES | — |
| subgraph.mdx | v2/resources/changelog/protocol/ | Livepeer Subgraph changelog | protocol | YES | — |
| naap.mdx | v2/resources/changelog/protocol/ | NaaP plugin framework changelog | protocol | YES | — |
| ai-runner.mdx | v2/resources/changelog/ai-compute/ | AI Runner releases | ai | YES | — |
| comfystream.mdx | v2/resources/changelog/ai-compute/ | ComfyStream changelog | ai | YES | — |
| pytrickle.mdx | v2/resources/changelog/ai-compute/ | PyTrickle framework changelog | sdk | YES | — |
| livepeer-js.mdx | v2/resources/changelog/apis-sdks/ | Livepeer JavaScript SDK changelog | sdk | YES | — |
| livepeer-python.mdx | v2/resources/changelog/apis-sdks/ | Livepeer Python SDK changelog | sdk | YES | — |
| livepeer-ai-js.mdx | v2/resources/changelog/apis-sdks/ | Livepeer AI JavaScript SDK changelog | ai, sdk | YES | — |
| livepeer-ai-python.mdx | v2/resources/changelog/apis-sdks/ | Livepeer AI Python SDK changelog | ai, sdk | YES | — |
| livepeer-ai-go.mdx | v2/resources/changelog/apis-sdks/ | Livepeer AI Go SDK changelog | ai, sdk | YES | — |
| explorer.mdx | v2/resources/changelog/tooling/ | Livepeer Explorer changelog | general | YES | — |
| livepeer-data.mdx | v2/resources/changelog/tooling/ | Livepeer Data tool changelog | general | YES | — |
| livepeer-python-gateway.mdx | v2/resources/changelog/tooling/ | Livepeer Python Gateway changelog | general | YES | — |
| awesome-livepeer.mdx | v2/resources/changelog/ecosystem/ | Awesome Livepeer changelog | general | YES | — |
| website.mdx | v2/resources/changelog/ecosystem/ | Livepeer.org website changelog | general | YES | — |

---

## Compendium

Glossaries, terminology, help centres, troubleshooting, FAQ, mental models, protocol parameters.

### Glossaries

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| glossary.mdx | v2/resources/ | Complete Livepeer glossary covering protocol, video, AI, web3, ops terminology with searchable interface | general | YES | Canonical cross-tab glossary |
| resource-hub-terms.mdx | v2/resources/ | Resource section-specific terminology | general | YES | — |
| glossary.mdx | v2/about/resources/ | About-specific terminology for protocol architecture, network roles, governance | protocol | YES | Subset of v2/resources version |
| livepeer-glossary.mdx | v2/about/resources/ | Broader Livepeer glossary covering actors, web3, video, AI (draft) | general | NO | Near-dup of v2/resources version |
| glossary.mdx | v2/developers/resources/ | Developer-focused glossary — SDKs, APIs, AI pipelines, streaming protocols | sdk | YES | Subset of v2/resources version |
| glossary.mdx | v2/orchestrators/resources/ | Orchestrator terminology — GPU setup, AI pipelines, staking, payments | infrastructure | YES | Subset of v2/resources version |
| operator-terms.mdx | v2/orchestrators/resources/ | Operator-specific terms — deployment axes, node modes, staking, scale levels | infrastructure | YES | — |
| glossary.mdx | v2/gateways/resources/ | Gateway operator terms — deployment, payment, routing, config | infrastructure | YES | Subset of v2/resources version |
| deployment-terms.mdx | v2/gateways/resources/ | Deployment axes terminology (operational mode, setup type, node type) | infrastructure | YES | — |
| glossary.mdx | v2/delegators/resources/ | Delegator terms — staking, delegation, inflation, governance, treasury | token | YES | Subset of v2/resources version |
| glossary.mdx | v2/community/resources/ | Community terms — governance, staking, treasury | community | YES | Subset of v2/resources version |
| glossary.mdx | v2/home/resources/ | Home section glossary | general | YES | Subset of v2/resources version |
| glossary.mdx | v2/solutions/resources/ | Solutions-specific terminology | general | YES | Subset of v2/resources version |

### FAQs

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| faq.mdx | v2/about/resources/ | Common questions — what is Livepeer, protocol vs network, LPT, contracts | general | YES | — |
| faq.mdx | v2/orchestrators/resources/reference/ | Orchestrator FAQ — installation, networking, job routing, AI pipelines, earnings | infrastructure | YES | — |
| faq.mdx | v2/gateways/resources/reference/ | Gateway FAQ — broadcaster flag rename, ETH requirements, AI limits, pricing, ports | infrastructure | YES | — |
| faq.mdx | v2/community/ | Community FAQ — governance, SPEs, treasury, voting | community | YES | — |

### Troubleshooting

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| troubleshoot.mdx | v1/orchestrators/guides/ | Troubleshooting common orchestrator issues | help | YES | Content folded into v2 version |
| troubleshooting.mdx | v2/orchestrators/guides/monitoring-and-tooling/ | Diagnostic guide — transcoding failures, GPU issues, reward problems, AI errors, networking | help | YES | — |
| troubleshooting.mdx | v2/gateways/guides/monitoring-and-tooling/ | Fix common gateway errors by symptom — port, RPC, deposit, CUDA, Docker | help | YES | — |
| troubleshooting.mdx | v2/developers/guides/ai/ | AI inference failure diagnosis — 401 auth, 422 validation, cold models, rate limiting | help | YES | — |

### Knowledge Base (v1)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| livestream.mdx | v1/references/knowledge-base/ | Livestream FAQ and troubleshooting | help, video | YES | — |
| playback.mdx | v1/references/knowledge-base/ | Playback FAQ and troubleshooting | help, video | YES | — |
| vod.mdx | v1/references/knowledge-base/ | VOD FAQ and troubleshooting | help, video | YES | — |

### Mental Models & Core Concepts

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| mental-model.mdx | v2/about/concepts/ | Layered mental model and OSI framework for Livepeer architecture | general | YES | — |
| core-concepts.mdx | v2/about/concepts/ | Protocol vs network, actors, bridge mechanics, on-chain/off-chain boundaries | general | YES | — |
| livepeer-overview.mdx | v2/about/concepts/ | High-level overview — protocol, network, marketplace | general | YES | — |
| livepeer-101.mdx | v2/resources/concepts/ | Key concepts and definitions for understanding Livepeer | general | NO | Near-dup of about/concepts pages |
| brief-history-of-video.mdx | v2/resources/concepts/ | Timeline of video technology evolution | video | NO | — |
| developer-stack.mdx | v2/developers/concepts/ | Studio, Daydream, AI gateway, ComfyStream, raw protocol layers | sdk | YES | — |
| oss-stack.mdx | v2/developers/concepts/ | Open-source repos map — go-livepeer, protocol, ai-worker, comfystream, pytrickle | protocol | YES | — |
| ai-on-livepeer.mdx | v2/developers/concepts/ | Three AI pipeline categories — batch, real-time, LLM | ai | YES | — |
| video-on-livepeer.mdx | v2/developers/concepts/ | Video capabilities — livestreaming, VOD, playback, access control | video | YES | — |
| running-a-gateway.mdx | v2/developers/concepts/ | Decision guide — hosted APIs vs self-hosted gateway | networking | YES | — |
| role.mdx | v2/orchestrators/concepts/ | What orchestrators are, compute network, role evolution | infrastructure | YES | — |
| capabilities.mdx | v2/orchestrators/concepts/ | Workload types — video, AI, batch vs live, job routing | infrastructure | YES | — |
| architecture.mdx | v2/orchestrators/concepts/ | How orchestrators fit in stack — internal components, request flow, GPU | infrastructure | YES | — |
| incentive-model.mdx | v2/orchestrators/concepts/ | Two revenue streams — ETH fees, LPT inflation, commission, payment flow | token | YES | — |
| role.mdx | v2/gateways/concepts/ | How gateways connect apps to network, demand aggregation | infrastructure | YES | — |
| capabilities.mdx | v2/gateways/concepts/ | What gateways route — video, AI, BYOC, orchestrator selection | infrastructure | YES | — |
| architecture.mdx | v2/gateways/concepts/ | Layer position, internal components, request flow | infrastructure | YES | — |
| business-model.mdx | v2/gateways/concepts/ | Payment flow — apps, gateways, orchestrators, four operator models | infrastructure | YES | — |
| overview.mdx | v2/delegators/concepts/ | LPT architectural and economic overview | token | YES | — |
| tokenomics.mdx | v2/delegators/concepts/ | Formal economic model — issuance, bonding, rewards, security equilibrium | token | YES | — |
| mechanics.mdx | v2/delegators/concepts/ | Protocol mechanics — rounds, active set, reward calls, checkpoints | token | YES | — |
| purpose.mdx | v2/delegators/concepts/ | LPT core purpose — security, rewards, governance, supply model | token | YES | — |

### Help Centres & Support Channels

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| help-center.mdx | v2/resources/ | Help centre navigation (placeholder) | help | YES | — |
| developer-help.mdx | v2/developers/resources/compendium/ | Every help channel — Discord, Forum, office hours, GitHub, Immunefi | help | YES | — |
| help.mdx | v2/gateways/resources/knowledge-hub/ | Support channels — Discord, forum, GitHub, security reporting | help | YES | Near-dup |
| guidelines.mdx | v2/community/community/ | Code of conduct and community standards | community | YES | — |
| connect-channels.mdx | v2/community/connect/ | Where to find community — Discord, Forum, Telegram, calls | community | YES | Near-dup |

### Protocol Parameters & Economics

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| protocol-parameters.mdx | v2/delegators/resources/reference/ | Governance-controlled values — unbonding period, treasury cut, inflation | protocol | YES | — |
| earning-model.mdx | v2/orchestrators/guides/staking-and-rewards/ | How orchestrators earn — ETH fees, LPT rewards, commission, AI fees | token | YES | — |
| reward-mechanics.mdx | v2/orchestrators/guides/staking-and-rewards/ | LPT inflation flow, Reward() calling, gas thresholds, fee redemption | token | YES | — |
| delegation-economics.mdx | v2/delegators/delegation/ | Inflation rewards, fee sharing, treasury allocation, reward reliability | token | YES | — |
| lpt-eth-usage.mdx | v2/delegators/resources/compendium/ | ETH for service payments, LPT for staking/governance/rewards | token | YES | — |
| payments.mdx | v2/orchestrators/guides/payments-and-pricing/ | Payment mechanics — ETH fees, probabilistic micropayments, ticket redemption | token | YES | — |

---

## Knowledge Hub

Tutorials, guides, how-to walkthroughs, background reading, community resources, educational content.

### Getting Started & Quickstarts

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| primer.mdx | v2/home/ | 10-minute intro to Livepeer | general | YES | — |
| quick-start.mdx | v1/developers/ | Developer quick start guide | general | YES | — |
| ai-quickstart.mdx | v2/developers/get-started/ | First AI job tutorial — text-to-image, auth, base URL, request/response | ai | YES | — |
| comfystream-quickstart.mdx | v2/developers/get-started/ | ComfyStream install and setup — RunPod, Docker, local | ai | YES | — |
| transcoding-quickstart.mdx | v2/developers/get-started/ | Submit transcoding job via Studio API, track via Tasks API | video | YES | — |
| contributor-quickstart.mdx | v2/developers/get-started/ | Get go-livepeer running locally, testnet setup, first test job | protocol | YES | — |
| setup-paths.mdx | v2/developers/get-started/ | Four quickstart tracks — AI, real-time AI, video, OSS | general | YES | — |
| gateway-setup.mdx | v2/gateways/quickstart/ | Run gateway quickstart — Docker, Linux, Windows, off/on-chain | infrastructure | YES | — |
| guide.mdx | v2/orchestrators/quickstart/ | Orchestrator quickstart overview — choose path | infrastructure | YES | — |
| video-transcoding.mdx | v2/orchestrators/quickstart/ | Run go-livepeer as transcoding orchestrator | infrastructure | YES | — |
| tutorial.mdx | v2/orchestrators/quickstart/ | Quickest path — hardware check to off-chain smoke test | infrastructure | YES | — |
| AI-prompt-start.mdx | v2/orchestrators/quickstart/ | Add AI inference to existing video node | ai | YES | — |

### Developer Guides — AI

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| authentication.mdx | v2/developers/guides/ai/ | API key types, rotation, security best practices for AI Gateway | ai | YES | — |
| production-checklist.mdx | v2/developers/guides/ai/ | Pre-launch checklist — gateway, auth, errors, cost, monitoring, models | ai | YES | — |
| workload-fit.mdx | v2/developers/build/ | Decision framework — does this AI workload belong on Livepeer? | ai | YES | — |
| sdk-gateway.mdx | v2/developers/build/ | SDK integration guide — TypeScript, Python, Go, auth, error handling | sdk | YES | — |
| byoc.mdx | v2/developers/build/ | Build custom AI containers with PyTrickle, deploy as workers | ai | YES | — |
| comfystream.mdx | v2/developers/build/ | ComfyStream pipeline modes, custom nodes, workflow format, tuning | ai | YES | — |

### Developer Guides — Video

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| create-livestream.mdx | v2/developers/guides/video/ | Full livestream lifecycle via Studio API — TypeScript, Python, Go | video | YES | Near-dup of v1/developers/guides version |
| playback.mdx | v2/developers/guides/video/ | HLS and WebRTC playback — React Player, HLS.js, direct URL | video | YES | Near-dup |
| webhooks.mdx | v2/developers/guides/video/ | Webhook setup, event types, signature verification, HMAC | video | YES | Near-dup |
| access-control.mdx | v2/developers/guides/video/ | JWT and webhook authorization, signing keys, player config | video | YES | Near-dup |
| upload-asset.mdx | v2/developers/guides/video/ | Upload video — direct, URL import, tus resumable | video | YES | Near-dup |
| monitor-stream-health.mdx | v2/developers/guides/video/ | Ingest health, bitrate, segment delivery monitoring | video | YES | Near-dup |

### Developer Guides — v1 (originals)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| upload-video-asset.mdx | v1/developers/guides/ | Upload video assets guide | video | YES | Dup: v2 version |
| playback-an-asset.mdx | v1/developers/guides/ | Play back assets guide | video | YES | Dup: v2 version |
| encrypted-asset.mdx | v1/developers/guides/ | Encrypted assets guide | video | YES | — |
| listen-to-asset-events.mdx | v1/developers/guides/ | Listen for asset events | video | YES | — |
| transcode-video-storj.mdx | v1/developers/guides/ | Transcode using Storj storage | video | YES | — |
| transcode-video-w3s.mdx | v1/developers/guides/ | Transcode using Web3Storage | video | YES | — |
| thumbnails-vod.mdx | v1/developers/guides/ | VOD thumbnail generation | video | YES | — |
| create-livestream.mdx | v1/developers/guides/ | Create a livestream | video | YES | Dup: v2 version |
| livestream-from-browser.mdx | v1/developers/guides/ | In-browser livestream | video | YES | — |
| stream-via-obs.mdx | v1/developers/guides/ | Streaming via OBS | video | YES | — |
| playback-a-livestream.mdx | v1/developers/guides/ | Playback livestreams | video | YES | — |
| monitor-stream-health.mdx | v1/developers/guides/ | Stream health monitoring | video | YES | Dup: v2 version |
| thumbnails-live.mdx | v1/developers/guides/ | Live thumbnail generation | video | YES | — |
| clip-a-livestream.mdx | v1/developers/guides/ | Clip livestreams | video | YES | — |
| optimize-latency-of-a-livestream.mdx | v1/developers/guides/ | Stream latency optimisation | video | YES | — |
| multistream.mdx | v1/developers/guides/ | Multistream configuration | video | YES | — |
| access-control-jwt.mdx | v1/developers/guides/ | JWT-based access control | video | YES | Dup: v2 version |
| access-control-webhooks.mdx | v1/developers/guides/ | Webhook-based access control | video | YES | — |
| setup-and-listen-to-webhooks.mdx | v1/developers/guides/ | Webhook setup and listening | video | YES | — |
| get-engagement-analytics-via-api.mdx | v1/developers/guides/ | Analytics via API | video | YES | — |
| get-engagement-analytics-via-grafana.mdx | v1/developers/guides/ | Analytics with Grafana | video | YES | — |
| get-engagement-analytics-via-timeplus.mdx | v1/developers/guides/ | Analytics with Timeplus | video | YES | — |
| managing-projects.mdx | v1/developers/guides/ | Project management | video | YES | — |

### Tutorials

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| build-an-ai-agent-on-livepeer.mdx | v2/developers/guides/tutorials/ | Build Eliza AI agent with Livepeer as LLM backend | ai | YES | — |
| ipfs-video-integration.mdx | v2/developers/guides/tutorials/ | IPFS + Livepeer video pipeline — upload, transcode, playback | video | YES | Near-dup of v1 tutorials |
| token-gated-video.mdx | v2/developers/guides/tutorials/ | Token-gate video behind NFT with Lit Protocol | video | YES | Near-dup |
| upload-playback-videos-on-ipfs.mdx | v1/developers/tutorials/ | IPFS integration tutorial | video | YES | Dup: v2 version |
| upload-playback-videos-on-arweave.mdx | v1/developers/tutorials/ | Arweave integration tutorial | video | YES | — |
| upload-playback-videos-4everland.mdx | v1/developers/tutorials/ | 4everland integration tutorial | video | YES | — |
| token-gate-videos-with-lit.mdx | v1/developers/tutorials/ | Lit Protocol token gating tutorial | video | YES | Dup: v2 version |
| decentralized-app-with-fvm.mdx | v1/developers/tutorials/ | FVM dApp tutorial | video | YES | — |
| tutorial-1-offchain-transcoding-test.mdx | v2/gateways/guides/tutorials/ | Prove gateway pipeline works — 15 min, off-chain, CPU only | infrastructure | YES | — |
| tutorial-2-byoc-cpu-pipeline.mdx | v2/gateways/guides/tutorials/ | Add AI with BYOC custom container | ai | YES | — |
| tutorial-3-go-production.mdx | v2/gateways/guides/tutorials/ | Go production with gateway | infrastructure | YES | — |
| byoc-cpu-tutorial.mdx | v2/orchestrators/guides/tutorials/ | BYOC smoke test with CPU Docker container | ai | YES | — |
| full-ai-pipeline-tutorial.mdx | v2/orchestrators/guides/tutorials/ | Complete AI pipeline — hardware, models, warmup, production | ai | YES | — |
| realtime-ai-tutorial.mdx | v2/orchestrators/guides/tutorials/ | Realtime AI pipeline tutorial | ai | YES | — |
| ai-earning-quickstart.mdx | v2/orchestrators/guides/tutorials/ | Quick path to earning from AI inference | ai | YES | — |
| add-ai-to-video-node.mdx | v2/orchestrators/guides/tutorials/ | Add AI to existing transcoding orchestrator | ai | YES | — |
| zero-to-first-reward.mdx | v2/orchestrators/guides/tutorials/ | Fresh setup to first reward call | token | YES | — |

### Orchestrator Guides

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| install.mdx | v2/orchestrators/setup/ | Install go-livepeer — Linux/macOS/Windows, drivers, binary/Docker | infrastructure | YES | — |
| configure.mdx | v2/orchestrators/setup/ | Set flags — GPU, pricing, sessions, networking, AI worker | infrastructure | YES | — |
| connect.mdx | v2/orchestrators/setup/ | Connect to Arbitrum — fund, stake LPT, register URI, activate | infrastructure | YES | — |
| verify.mdx | v2/orchestrators/setup/ | Verify on-chain, processing jobs, healthy | infrastructure | YES | — |
| monitor.mdx | v2/orchestrators/setup/ | Monitor health, GPU, earnings with Prometheus and Explorer | infrastructure | YES | — |
| ai-inference-operations.mdx | v2/orchestrators/guides/ai-and-job-workloads/ | How AI inference works — pipeline types, hardware, job flow, routing | ai | YES | — |
| diffusion-pipeline-setup.mdx | v2/orchestrators/guides/ai-and-job-workloads/ | Batch AI operator guide — aiModels.json, all pipelines, Ollama, BYOC | ai | YES | — |
| llm-pipeline-setup.mdx | v2/orchestrators/guides/ai-and-job-workloads/ | LLM pipeline with Ollama — Docker Compose, model selection, pricing | ai | YES | — |
| dual-mode-configuration.mdx | v2/orchestrators/guides/deployment-details/ | Single process serving video + AI | infrastructure | YES | — |
| join-a-pool.mdx | v2/orchestrators/guides/deployment-details/ | Contribute GPU to existing pool | infrastructure | YES | — |
| orchestrator-transcoder-setup.mdx | v2/orchestrators/guides/deployment-details/ | Orchestrator-transcoder split | infrastructure | YES | — |
| ai-model-management.mdx | v2/orchestrators/guides/config-and-optimisation/ | VRAM allocation, warm models, lifecycle, tuning | ai | YES | — |
| capacity-planning.mdx | v2/orchestrators/guides/config-and-optimisation/ | GPU capacity — session limits, throughput, multi-GPU | infrastructure | YES | — |
| pricing-strategy.mdx | v2/orchestrators/guides/config-and-optimisation/ | PricePerUnit, fees, AI economics, competitive positioning | token | YES | — |
| reward-call-tuning.mdx | v2/orchestrators/guides/config-and-optimisation/ | Automatic/manual reward calling, gas thresholds | token | YES | — |
| metrics-and-alerting.mdx | v2/orchestrators/guides/monitoring-and-tooling/ | Prometheus, DCGM, alerting, health monitoring | infrastructure | YES | — |
| explorer-operations.mdx | v2/orchestrators/guides/monitoring-and-tooling/ | Explorer — earnings, reputation, network position | infrastructure | YES | — |
| operator-toolbox.mdx | v2/orchestrators/guides/monitoring-and-tooling/ | Operator tools, CLIs, utilities, community tooling | help | YES | — |
| gateway-orchestrator-interface.mdx | v2/orchestrators/guides/advanced-operations/ | Gateway + orchestrator on same machine — ports, self-routing | infrastructure | YES | — |
| pool-operators.mdx | v2/orchestrators/guides/advanced-operations/ | Run an orchestrator pool — management, revenue sharing, workers | infrastructure | YES | — |
| scale-operations.mdx | v2/orchestrators/guides/advanced-operations/ | Multi-GPU, multi-node, fleet management, autoscaling | infrastructure | YES | — |
| business-case.mdx | v2/orchestrators/guides/operator-considerations/ | Commercial operations — fees, Gateway relationships, SLA | infrastructure | YES | — |
| operator-rationale.mdx | v2/orchestrators/guides/operator-considerations/ | Decision framework — costs, revenue, break-even | infrastructure | YES | — |

### v1 Orchestrator Guides (originals)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| get-started.mdx | v1/orchestrators/guides/ | Getting started as orchestrator | infrastructure | YES | Dup: v2 setup |
| install-go-livepeer.mdx | v1/orchestrators/guides/ | Installing go-livepeer | infrastructure | YES | Dup: v2 setup/install |
| connect-to-arbitrum.mdx | v1/orchestrators/guides/ | Connecting to Arbitrum | infrastructure | YES | Dup: v2 setup/connect |
| set-pricing.mdx | v1/orchestrators/guides/ | Setting transcoding prices | infrastructure | YES | Dup: v2 pricing |
| set-session-limits.mdx | v1/orchestrators/guides/ | Session limits configuration | infrastructure | YES | — |
| monitor-metrics.mdx | v1/orchestrators/guides/ | Monitoring metrics | infrastructure | YES | Dup: v2 monitor |
| benchmark-transcoding.mdx | v1/orchestrators/guides/ | Benchmarking transcoding | infrastructure | YES | — |
| assess-capabilities.mdx | v1/orchestrators/guides/ | Assessing node capabilities | infrastructure | YES | — |
| gateway-introspection.mdx | v1/orchestrators/guides/ | Gateway introspection | infrastructure | YES | — |
| dual-mine.mdx | v1/orchestrators/guides/ | Dual mining configuration | infrastructure | YES | — |
| o-t-split.mdx | v1/orchestrators/guides/ | Orchestrator/Transcoder split | infrastructure | YES | Dup: v2 version |
| configure-reward-calling.mdx | v1/orchestrators/guides/ | Reward calling configuration | infrastructure | YES | Dup: v2 version |
| vote.mdx | v1/orchestrators/guides/ | Protocol governance voting | governance | YES | — |
| migrate-to-arbitrum.mdx | v1/orchestrators/guides/ | Migration to Arbitrum | infrastructure | YES | — |
| migrate-from-contract-wallet.mdx | v1/orchestrators/guides/ | Contract wallet migration | infrastructure | YES | — |

### Gateway Guides

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| install.mdx | v2/gateways/setup/ | Install go-livepeer — Docker, Linux, Windows | infrastructure | YES | — |
| configure.mdx | v2/gateways/setup/ | Configure AI/video/dual gateway services | infrastructure | YES | — |
| connect.mdx | v2/gateways/setup/ | Connect gateway to Livepeer network | infrastructure | YES | — |
| verify.mdx | v2/gateways/setup/ | Verify gateway running correctly | infrastructure | YES | — |
| monitor.mdx | v2/gateways/setup/ | Monitoring setup overview | infrastructure | YES | — |
| ai-pipelines.mdx | v2/gateways/guides/node-pipelines/ | AI inference flow — discovery, capabilities matching | ai | YES | — |
| video-pipelines.mdx | v2/gateways/guides/node-pipelines/ | Video transcoding — segmentation, session management | video | YES | — |
| byoc-pipelines.mdx | v2/gateways/guides/node-pipelines/ | BYOC routing from gateway perspective | ai | YES | — |
| payment-guide.mdx | v2/gateways/guides/payments-and-pricing/ | Payment path — on/off-chain, remote signer, clearinghouse | token | YES | — |
| funding-guide.mdx | v2/gateways/guides/payments-and-pricing/ | Fund on-chain gateway — bridge, deposit, reserve | token | YES | — |
| remote-signers.mdx | v2/gateways/guides/payments-and-pricing/ | Remote signer design — key isolation, clearinghouses | infrastructure | YES | — |
| clearinghouse-guide.mdx | v2/gateways/guides/payments-and-pricing/ | Third-party payment clearinghouses | infrastructure | YES | — |
| pricing-strategy.mdx | v2/gateways/guides/payments-and-pricing/ | Price caps — maxPricePerUnit, USD conversion | token | YES | — |
| health-checks.mdx | v2/gateways/guides/monitoring-and-tooling/ | Gateway health endpoints, deposit checks | infrastructure | YES | — |
| monitoring-setup.mdx | v2/gateways/guides/monitoring-and-tooling/ | Prometheus/Grafana for gateway metrics | infrastructure | YES | — |
| on-chain-metrics.mdx | v2/gateways/guides/monitoring-and-tooling/ | TicketBroker events, Arbiscan, deposit tracking | infrastructure | YES | — |
| tools-and-dashboards.mdx | v2/gateways/guides/monitoring-and-tooling/ | Explorer, Livepeer Tools, livepeer_cli, Arbiscan | infrastructure | YES | — |
| orchestrator-selection.mdx | v2/gateways/guides/advanced-operations/ | Selection algorithm, tiering, scoring, failover | infrastructure | YES | — |
| gateway-discoverability.mdx | v2/gateways/guides/advanced-operations/ | ServiceAddr, DNS, capability advertising | infrastructure | YES | — |
| scaling.mdx | v2/gateways/guides/advanced-operations/ | Scaling and resource management | infrastructure | YES | — |
| business-case.mdx | v2/gateways/guides/operator-considerations/ | Should you run a gateway? Business model | infrastructure | YES | — |
| production-gateways.mdx | v2/gateways/guides/operator-considerations/ | Public and commercial gateways in operation | infrastructure | YES | — |

### v1 Gateway Guides (originals)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| gateway-overview.mdx | v1/gateways/guides/ | Gateway overview and setup | infrastructure | YES | Dup: v2 setup |
| docker-install.mdx | v1/gateways/guides/ | Docker installation | infrastructure | YES | Dup: v2 install |
| linux-install.mdx | v1/gateways/guides/ | Linux installation | infrastructure | YES | Dup: v2 install |
| windows-install.mdx | v1/gateways/guides/ | Windows installation | infrastructure | YES | Dup: v2 install |
| fund-gateway.mdx | v1/gateways/guides/ | Funding gateway account | infrastructure | YES | Dup: v2 funding |
| publish-content.mdx | v1/gateways/guides/ | Publishing content via gateway | infrastructure | YES | — |
| playback-content.mdx | v1/gateways/guides/ | Playback via gateway | infrastructure | YES | — |
| transcoding-options.mdx | v1/gateways/guides/ | Transcoding configuration | video | YES | — |

### Delegator Guides

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| about-delegation.mdx | v2/delegators/delegation/ | Bonding, non-custodial stake, dilution, earnings, exit | staking | YES | — |
| delegate-your-lpt.mdx | v2/delegators/delegation/ | Step-by-step delegation on Arbitrum — wallet, approval, bonding | staking | YES | — |
| manage-your-delegation.mdx | v2/delegators/delegation/ | Claim rewards, compound, redelegate, unbond, withdraw | staking | YES | — |
| choose-an-orchestrator.mdx | v2/delegators/delegation/ | Evaluating orchestrators — active set, rewards, commission | staking | YES | — |
| bridge-lpt-to-arbitrum.mdx | v2/delegators/delegation/ | Move LPT from Ethereum to Arbitrum via bridge or alternatives | staking | YES | — |
| overview.mdx | v2/delegators/guides/governance/ | Stake-weighted governance architecture | governance | YES | — |
| model.mdx | v2/delegators/guides/governance/ | Governance model — quorum, voting, timelock, attack surface | governance | YES | — |
| processes.mdx | v2/delegators/guides/governance/ | Governance lifecycle — LIP drafting, on-chain execution | governance | YES | — |
| overview.mdx | v2/delegators/guides/treasury/ | Treasury as governance-controlled allocator | governance | YES | — |
| proposals.mdx | v2/delegators/guides/treasury/ | Treasury proposal structure, execution, failure modes | governance | YES | — |
| allocations.mdx | v2/delegators/guides/treasury/ | Allocation design, accounting, evaluation, security | governance | YES | — |

### v1 Delegator Guides (originals)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| yield-calculation.mdx | v1/delegators/guides/ | Yield calculation explanation | token | YES | — |
| bridge-lpt-to-arbitrum.mdx | v1/delegators/guides/ | Bridging LPT to Arbitrum | staking | YES | Dup: v2 version |
| migrate-stake-to-arbitrum.mdx | v1/delegators/guides/ | Stake migration to Arbitrum | staking | YES | — |

### v1 AI Network Guides

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| get-started.mdx | v1/ai/builders/ | Building on Livepeer AI guide | ai | YES | — |
| gateways.mdx | v1/ai/builders/ | AI Gateway providers list | ai | YES | — |
| showcase.mdx | v1/ai/builders/ | Example AI applications | ai | YES | — |
| get-started.mdx | v1/ai/orchestrators/ | Get started as AI Orchestrator | ai | YES | — |
| ai-worker.mdx | v1/ai/orchestrators/ | AI Worker setup guide | ai | YES | — |
| models-config.mdx | v1/ai/orchestrators/ | Configuring AI models | ai | YES | — |
| models-download.mdx | v1/ai/orchestrators/ | Downloading AI models | ai | YES | — |
| benchmarking.mdx | v1/ai/orchestrators/ | Benchmarking AI infrastructure | ai | YES | — |
| onchain.mdx | v1/ai/orchestrators/ | On-chain configuration for AI nodes | ai | YES | — |
| start-orchestrator.mdx | v1/ai/orchestrators/ | Starting AI Orchestrator node | ai | YES | — |
| get-started.mdx | v1/ai/gateways/ | Get started as AI Gateway | ai | YES | — |
| start-gateway.mdx | v1/ai/gateways/ | Starting AI Gateway node | ai | YES | — |
| onchain.mdx | v1/ai/gateways/ | On-chain configuration for AI gateways | ai | YES | — |
| get-started.mdx | v1/ai/contributors/ | Getting started as AI contributor | ai | YES | — |
| developers.mdx | v1/ai/contributors/ | Developers guide for AI network | ai | YES | — |
| add-model.mdx | v1/ai/contributors/guides/ | Adding new models guide | ai | YES | — |
| add-pipeline.mdx | v1/ai/contributors/guides/ | Adding new pipelines guide | ai | YES | — |

### Opportunities & Contribution

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| overview.mdx | v2/developers/guides/opportunities/ | Builder opportunities map — grants, RFPs, OSS, bounties, treasury | help | YES | — |
| bug-bounties.mdx | v2/developers/guides/opportunities/ | Immunefi bug bounty programme — scope, rewards, KYC, severity | help | YES | — |
| grants-and-programmes.mdx | v2/developers/guides/opportunities/ | Microgrants, AI Video Startup, hacker cohorts, bootcamps | help | YES | — |
| rfps-and-proposals.mdx | v2/developers/guides/opportunities/ | Foundation RFPs and SPE treasury proposals | help | YES | — |
| oss-contributions.mdx | v2/developers/guides/opportunities/ | Contributing to OSS repos, good first issues | help | YES | — |
| contribution-guide.mdx | v2/developers/guides/ | Contribute code, docs, governance, community, bugs | help | YES | — |
| local-testnet-deployment.mdx | v2/developers/guides/ | Deploy full stack locally with Hardhat | protocol | YES | — |
| contribute.mdx | v2/community/contribute/ | General contribution opportunities | community | YES | — |
| opportunities.mdx | v2/community/contribute/ | Current grants, programs, initiatives | community | YES | — |
| build-livepeer.mdx | v2/community/contribute/ | Ways to contribute code and tooling | community | YES | — |

### Solutions & Products

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| solution-providers.mdx | v2/solutions/ | Table of all solutions — Studio, Daydream, Frameworks, Streamplace, Embody | general | YES | — |
| overview.mdx | v2/solutions/livepeer-studio/ | Developer-friendly hosted gateway platform | video | YES | — |
| overview.mdx | v2/solutions/daydream/ | Real-time AI video toolkit | ai | YES | — |
| overview.mdx | v2/solutions/embody/ | AI avatar and embodied interfaces | ai | YES | — |
| overview.mdx | v2/solutions/frameworks/ | Sovereign video infrastructure product | video | YES | — |
| overview.mdx | v2/solutions/streamplace/ | Decentralised social video layer | video | YES | — |

### Community Resources & Knowledge Hubs

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| awesome-livepeer.mdx | v1/references/ | Awesome Livepeer community resources | community | YES | Near-dup of v2 versions |
| example-applications.mdx | v1/references/ | Example applications and starter projects | general | YES | Dup: v2 version |
| awesome-livepeer.mdx | v2/developers/resources/knowledge-hub/ | Link to Awesome Livepeer on GitHub | community | YES | Near-dup |
| deepwiki.mdx | v2/developers/resources/knowledge-hub/ | DeepWiki AI-generated codebase documentation | general | YES | — |
| wiki.mdx | v2/developers/resources/knowledge-hub/ | Livepeer Wiki on GitHub — older technical reference | general | YES | — |
| resources.mdx | v2/developers/resources/compendium/ | Tools, dashboards, SDKs, ecosystem resources | general | YES | — |
| example-applications.mdx | v2/developers/resources/compendium/ | Curated example applications and starter projects | general | YES | Near-dup of v1 version |
| community-guides.mdx | v2/orchestrators/resources/knowledge-hub/ | Community-contributed guides and resources | help | YES | — |
| community-pools.mdx | v2/orchestrators/resources/knowledge-hub/ | Active community orchestrator pools | help | YES | — |
| guides.mdx | v2/gateways/resources/knowledge-hub/ | Curated how-to guides and tutorials index | help | YES | — |
| resources.mdx | v2/gateways/resources/knowledge-hub/ | Tools, SDKs, dashboards, go-livepeer, monitoring | help | YES | — |
| delegator-videos-and-blogs.mdx | v2/delegators/resources/knowledge-hub/ | Curated video and blog resources for delegators | help | YES | — |
| awesome-livepeer.mdx | v2/community/resources/ | Community-curated ecosystem tools, dashboards, SDKs | community | YES | Near-dup |
| dashboards.mdx | v2/community/resources/ | Community-maintained dashboards and analytics | community | YES | — |
| guides.mdx | v2/community/resources/ | Community guides by role | community | YES | — |
| livepeer-whitepaper.mdx | v2/about/resources/knowledge-hub/ | Original 2017 whitepaper — decentralised video, Merkle Mine | general | YES | — |
| gateways-vs-orchestrators.mdx | v2/about/resources/knowledge-hub/ | Gateway coordination vs orchestrator compute roles | general | YES | — |
| contributor-orientation.mdx | v2/about/resources/knowledge-hub/ | Reading path for technical contributors and researchers (draft) | general | YES | — |
| evaluating-livepeer.mdx | v2/about/resources/knowledge-hub/ | Evaluation reading path for founders, researchers, analysts (draft) | general | YES | — |
| media-kit.mdx | v2/resources/compendium/ | Official Livepeer media kit — logos, colours, brand guidelines | general | NO | — |
| delegator-dashboard.mdx | v2/resources/lpt/ | Links to delegation dashboards (official and community) | token | NO | — |
| videos.mdx | v2/resources/resources/ | Video resource links and recordings | video | NO | — |

### Self-Hosting (v1)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| overview.mdx | v1/self-hosting/ | Self-hosting overview and capabilities | infrastructure | NO | — |
| deploying.mdx | v1/self-hosting/ | Deploying self-hosted Studio guide | infrastructure | NO | — |
| self-hosting-with-docker.mdx | v1/self-hosting/ | Docker self-hosting guide | infrastructure | NO | — |
| how-to-contribute.mdx | v1/self-hosting/ | Contributing to self-hosting | infrastructure | NO | — |

### Livepeer Studio Guides (v2/solutions)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| quickstart.mdx | v2/solutions/livepeer-studio/docs/ | Quick start guide for Studio | video | YES | — |
| player.mdx | v2/solutions/livepeer-studio/docs/ | Player SDK and embedding | video | YES | — |
| overview.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Live streaming overview | video | YES | — |
| create-livestream.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Creating a livestream | video | YES | Near-dup of v1 + devs version |
| livestream-from-browser.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Browser-based livestream | video | YES | Near-dup |
| stream-via-obs.mdx | v2/solutions/livepeer-studio/docs/livestream/ | OBS streaming setup | video | YES | Near-dup |
| playback-livestream.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Watching a livestream | video | YES | Near-dup |
| clip-livestream.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Clipping livestreams | video | YES | Near-dup |
| stream-health.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Monitoring stream health | video | YES | Near-dup |
| multistream.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Multi-streaming setup | video | YES | Near-dup |
| optimize-latency.mdx | v2/solutions/livepeer-studio/docs/livestream/ | Latency optimisation | video | YES | Near-dup |
| overview.mdx | v2/solutions/livepeer-studio/docs/video-on-demand/ | VOD overview | video | YES | — |
| upload-asset.mdx | v2/solutions/livepeer-studio/docs/video-on-demand/ | Uploading video assets | video | YES | Near-dup |
| playback-asset.mdx | v2/solutions/livepeer-studio/docs/video-on-demand/ | Playing back assets | video | YES | Near-dup |
| transcode-video.mdx | v2/solutions/livepeer-studio/docs/video-on-demand/ | Transcoding videos | video | YES | — |
| thumbnails-vod.mdx | v2/solutions/livepeer-studio/docs/video-on-demand/ | Thumbnail generation | video | YES | Near-dup |
| encrypted-assets.mdx | v2/solutions/livepeer-studio/docs/video-on-demand/ | Encrypted playback | video | YES | Near-dup |
| overview.mdx | v2/solutions/livepeer-studio/docs/access-control/ | Access control overview | video | YES | — |
| jwt.mdx | v2/solutions/livepeer-studio/docs/access-control/ | JWT authentication | api | YES | Near-dup |
| webhooks.mdx | v2/solutions/livepeer-studio/docs/access-control/ | Webhook-based access control | api | YES | Near-dup |
| overview.mdx | v2/solutions/livepeer-studio/docs/analytics/ | Analytics overview | video | YES | — |
| listen-to-events.mdx | v2/solutions/livepeer-studio/docs/analytics/ | Event listening | api | YES | — |
| webhooks.mdx | v2/solutions/livepeer-studio/docs/analytics/ | Analytics webhooks | api | YES | — |
| managing-projects.mdx | v2/solutions/livepeer-studio/docs/reference/ | Managing projects guide | video | YES | — |

### Network Architecture & Actors

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| overview.mdx | v2/about/network/ | Network execution layer — gateways, orchestrators, delegators, node types | general | YES | — |
| actors.mdx | v2/about/network/ | Network actors and their responsibilities | general | YES | — |
| job-lifecycle.mdx | v2/about/network/ | End-to-end state machine for compute jobs | general | YES | — |
| demand-side.mdx | v2/about/network/ | Gateway role, job submission, pricing from demand perspective | general | YES | — |
| supply-side.mdx | v2/about/network/ | GPU operators, pools, hardware, performance metrics | general | YES | — |
| marketplace.mdx | v2/about/network/ | Dynamic marketplace — bidding, routing, pricing, settlement | general | YES | — |
| interfaces.mdx | v2/about/network/ | REST, gRPC, GraphQL, JS SDK, CLI, smart contract interfaces | general | YES | — |
| fee-flow.mdx | v2/about/network/ | Payment model, revenue sharing, incentive alignment | general | YES | — |
| scaling.mdx | v2/about/network/ | Throughput, latency, scalability, future approaches | general | YES | — |
| technical-architecture.mdx | v2/about/network/ | Technical stack — go-livepeer, gateway, workers, APIs, CLI, SDKs | general | YES | — |
| delegators.mdx | v2/about/network/livepeer-actors/ | Delegator responsibilities, earning, decision factors | staking | YES | — |
| end-users.mdx | v2/about/network/livepeer-actors/ | Builders and end users as demand-side participants | general | YES | — |
| gateways.mdx | v2/about/network/livepeer-actors/ | Gateway responsibilities — job intake, routing, abstraction | general | YES | — |
| orchestrators.mdx | v2/about/network/livepeer-actors/ | Orchestrator role — compute, payment, economic participation | general | YES | — |

### Home & Community Pages

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| vision.mdx | v2/home/about/ | Livepeer story and founder vision | general | YES | — |
| benefits.mdx | v2/home/about/ | Livepeer advantages over centralised services | general | YES | — |
| ecosystem.mdx | v2/home/about/ | Organisational structure — Livepeer Inc., Foundation, SPEs | general | YES | — |
| evolution.mdx | v2/home/about/ | Historical timeline — video transcoding to AI compute | general | YES | — |
| roadmap.mdx | v2/home/about/ | Livepeer Foundation roadmap | general | YES | Near-dup of community version |
| applications.mdx | v2/home/solutions/ | Key real-world applications across industries | general | YES | — |
| landscape.mdx | v2/home/solutions/ | DeAI and video landscape perspective | general | YES | — |
| showcase.mdx | v2/home/solutions/ | Creative projects built on Livepeer | general | YES | — |
| verticals.mdx | v2/home/solutions/ | Industry verticals served by Livepeer | general | YES | — |
| governance.mdx | v2/community/community/ | Livepeer Foundation structure, governance, treasury, SPEs | governance | YES | — |
| livepeer-latest-topics.mdx | v2/community/community/ | Curated ecosystem highlights and forum topics | community | YES | — |
| roadmap.mdx | v2/community/community/ | Livepeer Foundation roadmap | community | YES | Near-dup of home version |
| trending-topics.mdx | v2/community/community/ | Social feed — forum, Discord, YouTube, X | community | YES | — |
| events-and-streams.mdx | v2/community/connect/ | Community events calendar and streams | community | YES | — |
| news-and-socials.mdx | v2/community/connect/ | News and social media links | community | YES | — |

### Documentation Guide (Meta)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| documentation-guide.mdx | v2/resources/documentation-guide/ | Main documentation contributor guide | help | YES | — |
| documentation-overview.mdx | v2/resources/documentation-guide/ | Overview of documentation structure | help | YES | — |
| contribute-to-the-docs.mdx | v2/resources/documentation-guide/contributing/ | Step-by-step docs contribution workflow | help | YES | — |
| ai-features.mdx | v2/resources/documentation-guide/ai-automations/ | AI features in docs system | help | YES | — |
| automations-workflows.mdx | v2/resources/documentation-guide/ai-automations/ | Documentation automation workflows | help | YES | — |
| research-and-fact-checking.mdx | v2/resources/documentation-guide/ai-automations/ | AI research and fact-checking procedures | help | YES | — |
| component-library.mdx | v2/resources/documentation-guide/component-library/ | MDX component reference library | help | YES | — |
| config.mdx | v2/resources/documentation-guide/component-library/ | Configuration components | help | YES | — |
| displays.mdx | v2/resources/documentation-guide/component-library/ | Display components | help | YES | — |
| elements.mdx | v2/resources/documentation-guide/component-library/ | Basic UI elements | help | YES | — |
| integrators.mdx | v2/resources/documentation-guide/component-library/ | Integration components | help | YES | — |
| overview.mdx | v2/resources/documentation-guide/component-library/ | Component library overview | help | YES | — |
| scaffolding.mdx | v2/resources/documentation-guide/component-library/ | Page scaffolding components | help | YES | — |
| wrappers.mdx | v2/resources/documentation-guide/component-library/ | Wrapper components | help | YES | — |
| authoring-guide.mdx | v2/resources/documentation-guide/copy-style/ | Docs authoring guidelines | help | YES | — |
| authoring-standard.mdx | v2/resources/documentation-guide/copy-style/ | Authoring standards | help | YES | — |
| style-guide.mdx | v2/resources/documentation-guide/copy-style/ | Copy style guide | help | YES | — |
| docs-features-and-ai-integrations.mdx | v2/resources/documentation-guide/features/ | Docs platform features and AI | help | YES | — |
| lpd-cli.mdx | v2/resources/documentation-guide/tooling/ | LPD CLI tool documentation | help | YES | — |
| snippets-inventory.mdx | v2/resources/documentation-guide/tooling/ | Documentation snippets inventory | help | YES | — |

### React SDK Migration Guides (v1)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| getting-started.mdx | v1/sdks/react/migration/3.x/ | React 3.x to 4.x migration guide | sdk | YES | — |
| Broadcast.mdx | v1/sdks/react/migration/3.x/ | Broadcast migration guide | sdk | YES | — |
| Player.mdx | v1/sdks/react/migration/3.x/ | Player migration guide | sdk | YES | — |
| LivepeerConfig.mdx | v1/sdks/react/migration/3.x/ | LivepeerConfig migration | sdk | YES | — |
| client.mdx | v1/sdks/react/migration/3.x/ | Client migration guide | sdk | YES | — |
| abis.mdx | v1/sdks/react/migration/3.x/constants/ | ABIs constants migration | sdk | YES | — |
| contract-addresses.mdx | v1/sdks/react/migration/3.x/constants/ | Contract addresses migration | sdk | YES | — |
| useCreateStream.mdx | v1/sdks/react/migration/3.x/stream/ | useCreateStream hook migration | sdk | YES | — |
| useStream.mdx | v1/sdks/react/migration/3.x/stream/ | useStream hook migration | sdk | YES | — |
| useUpdateStream.mdx | v1/sdks/react/migration/3.x/stream/ | useUpdateStream hook migration | sdk | YES | — |
| useStreamSession.mdx | v1/sdks/react/migration/3.x/stream/ | useStreamSession hook migration | sdk | YES | — |
| useStreamSessions.mdx | v1/sdks/react/migration/3.x/stream/ | useStreamSessions hook migration | sdk | YES | — |
| useAsset.mdx | v1/sdks/react/migration/3.x/asset/ | useAsset hook migration | sdk | YES | — |
| useCreateAsset.mdx | v1/sdks/react/migration/3.x/asset/ | useCreateAsset hook migration | sdk | YES | — |
| useUpdateAsset.mdx | v1/sdks/react/migration/3.x/asset/ | useUpdateAsset hook migration | sdk | YES | — |
| useAssetMetrics.mdx | v1/sdks/react/migration/3.x/asset/ | useAssetMetrics hook migration | sdk | YES | — |
| usePlaybackInfo.mdx | v1/sdks/react/migration/3.x/playback/ | usePlaybackInfo hook migration | sdk | YES | — |
| studio.mdx | v1/sdks/react/migration/3.x/providers/ | Studio provider migration | sdk | YES | — |
| migration-4.x.mdx | v1/sdks/react/migration/ | Version 4.x migration guide | sdk | YES | — |

### Core Concepts (v1)

| Filename | File location | Summary | Category | Nav? | Duplicate? |
|---|---|---|---|---|---|
| stream.mdx | v1/developers/core-concepts/core-api/ | Stream concept explanation | video | YES | — |
| asset.mdx | v1/developers/core-concepts/core-api/ | Asset concept explanation | video | YES | — |
| multistream.mdx | v1/developers/core-concepts/core-api/ | Multistream concept | video | YES | — |
| access-control.mdx | v1/developers/core-concepts/core-api/ | Access control concept | video | YES | — |
| webhooks.mdx | v1/developers/core-concepts/studio/ | Webhooks concept | video | YES | — |
| stream-health.mdx | v1/developers/core-concepts/studio/ | Stream health metrics concept | video | YES | — |
| in-browser-broadcast.mdx | v1/developers/core-concepts/studio/ | In-browser broadcasting concept | video | YES | — |
| orchestrators.mdx | v1/developers/core-concepts/livepeer-network/ | Orchestrator role explanation | general | YES | — |
| gateways.mdx | v1/developers/core-concepts/livepeer-network/ | Gateway role explanation | general | YES | — |
| delegators.mdx | v1/developers/core-concepts/livepeer-network/ | Delegator role explanation | general | YES | — |
| overview.mdx | v1/developers/core-concepts/player/ | Player concept overview | video | YES | — |

---

## Summary Statistics

| Category | v1 files | v2 files | Total | Duplicates identified |
|---|---|---|---|---|
| API references | 111 | ~95 | ~206 | ~65 (v1/v2 mirror) |
| SDK references | 76 | ~20 | ~96 | ~5 |
| Contract addresses | 1 | 5 | 6 | 5 near-dups (tab-scoped) |
| go-livepeer tech refs | 5 | ~12 | ~17 | ~10 (v1/orch/gw mirror) |
| AI pipeline specs | 10 | ~14 | ~24 | — |
| Glossaries | 0 | 13 | 13 | 12 subsets of canonical |
| FAQs | 0 | 4 | 4 | — |
| Troubleshooting | 1 | 3 | 4 | — |
| Knowledge base (v1) | 3 | 0 | 3 | — |
| Mental models/concepts | 11 | ~22 | ~33 | — |
| Changelogs | 0 | 19 | 19 | — |
| Guides (all types) | ~50 | ~80 | ~130 | ~20 (v1/v2 overlaps) |
| Tutorials | 5 | ~12 | ~17 | ~4 |
| Community resources | 2 | ~15 | ~17 | ~3 (awesome-livepeer) |
| Protocol/token refs | 0 | ~12 | ~12 | — |
| Exchange/RPC refs | 0 | 6 | 6 | 2 orch/gw near-dups |
| Solutions/products | 0 | ~6 | ~6 | — |
| Self-hosting (v1) | 4 | 0 | 4 | — |
| Documentation guide | 0 | ~20 | ~20 | — |
| **TOTAL** | **~279** | **~360+** | **~640+** | **~125** |

### Key Duplicate Clusters

1. **Studio REST API** — v1/api-reference/ mirrors v2/solutions/livepeer-studio/docs/api-reference/ (~65 files)
2. **AI Generate API** — v1/api-reference/generate/ overlaps v1/ai/api-reference/ (~10 files)
3. **Contract addresses** — 6 copies across about, resources, orchestrators, gateways, delegators
4. **go-livepeer refs** — v1/references/go-livepeer/ mirrors v2/gateways + v2/orchestrators versions
5. **Glossaries** — 13 tab-scoped glossaries, all subsets of v2/resources/glossary.mdx canonical
6. **Awesome Livepeer** — 4 copies (v1/references, v2/developers, v2/community, v2/changelog)
7. **Livestream/VOD guides** — v1/developers/guides/ overlaps v2/developers/guides/video/ and v2/solutions/livepeer-studio/
8. **Roadmap** — appears in v2/home, v2/community, and v2/about
