# Sources and References — Setup Paths Section

Research log for: `find-your-path.mdx`, `join-a-pool.mdx`, `siphon-setup.mdx`.

---

## Uploaded Source Files

1. **`rc-alternate-setups.mdx`** — Primary source for the Navigator page. Contains Option A/B descriptions, Mermaid diagram, OrchestratorSiphon GitHub link, and the "start passive, add GPU later" framing.

2. **`rs-workloads.mdx`** — Source for the workload selection section in the Navigator (job types table, hardware minimums, pricing models, gateway selection mechanic).

3. **`x-siphon-setup.mdx`** — Empty placeholder (1 line). `siphon-setup.mdx` written entirely from primary source research.

4. **`orchestrator-offerings.mdx`** — Gateway tab reference. Provided `OrchestratorInfo` protobuf structure and `capabilities_prices` field context. Used for the gateway pricing note in `find-your-path.mdx`.

5. **`pricing-configuration.mdx`** — Confirmed gateway-side flags: `-maxPricePerUnit` (transcoding) and per-capability AI price limits. Used for the Tip in `find-your-path.mdx`.

6. **`model-support.mdx`**, **`byoc.mdx`**, **`ai-configuration.mdx`**, **`workload-fit.mdx`**, **`comfystream.mdx`** — Cross-reference links only; no content reproduced.

---

## OrchestratorSiphon Repository

7. **`README.md`** — `https://github.com/Stronk-Tech/OrchestratorSiphon/blob/main/README.md`
   - Confirmed: Clone URL, pip dependencies (web3, eth-utils, setuptools), virtualenv setup, Ubuntu 24.04+ `--break-system-packages` support, screen and systemd run options, interactive mode via SIGINT/SIGQUIT/SIGTSTP, `ExecStart` pattern, security warning about `source_private_key`

8. **`config.ini`** — `https://github.com/Stronk-Tech/OrchestratorSiphon/blob/main/config.ini`
   - Confirmed all config fields: `keystore`, `password`, `source_address`, `receiver_address_eth`, `receiver_address_lpt`
   - Confirmed threshold defaults: `lpt_threshold=100`, `eth_threshold=0.20`, `eth_minval=0.020`, `eth_warn=0.010`
   - Confirmed timer defaults: `cache_round_refresh=900`, `cache_pending_lpt=14400`, `wait_idle=60`
   - Confirmed RPC default: `l2=https://arb1.arbitrum.io/rpc`
   - Confirmed multi-keystore support: duplicate `[keystore1]` block as `[keystore2]`
   - Confirmed all fields have corresponding environment variable names

9. **`OrchestratorSiphon.py`** — Verified signal handling (SIGINT/SIGQUIT/SIGTSTP), interactive mode implementation, modular library imports (lib.Util, lib.Contract, lib.User, lib.State)

---

## Titan Node Pool Repository

10. **`Titan-Node/Titan-Node-Pool`** — `https://github.com/Titan-Node/Titan-Node-Pool`
    - Confirmed: Purpose ("Start video mining on Livepeer"), earnings (ETH + LPT + LTNT), dashboard URL (app.titan-node.com), Docker files at `docker/`, systemd service support, NVIDIA driver setup section

---

## go-livepeer Source (Previously Verified)

11. **`core/livepeernode.go`** — `MaxSessions = 10` confirmed; used in `-maxSessions 10` examples
12. **`net/lp_rpc.proto`** — `OrchestratorInfo` and `capabilities_prices` structure confirmed

---

## Project Files

13. **`/mnt/project/gpu-nodes-tab-audit.md`** — Persona framing, active set context, AI routing behaviour
14. **`/mnt/project/gpu-nodes-ia-planning.md`** — Page titles and three-page structure for Setup Paths
15. **`/mnt/project/Remote_signers.md`** — Background on keystore/workload separation; informed architecture framing

---

## Unverified — SME Review Required

| Item | File | Who |
|---|---|---|
| Active set = top 100 — verify current protocol parameter | `find-your-path.mdx` | Mehrdad / Rick |
| Titan Node pool still active and publicly accepting workers (2026) | `join-a-pool.mdx` | Community / Discord |
| LTNT token still issued to workers | `join-a-pool.mdx` | Titan Node operators |
| LPT distribution policy to individual pool workers | `join-a-pool.mdx` | Titan Node operators |
| OrchestratorSiphon interactive mode — menu options for service URI update | `siphon-setup.mdx` | Stronk-Tech / Rick |
| `-orchAddr` flag still valid for transcoder → orchestrator connection | `siphon-setup.mdx` | Rick |
| AI workload pools exist or forming | `join-a-pool.mdx` | Community |

---

## Video Content

No verified video IDs were retrieved (YouTube API access unavailable in sandbox). Before publishing, check:
- Titan Node YouTube for pool worker tutorials
- Livepeer Foundation YouTube (`@livepeer`) for orchestrator walkthroughs
- Discord #orchestrators for community tutorials

Video embeds in MDX: use `<Frame><iframe src="https://www.youtube.com/embed/<id>" /></Frame>` pattern.
