# Docs Glossary — Internal Contributor Reference

| Field | Value |
|-------|-------|
| Date | 2026-03-20 |
| Scope | Internal terminology for contributors/agents/maintainers |
| Source | categories.md domains 9-13 |

> **Scope**: Internal contributor and agent terms — component taxonomy, script taxonomy, governance terminology, page types.
> For protocol/video/AI/web3 terms see `v2/resources/glossary.mdx`.
> For resources-section-scoped terms see `v2/resources/resource-hub-terms.mdx`.

---

## Component Taxonomy

Source: `workspace/plan/active/COMPONENT-GOVERNANCE/structure.md`

### Component Types (6)

| Term | Definition |
|------|------------|
| elements | Smallest visual atoms. |
| wrappers | Holds/groups/arranges other components. |
| displays | Renders authored content into visual format. |
| scaffolding | One-per-page structural skeleton. |
| integrators | Fetches/embeds external data. |
| config | Non-component config objects. |

### Component Sub-niches (30)

| Sub-niche | Parent Type |
|-----------|-------------|
| a11y | elements |
| buttons | elements |
| callouts | elements |
| icons | elements |
| images | elements |
| links | elements |
| math | elements |
| social | elements |
| spacing | elements |
| text | elements |
| accordions | wrappers |
| cards | wrappers |
| containers | wrappers |
| grids | wrappers |
| lists | wrappers |
| steps | wrappers |
| tables | wrappers |
| code | displays |
| diagrams | displays |
| quotes | displays |
| response-fields | displays |
| video | displays |
| frame-mode | scaffolding |
| heroes | scaffolding |
| page-containers | scaffolding |
| portals | scaffolding |
| blog | integrators |
| embeds | integrators |
| feeds | integrators |
| video-data | integrators |

### Component JSDoc Tags (7)

| Tag | Purpose |
|-----|---------|
| @component | Identity PascalCase. |
| @type | Layer 1 what kind. |
| @subniche | Layer 2 sub-concern. |
| @status | Lifecycle. |
| @description | One-line. |
| @dataSource | Where data comes from. |
| @accepts | Extensibility. |

### Component @status Values (4)

| Value | Definition |
|-------|------------|
| stable | Production-ready. |
| experimental | API may change. |
| deprecated | Still exported, don't use new. |
| broken | Non-functional. |

### Component @accepts Values (4)

| Value | Definition |
|-------|------------|
| children | Accepts child elements. |
| style | Accepts inline style object. |
| className | Accepts CSS class name. |
| ...rest | Accepts additional props via rest spread. |

---

## Script Taxonomy

Source: `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`

### Script Types (6)

| Term | Definition |
|------|------------|
| audit | Read-only scan. |
| generator | Produce files from source. |
| validator | Pass/fail gate. |
| remediator | Bulk fix. |
| dispatch | Dispatch to agents. |
| automation | Automated pipelines. |

### Script Concerns (4)

| Term | Definition |
|------|------------|
| content | Docs pages/copy/SEO. |
| components | Library/registry/CSS. |
| governance | Scripts about scripts/repo structure. |
| ai | LLM files/agent packaging. |

### Script JSDoc Tags (11)

| Tag | Purpose |
|-----|---------|
| @script | Script identity. |
| @type | Script type. |
| @concern | Script concern. |
| @niche | Script niche. |
| @purpose | High-level goal. |
| @description | One-line description. |
| @mode | Read/write mode. |
| @pipeline | Pipeline stage. |
| @scope | Target scope. |
| @usage | How to run. |
| @policy | Governing policy. |

### Script @mode Values (5)

| Value | Definition |
|-------|------------|
| read-only | No file writes. |
| write | Creates new files. |
| edit | Modifies existing files. |
| generate | Produces derived output. |
| execute | Runs external commands. |

### Script Niches (24)

| Niche | Niche | Niche | Niche |
|-------|-------|-------|-------|
| quality | veracity | copy | structure |
| grammar | library | documentation | compliance |
| pr | codex | agents | pipelines |
| seo | catalogs | reference | reconciliation |
| repair | style | classification | data |
| language-translation | llm | scaffold | reports |

---

## Governance & Policy

