# Phase 02: Content Gathering (Repo + External)

> Human role: None (automated)
> Automated: Source material collection, veracity tier assignment

---

## Inputs required

- Tab map with gaps identified (from Phase 01)
- Veracity sources registry: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/{TAB}/input-pack/veracity-sources.md`

## Process

### Step 1: For each gap marked WRITE or REWRITE, gather source material

Sources (in priority order):
1. **v1 content** — check `_dep-docs/` and v1 folders for predecessor pages
2. **Existing v2 content** — check if partial content exists in stubs, workspace, or adjacent pages
3. **go-livepeer source code** — for technical facts (CLI flags, config, behaviour)
4. **LIPs repo** — for governance and protocol parameter changes
5. **Whitepaper/Streamflow spec** — for architectural facts
6. **Forum threads** — for community-validated procedures (date-check required)
7. **Discord** — for common questions and pain points
8. **Blog posts** — for narrative context (verify against primary sources)

### Step 2: Assign veracity tier per source

| Tier | Source type | Usage |
|---|---|---|
| T1 (Primary) | On-chain (Explorer), tagged releases, LIPs, whitepaper | Must consult for factual claims |
| T2 (Acceptable) | Forum (dated), blog (dated), Messari, Discord (with context) | Corroborate only |
| T3 (Lead) | Web search, community wikis, docs.livepeer.org | Find claims, then verify against T1/T2 |

### Step 3: Create research pack per section

For each page that needs WRITE or REWRITE, create a research pack:
- Source material excerpts
- Veracity tier per source
- Key facts extracted (with source citations)
- Questions that cannot be answered from available sources (→ SME escalation)

## Output

- Research pack per page (stored in `v2/{tab}/_workspace/research/` or `CONTENT-WRITING/context-packs/`)
- Each pack has: source material, veracity tiers, extracted facts, unanswered questions

## Gate condition

- [ ] Every WRITE/REWRITE page has a research pack
- [ ] All facts have at least one T1 or T2 source
- [ ] Unanswered questions documented for SME escalation

## What blocks next phase

Phase 04 cannot start without research packs for WRITE/REWRITE pages.
