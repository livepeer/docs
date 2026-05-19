# Resource HUB — Comprehensive Inventory

Generated: 2026-05-18 from `build-inventory.js`
Total candidate pages: **159**

## Classification rules

- **Reference** — `pageType: reference` OR `pageType: changelog` OR `pageType: troubleshooting`
- **Compendium** — `pageVariant: compendium` OR `pageType: glossary` OR `pageType: faq`
- **Knowledge Hub** — `pageVariant: knowledge-hub`
- **(path)** suffix — frontmatter missing or ambiguous; classification inferred from path tokens
- **Other-resource-shaped** — path looks reference-ish but neither frontmatter nor path tokens were decisive; needs human review

## Summary

### By category
| Category | Count |
|---|---:|
| Reference | 130 |
| Compendium | 13 |
| Knowledge Hub | 5 |
| Reference (path) | 5 |
| Compendium (path) | 2 |
| Knowledge Hub (path) | 4 |

### By category × audience subgroup
| Category / Subgroup | Count |
|---|---:|
| Compendium (path) / community | 1 |
| Compendium (path) / general | 1 |
| Compendium / about | 3 |
| Compendium / community | 3 |
| Compendium / delegator | 3 |
| Compendium / developer | 1 |
| Compendium / gateway | 1 |
| Compendium / general | 1 |
| Compendium / orchestrator | 1 |
| Knowledge Hub (path) / gateway | 3 |
| Knowledge Hub (path) / orchestrator | 1 |
| Knowledge Hub / about | 2 |
| Knowledge Hub / community | 2 |
| Knowledge Hub / delegator | 1 |
| Reference (path) / gateway | 1 |
| Reference (path) / general | 4 |
| Reference / about | 4 |
| Reference / community | 12 |
| Reference / contributor | 13 |
| Reference / delegator | 2 |
| Reference / developer | 21 |
| Reference / gateway | 51 |
| Reference / general | 10 |
| Reference / orchestrator | 16 |
| Reference / solutions | 1 |

### By category × domain
| Category / Domain | Count |
|---|---:|
| Compendium (path) / general | 2 |
| Compendium / general | 10 |
| Compendium / protocol | 3 |
| Knowledge Hub (path) / general | 4 |
| Knowledge Hub / education | 4 |
| Knowledge Hub / video | 1 |
| Reference (path) / ai | 3 |
| Reference (path) / changelog | 1 |
| Reference (path) / general | 1 |
| Reference / ai | 24 |
| Reference / api-sdk | 6 |
| Reference / changelog | 7 |
| Reference / education | 1 |
| Reference / general | 46 |
| Reference / protocol | 14 |
| Reference / tooling | 32 |

## Consolidation candidates (duplicates & near-duplicates)

Same-slug across multiple paths — strong consolidation candidates.

Total slug clusters with 2+ paths: **20**

