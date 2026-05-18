# 5-whys depth analysis prompt

Wonderland's verdict: the style and layout standard is LOW. Pages need DEEP fixes, not lazy ones. This depth analysis is the user-facing, product-forward, "what else makes this better" pass that the surface rubric does not capture.

**Apply this to every non-stub page** alongside the standard rubric pass. Per-page review must include the §"Depth analysis (5 layers)" section.

## The 5 layers

For each page, answer 5 questions — each at a different dimension. Do NOT stop at obvious surface fixes. Push to product-quality depth.

### Layer 1 — Reader outcome

**Question:** What is the single highest-impact change that would help the target user achieve the page's stated outcome faster, more confidently, or with fewer external lookups?

Frame:
- The page's outcome statement is "[X]". Does the page deliver that outcome in the body, or imply it and leave the user to assemble?
- What would the user have to do AFTER reading this page to actually achieve the outcome? Are those steps in the page or off-page?
- Where does the user hit a "now what?" wall on this page?
- Where does the page introduce a concept but not show it working?

Output:
- **Gap:** [name the specific thing the page should let the user do that it currently doesn't]
- **Fix step:** [one concrete action — what to add, where, in what form]
- **Source/exemplar:** [file path of canonical source or .claude/references/ exemplar that supports the fix]

### Layer 2 — Composition

**Question:** What component / layout pattern is missing that the page-composition framework recommends for this pageType?

Frame:
- Look at the pageType in frontmatter. Look at `_packet/component-matrix.md` for that pageType's required + recommended components. What's missing?
- Is there a `<CardGroup>` Related Pages section at the footer? (Hint: most pages don't have one — that's a HIGH finding.)
- Is `<Accordion>` used anywhere that "Common Errors" or "Troubleshooting" or "Edge cases" appear? Almost certainly not — flag the section.
- Are `<Tabs>` used for any multi-variant content (language, platform, mode)?
- Are `<Steps>` (StyledSteps) used for procedural content, or is it numbered markdown?
- Is the page prose-heavy with no JSX components at all? Identify the worst section that should be a Tab/Accordion/Table/Card grid.

Output:
- **Gap:** [name the specific component missing and the page section that needs it]
- **Fix step:** [exact JSX scaffold the writer should drop in, with placeholder content]
- **Source/exemplar:** `.claude/references/layout/best-practice.md` or `snippets/templates/pages/page-composition-framework.mdx` line ranges

### Layer 3 — Cross-page integration

**Question:** What links are missing — prerequisite page, next page, related concept, upstream repo, cross-tab graduation? Does the page strand the user with no obvious next move?

Frame:
- What is the user's likely next question after reading this page?
- Is that question answered here, or one click away?
- Is there a prereq page the reader should have visited before this? Is it linked at the top?
- Is there a next-step page in the journey? Is it linked at the end?
- Does the page reference an upstream repo (go-livepeer, ai-runner, ComfyStream, pytrickle)? Is the actual repo linked?
- Where should the reader graduate to (Gateways for self-host, Solutions for managed, About for protocol, Orchestrators for node-op)?
- What concept on a sibling page would help the reader here? Is it linked?

Output:
- **Gap:** [name the missing link target and where it should appear]
- **Fix step:** [exact link path + anchor text + insertion point]
- **Source/exemplar:** [the actual target page or upstream URL]

### Layer 4 — Veracity and source authority

**Question:** Which claims need a named source (go-livepeer, ai-runner, protocol, PR number, repo README)? Which would benefit from a verifiable example (curl against a real endpoint, code that runs against a known repo)?

Frame:
- Pick any 5 factual claims on the page. For each, is there a source named or implied?
- Look at code blocks. Do they run? Are they labelled TESTED?
- Look at version numbers. Are they explicit ("go-livepeer v0.7.x"), or vague ("latest")?
- Look at error states. Are they reproduced from actual error messages, or paraphrased?
- Is there a curl command against a real endpoint, or is it pseudo-code?
- Where is the page asking the user to trust without showing receipts?

Output:
- **Gap:** [name the claim and what source it should cite]
- **Fix step:** [add citation to specific source / replace example with verified version]
- **Source/exemplar:** [exact upstream repo path, PR number, or README section]

### Layer 5 — Product-forward depth

**Question:** What would make this page feel like a product, not a Notion page? What gold-standard exemplar in `.claude/references/layout/` does it most resemble — and what does that exemplar do that this page does not? What meta-question is the user actually trying to answer (e.g., "should I use this at all?", "is this still maintained?", "what's the catch?") that the page should address explicitly?

Frame:
- Read the page like a developer evaluating Livepeer for the first time. What signal does the page give about: maintenance status? production-readiness? cost? typical use case? non-use case?
- Does the page acknowledge limitations / trade-offs / failure modes? Or hide them?
- Does the page have a sense of when to use it vs. another option?
- Does the page have a "what could go wrong" section?
- Is the visual hierarchy doing work for the scanner, or is it a wall of prose?
- Is there a hero element at the top that orients the reader on first scroll?
- Compare to `.claude/references/layout/exemplars.md` gold-standard pages — what one structural pattern does the exemplar use that this page should adopt?

Output:
- **Gap:** [name the meta-question or product-signal that's missing]
- **Fix step:** [add section / reframe intro / add trade-off block / add maintenance badge]
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — name the specific exemplar to emulate

## Anti-patterns (do NOT do)

When applying the 5 layers, do NOT:

- Stop at "the page could be better" — name a SPECIFIC gap and SPECIFIC fix
- Suggest "review for clarity" or "consider expanding" — those are non-fixes
- Recommend more prose where a component would solve it
- Recommend a component without saying WHERE to put it and WHAT goes in it
- Cite "best practice" without citing a specific file path
- Repeat the standard rubric findings in the depth section — depth is what the rubric MISSES
- Layer 1–5 should each surface a DIFFERENT dimension. If two layers are saying the same thing, the fixer is missing depth.

## Worked example

For `v2/developers/build/ai-and-agents/realtime-ai/comfystream/overview.mdx`:

### Layer 1 — Reader outcome
- **Gap:** Page introduces ComfyStream and describes architecture, but doesn't show the reader how to know if their workflow is a fit for it. The outcome — "decide whether ComfyStream is right for my use case" — isn't deliverable from this page.
- **Fix step:** Add a "Is this for you?" decision block before the architecture section. 4 bullets: "If you have a ComfyUI workflow + GPU available + need real-time + can run Python, ComfyStream is the right path." Use `<Tip>` callout.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` Header CTA section — "Mental model: AccordionGroup/Accordion" pattern.

### Layer 2 — Composition
- **Gap:** No `<Tabs>` for the two ComfyStream paths (Docker vs Python). No `<Accordion>` for the workflow-debugging Q&A at the bottom. No `<CardGroup>` Related Pages at footer.
- **Fix step:** Add `<Tabs>` block in §"Install" with `<Tab title="Docker" icon="docker">` and `<Tab title="Python" icon="python">`. Convert §"Common questions" markdown subheadings into `<AccordionGroup>` with `<Accordion icon="circle-question">` per Q. Add `<Columns cols={2}>` with `<Card>` linking to `comfystream-quickstart`, `workflow-authoring`, `comfystream-as-byoc`, `realtime-ai/pytrickle/overview` at EOF.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` lines 162–172 (Related Pages format).

### Layer 3 — Cross-page integration
- **Gap:** No link to `livepeer/comfystream` repo. No link to upstream ComfyUI docs. No prereq link from the page introducing real-time AI (`realtime-ai/overview.mdx`). No graduation link to BYOC.
- **Fix step:** Add to intro: "Source: [livepeer/comfystream](https://github.com/livepeer/comfystream). Real-time AI overview: [Real-time AI](../overview.mdx)." Add to footer Related Pages: "Build a BYOC variant" → `comfystream-as-byoc.mdx`.
- **Source/exemplar:** `livepeer/comfystream` repo README; `.claude/references/layout/best-practice.md` Multi-Path Layout Pattern.

### Layer 4 — Veracity and source authority
- **Gap:** Page mentions "11 native pipelines" without citing `aiModels.json`. Mentions "trickle protocol" without linking the protocol spec. Code examples not labelled TESTED.
- **Fix step:** Add citation: "11 pipelines per [`aiModels.json`](https://github.com/livepeer/ai-runner/blob/main/aiModels.json)". Link trickle protocol spec. Label every code block TESTED with the date, or NOT-TESTED with reason.
- **Source/exemplar:** `ai-runner/aiModels.json`; `v2/developers/_workspace/diagrams2.mdx` verification log §5.

### Layer 5 — Product-forward depth
- **Gap:** No statement of production-readiness or maturity. No statement of cost expectations. No "when not to use" section.
- **Fix step:** Add "Maturity" badge near top: `<Badge>Beta — production-tested, breaking changes possible</Badge>`. Add §"When not to use" with two bullets ("If your workflow runs in <100ms, native AI Jobs API is simpler" / "If you don't need real-time, batch pipelines are cheaper"). Add §"Costs" with per-second compute pricing reference.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — gateway-quickstart pattern uses a maturity badge in the header.

## How agents should write the 5 layers

- Concrete and specific. Cite line numbers and exact text.
- Each gap → exact fix → exact source.
- No vague language ("improve", "consider", "enhance").
- The user wants depth. If a layer's answer is "looks fine", challenge harder — there is always a structural improvement.
- If a layer's answer is impossible to surface (e.g., a page is a 1-paragraph router with nothing to deepen), say so and explain why — but the bar is HIGH for a "no gap" answer.
