# Review Flags — Tutorial Pages

Generated: 2026-03-16
Scope: All 6 tutorial pages produced in this batch
Format: Per page. Each flag has a REVIEW tag, the claim requiring verification, and the SME responsible.

<CustomDivider />

## byoc-cpu-smoke-test.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| BS-1 | `{/* REVIEW */}` Step 1 | go-livepeer binary download URL pattern — the `releases/latest/download/` URL pattern should be verified as stable across releases, and the correct archive filename for the current release confirmed. | Rick |
| BS-2 | `{/* REVIEW */}` Step 3 | `-byoc`, `-byocContainerURL`, `-byocModelID` flag names — these are present in the source tutorial but their exact names and stability in the current go-livepeer release should be verified before publication. The source BYOC tutorial (byoc-cpu-tutorial.mdx) used them, but they may have been renamed. | Rick |
| BS-3 | `{/* REVIEW */}` Part 3 | Community remote signer URL `signer.eliteencoder.net` — confirm the signer is still live and community-maintained. The source docs reference it as "maintained by John (Elite Encoder)". Availability should be confirmed in Discord #local-gateways before publication. | Community / j0sh |
| BS-4 | `{/* REVIEW */}` Port assignments | The tutorial uses `:7935` for orchestrator cliAddr and `:8936` for gateway httpAddr to avoid conflict. Verify this allocation is correct and that the gateway does not also try to bind `:8935` by default when `-httpAddr 0.0.0.0:8936` is set. | Rick |
| BS-5 | Content note | The test job uses `/live/video-to-video` as the gateway endpoint. This comes from the source tutorial. If the endpoint has changed in a recent release, this will produce a 404. Rick / j0sh to verify the current BYOC job endpoint on the gateway. | j0sh |
| BS-6 | Content gap | The Python SDK install command (`pip install git+https://github.com/j0sh/livepeer-python-gateway.git`) was in the source tutorial but excluded from this page to keep the tutorial simple. If a human reviewer wants to add the SDK path as an alternative, that content is in `source-pages/byoc-cpu-tutorial.mdx` lines 260-310. | Wonderland |

<CustomDivider />

## zero-to-first-reward.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| ZR-1 | `{/* REVIEW */}` Step 2 | First-run passphrase prompt — the tutorial states go-livepeer prompts for a passphrase via container logs on first start. Verify this is the current UX for the Docker image (not interactive stdin). If passphrase entry requires `-stdin` or a different flag, the instructions need updating. | Rick |
| ZR-2 | `{/* REVIEW */}` Step 3 | `livepeer_cli` option for viewing balances — the tutorial references "Get node status" as the option to view ETH and LPT balances. Verify this is the current menu option text in the CLI. | Rick |
| ZR-3 | `{/* REVIEW */}` Step 4 | `livepeer_cli` activation option — "Invoke multi-step become an orchestrator" is the option text from source pages. Verify this is still the exact wording in the current `livepeer_cli` menu. | Rick |
| ZR-4 | `{/* REVIEW */}` Step 4 | Activation transaction confirmation time — "1 to 3 minutes" is the stated time for Arbitrum confirmation. This is reasonable for Arbitrum One under normal conditions. Verify it hasn't changed with recent Arbitrum upgrades or Nitro-era gas changes. | Mehrdad |
| ZR-5 | `{/* REVIEW */}` Step 6 | Automatic reward calling log message — "Called Reward() for round XXXXX" is a representative log format. Verify the exact log message text in the current go-livepeer source for successful `Reward()` calls. | Rick |
| ZR-6 | `{/* REVIEW */}` Step 6 | Active set entry timing — "may take up to one full round" to appear in the active set. Verify whether activation takes effect immediately at the start of the next round or requires a full round to pass. | Mehrdad |
| ZR-7 | Honest time estimate | The "4 to 8 hours" estimate prominently flags LPT acquisition as the variable. This is a deliberate editorial choice to be honest about waiting time. If the estimate is wrong for the current LPT/exchange landscape, update it with community input. | Community / Wonderland |
| ZR-8 | Content gap | The tutorial does not cover the `livepeer_cli` passphrase-to-keystore flow in detail, linking instead to the Connect to Arbitrum guide. If that page (setup-connect-activate.mdx) has changed paths, the cross-reference may be broken. Wonderland to verify path after IA restructure. | Wonderland |

<CustomDivider />

