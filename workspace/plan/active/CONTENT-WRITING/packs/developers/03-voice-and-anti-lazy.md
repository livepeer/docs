# 03 — Voice and Anti-Lazy Enforcement (Developers)

**Read this BEFORE writing or reviewing any sentence.** This file is the quality bar.
If your output violates anything here, your output is rejected. There is no soft tier.

---

## Section A — Base voice (universal, always)

You are a senior engineer writing for a senior engineer. Not a marketer. Not a tour guide. Not an SDK evangelist.

- **Transparent.** State what works, what does not, what is alpha. No handwaving.
- **Candid.** Honest about tradeoffs, costs, and limits. Do not oversell.
- **Performant.** Dense with code, function signatures, version numbers, error types. No filler.
- **Inclusive.** Accessible to engineers who are not already Livepeer insiders.
- **Person.** Second person ("you") for instructions. Third person for system descriptions. **Never first person plural** ("we believe", "our SDK").

**Opening order on every page and every paragraph:**
Code or fact before mechanism. Endpoint or function before context. Reader benefit before architecture.

**Paragraph discipline:**
One paragraph, one job. Lead sentence states the fact. Final sentence ends on a fact, signature, version, or next step — never a hedge.

---

## Section B — Universal blocking rules (zero tolerance)

Hard blocks. Audience-specific rules layer on top — they never override these.

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
- "The SDK makes it simple…"
- "Easily integrated with your existing…"
- "As you may know…"
- "Don't worry about the details"
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
- Question as section heading ("How do I configure X?") → make it declarative
- First-person plural ("we", "our") — never
- `<Note>` or `<Info>` for content that belongs in the main flow — promote to the body

### B.4 UK English (always; code stays as-is)

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

Code identifiers and library names stay as published — `customize` if it's an actual prop name, `colorMode` if it's an actual export. The rule applies to prose only.

---

## Section C — Audience registers

This tab serves two registers. The page brief in `02` names which one applies. Never blend.

### C.1 `developer` — code-first register

Building things that run on the network. Custom containers, BYOC, protocol extensions, contributor work on `go-livepeer`, `ai-runner`, `ComfyStream`, `pytrickle`, `protocol`. High technical literacy. Reads code faster than prose.

**What to do:**
- Code example first; prose explanation only where the code does not show the thing.
- Function signatures, types, interface definitions are primary content — not supplementary.
- Reference the actual codebase. Link GitHub at the file or function level when the function exists upstream.
- Be explicit about versions: `livepeer@3.5.0`, `ai-runner v0.14.1`, `go-livepeer v0.8.10`, `@livepeer/react@4.3.2`. State breaking changes.
- State what the function / API / config does, not what it "helps you do".
- Error states, edge cases, failure modes belong in main content — not in a trailing `<Note>`.

**What NOT to do:**
- Prose paraphrases of what the code already shows.
- Marketing language adjacent to technical content ("powerful AI pipeline" next to `import`).
- `<Note>` / `<Info>` for content that belongs in the main explanation.
- Hide error cases at the bottom — developers came for those specifically.

**Prohibited (developer-specific):**
- "Easily integrated with your existing…"
- "With just a few lines of code…"
- "The SDK makes it simple to…"
- "Don't worry about the details…"
- "As you may know…"

### C.2 `builder` — integration-focused register

Building products with Livepeer as infrastructure. Wants to ship. Software engineering context but not protocol-level knowledge.

**What to do:**
- Lead with what the integration gives the product or its users — not what Livepeer is.
- State the exact endpoint or SDK method first; context after.
- Working code in the most-likely language (JS/TS first, then Python, then Go).
- Show the full request → response cycle. Include the response shape.
- State prerequisites explicitly: which API key type, which SDK version, which plan, which rate limit.

**What NOT to do:**
- Explain the network architecture to someone who wants to transcode video.
- Use orchestrator / gateway terminology without translating to integration impact.
- Assume web3 mechanics (gas, on-chain interactions) — frame them or skip them.
- Mix "how the protocol works" with "how to integrate" — those are separate pages.

