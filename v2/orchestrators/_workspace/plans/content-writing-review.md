# Review Flags — Orchestrator Content Pages

Generated: 2026-03-16  
Scope: All pages produced in this batch (P0-1 through P1-5, P2-1)  
Format: Per page. Each flag has a REVIEW tag, the claim that needs verification, and the SME who should verify it.

---

## pricing-strategy.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| PS-1 | `{/* REVIEW */}` line 74 | Network price range "500–2,000 wei per pixel" — sourced from config-draft research (March 2026). Active set pricing shifts continuously; verify current median and 25th/75th percentile before publish. | Rick / tools.livepeer.cloud |
| PS-2 | `{/* REVIEW */}` line 96 | `-priceFeedAddr` not required when using USD notation on Arbitrum mainnet — the default Chainlink ETH/USD feed should be pre-configured in go-livepeer. Verify the binary ships with this default and no additional flag is needed. | Rick |
| PS-3 | `{/* REVIEW */}` line 113 | `-autoAdjustPrice` production stability — confirm the flag is production-stable in the current release and not gated behind a feature flag or marked experimental. | Rick |
| PS-4 | `{/* REVIEW */}` AI pricing table (all rows) | Typical `price_per_unit` values per pipeline — sourced from diffusion-pipeline-setup.mdx (March 2026). These are described as baseline examples but should be cross-checked against current network rates at tools.livepeer.cloud before labelling as "typical". | tools.livepeer.cloud / Peter |
| PS-5 | `{/* REVIEW */}` line 177 | `-pricePerGateway` flag syntax — the flag name is confirmed in gateway-relationships.mdx but its input format (JSON map, address:price pairs, separate flag per gateway) is not documented in available source files. Flag for Rick to verify exact CLI interface. | Rick |

---

## payment-receipts.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| PR-1 | `{/* REVIEW */}` line 108 | Redemption gas cost range ($0.01–$0.05 USD per redemption) — from payments.mdx (March 2026). Arbitrum gas prices fluctuate; verify the range is still representative at current Arbitrum gas prices. | Rick / Arbiscan |
| PR-2 | `{/* REVIEW */}` line 162 | Log message strings — `Winning ticket`, `Redeemed ticket`, `Failed to redeem ticket`, `Ticket expired` — are representative strings. Exact wording in current go-livepeer source should be verified before operators use them for log filtering. | Rick |
| PR-3 | Scope delineation with payments.mdx | The scope note at the bottom of the page defines what this page covers vs what `payments.mdx` covers. If `payments.mdx` scope changes, this delineation should be updated. Not a factual error — architectural note for the content maintainer. | Alison / Wonderland |

---

## capacity-planning.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| CP-1 | `{/* REVIEW */}` line 90 | Test stream URL (`storage.googleapis.com/lp_testharness_assets/...`) — URLs on GCS buckets can be moved or expire. Verify the URL is still live before publishing. Flagged in source benchmarking.mdx. | Rick |
| CP-2 | `{/* REVIEW */}` line 101 | Rendition profile set — `transcodingOptions.json` verified as containing 4 profiles (240p, 360p, 480p, 720p) in March 2026; the v1 docs included a 5th 1080p profile that is no longer in the file. Confirm whether Gateways send 1080p source with their own rendition sets, and whether download bandwidth budgets should account for 1080p source. | Rick |
| CP-3 | `{/* REVIEW */}` line 131 | Real-Time Duration Ratio threshold of ≤ 0.8 — community convention from v1 documentation, not a go-livepeer hard limit. Confirm with Discord #orchestrators whether this threshold is still the current convention or has evolved. | Community / Discord #orchestrators |
| CP-4 | `{/* REVIEW */}` line 141 | NVENC consumer driver session cap (3–8 sessions) and the NVIDIA driver patch — the cap is real but the range and the patch should be confirmed against current driver versions. The decision to document or link the patch (and whether there are safety implications) should be made by Rick before publishing this claim. | Rick |
| CP-5 | `{/* REVIEW */}` line 163 | CPU transcoding session rule of thumb — v1 docs cite ~5 sessions (2021 hardware). Modern CPUs handle more. Community to provide current figures for representative CPUs. | Community / Discord #orchestrators |
| CP-6 | `{/* REVIEW */}` line 220 | `OrchestratorCapped` error string — from v1 documentation. Verify this is still the correct error string in current go-livepeer source when MaxSessions is exceeded. | Rick |
| CP-7 | `{/* REVIEW */}` VRAM table | VRAM per pipeline (warm model) — values sourced from diffusion-pipeline-setup.mdx warm model section. Should be cross-checked against model-demand-reference.mdx when that page merges to ensure consistent figures across the docs. | Wonderland / Rick |
| CP-8 | `{/* REVIEW */}` line 202 | Bandwidth per stream (~6 Mbps symmetric) — derived from 4-rendition set at 5,650 kbps total upload. If Gateways send 1080p source, download may be 6 Mbps or more. The symmetric figure should be confirmed once CP-2 is resolved. | Rick |
| CP-9 | `{/* REVIEW */}` line 245 | `-maxSessions` flag valid on both Orchestrator and Transcoder in split-node setup — accurate in v1 docs. Rick to confirm no flag rename in recent go-livepeer releases. | Rick |
| CP-10 | `{/* REVIEW */}` line 205 | Beta constraint: one warm model per GPU — confirm whether this limit is still in effect or has been lifted in a recent ai-runner release. | Rick / ai-runner team |

