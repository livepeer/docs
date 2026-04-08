# Section Summary: v2/gateways/guides/ (M-Z subdirectories)

**Audited:** 2026-04-08
**Scope:** All published MDX pages in subdirectories starting m-z (monitoring-and-tooling, node-pipelines, operator-considerations, payments-and-pricing, roadmap-and-funding, tutorials)
**Excluded:** _workspace/, x-archived/, x-deprecated/, x-resources/, stubs/

---

## Statistics

| Metric | Count |
|--------|-------|
| Pages audited | 33 |
| PASS | 25 |
| PASS (minor fixes needed) | 4 |
| NEEDS WORK | 2 |
| FAIL (duplicate/deprecated) | 2 |
| Not in docs.json | 3 |

---

## Per-Page Verdicts

### monitoring-and-tooling (5 pages)

| Page | Verdict | Key Issues |
|------|---------|------------|
| health-checks.mdx | PASS | TODO comment block in source |
| monitoring-setup.mdx | PASS | 3 REVIEW flags for human verification |
| on-chain-metrics.mdx | PASS (minor) | Typo "mirgration"; hardcoded contract address |
| tools-and-dashboards.mdx | PASS (minor) | Typo "Adresses"; embedded iframes |
| troubleshooting.mdx | PASS | PageType "reference" in guides/ dir |

### node-pipelines (6 pages)

| Page | Verdict | Key Issues |
|------|---------|------------|
| guide.mdx | PASS | |
| ai-pipelines.mdx | PASS | og:image missing alt/type sub-fields |
| **dep-ai-inference.mdx** | **FAIL** | Duplicate of ai-pipelines.mdx; uses old port 8937; not in docs.json |
| byoc-pipelines.mdx | PASS | |
| video-pipelines.mdx | PASS (minor) | Relative link should be absolute |
| pipeline-configuration.mdx | PASS | |

### operator-considerations (2 pages)

| Page | Verdict | Key Issues |
|------|---------|------------|
| business-case.mdx | PASS | REVIEW flags for NaaP URL, ETH amounts |
| production-gateways.mdx | PASS | "{/* NEEDS WORK" comment; 8 REVIEW flags |

### payments-and-pricing (8 pages)

| Page | Verdict | Key Issues |
|------|---------|------------|
| payment-guide.mdx | PASS | Clean decision guide |
| **dep-payment-guide.mdx** | **FAIL** | Duplicate of payment-guide.mdx; "NOT TRUE FIX THIS" error; not in docs.json |
| fund-gateway.mdx | NEEDS WORK | Typos "Arbritrum"/"Arbitrium"; wrong port 7935; no Related Pages; overlaps funding-guide.mdx |
| funding-guide.mdx | PASS | Canonical funding page |
| pricing-configuration.mdx | NEEDS WORK | Old template; DynamicTable; second-person voice; overlaps pricing-strategy.mdx |
| pricing-strategy.mdx | PASS (minor) | Typo "Prcing" in two tab titles |
| remote-signers.mdx | PASS | |
| clearinghouse-guide.mdx | PASS | |

### roadmap-and-funding (4 pages)

| Page | Verdict | Key Issues |
|------|---------|------------|
| gateway-showcase.mdx | PASS (minor) | Overlaps production-gateways.mdx; markdown table |
| naap-multi-tenancy.mdx | PASS | Markdown tables should be StyledTable |
| operator-support.mdx | PASS | |
| spe-grant-model.mdx | PASS | Markdown table should be StyledTable |

### tutorials (5 pages)

| Page | Verdict | Key Issues |
|------|---------|------------|
| byoc-cpu-tutorial.mdx | PASS | Overlaps tutorial-2 in scope |
| tutorial-1-offchain-transcoding-test.mdx | PASS | |
| tutorial-2-byoc-cpu-pipeline.mdx | PASS | Critical REVIEW flags for PyTrickle API accuracy |
| tutorial-3-go-production.mdx | PASS | Duplicate Note block; REVIEW flag for flag name |
| tutorials-resources.mdx | NEEDS WORK (unlisted) | Draft status; placeholder description; not in docs.json; wrong audience |

---

## Priority Actions

### P0 - Delete or archive duplicates

1. **`dep-ai-inference.mdx`** - Duplicate of ai-pipelines.mdx with old port 8937 and plain markdown tables. Not in nav.
2. **`dep-payment-guide.mdx`** - Duplicate of payment-guide.mdx with known content error. Not in nav.

### P1 - Fix blocking issues

3. **`fund-gateway.mdx`** - Multiple typos ("Arbritrum", "Arbitrium"), wrong CLI port (7935 vs 5935), no Related Pages. Either update to current standards or redirect to funding-guide.mdx and remove from nav.
4. **`pricing-configuration.mdx`** - Old template (DynamicTable, ResponseField), second-person voice, overlaps pricing-strategy.mdx. Either modernise or consolidate into pricing-strategy.mdx.
5. **`tutorials-resources.mdx`** - Draft with placeholder description, wrong audience, not in nav. Move to _workspace or promote with proper frontmatter.

### P2 - Fix minor issues

6. **`on-chain-metrics.mdx`** - Fix typo "mirgration" (line 217); fix formatting "**" (line 89)
7. **`tools-and-dashboards.mdx`** - Fix typo "Adresses" (line 272)
8. **`pricing-strategy.mdx`** - Fix typo "Prcing" in two tab titles (lines 72, 77)
9. **`video-pipelines.mdx`** - Change relative link to absolute path (line 274)
10. **`tutorial-3-go-production.mdx`** - Remove duplicate Note block (appears twice: lines 42-46 and 56-61)

### P3 - Content improvements

11. **gateway-showcase.mdx** vs **production-gateways.mdx** - High overlap. Consider consolidating or clearly differentiating scope.
12. **fund-gateway.mdx** vs **funding-guide.mdx** - Both cover the same funding flow. Consolidate.
13. Multiple pages use markdown tables where StyledTable is required by repo standards (naap-multi-tenancy, spe-grant-model, gateway-showcase).
14. Several pages have og:image without alt/type/width/height sub-fields (ai-pipelines, byoc-pipelines, video-pipelines, pipeline-configuration).

---

## Patterns Observed

**Strengths:**
- Consistent use of CustomDivider, LinkArrow, StyledTable across most pages
- BorderedBox with Tabs pattern well-established for multi-type content
- REVIEW flags used correctly for human verification items
- Related Pages / Next Steps sections present on nearly all pages
- Entity-led voice generally well-applied

**Weaknesses:**
- 2 deprecated/duplicate files not yet cleaned up (dep-* prefix pattern)
- 2 older-style pages (fund-gateway, pricing-configuration) not updated to current template
- Markdown tables persist on some pages where StyledTable is required
- TODO comment blocks remain in source on all pages (cosmetic but cluttered)
- Some content overlap between sections (showcase vs production-gateways, fund-gateway vs funding-guide)
