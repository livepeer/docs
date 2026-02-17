# Developers Section — Style Guide

Use this for the v2 Developers section (03_developers). Where not specified, follow the [About section style guide](../ABOUT/ABOUT-SECTION-STYLE-GUIDE.md).

---

## 1. Copy and voice

- **Same as About:** Technical but approachable; confident and current (2026); concise; US spelling; define terms on first use.
- **Developers-specific:** Prefer “you” and imperative for instructions (“Clone the repo,” “Set the variable”). Use “we” sparingly for Livepeer (“We provide …”). Code and API names in backticks (`livepeer-cli`, `POST /stream`).
- **Product names:** Livepeer Studio, Daydream, ComfyStream, BYOC, go-livepeer, Cascade (if current). Link to official docs on first mention where helpful.

---

## 2. Structure per page

- **Opening:** One or two sentences on what the page covers and who it’s for (e.g. “This guide shows how to run your own AI worker with ComfyStream.”).
- **Body:** H2 for main sections, H3 for subsections. Use **Steps** for procedures; **tables** for options, APIs, or comparisons; **code blocks** with language tags.
- **Closing:** “See also” links to related Developer pages and to About (e.g. Network interfaces, Marketplace) where relevant. Optional “Next” for linear flows (e.g. Overview → BYOC → ComfyStream).

---

## 3. Components

- **Same as About:** PreviewCallout (or ComingSoonCallout on portal); Card for CTAs; DynamicTable; Tip, Note, Info, Warning; Accordion for long reference content.
- **Developers-specific:** Use **Steps** for tutorials and quickstarts. Prefer snippet code-block or terminal components over raw markdown code blocks where a shared style is needed. For API/SDK pages, use tables (e.g. “Endpoint / Method / Description”) and link to external API docs.

---

## 4. Code and commands

- **Commands:** Use full commands that can be copy-pasted; avoid placeholders unless clearly marked (e.g. `<ORCHESTRATOR_IP>`). Prefer `bash` for shell.
- **Paths:** Use `/snippets/` for assets and shared components; no `.gitbook/assets` or broken relative image paths.
- **Imports:** Leading slash: `/snippets/...`. Fix any “Invalid import path” (e.g. `snippets/` → `/snippets/`) so mint validate passes.

---

## 5. IA and cross-links

- **Within Developers:** Portal → developer-guide, quick-starts, ai-pipelines (overview), guides-and-resources, developer-tools, technical-references. AI Pipelines: overview → byoc, comfystream.
- **To other tabs:** Link to About (e.g. Network interfaces, Marketplace), Gateways, Orchestrators, Resources where relevant.
- **External:** Studio docs, Explorer, GitHub (ComfyStream, protocol), forum. Open in new tab or standard link.

---

## 6. Differences from About

| Aspect | About | Developers |
|--------|--------|------------|
| Tone | Explainer (what/how) | Instructional (how to build / run) |
| Code | Minimal (contract names, repo names) | Commands, config snippets, API examples |
| Media | Diagrams, optional hero | Diagrams, optional screenshots/video for tools |
| Callouts | Tip, Note, Danger | Same + Warning for deprecations or breaking steps |

---

## 7. Checklist for new or revised Developer pages

- [ ] Title and description match the page; keywords include main terms.
- [ ] Opening states audience and goal; Steps used for procedures.
- [ ] Code blocks have language tags; commands are copy-paste ready.
- [ ] No broken links or missing snippet imports; image paths under `/snippets/` or hosted.
- [ ] “See also” to related Developer and (if relevant) About pages.
- [ ] 2026 accuracy: product names, CLI flags, contract names, links.

---

*See 00-NAV-AND-PAGE-INDEX.md for nav order and DEVELOPERS-SECTION-COPY-REVIEW.md for per-page notes.*
