# 06 — Output Contract (Developers)

> Defines the shape of WRITE-mode output. Any other shape is rejected and re-issued.

---

## A — The shape

Output is plain Markdown / MDX-compatible content. Three blocks, in this order. No fourth block.

```
[Title — one line, no leading hash. The page-builder hook converts this to the H1 + frontmatter title.]

[description — one paragraph, ≤160 characters, subject-first, no self-reference.]

---

[BODY — plain markdown. ## and ### headings. Code fences with language tags.]
```

**Example:**

```
AI Jobs Quickstart

Send your first AI inference job to a Livepeer gateway, parse the ImageResponse, and handle the three error classes.

---

## Prerequisites

A Studio API key. ...

## 1. Authenticate

`Authorization: Bearer <STUDIO_API_KEY>`. ...
```

---

## B — Hard rules

### B.1 No preamble

The body opens with substance. The first sentence after `---` is either a prerequisite, an endpoint, a function call, or the first action of the first step. Not "In this guide…". Not "This page covers…". Not "Welcome to…".

### B.2 No marketing language adjacent to code

A code block must not be preceded or followed by a sentence that contains banned phrases (see `03` §B.2). The sentence before the block names the call; the sentence after the block names the result or the error.

Bad:
> The Livepeer SDK makes it incredibly easy to generate images.
> ```ts
> livepeer.generate.textToImage({ prompt: "a cat" })
> ```

Good:
> `livepeer.generate.textToImage` returns `{ images: [{ url, seed }] }`.
> ```ts
> const result = await livepeer.generate.textToImage({ prompt: "a cat", model_id: "SG161222/RealVisXL_V4.0_Lightning" });
> // result.images[0].url is a presigned URL valid for 1 hour
> ```
> Cold-model first calls take 30 s to several minutes; warm calls return immediately.

### B.3 Code blocks: language-tagged, runnable when possible

- Every code fence has a language tag: ` ```ts`, ` ```python`, ` ```go`, ` ```bash`, ` ```json`, ` ```yaml`, ` ```dockerfile`.
- Untagged blocks are rejected by the render hook. No bare ` ``` `.
- Examples are runnable when the page is `instruction` or `tutorial`. Use placeholder `<…>` for secrets (`<STUDIO_API_KEY>`) — never invent values.
- Comments inside code blocks state the result, the type, or the failure mode. Not "// here we call the API".
- Long blocks: break into numbered steps with one block per step. No 80-line monoliths.

### B.4 Code language order

Per `03` §C.3: JS/TS first, then Python, then Go. curl before SDKs in quickstart pages because curl exposes the wire format. For developer-register pages where Python is the canonical implementation (PyTrickle, ai-runner), Python first.

### B.5 Error states in main content

Every `instruction`, `tutorial`, or `guide` page that involves a network call has an explicit error section in the main flow. Not in a trailing `<Note>`. Common error classes for Livepeer SDKs:

- `HTTPError` — 400, 401, 500.
- `HTTPValidationError` — 422.
- `SDKError` — 4XX / 5XX catch-all.
- Cold-model timeout — 30 s to several minutes; retry after.

State at minimum: the error code, what triggered it, what the reader does next.

### B.6 No `<Note>` / `<Info>` / `<Tip>` for main content

Mintlify `<Note>`, `<Info>`, `<Tip>`, `<Warning>` are reserved for **genuine asides** — true sidebar context, not the main flow. If the content belongs in the body, put it in the body.

A `<Warning>` is appropriate for: data-loss risk, irreversible action, security implication. Not for "the SDK is alpha" — say that in the body sentence that introduces the SDK.

### B.7 Headings

- `##` and `###` only. The H1 comes from the title; do not write your own `#`.
- Concept-derived noun phrases. Not questions. Not banned terms (see `03` §B.2 and `Frameworks.mdx` §4.1).
- Reference pages: literal / findability naming (`Endpoints`, `Authentication`, `Error codes`).
- Concept pages: governing-concept naming (`Pipeline modes`, `Decision tree`).
- Instruction pages: task-oriented (`1. Authenticate`, `2. Submit a transcode job`).
- Navigation pages: map language (`Choose your path`, `Common destinations`).