| Slug | Copies | Paths | Categories |
|---|---:|---|---|
| **glossary** | 8 | `v2/about/resources/glossary.mdx`<br/>`v2/home/resources/glossary.mdx`<br/>`v2/community/resources/glossary.mdx`<br/>`v2/resources/glossary.mdx`<br/>`v2/delegators/resources/glossary.mdx`<br/>`v2/developers/resources/glossary.mdx`<br/>`v2/gateways/resources/glossary.mdx`<br/>`v2/orchestrators/resources/glossary.mdx` | Compendium |
| **faq** | 4 | `v2/community/resources/faq.mdx`<br/>`v2/gateways/resources/reference/faq.mdx`<br/>`v2/orchestrators/resources/reference/faq.mdx`<br/>`v2/about/resources/faq.mdx` | Reference, Compendium |
| **contract-addresses** | 3 | `v2/gateways/resources/reference/technical/contract-addresses.mdx`<br/>`v2/resources/references/contract-addresses.mdx`<br/>`v2/orchestrators/resources/reference/technical/contract-addresses.mdx` | Reference |
| **gpu-support** | 3 | `v2/gateways/resources/reference/go-livepeer/gpu-support.mdx`<br/>`v2/gateways/resources/reference/technical/go-livepeer/gpu-support.mdx`<br/>`v2/orchestrators/resources/reference/gpu-support.mdx` | Reference |
| **technical-roadmap** | 2 | `v2/about/guides/technical-roadmap.mdx`<br/>`v2/about/resources/reference/technical-roadmap.mdx` | Reference |
| **awesome-livepeer** | 2 | `v2/community/resources/awesome-livepeer.mdx`<br/>`v2/resources/changelog/ecosystem/awesome-livepeer.mdx` | Reference |
| **guides** | 2 | `v2/community/resources/guides.mdx`<br/>`v2/gateways/resources/knowledge-hub/guides.mdx` | Reference, Knowledge Hub (path) |
| **help** | 2 | `v2/developers/guides/help.mdx`<br/>`v2/gateways/resources/knowledge-hub/help.mdx` | Reference, Knowledge Hub (path) |
| **hardware-info** | 2 | `v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info.mdx`<br/>`v2/gateways/resources/reference/technical/api-reference/hardware-info.mdx` | Reference |
| **hardware-stats** | 2 | `v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats.mdx`<br/>`v2/gateways/resources/reference/technical/api-reference/hardware-stats.mdx` | Reference |
| **health** | 2 | `v2/gateways/resources/reference/technical/api-reference/AI-API/health.mdx`<br/>`v2/gateways/resources/reference/technical/api-reference/health.mdx` | Reference |
| **ai-worker-api** | 2 | `v2/gateways/resources/reference/technical/api-reference/ai-worker-api.mdx`<br/>`v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api.mdx` | Reference |
| **arbitrum-exchanges** | 2 | `v2/gateways/resources/compendium/arbitrum-exchanges.mdx`<br/>`v2/orchestrators/resources/reference/arbitrum-exchanges.mdx` | Reference |
| **arbitrum-rpc** | 2 | `v2/gateways/resources/compendium/arbitrum-rpc.mdx`<br/>`v2/orchestrators/resources/reference/arbitrum-rpc.mdx` | Reference |
| **cli-reference** | 2 | `v2/gateways/resources/reference/go-livepeer/cli-reference.mdx`<br/>`v2/gateways/resources/reference/technical/go-livepeer/cli-reference.mdx` | Reference |
| **hardware-requirements** | 2 | `v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx`<br/>`v2/gateways/resources/reference/technical/go-livepeer/hardware-requirements.mdx` | Reference |
| **prometheus-metrics** | 2 | `v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx`<br/>`v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics.mdx` | Reference |
| **evaluating-livepeer** | 2 | `v2/about/guides/evaluating-livepeer.mdx`<br/>`v2/about/resources/knowledge-hub/evaluating-livepeer.mdx` | Knowledge Hub |
| **contributor-orientation** | 2 | `v2/about/guides/contributor-orientation.mdx`<br/>`v2/about/resources/knowledge-hub/contributor-orientation.mdx` | Knowledge Hub |
| **media-kit** | 2 | `v2/community/resources/compendium/media-kit.mdx`<br/>`v2/resources/compendium/media-kit.mdx` | Compendium (path) |

Same-title across multiple paths (different slugs but identical titles).

Total title clusters not already covered by slug: **2**

| Title | Copies | Paths | Categories |
|---|---:|---|---|
| **Canonical Contract Addresses** | 4 | `v2/about/resources/reference/livepeer-contract-addresses.mdx`<br/>`v2/gateways/resources/reference/technical/contract-addresses.mdx`<br/>`v2/resources/references/contract-addresses.mdx`<br/>`v2/orchestrators/resources/reference/technical/contract-addresses.mdx` | Reference |
| **Livepeer Glossary** | 2 | `v2/about/resources/livepeer-glossary.mdx`<br/>`v2/resources/glossary.mdx` | Compendium |

## Reference (130)

