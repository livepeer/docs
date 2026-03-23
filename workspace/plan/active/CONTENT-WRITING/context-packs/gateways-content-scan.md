# Gateways — Content Scan

**Tab**: Gateways
**Scan date**: 2026-03-23
**Docs.json source**: v2 navigation block
**v2/gateways/ folder scanned**: yes
**Status**: DRAFT — awaiting human review

---

## Summary

**Total pages in docs.json navigation (v2/gateways/ only)**: 99 paths listed; 98 unique after deduplication (3 tutorial pages appear in both Quickstart and Guides groups); 1 path is outside v2/gateways/ (`docs-guide/tooling/reference-maps/icon-map` — not scanned)
**Unique v2/gateways pages scanned**: 98
**Files found on disk for all 98**: 98 (all present)
**Empty (in nav, no file)**: 0
**Stubs (<100 words)**: 22
**Draft (draft: true)**: 0
**Current**: 76
**Pages with deprecated pageType values**: 10
**Pages with unknown/non-canonical pageType values**: 20
**Pages with incomplete frontmatter (missing required fields)**: 98 (every page missing `lifecycleStage`; many missing `description`)
**Workspace artefacts listed**: 7 (non-archive)

---

## Page Inventory

---

### Gateway Home Portal · `v2/gateways/portal`

**Status**: current
**Section/group**: Home
**File size**: 5521 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Home Portal | yes |
| description | MISSING | no — missing |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | gateway-operator | no — should be `gateway` |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` deprecated (→ `navigation`); `audience: gateway-operator` non-canonical (→ `gateway`); `purpose: landing` deprecated (→ `orient`); `lifecycleStage` missing; `description` missing

**Heading structure**:
No body headings found (portal page uses component layout only)

**Content summary**:
The portal is the tab entry point — a navigation/routing page that orients arriving gateway operators and routes them to their first action. It uses a component-heavy layout (portal card grid) rather than prose, providing quick links to quickstart, concepts, and guides sections. It serves first-time visitors who need to understand where to begin.

---

### Gateway Navigator · `v2/gateways/navigator`

**Status**: current
**Section/group**: Home
**File size**: 19050 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Navigator' | yes (quote-stripped) |
| description | MISSING | no — missing |
| pageType | 'overview' | UNKNOWN_TYPE (quotes stripped: `overview` — deprecated, maps to `navigation` or `concept` depending on use; here it functions as routing/disambiguation) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | overview | DEPRECATED: maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: overview` deprecated/unknown; `audience: gateway-operator` non-canonical; `purpose: overview` deprecated; `lifecycleStage` missing; `description` missing

**Heading structure**:
- `## What's your goal?`
- `## Operational Mode`
- `## Your journey through the docs`
- `## Guides by topic`
- `## Find your entry point by persona`

**Content summary**:
The navigator is a secondary routing/disambiguation page that helps readers who have landed in the tab but are not yet oriented. It routes by goal, operational mode (on-chain vs off-chain vs AI), and persona, directing readers to the right starting point in the tab. It is a self-identification page — the reader does not need to read it sequentially but should visit it if they are confused about where to start.

---

### The Gateway Role in the Livepeer Network · `v2/gateways/concepts/role`

**Status**: current
**Section/group**: Concepts
**File size**: 16764 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'The Gateway Role in the Livepeer Network' | yes |
| description | MISSING | no — missing |
| pageType | 'overview' | UNKNOWN_TYPE (quote-stripped: `overview`; functions as a concept page) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | 'overview' | DEPRECATED: maps to `orient` or `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: overview` non-canonical (→ `concept`); `audience: gateway-operator` (→ `gateway`); `purpose: overview` deprecated; `lifecycleStage` missing; `description` missing

**Heading structure**:
- `## Technical Role`
- `## Business Role`
- `## Network Role`
- `## Operational Mode`
- `## Related Pages`

**Content summary**:
Defines what a Livepeer gateway IS — its technical function as a traffic router between AI/video applications and the orchestrator network, its business role as the revenue-generating layer, and its position within the broader Livepeer network architecture. This is the first of four concepts pages and answers the "what IS this?" question for an arriving operator. It is orienting content for first-time readers.

---

### Gateway Capabilities · `v2/gateways/concepts/capabilities`

**Status**: current
**Section/group**: Concepts
**File size**: 11307 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Capabilities | yes |
| description | MISSING | no — missing |
| pageType | concept | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience: gateway-operator` (→ `gateway`); `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `description` missing

**Heading structure**:
- `## Gateway Functions`
- `## Workload Types`
- `### BYOC (Bring Your Own Container)`
- `## Orchestrator Selection`
- `### Discovery Methods`

**Content summary**:
Covers what a gateway can DO — the workload types it supports (video transcoding, batch AI inference, real-time AI, BYOC), how it selects orchestrators, and the capabilities that differentiate it from a hosted API. This is the second concepts page and answers the "what can it DO?" question for an operator evaluating whether to run gateway infrastructure.

---

### Gateway Architecture · `v2/gateways/concepts/architecture`

**Status**: current
**Section/group**: Concepts
**File size**: 14974 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Architecture | yes |
| description | MISSING | no — missing |
| pageType | concept | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience: gateway-operator` (→ `gateway`); `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `description` missing

**Heading structure**:
- `## Gateway Layer Context`
- `## Gateway Interactions`
- `### Applications`
- `### Orchestrators`
- `### Remote Signer`

**Content summary**:
Explains how a gateway works technically — the request routing path from application to orchestrator, the role of the remote signer, payment flows, and how gateway nodes interact with other network participants. This is the third concepts page, answering "how does it WORK?" for an operator in the evaluating stage.

---

### Gateway Business Model · `v2/gateways/concepts/business-model`

**Status**: current
**Section/group**: Concepts
**File size**: 10968 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Business Model | yes |
| description | MISSING | no — missing |
| pageType | concept | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience: gateway-operator` (→ `gateway`); `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `description` missing

**Heading structure**:
- `## Payments Flow`
- `## Gateway Earnings`
- `## Gateway Costs`
- `### Currency`
- `## Gateway Operator Models`

**Content summary**:
Covers the economics of running a gateway — how payments flow between applications, gateways, and orchestrators; what a gateway earns and what it costs to operate; the difference between on-chain and off-chain payment models; and the different commercial models a gateway operator can adopt. This is the fourth concepts page, answering "should I CARE?" for an operator making an investment decision.

---

### Run a Gateway: Quickstart Guide · `v2/gateways/quickstart/gateway-setup`

**Status**: current
**Section/group**: Quickstart
**File size**: 10302 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Run a Gateway: Quickstart Guide' | yes |
| description | MISSING | no — missing |
| pageType | quickstart | DEPRECATED: maps to `instruction` (pageVariant: quickstart) |
| audience | gateway-operator | no — should be `gateway` |
| purpose | how_to | DEPRECATED: maps to `build` or `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: quickstart` deprecated (→ `instruction`); `audience: gateway-operator` (→ `gateway`); `purpose: how_to` deprecated (→ `start`); `lifecycleStage` missing; `description` missing

**Heading structure**:
- `# Let's Go(-Livepeer)!`
- `## End-to-end test loop with an orchestrator`
- `## Troubleshooting`
- `## Related Pages`
- `## Assumed`

**Content summary**:
The primary quickstart for the Gateways tab — provides the fastest path to a running gateway with a minimal off-chain configuration for testing purposes. Targets readers who want to verify their setup before committing to on-chain operation. It is a linear, first-time reader page in the setup lifecycle stage.

---

### BYOC smoke-test: CPU gateway and orchestrator · `v2/gateways/guides/tutorials/byoc-cpu-tutorial`

**Status**: current
**Section/group**: Quickstart (also appears in Tutorial: Zero-to-Hero group — duplicate nav entry)
**File size**: 24609 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)' | yes |
| description | MISSING | no — missing |
| pageType | tutorial | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | tutorial | DEPRECATED: maps to `learn` or `build` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience: gateway-operator` (→ `gateway`); `purpose: tutorial` deprecated (→ `build`); `lifecycleStage` missing; `description` missing
**Nav note**: Appears in two nav groups — Quickstart and Tutorial: Zero-to-Hero (same path, listed twice in docs.json).

**Heading structure**:
- `## Prerequisites`
- `## Architecture overview`
- `## Part 1: Build the CPU BYOC container`
- `## Part 2: Run the orchestrator`
- `## Part 3: Run the gateway (off-chain mode)`

