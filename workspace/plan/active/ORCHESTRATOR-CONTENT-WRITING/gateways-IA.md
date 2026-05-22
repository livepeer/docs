# Gateways Tab — Information Architecture

> **Status**: LOCKED for content writing
> **Source**: canonical-gateways-audience-design.md (Check B APPROVED)
> **Decisions applied**: D-NAV-01 (disambiguation page pattern), NaaP = Network-as-a-Product (LOCKED), BYOC = Bring Your Own Container (LOCKED)

---

## Audience

`gateway` — infrastructure operators routing AI and video jobs through Livepeer

## Primary Persona

Self-Hosted Gateway Launcher — infrastructure/platform engineer graduating from hosted API to own routing layer

## Arriving Question

"I want to route AI or video jobs through Livepeer — what type of gateway do I need, which setup path applies, and what must I have in place before I start?"

---

## Section Map

| # | Section | File | pageType | purpose | lifecycleStage |
|---|---------|------|----------|---------|----------------|
| S1 | Gateway Path Finder | S01-gateway-path-finder.md | `navigation` | `orient` | `evaluate` |
| S2 | What a Gateway Does | S02-what-a-gateway-does.md | `concept` | `explain` | `discover` |
| S3 | Payments and Funding | S03-payments-and-funding.md | `concept` | `explain` | `evaluate` |
| S4 | On-Chain Gateway Quickstart | S04-on-chain-quickstart.md | `instruction` | `start` | `setup` |
| S5 | Off-Chain Gateway Quickstart | S05-off-chain-quickstart.md | `instruction` | `start` | `setup` |
| S6 | Pricing and Cost Control | S06-pricing-and-cost-control.md | `guide` | `configure` | `build` |
| S7 | Orchestrator Selection and Routing | S07-orchestrator-selection.md | `guide` | `configure` | `build` |
| S8 | AI Pipeline Routing | S08-ai-pipeline-routing.md | `instruction` | `configure` | `build` |
| S9 | Dual Mode Configuration | S09-dual-mode.md | `instruction` | `configure` | `build` |
| S10 | Payment Operations | S10-payment-operations.md | `guide` | `operate` | `operate` |
| S11 | Running in Production | S11-production-operations.md | `guide` | `operate` | `operate` |
| S12 | Troubleshooting | S12-troubleshooting.md | `guide` | `troubleshoot` | `troubleshoot` |
| S13 | Gateway as a Platform (NaaP) | S13-naap-platform.md | `guide` | `build` | `build` |

---

## Content Source Mapping

| Section | Primary v2 Source Pages | What to do |
|---------|------------------------|------------|
| S1 | navigator.mdx, portal.mdx | REWRITE — combine decision logic into single path-finder |
| S2 | concepts/role.mdx, concepts/capabilities.mdx, concepts/architecture.mdx | CONSOLIDATE — merge role+capabilities into gateway mental model |
| S3 | concepts/business-model.mdx, guides/payments-and-pricing/payment-guide.mdx, guides/payments-and-pricing/funding-guide.mdx | CONSOLIDATE — payment mechanics + funding prerequisites |
| S4 | quickstart/gateway-setup.mdx (on-chain tabs), setup/configure/video-configuration.mdx, setup/requirements/on-chain.mdx | REWRITE — clean on-chain quickstart |
| S5 | quickstart/gateway-setup.mdx (off-chain tabs), guides/payments-and-pricing/remote-signers.mdx | REWRITE — clean off-chain quickstart |
| S6 | guides/payments-and-pricing/pricing-strategy.mdx, setup/configure/pricing-configuration.mdx | CONSOLIDATE — pricing config in one place |
| S7 | guides/advanced-operations/orchestrator-selection.mdx, resources/technical/orchestrator-offerings.mdx | CONSOLIDATE — selection + tuning |
| S8 | guides/node-pipelines/ai-pipelines.mdx, setup/configure/ai-configuration.mdx | CONSOLIDATE — AI routing config |
| S9 | setup/configure/dual-configuration.mdx, guides/node-pipelines/guide.mdx | REWRITE — dual mode as focused instruction |
| S10 | guides/payments-and-pricing/funding-guide.mdx, guides/payments-and-pricing/clearinghouse-guide.mdx | REWRITE — deposit management operations |
| S11 | guides/monitoring-and-tooling/monitoring-setup.mdx, guides/monitoring-and-tooling/health-checks.mdx, guides/advanced-operations/scaling.mdx | CONSOLIDATE — production operations |
| S12 | guides/monitoring-and-tooling/troubleshooting.mdx, resources/faq.mdx | CONSOLIDATE — structured diagnostic |
| S13 | guides/roadmap-and-funding/naap-multi-tenancy.mdx, guides/advanced-operations/gateway-middleware.mdx, guides/payments-and-pricing/clearinghouse-guide.mdx | CONSOLIDATE — platform architecture |
