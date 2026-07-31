**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## 10 sections mapping current 53 pages

| # | Section | Purpose | Page type | Primary jobs | Personas |
|---|---|---|---|---|---|
| S1 | Routing / Portal | Disambiguate by reference type | navigation | All | All |
| S2 | Glossary | Term definition lookup | reference | J1 | #1, #2 |
| S3 | Primary Sources | Spec, whitepaper, architecture docs | reference | J2, J3 | #2, #1 |
| S4 | How to Read Sources | Guide to interpreting authority levels | concept | J2, J6 | #2 |
| S5 | Governance and LIPs | LIP index, voting, treasury data | reference | J4 | #3, #1 |
| S6 | Changelogs | All product changelogs by component | reference | J7 | #1, #2 |
| S7 | Documentation Guide | How to use/contribute to these docs | guide | Docs contribution | #1, contributors |
| S8 | Help Centre | FAQ, troubleshooting, support | reference | Rescue | All |
| S9 | Compendium / Media Kit | Press materials, brand assets | reference | J6 | External communicators |
| S10 | Ecosystem and Tools | Dashboards, Explorer, community tools | reference | J5 | #2, #4 |

---

## Current page inventory mapped to sections

### S1 -- Portal/Routing
- portal.mdx (exists)
- resources-portal.mdx (exists -- duplicate? resolve)
- index.mdx (exists)

### S2 -- Glossary
- glossary.mdx (51KB, comprehensive)

### S3 -- Primary Sources
- Cross-links to About tab (protocol/*, network/*)
- concepts/livepeer-101.mdx
- concepts/brief-history-of-video.mdx

### S5 -- Governance
- Cross-links to About/protocol/governance-model, treasury
- Cross-links to Delegators/guides/governance/*

### S6 -- Changelogs (20 pages)
- changelog/changelog.mdx (hub)
- changelog/docs.mdx
- changelog/migration-guide.mdx
- changelog/protocol/ (go-livepeer, lips, naap, subgraph)
- changelog/ai-compute/ (ai-runner, comfystream, pytrickle)
- changelog/tooling/ (explorer, livepeer-data, livepeer-python-gateway)
- changelog/apis-sdks/ (livepeer-js, livepeer-python, livepeer-ai-js, livepeer-ai-python, livepeer-ai-go)
- changelog/ecosystem/ (awesome-livepeer, website)

### S7 -- Documentation Guide (15 pages)
- documentation-guide/documentation-guide.mdx (hub)
- documentation-guide/documentation-overview.mdx
- documentation-guide/ai-automations/ (3 pages)
- documentation-guide/component-library/ (7 pages)
- documentation-guide/contributing/ (1 page)
- documentation-guide/copy-style/ (3 pages: authoring-guide, authoring-standard, style-guide)
- documentation-guide/features/ (1 page)
- documentation-guide/tooling/ (2 pages)

### S8 -- Help Centre
- help-center.mdx

### S9 -- Compendium
- compendium/media-kit.mdx

### S10 -- Ecosystem
- references/contract-addresses.mdx
- lpt/delegator-dashboard.mdx
- resources/videos.mdx

---

## What's NOT in Resources (explicitly out of scope)

- Role-specific how-to content (stays in role tabs)
- Conceptual intro to roles (stays in About, Home)
- Getting-started flowcharts (stay in role tabs)
- Operational runbooks (stay in role tabs)

---

## Review questions

1. Is 10 sections too many for a reference tab?
2. Should S3 (Primary Sources) link to About or duplicate?
3. Is S4 (How to Read Sources) a real need or over-engineering?
4. Should S9 (Compendium) be expanded or merged?
5. Are there pages in the wrong section?
6. Is resources-portal.mdx a duplicate of portal.mdx?