| Path | Title | pageType | pageVariant | Subgroup | Domain | Status |
|---|---|---|---|---|---|---|
| `v2/about/resources/knowledge-hub/livepeer-whitepaper.mdx` | Livepeer Whitepaper | reference |  | about | education |  |
| `v2/about/guides/technical-roadmap.mdx` | Technical Roadmap | reference |  | about | general |  |
| `v2/about/network/actors.mdx` | Livepeer Network Actors and Nodes | reference |  | about | general |  |
| `v2/about/resources/reference/technical-roadmap.mdx` | Technical Roadmap | reference |  | about | general |  |
| `docs-guide/frameworks/page-composition-framework.mdx` | Page-structure-template | reference | specification | community | general | draft |
| `v2/community/resources/awesome-livepeer.mdx` | Ecosystem Tools & Projects | reference |  | community | general | verified_2026 |
| `v2/community/resources/dashboards.mdx` | Dashboards | reference |  | community | general | provisional |
| `v2/community/resources/faq.mdx` | Community FAQ | reference |  | community | general | verified_2026 |
| `v2/community/resources/guides.mdx` | Community Guides | reference |  | community | general | verified_2026 |
| `v2/resources/documentation-guide/component-library/config.mdx` | Config | reference |  | community | general |  |
| `v2/resources/documentation-guide/component-library/displays.mdx` | Displays | reference |  | community | general |  |
| `v2/resources/documentation-guide/component-library/elements.mdx` | Elements | reference |  | community | general |  |
| `v2/resources/documentation-guide/component-library/scaffolding.mdx` | Scaffolding | reference |  | community | general |  |
| `v2/resources/documentation-guide/component-library/wrappers.mdx` | Wrappers | reference |  | community | general |  |
| `v2/about/resources/reference/livepeer-contract-addresses.mdx` | Canonical Contract Addresses | reference |  | community | protocol | current |
| `v2/about/resources/reference/network-metrics.mdx` | Network Metrics | reference |  | community | tooling | draft |
| `docs-guide/contributing/agent-instructions.mdx` | Agent Instructions | reference |  | contributor | general | current |
| `docs-guide/contributing/git-hooks.mdx` | Git Hooks | reference |  | contributor | general | current |
| `docs-guide/frameworks/component-framework-canonical.mdx` | Component Framework — Canonical Taxonomy | reference |  | contributor | general | active |
| `docs-guide/frameworks/styles-engineering-guide.mdx` | Styles Engineering Guide | reference |  | contributor | general | current |
| `docs-guide/policies/component-layout-decisions.mdx` | Component Layout Decisions | reference |  | contributor | general | current |
| `docs-guide/repo-ops/config/repo-config-map.mdx` | Repo Config Map | reference |  | contributor | general |  |
| `docs-guide/repo-ops/maps/enforcement-map.mdx` | Enforcement Map | reference |  | contributor | general |  |
| `docs-guide/tooling/lpd-mdx-preview.mdx` | lpd-mdx-preview — VS Code Extension | reference |  | contributor | general | current |
| `docs-guide/tooling/reference-maps/badge-map.mdx` | Badge Map | reference |  | contributor | general | current |
| `docs-guide/tooling/reference-maps/icon-map.mdx` | Icon Map | reference |  | contributor | general | current |
| `v2/resources/documentation-guide/component-library/integrators.mdx` | Integrators | reference |  | contributor | general |  |
| `v2/resources/documentation-guide/tooling/snippets-inventory.mdx` | Snippets Folder Inventory | reference |  | contributor | general | current |
| `docs-guide/tooling/lpd-cli.mdx` | LPD CLI | reference |  | contributor | tooling | current |
| `v2/delegators/resources/reference/contracts.mdx` | Contract Addresses | reference |  | delegator | protocol | current |
| `v2/delegators/resources/reference/protocol-parameters.mdx` | Protocol Parameters | reference |  | delegator | protocol | current |
| `v2/developers/resources/reference/pytrickle-reference.mdx` | PyTrickle reference | reference |  | developer | ai | current |
| `v2/resources/changelog/ai-compute/comfystream.mdx` | ComfyStream Changelog | changelog |  | developer | ai |  |
| `v2/resources/changelog/ai-compute/pytrickle.mdx` | pytrickle Changelog | changelog |  | developer | ai |  |
| `v2/resources/changelog/apis-sdks/livepeer-ai-go.mdx` | Livepeer AI Go SDK Changelog | changelog |  | developer | ai |  |
| `v2/resources/changelog/apis-sdks/livepeer-ai-js.mdx` | Livepeer AI JavaScript SDK Changelog | changelog |  | developer | ai |  |
| `v2/resources/changelog/apis-sdks/livepeer-ai-python.mdx` | Livepeer AI Python SDK Changelog | changelog |  | developer | ai |  |
| `v2/developers/resources/reference/apis.mdx` | APIs | reference |  | developer | api-sdk | current |
| `v2/developers/resources/reference/sdks.mdx` | SDKs | reference |  | developer | api-sdk | current |
| `v2/resources/changelog/apis-sdks/livepeer-js.mdx` | Livepeer JavaScript SDK Changelog | changelog |  | developer | api-sdk |  |
| `v2/resources/changelog/apis-sdks/livepeer-python.mdx` | Livepeer Python SDK Changelog | changelog |  | developer | api-sdk |  |
| `v2/resources/changelog/tooling/livepeer-data.mdx` | Livepeer Data Changelog | changelog |  | developer | changelog |  |
| `docs-guide/features/gap-analysis.mdx` | Repo Gap Analysis | reference |  | developer | general | current |
| `docs-guide/policies/ownerless-governance.mdx` | Ownerless Governance | reference |  | developer | general | current |
| `docs-guide/tooling/dev-tools.mdx` | Dev Tools | reference |  | developer | general | draft |
| `v2/developers/concepts/repo-map.mdx` | Repository Map | reference |  | developer | general | current |
| `v2/developers/guides/help.mdx` | Help | reference |  | developer | general | current |
| `v2/developers/guides/production-hardening-checklist.mdx` | Production hardening checklist | reference |  | developer | general | current |
| `v2/developers/resources/reference/pricing-rate-limits.mdx` | Pricing and Rate Limits | reference |  | developer | general | current |
| `docs-guide/features/contracts-pipeline.mdx` | Contracts Pipeline | reference |  | developer | protocol |  |
| `v2/resources/changelog/protocol/naap.mdx` | NaaP Changelog | changelog |  | developer | protocol |  |
| `v2/resources/changelog/protocol/subgraph.mdx` | Livepeer Subgraph Changelog | changelog |  | developer | protocol |  |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx` | AI API Portal | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text.mdx` | Audio to Text | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info.mdx` | Info | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats.mdx` | Stats | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/health.mdx` | Health | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image.mdx` | Image to Image | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text.mdx` | Image to Text | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video.mdx` | Image to Video | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video.mdx` | Live Video to Video | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/llm.mdx` | LLM | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2.mdx` | Segment Anything 2 | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx` | Text to Image | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech.mdx` | Text to Speech | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-API/upscale.mdx` | Upscale | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/ai-worker-api.mdx` | AI API | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api.mdx` | AI API | reference |  | gateway | ai | current |
| `v2/gateways/resources/reference/technical/api-reference/_delete-all-api.mdx` | AI Worker API | reference |  | gateway | api-sdk | current |
| `v2/gateways/resources/reference/technical/api-reference/health.mdx` | Health | reference |  | gateway | api-sdk | current |
| `v2/resources/changelog/tooling/livepeer-python-gateway.mdx` | Livepeer Python Gateway Changelog | changelog |  | gateway | changelog |  |
| `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx` | Gateway Troubleshooting | reference |  | gateway | general | current |
| `v2/gateways/resources/deployment-terms.mdx` | Gateway Deployment Terms | reference |  | gateway | general | current |
| `v2/gateways/resources/reference/faq.mdx` | Gateway FAQ | reference |  | gateway | general | current |
| `v2/gateways/resources/reference/go-livepeer/bandwidth-requirements.mdx` | Bandwidth Requirements | reference |  | gateway | general | current |
| `v2/gateways/resources/reference/technical/technical-architecture.mdx` | Technical Architecture | reference |  | gateway | general | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters.mdx` | Protocolparameters | reference |  | gateway | protocol | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward.mdx` | Reward | reference |  | gateway | protocol | current |
| `v2/gateways/resources/reference/technical/contract-addresses.mdx` | Canonical Contract Addresses | reference |  | gateway | protocol | current |
| `v2/gateways/resources/compendium/arbitrum-exchanges.mdx` | Arbitrum Exchange Reference | reference |  | gateway | tooling | current |
| `v2/gateways/resources/compendium/arbitrum-rpc.mdx` | Arbitrum RPCs | reference |  | gateway | tooling | current |
| `v2/gateways/resources/compendium/livepeer-exchanges.mdx` | Livepeer Exchanges | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/go-livepeer/cli-reference.mdx` | CLI Reference | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/go-livepeer/gpu-support.mdx` | GPU Support | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx` | Hardware Requirements | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx` | Prometheus Metrics | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond.mdx` | Bond | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx` | CLI HTTP API API Portal | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond.mdx` | Rebond | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig.mdx` | Set Broadcast Config | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx` | Set Max Price For Capability | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage.mdx` | Sign Message | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status.mdx` | Status | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens.mdx` | Transfer Tokens | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond.mdx` | Unbond | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/hardware-info.mdx` | Hardware Info | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/hardware-stats.mdx` | Hardware Stats | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/cli-commands.mdx` | Gateway CLI Commands | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/configuration-flags.mdx` | Gateway Configuration Flags | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/go-livepeer/cli-reference.mdx` | CLI Reference | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/go-livepeer/gpu-support.mdx` | GPU Support | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/go-livepeer/hardware-requirements.mdx` | Hardware Requirements | reference |  | gateway | tooling | current |
| `v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics.mdx` | Prometheus Metrics | reference |  | gateway | tooling | current |
| `v2/resources/changelog/ai-compute/ai-runner.mdx` | AI Runner Changelog | changelog |  | general | ai |  |
| `v2/resources/changelog/changelog.mdx` | Changelog | changelog |  | general | changelog |  |
| `v2/resources/changelog/docs.mdx` | Livepeer Docs Changelog | changelog |  | general | changelog |  |
| `v2/resources/changelog/ecosystem/awesome-livepeer.mdx` | Awesome Livepeer Changelog | changelog |  | general | changelog |  |
| `v2/resources/changelog/ecosystem/website.mdx` | Livepeer.org Website Changelog | changelog |  | general | changelog |  |
| `v2/resources/changelog/tooling/explorer.mdx` | Livepeer Explorer Changelog | changelog |  | general | changelog |  |
| `operations/scripts-library/fetch-contract-addresses.mdx` | Fetch Contract Addresses | reference |  | general | protocol | active |
| `v2/resources/changelog/protocol/go-livepeer.mdx` | go-livepeer changelog | changelog |  | general | protocol |  |
| `v2/resources/changelog/protocol/lips.mdx` | Livepeer Improvement Proposals Changelog | changelog |  | general | protocol |  |
| `v2/resources/references/contract-addresses.mdx` | Canonical Contract Addresses | reference |  | general | protocol |  |
| `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` | Model and Demand Reference | reference |  | orchestrator | ai | published |
| `operations/tests/copy-lint-fixtures/fixtures/pass/clean-reference.mdx` | Pool Worker Reference | reference |  | orchestrator | general | current |
| `v2/gateways/resources/reference/technical/orchestrator-offerings.mdx` | Orchestrator Offerings Reference | reference |  | orchestrator | general | current |
| `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx` | Operator Toolbox | reference |  | orchestrator | general | published |
| `v2/orchestrators/guides/operator-considerations/requirements.mdx` | Requirements | reference |  | orchestrator | general | current |
| `v2/orchestrators/resources/knowledge-hub/community-guides.mdx` | Community Guides & Tutorials | reference |  | orchestrator | general | review |
| `v2/orchestrators/resources/knowledge-hub/community-pools.mdx` | Community Orchestrator Pools | reference |  | orchestrator | general | review |
| `v2/orchestrators/resources/operator-terms.mdx` | Orchestrator Operator Terms | reference |  | orchestrator | general | current |
| `v2/orchestrators/resources/reference/faq.mdx` | FAQ and Troubleshooting | reference |  | orchestrator | general | review |
| `v2/orchestrators/resources/reference/technical/contract-addresses.mdx` | Canonical Contract Addresses | reference |  | orchestrator | protocol |  |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator.mdx` | Activate Orchestrator | reference |  | orchestrator | tooling | current |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators.mdx` | Registeredorchestrators | reference |  | orchestrator | tooling | current |
| `v2/orchestrators/resources/reference/arbitrum-exchanges.mdx` | Arbitrum Exchanges | reference |  | orchestrator | tooling | review |
| `v2/orchestrators/resources/reference/arbitrum-rpc.mdx` | Arbitrum RPCs | reference |  | orchestrator | tooling | review |
| `v2/orchestrators/resources/reference/gpu-support.mdx` | GPU Support Matrix | reference |  | orchestrator | tooling | review |
| `v2/orchestrators/resources/reference/technical/cli-flags.mdx` | CLI Flags Reference | reference |  | orchestrator | tooling | review |
| `docs-guide/repo-ops/secrets/solutions-secrets.mdx` | Solutions Platform Integrations | reference |  | solutions | general |  |

