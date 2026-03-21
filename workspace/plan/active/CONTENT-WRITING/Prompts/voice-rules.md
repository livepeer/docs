# Voice Rules per Audience
## Livepeer Docs Content Pipeline — Step 9 Draft

**Status**: DRAFT — awaiting checkpoint approval
**Feeds**: Pass A Phase 5 voice check · Pass B frontmatter tone calibration
**Related**: `ai-tools/ai-skills/docs-copy/skills/copy-rules.md` (universal rules) | `framework.md` (audience + persona definitions)

---

## How to use this file

Load in **Pass A Phase 5** (voice check) to apply audience-specific rules on top of the universal copy rules.

Universal rules always apply first — audience rules extend them. Audience rules do not override a universal blocking rule.

If a page serves multiple audiences (rare — avoid by design), apply the rules for the primary audience and flag secondary audience content explicitly.

---

## Universal Rules (always apply, all audiences)

Full detail in `ai-tools/ai-skills/docs-copy/skills/copy-rules.md`. Summary:

**Banned words** (remove, do not soften):
`effectively, essentially, basically, meaningful, significant, real` (as intensifier), `various, several, obviously, clearly`

**Banned phrases:**
"This section covers" | "This page covers / explains / walks you through" | "Understanding X is essential" | "It is important to note" | "As mentioned above" | "and so on" / "etc." | "rather than" | "what it takes" | "it should be noted" | "not just X" | "can generate" / "may produce" in value claims

**Banned constructions:**
`not [X]` in value statements (state positive) | `if [condition]` in body prose (resolve the condition) | `This page [verb]` (delete self-reference) | `can/may [verb]` in value claims (assert directly)

**Opening order:**
Value or outcome before mechanism. Fact before caveat. Reader benefit before system description.

**Paragraph discipline:**
One paragraph, one job. Lead sentence states the fact. Final sentence ends on fact, number, or next step — never a hedge.

**Language:**
UK English throughout. Full correction table at the end of this file.

---

## Per-Audience Voice Extensions

---

### `gateway` — infrastructure operator register

**Who:** Running gateway infrastructure, routing traffic between clients and orchestrators. Technical. Infrastructure-literate. Has run production systems before.

**Register:** Peer-to-peer technical. Operator-to-operator. As if a senior engineer wrote notes for another senior engineer. Not tutorial-style.

**Tone:** Direct, factual, assumes competence. Earns trust through precision, not warmth.

**What to do:**
- Lead with what the gateway gets (output, earnings, routing performance) before how to achieve it
- Use concrete numbers: "routes ~40 jobs/second at 4% margin" not "can handle high throughput"
- Assume familiarity with: networking concepts, load balancing, configuration files, CLI tooling, gas/fees at a conceptual level
- State commands imperatively: "Run `go-livepeer -gateway`" — not "You can run..."
- For multi-path pages: the majority operator path (standard gateway setup) is the default, described first and fully

**What NOT to do:**
- Do not open with risk, cost, or difficulty before value
- Do not explain TCP/IP, Docker, Linux fundamentals — they know
- Do not use "simply", "just", "easy", "straightforward" — implies the reader should already be past this
- Do not use questions as section headings ("How do you configure X?")
- Do not use "thriving ecosystem", "powerful solution", "exciting opportunity"

**Prohibited phrases (gateway-specific):**
- "Don't worry, this is easy to configure"
- "As a gateway operator, you will..."
- "This document will guide you through"
- "Remember that..." / "Keep in mind that..."
- "The gateway simply..." (with "simply" as filler)

---

### `orchestrator` — node operator register

**Who:** Running GPU nodes, providing compute. Mix of solo hobbyists and commercial operators. Most are already running a node or actively planning to — past the evaluation stage.

**Register:** Operational and technical. Performance and economics focused. Hardware-aware.

**Tone:** Practical, numbers-driven, hardware-specific. Respects their investment in hardware and time. Does not condescend.

**What to do:**
- Lead with earnings, performance, or operational outcomes — that is why they are here
- Use hardware-specific language freely: VRAM, CPU cores, NVLink, bandwidth, pipeline throughput
- Quantify wherever possible: "8 GB VRAM minimum for SDXL, 24 GB for high-res inference"
- Distinguish paths by hardware profile — not all orchestrators have the same setup
- For multi-profile pages: majority path (standard setup) is the default; hardware variants route explicitly with functional identifiers ("Operators with a single GPU and no LPT")
- State prerequisites as hard requirements, not suggestions

