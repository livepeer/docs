# Research Report — `v2/orchestrators/resources/faq.mdx`
**Brief 1 · P0 · Create**  
**Date:** 10 March 2026  
**Researcher:** Claude (Wonderland session)  
**Status:** Complete — ready for human review before draft insertion

---

## 1. Sources Consulted

### Sources Log

| # | Source | URL | Content found |
|---|--------|-----|---------------|
| 1 | Livepeer Docs v1 — Orchestrator Troubleshoot | `docs.livepeer.org/orchestrators/guides/troubleshoot` (v1, 404 on direct fetch — content retrieved via Google snippet) | OrchestratorCapped, insufficient funds for gas, transcode/segment loop timed out, pixel format errors, serviceAddr mismatch error, ticket parameters error. Exact error message text confirmed. |
| 2 | Livepeer Docs v1 — Orchestrator Get Started | `docs.livepeer.org/orchestrators/guides/get-started` | Startup command flags: `-orchestrator`, `-transcoder`, `-nvidia`, `-pricePerUnit` (wei per pixel), `-serviceAddr`; active set = top 100 by stake; LPTU denomination; keystore default path `~/.lpData/arbitrum-one-mainnet/keystore`; livepeer_cli activation flow |
| 3 | Livepeer Docs — AI Models Config | `docs.livepeer.org/ai/orchestrators/models-config` | aiModels.json full schema (pipeline, model_id, warm, price_per_unit, pixels_per_unit, url, token, capacity); SFAST/DEEPCACHE flags; capacity defaults to 1; external container token security note |
| 4 | Livepeer Docs — AI Pipelines Overview | `docs.livepeer.org/ai/pipelines/overview` | Current supported pipelines: audio-to-text, image-to-image, image-to-text, image-to-video, segment-anything-2, text-to-image, text-to-speech, upscale; warm model recommendation during Beta |
| 5 | go-livepeer Releases | `github.com/livepeer/go-livepeer/releases` | Single unified binary confirmed (AI and mainnet merged — no separate AI build); `-serviceAddr` validation added on startup (PR #3156); `-gateway` flag is current (replaces `-broadcaster`) |
| 6 | Cloud SPE — Ollama LLM Runner Guide | `livepeer.cloud/self-hosting-livepeers-llm-pipeline-...` | Official docs suggest 16GB VRAM for AI; Cloud SPE's Ollama runner works on 8GB+ GPUs (RTX 1080, 2060 etc.); aiModels.json entry example for llm pipeline confirmed; logs on successful runner start confirmed |
| 7 | Livepeer Forum — "Orchestrator setup - newbie" | `forum.livepeer.org/t/orchestrator-setup-newbie/1468/1` | "orchestrator not available" error at startup confirmed as a recurrent newbie pain point; two root causes identified: wallet not funded (no ETH/LPT), and port 8935 not forwarded |
| 8 | Livepeer Forum — Orchestrator Pool Modification pre-proposal | `forum.livepeer.org/t/orchestrator-pool-modification-pre-proposal/1795` | Active set cap = 100 orchestrators; minimum stake = stake of current 100th orchestrator (check Explorer) |
| 9 | Livepeer Forum — Potential Demand Increase | `forum.livepeer.org/t/potential-demand-increase-and-network-impacts/2254` | Operators at scale; stake-weight proportional job allocation confirmed |
| 10 | Messari Q4 2024 Brief | `messari.io/report/livepeer-q4-2024-brief` | Transcoding usage +10% QoQ; stake weight proportional to job receipt confirmed; active set top-100 mechanics confirmed |
| 11 | Messari Q1 2024 Brief | `messari.io/report/livepeer-q1-2024-brief` | Top-5 operators by stake earn 40–50% of staking rewards but only ~20% of transcoding fees; smaller operators do ~80% of transcoding work — pricing strategy matters |
| 12 | go-livepeer Issues — Config File | `github.com/livepeer/go-livepeer/issues/2047` | OrchestratorCapped error pattern confirmed from community Discord quote; `-maxSessions` flag mentioned as the setting |
| 13 | gpu-nodes-ia-planning.md (project file) | Local project context | Pain points per persona confirmed: LPT acquisition barrier, pool vs solo confusion, pricePerUnit guidance absent, serviceAddr networking issues, "Orchestrator not available" recurrence, monitoring complexity, AI pipeline config (aiModels.json) underdocumented, remote worker setup in Discord only, BYOC scattered |
| 14 | gateways-tab-summary.md (project file) | Local project context | pricePerUnit confusion confirmed: gateway sets max price it *pays* orchestrators; video and AI use different pricing units; this is a top confusion point |
| 15 | local-gateways-discord.txt (project file) | Discord transcript | Remote signer discussion; off-chain gateway vs on-chain; SDK builder pain points around discovery and auth — confirms ecosystem complexity that drives FAQ questions |
| 16 | Mirror.xyz — Introducing Livepeer AI | `mirror.xyz/livepeer.eth/-60buxSsVjFmhRohaV_zgFQVH0OxwIjE7icd8DHktLc` | AI network architecture; warm model requirement during Beta confirmed; per-task pricing model; pipeline definition confirmed |

---

## 2. Confirmed Pain Points

| # | Symptom | Source(s) | Resolution confirmed? | Where to verify |
|---|---------|-----------|----------------------|-----------------|
| 1 | "Service address `https://127.0.0.1:4433` did not match discovered address `https://127.1.5.10:8935`; set the correct address in livepeer_cli or use `-serviceAddr`" | v1 docs troubleshoot page (source 1) | ✅ Yes | Override with `-serviceAddr IP:port` matching on-chain registration |
| 2 | `OrchestratorCapped` error | v1 docs (source 1), go-livepeer issues (source 12) | ✅ Yes | Two causes: `-maxSessions` limit hit, OR GPU hit NVENC/NVDEC hardware session limit |
| 3 | `insufficient funds for gas * price + value` | v1 docs (source 1) | ✅ Yes | Add more ETH to Arbitrum wallet |
| 4 | Transcode loop / Segment loop timed out logs | v1 docs (source 1) | ✅ Yes — benign | Session cleanup after no segments received. Not an error requiring action. |
| 5 | Ticket parameters error | v1 docs (source 1) | ✅ Yes | Usually transient — caused by gateway delay vs chain block polling. Wait and monitor. |
| 6 | "Orchestrator not available" on startup | Forum (source 7) | ✅ Yes | Wallet not funded, or port 8935 not forwarded/publicly reachable |
| 7 | Not receiving any jobs after activation | Sources 2, 8, 9 | ✅ Yes | Four causes: not in top-100 active set; pricePerUnit too high; serviceAddr unreachable; node not activated via livepeer_cli |
| 8 | pricePerUnit confusion — operators set value in ETH not wei | Sources 2, 14 | ✅ Yes | Value is in wei per pixel. 1 wei = 0.000000000000000001 ETH. Check `livepeer.tools` for market rate. |
| 9 | GPU not detected / `-nvidia` flag not working | Source 1, source 2 | ✅ Yes | NVIDIA driver below minimum; CUDA mismatch; wrong GPU IDs in `-nvidia` flag |
| 10 | AI Runner container not starting | Sources 3, 6 | ✅ Yes | Wrong image tag; insufficient VRAM for loaded models; Docker not configured for GPU (NVIDIA Container Toolkit) |
| 11 | aiModels.json errors — no jobs received for AI pipeline | Sources 3, 6 | ✅ Yes | Missing required fields; model not in approved registry; `url` field not pointing to running container; `warm: false` means models load on demand and may time out first request |
| 12 | Reward call not made — missing LPT rewards | Source 1 (`-reward=false` note) | ✅ Yes | For split O+T setups: must add `-reward=false` to all processes; only the orchestrator process should call reward |
| 13 | Node drops from active set unexpectedly | Source 2 | ✅ Yes | If dropped from top-100, re-register OR stake must change (increase or decrease) to trigger re-entry |
| 14 | Pool worker not connecting / no earnings | Sources 8, 13 | ⚠️ Partially — pool-specific details vary by pool | Worker must run transcoder process only (not full orchestrator); pool handles on-chain operations; specific pool documentation varies |
| 15 | Windows: AI binary not available | Source 5, gateways tab summary (source 14) | ✅ Yes | AI gateway and AI orchestrator binary not available for Windows. Linux required. |

---

## 3. Exact Error Message Text Confirmed

These are verbatim error messages confirmed from v1 docs troubleshoot page and go-livepeer source:

```
Service address https://127.0.0.1:4433 did not match discovered address https://127.1.5.10:8935; set the correct address in livepeer_cli or use -serviceAddr
```

```
OrchestratorCapped
```

```
insufficient funds for gas * price + value
```

```
Transcode loop timed out
```

```
Segment loop timed out
```

```
Error ticket params
```

```
orchestrator not available
```

---

## 4. Media Candidates

| # | Title | URL | Type | Relevance | Embed candidate? |
|---|-------|-----|------|-----------|-----------------|
| 1 | Livepeer Staking in 10 Minutes — Titan Node | Listed in `awesome-livepeer` | YouTube video | Delegation / staking FAQ section | ⚠️ Need URL — referenced but not linked in source |
| 2 | Video setup guide — Titan Node | Listed in `awesome-livepeer` | YouTube video | Installation / setup errors | ⚠️ Need URL — referenced but not linked in source |
| 3 | Self-Hosting Livepeer's LLM Pipeline (Cloud SPE) | `livepeer.cloud/self-hosting-livepeers-llm-pipeline-...` | Blog post | AI Runner setup, aiModels.json, Ollama runner, 8GB VRAM | ✅ Yes — link in "Further reading" for AI pipeline section |
| 4 | Livepeer Discord `#orchestrating` | `discord.gg/xpKATpA7` | Community channel | All troubleshooting escalation | ✅ Yes — escalation block |
| 5 | Livepeer Forum `forum.livepeer.org/c/transcoding` | `forum.livepeer.org/c/transcoding` | Forum | All orchestrator issues | ✅ Yes — escalation block |

**Note:** Titan Node and Video Miner YouTube content is confirmed to exist (referenced in `awesome-livepeer`) but specific URLs were not retrievable from available sources. Recommend asking Rick or Titan-Node SPE lead for current links before embedding.

---

## 5. Unverified Items — Flagged for SME Review

| Claim | Why unverified | Suggested verifier |
|-------|---------------|-------------------|
| Minimum NVIDIA driver version required | Not found in v1 docs or release notes during this session | go-livepeer README, or Rick (@rickstaa) |
| CUDA minimum version for current release | Not specified in sources reviewed | go-livepeer release notes, or check `go-livepeer/cmd/livepeer/main.go` |
| Specific minimum stake in LPT to enter active set | Varies over time — must be checked live on Explorer | `explorer.livepeer.org` — 100th orchestrator by stake |
| `maxSessions` default value | Referenced in issue #2047 but not confirmed from source code | go-livepeer source `core/orchestrator.go` |
| Pool worker connection flags for Video Miner / Titan Node | Pool-specific — not in go-livepeer official docs | Pool operator documentation, Titan-Node SPE lead |
| Whether `-reward=false` is still required for transcoder-only processes in current release | Referenced in v1 docs but may have changed in recent releases | go-livepeer release notes / @rickstaa |

---

## 6. Gaps to Note

- Discord `#orchestrating` was not directly searchable in this session (no access). The pain points above are sourced from v1 docs, forum threads, project files, and community blog posts — all triangulated. Direct Discord search would strengthen the AI Pipeline Errors section in particular. Recommend asking Peter or a community member to pull the top 5 Discord `#orchestrating` threads from Q4 2024–Q1 2026 before publishing.
- Pool Worker (Persona B) errors are underrepresented because pool-specific docs live outside Livepeer's official repo. The escalation block will direct pool workers to pool-specific Discord channels.
- Windows orchestrator support: confirmed Windows binary exists for transcoding orchestrators, but AI gateway/AI orchestrator pipeline is Linux-only. This needs a clear note on the page.