**Content summary**:
A hands-on tutorial for building and running a BYOC (Bring Your Own Container) CPU pipeline from scratch — covering building the container, running an orchestrator, and running the gateway in off-chain mode. Serves readers who want to test the BYOC pipeline before investing in GPU infrastructure or on-chain operation.

---

### Get AI to Setup the Gateway · `v2/gateways/quickstart/AI-prompt`

**Status**: current
**Section/group**: Quickstart
**File size**: 8826 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Get AI to Setup the Gateway | yes |
| description | MISSING | no — missing |
| pageType | quickstart | DEPRECATED: maps to `instruction` (pageVariant: quickstart) |
| audience | gateway-operator | no — should be `gateway` |
| purpose | tutorial | DEPRECATED: maps to `start` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: quickstart` deprecated; `audience: gateway-operator` (→ `gateway`); `purpose: tutorial` deprecated; `lifecycleStage` missing; `description` missing

**Heading structure**:
- `# LIVEPEER GATEWAY SETUP`
- `## STAGE 0 - ASK ME FIRST`
- `## STAGE 1 - OS-SPECIFIC INSTALL`
- `### Linux (recommended for production)`
- `### macOS (dev/local only)`

**Content summary**:
An AI-assisted setup page — provides a structured prompt that readers can paste into an AI assistant to walk them through gateway installation interactively. Targets readers who prefer an AI-guided setup experience over reading linear instructions. Unusual format: the page content IS the AI prompt, not documentation about the AI prompt.

---

### Run a Gateway · `v2/gateways/setup/run-a-gateway`

**Status**: current
**Section/group**: Run A Gateway > Gateway Setup Guide
**File size**: 7390 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Run a Gateway | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED: maps to `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience: gateway-operator` (→ `gateway`); `purpose: operations` deprecated (→ `operate`); `lifecycleStage` missing; `description` missing

**Heading structure**:
- `## Introduction Gateways are essential infrastructure...`
- `## Gateway Modes`
- `## Gateway Capabilities`
- `## Gateway Architecture`
- `## Gateway Operator Journey`

**Content summary**:
Overview/entry page for the Setup Guide group — introduces gateway modes (off-chain, on-chain, AI, dual), capabilities, architecture summary, and the typical operator journey through the setup process. Bridges from the quickstart to the detailed setup flow. Overlaps significantly with concepts section content (role, capabilities, architecture are repeated here).

---

### Gateway Transcoding Guide · `v2/gateways/setup/transcoding`

**Status**: stub
**Section/group**: Run A Gateway > Gateway Setup Guide
**File size**: 1526 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Transcoding Guide | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED: maps to `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience: gateway-operator`; `purpose: operations` deprecated; `lifecycleStage` missing; `description` missing; stub content

**Heading structure**:
- `## Planned Structure`

**Content summary**:
STUB — page exists in docs.json and has frontmatter but contains only a "Planned Structure" placeholder heading with ~82 words of outline content. No substantive content. Creates a live nav link to an effectively empty page.

---

### Gateway Node Requirements · `v2/gateways/setup/requirements/setup`

**Status**: current
**Section/group**: Run A Gateway > Setup Checklist
**File size**: 9252 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Node Requirements | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED: maps to `evaluate` or `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Deployment Modes`
- `## Gateway Capabilities`
- `## Quick OS Table`
- `## Setup Requirements`

**Content summary**:
Covers hardware, OS, and networking requirements for gateway deployment across all operational modes. Provides an OS compatibility table and requirements by mode (off-chain, on-chain, AI, dual). Prerequisite reading before any installation path.

---

### On-Chain Setup Requirements · `v2/gateways/setup/requirements/on-chain setup/on-chain`

**Status**: current
**Section/group**: Run A Gateway > Setup Checklist
**File size**: 35665 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | On-Chain Setup Requirements | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Overview`
- `## ETH Account Setup`
- `## Security Notes`
- `## Easy Setup with Livepeer Tooling`
- `### Account Data Default Folders`

**Content summary**:
Detailed on-chain prerequisites — Ethereum account creation on Arbitrum One, security practices for key management, and setup tooling options. This is the most substantial single setup page (35KB), covering the critical on-chain infrastructure that must exist before an on-chain gateway can route jobs and receive payments.

---

### Fund The Livepeer Gateway · `v2/gateways/setup/requirements/on-chain setup/fund-gateway`

**Status**: current
**Section/group**: Run A Gateway > Setup Checklist
**File size**: 10271 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Fund The Livepeer Gateway | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `# Add Funds to Gateway Wallet`

**Content summary**:
Step-by-step instructions for depositing ETH into the gateway's on-chain payment account on Arbitrum One, including bridging from mainnet if needed. This is a prerequisite for on-chain operation — a gateway with insufficient funds cannot route on-chain jobs.

---

### Installation Overview · `v2/gateways/setup/install/install-overview`

**Status**: current
**Section/group**: Run A Gateway > Installation
**File size**: 4027 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Installation Overview | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Installation Methods`
- `## Gateway Modes`
- `## Gateway Capabilities`

**Content summary**:
Entry page for the Installation group — lists the available installation methods (Docker, Linux binary, Windows) and routes the reader to the correct installation page for their OS and mode. Brief orientation page (254 words); primarily routing rather than substantive content.

---

### Docker Install · `v2/gateways/setup/install/docker-install`

**Status**: current
**Section/group**: Run A Gateway > Installation
**File size**: 9751 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Docker Install | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Prerequisites`
- `## Pull the Livepeer Docker Image`
- `## Configure the Gateway`
- `## Create Livepeer Gateway ETH Account`
- `## Start the Gateway`

**Content summary**:
Step-by-step Docker installation instructions for gateway operators — pulling the image, configuring the container, creating an ETH account, and starting the gateway. Covers Docker as the recommended installation method for most operators.

---

### Linux Install · `v2/gateways/setup/install/linux-install`

**Status**: current
**Section/group**: Run A Gateway > Installation
**File size**: 11150 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Linux Install | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `# Create a file containing your Gateway Ethereum password`
- `# Create a system service`

**Content summary**:
Linux binary installation instructions — covers downloading the binary, configuring the ETH account password, and setting up a systemd service for production operation. Note: H1-level headings mid-page suggest structural issues (headings should be H2 within a page).

---

### Windows Install · `v2/gateways/setup/install/windows-install`

**Status**: current
**Section/group**: Run A Gateway > Installation
**File size**: 4823 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Windows Install | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Start the Livepeer Gateway`

**Content summary**:
Windows installation instructions. Thin content (278 words, one H2) — likely a placeholder or minimal reference for Windows operators. Windows is not a recommended production deployment platform based on context.

---

### Easy Install [DevOps & Community Projects] · `v2/gateways/setup/install/community-projects`

**Status**: current
**Section/group**: Run A Gateway > Installation
**File size**: 3212 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Easy Install [DevOps & Community Projects]' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `# Gateway HUB`
- `## GWID (Gateway Wizard)`
- `### GWID RFP & Updates`
- `### GWID Documentation`

**Content summary**:
Lists community-built installation tooling — primarily the GWID (Gateway Wizard) tool for simplified setup, and the Gateway HUB project. Serves operators who prefer community DevOps tools over manual installation. Content is thin (233 words) and primarily links out to external resources.

---

### Configuration Overview · `v2/gateways/setup/configure/configuration-overview`

**Status**: current
**Section/group**: Run A Gateway > Configuration
**File size**: 2852 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Configuration Overview | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Introduction`
- `## Configuration Methods`
- `## Configuration Options`
- `## Launch Pad`

**Content summary**:
Entry page for the Configuration group — explains the two configuration methods (CLI flags and config files), lists the four configuration profiles (video, AI, dual, pricing), and routes to the appropriate configuration page. Short routing page (208 words); the substantial configuration content is in the four sub-pages.

---

### Video Configuration · `v2/gateways/setup/configure/video-configuration`

