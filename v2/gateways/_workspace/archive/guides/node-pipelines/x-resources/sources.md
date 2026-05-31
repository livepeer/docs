# AI & Job Pipelines Section — Sources and Research Notes

**Session date:** 2026-03-13
**Pages produced:** overview.mdx, video-transcoding.mdx, ai-inference.mdx, byoc-pipelines.mdx, pipeline-configuration.mdx
**Previous session research:** /mnt/transcripts/2026-03-13-10-04-59-livepeer-monitoring-troubleshooting-docs.txt

<CustomDivider />

## Source files read (from all-resources.zip)

| File | Role | Used in | Reliability assessment |
|---|---|---|---|
| `ctx-gwnew--ai-configuration.mdx` | PRIMARY: AI gateway flags audit, -orchAddr, -httpIngest, -aiProcessingRetryTimeout, Docker examples, verification steps | ai-inference, pipeline-configuration | High — well-structured with explicit REVIEW flags on uncertain items |
| `ctx-new--ai-configuration.mdx` | PRIMARY: AI deployment walkthrough, gateway modes, component descriptions (AISessionManager, MediaMTX, Trickle, ai_process.go) | ai-inference | High — matches go-livepeer source code references |
| `v2-dev--ai-pipelines-overview.mdx` | PRIMARY: Three integration patterns (Standard API, ComfyStream, BYOC), pipeline table, SDK examples, model guidance | ai-inference, overview | High — current, detailed, developer-facing |
| `v2-guidesres--overview.mdx` | PRIMARY: Gateway pipeline overview, responsibilities table, pipeline types | overview | High — correct framing, used as structural basis |
| `v2-orch--job-types.mdx` | PRIMARY: Three orchestrator job categories (Transcoding, Realtime AI, Batch AI) | overview | High — confirmed via go-livepeer architecture |
| `v2-guidesres--byoc.mdx` | PRIMARY: Gateway-operator BYOC guide, routing by capability, operator responsibilities | byoc-pipelines | High — concise and accurately scoped to gateway operator |
| `v2-dev--ai-pipelines-byoc.mdx` | PRIMARY: BYOC architecture, model fit matrix, implementation patterns, hard constraints, setup steps | byoc-pipelines | High — detailed and well-sourced |
| `v2-dev--ai-pipelines-model-support.mdx` | SECONDARY: Model compatibility matrix (diffusion, ControlNet, vision models, face models) | byoc-pipelines | High — specific model families with fit ratings and reasons |
| `ctx-new--video-configuration.mdx` | PRIMARY: Video pipeline architecture, Mermaid diagram, essential flags, transcoding JSON, Docker/CLI examples | video-transcoding, pipeline-configuration | Medium — contains editorial comments indicating the page needs restructuring; content used selectively |
| `v2-run--video-configuration.mdx` | PRIMARY: Video config flags reference, transcoding options JSON, encoding ladder examples | video-transcoding, pipeline-configuration | Medium — same caveats as above; treated as supporting reference |
| `v1--transcoding-options.mdx` | PRIMARY: JSON transcoding profile format, per-platform setup (Docker, Linux, Windows) | pipeline-configuration | High — V1 but format is unchanged in V2 |
| `v2-setup--transcoding-options.mdx` | PRIMARY: V2 copy of transcoding options with same JSON template | pipeline-configuration | High — confirmed matches V1 format |
| `v1--models-config.mdx` | SECONDARY: aiModels.json format, pricing fields, optimization flags (SFAST, DEEPCACHE), external containers | pipeline-configuration | High — detailed field reference, matches ai-subnet documentation |
| `v1--ai-worker.mdx` | SECONDARY: Remote AI worker setup, orchestrator + worker split configuration, capacity formula | ai-inference (context) | Medium — V1 content, still architecturally relevant |
| `v1--ai-builders-gateways.mdx` | SECONDARY: AI gateway ecosystem overview, available gateways table (Studio, SPE, self-hosted) | ai-inference | Medium — useful context; specific URLs subject to change |
| `v2-run--transcoding.mdx` | Reference: Placeholder page confirming transcoding guide is a planned gap | overview (context) | Low — stub only |
| `ctx-new--video-configuration-view.mdx` | Reference: Tabbed alternative view of video config | video-transcoding (context) | Medium — duplicate of main video config |
| `v2-run--ai-configuration.mdx` | Reference | ai-inference (context) | Not read — identified as likely duplicate |
| `v1--models-download.mdx` | Reference | Not used | Not read — orchestrator-side only |
| `v1--benchmarking.mdx` | Reference | Not used | Not read — out of scope |
| `ctx-new--transcoding.mdx` | PRIMARY: Planned transcoding guide structure confirmation | video-transcoding (structure) | Low — placeholder |

<CustomDivider />

## Prior session research applied

The following verified facts from previous monitoring/troubleshooting and payments sessions were carried forward without re-research:

