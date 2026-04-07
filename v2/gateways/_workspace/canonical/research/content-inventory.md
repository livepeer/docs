# Gateways Tab — Content Inventory

> Collated: 2026-04-06
> Live v2 files (excl workspace/x-resources): 137
> In docs.json nav: 98
> On disk but not in nav: 39
> x-resources context files: ~120 (across 6 guide sections)

---

## Table 1: V1 Gateway Pages

| Filename | Location | Summary | V2 Equivalent | Usefulness |
|----------|----------|---------|---------------|------------|
| introduction.mdx | `v1/gateways/` | Livepeer Studio platform overview — **MIS-FILED** (Studio content, not gateway operator) | `v2/gateways/index.mdx` | medium |
| quick-start.mdx | `v1/gateways/` | SDK setup guide (JavaScript/React) + asset playback — **MIS-FILED** (Studio content) | `v2/gateways/quickstart/` | medium |
| livepeer-studio-cli.mdx | `v1/gateways/` | Livepeer Studio CLI tool — **MIS-FILED** (Studio content) | N/A | low |
| gateway-overview.mdx | `v1/gateways/guides/` | Core gateway install guide: prerequisites, Docker/Linux/Windows, Arbitrum RPC. Explains "Broadcaster" legacy term | `v2/gateways/setup/install/install-overview.mdx` | high |
| linux-install.mdx | `v1/gateways/guides/` | Step-by-step Linux binary install, keystore gen, systemd, CLI access | `v2/gateways/setup/install/linux-install.mdx` | high |
| windows-install.mdx | `v1/gateways/guides/` | Windows binary download, batch file setup, ETH password config | `v2/gateways/setup/install/windows-install.mdx` | high |
| docker-install.mdx | `v1/gateways/guides/` | Docker install: volume setup, compose, ETH account creation | `v2/gateways/setup/install/docker-install.mdx` | high |
| transcoding-options.mdx | `v1/gateways/guides/` | JSON config template for encoding profiles (resolution, bitrate, codec) | `v2/gateways/setup/configure/video-configuration.mdx` | high |
| fund-gateway.mdx | `v1/gateways/guides/` | Fund gateway: send ETH, bridge to Arbitrum, deposit/reserve via CLI, gas warnings | `v2/gateways/setup/requirements/on-chain-setup/fund-gateway.mdx` | high |
| publish-content.mdx | `v1/gateways/guides/` | RTMP streaming via FFmpeg CLI and OBS Studio. Test stream examples | **NO V2 EQUIVALENT** — RTMP publish workflow missing | medium |
| playback-content.mdx | `v1/gateways/guides/` | VLC playback from gateway HTTP stream (m3u8 URL) | **NO V2 EQUIVALENT** — HLS verification missing | low |
| get-started.mdx | `v1/ai/gateways/` | AI Gateway entry point referencing mainnet guide with AI extensions | `v2/gateways/quickstart/AI-prompt.mdx` | medium |
| start-gateway.mdx | `v1/ai/gateways/` | Off-chain AI Gateway setup: Docker, ports, binaries. Operational verification steps (7.3KB) | `v2/gateways/setup/install/` + `guides/node-pipelines/ai-pipelines.mdx` | high |
| onchain.mdx | `v1/ai/gateways/` | On-chain AI Gateway config: ETH prep, deposit/reserve, AI flags, per-model max price JSON (5.5KB) | `v2/gateways/setup/configure/ai-configuration.mdx` | high |
| gateways.mdx | `v1/developers/core-concepts/livepeer-network/` | Conceptual overview of gateways as network nodes — routing, no staking, CPU-only | `v2/gateways/concepts/role.mdx` | high |
| gateway-introspection.mdx | `v1/orchestrators/guides/` | Public Loki API for gateway introspection and orchestrator selection review | `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx` | medium |
| gateways.mdx | `v1/ai/builders/` | Comprehensive AI gateway resource (33KB, 723 lines). Setup, config, integration | Partially in `v2/gateways/guides/node-pipelines/` | **high** |

---

## Table 2: Non-V2 Gateway Content (Workspace, Snippets, Cross-Tab)

### Content sources (high value for restructure)

