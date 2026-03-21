# Brief 07 — Research Report
## Running a Gateway + OSS Stack
**Target pages:** `v2/developers/concepts/running-a-gateway.mdx`, `v2/developers/concepts/oss-stack.mdx`  
**Date:** March 2026

---

## Page A Research Log: `running-a-gateway.mdx`

| Question | Source | Finding | Notes |
|----------|--------|---------|-------|
| 1 — Network Vision graduation framing | blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ (Nov 13 2025) | **Confirmed.** Quote: "Similarly to how startups start to build on platforms like Heroku, Netlify, or Vercel, and then as they scale and need more control and cost savings they build direct on AWS, and then ultimately move to their own datacenters after reaching even more scale – users of Daydream or a real-time Agent platform built on Livepeer, may ultimately choose to run their own gateway" | Exact metaphor: Heroku/Netlify/Vercel → AWS → own DC. Maps to: Daydream/Studio → self-hosted gateway → protocol layer |
| 2 — Reasons to self-host | docs.livepeer.org/ai/gateways/start-gateway, local-gateways-discord.txt | Cost at scale, orchestrator selection control (custom list), data privacy (gateway can be internal to app), production latency (proximity to orchs), custom billing/auth via remote signer | Discord confirms that orchestrator list and discovery are key developer motivations |
| 3 — Cost comparison | No published figure found. Blog states 10x+ cost reduction for transcoding vs cloud; AI inference cost comparison not published | No specific numbers to cite. Omit concrete figures; use "cost savings at scale" language only | Cannot put a number in the page without a Tier 1 source |
| 4 — Self-hosting requirements | docs.livepeer.org/ai/gateways/start-gateway, docs.livepeer.org/orchestrators/guides/install-go-livepeer | **AI gateway (off-chain):** Linux or Docker only ("Windows and MacOS (amd64) binaries of Livepeer AI are not available yet"), go-livepeer binary or Docker image `livepeer/go-livepeer:master`, port 8937 open, orchestrator list (comma-separated `-orchAddr`). **No ETH required for AI gateway.** | Video gateway is different — requires ETH for on-chain operations |
| 5 — Off-chain AI gateway | docs.livepeer.org/ai/gateways/start-gateway + go-livepeer source | Off-chain = no Ethereum dependency, no staking, no on-chain signalling. One command: `docker run ... -gateway -orchAddr <list> -httpAddr 0.0.0.0:8937`. No `-ethUrl` flag needed. Exposes same REST API as Livepeer Studio AI gateway. | local-gateways discord confirms remote signer (separate service) is optional; bearer token auth model in development |
| 6 — OQ-D2 duplication check | Gateways tab in docs.json + repo content | The Gateways tab contains full setup guides (`start-gateway`, orchestrator configuration, etc.). This `concepts/running-a-gateway.mdx` page is in the **Developers tab** — it is the decision page, not the setup page. The Gateways tab has no equivalent decision page. **No duplication risk** — different tabs, different audiences, distinct roles. | OQ-D2 resolved: the Developers tab page is "should I?" and the Gateways tab is "how do I?" |

---

## Page B Research Log: `oss-stack.mdx`