---

## ai-model-management.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| AM-1 | `{/* REVIEW */}` line 64 | Beta constraint: one warm model per GPU — same as CP-10. Should be lifted in sync once confirmed. | Rick / ai-runner team |
| AM-2 | `{/* REVIEW */}` line 100 | Restarting only the AI runner container (not go-livepeer) picks up aiModels.json changes — this workflow is described as correct but has not been independently verified against current go-livepeer container lifecycle behaviour. | Rick |
| AM-3 | `{/* REVIEW */}` VRAM table | Warm VRAM figures per pipeline — same source as capacity-planning.mdx. Reconcile with model-demand-reference.mdx on merge. | Wonderland |
| AM-4 | `{/* REVIEW */}` optimisation flags section | SFAST and DEEPCACHE are described as "experimental" — verify whether this is still the correct status label in the current ai-runner release, or whether they have graduated to stable. | Rick / ai-runner team |
| AM-5 | Content gap | The page notes demand should be checked weekly at tools.livepeer.cloud. This is correct guidance, but there is currently no documented community process for demand trend reporting. This is a gap in the ecosystem tooling, not a docs error — flagged for awareness. | Peter / SPE leads |

---

## reward-call-tuning.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| RT-1 | `{/* REVIEW */}` line 57 | Break-even stake threshold — described as "several thousand LPT" at illustrative rates. A worked numerical example using current LPT/ETH price and current inflation rate would improve this significantly. Needs current protocol data. | Mehrdad / Livepeer protocol |
| RT-2 | `{/* REVIEW */}` line 57 | LPT-to-ETH price and round inflation rate — these change dynamically. Any worked example must be clearly labelled "illustrative" and not cited as current. The Explorer link to "Estimated Reward This Round" is the correct live reference. | Mehrdad |
| RT-3 | `{/* REVIEW */}` line 97 | `livepeer_cli` option name/number for manual reward calling — the exact option text or number in the current livepeer_cli interactive menu should be verified. The v1 docs say `Invoke "reward"` but menu option numbers shift between releases. | Rick |
| RT-4 | `{/* REVIEW */}` line 130 | Prometheus metric name for last successful reward call — `livepeer_round_last_claim` is a representative name but should be verified against the current go-livepeer metrics export. | Rick |
| RT-5 | `{/* REVIEW */}` LIP-89 Treasury figure | 10% Treasury allocation from LIP-89 (March 2026) — confirmed in reward-mechanics.mdx source. Verify LIP-89 is still in effect and the percentage has not changed. | Mehrdad |

---

