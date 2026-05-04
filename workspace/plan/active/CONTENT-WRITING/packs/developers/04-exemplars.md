# 04 — Exemplars (Developers)

> Pointer + analysis. Read the source files; emulate the patterns. Do not copy verbatim.
> All exemplars are **human-written or audited**. AI-written drafts in `v2/developers/` frequently break the rules — flag and rewrite.

---

## E1 — Gateway Quickstart (gold standard, operator register)

**File:** `v2/gateways/quickstart/gateway-setup.mdx`
**Audience:** operator (closest cousin to `developer`).

**Why it works:**
- Opening is value-led: tells you what you will have at the end (gateway node for Video + AI), not what Livepeer is.
- Badge / icon pairing for visual categorisation within prose (Video / AI / dual).
- "This guide includes" scannable list with icons.
- Technical terms used directly. No condescending re-explanations of "what a gateway is".
- Informal but professional opener ("Let's Go(-Livepeer)!") — personality without cringe.

**Patterns to emulate for `developer` pages:**
- Lead with what the reader will have at the end, not with prose about Livepeer.
- Use technical terms from first sentence.
- No `<Note>` for content that belongs in the body.

**Watch out:** This is operator audience. Do not transplant the informal opener into builder pages — match the register.

---

## E2 — Solutions Overview Pages (builder register)

**Files:** `v2/solutions/daydream/overview.mdx` (and the four other solutions overview pages — Studio, Streamplace, Catalyst, Pipeline).
**Audience:** builder (product framing).

**Why it works:**
- Product-first framing: what the product does, **then** how it connects to Livepeer.
- Consistent template across five products: badges → social links → hero → description → Livepeer connection.
- Per-product `data/` folders for badges, infra, socials — keeps MDX thin and presentational.
- Bold + linked key terms on first use. Subsequent mentions are naked.

**Patterns to emulate for `builder` pages (e.g. concepts/video-on-livepeer, build/sdk-gateway):**
- State integration outcome first, network architecture second.
- Use a consistent block order: prerequisites → endpoint or method → request/response → errors → next step.
- Bold + link the first occurrence of every Livepeer-specific term.

**Watch out:** Solutions pages are product narrative. Developers pages are integration. Same register, different deliverable.

---

## E3 — Home Tab Pages (entity-led voice)

**Files:** `v2/home/primer.mdx`, `v2/home/about/ecosystem.mdx`, `v2/home/about/evolution.mdx`.
**Audience:** community / explorer (closest cousin pattern: paragraph-level discipline).

**Why it works:**
- Fact-led paragraphs: lead with the fact, end with the fact. No hedge.
- UK spelling throughout (organisation, decentralised, recognised).
- One-sentence definitions with no qualifiers ("Livepeer is the open video compute layer for the AI era").
- No questions in headings. No first-person plural.
- Lists over paragraphs for scannable content.

**Patterns to emulate for any Developers page:**
- Definitions in a single sentence, no hedge.
- UK English in prose; codes / identifiers untouched.
- Headings are noun phrases, not questions.

**Watch out:** Some pages have AI-drafted patches mixed in. Verify the section you are emulating is human-written before copying its register.

---

## E4 — Workload Fit (current developer page that already works)

**File:** `v2/developers/build/workload-fit.mdx`
**Audience:** builder (decision aid, currently `current` status).

**Why it works:**
- Decision tree (text-based) is the page. No long preamble.
- Capability matrix: rows are workload classes (audio, vision, video, text), columns are status (supported, BYOC-only, not yet). Reader scans and decides.
- Anti-patterns explicitly named ("batch file-based jobs without streaming output, latency-insensitive workloads better suited to centralised providers"). The page is honest about where Livepeer is the wrong choice.
- ASR examples concrete: "live captions for video streams", "multilingual live translation", "voice-driven avatars or agents", "live moderation and safety". Not abstract.

**Patterns to emulate:**
- Lead with the decision tree or matrix. Prose is connective tissue, not the substance.
- State anti-patterns and out-of-scope cases directly. Trust the reader to make the call.
- Examples are named use cases, not adjectives.

**Watch out:** The frontmatter `purpose: concept` is deprecated — when you edit, fix to `evaluate` or `choose`.

---

## E5 — BYOC Page (current developer page; pattern to emulate)

**File:** `v2/developers/build/byoc.mdx` (current size 12.8 KB; status `draft`).
**Audience:** developer (deep technical).

**Why it works (where it does):**
- Step-numbered structure: "Step 1 — Implement Your Processor", "Step 2 — Define the REST API Contract", etc. Each step has a code block.
- Architecture diagram explained in one paragraph, not three.
- Variant section ("ComfyStream as a BYOC container", "Python-native processing (no Docker)") at the end — does not interrupt the main flow.
- PyTrickle `StreamServer` REST contract listed as a four-row table — reader sees the surface in one glance.

**Patterns to emulate for any `developer` instruction page:**
- Numbered steps. Each step has either a code block or a config snippet.
- Code first, prose only where code does not show the thing.
- Variants and edge cases at the end, never woven into Steps 1–N.

**Watch out:** The page has an unresolved `[REVIEW]` flag on `go-livepeer` BYOC flag names. When you edit, verify against `go-livepeer` master before unflagging.

---

## Common patterns across all five exemplars

| Pattern | Why |
|---|---|
| Open with the substance, never the page metadata | Reader's time is the budget |
| Specific numbers and names everywhere | Every paragraph passes the density test |
| Tables for scannable comparisons | Decision aids, not prose lists |
| Code blocks language-tagged | Hook enforcement; copyable; renders correctly |
| Honest about limits and anti-patterns | Earns trust; differentiates from marketing |
| First-person plural absent | Engineers do not respond to "we" |
| `<Note>` and `<Info>` reserved for genuine asides | Main content lives in main content |
