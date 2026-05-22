Understood. This is a deep inventory + analysis task, not a research task. No repo writes. Outputs go to `/mnt/user-data/outputs/` only.

The work has three distinct phases I need to complete before writing anything:

1. **Full inventory** of every file across every v2 tab on `docs-v2-dev` (including subdirs)
2. **Live docs MCP scan** of what's actually surfaced/searchable now
3. **Write** the ownership map + per-tab analysis docs

Let me pull the full inventory first — all tabs in parallel.Now I have the full picture. Let me now do targeted Livepeer Docs MCP searches to check what actually surfaces on the live site for the three priority tabs.Good — I have a comprehensive picture now. I have the full file tree for every tab, I can see what's live vs. in TO-ADD buckets, and I've confirmed the live search surface. Now writing all outputs.Now presenting all six files.Seven files. Here is what each contains and the key findings surfaced:

**00 — Ownership map.** The master reference. Defines primary persona, secondary visitors, what each tab owns, what it explicitly does not own, and its handoff points. Also includes a summary matrix of every information domain mapped to its owning tab. Use this to resolve "where does X live?" decisions.

**01 — About.** The Protocol Understander persona. Four critical gaps identified: `fee-flow.mdx` is a stub (the most important economics explainer in the tab); `technical-roadmap.mdx` is 793 bytes; no network metrics/live data page exists; the AI pivot is not front-and-centre in `livepeer-overview.mdx`. Also flags a structural duplicate: `blockchain-contracts.mdx` exists in two locations.

**02 — LP Token.** The most severe gap picture of the three priority tabs. The delegation journey is essentially broken for new users: `delegation-economics.mdx` is a 736-byte stub (the #1 question every delegator has), undelegation has no page at all, and three near-ready pages (`choose-a-delegate`, `delegation-management`, `delegation-rewards`) are sitting in `TO-ADD/` unpublished. The journey table maps all ten steps a yield-seeking delegator takes and shows only steps 3 and 9 are fully served.

**03 — Developers.** The AI Application Builder persona. Three stubs blocking the primary journey (`setup-paths.mdx`, `video-on-livepeer.mdx`, `video-quickstart.mdx`). `sdk-gateway.mdx` is 1.8KB for the most important architectural decision a developer makes. No troubleshooting page, no production checklist. Also flags the `technical-references/` vs `resources/` duplication that needs resolving.

**04 — Home.** Structurally healthy. Main gap is `roadmap.mdx` (1.8KB stub) — high-value for investors and newcomers. Stale risk flag on `trending.mdx`.

**05 — Orchestrators + Gateways.** Both are structurally complete (the reference tabs). Gaps are content-quality: AI pipeline reliability troubleshooting is missing; dual-mode page publish status needs confirmation; hardware requirements need AI-specific GPU specs.

**06 — Community.** Three directories (`livepeer-connect/`, `livepeer-contribute/`, `resources/`) need published-content confirmation. Roadmap duplication risk with Home tab.
