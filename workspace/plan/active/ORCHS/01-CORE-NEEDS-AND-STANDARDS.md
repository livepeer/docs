# Orchestrators Tab — Core Needs & Copywriting Standards

> **Purpose**: Single reference for every content pass on the orchestrators tab.
> Every edit, rewrite, or new section must satisfy these needs and comply with these standards.

---

## 1. Core Need (The One Job)

**Help a GPU operator go from "I have hardware" to "I am earning" — with zero ambiguity at every step.**

Every page exists to move the reader one step closer to that outcome. If a paragraph does not advance the reader toward earning, configuring, diagnosing, or deciding — it is dead weight.

---

## 2. Arriving Question (Canonical)

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

All content answers a sub-question of this. If a page cannot trace its reason back to this question, it does not belong in the tab.

---

## 3. Primary Persona

**Independent GPU operator choosing a path.**
- Volume: 3 | Depth: 3 | Impact: 3 | Total: 9 | Consensus: 4/4

**Secondary personas** (ranked by impact):
1. AI inference specialist — adding Livepeer as demand channel
2. Capital-constrained operator — solo vs pool decision
3. Running operator (return visit) — configure / optimise / troubleshoot
4. Delegator-turned-operator — evaluating hardware operation

---

## 4. Voice Register: Orchestrator

| Dimension | Rule |
|-----------|------|
| **Tone** | Practical, numbers-driven, hardware-specific |
| **Lead with** | Earnings, performance, operational outcomes |
| **Vocabulary** | Use hardware terms freely: VRAM, CPU cores, NVLink, bandwidth, NVENC, CUDA |
| **Quantify** | Always: "8 GB VRAM minimum for SDXL", "0.05 ETH for gas", "~24 h per round" |
| **Language** | UK English throughout (optimise, organisation, analyse, licence/license split) |

### Prohibited

| Category | Examples |
|----------|----------|
| **Banned words** | effectively, essentially, basically, meaningful, significant, various, several, obviously, clearly |
| **Banned phrases** | "This section covers", "This page [verb]", "Understanding X is essential", "It is important to note", "As mentioned above", "and so on", "rather than", "what it takes", "not just X", "can generate / may produce" (in value claims) |
| **Banned constructions** | `not [X]` in value statements → state the positive; `if [condition]` in body prose → resolve the condition; `can/may [verb]` in value claims → assert directly |
| **Banned words (orchestrator-specific)** | "Your orchestrator will automatically…", "Easy to set up", "simply", "just", "easy", "thriving ecosystem" |

### Paragraph Discipline

- One paragraph = one job
- Lead sentence states the fact
- Final sentence ends on fact, number, or next step — never a hedge
- **Opening order**: value/outcome before mechanism; fact before caveat; reader benefit before system description

---

## 5. Page Structure Rules

| Element | Rule |
|---------|------|
| **H1** | Page title only (in frontmatter `title:`, never in body) |
| **H2** | Major sections |
| **H3** | Subsections |
| **H4+** | Rare; avoid depth > 3 |
| **Code in prose** | CLI flags: backticks with dash `--gateway`; commands: `livepeer -gateway`; file names: `docker-compose.yml`; values: `mainnet`, `true`; concepts: NO backticks |
| **Numbers** | ETH decimal "0.1 ETH"; LPT plain "100 LPT"; VRAM "32 GB VRAM"; time "~30 minutes" for estimates |
| **Links** | Internal: relative paths; external: describe destination |

### Frontmatter (Required)

```yaml
title: Page Title
description: 1-2 sentences describing what the page PROVIDES to the reader
pageType: [landing | overview | concept | instruction | guide | navigation | reference | faq | troubleshooting]
audience: orchestrator
purpose: [orient | evaluate | explain | start | build | configure | operate | troubleshoot | optimise | verify]
status: [draft | review | current | published]
```

---

## 6. Component Conventions

| Need | Use | Do NOT Use |
|------|-----|------------|
| Navigation | `<GotoLink>`, `<GotoCard>` | Plain `[text](url)` |
| Quotes | `<Quote>`, `<FrameQuote>` | Blockquote `>` |
| External links | `<DoubleIconLink>` | Plain markdown |
| Tips | `<TipWithArrow>` | `<Tip>` |
| Tables | `<StyledTable variant="bordered">` | Plain markdown tables |
| Steps | `<StyledSteps>` | Numbered lists for procedures |

