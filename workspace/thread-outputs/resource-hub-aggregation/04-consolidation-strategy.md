# Resource HUB — Consolidation Strategy

Generated: 2026-05-19

Follow-on to the HUB patch (`03-docsjson-delta.md`). Defines how scattered/duplicated reference content gets consolidated using the existing composable pattern, where the canonical sources of truth live, and the gap-analysis approach for what's missing.

---

## The composable pattern (the foundation)

The repo already proves the pattern with contract addresses:

```
snippets/composables/pages/canonical/livepeer-contract-addresses.mdx   ← single source of truth (real content)
├── v2/about/resources/reference/livepeer-contract-addresses.mdx       ← wrapper, imports + renders <ContractAddressesCanonical />
├── v2/resources/references/contract-addresses.mdx                     ← wrapper, same composable
├── v2/orchestrators/.../technical/contract-addresses.mdx              ← wrapper, same composable
└── v2/gateways/.../technical/contract-addresses.mdx                   ← wrapper, same composable
```

Edit the canonical composable once → all 4 wrappers update automatically. The HUB lists the canonical wrapper only (`v2/about/.../livepeer-contract-addresses`); the other 3 wrappers stay in their audience-tab nav.

This is the template for everything in this strategy.

---

## Item 1 — FAQ merge (topic-split, not audience-split)

### Decision
Split FAQs by **topic** (general / operating / delegating / troubleshooting / developing). NOT by audience (gateway / orchestrator / community / about).

Audiences ask overlapping questions ("what's a winning ticket?", "why are my rewards low?"). Topic-split avoids the same Q&A being written 4 times.

### Layout

```
snippets/composables/pages/canonical/faq/
├── general.mdx              "what is Livepeer", "LPT vs ETH", "gateways vs orchestrators"
├── operating.mdx            running an orchestrator, hardware, GPU, configuration
├── delegating.mdx           staking, bonding, reward cuts, unbonding period
├── developing.mdx           building on Livepeer, API/SDK questions
└── troubleshooting.mdx      common errors, where to ask, support channels
```

### Wrappers

```
v2/about/resources/faq.mdx                       ← imports ALL 5 (the canonical "all FAQs" page; HUB lists this one)
v2/community/resources/faq.mdx                   ← imports general + troubleshooting
v2/gateways/resources/reference/faq.mdx          ← imports general + operating + troubleshooting
v2/orchestrators/resources/reference/faq.mdx     ← imports general + operating + troubleshooting (+ orchestrator-specific Q&A)
v2/developers/resources/faq.mdx (NEW)            ← imports general + developing + troubleshooting
v2/delegators/resources/faq.mdx (NEW)            ← imports general + delegating + troubleshooting
```

### Migration steps
1. Audit the 4 existing FAQs, extract Q&A, dedupe across audiences
2. Group deduped Q&A into the 5 topic composables
3. Convert the 4 existing FAQ pages to thin wrappers (frontmatter + imports + `<GeneralFAQ />` etc.)
4. Create 2 new wrappers (developers/, delegators/)
5. Render-verify all 6 wrappers
6. HUB Compendium > FAQs sub-group keeps only the canonical wrapper (`v2/about/resources/faq`)

### Risk
None of the existing FAQs has frontmatter declaring topic mix. Categorisation is manual per Q&A. ~1 hour of audit work for a person who knows the content.

---

## Item 2 — Documentation Guide source of truth

### Decision
**`docs-guide/` is the canonical source of truth.**

Matches CLAUDE.md (`docs-guide/frameworks/` — "Published governance frameworks (13 files) — promoted from workspace/plan/"). It's the contributor/agent-facing governance layer, single owner.

### Current state (the problem)
Two parallel surfaces with overlapping content:

| Surface | Purpose today | Owner | Status |
|---|---|---|---|
| `docs-guide/` | Governance frameworks, standards, policies, catalog | Repo-internal | Published, canonical |
| `v2/resources/documentation-guide/` | Public-facing documentation guide | Public docs tab | Renders in HUB |

Pages exist in both with similar names (e.g. `component-library`, `tooling`, `contributing`). When a contributor reads about the component framework, which version is authoritative?

### Target state

```
docs-guide/                                      ← SINGLE source of truth
├── frameworks/                                  ← already exists, canonical
├── standards/                                   ← already exists, canonical
├── policies/                                    ← already exists, canonical
├── catalog/                                     ← already exists, canonical
├── tooling/                                     ← already exists, canonical
├── contributing/                                ← already exists, canonical
├── features/                                    ← already exists, canonical
└── repo-ops/                                    ← already exists, canonical

snippets/composables/pages/canonical/docs-guide/ ← extracted content for cross-rendering
├── component-library/{elements,wrappers,displays,scaffolding,integrators,config}.mdx
├── ai-automations/{ai-features,automations-workflows,research-and-fact-checking}.mdx
├── copy-style/{style-guide,authoring-guide,authoring-standard}.mdx
└── features/{docs-features-and-ai-integrations}.mdx

v2/resources/documentation-guide/                ← thin wrappers that import from docs-guide/ or composables
└── (each page becomes 5-10 lines: frontmatter + import + render)
```