**Status**: current
**Section/group**: Run A Gateway > Configuration
**File size**: 20650 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Video Configuration | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## TL;DR Configuration`
- `## Essential Configuration Flags`
- `## Comprehensive Configuration Guide`
- `### Configuration Methods`
- `### Configuration Examples`

**Content summary**:
Full configuration reference for video transcoding gateway operation — essential flags, configuration methods (CLI vs config file), and practical examples. Covers the core configuration needed to run a video gateway. Substantial page (596 words of prose plus extensive code examples).

---

### AI Configuration · `v2/gateways/setup/configure/ai-configuration`

**Status**: current
**Section/group**: Run A Gateway > Configuration
**File size**: 8990 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI Configuration | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Gateway Modes`
- `## Deploy a Gateway for AI Inference Services`
- `## Deploy an AI Gateway`
- `## Gateway Code Links`

**Content summary**:
Configuration guide for AI inference gateway operation — covering the AI-specific flags, deployment steps, and links to configuration code. Serves operators who want to run a gateway that processes AI workloads (text-to-image, LLM, etc.) through the Livepeer AI subnet.

---

### Configure AI & Video Dual Gateway Services · `v2/gateways/setup/configure/dual-configuration`

**Status**: current
**Section/group**: Run A Gateway > Configuration
**File size**: 12134 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Configure AI & Video Dual Gateway Services | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Overview`
- `## Configuration`
- `### AI-Specific Configuration`
- `### Transcoding Configuration`
- `# -transcodingOptions=P240p30fps16x9,P360p30fps16x9`

**Content summary**:
Configuration instructions for running a dual-mode gateway that handles both AI inference and video transcoding simultaneously. Covers the combined configuration flags and how AI and transcoding configuration interact. Note: an H1 heading appears mid-page in a code context — structural issue to flag.

---

### Pricing Configuration · `v2/gateways/setup/configure/pricing-configuration`

**Status**: current
**Section/group**: Run A Gateway > Configuration
**File size**: 12245 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Pricing Configuration | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Pricing Concepts`
- `## Pricing Configuration Flags`
- `## Fee Payment Calculation & Process`
- `## Configuration Methods`
- `## Orchestrator Configuration & Price Information (Gateway Reference)`

**Content summary**:
Configuration guide for gateway pricing — covering the pricing model, configuration flags for setting price caps and payment parameters, fee calculation mechanics, and how to read orchestrator pricing information. Operators need this to avoid overpaying for compute or being unable to route jobs due to price mismatches.

---

### Your First Gateway: Off-chain Transcoding · `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test`

**Status**: current
**Section/group**: Run A Gateway > End-to-End Tutorial (also Tutorial: Zero-to-Hero in Guides)
**File size**: 15872 bytes
**Nav note**: Duplicate nav entry — appears in two groups.

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Your First Gateway: Off-chain Transcoding' | yes |
| description | MISSING | no — missing |
| pageType | tutorial | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | tutorial | DEPRECATED: maps to `build` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Architecture`
- `## Prerequisites`
- `# Replace v0.8.10 with the latest release`
- `# https://github.com/livepeer/go-livepeer/releases`
- `# Ubuntu / Debian`

**Content summary**:
Tutorial 1 of the Zero-to-Hero series — builds a minimal off-chain gateway and transcoding test from scratch, verifying the setup works before proceeding to production. Serves first-time operators who want a confirmed working baseline before investing in on-chain registration. Note: H1 headings appearing in what appear to be code contexts — structural issue.

---

### Add AI: BYOC CPU Pipeline · `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline`

**Status**: current
**Section/group**: Run A Gateway > End-to-End Tutorial (also Tutorial: Zero-to-Hero in Guides)
**File size**: 20038 bytes
**Nav note**: Duplicate nav entry.

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Add AI: BYOC CPU Pipeline' | yes |
| description | MISSING | no — missing |
| pageType | tutorial | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | tutorial | DEPRECATED: maps to `build` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Architecture`
- `## Trickle Protocol`
- `## Prerequisites`
- `## Steps`
- `### Run the container`

**Content summary**:
Tutorial 2 — extends the off-chain baseline by adding a BYOC CPU container for AI inference. Covers the Trickle Protocol, BYOC container build, and connecting the AI pipeline to the gateway. Serves operators ready to add AI capabilities after confirming basic video operation.

---

### Go Production: On-chain, GPU, and Network · `v2/gateways/guides/tutorials/tutorial-3-go-production`

**Status**: current
**Section/group**: Run A Gateway > End-to-End Tutorial (also Tutorial: Zero-to-Hero in Guides)
**File size**: 23016 bytes
**Nav note**: Duplicate nav entry.

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Go Production: On-chain, GPU, and Network' | yes |
| description | MISSING | no — missing |
| pageType | tutorial | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | tutorial | DEPRECATED: maps to `build` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Which upgrades do you need?`
- `## Upgrade 1 - On-chain registration`
- `### What this gives you`
- `### 1.1 - Acquire ETH on Arbitrum One`
- `### 1.2 - Create a dedicated wallet for your gateway`

**Content summary**:
Tutorial 3 — the production upgrade path covering on-chain registration, GPU enablement, and connecting to the live Livepeer network. Structured as a series of optional upgrades from the baseline — operators select the upgrades they need. The most comprehensive tutorial (2142 words), serving operators ready to go live.

---

### Livepeer Marketplace Overview · `v2/gateways/setup/connect/lp-marketplace`

**Status**: current
**Section/group**: Run A Gateway > Network Connect
**File size**: 8419 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Marketplace Overview | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `# What is the Marketplace?`
- `## Orchestrator Offering Details`

**Content summary**:
Introduces the Livepeer Marketplace — the on-chain discovery mechanism for orchestrators and their compute offerings. Explains what information is published by orchestrators (models, pipelines, pricing) and how gateways use it for routing decisions. Entry page for the Network Connect group.

---

### Discover Marketplace Offerings · `v2/gateways/setup/connect/discover-offerings`

**Status**: current
**Section/group**: Run A Gateway > Network Connect
**File size**: 3734 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Discover Marketplace Offerings | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Discovery Process`
- `## Find All Orchestrators & Offerings`
- `## Gateway`
- `### 1. Supported Models`
- `### 2. Supported Pipelines`

**Content summary**:
Instructions for querying the Livepeer Marketplace to discover available orchestrators and their offerings (supported models, pipelines, pricing). Short page (169 words); primarily procedural.

---

### Discover & Connect Marketplace Compute Services · `v2/gateways/setup/connect/connect-with-offerings`

**Status**: current
**Section/group**: Run A Gateway > Network Connect
**File size**: 3763 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Discover & Connect Marketplace Compute Services | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `# How to Discover & Connect Marketplace Offerings`
- `## Discovery Process`
- `## Find All Orchestrators & Offerings`
- `## Gateway`
- `### 1. Supported Models`

**Content summary**:
Step-by-step instructions for connecting a gateway to specific orchestrator offerings discovered in the marketplace. Overlaps significantly with discover-offerings.mdx — both pages cover the same discovery process with nearly identical heading structures. Likely candidates for merge.

---

### Monitor & Optimise Gateway Services · `v2/gateways/setup/monitor/monitor-and-optimise`

**Status**: current
**Section/group**: Run A Gateway > Monitor & Optimise
**File size**: 4852 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Monitor & Optimise Gateway Services | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Request Routing`
- `## Payment Models`
- `## Operational Considerations`

**Content summary**:
Overview page for monitoring and optimisation in the context of the setup flow — covering request routing, payment models, and operational considerations at a high level. Short (353 words); bridges from initial setup to the operational guides section. Largely duplicates content available in detail elsewhere.

---

### Gateway Business Case · `v2/gateways/guides/operator-considerations/business-case`

**Status**: current
**Section/group**: Guides > Operator Considerations
**File size**: 22422 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Business Case' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Hosted vs Self-Hosted`
- `## Business Model`
- `## Actor Earnings`
- `## Operator Models`
- `## Mode Economics`

**Content summary**:
Detailed economics analysis for gateway operation — comparing hosted vs self-hosted economics, earnings models (per-job fees, premium services, NaaP revenue), operator models (individual vs commercial vs platform), and mode-by-mode economic comparison. Serves operators making a build-vs-buy decision and commercial operators sizing their business case.

---

