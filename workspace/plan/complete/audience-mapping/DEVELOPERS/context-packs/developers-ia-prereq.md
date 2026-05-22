# Developers Tab — Pre-IA Reference

Generated: 2026-03-23
Source repo: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev`

---

## Section 1 — Folder & File Tree (v2/developers/)

Active files only. `_workspace/` subtree excluded (archive/draft content, not served).

```
v2/developers/
├── index.mdx  [title: "Developers Index" | pageType: overview]
├── portal.mdx  [title: "Livepeer Developer Portal" | pageType: landing]
├── developer-journey.mdx  [title: "Developer Journey" | pageType: guide]
├── build/
│   ├── byoc.mdx  [title: "Bring Your Own Container (BYOC)" | pageType: how_to]
│   ├── comfystream.mdx  [title: "Build with ComfyStream" | pageType: guide]
│   ├── model-support.mdx  [title: "AI Model Support" | pageType: reference]
│   ├── sdk-gateway.mdx  [title: "Build a Gateway Client with the SDK" | pageType: guide]
│   └── workload-fit.mdx  [title: "Is My AI Workload a Good Fit for Livepeer?" | pageType: concept]
├── concepts/
│   ├── ai-on-livepeer.mdx  [title: "AI on Livepeer" | pageType: concept]
│   ├── developer-stack.mdx  [title: "The Livepeer Developer Landscape" | pageType: concept]
│   ├── oss-stack.mdx  [title: "The Livepeer Open Source Stack" | pageType: concept]
│   ├── running-a-gateway.mdx  [title: "When to Run Your Own Gateway" | pageType: concept]
│   └── video-on-livepeer.mdx  [title: "Video on Livepeer" | pageType: concept]
├── developer-tools/
│   ├── dashboards.mdx  [title: "Community & Network Dashboards" | pageType: no pageType]
│   ├── gateways.mdx  [title: no title | pageType: no pageType]
│   ├── livepeer-cloud.mdx  [title: "Livepeer Tools Dashboard" | pageType: no pageType]
│   ├── livepeer-explorer.mdx  [title: "Livepeer Explorer" | pageType: no pageType]
│   └── tooling-hub.mdx  [title: "Tooling Hub" | pageType: landing]
├── get-started/
│   ├── ai-quickstart.mdx  [title: "AI Jobs Quickstart" | pageType: quickstart]
│   ├── comfystream-quickstart.mdx  [title: "Quickstart: ComfyStream on Livepeer" | pageType: tutorial]
│   ├── contributor-quickstart.mdx  [title: "Contributor Quickstart" | pageType: guide]
│   ├── setup-paths.mdx  [title: "How to Get Started" | pageType: landing]
│   ├── transcoding-quickstart.mdx  [title: "Transcoding Jobs Quickstart" | pageType: quickstart]
│   └── video-quickstart.mdx  [title: "Quickstart: Video Streaming" | pageType: tutorial]
├── guides/
│   ├── contribution-guide.mdx  [title: "Contribution Guide" | pageType: guide]
│   ├── developer-guides.mdx  [title: "Developer Guides" | pageType: guide]
│   ├── developer-help.mdx  [title: "Developer Help" | pageType: faq]
│   └── resources.mdx  [title: "Resources" | pageType: guide]
├── opportunities/
│   ├── bug-bounties.mdx  [title: "Bug Bounties" | pageType: reference]
│   ├── grants-and-programmes.mdx  [title: "Grants & Programmes" | pageType: guide]
│   ├── oss-contributions.mdx  [title: "Open Source Contributions" | pageType: guide]
│   ├── overview.mdx  [title: "Builder Opportunities" | pageType: overview]
│   └── rfps-and-proposals.mdx  [title: "RFPs & Treasury Proposals" | pageType: guide]
├── resources/
│   ├── apis.mdx  [title: "APIs" | pageType: landing]
│   ├── awesome-livepeer.mdx  [title: "Awesome Livepeer" | pageType: landing]
│   ├── deepwiki.mdx  [title: "DeepWiki" | pageType: landing]
│   ├── example-applications.mdx  [title: "Example Applications" | pageType: no pageType]
│   ├── sdks.mdx  [title: "SDKs" | pageType: landing]
│   ├── wiki.mdx  [title: "Livepeer Wiki" | pageType: landing]
│   └── compendium/
│       └── glossary.mdx  [title: "Developer Glossary" | pageType: reference]
└── technical-references/
    ├── apis.mdx  [title: "APIs" | pageType: no pageType]
    ├── awesome-livepeer.mdx  [title: "Awesome Livepeer" | pageType: no pageType]
    ├── deepwiki.mdx  [title: "DeepWiki" | pageType: no pageType]
    ├── sdks.mdx  [title: "SDKs" | pageType: no pageType]
    └── wiki.mdx  [title: "Livepeer Wiki" | pageType: no pageType]
