# Research Report — `v2/orchestrators/setup/orch-config.mdx`
**Brief 04 · P1 · Create**
**Date:** 10 March 2026

---

## Sources Consulted

| # | Source | URL | What was confirmed |
|---|--------|-----|--------------------|
| 1 | Livepeer Docs v1 — Orchestrator Get Started | `docs.livepeer.org/orchestrators/guides/get-started` (+ old path) | Complete canonical startup command. All flag names, formats, and context confirmed: `-network`, `-ethUrl`, `-ethAcctAddr`, `-orchestrator`, `-transcoder`, `-nvidia`, `-pricePerUnit`, `-serviceAddr`. livepeer_cli activation flow: reward cut default 10%, fee cut default 95%. LPTU denomination confirmed (1 LPT = 1e18 LPTU). Keystore default path: `~/.lpData/arbitrum-one-mainnet/keystore`. `-ethAcctAddr` is optional (auto-creates account if omitted). |
| 2 | Livepeer Docs v1 — Troubleshoot | `docs.livepeer.org/orchestrators/guides/troubleshoot` (Google snippet) | `.conf` file support confirmed ("even if using a .conf file" — reward=false override note). `-v 6` flag for verbose logging confirmed. `-reward=false` flag confirmed for split O+T. |
| 3 | go-livepeer source — `cmd/livepeer/livepeer.go` (master branch) | `github.com/livepeer/go-livepeer/blob/master/cmd/livepeer/livepeer.go` | Flag registration confirmed: `serviceAddr`, `orchAddr`, `network` (default "offchain"), `rtmpAddr`, `cliAddr`, `httpAddr`, `localVerify`, `httpIngest`. Additional gateway-side selection flags confirmed: `selectRandFreq`, `selectStakeWeight`, `selectPriceWeight`, `orchBlocklist`, `orchMinLivepeerVersion`. |
| 4 | go-livepeer source — older `livepeer.go` snapshot | `github.com/livepeer/go-livepeer/blob/67db52b.../cmd/livepeer/livepeer.go` | `-serviceAddr`: "Orchestrator only. Overrides the on-chain serviceURI that broadcasters can use to contact this node; may be an IP or hostname." — exact description confirmed. `-network` default is "offchain" (not mainnet — critical: operators must explicitly pass `-network arbitrum-one-mainnet`). |
| 5 | go-livepeer PR #575 — Split O+T | `github.com/livepeer/go-livepeer/pull/575` | Three modes of operation confirmed: (1) Combined `-orchestrator -transcoder`, (2) Standalone orchestrator with `-orchestrator` only (uses `-orchSecret`), (3) Standalone transcoder with `-orchAddr` pointing to orchestrator. |
| 6 | go-livepeer Releases | `github.com/livepeer/go-livepeer/releases` | Single unified binary confirmed (AI + mainnet merged). `GatewayHost` flag introduced for gateway external hostname. "Removed transcode flag dependency for AI orchestrators" confirmed in release notes — AI orchestrators do NOT need `-transcoder` flag. |
| 7 | Livepeer Docs — AI Orchestrator Start | `docs.livepeer.org/ai/orchestrators/start-orchestrator` (Google snippet) | AI-specific flags confirmed from complete Docker command: `-aiWorker`, `-aiModels /root/.lpData/aiModels.json`, `-aiModelsDir ~/.lpData/models`, `-aiRunnerImage livepeer/ai-runner:latest` (optional). AI orchestrator uses port 8936 (not 8935). Docker-out-of-docker pattern: `/var/run/docker.sock` must be mounted. `aiModelsDir` path is defined relative to the **host machine**, not the container. |
| 8 | go-livepeer Issues #2047 — Config file | `github.com/livepeer/go-livepeer/issues/2047` | `.conf` file pattern confirmed via community: `livepeer $(< /etc/livepeer/livepeer.conf)` shell expansion trick. Native `-config` flag not implemented as of that issue — config file is a shell/systemd workaround, not a built-in feature. `maxSessions` flag confirmed as community-known flag. |
| 9 | Community — Cloud SPE Ollama Runner Guide | `livepeer.cloud/self-hosting-livepeers-llm-pipeline-...` | Full AI orchestrator Docker command confirmed with all flags. aiModels.json example confirmed. Note: `-v 6` for verbose logging shown in example. |

---

## Key Research Findings

### Flag verification summary

