# Exemplary Copy

> Pointer + analysis. Do not copy files — emulate the patterns.
> These pages demonstrate strong voice, openings, structure, and audience-appropriate tone.
> IMPORTANT: Only human-written copy is referenced here. AI-written copy in this repo frequently breaks content rules.

---

### Gateway Quickstart (Human-Written — Gold Standard)

**File:** `v2/gateways/quickstart/gateway-setup.mdx`

**Why it's good:** Alison wrote this page. The opening is direct and value-led: tells you what you will get (gateway node for Video + AI), not what Livepeer is. Badge colour coding (blue=Video, purple=AI) is used inline within prose to visually distinguish workload types. The "This guide includes" section uses icon-label pairs for scannability. Technical terms are used without apology — the audience is operators, not newcomers.

**Key patterns:**
- Value-led opening: what you will have, not what Livepeer is
- Badge + Icon inline for visual categorisation within prose
- "This guide includes" as a scannable list with icons
- No preamble — first sentence after the title is immediately useful
- Technical terms used directly — no condescending explanations of "what a gateway is"
- Informal but professional tone: "Let's Go(-Livepeer) !" — personality without cringe

**Watch out:** This is operator-audience copy. Do not replicate the informal tone for About or Delegator audiences.

---

### Livepeer Primer (Human-Written)

**File:** `v2/home/primer.mdx`

**Why it's good:** Alison wrote this page. Opens with a community-first framing (GIF + welcoming statement), then transitions to "What Is Livepeer?" and "Why Livepeer" in clean H2 sections. The prose is short, declarative, and avoids web3 jargon. "Livepeer is the open video compute layer for the AI era" — one sentence, no qualifiers.

**Key patterns:**
- Community-first opening: inclusive, welcoming, human
- One-sentence definition with no qualifiers or hedging
- Card with CustomCardTitle for CTA routing
- Commented-out sections preserved with context (video embed, resource links) — shows editorial thinking
- "Why Livepeer" uses bullet structure, not paragraphs — scannable
- No em-dashes (uses standard dashes)

**Watch out:** Some content is commented out (video section). The live copy is the reference, not the comments.

---

### Solutions Tab Pages (Human-Written)

**File:** `v2/solutions/daydream/overview.mdx` (and all solutions overview pages)

**Why it's good:** Alison wrote these. Consistent template across all 5 products: IconBadgeWrapper + BadgeWrapper for technology stack → SocialLinks in BorderedBox → Info callout for team/support → Video/Image hero → product description → Livepeer connection. Data is separated into per-product `data/` folders (badges, infra, socials). The prose explains what the product IS, then how it connects to Livepeer — not the other way around.

**Key patterns:**
- Product-first framing: what it does, THEN how it uses Livepeer
- Consistent template: badges → socials → hero → description → connection
- Per-product data folders (`data/badges.jsx`, `data/infra.jsx`, `data/socials.jsx`)
- Info callout for team attribution and support channel
- Video component for product demos
- Bold + linked key terms on first use

**Watch out:** The template is consistent but not yet formalised as a composable. The data folder pattern is aspirational — see `data-patterns.md` for analysis.

---

### Home Tab Pages (Mostly Good)

**Files:** `v2/home/about-livepeer/ecosystem.mdx`, `v2/home/about-livepeer/evolution.mdx`, `v2/home/primer.mdx`

**Why it's good:** These pages target the broadest audience ("everyone") and use accessible language without dumbing down. UK spelling throughout. Fact-led paragraphs. No questions in headings. Values and entities are listed, not narrated.

**Key patterns:**
- Audience: everyone — accessible but not condescending
- UK spelling: organisation, decentralised, recognised
- Fact-led paragraphs: lead with the fact, end with the fact
- No questions in headings (content rule)
- Lists over paragraphs for scannable content

**Watch out:** Some pages have AI-generated or placeholder content mixed in. Always verify the copy you're emulating is from a human-written section.