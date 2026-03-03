# Docs Usefulness Audit Summary

- Run date (as-of): `2026-02-23`
- Generated at: `2026-02-23T16:52:02.915Z`
- Mode: `full`
- Accuracy mode: `tiered`
- Scoring engine: `rules-only`
- Pages audited: **384**
- Avg human usefulness: **46.6**
- Avg agent usefulness: **46.8**
- Pages with provider errors: **216**

## Key Takeaways

- **15** pages are `verified_2026` (3.9%).
- **361** pages remain `provisional` (94.0%), largely due to verification coverage/rate limits.
- **7** pages are `stale_risk`; **1** page is `contradicted`.
- **8** pages are flagged `empty`; **8** pages still contain legacy `/v2/pages` links.
- Verification queue: high=8, medium=191, low=2.

## Cohorts

- `public`: 372 (96.9%)
- `internal`: 12 (3.1%)

## Accuracy Status

- `provisional`: 361
- `verified_2026`: 15
- `stale_risk`: 7
- `contradicted`: 1

## Human Bands

- `usable_needs_work`: 187
- `incomplete_risky`: 161
- `good`: 23
- `empty`: 8
- `placeholder_or_broken`: 5

## Agent Bands

- `usable_needs_work`: 181
- `incomplete_risky`: 178
- `good`: 17
- `empty`: 8

## Top Flags

- `accuracy_needs_review`: 384
- `verification_required`: 201
- `thin_content`: 176
- `missing_frontmatter`: 60
- `missing_description`: 58
- `api_reference_stub`: 54
- `missing_title`: 28
- `incomplete`: 26
- `todo_marker`: 16
- `coming_soon`: 12
- `generated_index`: 9
- `empty`: 8
- `legacy_v2_pages_link`: 8
- `manual_review_required`: 1
- `source_conflict`: 1

## Source Types Used (Pages)

- `deepwiki`: 25
- `official_docs`: 25
- `github_docs`: 12
- `openapi`: 1

## Section Breakdown

| Section | Pages | Avg Human | Avg Agent | Verified | Provisional | Stale | Contradicted | Empty | Needs Review |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `platforms` | 115 | 52.7 | 52.9 | 0 | 115 | 0 | 0 | 1 | 115 |
| `gateways` | 96 | 41.4 | 41.7 | 0 | 96 | 0 | 0 | 4 | 96 |
| `developers` | 69 | 38.1 | 38.1 | 0 | 69 | 0 | 0 | 1 | 69 |
| `about` | 33 | 62.8 | 64.0 | 15 | 11 | 6 | 1 | 0 | 33 |
| `community` | 20 | 29.8 | 32.4 | 0 | 20 | 0 | 0 | 2 | 20 |
| `lpt` | 19 | 61.5 | 56.8 | 0 | 19 | 0 | 0 | 0 | 19 |
| `home` | 18 | 42.5 | 43.9 | 0 | 18 | 0 | 0 | 0 | 18 |
| `internal` | 12 | 44.1 | 44.7 | 0 | 12 | 0 | 0 | 0 | 12 |
| `index.mdx` | 1 | 53.0 | 47.0 | 0 | 1 | 0 | 0 | 0 | 1 |
| `README.mdx` | 1 | 44.0 | 44.0 | 0 | 0 | 1 | 0 | 0 | 1 |

## Verification Queue (High Priority)

- `v2/README.mdx` (human=44, agent=44, status=stale_risk)
- `v2/about/faq-about.mdx` (human=53, agent=53, status=contradicted)
- `v2/about/livepeer-protocol/livepeer-token.mdx` (human=59, agent=60, status=stale_risk)
- `v2/about/livepeer-network/actors.mdx` (human=64, agent=63, status=stale_risk)
- `v2/about/livepeer-overview.mdx` (human=67, agent=65, status=stale_risk)
- `v2/about/livepeer-protocol/core-mechanisms.mdx` (human=70, agent=68, status=stale_risk)
- `v2/about/resources/blockchain-contracts.mdx` (human=71, agent=70, status=stale_risk)
- `v2/about/livepeer-protocol/treasury.mdx` (human=76, agent=73, status=stale_risk)