**What NOT to do:**
- Do not explain "what an orchestrator is" on operational pages — they know
- Do not use generic cloud/distributed computing language when hardware-specific terms exist
- Do not present economics in vague terms ("can earn rewards") — state the mechanism and its dependencies
- Do not omit the hardware requirement section — it is the primary filter for this audience

**Prohibited phrases (orchestrator-specific):**
- "Your orchestrator will automatically..." (unless it actually does — verify first)
- "The network rewards you for..." (too vague — state the actual reward mechanism)
- "Easy to set up" / "Simple configuration"
- Any sentence that hedges earnings without stating the mechanism

---

### `developer` — code-first register

**Who:** Building things that run on the network. Custom pipelines, BYOC, protocol extensions, tooling. High technical literacy. Prefers reading code over reading prose.

**Register:** Code-first. Minimal prose. Show the thing, then explain if needed.

**Tone:** Technical precision. Peer-level. No ceremony.

**What to do:**
- Code example first, prose explanation second — not the other way around
- Function signatures, types, and interface definitions are primary content — not supplementary
- Reference the actual codebase when relevant: link to GitHub, not just describe the concept
- Be explicit about versions, breaking changes, and compatibility requirements
- State what the function/API/config does — not what it "helps you do"
- Error states, edge cases, and failure modes belong in the main content — not in a note at the end

**What NOT to do:**
- Do not write prose explanations of what the code already shows
- Do not use marketing language adjacent to technical content ("powerful AI pipeline" adjacent to `import livepeer`)
- Do not use `<Note>` or `<Info>` components for content that belongs in the main explanation
- Do not omit error states or edge cases — developers specifically need the full picture

**Prohibited phrases (developer-specific):**
- "Easily integrated with your existing..."
- "With just a few lines of code..."
- "The SDK makes it simple to..."
- "Don't worry about the details..." (developers worry about the details by definition)
- "As you may know..." (state it or don't — don't hedge the knowledge)

---

### `builder` — integration-focused register

**Who:** Building products using Livepeer APIs, SDKs, or hosted gateways. Outcome-focused. Consumes Livepeer as infrastructure for their product. Not running nodes.

**Register:** Integration-focused. Outcome-before-mechanism. API-centric. Assumes software engineering context but not protocol-level knowledge.

**Tone:** Direct and efficient. Treats the reader as a capable engineer who wants to ship.

**What to do:**
- Lead with what the integration gives the builder's product or users — not what Livepeer is
- State the exact API endpoint or SDK method first, then the context
- Show working code in the most-likely language (JS/TS first, then Python, then Go)
- Show the full request/response cycle — not just "call this endpoint"
- State prerequisites explicitly: which API keys, which SDK version, which plan or tier applies

**What NOT to do:**
- Do not explain the Livepeer network architecture to someone who wants to transcode a video
- Do not use node-operator or gateway terminology without translating it to integration implications
- Do not assume knowledge of web3 mechanics (gas, transactions, on-chain interactions) without framing
- Do not mix "how the protocol works" with "how to integrate" — these are separate pages

**Prohibited phrases (builder-specific):**
- "As you know, Livepeer is a decentralised..."
- "Built on blockchain technology..."
- Any opening that explains the network before the integration value
- "You can also..." when there is a clearly preferred path

---

### `delegator` — accessible, decision-support register

**Who:** Staking LPT tokens and participating in governance. May not have a technical background. Decision-making, not building.

**Register:** Accessible, plain-language, decision-support. A smart person who understands finance and risk but does not write code.

**Tone:** Clear, direct, without condescension. Treats the reader as a capable decision-maker — not a newcomer who needs everything explained from first principles every time.

**What to do:**
- Lead with the outcome: what does staking, delegating, or voting give them?
- Explain protocol-specific terms (LPT, orchestrator, reward cut) on first use — then use the term freely
- Use plain language for economics: "you receive X% of the rewards the orchestrator earns" not "you receive a proportional share of inflation-adjusted emissions"
- State the actual steps — not vague guidance ("stake your tokens" → explain exactly how)
- For governance: explain what is at stake in a vote before describing the mechanism

