# Sources and Research Log — Payments & Pricing Section

**Section:** Guides → Payments & Pricing
**Pages produced:** payment-paths.mdx, fund-your-gateway.mdx, pricing-strategy.mdx, remote-signers.mdx, payment-clearinghouse-guide.mdx
**Date:** 13 March 2026
**Engagement:** Wonderland × Livepeer Foundation

<CustomDivider />

## Source inventory

### Tier 1 — Ground truth (code and confirmed PRs)

| Source | URL | Verified | Used for |
|---|---|---|---|
| go-livepeer PR #3791 (GetOrchestratorInfo remote signer) | https://github.com/livepeer/go-livepeer/pull/3791 | Confirmed merged Jan 26 2026 | Remote signer protocol: getOrchInfoSig, gatewaySig caching |
| go-livepeer PR #3822 (remote signer for tickets) | https://github.com/livepeer/go-livepeer/pull/3822 | Confirmed merged Jan 31 2026 | Remote signer protocol: signTicket, stateless state forwarding, HTTP 480, LivePaymentSender interface |
| go-livepeer issue #3744 (reserve requirement) | https://github.com/livepeer/go-livepeer/issues/3744 | Linked in v1 fund-gateway docs | Fund gateway: 0.36 ETH production reserve recommendation |
| livepeer/protocol — TicketBroker | https://github.com/livepeer/protocol | Confirmed active | PM system, deposit/reserve mechanics |
| go-livepeer source — segment_rpc.go | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/segment_rpc.go | Confirmed via pricing config source file | Video transcoding per-segment payment flow |
| go-livepeer source — live_payment.go | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/live_payment.go | Confirmed via pricing config source file | Live AI payment interval, per-pixel AI fee calculation |
| go-livepeer source — ai_http.go | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_http.go | Confirmed via pricing config source file | AI gateway HTTP handlers, payment processing |

### Tier 1a — Project design documents

| Source | File | Used for |
|---|---|---|
| Remote Signers design doc | `/mnt/project/Remote_signers.md` | Full protocol design: goals, signing flow, stateless design, sequence diagram, scope (Live AI only), clearinghouse framing |
| GW-04 research report | `/tmp/all-resources/ctx-gwnew--GW-04-remote-signers-architecture.md` | Deep architecture analysis, PR verification, multi-instance patterns, API surface endpoints, security properties |
| Content brief GW-E (clearinghouse + middleware) | `/tmp/all-resources/ctx-gw--content-brief-clearinghouse-middleware.md` | Clearinghouse persona analysis, architecture, NaaP framing, responsibility matrix |

### Tier 2 — Existing docs (used as reference, not ground truth)

| Source | File | Status | Notes |
|---|---|---|---|
| v2-payments--remote-signers.mdx | `/tmp/all-resources/v2-payments--remote-signers.mdx` | 85% accurate | Primary source for CLI flags (-signerAddr). Community signer URL confirmed here. |
| v2-payments--payment-clearinghouse.mdx | `/tmp/all-resources/v2-payments--payment-clearinghouse.mdx` | 85% accurate | Clearinghouse architecture, responsibility matrix, developer experience |
| v2-payments--how-payments-work.mdx | `/tmp/all-resources/v2-payments--how-payments-work.mdx` | Verified | PM system explainer, on-chain vs off-chain, fee calculation |
| v2-setup--pricing-configuration.mdx | `/tmp/all-resources/v2-setup--pricing-configuration.mdx` | Verified | All pricing flags, JSON examples, HTTP API endpoints |
| ctx-gwnew--pricing-configuration.mdx | `/tmp/all-resources/ctx-gwnew--pricing-configuration.mdx` | Verified | Pricing strategy guide, per-pipeline JSON examples with real wei values |
| v1--fund-gateway.mdx | `/tmp/all-resources/v1--fund-gateway.mdx` | Verified | 0.1 ETH testing amounts (0.065 deposit + 0.03 reserve), livepeer_cli Option 11 |
| v2-onchain--fund-gateway.mdx | `/tmp/all-resources/v2-onchain--fund-gateway.mdx` | Verified | V2 on-chain funding flow |
| ctx-setup--bridge-lpt-to-arbitrum.mdx | `/tmp/all-resources/ctx-setup--bridge-lpt-to-arbitrum.mdx` | Verified | Bridging steps, bridge.arbitrum.io, retryable-tx-panel |
| v2-refs--arbitrum-exchanges.mdx | `/tmp/all-resources/v2-refs--arbitrum-exchanges.mdx` | Verified | CoinGecko exchange component reference |
| v2-about--economics.mdx | `/tmp/all-resources/v2-about--economics.mdx` | Verified | Gateway economics: gateways pay orchestrators, not the other way |

