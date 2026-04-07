# Copy — Patterns

> Extracted rules linked to repo context. Apply these when writing any content.

---

## The master test

Before any sentence ships:

> Does this sentence give the reader something they can act on, trust, or use to make a decision, stated directly and in the right order for the page?

If not: rewrite or delete.

**Linked to:** `CONTENT-WRITING/Research/copy-skills-reference.md` L4

---

## Pattern 1: Entity-led sentences

The subject is always the system, node, user, or action. Never "this page", "we", or "the documentation".

| ✘ | ✔ |
|---|---|
| In this guide, we show you how to... | The orchestrator connects to... |
| This page covers how orchestrators... | Orchestrators submit reward calls... |
| We recommend using Docker | Docker is the recommended deployment method |

**Linked to:** `copy-governance.md` → Voice Principles

---

## Pattern 2: Fact-led paragraphs

Lead with the fact. End with a fact, number, or next step. Never end with a hedge.

| ✘ | ✔ |
|---|---|
| Depending on your setup, costs may vary significantly. | Gas costs range from 0.001-0.003 ETH per reward call. |
| This might be useful for operators who... | Operators with 24+ GB VRAM earn AI inference fees. |

**Linked to:** `copy-skills-reference.md` L3

---

## Pattern 3: Positive assertions

State what IS true. Never define by negation.

| ✘ | ✔ |
|---|---|
| This is not a centralized system | Livepeer is a decentralised protocol |
| You don't need to worry about... | The protocol handles... |
| It's not just for video | Livepeer supports video transcoding and AI inference |

**Linked to:** `copy-governance.md` → Banned Constructions

---

## Pattern 4: Quantify or remove

Vague qualifiers are banned. Replace with numbers or delete.

| ✘ | ✔ |
|---|---|
| Several orchestrators | 14 orchestrators |
| Significant reduction in cost | 80% lower than cloud transcoding |
| Various configuration options | 6 configuration flags |

**Linked to:** `copy-governance.md` → Banned Words

---

## Pattern 5: Majority path first

The most common real-world user path is described first, in full, without routing language. Alternative paths come after.

| ✘ | ✔ |
|---|---|
| There are three ways to deploy... | Deploy with Docker (recommended)... [full path]. For binary installation, see... |
| If you're an advanced user... | [Majority path in full]. Advanced: O-T split configuration... |

**Linked to:** `copy-skills-reference.md` L1, L2

---

## Pattern 6: One paragraph, one job

Label the job in three words. If you can't, split the paragraph.

| Job label | Example opening |
|---|---|
| State the outcome | "Orchestrators earn ETH per transcoding segment." |
| Compare the options | "Docker provides isolation; binaries offer lower overhead." |
| Direct to action | "Run `livepeer -gateway` to start the node." |

**Linked to:** `copy-skills-reference.md` L3

---

## Pattern 7: No forward references

Docs are navigated non-linearly. Never say "as mentioned above" or "we'll cover this later".

| ✘ | ✔ |
|---|---|
| As mentioned above, the orchestrator... | The orchestrator submits... |
| We'll cover this in the next section | See [Reward Mechanics](/v2/orchestrators/...) |

**Linked to:** `copy-governance.md` → Banned Phrases

---

## Quick checklist (apply to every piece of content)

- [ ] Entity-led sentences (not "this page" or "we")
- [ ] UK English (-ise, -our, -re)
- [ ] No banned words or phrases
- [ ] No em-dashes (use standard dashes)
- [ ] No questions in headings
- [ ] Lead with fact, end with fact
- [ ] Majority path first
- [ ] One paragraph, one job
- [ ] Quantified claims (no "various", "several", "significant")
- [ ] No forward/backward references ("as mentioned above")