### Public and Commercial Gateways Operating on Livepeer · `v2/gateways/guides/operator-considerations/production-gateways`

**Status**: current
**Section/group**: Guides > Operator Considerations
**File size**: 15465 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Public and Commercial Gateways Operating on Livepeer' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Gateway Operators`
- `## Commercial Products`
- `### Daydream`
- `### Streamplace`
- `### Embody Avatars`

**Content summary**:
Directory and case studies of real gateways running on the Livepeer network — including commercial products (Daydream, Streamplace, Embody), independent gateway operators, and SPE-funded examples. Serves operators researching what real-world gateway deployments look like before committing to their own.

---

### Gateway Setup Options · `v2/gateways/guides/deployment-details/setup-options`

**Status**: current
**Section/group**: Guides > Deployment Options
**File size**: 12230 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Setup Options' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | orientation | DEPRECATED: maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Setup Types`
- `## Next Steps`

**Content summary**:
Orientation page for deployment options — covers the four setup types (off-chain, on-chain, AI, dual) with decision guidance for choosing between them. Routes to the detailed requirements page. Serves operators in the evaluation stage deciding which deployment path to follow.

---

### Gateway Requirements · `v2/gateways/guides/deployment-details/setup-requirements`

**Status**: current
**Section/group**: Guides > Deployment Options
**File size**: 16871 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Requirements' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Hardware`
- `## Operating Systems`
- `## Networking Needs`
- `## On-Chain Requirements`
- `## Off-Chain Requirements`

**Content summary**:
Comprehensive requirements reference covering hardware, OS, networking, and on-chain/off-chain prerequisites for each deployment mode. More detailed than the setup/requirements/setup.mdx page — overlapping content between these two pages needs audit (likely merge or cross-reference candidates).

---

### AI and Job Pipelines Overview · `v2/gateways/guides/node-pipelines/guide`

**Status**: current
**Section/group**: Guides > AI and Job Pipelines
**File size**: 18213 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'AI and Job Pipelines Overview' | yes |
| description | MISSING | no — missing |
| pageType | overview | DEPRECATED_TYPE: maps to `guide` (with pageVariant: overview) |
| audience | gateway-operator | no — should be `gateway` |
| purpose | orientation | DEPRECATED: maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Gateway Role`
- `## Node Types`
- `### Video Transcoding`
- `### Batch AI Inference`
- `### Real-time AI`

**Content summary**:
Overview of the different job pipeline types that gateways can handle — video transcoding, batch AI inference, real-time AI, and BYOC. Explains how the gateway mediates between application requests and orchestrator capabilities for each pipeline type. Entry page for the pipeline guides section.

---

### Video & Transcoding Pipelines · `v2/gateways/guides/node-pipelines/video-pipelines`

**Status**: current
**Section/group**: Guides > AI and Job Pipelines
**File size**: 23558 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Video & Transcoding Pipelines' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Architecture`
- `## Ingest`
- `## Orchestrator Selection`
- `## Transcoding`
- `### Built-in rendition presets`

**Content summary**:
Detailed guide to video transcoding pipeline architecture — covering ingest, orchestrator selection for video jobs, transcoding processing, output delivery, and rendition options. Serves operators who need to understand how video jobs flow through their gateway before configuring or troubleshooting.

---

### AI Pipelines on Livepeer · `v2/gateways/guides/node-pipelines/ai-pipelines`

**Status**: current
**Section/group**: Guides > AI and Job Pipelines
**File size**: 29278 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'AI Pipelines on Livepeer' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Request flow`
- `## AI vs Video Comparison`
- `## Available Pipelines`
- `### Standard API Pipelines`
- `### Pricing Control`

**Content summary**:
Detailed guide to AI inference pipeline architecture — the request flow from application to orchestrator, comparison with video transcoding pipelines, available AI pipeline types (text-to-image, LLM, audio, etc.), and pricing control mechanisms. Largest pipeline guide page (29KB).

---

### BYOC Pipelines · `v2/gateways/guides/node-pipelines/byoc-pipelines`

**Status**: current
**Section/group**: Guides > AI and Job Pipelines
**File size**: 17912 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'BYOC Pipelines' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## BYOC Routing`
- `## Gateway Responsibilities`
- `## Capability Contracts`
- `## Routing Profiles`
- `## BYOC Requirements`

**Content summary**:
Guide to BYOC (Bring Your Own Container) pipelines — how custom containerised workloads are routed through the gateway, capability contract requirements, routing profiles, and implementation prerequisites. Serves operators building custom AI pipelines that run on Livepeer infrastructure rather than standard API endpoints.

---

### Pipeline Configuration · `v2/gateways/guides/node-pipelines/pipeline-configuration`

**Status**: current
**Section/group**: Guides > AI and Job Pipelines
**File size**: 22765 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Pipeline Configuration' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Configuration Details`
- `## Key Differences`
- `## Configuration Verification`
- `## Related Pages`

**Content summary**:
Configuration reference for the different pipeline types — covering the key differences in configuration between video, AI, and BYOC pipelines, with verification steps and cross-references. Serves operators who need to configure specific pipeline types after understanding the architecture.

---

### Payment Paths for Gateway Operators · `v2/gateways/guides/payments-and-pricing/payment-guide`

**Status**: current
**Section/group**: Guides > Payments and Pricing
**File size**: 10165 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Payment Paths for Gateway Operators' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | 'orientation' | DEPRECATED: maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Payments Guide`
- `## Operational Modes`
- `## Payment Setup`
- `## Related Pages`

**Content summary**:
Overview and routing page for the payments section — explains on-chain vs off-chain payment paths, what each mode requires, and routes to the relevant detailed guides. Entry page for the payments group serving operators who need to understand payment before committing to a deployment mode.

---

### Guide to Funding an On-Chain Gateway · `v2/gateways/guides/payments-and-pricing/funding-guide`

**Status**: current
**Section/group**: Guides > Payments and Pricing
**File size**: 11080 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Guide to Funding an On-Chain Gateway' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Prerequisites`
- `## Step 1 - Get ETH`
- `## Step 2 - Transfer`
- `## Step 3 - Deposit`
- `## Monitoring`

**Content summary**:
Step-by-step guide for funding the on-chain payment account — getting ETH on Arbitrum, transferring to the gateway wallet, depositing into the payment contract, and monitoring the deposit. Overlaps with setup/requirements/on-chain setup/fund-gateway.mdx (same process covered in two places).

---

### Gateway Pricing Strategy · `v2/gateways/guides/payments-and-pricing/pricing-strategy`

**Status**: current
**Section/group**: Guides > Payments and Pricing
**File size**: 16537 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Pricing Strategy' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Pricing Mechanics`
- `## Pricing Configuration`
- `## Pricing Flag Reference`
- `## Pricing Cap Guidance`
- `## Pricing Setup Paths`

**Content summary**:
Operational guide to gateway pricing strategy — how pricing mechanics work in practice, configuration flags for setting price constraints, guidance on appropriate pricing caps, and different pricing setup paths for different operator types. Complements the setup/configure/pricing-configuration.mdx page (which is setup-focused; this page is operations-focused).

---

### Remote Signers · `v2/gateways/guides/payments-and-pricing/remote-signers`

**Status**: current
**Section/group**: Guides > Payments and Pricing
**File size**: 16135 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Remote Signers' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Benefits`
- `### Key Isolation`
- `### Platform Flexibility`
- `## Signer Mechanics`
- `### 1. GetOrchestratorInfo signature`

**Content summary**:
Guide to remote signing for gateway payment security — explaining what remote signers are, why they isolate private keys from the gateway node, the signing mechanics, and how to configure a remote signer. Serves operators who need production-grade key security (cannot store signing keys on the gateway node itself).

---

### Payment Clearinghouses · `v2/gateways/guides/payments-and-pricing/clearinghouse-guide`

**Status**: current
**Section/group**: Guides > Payments and Pricing
**File size**: 13119 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Payment Clearinghouses' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Architecture`
- `## Responsibilities`
- `## Clearinghouse Setup`
- `## Building A Clearinghouse`
- `## Current Status`

**Content summary**:
Guide to payment clearinghouses — the multi-tenant payment abstraction layer that separates client billing from on-chain network payments. Covers architecture, clearinghouse responsibilities, setup requirements, and how to build a clearinghouse for a NaaP/multi-tenant deployment. Serves commercial gateway operators running multi-tenant platforms.

