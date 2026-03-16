# Delegation Section: Journey Map + Gap Analysis

---

## STEP 1 — Full LPT Delegator Journey Map

The five phases a user moves through, from first hearing about LPT to experienced delegator.

---

### Phase 1: "Should I even care about this?" (Awareness)

| Question                                | What they actually want to know                                  |
| --------------------------------------- | ---------------------------------------------------------------- |
| What is LPT?                            | Is this a real asset with a purpose, or just a governance token? |
| Why does delegation exist?              | What problem does it solve — for me, and for the network?        |
| What do I get from delegating?          | Concrete: how much, in what token, how often?                    |
| What happens if I do nothing?           | Am I losing value by just holding? (dilution risk)               |
| Is this like staking on other networks? | How is it different from ETH staking, Cosmos, etc.?              |
| Is this safe?                           | Can I lose my tokens? Is there slashing?                         |

---

### Phase 2: "How does this actually work?" (Understanding)

| Question                         | What they actually want to know                              |
| -------------------------------- | ------------------------------------------------------------ |
| What am I doing when I delegate? | The mechanics — am I lending tokens? voting? something else? |
| What are LPT inflation rewards?  | Where does new LPT come from? What drives the rate?          |
| What are ETH fee rewards?        | Is this real income? How much do orchestrators earn in fees? |
| What is rewardCut?               | Plain English: not just a formula. With a worked example.    |
| What is feeShare?                | Same — and why the Explorer UI labels are confusing.         |
| What is the unbonding period?    | Exactly how long is my money locked up?                      |
| Do I pay any fees?               | Gas on Arbitrum — how much?                                  |
| What is the 10% treasury thing?  | LIP-89 — does this affect my returns?                        |

---

### Phase 3: "Which orchestrator do I pick?" (Decision — the highest-friction point)

| Question                                              | What they actually want to know                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| Where do I find orchestrators?                        | Which tool, what URL                                               |
| What is the "active set"?                             | Only 100 orchestrators earn — how do I know if one is active?      |
| What metrics matter most?                             | Of rewardCut, feeShare, stake, uptime — which should I prioritise? |
| How do I read reward call history?                    | What does "called reward X of last 30 rounds" mean?                |
| What does a good orchestrator look like vs a bad one? | Concrete examples, not abstract criteria                           |
| What red flags should I avoid?                        | Patterns that indicate unreliability or bad behaviour              |
| Does it matter how much stake they already have?      | Concentration risk — smaller vs larger orchestrators               |
| Can I split between orchestrators?                    | No (one at a time) — this surprises people                         |
| What if my orchestrator goes inactive?                | Can I move? How fast?                                              |
| Should I consider decentralisation / governance?      | Some users care about network health, not just yield               |

---

### Phase 4: "OK, how do I do it?" (Activation)

| Question                                       | What they actually want to know                |
| ---------------------------------------------- | ---------------------------------------------- |
| What do I need before starting?                | Wallet type, ETH balance, LPT on which network |
| My LPT is on Ethereum mainnet — what do I do?  | Bridge instructions, tool link                 |
| Where do I actually do this?                   | The Explorer URL and what it looks like        |
| What transactions do I sign?                   | Approve + bond — what each one does            |
| How much ETH do I need for gas?                | Arbitrum is cheap, but give me a number        |
| How long does the whole process take?          | Minutes, not hours                             |
| How do I know it worked?                       | What to look for to confirm delegation         |
| Can I undo it immediately if I change my mind? | No — the unbonding delay is real               |

---

### Phase 5: "Now what do I do?" (Ongoing management)

| Question                                    | What they actually want to know                    |
| ------------------------------------------- | -------------------------------------------------- |
| Do rewards accrue automatically?            | Yes, but do I need to do anything to collect them? |
| What is claimEarnings?                      | When and why to call it                            |
| Should I compound?                          | Rebonding vs withdrawing — which is better?        |
| How do I switch orchestrators if I want to? | Is there a penalty? Do I have to unbond first?     |
| How do I exit completely?                   | unbond → wait → withdraw                           |
| How long is the unbonding period?           | Exact steps and timeline                           |
| How do I track my performance?              | Explorer, any third-party tools                    |
| What governance is there?                   | Proposals, voting weight, where to participate     |

---

## STEP 2 — Gap Analysis: Do the existing files answer these questions?

### File-by-file verdict