### Tier 3 — Community sources

| Source | Location | Used for |
|---|---|---|
| Discord #local-gateways | `/mnt/project/local-gateways-discord.txt` | Elite Encoder remote signer URL, SIWE auth model, NaaP clearinghouse discussion, j0sh on clearinghouse = remote signer + user mgmt + accounting |
| Livepeer Forum — NaaP pre-proposals | https://forum.livepeer.org/t/metrics-and-sla-foundations-for-livepeer/3165 | NaaP active development status |
| livepeer/naap GitHub | https://github.com/livepeer/naap | NaaP MVP in development as of Feb 2026, issue #58 |

### Tier 4 — Third-party verification

| Source | URL | Used for |
|---|---|---|
| Messari — State of Livepeer Q3 2025 | https://messari.io/report/state-of-livepeer-q3-2025 | AI fee growth via PM, 131% QoQ increase Q3 2025 |
| Messari — Livepeer Q4 2024 Brief | https://messari.io/report/livepeer-q4-2024-brief | AI SDK launch Q4 2024, Cascade pipeline |
| Streamflow PM blog post — Livepeer Medium | https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462 | PM system mechanics, deposit/reserve model explanation |

<CustomDivider />

## Outstanding REVIEW flags

These items are flagged inline in the MDX files with `{/* REVIEW: ... */}` comments. None of the affected pages should be published until resolved.

| Flag | File | What needs verification | Suggested verifier |
|---|---|---|---|
| AI off-chain gateway — zero payment obligation? | payment-paths.mdx | Confirm AI off-chain gateway has truly no payment obligation vs. payment delegated to remote signer. Clarify "off-chain" scope. | j0sh |
| Remote signer flag name `-signer` | remote-signers.mdx | Confirm exact flag for starting go-livepeer in signer mode. Likely `-signer` per source docs, but not confirmed from live binary. | Rick |
| `-signerAddr` flag name | remote-signers.mdx, payment-paths.mdx | Confirm flag name for pointing gateway at remote signer. Source docs use `-signerAddr`. | Rick |
| `-ethUrl` required with remote signer? | remote-signers.mdx | Confirm whether gateway needs `-ethUrl` at all when `-signerAddr` is set, or if gateway can run with no Arbitrum connection. | Rick |
| `-ethKeystorePath` required with remote signer? | remote-signers.mdx | Confirm whether this flag can be entirely omitted when using remote signer. | Rick |
| Startup log line for remote signer active | remote-signers.mdx | Need exact log message confirming remote signer is connected at startup. | Rick / j0sh |
| go-livepeer minimum version for remote signer | remote-signers.mdx | Confirm the release tag that includes PR #3791 and #3822 (merged Jan 2026). | Rick |
| livepeer_cli port default | fund-your-gateway.mdx | Confirm default CLI port is 5935, not another value in v2 tooling. | Rick |
| livepeer_cli unlock period | fund-your-gateway.mdx | Confirm current TicketBroker unlock period on Arbitrum One (historically 7 days on L1). | Rick |
| livepeer_cli balance query without interactive menu | fund-your-gateway.mdx | Confirm whether HTTP API or CLI flag exists for scripted balance monitoring. | Rick / j0sh |
| `-priceFeedAddr` required for USD pricing | pricing-strategy.mdx | Confirm `-priceFeedAddr` is required when using USD notation in `-maxPricePerUnit`. Chainlink contract address for Arbitrum One. | Rick |
| livepeer_cli option for querying orchestrator pricing | pricing-strategy.mdx | Which option number shows orchestrator prices. | Rick |
| HTTP API endpoints `/setBroadcastConfig` and `/setMaxPriceForCapability` | pricing-strategy.mdx | Confirm exact endpoint paths, HTTP methods, and request body format. | Rick / j0sh |
| livepeer_cli Option 16 — set broadcast config | pricing-strategy.mdx | Confirm Option 16 is correct for set broadcast config in current builds. | Rick |
| LLM per-token pricing | pricing-strategy.mdx | Confirm LLM pipeline pricing is per-token in current go-livepeer. | j0sh |
| Remote signer combined with on-chain video transcoding | payment-paths.mdx | Clarify whether remote signer can be used alongside transcoding payment path, or whether they are entirely separate. | Rick / j0sh |
| Elite Encoder signer URL | remote-signers.mdx, payment-clearinghouse-guide.mdx | Discord has typo `signer.eiteencoder.net`; source docs use `signer.eliteencoder.net`. Confirm correct URL. | John \| Elite Encoder |
| clearinghouse SDK integration pattern | payment-clearinghouse-guide.mdx | Confirm exact SDK configuration for clearinghouse API key once GA. | j0sh |
| tools.livepeer.cloud URL | payment-clearinghouse-guide.mdx | Confirm tools.livepeer.cloud is the active URL (livepeer.tools confirmed down). | Alison / community |
| livepeer_cli Option 11 option number | fund-your-gateway.mdx | Confirm Option 11 is still the correct option for `deposit broadcasting funds` in current builds. | Rick |