## llm-pipeline-setup.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| LP-1 | `{/* REVIEW */}` line 64 | Runner image tag `tztcloud/livepeer-ollama-runner:0.1.1` — image tags are not pinned by maintainers and the latest stable tag may have changed. Cloud SPE to advise current recommended tag. | Cloud SPE / j0sh |
| LP-2 | `{/* REVIEW */}` model table | Livepeer-compatible model list — the table reflects the Ollama public model library, not a Livepeer-specific compatibility list. Some models may require registration on the Livepeer verified model list before they can receive routed jobs. Cloud SPE / j0sh to confirm which Ollama models are currently on the verified list. | Cloud SPE / j0sh |
| LP-3 | `{/* REVIEW */}` line 153 | LLM pricing unit semantics — whether `pixels_per_unit` maps to tokens in go-livepeer's LLM implementation, and whether the per-million-tokens framing ($0.18/1M tokens from the example) is accurate. The implementation detail is unverified. | j0sh |
| LP-4 | `{/* REVIEW */}` line 166 | Test endpoint path and request body format for the livepeer-ollama-runner — the runner API contract (`/llm` endpoint, request body structure) should be confirmed against the current runner source. | Cloud SPE |
| LP-5 | Content gap | The Cloud SPE LLM guide at `livepeer.cloud/self-hosting-livepeers-llm-pipeline` is referenced in the source but not directly linked in this page (deferred until URL is confirmed still live and appropriate to link). Human to verify URL and add link. | Wonderland / human reviewer |

---

## audio-and-vision-pipelines.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| AV-1 | `{/* REVIEW */}` line 85 | audio-to-text pricing unit — described as "per millisecond of audio input". The source confirms milliseconds but the go-livepeer implementation should be independently verified to ensure the billing unit is ms and not another time unit. | j0sh |
| AV-2 | `{/* REVIEW */}` TTS section | text-to-speech pricing unit ambiguity — source docs describe "per character or per ms of output audio", implying variation by model. The actual go-livepeer billing unit for `text-to-speech` should be confirmed; if it is model-dependent, the page should say so explicitly. | j0sh |
| AV-3 | `{/* REVIEW */}` line 125 | segment-anything-2 `model_id` format — source shows `facebook/sam2-hiera-large` but the original Meta repository uses `facebookresearch/segment-anything-2`. Verify the correct HuggingFace path for the model as it appears on the Livepeer verified model list. | Rick / ai-runner team |
| AV-4 | `{/* REVIEW */}` line 163 | Beta constraint per-container clarification — the one-warm-model-per-GPU Beta constraint may apply per-GPU rather than per-container. If audio-to-text and text-to-image run in separate containers on separate GPUs, two warm models should be possible. Rick / ai-runner team to clarify the scope of the constraint. | Rick / ai-runner team |
| AV-5 | Content gap | No test endpoint command is provided for `text-to-speech` and `segment-anything-2` — the AI runner API for these pipelines was not available in the source files for this batch. A human reviewer should add pipeline-specific test commands for these two pipelines. | Wonderland / Rick |

---

## model-hosting.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| MH-1 | `{/* REVIEW */}` line 62 | Manual pre-download command syntax — `download_model.py`, flag names, and container invocation pattern should be verified against the current `livepeer/ai-runner` image. The script may have been renamed or the interface changed. | Rick / ai-runner team |
| MH-2 | `{/* REVIEW */}` disk size table | Disk size figures per model — all values are approximate estimates. Before publication, verify by checking each model's HuggingFace repository page for the exact file sizes, or by downloading each model and measuring. | Wonderland / human reviewer |
| MH-3 | `{/* REVIEW */}` line 98 | `token` field in aiModels.json for HuggingFace authentication — the field description in the source says "Bearer token for authenticating with the external container" which implies it is for BYOC containers, not HuggingFace gated model downloads. If HuggingFace authentication uses a different mechanism (e.g. environment variable, not the token field), the page is incorrect. Rick / ai-runner team to clarify. | Rick / ai-runner team |
| MH-4 | `{/* REVIEW */}` line 120 | Verified model list enforcement mechanism — described as enforced via the verified model list but the mechanism (protocol-level via aiServiceRegistry, gateway-level via maxPricePerCapability, or informally via routing preferences) is unconfirmed. If enforcement is informal rather than protocol-enforced, the language "Only models on the Livepeer verified model list can receive routed jobs" may be too strong. | Mehrdad / j0sh |
| MH-5 | Content gap | Model pre-download command for the Ollama runner is not covered here — Ollama model download uses `docker exec -it ollama ollama pull <tag>` which is covered in llm-pipeline-setup.mdx. A cross-reference from this page to that guide should be added by the human reviewer once that page is merged. | Wonderland |

---

