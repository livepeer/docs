# **Livepeer Documentation — Brand & Copy Guide**

How Livepeer documentation SOUNDS. Voice, tone, terminology, and messaging rules for anyone writing content for docs.livepeer.org.

**This is NOT the Style Guide.** The Style Guide (in `style-guide.mdx`) covers formatting mechanics — CSS, components, Mintlify gotchas, headings, code blocks, git workflow. This document covers what you WRITE, not how you FORMAT it.

**Status:** Active. Canonical for docs.livepeer.org/v2. **Sources:** Foundation Messaging House, Brand Strategy analysis, Homogenise Styles outline, persona journey definitions (01).

## **The Livepeer Documentation Voice**

### **Identity**

Livepeer documentation speaks as **a knowledgeable colleague** — not a professor, not a marketer, not a chatbot. The reader is capable and the docs respect their time.

The Foundation Messaging House defines the project voice around transparency, candour, performance, and inclusivity. In documentation, this translates to:

- **Transparent:** State what works, what doesn't, what's coming, what's missing. No handwaving.
- **Candid:** Honest about tradeoffs, costs, and complexity. Don't oversell.
- **Performant:** Dense with useful information. No filler, no corporate padding.
- **Inclusive:** Accessible to people who aren't already Livepeer insiders.

### **Register**

Professional but approachable. Technically precise without being academic. The difference between a senior engineer explaining to a competent colleague and a professor lecturing students.

### **Point of View**

- **Second person ("you")** for instructions, guidance, and anything directed at the reader.
- **Third person** for system descriptions: "Orchestrators process jobs." "The gateway routes requests."
- **Never first person plural.** Not "we believe" or "our network." Livepeer is a protocol, not a company talking at you. Exception: the Community tab may use "we" when speaking as the community.

## **Language Standard: British English (en-GB)**

All Livepeer documentation uses **British English** spelling and conventions.

### **Spelling**

| **Use (en-GB)** | **Not (en-US)** |
| --- | --- |
| colour | ~~color~~ |
| organise | ~~organize~~ |
| optimise | ~~optimize~~ |
| recognise | ~~recognize~~ |
| decentralised | ~~decentralized~~ |
| licence (noun) | ~~license~~ |
| defence | ~~defense~~ |
| programme (general) | ~~program~~ (exception: "program" for computer programs) |
| behaviour | ~~behavior~~ |
| analyse | ~~analyze~~ |
| fulfil | ~~fulfill~~ |
| modelling | ~~modeling~~ |

**Exception:** Code, CLI flags, and API parameters keep their canonical spelling regardless of locale. `--maxPricePerUnit` stays as-is. Technical identifiers are never localised.

### **Punctuation and Conventions**

- **Oxford comma:** Yes. "Orchestrators, gateways, and delegators."
- **Dates:** Day Month Year. "7 March 2026."
- **Quotation marks:** Double for direct quotes. Single for quotes within quotes.
- **Thousands separator:** Comma. "1,000" not "1000." Exception: port numbers and technical values stay as-is.

**Enforced by:** `cspell.json` (locale: en-GB), `style-language-profile-en-gb.json` (forbidden US terms), `style-and-language-homogenizer-en-gb.js`.

## **Terminology**

### **Canonical Terms**

Use consistently. Don't alternate with synonyms.

| **Canonical Term** | **NOT This** | **Why** |
| --- | --- | --- |
| orchestrator | node operator, miner, GPU provider | Livepeer-specific role with governance + compute + staking |
| gateway | broadcaster (v1 term), relay, proxy | v2 terminology; broadcaster was deprecated |
| delegation | staking (when referring to delegators) | Staking is what orchestrators do. Delegators delegate. |
| LPT | Livepeer token (after first mention) | Spell out on first use per page, then abbreviate |
| Arbitrum | L2, layer 2 (without specifying) | "On Arbitrum One" not "on L2" |
| go-livepeer | the Livepeer node, the binary | Always lowercase hyphenated |
| Explorer | the dashboard, the staking UI | Capitalise as product name |
| pipeline | model, endpoint (for AI) | AI pipelines is the canonical term |
| BYOC | custom containers | Spell out "Bring Your Own Container" on first use |

### **Terms Requiring First-Use Definition**

