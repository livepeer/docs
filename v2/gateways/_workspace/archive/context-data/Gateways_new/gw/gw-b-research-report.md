# Research Report — GW-B: Gateway Setup Paths
**Brief:** `v2/gateways/get-started/gateway-setup-paths.mdx`
**Priority:** P1 · Phase 1 · Create
**Date:** 10 March 2026

---

## Sources Consulted

Builds on GW-A research (same pool). Additional sources:

| # | Source | What was confirmed |
|---|--------|--------------------|
| 1 | `github.com/livepeer/go-livepeer/releases` (fetched) | Latest release is **v0.8.9** (7 Jan 2026). PRs #3791 and #3822 are confirmed merged but the exact release version they shipped in is not returned in the fetch (releases page renders dynamically). Flagged as REVIEW. |
| 2 | `Remote_signers.md` (project file, re-read) | Off-chain mode: no ETH on gateway node. Remote signer requires: (a) filled Ethereum account and (b) Ethereum RPC access — on the **signer**, not the gateway. Confirmed stateless signer design. No mention of minimum go-livepeer version in the doc. |
| 3 | `local-gateways-discord.txt` | j0sh: "For the local gateway SDKs, the idea is all that happens under the hood and the developer doesn't have to think about low level details like what a remote signer is. Give the SDK an API key and go." Confirms developer-facing off-chain path has the cleanest onboarding story. Discovery endpoint parameterised by model ID / capabilities confirmed (remote discovery PR). |
| 4 | Livepeer.Cloud Self-Hosted Gateway | ETH balance confirmed: 0.065 ETH deposit + 0.03 ETH reserve cited as starting amounts. Note this is a community guide from April 2024 — amount may have changed. |
| 5 | CLI Reference | `-maxPricePerUnit` gateway flag confirmed. No ETH requirement surface for off-chain mode in docs — absence is consistent with Remote_signers.md design. |
| 6 | go-livepeer releases snippet (search result) | v0.8.9 features include: WHEP server for AI video playback, BYOC streaming, gateway-native additions. v0.8.x series is current. Off-chain mode PRs (#3791/#3822) predate v0.8.9. |

---

## Key Findings

### go-livepeer version minimum for off-chain AI mode
**Not confirmed from source.** PRs #3791 and #3822 are confirmed merged. Latest release is v0.8.9. The release they shipped in is not returned by available search results. The safe instruction is to use the **latest release** rather than stating a specific minimum. [//]: # (REVIEW: Rick — what is the minimum go-livepeer version for off-chain AI gateway mode? Which release included PRs #3791 and #3822?)

### Prerequisites per path

**AI Gateway — off-chain:**
- Linux (confirmed: AI features are Linux-only per previous Brief 02 research)
- go-livepeer latest release (binary or Docker — Docker is community preference for AI workloads based on Discord pattern)
- At least one orchestrator address, OR access to a discovery endpoint
- Port 8935 open (HTTP API)
- Access to a remote signer (self-hosted or hosted — Elite Encoder's `signer.eliteencoder.net` confirmed as community-hosted example)
- No ETH, no Arbitrum RPC on the gateway node

**Video Gateway — on-chain:**
- Linux
- go-livepeer binary or Docker
- Ethereum keystore (private key)
- ETH on Arbitrum: ~0.065 ETH deposit + 0.03 ETH reserve (community guide, April 2024 — verify current amounts)
- Arbitrum One RPC endpoint (Alchemy/Infura free tier — confirmed sufficient per community guide)
- Ports 1935 (RTMP) and 8935 (HTTP) open

**Dual gateway:**
- All video gateway requirements
- Additional orchestrator addresses for AI workloads (AI orchestrators distinct from transcoding orchestrators)
- AI orchestrators use port 8936; video orchestrators use 8935 — note for firewall setup but not a gateway-side issue
- Complexity: managing separate orchestrator lists for video and AI

**SDK / Alternative Gateway (remote signer only):**
- go-livepeer installed and running in **signer mode** (not gateway mode) on a separate host
- Ethereum key on the signer host
- Arbitrum RPC on the signer host
- Gateway application (Python SDK, browser, mobile) pointed at the signer
- No ETH or Arbitrum on the gateway application itself

### Orchestrator discovery for off-chain gateways
Off-chain gateways cannot discover orchestrators via on-chain polling. Two approaches seen in community:
1. **Explicit orchestrator list** — operator provides one or more orchestrator addresses at startup
2. **Remote discovery endpoint** — a service (possibly co-located with the remote signer) returns a list of eligible orchestrators, filtered by capability and model ID. This is the cleaner path and appears to be what is being built, but is not documented as a finished feature yet.

[//]: # (REVIEW: j0sh / Rick — Is there a stable discovery endpoint an off-chain gateway can use today? Is it bundled with the remote signer or separate?)

### Estimated setup times (not from source — community-calibrated estimate)
These are rough estimates for a competent Linux operator:
- AI Gateway off-chain: ~30 min (install binary, configure remote signer access, set orchestrator address, start)
- Video Gateway on-chain: ~60–90 min (install binary, set up Arbitrum account + RPC, fund wallet, start, deposit via livepeer_cli)
- Dual Gateway: ~2 hrs
- SDK / Alternative: varies significantly by gateway language and experience

---

## Unverified / Needs SME

| Item | Who |
|------|-----|
| Minimum go-livepeer version for off-chain AI gateway mode | Rick |
| Current recommended ETH amounts for video gateway PM deposit/reserve | Rick or community — amounts in livepeer.cloud guide may be outdated |
| Whether a stable public discovery endpoint exists for off-chain gateways | j0sh |
| Whether Docker is officially recommended over binary for AI gateway (or neutral) | Rick / Peter |
