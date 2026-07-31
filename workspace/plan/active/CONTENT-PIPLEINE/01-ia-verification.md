# 01 - IA Verification: Orchestrators Tab

**Date**: 2026-03-23
**Source**: canonical-orchestrators-audience-design.md
**Status**: VERIFIED

---

## Section Completeness Check

All 12 sections (S1-S12) verified for required fields:

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage | Complete? |
|---------|----------------|-----|---------|----------|-------------|------------|----------------|-----------|
| S1 - Which path is mine? | Yes | J2 | orient | navigation | Yes | Yes | discover | PASS |
| S2 - Is this viable? | Yes | J1 | evaluate | concept | Yes | Yes | evaluate | PASS |
| S3 - How does work reach me? | Yes | J1 | explain | concept | Yes | Yes | evaluate | PASS |
| S4 - Prerequisites | Yes | J3 | learn | concept | Yes | Yes | setup | PASS |
| S5 - Get your node running | Yes | J4 | start | instruction | Yes | Yes | setup | PASS |
| S6 - Join as a pool node | Yes | J2 | orient | guide | Yes | Yes | evaluate | PASS |
| S7 - Set pricing and cuts | Yes | J4, J5 | configure | guide | Yes | Yes | setup | PASS |
| S8 - Set up AI pipelines | Yes | J6 | build | instruction | Yes | Yes | build | PASS |
| S9 - Verify node end to end | Yes | J4 | verify | instruction | Yes | Yes | setup | PASS |
| S10 - Monitor and operate | Yes | J7 | operate | guide | Yes | Yes | operate | PASS |
| S11 - Optimise earnings | Yes | J5, J7 | optimise | guide | Yes | Yes | optimise | PASS |
| S12 - Diagnose and fix | Yes | J5 | troubleshoot | guide | Yes | Yes | troubleshoot | PASS |

---

## Entry/Exit State Chain Verification

| Transition | Exit of prior feeds Entry of next? | Status |
|------------|-------------------------------------|--------|
| S1 -> S2 | S1 exit: "Has identified which of three paths applies" -> S2 entry: "Has identified their candidate path from S1" | PASS |
| S2 -> S3 | S2 exit: "Has made a go/no-go decision" -> S3 entry: "Has decided to proceed" | PASS |
| S3 -> S4 | S3 exit: "Can describe two income streams, routing differences" -> S4 entry: "Has decided which path; has not yet acquired LPT, ETH" | PASS |
| S4 -> S5 | S4 exit: "Hardware meets requirements, wallet funded, LPT staked or pool confirmed" -> S5 entry: "Prerequisites from S4 confirmed; go-livepeer not yet installed" | PASS |
| S4 -> S6 | S4 entry can also route to S6 for pool candidates: S1 exit routes pool candidates to S6. S6 entry: "Identified via S1 as pool node candidate" | PASS (branch) |
| S5 -> S7 | S5 exit: "Running, registered node" -> S7 entry: "Node installed and running (S5 complete)" | PASS |
| S7 -> S8 | S7 exit: "Has set pricing" -> S8 entry: "go-livepeer installed and running (S5 complete); AI config not started" | PASS (S8 depends on S5 not S7; pricing is optional for AI) |
| S5 -> S9 | S5 exit feeds S9 entry: "Node set up and configured; not yet confirmed receiving work" | PASS |
| S8 -> S9 | S8 exit: "aiModels.json configured, capabilities advertised" -> S9 entry: same as above | PASS |
| S9 -> S10 | S9 exit: "Confirmed discoverable, priced, receiving work" -> S10 entry: "Node live and receiving work" | PASS |
| S10 -> S11 | S10 exit: "Monitoring routine in place" -> S11 entry: "Node operating with monitoring; wants to increase" | PASS |
| S10 -> S12 | S10 exit feeds S12 entry: "Node in production but experiencing a specific problem" | PASS (branch) |

**No chain gaps found.**