## ai-earning-quickstart.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| AQ-1 | `{/* REVIEW */}` Step 3 | `dl_checkpoints.sh` script — the download command `bash -c "PIPELINE=text-to-image MODEL_ID=ByteDance/SDXL-Lightning bash /app/dl_checkpoints.sh"` is from the dual-mode-configuration.mdx source. Verify the script name, path, and invocation pattern are current in the latest `livepeer/ai-runner:latest` image. | Rick / ai-runner team |
| AQ-2 | `{/* REVIEW */}` Step 4 startup note | AI runner container name format — the tutorial tells the operator to look for `livepeer-ai-runner` containers via `docker ps`. Verify the actual container name prefix used by go-livepeer when it spawns AI runner containers via Docker-out-of-Docker. | Rick |
| AQ-3 | `{/* REVIEW */}` Step 5 | Local inference test endpoint — `curl -X POST http://localhost:8935/text-to-image` is flagged as the local orchestrator inference endpoint. The source pages are ambiguous about whether the local orchestrator exposes a direct AI HTTP endpoint or whether inference must go through a gateway. j0sh to confirm the correct local test path. | j0sh / Rick |
| AQ-4 | `{/* REVIEW */}` Step 5 | `livepeer_cli` activation option name — "Invoke multi-step become an orchestrator" repeated from zero-to-first-reward.mdx. Same verification needed. | Rick |
| AQ-5 | `{/* REVIEW */}` Step 5 | `getNetworkCapabilities` endpoint — `curl http://localhost:7935/getNetworkCapabilities` is the local capability check endpoint. Verify this endpoint exists at `:7935` (cliAddr port) in the current go-livepeer release. | Rick |
| AQ-6 | Model recommendation | `ByteDance/SDXL-Lightning` is recommended as the starting model. This was accurate in March 2026. If network demand has shifted significantly toward a different model (e.g. a new SDXL variant), update the recommendation. Check tools.livepeer.cloud before publication. | Peter / tools.livepeer.cloud |
| AQ-7 | AI-only earnings note | The tutorial states "No active set membership required" for AI routing. This is correct per the source documentation but should be confirmed against any recent protocol changes that might have altered AI routing mechanics. | Mehrdad / j0sh |

<CustomDivider />

## add-ai-to-video-node.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| AV-1 | `{/* REVIEW */}` VRAM table | VRAM viability table by GPU class — sourced from dual-mode-configuration.mdx REVIEW flags. The table states RTX 2060/3060 (8-12 GB) can run "light diffusion models with SFAST optimisation enabled." This is contested — the source has a REVIEW flag on this. Rick to advise realistic GPU minimums for diffusion pipelines alongside video. | Rick |
| AV-2 | `{/* REVIEW */}` Step 1 | `dl_checkpoints.sh` invocation — same as AQ-1. Shared verification needed. | Rick / ai-runner team |
| AV-3 | `{/* REVIEW */}` Step 4 | Container restart vs full stop — the tutorial uses `docker stop && docker rm && docker run -d` to restart with new flags. This is a full container replacement. If go-livepeer supports dynamic flag reloading or a `docker restart` path, the tutorial should be updated. Rick to advise. | Rick |
| AV-4 | `{/* REVIEW */}` Step 4 | Local AI inference test endpoint — same as AQ-3. j0sh to confirm. | j0sh / Rick |
| AV-5 | `{/* REVIEW */}` Step 4 | `getNetworkCapabilities` endpoint — same as AQ-5. | Rick |
| AV-6 | Critical framing | The "What Changes" table is the structural core of this page — the claim that on-chain registration, staking, reward calling, and video pricing all stay unchanged is accurate per the dual-mode-configuration.mdx source. Verify this remains true after any recent go-livepeer protocol changes. | Rick / Mehrdad |
| AV-7 | Content gap | The tutorial covers adding one AI pipeline. The dual-mode-configuration.mdx source has a section on assigning different pipelines to different GPUs (separate `aiModels.json` entries per GPU). This multi-GPU extension is excluded from the tutorial to keep scope narrow but is available in the full reference page. | Wonderland |

<CustomDivider />