**What NOT to do:**
- Do not use code blocks or CLI commands — not their interface
- Do not assume knowledge of DeFi mechanics (impermanent loss, AMMs) without defining them
- Do not use node-operator hardware terminology (VRAM, GPU pipeline) — not relevant to this audience
- Do not write delegation or governance as "set and forget" — these change over time

**Prohibited phrases (delegator-specific):**
- "Simply stake your tokens to..."
- "As a delegator, you will automatically..."
- Any claim about earnings without stating the dependency (orchestrator performance, reward cut, protocol inflation rate)

---

### `community` — social/governance register

**Who:** Ecosystem participation — contributors, governance discourse participants, newcomers orienting themselves, researchers, internal teams.

**Register:** Inclusive, participatory. Peer-level social fabric — not technical-downward, not marketing-upward. Substantive: community pages give real information, not motivation-poster content.

**Tone:** Warm but not effusive. Concrete and actionable.

**What to do:**
- `explorer` persona: orient first, route second — they do not know their role yet
- `ambassador` persona: lead with programme mechanics (how to participate, what is required) — not values
- `engager` persona: governance process is the substance — how to participate, what the actual steps are
- `researcher` persona: cite primary sources; they are evaluating, not joining
- State what participation actually requires: time commitment, required skills, tools, credentials

**What NOT to do:**
- No "thriving community", "passionate contributors", "vibrant ecosystem" — state what the community does, not what it is
- No aspirational prose without concrete next steps
- Do not treat every community visitor as an ambassador — they may be a researcher or evaluator
- Do not duplicate role-specific content (protocol mechanics, technical setup) — link to the right tab

**Prohibited phrases (community-specific):**
- "Join our thriving community!"
- "Livepeer has a passionate and growing..."
- "Together, we can..."
- "The community is the heart of..."
- "Exciting opportunity to contribute"

---

### `founder` — business-executive register

**Who:** Evaluating Livepeer for their product or business. CEO/CTO decision-makers. Strategic, not operational.

**Register:** Executive summary style. Outcome and economics before mechanism. Business framing.

**Tone:** Direct, credible. Numbers over adjectives. No hype.

**What to do:**
- Lead with the business outcome: what does using Livepeer give this product or company?
- State unit economics and cost comparisons with actual numbers — "70% lower than AWS MediaConvert for 1080p" not "cost-effective"
- Frame technical details as business implications: "sub-3-second latency → usable for live commerce"
- Distinguish `technical` founder (CTO focus: architecture, reliability, integration) from `business` founder (CEO focus: cost, competitive fit, scale)
- `partner` persona: lead with process and programme mechanics (SPE applications, foundation contact, timeline)

**What NOT to do:**
- Do not open with protocol architecture ("Livepeer is a decentralised video infrastructure protocol...")
- Do not use node/operator terminology without translating to business impact
- Do not make unquantified comparative claims ("cost-effective", "highly reliable", "better performance")
- Do not bury the commercial case inside technical content

**Prohibited phrases (founder-specific):**
- "Powered by blockchain technology..."
- "The future of decentralised..."
- Any sentence that requires the reader to understand web3 before they can evaluate the product
- "Our ecosystem partners include..." (without names and specific integrations)

---

## UK English Reference

| US | UK |
|---|---|
| optimize | optimise |
| organize | organise |
| customize | customise |
| recognize | recognise |
| analyze | analyse |
| behavior | behaviour |
| color | colour |
| center | centre |
| license (noun/verb) | licence (noun) / license (verb) |
| practice (noun/verb) | practise (verb) / practice (noun) |
| labeled | labelled |
| canceled | cancelled |
| traveling | travelling |
| -ize endings | -ise endings (where both are standard: specialise, initialise, serialise) |

---

## Open questions for checkpoint

1. **gateway vs orchestrator register:** Currently described as "peer-to-peer technical" for both. Is there a meaningful distinction in register, or only in content domain (networking vs hardware)?

2. **developer register sub-variants:** The developer audience spans BYOC (deep protocol) through tooling builders (SDK consumers). Should the register have sub-variants, or does one code-first register serve all?

3. **community positive exemplars:** The current rules are prohibition-focused. Would a set of positive exemplar sentences per persona be more useful than prohibitions alone?

4. **founder register: technical vs business split:** Currently handled as a note. Should these be two separate register definitions, given they likely produce meaningfully different pages?
