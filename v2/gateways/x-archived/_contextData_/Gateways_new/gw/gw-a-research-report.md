# Research Report — GW-A: Gateway Concepts Overview + Gateway Path
**Briefs:** `v2/gateways/concepts/overview.mdx` + `v2/gateways/gateway-path.mdx`
**Priority:** P1 · Phase 1 · Create both
**Date:** 10 March 2026

---

## Sources Consulted

| # | Source | What was confirmed |
|---|--------|--------------------|
| 1 | `Remote_signers.md` (project file) | Remote signer design goals, off-chain mode mechanics, clearinghouse concept, stateless signer design, three goals: remove ETH from hot path / enable non-Go gateways / enable clearinghouse custody separation. Confirmed: PRs #3791 (GetOrchestratorInfo RPC) and #3822 (Payments). Confirmed: off-chain mode allows production Live AI workloads with NO Ethereum dependency on the gateway node. Clearinghouse = remote signer + user management + auth + accounting + fiat settlement. |
| 2 | `local-gateways-discord.txt` (project file) | Community operator framing confirmed. Key personas: (1) app builders using Python SDK who want gateway embedded; (2) gateway-as-service providers (John/Elite Encoder); (3) NaaP dashboard operators (Qiang.Han); (4) SDK/alternative gateway builders (j0sh's Python gateway). Remote signer hosted publicly: `signer.eliteencoder.net`. NaaP repo: `github.com/livepeer/naap`. clearinghouse is explicitly described as "remote signer + user management / auth + accounting + a bunch of other things, eg probably discovery". j0sh: "For the local gateway SDKs, the idea is all that happens under the hood and the developer doesn't have to think about low level details like what a remote signer is. Give the SDK an API key and go." |
| 3 | Livepeer CLI Reference | `docs.livepeer.org/references/go-livepeer/cli-reference` | `-gateway` flag confirmed: "Set to true to be a gateway (formerly known as Broadcaster). Default false." Old flag `-broadcaster` is legacy — still present in code but the canonical current flag is `-gateway`. `maxPricePerUnit` confirmed as gateway-side flag (max price it will pay orchestrators). `offchain` mode confirmed at the binary level (local verify disabled in offchain mode per the CLI docs). |
| 4 | Livepeer.Cloud — Self Hosted Gateway Guide | `livepeer.cloud/self-hosted-livepeer-gateway/` | Community gateway operator profile confirmed: video-only, uses `--broadcaster=true` (legacy flag), requires Arbitrum RPC + ETH key + PM deposit (0.065 ETH deposit + 0.03 ETH reserve shown in guide). Hardware: no GPU required. No mention of AI workloads — pure video transcoding. Confirms that community docs are not yet updated to remote signer / off-chain mode. |
| 5 | go-livepeer master `livepeer.go` | `github.com/livepeer/go-livepeer/blob/master/cmd/livepeer/livepeer.go` | Flag-level confirmation: `maxPricePerUnit` accepts wei or custom currency (`0.50USD` with price feed); `maxPricePerCapability` for per-pipeline AI pricing. `selectRandFreq`, `selectStakeWeight`, `selectPriceWeight` gateway-side orchestrator selection weights confirmed. |
| 6 | go-livepeer PR #3156 | release notes search | `-serviceAddr` validation on startup confirmed; metadata added to transcoded segments. |
| 7 | livepeer-python-gateway | `github.com/j0sh/livepeer-python-gateway` (via Discord) | Python SDK gateway confirmed as real, active alternative implementation. Uses remote signer. OrchestratorSession class for LV2V. Confirms SDK builder persona is a real, active path. |
| 8 | NaaP repo | `github.com/livepeer/naap` (via Discord) | NaaP dashboard confirmed implementing JWT-based API keys for off-chain gateway auth. JWT service: "ERC-4361: Sign-In with Ethereum" → user-scoped JWT → API key for off-chain gateways. Confirms clearinghouse-lite pattern is being built. |

---

## Key Findings

### What a gateway does (runtime role)
A gateway is the network access point for applications. At runtime it:
1. Receives a job request from an application (video segment to transcode, image generation prompt, live video stream for AI processing)
2. Selects an orchestrator from the network using a weighted algorithm (stake, price, performance)
3. Forwards the job to the selected orchestrator
4. Handles payment via probabilistic micropayments (PM tickets)
5. Returns the result to the application

The gateway holds no GPU. All compute happens on orchestrators. The gateway's sole concerns are routing, payment, and result delivery.

### Video gateway vs AI gateway — operator-facing differences

| | Video Gateway | AI Gateway |
|---|---|---|
| Jobs handled | Video segment transcoding | AI inference (text-to-image, image-to-video, LV2V, LLM, etc.) |
| Entry flag | `-gateway` (formerly `-broadcaster`) | `-gateway` (same binary) |
| ETH required | Yes — PM deposit + reserve on Arbitrum | No — if using remote signer / off-chain mode |
| Arbitrum RPC | Yes | No (off-chain mode) |
| Private key on node | Yes | No (off-chain mode) |
| Orchestrators | Video transcoding orchestrators | AI orchestrators (must have `-aiWorker`) |
| Port | 1935 (RTMP ingest) + 8935 (HTTP) | 8935 (HTTP API) |
| GPU on gateway | No | No |
| PM mode | On-chain always | Off-chain (recommended), on-chain also possible |

### On-chain vs off-chain mode

**On-chain:** Gateway holds an Ethereum signing key, funds a PM deposit and reserve on Arbitrum, submits payment tickets directly, and polls chain state. Required for video transcoding. Required for any operator running a public gateway-as-service who needs direct PM settlement.

**Off-chain (AI, Q4 2025):** Gateway delegates ALL Ethereum responsibilities to a remote signer process. The gateway node itself has no ETH key, no Arbitrum dependency, no PM accounting. Introduced via PRs #3791 + #3822. Currently Live AI only. This is the path for app developers, SDK builders, and embedded gateways.

### Remote signer and clearinghouse

**Remote signer:** A separate go-livepeer process (or third-party service) that holds the ETH key and handles all PM signing. The gateway calls the signer at session start (GetOrchestratorInfo sig) and per-payment (signTicket). The signer is designed to be stateless — state is passed by the caller, not stored. Multiple signer instances can run for redundancy without shared state.

**Clearinghouse:** A remote signer plus user management, auth, accounting, and fiat settlement. A clearinghouse operator handles all crypto on behalf of gateway operators. App developers pay the clearinghouse in fiat or via API credit; orchestrators are paid in ETH as usual. The NaaP dashboard and Elite Encoder's hosted signer are early implementations.

### Flag rename: `-broadcaster` → `-gateway`
The CLI reference confirms `-gateway` is the current canonical flag: "Set to true to be a gateway (formerly known as Broadcaster). Default false." The old `-broadcaster` flag still works (legacy compat) but the livepeer.cloud guide (April 2024) still uses it — a sign that community docs lag the rename. The v2 docs should use `-gateway` exclusively and note the rename.

### Hardware requirements
- Gateway: No GPU. Standard server or VPS. Bandwidth is the main constraint.
- No minimum compute spec confirmed in docs — orchestrators bear the compute load.

---

## Unverified / Needs SME

| Item | Who |
|------|-----|
| Whether `-broadcaster` is still accepted as a legacy alias in current release | Rick — confirm backwards compat before noting it in docs |
| Exact offchain flag name/value in go-livepeer (is it `-network offchain` or a separate flag?) | Rick — CLI reference mentions "offchain mode" but the specific startup flag combination for a fully off-chain AI gateway is not confirmed from source |
| Whether off-chain mode is production-ready or still Beta | Peter / j0sh — Remote_signers.md describes it as implemented (PRs merged) but "productionise" language in Discord suggests it may still be maturing |
| Discovery mechanism for off-chain gateways (how does an off-chain gateway find orchestrators without on-chain polling?) | j0sh — Discord mentions a `get_orchestrator_info` endpoint and remote discovery PR, but the fully documented path isn't confirmed |

---

## Media Candidates

| # | Title | URL | Recommended use |
|---|-------|-----|-----------------|
| 1 | Livepeer.Cloud — Self Hosted Gateway Guide | `livepeer.cloud/self-hosted-livepeer-gateway/` | Cross-link from video gateway path card (community reference) |
| 2 | livepeer-python-gateway | `github.com/j0sh/livepeer-python-gateway` | Cross-link from SDK/Alternative Gateway path card |
| 3 | NaaP repo | `github.com/livepeer/naap` | Cross-link from clearinghouse/NaaP path card |
| 4 | Elite Encoder hosted remote signer | `signer.eliteencoder.net` | Cross-link from remote signers concept — live example |
| 5 | Remote signer advanced page | `v2/gateways/advanced/remote-signers` | Internal cross-link from overview — depth deferred here |
