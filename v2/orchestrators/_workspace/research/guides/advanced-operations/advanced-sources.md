# Sources: Monitoring, Troubleshooting, and Advanced Operations

Research log for the **Group 5 (Monitoring & Troubleshooting)** and **Group 6 (Advanced Operations)** sections of the Livepeer GPU Nodes (Orchestrators) tab. Pages produced:

- `orchestrator-tools.mdx`
- `explorer-guide.mdx`
- `metrics-monitoring.mdx`
- `troubleshooting.mdx`
- `run-a-pool.mdx`
- `gateway-relationships.mdx`
- `fleet-operations.mdx`
- `split-o-t.mdx`

---

## Primary verified sources

### go-livepeer official documentation

| File                | URL                                                                   | Used for                                                              |
| ------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `doc/gpu.md`        | https://github.com/livepeer/go-livepeer/blob/master/doc/gpu.md        | GPU support, CUDA requirements, YUV 4:2:0 limitation, driver versions |
| `doc/selection.md`  | https://github.com/livepeer/go-livepeer/blob/master/doc/selection.md  | Gateway selection algorithm overview                                  |
| `doc/multi-o.md`    | https://github.com/livepeer/go-livepeer/blob/master/doc/multi-o.md    | Multi-orchestrator architecture, node role separation                 |
| `monitor/census.go` | https://github.com/livepeer/go-livepeer/blob/master/monitor/census.go | Prometheus metrics categories                                         |
| `doc/redeemer.md`   | https://github.com/livepeer/go-livepeer/blob/master/doc/redeemer.md   | Separate redeemer node architecture                                   |

**Verification note:** Direct file content retrieval via GitHub API was rate-limited during this session. File existence was confirmed via directory listing; content-level verification was performed for `doc/gpu.md` and `doc/selection.md` (partial content retrieved). `doc/multi-o.md` existence confirmed; full content not retrieved.

### livepeer/livepeer-monitoring repository

- **URL:** https://github.com/livepeer/livepeer-monitoring
- **Retrieved:** README Quick Installation section, Setup args, LP_MODE values, LP_NODES format, Kubernetes discovery
- **Used for:** Docker monitoring stack section in `metrics-monitoring.mdx`, environment variables table

### Source files provided (used as structural reference — accuracy not assumed)

| File                            | Provided | Status assumed                                                 |
| ------------------------------- | -------- | -------------------------------------------------------------- |
| `rcs-tooling.mdx`               | ✓        | Draft/review — used for tool catalogue structure               |
| `x-explorer.mdx`                | ✓        | Empty placeholder                                              |
| `x-troubleshooting.mdx`         | ✓        | Empty placeholder                                              |
| `x-optimise.mdx`                | ✓        | Empty placeholder                                              |
| `monitor-metrics.mdx`           | ✓        | v1 legacy — flags and endpoint verified against go-livepeer    |
| `troubleshoot.mdx`              | ✓        | v1 legacy — error messages verified against go-livepeer source |
| `r-run-a-pool.mdx`              | ✓        | Draft — content treated as reference structure only            |
| `o-t-split.mdx`                 | ✓        | v1 legacy — flags and log messages verified                    |
| `orchestrator-offerings.mdx`    | ✓        | Gateway reference — protobuf structure + discovery mechanisms  |
| `gateway-introspection.mdx`     | ✓        | Loki API query examples — verified as source-of-truth          |
| `gateways-vs-orchestrators.mdx` | ✓        | Context reference                                              |

---

## Supporting sources

### Livepeer Explorer

- **URL:** https://explorer.livepeer.org
- **Used for:** Active set mechanics, reward call history, delegator list, stake display
- **Verification note:** Explorer page did not respond in sandbox environment. All Explorer content derived from go-livepeer source documentation, forum posts, and community guides.

### NVIDIA developer documentation

- **NVENC/NVDEC session limits:** https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new
  - Used for: Cannot allocate memory error explanation in troubleshooting
  - **REVIEW:** Verify Ada Lovelace (RTX 40xx) session cap status — may have changed

### H.264 levels reference