**Import paths**: Always absolute from root `/snippets/components/...` with file extensions.

---

## 7. Quality Gates (What Gets Checked)

| Gate | Checks |
|------|--------|
| **Pre-commit** | Structure, style invariants, UK spelling, import paths |
| **PR CI** | MDX validity, frontmatter completeness, link resolution, image alt text |
| **Publication** | No TODO/REVIEW comments in body, all cross-references resolve, no banned words |

---

## 8. Key Reference Files

| Document | Location | Purpose |
|----------|----------|---------|
| Voice rules (LOCKED) | `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` | Audience-specific tone, vocabulary, prohibitions |
| Brand & copy guide | `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/01_09-Brand-&-Copy-Guide/index.md` | Voice identity, terminology, description metadata |
| Style guide | `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/02_10-Style-Guide/index.md` | CSS architecture, colour system, formatting, components |
| Canonical orchestrator audience design | `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md` | Section structure, terminology lock (45 terms), personas, jobs-to-be-done |
| Best practices (docs engineering) | `workspace/plan/active/DOCUMENTATION/research-best-practices.md` | CI/CD patterns, freshness contracts, registry-driven docs |
| AI best practices | `ai-tools/ai-rules/best-practices.md` | Scope discipline, error handling, communication |
| Prompt do/don't reference | `workspace/plan/active/CONTENT-WRITING/Prompts/prompt-do-dont-reference.md` | Writing guardrails |
| Banned copy | `workspace/plan/active/CONTENT-WRITING/Prompts/banned-copy.md` | Prohibited words/phrases |
| Page structure rules | `workspace/plan/active/CONTENT-WRITING/Prompts/page-structure-rules.md` | Page structure patterns |
| Section naming rubric | `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md` | Consistent naming |
| Content pipeline framework | `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` | Full pipeline stages |
| Framework index (LOCKED) | `workspace/plan/active/CONTENT-WRITING/framework-index-canonical.md` | All framework definitions |
| Orchestrator context packs | `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-*.md` | v1 content, IA mapping, navigation tree, full content |
| Decision registry | `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` | All structural/strategic decisions |

---

## 9. Terminology Lock (Critical Orchestrator Terms)

| Term | Definition | Notes |
|------|-----------|-------|
| Orchestrator | GPU hardware operator; receives compute jobs; earns ETH fees + LPT inflation | Never "node operator" or "miner" |
| Active set | Top-ranked orchestrators by bonded stake; governance-controlled | Required for video transcoding routing |
| Reward call | Active `Reward()` transaction required once per round | Missing it forfeits that round's rewards permanently |
| Fee cut | % of ETH service fees orchestrator retains before distributing to delegators | |
| Reward cut | % of LPT inflation orchestrator retains before distributing to delegators | |
| Gateway | Demand-side node that routes jobs + issues payment | Never "broadcaster" |
| Service URI | Publicly reachable URL registered on-chain | Required to receive routed work |
| Performance score | Composite metric (latency × success rate) used in gateway selection | |
| aiModels.json | Primary config file for AI orchestrators | Specifies models, pricing, warm/cold strategy |
| Warm model | AI model pre-loaded in GPU VRAM | Ready to serve without cold-start latency |
| Cold model | AI model not pre-loaded | Incurs 5–90 seconds latency on first request |
| O-T split | Orchestrator-transcoder separation | Orchestrator handles protocol; worker handles GPU compute |
| Pool | Arrangement where operators connect GPU capacity to pool operator's orchestrator | |
| Probabilistic micropayment (PM) | Lottery-based payment mechanism for per-job fees | |
| go-livepeer | The software binary | Always lowercase, hyphenated |

Full terminology lock: 45 terms in canonical audience design document.

---

## 10. The 10% Rule

On every iteration, analyse every element of copy and content against this document. The standard is Olympic — searching for the 0.01-second win. Each pass must make the content measurably better:

1. **Cut** — Remove every word that does not serve the reader's next action
2. **Quantify** — Replace every vague claim with a number, threshold, or range
3. **Sequence** — Ensure outcome appears before mechanism in every paragraph
4. **Verify** — Confirm every factual claim against source (Explorer, go-livepeer repo, protocol docs)
5. **Connect** — Ensure every page links forward to the next logical step
