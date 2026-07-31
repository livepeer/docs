# 03 — Voice and Anti-Lazy Enforcement

**Read this BEFORE writing or reviewing any sentence.** This file is the quality bar.
If your output violates anything here, your output is rejected. There is no soft tier.

---

## Section A — Base voice (universal, always)

You are a knowledgeable colleague. Not a professor. Not a marketer. Not a tour guide.

- **Transparent.** State what works, what does not, what is missing. No handwaving.
- **Candid.** Honest about tradeoffs and costs. Do not oversell.
- **Performant.** Dense with useful information. No filler. No corporate padding.
- **Inclusive.** Accessible to people who are not already Livepeer insiders.
- **Person.** Second person ("you") for instructions. Third person for system descriptions. **Never first person plural** ("we believe", "our network") — exception: Community tab social-fabric prose only.

**Opening order on every page and every paragraph:**
Value or outcome before mechanism. Fact before caveat. Reader benefit before system description.

**Paragraph discipline:**
One paragraph, one job. Lead sentence states the fact. Final sentence ends on a fact, number, or next step — never a hedge.

---

## Section B — Universal blocking rules (zero tolerance)

These are hard blocks. Audience-specific rules layer on top — they never override these.

### B.1 Banned words (remove, do not soften)

`effectively` · `essentially` · `basically` · `meaningful` · `significant` (as intensifier) · `real` (as intensifier) · `various` · `several` · `obviously` · `clearly` · `simply` · `just` (as filler) · `easy` · `straightforward`

### B.2 Banned phrases

- "This page covers / explains / walks you through"
- "This section covers"
- "Understanding X is essential" / "It's important to understand"
- "It is important to note" / "It should be noted"
- "As mentioned above" / "As noted previously"
- "among other factors" / "and so on" / "etc."
- "rather than" — state the positive directly
- "what it takes" — state the requirements directly
- "can generate" / "may produce" / "could potentially" — assert directly or delete
- "Don't worry, this is easy"
- "With just a few lines of code…"
- "Powered by blockchain technology"
- "Built on blockchain technology"
- "Thriving ecosystem" / "vibrant community" / "passionate contributors"
- "Together, we can…"
- "Join our thriving community!"
- "The future of decentralised…"

### B.3 Banned constructions

- `not [X]` in value statements → state the positive
- `if [condition]` in body prose → resolve the condition or move to prerequisites
- `This page [verb]` → delete self-reference, open with content
- `can/may [verb]` in value claims → assert directly or delete
- Question as section heading ("How do you configure X?") → make it declarative
- First-person plural in non-Community content ("we", "our") — never

### B.4 UK English (always)

| Wrong (US) | Right (UK) |
|---|---|
| optimize | optimise |
| organize | organise |
| customize | customise |
| recognize | recognise |
| analyze | analyse |
| behavior | behaviour |
| color | colour |
| center | centre |
| labeled | labelled |
| canceled | cancelled |
| traveling | travelling |

---

## Section C — Community register (primary for About)

About is the orientation tab. The default audience register is **community**.

- Inclusive, participatory. Peer-level social fabric.
- Substantive: the page gives real information, not motivation-poster content.
- Warm but not effusive. Concrete and actionable.
- State what participation actually requires: time, skills, tools, credentials.

**Per-persona within community:**

- `explorer` — orient first, route second. They do not know their role yet.
- `ambassador` — lead with programme mechanics. Not values.
- `engager` — governance process is the substance. State the actual steps.
- `researcher` — cite primary sources. They are evaluating, not joining.
- `internal` — point at AGENTS.md and the contributor tooling.

**Positive exemplars (from voice-rules.md — match this register):**

- explorer: "Livepeer is a decentralised video infrastructure network. Participants can run infrastructure as a gateway or orchestrator, build products using the API, stake LPT as a delegator, or contribute to the ecosystem. Start with the section that fits your role."
- ambassador: "Live Pioneers accepts applications on a rolling basis. Contributors log work in the contribution tracker and receive monthly reward distributions based on contribution categories."
- engager: "The Governance Forum is where proposals are posted before going on-chain. Comments during the review period can extend the voting timeline. To vote, you need staked LPT — that is handled in the LP Token tab."
- researcher: "Network utilisation data is published via the Livepeer Explorer API. Historical round data is available in the subgraph. The whitepaper (Ericsson, 2018) is the primary citation for protocol mechanics."

**About may also serve secondary audiences (founder, builder, developer) on specific pages.** When that happens, the page brief in `02-page-briefs.md` names the audience and you apply that register from voice-rules.md instead. Do not blend two registers in one page.

---

## Section D — The anti-lazy layer

Voice rules above tell you what NOT to write. This section tells you what to write **instead**, and how to detect your own laziness before it ships.

### D.1 The specificity rule

> **If you cannot make a sentence specific — name a number, a file, a function, a contract, a person, a date, a count, a percentage, a concrete mechanism — cut the sentence.**

Padding without specificity is the single largest source of bad output. A sentence that "feels right" but contains no commitment is filler. Cut it.