---

## JTBD Coverage Check

| Job | Covered by sections | Status |
|-----|---------------------|--------|
| J1 - Assess hardware, earnings, paths | S1, S2, S3 | PASS |
| J2 - Identify correct path | S1, S6 | PASS |
| J3 - Complete on-chain prerequisites | S4 | PASS |
| J4 - Follow setup sequence | S5, S7, S9 | PASS |
| J5 - Diagnose low work | S7, S11, S12 | PASS |
| J6 - Configure AI inference | S8 | PASS |
| J7 - Look up current values | S10, S11 | PASS |

**All 7 JTBDs covered.**

---

## Persona Path Check

| Persona | Unblocked path? | Status |
|---------|-----------------|--------|
| 1. Independent GPU operator | S1 -> S2 -> S3 -> S4 -> S5 -> S7 -> S9 -> S10 | PASS |
| 2. AI inference specialist | S1 -> S2 -> S3 -> S4 -> S5 -> S8 -> S9 -> S10 | PASS |
| 3. Capital-constrained (pool) | S1 -> S6 (exits cleanly) | PASS |
| 4. Running operator (return) | Direct to S10/S11/S12 | PASS |
| 5. Delegator-turned-operator | S2 -> S4 -> S5 | PASS |

**All 5 personas have unblocked paths.**

---

## Terminology Lock Verify Flags

49 terms total. The following carry verify flags that require resolution before publication:

| Term | Verify flag | Blocking? |
|------|-------------|-----------|
| LPT | verify-live: explorer.livepeer.org (staking amounts) | Non-blocking |
| Active Set | verify-live: explorer.livepeer.org (size is governance-controlled) | Non-blocking |
| Staking/Bonding | verify-against: protocol repo (BondingManager); verify-live: explorer (unbonding delay) | Non-blocking |
| Reward cut | verify-live: explorer.livepeer.org | Non-blocking |
| Fee cut | verify-live: explorer.livepeer.org | Non-blocking |
| Reward call | verify-against: go-livepeer (automation flags, gas estimates) | Non-blocking |
| Dual mode | verify-against: go-livepeer (flag combinations) | Non-blocking |
| O-T split | verify-against: Streamflow wiki | Non-blocking |
| Pool | verify-against: Streamflow wiki | Non-blocking |
| go-livepeer | verify-against: go-livepeer latest tagged release | Non-blocking |
| PM | verify-against: protocol repo (TicketBroker); whitepaper | Non-blocking |
| TicketBroker | verify-against: protocol repo; arbiscan | Non-blocking |
| BondingManager | verify-against: protocol repo; arbiscan | Non-blocking |
| Service URI | verify-against: go-livepeer (format, registration) | Non-blocking |
| Performance score | verify-against: go-livepeer (formula) | Non-blocking |
| pricePerUnit/pixelsPerUnit | verify-against: go-livepeer latest release (flags change) | Non-blocking |
| Capability advertisement | verify-against: LIPs repo -- DO NOT cite LIP-92 (Open Item 1) | **BLOCKING** |
| aiModels.json | verify-against: go-livepeer latest release (schema changes) | Non-blocking |
| Warm model | verify-against: go-livepeer (beta behaviour) | Non-blocking |
| Cold model | verify-against: go-livepeer | Non-blocking |
| Delegation | verify-against: whitepaper | Non-blocking |
| Arbitrum | verify-against: governor-scripts addresses.js | Non-blocking |

**1 BLOCKING verify flag**: Capability advertisement (LIP-92 conflict -- Open Item 1 from collation notes).

---

## Design Flags

- S5: May need to split (solo vs pool node instruction load)
- S8: May need to split (AI configuration surface length)
- S8: BYOC path not covered (custom Docker containers)

---

## Result

**VERIFIED** -- all structural requirements pass. One blocking open item (LIP-92 identity conflict) must be resolved before any content citing AI capability registry by LIP number.