| Question | Source | Finding | Notes |
|----------|--------|---------|-------|
| 7 — Repo list | github.com/livepeer org, awesome-livepeer, search results | Confirmed core repos: `go-livepeer`, `livepeer-protocol` (contracts), `ai-worker` (ai-runner), `comfystream`, `pytrickle`, `livepeer.js` / `ui-kit`, `livepeer/docs`. Additional relevant: `livepeer/pipelines` (Livepeer Pipelines product), `livepeer/naap` (NaaP dashboard, active dev 2025) | `livepeer.js` has been superseded by `ui-kit` (same repo org livepeer/ui-kit). Need to verify if `livepeer.js` is still the name or if it moved. For the page, use `livepeer.js / ui-kit` pending SME confirmation. |
| 8 — Languages | READMEs + go.dev package listing | go-livepeer: Go. livepeer-protocol: Solidity. ai-worker/ai-runner: Python. comfystream: Python (ComfyUI + custom nodes). pytrickle: Python. livepeer.js/ui-kit: TypeScript/React. livepeer/docs: MDX (Mintlify). | All confirmed from search results or known from prior session research |
| 9 — Repo relationships | go-livepeer README, ai-runner README, comfystream, prior session research | go-livepeer runs the node (broadcaster/orchestrator/gateway roles). ai-worker provides the ai-runner Docker container that go-livepeer spawns per pipeline. comfystream runs alongside ComfyUI and connects via trickle protocol. pytrickle is the Python SDK for the trickle protocol — the transport layer comfystream uses. livepeer-protocol contains the Solidity contracts on Arbitrum that go-livepeer interacts with for staking, bonding, and on-chain job settlement. livepeer.js/ui-kit is the frontend SDK for consuming Studio streams in the browser. | Dependency chain confirmed: livepeer-protocol → go-livepeer → ai-worker. comfystream → pytrickle for BYOC path. livepeer.js is independent of the above. |
| 10 — Contributor entry points | go-livepeer README ("Contributing to go-livepeer" guide), ai-worker README, prior search | go-livepeer README links to "Contributing to go-livepeer" guide. ai-worker issues active. No "good first issue" labels found from search — likely exist but not surfaced. Recommend: `github.com/livepeer/go-livepeer/issues` and `github.com/livepeer/ai-worker/issues` as entry points. | [//]: # (REVIEW: Check both repos for active "good first issue" labels) |
| 11 — SPE model | blog.livepeer.org (Streamplace post), Livepeer Foundation announcement, Forum proposals | **Confirmed.** SPE = Special Purpose Entity. Focused, community-funded team. Funded through proposals to the onchain treasury. Accountable to community. Independent operations. SPEs cover AI (Cloud SPE, AI SPE/MuxionLabs), protocol R&D (Sidestream), governance (GovWorks), video streaming (Streamplace/Aquareum), and more. Path: contribute to repos → draft pre-proposal → full proposal to treasury → funded SPE work. | Note: SPE funding is in LPT, not ETH. Not a grant programme — it requires governance vote. |
| 12 — Community developer programme | Forum search | Mar 2024 pre-proposal for community developer contracts not found. The SPE model appears to be the funded path. No standalone "developer grant" programme found separate from SPE treasury proposals. | [//]: # (REVIEW: Ask Rich/Foundation if there is a separate developer grant or bounty programme distinct from the SPE treasury process) |

---

## Additional Findings

**Off-chain gateway vs on-chain gateway:**
- **Off-chain AI gateway:** Go binary or Docker. No ETH. No staking. No on-chain. Uses `-gateway` flag with `-orchAddr` for orchestrator discovery. No Windows/macOS binaries currently. The `dream-gateway.livepeer.cloud` (public AI gateway) and Livepeer Studio AI gateway are both implementations of this same go-livepeer binary.
- **On-chain video gateway (broadcaster):** Requires ETH account, keystorePath, ethUrl for Arbitrum. On-chain job settlement, verifiable transcoding. Older path; the AI gateway route does not require this.

**livepeer/naap:** Active repo in 2025. Network-as-a-Platform dashboard providing API key management for off-chain gateways. Relevant to the gateway decision page as it explains the managed auth layer for developers who want off-chain gateway benefits without running full infrastructure.

**Network Vision graduation quote (verbatim, for use in running-a-gateway.mdx):**
> "Similarly to how startups start to build on platforms like Heroku, Netlify, or Vercel, and then as they scale and need more control and cost savings they build direct on AWS, and then ultimately move to their own datacenters after reaching even more scale – users of Daydream or a real-time Agent platform built on Livepeer, may ultimately choose to run their own gateway."

**OQ-D2 resolved:** No duplication. The Developers tab `concepts/running-a-gateway.mdx` is the decision page (should I?). The Gateways tab (`v2/ai/gateways/`) contains setup guides (how do I?). These are different tabs serving different stages of the developer journey.