**Prohibited (builder-specific):**
- "As you know, Livepeer is a decentralised…"
- "Built on blockchain technology…"
- Any opening that explains the network before the integration value.
- "You can also…" when there is a clearly preferred path.

### C.3 Choosing the language order

When code blocks appear:

1. **JS/TS first** — Studio SDK `livepeer@3.5.0` for video-and-AI; `@livepeer/ai` (alpha) for AI-only.
2. **Python second** — Studio `livepeer` PyPI 0.3.0; `livepeer-ai` (alpha) for AI-only.
3. **Go third** — `github.com/livepeer/livepeer-go`; `github.com/livepeer/livepeer-ai-go` (alpha).
4. **curl** before SDKs in quickstart pages, because curl exposes the wire format. Then the same call in the SDKs above.

For developer-register pages where the canonical implementation is Python (PyTrickle, ai-runner), Python comes first.

---

## Section D — The anti-lazy layer

Voice rules tell you what NOT to write. This section tells you what to write **instead**, and how to detect your own laziness before it ships.

### D.1 The specificity rule

> **If you cannot make a sentence specific — name a function, an endpoint, a version, a file, a model ID, a port, a config flag, an error code — cut the sentence.**

Padding without specificity is the single largest source of bad output. A sentence that "feels right" but contains no commitment is filler. Cut it.

### D.2 The seven lazy patterns — recognise and replace

| # | Lazy pattern | Why it fails | Replace with |
|---|---|---|---|
| 1 | **Hedge-and-pad.** "Livepeer's AI pipelines support a wide variety of generative tasks…" | Empty calories. Says nothing. | Name the count, name the pipelines. "Nine batch pipelines: text-to-image, image-to-image, image-to-video, image-to-text, audio-to-text, text-to-speech, upscale, segment-anything-2, llm." |
| 2 | **Meta-prose.** "This page walks you through how to build a BYOC container." | Talks about the page instead of being the page. | Delete. Open with content. "A BYOC container exposes four endpoints: `POST /api/stream/start`, `POST /api/stream/params`, `GET /api/stream/status`, `POST /api/stream/stop`." |
| 3 | **Capability hand-waving.** "You can build powerful AI applications with the SDK." | No mechanism, no number, no commitment. | State the call. "`livepeer.generate.textToImage({ prompt, model_id })` returns `{ images: [{ url, seed }] }`." |
| 4 | **Definitional drift.** Defining BYOC three different ways across the page. | Reader stops trusting the definition. | Define once at first use. Use the term naked thereafter. |
| 5 | **Prompt restatement.** Opening with "In this guide, you'll learn how to…". | Wastes the lead sentence. | Cut the preamble. "A `FrameProcessor` subclass receives a `VideoFrame` (PyTorch tensor) and returns a `VideoFrame`." |
| 6 | **Adjective stack.** "Decentralised, scalable, secure, performant" as substance. | Adjectives are not facts. | Replace each adjective with the underlying claim. "ComfyStream runs at up to 25 FPS on RTX 4090. PyTorch 2.5.1+cu121, CUDA 12.5, FFmpeg required." |
| 7 | **Bullet list as avoidance.** Three-word bullets that hide the absence of any actual claim. | Looks structured. Is hollow. | Either prose with specifics, or expand each bullet to a complete sentence with a real commitment. |

### D.3 Bad → good rewrites (developer / builder examples)

#### `builder`: AI quickstart opening

Bad:
> Livepeer is a powerful decentralised network that essentially enables developers to easily integrate AI inference into their applications. With just a few lines of code, you can start generating images, transcribing audio, and so on.

Good:
> `POST https://livepeer.studio/api/beta/generate/text-to-image` with `Authorization: Bearer <STUDIO_API_KEY>` and a JSON body `{ "prompt": "…", "model_id": "SG161222/RealVisXL_V4.0_Lightning" }` returns `{ images: [{ url, seed }] }`. Cold-model first calls take 30 s to several minutes; warm calls return immediately.

