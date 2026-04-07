# Master Task List

> Source of truth for all workstreams. Tracker thread only — other threads implement.
> Notion: [Backlog](https://www.notion.so/f6e2290eea174629a4f6026a9b21354f) | [PAGES DB](https://www.notion.so/2f0660222d088091a81fc6a57ee30c83)
> Updated: 2026-03-29

---

## Active — Changelog

### 0a. Contract addresses page rebuild — PRIORITY
**Status:** DONE — deploying
- [x] Contract addresses data-driven — blockchain-contracts.mdx imports done, pipeline date formatting done
- [ ] Contract addresses reference page — A1: rebuild with SearchTable (IN PROGRESS)
- [ ] Contract status enrichment — A4/A5: 19 hardcoded status lines need Blockscout data

### 0b. Changelog pipeline (remaining repos)
**Status:** DONE — all repos added + catalog
- [ ] Delete legacy `update-solutions-changelog.yml` (before Monday)
- [ ] Fix resource changelog format (same template as solutions)
- [ ] Add all repos to config + create pages in Resource Hub changelog section:
  - [ ] explorer
  - [ ] go-livepeer
  - [ ] docs
  - [ ] ai-runner (NEW)
  - [ ] pytrickle (NEW)
  - [ ] subgraph
  - [ ] livepeer-python-gateway (NEW)
  - [ ] protocol (NEW)
  - [ ] website — Adam's new repo (NEW)
  - [ ] LIPs (commits mode — no releases)
  - [ ] livepeer-python (SDK, not actively maintained)
  - [ ] livepeer-js (SDK, not actively maintained)
  - [ ] Studio (move/add to resources)
  - [ ] NaaP (maybe too new)

---

## Tab IA & Content — one at a time, to completion

### 1. ABOUT
**Status:** FINALISING TONIGHT
- [ ] Re-org IA
- [ ] Write / review / refine

### 2. LP TOKEN → DELEGATORS
**Status:** Pending
- [ ] Rename section
- [ ] Full re-org
- [ ] Cull pages

### 3. HOME
**Status:** Pending
- [ ] _TBD_

### 4. GATEWAYS
**Status:** FINALISING TONIGHT
- [ ] Move quickstart to setup
- [ ] Reorg guides
- [ ] Finish

### 5. DEVELOPERS
**Status:** Pending
- [ ] _TBD_

### 6. COMMUNITY
**Status:** Pending
- [ ] Re-org
- [ ] Cull
- [ ] Finish

### 7. ORCHESTRATORS
**Status:** Pending
- [ ] _TBD_

### 8. RESOURCE HUB
**Status:** Pending
- [ ] Reorg IA
- [ ] Cull

### 9. SOLUTIONS
**Status:** Done

---

## Repo Hygiene

### 10. Consolidate info sources
**Status:** IN PROGRESS (MASTER CLEAN thread)
- [ ] One folder, categorised: canonical / content research / content pipeline / other
- [ ] Full audit of 60+ governance/framework/policy docs — DONE
- [ ] Full audit of 5-tab content (IA, scans, research, v1) — DONE
- [ ] Full audit of 24 active plan dirs — DONE
- [ ] Proposed structure: `workspace/plan/active/MASTER CLEAN/` — awaiting approval

### 11. Repo cleanup
**Status:** Pending
- [ ] Folder-by-folder recursive audit

---

---

## Active Threads

| Thread | Working on | Status |
|---|---|---|
| This thread (tracker) | Changelog + master tracking | Active |
| About thread | About tab — IA lock + content | Active |
| Cleanup thread | Full repo cleanup | Active |
| MASTER CLEAN thread | Consolidate info sources (item 10) | Active — audit done, building pending |

---

## Process per tab (from my-process.mdx)

1. **Personas, Audience & Journey** — prompt: audience-design-v5.md
2. **IA Section Structuring** — prompt: structure-audit.md (after content-scan.md)
3. **Content Mapping, Veracity & Terminology** — veracity-pass.md (DRAFT), terminology extraction
4. **IA Pages Structuring & Journeys** — prompt: content-pass.md (REVIEW mode first)
5. **Find Information & Gaps** — skill: content-pipeline-tab-map, docs-quality-and-freshness-audit
6. **Copy Writing & Content Fill** — skill: page-authoring, content-pass.md (WRITE mode), voice-rules.md
7. **Quality Checks & Refinement** — skill: content-pipeline-pass-a, rubric-static-review
8. **Layout & Style** — skill: content-pipeline-pass-b, component-layout-governance
9. **Semi-manual Review & Style** — skill: product-thinking, repo-audit-orchestrator

**IA LOCK is the gate.** Nothing downstream runs until IA is locked per tab.

Source: `v2/orchestrators/_workspace/canonical/my-process.mdx`

---

## Backlog

| ID | Item | Source | Status |
|---|---|---|---|
| BL-002 | Voice input to Claude Code VS Code extension — no working solution found | Session 2026-03-29 | Parked |
