# Relative Link Audit

## Summary
- Mode: write
- Files scanned: 52
- Generated pages scanned: 9
- Relative href literals scanned: 15
- Planned rewrites: 6
- Unresolved links: 9
- Generator-owned findings: 0
- Skipped non-page/non-v2 hrefs: 0

## Status Counts
| status | count |
| --- | ---: |
| direct | 4 |
| file-route-recovery | 2 |
| unresolved | 9 |

## Planned Rewrites
- v2/resources/changelog/changelog.mdx
  - L113: ../../internal/overview/governance -> /v2/internal/overview/governance [file-route-recovery]
- v2/resources/documentation-guide/documentation-guide.mdx
  - L157: ./component-library -> /v2/resources/documentation-guide/component-library [file-route-recovery]
- v2/resources/portal.mdx
  - L71: ./changelog/protocol/go-livepeer -> /v2/resources/changelog/protocol/go-livepeer [direct]
  - L78: ../gateways/guides/node-pipelines/guide -> /v2/gateways/guides/node-pipelines/guide [direct]
  - L85: ./changelog/changelog -> /v2/resources/changelog [direct]
  - L92: ./help-center -> /v2/resources/help-center [direct]

## Unresolved
- v2/resources/changelog/changelog.mdx
  - L110: ../documentation-guide/contribute-to-the-docs
    - suggestion: /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, score 0.65)
- v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx
  - L597: ./style-guide
    - suggestion: /v2/resources/documentation-guide/copy-style/style-guide (same leaf segment match, score 0.65)
    - suggestion: /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, score 0.8)
    - suggestion: /v2/resources/documentation-guide (high path similarity, score 0.6)
    - suggestion: /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, score 0.6)
    - suggestion: /v2/resources/documentation-guide/ai-automations/automations-workflows (high path similarity, score 0.6)
  - L600: ./component-library/overview
    - suggestion: /v2/about/livepeer-network/overview (same leaf segment match, score 0.65)
    - suggestion: /v2/about/livepeer-protocol/overview (same leaf segment match, score 0.65)
    - suggestion: /v2/cn/resources/documentation-guide/component-library/overview (same leaf segment match, score 0.65)
    - suggestion: /v2/developers/opportunities/overview (same leaf segment match, score 0.65)
    - suggestion: /v2/es/resources/documentation-guide/component-library/overview (same leaf segment match, score 0.65)
  - L609: ./documentation-guide
    - suggestion: /v2/resources/documentation-guide (same leaf segment match, score 0.65)
    - suggestion: /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, score 0.8)
    - suggestion: /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, score 0.6)
    - suggestion: /v2/resources/documentation-guide/ai-automations/automations-workflows (high path similarity, score 0.6)
    - suggestion: /v2/resources/documentation-guide/ai-automations/research-and-fact-checking (high path similarity, score 0.6)
- v2/resources/documentation-guide/documentation-guide.mdx
  - L160: ./style-guide
    - suggestion: /v2/resources/documentation-guide/copy-style/style-guide (same leaf segment match, score 0.65)
    - suggestion: /v2/resources (high path similarity, score 0.6667)
    - suggestion: /v2/resources/changelog (high path similarity, score 0.6667)
    - suggestion: /v2/resources/documentation-guide (high path similarity, score 0.6667)
    - suggestion: /v2/resources/help-center (high path similarity, score 0.6667)
  - L163: ./snippets-inventory
    - suggestion: /v2/resources/documentation-guide/tooling/snippets-inventory (same leaf segment match, score 0.65)
    - suggestion: /v2/resources (high path similarity, score 0.6667)
    - suggestion: /v2/resources/changelog (high path similarity, score 0.6667)
    - suggestion: /v2/resources/documentation-guide (high path similarity, score 0.6667)
    - suggestion: /v2/resources/help-center (high path similarity, score 0.6667)
  - L166: ./docs-features-and-ai-integrations#automatic-page-index-generation
    - suggestion: /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (same leaf segment match, score 0.65)
    - suggestion: /v2/resources (high path similarity, score 0.6667)
    - suggestion: /v2/resources/changelog (high path similarity, score 0.6667)
    - suggestion: /v2/resources/documentation-guide (high path similarity, score 0.6667)
    - suggestion: /v2/resources/help-center (high path similarity, score 0.6667)
  - L169: ./automations-workflows
    - suggestion: /v2/resources/documentation-guide/ai-automations/automations-workflows (same leaf segment match, score 0.65)
    - suggestion: /v2/resources (high path similarity, score 0.6667)
    - suggestion: /v2/resources/changelog (high path similarity, score 0.6667)
    - suggestion: /v2/resources/documentation-guide (high path similarity, score 0.6667)
    - suggestion: /v2/resources/help-center (high path similarity, score 0.6667)
  - L172: ./research-and-fact-checking
    - suggestion: /v2/resources/documentation-guide/ai-automations/research-and-fact-checking (same leaf segment match, score 0.65)
    - suggestion: /v2/resources (high path similarity, score 0.6667)
    - suggestion: /v2/resources/changelog (high path similarity, score 0.6667)
    - suggestion: /v2/resources/documentation-guide (high path similarity, score 0.6667)
    - suggestion: /v2/resources/help-center (high path similarity, score 0.6667)

## Generator-Owned Findings
- None

