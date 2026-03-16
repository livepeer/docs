# Review Flags — Quickstart and Setup Pages

Generated: 2026-03-16
Scope: All 7 pages produced in this batch (2 quickstart + 5 setup)
Format: Per page. Each flag has the claim requiring verification and the SME responsible.

---

## quickstart-guide.mdx

No technical claims requiring SME verification. This is a pure router page.

| # | Issue | Notes |
|---|-------|-------|
| QG-1 | Path to `join-a-pool` — `/v2/orchestrators/guides/deployment-details/join-a-pool` | Verify this path exists in the current IA. Wonderland to confirm. |
| QG-2 | Path to `workload-options` — `/v2/orchestrators/guides/ai-and-job-workloads/workload-options` | Verify this path exists in the current IA. Wonderland to confirm. |

---

## quickstart-video-transcoding.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| QV-1 | `{/* REVIEW */}` Step 5 (AI test) | Local AI inference endpoint `/text-to-image` on the orchestrator — the test sends `curl -X POST http://127.0.0.1:8935/text-to-image`. Confirm this is the correct direct endpoint on the orchestrator (not requiring a gateway in the middle) in current go-livepeer. | j0sh / Rick |
| QV-2 | `stable` tag | The tutorial uses `livepeer/go-livepeer:stable`. Confirm this tag is maintained and tracks the latest stable release on Docker Hub. | Rick |
| QV-3 | `-serviceAddr 127.0.0.1:8936` for off-chain orchestrator | The quickstart uses port 8936 for the orchestrator serviceAddr to avoid conflict with the gateway on 8935. Confirm there is no issue with the gateway connecting to the orchestrator on 8936 in off-chain mode. | Rick |
| QV-4 | AI model download progression | The tutorial states "Downloading ByteDance/SDXL-Lightning..." will appear in logs followed by "Warm model loaded". Verify these are the actual log strings in current go-livepeer for model download and warm load. | Rick |
| QV-5 | `tztcloud/livepeer-ollama-runner:0.1.1` tag in LLM accordion | This tag was current as of March 2026. Cloud SPE to confirm the latest stable tag. | Cloud SPE |
| QV-6 | `docker pull livepeer/ai-runner:latest` | Confirm `latest` is the correct tag for the quickstart (not `stable` or a pinned version). | Rick / ai-runner team |
| QV-7 | LLM accordion — `url: "http://llm_runner:8000"` | Confirm the Ollama runner service name and port 8000 are correct when running in network_mode: host vs a Docker bridge network. The Docker hostname resolution differs between modes. | j0sh |

---

## setup-guide.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| SG-1 | Time estimate "2-4 hours for video; 4-8 hours for AI or dual mode" | These estimates primarily reflect LPT acquisition and model download time. Confirm they are a reasonable range for current market conditions (LPT availability on Arbitrum). | Community / Wonderland |
| SG-2 | Path to `requirements` — `/v2/orchestrators/guides/operator-considerations/requirements` | Verify this path exists in the current IA. Wonderland to confirm after IA restructure. | Wonderland |
| SG-3 | All 6 CardGroup paths in "After Setup" | Each card path must exist in the current IA. Wonderland to audit all 6 links after IA restructure. | Wonderland |

---

## setup-install.mdx (rs-install.mdx)

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| SI-1 | `{/* REVIEW */}` Docker tab | Version `v0.8.9` used in `docker pull livepeer/go-livepeer:v0.8.9` and download URLs. Confirm this is the current latest stable release or update to current. | Rick |
| SI-2 | Download URLs | All download URLs use `v0.8.9`. These are correct per the current-pages/setup-install.mdx source. If the version has changed, all URLs in the Linux tab need updating. | Rick |
| SI-3 | NVIDIA Container Toolkit install commands | The `nvidia-ctk` install commands are from the current setup-install.mdx source. Verify they are still current for the latest Ubuntu LTS releases. | Rick |
| SI-4 | macOS note | "macOS GPU transcoding uses the NVIDIA CUDA path, which requires an NVIDIA GPU. Most modern Macs use Apple Silicon (M-series) which is not supported for NVIDIA CUDA transcoding." Verify this statement is accurate — confirm no CUDA support on M-series Macs has been added. | Rick |
| SI-5 | Windows AI runner note | "The AI runner container requires Linux and does not run natively on Windows." Verify this is still current. | Rick / ai-runner team |
| SI-6 | `livepeer/ai-runner:latest` tag for dual mode pull | Confirm `latest` is the correct tag to recommend for the AI runner in the install step. If a specific pinned version is preferred for stability, update. | Rick / ai-runner team |