| Filename | Location | Type | Summary | Usefulness |
|----------|----------|------|---------|------------|
| S01–S13 (13 files) | `workspace/plan/active/ORCHESTRATOR-CONTENT-WRITING/gateways/` | content-source | Pre-written content for all 13 canonical sections (path finder, concepts, quickstarts, pricing, routing, AI, dual, payments, production, troubleshooting, NaaP) | **high** |
| gateways-IA.md | `workspace/plan/active/ORCHESTRATOR-CONTENT-WRITING/` | IA reference | Locked 13-section information architecture with section purposes and source mapping | **high** |
| gateways.jsx | `snippets/data/` | data | 840+ lines of QuickStart data: Docker/Linux/Windows steps, off-chain/on-chain modes, compose templates, AI models, pricing | **high** |
| notes.mdx | `snippets/data/gateways/` | reference | Off-chain vs on-chain Docker config comparison, testing approaches, AI testing patterns (~230 lines) | **high** |
| running-a-gateway.mdx | `v2/developers/concepts/` | cross-tab | Developer-facing: when to run own gateway vs hosted API. Trade-offs, decision guide. Key handoff page | **high** |
| gateways.mdx | `v2/about/network/livepeer-actors/` | cross-tab | About-tab gateway role: job intake, routing, delivery, why gateways matter | **high** |
| gateways-vs-orchestrators.mdx | `v2/about/resources/knowledge-hub/` | cross-tab | Comparative guide distinguishing gateway (coordination) from orchestrator (compute). Diagram + table | **high** |
| gateway-relationships.mdx | `v2/orchestrators/guides/advanced-operations/` | cross-tab | Orchestrator perspective: how gateways discover and select orchestrators, Loki introspection | **high** |
| gateway-orchestrator-interface.mdx | `v2/orchestrators/guides/advanced-operations/` | cross-tab | Dual-node deployment: off-chain gateway + on-chain orchestrator, port separation, self-routing | **high** |

### Reference and planning docs

| Filename | Location | Type | Summary | Usefulness |
|----------|----------|------|---------|------------|
| gateways-content-scan.md | `CONTENT-WRITING/context-packs/` | reference | 98-page structured scan: path, frontmatter, headings, status per page (2,620 lines) | high |
| gateways-ia-prereq.md | `CONTENT-WRITING/context-packs/` | reference | IA prerequisites: folder tree, nav tree, metadata tables, structure validation | high |
| gateways-research-pack.md | `CONTENT-WRITING/context-packs/` | reference | V1/V2 inventory, CLI flags, ports, contracts, economics, 15 open questions | medium |
| gateways-v1-content.md | `CONTENT-WRITING/context-packs/` | data | Full v1 gateway source content dump (17K lines) | medium |
| gateways-full-content.md | `CONTENT-WRITING/context-packs/` | data | Full v2/gateways MDX dump (93K lines) | low |
| gateways-COMPLETION-STATUS.md | `ORCHESTRATOR-CONTENT-WRITING/` | reference | S01–S13 completion tracker with dates and status | medium |
| README.md | `CONTENT-WRITING/collated/gateways/` | reference | Phase 1 collation control doc with gate status and open items | medium |
| glossary-gateways.md | `TERMINOLOGY-COLLATE/per-tab/` | reference | 50+ gateway-specific terms with definitions, tags, status | medium |
| gateways.json | `workspace/research/claims/` | data | Claim registry for gateway fact checks | medium |

---

## Table 3: V2 Gateway Pages — In Navigation (98 pages)

### Root (2 pages)
| Filename | Path | In Nav | Summary needed | Usefulness |
|----------|------|--------|----------------|------------|
| portal.mdx | `v2/gateways/portal` | ✅ | Tab entry point / landing page | core |
| navigator.mdx | `v2/gateways/navigator` | ✅ | Routing/disambiguation page (19KB — most comprehensive navigator in v2) | core |

### Concepts (4 pages)
| Filename | Path | In Nav | Usefulness |
|----------|------|--------|------------|
| role.mdx | `v2/gateways/concepts/role` | ✅ | core |
| capabilities.mdx | `v2/gateways/concepts/capabilities` | ✅ | core |
| architecture.mdx | `v2/gateways/concepts/architecture` | ✅ | core |
| business-model.mdx | `v2/gateways/concepts/business-model` | ✅ | core |

### Quickstart (3 pages — 1 shared with Tutorials)
| Filename | Path | In Nav | Notes |
|----------|------|--------|-------|
| gateway-setup.mdx | `v2/gateways/quickstart/gateway-setup` | ✅ | Primary quickstart |
| byoc-cpu-tutorial.mdx | `v2/gateways/guides/tutorials/byoc-cpu-tutorial` | ✅ | Also in Tutorial: Zero-to-Hero |
| AI-prompt.mdx | `v2/gateways/quickstart/AI-prompt` | ✅ | AI-assisted setup |