**`overview.mdx`**
Written for a protocol engineer, not a user. Pure LaTeX/maths with formal definitions. Answers Phase 2 questions for a reader who already understands bonding managers and contracts. Does not answer a single Phase 1 question. Has no practical guidance. Duplicate content with `about-delegators.mdx`. Assessment: **not usable as a user-facing landing page. Candidate for merging into a reference accordion on the new overview page.**

**`about-delegators.mdx`**
Near-identical content to `overview.mdx`. Formal definitions, LaTeX, identical reward formula. Has a good "rights and constraints" section and a useful risk list that should be preserved. Assessment: **duplicate of overview.mdx. Merge risk list and rights/constraints section into new pages, deprecate the file.**

**`delegation-economics.mdx`**
A single Warning component: "This page is under active development." Assessment: **empty. Must be written from scratch.**

**`delegation-guide.mdx`**
Contract-level step-by-step: approve → bond → verify → rebond → unbond → withdraw. Good bones. Written as a developer integrating against the contract, not a user using the Explorer. Has no screenshots, no Explorer guidance, no orchestrator selection, no context for what `c_O` means in human terms. Assessment: **the transaction mechanics are correct and can inform the practical section of `choose-an-orchestrator.mdx`. Deprecate the file itself — merge content into the new guide.**

**`getting-started.mdx`**
The best existing page. Has `StyledSteps`, mentions Explorer, covers approve + bond, mentions `claimEarnings`, risk factors box. However: Phase 3 (orchestrator selection) is dismissed in 8 bullet points with no depth. No bridging walkthrough. No monitoring. Commission explanations have an accuracy issue on feeShare labelling (see below). Assessment: **preserve the structure and practical steps, expand dramatically, fix the feeShare/Fee Cut confusion.**

---

### Critical accuracy issue: feeShare vs Fee Cut

`getting-started.mdx` states: _"Explorer/UI 'Fee Cut' corresponds to protocol `feeShare`"_ and _"The percentage of ETH fees the orchestrator keeps."_

This is contradictory. In the Livepeer protocol, `feeShare` is the fraction of fees **shared with delegators** (higher = more for delegators). The Explorer currently labels this "Fee Share" not "Fee Cut". The page appears to conflate two parameters. This must be corrected in all new content.

Correct model:

- `rewardCut`: fraction of LPT inflation the orchestrator **keeps** (lower = more for delegators)
- `feeShare`: fraction of ETH fees **shared with delegators** (higher = more for delegators)

---

### What is MISSING across all files

| Gap                                                                      | Severity | Phase      |
| ------------------------------------------------------------------------ | -------- | ---------- |
| No explanation of the dilution risk of NOT delegating                    | High     | Phase 1    |
| No plain-English "what is LPT for" at section level                      | High     | Phase 1    |
| Orchestrator selection guide (the most important decision)               | Critical | Phase 3    |
| Active set explanation (what it is, how to check)                        | High     | Phase 3    |
| Red flags / what to avoid in orchestrator selection                      | High     | Phase 3    |
| Concrete reward call history interpretation                              | High     | Phase 3    |
| Bridging walkthrough (LPT on Ethereum mainnet)                           | High     | Phase 4    |
| delegation-economics page with real content                              | High     | Phase 2    |
| Post-delegation management (claimEarnings, compounding, moving, exiting) | High     | Phase 5    |
| Visual flow / mermaid diagram for the full journey                       | Medium   | Phase 1–2  |
| feeShare vs rewardCut accuracy fix                                       | Critical | Phase 2, 3 |
| Concrete gas cost estimates on Arbitrum                                  | Low      | Phase 4    |

---

### Proposed new structure

Replace five existing pages with four tighter pages:

| New file                     | Replaces                                   | Purpose                                                                     |
| ---------------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| `overview.mdx`               | overview.mdx + about-delegators.mdx        | Section landing: what delegation is, why it matters, key facts, signpost    |
| `delegation-economics.mdx`   | delegation-economics.mdx (stub)            | Numbers: inflation, rewards, formulas in plain English with worked examples |
| `choose-an-orchestrator.mdx` | getting-started.mdx + delegation-guide.mdx | The main practical guide: evaluate → select → delegate → verify             |
| `manage-your-delegation.mdx` | (new, no equivalent)                       | After delegation: claim, compound, move, exit                               |

The `choose-an-orchestrator.mdx` page is the primary deliverable. It follows the `join-a-pool.mdx` UX pattern and ends with the actual delegation transaction steps — bridging the decision and the action in a single guided flow.
