# Livepeer Docs — Copy Governance

**Purpose**: Writing rules for all content prompts. Apply these to every piece of content produced.
**Sources**: `tools/lib/copy-governance/banned-phrases.txt`, `tools/lib/copy-governance/banned-words.txt`, `tasks/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`
**Generated**: 2026-03-20

---

## Banned Words

Never use these words in documentation:

| Word | Why |
|---|---|
| effectively | Vague qualifier — state the fact directly |
| essentially | Same as above |
| basically | Same as above |
| meaningful | Undefined — be specific about what the metric or outcome is |
| significant | Undefined — use a number or comparison instead |
| real | Meaningless emphasis |
| various | Vague — list the things instead |
| several | Same as above |
| obviously | Condescending and often wrong for at least some readers |
| clearly | Same as above |

---

## Banned Phrases

Never use these phrases:

| Phrase | Why |
|---|---|
| "This section covers" | Filler opening — start with the content |
| "The reason is straightforward" | Often isn't; condescending |
| "Understanding X is essential" | Reader decides what's essential |
| "It is important to note" | If it's important, just say it |
| "As mentioned above" | Docs are navigated non-linearly; avoid forward/back references |
| "among other factors" | List the factors |
| "and so on" | List the items or don't mention them |
| "low but not zero" | Quantify or remove |
| "not just" | Vague framing — state what it is |
| "rather than" | Often creates passive avoidance; state the direct rule |
| "what it takes" | Vague — say what is required |
| "once X is stable" | Undefined condition; state the specific condition |
| "it should be noted" | Filler — just make the point |
| "not preference" | Unclear; state the requirement |
| "depends on various" | List what it depends on |
| "can generate" | Weak claim — if it generates X, say it generates X |
| "may produce" | Same as above |

---

## Voice Principles

**Entity-led voice**: The subject of a sentence is the system, node, user, or action — not the documentation.
- ✅ "The orchestrator submits a reward call each round."
- ❌ "In this section, we explain how orchestrators submit reward calls."

**Exit state over topic**: Every section heading and opening sentence should name what the reader can do after reading, not what the section is about.
- ✅ "Choose an orchestrator based on reward cut, uptime, and ETH fee history."
- ❌ "Orchestrator Selection Criteria"

**Precision over breadth**: Say exactly what is true, not a range of things that might be true.
- ✅ "The unbonding period is 7 rounds (~7 days)."
- ❌ "Unbonding typically takes several rounds, which may vary."

**No forward-looking uncertainty about shipped features**: If it's live, state it as fact.
- ✅ "Governance proposals require a 33% quorum to pass."
- ❌ "Governance proposals may require quorum depending on settings."

**UK English**: Organise, colour, practise (verb), honour, recognised. Favour, neighbour. Not US spellings.

---

## Per-Audience Voice Register

| Audience | Register | What this means in practice |
|---|---|---|
| `orchestrator` | Technical, operational, earnings-forward | Use CLI flags and config names directly. Lead with what they earn or configure, not with protocol theory. |
| `gateway` | Technical, operational, business-aware | Address three gateway types separately where behaviour differs. Be explicit about on-chain vs off-chain mode differences. |
| `developer` | Technical, action-forward, integration-focused | Code examples are expected. State API shapes precisely. Assume familiarity with REST/SDKs. |
| `delegator` | Financial, instructional, governance-aware | Define web3 terms on first use. Lead with the action (delegate, vote) not the protocol theory. Avoid jargon where a plain term exists. |
| `founder` | Product-forward, business-outcome-focused | Position relative to alternatives. Use business outcomes (cost, scale, control) not protocol mechanics. |
| `community` | Inclusive, participatory, cross-role | Don't assume technical background. Use the role-specific sections of other tabs for mechanics; Community only routes to them. |

---

## Per-Tab Glossary Files

For tab-specific terminology, read the relevant per-tab glossary before writing content for that tab:

| Tab | File | Terms | Status |
|---|---|---|---|
| Home | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-home.md` | 63 | current |
| About | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-about.md` | 58 | current |
| Solutions | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-solutions.md` | 74 | current |
| Developers | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-developers.md` | 73 | current |
| Gateways | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-gateways.md` | 65 | current |
| Orchestrators | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-orchestrators.md` | 115 | current |
| LP Token | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-lpt.md` | 94 | current |
| Community | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-community.md` | 97 | current |
| Resources | `tasks/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-resources.md` | 98 | current |

Full glossary index (480 terms, cross-tab matrix, external links): `tasks/plan/active/TERMINOLOGY-COLLATE/consolidated/glossary-index.md`