#### `developer`: BYOC architecture opening

Bad:
> BYOC is a powerful capability that allows developers to bring their own AI models to Livepeer. The system makes it easy to deploy custom containers and the SDK simplifies the integration process.

Good:
> A BYOC container subclasses `pytrickle.FrameProcessor`, implements `process_frame(self, frame: VideoFrame) -> VideoFrame`, and is wrapped by PyTrickle's `StreamServer` (four REST endpoints: `/api/stream/start`, `/params`, `/status`, `/stop`). Deploy with `go-livepeer -byoc -byocContainerURL=<url> -byocModelID=<id>`. The orchestrator runs the container; the gateway routes frames over the trickle protocol.

#### `builder`: SDK install

Bad:
> The Livepeer SDK can help you easily get started with our APIs. Simply install the package and you'll be ready to go!

Good:
> `npm install livepeer@3.5.0`. Initialise with `new Livepeer({ apiKey: process.env.LIVEPEER_API_KEY })`. The Studio SDK exposes `livepeer.stream.create(...)`, `livepeer.asset.create(...)`, and `livepeer.generate.textToImage(...)`. AI-only? Use `@livepeer/ai` (alpha).

#### `developer`: Error handling

Bad:
> Sometimes things may go wrong. The SDK will return an error and you can handle it accordingly. Don't worry, this is easy.

Good:
> `livepeer.generate.textToImage(...)` throws three error types: `HTTPError` (400/401/500), `HTTPValidationError` (422), `SDKError` (catch-all 4XX/5XX). 401 means invalid or expired Bearer key. 422 means an invalid `model_id` or malformed body — inspect `error.detail`. 500 with no body usually means a cold-model timeout — retry after 60 s.

#### `builder`: Pricing claim

Bad:
> Livepeer offers great value for AI inference compared to other providers.

Good:
> Text-to-image inference is orchestrator-set at approximately 1.9×10⁻⁸ USD per output pixel — about $0.019 per megapixel. Studio video tier: Free (1,000 transcoding min/mo), Growth ($100/mo minimum, $0.33 / 60 min), Enterprise ($2,500/mo annual commit).

### D.4 The "what would a senior engineer write" test

Imagine you are leaving a code-review comment for a peer. Would you write the sentence you just wrote? If it sounds like marketing, a brochure, or an SDK launch blog post, rewrite it.

If a senior engineer would skim past it and call it filler, cut it.

### D.5 Density target

Every paragraph contains at least one of:
- A specific endpoint (`POST /text-to-image`)
- A specific function or method (`livepeer.generate.textToImage`)
- A specific version (`livepeer@3.5.0`, `ai-runner v0.14.1`)
- A specific file path or repo (`livepeer/pytrickle`, `byoc/byoc.go`)
- A specific config flag, env var, port, or model ID
- A specific error code or numeric limit
- A specific action the reader takes next, with the link

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
| `reference` | 200–500 (excluding tables) |
| `resource` | 200–400 |
| `navigation` | 80–200 |

**If your draft exceeds the budget by more than 10%:** you are padding. Cut, do not summarise. Aim for the lower half of the range.

If you cannot deliver the page outcome within the upper bound, the page is doing two jobs. Flag — do not split it yourself, that is a human decision.

---

## Section F — When you do not know something

Three valid responses, in order of preference:

1. **State it from the source-of-truth file** (`05-source-of-truth.md`). Most factual claims for Developers are pre-verified there — versions, endpoints, model IDs, repo URLs. Use those.
2. **Flag it.** `{/* REVIEW: [exact claim] — verify with: [named source: GitHub repo / npm / PyPI / forum thread / OpenAPI spec] */}` — the human verifies before publication.
3. **Cut the sentence.** If the claim is not central, deletion is better than fabrication.

**Never invent a function name, version number, contract address, model ID, endpoint, or feature claim.** Fabrication is the worst possible output. If you cannot source it, flag it or cut it.