Any Awareness-phase page must define these on first use or link to the Glossary:

orchestrator · gateway · delegation · staking · bonding · unbonding · reward cut · fee share · clearinghouse · pipeline · BYOC · SPE · LPT · LIP

### **Banned Words and Phrases**

| **Don't Say** | **Say Instead** | **Why** |
| --- | --- | --- |
| "simply" / "just" / "easily" | (remove) | Lies to struggling readers |
| "leverage" | "use" | Corporate jargon |
| "utilise" / "utilize" | "use" | Same |
| "in order to" | "to" | Filler |
| "it should be noted that" | (just say the thing) | Filler |
| "please note that" | (just say the thing) | Same |
| "best-in-class" | (state the specific advantage) | Meaningless marketing |
| "seamless" / "seamlessly" | (describe the actual experience) | Overused, never true |
| "cutting-edge" | (state what's new about it) | Empty superlative |
| "world-class" | (provide evidence instead) | Unverifiable |

## **Voice by Page Type**

The universal voice above applies everywhere. These are modulations per page type.

### `landing`** — The Host at the Door**

Fast. Low technicality. High warmth. Zero action — routes only.

✅ "What do you want to build?" [routing cards] ❌ "Welcome to the Livepeer Developer Documentation. In this section, you will find comprehensive resources..."

### `overview`** — The Colleague Giving Context**

Medium pace. Low-medium technicality. High warmth. Explains WHAT and WHY, not HOW.

✅ "Gateways earn fees by routing client requests to the orchestrators best suited to process them." ❌ "The Livepeer gateway architecture provides a sophisticated middleware layer that enables decentralised request routing..."

### `concept`** — The Teacher at the Whiteboard**

Deliberate pace. High technicality (define terms). Medium warmth. Explains mechanisms.

✅ "When a delegator bonds LPT to an orchestrator, the protocol calculates their proportional claim on both inflationary rewards and fee income." ❌ Same sentence without first defining "bonds", "inflationary rewards", or "fee income."

### `tutorial`** — The Pair Programmer**

Tight pace. Medium technicality. Every sentence acts. Exact commands, not paraphrased.

✅ "Run `livepeer -gateway`. You should see `Server started on port 8935`. If you don't, check that port 8935 isn't already in use." ❌ "You will now want to execute the gateway startup command, which will initialise the server."

### `how_to`** — The Operations Manual**

Tight pace. Medium-high technicality. Assumes competence (tutorial complete). Self-contained tasks.

✅ "Set `--maxPricePerUnit` to your per-pixel ceiling. This prevents your gateway from overpaying for transcoding." ❌ "Now that you understand how pricing works, let's configure the maximum price setting."

### `guide`** — The Strategy Adviser**

Medium pace. Medium technicality. Mix of explanation and practical.

✅ "Most operators start with text-to-image because it has consistent demand. Image-to-video requires more VRAM but commands higher fees." ❌ "This guide will walk you through the various considerations involved in selecting which AI pipelines to configure..."

### `reference`** — The Spec Sheet**

Minimal prose. High technicality. Tables and lists do the work. Lookup only.

✅ `--network` \| `string` \| `mainnet` \| Sets the network. Values: `mainnet`, `arbitrum-one-rinkeby`. ❌ "The network flag allows you to specify which network your node will connect to."

### `faq`** — The Support Engineer**

Conversational. Medium technicality. High warmth. Questions phrased as readers ask them.

✅ "Your rewards depend on your orchestrator's performance and fee share. If rewards seem low, check the Explorer for their recent uptime." ❌ "Reward distribution is a function of the orchestrator's reward cut parameter and their participation in work verification rounds."

### `troubleshooting`** — The Incident Responder**

Urgent but calm. Medium-high technicality. Solution-focused. Organised by SYMPTOM.

✅ "**Gateway returns 503.** The orchestrator it tried to reach is likely offline. Check the marketplace for alternatives." ❌ "Error 503 is an HTTP status code indicating that the server is temporarily unavailable."

### `glossary`** — The Dictionary**

Terse. Medium technicality. Accessible definitions.

✅ "**Orchestrator** — A network participant running GPU infrastructure that processes video transcoding and AI inference jobs." ❌ "Orchestrator: see the Orchestrator Overview page for details."

## **Copy Rules**

### **Do**

- **Lead with the reader's benefit.** "You earn fees by routing requests" not "The protocol distributes fees."
- **Show the positive of Livepeer.** Decentralisation, censorship resistance, open participation, community ownership.
- **State tradeoffs honestly.** "This is easier but gives you less control." "Earnings depend on demand, which varies."
- **Use concrete numbers where available.** "Requires ~32GB VRAM" not "requires significant GPU memory."
- **Define jargon on first use** or link to the Glossary.
- **End every non-reference page with a next step.** No dead ends.

### **Don't**

- **Don't compare negatively to specific competitors.** Don't say "unlike Mux, Livepeer offers..." Instead state the advantage directly.
- **Don't use centralised services as a straw man.** Respect the reader's context.
- **Don't speculate on token price or investment returns.** Per the Foundation Messaging House: "The Foundation does not comment on token value."
- **Don't promise specific earnings figures.** Use ranges and "depends on demand" qualifiers.
- **Don't use "we" or "our"** in technical documentation. Exception: Community tab.
- **Don't assume prior Livepeer knowledge.** Even deep pages should contextualise for someone arriving via deep link.

## **Page Opening and Closing Patterns**

### **Openings**

| **Page Type** | **Pattern** | **Example** |
| --- | --- | --- |
| landing | 1-sentence value prop + routing | "Build on Livepeer. Choose your path:" |
| overview | What this is, 1-2 sentences | "Gateways sit between your application and the GPU network." |
| concept | Definition, 1 paragraph | "Delegation is the process of bonding your LPT to an orchestrator." |
| tutorial | Goal statement | "By the end of this guide, you'll have a running gateway processing its first job." |
| how_to | Task statement | "This shows you how to configure AI pipeline pricing on your gateway." |
| guide | Scope statement | "This guide covers model selection strategy for orchestrators running AI pipelines." |
| reference | What's documented | "CLI flags for go-livepeer in gateway mode." |

### **Closings**

| **Page Type** | **Pattern** |
| --- | --- |
| landing | Returning-user shortcuts |
| overview | "What to do next" cards |
| concept | "Now see [tutorial] to do this yourself" |
| tutorial | "Next steps" with 2-3 options |
| how_to | "Related" links to other how-tos |
| guide | Key takeaways + reference links |
| reference | Link to related how-to |
| faq | "Didn't find your answer?" → escalation |
| troubleshooting | Escalation: Discord, Forum, GitHub |

### **Callout Voice**

| **Type** | **Voice** | **Example** |
| --- | --- | --- |
| Note | Informational, neutral | "This applies to Arbitrum One mainnet. Testnet configuration differs." |
| Tip | Helpful, suggests improvement | "Docker is the recommended install method for most users." |
| Warning | Caution, prevents mistakes | "This operation is irreversible. Back up your configuration first." |
| Danger | Urgent, prevents damage | "Do not share your private key. Anyone with it can control your node." |

## **Description Metadata — The Most Important Field**

The frontmatter `description` field is the primary searchable for AI assistants and search engines. It is the single most important piece of copy on any page.

**Rules:**

- 1-2 sentences. Concise but descriptive.
- Describes what the page PROVIDES to a reader (not what Livepeer is).
- Not just the title repeated.

✅ `description: "Step-by-step guide to install, configure, and register a Livepeer gateway node on Arbitrum mainnet."` ❌ `description: "Gateway setup guide."` ❌ `description: "Learn about gateways in the Livepeer network."`

## **Quick Reference Card**

**Voice:** Knowledgeable colleague. Second person. Honest about tradeoffs. **Language:** British English. Oxford comma. Day-Month-Year dates. **Never say:** simply, just, easily, leverage, utilise, seamless, best-in-class, cutting-edge **Always do:** Define jargon on first use. End with next steps. Lead with reader benefit. **Always don't:** Compare negatively to competitors. Promise earnings. Use "we/our." Assume prior knowledge. **Terminology:** orchestrator (not miner), gateway (not broadcaster), delegation (not staking for delegators) **Description metadata:** 1-2 sentences, reader-benefit, not title repeated. This is the AI/SEO primary field.