```

---

## Section 2 — Navigation Tree (docs.json — Developers section)

Source: `docs.json` > `navigation.versions[v2].languages[0].tabs[Developers].anchors[Developers]`

```
Developers  (tab)
└── Developers  (anchor, icon: display-code)
    ├── Hub  (group, icon: house)
    │   ├── v2/developers/portal
    │   └── v2/developers/developer-journey
    ├── Concepts  (group, icon: lightbulb)
    │   ├── v2/developers/concepts/developer-stack
    │   ├── v2/developers/concepts/ai-on-livepeer
    │   ├── v2/developers/concepts/video-on-livepeer
    │   ├── v2/developers/concepts/running-a-gateway
    │   └── v2/developers/concepts/oss-stack
    ├── Get Started  (group, icon: fast-forward)
    │   ├── v2/developers/get-started/setup-paths
    │   ├── v2/developers/get-started/video-quickstart
    │   ├── v2/developers/get-started/transcoding-quickstart
    │   ├── v2/developers/get-started/ai-quickstart
    │   └── v2/developers/get-started/comfystream-quickstart
    ├── Build  (group, icon: hammer)
    │   ├── v2/developers/build/comfystream
    │   ├── v2/developers/build/byoc
    │   ├── v2/developers/build/sdk-gateway
    │   ├── v2/developers/build/workload-fit
    │   └── v2/developers/build/model-support
    ├── Guides  (group, icon: laptop-file)
    │   ├── v2/developers/guides/developer-guides
    │   ├── v2/developers/guides/resources
    │   ├── v2/developers/guides/contribution-guide
    │   └── v2/developers/guides/developer-help
    ├── Opportunities  (group, icon: lightbulb)
    │   ├── v2/developers/opportunities/overview
    │   ├── v2/developers/opportunities/grants-and-programmes
    │   ├── v2/developers/opportunities/rfps-and-proposals
    │   ├── v2/developers/opportunities/oss-contributions
    │   └── v2/developers/opportunities/bug-bounties
    └── Resources  (group, icon: books)
        ├── v2/developers/resources/sdks
        ├── v2/developers/resources/apis
        ├── v2/developers/resources/awesome-livepeer
        ├── v2/developers/resources/wiki
        ├── v2/developers/resources/deepwiki
        └── Compendium  (group)
            └── v2/developers/resources/compendium/glossary
```

---

## Section 3 — Discrepancy Notes

### Orphans — files in v2/developers/ NOT in docs.json

- `v2/developers/index.mdx`
- `v2/developers/developer-tools/dashboards.mdx`
- `v2/developers/developer-tools/gateways.mdx`
- `v2/developers/developer-tools/livepeer-cloud.mdx`
- `v2/developers/developer-tools/livepeer-explorer.mdx`
- `v2/developers/developer-tools/tooling-hub.mdx`
- `v2/developers/get-started/contributor-quickstart.mdx`
- `v2/developers/resources/example-applications.mdx`
- `v2/developers/technical-references/apis.mdx`
- `v2/developers/technical-references/awesome-livepeer.mdx`
- `v2/developers/technical-references/deepwiki.mdx`
- `v2/developers/technical-references/sdks.mdx`
- `v2/developers/technical-references/wiki.mdx`

### Missing/stubs — paths in docs.json with no matching file

None. All 32 nav entries have a corresponding file on disk.

### Files with no `pageType` in frontmatter

- `v2/developers/developer-tools/dashboards.mdx`
- `v2/developers/developer-tools/gateways.mdx`  (also missing `title`)
- `v2/developers/developer-tools/livepeer-cloud.mdx`
- `v2/developers/developer-tools/livepeer-explorer.mdx`
- `v2/developers/resources/example-applications.mdx`
- `v2/developers/technical-references/apis.mdx`
- `v2/developers/technical-references/awesome-livepeer.mdx`
- `v2/developers/technical-references/deepwiki.mdx`
- `v2/developers/technical-references/sdks.mdx`
- `v2/developers/technical-references/wiki.mdx`