- **Ports confirmed:** Video gateway: RTMP `:1935`, HTTP `:8935`, CLI `:5935`. AI gateway: HTTP `:8937`.
- **Flag confirmed:** `-gateway` is canonical. `-broadcaster` is deprecated (may still work, not confirmed as fully removed — see REVIEW flags).
- **Payment system:** Probabilistic micropayment tickets, per-segment, redeemed on Arbitrum One TicketBroker. ETH deposit + reserve required for on-chain video.
- **AI off-chain:** No ETH required for standard off-chain AI gateway operation.
- **Remote signers:** PRs #3791 and #3822, merged January 2026. Live AI (live-video-to-video) only — transcoding excluded.
- **Warm model limit:** One warm model per GPU during beta (per v1--models-config.mdx).
- **Community tools:** `tools.livepeer.cloud` (active), `livepeer.tools` confirmed down.
- **aiModels.json:** Orchestrator-side configuration — pipeline, model_id, price_per_unit, warm, optimization_flags.
- **BroadcastSessionsManager:** `core/broadcast.go` — video orchestrator selection.
- **AISessionManager:** `server/ai_http.go` — AI orchestrator selection.
- **ai_process.go:** `server/ai_process.go` — AI job workflow (authenticate, select, pay, manage).
- **Pricing units:** Per-pixel for image pipelines; per-millisecond for audio-to-text and text-to-speech; interval-based for live-video-to-video.
- **Lightning model parameters:** 4–8 inference steps, guidance scale 1.0–2.0. Standard SDXL: 20–50 steps, guidance 7.0–9.0.

<CustomDivider />

## External sources referenced

