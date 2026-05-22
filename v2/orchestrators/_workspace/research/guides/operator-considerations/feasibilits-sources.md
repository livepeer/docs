# Sources and References — Feasibility & Requirements Section

Research log for: `feasibility-economics.mdx`, `hardware-reference.mdx`, `benchmarking.mdx`, `session-limits.mdx`.

---

## Uploaded Source Files

1. **`p-feasibility.mdx`** — v2 placeholder page. Used for planned scope definition only. No content. Confirmed the section outline and intended page purpose.

2. **`rcs-requirements.mdx`** — v2 partial page. Source for hardware tier tables (Minimum, Recommended, AI-oriented GPU tier) and the production checklist. Used directly in `hardware-reference.mdx`. Includes DynamicTable components that have been converted to standard Mintlify table syntax.

3. **`assess-capabilities.mdx`** — v1 page. Source for: NVIDIA driver update requirement, NVIDIA GPU session caps reference, the NVIDIA video encode/decode GPU support matrix URL (`developer.nvidia.com/video-encode-decode-gpu-support-matrix`), and the `livepeer_bench` tool mention. Used in `hardware-reference.mdx` (NVENC/NVDEC section).

4. **`benchmark-transcoding.mdx`** — v1 page. Primary source for `benchmarking.mdx`. Source for: `livepeer_bench` tool purpose and command structure, test stream download command (wget + tar), `transcodingOptions.json` reference, `-nvidia` and `-concurrentSessions` flag descriptions, live mode explanation, CSV output structure, and summary table format. **CAUTION: v1 content predates current go-livepeer — every CLI detail was verified against current source before use.**

5. **`set-session-limits.mdx`** — v1 page. Primary source for `session-limits.mdx`. Source for: `MaxSessions` default, `OrchestratorCapped` error description, ABR ladder table (updated for current 4-profile set), bandwidth-per-stream calculation methodology, session scaling benchmark script, `-maxSessions` flag examples, CPU transcoding caveat, and the advice to tune after going live. **CAUTION: v1 content — all specific numbers and flag names verified against current source before use.**

6. **`set-pricing.mdx`** — v1 page. Used in `feasibility-economics.mdx` for pricing and `autoAdjustPrice` context. Source for: Wei pricing model, `-pricePerUnit`/`-pixelsPerUnit` flags, USD pricing with `-pricePerUnit USD` suffix (introduced in go-livepeer 0.8.0), Chainlink price feed integration (`-priceFeedAddr`), and the automatic price adjustment mechanism. Also used in `hardware-reference.mdx` for the production context note about static IP.

7. **`configure-reward-calling.mdx`** — v1 page. Used in `feasibility-economics.mdx` for the reward calling profitability threshold. Source for: gas cost range (350k–450k units), the recommendation to start with manual reward calling when stake is low, and the `-reward=false` flag. Reward calling mechanics fully documented in the Staking & Rewards section.

8. **`model-vram-reference.mdx`** (uploaded, already published in previous session). Used as a cross-reference source throughout `hardware-reference.mdx` VRAM tiers. No content duplicated — link-only references to that page.

---

## go-livepeer GitHub Repository

9. **`cmd/livepeer_bench/livepeer_bench.go`** — Primary verification source for all benchmark tool details.
   - **Confirmed:** `livepeer_bench` tool exists (file is `livepeer_bench.go`, not `main.go` as in older builds)
   - **Confirmed flags:** `-in` (required), `-live` (default=`true`), `-concurrentSessions` (default=`1`), `-nvidia`, `-transcodingOptions`
   - **Confirmed:** `-live=true` default — live mode is still the default
   - **Confirmed:** CSV header is now `timestamp,session,segment,seg_dur,transcode_time,frames` — the `frames` column is new vs v1 docs
   - **Source:** Scraped from `https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/livepeer_bench.go`

10. **`cmd/livepeer_bench/transcodingOptions.json`** — Critical verification source.
    - **Confirmed current profiles:** 240p (250,000 bps), 360p (800,000 bps), 480p (1,600,000 bps), 720p (3,000,000 bps) — **four profiles only**
    - **Key finding:** The 1080p profile at 6,000 kbps (present in v1 docs) has been **removed from the file**. The v1 ABR ladder table showing 5 profiles including 1080p is outdated.
    - **Key finding:** Total output upload = 5,650 kbps — close to v1's 5.6 Mbps figure, but derived from a different profile set
    - **Confirmed default:** `-transcodingOptions` flag default is `"P240p30fps16x9,P360p30fps16x9,P720p30fps16x9"` inline
    - **Source:** Scraped from `https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json`

