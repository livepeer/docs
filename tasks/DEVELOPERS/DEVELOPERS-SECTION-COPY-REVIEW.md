# Developers Section — Copy Review

Per-page review (nav order). Use with `docs/DEVELOPERS/00-NAV-AND-PAGE-INDEX.md` and the style guide.

---

## 1. Building on Livepeer

### developer-portal.mdx
- **2026:** Portal tagline and cards are current (BYOC, ComfyStream, video AI). Link to awesome-livepeer correct.
- **Context:** ABOUT context (Gateway, Orchestrator, protocol vs network) aligns with “custom AI pipelines” and “video AI infrastructure.”
- **Upgrades:** Add one sentence on Livepeer Studio vs self-hosted gateway for 2026. Optional “Quick links” card row: Developer guide, Quick starts, AI Pipelines, Technical references.
- **IA:** Clear as landing; ensure cards link to developer-guide, quick-starts, ai-pipelines (overview), technical-references.
- **Style:** Remove or resolve commented Note/YouTube; keep overview concise.
- **Complete:** Yes; optional polish for links and callout.
- **Resources:** Link to [Livepeer Studio Docs](https://livepeer.studio/docs), [Daydream](https://daydream.io) if desired.
- **Code:** Portal components from snippets; no inline styles. Fine as-is.

### developer-guide.mdx
- **2026:** Present tense; Daydream, Livepeer Studio, running own gateway accurate.
- **Context:** Matches protocol-frameworks (developers = use Gateway, build tooling, extend protocol).
- **Upgrades:** Add 1–2 line “In a nutshell” before diagram. Ensure mermaid flowchart has no syntax errors (classDef, fill).
- **IA:** Fits under Building on Livepeer. Cross-link to quick-starts and AI pipelines.
- **Style:** Iframe fixed (self-closing). Tip/Warning callouts used.
- **Complete:** Yes.
- **Resources:** Same as portal; consider embedding a short “What is Livepeer?” video.
- **Code:** Standard MDX; diagram could be moved to a snippet if reused.

### partners.mdx, developer-journey.mdx
- **2026 / Context:** Verify partner names and program links; align journey steps with current quick-starts and docs.
- **Upgrades:** Tables or Steps for journey; cards for partners.
- **IA / Style:** Consistent H2/H3; “See also” to developer-guide and resources.
- **Complete:** Review for placeholder text.
- **Code:** Prefer snippet components over raw HTML.

---

## 2. Quickstart

### quick-starts (livepeer-ai, video-streaming), README.mdx
- **2026:** Confirm CLI/API endpoints and product names (Studio, Daydream).
- **Context:** Use developer CONTEXT DATA (livepeer_ai_quickstart, livepeer_video_streaming_quickstart) for accuracy.
- **Upgrades:** Steps component for each quickstart; code blocks with language tags; “Next” to full guides.
- **IA:** README.mdx under video-streaming-on-livepeer may need index redirect or alias so nav resolves.
- **Style:** Short intro; numbered steps; copy-paste friendly commands.
- **Complete:** Ensure no “coming soon” without a link to actual content.
- **Code:** Use shared code-block component if available.

---

## 3. AI Pipelines

### ai-pipelines/overview (missing)
- **Create from:** docs/DEVELOPERS/CONTEXT DATA/ai_pipelines_overview.md.
- **2026:** Gateway Protocol, ComfyStream, BYOC, worker types (Whisper, Diffusion, etc.) are current; placeholder metrics can link to Explorer or “See network stats.”
- **Upgrades:** Add “In a nutshell” and cross-links to BYOC and ComfyStream pages; fix internal path Gateway Protocol → network technical-architecture or interfaces.
- **IA:** Top of AI Pipelines group; links to byoc, comfystream, and developer-guides.
- **Style:** Tables and mermaid from context; use DynamicTable and snippet patterns.
- **Resources:** ComfyStream GitHub, Livepeer Studio AI docs, forum pipelines.

### ai-pipelines/byoc (missing)
- **Amalgamate:** CONTEXT DATA byoc_pipeline_guide.md + existing v2/ai-inference-on-livepeer/byoc.mdx. Do not remove existing content.
- **2026:** BYOC Gateway/Orchestrator server roles, Docker, livepeer-cli register (Arbitrum) — verify CLI flags and contract name (e.g. GatewayRegistry).
- **Upgrades:** Merge “Key Points” and “Architecture” from existing byoc.mdx with CONTEXT DATA steps (clone, config, start, register). Single “Requirements” and “Troubleshooting” section.
- **IA:** Under AI Pipelines; “See also” overview and comfystream.
- **Style:** Steps for setup; code blocks; table for troubleshooting.
- **Code:** PreviewCallout; optional DynamicTable for troubleshooting.

### ai-pipelines/comfystream (missing)
- **Amalgamate:** CONTEXT DATA comfy_stream_integration.md + existing v2/ai-inference-on-livepeer/comfystream.mdx. Do not remove existing content.
- **2026:** ComfyStream, ComfyUI, Gateway binding, node types — current. Image path `../../../assets/developers/comfystream.png` — move to snippets/assets or fix path.
- **Upgrades:** Keep architecture table and layer description; add CONTEXT DATA mermaid, example pipeline JSON, plugin support, and “Connecting to Livepeer Gateway” from context.
- **IA:** Under AI Pipelines; “See also” overview and BYOC.
- **Style:** Avoid emoji in headings if style guide prefers; keep tables and code.
- **Code:** Replace broken or external image with snippet asset or hosted URL.

---

## 4. Guides & Tutorials, Builder Opportunities, Developer Tools

- **developer-guides, resources, developer-help, contribution-guide:** Use docs/DEVELOPERS/CONTEXT DATA (developer_guides_index, developer_resources, developer_help, contribution_guide) to verify links and 2026 accuracy. Prefer cards for primary CTAs; tables for “Where to get X.”
- **dev-programs, livepeer-rfps:** Use developer_programs.md and livepeer_rfps.md; ensure program names and links are current; add “See also” to builder-hub or partners.
- **tooling-hub, livepeer-explorer, livepeer-cloud, dashboards:** Technical but approachable; list capabilities and link to external tools; optional screenshots or short video.

---

## 5. Technical References

- **sdks.mdx, apis.mdx:** Currently minimal (e.g. “# SDKs”). Expand with CONTEXT DATA and About interfaces page: SDK list (e.g. JS SDK), API types (REST, gRPC, GraphQL), links to Studio docs and Explorer. Use DynamicTable for “SDK / Purpose / Link” and “API / Protocol / Endpoint.”
- **awesome-livepeer, wiki, deepwiki:** External content; ensure imports (e.g. awesome-livepeer-readme.mdx) exist or replace with inline summary + link. Fix “Could not find file” in mint validate.

---

## P0 / P1 / P2

| Priority | Item |
|----------|------|
| P0 | Create ai-pipelines/overview.mdx, byoc.mdx, comfystream.mdx. Fix docs.json technical-references path (sdks/apis). |
| P1 | Expand technical-references/sdks.mdx and apis.mdx; fix broken image in comfystream; ensure developer portal cards link to correct child pages. |
| P2 | Add “In a nutshell” and cross-links across key pages; standardize “See also” and optional media (videos, screenshots). |

---

*Next: DEVELOPERS-SECTION-STYLE-GUIDE.md (and create missing MDX).*