<CustomDivider />

## Journey evaluation scores

| Page | Score | Gaps identified | Status |
|---|---|---|---|
| payment-paths.mdx | 9/10 | Minor: AI off-chain gateway payment obligation needs SME clarification | Ready for SME review |
| fund-your-gateway.mdx | 8/10 | livepeer_cli port, unlock period, scripted monitoring all need verification | Ready for SME review |
| pricing-strategy.mdx | 9/10 | priceFeedAddr, HTTP API paths, CLI option numbers need verification | Ready for SME review |
| remote-signers.mdx | 8/10 | Exact flag names, startup log line, minimum version need verification | Ready for SME review |
| payment-clearinghouse-guide.mdx | 9/10 | SDK integration pattern needs GA clearinghouse to verify; NaaP status current | Ready for SME review |

<CustomDivider />

## Editorial checklist

- [x] UK English throughout, -ise spellings
- [x] No em dashes used (colons or restructured sentences used instead)
- [x] JSX comments only `{/* */}` — no HTML `[//]: # ()` comments
- [x] Full frontmatter on every page (title, sidebarTitle, description, keywords, og:image, pageType, audience, purpose, status, lastVerified)
- [x] Mintlify components used: CardGroup, Card, Steps, Step, AccordionGroup, Accordion, Note, Tip, Warning, Info, Tabs, Tab, Mermaid, tables
- [x] Unverified claims flagged with `{/* REVIEW: */}` inline
- [x] No repo writes, no commits, no pushes — all output to `/mnt/user-data/outputs/`
- [x] Long text blocks broken up with components
- [x] Every page ends with a CardGroup of next steps
- [x] No bullet-point dumps — prose with visual structure
- [ ] SME review items resolved before publication
- [ ] Video content: no embeddable tutorial video found for payment setup specifically. Search recommended: Titan Node YouTube, Livepeer Foundation YouTube channel, #local-gateways Discord for any recorded demos.

<CustomDivider />

## Recommended follow-up

1. **SME pass:** Rick and j0sh to resolve all REVIEW flags before any page merges. 18 flags outstanding.
2. **Video search:** Actively search Livepeer Foundation YouTube (`youtube.com/@livepeer`), Titan Node channel, and `#local-gateways` Discord for any recorded gateway payment setup or remote signer demos. None found during this research pass.
3. **clearinghouse GA:** Once a public clearinghouse reaches GA, the `payment-clearinghouse-guide.mdx` developer experience section needs a concrete worked example with real API key and endpoint.
4. **NaaP integration:** Once `livepeer/naap` MVP ships, link the NaaP dashboard from clearinghouse-guide.mdx as the canonical onboarding surface.
5. **Orchestrator discovery:** The off-chain AI gateway has no on-chain discovery; this is flagged in `payment-paths.mdx`. A dedicated orchestrator discovery guide would complete the journey for AI-only gateway operators.