---

### Gateway Health Checks · `v2/gateways/guides/monitoring-and-tooling/health-checks`

**Status**: current
**Section/group**: Guides > Monitoring and Tooling
**File size**: 14448 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Health Checks' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Universal Checks`
- `### HTTP health endpoint`
- `### Node status via livepeer_cli`
- `# Standard (binary on host)`
- `# Docker container`

**Content summary**:
Operational guide to verifying gateway health — HTTP health endpoint checks, node status via CLI, and mode-specific checks for Docker vs binary deployments. Serves operators who need to confirm their gateway is running correctly after setup or following an incident. Note: H1 headings mid-page in what appear to be code/shell contexts.

---

### Tools & Dashboards · `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards`

**Status**: current
**Section/group**: Guides > Monitoring and Tooling
**File size**: 15564 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Tools & Dashboards' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Quick Reference`
- `## Overview`
- `## Tools and Dashboards Detail`
- `## Related Pages`

**Content summary**:
Directory and guide to monitoring tools — covering available dashboards (Livepeer.org Explorer, Grafana), analytics tools, and monitoring integrations. Serves operators who need to choose and set up their monitoring stack beyond the basic health checks.

---

### Monitoring Setup · `v2/gateways/guides/monitoring-and-tooling/monitoring-setup`

**Status**: current
**Section/group**: Guides > Monitoring and Tooling
**File size**: 19373 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Monitoring Setup' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Enable Metrics`
- `## Setup`
- `## Key Metrics`
- `## Grafana Dashboards`
- `## Alert Rules`

**Content summary**:
Step-by-step guide to setting up Prometheus metrics collection and Grafana dashboards for gateway monitoring — enabling metrics export, configuring Prometheus scraping, importing Grafana dashboards, and defining alert rules. Serves operators establishing a production monitoring stack.

---

### On-Chain Metrics and Monitoring · `v2/gateways/guides/monitoring-and-tooling/on-chain-metrics`

**Status**: current
**Section/group**: Guides > Monitoring and Tooling
**File size**: 12913 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'On-Chain Metrics and Monitoring' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Arbiscan`
- `### Find the Gateway`
- `### Contract Events`
- `### Watchlist Alerts`
- `## Deposit Verification`

**Content summary**:
Guide to monitoring on-chain gateway activity via Arbiscan — finding the gateway contract, reading contract events, setting up watchlist alerts for deposit and ticket events, and verifying deposit status. Serves on-chain operators who need to monitor payment flows and ticket redemption activity.

---

### Gateway Troubleshooting · `v2/gateways/guides/monitoring-and-tooling/troubleshooting`

**Status**: current
**Section/group**: Guides > Monitoring and Tooling
**File size**: 24992 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Troubleshooting' | yes |
| description | MISSING | no — missing |
| pageType | troubleshooting | DEPRECATED: maps to `reference` (pageVariant: compendium) |
| audience | gateway-operator | no — should be `gateway` |
| purpose | troubleshooting | DEPRECATED: maps to `troubleshoot` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Video Issues`
- `## AI Issues`
- `## Dual Issues`
- `## Common Errors`
- `## Log Interpretation`

**Content summary**:
Troubleshooting reference for gateway operators — organised by mode (video, AI, dual) and covering common errors with diagnosis steps and fixes, plus log interpretation guidance. The most comprehensive troubleshooting resource (25KB). Serves operators diagnosing production issues.

---

### Orchestrator Selection & Tiering · `v2/gateways/guides/advanced-operations/orchestrator-selection`

**Status**: current
**Section/group**: Guides > Advanced Operations
**File size**: 16678 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Orchestrator Selection & Tiering' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Selection Algorithm`
- `## Workload Criteria`
- `## Orchestrator Settings`
- `## Tiering Strategy`
- `## Failover Behaviour`

**Content summary**:
Advanced guide to orchestrator selection and tiering — how the gateway's selection algorithm works, workload-specific selection criteria, orchestrator settings that influence selection, tiering strategies for production operators, and failover behaviour. Serves experienced operators who want fine-grained control over how jobs are routed.

---

### Scaling & Resource Management · `v2/gateways/guides/advanced-operations/scaling`

**Status**: current
**Section/group**: Guides > Advanced Operations
**File size**: 16834 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Scaling & Resource Management' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Scaling Signals`
- `## Capacity Planning`
- `## Related Pages`

**Content summary**:
Guide to scaling gateway infrastructure — identifying scaling signals from metrics, capacity planning for different workload types, and resource management considerations. Serves commercial operators managing gateways under real production load who need to plan for growth.

---

### Gateway Middleware · `v2/gateways/guides/advanced-operations/gateway-middleware`

**Status**: current
**Section/group**: Guides > Advanced Operations
**File size**: 18471 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Middleware' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Responsibilities`
- `## Architecture`
- `## Authentication`
- `## Settings`
- `## Middleware vs Clearinghouse`

**Content summary**:
Guide to gateway middleware — the application layer that sits between client applications and the gateway node, handling authentication, rate limiting, billing, and request routing for multi-tenant deployments. Explains how middleware differs from a clearinghouse and when each is needed.

---

### Publishing a Gateway · `v2/gateways/guides/advanced-operations/gateway-discoverability`

**Status**: current
**Section/group**: Guides > Advanced Operations
**File size**: 13795 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Publishing a Gateway' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Capability Advertising`
- `## Discovery Methods`
- `## Marketplace Context`
- `## Video Gateways`
- `## On-chain Discovery`

**Content summary**:
Guide to making a gateway discoverable — capability advertising, discovery methods (Livepeer Explorer, direct connection, on-chain registry), and how to publish a gateway for the Livepeer Marketplace. Serves operators who want their gateway to be found and used by applications or other network participants.

---

### Operator Support & Programmes · `v2/gateways/guides/roadmap-and-funding/operator-support`

**Status**: current
**Section/group**: Guides > Roadmap and Funding
**File size**: 8861 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Operator Support & Programmes' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Funding Paths`
- `## Community Resources`
- `## Contribute`
- `## Related Pages`

**Content summary**:
Overview of support resources for gateway operators — funding paths (grants, SPEs), community resources (Discord, forum, office hours), and contribution opportunities. Routes operators to the support infrastructure they need after setup.

---

### SPE Grant Model for Gateway Operators · `v2/gateways/guides/roadmap-and-funding/spe-grant-model`

**Status**: current
**Section/group**: Guides > Roadmap and Funding
**File size**: 12670 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'SPE Grant Model for Gateway Operators' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## What is an SPE?`
- `## SPEs operating gateways today`
- `## What the SPE model enables for gateway operators`
- `## What makes a fundable SPE proposal`
- `## How to propose an SPE`

**Content summary**:
Detailed guide to the SPE (Special Purpose Entity) grant model — what SPEs are, current gateway SPEs, what the model enables, what makes a fundable proposal, and the proposal process. Serves operators considering applying for Foundation funding to build or scale gateway infrastructure.

---

### NaaP & Multi-Tenancy · `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy`

**Status**: current
**Section/group**: Guides > Roadmap and Funding
**File size**: 14446 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'NaaP & Multi-Tenancy' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## What NaaP solves`
- `## Two independent payment layers`
- `## Reference implementation: the NaaP dashboard`
- `## Multi-tenant architecture`
- `### Authentication flow`

**Content summary**:
Guide to the NaaP (Network-as-a-Product) model and multi-tenant gateway architecture — what NaaP solves (abstracting on-chain complexity for end clients), the dual payment layer architecture, the NaaP dashboard reference implementation, and multi-tenant authentication flows. Serves commercial operators building products on top of Livepeer where clients should not need to understand the underlying network.
**Note**: NaaP acronym inconsistency flagged in Phase 1 testing (see gateways/v4.md learnings): "Network as a Platform" vs "Network-as-a-Product" — verify against livepeer/naap repo before content rewrite.

---

### Gateway Showcase · `v2/gateways/guides/roadmap-and-funding/gateway-showcase`