### Gateway Setup (20 pages across 5 subgroups)
| Filename | Path | In Nav | Subgroup |
|----------|------|--------|----------|
| guide.mdx | `v2/gateways/setup/guide` | ✅ | Root |
| setup.mdx | `v2/gateways/setup/requirements/setup` | ✅ | Setup Checklist |
| on-chain.mdx | `v2/gateways/setup/requirements/on-chain-setup/on-chain` | ✅ | Setup Checklist |
| fund-gateway.mdx | `v2/gateways/setup/requirements/on-chain-setup/fund-gateway` | ✅ | Setup Checklist |
| install-overview.mdx | `v2/gateways/setup/install/install-overview` | ✅ | Installation |
| docker-install.mdx | `v2/gateways/setup/install/docker-install` | ✅ | Installation |
| linux-install.mdx | `v2/gateways/setup/install/linux-install` | ✅ | Installation |
| windows-install.mdx | `v2/gateways/setup/install/windows-install` | ✅ | Installation |
| community-projects.mdx | `v2/gateways/setup/install/community-projects` | ✅ | Installation |
| configuration-overview.mdx | `v2/gateways/setup/configure/configuration-overview` | ✅ | Configuration |
| video-configuration.mdx | `v2/gateways/setup/configure/video-configuration` | ✅ | Configuration |
| ai-configuration.mdx | `v2/gateways/setup/configure/ai-configuration` | ✅ | Configuration |
| dual-configuration.mdx | `v2/gateways/setup/configure/dual-configuration` | ✅ | Configuration |
| pricing-configuration.mdx | `v2/gateways/setup/configure/pricing-configuration` | ✅ | Configuration |
| lp-marketplace.mdx | `v2/gateways/setup/connect/lp-marketplace` | ✅ | Network Connect |
| discover-offerings.mdx | `v2/gateways/setup/connect/discover-offerings` | ✅ | Network Connect |
| connect-with-offerings.mdx | `v2/gateways/setup/connect/connect-with-offerings` | ✅ | Network Connect |
| monitor-and-optimise.mdx | `v2/gateways/setup/monitor/monitor-and-optimise` | ✅ | Monitor & Optimise |

### Guides (30 pages across 8 subgroups)
| Filename | Path | In Nav | Subgroup |
|----------|------|--------|----------|
| business-case.mdx | `guides/operator-considerations/business-case` | ✅ | Operator Considerations |
| production-gateways.mdx | `guides/operator-considerations/production-gateways` | ✅ | Operator Considerations |
| setup-options.mdx | `guides/deployment-details/setup-options` | ✅ | Deployment Options |
| setup-requirements.mdx | `guides/deployment-details/setup-requirements` | ✅ | Deployment Options |
| guide.mdx | `guides/node-pipelines/guide` | ✅ | AI and Job Pipelines |
| video-pipelines.mdx | `guides/node-pipelines/video-pipelines` | ✅ | AI and Job Pipelines |
| ai-pipelines.mdx | `guides/node-pipelines/ai-pipelines` | ✅ | AI and Job Pipelines |
| byoc-pipelines.mdx | `guides/node-pipelines/byoc-pipelines` | ✅ | AI and Job Pipelines |
| pipeline-configuration.mdx | `guides/node-pipelines/pipeline-configuration` | ✅ | AI and Job Pipelines |
| payment-guide.mdx | `guides/payments-and-pricing/payment-guide` | ✅ | Payments and Pricing |
| funding-guide.mdx | `guides/payments-and-pricing/funding-guide` | ✅ | Payments and Pricing |
| pricing-strategy.mdx | `guides/payments-and-pricing/pricing-strategy` | ✅ | Payments and Pricing |
| remote-signers.mdx | `guides/payments-and-pricing/remote-signers` | ✅ | Payments and Pricing |
| clearinghouse-guide.mdx | `guides/payments-and-pricing/clearinghouse-guide` | ✅ | Payments and Pricing |
| health-checks.mdx | `guides/monitoring-and-tooling/health-checks` | ✅ | Monitoring and Tooling |
| tools-and-dashboards.mdx | `guides/monitoring-and-tooling/tools-and-dashboards` | ✅ | Monitoring and Tooling |
| monitoring-setup.mdx | `guides/monitoring-and-tooling/monitoring-setup` | ✅ | Monitoring and Tooling |
| on-chain-metrics.mdx | `guides/monitoring-and-tooling/on-chain-metrics` | ✅ | Monitoring and Tooling |
| troubleshooting.mdx | `guides/monitoring-and-tooling/troubleshooting` | ✅ | Monitoring and Tooling |
| orchestrator-selection.mdx | `guides/advanced-operations/orchestrator-selection` | ✅ | Advanced Operations |
| scaling.mdx | `guides/advanced-operations/scaling` | ✅ | Advanced Operations |
| gateway-middleware.mdx | `guides/advanced-operations/gateway-middleware` | ✅ | Advanced Operations |
| gateway-discoverability.mdx | `guides/advanced-operations/gateway-discoverability` | ✅ | Advanced Operations |
| operator-support.mdx | `guides/roadmap-and-funding/operator-support` | ✅ | Roadmap and Funding |
| spe-grant-model.mdx | `guides/roadmap-and-funding/spe-grant-model` | ✅ | Roadmap and Funding |
| naap-multi-tenancy.mdx | `guides/roadmap-and-funding/naap-multi-tenancy` | ✅ | Roadmap and Funding |
| gateway-showcase.mdx | `guides/roadmap-and-funding/gateway-showcase` | ✅ | Roadmap and Funding |
| tutorial-1-offchain-transcoding-test.mdx | `guides/tutorials/tutorial-1-*` | ✅ | Tutorial: Zero-to-Hero |
| tutorial-2-byoc-cpu-pipeline.mdx | `guides/tutorials/tutorial-2-*` | ✅ | Tutorial: Zero-to-Hero |
| tutorial-3-go-production.mdx | `guides/tutorials/tutorial-3-*` | ✅ | Tutorial: Zero-to-Hero |