## gateway-orchestrator-interface.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| GO-1 | `{/* REVIEW */}` line 86 | Default port for dual-mode (video + AI) combined orchestrator serviceAddr — the source shows `:8935` for video orchestrators, but v1 AI docs reference `:8936` for some AI configurations. Rick to confirm whether dual-mode registers a single serviceAddr port, or whether AI adds a second port. The page currently shows `:8935` as the default. | Rick |
| GO-2 | `{/* REVIEW */}` Prometheus metric names | Gateway (broadcaster) Prometheus metric names — `livepeer_broadcaster_sessions_total` and `livepeer_broadcaster_upload_errors` are from v1 documentation patterns. Rick to verify these names are still current in the go-livepeer metrics export. | Rick |
| GO-3 | `{/* REVIEW */}` autoAdjustPrice interaction | The pricing alignment section recommends setting the gateway cap 20–30% above the orchestrator base price to absorb `autoAdjustPrice` adjustments. The percentage headroom is a heuristic, not a protocol parameter. The actual price adjustment ceiling from `autoAdjustPrice` during high gas conditions should be confirmed so operators can size the headroom correctly. | Rick |
| GO-4 | Content gap | self-routing with an on-chain gateway discovering an on-chain orchestrator — the selection criteria (price, stake, performance) are mentioned but not quantified. The full gateway-to-orchestrator selection algorithm is documented in gateway-relationships.mdx. A cross-reference is included, but a human reviewer should verify the cross-reference path is correct after any IA restructuring. | Wonderland |

---

## Cross-page consistency notes

These flags apply across multiple pages and should be resolved once and applied consistently:

| # | Issue | Pages affected | Resolution |
|---|-------|----------------|------------|
| X-1 | **Beta constraint (one warm model per GPU)** — referenced in capacity-planning.mdx, ai-model-management.mdx, audio-and-vision-pipelines.mdx. Once Rick / ai-runner team confirm whether this constraint is still in effect, update all three pages consistently and remove the REVIEW flags. | CP, AM, AV | Rick / ai-runner team |
| X-2 | **VRAM table consistency** — warm VRAM figures appear in capacity-planning.mdx and ai-model-management.mdx. When model-demand-reference.mdx merges, reconcile all three tables so figures are identical across pages. | CP, AM | Wonderland |
| X-3 | **tools.livepeer.cloud vs livepeer.tools** — the brief references `livepeer.tools` in several places but the project context confirms `livepeer.tools` is down and `tools.livepeer.cloud` is the active community tool suite. All pages in this batch use `tools.livepeer.cloud`. Confirm this is correct before publish. | All | Wonderland |
| X-4 | **Pricing figures labelled "illustrative"** — the pricing-strategy.mdx and all pipeline pages include example `price_per_unit` values sourced from March 2026 data. Before publish, either update to current figures from tools.livepeer.cloud or add a visible callout on each page indicating values are illustrative and may not reflect current market rates. | PS, AV, DPS (not in this batch) | Wonderland / Peter |
| X-5 | **Verified model list reference** — model-hosting.mdx and llm-pipeline-setup.mdx both reference the Livepeer verified model list. Once the enforcement mechanism is confirmed (MH-4), update language consistently across both pages and in audio-and-vision-pipelines.mdx. | MH, LP, AV | Mehrdad / j0sh |

---

## Pages not produced in this batch

The following pages from the brief were not produced because they are tutorial stubs (P2-2 through P2-7). Their structure and source mapping are documented in the brief and ready for a subsequent writing session:

- `byoc-cpu-smoke-test.mdx`
- `zero-to-first-reward.mdx`
- `ai-earning-quickstart.mdx`
- `add-ai-to-video-node.mdx`
- `full-ai-pipeline-tutorial.mdx`
- `realtime-ai-tutorial.mdx`

These are Phase 2/3 priority per the brief. Source mapping for each is in the brief's P2-2 through P2-7 table.

---

## Update pages (not produced — already exist)

Five existing pages in the brief need targeted updates rather than rewrites:

| Page | Update type | Status |
|------|-------------|--------|
| `operator-rationale.mdx` | Add scannable decision matrix above the fold | Not produced — restructure only, no new content |
| `setup-options.mdx` | Replace "combined mode" with "dual mode" | Not produced — terminology find/replace |
| `ai-inference-operations.mdx` | Add "Already running video?" accordion + J6 callout | Not produced — scoped addition |
| `model-demand-reference.mdx` | Add demand/earnings context alongside VRAM data | Not produced — data sourcing from tools.livepeer.cloud required |
| `troubleshooting.mdx` | Add symptom quick-nav at top | Not produced — structural edit only |

These five updates require read access to the existing page content and are appropriate for a separate Codex session with explicit FORBIDDEN scope boundaries.