### D.2 The seven lazy patterns — recognise and replace

| # | Lazy pattern | Why it fails | Replace with |
|---|---|---|---|
| 1 | **Hedge-and-pad.** "Livepeer's ecosystem features a wide variety of participants who play various roles…" | Empty calories. Says nothing. Burns reader trust. | Name the count, name the roles. "Four participant roles run the network: orchestrators provide compute, gateways route traffic, delegators stake LPT, and developers build on top." |
| 2 | **Meta-prose.** "This page covers the basics of delegation and walks you through the key concepts." | Talks about the page instead of being the page. | Delete. Open with the actual content. "Delegators stake LPT to an orchestrator and earn a share of that orchestrator's rewards." |
| 3 | **Capability hand-waving.** "You can earn rewards by participating in the network." | No mechanism, no number, no commitment. | State the mechanism. "Delegators receive a share of orchestrator rewards proportional to their stake, minus the orchestrator's reward cut." |
| 4 | **Definitional drift.** Defining the same term three different ways across the page. | Reader stops trusting the definition. | Define once at first use. Use the term naked thereafter. |
| 5 | **Prompt restatement.** Opening with what was asked instead of the answer. | Wastes the lead sentence. | Cut the preamble. Open with the most useful fact for this reader at this lifecycle stage. |
| 6 | **Adjective stack.** "Decentralised, permissionless, performant, scalable" as the substance of a section. | Adjectives are not facts. | Replace each adjective with the underlying claim. "Open registration. No KYC. 4–6s end-to-end latency on the standard pipeline. 100+ active orchestrators." |
| 7 | **Bullet list as avoidance.** Three-word bullets that hide the absence of any actual claim. | Looks structured. Is hollow. | Either state the facts in prose with specifics, or expand each bullet to a single sentence with a real commitment. |

### D.3 Bad → good rewrites

Bad:
> Livepeer is a powerful decentralised video infrastructure protocol that essentially allows various participants to engage in a thriving ecosystem of transcoding services. Understanding how the network functions is essential before you start building.

Good:
> Livepeer is a decentralised video infrastructure network. Orchestrators run GPU nodes and earn fees for transcoding video. Gateways route jobs and pay in ETH on Arbitrum. The protocol settles payments through probabilistic micropayments on-chain.

Bad:
> The protocol effectively rewards participants who contribute meaningful work to the network. There are various ways to get involved, and you can choose the path that best fits your situation.

Good:
> Four roles earn from the network: orchestrators (compute fees + LPT inflation), delegators (a share of their orchestrator's rewards), gateways (margin between job price and orchestrator ask), and contributors (Live Pioneers programme rewards).

Bad:
> This page walks you through what delegation is and why it might be a good option for token holders looking to participate in the network.

Good:
> Delegating LPT to an orchestrator pays you a share of the rewards that orchestrator earns, minus their reward cut. Your stake also signals which orchestrators belong in the active set.

Bad:
> The orchestrator role is a critical part of the Livepeer ecosystem and provides a wide variety of important services to the network as a whole.

Good:
> Orchestrators run GPU hardware and serve transcoding and AI inference jobs. They earn ETH fees per job and LPT rewards per round, weighted by their stake.

### D.4 The "what would a colleague write" test

Imagine you are explaining this to a senior engineer over a 5-minute coffee. Would you say the sentence you just wrote? If it sounds like a brochure, a tour guide, or an executive summary template, rewrite it.

If you would not say it out loud, do not write it.

### D.5 Density target

Every paragraph should contain at least one of:
- A specific number, percentage, or count
- A specific file path, function, contract, or product name
- A specific action the reader can take
- A specific mechanism (how something works at the level a peer engineer would want)

A paragraph with **none** of these is filler. Cut it or rewrite it.

---

## Section E — Word budget enforcement

Word budgets are stated per page in `02-page-briefs.md`. Default ranges by PAGE_TYPE:

| PAGE_TYPE | Word budget |
|---|---|
| `concept` | 250–450 |
| `instruction` | 400–700 |
| `guide` | 400–800 |
| `tutorial` | 500–900 |
| `reference` | 200–500 |
| `resource` | 200–400 |
| `navigation` | 80–200 (cards + 1 short orientation paragraph) |

**If your draft exceeds the budget by more than 10%:** you are padding. Cut, do not summarise. Aim for the lower half of the range.

If you cannot deliver the page outcome within the upper bound, the page is doing two jobs. Flag it — do not split it yourself, that is a human decision.

---

## Section F — When you do not know something

Three valid responses, in order of preference:

1. **State it from the source-of-truth file** (`05-source-of-truth.md`). Most factual claims for About are pre-verified there — use them.
2. **Flag it.** `{/* REVIEW: [exact claim] — verify with: [named source: go-livepeer GitHub / contract address / whitepaper / Explorer / docs page] */}` — the human verifies before publication.
3. **Cut the sentence.** If the claim is not central, deletion is better than fabrication.

**Never invent a number, address, percentage, or feature claim.** Fabrication is the worst possible output. If you cannot source it, flag it or cut it.
