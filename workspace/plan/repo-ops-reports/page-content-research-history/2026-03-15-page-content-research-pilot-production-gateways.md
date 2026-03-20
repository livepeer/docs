# Page Content Research Pilot: Production Gateways

## Scope

- Target page: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- Review mode: full propagation review

## Verified Claims

- Claim: Livepeer Cloud, LLM SPE, and Streamplace remain the main treasury-backed gateway examples repeated across gateway documentation.
  - Outcome: kept with narrower wording
  - Source: https://forum.livepeer.org/t/spe-milestone-report/3035
  - Checked on: 2026-03-15

- Claim: the page acts as a practical public operator directory for gateway-facing examples.
  - Outcome: kept conservatively
  - Source: repo static review of current dependent pages and link surfaces
  - Checked on: 2026-03-15

## Findings

- Severity: high
  - File: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - Issue: Multiple entries still rely on inline `REVIEW` markers for current operational details, public URLs, or gateway topology, so the directory overstates how verified each row is.
  - User impact: Readers can interpret the page as a current production directory when some entries are only partially verified.
  - Recommended fix: keep the page as the canonical comparison/directory surface, but normalize uncertain entries to conservative descriptions until each listing has a current authoritative source.

- Severity: medium
  - File: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - Issue: The page still carries non-canonical metadata (`pageType: guide`, `purpose: guides`) despite functioning as a reference directory.
  - User impact: Review and audit rules are weaker because the page type does not match its actual responsibility.
  - Recommended fix: normalize metadata in the next content pass after the research workflow is stable.

- Severity: medium
  - File: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - Issue: Public, embedded, and experimental examples are mixed in one directory without a strong certainty model.
  - User impact: Users can mistake embedded product gateways or in-development surfaces for production-ready public endpoints.
  - Recommended fix: preserve the canonical directory role, but split certainty and gateway exposure more clearly in the page structure.

## Propagation Queue

- File: `v2/gateways/guides/deployment-details/setup-options.mdx`
  - Dependency: reuses Livepeer Cloud and other gateway examples as setup choices
  - Action: verify only

- File: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Dependency: repeats gateway-facing SPE examples and community service references
  - Action: verify only

- File: `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`
  - Dependency: owns treasury-funding context for the same example set
  - Action: update now

## Unresolved Items

- Claim: current product URL and active public status for individual entries such as Daydream, Streamplace, and Embody
  - Missing source or owner: current product pages or maintainer-backed status confirmation
  - Safe interim wording or action: keep examples as ecosystem references rather than definitive live public endpoints

- Claim: current public API endpoint and operator details for the LLM SPE
  - Missing source or owner: current SPE-maintained public docs or proposal update
  - Safe interim wording or action: keep the role description and remove stronger endpoint-specific wording until confirmed

## Validation

- Commands run: static repo review plus supporting governance source checks
- Ledger updated: yes
- Follow-up needed: yes
