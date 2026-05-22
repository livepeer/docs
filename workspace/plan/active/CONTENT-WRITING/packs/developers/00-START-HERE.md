# 00 — START HERE (Developers Pack)

You are writing or reviewing content for the **Developers tab** of `docs.livepeer.org`. The output will be uploaded to Claude Web with this pack as context. Your job is to produce content that meets the quality bar in this pack — nothing else.

---

## Read order (mandatory)

1. **`00-START-HERE.md`** — this file. Driver, modes, STOP triggers.
2. **`01-tab-brief.md`** — tab purpose, audience split, full page list, scope boundaries.
3. **`02-page-briefs.md`** — find your target page. Read its block in full. Read its prev and next page blocks.
4. **`03-voice-and-anti-lazy.md`** — the quality bar. Universal rules + developer/builder registers.
5. **`04-exemplars.md`** — what good looks like in this register.
6. **`05-source-of-truth.md`** — verified facts: SDK names, versions, endpoints, models, contract details. Cite from here or flag.
7. **`06-output-contract.md`** — the WRITE shape. Title, description, body, code-block rules.
8. **`07-self-check.md`** — pre-output checklist. Run it line by line before submitting.

Attachments in `attachments/` are the deeper sources. Open them only when the brief tells you to or when you need to verify a claim.

---

## Mode selection

Pick one mode per session and declare it. The mode determines the deliverable shape.

| Mode | When to use | Output |
|---|---|---|
| **WRITE** | Page does not exist or is a stub (<100 words). | Full page MDX body to the output contract in `06`. |
| **REVIEW** | Page exists, brief says audit. | Findings report: keep / cut / rewrite per section, with reasoning. |
| **REWRITE** | Page exists but voice, accuracy, or scope is wrong. | Full replacement body. State what changed and why at the top. |
| **AUDIT** | Whole tab or section. | Per-page table: status, gaps, priority. No prose rewrites. |

Default for stub pages in `02-page-briefs.md` is **WRITE**. Default for current pages flagged for fix is **REWRITE**.

---

## Audience split (developer vs builder)

Two registers serve this tab. They are not the same. Use the one named in the page brief.

- **`developer`** — code-first. Custom pipelines, BYOC, protocol extensions, SDK wiring. Show code first, prose second. Function signatures and types are primary content. Reference GitHub.
- **`builder`** — integration-focused. Wants to ship a product using Livepeer APIs and SDKs. Outcome before mechanism. JS/TS first, then Python, then Go.

Detail in `03-voice-and-anti-lazy.md` Section C.

---

## STOP triggers (do not proceed)

Stop and surface the issue if any of these are true.

1. **Incomplete brief.** The page block in `02-page-briefs.md` is missing audience, purpose, page-type, or arriving question. Do not invent.
2. **Primary sources unnamed.** A claim has no entry in `05-source-of-truth.md` and is not flagged in the brief as `[REVIEW]`. Flag the claim or cut.
3. **Code example not verified.** You are about to write a code block (SDK call, endpoint, signature, version) that is not in `05-source-of-truth.md`. Either find it in attachments and cite, or flag with `{/* REVIEW: verify against [SOURCE] */}`.
4. **Two registers in one page.** The brief names one audience. If the page reads correct for both developer and builder, you have hedged — pick one.
5. **You hit "powered by blockchain", "thriving ecosystem", "with just a few lines of code", or any banned phrase from `03`.** Stop, cut, rewrite the paragraph.

---

## What "done" looks like

A page passes if every line in `07-self-check.md` is checked. The checklist is the gate, not your judgement.

The pack obeys its own rules. If you ship content that violates `03` or `06`, the pack failed to communicate the standard — surface that as a finding.