## Contradicted / Source Conflict Pages

- `v2/about/faq-about.mdx` (status=contradicted, conflicts=2)

## Stale Risk Pages

- `v2/README.mdx` (human=44, agent=44)
- `v2/about/livepeer-protocol/livepeer-token.mdx` (human=59, agent=60)
- `v2/about/livepeer-network/actors.mdx` (human=64, agent=63)
- `v2/about/livepeer-overview.mdx` (human=67, agent=65)
- `v2/about/livepeer-protocol/core-mechanisms.mdx` (human=70, agent=68)
- `v2/about/resources/blockchain-contracts.mdx` (human=71, agent=70)
- `v2/about/livepeer-protocol/treasury.mdx` (human=76, agent=73)

## Lowest Human Usefulness (Top 10)

- `0` `v2/community/resources/awesome-livepeer.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/community/resources/guides.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/developers/developer-platforms/all-ecosystem/ecosystem-products.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/platforms/ecosystem-products.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `21` `v2/home/get-started/ai-pipelines.mdx` (provisional) — accuracy_needs_review, coming_soon, thin_content, incomplete
- `21` `v2/home/get-started/build-on-livepeer.mdx` (provisional) — accuracy_needs_review, coming_soon, thin_content, incomplete

## Lowest Agent Usefulness (Top 10)

- `0` `v2/community/resources/awesome-livepeer.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/community/resources/guides.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/developers/developer-platforms/all-ecosystem/ecosystem-products.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `0` `v2/platforms/ecosystem-products.mdx` (provisional) — accuracy_needs_review, empty, missing_frontmatter
- `28` `v2/developers/ai-inference-on-livepeer/livepeer-ai/daydream-generative-ai-video-platform.mdx` (provisional) — accuracy_needs_review, missing_frontmatter, thin_content, verification_required
- `28` `v2/developers/guides-and-resources/developer-guides.mdx` (provisional) — accuracy_needs_review, missing_frontmatter, thin_content

## Highest Human Usefulness (Top 10)

- `82` `v2/about/livepeer-protocol/overview.mdx` (verified_2026) — accuracy_needs_review, legacy_v2_pages_link
- `81` `v2/about/livepeer-network/interfaces.mdx` (verified_2026) — accuracy_needs_review
- `81` `v2/about/livepeer-protocol/governance-model.mdx` (verified_2026) — accuracy_needs_review
- `79` `v2/about/livepeer-network/marketplace.mdx` (verified_2026) — accuracy_needs_review, legacy_v2_pages_link
- `79` `v2/about/livepeer-protocol/economics.mdx` (verified_2026) — accuracy_needs_review, missing_description
- `78` `v2/about/mental-model.mdx` (verified_2026) — accuracy_needs_review
- `77` `v2/about/livepeer-network/job-lifecycle.mdx` (verified_2026) — accuracy_needs_review
- `77` `v2/about/livepeer-network/technical-architecture.mdx` (verified_2026) — accuracy_needs_review, legacy_v2_pages_link
- `76` `v2/about/livepeer-protocol/treasury.mdx` (stale_risk) — accuracy_needs_review, verification_required
- `74` `v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx` (provisional) — accuracy_needs_review, verification_required

## Provider Error Breakdown (Top Patterns)

- `708` github api rate limit exceeded
- `191` verification request limit reached
- `3` gh api timeout
- `3` http fetch aborted/timeout

## Recommended Actions (Prioritized)

### P0: Fix broken/empty placeholders first (high impact, low effort)

