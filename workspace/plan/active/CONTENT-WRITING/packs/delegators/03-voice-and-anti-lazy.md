# 03 — Voice and Anti-Lazy Enforcement (Delegators)

**Read this BEFORE writing or reviewing any sentence.** This file is the quality bar. If your output violates anything here, your output is rejected. There is no soft tier.

---

## Section A — Base voice (universal, always)

You are a knowledgeable colleague. Not a financial adviser. Not a marketer. Not a tour guide.

- **Transparent.** State what works, what does not, what is missing. No handwaving.
- **Candid.** Honest about tradeoffs and costs. Do not oversell. State dependencies plainly.
- **Performant.** Dense with useful information. No filler. No corporate padding.
- **Inclusive.** Accessible to a smart finance-aware reader who does not write code.
- **Person.** Second person ("you") for instructions. Third person for system descriptions. **Never first person plural** ("we believe", "our network").

**Opening order on every page and every paragraph:**
Value or outcome before mechanism. Fact before caveat. Reader benefit before system description.

**Paragraph discipline:**
One paragraph, one job. Lead sentence states the fact. Final sentence ends on a fact, number, or next step — never a hedge.

---

## Section B — Universal blocking rules (zero tolerance)

These are hard blocks. Delegator-specific rules layer on top — they never override these.

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
- "The future of decentralised…"

### B.3 Banned constructions

- `not [X]` in value statements → state the positive
- `if [condition]` in body prose → resolve the condition or move to prerequisites
- `This page [verb]` → delete self-reference, open with content
- `can/may [verb]` in value claims → assert directly or delete
- Question as section heading ("How do you configure X?") → make it declarative
- First-person plural ("we", "our") — never

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

### B.5 No em-dashes

Zero em-dashes (`—`) in body content. Use a comma, semicolon, colon, or rewrite the sentence.

---

## Section C — Delegator register (primary for this tab)

The Delegators tab serves an audience defined as **accessible, plain-language, decision-support**. From `voice-rules.md`:

- A smart person who understands finance and risk but does not write code.
- Decision-making, not building.
- Treats the reader as a capable decision-maker — not a newcomer who needs every concept re-explained from first principles.

**Do:**

- Lead with the outcome. What does staking, delegating, or voting give the reader?
- Define every protocol term (LPT, orchestrator, reward cut, fee share, active set, round, thawing period, vote detachment, BondingManager) on first use. Then use the term naked.
- Use plain-language economics: "you receive X% of the rewards your orchestrator earns" not "you receive a proportional share of inflation-adjusted emissions".
- State actual steps and exact tools. The interface is Livepeer Explorer in the browser, plus the connected wallet. Name the URL when relevant.
- For governance: explain what is at stake in the vote before describing the mechanism.
- Treat the reader like a capable adult. They can handle "the orchestrator's reward cut may change at any time and you will not be notified" without padding.

**Do not:**

- Do not use CLI commands or shell syntax. Code blocks are for contract addresses and copyable on-chain values only, on bridging or contract-reference pages.
- Do not assume DeFi jargon. If you write `impermanent loss`, `AMM`, `slippage`, or `MEV`, define it inline or cut it.
- Do not use orchestrator hardware terminology (`VRAM`, `GPU pipeline`, `pipeline throughput`) — irrelevant to a delegator.
- Do not write delegation as "set and forget". It is not. Reward cut, fee share, orchestrator performance, and inflation all change.
- Do not condescend. The reader is capable.

### C.1 Delegator-specific banned phrases

- "Simply stake your tokens to…"
- "As a delegator, you will automatically…" (delegators do not automatically do anything — orchestrators must call reward; delegators must claim)
- Any earnings claim without a stated dependency
- "Set and forget"
- "Hassle-free staking"
- "Passive income" without naming the dependencies
- "Just connect your wallet"
- "Easy to delegate"
- CLI / shell prompts (`$`, `>`, `npx`, `npm`, `curl`)

---

## Section D — The anti-lazy layer

Voice rules tell you what NOT to write. This section tells you what to write **instead**, and how to detect your own laziness before it ships.

### D.1 The specificity rule

> **If you cannot make a sentence specific — name a number, a percentage, a contract method, a dependency, an action, a date, a named mechanism — cut the sentence.**

Padding without specificity is the single largest source of bad output. A sentence that "feels right" but contains no commitment is filler. Cut it.