| Source | Type | Used for | Verified |
|---|---|---|---|
| [go-livepeer/core/broadcast.go](https://github.com/livepeer/go-livepeer/blob/master/core/broadcast.go) | GitHub source | BroadcastSessionsManager confirmation | Yes — file exists, correct location |
| [go-livepeer/server/ai_http.go](https://github.com/livepeer/go-livepeer/blob/master/server/ai_http.go) | GitHub source | AISessionManager confirmation | Yes — file exists, correct location |
| [go-livepeer/server/ai_mediaserver.go](https://github.com/livepeer/go-livepeer/blob/master/server/ai_mediaserver.go) | GitHub source | AI pipeline entry point | Yes — file exists |
| [go-livepeer/server/ai_process.go](https://github.com/livepeer/go-livepeer/blob/master/server/ai_process.go) | GitHub source | AI job workflow | Yes — file exists |
| [livepeer/comfystream](https://github.com/livepeer/comfystream) | GitHub repo | ComfyStream architecture | Yes — repo exists |
| [tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities) | Community tool | Warm model discovery | Confirmed active (per previous session) |
| [go-livepeer/box/box.md](https://github.com/livepeer/go-livepeer/blob/master/box/box.md) | GitHub source | Realtime AI setup complexity warning | Yes — file exists |

<CustomDivider />

## Outstanding REVIEW flags (21 total across 5 pages)

### High priority — SME resolution required before merge

| # | Flag location | Uncertainty | SME |
|---|---|---|---|
| 1 | ai-inference.mdx: on-chain AI payment | Does live-video-to-video via dual gateway use PM tickets? Is it off-chain or on-chain depending on mode? | Rick / j0sh |
| 2 | ai-inference.mdx: getOrchestratorInfo endpoint | Confirm exact endpoint path for querying orchestrator AI capability | Rick / j0sh |
| 3 | ai-inference.mdx: warm model limit | Confirm whether the "one warm model per GPU" beta limit has changed | Rick / j0sh |
| 4 | ai-inference.mdx: LLM pricing unit | Confirm whether LLM pipeline charges per-token, per-request, or per-pixel | j0sh / Peter |
| 5 | ai-inference.mdx: text-to-speech pricing unit | Confirm unit: per-millisecond of audio or per-character | j0sh |
| 6 | ai-inference.mdx: -aiServiceRegistry flag | Confirm whether this flag is still required for on-chain AI, or has been superseded | Rick |
| 7 | pipeline-configuration.mdx: -maxPricePerCapability | Confirm exact flag name and JSON format for per-pipeline AI price ceilings | Rick |
| 8 | pipeline-configuration.mdx: dual gateway ports | Confirm whether both -httpAddr flags (8935 and 8937) can coexist in one command, or if dual mode uses a separate flag | Rick |
| 9 | pipeline-configuration.mdx: Chainlink contract address | Confirm Chainlink ETH/USD feed contract address on Arbitrum One | Rick / Mehrdad |
| 10 | byoc-pipelines.mdx: BYOC capability discovery endpoint | Confirm how BYOC capabilities are queried from an orchestrator (same /getOrchestratorInfo or different?) | Rick / j0sh |
| 11 | byoc-pipelines.mdx: -aiProcessingRetryTimeout scope | Confirm whether this flag applies to BYOC retries identically to standard AI pipeline retries | Rick / j0sh |

### Medium priority — flagged but less likely to be wrong

| # | Flag location | Uncertainty | SME |
|---|---|---|---|
| 12 | overview.mdx: live-video-to-video payment | Does live AI via dual gateway require ETH? Documented as conditional — needs explicit confirmation | Rick / j0sh |
| 13 | video-transcoding.mdx: -maxAttempts default | Default of 3 from source file — confirm this is still the go-livepeer default | Rick |
| 14 | video-transcoding.mdx: currentManifest endpoint | Confirm `/stream/current.m3u8` is still the path when -currentManifest is set | Rick |
| 15 | pipeline-configuration.mdx: h264 profile values | Confirm `h264constrainedhigh`, `h264high`, `h264main`, `h264baseline` are all valid values | Rick |
| 16 | pipeline-configuration.mdx: fps=0 behaviour | Confirm that `fps: 0` means "preserve source FPS" and is not invalid JSON | Rick |
| 17 | pipeline-configuration.mdx: gop as seconds or frames | Confirm whether `"gop": "1"` is 1 second or 1 frame | Rick |
| 18 | pipeline-configuration.mdx: aiPricing.json format | Confirm exact JSON schema for per-capability pricing — nested by pipeline then model_id | Rick / j0sh |
| 19 | pipeline-configuration.mdx: DEEPCACHE not suitable for Lightning | Confirmed in source (v1--models-config) and developer docs — but flag as risk in case optimizer changes | Rick |
| 20 | ai-inference.mdx: port 8937 as AI-only default | Confirm 8937 is the consistent AI gateway port across all deployment configurations | Rick |
| 21 | byoc-pipelines.mdx: cold start threshold | Source states &gt;10s triggers deprioritisation — confirm this threshold is documented or approximate | Rick / j0sh |

<CustomDivider />

## Journey evaluation: gaps and scores

| Page | Journey question | Gap assessment | Score |
|---|---|---|---|
| Pipeline Overview | What workloads can my gateway route? | Complete. Three pipeline types clearly distinguished, gateway vs orchestrator responsibilities clear, selection by gateway type table accurate. | 9/10 |
| Video Transcoding Pipeline | How do video jobs flow? | Complete. Architecture diagram from source, ingest paths, orchestrator selection criteria, transcoding profiles, on-chain payment flow with cost calculation, output and delivery. | 9/10 |
| AI Inference Pipeline | How do AI inference jobs flow? | Mostly complete. All pipeline types covered. Known gap documented (no unified model registry). Platform limitations explicit. Several REVIEW flags on pricing units. | 8/10 |
| BYOC Pipelines | Custom containers on the network | Complete for gateway operator scope. Model fit matrix accurate (from developer source). Hard constraints documented. Clear handoff to developer guide. | 9/10 |
| Pipeline Configuration | Configure transcoding profiles and AI routing | Complete. JSON profile format with full field reference, per-platform setup (Docker, Linux, Windows), AI flags with Go duration examples, quality-cost tradeoffs, validation steps. | 9/10 |

**Structural gap identified during production:**

The "known gap" flag in the original brief (no unified AI model registry) has been surfaced explicitly in ai-inference.mdx with the current community workarounds documented and a call to action for the forum discussion. No additional structural gaps identified beyond what was already in the stub briefs.

**Video content:**

No embeddable Titan Node, Livepeer Foundation, or community tutorial videos were found specifically covering pipeline configuration or AI inference routing from a gateway operator perspective during this session. The monitoring/troubleshooting session also found no embeddable tutorials for payment setup. This remains an open gap.

Community video resources worth checking:
- [Titan Node YouTube](https://www.youtube.com/@TitanNode) — has orchestrator setup tutorials; gateway coverage unclear
- [Livepeer Foundation YouTube](https://www.youtube.com/@livepeer) — general network introductions; no operator tutorials found
- Recommend reaching out to DeFine or Titan-Node SPE leads to commission or link gateway operator walkthroughs

<CustomDivider />

## Recommendations for future work

1. **Unified AI model registry:** The most impactful gap. A community-maintained JSON endpoint or on-chain registry of AI capabilities would eliminate the current manual discovery problem. Raise on forum and with Peter (AI SPE Lead).

2. **`-maxPricePerCapability` documentation:** Flag name and JSON schema need Rick confirmation before the Pipeline Configuration page can be considered merge-ready.

3. **Dual gateway port configuration:** The interaction between two `-httpAddr` flags in a single go-livepeer command needs verification. This may require a separate flag or a different flag name for the AI port in dual mode.

4. **Video tutorial production:** Commission a 5–10 minute walkthrough of: (1) transcoding profile setup, (2) AI gateway first inference request, (3) monitoring with Prometheus. Titan-Node would be the natural candidate.

5. **aiModels.json page for orchestrators:** The `v1--models-config.mdx` content is detailed and accurate but lives in the V1 tree. A V2 page explaining aiModels.json is a gap in the Orchestrators section that would complement these gateway-operator pages.
