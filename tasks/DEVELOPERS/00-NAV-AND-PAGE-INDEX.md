# Developers Section — Nav Order & Page Index

Source: `docs.json` (Developers tab). Use this order for reviews and IA.

---

## Nav order (docs.json)

### Building on Livepeer
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 1 | `v2/pages/03_developers/developer-portal` | ✅ developer-portal.mdx | Portal; ComingSoonCallout. |
| 2 | `v2/pages/03_developers/building-on-livepeer/developer-guide` | ✅ | Iframe fixed (self-closing). |
| 3 | `v2/pages/03_developers/building-on-livepeer/partners` | ✅ | |
| 4 | `v2/pages/03_developers/building-on-livepeer/developer-journey` | ✅ | |

### Quickstart
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 5 | `v2/pages/03_developers/building-on-livepeer/quick-starts/livepeer-ai` | ✅ | Nested under Real-time Video in nav. |
| 6 | `v2/pages/03_developers/livepeer-real-time-video/video-streaming-on-livepeer/README.mdx` | ✅ README.mdx | Mintlify may expect index for path. |
| 7 | `v2/pages/03_developers/building-on-livepeer/quick-starts/video-streaming` | ✅ | |
| 8 | `v2/pages/03_developers/building-on-livepeer/quick-starts/livepeer-ai` | ✅ | (Duplicate ref in AI Pipelines subgroup.) |

### AI Pipelines
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 9 | `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/overview` | ✅ overview.mdx | Created from CONTEXT DATA ai_pipelines_overview.md. |
| 10 | `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/byoc` | ✅ byoc.mdx | Created; amalgamated CONTEXT DATA byoc_pipeline_guide + link to full ../byoc. |
| 11 | `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/comfystream` | ✅ comfystream.mdx | Created; amalgamated CONTEXT DATA comfy_stream_integration + link to full ../comfystream. |

*Existing at parent level:* `ai-inference-on-livepeer/byoc.mdx`, `comfystream.mdx` (keep; nav points to ai-pipelines/ subfolder).

### Guides & Tutorials
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 12 | `v2/pages/03_developers/guides-and-resources/developer-guides` | ✅ | |
| 13 | `v2/pages/03_developers/guides-and-resources/resources` | ✅ | |
| 14 | `v2/pages/03_developers/guides-and-resources/developer-help` | ✅ | |
| 15 | `v2/pages/03_developers/guides-and-resources/contribution-guide` | ✅ | |

### Builder Opportunities
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 16 | `v2/pages/03_developers/builder-opportunities/dev-programs` | ✅ | Fragment fixed (removed unclosed `<>`). |
| 17 | `v2/pages/03_developers/builder-opportunities/livepeer-rfps` | ✅ | |

### Developer Tools
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 18 | `v2/pages/03_developers/developer-tools/tooling-hub` | ✅ | |
| 19 | `v2/pages/03_developers/developer-tools/livepeer-explorer` | ✅ | |
| 20 | `v2/pages/03_developers/developer-tools/livepeer-cloud` | ✅ | |
| 21 | `v2/pages/03_developers/developer-tools/dashboards` | ✅ | |

### Technical References
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 22 | `v2/pages/03_developers/technical-references/sdks` | ✅ sdks.mdx | Nav fixed in docs.json (was technical-references-sdks.-and-apis). |
| 23 | `v2/pages/03_developers/technical-references/apis` | ✅ apis.mdx | Same. |
| 24 | `v2/pages/03_developers/technical-references/awesome-livepeer` | ✅ | |
| 25 | `v2/pages/03_developers/technical-references/wiki` | ✅ | |
| 26 | `v2/pages/03_developers/technical-references/deepwiki` | ✅ | |

---

## Summary

- **Created:** ai-pipelines/overview.mdx, ai-pipelines/byoc.mdx, ai-pipelines/comfystream.mdx.
- **Nav fix applied:** docs.json now points to `technical-references/sdks` and `technical-references/apis`.
- **Context data:** `docs/DEVELOPERS/CONTEXT DATA/` (developer guides, BYOC, ComfyStream, AI quickstarts, etc.). No v2/03_developers/_contextData_ found; use docs/ABOUT/CONTEXT DATA and v2/01_about/_contextData_ for protocol/network accuracy where relevant.

---

## Context data locations

- **docs/DEVELOPERS/CONTEXT DATA/** — developer_guide.md, byoc_pipeline_guide.md, comfy_stream_integration.md, ai_pipelines_overview.md, livepeer_ai_quickstart.md, livepeer_video_streaming_quickstart.md, developer_programs.md, livepeer_rfps.md, contribution_guide.md, developer_resources.md, developer_help.md, livepeer_developer_journey.md, livepeer_developer_partners.md, developer_guides_index.md, livepeer_developer_section_planning.md.
- **docs/ABOUT/CONTEXT DATA/** — Protocol/Network (for accuracy: Gateway, Orchestrator, Arbitrum, LPT).
- **v2/pages/01_about/_contextData_** — deep-research-report.md, protocol-frameworks-report.mdx.md (mental model, stack).