## full-ai-pipeline-tutorial.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| FP-1 | `{/* REVIEW */}` Step 3 | `dl_checkpoints.sh` — same as AQ-1. Shared verification. | Rick / ai-runner team |
| FP-2 | `{/* REVIEW */}` Step 5 | Gateway AI inference endpoint `http://localhost:8936/text-to-image` — the tutorial routes the inference request through the gateway (port 8936) rather than directly to the orchestrator (port 8935). Verify this endpoint exists on the off-chain gateway in the current go-livepeer release when `-httpIngest` is set. | j0sh / Rick |
| FP-3 | `{/* REVIEW */}` Step 6 | Gateway log messages for routing and signing — "Routing job to orchestrator", "Calling remote signer: getOrchInfoSig", "Calling remote signer: signTicket" are representative log strings. Verify exact text in the current go-livepeer gateway log output. | Rick |
| FP-4 | `{/* REVIEW */}` Step 6 | Orchestrator log messages for job handling — "Received AI job: text-to-image", "Dispatching to AI runner container", "Inference complete", "Ticket received" are representative. Verify exact strings in current go-livepeer source. | Rick |
| FP-5 | Port allocation | The tutorial uses `:8935` for the orchestrator and `:8936` for the gateway httpAddr. The `-httpAddr 0.0.0.0:8936` flag explicitly sets this. Verify the gateway does not also attempt to bind `:8935` for any internal service, which would cause a conflict on the same machine. | Rick |
| FP-6 | Architecture scope | This tutorial uses off-chain mode throughout to avoid wallet requirements. The "What Just Happened" section distinguishes off-chain settlement from production on-chain settlement. This distinction must be preserved — do not remove the off-chain framing note. | Wonderland |

<CustomDivider />

## realtime-ai-tutorial.mdx