| Flag | Confirmed name | Type | Default | Source |
|------|---------------|------|---------|--------|
| `-network` | `network` | string | `"offchain"` | Source 4 — CRITICAL: must be set to `arbitrum-one-mainnet` for mainnet |
| `-orchestrator` | `orchestrator` | bool | false | Source 1, 5 |
| `-transcoder` | `transcoder` | bool | false | Source 1, 5 |
| `-nvidia` | `nvidia` | string | `""` (CPU fallback) | Source 1 |
| `-pricePerUnit` | `pricePerUnit` | int | none (required) | Source 1 |
| `-serviceAddr` | `serviceAddr` | string | `""` | Source 3, 4 |
| `-ethUrl` | `ethUrl` | string | `""` | Source 1 |
| `-ethAcctAddr` | `ethAcctAddr` | string | `""` (optional — auto-creates) | Source 1 |
| `-aiWorker` | `aiWorker` | bool | false | Source 7 |
| `-aiModels` | `aiModels` | string (path) | `""` | Source 7 |
| `-aiModelsDir` | `aiModelsDir` | string (path) | `""` | Source 7 |
| `-aiRunnerImage` | `aiRunnerImage` | string | `livepeer/ai-runner:latest` | Source 7 — OPTIONAL |
| `-v` | `v` | int | varies | Source 2 — `-v 6` enables verbose logging |
| `-reward` | `reward` | bool | true | Source 2 — set to false for transcoder-only processes |
| `-maxSessions` | `maxSessions` | int | [//]: # (REVIEW: confirm default) | Source 8 |

### Three operating modes (confirmed from source 5)

1. **Combined orchestrator + transcoder** (`-orchestrator -transcoder`): Most common setup. Same process handles both on-chain protocol participation and local GPU transcoding.
2. **Standalone orchestrator** (`-orchestrator` only): Delegates transcoding to remote workers via `-orchAddr`. Requires `-orchSecret` for authentication. No local GPU needed.
3. **Standalone transcoder** (`-orchAddr <orchestrator_address>`): Connects as a remote worker to an existing orchestrator. No on-chain presence, no LPT needed.

### AI orchestrator specifics (source 7)

- Uses port **8936** by default (not 8935) to avoid conflict with a co-located transcoding orchestrator
- Requires Docker socket mounted: `-v /var/run/docker.sock:/var/run/docker.sock`
- `aiModelsDir` path is relative to the **host machine** (not the container interior) — a common misconfiguration
- `-aiRunnerImage` is optional; defaults to `livepeer/ai-runner:latest`
- "Removed transcode flag dependency for AI orchestrators" (release notes) — `-transcoder` flag is NOT required when running as AI-only orchestrator

### Config file (source 8)

go-livepeer does **not** have a native `-config` flag (as of the linked issue). The community workaround is shell expansion:
```bash
livepeer $(< /etc/livepeer/livepeer.conf)
```
However, the v1 troubleshoot docs reference "even if using a .conf file" — this suggests some level of config file support may have been added. [//]: # (REVIEW: Confirm whether native config file support was added to go-livepeer after issue #2047. Check with @rickstaa.)

### Reward cut / fee cut

Reward cut and fee cut are **not** set via startup flags. They are set via `livepeer_cli` during the activation flow or updated later via `livepeer_cli`. The startup flags only set runtime behaviour; protocol parameters are on-chain.

---

## Unverified Items

| Claim | Why unverified | Verifier |
|-------|---------------|----------|
| Default value of `-maxSessions` | Referenced in community but not in confirmed flag list | go-livepeer source `starter/defaults.go` or @rickstaa |
| Whether native config file support (`-config` flag) was added post-issue #2047 | v1 troubleshoot docs imply `.conf` support exists but original issue says it wasn't implemented | @rickstaa |
| `-orchSecret` exact behaviour for standalone orchestrator mode | Referenced in PR #575 but not in v1 user-facing docs | go-livepeer source |
| `-aiRunnerImage` default tag (`:latest` vs pinned) | Community docs show `:latest`; pinned tag may be safer for production | go-livepeer release notes |

---

## Media Candidates

| # | Title | URL | Type | Relevance |
|---|-------|-----|------|-----------|
| 1 | Cloud SPE — Self-Hosting LLM Pipeline Guide | `livepeer.cloud/self-hosting-livepeers-llm-pipeline-...` | Blog post | AI flags section — link in "Adding AI inference" accordion |
| 2 | Titan Node setup guide | Listed in `awesome-livepeer` — URL TBC | YouTube | Config flags walkthrough | 
| 3 | Livepeer AI Orchestrator Start Guide | `docs.livepeer.org/ai/orchestrators/start-orchestrator` | Official docs | Cross-link from AI flags section |