**Status**: current
**Section/group**: Guides > Roadmap and Funding
**File size**: 13091 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Showcase' | yes |
| description | MISSING | no — missing |
| pageType | 'guide' | yes (quote-stripped) |
| audience | 'gateway-operator' | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Commercial products and platforms`
- `### Daydream`
- `### Livepeer Studio`
- `### Livepeer Cloud (Cloud SPE)`
- `### Embody Avatars`

**Content summary**:
Showcase of commercial products and platforms built on Livepeer gateways — covering Daydream, Livepeer Studio, Livepeer Cloud, Embody Avatars, and independent gateway operators. Serves operators researching the commercial landscape and evaluating what is possible. Overlaps significantly with guides/operator-considerations/production-gateways.mdx — two pages covering the same showcase/directory content.

---

### Gateway FAQ · `v2/gateways/resources/faq`

**Status**: current
**Section/group**: Resources
**File size**: 17846 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway FAQ' | yes |
| description | MISSING | no — missing |
| pageType | faq | DEPRECATED: maps to `reference` (pageVariant: compendium) |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## General`
- `## Video Gateway`
- `## AI Gateway`
- `## External Resources`
- `# Gateway FAQ`

**Content summary**:
Frequently asked questions organised by gateway type (general, video, AI) — covering common setup questions, configuration queries, and operational issues. The primary self-service Q&A resource for gateway operators, complementing the troubleshooting guide.

---

### Gateway Terminology Glossary · `v2/gateways/resources/glossary`

**Status**: current
**Section/group**: Resources
**File size**: 11127 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway Terminology Glossary' | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Deployment`
- `## Operational Mode`
- `## Setup Type`
- `## Node Type`
- `## Key Terms`

**Content summary**:
Curated glossary of gateway-specific terminology — organised by category (deployment, operational mode, setup type, node type, key terms). Human-maintained, focused on the Gateways tab vocabulary. Note: a second, larger glossary exists at resources/compendium/glossary.mdx (3638 words vs 888 here) — the relationship between the two needs clarification.

---

### Technical Architecture · `v2/gateways/resources/technical/technical-architecture`

**Status**: current
**Section/group**: Resources > Technical Reference
**File size**: 6937 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Technical Architecture | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `### BYOC (Bring Your Own Container) Architecture`

**Content summary**:
Technical reference for BYOC architecture — focused on the BYOC container specification and integration points. Short (215 words, single H3); likely a stub or partial reference that should be expanded.

---

### Gateway Configuration Flags · `v2/gateways/resources/technical/configuration-flags`

**Status**: stub
**Section/group**: Resources > Technical Reference
**File size**: 1338 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Configuration Flags | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Gateway Configuration Flags`

**Content summary**:
STUB — heading only, no content (49 words). Intended to be a complete configuration flag reference but currently empty. Creates a live dead-end link in the nav — P0 issue for the IA audit.

---

### Contract Addresses · `v2/gateways/resources/technical/contract-addresses`

**Status**: current
**Section/group**: Resources > Technical Reference
**File size**: 14294 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Contract Addresses | yes |
| description | MISSING | no — missing |
| pageType | 'reference' | yes (quote-stripped) |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Current`
- `### Arbitrum One`
- `### Ethereum Mainnet`
- `## Historical (DEPRECATED — FOR REFERENCE ONLY)`
- `### Arbitrum One`

**Content summary**:
Reference table of Livepeer protocol contract addresses on Arbitrum One and Ethereum Mainnet — current addresses plus historical deprecated addresses. Critical reference for operators who need to interact directly with contracts (on-chain registration, ticket redemption, bonding).

---

### Gateway CLI Commands · `v2/gateways/resources/technical/cli-commands`

**Status**: current
**Section/group**: Resources > Technical Reference
**File size**: 4123 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway CLI Commands | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `# Livepeer CLI Commands`
- `## Quick Reference`
- `## Detailed Command List`
- `### General Commands (All Node Types)`
- `### Gateway/Broadcaster Commands`

**Content summary**:
Reference for livepeer_cli commands — quick reference table and detailed command list organised by node type (general, gateway/broadcaster, monitoring). Note: H1 heading at top is unusual for a sub-page; should be H2.

---

### AI API Portal · `v2/gateways/resources/technical/api-reference/AI-API/ai`

**Status**: current
**Section/group**: Resources > Technical Reference > AI API
**File size**: 4145 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI API Portal | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Base URLs`
- `## Endpoints`
- `## Other Endpoints`

**Content summary**:
Entry portal for the AI API reference — lists base URLs, available endpoints, and links to individual endpoint reference pages. Navigation/index page for the AI API section.

---

### AI API Endpoint Pages (stub group) · `v2/gateways/resources/technical/api-reference/AI-API/[endpoint]`

The following 13 AI API endpoint pages all share the same pattern:

**Status**: stub (0 words of body content each)
**Section/group**: Resources > Technical Reference > AI API
**File sizes**: 399–574 bytes (frontmatter only, no rendered content)

**Pages**: text-to-image · image-to-image · image-to-video · upscale · audio-to-text · segment-anything-2 · llm · image-to-text · live-video-to-video · text-to-speech · health · hardware-info · hardware-stats

**Frontmatter (consistent across all)**:
- `pageType: reference` — canonical
- `audience: gateway-operator` — non-canonical (→ `gateway`)
- `purpose: reference` — canonical
- `lifecycleStage`: MISSING

**Frontmatter completeness**: incomplete (all)
**Content summary**: STUB — each page contains frontmatter only and an OpenAPI spec import tag (`<OpenApiDoc ... />`). No prose content. The pages render as API reference via OpenAPI import — they may not count as "empty" if the OpenAPI component renders content. Flag for structure-audit review: are these functional API reference pages (content rendered by component) or genuine stubs?

---

### CLI HTTP API Portal · `v2/gateways/resources/technical/api-reference/CLI-HTTP/cli-http-api`

**Status**: current
**Section/group**: Resources > Technical Reference > CLI HTTP API
**File size**: 4834 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | CLI HTTP API API Portal | yes (note: "API" repeated in title) |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## HTTP API Endpoints`
- `### General Commands (All Node Types)`
- `### Gateway/Broadcaster Commands`
- `## Base URLs`
- `## Status Endpoints`

**Content summary**:
Entry portal for the CLI HTTP API reference — lists available HTTP endpoints, base URLs, and status endpoints for the livepeer_cli HTTP interface. Navigation index for the CLI HTTP API section.

---

### CLI HTTP API Endpoint Pages (stub group) · `v2/gateways/resources/technical/api-reference/CLI-HTTP/[endpoint]`

The following 8 CLI HTTP API endpoint pages all share the same stub pattern:

**Status**: stub (0 words each)
**Section/group**: Resources > Technical Reference > CLI HTTP API
**File sizes**: 410–470 bytes

**Pages**: unbond · rebond · activateorchestrator · setbroadcastconfig · setmaxpriceforcapability · reward · transfertokens · signmessage

**Frontmatter (consistent across all)**:
- `pageType: reference` — canonical
- `audience: gateway-operator` — non-canonical
- `purpose: reference` — canonical
- `lifecycleStage`: MISSING

**Frontmatter completeness**: incomplete (all)
**Content summary**: STUB — each page contains frontmatter only and an OpenAPI spec import tag. Same pattern as AI API endpoints — flag for structure-audit review (functional via component vs genuine stub).

---

### Livepeer Exchanges · `v2/gateways/resources/technical/livepeer-exchanges`

**Status**: stub
**Section/group**: Resources > Technical Reference
**File size**: 1300 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Exchanges | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Exchanges that support Livepeer`

**Content summary**:
STUB — lists heading and minimal content (72 words). Intended to be a reference for exchanges where LPT can be traded, relevant for operators acquiring LPT for staking/bonding.

---

### Arbitrum Exchange Reference · `v2/gateways/resources/technical/arbitrum-exchanges`

**Status**: stub
**Section/group**: Resources > Technical Reference
**File size**: 1402 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Arbitrum Exchange Reference | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Exchanges that support Arbitrum One`

**Content summary**:
STUB — minimal content (73 words). Reference for exchanges supporting Arbitrum One, relevant for operators who need ETH on Arbitrum for on-chain operation.

---

### Arbitrum RPCs · `v2/gateways/resources/technical/arbitrum-rpc`