- Empty pages: **8**. Replace with content, redirect, or remove from navigation.
- `v2/community/resources/awesome-livepeer.mdx` (human=0, agent=0)
- `v2/community/resources/guides.mdx` (human=0, agent=0)
- `v2/developers/developer-platforms/all-ecosystem/ecosystem-products.mdx` (human=0, agent=0)
- `v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx` (human=0, agent=0)
- `v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx` (human=0, agent=0)
- `v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx` (human=0, agent=0)
- `v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx` (human=0, agent=0)
- `v2/platforms/ecosystem-products.mdx` (human=0, agent=0)

- Incomplete/placeholder pages: **26**. Prioritize public "Coming Soon"/TODO pages with low scores.
- `v2/home/get-started/ai-pipelines.mdx` (human=21, status=provisional)
- `v2/home/get-started/build-on-livepeer.mdx` (human=21, status=provisional)
- `v2/home/get-started/stream-video.mdx` (human=21, status=provisional)
- `v2/home/get-started/use-livepeer.mdx` (human=21, status=provisional)
- `v2/community/faq.mdx` (human=23, status=provisional)
- `v2/developers/builder-opportunities/dev-programs.mdx` (human=25, status=provisional)
- `v2/gateways/about-gateways/gateway-architecture.mdx` (human=28, status=provisional)
- `v2/community/livepeer-community/livepeer-latest-topics.mdx` (human=29, status=provisional)
- `v2/gateways/gateway-tools/explorer.mdx` (human=29, status=provisional)
- `v2/gateways/gateway-tools/livepeer-tools.mdx` (human=30, status=provisional)

### P1: Resolve high-priority verification issues

- High-priority verification queue: **8** page(s) currently flagged.
- `v2/README.mdx` (status=stale_risk, human=44, flags=accuracy_needs_review, todo_marker, missing_frontmatter, incomplete, verification_required)
- `v2/about/faq-about.mdx` (status=contradicted, human=53, flags=source_conflict, accuracy_needs_review, coming_soon, incomplete, manual_review_required)
- `v2/about/livepeer-protocol/livepeer-token.mdx` (status=stale_risk, human=59, flags=accuracy_needs_review, todo_marker, incomplete, verification_required)
- `v2/about/livepeer-network/actors.mdx` (status=stale_risk, human=64, flags=accuracy_needs_review, legacy_v2_pages_link, verification_required)
- `v2/about/livepeer-overview.mdx` (status=stale_risk, human=67, flags=accuracy_needs_review, verification_required)
- `v2/about/livepeer-protocol/core-mechanisms.mdx` (status=stale_risk, human=70, flags=accuracy_needs_review, verification_required)
- `v2/about/resources/blockchain-contracts.mdx` (status=stale_risk, human=71, flags=accuracy_needs_review, verification_required)
- `v2/about/livepeer-protocol/treasury.mdx` (status=stale_risk, human=76, flags=accuracy_needs_review, verification_required)
- Contradicted page(s): **1**. Start with `v2/about/faq-about.mdx` and inspect `source_conflicts` in JSONL.

### P1: Remove legacy path leakage and metadata gaps

- Legacy `/v2/pages` links: **8** page(s). Replace with current `/v2/<section>/...` routes.
- `v2/about/livepeer-network/actors.mdx`
- `v2/about/livepeer-network/livepeer-actors/delegators.mdx`
- `v2/about/livepeer-network/livepeer-actors/gateways.mdx`
- `v2/about/livepeer-network/marketplace.mdx`
- `v2/about/livepeer-network/technical-architecture.mdx`
- `v2/about/livepeer-protocol/overview.mdx`
- `v2/home/get-started.mdx`
- `v2/home/primer.mdx`
- Missing frontmatter: **60** page(s). Add at minimum `title` + `description`.
- `v2/community/resources/awesome-livepeer.mdx`
- `v2/community/resources/guides.mdx`
- `v2/developers/developer-platforms/all-ecosystem/ecosystem-products.mdx`
- `v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx`
- `v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx`
- `v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx`
- `v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx`
- `v2/platforms/ecosystem-products.mdx`
- `v2/developers/guides-and-resources/developer-guides.mdx`
- `v2/developers/guides-and-resources/resources.mdx`
- Missing description: **58** page(s). Fill descriptions for SEO/AEO + machine readability.
- `v2/developers/builder-opportunities/dev-programs.mdx`
- `v2/community/livepeer-connect/forums-and-discussions.mdx`
- `v2/developers/technical-references/wiki.mdx`
- `v2/gateways/about-gateways/gateway-architecture.mdx`
- `v2/gateways/references/api-reference/AI-API/audio-to-text.mdx`
- `v2/gateways/references/api-reference/AI-API/hardware-info.mdx`
- `v2/gateways/references/api-reference/AI-API/hardware-stats.mdx`
- `v2/gateways/references/api-reference/AI-API/health.mdx`
- `v2/gateways/references/api-reference/AI-API/image-to-image.mdx`
- `v2/gateways/references/api-reference/AI-API/image-to-text.mdx`