Source: `docs-guide/policies/`

### Ownership & Truth

| Term | Definition |
|------|------------|
| Canonical source | The single authoritative file for a given fact or definition. |
| Source of truth | The system or document that holds the current correct state. |
| Derived output | A file generated from a canonical source. |
| Generated artifacts | Files produced by scripts, not hand-authored. |
| Content contract | The agreement between a source file and its consumers. |

### Quality Gates

| Term | Definition |
|------|------------|
| Pre-commit | Local gate, must complete in &lt;=60s. |
| Pre-push | Codex/* governance gate. |
| PR Changed-File CI | CI gate scoped to changed files in a pull request. |
| Full sweep CI | CI gate that scans the entire repo. |
| V2 Lane Contract | The contract governing the v2 content lane. |
| Gate layer | A single checkpoint in the quality pipeline. |
| P0-P3 | Priority levels from critical (P0) to low (P3). |

### Artifact Classes

| Term | Definition |
|------|------------|
| committed_authoritative | Checked-in files that are the canonical source. |
| committed_derived_scoped | Checked-in files generated from a canonical source within a defined scope. |
| ephemeral_local | Local-only files not committed to the repository. |

### Hook Behaviours

| Term | Definition |
|------|------------|
| check_only | Hook reads and reports but never writes. |
| write_and_stage | Hook writes fixes and stages them for commit. |
| ignore | Hook skips the file entirely. |

### Cleanup & Lifecycle

| Term | Definition |
|------|------------|
| keep | Retain the artifact as-is. |
| quarantine | Move to quarantine pending review. |
| delete-later | Marked for future deletion. |
| Cleanup quarantine | The holding area for artifacts awaiting disposal. |
| Repair command | A script invocation that fixes a quarantined artifact. |

### Rollout & State

| Term | Definition |
|------|------------|
| Rollout state | The current phase of a governance rule's deployment. |
| advisory | Rule is informational only, no enforcement. |
| autofix | Rule auto-remediates violations. |
| blocking | Rule blocks merges on violation. |
| migrating | Rule is transitioning between rollout states. |
| Lock holder | The agent or person who holds the current edit lock. |

### Folder Governance

| Term | Definition |
|------|------------|
| .allowlist | File that declares permitted entries in a directory. |
| Publishable section root | Top-level folder whose contents may be published. |
| Publishable content tree | The full tree of publishable pages under a section root. |
| _workspace/ | Internal working directory excluded from publishing. |
| x-deprecated/ | Directory for deprecated artifacts still under version control. |
| x-archived/ | Directory for archived artifacts retained for reference. |

### Pipeline Stages

| Stage | Name |
|-------|------|
| Stage 1 | script-footprint-and-usage-audit |
| Stage 2 | docs-quality-and-freshness-audit |
| Stage 3 | style-and-language-homogenizer-en-gb |
| Stage 4 | component-layout-governance |
| Stage 5 | cleanup-quarantine-manager |
| Stage 6 | cross-agent-packager |

---

## Business & Ecosystem

| Term | Definition |
|------|------------|
| Livepeer Foundation | The foundation stewarding the Livepeer protocol and ecosystem. |
| SPE | Service Provider Entity participating in the Livepeer network. |
| On-chain Treasury | Protocol-governed treasury funded by on-chain mechanisms. |
| Ecosystem Partner | An external organisation collaborating with the Livepeer ecosystem. |
| Network Effects | The value increase of the network as more participants join. |
| TAM | Total Addressable Market for Livepeer's services. |
| MoC | Measure of Contribution used for governance weighting. |

---

## Voice & Copy Rules

Source: `tools/lib/copy-governance/`

### Banned Words (10)

| Word |
|------|
| effectively |
| essentially |
| basically |
| meaningful |
| significant |
| real |
| various |
| several |
| obviously |
| clearly |

### Banned Phrases (17)

| Phrase |
|--------|
| This section covers |
| The reason is straightforward |
| Understanding X is essential |
| It is important to note |
| As mentioned above |
| among other factors |
| and so on |
| low but not zero |
| not just |
| rather than |
| what it takes |
| once X is stable |
| it should be noted |
| not preference |
| depends on various |
| can generate |
| may produce |
