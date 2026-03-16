# Page Content Research Pilot: Operator Support

## Scope

- Target page: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- Review mode: full propagation review

## Verified Claims

- Claim: Livepeer treasury-funded SPEs are a real support path for gateway-facing work.
  - Outcome: kept
  - Source: https://forum.livepeer.org/t/livepeer-cloud-spe-phase-1-completion/2415 and https://forum.livepeer.org/t/spe-milestone-report/3035
  - Checked on: 2026-03-15

- Claim: The AI Video Startup Program exists as an official Livepeer builder program.
  - Outcome: rewritten conservatively
  - Source: https://www.livepeer.org/dev-hub and https://forum.livepeer.org/t/ai-video-spe-stage-3-pre-proposal/2693
  - Checked on: 2026-03-15

- Claim: tools.livepeer.cloud is part of the Cloud SPE tooling surface.
  - Outcome: rewritten conservatively
  - Source: https://forum.livepeer.org/t/2024-end-of-year-update-livepeer-cloud-spe/2678
  - Checked on: 2026-03-15

## Findings

- Severity: high
  - File: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Issue: The AI Video Startup Programme tab implies a current cohort/application-window workflow via Discord or Forum, but the current official program surface is the Livepeer Dev Hub apply page and the reviewed treasury posts only confirm the historical first run plus discussion of a later cohort.
  - User impact: Readers may look in the wrong place for current applications or assume a cohort is open without evidence.
  - Recommended fix: Narrow the wording to an official program exists, link to the Dev Hub application surface, and mark current cohort timing as unverified unless a current source confirms it.

- Severity: high
  - File: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Issue: The community signer claim says `signer.eliteencoder.net` is free for testing, but this pass did not find an authoritative source backing current public availability or support expectations.
  - User impact: Operators may depend on an unofficial service without clear availability or custody expectations.
  - Recommended fix: Rephrase as a community endpoint observed in use, keep the custody warning, and log the current free/public status as unresolved until a maintainer-backed source exists.

- Severity: medium
  - File: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Issue: The `tools.livepeer.cloud` section states operators can contact maintainers to have a gateway listed, but the reviewed Cloud SPE sources only confirm the tool exists, not the listing workflow.
  - User impact: Readers may expect an onboarding path that is not documented publicly.
  - Recommended fix: Keep the tool reference, remove the listing claim, and restore it only when a public listing process is confirmed.

- Severity: medium
  - File: `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
  - Issue: The page is functionally an overview/support landing page but still carries `pageType: 'guide'`.
  - User impact: Review logic and page-type expectations are less reliable.
  - Recommended fix: Normalize metadata to the repo taxonomy in the next content remediation pass.

## Propagation Queue

- File: `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`
  - Dependency: compares SPE support with the AI Video Startup Program
  - Action: verify only

- File: `v2/gateways/guides/operator-considerations/production-gateways.mdx`
  - Dependency: repeats SPE-funded operator examples and community service claims
  - Action: update now

- File: `v2/gateways/guides/deployment-details/setup-options.mdx`
  - Dependency: references Livepeer Cloud as a supported hosted path
  - Action: update now

## Unresolved Items

- Claim: current AI Video Startup Program cohort timing and application cadence
  - Missing source or owner: current Foundation or official program operations source
  - Safe interim wording or action: say the program exists and direct readers to the official Dev Hub apply surface

- Claim: current free/public availability of `signer.eliteencoder.net`
  - Missing source or owner: maintainer-backed source or official docs
  - Safe interim wording or action: describe it as a community endpoint without promising availability

- Claim: gateway listing process for `tools.livepeer.cloud`
  - Missing source or owner: public maintainer documentation
  - Safe interim wording or action: keep the tool as a monitoring reference only

## Validation

- Commands run: manual source review against official Livepeer surfaces plus forum governance sources
- Ledger updated: yes
- Follow-up needed: yes