11. **`core/livepeernode.go`** — Source for MaxSessions default.
    - **Confirmed:** `var MaxSessions = 10` — the default session limit remains 10
    - **Source:** Scraped from `https://github.com/livepeer/go-livepeer/blob/master/core/livepeernode.go`

12. **`cmd/livepeer_bench/` directory listing** — Confirmed tool structure.
    - Files present: `livepeer_bench.go`, `transcodingOptions-netint.json`, `transcodingOptions.json`
    - **Confirmed:** `transcodingOptions-netint.json` also exists (for Netint hardware) — not documented in these pages but notable for operators with Netint devices
    - **Source:** `https://github.com/livepeer/go-livepeer/tree/master/cmd/livepeer_bench`

---

## Project Files (Internal)

13. **`/mnt/project/gpu-nodes-tab-audit.md`** — Primary source for Feasibility section persona intelligence. Source for: active set = top 100 by stake (flagged for verification), pool vs solo decision framing, AI inference routing prioritises capability over stake, common Discord question patterns about session limits and benchmarking.

14. **`/mnt/project/gpu-nodes-ia-planning.md`** — Supporting source for section structure and page purpose definitions. Source for: page titles, section taxonomy (Feasibility is the "Is it worth it?" group), links between pages in the section.

15. **`/mnt/project/TECH_AUDIT.md`** — Supporting context for go-livepeer node architecture, flag naming conventions, and network migration history (pre-Arbitrum → Arbitrum One). Used to understand what changed between v1 content era and current state.

---

## Ecosystem Tools Referenced

16. **Livepeer Explorer** — Referenced in `feasibility-economics.mdx` for checking current orchestrator rankings, fee volumes, and competitive pricing context.
    https://explorer.livepeer.org/orchestrators

17. **tools.livepeer.cloud** — Referenced in `feasibility-economics.mdx` for AI pipeline capability visibility.
    https://tools.livepeer.cloud/ai/network-capabilities

18. **NVIDIA Video Encode and Decode GPU Support Matrix** — Referenced in `hardware-reference.mdx` for NVENC/NVDEC session cap lookup.
    https://developer.nvidia.com/video-encode-decode-gpu-support-matrix

19. **NVIDIA Container Toolkit documentation** — Referenced in `hardware-reference.mdx` for Docker GPU setup.
    https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html

20. **Arbitrum bridge** — Referenced in `feasibility-economics.mdx` for ETH bridging to Arbitrum One.
    https://bridge.arbitrum.io

---

## Unverified Items Flagged for SME Review

| Item                                                                 | File                                     | Status                                                                    | Who                |
| -------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- | ------------------ |
| Test stream URL (`storage.googleapis.com/lp_testharness_assets/...`) | `benchmarking.mdx`                       | Could not test (network blocked)                                          | Rick               |
| `OrchestratorCapped` error string still current                      | `session-limits.mdx`                     | Could not confirm in source scrape                                        | Rick               |
| 1080p profile removal — does gateway still send 1080p jobs?          | `session-limits.mdx`, `benchmarking.mdx` | Confirmed removed from transcodingOptions.json; gateway behaviour unknown | Rick / community   |
| Real-time duration ratio ≤ 0.8 threshold                             | `benchmarking.mdx`                       | Community convention, not in source                                       | Operator community |
| CPU transcoding session limit (~5)                                   | `session-limits.mdx`                     | v1 rule of thumb on old hardware                                          | Operator community |
| NVENC consumer card session cap (2–3 for RTX 40xx series)            | `hardware-reference.mdx`                 | Ada Lovelace era may have changed this                                    | Rick               |
| Active set = top 100                                                 | `feasibility-economics.mdx`              | From project audit files, not directly in source                          | Rick / Mehrdad     |
| `-maxSessions` flag still valid on both O and T in split setup       | `session-limits.mdx`                     | Confirmed in v1, could not verify no rename occurred                      | Rick               |
| `transcodingOptions-netint.json` — document for Netint operators?    | Not currently documented                 | File confirmed exists in repo                                             | Rick               |

---

## Version Notes

All go-livepeer source verification was performed against the `master` branch, March 2026. The v1 source files (`benchmark-transcoding.mdx`, `set-session-limits.mdx`, `set-pricing.mdx`, `assess-capabilities.mdx`) predate:

- Arbitrum One migration (transactions now on L2, not L1)
- AI inference feature addition (aiModels.json, AI pipelines)
- Current `transcodingOptions.json` profile set (1080p removed)
- CSV output schema update (frames column added)

Any content inherited from v1 that could not be independently verified is flagged with `{/* REVIEW */}` inline in the draft MDX files.