### D.2 The dependency rule (delegator-specific)

Every claim about earnings, returns, yield, rewards, or fees must name the dependency in the same sentence — not in a footnote, not in a note callout, not on a different page.

Bad: "Delegators earn LPT rewards each round."
Good: "Delegators earn a share of new LPT each round, weighted by their stake and reduced by their orchestrator's reward cut. The share lands in the wallet only when the orchestrator calls `reward()` for that round."

Bad: "ETH fees are passed through to delegators."
Good: "Delegators receive a slice of any ETH fees their orchestrator earns from gateway work, sized by the orchestrator's `feeShare` parameter. If the orchestrator earns no fees, delegators receive none."

### D.3 The seven lazy patterns — recognise and replace

| # | Lazy pattern | Why it fails | Replace with |
|---|---|---|---|
| 1 | **Hedge-and-pad.** "Various factors influence delegator yield…" | Empty calories. Says nothing. | Name the factors. "Yield depends on the orchestrator's reward cut, the orchestrator's reward-call consistency, the protocol inflation rate, and the share of total bonded stake your orchestrator holds." |
| 2 | **Meta-prose.** "This page covers what delegation is…" | Talks about the page instead of being the page. | Delete. Open with the actual content. "Delegating LPT means bonding your tokens to one orchestrator — that orchestrator earns rewards, takes their cut, and passes the rest to delegators by stake." |
| 3 | **Capability hand-waving.** "You can earn rewards by delegating." | No mechanism, no number, no dependency. | "Delegating earns you two streams: a share of new LPT minted each round (weighted by stake, reduced by reward cut) and a share of ETH fees your orchestrator earns from gateway work (filtered by fee share)." |
| 4 | **Definitional drift.** Defining "reward cut" three different ways across the page. | Reader stops trusting the definition. | Define once at first use. Use the term naked thereafter. |
| 5 | **Prompt restatement.** Opening with what was asked instead of the answer. | Wastes the lead sentence. | Cut the preamble. Open with the most useful fact for this reader at this lifecycle stage. |
| 6 | **Adjective stack.** "Decentralised, secure, transparent staking" | Adjectives are not facts. | Replace each adjective with the underlying claim. "Bonded LPT stays in the BondingManager contract on Arbitrum One. The orchestrator cannot move it. Anyone can verify the position on Arbiscan." |
| 7 | **Bullet list as avoidance.** Three-word bullets that hide the absence of any actual claim. | Looks structured. Is hollow. | Either state the facts in prose with specifics, or expand each bullet to a single sentence with a real commitment. |

### D.4 Bad → good rewrites (delegator examples)

Bad:
> Livepeer makes it easy to stake your LPT tokens and start earning passive income through our decentralised network of orchestrators.

Good:
> Delegating LPT to an orchestrator earns you a share of the LPT minted each round and a share of any ETH fees that orchestrator earns from gateway work. Both streams depend on the orchestrator's reward cut, fee share, and reward-call consistency. The current inflation rate adjusts each round around a 50% target bonding rate.

Bad:
> Simply stake your LPT to a trusted orchestrator and you'll automatically receive your share of network rewards.

Good:
> Bond LPT to a chosen orchestrator on the Livepeer Explorer. You hold custody of the position. The orchestrator must call `reward()` each round to mint your share of new LPT — if they miss the call, you earn nothing for that round. Claim accumulated rewards via `claimEarnings()` when you want them in your wallet.

Bad:
> The protocol effectively rewards delegators who participate in the network. Various factors can affect your returns.

Good:
> A delegator's round reward is the orchestrator's share of round issuance, multiplied by `1 minus reward cut`, multiplied by the delegator's portion of that orchestrator's bonded stake. The orchestrator can change reward cut at any time. If the orchestrator drops out of the active set, the delegator earns nothing until they re-enter or the delegator rebonds.

Bad:
> Governance allows the community to participate in decisions about the protocol.

Good:
> A delegator's bonded stake is also their voting weight on the LivepeerGovernor contract. Quorum is 33.33% of voting power; approval threshold is a simple majority. A delegator can override their orchestrator's vote on the delegator's own stake by voting through the Livepeer Explorer.

Bad:
> Choosing an orchestrator is an important decision that you should think about carefully.