**Status**: stub
**Section/group**: Resources > Technical Reference
**File size**: 687 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Arbitrum RPCs | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
No headings

**Content summary**:
STUB — no headings, 13 words of body content. Should contain a reference list of Arbitrum One RPC endpoints for on-chain gateway configuration.

---

### Bandwidth Requirements · `v2/gateways/resources/go-livepeer/bandwidth-requirements`

**Status**: current
**Section/group**: Resources > go-livepeer Reference
**File size**: 2120 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Bandwidth Requirements | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Note**: `pageType: guide` is probably wrong for a requirements reference page — should be `reference`.

**Heading structure**:
No headings

**Content summary**:
Reference data for bandwidth requirements for different gateway deployment modes. No headings — content is likely a table or list. Short (334 words).

---

### Hardware Requirements · `v2/gateways/resources/go-livepeer/hardware-requirements`

**Status**: current
**Section/group**: Resources > go-livepeer Reference
**File size**: 1270 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Hardware Requirements | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## GPU`
- `## CPU`
- `## RAM`
- `## Disk`

**Content summary**:
Reference table of hardware requirements organised by component (GPU, CPU, RAM, disk). Short (159 words) but properly structured. Complements the deployment-details/setup-requirements.mdx page.

---

### GPU Support · `v2/gateways/resources/go-livepeer/gpu-support`

**Status**: current
**Section/group**: Resources > go-livepeer Reference
**File size**: 4181 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | GPU Support | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Note**: `pageType: guide` — likely should be `reference` for a compatibility list.

**Heading structure**:
- `## Overview`

**Content summary**:
Reference for GPU compatibility with the Livepeer go-livepeer client — covering supported GPU models, CUDA version requirements, and compatibility notes. Short (311 words).

---

### CLI Reference · `v2/gateways/resources/go-livepeer/cli-reference`

**Status**: current
**Section/group**: Resources > go-livepeer Reference
**File size**: 6749 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | CLI Reference | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Note**: `pageType: guide` — should be `reference` for a CLI flag reference.

**Heading structure**:
- `## Options`
- `### Configuration`
- `### Network and Addresses`
- `### Transcoding`
- `### Onchain`

**Content summary**:
Reference for go-livepeer CLI flags and options — organised by category (configuration, network, transcoding, on-chain). Serves operators configuring the gateway binary directly rather than via Docker. Overlaps with resources/technical/cli-commands.mdx — two CLI reference pages likely need consolidation.

---

### Prometheus Metrics · `v2/gateways/resources/go-livepeer/prometheus-metrics`

**Status**: current
**Section/group**: Resources > go-livepeer Reference
**File size**: 13934 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Prometheus Metrics | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Livepeer metrics`
- `### General`
- `### Sending payments`
- `### Receiving payments`
- `### Pixel accounting`

**Content summary**:
Complete reference for Prometheus metrics exported by the go-livepeer client — organised by category (general, payments, pixel accounting). Serves operators setting up monitoring dashboards and alert rules who need to know which metrics are available.

---

### Gateway guides · `v2/gateways/resources/knowledge-base/guides`

**Status**: current
**Section/group**: Resources > Knowledge Base
**File size**: 19065 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway guides' | yes |
| description | MISSING | no — missing |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | gateway-operator | no — should be `gateway` |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Getting started`
- `## Off-chain AI gateway setup`
- `## BYOC — Bring Your Own Container`
- `## Video gateway (on-chain transcoding)`
- `## Dual gateway (video and AI on the same node)`

**Content summary**:
Curated guides directory — organised by gateway type and use case, linking to relevant guides from external and internal sources. Functions as a knowledge-hub resource page rather than a docs page — it is a link directory. The `landing` pageType is wrong; this is `resource` (knowledge-hub) content.

---

### Gateway resources · `v2/gateways/resources/knowledge-base/resources`

**Status**: current
**Section/group**: Resources > Knowledge Base
**File size**: 15192 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway resources' | yes |
| description | MISSING | no — missing |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | gateway-operator | no — should be `gateway` |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Note**: `pageType: landing` is wrong; this is `resource` content (external links, tools, SDKs).

**Heading structure**:
- `## Official gateway software`
- `## Gateway SDKs and alternative implementations`
- `## Network dashboards and analytics`
- `## Gateway monitoring tools`
- `## Reference documentation`

**Content summary**:
Curated resources directory for gateway operators — official software links, SDK/alternative implementations, network dashboards, monitoring tools, and reference documentation. External resource collection; functions as `resource` (knowledge-hub) type content.

---

### Gateway help · `v2/gateways/resources/knowledge-base/help`

**Status**: current
**Section/group**: Resources > Knowledge Base
**File size**: 14441 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | 'Gateway help' | yes |
| description | MISSING | no — missing |
| pageType | guide | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | operations | DEPRECATED |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Note**: `pageType: guide` is debatable — this is a support links/community resources page, closer to `resource`.

**Heading structure**:
- `## Quick reference`
- `## Discord`
- `## Livepeer Forum`
- `## Developer Office Hours`
- `## GitHub Issues`

**Content summary**:
Help and community resources page — curated links to Discord channels, Forum, Developer Office Hours, and GitHub Issues for gateway operators needing support. Functions as a community entry point and support routing page.

---

### Gateway Glossary · `v2/gateways/resources/compendium/glossary`

**Status**: current
**Section/group**: Resources (compendium)
**File size**: 57835 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Glossary | yes |
| description | MISSING | no — missing |
| pageType | reference | yes |
| audience | gateway-operator | no — should be `gateway` |
| purpose | reference | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete

**Heading structure**:
- `## Livepeer Protocol Terms`
- `## Economic Terms`
- `## Video Terms`
- `## AI Terms`
- `## Web3 Terms`

**Content summary**:
Comprehensive AI-generated glossary covering Livepeer protocol, economic, video, AI, and Web3 terms relevant to gateway operators. Substantially larger than the human-maintained resources/glossary.mdx (57KB vs 11KB). Note: per plan decisions, the compendium glossary is AI-generated and unverified — must be reviewed against the human-made resources/glossary.mdx before trusting for content production.

---

## Duplicate Nav Entries

| Path | Groups |
|---|---|
| `v2/gateways/guides/tutorials/byoc-cpu-tutorial` | Quickstart ⚡ · Tutorial: Zero-to-Hero |
| `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test` | Run A Gateway > End-to-End Tutorial · Tutorial: Zero-to-Hero |
| `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline` | Run A Gateway > End-to-End Tutorial · Tutorial: Zero-to-Hero |
| `v2/gateways/guides/tutorials/tutorial-3-go-production` | Run A Gateway > End-to-End Tutorial · Tutorial: Zero-to-Hero |

---

## Non-Gateways Entry in Gateways Nav

| Path | Notes |
|---|---|
| `docs-guide/tooling/reference-maps/icon-map` | Listed in Gateways Home group — outside v2/gateways/. Not scanned. |

---

## Workspace Artefacts

Files under `v2/gateways/_workspace/` (non-archive). Not production pages.

| Path | Notes |
|---|---|
| `v2/gateways/_workspace/notes/personas.md` | Operator persona notes |
| `v2/gateways/_workspace/plans/concepts-restructure.md` | Concepts restructuring plan |
| `v2/gateways/_workspace/plans/plan.md` | Tab-level plan document |
| `v2/gateways/_workspace/deprecated/pre-review-pages/concepts/pre-architecture.mdx` | Pre-review draft |
| `v2/gateways/_workspace/deprecated/pre-review-pages/concepts/pre-business-model.mdx` | Pre-review draft |
| `v2/gateways/_workspace/deprecated/pre-review-pages/concepts/pre-capabilities.mdx` | Pre-review draft |
| `v2/gateways/_workspace/deprecated/pre-review-pages/concepts/pre-role.mdx` | Pre-review draft |

Archive workspace files (v2/gateways/_workspace/archive/) — 437 files. Not listed individually. Includes: historical context data, old versions of pages, staging content, x-resources folders.

---

## v1 Reference Paths

v1 Gateways dropdown from docs.json — for reference only, not scanned.

| v1 path |
|---|
| (v1 Gateways dropdown uses `anchors` format; paths not extracted in this scan. v1 folder: `v1/gateways/` if it exists) |

---