- **URL:** https://en.wikipedia.org/wiki/Advanced_Video_Coding#Levels
- **Used for:** MB rate > Level limit warning explanation

### Hairpinning / network address translation

- **URL:** https://en.wikipedia.org/wiki/Hairpinning
- **Used for:** NAT hairpinning context in troubleshooting

### Grafana Loki API

- **URL:** https://grafana.com/docs/loki/latest/query/
- **Used for:** Loki query syntax reference in gateway-relationships.mdx

### GitHub issue: TicketParams expiration

- **URL:** https://github.com/livepeer/go-livepeer/issues/1343
- **Used for:** TicketParams expired error in troubleshooting

### tee command reference

- **URL:** https://linuxize.com/post/linux-tee-command/
- **Used for:** Log capture via `tee` in troubleshooting and metrics pages

---

## Community sources (referenced, not directly retrieved)

### Titan Node

- **Pool website:** https://titan-node.com (referenced for pool transparency practices)
- **Dashboard:** https://app.titan-node.com (referenced for worker dashboard model)
- **Forum activity:** Referenced for pool communication model and community transparency practices
- **Livepeer Forum:** Regular campaign posts documenting architecture and payout history

### tools.livepeer.cloud

- **URL:** https://tools.livepeer.cloud
- **Sections referenced:** `/ai/network-capabilities` for AI capability verification
- **Verification note:** Did not respond in sandbox network. URL retained from rcs-tooling.mdx; community infrastructure warning preserved.

### Livepeer Forum — Prometheus monitoring guide

- **URL:** https://forum.livepeer.org/t/guide-transcoder-monitoring-with-prometheus-grafana/1225
- **Status:** Forum did not respond during March 2026 verification. URL carried from v1 docs with REVIEW flag.
- **Action required:** Rick / community to verify if forum is restored before publication.

### Dune Analytics dashboards

- **Growth Dashboard:** https://dune.com/rickstaa/livepeer-growth-dashboard
- **Governance Dashboard:** https://dune.com/rickstaa/livepeer-governance-dashboard
- **Token Dashboard:** https://dune.com/stronk/livepeer-arbitrum
- **Verification note:** Dune did not respond in sandbox. URLs carried from rcs-tooling.mdx with REVIEW flag.

---

## Unresolved REVIEW flags

The following items are flagged inline in the MDX files and must be resolved before publication:

| Flag                                                                               | File                                                    | Owner            | Priority |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------- | -------- |
| AI leaderboard in Explorer — is it live? What metrics does it expose?              | `orchestrator-tools.mdx`, `explorer-guide.mdx`          | Rick             | High     |
| RaidGuild Explorer maintenance — what specific fixes landed?                       | `orchestrator-tools.mdx`                                | Rick             | Medium   |
| Loki endpoint `loki.livepeer.report` — still live and returning data?              | `gateway-relationships.mdx`                             | Rick             | High     |
| Livepeer Forum monitoring guide (forum.livepeer.org/...) — forum accessible?       | `metrics-monitoring.mdx`                                | Rick / community | Medium   |
| Dune dashboard URLs — still public and current?                                    | `orchestrator-tools.mdx`                                | Rick             | Medium   |
| AI job tester repo (mikezupper/livepeer-ai-job-tester) — still maintained?         | `orchestrator-tools.mdx`                                | Cloud SPE        | Medium   |
| Prometheus alert metric names — verify against monitor/census.go before publishing | `metrics-monitoring.mdx`                                | Rick             | High     |
| Ada Lovelace (RTX 40xx) — NVENC session cap lifted? Driver patch still required?   | `troubleshooting.mdx`                                   | Rick             | High     |
| Per-pipeline dimension limits — can orchestrators reject oversize AI requests?     | `troubleshooting.mdx`                                   | Rick / Peter     | Medium   |
| doc/multi-o.md — full content review for fleet-operations.mdx                      | `fleet-operations.mdx`                                  | Rick             | Medium   |
| speedybird.xyz community monitoring guide — valid URL, still maintained?           | `metrics-monitoring.mdx` (removed pending verification) | Community        | Low      |

---

## Video content — to locate and embed