---

## setup-configure.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| SC-1 | `{/* REVIEW */}` VRAM table in Dual Mode tab | VRAM viability by GPU class is sourced from dual-mode-configuration.mdx. Rick to validate: can an RTX 3060/3070 (8-12 GB) run `audio-to-text` warm alongside video transcoding? The "light diffusion models with SFAST" claim was flagged as contested in the source. | Rick |
| SC-2 | AI port 8936 note | The configure source states "The AI Orchestrator uses port 8936 by default to avoid conflict with a transcoding Orchestrator on the same machine." The configure template uses 8935 for serviceAddr in all three tabs. Confirm whether 8935 or 8936 is correct for a combined video+AI node. | Rick |
| SC-3 | `{/* REVIEW */}` inherited | Source configure page has a REVIEW flag: "Confirm whether v0.8.9 source builds need any additional native packages beyond this Ubuntu dependency set on non-Docker hosts." Not directly in this page but relevant if binary install is used alongside Docker compose. | Rick |
| SC-4 | `-aiServiceRegistry` flag | The configure page does not include `-aiServiceRegistry` in any of the three docker-compose templates. The connect page covers it separately. Confirm this flag is correctly deferred to the connect step (not needed in the configure step). | Rick / j0sh |
| SC-5 | Pricing range "500-2,000 wei per pixel" | Sourced from current-pages/setup-configure.mdx. Verify this range is still representative of the active set before publication. | tools.livepeer.cloud / Peter |
| SC-6 | Docker socket mount | The AI and dual mode templates include `-v /var/run/docker.sock:/var/run/docker.sock` in the volumes section (expressed as YAML). Confirm this is correct syntax in docker-compose for a GPU container. | Rick |

---

## setup-connect-and-activate.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| CA-1 | `{/* REVIEW */}` Step 2 | "Get node status" as the `livepeer_cli` option for viewing account address — confirm this is the current menu option text. | Rick |
| CA-2 | `{/* REVIEW */}` Step 4 | `livepeer_cli` bond/stake option name — not specified in source pages. Rick to confirm the exact option name for bonding LPT in the current CLI release. | Rick |
| CA-3 | `{/* REVIEW */}` Step 5 | "Invoke multi-step 'become an orchestrator'" — sourced from current-pages/quickstart-video-transcoding.mdx Step 5. Rick to confirm this is still the exact option name in current livepeer_cli. | Rick |
| CA-4 | `{/* REVIEW */}` Step 6 | `-aiServiceRegistry` flag — confirm whether this is a separate required flag or whether it is automatically enabled when `-aiWorker` is set. j0sh / Rick to clarify. | j0sh / Rick |
| CA-5 | Reward cut / fee cut defaults | Recommended defaults: reward cut `10`, fee cut `95`. These are sourced from current-pages/quickstart-video-transcoding.mdx Step 5. Verify these are still reasonable defaults for the current network economics. | Community / Wonderland |
| CA-6 | Round duration | "Rounds are approximately 22 hours on Arbitrum." This is stated in multiple source pages. Confirm the round duration has not changed with recent Arbitrum protocol updates. | Mehrdad |
| CA-7 | Activation transaction confirmation time | "Confirmation takes 1-3 minutes on Arbitrum." Verify this is still representative of current Arbitrum confirmation times. | Rick |
| CA-8 | LPT acquisition note | The step correctly flags that LPT acquisition may take "hours to days." This is a deliberate editorial choice for honesty. If LPT availability has improved significantly (e.g. more DEX liquidity on Arbitrum), the note can be softened but not removed. | Community |
| CA-9 | `arb1.arbitrum.io/rpc` as public endpoint | Confirm this is still the correct public Arbitrum RPC URL. | Mehrdad / Offchain Labs |

---

