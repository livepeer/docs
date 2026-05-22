# V2 Navigation Gold Standard Audit

Generated: 2026-05-19

Scope: every unique `v2/` route declared in `docs.json`. This is a static, report-only audit; no content pages were edited.

## Executive Summary

- Pages reviewed: 576
- Gold-ready by static criteria: 27
- Needs polish: 69
- Needs rewrite: 15
- High priority: 465
- Missing routed files: 17
- Substantially empty or low-usefulness candidates: 324
- Significant duplication/consolidation pairs: 39

## Gold Standard Criteria Used

A page is treated as gold-ready only when it has canonical required frontmatter, content taxonomy, enough static prose for the declared reader job, useful section structure, Mintlify-safe MDX, no placeholder language, no banned voice terms, and useful onward routing where appropriate. This audit uses repo policy from `docs-guide/policies/governance-index.mdx`, `docs-guide/frameworks/content-writing.mdx`, `docs-guide/standards/frontmatter.mdx`, `docs-guide/standards/voice-rules.mdx`, and `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`.

## Root-Cause Remediation Plan

| Workstream | Evidence | Actionable recommendation |
|---|---|---|
| Navigation bloat and duplicate routing | 41 duplicate v2 route declarations plus 17 missing routed files. | Clean docs.json first: remove duplicate nav entries, restore or remove missing routes, then rerun route audit. |
| Thin/generated placeholder pages | 324 pages are substantially empty, component-only, or too thin to stand alone. | Purge low-value stubs or replace them with generated API/reference pages that expose static facts. |
| Taxonomy/frontmatter drift | 545 pages have taxonomy/frontmatter findings in the static audit; structure validator reports 175 blocking, 729 warnings, 226 info across 559 file(s). | Run a governed frontmatter migration by section, including status and lastVerified, then enforce in CI. |
| Copy framework debt | lint-copy complete: 275 blocking, 2581 warnings across 559 file(s). | Fix Tier 1 copy blockers before cosmetic copy work; use section queues to avoid mixing unrelated rewrites. |
| Repeated page intent | 39 high-similarity page pairs found. | Consolidate pages with the same reader job; where pages must stay separate, move repeated setup/context into one canonical explainer and link to it. |
| Internal content in live v2 navigation | 28 internal routed pages are in scope and many use non-canonical internal taxonomy. | Decide whether internal pages belong in public nav. If yes, create a canonical internal audience/status policy; if no, move them out of routed v2 nav. |

## Duplicate Navigation Declarations

| Route declared more than once | Action |
|---|---|
| v2/about/resources/glossary | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/about/resources/reference/livepeer-contract-addresses | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/ai | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/llm | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2 | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/upscale | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/health | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/orchestrators/guides/operator-considerations/requirements | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/orchestrators/resources/reference/technical/cli-flags | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/gateways/guides/monitoring-and-tooling/troubleshooting | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/developers/guides/production-hardening-checklist | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/developers/concepts/repo-map | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/developers/guides/help | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/delegators/resources/compendium/exchanges | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/delegators/resources/compendium/lpt-eth-usage | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/orchestrators/resources/knowledge-hub/community-guides | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/orchestrators/resources/knowledge-hub/community-pools | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/internal/reports/navigation-links/docs-navigation | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/internal/reports/navigation-links/v2-link-audit | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/internal/reports/quality-accessibility/v2-wcag-audit | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |
| v2/internal/reports/page-audits/domain-pages-audit | Keep one intentional nav placement or split into distinct canonical pages; duplicate route declarations should not survive cleanup. |

## Validator Evidence

Commands run with `/opt/homebrew/bin/node` because `node` was not on this non-interactive shell PATH; discovery found Node at `/opt/homebrew/bin/node` and `~/.nvm/versions/node/v22.22.1/bin/node`.

- `LINT_FILE_LIST=workspace/reports/v2-nav-gold-standard-audit/2026-05-19/existing-nav-files.txt /opt/homebrew/bin/node operations/scripts/validators/content/structure/lint-structure.js --summary`: lint-structure: 175 blocking, 729 warnings, 226 info across 559 file(s).
- `LINT_FILE_LIST=workspace/reports/v2-nav-gold-standard-audit/2026-05-19/existing-nav-files.txt /opt/homebrew/bin/node operations/scripts/validators/content/copy/lint-copy.js --summary`: lint-copy complete: 275 blocking, 2581 warnings across 559 file(s).
- `LINT_FILE_LIST=workspace/reports/v2-nav-gold-standard-audit/2026-05-19/existing-nav-files.txt /opt/homebrew/bin/node operations/scripts/validators/content/copy/lint-patterns.js --summary`: Warnings (Tier 2): 1777; top patterns are recorded in `workspace/reports/v2-nav-gold-standard-audit/2026-05-19/lint-patterns.out`.

Raw validator outputs are saved beside this report as `lint-structure.out`, `lint-copy.out`, and `lint-patterns.out`.

## Recommended Execution Order

1. Freeze new v2 nav additions until duplicate declarations and missing routes are resolved.
2. Purge or replace the empty/component-only pages listed in the purge table; do this before rewriting prose so the team does not polish pages that should not exist.
3. Decide the public-nav status of `v2/internal/**`; either remove from public routing or define a canonical internal taxonomy exception.
4. Run section-by-section frontmatter migration for required fields, taxonomy values, `status`, `lastVerified`, and `veracityStatus`.
5. Consolidate duplicate content pairs after IA decisions are locked.
6. Rewrite remaining high-priority pages against a reader job: value-first opening, static facts, useful H2 structure, links to next actions, and verified source claims.

## Purge Or Replace Candidates

| Route | File | Words | Signals | Recommendation |
|---|---|---|---|---|
| v2/home/about/ecosystem | v2/home/about/ecosystem.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/about/roadmap | v2/home/about/roadmap.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/solutions/showcase | v2/home/solutions/showcase.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/solutions/trending | v2/home/solutions/trending.mdx | 0 | under 80 words after stripping MDX/code | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/network/actors | v2/about/network/actors.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/guides/changelogs/go-livepeer | v2/about/guides/changelogs/go-livepeer.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/guides/changelogs/lips | v2/about/guides/changelogs/lips.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/knowledge-hub/livepeer-whitepaper | v2/about/resources/knowledge-hub/livepeer-whitepaper.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/knowledge-hub/gateways-vs-orchestrators | v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/daydream/changelog | v2/solutions/daydream/changelog.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/changelog | v2/solutions/livepeer-studio/changelog.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/streamplace/changelog | v2/solutions/streamplace/changelog.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/embody/changelog | v2/solutions/embody/changelog.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/frameworks/changelog | v2/solutions/frameworks/changelog.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload | v2/solutions/livepeer-studio/docs/api-reference/assets/upload.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url | v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get | v2/solutions/livepeer-studio/docs/api-reference/assets/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/update | v2/solutions/livepeer-studio/docs/api-reference/assets/update.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/delete | v2/solutions/livepeer-studio/docs/api-reference/assets/delete.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get-all | v2/solutions/livepeer-studio/docs/api-reference/assets/get-all.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create | v2/solutions/livepeer-studio/docs/api-reference/streams/create.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get | v2/solutions/livepeer-studio/docs/api-reference/streams/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-all | v2/solutions/livepeer-studio/docs/api-reference/streams/get-all.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/update | v2/solutions/livepeer-studio/docs/api-reference/streams/update.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/terminate | v2/solutions/livepeer-studio/docs/api-reference/streams/terminate.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip | v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip | v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target | v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target | v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete | v2/solutions/livepeer-studio/docs/api-reference/streams/delete.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/overview | v2/solutions/livepeer-studio/docs/api-reference/multistream/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/create | v2/solutions/livepeer-studio/docs/api-reference/multistream/create.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get | v2/solutions/livepeer-studio/docs/api-reference/multistream/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get-all | v2/solutions/livepeer-studio/docs/api-reference/multistream/get-all.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/update | v2/solutions/livepeer-studio/docs/api-reference/multistream/update.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/delete | v2/solutions/livepeer-studio/docs/api-reference/multistream/delete.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/playback/get | v2/solutions/livepeer-studio/docs/api-reference/playback/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/overview | v2/solutions/livepeer-studio/docs/api-reference/sessions/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get | v2/solutions/livepeer-studio/docs/api-reference/sessions/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-all | v2/solutions/livepeer-studio/docs/api-reference/sessions/get-all.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-clip | v2/solutions/livepeer-studio/docs/api-reference/sessions/get-clip.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/overview | v2/solutions/livepeer-studio/docs/api-reference/tasks/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get | v2/solutions/livepeer-studio/docs/api-reference/tasks/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get-all | v2/solutions/livepeer-studio/docs/api-reference/tasks/get-all.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/transcode/overview | v2/solutions/livepeer-studio/docs/api-reference/transcode/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/transcode/create | v2/solutions/livepeer-studio/docs/api-reference/transcode/create.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/create | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/create.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get-all | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get-all.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/update | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/update.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/delete | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/delete.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview | v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/create | v2/solutions/livepeer-studio/docs/api-reference/webhooks/create.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get | v2/solutions/livepeer-studio/docs/api-reference/webhooks/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get-all | v2/solutions/livepeer-studio/docs/api-reference/webhooks/get-all.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/update | v2/solutions/livepeer-studio/docs/api-reference/webhooks/update.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/delete | v2/solutions/livepeer-studio/docs/api-reference/webhooks/delete.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/overview | v2/solutions/livepeer-studio/docs/api-reference/rooms/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create | v2/solutions/livepeer-studio/docs/api-reference/rooms/create.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get | v2/solutions/livepeer-studio/docs/api-reference/rooms/get.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/delete | v2/solutions/livepeer-studio/docs/api-reference/rooms/delete.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/create-user.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/get-user.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/update-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/update-user.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/remove-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/remove-user.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/start-egress | v2/solutions/livepeer-studio/docs/api-reference/rooms/start-egress.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/stop-egress | v2/solutions/livepeer-studio/docs/api-reference/rooms/stop-egress.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/overview | v2/solutions/livepeer-studio/docs/api-reference/viewership/overview.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/apis | v2/developers/resources/reference/apis.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/sdks | v2/developers/resources/reference/sdks.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/pytrickle-reference | v2/developers/resources/reference/pytrickle-reference.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/pricing-rate-limits | v2/developers/resources/reference/pricing-rate-limits.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/technical-architecture | v2/gateways/resources/reference/technical/technical-architecture.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/contract-addresses | v2/gateways/resources/reference/technical/contract-addresses.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/cli-commands | v2/gateways/resources/reference/technical/cli-commands.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/upscale | v2/gateways/resources/reference/technical/api-reference/AI-API/upscale.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text | v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2 | v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/llm | v2/gateways/resources/reference/technical/api-reference/AI-API/llm.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video | v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/health | v2/gateways/resources/reference/technical/api-reference/AI-API/health.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info | v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats | v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/bandwidth-requirements | v2/gateways/resources/reference/go-livepeer/bandwidth-requirements.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/hardware-requirements | v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/gpu-support | v2/gateways/resources/reference/go-livepeer/gpu-support.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/cli-reference | v2/gateways/resources/reference/go-livepeer/cli-reference.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/compendium/livepeer-exchanges | v2/gateways/resources/compendium/livepeer-exchanges.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/technical/contract-addresses | v2/orchestrators/resources/reference/technical/contract-addresses.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/gpu-support | v2/orchestrators/resources/reference/gpu-support.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/arbitrum-rpc | v2/orchestrators/resources/reference/arbitrum-rpc.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/arbitrum-exchanges | v2/orchestrators/resources/reference/arbitrum-exchanges.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/organisations | v2/community/ecosystem/organisations.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/ecosystem | v2/community/ecosystem/ecosystem.mdx | 0 | under 80 words after stripping MDX/code | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/partners | v2/community/ecosystem/partners.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/spes | v2/community/ecosystem/spes.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/showcase | v2/community/ecosystem/showcase.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/roadmap | v2/community/ecosystem/roadmap.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/connect/trending-topics | v2/community/connect/trending-topics.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/resources/dashboards | v2/community/resources/dashboards.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/resources/compendium/media-kit | v2/community/resources/compendium/media-kit.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/protocol-parameters | v2/resources/references/protocol-parameters.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/cli-reference | v2/resources/references/go-livepeer/cli-reference.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/cli-commands | v2/resources/references/go-livepeer/cli-commands.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/configuration-flags | v2/resources/references/go-livepeer/configuration-flags.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/prometheus-metrics | v2/resources/references/go-livepeer/prometheus-metrics.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/hardware-requirements | v2/resources/references/go-livepeer/hardware-requirements.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/bandwidth-requirements | v2/resources/references/go-livepeer/bandwidth-requirements.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/gpu-support | v2/resources/references/go-livepeer/gpu-support.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/technical-architecture | v2/resources/references/go-livepeer/technical-architecture.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/apis | v2/resources/references/apis-sdks/apis.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/sdks | v2/resources/references/apis-sdks/sdks.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/pytrickle-reference | v2/resources/references/apis-sdks/pytrickle-reference.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/pricing-rate-limits | v2/resources/references/apis-sdks/pricing-rate-limits.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/actors | v2/resources/references/network-data/actors.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/arbitrum-rpc | v2/resources/references/network-data/arbitrum-rpc.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/arbitrum-exchanges | v2/resources/references/network-data/arbitrum-exchanges.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/livepeer-exchanges | v2/resources/references/network-data/livepeer-exchanges.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/orchestrator-offerings | v2/resources/references/network-data/orchestrator-offerings.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/model-demand-reference | v2/resources/references/network-data/model-demand-reference.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/dashboards | v2/resources/references/network-data/dashboards.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/help-center | v2/resources/help-center.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/compendium/media-kit | v2/resources/compendium/media-kit.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/knowledge-hub/livepeer-whitepaper | v2/resources/knowledge-hub/livepeer-whitepaper.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/knowledge-hub/gateways-vs-orchestrators | v2/resources/knowledge-hub/gateways-vs-orchestrators.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/changelog | v2/resources/changelog/changelog.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/migration-guide | v2/resources/changelog/migration-guide.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/go-livepeer | v2/resources/changelog/protocol/go-livepeer.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/lips | v2/resources/changelog/protocol/lips.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/naap | v2/resources/changelog/protocol/naap.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/subgraph | v2/resources/changelog/protocol/subgraph.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ai-compute/ai-runner | v2/resources/changelog/ai-compute/ai-runner.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ai-compute/comfystream | v2/resources/changelog/ai-compute/comfystream.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ai-compute/pytrickle | v2/resources/changelog/ai-compute/pytrickle.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-js | v2/resources/changelog/apis-sdks/livepeer-js.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-ai-js | v2/resources/changelog/apis-sdks/livepeer-ai-js.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-python | v2/resources/changelog/apis-sdks/livepeer-python.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-ai-python | v2/resources/changelog/apis-sdks/livepeer-ai-python.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-ai-go | v2/resources/changelog/apis-sdks/livepeer-ai-go.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/tooling/explorer | v2/resources/changelog/tooling/explorer.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/tooling/livepeer-data | v2/resources/changelog/tooling/livepeer-data.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/tooling/livepeer-python-gateway | v2/resources/changelog/tooling/livepeer-python-gateway.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ecosystem/website | v2/resources/changelog/ecosystem/website.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ecosystem/awesome-livepeer | v2/resources/changelog/ecosystem/awesome-livepeer.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/overview/docs-philosophy | v2/internal/overview/docs-philosophy.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/outcomes | v2/internal/rfp/outcomes.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/deliverables | v2/internal/rfp/deliverables.mdx | 0 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/reports/navigation-links/docs-navigation | v2/internal/reports/navigation-links/docs-navigation.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/navigation-links/v2-link-audit | v2/internal/reports/navigation-links/v2-link-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/v2-wcag-audit | v2/internal/reports/quality-accessibility/v2-wcag-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/wcag-repair-common | v2/internal/reports/quality-accessibility/wcag-repair-common.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/audit-v2-usefulness | v2/internal/reports/quality-accessibility/audit-v2-usefulness.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/test-all-pages-comprehensive | v2/internal/reports/page-audits/test-all-pages-comprehensive.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-all-pages | v2/internal/reports/page-audits/audit-all-pages.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-all-pages-simple | v2/internal/reports/page-audits/audit-all-pages-simple.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-python | v2/internal/reports/page-audits/audit-python.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/domain-pages-audit | v2/internal/reports/page-audits/domain-pages-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/audit-scripts | v2/internal/reports/repo-ops/audit-scripts.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/errors-audit | v2/internal/reports/repo-ops/errors-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-navigation-links-audit | v2/internal/reports/repo-ops/reports-navigation-links-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-page-audits-audit | v2/internal/reports/repo-ops/reports-page-audits-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-quality-accessibility-audit | v2/internal/reports/repo-ops/reports-quality-accessibility-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit | v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/scripts-audit | v2/internal/reports/repo-ops/scripts-audit.mdx | 0 | missing file; under 80 words after stripping MDX/code; body under 500 characters | Remove from docs.json or restore the missing page from the intended source. |
| v2/developers/build/video/storage-and-archival | v2/developers/build/video/storage-and-archival.mdx | 5 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/video/frameworks-network | v2/developers/build/video/frameworks-network.mdx | 5 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/alt-gateways/remote-signer-integration | v2/developers/build/alt-gateways/remote-signer-integration.mdx | 5 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/alt-gateways/livepeer-python-gateway | v2/developers/build/alt-gateways/livepeer-python-gateway.mdx | 5 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/guides/transport/trickle-protocol | v2/developers/guides/transport/trickle-protocol.mdx | 5 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/example-applications | v2/developers/resources/example-applications.mdx | 5 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/docs | v2/resources/changelog/docs.mdx | 6 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles | v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx | 19 | under 80 words after stripping MDX/code; placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/mission-control | v2/home/mission-control.mdx | 20 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/connect/events-and-streams | v2/community/connect/events-and-streams.mdx | 23 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/roadmap-and-funding/funding-and-support | v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx | 24 | under 80 words after stripping MDX/code; placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/reference/technical-roadmap | v2/about/resources/reference/technical-roadmap.mdx | 24 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/embody/community | v2/solutions/embody/community.mdx | 25 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/community | v2/solutions/livepeer-studio/community.mdx | 26 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/frameworks/community | v2/solutions/frameworks/community.mdx | 27 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/wiki | v2/developers/resources/wiki.mdx | 29 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/daydream/community | v2/solutions/daydream/community.mdx | 30 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/awesome-livepeer | v2/developers/resources/awesome-livepeer.mdx | 41 | under 80 words after stripping MDX/code; body under 500 characters | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | 54 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/streamplace/community | v2/solutions/streamplace/community.mdx | 58 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/install | v2/gateways/setup/install.mdx | 62 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/playback/overview | v2/solutions/livepeer-studio/docs/api-reference/playback/overview.mdx | 69 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/knowledge-hub/community-pools | v2/orchestrators/resources/knowledge-hub/community-pools.mdx | 70 | under 80 words after stripping MDX/code; placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/delegators/resources/compendium/exchanges | v2/delegators/resources/compendium/exchanges.mdx | 74 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset | v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx | 77 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/verify | v2/gateways/setup/verify.mdx | 77 | under 80 words after stripping MDX/code; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/concepts/livepeer-101 | v2/resources/concepts/livepeer-101.mdx | 77 | under 80 words after stripping MDX/code | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/knowledge-hub/contributor-orientation | v2/about/resources/knowledge-hub/contributor-orientation.mdx | 78 | under 80 words after stripping MDX/code | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/deepwiki | v2/developers/resources/deepwiki.mdx | 83 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/resources/knowledge-hub/evaluating-livepeer | v2/about/resources/knowledge-hub/evaluating-livepeer.mdx | 84 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/gateways/quickstart/AI-prompt | v2/gateways/quickstart/AI-prompt.mdx | 85 | placeholder language; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset | v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx | 92 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/access-control/overview | v2/solutions/livepeer-studio/docs/access-control/overview.mdx | 93 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/quickstart/tutorial | v2/orchestrators/quickstart/tutorial.mdx | 98 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/concepts/brief-history-of-video | v2/resources/concepts/brief-history-of-video.mdx | 100 | mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/get-started/studio-cli | v2/solutions/livepeer-studio/docs/get-started/studio-cli.mdx | 105 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/technical-roadmap | v2/about/guides/technical-roadmap.mdx | 106 | mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api | v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api.mdx | 106 | mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/reference/network-metrics | v2/about/resources/reference/network-metrics.mdx | 108 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/get-started/overview | v2/solutions/livepeer-studio/docs/get-started/overview.mdx | 110 | thin content | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/resources/reference/technical/cli-flags | v2/orchestrators/resources/reference/technical/cli-flags.mdx | 113 | placeholder language; mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/portal | v2/developers/portal.mdx | 118 | mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/overview/about | v2/internal/overview/about.mdx | 119 | mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/applications/frontend-core-web | v2/developers/build/applications/frontend-core-web.mdx | 121 | mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/portal | v2/about/portal.mdx | 138 | mostly imports/components, little standalone content | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/portal | v2/orchestrators/portal.mdx | 152 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/portal | v2/gateways/portal.mdx | 164 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/deployment-details/gwid-single-click-deploy | v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx | 176 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | 257 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | 302 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/portal | v2/solutions/portal.mdx | 439 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/knowledge-hub/community-guides | v2/orchestrators/resources/knowledge-hub/community-guides.mdx | 455 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/navigator | v2/community/navigator.mdx | 455 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/pricing-configuration | v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx | 567 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/overview/governance-pipeline | v2/internal/overview/governance-pipeline.mdx | 573 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/guide | v2/gateways/setup/guide.mdx | 576 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | 593 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test | v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx | 606 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | 616 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | 645 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | 668 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/health-checks | v2/gateways/guides/monitoring-and-tooling/health-checks.mdx | 703 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | 715 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/copy-style/authoring-guide | v2/resources/documentation-guide/copy-style/authoring-guide.mdx | 725 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | 748 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/ai-image-generation-app | v2/developers/build/tutorials/ai-image-generation-app.mdx | 761 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/compute/byoc/byoc-quickstart | v2/developers/build/compute/byoc/byoc-quickstart.mdx | 770 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/concepts/role | v2/orchestrators/concepts/role.mdx | 772 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | 803 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | 806 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/navigator | v2/gateways/navigator.mdx | 808 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/deployment-terms | v2/gateways/resources/deployment-terms.mdx | 813 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | 830 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx | 832 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/build-a-chatbot-with-livepeer-llm | v2/developers/build/tutorials/build-a-chatbot-with-livepeer-llm.mdx | 853 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | 876 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | 877 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | 890 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/copy-style/authoring-standard | v2/resources/documentation-guide/copy-style/authoring-standard.mdx | 897 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | 912 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | 915 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | 921 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/setup/configure | v2/orchestrators/setup/configure.mdx | 931 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/overview/governance | v2/internal/overview/governance.mdx | 934 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/gateway-discoverability | v2/gateways/guides/advanced-operations/gateway-discoverability.mdx | 941 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/knowledge-hub/resources | v2/gateways/resources/knowledge-hub/resources.mdx | 944 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | 959 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | 963 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/setup/verify | v2/orchestrators/setup/verify.mdx | 990 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup | v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx | 1005 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/setup/connect | v2/orchestrators/setup/connect.mdx | 1025 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | 1030 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/deployment-details/setup-requirements | v2/gateways/guides/deployment-details/setup-requirements.mdx | 1033 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | 1044 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | 1054 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | 1079 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | 1082 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/faq | v2/gateways/resources/reference/faq.mdx | 1096 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/operator-considerations/requirements | v2/orchestrators/guides/operator-considerations/requirements.mdx | 1108 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/concepts/architecture | v2/orchestrators/concepts/architecture.mdx | 1131 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/new-join-a-pool | v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx | 1144 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | 1210 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | 1221 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/operator-considerations/operator-impact | v2/orchestrators/guides/operator-considerations/operator-impact.mdx | 1230 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/knowledge-hub/guides | v2/gateways/resources/knowledge-hub/guides.mdx | 1232 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/video-pipelines | v2/gateways/guides/node-pipelines/video-pipelines.mdx | 1244 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/operator-considerations/production-gateways | v2/gateways/guides/operator-considerations/production-gateways.mdx | 1259 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/byoc-cpu-tutorial | v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx | 1266 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | 1308 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/operator-considerations/business-case | v2/orchestrators/guides/operator-considerations/business-case.mdx | 1326 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/knowledge-hub/help | v2/gateways/resources/knowledge-hub/help.mdx | 1350 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/eliza-livepeer-plugin | v2/developers/build/tutorials/eliza-livepeer-plugin.mdx | 1416 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | 1461 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | 1678 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/component-library/displays | v2/resources/documentation-guide/component-library/displays.mdx | 1680 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | 1755 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/operator-terms | v2/orchestrators/resources/operator-terms.mdx | 1874 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/tutorial-3-go-production | v2/gateways/guides/tutorials/tutorial-3-go-production.mdx | 1898 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/operator-considerations/business-case | v2/gateways/guides/operator-considerations/business-case.mdx | 1959 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/contributing/contribute-to-the-docs | v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx | 2037 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/guides | v2/resources/guides.mdx | 2153 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/component-library/elements | v2/resources/documentation-guide/component-library/elements.mdx | 2231 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | 2340 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/component-library/wrappers | v2/resources/documentation-guide/component-library/wrappers.mdx | 2447 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/problem-statements | v2/internal/rfp/problem-statements.mdx | 2731 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/huggingface-to-livepeer-advanced | v2/developers/build/tutorials/huggingface-to-livepeer-advanced.mdx | 3106 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/faq | v2/orchestrators/resources/reference/faq.mdx | 3420 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/ai-automations/automations-workflows | v2/resources/documentation-guide/ai-automations/automations-workflows.mdx | 3548 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/aims | v2/internal/rfp/aims.mdx | 3685 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/troubleshooting | v2/resources/troubleshooting.mdx | 3921 | placeholder language | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |

## Missing Routed Files

| Route | Expected file | Nav context | Action |
|---|---|---|---|
| v2/internal/reports/navigation-links/docs-navigation | v2/internal/reports/navigation-links/docs-navigation.mdx | Navigation & Links | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/navigation-links/v2-link-audit | v2/internal/reports/navigation-links/v2-link-audit.mdx | Navigation & Links | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/v2-wcag-audit | v2/internal/reports/quality-accessibility/v2-wcag-audit.mdx | Quality & Accessibility | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/wcag-repair-common | v2/internal/reports/quality-accessibility/wcag-repair-common.mdx | Quality & Accessibility | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/audit-v2-usefulness | v2/internal/reports/quality-accessibility/audit-v2-usefulness.mdx | Quality & Accessibility | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/test-all-pages-comprehensive | v2/internal/reports/page-audits/test-all-pages-comprehensive.mdx | Page Audits | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-all-pages | v2/internal/reports/page-audits/audit-all-pages.mdx | Page Audits | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-all-pages-simple | v2/internal/reports/page-audits/audit-all-pages-simple.mdx | Page Audits | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-python | v2/internal/reports/page-audits/audit-python.mdx | Page Audits | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/domain-pages-audit | v2/internal/reports/page-audits/domain-pages-audit.mdx | Page Audits | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/audit-scripts | v2/internal/reports/repo-ops/audit-scripts.mdx | Repo Ops | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/errors-audit | v2/internal/reports/repo-ops/errors-audit.mdx | Repo Ops | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-navigation-links-audit | v2/internal/reports/repo-ops/reports-navigation-links-audit.mdx | Repo Ops | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-page-audits-audit | v2/internal/reports/repo-ops/reports-page-audits-audit.mdx | Repo Ops | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-quality-accessibility-audit | v2/internal/reports/repo-ops/reports-quality-accessibility-audit.mdx | Repo Ops | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit | v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit.mdx | Repo Ops | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/scripts-audit | v2/internal/reports/repo-ops/scripts-audit.mdx | Repo Ops | Remove from docs.json or restore the missing page from the intended source. |

## Consolidation Candidates

Similarity is based on shared eight-word prose shingles after stripping frontmatter, code blocks, imports, and JSX tags. Treat these as triage leads, not automatic deletion approval.

| Similarity | Page A | Page B | Recommendation |
|---|---|---|---|
| 1 | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | v2/resources/troubleshooting | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 1 | v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/resources/troubleshooting | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 1 | v2/gateways/resources/knowledge-hub/guides | v2/resources/guides | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 1 | v2/orchestrators/resources/knowledge-hub/community-guides | v2/resources/guides | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 1 | v2/community/resources/guides | v2/resources/guides | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.986 | v2/community/resources/faq | v2/resources/faq | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.858 | v2/gateways/resources/reference/faq | v2/resources/faq | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.714 | v2/solutions/livepeer-studio/community | v2/solutions/embody/community | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.643 | v2/solutions/streamplace/community | v2/solutions/embody/community | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.6 | v2/solutions/livepeer-studio/community | v2/solutions/streamplace/community | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.563 | v2/resources/documentation-guide/component-library/elements | v2/resources/documentation-guide/component-library/config | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.563 | v2/resources/documentation-guide/component-library/integrators | v2/resources/documentation-guide/component-library/config | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.549 | v2/resources/documentation-guide/component-library/wrappers | v2/resources/documentation-guide/component-library/config | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.549 | v2/resources/documentation-guide/component-library/displays | v2/resources/documentation-guide/component-library/config | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.549 | v2/resources/documentation-guide/component-library/scaffolding | v2/resources/documentation-guide/component-library/config | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.546 | v2/gateways/guides/operator-considerations/production-gateways | v2/gateways/guides/roadmap-and-funding/gateway-showcase | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.543 | v2/solutions/livepeer-studio/overview | v2/solutions/livepeer-studio/docs/quickstart | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.507 | v2/home/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.506 | v2/gateways/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.504 | v2/solutions/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.489 | v2/gateways/quickstart/gateway-setup | v2/gateways/setup/install | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.463 | v2/about/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.443 | v2/orchestrators/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.418 | v2/gateways/setup/monitor | v2/gateways/guides/monitoring-and-tooling/monitoring-setup | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.417 | v2/community/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.409 | v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/component-library | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.409 | v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/elements | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.409 | v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/wrappers | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.409 | v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/displays | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.409 | v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/scaffolding | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.409 | v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/integrators | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.409 | v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/config | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.401 | v2/resources/documentation-guide/component-library/component-library | v2/resources/documentation-guide/component-library/config | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.372 | v2/developers/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.369 | v2/delegators/resources/glossary | v2/resources/glossary | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.357 | v2/resources/documentation-guide/component-library/component-library | v2/resources/documentation-guide/component-library/elements | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.357 | v2/resources/documentation-guide/component-library/component-library | v2/resources/documentation-guide/component-library/displays | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.351 | v2/resources/documentation-guide/component-library/component-library | v2/resources/documentation-guide/component-library/integrators | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |
| 0.345 | v2/resources/documentation-guide/component-library/component-library | v2/resources/documentation-guide/component-library/wrappers | Compare intent; consolidate if both pages answer the same reader job, otherwise de-duplicate repeated setup/context. |

## Highest Priority Rewrite Queue