### B.8 Tables for comparison

When the page compares (SDKs, pipelines, modes, error classes), use a markdown table. Not a bulleted list of "X has these features". Tables scan; lists hide.

### B.9 Frontmatter (when applicable)

If the page brief says WRITE the file end-to-end (not just body), frontmatter is **double-quoted YAML** to handle apostrophes and em-dashes safely. Required fields per `checks.mdx` §1: `title`, `sidebarTitle`, `description`, `pageType` (7-enum), `audience` (7-token), `purpose` (15-enum), `complexity` (`beginner`/`intermediate`/`advanced`), `lifecycleStage` (7-enum), `keywords` array, OG image block.

In most cases the human edits the file with frontmatter intact; you write the body. Confirm in the brief.

### B.10 Veracity flags

Use this exact form for any unverified claim:

```
{/* REVIEW: [exact claim or topic] — verify with: [named source] */}
```

Examples:

```
{/* REVIEW: default model_id — pending stakeholder signoff (j0sh) */}
{/* REVIEW: -byoc -byocContainerURL -byocModelID flag names — verify against go-livepeer master */}
{/* REVIEW: pricing figures — verify at livepeer.studio/pricing */}
```

Do not invent. Do not soften. Flag and continue.

### B.11 Versions

State versions whenever a package, runtime, or repo is named:
- `livepeer@3.5.0`, `@livepeer/react@4.3.2`, `@livepeer/ai@alpha`.
- `ai-runner v0.14.1`, `go-livepeer v0.8.10`, `comfystream main`, `pytrickle main`.
- Languages and runtimes: Python 3.12, PyTorch 2.5.1+cu121, CUDA 12.5, Go 1.21+, Node ≥18.

### B.12 GitHub links (developer-register pages)

When a developer-register page references a function, class, or config, link to the canonical source on GitHub at the file or function level when one exists. Don't paraphrase — link.

Format: `[\`FrameProcessor\`](https://github.com/livepeer/pytrickle/blob/main/pytrickle/frame_processor.py)` (verify the file path before publishing — flag if uncertain).

---

## C — Word budget

State the budget per page in `02-page-briefs.md`. Defaults from `03` §E. **Cut, do not summarise.** Aim for the lower half of the range. Exceeding the upper bound by more than 10% is a fail.

If you cannot deliver the outcome within the upper bound, the page is doing two jobs. Flag — do not split.

---

## D — Cross-links

End every body page (not navigation pages) with a "Next steps" or "Related" section that links to:

1. The next page in the canonical journey (per `02` PREV / NEXT).
2. The reference page if the current page is a tutorial or instruction.
3. The handoff page if there is a cross-tab boundary (Gateways, Orchestrators, Solutions, About).

Format the section as a short list, not prose. Use absolute paths: `/v2/developers/build/byoc`. No `..` or relative paths.

---

## E — Forbidden patterns

Pattern | Why it's banned
---|---
Bare backticks for code blocks | Render hook rejects untagged blocks
Em-dashes (`—`) in MDX | Style governance hook rejects; use comma, semicolon, or rewrite
Single-quoted YAML frontmatter | Apostrophes and em-dashes break the parse
"This page" / "This guide" / "In this section" | Self-reference; meta-prose; banned by `03`
First-person plural ("we", "our") | Banned by `03`; use second person or third person
Question as section heading | Banned by `03`; declarative noun phrases
Marketing adjective stack | Banned by `03`; replace with the underlying claim
`<Note>` for the main explanation | Reserved for asides; main content lives in main content
Unverified version, function name, endpoint, model ID | Flag with `{/* REVIEW: */}` or cut
Inventing a contract address | Hard fail; route to an existing canonical reference page
Hardcoded data (addresses, configs, feeds) when a data file exists | Hard fail; import the data file
Inlining a component's internals | Hard fail; import and use the component, propose a prop addition