## setup-test.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| ST-1 | `{/* REVIEW */}` Step 5 | `/text-to-image` endpoint on localhost:8935 — same as QV-1. j0sh / Rick to confirm. | j0sh / Rick |
| ST-2 | `{/* REVIEW */}` Step 6 | Log message for reward call — "Calling reward" or similar. Verify the exact string in current go-livepeer logs for a successful reward call. | Rick |
| ST-3 | Prometheus metric names | `segment_source_appeared_total`, `segment_transcoded_total`, `reward_call_count`, `current_round` — sourced from current-pages/setup-monitor.mdx. Confirm these metric names are still current in the go-livepeer metrics export. | Rick |
| ST-4 | AI metrics | `ai_request_count` and `ai_request_latency_seconds` — mentioned as AI-specific metrics in setup-monitor.mdx. Confirm these names are current in the go-livepeer AI worker metrics export. | Rick / ai-runner team |
| ST-5 | GPU temperature threshold | "Watch for temperature above 85°C" — sourced from setup-monitor.mdx. Confirm this is a reasonable threshold for the GPUs commonly used by Livepeer operators (RTX 3090/4090). | Community |
| ST-6 | "Not receiving jobs after 48 hours" accordion | The 48-hour wait is a heuristic. Confirm this is a reasonable time to wait before troubleshooting, given active set rotation timing and gateway routing behaviour. | Community / Rick |
| ST-7 | Quick-reference table path for AI inference | The table specifies `/text-to-image` for AI inference verification. Same as ST-1 — resolves with j0sh/Rick confirmation. | j0sh / Rick |

---

## Cross-page consistency notes

| # | Issue | Pages affected | Resolution |
|---|-------|----------------|------------|
| X-1 | **Local AI inference endpoint** — `/text-to-image` on the orchestrator appears in quickstart-video-transcoding.mdx (QV-1), setup-test.mdx (ST-1), and in the full-ai-pipeline-tutorial.mdx from the previous batch (FP-2). One confirmation from j0sh/Rick resolves all three pages. | QV, ST, FP | j0sh / Rick |
| X-2 | **`livepeer_cli` activation option name** — "Invoke multi-step 'become an orchestrator'" appears in setup-connect-and-activate.mdx (CA-3) and was also flagged in the tutorial batch (ZR-3, AQ-4). One confirmation from Rick resolves all. | CA, ZR, AQ | Rick |
| X-3 | **`livepeer/go-livepeer:stable` vs pinned version** — The quickstart uses `:stable`; the install page uses `:v0.8.9`. Decide whether the quickstart should pin a version or whether `:stable` is the preferred tag for new operators. Consistent tag recommendation should be applied across both pages. | QV, SI | Rick / Wonderland |
| X-4 | **`livepeer/ai-runner:latest` vs pinned** — The quickstart and install both use `:latest` for the AI runner. Production guidance typically recommends pinning. Decide on a policy and apply consistently. | QV, SI | Rick / ai-runner team |
| X-5 | **Port assignments** — quickstart uses 8936 for orchestrator serviceAddr and 8935 for gateway httpAddr. Setup configure uses 8935 for orchestrator serviceAddr in all three templates. These are different contexts (off-chain quickstart vs on-chain setup) but the difference should be documented clearly so operators don't confuse the two. | QV, SC | Wonderland to add a note in quickstart clarifying the port difference is intentional. |
| X-6 | **Round duration** — "approximately 22 hours" appears in setup-connect-and-activate and setup-test; "approximately 24 hours" appears in the quickstart-video-transcoding current source. Standardise on 22 hours (which is correct for Arbitrum) across all pages. | QV (source uses 24h), CA, ST | Mehrdad / Rick to confirm 22h is current. Wonderland to update any page still using 24h. |

---

## Absorbed pages

The following pages from the nav were absorbed or superseded by pages in this batch:

| Absorbed page | Content absorbed into | Notes |
|---|---|---|
| `r-monitor.mdx` (setup-monitor) | `setup-test.mdx` Step 6 | Basic Prometheus check and key metrics absorbed. Full monitoring (Grafana, alerting, DCGM) remains in Guides > Monitoring and Tools. |
| `rcs-requirements.mdx` (setup-requirements) | `setup-guide.mdx` "What You Will Need" table | Summary requirements table only. Full requirements reference remains in Guides > Operator Considerations > Requirements. |

---

## Pages not in scope for this batch

The review flags in this document cover only the 7 pages produced in this batch. For review flags on:
- Tutorial pages (6 files): see `tutorial-review.md`
- Guide pages (9 files): see `review.md`
