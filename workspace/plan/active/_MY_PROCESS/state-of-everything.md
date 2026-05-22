# State of Everything

> 4,213 md/mdx files in the repo. This document maps what they are.

---

## The numbers

| Category | Files | Where | What it contains |
|---|---|---|---|
| **Published v2 pages** | 653 | `v2/*/` (not _workspace, not x-*) | The actual documentation site |
| **v1 pages** | 305 | `v1/` | Legacy docs (Studio SDK, self-hosting, delegating guides, React SDK) |
| **Per-tab workspace** | 923 | `v2/*/_workspace/` | Research, plans, reviews, canonical docs, context data, drafts per tab |
| **Plan folders** | 827 | `workspace/plan/active/` | 26 separate plans: content writing, IA, governance, scripts, contracts, cleanup |
| **Deprecated/archived v2** | 325 | `v2/*/x-*/ ` | Old versions of pages, retired content |
| **Docs-guide** | 110 | `docs-guide/` | Design spec (PRD, audience, IA, UX, brand), policies, frameworks |
| **AI tools/skills** | 297 | `ai-tools/` | 31 skills with supporting files, agent packs |
| **Claude references** | 502 | `.claude/` | References, rules, plans, memory |
| **Templates** | 62 | `snippets/templates/` | Page templates, section patterns, composition guides |
| **Thread outputs** | 39 | `workspace/thread-outputs/` | Session logs, research outputs, thread briefs |
| **Completed plans** | 11 | `workspace/plan/complete/` | Finished plan archives |
| **Future/backlog** | 11 | `workspace/plan/future/` | Planned work |
| **Research** | 3 | `workspace/research/` | Adjudication, claims data |
| **Other** | ~145 | Various | Misc markdown in tools/, operations/, snippets/ |
| **TOTAL** | **~4,213** | | |

---

## The real problem

It's not that files are in the wrong place. It's that:

1. **No one knows what the canonical version of anything is.** Voice rules exist in at least 4 locations. The PRD exists in 3. Audience definitions exist in 6+. Which one is current?

2. **Research done 3 months ago is invisible to work done today.** The orchestrators tab has 376 workspace files of research, reviews, and canonical docs. When someone works on the about tab, none of that context is available.

3. **The same analysis gets redone every session.** Every new session re-discovers the same files, re-reads the same frameworks, re-produces the same IA mappings — because there's no persistent index that says "this was done, here's what was found."

4. **There's no way to answer "what do we know about X?"** If someone asks "what do we know about gateway personas?" the answer is scattered across: CONTENT-WRITING/context-packs/gateways-*, CONTENT-WRITING/Prompts/.../testing/Tabs/gateways/, CONTENT-WRITING/collated/gateways/, v2/gateways/_workspace/, _MY_PROCESS/00_AUDIENCE-JOURNEY/.../GATEWAYS/, and workspace/plan/active/ORCHESTRATOR-CONTENT-WRITING/gateways*.

---

## What NOT to do

- **Don't move 3,500 files.** That creates a different mess and breaks every reference, every symlink, every script path.
- **Don't create another layer of folders.** The problem is too many folders, not too few.
- **Don't try to deduplicate by deleting.** Files that look like duplicates are often at different stages of refinement. The "old" version may contain context the "new" version lost.

---

## What TO do

### Option A: Master Index (lightest touch)

Create ONE file that classifies every significant file in the repo:

```
workspace/plan/active/_MY_PROCESS/MASTER-INDEX.md
```

Structure:
- By CONCERN (audience/persona, IA, voice, terminology, veracity, layout, governance)
- By TAB (about, orchestrators, gateways, developers, delegators, home, community, solutions, resources)
- Each entry: path, status (canonical/draft/superseded/archived), what it contains (1 line), when last updated

This doesn't move anything. It just makes everything findable. Any session can load this file and know exactly where to find what it needs.

**Effort: 1 long session to build. Maintenance: update when files change.**

### Option B: Canonical Registry (medium touch)

In addition to the master index, create a CANONICAL REGISTRY that answers: "for each concern, which file is the single source of truth?"

```
workspace/plan/active/_MY_PROCESS/CANONICAL-REGISTRY.md
```

Structure:
| Concern | Canonical file | Supersedes |
|---|---|---|
| Voice rules | workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md | .claude/references/copy/*, Frameworks.mdx voice section |
| Page classification | snippets/templates/page-classification.md | docs-guide/frameworks/page-taxonomy-framework.mdx, CONTENT-WRITING/Frameworks/pageType.md |
| IA framework | _MY_PROCESS/03_IA-STRUCTURE-per-page-mapping/canonical-ia-and-repo-folder-framework.md | 08a-ia-per-tab.md, docs-guide IA spec |
| Frontmatter schema | tools/lib/docs/frontmatter-taxonomy.js | CONTENT-WRITING/Frameworks/frontmatter-taxonomy-update.md |
| ... | ... | ... |

This solves "which version is canonical?" without moving anything. Sessions load the registry, then load from the canonical paths.

**Effort: 1 session. Maintenance: update when canonical source changes.**

### Option C: Structured Per-Tab Consolidation (heavier touch)

Create ONE consolidated research file per tab that brings together everything we know. Don't move the source files — extract and consolidate the FINDINGS.

```
_MY_PROCESS/TABS/{TAB}/everything-we-know.md
```

This file contains:
- Persona research (consolidated from all sources)
- Content inventory (current pages + quality assessment)
- Gap analysis (what's missing)
- Questions the tab must answer
- Source material index (where to find v1 content, research, external sources)
- Design decisions made (what's been decided, what's still open)

The source files stay where they are. This file is the SYNTHESIS — what we learned from all of them.

**Effort: 1 session per tab. Maintenance: update as work progresses.**

### Option D: All three

A + B + C together gives you:
- MASTER-INDEX.md — find any file
- CANONICAL-REGISTRY.md — know which version is authoritative
- TABS/{TAB}/everything-we-know.md — synthesised knowledge per tab

That's 3 files + 9 per-tab files = 12 new files. Nothing moved. Everything indexed, canonicalised, and synthesised.

---

## What about v1?

The 305 v1 files are legacy Studio docs, SDK references, delegating guides, and orchestrating guides. They're valuable as SOURCE MATERIAL for v2 content — but they're not candidates for publication.

The per-tab consolidation (Option C) should reference v1 content where relevant:
- "v1/delegators/guides/bridge-lpt.mdx covers L1→L2 bridging — source for v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx"
- "v1/ai/gateways/ has 3 pages on AI gateway setup — source for v2/gateways/ AI content"

v1 doesn't need to move. It just needs to be referenced in the per-tab synthesis.

---

## Recommendation

**Start with Option B (Canonical Registry)** — it's the highest-value, lowest-effort intervention. Once we know which version of each thing is authoritative, every downstream decision gets easier.

Then **Option C for About** as the pilot — consolidate everything we know about the About tab into one file, including the questions it must answer.

Option A (Master Index) is the FULL-INVENTORY.md we just built — it already exists.

---

## The governance question

How do we keep this from getting messy again?

**Rule: One canonical file per concern. The canonical registry names it. Everything else is a draft, reference, or archive.**

When a canonical file is updated:
1. Update the file
2. Update the canonical registry entry (date, what changed)
3. Old version doesn't need to move — the registry says which file wins

When a new file is created:
1. Check the registry — does a canonical file for this concern already exist?
2. If yes: update the canonical, don't create a new file
3. If no: create the file, add it to the registry

When research produces findings:
1. Write the findings into the per-tab synthesis (everything-we-know.md)
2. The source research files can stay where they are
3. The synthesis file is what sessions load — not the raw research
