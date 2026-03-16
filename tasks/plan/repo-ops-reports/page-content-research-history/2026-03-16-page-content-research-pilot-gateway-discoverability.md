# Page Content Research Pilot: Gateway Discoverability

## Scope

- Canonical page: `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
- Claim family: gateway discoverability, `-aiServiceRegistry`, and current public listing/discovery surfaces
- Related propagation entity: `gateway-discoverability`

## Verified Claims

- `-aiServiceRegistry` is treated consistently in active gateway docs as the on-chain AI discovery flag.
  - Canonical source in repo: `v2/gateways/resources/technical/configuration-flags.mdx`
  - Repeated active dependents: `payment-guide.mdx`, `health-checks.mdx`, `troubleshooting.mdx`, `ai-pipelines.mdx`, `AI-prompt.mdx`, `dual-configuration.mdx`
- Active repo docs still treat application-facing gateway discovery as fragmented rather than solved by a single canonical public directory.
  - Supporting repo surface: `v2/gateways/resources/faq.mdx`

## Findings

- Severity: medium
  - File: `v2/gateways/guides/advanced-operations/gateway-discoverability.mdx`
  - Issue: the page is correctly positioned as the canonical owner for discoverability, but it still mixes one verified claim family (`-aiServiceRegistry`) with one partially verified claim family (manual/public discovery channels).
  - User impact: readers can trust the on-chain AI discovery path, but the page still overstates confidence around public listing channels and current provider-directory status.
  - Recommended fix: keep the AI registry claim as the canonical verified path and treat public listing/discovery language conservatively until a canonical directory or Foundation-managed listing process exists.

- Severity: medium
  - File: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - Issue: the provider directory is being used as a downstream discovery surface even though discoverability itself is still documented as fragmented.
  - User impact: operators may infer that the provider list is authoritative when it is still partly curated and partly review-driven.
  - Recommended fix: keep `production-gateways.mdx` as a directory/reference page and cross-link to discoverability guidance for the limits of current public discovery.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-gateway-discoverability-propagation.md`
- Immediate update set: `health-checks.mdx`, `troubleshooting.mdx`, `ai-pipelines.mdx`, `payment-guide.mdx`, `AI-prompt.mdx`, `dual-configuration.mdx`
- Verify-only set: `production-gateways.mdx`, `faq.mdx`

## Unresolved Items

- `tools.livepeer.cloud` is clearly an active community tool surface in the repo, but the listing/request process for general gateway discoverability is still not backed by one authoritative current source in this pass.
- The docs still describe video and dual gateway discovery as manual/community-driven; that statement is internally consistent, but it remains a weakly sourced ecosystem claim rather than a protocol-level guarantee.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity gateway-discoverability --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-gateway-discoverability-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-gateway-discoverability-propagation.json`