### README.md pointer

Update repo README.md (root) to declare:

```markdown
## Documentation governance

**Single source of truth: [`docs-guide/`](docs-guide/)**

- Frameworks: [`docs-guide/frameworks/`](docs-guide/frameworks/)
- Standards: [`docs-guide/standards/`](docs-guide/standards/)
- Policies: [`docs-guide/policies/`](docs-guide/policies/)
- Governance index: [`docs-guide/policies/governance-index.mdx`](docs-guide/policies/governance-index.mdx)
- Decision registry: [`docs-guide/decisions/registry.md`](docs-guide/decisions/registry.md)

Anything published under `v2/resources/documentation-guide/` is a public-facing wrapper that imports from `docs-guide/` via the composable pattern. Edit `docs-guide/`, not the v2 wrapper.
```

### Migration steps
1. For each page under `v2/resources/documentation-guide/`, find its `docs-guide/` counterpart
2. Where canonical content already lives in `docs-guide/`, convert the v2 page to a wrapper
3. Where unique content exists only in v2 (ai-automations, copy-style, component-library), MOVE to `docs-guide/` and convert v2 to a wrapper
4. Update HUB Documentation Guide group to list canonical wrappers
5. Update README.md
6. Add a governance entry in `docs-guide/policies/governance-index.mdx` declaring SoT and wrapper relationship

### Risk
Some v2/resources/documentation-guide pages have OG images and SEO metadata. Wrappers preserve frontmatter (including OG), so the public surface is unchanged.

---

## Item 3 — Internal tab → docs-guide consolidation

### Decision
Move Internal tab content into `docs-guide/internal/`. Either delete the Internal Hub tab or keep it as a hidden index that points to `docs-guide/internal/`.

### Current state
`v2/internal/` contains:
- `overview/` — about, strategic-alignment, docs-philosophy, personas, governance, governance-pipeline
- `rfp/` — aims, problem-statements, outcomes, deliverables, report
- Plus other contributor/governance docs

These ARE the kind of content docs-guide/ exists for. They're contributor/agent-facing and overlap with docs-guide governance.

### Target state

```
docs-guide/internal/
├── overview/          ← about, strategy, philosophy, personas, governance, pipeline
├── rfp/               ← RFP docs (aims, outcomes, deliverables, report)
└── reports/           ← navigation-links audits, internal-only reports
```

The Internal Hub tab in docs.json either:
- (a) Gets deleted (preferred — single nav surface for internal content)
- (b) Stays as a hidden tab with one page that links to `docs-guide/internal/`

I recommend (a). The Internal Hub adds nav complexity without a clear audience that doesn't have access to `docs-guide/`.