## Frontmatter Issues Summary

Pattern findings (consolidated):

| Issue | Count | Scope |
|---|---|---|
| `lifecycleStage` missing | 98 of 98 | Every page in the tab |
| `description` missing | 98 of 98 | Every page in the tab |
| `audience: gateway-operator` (non-canonical, should be `gateway`) | 98 of 98 | Every page in the tab |
| Deprecated `purpose` value | ~85 of 98 | Most pages |
| Deprecated `pageType` value | 10 | portal, navigator (kind-of), quickstart x2, overview, troubleshooting, faq, landing x4 |
| Unknown/non-canonical `pageType` with quotes wrapping | ~20 | guide/reference pages with quoted values |
| `veracityStatus` not set | 98 of 98 | Every page in the tab |

Specific deprecated `pageType` values found:
- `landing` — portal.mdx, knowledge-base/guides.mdx, knowledge-base/resources.mdx
- `quickstart` — quickstart/gateway-setup.mdx, quickstart/AI-prompt.mdx
- `overview` — guides/node-pipelines/guide.mdx
- `faq` — resources/faq.mdx
- `troubleshooting` — guides/monitoring-and-tooling/troubleshooting.mdx

Non-canonical `audience` value: all pages use `gateway-operator` (should be `gateway` per content-pipeline-framework.md Decision 3).

Deprecated `purpose` values found across pages: `landing` (→ `orient`), `overview` (→ `orient`), `operations` (→ `operate`), `concept` (→ `explain`), `tutorial` (→ `build`), `how_to` (→ `build`/`configure`), `orientation` (→ `orient`).

---

## Status Summary Table

| Page path | Section | Status | pageType (current value) | Frontmatter complete? |
|---|---|---|---|---|
| v2/gateways/portal | Home | current | landing (DEPRECATED) | incomplete |
| v2/gateways/navigator | Home | current | 'overview' (UNKNOWN) | incomplete |
| v2/gateways/concepts/role | Concepts | current | 'overview' (UNKNOWN) | incomplete |
| v2/gateways/concepts/capabilities | Concepts | current | concept | incomplete |
| v2/gateways/concepts/architecture | Concepts | current | concept | incomplete |
| v2/gateways/concepts/business-model | Concepts | current | concept | incomplete |
| v2/gateways/quickstart/gateway-setup | Quickstart | current | quickstart (DEPRECATED) | incomplete |
| v2/gateways/guides/tutorials/byoc-cpu-tutorial | Quickstart + Tutorials | current | tutorial | incomplete |
| v2/gateways/quickstart/AI-prompt | Quickstart | current | quickstart (DEPRECATED) | incomplete |
| v2/gateways/setup/run-a-gateway | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/transcoding | Run A Gateway | stub | guide | incomplete |
| v2/gateways/setup/requirements/setup | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/requirements/on-chain setup/on-chain | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/requirements/on-chain setup/fund-gateway | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/install/install-overview | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/install/docker-install | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/install/linux-install | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/install/windows-install | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/install/community-projects | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/configure/configuration-overview | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/configure/video-configuration | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/configure/ai-configuration | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/configure/dual-configuration | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/configure/pricing-configuration | Run A Gateway | current | guide | incomplete |
| v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | Tutorials | current | tutorial | incomplete |
| v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | Tutorials | current | tutorial | incomplete |
| v2/gateways/guides/tutorials/tutorial-3-go-production | Tutorials | current | tutorial | incomplete |
| v2/gateways/setup/connect/lp-marketplace | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/connect/discover-offerings | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/connect/connect-with-offerings | Run A Gateway | current | guide | incomplete |
| v2/gateways/setup/monitor/monitor-and-optimise | Run A Gateway | current | guide | incomplete |
| v2/gateways/guides/operator-considerations/business-case | Guides | current | guide | incomplete |
| v2/gateways/guides/operator-considerations/production-gateways | Guides | current | guide | incomplete |
| v2/gateways/guides/deployment-details/setup-options | Guides | current | guide | incomplete |
| v2/gateways/guides/deployment-details/setup-requirements | Guides | current | guide | incomplete |
| v2/gateways/guides/node-pipelines/guide | Guides | current | overview (DEPRECATED) | incomplete |
| v2/gateways/guides/node-pipelines/video-pipelines | Guides | current | guide | incomplete |
| v2/gateways/guides/node-pipelines/ai-pipelines | Guides | current | guide | incomplete |
| v2/gateways/guides/node-pipelines/byoc-pipelines | Guides | current | guide | incomplete |
| v2/gateways/guides/node-pipelines/pipeline-configuration | Guides | current | guide | incomplete |
| v2/gateways/guides/payments-and-pricing/payment-guide | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/payments-and-pricing/funding-guide | Guides | current | guide | incomplete |
| v2/gateways/guides/payments-and-pricing/pricing-strategy | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/payments-and-pricing/remote-signers | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/payments-and-pricing/clearinghouse-guide | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/monitoring-and-tooling/health-checks | Guides | current | guide | incomplete |
| v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | Guides | current | guide | incomplete |
| v2/gateways/guides/monitoring-and-tooling/monitoring-setup | Guides | current | guide | incomplete |
| v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | Guides | current | guide | incomplete |
| v2/gateways/guides/monitoring-and-tooling/troubleshooting | Guides | current | troubleshooting (DEPRECATED) | incomplete |
| v2/gateways/guides/advanced-operations/orchestrator-selection | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/advanced-operations/scaling | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/advanced-operations/gateway-middleware | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/advanced-operations/gateway-discoverability | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/roadmap-and-funding/operator-support | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/roadmap-and-funding/spe-grant-model | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | Guides | current | 'guide' | incomplete |
| v2/gateways/guides/roadmap-and-funding/gateway-showcase | Guides | current | 'guide' | incomplete |
| v2/gateways/resources/faq | Resources | current | faq (DEPRECATED) | incomplete |
| v2/gateways/resources/glossary | Resources | current | reference | incomplete |
| v2/gateways/resources/technical/technical-architecture | Resources | current | reference | incomplete |
| v2/gateways/resources/technical/configuration-flags | Resources | stub | reference | incomplete |
| v2/gateways/resources/technical/contract-addresses | Resources | current | 'reference' | incomplete |
| v2/gateways/resources/technical/cli-commands | Resources | current | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/ai | Resources | current | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/text-to-image | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/image-to-image | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/image-to-video | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/upscale | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/audio-to-text | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/segment-anything-2 | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/llm | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/image-to-text | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/live-video-to-video | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/text-to-speech | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/health | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/hardware-info | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/AI-API/hardware-stats | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/cli-http-api | Resources | current | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/unbond | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/rebond | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/activateorchestrator | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/setbroadcastconfig | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/setmaxpriceforcapability | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/reward | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/transfertokens | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/api-reference/CLI-HTTP/signmessage | Resources | stub* | reference | incomplete |
| v2/gateways/resources/technical/livepeer-exchanges | Resources | stub | reference | incomplete |
| v2/gateways/resources/technical/arbitrum-exchanges | Resources | stub | reference | incomplete |
| v2/gateways/resources/technical/arbitrum-rpc | Resources | stub | reference | incomplete |
| v2/gateways/resources/go-livepeer/bandwidth-requirements | Resources | current | guide (prob should be reference) | incomplete |
| v2/gateways/resources/go-livepeer/hardware-requirements | Resources | current | reference | incomplete |
| v2/gateways/resources/go-livepeer/gpu-support | Resources | current | guide (prob should be reference) | incomplete |
| v2/gateways/resources/go-livepeer/cli-reference | Resources | current | guide (prob should be reference) | incomplete |
| v2/gateways/resources/go-livepeer/prometheus-metrics | Resources | current | reference | incomplete |
| v2/gateways/resources/knowledge-base/guides | Resources | current | landing (DEPRECATED → resource) | incomplete |
| v2/gateways/resources/knowledge-base/resources | Resources | current | landing (DEPRECATED → resource) | incomplete |
| v2/gateways/resources/knowledge-base/help | Resources | current | guide (prob should be resource) | incomplete |
| v2/gateways/resources/compendium/glossary | Resources | current | reference | incomplete |

*stub = 0 prose words; may render content via OpenAPI component import — structure-audit.md should verify.