### Resources (39 pages across reference, compendium, knowledge-hub)
| Filename | Path | In Nav | Subgroup |
|----------|------|--------|----------|
| faq.mdx | `resources/reference/faq` | ✅ | Root |
| glossary.mdx | `resources/reference/glossary` | ✅ | Root (human-maintained, 11KB) |
| glossary.mdx | `resources/compendium/glossary` | ✅ | Compendium (AI-generated, 57KB) |
| technical-architecture.mdx | `resources/reference/technical/technical-architecture` | ✅ | Technical Reference |
| configuration-flags.mdx | `resources/reference/technical/configuration-flags` | ✅ | Technical Reference (STUB) |
| contract-addresses.mdx | `resources/reference/technical/contract-addresses` | ✅ | Technical Reference |
| cli-commands.mdx | `resources/reference/technical/cli-commands` | ✅ | Technical Reference |
| ai.mdx + 13 AI API endpoints | `resources/reference/technical/api-reference/AI-API/` | ✅ | AI API (13 mostly stubs) |
| cli-http-api.mdx + 8 CLI endpoints | `resources/reference/technical/api-reference/CLI-HTTP/` | ✅ | CLI HTTP API |
| guides.mdx | `resources/knowledge-hub/guides` | ✅ | Knowledge Hub |
| resources.mdx | `resources/knowledge-hub/resources` | ✅ | Knowledge Hub |
| help.mdx | `resources/knowledge-hub/help` | ✅ | Knowledge Hub |

---

## Table 4: V2 Gateway Pages — NOT in Navigation (39 pages)