The following YouTube searches are suggested to surface tutorial content. Video IDs are not included because YouTube was inaccessible in the sandbox environment during this session.

| Search query                                          | Likely channel        | Target page              |
| ----------------------------------------------------- | --------------------- | ------------------------ |
| "Livepeer orchestrator Prometheus Grafana monitoring" | Livepeer, Titan Node  | `metrics-monitoring.mdx` |
| "Livepeer explorer how to read orchestrator"          | Livepeer              | `explorer-guide.mdx`     |
| "Livepeer pool worker setup tutorial"                 | Titan Node            | `run-a-pool.mdx`         |
| "Livepeer orchestrator troubleshooting GPU"           | Community             | `troubleshooting.mdx`    |
| "Titan Node pool worker connect Windows Linux"        | Titan Node            | `run-a-pool.mdx`         |
| "Livepeer split orchestrator transcoder setup"        | Livepeer, Stronk-Tech | `split-o-t.mdx`          |

**Note:** Titan Node has historically produced walkthrough videos for their pool client setup. Rick and the Titan Node SPE are best placed to confirm available video content and provide embed IDs.

---

## Previous session sources

For sources used in AI Workloads, Staking, Feasibility, and Setup Paths sections, see:

- `ai-workloads-sources.md`
- `staking-rewards-sources.md`
- `feasibility-requirements-sources.md`
- `setup-paths-sources.md`

---

## Addendum — Job Types Overview and Video Transcoding (Session 5)

### Additional source files read

| File                        | Content                                      | Used for                                                                                      |
| --------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `rs-workloads.mdx`          | Complete Job Types concept page (~238 lines) | Foundation for `job-types-overview.mdx` — routing mechanics, pipeline table, decision matrix  |
| `set-pricing.mdx`           | v1 pricing guide                             | `video-transcoding.mdx` — wei pricing, USD pricing, autoAdjustPrice, livepeer_cli walkthrough |
| `set-session-limits.mdx`    | v1 session limits guide                      | `video-transcoding.mdx` — maxSessions default (10), bandwidth calc, benchmark loop            |
| `benchmark-transcoding.mdx` | v1 benchmarking guide                        | Context + cross-link in `video-transcoding.mdx`                                               |
| `pricing-configuration.mdx` | Gateway-side pricing                         | `video-transcoding.mdx` — maxPricePerUnit context                                             |
| `rc-ai-pipelines.mdx`       | AI pipelines guide                           | Pipeline VRAM table in `job-types-overview.mdx`                                               |
| `assess-capabilities.mdx`   | v1 NVENC cap reference                       | `video-transcoding.mdx` — NVENC section                                                       |

### New REVIEW flags

| Flag                                                                               | File                     | Owner          | Priority |
| ---------------------------------------------------------------------------------- | ------------------------ | -------------- | -------- |
| Minimum NVIDIA driver version for current go-livepeer release                      | `video-transcoding.mdx`  | Rick           | High     |
| Ada Lovelace (RTX 40xx) NVENC session cap — lifted or still applies?               | `video-transcoding.mdx`  | Rick           | High     |
| 1080p in default transcodingOptions.json — confirm removed or gateway-dependent    | `video-transcoding.mdx`  | Rick           | High     |
| Cascade/ComfyStream pricing unit                                                   | `job-types-overview.mdx` | Peter (AI SPE) | High     |
| VRAM for upscale, text-to-speech pipelines                                         | `job-types-overview.mdx` | Rick / Peter   | Medium   |
| tools.livepeer.cloud vs livepeer.tools — market rate tool to link                  | `video-transcoding.mdx`  | Community      | Low      |
| livepeer_cli USD pricing — confirm `0.41USD` syntax still works in current release | `video-transcoding.mdx`  | Rick           | Medium   |

### Video content — additional searches

| Search query                                       | Target page              |
| -------------------------------------------------- | ------------------------ |
| "Livepeer transcoding pricing wei per pixel setup" | `video-transcoding.mdx`  |
| "Livepeer set session limits benchmark tutorial"   | `video-transcoding.mdx`  |
| "Livepeer job types AI transcoding overview"       | `job-types-overview.mdx` |