| Route | Status | Words | Top findings | Action |
|---|---|---|---|---|
| v2/home/mission-control | High priority | 20 | non-canonical pageType: landing; non-canonical audience: everyone; non-canonical purpose: landing; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/primer | High priority | 348 | non-canonical audience: everyone; non-canonical purpose: tutorial; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/home/about/vision | High priority | 380 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/home/about/evolution | High priority | 475 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/home/about/benefits | High priority | 487 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/home/about/ecosystem | High priority | 0 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/about/roadmap | High priority | 0 | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/solutions/showcase | High priority | 0 | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/solutions/trending | High priority | 0 | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/home/solutions/verticals | High priority | 1606 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/home/solutions/applications | High priority | 151 | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/home/resources/glossary | High priority | 2281 | non-canonical audience: everyone; missing veracityStatus; banned/self-referential phrase: Understanding  | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/portal | Needs rewrite | 138 | missing veracityStatus; thin prose content (138 words); no H2-H4 section structure; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/navigator | High priority | 415 | missing veracityStatus; banned/self-referential phrase: Understanding ; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/concepts/about-livepeer | High priority | 1622 | banned voice word: various; banned/self-referential phrase: Understanding ; inline style found in MDX; shared snippet import may be relative instead of root-absolute | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/concepts/actors-and-capabilities | High priority | 2051 | missing veracityStatus; banned voice word: effectively; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/concepts/governance-and-economics | High priority | 2250 | missing veracityStatus; banned/self-referential phrase: This page explains; inline style found in MDX; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/protocol/design | High priority | 678 | non-canonical pageType: overview; non-canonical audience: general; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/protocol/mechanisms | High priority | 2144 | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus; banned/self-referential phrase: This page explains | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/protocol/livepeer-token | High priority | 1327 | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/protocol/governance-and-treasury | High priority | 1020 | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/protocol/architecture | High priority | 973 | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/protocol/blockchain-contracts | High priority | 3055 | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/network/design | High priority | 901 | inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/network/actors | High priority | 0 | non-canonical audience: general; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/network/mechanisms | High priority | 1990 | non-canonical pageVariant: explain; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/network/architecture | High priority | 1084 | inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/network/marketplace-model | High priority | 886 | non-canonical pageVariant: explain; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/network/job-pipelines | High priority | 886 | inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/network/metrics | High priority | 3339 | non-canonical pageVariant: reference; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/technical-roadmap | High priority | 106 | missing required frontmatter: sidebarTitle; non-canonical audience: general; missing veracityStatus; thin prose content (106 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/guides/protocol-design | High priority | 995 | non-canonical audience: general; missing veracityStatus; banned/self-referential phrase: Understanding ; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/livepeer-network | High priority | 693 | non-canonical audience: general; missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/livepeer-token | High priority | 847 | non-canonical audience: general; missing veracityStatus; banned/self-referential phrase: Understanding ; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/governance-and-voting | High priority | 827 | non-canonical audience: general; missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/treasury-and-proposals | High priority | 825 | non-canonical audience: general; missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/network-tools-and-metrics | High priority | 831 | non-canonical audience: general; missing veracityStatus; banned voice word: several; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/network-metrics | High priority | 3410 | non-canonical pageVariant: reference; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/builders-guide | High priority | 832 | missing veracityStatus; banned voice word: significant; banned voice word: several; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/guides/changelogs/go-livepeer | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/guides/changelogs/lips | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/glossary | High priority | 2947 | non-canonical audience: everyone; missing veracityStatus; banned voice word: meaningful; banned/self-referential phrase: Understanding  | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/resources/knowledge-hub/livepeer-whitepaper | High priority | 0 | non-canonical audience: general; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/knowledge-hub/gateways-vs-orchestrators | High priority | 0 | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/reference/livepeer-contract-addresses | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/portal | High priority | 439 | non-canonical pageType: landing; non-canonical audience: platform-builder; non-canonical purpose: landing; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/solution-providers | High priority | 386 | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/daydream/overview | High priority | 461 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/daydream/community | High priority | 30 | missing veracityStatus; very low prose content (30 words); inline style found in MDX; shared snippet import may be relative instead of root-absolute | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/daydream/changelog | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/overview | High priority | 525 | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/community | High priority | 26 | missing veracityStatus; very low prose content (26 words); inline style found in MDX; shared snippet import may be relative instead of root-absolute | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/changelog | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/streamplace/overview | High priority | 425 | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/streamplace/community | High priority | 58 | missing veracityStatus; very low prose content (58 words); inline style found in MDX; shared snippet import may be relative instead of root-absolute | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/streamplace/changelog | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/embody/overview | High priority | 391 | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/embody/community | High priority | 25 | missing veracityStatus; very low prose content (25 words); inline style found in MDX; shared snippet import may be relative instead of root-absolute | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/embody/changelog | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/frameworks/overview | High priority | 522 | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/frameworks/community | High priority | 27 | missing veracityStatus; very low prose content (27 words); inline style found in MDX; shared snippet import may be relative instead of root-absolute | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/frameworks/changelog | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/resources/glossary | High priority | 3296 | non-canonical audience: everyone; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/get-started/overview | High priority | 110 | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/quickstart | High priority | 277 | missing required frontmatter: sidebarTitle; non-canonical pageType: quickstart; non-canonical audience: platform-builder; non-canonical purpose: tutorial | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/get-started/authentication | High priority | 354 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/get-started/studio-cli | High priority | 105 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/overview | High priority | 364 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/create-livestream | High priority | 144 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/playback-livestream | High priority | 213 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/stream-via-obs | High priority | 161 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser | High priority | 180 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/multistream | High priority | 150 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/clip-livestream | High priority | 314 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/stream-health | High priority | 340 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/livestream/optimize-latency | High priority | 349 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/video-on-demand/overview | High priority | 170 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset | High priority | 92 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset | High priority | 77 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets | High priority | 124 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod | High priority | 203 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/video-on-demand/transcode-video | High priority | 223 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/access-control/overview | High priority | 93 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/access-control/webhooks | High priority | 154 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/access-control/jwt | High priority | 159 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/analytics/webhooks | High priority | 182 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/analytics/listen-to-events | High priority | 209 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/analytics/overview | High priority | 167 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/player | High priority | 193 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/reference/api | High priority | 144 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; thin prose content (144 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/reference/overview | High priority | 196 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/reference/sdks | High priority | 127 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; thin prose content (127 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/reference/managing-projects | High priority | 151 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; thin prose content (151 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/overview | High priority | 184 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/update | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/delete | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get-all | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/overview | High priority | 212 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-all | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/update | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/terminate | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/create | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get-all | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/update | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/delete | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/playback/overview | High priority | 69 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/playback/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-all | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-clip | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get-all | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/transcode/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/transcode/create | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/create | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get-all | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/update | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/delete | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/create | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get-all | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/update | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/delete | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/delete | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create-user | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get-user | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/update-user | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/remove-user | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/start-egress | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/stop-egress | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/overview | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership | High priority | 0 | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/portal | Needs rewrite | 118 | missing veracityStatus; thin prose content (118 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/ai-and-agents/realtime-ai/overview | High priority | 689 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring | High priority | 572 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc | High priority | 504 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/overview | High priority | 345 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/data-channels | Needs rewrite | 142 | missing purpose taxonomy; missing veracityStatus; thin prose content (142 words); short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/ai-stream-pack/overview | High priority | 525 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/agents/overview | High priority | 686 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/agents/storyboard | High priority | 402 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/ecosystem-mcp/overview | High priority | 415 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/ai-and-agents/ecosystem-mcp/docs-mcp | High priority | 352 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/video/overview | High priority | 443 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/video/ingest-and-playback | High priority | 321 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/video/live-events | High priority | 273 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/video/vod-and-recording | High priority | 212 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/video/storage-and-archival | High priority | 5 | very low prose content (5 words); no onward links detected | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/video/frameworks-network | High priority | 5 | very low prose content (5 words); no onward links detected | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/compute/byoc/overview | High priority | 497 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/compute/byoc/byoc-quickstart | High priority | 770 | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/plugins-and-extensions/overview | High priority | 196 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/plugins-and-extensions/building-a-plugin | High priority | 230 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/alt-gateways/overview | High priority | 517 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/alt-gateways/remote-signer-integration | High priority | 5 | very low prose content (5 words); no onward links detected | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/alt-gateways/livepeer-python-gateway | High priority | 5 | very low prose content (5 words); no onward links detected | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/applications/overview | High priority | 147 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; thin prose content (147 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/applications/frontend-react-broadcast | Needs rewrite | 150 | missing purpose taxonomy; missing veracityStatus; thin prose content (150 words); short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/build/applications/frontend-core-web | Needs rewrite | 121 | missing purpose taxonomy; missing veracityStatus; thin prose content (121 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/ai-image-generation-app | High priority | 761 | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/build-a-chatbot-with-livepeer-llm | High priority | 853 | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/eliza-livepeer-plugin | High priority | 1416 | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/build/tutorials/huggingface-to-livepeer-advanced | High priority | 3106 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/guides/payments/overview | High priority | 527 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/payments/eth-escrow-and-deposits | High priority | 316 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/payments/clearinghouse-pattern | High priority | 730 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/transport/overview | High priority | 514 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/transport/trickle-protocol | High priority | 5 | very low prose content (5 words); no onward links detected | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/guides/auth-and-security/access-control | High priority | 275 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/observability-and-debugging/tooling-and-metrics | High priority | 333 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/observability-and-debugging/orchestrator-monitoring | High priority | 477 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/observability-and-debugging/job-debugging | High priority | 572 | non-canonical pageVariant: troubleshooting; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/local-development/overview | High priority | 290 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/local-development/local-gateway | High priority | 318 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/guides/local-development/local-orchestrator | High priority | 334 | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/resources/example-applications | High priority | 5 | very low prose content (5 words); no onward links detected | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/awesome-livepeer | High priority | 41 | missing veracityStatus; very low prose content (41 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/deepwiki | Needs rewrite | 83 | missing veracityStatus; thin prose content (83 words); no H2-H4 section structure; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/developers/resources/wiki | High priority | 29 | missing veracityStatus; very low prose content (29 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/apis | High priority | 0 | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/sdks | High priority | 0 | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/pytrickle-reference | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/developers/resources/reference/pricing-rate-limits | High priority | 0 | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/portal | High priority | 164 | missing veracityStatus; thin prose content (164 words); no H2-H4 section structure; placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/navigator | High priority | 808 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/quickstart/gateway-setup | High priority | 302 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; shared snippet import may be relative instead of root-absolute | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/byoc-cpu-tutorial | High priority | 1266 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/quickstart/AI-prompt | High priority | 85 | missing veracityStatus; thin prose content (85 words); placeholder/TODO/coming-soon language present; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/guide | High priority | 576 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/prepare | High priority | 679 | missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/gateways/setup/install | High priority | 62 | missing veracityStatus; very low prose content (62 words); inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/configure | High priority | 54 | missing veracityStatus; very low prose content (54 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/verify | High priority | 77 | missing veracityStatus; very low prose content (77 words); inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/setup/connect | High priority | 285 | missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/gateways/setup/monitor | High priority | 771 | missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/gateways/guides/operator-considerations/business-case | High priority | 1959 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/operator-considerations/production-gateways | High priority | 1259 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/deployment-details/setup-options | High priority | 748 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/deployment-details/setup-requirements | High priority | 1033 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/deployment-details/gwid-single-click-deploy | High priority | 176 | missing veracityStatus; thin prose content (176 words); placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/guide | High priority | 1054 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/video-pipelines | High priority | 1244 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/ai-pipelines | High priority | 1461 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/byoc-pipelines | High priority | 912 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/node-pipelines/pipeline-configuration | High priority | 877 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/payment-guide | High priority | 616 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/funding-guide | High priority | 890 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/fund-gateway | High priority | 876 | missing veracityStatus; no H2-H4 section structure; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/pricing-strategy | High priority | 1082 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/pricing-configuration | High priority | 567 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/remote-signers | High priority | 1044 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/payments-and-pricing/clearinghouse-guide | High priority | 915 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/health-checks | High priority | 703 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | High priority | 715 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/monitoring-setup | High priority | 645 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | High priority | 830 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/monitoring-and-tooling/troubleshooting | High priority | 1678 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/orchestrator-selection | High priority | 921 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/scaling | High priority | 1030 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/gateway-middleware | High priority | 668 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/advanced-operations/gateway-discoverability | High priority | 941 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/operator-support | High priority | 593 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/spe-grant-model | High priority | 963 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | High priority | 959 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/roadmap-and-funding/gateway-showcase | High priority | 1079 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | High priority | 832 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | High priority | 806 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/guides/tutorials/tutorial-3-go-production | High priority | 1898 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/faq | High priority | 1096 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/deployment-terms | High priority | 813 | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/technical-architecture | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/configuration-flags | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/contract-addresses | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/cli-commands | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/ai | Needs rewrite | 165 | missing veracityStatus; thin prose content (165 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/upscale | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2 | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/llm | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/health | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/bandwidth-requirements | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/hardware-requirements | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/gpu-support | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/cli-reference | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/go-livepeer/prometheus-metrics | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/compendium/livepeer-exchanges | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/compendium/arbitrum-exchanges | High priority | 0 | missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/compendium/arbitrum-rpc | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/knowledge-hub/guides | High priority | 1232 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/knowledge-hub/resources | High priority | 944 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/knowledge-hub/help | High priority | 1350 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/portal | High priority | 152 | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus; thin prose content (152 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/navigator | High priority | 505 | non-canonical pageType: landing; non-canonical purpose: orientation; missing veracityStatus; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/concepts/role | High priority | 772 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/concepts/capabilities | High priority | 803 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/concepts/architecture | High priority | 1131 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned voice word: several; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/concepts/incentive-model | High priority | 1210 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding ; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/quickstart/guide | High priority | 257 | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus; placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/quickstart/video-transcoding | High priority | 168 | non-canonical pageType: quickstart; missing purpose taxonomy; missing veracityStatus; thin prose content (168 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/quickstart/tutorial | Needs rewrite | 98 | missing purpose taxonomy; missing veracityStatus; thin prose content (98 words); no H2-H4 section structure | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/setup/guide | High priority | 204 | non-canonical pageType: overview; non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/setup/prepare | Needs rewrite | 144 | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus; thin prose content (144 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/setup/configure | High priority | 931 | non-canonical pageType: how_to; missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/setup/connect | High priority | 1025 | non-canonical pageType: how_to; missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/setup/verify | High priority | 990 | non-canonical pageType: how_to; non-canonical purpose: how_to; missing veracityStatus; placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/setup/monitor | Needs rewrite | 169 | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus; thin prose content (169 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/operator-considerations/operator-rationale | High priority | 1755 | non-canonical purpose: evaluation; missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/operator-considerations/business-case | High priority | 1326 | non-canonical purpose: evaluation; missing veracityStatus; placeholder/TODO/coming-soon language present; banned voice word: effectively | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/operator-considerations/operator-impact | High priority | 1230 | non-canonical purpose: evaluation; missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/operator-considerations/requirements | High priority | 1108 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/setup-options | High priority | 568 | non-canonical pageType: overview; non-canonical purpose: orientation; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/deployment-details/siphon-setup | High priority | 1308 | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/dual-mode-configuration | High priority | 1221 | non-canonical pageType: how_to; non-canonical purpose: setup; missing veracityStatus; placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup | High priority | 1005 | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/deployment-details/join-a-pool | High priority | 986 | non-canonical pageType: quickstart; non-canonical purpose: faq; missing veracityStatus; banned voice word: clearly | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/deployment-details/new-join-a-pool | High priority | 1144 | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations | High priority | 1642 | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | High priority | 2340 | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup | High priority | 649 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | High priority | 1622 | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines | High priority | 671 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/ai-and-job-workloads/model-hosting | High priority | 854 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/staking-and-rewards/reward-mechanics | High priority | 1077 | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/staking-and-rewards/delegate-operations | High priority | 1362 | non-canonical purpose: guide; missing veracityStatus; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/staking-and-rewards/network-participation | High priority | 960 | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/config-and-optimisation/pricing-strategy | High priority | 935 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/config-and-optimisation/capacity-planning | High priority | 1070 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/config-and-optimisation/ai-model-management | High priority | 926 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/config-and-optimisation/reward-call-tuning | High priority | 656 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/monitoring-and-tooling/explorer-operations | High priority | 1300 | non-canonical purpose: guide; missing veracityStatus; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | High priority | 694 | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | High priority | 2177 | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface | High priority | 776 | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/advanced-operations/pool-operators | High priority | 1401 | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/guides/roadmap-and-funding/funding-and-support | High priority | 24 | missing purpose taxonomy; missing veracityStatus; very low prose content (24 words); placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles | High priority | 19 | missing purpose taxonomy; missing veracityStatus; very low prose content (19 words); placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test | High priority | 606 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/glossary | High priority | 5162 | non-canonical audience: orchestrator-operator; missing veracityStatus; banned voice word: effectively; banned/self-referential phrase: Understanding  | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/orchestrators/resources/reference/faq | High priority | 3420 | non-canonical purpose: faq; missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/operator-terms | High priority | 1874 | missing veracityStatus; placeholder/TODO/coming-soon language present; banned voice word: effectively; banned voice word: several | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/technical/cli-flags | High priority | 113 | missing veracityStatus; thin prose content (113 words); placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/technical/contract-addresses | High priority | 0 | non-canonical audience: general; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/gpu-support | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/arbitrum-rpc | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/reference/arbitrum-exchanges | High priority | 0 | missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/knowledge-hub/community-guides | High priority | 455 | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/orchestrators/resources/knowledge-hub/community-pools | High priority | 70 | missing veracityStatus; very low prose content (70 words); placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/delegators/portal | Needs rewrite | 164 | missing veracityStatus; thin prose content (164 words); short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/delegators/resources/reference/protocol-parameters | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/delegators/resources/compendium/exchanges | High priority | 74 | non-canonical audience: delegators; missing veracityStatus; very low prose content (74 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/delegators/resources/compendium/lpt-eth-usage | Needs rewrite | 130 | missing veracityStatus; thin prose content (130 words); short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/portal | High priority | 213 | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus; no H2-H4 section structure | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/navigator | High priority | 455 | missing veracityStatus; placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/organisations | High priority | 0 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/ecosystem | High priority | 0 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/partners | High priority | 0 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/spes | High priority | 0 | missing veracityStatus; very low prose content (0 words); no onward links detected; short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/showcase | High priority | 0 | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/ecosystem/roadmap | High priority | 0 | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/connect/trending-topics | High priority | 0 | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/connect/connect-channels | High priority | 455 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/connect/events-and-streams | High priority | 23 | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus; very low prose content (23 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/contribute/opportunities | High priority | 434 | non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/contribute/contribute | High priority | 253 | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/contribute/build-livepeer | High priority | 174 | non-canonical purpose: operations; missing veracityStatus; thin prose content (174 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/guides/guidelines | High priority | 1626 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/resources/awesome-livepeer | High priority | 873 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; banned/self-referential phrase: Understanding  | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/resources/guides | High priority | 377 | missing required frontmatter: keywords; non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/resources/dashboards | High priority | 0 | non-canonical audience: everyone; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/resources/glossary | High priority | 4064 | non-canonical audience: everyone; missing veracityStatus; banned voice word: several | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/community/resources/compendium/media-kit | High priority | 0 | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/community/resources/faq | High priority | 731 | non-canonical audience: everyone; non-canonical purpose: faq; missing veracityStatus; no H2-H4 section structure | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/references/protocol-parameters | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api | High priority | 106 | missing required frontmatter: sidebarTitle; missing veracityStatus; thin prose content (106 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters | High priority | 0 | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/cli-reference | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/cli-commands | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/configuration-flags | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/prometheus-metrics | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/hardware-requirements | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/bandwidth-requirements | High priority | 0 | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/gpu-support | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/go-livepeer/technical-architecture | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/apis | High priority | 0 | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/sdks | High priority | 0 | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/pytrickle-reference | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/apis-sdks/pricing-rate-limits | High priority | 0 | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/reference/network-metrics | Needs rewrite | 108 | missing veracityStatus; thin prose content (108 words); banned/self-referential phrase: Understanding  | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/resources/reference/technical-roadmap | High priority | 24 | missing required frontmatter: sidebarTitle; non-canonical audience: general; missing veracityStatus; very low prose content (24 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/actors | High priority | 0 | non-canonical audience: general; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/arbitrum-rpc | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/arbitrum-exchanges | High priority | 0 | missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/livepeer-exchanges | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/orchestrator-offerings | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/model-demand-reference | High priority | 0 | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/references/network-data/dashboards | High priority | 0 | non-canonical audience: everyone; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/glossary | Needs rewrite | 20427 | missing veracityStatus; banned voice word: effectively; banned voice word: meaningful; banned voice word: several | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/resource-hub-terms | High priority | 4448 | non-canonical audience: everyone; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/help-center | High priority | 0 | non-canonical audience: everyone; non-canonical purpose: navigation; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/compendium/media-kit | High priority | 0 | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/faq | High priority | 1916 | non-canonical audience: everyone; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/guides | High priority | 2153 | non-canonical audience: everyone; missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/troubleshooting | High priority | 3921 | non-canonical audience: everyone; missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/knowledge-hub/livepeer-whitepaper | High priority | 0 | non-canonical audience: general; missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/concepts/livepeer-101 | High priority | 77 | missing required frontmatter: sidebarTitle; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/concepts/brief-history-of-video | High priority | 100 | missing required frontmatter: sidebarTitle; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/knowledge-hub/gateways-vs-orchestrators | High priority | 0 | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/about/resources/knowledge-hub/evaluating-livepeer | Needs rewrite | 84 | missing veracityStatus; thin prose content (84 words); short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/about/resources/knowledge-hub/contributor-orientation | High priority | 78 | missing veracityStatus; very low prose content (78 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/changelog | High priority | 0 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/docs | High priority | 6 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/migration-guide | High priority | 0 | missing required frontmatter: description; non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/go-livepeer | High priority | 0 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/lips | High priority | 0 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/naap | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/protocol/subgraph | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ai-compute/ai-runner | High priority | 0 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ai-compute/comfystream | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ai-compute/pytrickle | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-js | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-ai-js | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-python | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-ai-python | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/apis-sdks/livepeer-ai-go | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/tooling/explorer | High priority | 0 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/tooling/livepeer-data | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/tooling/livepeer-python-gateway | High priority | 0 | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ecosystem/website | High priority | 0 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/changelog/ecosystem/awesome-livepeer | High priority | 0 | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/documentation-overview | High priority | 390 | non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus; banned/self-referential phrase: Understanding  | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/documentation-guide | High priority | 748 | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/contributing/contribute-to-the-docs | High priority | 2037 | non-canonical pageType: how_to; non-canonical audience: everyone; non-canonical purpose: how_to; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/features/docs-features-and-ai-integrations | High priority | 984 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/ai-automations/ai-features | High priority | 292 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/ai-automations/automations-workflows | High priority | 3548 | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus; placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/ai-automations/research-and-fact-checking | High priority | 438 | non-canonical pageType: how_to; non-canonical purpose: how_to; missing veracityStatus; inline style found in MDX | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/copy-style/style-guide | High priority | 3720 | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus; banned voice word: meaningful | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/copy-style/authoring-guide | High priority | 725 | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/copy-style/authoring-standard | High priority | 897 | missing pageType taxonomy; missing veracityStatus; placeholder/TODO/coming-soon language present; banned voice word: clearly | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/component-library/overview | High priority | 173 | missing required frontmatter: keywords; non-canonical pageType: overview; missing veracityStatus; thin prose content (173 words) | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/component-library/component-library | High priority | 208 | missing required frontmatter: keywords; non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/component-library/elements | High priority | 2231 | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present; possible US spelling: color | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/component-library/wrappers | High priority | 2447 | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present; possible US spelling: color | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/component-library/displays | High priority | 1680 | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present; possible US spelling: color | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/resources/documentation-guide/component-library/scaffolding | High priority | 2013 | missing required frontmatter: keywords; missing veracityStatus; possible US spelling: color | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/component-library/integrators | High priority | 1523 | missing required frontmatter: keywords; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/component-library/config | High priority | 183 | missing required frontmatter: keywords; missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/resources/documentation-guide/tooling/snippets-inventory | High priority | 407 | non-canonical audience: everyone; missing veracityStatus; banned voice word: clearly; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/internal/overview/about | High priority | 119 | non-canonical pageType: landing; non-canonical audience: internal; non-canonical purpose: landing; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/overview/strategic-alignment | High priority | 183 | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus; banned/self-referential phrase: Understanding  | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/internal/overview/docs-philosophy | High priority | 0 | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/overview/personas | High priority | 189 | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus; short description, likely weak search/reader promise | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/internal/overview/governance | High priority | 934 | non-canonical pageType: how_to; non-canonical audience: internal; non-canonical purpose: how_to; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/overview/governance-pipeline | High priority | 573 | missing required frontmatter: sidebarTitle; non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/aims | High priority | 3685 | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus; no H2-H4 section structure | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/problem-statements | High priority | 2731 | non-canonical audience: internal; non-canonical purpose: faq; missing pageType taxonomy; missing veracityStatus | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/outcomes | High priority | 0 | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/deliverables | High priority | 0 | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus; very low prose content (0 words) | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. |
| v2/internal/rfp/report | High priority | 882 | non-canonical audience: internal; non-canonical purpose: concept; missing veracityStatus; possible US spelling: catalog | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. |
| v2/internal/reports/navigation-links/docs-navigation | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/navigation-links/v2-link-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/v2-wcag-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/wcag-repair-common | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/quality-accessibility/audit-v2-usefulness | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/test-all-pages-comprehensive | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-all-pages | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-all-pages-simple | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/audit-python | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/page-audits/domain-pages-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/audit-scripts | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/errors-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-navigation-links-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-page-audits-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-quality-accessibility-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |
| v2/internal/reports/repo-ops/scripts-audit | High priority | 0 | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords | Remove from docs.json or restore the missing page from the intended source. |

## Taxonomy And Frontmatter Gaps

| Route | File | Findings |
|---|---|---|
| v2/home/mission-control | v2/home/mission-control.mdx | non-canonical pageType: landing; non-canonical audience: everyone; non-canonical purpose: landing; missing veracityStatus |
| v2/home/primer | v2/home/primer.mdx | non-canonical audience: everyone; non-canonical purpose: tutorial; missing veracityStatus |
| v2/home/about/vision | v2/home/about/vision.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/evolution | v2/home/about/evolution.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/benefits | v2/home/about/benefits.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/ecosystem | v2/home/about/ecosystem.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/roadmap | v2/home/about/roadmap.mdx | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/home/solutions/showcase | v2/home/solutions/showcase.mdx | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/home/solutions/trending | v2/home/solutions/trending.mdx | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/home/solutions/verticals | v2/home/solutions/verticals.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/home/solutions/applications | v2/home/solutions/applications.mdx | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/home/resources/glossary | v2/home/resources/glossary.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/about/portal | v2/about/portal.mdx | missing veracityStatus |
| v2/about/navigator | v2/about/navigator.mdx | missing veracityStatus |
| v2/about/concepts/actors-and-capabilities | v2/about/concepts/actors-and-capabilities.mdx | missing veracityStatus |
| v2/about/concepts/governance-and-economics | v2/about/concepts/governance-and-economics.mdx | missing veracityStatus |
| v2/about/protocol/design | v2/about/protocol/design.mdx | non-canonical pageType: overview; non-canonical audience: general; non-canonical purpose: overview; missing veracityStatus |
| v2/about/protocol/mechanisms | v2/about/protocol/mechanisms.mdx | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/livepeer-token | v2/about/protocol/livepeer-token.mdx | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/governance-and-treasury | v2/about/protocol/governance-and-treasury.mdx | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/architecture | v2/about/protocol/architecture.mdx | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/network/actors | v2/about/network/actors.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/network/mechanisms | v2/about/network/mechanisms.mdx | non-canonical pageVariant: explain |
| v2/about/network/marketplace-model | v2/about/network/marketplace-model.mdx | non-canonical pageVariant: explain |
| v2/about/network/metrics | v2/about/network/metrics.mdx | non-canonical pageVariant: reference |
| v2/about/guides/technical-roadmap | v2/about/guides/technical-roadmap.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: general; missing veracityStatus |
| v2/about/guides/evaluating-livepeer | v2/about/guides/evaluating-livepeer.mdx | missing veracityStatus |
| v2/about/guides/protocol-design | v2/about/guides/protocol-design.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/guides/livepeer-network | v2/about/guides/livepeer-network.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/guides/livepeer-token | v2/about/guides/livepeer-token.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/guides/governance-and-voting | v2/about/guides/governance-and-voting.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/guides/treasury-and-proposals | v2/about/guides/treasury-and-proposals.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/guides/network-tools-and-metrics | v2/about/guides/network-tools-and-metrics.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/guides/network-metrics | v2/about/guides/network-metrics.mdx | non-canonical pageVariant: reference |
| v2/about/guides/builders-guide | v2/about/guides/builders-guide.mdx | missing veracityStatus |
| v2/about/guides/changelogs/go-livepeer | v2/about/guides/changelogs/go-livepeer.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/about/guides/changelogs/lips | v2/about/guides/changelogs/lips.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/about/resources/faq | v2/about/resources/faq.mdx | missing veracityStatus |
| v2/about/resources/glossary | v2/about/resources/glossary.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/about/resources/knowledge-hub/livepeer-whitepaper | v2/about/resources/knowledge-hub/livepeer-whitepaper.mdx | non-canonical audience: general; missing veracityStatus |
| v2/about/resources/knowledge-hub/gateways-vs-orchestrators | v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | missing veracityStatus |
| v2/solutions/portal | v2/solutions/portal.mdx | non-canonical pageType: landing; non-canonical audience: platform-builder; non-canonical purpose: landing; missing veracityStatus |
| v2/solutions/solution-providers | v2/solutions/solution-providers.mdx | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/daydream/overview | v2/solutions/daydream/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/daydream/community | v2/solutions/daydream/community.mdx | missing veracityStatus |
| v2/solutions/daydream/changelog | v2/solutions/daydream/changelog.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/solutions/livepeer-studio/overview | v2/solutions/livepeer-studio/overview.mdx | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/community | v2/solutions/livepeer-studio/community.mdx | missing veracityStatus |
| v2/solutions/livepeer-studio/changelog | v2/solutions/livepeer-studio/changelog.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/streamplace/community | v2/solutions/streamplace/community.mdx | missing veracityStatus |
| v2/solutions/streamplace/changelog | v2/solutions/streamplace/changelog.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/solutions/embody/overview | v2/solutions/embody/overview.mdx | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/embody/community | v2/solutions/embody/community.mdx | missing veracityStatus |
| v2/solutions/embody/changelog | v2/solutions/embody/changelog.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/solutions/frameworks/overview | v2/solutions/frameworks/overview.mdx | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/frameworks/community | v2/solutions/frameworks/community.mdx | missing veracityStatus |
| v2/solutions/frameworks/changelog | v2/solutions/frameworks/changelog.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/solutions/resources/glossary | v2/solutions/resources/glossary.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/get-started/overview | v2/solutions/livepeer-studio/docs/get-started/overview.mdx | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/quickstart | v2/solutions/livepeer-studio/docs/quickstart.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: quickstart; non-canonical audience: platform-builder; non-canonical purpose: tutorial; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/get-started/authentication | v2/solutions/livepeer-studio/docs/get-started/authentication.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/get-started/studio-cli | v2/solutions/livepeer-studio/docs/get-started/studio-cli.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/overview | v2/solutions/livepeer-studio/docs/livestream/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/create-livestream | v2/solutions/livepeer-studio/docs/livestream/create-livestream.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/playback-livestream | v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser | v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/multistream | v2/solutions/livepeer-studio/docs/livestream/multistream.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/clip-livestream | v2/solutions/livepeer-studio/docs/livestream/clip-livestream.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/stream-health | v2/solutions/livepeer-studio/docs/livestream/stream-health.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/livestream/optimize-latency | v2/solutions/livepeer-studio/docs/livestream/optimize-latency.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/video-on-demand/overview | v2/solutions/livepeer-studio/docs/video-on-demand/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset | v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset | v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets | v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod | v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/video-on-demand/transcode-video | v2/solutions/livepeer-studio/docs/video-on-demand/transcode-video.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/access-control/overview | v2/solutions/livepeer-studio/docs/access-control/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/access-control/webhooks | v2/solutions/livepeer-studio/docs/access-control/webhooks.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/access-control/jwt | v2/solutions/livepeer-studio/docs/access-control/jwt.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/analytics/webhooks | v2/solutions/livepeer-studio/docs/analytics/webhooks.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/analytics/listen-to-events | v2/solutions/livepeer-studio/docs/analytics/listen-to-events.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/analytics/overview | v2/solutions/livepeer-studio/docs/analytics/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/player | v2/solutions/livepeer-studio/docs/player.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/reference/api | v2/solutions/livepeer-studio/docs/reference/api.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/reference/overview | v2/solutions/livepeer-studio/docs/reference/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/reference/sdks | v2/solutions/livepeer-studio/docs/reference/sdks.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/reference/managing-projects | v2/solutions/livepeer-studio/docs/reference/managing-projects.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/overview | v2/solutions/livepeer-studio/docs/api-reference/assets/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload | v2/solutions/livepeer-studio/docs/api-reference/assets/upload.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url | v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get | v2/solutions/livepeer-studio/docs/api-reference/assets/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/update | v2/solutions/livepeer-studio/docs/api-reference/assets/update.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/delete | v2/solutions/livepeer-studio/docs/api-reference/assets/delete.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get-all | v2/solutions/livepeer-studio/docs/api-reference/assets/get-all.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/overview | v2/solutions/livepeer-studio/docs/api-reference/streams/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create | v2/solutions/livepeer-studio/docs/api-reference/streams/create.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get | v2/solutions/livepeer-studio/docs/api-reference/streams/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-all | v2/solutions/livepeer-studio/docs/api-reference/streams/get-all.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/update | v2/solutions/livepeer-studio/docs/api-reference/streams/update.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/terminate | v2/solutions/livepeer-studio/docs/api-reference/streams/terminate.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip | v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip | v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target | v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target | v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete | v2/solutions/livepeer-studio/docs/api-reference/streams/delete.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/overview | v2/solutions/livepeer-studio/docs/api-reference/multistream/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/create | v2/solutions/livepeer-studio/docs/api-reference/multistream/create.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get | v2/solutions/livepeer-studio/docs/api-reference/multistream/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get-all | v2/solutions/livepeer-studio/docs/api-reference/multistream/get-all.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/update | v2/solutions/livepeer-studio/docs/api-reference/multistream/update.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/delete | v2/solutions/livepeer-studio/docs/api-reference/multistream/delete.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/playback/overview | v2/solutions/livepeer-studio/docs/api-reference/playback/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/playback/get | v2/solutions/livepeer-studio/docs/api-reference/playback/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/overview | v2/solutions/livepeer-studio/docs/api-reference/sessions/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get | v2/solutions/livepeer-studio/docs/api-reference/sessions/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-all | v2/solutions/livepeer-studio/docs/api-reference/sessions/get-all.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-clip | v2/solutions/livepeer-studio/docs/api-reference/sessions/get-clip.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/overview | v2/solutions/livepeer-studio/docs/api-reference/tasks/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get | v2/solutions/livepeer-studio/docs/api-reference/tasks/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get-all | v2/solutions/livepeer-studio/docs/api-reference/tasks/get-all.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/transcode/overview | v2/solutions/livepeer-studio/docs/api-reference/transcode/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/transcode/create | v2/solutions/livepeer-studio/docs/api-reference/transcode/create.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/create | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/create.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get-all | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get-all.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/update | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/update.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/delete | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/delete.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview | v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/create | v2/solutions/livepeer-studio/docs/api-reference/webhooks/create.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get | v2/solutions/livepeer-studio/docs/api-reference/webhooks/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get-all | v2/solutions/livepeer-studio/docs/api-reference/webhooks/get-all.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/update | v2/solutions/livepeer-studio/docs/api-reference/webhooks/update.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/delete | v2/solutions/livepeer-studio/docs/api-reference/webhooks/delete.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/overview | v2/solutions/livepeer-studio/docs/api-reference/rooms/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create | v2/solutions/livepeer-studio/docs/api-reference/rooms/create.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get | v2/solutions/livepeer-studio/docs/api-reference/rooms/get.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/delete | v2/solutions/livepeer-studio/docs/api-reference/rooms/delete.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/create-user.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/get-user.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/update-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/update-user.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/remove-user | v2/solutions/livepeer-studio/docs/api-reference/rooms/remove-user.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/start-egress | v2/solutions/livepeer-studio/docs/api-reference/rooms/start-egress.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/stop-egress | v2/solutions/livepeer-studio/docs/api-reference/rooms/stop-egress.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/overview | v2/solutions/livepeer-studio/docs/api-reference/viewership/overview.mdx | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership | v2/solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/developers/portal | v2/developers/portal.mdx | missing veracityStatus |
| v2/developers/navigator | v2/developers/navigator.mdx | missing veracityStatus |
| v2/developers/concepts/infra-stack | v2/developers/concepts/infra-stack.mdx | missing veracityStatus |
| v2/developers/learn/ai-and-agents | v2/developers/learn/ai-and-agents.mdx | missing veracityStatus |
| v2/developers/learn/video-and-livestream | v2/developers/learn/video-and-livestream.mdx | missing veracityStatus |
| v2/developers/learn/applications | v2/developers/learn/applications.mdx | missing veracityStatus |
| v2/developers/build/ai-and-agents/ai-pipelines | v2/developers/build/ai-and-agents/ai-pipelines.mdx | missing veracityStatus |
| v2/developers/build/ai-and-agents/ai-sdks-overview | v2/developers/build/ai-and-agents/ai-sdks-overview.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/overview | v2/developers/build/ai-and-agents/realtime-ai/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring | v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc | v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/overview | v2/developers/build/ai-and-agents/realtime-ai/pytrickle/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/pytrickle-quickstart | v2/developers/build/ai-and-agents/realtime-ai/pytrickle/pytrickle-quickstart.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/frame-processor | v2/developers/build/ai-and-agents/realtime-ai/pytrickle/frame-processor.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/data-channels | v2/developers/build/ai-and-agents/realtime-ai/pytrickle/data-channels.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/ai-stream-pack/overview | v2/developers/build/ai-and-agents/ai-stream-pack/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/agents/overview | v2/developers/build/ai-and-agents/agents/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/agents/storyboard | v2/developers/build/ai-and-agents/agents/storyboard.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/agents/llm-provider-routing | v2/developers/build/ai-and-agents/agents/llm-provider-routing.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/agents/eliza-integration | v2/developers/build/ai-and-agents/agents/eliza-integration.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/ecosystem-mcp/overview | v2/developers/build/ai-and-agents/ecosystem-mcp/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/ecosystem-mcp/docs-mcp | v2/developers/build/ai-and-agents/ecosystem-mcp/docs-mcp.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/overview | v2/developers/build/video/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/ingest-and-playback | v2/developers/build/video/ingest-and-playback.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/live-events | v2/developers/build/video/live-events.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/vod-and-recording | v2/developers/build/video/vod-and-recording.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/codec-support | v2/developers/build/video/codec-support.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/lpms-integration | v2/developers/build/video/lpms-integration.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/compute/byoc/overview | v2/developers/build/compute/byoc/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/compute/byoc/byoc-architecture | v2/developers/build/compute/byoc/byoc-architecture.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/compute/byoc/byoc-production | v2/developers/build/compute/byoc/byoc-production.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/compute/byoc/byoc-sdk | v2/developers/build/compute/byoc/byoc-sdk.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/compute/byoc/reference-pipelines | v2/developers/build/compute/byoc/reference-pipelines.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/plugins-and-extensions/overview | v2/developers/build/plugins-and-extensions/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/plugins-and-extensions/naap-architecture | v2/developers/build/plugins-and-extensions/naap-architecture.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/plugins-and-extensions/building-a-plugin | v2/developers/build/plugins-and-extensions/building-a-plugin.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/alt-gateways/overview | v2/developers/build/alt-gateways/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/alt-gateways/browser-and-mobile | v2/developers/build/alt-gateways/browser-and-mobile.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/applications/overview | v2/developers/build/applications/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/applications/frontend-react-player | v2/developers/build/applications/frontend-react-player.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/applications/frontend-react-broadcast | v2/developers/build/applications/frontend-react-broadcast.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/applications/frontend-core-web | v2/developers/build/applications/frontend-core-web.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/tutorials/ai-agent-on-livepeer | v2/developers/build/tutorials/ai-agent-on-livepeer.mdx | missing veracityStatus |
| v2/developers/build/tutorials/huggingface-to-livepeer | v2/developers/build/tutorials/huggingface-to-livepeer.mdx | missing veracityStatus |
| v2/developers/build/tutorials/huggingface-to-livepeer-advanced | v2/developers/build/tutorials/huggingface-to-livepeer-advanced.mdx | missing veracityStatus |
| v2/developers/guides/overview | v2/developers/guides/overview.mdx | missing veracityStatus |
| v2/developers/guides/production-hardening-checklist | v2/developers/guides/production-hardening-checklist.mdx | missing veracityStatus |
| v2/developers/guides/payments/overview | v2/developers/guides/payments/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/probabilistic-micropayments | v2/developers/guides/payments/probabilistic-micropayments.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/per-second-compute | v2/developers/guides/payments/per-second-compute.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/eth-escrow-and-deposits | v2/developers/guides/payments/eth-escrow-and-deposits.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/remote-signer | v2/developers/guides/payments/remote-signer.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/clearinghouse-pattern | v2/developers/guides/payments/clearinghouse-pattern.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/custom-auth-and-billing | v2/developers/guides/payments/custom-auth-and-billing.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/orchestrator-selection-and-pricing | v2/developers/guides/payments/orchestrator-selection-and-pricing.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/transport/overview | v2/developers/guides/transport/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/gateways-as-developer/gateway-access | v2/developers/guides/gateways-as-developer/gateway-access.mdx | missing veracityStatus |
| v2/developers/guides/auth-and-security/ai-authentication | v2/developers/guides/auth-and-security/ai-authentication.mdx | missing veracityStatus |
| v2/developers/guides/auth-and-security/access-control | v2/developers/guides/auth-and-security/access-control.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/observability-and-debugging/tooling-and-metrics | v2/developers/guides/observability-and-debugging/tooling-and-metrics.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/observability-and-debugging/orchestrator-monitoring | v2/developers/guides/observability-and-debugging/orchestrator-monitoring.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/observability-and-debugging/job-debugging | v2/developers/guides/observability-and-debugging/job-debugging.mdx | non-canonical pageVariant: troubleshooting; missing veracityStatus |
| v2/developers/guides/local-development/overview | v2/developers/guides/local-development/overview.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/local-development/local-gateway | v2/developers/guides/local-development/local-gateway.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/local-development/local-orchestrator | v2/developers/guides/local-development/local-orchestrator.mdx | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/local-development/local-testnet | v2/developers/guides/local-development/local-testnet.mdx | missing veracityStatus |
| v2/developers/guides/help | v2/developers/guides/help.mdx | missing veracityStatus |
| v2/developers/resources/glossary | v2/developers/resources/glossary.mdx | missing veracityStatus |
| v2/developers/resources/contributing | v2/developers/resources/contributing.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/resources/grants-and-programmes | v2/developers/resources/grants-and-programmes.mdx | missing veracityStatus |
| v2/developers/resources/awesome-livepeer | v2/developers/resources/awesome-livepeer.mdx | missing veracityStatus |
| v2/developers/resources/deepwiki | v2/developers/resources/deepwiki.mdx | missing veracityStatus |
| v2/developers/resources/wiki | v2/developers/resources/wiki.mdx | missing veracityStatus |
| v2/developers/resources/reference/apis | v2/developers/resources/reference/apis.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/resources/reference/sdks | v2/developers/resources/reference/sdks.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/developers/resources/reference/pytrickle-reference | v2/developers/resources/reference/pytrickle-reference.mdx | missing veracityStatus |
| v2/developers/resources/reference/pricing-rate-limits | v2/developers/resources/reference/pricing-rate-limits.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/gateways/portal | v2/gateways/portal.mdx | missing veracityStatus |
| v2/gateways/navigator | v2/gateways/navigator.mdx | missing veracityStatus |
| v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | missing veracityStatus |
| v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | missing veracityStatus |
| v2/gateways/concepts/architecture | v2/gateways/concepts/architecture.mdx | missing veracityStatus |
| v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | missing veracityStatus |
| v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | missing veracityStatus |
| v2/gateways/guides/tutorials/byoc-cpu-tutorial | v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx | missing veracityStatus |
| v2/gateways/quickstart/AI-prompt | v2/gateways/quickstart/AI-prompt.mdx | missing veracityStatus |
| v2/gateways/setup/guide | v2/gateways/setup/guide.mdx | missing veracityStatus |
| v2/gateways/setup/prepare | v2/gateways/setup/prepare.mdx | missing veracityStatus |
| v2/gateways/setup/install | v2/gateways/setup/install.mdx | missing veracityStatus |
| v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | missing veracityStatus |
| v2/gateways/setup/verify | v2/gateways/setup/verify.mdx | missing veracityStatus |
| v2/gateways/setup/connect | v2/gateways/setup/connect.mdx | missing veracityStatus |
| v2/gateways/setup/monitor | v2/gateways/setup/monitor.mdx | missing veracityStatus |
| v2/gateways/guides/operator-considerations/business-case | v2/gateways/guides/operator-considerations/business-case.mdx | missing veracityStatus |
| v2/gateways/guides/operator-considerations/production-gateways | v2/gateways/guides/operator-considerations/production-gateways.mdx | missing veracityStatus |
| v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | missing veracityStatus |
| v2/gateways/guides/deployment-details/setup-requirements | v2/gateways/guides/deployment-details/setup-requirements.mdx | missing veracityStatus |
| v2/gateways/guides/deployment-details/gwid-single-click-deploy | v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx | missing veracityStatus |
| v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | missing veracityStatus |
| v2/gateways/guides/node-pipelines/video-pipelines | v2/gateways/guides/node-pipelines/video-pipelines.mdx | missing veracityStatus |
| v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | missing veracityStatus |
| v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | missing veracityStatus |
| v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | missing veracityStatus |
| v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | missing veracityStatus |
| v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | missing veracityStatus |
| v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | missing veracityStatus |
| v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | missing veracityStatus |
| v2/gateways/guides/payments-and-pricing/pricing-configuration | v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx | missing veracityStatus |
| v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | missing veracityStatus |
| v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | missing veracityStatus |
| v2/gateways/guides/monitoring-and-tooling/health-checks | v2/gateways/guides/monitoring-and-tooling/health-checks.mdx | missing veracityStatus |
| v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | missing veracityStatus |
| v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | missing veracityStatus |
| v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | missing veracityStatus |
| v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | missing veracityStatus |
| v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | missing veracityStatus |
| v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | missing veracityStatus |
| v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | missing veracityStatus |
| v2/gateways/guides/advanced-operations/gateway-discoverability | v2/gateways/guides/advanced-operations/gateway-discoverability.mdx | missing veracityStatus |
| v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | missing veracityStatus |
| v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | missing veracityStatus |
| v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | missing veracityStatus |
| v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | missing veracityStatus |
| v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx | missing veracityStatus |
| v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | missing veracityStatus |
| v2/gateways/guides/tutorials/tutorial-3-go-production | v2/gateways/guides/tutorials/tutorial-3-go-production.mdx | missing veracityStatus |
| v2/gateways/resources/glossary | v2/gateways/resources/glossary.mdx | missing veracityStatus |
| v2/gateways/resources/reference/faq | v2/gateways/resources/reference/faq.mdx | missing veracityStatus |
| v2/gateways/resources/deployment-terms | v2/gateways/resources/deployment-terms.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/technical-architecture | v2/gateways/resources/reference/technical/technical-architecture.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/contract-addresses | v2/gateways/resources/reference/technical/contract-addresses.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/cli-commands | v2/gateways/resources/reference/technical/cli-commands.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/ai | v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/upscale | v2/gateways/resources/reference/technical/api-reference/AI-API/upscale.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text | v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2 | v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/llm | v2/gateways/resources/reference/technical/api-reference/AI-API/llm.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video | v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/health | v2/gateways/resources/reference/technical/api-reference/AI-API/health.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info | v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats | v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/bandwidth-requirements | v2/gateways/resources/reference/go-livepeer/bandwidth-requirements.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/hardware-requirements | v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/gpu-support | v2/gateways/resources/reference/go-livepeer/gpu-support.mdx | missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/cli-reference | v2/gateways/resources/reference/go-livepeer/cli-reference.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/gateways/resources/compendium/livepeer-exchanges | v2/gateways/resources/compendium/livepeer-exchanges.mdx | missing veracityStatus |
| v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | missing veracityStatus |
| v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | missing veracityStatus |
| v2/gateways/resources/knowledge-hub/guides | v2/gateways/resources/knowledge-hub/guides.mdx | missing veracityStatus |
| v2/gateways/resources/knowledge-hub/resources | v2/gateways/resources/knowledge-hub/resources.mdx | missing veracityStatus |
| v2/gateways/resources/knowledge-hub/help | v2/gateways/resources/knowledge-hub/help.mdx | missing veracityStatus |
| v2/orchestrators/portal | v2/orchestrators/portal.mdx | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/orchestrators/navigator | v2/orchestrators/navigator.mdx | non-canonical pageType: landing; non-canonical purpose: orientation; missing veracityStatus |
| v2/orchestrators/concepts/role | v2/orchestrators/concepts/role.mdx | missing veracityStatus |
| v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | missing veracityStatus |
| v2/orchestrators/concepts/architecture | v2/orchestrators/concepts/architecture.mdx | missing veracityStatus |
| v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | missing veracityStatus |
| v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/quickstart/video-transcoding | v2/orchestrators/quickstart/video-transcoding.mdx | non-canonical pageType: quickstart; missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/quickstart/tutorial | v2/orchestrators/quickstart/tutorial.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/quickstart/AI-prompt-start | v2/orchestrators/quickstart/AI-prompt-start.mdx | missing veracityStatus |
| v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | non-canonical pageType: overview; non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/setup/prepare | v2/orchestrators/setup/prepare.mdx | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/setup/install | v2/orchestrators/setup/install.mdx | missing veracityStatus |
| v2/orchestrators/setup/configure | v2/orchestrators/setup/configure.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/setup/connect | v2/orchestrators/setup/connect.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/setup/verify | v2/orchestrators/setup/verify.mdx | non-canonical pageType: how_to; non-canonical purpose: how_to; missing veracityStatus |
| v2/orchestrators/setup/monitor | v2/orchestrators/setup/monitor.mdx | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | non-canonical purpose: evaluation; missing veracityStatus |
| v2/orchestrators/guides/operator-considerations/business-case | v2/orchestrators/guides/operator-considerations/business-case.mdx | non-canonical purpose: evaluation; missing veracityStatus |
| v2/orchestrators/guides/operator-considerations/operator-impact | v2/orchestrators/guides/operator-considerations/operator-impact.mdx | non-canonical purpose: evaluation; missing veracityStatus |
| v2/orchestrators/guides/operator-considerations/requirements | v2/orchestrators/guides/operator-considerations/requirements.mdx | missing veracityStatus |
| v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | non-canonical pageType: overview; non-canonical purpose: orientation; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | non-canonical pageType: how_to; non-canonical purpose: setup; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup | v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | non-canonical pageType: quickstart; non-canonical purpose: faq; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/new-join-a-pool | v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/workload-options | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations | v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines | v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | missing veracityStatus |
| v2/orchestrators/guides/ai-and-job-workloads/model-hosting | v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | missing veracityStatus |
| v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | missing veracityStatus |
| v2/orchestrators/guides/payments-and-pricing/payments | v2/orchestrators/guides/payments-and-pricing/payments.mdx | missing veracityStatus |
| v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/staking-and-rewards/network-participation | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/config-and-optimisation/reward-call-tuning | v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | missing veracityStatus |
| v2/orchestrators/guides/monitoring-and-tooling/explorer-operations | v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/advanced-operations/gateway-relationships | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | missing veracityStatus |
| v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface | v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx | non-canonical pageType: how_to; missing veracityStatus |
| v2/orchestrators/guides/advanced-operations/pool-operators | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | missing veracityStatus |
| v2/orchestrators/guides/roadmap-and-funding/funding-and-support | v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles | v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test | v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx | missing veracityStatus |
| v2/orchestrators/guides/tutorials/zero-to-first-reward | v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx | missing veracityStatus |
| v2/orchestrators/guides/tutorials/ai-earning-quickstart | v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx | missing veracityStatus |
| v2/orchestrators/guides/tutorials/add-ai-to-video-node | v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx | missing veracityStatus |
| v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial | v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx | missing veracityStatus |
| v2/orchestrators/guides/tutorials/realtime-ai-tutorial | v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx | missing veracityStatus |
| v2/orchestrators/resources/glossary | v2/orchestrators/resources/glossary.mdx | non-canonical audience: orchestrator-operator; missing veracityStatus |
| v2/orchestrators/resources/reference/faq | v2/orchestrators/resources/reference/faq.mdx | non-canonical purpose: faq; missing veracityStatus |
| v2/orchestrators/resources/operator-terms | v2/orchestrators/resources/operator-terms.mdx | missing veracityStatus |
| v2/orchestrators/resources/reference/technical/cli-flags | v2/orchestrators/resources/reference/technical/cli-flags.mdx | missing veracityStatus |
| v2/orchestrators/resources/reference/technical/contract-addresses | v2/orchestrators/resources/reference/technical/contract-addresses.mdx | non-canonical audience: general; missing veracityStatus |
| v2/orchestrators/resources/reference/gpu-support | v2/orchestrators/resources/reference/gpu-support.mdx | missing veracityStatus |
| v2/orchestrators/resources/reference/arbitrum-rpc | v2/orchestrators/resources/reference/arbitrum-rpc.mdx | missing veracityStatus |
| v2/orchestrators/resources/reference/arbitrum-exchanges | v2/orchestrators/resources/reference/arbitrum-exchanges.mdx | missing veracityStatus |
| v2/orchestrators/resources/knowledge-hub/community-guides | v2/orchestrators/resources/knowledge-hub/community-guides.mdx | missing veracityStatus |
| v2/orchestrators/resources/knowledge-hub/community-pools | v2/orchestrators/resources/knowledge-hub/community-pools.mdx | missing veracityStatus |
| v2/delegators/portal | v2/delegators/portal.mdx | missing veracityStatus |
| v2/delegators/concepts/overview | v2/delegators/concepts/overview.mdx | missing veracityStatus |
| v2/delegators/concepts/purpose | v2/delegators/concepts/purpose.mdx | missing veracityStatus |
| v2/delegators/concepts/tokenomics | v2/delegators/concepts/tokenomics.mdx | missing veracityStatus |
| v2/delegators/concepts/mechanics | v2/delegators/concepts/mechanics.mdx | missing veracityStatus |
| v2/delegators/delegation/overview | v2/delegators/delegation/overview.mdx | missing veracityStatus |
| v2/delegators/delegation/about-delegation | v2/delegators/delegation/about-delegation.mdx | missing veracityStatus |
| v2/delegators/delegation/bridge-lpt-to-arbitrum | v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx | missing veracityStatus |
| v2/delegators/delegation/delegation-economics | v2/delegators/delegation/delegation-economics.mdx | missing veracityStatus |
| v2/delegators/delegation/choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | missing veracityStatus |
| v2/delegators/delegation/delegate-your-lpt | v2/delegators/delegation/delegate-your-lpt.mdx | missing veracityStatus |
| v2/delegators/delegation/manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | missing veracityStatus |
| v2/delegators/guides/governance/overview | v2/delegators/guides/governance/overview.mdx | missing veracityStatus |
| v2/delegators/guides/governance/model | v2/delegators/guides/governance/model.mdx | missing veracityStatus |
| v2/delegators/guides/governance/processes | v2/delegators/guides/governance/processes.mdx | missing veracityStatus |
| v2/delegators/guides/treasury/overview | v2/delegators/guides/treasury/overview.mdx | missing veracityStatus |
| v2/delegators/guides/treasury/proposals | v2/delegators/guides/treasury/proposals.mdx | missing veracityStatus |
| v2/delegators/guides/treasury/allocations | v2/delegators/guides/treasury/allocations.mdx | missing veracityStatus |
| v2/delegators/resources/glossary | v2/delegators/resources/glossary.mdx | missing veracityStatus |
| v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | missing veracityStatus |
| v2/delegators/resources/reference/contracts | v2/delegators/resources/reference/contracts.mdx | missing veracityStatus |
| v2/delegators/resources/compendium/exchanges | v2/delegators/resources/compendium/exchanges.mdx | non-canonical audience: delegators; missing veracityStatus |
| v2/delegators/resources/compendium/lpt-eth-usage | v2/delegators/resources/compendium/lpt-eth-usage.mdx | missing veracityStatus |
| v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs | v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs.mdx | missing veracityStatus |
| v2/community/portal | v2/community/portal.mdx | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/community/navigator | v2/community/navigator.mdx | missing veracityStatus |
| v2/community/ecosystem/organisations | v2/community/ecosystem/organisations.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/ecosystem/ecosystem | v2/community/ecosystem/ecosystem.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/ecosystem/partners | v2/community/ecosystem/partners.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/ecosystem/spes | v2/community/ecosystem/spes.mdx | missing veracityStatus |
| v2/community/ecosystem/showcase | v2/community/ecosystem/showcase.mdx | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/community/ecosystem/roadmap | v2/community/ecosystem/roadmap.mdx | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/community/connect/trending-topics | v2/community/connect/trending-topics.mdx | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/community/connect/connect-channels | v2/community/connect/connect-channels.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/connect/events-and-streams | v2/community/connect/events-and-streams.mdx | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus |
| v2/community/contribute/opportunities | v2/community/contribute/opportunities.mdx | non-canonical purpose: operations; missing veracityStatus |
| v2/community/contribute/contribute | v2/community/contribute/contribute.mdx | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/community/contribute/build-livepeer | v2/community/contribute/build-livepeer.mdx | non-canonical purpose: operations; missing veracityStatus |
| v2/community/guides/guidelines | v2/community/guides/guidelines.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/resources/awesome-livepeer | v2/community/resources/awesome-livepeer.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/resources/guides | v2/community/resources/guides.mdx | missing required frontmatter: keywords; non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/resources/dashboards | v2/community/resources/dashboards.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/community/resources/glossary | v2/community/resources/glossary.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/community/resources/compendium/media-kit | v2/community/resources/compendium/media-kit.mdx | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/community/resources/faq | v2/community/resources/faq.mdx | non-canonical audience: everyone; non-canonical purpose: faq; missing veracityStatus |
| v2/resources/references/protocol-parameters | v2/resources/references/protocol-parameters.mdx | missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api | v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters.mdx | missing required frontmatter: sidebarTitle; missing veracityStatus |
| v2/resources/references/go-livepeer/cli-reference | v2/resources/references/go-livepeer/cli-reference.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/cli-commands | v2/resources/references/go-livepeer/cli-commands.mdx | missing veracityStatus |
| v2/resources/references/go-livepeer/configuration-flags | v2/resources/references/go-livepeer/configuration-flags.mdx | missing veracityStatus |
| v2/resources/references/go-livepeer/prometheus-metrics | v2/resources/references/go-livepeer/prometheus-metrics.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/hardware-requirements | v2/resources/references/go-livepeer/hardware-requirements.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/bandwidth-requirements | v2/resources/references/go-livepeer/bandwidth-requirements.mdx | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/gpu-support | v2/resources/references/go-livepeer/gpu-support.mdx | missing veracityStatus |
| v2/resources/references/go-livepeer/technical-architecture | v2/resources/references/go-livepeer/technical-architecture.mdx | missing veracityStatus |
| v2/resources/references/apis-sdks/apis | v2/resources/references/apis-sdks/apis.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/resources/references/apis-sdks/sdks | v2/resources/references/apis-sdks/sdks.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/resources/references/apis-sdks/pytrickle-reference | v2/resources/references/apis-sdks/pytrickle-reference.mdx | missing veracityStatus |
| v2/resources/references/apis-sdks/pricing-rate-limits | v2/resources/references/apis-sdks/pricing-rate-limits.mdx | missing purpose taxonomy; missing veracityStatus |
| v2/about/resources/reference/network-metrics | v2/about/resources/reference/network-metrics.mdx | missing veracityStatus |
| v2/about/resources/reference/technical-roadmap | v2/about/resources/reference/technical-roadmap.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: general; missing veracityStatus |
| v2/resources/references/network-data/actors | v2/resources/references/network-data/actors.mdx | non-canonical audience: general; missing veracityStatus |
| v2/resources/references/network-data/arbitrum-rpc | v2/resources/references/network-data/arbitrum-rpc.mdx | missing veracityStatus |
| v2/resources/references/network-data/arbitrum-exchanges | v2/resources/references/network-data/arbitrum-exchanges.mdx | missing veracityStatus |
| v2/resources/references/network-data/livepeer-exchanges | v2/resources/references/network-data/livepeer-exchanges.mdx | missing veracityStatus |
| v2/resources/references/network-data/orchestrator-offerings | v2/resources/references/network-data/orchestrator-offerings.mdx | missing veracityStatus |
| v2/resources/references/network-data/model-demand-reference | v2/resources/references/network-data/model-demand-reference.mdx | missing veracityStatus |
| v2/resources/references/network-data/dashboards | v2/resources/references/network-data/dashboards.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/resources/glossary | v2/resources/glossary.mdx | missing veracityStatus |
| v2/resources/resource-hub-terms | v2/resources/resource-hub-terms.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/resources/help-center | v2/resources/help-center.mdx | non-canonical audience: everyone; non-canonical purpose: navigation; missing veracityStatus |
| v2/resources/compendium/media-kit | v2/resources/compendium/media-kit.mdx | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/resources/faq | v2/resources/faq.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/resources/guides | v2/resources/guides.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/resources/troubleshooting | v2/resources/troubleshooting.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/resources/knowledge-hub/livepeer-whitepaper | v2/resources/knowledge-hub/livepeer-whitepaper.mdx | non-canonical audience: general; missing veracityStatus |
| v2/resources/concepts/livepeer-101 | v2/resources/concepts/livepeer-101.mdx | missing required frontmatter: sidebarTitle; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/resources/concepts/brief-history-of-video | v2/resources/concepts/brief-history-of-video.mdx | missing required frontmatter: sidebarTitle; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/resources/knowledge-hub/gateways-vs-orchestrators | v2/resources/knowledge-hub/gateways-vs-orchestrators.mdx | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/about/resources/knowledge-hub/evaluating-livepeer | v2/about/resources/knowledge-hub/evaluating-livepeer.mdx | missing veracityStatus |
| v2/about/resources/knowledge-hub/contributor-orientation | v2/about/resources/knowledge-hub/contributor-orientation.mdx | missing veracityStatus |
| v2/resources/changelog/changelog | v2/resources/changelog/changelog.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/docs | v2/resources/changelog/docs.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/migration-guide | v2/resources/changelog/migration-guide.mdx | missing required frontmatter: description; non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus |
| v2/resources/changelog/protocol/go-livepeer | v2/resources/changelog/protocol/go-livepeer.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/protocol/lips | v2/resources/changelog/protocol/lips.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/protocol/naap | v2/resources/changelog/protocol/naap.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/protocol/subgraph | v2/resources/changelog/protocol/subgraph.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/ai-compute/ai-runner | v2/resources/changelog/ai-compute/ai-runner.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/ai-compute/comfystream | v2/resources/changelog/ai-compute/comfystream.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/ai-compute/pytrickle | v2/resources/changelog/ai-compute/pytrickle.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-js | v2/resources/changelog/apis-sdks/livepeer-js.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-ai-js | v2/resources/changelog/apis-sdks/livepeer-ai-js.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-python | v2/resources/changelog/apis-sdks/livepeer-python.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-ai-python | v2/resources/changelog/apis-sdks/livepeer-ai-python.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-ai-go | v2/resources/changelog/apis-sdks/livepeer-ai-go.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/tooling/explorer | v2/resources/changelog/tooling/explorer.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/tooling/livepeer-data | v2/resources/changelog/tooling/livepeer-data.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/tooling/livepeer-python-gateway | v2/resources/changelog/tooling/livepeer-python-gateway.mdx | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/ecosystem/website | v2/resources/changelog/ecosystem/website.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/ecosystem/awesome-livepeer | v2/resources/changelog/ecosystem/awesome-livepeer.mdx | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/documentation-guide/documentation-overview | v2/resources/documentation-guide/documentation-overview.mdx | non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/resources/documentation-guide/documentation-guide | v2/resources/documentation-guide/documentation-guide.mdx | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus |
| v2/resources/documentation-guide/contributing/contribute-to-the-docs | v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx | non-canonical pageType: how_to; non-canonical audience: everyone; non-canonical purpose: how_to; missing veracityStatus |
| v2/resources/documentation-guide/features/docs-features-and-ai-integrations | v2/resources/documentation-guide/features/docs-features-and-ai-integrations.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/resources/documentation-guide/ai-automations/ai-features | v2/resources/documentation-guide/ai-automations/ai-features.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/resources/documentation-guide/ai-automations/automations-workflows | v2/resources/documentation-guide/ai-automations/automations-workflows.mdx | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/resources/documentation-guide/ai-automations/research-and-fact-checking | v2/resources/documentation-guide/ai-automations/research-and-fact-checking.mdx | non-canonical pageType: how_to; non-canonical purpose: how_to; missing veracityStatus |
| v2/resources/documentation-guide/copy-style/style-guide | v2/resources/documentation-guide/copy-style/style-guide.mdx | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus |
| v2/resources/documentation-guide/copy-style/authoring-guide | v2/resources/documentation-guide/copy-style/authoring-guide.mdx | missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/documentation-guide/copy-style/authoring-standard | v2/resources/documentation-guide/copy-style/authoring-standard.mdx | missing pageType taxonomy; missing veracityStatus |
| v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/overview.mdx | missing required frontmatter: keywords; non-canonical pageType: overview; missing veracityStatus |
| v2/resources/documentation-guide/component-library/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | missing required frontmatter: keywords; non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/resources/documentation-guide/component-library/elements | v2/resources/documentation-guide/component-library/elements.mdx | missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/documentation-guide/component-library/wrappers | v2/resources/documentation-guide/component-library/wrappers.mdx | missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/documentation-guide/component-library/displays | v2/resources/documentation-guide/component-library/displays.mdx | missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/documentation-guide/component-library/scaffolding | v2/resources/documentation-guide/component-library/scaffolding.mdx | missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/documentation-guide/component-library/integrators | v2/resources/documentation-guide/component-library/integrators.mdx | missing required frontmatter: keywords; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/resources/documentation-guide/component-library/config | v2/resources/documentation-guide/component-library/config.mdx | missing required frontmatter: keywords; missing purpose taxonomy; missing veracityStatus |
| v2/resources/documentation-guide/tooling/snippets-inventory | v2/resources/documentation-guide/tooling/snippets-inventory.mdx | non-canonical audience: everyone; missing veracityStatus |
| v2/internal/overview/about | v2/internal/overview/about.mdx | non-canonical pageType: landing; non-canonical audience: internal; non-canonical purpose: landing; missing veracityStatus |
| v2/internal/overview/strategic-alignment | v2/internal/overview/strategic-alignment.mdx | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/overview/docs-philosophy | v2/internal/overview/docs-philosophy.mdx | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/overview/personas | v2/internal/overview/personas.mdx | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/overview/governance | v2/internal/overview/governance.mdx | non-canonical pageType: how_to; non-canonical audience: internal; non-canonical purpose: how_to; missing veracityStatus |
| v2/internal/overview/governance-pipeline | v2/internal/overview/governance-pipeline.mdx | missing required frontmatter: sidebarTitle; non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/rfp/aims | v2/internal/rfp/aims.mdx | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/rfp/problem-statements | v2/internal/rfp/problem-statements.mdx | non-canonical audience: internal; non-canonical purpose: faq; missing pageType taxonomy; missing veracityStatus |
| v2/internal/rfp/outcomes | v2/internal/rfp/outcomes.mdx | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/rfp/deliverables | v2/internal/rfp/deliverables.mdx | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/rfp/report | v2/internal/rfp/report.mdx | non-canonical audience: internal; non-canonical purpose: concept; missing veracityStatus |
| v2/internal/reports/navigation-links/docs-navigation | v2/internal/reports/navigation-links/docs-navigation.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/navigation-links/v2-link-audit | v2/internal/reports/navigation-links/v2-link-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/quality-accessibility/v2-wcag-audit | v2/internal/reports/quality-accessibility/v2-wcag-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/quality-accessibility/wcag-repair-common | v2/internal/reports/quality-accessibility/wcag-repair-common.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/quality-accessibility/audit-v2-usefulness | v2/internal/reports/quality-accessibility/audit-v2-usefulness.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/page-audits/test-all-pages-comprehensive | v2/internal/reports/page-audits/test-all-pages-comprehensive.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/page-audits/audit-all-pages | v2/internal/reports/page-audits/audit-all-pages.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/page-audits/audit-all-pages-simple | v2/internal/reports/page-audits/audit-all-pages-simple.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/page-audits/audit-python | v2/internal/reports/page-audits/audit-python.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/page-audits/domain-pages-audit | v2/internal/reports/page-audits/domain-pages-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/repo-ops/audit-scripts | v2/internal/reports/repo-ops/audit-scripts.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/repo-ops/errors-audit | v2/internal/reports/repo-ops/errors-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/repo-ops/reports-navigation-links-audit | v2/internal/reports/repo-ops/reports-navigation-links-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/repo-ops/reports-page-audits-audit | v2/internal/reports/repo-ops/reports-page-audits-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/repo-ops/reports-quality-accessibility-audit | v2/internal/reports/repo-ops/reports-quality-accessibility-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit | v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/internal/reports/repo-ops/scripts-audit | v2/internal/reports/repo-ops/scripts-audit.mdx | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description; missing required frontmatter: keywords; missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy; missing veracityStatus |

## Section-Level Queue

### Home

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/home/mission-control | High priority | 20 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: landing; non-canonical audience: everyone; non-canonical purpose: landing |
| v2/home/primer | High priority | 348 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: tutorial; missing veracityStatus |

### Livepeer

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/home/about/vision | High priority | 380 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/evolution | High priority | 475 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/benefits | High priority | 487 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/ecosystem | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/home/about/roadmap | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview |

### Showcase

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/home/solutions/showcase | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview |
| v2/home/solutions/trending | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy |
| v2/home/solutions/verticals | High priority | 1606 | 0 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: everyone |
| v2/home/solutions/applications | High priority | 151 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview |

### Resources

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/home/resources/glossary | High priority | 2281 | 7 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; missing veracityStatus; banned/self-referential phrase: Understanding  |
| v2/about/resources/faq | Needs polish | 571 | 5 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned voice word: effectively |
| v2/about/resources/glossary | High priority | 2947 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; missing veracityStatus; banned voice word: meaningful |
| v2/developers/guides/help | Needs polish | 460 | 5 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise |
| v2/developers/resources/glossary | Needs polish | 2968 | 6 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned/self-referential phrase: Understanding  |
| v2/developers/resources/example-applications | High priority | 5 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | very low prose content (5 words); no onward links detected |
| v2/developers/resources/contributing | Needs polish | 376 | 4 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/resources/grants-and-programmes | Needs polish | 1158 | 9 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/resources/awesome-livepeer | High priority | 41 | 1 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (41 words) |
| v2/developers/resources/deepwiki | Needs rewrite | 83 | 0 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; thin prose content (83 words); no H2-H4 section structure |
| v2/developers/resources/wiki | High priority | 29 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (29 words) |
| v2/gateways/resources/glossary | Needs polish | 3461 | 8 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned voice word: meaningful; banned/self-referential phrase: Understanding  |
| v2/gateways/resources/reference/faq | High priority | 1096 | 22 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/gateways/resources/deployment-terms | High priority | 813 | 7 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/orchestrators/resources/glossary | High priority | 5162 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: orchestrator-operator; missing veracityStatus; banned voice word: effectively |
| v2/delegators/resources/glossary | Gold-ready | 4825 | 9 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/community/resources/glossary | High priority | 4064 | 12 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; missing veracityStatus; banned voice word: several |
| v2/community/resources/compendium/media-kit | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy |

### About Livepeer

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/portal | Needs rewrite | 138 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; thin prose content (138 words); no H2-H4 section structure |
| v2/about/navigator | High priority | 415 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; banned/self-referential phrase: Understanding ; inline style found in MDX |

### Concepts

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/concepts/about-livepeer | High priority | 1622 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | banned voice word: various; banned/self-referential phrase: Understanding ; inline style found in MDX |
| v2/about/concepts/livepeer-stack | Gold-ready | 943 | 9 | Keep; review only for factual freshness during source-verification pass. | shared snippet import may be relative instead of root-absolute |
| v2/about/concepts/actors-and-capabilities | High priority | 2051 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; banned voice word: effectively; inline style found in MDX |
| v2/about/concepts/governance-and-economics | High priority | 2250 | 9 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; banned/self-referential phrase: This page explains; inline style found in MDX |
| v2/developers/concepts/landscape | Gold-ready | 931 | 10 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/concepts/infra-stack | Needs polish | 639 | 7 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; no onward links detected |
| v2/developers/concepts/repo-map | Gold-ready | 1033 | 12 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/gateways/concepts/role | Needs polish | 780 | 5 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/gateways/concepts/capabilities | Needs polish | 831 | 8 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/gateways/concepts/architecture | Needs polish | 901 | 16 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/gateways/concepts/business-model | Needs polish | 722 | 11 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/concepts/role | High priority | 772 | 5 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/orchestrators/concepts/capabilities | High priority | 803 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/orchestrators/concepts/architecture | High priority | 1131 | 16 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned voice word: several |
| v2/orchestrators/concepts/incentive-model | High priority | 1210 | 17 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/delegators/concepts/overview | Gold-ready | 411 | 14 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/delegators/concepts/purpose | Needs polish | 1197 | 4 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; no onward links detected |
| v2/delegators/concepts/tokenomics | Gold-ready | 336 | 11 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/delegators/concepts/mechanics | Needs polish | 545 | 10 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise |

### Livepeer Protocol

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/protocol/design | High priority | 678 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: general; non-canonical purpose: overview |
| v2/about/protocol/mechanisms | High priority | 2144 | 11 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/livepeer-token | High priority | 1327 | 7 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/governance-and-treasury | High priority | 1020 | 9 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/architecture | High priority | 973 | 7 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |
| v2/about/protocol/blockchain-contracts | High priority | 3055 | 24 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; non-canonical purpose: concept; missing veracityStatus |

### Livepeer Network

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/network/design | High priority | 901 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | inline style found in MDX |
| v2/about/network/actors | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: general; missing veracityStatus; very low prose content (0 words) |
| v2/about/network/mechanisms | High priority | 1990 | 10 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageVariant: explain; inline style found in MDX |
| v2/about/network/architecture | High priority | 1084 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | inline style found in MDX |
| v2/about/network/marketplace-model | High priority | 886 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageVariant: explain; inline style found in MDX |
| v2/about/network/job-pipelines | High priority | 886 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | inline style found in MDX |
| v2/about/network/metrics | High priority | 3339 | 12 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageVariant: reference; inline style found in MDX |

### Guides

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/guides/technical-roadmap | High priority | 106 | 2 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: general; missing veracityStatus |
| v2/about/guides/evaluating-livepeer | Needs polish | 244 | 4 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/guides/overview | Needs polish | 455 | 5 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/guides/production-hardening-checklist | Needs polish | 554 | 9 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Protocol

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/guides/protocol-design | High priority | 995 | 10 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; missing veracityStatus; banned/self-referential phrase: Understanding  |
| v2/about/guides/livepeer-network | High priority | 693 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; missing veracityStatus; inline style found in MDX |
| v2/about/guides/livepeer-token | High priority | 847 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; missing veracityStatus; banned/self-referential phrase: Understanding  |

### Governance

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/guides/governance-and-voting | High priority | 827 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; missing veracityStatus; inline style found in MDX |
| v2/about/guides/treasury-and-proposals | High priority | 825 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; missing veracityStatus; inline style found in MDX |

### Tools and Metrics

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/guides/network-tools-and-metrics | High priority | 831 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: general; missing veracityStatus; banned voice word: several |
| v2/about/guides/network-metrics | High priority | 3410 | 20 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageVariant: reference; inline style found in MDX |

### Development

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/guides/builders-guide | High priority | 832 | 10 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; banned voice word: significant; banned voice word: several |

### Changelogs

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/guides/changelogs/go-livepeer | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing pageType taxonomy |
| v2/about/guides/changelogs/lips | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing pageType taxonomy |

### Knowledge Hub

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/resources/knowledge-hub/livepeer-whitepaper | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: general; missing veracityStatus; very low prose content (0 words) |
| v2/about/resources/knowledge-hub/gateways-vs-orchestrators | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/gateways/resources/knowledge-hub/guides | High priority | 1232 | 12 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/gateways/resources/knowledge-hub/resources | High priority | 944 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/gateways/resources/knowledge-hub/help | High priority | 1350 | 9 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/orchestrators/resources/knowledge-hub/community-guides | High priority | 455 | 9 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/orchestrators/resources/knowledge-hub/community-pools | High priority | 70 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (70 words); placeholder/TODO/coming-soon language present |
| v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs | Gold-ready | 287 | 3 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |

### Reference

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/resources/reference/livepeer-contract-addresses | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/developers/resources/reference/apis | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) |
| v2/developers/resources/reference/sdks | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) |
| v2/developers/resources/reference/pytrickle-reference | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/developers/resources/reference/pricing-rate-limits | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) |
| v2/orchestrators/resources/reference/faq | High priority | 3420 | 7 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: faq; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/resources/operator-terms | High priority | 1874 | 9 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned voice word: effectively |
| v2/delegators/resources/reference/protocol-parameters | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/delegators/resources/reference/contracts | Needs polish | 199 | 2 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Solutions / Use Livepeer

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/portal | High priority | 439 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: landing; non-canonical audience: platform-builder; non-canonical purpose: landing |
| v2/solutions/solution-providers | High priority | 386 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview |

### Solutions / Daydream

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/daydream/overview | High priority | 461 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/daydream/community | High priority | 30 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (30 words); inline style found in MDX |
| v2/solutions/daydream/changelog | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Solutions / Livepeer Studio

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/overview | High priority | 525 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview |
| v2/solutions/livepeer-studio/community | High priority | 26 | 5 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (26 words); inline style found in MDX |
| v2/solutions/livepeer-studio/changelog | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Solutions / Stream.place

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/streamplace/overview | High priority | 425 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview |
| v2/solutions/streamplace/community | High priority | 58 | 5 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (58 words); inline style found in MDX |
| v2/solutions/streamplace/changelog | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Solutions / Embody Avatars

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/embody/overview | High priority | 391 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview |
| v2/solutions/embody/community | High priority | 25 | 5 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (25 words); inline style found in MDX |
| v2/solutions/embody/changelog | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Solutions / Frameworks

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/frameworks/overview | High priority | 522 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview |
| v2/solutions/frameworks/community | High priority | 27 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (27 words); inline style found in MDX |
| v2/solutions/frameworks/changelog | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Solutions / Resources

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/resources/glossary | High priority | 3296 | 9 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; missing veracityStatus; short description, likely weak search/reader promise |

### Livepeer Studio Docs / Get started

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/get-started/overview | High priority | 110 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical audience: platform-builder; non-canonical purpose: overview |
| v2/solutions/livepeer-studio/docs/quickstart | High priority | 277 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: quickstart; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/get-started/authentication | High priority | 354 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept |
| v2/solutions/livepeer-studio/docs/get-started/studio-cli | High priority | 105 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |

### Livepeer Studio Docs / Livestream

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/livestream/overview | High priority | 364 | 7 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/livestream/create-livestream | High priority | 144 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/livestream/playback-livestream | High priority | 213 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/livestream/stream-via-obs | High priority | 161 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser | High priority | 180 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/livestream/multistream | High priority | 150 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/livestream/clip-livestream | High priority | 314 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept |
| v2/solutions/livepeer-studio/docs/livestream/stream-health | High priority | 340 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept |
| v2/solutions/livepeer-studio/docs/livestream/optimize-latency | High priority | 349 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: concept |

### Livepeer Studio Docs / Video on demand

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/video-on-demand/overview | High priority | 170 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset | High priority | 92 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset | High priority | 77 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets | High priority | 124 | 1 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod | High priority | 203 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/video-on-demand/transcode-video | High priority | 223 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |

### Livepeer Studio Docs / Access control & security

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/access-control/overview | High priority | 93 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/access-control/webhooks | High priority | 154 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/access-control/jwt | High priority | 159 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |

### Livepeer Studio Docs / Events & analytics

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/analytics/webhooks | High priority | 182 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/analytics/listen-to-events | High priority | 209 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |
| v2/solutions/livepeer-studio/docs/analytics/overview | High priority | 167 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |

### Livepeer Studio Docs / Player & embed

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/player | High priority | 193 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; non-canonical purpose: operations |

### Livepeer Studio Docs / Reference

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/reference/api | High priority | 144 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/reference/overview | High priority | 196 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/reference/sdks | High priority | 127 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/reference/managing-projects | High priority | 151 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Assets

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/assets/overview | High priority | 184 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/update | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/delete | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/assets/get-all | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Streams

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/streams/overview | High priority | 212 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-all | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/update | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/terminate | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/streams/delete | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Multistream

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/multistream/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/create | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/get-all | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/update | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/multistream/delete | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Playback

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/playback/overview | High priority | 69 | 2 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/playback/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Sessions

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/sessions/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-all | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/sessions/get-clip | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Tasks

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/tasks/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/tasks/get-all | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Transcode

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/transcode/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/transcode/create | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Signing Keys

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/create | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get-all | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/update | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/signing-keys/delete | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Webhooks

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/create | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/get-all | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/update | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/webhooks/delete | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Rooms

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/rooms/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/delete | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/create-user | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/get-user | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/update-user | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/remove-user | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/start-egress | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/rooms/stop-egress | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Livepeer Studio Docs / Viewership

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/solutions/livepeer-studio/docs/api-reference/viewership/overview | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical pageType: overview; non-canonical audience: platform-builder |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |
| v2/solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: platform-builder; missing veracityStatus |

### Start here

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/portal | Needs rewrite | 118 | 1 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; thin prose content (118 words); short description, likely weak search/reader promise |
| v2/developers/navigator | Needs polish | 561 | 3 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Learn

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/learn/ai-and-agents | Needs polish | 965 | 7 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise |
| v2/developers/learn/video-and-livestream | Needs polish | 634 | 6 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/learn/applications | Needs polish | 546 | 4 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### AI and agents

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/ai-and-agents/overview | Gold-ready | 873 | 10 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart | Gold-ready | 542 | 6 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/ai-pipelines | Needs polish | 912 | 3 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/model-support | Gold-ready | 958 | 7 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/ai-sdks-overview | Needs polish | 307 | 5 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |

### Real-time AI

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/ai-and-agents/realtime-ai/overview | High priority | 689 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |

### ComfyStream

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/overview | Gold-ready | 1006 | 12 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart | Gold-ready | 911 | 10 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring | High priority | 572 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc | High priority | 504 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |

### PyTrickle

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/overview | High priority | 345 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/pytrickle-quickstart | Needs polish | 289 | 1 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/frame-processor | Needs polish | 491 | 11 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/realtime-ai/pytrickle/data-channels | Needs rewrite | 142 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing purpose taxonomy; missing veracityStatus; thin prose content (142 words) |

### AI Stream Pack

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/ai-and-agents/ai-stream-pack/overview | High priority | 525 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |

### Agents

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/ai-and-agents/agents/overview | High priority | 686 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/agents/storyboard | High priority | 402 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/agents/llm-provider-routing | Needs polish | 194 | 3 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/ai-and-agents/agents/eliza-integration | Needs polish | 321 | 4 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |

### Ecosystem MCP

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/ai-and-agents/ecosystem-mcp/overview | High priority | 415 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/ai-and-agents/ecosystem-mcp/docs-mcp | High priority | 352 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |

### Video

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/video/overview | High priority | 443 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/transcoding-direct-quickstart | Gold-ready | 746 | 8 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/video/ingest-and-playback | High priority | 321 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/live-events | High priority | 273 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/vod-and-recording | High priority | 212 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/video/codec-support | Needs polish | 198 | 3 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/video/storage-and-archival | High priority | 5 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | very low prose content (5 words); no onward links detected |
| v2/developers/build/video/lpms-integration | Needs polish | 287 | 5 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/video/frameworks-network | High priority | 5 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | very low prose content (5 words); no onward links detected |

### BYOC

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/compute/byoc/overview | High priority | 497 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/compute/byoc/byoc-quickstart | High priority | 770 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/developers/build/compute/byoc/byoc-architecture | Needs polish | 250 | 3 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/compute/byoc/byoc-production | Needs polish | 244 | 4 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/compute/byoc/byoc-sdk | Needs polish | 186 | 2 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/compute/byoc/reference-pipelines | Needs polish | 250 | 2 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; banned/self-referential phrase: Understanding  |

### Plugins and extensions

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/plugins-and-extensions/overview | High priority | 196 | 1 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/plugins-and-extensions/naap-architecture | Needs polish | 311 | 2 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/plugins-and-extensions/building-a-plugin | High priority | 230 | 1 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |

### Alt gateways

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/alt-gateways/overview | High priority | 517 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/alt-gateways/remote-signer-integration | High priority | 5 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | very low prose content (5 words); no onward links detected |
| v2/developers/build/alt-gateways/livepeer-python-gateway | High priority | 5 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | very low prose content (5 words); no onward links detected |
| v2/developers/build/alt-gateways/browser-and-mobile | Needs polish | 228 | 3 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |

### Applications

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/applications/overview | High priority | 147 | 1 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/build/applications/frontend-react-player | Needs polish | 242 | 3 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/applications/frontend-react-broadcast | Needs rewrite | 150 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing purpose taxonomy; missing veracityStatus; thin prose content (150 words) |
| v2/developers/build/applications/frontend-core-web | Needs rewrite | 121 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; thin prose content (121 words) |

### Tutorials

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/build/tutorials/ai-agent-on-livepeer | Needs polish | 470 | 5 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/tutorials/ai-image-generation-app | High priority | 761 | 10 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/developers/build/tutorials/build-a-chatbot-with-livepeer-llm | High priority | 853 | 11 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/developers/build/tutorials/build-a-naap-plugin | Gold-ready | 1178 | 13 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/tutorials/build-a-vtuber-avatar-pipeline | Gold-ready | 1303 | 10 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/tutorials/eliza-livepeer-plugin | High priority | 1416 | 10 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/developers/build/tutorials/huggingface-to-livepeer | Needs polish | 1997 | 18 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/build/tutorials/huggingface-to-livepeer-advanced | High priority | 3106 | 46 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/developers/build/tutorials/ipfs-video-integration | Gold-ready | 285 | 5 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/tutorials/low-latency-live-streaming-app | Gold-ready | 914 | 11 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/tutorials/multi-tenant-billing-with-pymthouse | Gold-ready | 1057 | 11 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/tutorials/streamplace-byoc-integration | Gold-ready | 529 | 6 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/tutorials/token-gated-video | Gold-ready | 357 | 6 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/developers/build/tutorials/vod-upload-and-playback | Gold-ready | 1026 | 12 | Keep; review only for factual freshness during source-verification pass. | short description, likely weak search/reader promise |
| v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test | High priority | 606 | 7 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/orchestrators/guides/tutorials/zero-to-first-reward | Needs polish | 1085 | 9 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/tutorials/ai-earning-quickstart | Gold-ready | 957 | 9 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/orchestrators/guides/tutorials/add-ai-to-video-node | Needs polish | 768 | 8 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial | Needs polish | 763 | 10 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/tutorials/realtime-ai-tutorial | Needs polish | 1096 | 13 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Payments

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/guides/payments/overview | High priority | 527 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/probabilistic-micropayments | Needs polish | 512 | 6 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/guides/payments/per-second-compute | Needs polish | 524 | 5 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/guides/payments/eth-escrow-and-deposits | High priority | 316 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/remote-signer | Needs polish | 756 | 6 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/guides/payments/clearinghouse-pattern | High priority | 730 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/payments/custom-auth-and-billing | Needs polish | 610 | 5 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/guides/payments/orchestrator-selection-and-pricing | Needs polish | 557 | 8 | Polish taxonomy, voice, links, and section structure. | missing purpose taxonomy; missing veracityStatus; short description, likely weak search/reader promise |

### Transport

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/guides/transport/overview | High priority | 514 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/transport/trickle-protocol | High priority | 5 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | very low prose content (5 words); no onward links detected |

### Gateways as developer

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/guides/gateways-as-developer/gateway-access | Needs polish | 652 | 6 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Auth and security

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/guides/auth-and-security/ai-authentication | Needs polish | 431 | 6 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/developers/guides/auth-and-security/access-control | High priority | 275 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |

### Observability and debugging

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/guides/observability-and-debugging/tooling-and-metrics | High priority | 333 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/observability-and-debugging/orchestrator-monitoring | High priority | 477 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/observability-and-debugging/job-debugging | High priority | 572 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageVariant: troubleshooting; missing veracityStatus; short description, likely weak search/reader promise |

### Local development

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/developers/guides/local-development/overview | High priority | 290 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/local-development/local-gateway | High priority | 318 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/local-development/local-orchestrator | High priority | 334 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing purpose taxonomy; missing veracityStatus |
| v2/developers/guides/local-development/local-testnet | Needs polish | 773 | 6 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### About Gateways

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/portal | High priority | 164 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; thin prose content (164 words); no H2-H4 section structure |
| v2/gateways/navigator | High priority | 808 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |

### Quickstart ⚡

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/quickstart/gateway-setup | High priority | 302 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/tutorials/byoc-cpu-tutorial | High priority | 1266 | 9 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/quickstart/AI-prompt | High priority | 85 | 13 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; thin prose content (85 words); placeholder/TODO/coming-soon language present |

### Gateway Setup

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/setup/guide | High priority | 576 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/setup/prepare | High priority | 679 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise |
| v2/gateways/setup/install | High priority | 62 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (62 words); inline style found in MDX |
| v2/gateways/setup/configure | High priority | 54 | 1 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (54 words) |
| v2/gateways/setup/verify | High priority | 77 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (77 words); inline style found in MDX |
| v2/gateways/setup/connect | High priority | 285 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise |
| v2/gateways/setup/monitor | High priority | 771 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; inline style found in MDX; short description, likely weak search/reader promise |

### Operator Considerations

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/operator-considerations/business-case | High priority | 1959 | 13 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/gateways/guides/operator-considerations/production-gateways | High priority | 1259 | 17 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/orchestrators/guides/operator-considerations/operator-rationale | High priority | 1755 | 10 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: evaluation; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/guides/operator-considerations/business-case | High priority | 1326 | 13 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: evaluation; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/guides/operator-considerations/operator-impact | High priority | 1230 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: evaluation; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/guides/operator-considerations/requirements | High priority | 1108 | 11 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |

### Deployment Options

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/deployment-details/setup-options | High priority | 748 | 2 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/deployment-details/setup-requirements | High priority | 1033 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/gateways/guides/deployment-details/gwid-single-click-deploy | High priority | 176 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; thin prose content (176 words); placeholder/TODO/coming-soon language present |

### AI and Job Pipelines

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/node-pipelines/guide | High priority | 1054 | 15 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/node-pipelines/video-pipelines | High priority | 1244 | 20 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/node-pipelines/ai-pipelines | High priority | 1461 | 24 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/node-pipelines/byoc-pipelines | High priority | 912 | 17 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/gateways/guides/node-pipelines/pipeline-configuration | High priority | 877 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |

### Payments and Pricing

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/payments-and-pricing/payment-guide | High priority | 616 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/payments-and-pricing/funding-guide | High priority | 890 | 7 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/payments-and-pricing/fund-gateway | High priority | 876 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; no H2-H4 section structure; placeholder/TODO/coming-soon language present |
| v2/gateways/guides/payments-and-pricing/pricing-strategy | High priority | 1082 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/payments-and-pricing/pricing-configuration | High priority | 567 | 20 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; short description, likely weak search/reader promise |
| v2/gateways/guides/payments-and-pricing/remote-signers | High priority | 1044 | 13 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/payments-and-pricing/clearinghouse-guide | High priority | 915 | 7 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |

### Monitoring and Tooling

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/monitoring-and-tooling/health-checks | High priority | 703 | 9 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | High priority | 715 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/monitoring-and-tooling/monitoring-setup | High priority | 645 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | High priority | 830 | 16 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/gateways/guides/monitoring-and-tooling/troubleshooting | High priority | 1678 | 7 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |

### Advanced Operations

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/advanced-operations/orchestrator-selection | High priority | 921 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/advanced-operations/scaling | High priority | 1030 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/advanced-operations/gateway-middleware | High priority | 668 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/advanced-operations/gateway-discoverability | High priority | 941 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/orchestrators/guides/advanced-operations/gateway-relationships | Needs polish | 933 | 6 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise |
| v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface | High priority | 776 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/advanced-operations/pool-operators | High priority | 1401 | 7 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/advanced-operations/scale-operations | Needs polish | 862 | 7 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Roadmap and Funding

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/roadmap-and-funding/operator-support | High priority | 593 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; banned/self-referential phrase: Understanding  |
| v2/gateways/guides/roadmap-and-funding/spe-grant-model | High priority | 963 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | High priority | 959 | 16 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/roadmap-and-funding/gateway-showcase | High priority | 1079 | 17 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/orchestrators/guides/roadmap-and-funding/funding-and-support | High priority | 24 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (24 words) |
| v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles | High priority | 19 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (19 words) |

### Tutorial: Zero-to-Hero

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | High priority | 832 | 6 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | High priority | 806 | 8 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |
| v2/gateways/guides/tutorials/tutorial-3-go-production | High priority | 1898 | 22 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present; inline style found in MDX |

### Technical Reference

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/resources/reference/technical/technical-architecture | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/gateways/resources/reference/technical/configuration-flags | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/gateways/resources/reference/technical/contract-addresses | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/gateways/resources/reference/technical/cli-commands | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/orchestrators/resources/reference/technical/cli-flags | High priority | 113 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; thin prose content (113 words); placeholder/TODO/coming-soon language present |
| v2/orchestrators/resources/reference/technical/contract-addresses | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: general; missing veracityStatus; very low prose content (0 words) |
| v2/orchestrators/resources/reference/gpu-support | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/orchestrators/resources/reference/arbitrum-rpc | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/orchestrators/resources/reference/arbitrum-exchanges | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words) |

### AI API

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/resources/reference/technical/api-reference/AI-API/ai | Needs rewrite | 165 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; thin prose content (165 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/upscale | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2 | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/llm | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/health | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |

### CLI HTTP API

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api | Needs polish | 213 | 10 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |

### go-livepeer Reference

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/resources/reference/go-livepeer/bandwidth-requirements | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/hardware-requirements | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/gpu-support | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/gateways/resources/reference/go-livepeer/cli-reference | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/gateways/resources/reference/go-livepeer/prometheus-metrics | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |

### Exchanges & RPCs

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/resources/compendium/livepeer-exchanges | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/gateways/resources/compendium/arbitrum-exchanges | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/compendium/arbitrum-rpc | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |

### Start Here

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/portal | High priority | 152 | 1 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/orchestrators/navigator | High priority | 505 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: landing; non-canonical purpose: orientation; missing veracityStatus |
| v2/delegators/portal | Needs rewrite | 164 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; thin prose content (164 words); short description, likely weak search/reader promise |

### Quickstart

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/quickstart/guide | High priority | 257 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: overview; missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/quickstart/video-transcoding | High priority | 168 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: quickstart; missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/quickstart/tutorial | Needs rewrite | 98 | 0 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing purpose taxonomy; missing veracityStatus; thin prose content (98 words) |
| v2/orchestrators/quickstart/AI-prompt-start | Needs polish | 828 | 12 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Setup

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/setup/guide | High priority | 204 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical purpose: guide; missing veracityStatus |
| v2/orchestrators/setup/prepare | Needs rewrite | 144 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/orchestrators/setup/install | Needs polish | 576 | 4 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/setup/configure | High priority | 931 | 5 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: how_to; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/setup/connect | High priority | 1025 | 2 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: how_to; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/setup/verify | High priority | 990 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: how_to; non-canonical purpose: how_to; missing veracityStatus |
| v2/orchestrators/setup/monitor | Needs rewrite | 169 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |

### Deployment Details

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/guides/deployment-details/setup-options | High priority | 568 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: overview; non-canonical purpose: orientation; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/siphon-setup | High priority | 1308 | 10 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/guides/deployment-details/dual-mode-configuration | High priority | 1221 | 9 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: how_to; non-canonical purpose: setup; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup | High priority | 1005 | 10 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/guides/deployment-details/join-a-pool | High priority | 986 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: quickstart; non-canonical purpose: faq; missing veracityStatus |
| v2/orchestrators/guides/deployment-details/new-join-a-pool | High priority | 1144 | 12 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present |

### Workloads and AI

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/guides/ai-and-job-workloads/workload-options | Needs polish | 1362 | 12 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned/self-referential phrase: Understanding ; short description, likely weak search/reader promise |
| v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations | High priority | 1642 | 14 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | Needs polish | 1425 | 10 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | High priority | 2340 | 31 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical purpose: guide; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup | High priority | 649 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | High priority | 1622 | 21 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines | High priority | 671 | 15 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/orchestrators/guides/ai-and-job-workloads/model-hosting | High priority | 854 | 15 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |

### Staking and Earning

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/guides/staking-and-rewards/earning-model | Needs polish | 972 | 12 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/staking-and-rewards/reward-mechanics | High priority | 1077 | 15 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/payments-and-pricing/payment-receipts | Needs polish | 849 | 12 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/payments-and-pricing/payments | Needs polish | 1237 | 12 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/staking-and-rewards/delegate-operations | High priority | 1362 | 22 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; banned/self-referential phrase: Understanding  |
| v2/orchestrators/guides/staking-and-rewards/network-participation | High priority | 960 | 9 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise |

### Config and Optimisation

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/guides/config-and-optimisation/pricing-strategy | High priority | 935 | 12 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/config-and-optimisation/capacity-planning | High priority | 1070 | 11 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/config-and-optimisation/ai-model-management | High priority | 926 | 10 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/config-and-optimisation/reward-call-tuning | High priority | 656 | 10 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; missing veracityStatus; short description, likely weak search/reader promise |

### Monitoring and Tools

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | Needs polish | 710 | 8 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/monitoring-and-tooling/explorer-operations | High priority | 1300 | 10 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; banned/self-referential phrase: Understanding  |
| v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | High priority | 694 | 7 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise |
| v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | High priority | 2177 | 11 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: guide; missing veracityStatus; short description, likely weak search/reader promise |

### Delegating LPT

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/delegators/delegation/overview | Needs polish | 294 | 4 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/delegators/delegation/about-delegation | Needs polish | 490 | 7 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/delegators/delegation/bridge-lpt-to-arbitrum | Gold-ready | 466 | 7 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/delegators/delegation/delegation-economics | Needs polish | 516 | 9 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/delegators/delegation/choose-an-orchestrator | Needs polish | 599 | 11 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; banned voice word: meaningful; short description, likely weak search/reader promise |
| v2/delegators/delegation/delegate-your-lpt | Needs polish | 376 | 4 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/delegators/delegation/manage-your-delegation | Gold-ready | 515 | 9 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |

### Livepeer Governance

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/delegators/guides/governance/overview | Gold-ready | 609 | 13 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/delegators/guides/governance/model | Needs polish | 623 | 18 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |
| v2/delegators/guides/governance/processes | Needs polish | 883 | 27 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Livepeer Treasury

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/delegators/guides/treasury/overview | Gold-ready | 361 | 13 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/delegators/guides/treasury/proposals | Gold-ready | 568 | 17 | Keep; review only for factual freshness during source-verification pass. | missing veracityStatus |
| v2/delegators/guides/treasury/allocations | Needs polish | 437 | 19 | Polish taxonomy, voice, links, and section structure. | missing veracityStatus; short description, likely weak search/reader promise |

### Compendium

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/delegators/resources/compendium/exchanges | High priority | 74 | 2 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: delegators; missing veracityStatus; very low prose content (74 words) |
| v2/delegators/resources/compendium/lpt-eth-usage | Needs rewrite | 130 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; thin prose content (130 words); short description, likely weak search/reader promise |
| v2/community/resources/faq | High priority | 731 | 0 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: faq; missing veracityStatus |

### Livepeer Community

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/community/portal | High priority | 213 | 0 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/community/navigator | High priority | 455 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; placeholder/TODO/coming-soon language present |

### Livepeer Ecosystem

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/community/ecosystem/organisations | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/ecosystem/ecosystem | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/ecosystem/partners | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/ecosystem/spes | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); no onward links detected |
| v2/community/ecosystem/showcase | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview |
| v2/community/ecosystem/roadmap | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: overview; non-canonical audience: everyone; non-canonical purpose: overview |

### Livepeer Connect

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/community/connect/trending-topics | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/community/connect/connect-channels | High priority | 455 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/connect/events-and-streams | High priority | 23 | 3 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus |

### Livepeer Contribute

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/community/contribute/opportunities | High priority | 434 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: operations; missing veracityStatus |
| v2/community/contribute/contribute | High priority | 253 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: landing; non-canonical purpose: landing; missing veracityStatus |
| v2/community/contribute/build-livepeer | High priority | 174 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical purpose: operations; missing veracityStatus; thin prose content (174 words) |

### More Livepeer

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/community/guides/guidelines | High priority | 1626 | 15 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/resources/awesome-livepeer | High priority | 873 | 10 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/community/resources/guides | High priority | 377 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: keywords; non-canonical audience: everyone; non-canonical purpose: concept |
| v2/community/resources/dashboards | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; missing veracityStatus; very low prose content (0 words) |

### Resource HUB / Contract Addresses & Protocol

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/references/protocol-parameters | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |

### Resource HUB / AI APIs

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api | High priority | 106 | 16 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; thin prose content (106 words) |

### Resource HUB / CLI-HTTP API

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |
| v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing veracityStatus; very low prose content (0 words) |

### Resource HUB / go-livepeer

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/references/go-livepeer/cli-reference | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/cli-commands | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/go-livepeer/configuration-flags | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/go-livepeer/prometheus-metrics | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/hardware-requirements | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/bandwidth-requirements | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing required frontmatter: keywords; missing veracityStatus |
| v2/resources/references/go-livepeer/gpu-support | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/go-livepeer/technical-architecture | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |

### Resource HUB / APIs & SDKs

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/references/apis-sdks/apis | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) |
| v2/resources/references/apis-sdks/sdks | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) |
| v2/resources/references/apis-sdks/pytrickle-reference | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/apis-sdks/pricing-rate-limits | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing purpose taxonomy; missing veracityStatus; very low prose content (0 words) |
| v2/resources/changelog/apis-sdks/livepeer-js | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-ai-js | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-python | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-ai-python | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/apis-sdks/livepeer-ai-go | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Resource HUB / Network Data

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/about/resources/reference/network-metrics | Needs rewrite | 108 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; thin prose content (108 words); banned/self-referential phrase: Understanding  |
| v2/about/resources/reference/technical-roadmap | High priority | 24 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: general; missing veracityStatus |
| v2/resources/references/network-data/actors | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: general; missing veracityStatus; very low prose content (0 words) |
| v2/resources/references/network-data/arbitrum-rpc | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/network-data/arbitrum-exchanges | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words) |
| v2/resources/references/network-data/livepeer-exchanges | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/network-data/orchestrator-offerings | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/network-data/model-demand-reference | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (0 words); short description, likely weak search/reader promise |
| v2/resources/references/network-data/dashboards | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; missing veracityStatus; very low prose content (0 words) |

### Resource HUB / Compendium

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/glossary | Needs rewrite | 20427 | 25 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; banned voice word: effectively; banned voice word: meaningful |
| v2/resources/resource-hub-terms | High priority | 4448 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; missing veracityStatus; short description, likely weak search/reader promise |
| v2/resources/help-center | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; non-canonical purpose: navigation; missing veracityStatus |
| v2/resources/compendium/media-kit | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing pageType taxonomy; missing audience taxonomy; missing purpose taxonomy |
| v2/resources/faq | High priority | 1916 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; missing veracityStatus; short description, likely weak search/reader promise |
| v2/resources/guides | High priority | 2153 | 30 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/resources/troubleshooting | High priority | 3921 | 21 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; missing veracityStatus; placeholder/TODO/coming-soon language present |

### Resource HUB / Knowledge Hub

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/knowledge-hub/livepeer-whitepaper | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: general; missing veracityStatus; very low prose content (0 words) |
| v2/resources/concepts/livepeer-101 | High priority | 77 | 1 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing pageType taxonomy; missing audience taxonomy |
| v2/resources/concepts/brief-history-of-video | High priority | 100 | 1 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; missing pageType taxonomy; missing audience taxonomy |
| v2/resources/knowledge-hub/gateways-vs-orchestrators | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing pageType taxonomy; missing purpose taxonomy; missing veracityStatus |
| v2/about/resources/knowledge-hub/evaluating-livepeer | Needs rewrite | 84 | 2 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing veracityStatus; thin prose content (84 words); short description, likely weak search/reader promise |
| v2/about/resources/knowledge-hub/contributor-orientation | High priority | 78 | 2 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing veracityStatus; very low prose content (78 words) |

### Resource HUB / Changelogs

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/changelog/changelog | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |
| v2/resources/changelog/docs | High priority | 6 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |
| v2/resources/changelog/migration-guide | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: description; non-canonical audience: everyone; non-canonical purpose: operations |

### Resource HUB / Protocol & Network

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/changelog/protocol/go-livepeer | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |
| v2/resources/changelog/protocol/lips | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |
| v2/resources/changelog/protocol/naap | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/protocol/subgraph | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Resource HUB / AI & Compute

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/changelog/ai-compute/ai-runner | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |
| v2/resources/changelog/ai-compute/comfystream | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/ai-compute/pytrickle | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Resource HUB / Data & Tooling

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/changelog/tooling/explorer | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |
| v2/resources/changelog/tooling/livepeer-data | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |
| v2/resources/changelog/tooling/livepeer-python-gateway | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical purpose: changelog; missing veracityStatus |

### Resource HUB / Ecosystem

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/changelog/ecosystem/website | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |
| v2/resources/changelog/ecosystem/awesome-livepeer | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: changelog; non-canonical audience: everyone; non-canonical purpose: changelog |

### Resource HUB / Documentation Guide

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/documentation-guide/documentation-overview | High priority | 390 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: overview; missing veracityStatus |
| v2/resources/documentation-guide/documentation-guide | High priority | 748 | 17 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus |

### Resource HUB / Contributing

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/documentation-guide/contributing/contribute-to-the-docs | High priority | 2037 | 69 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: how_to; non-canonical audience: everyone; non-canonical purpose: how_to |

### Resource HUB / Features

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/documentation-guide/features/docs-features-and-ai-integrations | High priority | 984 | 30 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |

### Resource HUB / AI & Automations

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/documentation-guide/ai-automations/ai-features | High priority | 292 | 8 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/resources/documentation-guide/ai-automations/automations-workflows | High priority | 3548 | 65 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: everyone; non-canonical purpose: concept; missing veracityStatus |
| v2/resources/documentation-guide/ai-automations/research-and-fact-checking | High priority | 438 | 6 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical pageType: how_to; non-canonical purpose: how_to; missing veracityStatus |

### Resource HUB / UX & Style

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/documentation-guide/copy-style/style-guide | High priority | 3720 | 107 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; non-canonical purpose: operations; missing veracityStatus |
| v2/resources/documentation-guide/copy-style/authoring-guide | High priority | 725 | 29 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/resources/documentation-guide/copy-style/authoring-standard | High priority | 897 | 14 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing pageType taxonomy; missing veracityStatus; placeholder/TODO/coming-soon language present |

### Resource HUB / Component Library

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/documentation-guide/component-library/overview | High priority | 173 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: keywords; non-canonical pageType: overview; missing veracityStatus |
| v2/resources/documentation-guide/component-library/component-library | High priority | 208 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: keywords; non-canonical pageType: overview; missing purpose taxonomy |
| v2/resources/documentation-guide/component-library/elements | High priority | 2231 | 31 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/resources/documentation-guide/component-library/wrappers | High priority | 2447 | 35 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/resources/documentation-guide/component-library/displays | High priority | 1680 | 24 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: keywords; missing veracityStatus; placeholder/TODO/coming-soon language present |
| v2/resources/documentation-guide/component-library/scaffolding | High priority | 2013 | 24 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: keywords; missing veracityStatus; possible US spelling: color |
| v2/resources/documentation-guide/component-library/integrators | High priority | 1523 | 23 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: keywords; missing audience taxonomy; missing purpose taxonomy |
| v2/resources/documentation-guide/component-library/config | High priority | 183 | 5 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | missing required frontmatter: keywords; missing purpose taxonomy; missing veracityStatus |

### Resource HUB / Tooling

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/resources/documentation-guide/tooling/snippets-inventory | High priority | 407 | 13 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: everyone; missing veracityStatus; banned voice word: clearly |

### About

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/internal/overview/about | High priority | 119 | 2 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: landing; non-canonical audience: internal; non-canonical purpose: landing |
| v2/internal/overview/strategic-alignment | High priority | 183 | 14 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/overview/docs-philosophy | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/overview/personas | High priority | 189 | 3 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/overview/governance | High priority | 934 | 28 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical pageType: how_to; non-canonical audience: internal; non-canonical purpose: how_to |
| v2/internal/overview/governance-pipeline | High priority | 573 | 5 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | missing required frontmatter: sidebarTitle; non-canonical audience: internal; non-canonical purpose: operations |

### RFP

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/internal/rfp/aims | High priority | 3685 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/rfp/problem-statements | High priority | 2731 | 4 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: internal; non-canonical purpose: faq; missing pageType taxonomy |
| v2/internal/rfp/outcomes | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/rfp/deliverables | High priority | 0 | 0 | Purge or replace with a substantive page; keep only if it has a clear reader job and static facts. | non-canonical audience: internal; non-canonical purpose: operations; missing veracityStatus |
| v2/internal/rfp/report | High priority | 882 | 4 | Rewrite against page purpose, add canonical frontmatter, concrete sections, and verified static content. | non-canonical audience: internal; non-canonical purpose: concept; missing veracityStatus |

### Navigation & Links

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/internal/reports/navigation-links/docs-navigation | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/navigation-links/v2-link-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |

### Quality & Accessibility

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/internal/reports/quality-accessibility/v2-wcag-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/quality-accessibility/wcag-repair-common | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/quality-accessibility/audit-v2-usefulness | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |

### Page Audits

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/internal/reports/page-audits/test-all-pages-comprehensive | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/page-audits/audit-all-pages | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/page-audits/audit-all-pages-simple | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/page-audits/audit-python | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/page-audits/domain-pages-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |

### Repo Ops

| Route | Status | Words | Headings | Primary action | Top findings |
|---|---|---|---|---|---|
| v2/internal/reports/repo-ops/audit-scripts | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/repo-ops/errors-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/repo-ops/reports-navigation-links-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/repo-ops/reports-page-audits-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/repo-ops/reports-quality-accessibility-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |
| v2/internal/reports/repo-ops/scripts-audit | High priority | 0 | 0 | Remove from docs.json or restore the missing page from the intended source. | missing required frontmatter: title; missing required frontmatter: sidebarTitle; missing required frontmatter: description |

## Validation Notes

- Navigation membership was derived from `docs.json`, then resolved to `.mdx` or `/index.mdx` files.
- The installed `docs-review-packet-generation` skill referenced additional `references/*.md` files, but those files were absent from `/Users/alisonhaire/.codex/skills/docs-review-packet-generation`; this report follows the visible `SKILL.md` contract.
- This pass is static. It does not replace source verification for volatile factual claims or browser rendering validation.
- Existing worktree changes were left untouched.
