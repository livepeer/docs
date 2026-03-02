# Section Usability Hardening Report

Date: 02-March-2026
Branch: `codex/section-usability-hardening-batch1-5`
Merge base vs `docs-v2`: `eecb64a2`
Head before report commit: `80627334`

## Batch Commits

- `1cc99cd0` — docs: batch1 trust clarity normalization (terminology/endpoints/date markers)
- `85daf007` — docs: batch2 persona actionability blocks and first-request examples
- `b3c4ac79` — docs: batch3 conservative IA simplification and CTA tightening
- `80627334` — docs: batch4 readability rhythm and theme-neutral visual cleanup

## Files Changed In B1-B4

- `docs.json`
- `v2/developers/ai-pipelines/overview.mdx`
- `v2/developers/developer-path.mdx`
- `v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx`
- `v2/developers/quickstart/ai/ai-jobs.mdx`
- `v2/gateways/references/api-reference/AI-API/ai.mdx`
- `v2/gateways/references/api-reference/AI-Worker/ai-worker-api.mdx`
- `v2/gateways/references/api-reference/ai-worker-api.mdx`
- `v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx`
- `v2/gateways/using-gateways/choosing-a-gateway.mdx`
- `v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx`
- `v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx`
- `v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx`
- `v2/lpt/about/purpose.mdx`
- `v2/lpt/delegation/getting-started.mdx`
- `v2/orchestrators/earnings.mdx`

## Terminology And Endpoint Decisions Applied

- Normalized protocol commission parameter terminology to `rewardCut` and `feeShare`.
- Added explicit UI mapping in delegator docs: Explorer/UI “Fee Cut” corresponds to protocol `feeShare`.
- Standardized Studio AI canonical base mention to `https://livepeer.studio/api/beta/generate` and Studio auth to `Authorization: Bearer <LIVEPEER_STUDIO_API_KEY>`.
- Standardized gateway-agnostic auth label to `Authorization: Bearer <LIVEPEER_GATEWAY_API_KEY>` where applicable.
- Applied Cloud SPE uncertainty fallback to provider portal (`https://tools.livepeer.cloud`) and removed unverified raw endpoint claims.
- Added volatile-claim date markers in required format (`As of 02-March-2026`).

## IA / Readability Outcomes

- Public Gateways (English nav) simplified to chooser + Provider Docs subgroup path by removing redundant direct provider listing.
- `developer-path.mdx` tabs now end with exactly one primary CTA and one secondary CTA each; extra destinations remain reachable via inline links.
- Added standardized “Start here in 5 minutes” action block across core persona/provider pages.
- Added first-request examples for Daydream and Cloud SPE using portal-guided safe endpoint patterns.
- Added summary-first section and compressed accordion density in gateway operator opportunities page.
- Removed hardcoded dark Mermaid theme blocks from touched diagrams for theme-neutral rendering.

## Validation Summary

Baseline artifacts captured:
- `/tmp/docs-nav-baseline-section.txt`

Per-batch gate sequence:
- Batch 1: staged style ✅, staged mdx ✅, strict link audit ✅, strict nav delta ✅
- Batch 2: staged style ✅, staged mdx ✅, strict link audit ✅, strict nav delta ✅
- Batch 3: staged style ✅, staged mdx ✅, strict link audit ✅, strict nav delta ✅
- Batch 4: staged style ✅, staged mdx ✅, strict link audit ✅, strict nav delta ✅

Final Batch 5 gates:
- `node tests/run-pr-checks.js --base-ref docs-v2` ❌ (exit 1)
  - Failure source: generated banner/index sync (`generate-docs-guide-pages-index.js --check`, `generate-pages-index.js`)
  - Not tied to touched sprint files; surfaced as repository-wide generator-sync condition in this branch/base combination.
  - Log: `/tmp/run-pr-checks-batch5.txt`
- Strict link audit across all B1-B4 touched MDX files ✅
  - 15 files analyzed, 172 refs, 0 missing refs
  - Report: `/tmp/v2-link-audit-final-b1-b4.md`
- Strict nav delta vs baseline ✅
  - New missing routes: `0`
  - Diff artifact: `/tmp/docs-nav-final.new.routes`

## Optional Usefulness Audit Signal

Run:
- `tools/scripts/audit-v2-usefulness.js --mode files` on the 10 core sprint pages
- Output dir: `/tmp/usefulness-section-hardening`

Aggregate:
- Avg human usefulness: `65.4`
- Avg agent usefulness: `59.4`

Per file:
- `v2/gateways/using-gateways/choosing-a-gateway.mdx` — human `65`, agent `59`
- `v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx` — human `71`, agent `65`
- `v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx` — human `68`, agent `62`
- `v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx` — human `62`, agent `58`
- `v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx` — human `57`, agent `53`
- `v2/developers/developer-path.mdx` — human `62`, agent `57`
- `v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx` — human `65`, agent `57`
- `v2/developers/ai-pipelines/overview.mdx` — human `67`, agent `60`
- `v2/lpt/delegation/getting-started.mdx` — human `72`, agent `65`
- `v2/orchestrators/earnings.mdx` — human `65`, agent `58`

## SME Verification Status

- Cloud SPE endpoint/auth: verified; default tools gateway is `https://dream-gateway.livepeer.cloud`, and unauthenticated `POST /text-to-image` succeeded at verification time.
- Studio AI base path: verified as `https://livepeer.studio/api/beta/generate` at verification time.
- `livepeercdn.studio` host status: verified active (redirecting to `playback.livepeer.studio` on HLS path checks).

Detailed evidence log:
- `tasks/reports/ungenerated/section-hardening-sme-verification-2026-03-02.md`
