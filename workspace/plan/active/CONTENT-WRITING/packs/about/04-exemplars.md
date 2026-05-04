# 04 — Exemplars

Short passages from existing repo content that hit the target voice. Read these when uncertain about register or opening. Pointer + analysis only — emulate the patterns, do not copy.

Source for selection: `.claude/references/copy/exemplars.md`, `attachments/v2-content.md`, and direct reads of named pages.

---

## Exemplar 1 — Mental Model opening (community, technical depth)

**Source:** `v2/about/mental-model.mdx` (existing About page; one of the two strongest in the tab per the audience design)
**Audience:** community (primary), developer secondary
**Why it works:**

> Livepeer is a crypto-economic coordination protocol that secures a global, on-demand GPU network optimised for low-latency video and AI, and exposed through developer-friendly platforms and applications.
>
> You can think of Livepeer as a decentralised serverless GPU fabric with a cryptoeconomic control plane, where services are exposed through a set of developer-friendly products and applications.

- Lead sentence is a one-line definition with no qualifier or hedge. It says what Livepeer **is**, not what it claims to do.
- The second sentence delivers the mental model frame ("decentralised serverless GPU fabric with a cryptoeconomic control plane") that the rest of the page expands. It earns the frame by specifying what is being replaced — a centralised control plane.
- No banned words. No first person plural. No "this page". Subject-led, fact-led.
- Technique to emulate: when the first sentence has to define a complex system, deliver the definition naked and follow it with the load-bearing analogy, in that order.

---

## Exemplar 2 — Marketplace technical opening (founder + developer)

**Source:** `v2/about/livepeer-network/marketplace.mdx`
**Audience:** founder (primary), developer (secondary)
**Why it works:**

> The Livepeer Network supports a dynamic decentralised marketplace for real-time media compute. Unlike static infrastructure platforms, Livepeer's open marketplace introduces real-time bidding, routing, and pricing of jobs across a global pool of Orchestrators.
>
> This market is continuous — Orchestrators are always available for sessions; Gateways route work off-chain without per-job on-chain gas.

- Opens with the system fact (what the marketplace does) and immediately contrasts with the comparison class ("static infrastructure platforms"). The reader knows in two sentences what they are looking at.
- "This market is continuous" is a load-bearing claim followed by the mechanism that makes it continuous. No hedging, no "could potentially", no "may be able to".
- Specificity: "real-time bidding, routing, and pricing" names three concrete operations rather than one abstract one.
- Technique to emulate: when the page job is to differentiate, name the comparison class and state the difference in concrete operations, not adjectives.
- Note: existing copy uses "Unlike static" which is a `not [X]` construction. In a rewrite, replace with the positive frame ("Livepeer's marketplace bids, routes, and prices jobs in real time across a global Orchestrator pool"). The opening **structure** is the exemplar; the literal sentence has a banned construction in it.

---

## Exemplar 3 — Job lifecycle (developer, technical density)

**Source:** `v2/about/livepeer-network/job-lifecycle.mdx`
**Audience:** developer (primary)
**Why it works:**

> 1. Ingest and segmentation: Gateway receives RTMP stream and produces segments.
> 2. Discovery and selection: Gateway selects an Orchestrator set according to discovery logic.
> 3. Price and session parameters: Orchestrators advertise price per pixel (Wei denominated) off-chain.
> 4. Segment dispatch and compute: Gateway uploads segments; Orchestrator executes transcoding/AI compute locally or delegates to attached transcoder processes.

- Each numbered step is a short, declarative sentence containing a specific noun, verb, and object. No hedging.
- Step 3 names the unit ("Wei denominated") — the kind of detail that converts a sentence from filler to fact.
- The list is a list because there is sequential mechanism. Bullets are not avoidance here; they are the right shape for the job.
- Technique to emulate: when explaining a multi-step process to a developer, give each step a noun-led label and a one-clause mechanism. Do not pad. Do not narrate.

---

## Exemplar 4 — Solutions overview opening (founder, product-first)

**Source:** `.claude/references/copy/exemplars.md` cites `v2/solutions/daydream/overview.mdx` and the Solutions tab pattern more broadly
**Audience:** founder, builder
**Why it works (per `references/copy/exemplars.md`):**

> The prose explains what the product IS, then how it connects to Livepeer — not the other way around.

- Pattern: product-first framing. Lead with the capability the reader cares about (the product) and only then locate it in the larger network (Livepeer).
- This is the inverse of the lazy default ("Livepeer is a decentralised network for…"). For founder-audience pages, the founder cares about the product first; the protocol second.
- Technique to emulate: on `evaluating-livepeer.mdx`, lead with what the founder gets ("Livepeer provides video and AI compute as a marketplace…"), then locate that in the protocol stack only when the reader needs it.
- Note: this exemplar is referenced but not copied — read the actual file when authoring `evaluating-livepeer.mdx`.

---

## Exemplar 5 — Voice rules positive sample (community register)

**Source:** `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` (positive exemplars section)
**Audience:** community
**Why it works:**

> Livepeer is a decentralised video infrastructure network. Participants can run infrastructure as a gateway or orchestrator, build products using the API, stake LPT as a delegator, or contribute to the ecosystem. Start with the section that fits your role.

- Two sentences cover: what Livepeer is, what the four participation paths are, what the reader does next.
- Density target met in every sentence: each one carries a fact, a participation role, or an action.
- "Start with the section that fits your role" is an actionable next step, not a hedge or invitation.
- Technique to emulate: navigator-style pages should land the definition, the option set, and the action in three sentences. Do not pad with welcome prose.

---

## Anti-pattern reference — community register, banned phrases

When tempted to write community-register copy that reads like marketing, return here:

> Livepeer is a powerful decentralised video infrastructure protocol that essentially allows various participants to engage in a thriving ecosystem of transcoding services. Understanding how the network functions is essential before you start building.

This is the bad-good rewrite from `03-voice-and-anti-lazy.md` Section D.3. Every banned word and phrase you might be about to write is in this paragraph. Replace it with the rewrite shown there.
