# Audience Design Prompt — Deep Research Mode Test
## Tab: Orchestrators

**Runs**: 2 — ChatGPT Deep Research, Claude (deep research / web access)
**Prompt version**: v4
**Test type**: Does "deep research" mode (web search prioritised, multi-source synthesis) behave differently from standard chat mode?
**Date**: 2026-03-23

---

## Summary

| Run | Result | Classification |
|---|---|---|
| Claude (deep research) | On-target — correct Livepeer orchestrators brief | PASS |
| ChatGPT Deep Research | Critical context collapse — produced a generic Kubernetes/workflow orchestration marketing brief with zero Livepeer content | CRITICAL FAILURE |

**Conclusion**: Deep research mode is NOT compatible with this prompt in its current form for ChatGPT. Claude's deep research mode behaved correctly. The failure mode is model-specific and mechanism-specific (ChatGPT Deep Research inverts document authority).

---

## Critical Finding — ChatGPT Deep Research: Complete Context Collapse

ChatGPT Deep Research ignored the product context block and all provided source files and produced a generic B2B marketing brief about:

- Kubernetes platform engineers
- SRE/operations reliability teams
- Data/analytics pipeline orchestration owners
- MLOps/AI platform orchestrators
- Security/compliance influence layers

Zero Livepeer content. Zero reference to GPU operators, LPT staking, go-livepeer, active set, reward calls, or any Livepeer-specific concept.

**The output includes:**
- A segment profile matrix for Kubernetes operators
- Channel/content mapping for cloud-native buyers
- KPI frameworks citing CNCF survey data and DORA metrics
- A competitive landscape of Kubernetes vendors (AWS EKS, GKE, AKS, Red Hat OpenShift, Rancher, Temporal, Airflow, Dagster)
- Example taglines like "From tool sprawl to paved roads: orchestration as a product"
- A generic one-page brief template intended for Kubernetes/workflow orchestration

The output explicitly noted the ambiguity: *"This interpretation is **ambiguous in the wider industry**: in some ecosystems 'Orchestrators' is also a **named supply-side network role** (for example, in entity['company','Livepeer','decentralized video compute network'], orchestrators run nodes that process transcoding and AI jobs)."* The model identified Livepeer was an alternative interpretation, then chose the generic industry meaning anyway.

---

## Root Cause Analysis

**Why this happened:**

ChatGPT Deep Research mode operates by running a multi-source web search synthesis *first*, then constructing a response. The model encountered the term "Orchestrators" as a high-confidence industry term (Kubernetes, workflow orchestration) in web search results and anchored to that interpretation before processing the product context block. By the time it returned to the provided documents, the web-sourced framing had already overridden the document-provided context.

This is the opposite of how the prompt is designed to work. The brief assumes:
- Provided documents = primary authority
- Web search = supplementary (verify flags only)

Deep Research mode assumes:
- Web search = primary synthesis basis
- Provided documents = one source among many

For any term with a strong industry-generic meaning that also has a Livepeer-specific meaning (Orchestrator, Gateway, Delegator, Broadcaster → now deprecated), Deep Research mode will default to the industry-generic meaning unless the context is anchored with sufficient force at the very start of the prompt.

---

## Claude Deep Research Result

Claude behaved correctly. Key observations:

- **S1**: Not a standalone disambiguation section — "What orchestrators do and how the network rewards them" (`explain`, `concept`). Self-identification via routing callout in S2. Consistent with other Claude v4 orchestrators runs.
- **LIP-92**: Correctly flagged `[verify-against: github.com/livepeer/LIPs]` — same as standard v4 run
- **`pageType: navigation` on S1**: S1 is not the disambiguation section here, so `pageType: navigation` is not triggered. This is structurally correct for the routing callout design.
- **TERMINOLOGY_LOCK**: 25 terms — slightly above other runs (20-22), but justified with explicit reasoning (multiple distinct participation paths: video solo, AI-only, pool, dual mode)
- **Section count**: 11 — within target
- **`purpose: choose` on S3 / `purpose: verify` on S8**: Both uses are non-standard enum values not present in other runs. `choose` and `verify` may not be canonical. Flag for checking against pagePurpose.md. No other runs used these values.
- **Section load flag**: Not triggered — no section accumulated dual purposes
- **All personas unblocked**: ✅
- **Section quality**: Substantively strong — entry and exit states are concrete, jobs well-assigned, routing callout well-placed

**Net assessment**: Claude deep research is equivalent to standard Claude v4 on this prompt. The two minor issues (non-canonical purpose values) are worth a quality check but are not a systemic problem.

---

## Non-Standard Enum Values in Claude Deep Research Run

| Section | Field | Value used | Status |
|---|---|---|---|
| S3. Hardware requirements | `purpose` | `choose` | Non-standard — not observed in other v4 runs; check against pagePurpose.md |
| S8. Verifying your setup | `purpose` | `verify` | Non-standard — not observed in other v4 runs; check against pagePurpose.md |

These are minor. The sections function correctly regardless. But if enum compliance is a hard gate for Phase 2, these need correcting before the Claude deep research run is used as Phase 2 input.

---

## Structural Comparison

| Metric | v4 standard (Agent) | v4 standard (Claude Web) | v4 deep research (Claude) | v4 deep research (ChatGPT) |
|---|---|---|---|---|
| On-target (Livepeer content) | ✅ | ✅ | ✅ | ❌ FAIL — generic |
| Disambiguation `pageType: navigation` | ✅ | ✅ | N/A (callout, not standalone section) | N/A (off-topic) |
| LIP-92 `[verify-against]` | ✅ | ✅ | ✅ | N/A |
| Section count | 12 | 12 | 11 | N/A |
| All canonical enum values | ✅ | ✅ | `choose`/`verify` non-standard | N/A |
| All personas unblocked | ✅ | ✅ | ✅ | N/A |

---

## Implications for Prompt

**For ChatGPT Deep Research mode**, the current prompt is not usable without modification. The fix is a stronger Livepeer-specific context anchor at the very top of the prompt, before any task instructions:

> **Context anchor (add before Phase 0):**
> "This brief is for Livepeer, a decentralised video and AI compute protocol on Arbitrum. All role terms in this brief — including Orchestrator, Gateway, Delegator — are Livepeer network roles, not industry-generic terms. An Orchestrator is a GPU hardware operator on the Livepeer supply side. A Gateway is a demand-side routing node. These are not Kubernetes concepts, workflow orchestration concepts, or marketing personas. The provided Product Context block is the sole authority for what these roles mean. Web search results that conflict with the Product Context block must be disregarded."

This change should be conditional: test it on ChatGPT Deep Research before committing to the prompt. Do not add it to the standard prompt — standard chat mode does not need it and it would add noise.

**For Claude deep research mode**, no change needed. The model correctly anchored to the provided documents.

---

## Recommended Actions

| # | Action | Where | Priority |
|---|---|---|---|
| 1 | Do NOT use ChatGPT Deep Research for this prompt without the context anchor fix | — | IMMEDIATE — do not re-run without the fix |
| 2 | Verify `choose` and `verify` as canonical purpose values against pagePurpose.md | Frameworks | BEFORE using Claude deep research run as Phase 2 input |
| 3 | If ChatGPT Deep Research is a desired production model: add the Livepeer context anchor, run again, check that context collapse does not recur | Prompt (conditional) | CONDITIONAL |
| 4 | For collation purposes: the Claude deep research run can be treated as an additional standard run (after enum values are verified). The ChatGPT Deep Research run cannot be used as a collation input. | — | FOR COLLATION |