| # | Flag | Claim requiring verification | SME |
|---|------|------------------------------|-----|
| RT-1 | `{/* REVIEW */}` Step 2 | `live-base` image tag — `livepeer/ai-runner:live-base` is the tag used in realtime-ai-setup.mdx. Verify this tag is current and stable on Docker Hub. The source has a REVIEW flag on this ("Verify current image tag with Rick / go-livepeer Docker image map"). | Rick |
| RT-2 | `{/* REVIEW */}` Step 4 | `model_id: "streamdiffusion"` — the realtime-ai-setup.mdx source uses this value but flags it explicitly: "Confirm exact model_id format for live-video-to-video with Rick/j0sh — format may differ from batch pipelines." This REVIEW must be resolved before publication. | Rick / j0sh |
| RT-3 | `{/* REVIEW */}` Step 3 | ComfyStream download script — `python scripts/download_models.py` is from realtime-ai-setup.mdx. The source notes "Models are downloaded to the volume mounted by the AI runner container. Ensure the path matches what go-livepeer expects via the `-aiModelsDir` flag." The path alignment between the download output directory and `-aiModelsDir` must be verified. | Rick / comfystream team |
| RT-4 | `{/* REVIEW */}` Step 7 | ffmpeg RTMP test stream command — the gateway's RTMP ingest port is `:1935` per the gateway-docker-code.jsx source (`-rtmpAddr 0.0.0.0:1935`). The ffmpeg command sends to `rtmp://localhost:1935/live/test-stream-key`. Verify this stream key format and RTMP path is correct for the live-video-to-video gateway path. | j0sh / Rick |
| RT-5 | `{/* REVIEW */}` Step 8 | Gateway HLS output endpoint — `http://localhost:8936/hls/test-stream-key/index.m3u8` is used for output retrieval. Verify this is the correct HLS output path for a processed `live-video-to-video` stream in the current gateway implementation. | j0sh |
| RT-6 | `{/* REVIEW */}` Step 8 | Orchestrator log latency messages — "frame.*ms\|latency\|processing time" grep pattern assumes the orchestrator logs frame processing times. Verify that frame-level timing is actually logged and the format of those log entries in the current go-livepeer source. | Rick |
| RT-7 | Hardware requirement | The RTX 4090 / 24 GB VRAM requirement is stated clearly and the warning on sub-24 GB cards is explicit. The source (realtime-ai-setup.mdx) makes the same statement. This is a hard requirement not a guideline — preserve the warning. | Rick / community |
| RT-8 | Latency claim | "`under 100 ms per frame`" is the target stated in realtime-ai-setup.mdx. At 30 fps, the frame budget is 33 ms. The tutorial reproduces that target from the source. Verify whether the actual achieved latency on an RTX 4090 with StreamDiffusion at 2 steps is measured at 33 ms or the broader `under 100 ms` claim. | Rick / comfystream team |
| RT-9 | Content gap | The tutorial does not cover WebRTC-based streaming as an alternative to RTMP (using a browser or WebRTC client). WebRTC is the primary production path for Cascade. The RTMP path is used here because ffmpeg is simpler for a tutorial. A human reviewer should add a note pointing to the ComfyStream repository for WebRTC test utilities. | Wonderland |
| RT-10 | Content gap | ComfyUI workflow configuration is touched briefly (the JSON example) but not walked through. The full workflow authoring and node configuration is documented in the ComfyStream repository. A cross-reference to [github.com/livepeer/comfystream](https://github.com/livepeer/comfystream) is included in the Related Pages. | Wonderland |

<CustomDivider />

## Cross-tutorial consistency notes

| # | Issue | Tutorials affected | Resolution |
|---|-------|-------------------|------------|
| CT-1 | **`dl_checkpoints.sh` verification (AQ-1, AV-2, FP-1)** — the same download command appears in three tutorials. Once Rick / ai-runner team confirm the correct invocation, update all three pages in the same PR. | AQ, AV, FP | Rick / ai-runner team |
| CT-2 | **Local inference endpoint (AQ-3, AV-4, FP-2)** — whether the orchestrator exposes a direct `/text-to-image` endpoint, or whether inference must route through a gateway, affects three tutorials. j0sh to confirm once, apply to all three. | AQ, AV, FP | j0sh |
| CT-3 | **`livepeer_cli` activation option name (ZR-3, AQ-4)** — "Invoke multi-step become an orchestrator" appears in two tutorials. Verify once in the current CLI, update both. | ZR, AQ | Rick |
| CT-4 | **`getNetworkCapabilities` endpoint (AQ-5, AV-5)** — `curl http://localhost:7935/getNetworkCapabilities` appears in two tutorials. Verify the endpoint exists at the cliAddr port in current go-livepeer. | AQ, AV | Rick |
| CT-5 | **Model recommendations** — `ByteDance/SDXL-Lightning` is the recommended starting model in both ai-earning-quickstart and add-ai-to-video-node. If network demand shifts, update both consistently. Check tools.livepeer.cloud monthly. | AQ, AV | Peter / Wonderland |
| CT-6 | **Port assignments across tutorials** — each tutorial uses a consistent port scheme (orchestrator on `:8935`, gateway on `:8936` for httpAddr). The BYOC smoke test is the exception (orchestrator on `:8935`, gateway on `:8936` for httpAddr, but off-chain). Ensure no port conflicts exist in the combined setup. | All | Rick |
| CT-7 | **Off-chain vs on-chain framing** — BYOC smoke test and full-ai-pipeline-tutorial run off-chain. Zero-to-first-reward, ai-earning-quickstart, and add-ai-to-video-node run on-chain mainnet. realtime-ai-tutorial mixes both (orchestrator on-chain, gateway off-chain for test). The framing in each tutorial should be clear. No consistency fix needed, but reviewers should confirm the on/off-chain status of each tutorial is accurately stated. | All | Wonderland |

<CustomDivider />

## REVIEW flags inherited from source pages

The following REVIEW flags existed in source pages and were carried into the tutorials. They require upstream resolution before the tutorials can be marked production-ready:

| Source REVIEW | Carried into tutorial | Resolution needed |
|---|---|---|
| realtime-ai-setup.mdx: "Confirm exact model_id format for live-video-to-video" | realtime-ai-tutorial.mdx (RT-2) | Rick / j0sh |
| realtime-ai-setup.mdx: "Verify current image tag with Rick / go-livepeer Docker image map" | realtime-ai-tutorial.mdx (RT-1) | Rick |
| dual-mode-configuration.mdx: "Confirm complete dual-mode flag set with Rick — specifically whether -serviceAddr port for a combined node is 8935, 8936, or configurable" | add-ai-to-video-node.mdx (port assignment) | Rick |
| byoc-cpu-tutorial.mdx: implicit — BYOC flags need verification | byoc-cpu-smoke-test.mdx (BS-2) | Rick |

<CustomDivider />

## Pages not in scope for this review

The tutorial-review.md covers only the 6 tutorial pages. For review flags on the 9 non-tutorial pages produced in the previous batch (pricing-strategy, payment-receipts, capacity-planning, etc.), see `review.md` produced in that session.