Good:
> Three signals dominate orchestrator choice: reward-call consistency over the last 30 to 90 rounds (drives inflationary yield directly), reward cut and fee share (lower benefits delegators, but check recent stability before bonding), and active-set position (only active orchestrators receive new work).

### D.5 The "what would a colleague write" test

Imagine you are explaining this to a finance-aware friend over a 5-minute coffee. Would you say the sentence you just wrote? If it sounds like a brochure, a tour guide, or an executive summary template, rewrite it.

If you would not say it out loud, do not write it.

### D.6 Density target

Every paragraph should contain at least one of:

- A specific number, percentage, or count
- A specific contract method, contract name, or product name (BondingManager, LivepeerGovernor, Livepeer Explorer)
- A specific action the reader can take
- A specific mechanism (how something works at the level a peer would want)
- A specific dependency (the named thing that has to be true for a claim to hold)

A paragraph with **none** of these is filler. Cut it or rewrite it.

---

## Section E — Word budget enforcement

Word budgets are stated per page in `02-page-briefs.md`. Default ranges by `pageType`:

| pageType | Word budget |
|---|---|
| `concept` | 300–600 |
| `instruction` | 400–700 |
| `guide` | 400–800 |
| `tutorial` | 500–900 |
| `reference` | 200–500 |
| `resource` | 200–400 |
| `navigation` | 80–200 (cards plus one short orientation paragraph) |

**If your draft exceeds the budget by more than 10%:** you are padding. Cut, do not summarise. Aim for the lower half of the range.

If you cannot deliver the page outcome within the upper bound, the page is doing two jobs. Flag it — do not split it yourself, that is a human decision.

---

## Section F — Interface and jargon guardrails (delegator-specific)

### F.1 Interface

- Approved interfaces in body prose: Livepeer Explorer, the connected browser wallet (MetaMask/Rabby/etc.), the Arbitrum Bridge UI, Arbiscan.
- Forbidden in body prose: any CLI prompt, any shell script, any Python or JavaScript snippet for the reader to run, any Docker command.
- Acceptable code blocks: contract addresses, contract method names referenced in plain text (`BondingManager.unbondingPeriod()`), copyable on-chain values on the bridging and contract-reference pages.

### F.2 Jargon

Define on first use. Then use the term naked. Reference list:

| Term | One-line definition |
|---|---|
| LPT | The Livepeer Token. The protocol's coordination asset on Arbitrum One. |
| orchestrator | A node operator that runs GPU compute and earns from the network. The entity a delegator bonds to. |
| bonding | The protocol action of locking LPT to an orchestrator on the BondingManager contract. Non-custodial. |
| reward cut | The percentage of inflationary LPT the orchestrator keeps before the rest goes to delegators. |
| fee share | The percentage of ETH fees passed through to delegators (some sources call the inverse "fee cut"; pick one and use it consistently per page). |
| active set | The protocol-defined set of orchestrators eligible for work and rewards in the current round. |
| round | The protocol's time unit. Roughly 21 hours of Arbitrum block time. |
| thawing period | The wait between initiating unbonding and stake becoming withdrawable. Currently 7 rounds. |
| vote detachment | A delegator's right to override their orchestrator's governance vote on the delegator's own stake. |
| BondingManager | The Arbitrum One smart contract that holds bonded LPT and accounts for delegation, reward, and unbonding. |

DeFi terms (`impermanent loss`, `AMM`, `slippage`, `MEV`): if used, define inline. Better — find a more direct phrasing.

---

## Section G — When you do not know something

Three valid responses, in order of preference:

1. **State it from the source-of-truth file** (`05-source-of-truth.md`). Most factual claims for the Delegators tab are pre-verified there — use them.
2. **Flag it.** `OPEN QUESTION: [exact claim] — verify with: [named source: `BondingManager.<method>()`, Livepeer Explorer, LIP-XX, Arbiscan, glossary entry]` — the human verifies before publication.
3. **Cut the sentence.** If the claim is not central, deletion is better than fabrication.

**Never invent a number, address, percentage, or feature claim.** Fabrication is the worst possible output. If you cannot source it, flag it or cut it.

For governance-controlled values (active set size, treasury cut, inflation rate, thawing period, proposal threshold, quorum, voting period): cite the source contract method, mark the value as live-verified, and link to the protocol-parameters reference page where appropriate. Do not embed a stale number in body prose without a source.
