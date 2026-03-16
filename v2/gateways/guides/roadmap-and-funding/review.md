# Opportunities Section Review

## Section Structure

**Current nav order:**
1. overview - "Why is running a gateway an opportunity?"
2. naap-multi-tenancy - "The platform business model"
3. spe-grant-model - "Treasury-funded gateways"
4. community-ecosystem - "What others have built"

**Journey coherence:** Strong. All four pages follow a logical progression: why (overview) → how to build multi-tenant (NaaP) → how to get funded (SPE) → what's been built (ecosystem). Cross-linking is fully interconnected via Related Pages cards.

---

## Tab-Level Journey Position

```
Guides section:
  1. Operator Considerations (why operate)
  2. Deployment Options (how to deploy)
  3. AI & Job Pipelines (what workloads)
  4. Payments & Pricing (how to pay)
  5. Monitoring & Tooling (how to monitor)
  6. Advanced Operations (how to optimise)
  7. Opportunities ← THIS SECTION (what's next / monetise)
```

**Position 7 of 7 is correct.** This is the aspirational/growth section. The operator has set up, configured, monitored, and optimised their gateway. Now they explore business models, funding, and what the community has built.

---

## Cross-Section Duplication Analysis

### Critical overlap: overview.mdx vs operator-considerations/business-case.mdx

Both pages cover:
- "Business Model" (H2 in both)
- "Operator Models" / "Four operator models" (H2 in both)
- Cost and margin analysis
- Revenue patterns

**Assessment:** This is the most significant duplication in the gateway tab. `business-case.mdx` (in Operator Considerations, position 1 in Guides) covers the "should I?" question with business rationale. `overview.mdx` (in Opportunities, position 7) covers the "what can I build?" question with opportunity paths.

**Recommendation:** These pages serve different journey stages but have substantial content overlap. The differentiation should be:
- **business-case.mdx** = "Should I operate a gateway?" (evaluation, cost/benefit, decision)
- **overview.mdx** = "What business can I build?" (operator models, revenue paths, what to build next)

Currently both try to do both. Tighten each to its primary purpose and cross-reference the other.

### Acceptable overlaps

1. **NaaP references** appear in overview.mdx, naap-multi-tenancy.mdx, gateway-middleware.mdx, clearinghouse-guide.mdx, and publishing.mdx. Each references NaaP in its own context. naap-multi-tenancy.mdx is the canonical deep-dive. No duplication issue.

2. **SPE references** appear in overview.mdx, spe-grant-model.mdx, and community-ecosystem.mdx. spe-grant-model.mdx is canonical. Others reference briefly. Fine.

3. **Community signer** (`signer.eliteencoder.net`) appears in remote-signers.mdx, clearinghouse-guide.mdx, community-ecosystem.mdx. Each uses it in its own context. Fine.

4. **Commercial gateway listings** (Daydream, Livepeer Studio, etc.) appear in community-ecosystem.mdx AND operator-considerations/production-gateways.mdx. This IS duplication - both list the same commercial operators. **Recommendation:** community-ecosystem.mdx should focus on what these projects demonstrate (use cases, architectures) and cross-ref production-gateways.mdx for the directory listing, or vice versa.

---

## Per-Page Review

### 1. overview.mdx

**Journey fit:** Entry point for the section. Answers "why is running a gateway an opportunity?" with four operator models and revenue paths.

**Content quality:** Strong. The four operator models (route own workloads, build inference API, embed in platform, build NaaP) are well-differentiated. The "Why now" section on off-chain economics is timely and unique.

**Issues:**
- **Overlap with business-case.mdx** (see above) - tighten to focus on "what to build" not "should I operate"
- 5 REVIEW flags (NaaP URL, deposit amounts, cost comparison figures, Docker tag)
- Voice: "your gateway", "you" throughout
- Style: `---` separators, missing CustomDivider, missing imports, em dashes in description
- "Who is operating gateways today" section overlaps with community-ecosystem.mdx - trim or remove in favour of a cross-ref
- Metadata: good

### 2. naap-multi-tenancy.mdx

**Journey fit:** Deep-dive on the most advanced operator model. Answers "how do I build a multi-tenant platform?"

**Content quality:** Excellent. Architecture diagram, auth flow, tenant isolation, billing integration, clearinghouse bridge - all unique content not found elsewhere. This is the most technically detailed page in the section.

**Issues:**
- 1 REVIEW flag (NaaP dashboard URL/timeline)
- Voice: entity-led needed
- Style: standard fixes needed
- Good separation from gateway-middleware.mdx (NaaP = business model, middleware = technical implementation)
- Metadata: good

### 3. spe-grant-model.mdx

**Journey fit:** Covers the treasury-funded path. Answers "how do I get funded to run a public gateway?"

**Content quality:** Strong. Clear explanation of SPE mechanism, funded examples, proposal process (Steps), and differentiation from AI Video Startup Programme. Unique content not found elsewhere.

**Issues:**
- 2 REVIEW flags (governance quorum, AI Video Startup Programme details)
- Voice: entity-led needed
- Style: standard fixes needed
- Metadata: good

### 4. community-ecosystem.mdx

**Journey fit:** Showcase/inspiration page. Answers "what have others built?"

**Content quality:** Good directory of projects and programmes. Useful for operators evaluating what's possible.

**Issues:**
- **8 REVIEW flags** - most in the section. Many are URL/status confirmations for external projects.
- **Overlap with production-gateways.mdx** - the commercial products section (Daydream, Livepeer Studio, Livepeer Cloud, Embody) is essentially the same listing. Differentiate or consolidate.
- Voice: entity-led needed
- Style: standard fixes needed
- "Video tutorials" section has placeholder REVIEW flags with no actual content
- Metadata: good

---

## Recommendations

### Must fix
1. **Tighten overview.mdx vs business-case.mdx boundary** - overview should focus on "what to build" and cross-ref business-case for cost/benefit evaluation
2. **Resolve community-ecosystem.mdx vs production-gateways.mdx duplication** - either consolidate the commercial gateway listing or differentiate the purpose clearly

### Per-page style fixes (to be done during implementation)
3. Voice → entity-led across all 4 pages
4. Em dashes → hyphens
5. `---` → CustomDivider
6. Missing imports (CustomDivider, LinkArrow, StyledTable)
7. Missing opening CustomDivider
8. Missing `## Related Pages` headings (check each)
9. Accordion/tab icons (check each)
10. Port 8937 references (check each)

### Nav order
Keep current order - the progression is logical:
1. overview (why/what)
2. naap-multi-tenancy (how to build the biggest thing)
3. spe-grant-model (how to get funded)
4. community-ecosystem (what's been built)