## Compendium (13)

| Path | Title | pageType | pageVariant | Subgroup | Domain | Status |
|---|---|---|---|---|---|---|
| `v2/about/resources/glossary.mdx` | About Livepeer – Glossary | reference | compendium | about | general | draft |
| `v2/about/resources/livepeer-glossary.mdx` | Livepeer Glossary | glossary |  | about | general |  |
| `v2/home/resources/glossary.mdx` | Home Glossary | reference | compendium | about | general | draft |
| `v2/about/resources/faq.mdx` | FAQ | reference | compendium | community | general | current |
| `v2/community/resources/glossary.mdx` | Community Glossary | reference | compendium | community | general | draft |
| `v2/resources/glossary.mdx` | Livepeer Glossary | reference | compendium | community | general | draft |
| `v2/delegators/resources/compendium/exchanges.mdx` | Exchanges with LPT Listed | reference | compendium | delegator | protocol |  |
| `v2/delegators/resources/compendium/lpt-eth-usage.mdx` | LPT & ETH Token Functions | reference | compendium | delegator | protocol |  |
| `v2/delegators/resources/glossary.mdx` | LPT Token Glossary | reference | compendium | delegator | protocol | current |
| `v2/developers/resources/glossary.mdx` | Developer Glossary | reference | compendium | developer | general | draft |
| `v2/gateways/resources/glossary.mdx` | Gateway Glossary | reference | compendium | gateway | general | draft |
| `v2/resources/resource-hub-terms.mdx` | Resource Hub Terms | reference | compendium | general | general | draft |
| `v2/orchestrators/resources/glossary.mdx` | Orchestrator Glossary | reference | compendium | orchestrator | general | draft |