### P2: Lift thin-content pages by section (rewrite batches)

- Thin-content pages: **176**. Batch by section to reduce context switching.
- `community`: avgHuman=29.8 across 20 page(s), empty=2, stale=0, verified=0
- `developers`: avgHuman=38.1 across 69 page(s), empty=1, stale=0, verified=0
- `gateways`: avgHuman=41.4 across 96 page(s), empty=4, stale=0, verified=0
- `home`: avgHuman=42.5 across 18 page(s), empty=0, stale=0, verified=0
- `README.mdx`: avgHuman=44.0 across 1 page(s), empty=0, stale=1, verified=0
- Suggested batch order: `home/get-started` placeholders -> `community` empties/FAQs -> `gateways` metadata cleanup -> `about` stale-risk pages.

### P2: Improve verification coverage on medium-priority pages

- Medium-priority verification queue: **191** page(s).
- `v2/developers/builder-opportunities/dev-programs.mdx` (human=25, status=provisional)
- `v2/community/livepeer-community/community-guidelines.mdx` (human=27, status=provisional)
- `v2/developers/ai-inference-on-livepeer/livepeer-ai/daydream-generative-ai-video-platform.mdx` (human=27, status=provisional)
- `v2/community/livepeer-connect/forums-and-discussions.mdx` (human=28, status=provisional)
- `v2/developers/moved-to-about-livepeer-protocol/livepeer-governance.mdx` (human=28, status=provisional)
- `v2/developers/technical-references/wiki.mdx` (human=28, status=provisional)
- `v2/gateways/about-gateways/gateway-architecture.mdx` (human=28, status=provisional)
- `v2/community/livepeer-community/livepeer-latest-topics.mdx` (human=29, status=provisional)
- `v2/developers/developer-tools/tooling-hub.mdx` (human=29, status=provisional)
- `v2/gateways/gateway-tools/explorer.mdx` (human=29, status=provisional)
- `v2/home/case-studies/landscape.mdx` (human=29, status=provisional)
- `v2/platforms/embody/overview.mdx` (human=29, status=provisional)
- `v2/gateways/gateway-tools/livepeer-tools.mdx` (human=30, status=provisional)
- `v2/platforms/livepeer-studio/livepeer-studio.mdx` (human=30, status=provisional)
- `v2/developers/technical-references/awesome-livepeer.mdx` (human=31, status=provisional)

### Operator Notes (for reruns)

- GitHub search/code was rate-limited in this run. Re-run after rate limit reset (or with higher quota) to increase `verified_2026` coverage.
- Consider increasing `--verification-max-requests` above the default if you want deeper source coverage.
- Keep `page-matrix.jsonl` open for exact `source_conflicts`, `provider_errors`, and per-claim evidence when fixing pages.

## Notes

- `accuracy_needs_review` may be high when GitHub search/code is rate-limited or the verification request budget is exhausted.
- Use `page-matrix.csv` for sorting/filtering and `page-matrix.jsonl` for full row details and evidence payloads.