### Migration steps
1. Move `v2/internal/` → `docs-guide/internal/` (preserving structure)
2. Use the `/propagate` skill to update every cross-reference (sitemap, llms.txt, redirects, MDX links)
3. Delete the Internal Hub tab from docs.json
4. Add `docs-guide/internal/` to the HUB Documentation Guide group as a sub-group called "Internal" (or keep it out of HUB if internal docs shouldn't be publicly discoverable)
5. Render-verify a sample from `docs-guide/internal/`

### Risk
- Any sitemap/llms.txt/redirect entries currently pointing at `v2/internal/*` need to be updated. The `/propagate` skill handles this.
- If internal docs shouldn't be in the public sitemap, set `hidden: true` at the docs-guide/internal/ level in docs.json (Mintlify supports per-page hidden).

---

## Item 4 — APIs handling (NOT a composable migration)

### Decision
Leave canonical API reference pages where they live. Do NOT convert them to composables. Reasons:
- AI APIs and CLI-HTTP APIs are auto-generated from OpenAPI specs by Speakeasy. The source of truth is the spec file, not an MDX file.
- Putting generated MDX in `snippets/composables/` would require the generator to write there. Disruptive and unnecessary.
- The current scheme — list once canonically in the gateways tab, list again in the HUB — already works.

### Where audience tabs need to surface APIs differently
If we want a "Developer API Quickstart" or "Orchestrator AI Endpoint Index" that pulls from the generated API spec:
- Build it as a wrapper page that LINKS to the canonical API pages (not imports content)
- Pull a TOC programmatically if needed (e.g. a small composable that emits an index of available endpoints)

### Pre-existing failure flagged
During render verification, 2 API pages in scoped dev mode return 404:
- `v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image`
- `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api`

Both folders have uppercase names (`AI-API/`, `CLI-HTTP/`). Possible cause: Mintlify scoped-dev-server case-sensitivity / route registration with uppercase folder segments. Production rendering may or may not be affected. A/B test confirmed this 404 pre-dates the HUB patch — not regression-caused.

**Recommend:** separate investigation thread. Test fixes:
- (a) Rename `AI-API/` → `ai-api/` and `CLI-HTTP/` → `cli-http/` (lowercase)
- (b) Check Mintlify version compatibility
- (c) Check production status of these routes on docs.livepeer.org

This is a follow-up, not a blocker for HUB consolidation.

### API portal future build
If/when we want a unified Livepeer API portal page (aggregating AI APIs + CLI-HTTP APIs + SDKs + pricing + rate limits + auth):
- Build it as a CANONICAL page at `v2/about/resources/reference/api-portal.mdx`
- HUB lists it under Technical References > APIs & SDKs
- The page itself uses cards/columns linking to each generated API section

Phase this AFTER consolidation lands.

---

## Item 5 — Gap analysis approach

### Why after consolidation
Gap analysis run before consolidation would generate false positives — "missing" pages that turn out to be audience-tab duplicates of canonical content. After consolidation, gaps are real gaps.

### Three benchmarks

**Benchmark A — Whitepaper / protocol spec coverage**
Diff: every concept in the Livepeer whitepaper, LIPs, and protocol spec → vs current Reference inventory. Identify concepts with no canonical reference page.

Likely missing surfaces (predictions, to be verified):
- Slashing conditions reference (data + rules)
- Payment ticket structure reference (probabilistic micropayment internals)
- Orchestrator selection algorithm reference
- Inflation curve / reward calculation reference
- Treasury allocation reference
- LIP index (every Livepeer Improvement Proposal as a row)
- Governor voting reference (proposal types, voting power calculation)
- Round mechanics reference (round boundary, reward call, snapshot timing)
- Active set selection reference (top-100 mechanics, tiebreak rules)

**Benchmark B — Adjacent protocol parity**
What do Eigenlayer / Akash / Render / Filecoin docs cover that Livepeer doesn't? Comparison axes:
- Tokenomics references
- Slashing / security references
- Economic security models
- Operator runbooks
- Auditor/security reviewer references

**Benchmark C — Community signal**
- Discord recurring questions
- Forum recurring questions
- Linear support patterns
- GitHub issues tagged docs/question

Each of these surfaces "what readers actually look for and don't find."

### Output

`workspace/thread-outputs/resource-hub-aggregation/05-gap-analysis.md` with:

```markdown
| Gap | Benchmark | Priority | Why missing | Recommended canonical | Estimated effort |
|---|---|---|---|---|---|
| Slashing conditions reference | A | P0 | Discussed in whitepaper, no canonical page | v2/about/resources/reference/slashing-conditions | M |
| LIP index | A | P0 | LIPs exist; no index page | v2/about/resources/reference/lips-index | S |
| Payment ticket structure | A | P1 | Internal mechanic; in glossary only | v2/about/resources/reference/payment-ticket-structure | M |
...
```

Prioritise by reader-impact, not by effort.

### Methodology
- Pull whitepaper section headings + LIP titles → expected references
- Cross-check against `01-inventory.md` (the 159-page Reference inventory)
- Surface gaps with `not in inventory` flag
- Categorise by domain (protocol / AI / video / economic / operational)
- Recommend canonical path for each
- Estimate effort (S = small, < 1 day; M = 1-3 days; L = > 3 days)

---

## Execution order

1. **Now:** This strategy doc exists. You review and redirect.
2. **Phase 1 — Composables (1-2 sessions):**
   - FAQ topic-split + 6 wrapper pages
   - docs-guide / v2-resources-documentation-guide consolidation
   - README.md update
3. **Phase 2 — Internal consolidation (1 session):**
   - Move `v2/internal/` → `docs-guide/internal/`
   - Run `/propagate` for cross-references
   - Delete Internal Hub tab
4. **Phase 3 — Gap analysis (1 session):**
   - Run the three benchmark diffs
   - Produce `05-gap-analysis.md` with prioritised gaps
5. **Phase 4 — Gap fills (multi-session, sequential):**
   - Execute P0 gaps first, then P1, then P2
6. **Phase 5 — Maintenance:**
   - Document the canonical-wrapper pattern in `docs-guide/frameworks/`
   - Add a CI check that flags duplicate-content pages without composable imports

---

## Decisions you need to confirm before Phase 1 starts

1. **FAQ split:** Topic-split (general/operating/delegating/developing/troubleshooting) — confirm or alternative split
2. **Docs-guide as SoT:** confirm `docs-guide/` is canonical, README points at it, v2/resources/documentation-guide becomes wrappers
3. **Internal tab:** delete tab (preferred) OR keep as hidden index pointing at docs-guide/internal/
4. **APIs:** leave canonical, no composable conversion, investigate pre-existing AI-API/CLI-HTTP 404s separately
5. **HUB nav update after Phase 1:** the FAQ composable wrappers become the new HUB Compendium > FAQs sub-group (replacing the 4 audience FAQs currently listed)

On confirmation I draft `04a-faq-composable-plan.md` with concrete file moves, content extraction, and the docs.json delta. Same level of detail as `03-docsjson-delta.md`.