## Knowledge Hub (5)

| Path | Title | pageType | pageVariant | Subgroup | Domain | Status |
|---|---|---|---|---|---|---|
| `v2/about/guides/evaluating-livepeer.mdx` | Evaluating Livepeer: Messari Q1 2026 Report | resource | knowledge-hub | about | education | draft |
| `v2/about/resources/knowledge-hub/evaluating-livepeer.mdx` | Evaluating Livepeer | resource | knowledge-hub | about | education | draft |
| `v2/about/guides/contributor-orientation.mdx` | Contributor Orientation | resource | knowledge-hub | community | education | draft |
| `v2/about/resources/knowledge-hub/contributor-orientation.mdx` | Contributor Orientation | resource | knowledge-hub | community | education | draft |
| `v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs.mdx` | Delegator Videos and Blogs | resource | knowledge-hub | delegator | video |  |

## Reference (path) (5)

| Path | Title | pageType | pageVariant | Subgroup | Domain | Status |
|---|---|---|---|---|---|---|
| `v2/gateways/setup/configure/configuration-reference.mdx` | Configuration Reference | guide |  | gateway | general | current |
| `ai-tools/registry/workflows/openapi-reference-validation.mdx` | OpenAPI Reference Validation |  |  | general | ai | active |
| `ai-tools/registry/workflows/update-contract-addresses-shadow.mdx` | Update Contract Addresses Shadow |  |  | general | ai | active |
| `ai-tools/registry/workflows/update-contract-addresses.mdx` | Update Contract Addresses |  |  | general | ai | active |
| `v2/resources/changelog/migration-guide.mdx` | Migration Guide | guide |  | general | changelog |  |

## Compendium (path) (2)

| Path | Title | pageType | pageVariant | Subgroup | Domain | Status |
|---|---|---|---|---|---|---|
| `v2/community/resources/compendium/media-kit.mdx` | Media Kit |  |  | community | general |  |
| `v2/resources/compendium/media-kit.mdx` | Media Kit |  |  | general | general |  |

## Knowledge Hub (path) (4)

| Path | Title | pageType | pageVariant | Subgroup | Domain | Status |
|---|---|---|---|---|---|---|
| `v2/gateways/resources/knowledge-hub/guides.mdx` | Gateway guides | navigation |  | gateway | general | current |
| `v2/gateways/resources/knowledge-hub/help.mdx` | Gateway help | navigation |  | gateway | general | current |
| `v2/gateways/resources/knowledge-hub/resources.mdx` | Gateway resources | navigation |  | gateway | general | current |
| `v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx` | Gateways Vs. Orchestrators: What’s the Difference? |  |  | orchestrator | general |  |