| Filename | Path | Category | Notes |
|----------|------|----------|-------|
| index.mdx | `v2/gateways/index` | root | Tab index — not in nav (Mintlify uses portal as entry) |
| **Deprecated (3)** | | | |
| dep-production-hardening.mdx | `guides/advanced-operations/` | deprecated | `dep-` prefix |
| dep-ai-inference.mdx | `guides/node-pipelines/` | deprecated | `dep-` prefix |
| dep-payment-guide.mdx | `guides/payments-and-pricing/` | deprecated | `dep-` prefix |
| **Tutorial stubs (3)** | | | |
| tutorial-byoc-cpu-pipeline.mdx | `guides/tutorials/stubs/` | stub | Stub for tutorial-2 |
| tutorial-go-production.mdx | `guides/tutorials/stubs/` | stub | Stub for tutorial-3 |
| tutorial-offchain-transcoding-test.mdx | `guides/tutorials/stubs/` | stub | Stub for tutorial-1 |
| **Tutorial support (1)** | | | |
| tutorials-resources.mdx | `guides/tutorials/` | support | Resources page for tutorials |
| **Quickstart view/group partials (11)** | | | |
| dockerSupport.mdx | `quickstart/groups/docker/` | partial | Platform support note |
| linuxSupport.mdx | `quickstart/groups/linux/` | partial | Platform support note |
| macSupport.mdx | `quickstart/groups/linux/` | partial | Platform support note |
| dockerOffChainTab.mdx | `quickstart/views/docker/` | partial | Tab content for quickstart |
| dockerOnChainTab.mdx | `quickstart/views/docker/` | partial | Tab content for quickstart |
| linuxOffChainTab.mdx | `quickstart/views/linux/` | partial | Tab content for quickstart |
| linuxOnChainTab.mdx | `quickstart/views/linux/` | partial | Tab content for quickstart |
| windowsOffChainTab.mdx | `quickstart/views/windows/` | partial | Tab content for quickstart |
| windowsOnChainTab.mdx | `quickstart/views/windows/` | partial | Tab content for quickstart |
| **Duplicate API reference files (7)** | | | |
| ai-worker-api.mdx | `resources/reference/technical/api-reference/AI-Worker/` | duplicate | Also at `api-reference/ai-worker-api.mdx` |
| hardware-info.mdx | `resources/reference/technical/api-reference/` | duplicate | Also in AI-API/ |
| hardware-stats.mdx | `resources/reference/technical/api-reference/` | duplicate | Also in AI-API/ |
| health.mdx | `resources/reference/technical/api-reference/` | duplicate | Also in AI-API/ |
| bond.mdx | `resources/reference/technical/api-reference/CLI-HTTP/` | not in nav | CLI HTTP endpoint |
| protocolparameters.mdx | `resources/reference/technical/api-reference/CLI-HTTP/` | not in nav | CLI HTTP endpoint |
| registeredorchestrators.mdx | `resources/reference/technical/api-reference/CLI-HTTP/` | not in nav | CLI HTTP endpoint |
| status.mdx | `resources/reference/technical/api-reference/CLI-HTTP/` | not in nav | CLI HTTP endpoint |
| _delete-all-api.mdx | `resources/reference/technical/api-reference/` | orphan | Deletion marker file? |
| **Duplicate reference files (4)** | | | |
| cli-reference.mdx | `resources/reference/technical/go-livepeer/` | duplicate | Same as `reference/go-livepeer/cli-reference` |
| gpu-support.mdx | `resources/reference/technical/go-livepeer/` | duplicate | Exists at two paths |
| hardware-requirements.mdx | `resources/reference/technical/go-livepeer/` | duplicate | Exists at two paths |
| prometheus-metrics.mdx | `resources/reference/technical/go-livepeer/` | duplicate | Exists at two paths |
| **Other not-in-nav files (6)** | | | |
| orchestrator-offerings.mdx | `resources/reference/technical/` | orphan | Not in nav |
| configuration-reference.mdx | `setup/configure/` | orphan | Not in nav — may duplicate configuration-flags |
| dual-docker.mdx | `setup/configure/` | orphan | Docker-specific dual config — not in nav |
| video-configuration-view.mdx | `setup/configure/` | orphan | View variant — not in nav |
| connect-with-offerings.mdx | `setup/publish/` | duplicate | Same name as `setup/connect/connect-with-offerings` |
| bridge-lpt-to-arbitrum.mdx | `setup/requirements/on-chain-setup/` | orphan | Not in nav — may be needed |
| transcoding.mdx | `setup/` | stub | STUB — not in nav |
| transcoding-options.mdx | `setup/v1/` | legacy | V1 carryover |

---

## Key Findings

### Content duplication candidates (merge)
1. `discover-offerings` ↔ `connect-with-offerings` (near-identical discovery process)
2. `funding-guide` (guides/) ↔ `fund-gateway` (setup/) — same process in two places
3. `production-gateways` ↔ `gateway-showcase` — same showcase content
4. `glossary` (11KB) ↔ `compendium/glossary` (57KB AI-generated) — unclear relationship
5. `cli-reference` (go-livepeer/) ↔ `cli-commands` (technical/) — two CLI references
6. `setup/publish/connect-with-offerings` ↔ `setup/connect/connect-with-offerings` — same file name, two locations

### Universal frontmatter issues (all 98 nav pages)
- Missing: `lifecycleStage`, `description`, `veracityStatus`
- Non-canonical: `audience: gateway-operator` (should be `gateway`)
- Deprecated `purpose` values on ~85 pages
- Deprecated `pageType` values on 10 pages

### Stubs needing completion
- `configuration-flags.mdx` — heading only (49 words)
- `transcoding.mdx` — setup stub, not in nav
- 21 API endpoint pages (13 AI + 8 CLI HTTP) — frontmatter-only with OpenAPI component

### Content gaps (no v2 equivalent)
- RTMP publishing workflow (v1 `publish-content.mdx`)
- HLS playback verification (v1 `playback-content.mdx`)

### x-resources context files (~120 files)
Spread across 6 guide sections — these are source/context material used during content writing, not publishable pages. Should be inventoried separately if needed for content merges.
