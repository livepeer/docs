# Orchestrators — Content Scan

**Tab**: Orchestrators
**Scan date**: 2026-03-23
**Docs.json source**: v2 navigation block
**v2/orchestrators/ folder scanned**: yes
**Status**: DRAFT — awaiting human review

---

## Summary

**Total pages in docs.json navigation**: 72
**Files found on disk**: 72
**Empty (in nav, no file)**: 0
**Stubs (<100 words)**: 2 (funding-and-support, orchestrator-profiles)
**Draft (draft: true)**: 13
**Current**: 33
**Published (non-standard status — treated as current)**: 18
**Review (non-standard status — treated as current)**: 7
**Pages with deprecated pageType values**: 24
**Pages with incomplete frontmatter**: 72 (all pages missing lifecycleStage; majority missing purpose or have deprecated purpose values)
**Workspace artefacts listed**: ~40+ files under v2/orchestrators/_workspace/

### Status field note
No page in this tab uses canonical status values in the strict sense. The `status` frontmatter field is not part of the canonical schema (status is assigned by the scanner, not stored in frontmatter). Pages use non-canonical values: `current`, `published`, `review`, `draft`. For this scan:
- `current` and `published` → treated as **current** (file exists, body content ≥100 words, in nav)
- `review` → treated as **current** (same criteria)
- `draft` → treated as **draft**
- Stubs confirmed separately by word count

---

## Page Inventory

---

### Orchestrator Portal · `v2/orchestrators/portal`

**Status**: current
**Section/group**: Start Here
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Portal | yes |
| description | Welcome To The Orchestrator Portal: Explore, Earn, Operate | yes |
| pageType | `landing` | DEPRECATED → `navigation` |
| audience | `orchestrator` | yes |
| purpose | `landing` | DEPRECATED → `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` deprecated (→ `navigation`); `purpose: landing` deprecated (→ `orient`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
No standard markdown headings — page uses JSX frame-mode components (`H1`, `H2`, `H5`) for all headings. Heading content not extractable from frontmatter scan.

**Content summary**:
The portal is the tab entry point for orchestrators, rendered in Mintlify `frame` mode with a hero layout using JSX components. It serves as a visual landing page routing readers into the tab's main sections. This page is oriented toward first-time visitors arriving at the Orchestrators tab.

---

### Find Your Path · `v2/orchestrators/navigator`

**Status**: current
**Section/group**: Start Here
**File size**: ~6 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Find Your Path | yes |
| description | Choose the right orchestrator path based on your situation - hardware, stake, workload goals, and operational model. | yes |
| pageType | `landing` | DEPRECATED → `navigation` |
| audience | `orchestrator` | yes |
| purpose | `orientation` | DEPRECATED → `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` deprecated (→ `navigation`); `purpose: orientation` deprecated (→ `orient`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
- H2: Choose Your Starting Point
- (Accordion-based routing — no further markdown headings)

**Content summary**:
This is the disambiguation/routing page for the Orchestrators tab. It presents decision-tree accordions routing operators to the correct starting path based on their situation: GPU testing, pool participation, solo operation, AI workloads, or at-scale deployment. It serves readers at the entry/orientation stage before they commit to any path.

---

### The Orchestrator Role · `v2/orchestrators/concepts/role`

**Status**: current
**Section/group**: Concepts
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | The Orchestrator Role in the Livepeer Network | yes |
| description | What orchestrators are, how they fit into the Livepeer compute network, and how the role has evolved from video transcoding to AI inference. | yes |
| pageType | `overview` | DEPRECATED → `concept` (context: this is the concepts section role page) |
| audience | `orchestrator` | yes |
| purpose | `overview` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: overview` deprecated (→ `concept`); `purpose: overview` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
H1/H2 structure uses JSX imports and CustomDivider — specific heading text not fully visible in first 50 lines. Page imports ScrollableDiagram and StyledTable — contains diagrams and tables.

**Content summary**:
Explains what an orchestrator is within the Livepeer network — their function as GPU compute providers, how the role has evolved from video transcoding to AI inference, and how orchestrators fit into the broader network topology. This is the first conceptual page in the linear journey, read before any setup or evaluation work.

---

### Orchestrator Capabilities · `v2/orchestrators/concepts/capabilities`

**Status**: current
**Section/group**: Concepts
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Capabilities | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in scan (beyond frontmatter). Page type is `concept` — standard heading structure expected.

**Content summary**:
Covers what orchestrators can do on the Livepeer network — workload types (video transcoding, AI inference), operational modes, and capacity parameters. This is the second concepts page, positioned for readers evaluating what the role can offer before committing to setup.

---

### Orchestrator Architecture · `v2/orchestrators/concepts/architecture`

**Status**: current
**Section/group**: Concepts
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Architecture | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Explains how the orchestrator node works architecturally — the go-livepeer binary, its interaction with the Arbitrum contract layer, gateway connections, and the job processing pipeline. Positioned in the evaluation stage for readers who need to understand the technical mechanism before setup.

---

### Orchestrator Incentive Model · `v2/orchestrators/concepts/incentive-model`

**Status**: current
**Section/group**: Concepts
**File size**: ~11 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Incentive Model | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Explains the economic incentive structure for orchestrators — LPT staking mechanics, reward emissions, fee splits with delegators, and the relationship between stake and active-set inclusion. Serves readers in the evaluate stage who need to understand economics before deciding to operate.

---

### Orchestrator Quickstart (Overview) · `v2/orchestrators/quickstart/guide`

**Status**: current
**Section/group**: Quickstart
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Quickstart | yes |
| description | Verify Livepeer works on your hardware - off-chain video and AI smoke tests that run in under an hour with no financial commitment. | yes |
| pageType | `overview` | DEPRECATED → `instruction` (with `pageVariant: quickstart`) |
| audience | `orchestrator` | yes |
| purpose | `overview` | DEPRECATED → `start` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: overview` deprecated (context: section overview for quickstart → `instruction` with `pageVariant: quickstart`); `purpose: overview` deprecated (→ `start`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
- H2: Choose your test
- H2: What you need

**Content summary**:
Routes readers to the two quickstart smoke tests: video transcoding verification and AI inference verification. Runs off-chain with Docker, no LPT or ETH required. Serves first-time readers who need to validate hardware capability before any financial or operational commitment.

---

### Quickstart: Verify Your Hardware · `v2/orchestrators/quickstart/video-transcoding`

**Status**: current
**Section/group**: Quickstart
**File size**: ~18 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Quickstart: Verify Your Hardware | yes |
| description | (present) | yes |
| pageType | `quickstart` | DEPRECATED → `instruction` (with `pageVariant: quickstart`) |
| audience | `orchestrator` | yes |
| purpose | `tutorial` | DEPRECATED → `start` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: quickstart` deprecated (→ `instruction` with `pageVariant: quickstart`); `purpose: tutorial` deprecated (→ `start`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan — page contains both video transcoding test and AI inference test sections.

**Content summary**:
Step-by-step off-chain smoke test for verifying GPU transcoding and AI inference capability. Uses Docker to run a local orchestrator and gateway, sends a test stream via ffmpeg, and confirms HLS output. The primary executable quickstart page for first-time operators.

---

### Quickstart Tutorial · `v2/orchestrators/quickstart/tutorial`

**Status**: current
**Section/group**: Quickstart
**File size**: ~16 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Quickstart Tutorial | yes |
| description | (present) | yes |
| pageType | `tutorial` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
A tutorial-format guide taking the reader through the quickstart process step by step. Positioned in the Quickstart section for readers who prefer a more structured, tutorial-style walkthrough rather than the smoke-test format.

---

### Add AI to Your Node · `v2/orchestrators/quickstart/AI-prompt-start`

**Status**: current (status field value: `review` — non-standard)
**Section/group**: Quickstart
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Add AI to Your Node | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; `pageType: guide` is canonical but may be misclassified — this page is in the Quickstart section and likely should be `instruction` with `pageVariant: quickstart`

**Heading structure**:
Not extracted in full scan.

**Content summary**:
A quick-start guide for adding AI inference capability to an existing video transcoding orchestrator node. Positioned for operators who already have a working video node and want to extend it with AI workloads. Serves the setup/evaluate stage.

---

### Run an Orchestrator (Setup Overview) · `v2/orchestrators/setup/guide`

**Status**: current
**Section/group**: Setup
**File size**: ~5 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Run an Orchestrator | yes |
| description | Complete setup guide for running a Livepeer orchestrator - from installation to on-chain activation and verification. | yes |
| pageType | `overview` | DEPRECATED → `instruction` (with `pageVariant: setup`) |
| audience | `orchestrator` | yes |
| purpose | `overview` | DEPRECATED → `start` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: overview` deprecated (→ `instruction` with `pageVariant: setup`); `purpose: overview` deprecated (→ `start`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
- H2: Setup flow

**Content summary**:
Overview/index page for the Setup section. Presents a sequential step flow from installation through on-chain activation and verification, linking to each setup sub-page. Serves as the entry point for operators who have passed the quickstart and are ready for production setup.

---

### Setup Checklist · `v2/orchestrators/setup/rcs-requirements`

**Status**: current
**Section/group**: Setup
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Setup Checklist | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | `how_to` | DEPRECATED → `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose: how_to` deprecated (→ `configure`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Pre-setup checklist covering hardware requirements, software dependencies, network prerequisites, and LPT stake requirements for running a production orchestrator. Serves operators at the beginning of the setup phase who need to verify they meet all prerequisites before proceeding.

---

### Install go-livepeer · `v2/orchestrators/setup/rs-install`

**Status**: current
**Section/group**: Setup
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Install go-livepeer | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | `how_to` | DEPRECATED → `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose: how_to` deprecated (→ `configure`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Step-by-step installation instructions for the go-livepeer binary using Docker (recommended) and alternative install methods. This is the first executable setup step after the checklist and covers GPU passthrough configuration for Docker.

---

### Configure Your Orchestrator · `v2/orchestrators/setup/configure`

**Status**: current
**Section/group**: Setup
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Configure Your Orchestrator | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Configuration instructions covering the operational flags for the orchestrator node — mode selection (video, AI, dual), CLI flag configuration, and docker-compose file generation. Serves operators in the setup phase who have installed go-livepeer and need to configure it for their chosen workload mode.

---

### Connect to Arbitrum · `v2/orchestrators/setup/connect-and-activate`

**Status**: current
**Section/group**: Setup
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Connect to Arbitrum | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Instructions for connecting the orchestrator node to Arbitrum — wallet setup, ETH for gas, LPT stake activation, and on-chain registration. This is the step that moves the node from local to live on the Livepeer network and is required before the node can accept jobs.

---

### Verify Your Setup · `v2/orchestrators/setup/test`

**Status**: current
**Section/group**: Setup
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Verify Your Setup | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | `how_to` | DEPRECATED → `verify` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose: how_to` deprecated (→ `verify`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Post-setup verification steps confirming the node is active on-chain, accepting jobs, and correctly configured. Serves operators who have completed the setup sequence and need to confirm the node is running correctly before moving to operational guides.

---

### Set Up Monitoring · `v2/orchestrators/setup/r-monitor`

**Status**: current
**Section/group**: Setup
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Set Up Monitoring | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | `how_to` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose: how_to` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Setup instructions for node monitoring — Prometheus metrics, Grafana dashboards, and alerting configuration. Positioned as the final setup step, giving operators visibility into node health before moving to ongoing operations.

---

### Operating Rationale · `v2/orchestrators/guides/operator-considerations/operator-rationale`

**Status**: current (note: file has garbage characters `glrw\npwrfs` above the frontmatter delimiter — malformed file header)
**Section/group**: Guides — Operator Considerations
**File size**: ~16 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Operating Rationale | yes |
| description | Cost categories, revenue sources, viability thresholds, and a decision matrix for evaluating whether running a Livepeer Orchestrator makes sense for your situation. | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `evaluation` | DEPRECATED → `evaluate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: evaluation` deprecated (→ `evaluate`); `lifecycleStage` missing; `veracityStatus` not set; **FILE HAS GARBAGE CHARACTERS ABOVE FRONTMATTER DELIMITER** — `glrw\npwrfs` on lines 1-2, which will cause frontmatter parsing failures

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Evaluates whether running an orchestrator is worth it — covers cost categories, revenue streams, viability thresholds by operator type, and a decision matrix. This is an on-demand evaluation page for readers still deciding whether to operate, positioned before setup but accessible at any point.

---

### Business Case · `v2/orchestrators/guides/operator-considerations/business-case`

**Status**: current
**Section/group**: Guides — Operator Considerations
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Business Case | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `evaluation` | DEPRECATED → `evaluate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: evaluation` deprecated (→ `evaluate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Presents the business case for operating an orchestrator — competitive analysis, revenue model, market context, and positioning for commercial-scale operators. Serves potential operators in the evaluate stage who need to assess commercial viability.

---

### Operator Impact · `v2/orchestrators/guides/operator-considerations/operator-impact`

**Status**: current
**Section/group**: Guides — Operator Considerations
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Operator Impact | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `evaluation` | DEPRECATED → `evaluate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: evaluation` deprecated (→ `evaluate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Covers the network impact of orchestrator participation — how individual operators contribute to decentralisation, compute capacity, and protocol resilience. Serves readers in the evaluate stage who want to understand the broader significance of their role beyond earnings.

---

### Requirements · `v2/orchestrators/guides/operator-considerations/requirements`

**Status**: current
**Section/group**: Guides — Operator Considerations
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Requirements | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Reference table of hardware, software, network, and stake requirements for running an orchestrator. Serves operators at any stage who need to check specific requirements — hardware specs, minimum LPT, OS support, GPU compatibility.

---

### Setup Options · `v2/orchestrators/guides/deployment-details/setup-options`

**Status**: current
**Section/group**: Guides — Deployment Details
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Setup Options | yes |
| description | (present) | yes |
| pageType | `overview` | DEPRECATED → `guide` (section overview in guides/) |
| audience | `orchestrator` | yes |
| purpose | `orientation` | DEPRECATED → `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: overview` deprecated (→ `guide` with `pageVariant: overview`); `purpose: orientation` deprecated (→ `orient`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Overview of the available deployment configurations — solo orchestrator, siphon split, orchestrator-transcoder split, dual-mode, and pool worker. Routes operators to the appropriate deployment guide for their chosen architecture. Serves operators in the setup/build stage who need to choose a deployment model.

---

### Siphon Split Setup · `v2/orchestrators/guides/deployment-details/siphon-setup`

**Status**: current
**Section/group**: Guides — Deployment Details
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Siphon Split Setup | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Configuration guide for the siphon split deployment model where a single machine runs both orchestrator and transcoder processes. Serves operators in the build/operate stage who want to maximise their hardware utilisation with a split architecture.

---

### Dual Mode Configuration · `v2/orchestrators/guides/deployment-details/dual-mode-configuration`

**Status**: draft
**Section/group**: Guides — Deployment Details
**File size**: ~6 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Dual Mode Configuration | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | `setup` | DEPRECATED → `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose: setup` deprecated (→ `configure`); `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Configuration instructions for running an orchestrator in dual mode — serving both video transcoding and AI inference workloads simultaneously. Draft status indicates incomplete content. Serves operators building out multi-workload deployments.

---

### Orchestrator-Transcoder Split Setup · `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup`

**Status**: current
**Section/group**: Guides — Deployment Details
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator-Transcoder Split Setup | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `configure`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Setup guide for the orchestrator-transcoder split architecture where the orchestrator process and transcoder process run on separate machines. Covers networking, configuration, and connection between the two nodes. Serves operators at scale who need to separate orchestration from compute.

---

### Join a Pool (old) · `v2/orchestrators/guides/deployment-details/join-a-pool`

**Status**: current (no `status` field in frontmatter — file exists, assumed current)
**Section/group**: Guides — Deployment Details
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Join a Pool | yes |
| description | (present) | yes |
| pageType | `quickstart` | DEPRECATED → `instruction` (with `pageVariant: quickstart`) |
| audience | `orchestrator` | yes |
| purpose | `faq` | DEPRECATED → `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: quickstart` deprecated (→ `instruction` with `pageVariant: quickstart`); `purpose: faq` deprecated (→ `orient`); `lifecycleStage` missing; `veracityStatus` not set; no `status` field present; this appears to be a superseded file (see `new-join-a-pool`)

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Guide for joining an existing orchestrator pool as a worker — covers finding a pool operator, connecting to the pool, and the on-chain requirements. This is the older version of the page; `new-join-a-pool` is the current version. Both appear in the nav (see Duplicate Nav Entries).

---

### Join a Pool · `v2/orchestrators/guides/deployment-details/new-join-a-pool`

**Status**: current
**Section/group**: Guides — Deployment Details
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Join a Pool | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `orient`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Current guide for joining an existing orchestrator pool as a worker. Covers the process of connecting to a pool operator, hardware requirements for pool participation, and operational expectations. Serves operators who want to participate without managing stake or on-chain registration themselves.

---

### Workload Options · `v2/orchestrators/guides/ai-and-job-workloads/workload-options`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — AI and Job Workloads
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Workload Options | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Explains the available workload types operators can run — video transcoding, AI inference (diffusion, LLM, audio), and realtime AI — along with the tradeoffs and GPU requirements for each. Serves operators in the evaluate/build stage choosing which workloads to support.

---

### Video Transcoding Operations · `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — AI and Job Workloads
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Video Transcoding Operations | yes |
| description | Configure video transcoding on your Livepeer orchestrator — wei and USD pricing, automatic price adjustment, session limits, bandwidth calculation, NVENC session caps, and output rendition profiles. | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `configure`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Operational guide for configuring video transcoding on a running orchestrator — pricing in wei and USD, Chainlink auto-adjust, session limits, NVENC caps, and ABR ladder configuration. Serves operators in the operate/configure stage who need to tune their video transcoding performance and pricing.

---

### AI Inference Operations · `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — AI and Job Workloads
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI Inference Operations | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `pageType: concept` may be misclassified — this is operational content that belongs in `guide`; `purpose: concept` deprecated (→ `explain` or `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Covers AI inference operations on the Livepeer network — how jobs are routed, capability announcements, model warm/cold state, and performance considerations. Serves operators in the build/operate stage who need to understand how AI inference jobs work before configuring their node.

---

### Diffusion Pipeline Setup · `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — AI and Job Workloads
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Diffusion Pipeline Setup | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `configure`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Setup and configuration guide for running a diffusion AI pipeline (image/video generation) on the orchestrator. Covers model configuration, VRAM requirements, pipeline flags, and capability announcement. Serves operators in the build stage setting up AI inference for image generation workloads.

---

### LLM Pipeline Setup · `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup`

**Status**: draft
**Section/group**: Guides — AI and Job Workloads
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | LLM Pipeline Setup | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft setup guide for running an LLM (large language model) inference pipeline on the orchestrator. Incomplete content. Will cover model selection, VRAM requirements, and pipeline configuration for text-generation workloads.

---

### Cascade Setup (Realtime AI) · `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — AI and Job Workloads
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Cascade Setup | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `configure` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `configure`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Setup guide for the Cascade (realtime AI video) pipeline on the orchestrator — covers ComfyStream integration, GPU requirements, and pipeline configuration for realtime AI video effects. Serves operators in the build stage who want to support realtime AI workloads.

---

### Audio and Vision Pipelines · `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines`

**Status**: draft
**Section/group**: Guides — AI and Job Workloads
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Audio and Vision Pipelines | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft guide for setting up audio and computer vision AI pipelines on the orchestrator. Incomplete content. Will cover model and pipeline configuration for audio transcription and vision tasks.

---

### Model and Demand Reference · `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — AI and Job Workloads
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Model and Demand Reference | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Reference table of AI models available on the Livepeer network, their demand status, VRAM requirements, and pipeline compatibility. Serves operators at any stage who need to look up which models are in demand and what hardware is required to serve them.

---

### Model Hosting · `v2/orchestrators/guides/ai-and-job-workloads/model-hosting`

**Status**: draft
**Section/group**: Guides — AI and Job Workloads
**File size**: ~3 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Model Hosting | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft guide covering model hosting configuration — how to serve specific AI models from the orchestrator and manage model availability. Incomplete content.

---

### Earning Model · `v2/orchestrators/guides/staking-and-rewards/earning-model`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Staking and Rewards
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Earning Model | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Explains the orchestrator earning model — fee revenue from job processing, LPT reward emissions, the relationship between stake weight and reward share, and how earnings compound over time. Serves operators in the evaluate/operate stage who need to understand how compensation works.

---

### Reward Mechanics · `v2/orchestrators/guides/staking-and-rewards/reward-mechanics`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Staking and Rewards
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Reward Mechanics | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Covers the mechanics of reward calling — round timing, the reward call transaction, delegator reward distribution, and the cost/benefit of frequent reward calls. Serves operators in the operate stage managing their reward cadence.

---

### Payment Receipts · `v2/orchestrators/guides/payments-and-pricing/payment-receipts`

**Status**: draft
**Section/group**: Guides — Payments and Pricing
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Payment Receipts | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft page explaining the payment receipt mechanism — how orchestrators receive and verify payment for completed jobs via the probabilistic micropayment system. Incomplete content.

---

### Payments · `v2/orchestrators/guides/payments-and-pricing/payments`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Payments and Pricing
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Payments | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Explains the Livepeer payment system for orchestrators — the probabilistic micropayment (PM) protocol, ticket mechanics, redemption process, and how fees are settled. Serves operators in the evaluate/operate stage who need to understand how payment flows.

---

### Delegate Operations · `v2/orchestrators/guides/staking-and-rewards/delegate-operations`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Staking and Rewards
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Delegate Operations | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Operational guide for managing delegator relationships — attracting delegators, setting commission rates, communicating performance, and the mechanics of delegator stake management from the orchestrator's perspective.

---

### Network Participation · `v2/orchestrators/guides/staking-and-rewards/network-participation`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Staking and Rewards
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Network Participation | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Covers the orchestrator's role in broader network participation — governance voting, round participation, active-set maintenance, and protocol upgrade involvement. Serves operators in the operate stage who want to engage beyond running jobs.

---

### Pricing Strategy · `v2/orchestrators/guides/config-and-optimisation/pricing-strategy`

**Status**: draft
**Section/group**: Guides — Config and Optimisation
**File size**: ~5 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Pricing Strategy | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft guide for setting and optimising pricing strategy — competitive pricing, wei-per-pixel vs USD pricing, and market positioning relative to other orchestrators. Incomplete content.

---

### Capacity Planning · `v2/orchestrators/guides/config-and-optimisation/capacity-planning`

**Status**: draft
**Section/group**: Guides — Config and Optimisation
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Capacity Planning | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft guide for capacity planning — managing GPU resources across multiple workloads, session limits, and scaling decisions. Incomplete content.

---

### AI Model Management · `v2/orchestrators/guides/config-and-optimisation/ai-model-management`

**Status**: draft
**Section/group**: Guides — Config and Optimisation
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI Model Management | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft guide for managing AI models on the orchestrator — model selection, warm/cold state management, VRAM allocation across models. Incomplete content.

---

### Reward Call Tuning · `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning`

**Status**: current
**Section/group**: Guides — Config and Optimisation
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Reward Call Tuning | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Guide for optimising reward call frequency and timing — balancing gas costs against reward capture, automation options, and the tradeoff between call frequency and profitability. Serves operators in the optimise stage.

---

### Operator Toolbox · `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Monitoring and Tooling
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Operator Toolbox | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Reference directory of tools available to orchestrator operators — Explorer, dashboards, Prometheus, Grafana, CLI tools, community tooling. Serves operators at any stage looking for tools to monitor, manage, or optimise their node.

---

### Explorer Operations · `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Monitoring and Tooling
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Explorer Operations | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Guide for using the Livepeer Explorer to monitor orchestrator performance — stake, rewards, delegator activity, score metrics, and on-chain status. Serves operators in the operate stage who need to track their node's public-facing performance data.

---

### Metrics and Alerting · `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Monitoring and Tooling
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Metrics and Alerting | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Covers Prometheus metrics collection and Grafana dashboard configuration for orchestrator monitoring, plus alerting setup for critical events. Serves operators in the operate stage who need operational visibility and automated alerting.

---

### Troubleshooting · `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Monitoring and Tooling
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Troubleshooting | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `troubleshoot` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `pageType: guide` — should be `reference` with `pageVariant: compendium` for troubleshooting content; `purpose: guide` deprecated (→ `troubleshoot`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Troubleshooting reference covering common orchestrator issues — node startup failures, job processing errors, Arbitrum connection problems, and AI runner issues. Serves operators at any stage encountering problems with their node.

---

### Gateway Relationships · `v2/orchestrators/guides/advanced-operations/gateway-relationships`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Advanced Operations
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway Relationships | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: concept` deprecated (→ `explain`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Explains how orchestrators relate to gateways — how selection works, the scoring system, reputation factors, and how to optimise for gateway selection. Serves operators in the operate/optimise stage who need to understand what drives job routing to their node.

---

### Gateway and Orchestrator Interface · `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface`

**Status**: draft
**Section/group**: Guides — Advanced Operations
**File size**: ~3 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Gateway and Orchestrator Interface | yes |
| description | (present) | yes |
| pageType | `how_to` | DEPRECATED → `instruction` |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` deprecated (→ `instruction`); `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft guide covering the technical interface between gateways and orchestrators — the API surface, job negotiation protocol, and integration points. Incomplete content.

---

### Pool Operators · `v2/orchestrators/guides/advanced-operations/pool-operators`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Advanced Operations
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Pool Operators | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | `guide` | DEPRECATED → `operate` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: guide` deprecated (→ `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Guide for operators running orchestrator pools — managing worker connections, pool configuration, revenue sharing with workers, and pool operator responsibilities. Serves operators at scale who act as pool orchestrators managing other participants' GPUs.

---

### Scale Operations · `v2/orchestrators/guides/advanced-operations/scale-operations`

**Status**: current (status field: `published` — non-standard)
**Section/group**: Guides — Advanced Operations
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Scale Operations | yes |
| description | (present) | yes |
| pageType | `concept` | yes |
| audience | `orchestrator` | yes |
| purpose | `concept` | DEPRECATED → `explain` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `pageType: concept` may be misclassified — scale operations is operational content that may suit `guide`; `purpose: concept` deprecated (→ `explain` or `operate`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Covers scaling an orchestrator operation — multi-node management, load balancing, geographic distribution, and the transition from single-node to commercial-scale operation. Serves operators in the optimise stage planning growth.

---

### Funding and Support · `v2/orchestrators/guides/roadmap-and-funding/funding-and-support`

**Status**: stub (draft: true, <100 words body content)
**Section/group**: Guides — Roadmap and Funding
**File size**: ~1 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Funding and Support | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is stub (draft)

**Heading structure**:
Not extracted — stub content.

**Content summary**:
Stub page intended to cover funding sources and support programs available to orchestrator operators — SPEs, grants, foundation support. No substantive content yet.

---

### Orchestrator Profiles · `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles`

**Status**: stub (draft: true, <100 words body content)
**Section/group**: Guides — Roadmap and Funding
**File size**: ~1 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Profiles | yes |
| description | (present) | yes |
| pageType | `guide` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set; page is stub (draft)

**Heading structure**:
Not extracted — stub content.

**Content summary**:
Stub page intended to showcase orchestrator profiles — operator spotlights, case studies, or a directory of notable operators. No substantive content yet.

---

### BYOC CPU Smoke Test · `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test`

**Status**: current
**Section/group**: Guides — Tutorials
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | BYOC CPU Smoke Test | yes |
| description | (present) | yes |
| pageType | `tutorial` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Tutorial for running a BYOC (Bring Your Own Compute) CPU-based smoke test — validates that a custom compute setup can process jobs on the Livepeer network without a GPU. Serves operators testing custom or CPU-based compute configurations.

---

### Zero to First Reward · `v2/orchestrators/guides/tutorials/zero-to-first-reward`

**Status**: current
**Section/group**: Guides — Tutorials
**File size**: ~18 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Zero to First Reward | yes |
| description | (present) | yes |
| pageType | `tutorial` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
End-to-end tutorial taking a new operator from zero to their first on-chain reward — covers all steps from hardware preparation through setup, activation, and first reward call. The canonical first-time operator tutorial for the full production path.

---

### AI Earning Quickstart · `v2/orchestrators/guides/tutorials/ai-earning-quickstart`

**Status**: current
**Section/group**: Guides — Tutorials
**File size**: ~16 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI Earning Quickstart | yes |
| description | (present) | yes |
| pageType | `tutorial` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Tutorial for getting started earning with AI inference — sets up an AI-enabled orchestrator node and processes the first AI job. Targeted at operators who want to prioritise AI workloads over video transcoding for earning.

---

### Add AI to a Video Node · `v2/orchestrators/guides/tutorials/add-ai-to-video-node`

**Status**: current
**Section/group**: Guides — Tutorials
**File size**: ~14 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Add AI to a Video Node | yes |
| description | (present) | yes |
| pageType | `tutorial` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Tutorial for extending an existing video transcoding orchestrator with AI inference capability — covering dual-mode configuration, AI runner setup, and capability announcement. Targeted at operators who already have a working video node and want to add AI earning potential.

---

### Full AI Pipeline Tutorial · `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial`

**Status**: current
**Section/group**: Guides — Tutorials
**File size**: ~18 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Full AI Pipeline Tutorial | yes |
| description | (present) | yes |
| pageType | `tutorial` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Comprehensive tutorial walking through setting up a full AI inference pipeline from scratch — model selection, AI runner configuration, capability announcement, and job verification. The deep-dive tutorial for operators committing to AI workloads.

---

### Realtime AI Tutorial · `v2/orchestrators/guides/tutorials/realtime-ai-tutorial`

**Status**: current
**Section/group**: Guides — Tutorials
**File size**: ~16 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Realtime AI Tutorial | yes |
| description | (present) | yes |
| pageType | `tutorial` | yes |
| audience | `orchestrator` | yes |
| purpose | MISSING | MISSING |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose` missing; `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Tutorial for setting up realtime AI video processing — covering ComfyStream integration, pipeline configuration, and validating realtime inference output. Targeted at operators wanting to support realtime AI video effects workloads.

---

### FAQ and Troubleshooting · `v2/orchestrators/resources/faq`

**Status**: current (status field: `review` — non-standard)
**Section/group**: Resources
**File size**: ~16 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | FAQ and Troubleshooting | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `faq` | DEPRECATED → `reference` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `purpose: faq` deprecated (→ `reference`); `lifecycleStage` missing; `veracityStatus` not set; `pageVariant: compendium` should be added per canonical schema

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Combined FAQ and troubleshooting reference covering common questions and problems for orchestrator operators — covering setup, operations, rewards, and AI workloads. Serves operators at any stage looking up answers to specific questions or diagnosing problems.

---

### Orchestrator Terminology Glossary · `v2/orchestrators/resources/glossary`

**Status**: current
**Section/group**: Resources
**File size**: ~12 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Terminology Glossary | yes |
| description | (present) | yes |
| pageType | `glossary` | DEPRECATED → `reference` (with `pageVariant: compendium`) |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `pageType: glossary` deprecated (→ `reference` with `pageVariant: compendium`); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Glossary of orchestrator-specific terminology — definitions for protocol concepts, technical terms, and operational vocabulary used across the Orchestrators tab. Serves readers at any stage looking up definitions.

---

### Community Guides & Tutorials · `v2/orchestrators/resources/community-guides`

**Status**: current (status field: `review` — non-standard)
**Section/group**: Resources
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Community Guides & Tutorials | yes |
| description | Curated external tutorials, video walkthroughs, and community-maintained resources for Livepeer orchestrators — from setup through advanced operations. | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `pageType` should be `resource` (curated external content belongs in resources/knowledge-hub, not reference); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Curated collection of community-maintained tutorials, video walkthroughs, and external guides for orchestrator operators — including content from Titan Node, Video Miner, Daydream, ComfyStream, and community monitoring setups. Serves operators who prefer community-created content or need supplementary guidance.

---

### Community Orchestrator Pools · `v2/orchestrators/resources/community-pools`

**Status**: current (status field: `review` — non-standard)
**Section/group**: Resources
**File size**: ~8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Community Orchestrator Pools | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `pageType` should likely be `resource` (directory of external pools); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Directory of community orchestrator pools available for workers to join — listing active pools, their operators, workload types, and contact methods. Serves operators who want to participate as pool workers without managing their own on-chain presence.

---

### CLI Flags Reference · `v2/orchestrators/resources/technical/cli-flags`

**Status**: current (status field: `review` — non-standard)
**Section/group**: Resources — Technical
**File size**: ~16 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | CLI Flags Reference | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Complete reference of go-livepeer CLI flags for orchestrator operation — parameters, defaults, valid values, and descriptions. Serves operators at any stage looking up specific configuration flags.

---

### Livepeer Arbitrum Contract Addresses · `v2/orchestrators/resources/technical/x-contract-addresses`

**Status**: draft
**Section/group**: Resources — Technical
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Arbitrum Contract Addresses | yes |
| description | (present) | yes |
| pageType | `landing` | DEPRECATED → `navigation` |
| audience | `developer` | WRONG — should be `orchestrator` for this tab |
| purpose | `landing` | DEPRECATED → `orient` |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` deprecated (→ `reference` — this is reference content, not navigation); `audience: developer` incorrect for Orchestrators tab (→ `orchestrator`); `purpose: landing` deprecated (→ `reference`); `lifecycleStage` missing; `veracityStatus` not set; page is draft

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Reference page listing Livepeer contract addresses on Arbitrum — used by operators who need to interact with the protocol contracts directly. The `audience: developer` value is incorrect for this tab placement and should be `orchestrator`.

---

### GPU Support Matrix · `v2/orchestrators/resources/gpu-support`

**Status**: current (status field: `review` — non-standard)
**Section/group**: Resources
**File size**: ~10 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | GPU Support Matrix | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Reference table of supported GPU models for orchestrator operation — covering video transcoding support, AI inference capability, VRAM tiers, and compatibility notes. Serves operators selecting or evaluating hardware.

---

### Arbitrum RPCs · `v2/orchestrators/resources/arbitrum-rpc`

**Status**: current (status field: `review` — non-standard)
**Section/group**: Resources
**File size**: ~6 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Arbitrum RPCs | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Reference listing of Arbitrum RPC endpoints usable by orchestrators for on-chain connectivity — public RPCs, recommended providers, and configuration notes. Serves operators setting up or troubleshooting their Arbitrum connection.

---

### Arbitrum Exchanges · `v2/orchestrators/resources/arbitrum-exchanges`

**Status**: current (status field: `review` — non-standard)
**Section/group**: Resources
**File size**: ~6 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Arbitrum Exchanges | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| audience | `orchestrator` | yes |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: partial
**Frontmatter issues**: `pageType` should likely be `resource` (list of external exchanges); `lifecycleStage` missing; `veracityStatus` not set

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Directory of exchanges where operators can acquire LPT on Arbitrum — needed for staking and on-chain activation. Serves new operators who need to obtain LPT before they can activate their node.

---

### Orchestrator Glossary (Compendium) · `v2/orchestrators/resources/compendium/glossary`

**Status**: draft
**Section/group**: Resources — Compendium
**File size**: ~4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Orchestrator Glossary | yes |
| description | (present) | yes |
| pageType | `reference` | yes |
| pageVariant | `compendium` | yes |
| audience | `orchestrator-operator` | WRONG — non-standard value (→ `orchestrator`) |
| purpose | `reference` | yes |
| lifecycleStage | MISSING | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience: orchestrator-operator` is a non-canonical value (→ `orchestrator`); `lifecycleStage` missing; `veracityStatus` not set; page is draft; note this page duplicates `resources/glossary` — two glossaries exist in the tab

**Heading structure**:
Not extracted in full scan.

**Content summary**:
Draft compendium-format glossary of orchestrator terminology. This page appears to duplicate the existing `resources/glossary` page. The relationship between these two glossary pages is unclear and should be resolved — either merge or differentiate scope.

---

## Duplicate Nav Entries

| Path | Groups |
|---|---|
| `v2/orchestrators/guides/deployment-details/join-a-pool` | Guides — Deployment Details (appears alongside `new-join-a-pool` which has the same display title "Join a Pool") |

**Note**: Two pages with the same sidebar title "Join a Pool" appear in the same nav group — `join-a-pool` (old) and `new-join-a-pool` (current). This creates reader confusion and the old file should be removed from nav or the path distinguished. Both files have `title: Join a Pool`.

---

## Workspace Artefacts

Files under `v2/orchestrators/_workspace/` — path listing only, not scanned as production pages.

| Path | Notes |
|---|---|
| `v2/orchestrators/_workspace/research/orchestrator-tab-review.md` | Research document |
| `v2/orchestrators/_workspace/research/` (multiple files) | Research artefacts |
| `v2/orchestrators/_workspace/archive/` (multiple files) | Archived content |
| All other files under `v2/orchestrators/_workspace/` | ~40+ workspace artefacts — not enumerated individually |

**Additional orphaned files on disk but not in nav** (not workspace artefacts — production-adjacent files excluded from nav):

| Path | Notes |
|---|---|
| `v2/orchestrators/index.mdx` | Root index file, not in nav |
| `v2/orchestrators/quickstart/dep-x-setup-paths.mdx` | Deprecated/deprecated file |
| `v2/orchestrators/setup/s-guide.mdx` | Unlisted setup file |
| `v2/orchestrators/setup/x-test.mdx` | Deprecated test file |
| `v2/orchestrators/guides/deployment-details/x-deprecated/` (9 files) | Deprecated deployment guides |
| `v2/orchestrators/guides/operator-considerations/x-deprecated/` (2 files) | Deprecated operator consideration files |
| `v2/orchestrators/guides/tutorials/x-deprecated/` (3 files) | Deprecated tutorial files |
| `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/` (3 files) | Tutorial stub composable pages |
| `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx` | Unlisted tutorial |
| `v2/orchestrators/guides/advanced-operations/dep-guide.mdx` | Deprecated guide |
| `v2/orchestrators/concepts/x-deprecated/` (2 files) | Deprecated concept files |
| `v2/orchestrators/concepts/composable/orchestratorRole.mdx` | Composable component file |
| `v2/orchestrators/resources/x-payments.mdx` | Deprecated payments resource |
| `v2/orchestrators/resources/x-help.mdx` | Deprecated help resource |
| `v2/orchestrators/resources/x-guides.mdx` | Deprecated guides resource |
| `v2/orchestrators/resources/technical/x-changelog.mdx` | Deprecated changelog |
| `v2/orchestrators/resources/technical/x-support-status.mdx` | Deprecated support status |
| `v2/orchestrators/resources/technical/x-troubleshooting.mdx` | Deprecated troubleshooting |

---

## v1 Reference Paths

v1 paths extracted from docs.json — not scanned. Listed for reference only.

| v1 path |
|---|
| `video-miners/reference/gpu-support` |
| `video-miners/guides/` (multiple pages) |
| (v1 orchestrator content was under `video-miners/` — full list not re-extracted here; consult docs.json v1 block directly) |

---

## Frontmatter Issues Summary

| Page path | Issue type | Current value | Canonical replacement |
|---|---|---|---|
| `v2/orchestrators/portal` | pageType deprecated | `landing` | `navigation` |
| `v2/orchestrators/portal` | purpose deprecated | `landing` | `orient` |
| `v2/orchestrators/portal` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/navigator` | pageType deprecated | `landing` | `navigation` |
| `v2/orchestrators/navigator` | purpose deprecated | `orientation` | `orient` |
| `v2/orchestrators/navigator` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/concepts/role` | pageType deprecated | `overview` | `concept` |
| `v2/orchestrators/concepts/role` | purpose deprecated | `overview` | `explain` |
| `v2/orchestrators/concepts/role` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/concepts/capabilities` | purpose deprecated | `concept` | `explain` |
| `v2/orchestrators/concepts/capabilities` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/concepts/architecture` | purpose deprecated | `concept` | `explain` |
| `v2/orchestrators/concepts/architecture` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/concepts/incentive-model` | purpose deprecated | `concept` | `explain` |
| `v2/orchestrators/concepts/incentive-model` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/quickstart/guide` | pageType deprecated | `overview` | `instruction` (pageVariant: quickstart) |
| `v2/orchestrators/quickstart/guide` | purpose deprecated | `overview` | `start` |
| `v2/orchestrators/quickstart/guide` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/quickstart/video-transcoding` | pageType deprecated | `quickstart` | `instruction` (pageVariant: quickstart) |
| `v2/orchestrators/quickstart/video-transcoding` | purpose deprecated | `tutorial` | `start` |
| `v2/orchestrators/quickstart/video-transcoding` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/quickstart/tutorial` | purpose missing | MISSING | `start` |
| `v2/orchestrators/quickstart/tutorial` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/quickstart/AI-prompt-start` | purpose missing | MISSING | `start` or `configure` |
| `v2/orchestrators/quickstart/AI-prompt-start` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/setup/guide` | pageType deprecated | `overview` | `instruction` (pageVariant: setup) |
| `v2/orchestrators/setup/guide` | purpose deprecated | `overview` | `start` |
| `v2/orchestrators/setup/guide` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/setup/rcs-requirements` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/setup/rcs-requirements` | purpose deprecated | `how_to` | `configure` |
| `v2/orchestrators/setup/rcs-requirements` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/setup/rs-install` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/setup/rs-install` | purpose deprecated | `how_to` | `configure` |
| `v2/orchestrators/setup/rs-install` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/setup/configure` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/setup/configure` | purpose missing | MISSING | `configure` |
| `v2/orchestrators/setup/configure` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/setup/connect-and-activate` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/setup/connect-and-activate` | purpose missing | MISSING | `configure` |
| `v2/orchestrators/setup/connect-and-activate` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/setup/test` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/setup/test` | purpose deprecated | `how_to` | `verify` |
| `v2/orchestrators/setup/test` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/setup/r-monitor` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/setup/r-monitor` | purpose deprecated | `how_to` | `operate` |
| `v2/orchestrators/setup/r-monitor` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/operator-considerations/operator-rationale` | purpose deprecated | `evaluation` | `evaluate` |
| `v2/orchestrators/guides/operator-considerations/operator-rationale` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/operator-considerations/operator-rationale` | FILE CORRUPTION | garbage chars above frontmatter | Lines 1-2 contain `glrw\npwrfs` — will break frontmatter parsing |
| `v2/orchestrators/guides/operator-considerations/business-case` | purpose deprecated | `evaluation` | `evaluate` |
| `v2/orchestrators/guides/operator-considerations/business-case` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/operator-considerations/operator-impact` | purpose deprecated | `evaluation` | `evaluate` |
| `v2/orchestrators/guides/operator-considerations/operator-impact` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/operator-considerations/requirements` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/deployment-details/setup-options` | pageType deprecated | `overview` | `guide` (pageVariant: overview) |
| `v2/orchestrators/guides/deployment-details/setup-options` | purpose deprecated | `orientation` | `orient` |
| `v2/orchestrators/guides/deployment-details/setup-options` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/deployment-details/siphon-setup` | purpose deprecated | `guide` | `operate` |
| `v2/orchestrators/guides/deployment-details/siphon-setup` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration` | purpose deprecated | `setup` | `configure` |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` | purpose deprecated | `guide` | `configure` |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/deployment-details/join-a-pool` | pageType deprecated | `quickstart` | `instruction` (pageVariant: quickstart) |
| `v2/orchestrators/guides/deployment-details/join-a-pool` | purpose deprecated | `faq` | `orient` |
| `v2/orchestrators/guides/deployment-details/join-a-pool` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/deployment-details/join-a-pool` | status field missing | MISSING | n/a (use canonical status assignment) |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool` | purpose deprecated | `guide` | `orient` |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options` | purpose deprecated | `concept` | `explain` |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` | purpose deprecated | `guide` | `configure` |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | pageType possibly misclassified | `concept` | consider `guide` |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | purpose deprecated | `concept` | `explain` or `operate` |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` | purpose deprecated | `guide` | `configure` |
| `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` | purpose missing | MISSING | `configure` |
| `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | purpose deprecated | `guide` | `configure` |
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` | purpose missing | MISSING | `configure` |
| `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/ai-and-job-workloads/model-hosting` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/ai-and-job-workloads/model-hosting` | purpose missing | MISSING | `configure` |
| `v2/orchestrators/guides/ai-and-job-workloads/model-hosting` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/staking-and-rewards/earning-model` | purpose deprecated | `concept` | `explain` |
| `v2/orchestrators/guides/staking-and-rewards/earning-model` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | purpose deprecated | `guide` | `operate` |
| `v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/payments-and-pricing/payment-receipts` | purpose missing | MISSING | `explain` |
| `v2/orchestrators/guides/payments-and-pricing/payment-receipts` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/payments-and-pricing/payments` | purpose deprecated | `concept` | `explain` |
| `v2/orchestrators/guides/payments-and-pricing/payments` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | purpose deprecated | `guide` | `operate` |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/staking-and-rewards/network-participation` | purpose deprecated | `guide` | `operate` |
| `v2/orchestrators/guides/staking-and-rewards/network-participation` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | purpose missing | MISSING | `optimise` |
| `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | purpose missing | MISSING | `optimise` |
| `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/config-and-optimisation/ai-model-management` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/config-and-optimisation/ai-model-management` | purpose missing | MISSING | `optimise` |
| `v2/orchestrators/guides/config-and-optimisation/ai-model-management` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | purpose missing | MISSING | `optimise` |
| `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | purpose deprecated | `guide` | `operate` |
| `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | purpose deprecated | `guide` | `operate` |
| `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | pageType possibly misclassified | `guide` | `reference` (pageVariant: compendium) |
| `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | purpose deprecated | `guide` | `troubleshoot` |
| `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/advanced-operations/gateway-relationships` | purpose deprecated | `concept` | `explain` |
| `v2/orchestrators/guides/advanced-operations/gateway-relationships` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` | pageType deprecated | `how_to` | `instruction` |
| `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` | purpose missing | MISSING | `integrate` |
| `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/advanced-operations/pool-operators` | purpose deprecated | `guide` | `operate` |
| `v2/orchestrators/guides/advanced-operations/pool-operators` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/advanced-operations/scale-operations` | pageType possibly misclassified | `concept` | consider `guide` |
| `v2/orchestrators/guides/advanced-operations/scale-operations` | purpose deprecated | `concept` | `operate` or `optimise` |
| `v2/orchestrators/guides/advanced-operations/scale-operations` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/roadmap-and-funding/funding-and-support` | purpose missing | MISSING | `evaluate` |
| `v2/orchestrators/guides/roadmap-and-funding/funding-and-support` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles` | purpose missing | MISSING | `evaluate` |
| `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test` | purpose missing | MISSING | `build` |
| `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/tutorials/zero-to-first-reward` | purpose missing | MISSING | `build` |
| `v2/orchestrators/guides/tutorials/zero-to-first-reward` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/tutorials/ai-earning-quickstart` | purpose missing | MISSING | `build` |
| `v2/orchestrators/guides/tutorials/ai-earning-quickstart` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/tutorials/add-ai-to-video-node` | purpose missing | MISSING | `build` |
| `v2/orchestrators/guides/tutorials/add-ai-to-video-node` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial` | purpose missing | MISSING | `build` |
| `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/guides/tutorials/realtime-ai-tutorial` | purpose missing | MISSING | `build` |
| `v2/orchestrators/guides/tutorials/realtime-ai-tutorial` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/faq` | purpose deprecated | `faq` | `reference` |
| `v2/orchestrators/resources/faq` | pageVariant missing | MISSING | `compendium` recommended |
| `v2/orchestrators/resources/faq` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/glossary` | pageType deprecated | `glossary` | `reference` (pageVariant: compendium) |
| `v2/orchestrators/resources/glossary` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/community-guides` | pageType possibly misclassified | `reference` | `resource` (curated external content) |
| `v2/orchestrators/resources/community-guides` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/community-pools` | pageType possibly misclassified | `reference` | `resource` (directory) |
| `v2/orchestrators/resources/community-pools` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/technical/cli-flags` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/technical/x-contract-addresses` | pageType deprecated | `landing` | `reference` |
| `v2/orchestrators/resources/technical/x-contract-addresses` | audience wrong | `developer` | `orchestrator` |
| `v2/orchestrators/resources/technical/x-contract-addresses` | purpose deprecated | `landing` | `reference` |
| `v2/orchestrators/resources/technical/x-contract-addresses` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/gpu-support` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/arbitrum-rpc` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/arbitrum-exchanges` | pageType possibly misclassified | `reference` | `resource` (external directory) |
| `v2/orchestrators/resources/arbitrum-exchanges` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/compendium/glossary` | audience wrong | `orchestrator-operator` | `orchestrator` |
| `v2/orchestrators/resources/compendium/glossary` | lifecycleStage missing | MISSING | required |
| `v2/orchestrators/resources/compendium/glossary` | duplicate content | — | Duplicates `resources/glossary` — resolve |

---

## Status Summary Table

| Page path | Section | Status | pageType | Frontmatter complete? |
|---|---|---|---|---|
| `v2/orchestrators/portal` | Start Here | current | landing (DEP) | incomplete |
| `v2/orchestrators/navigator` | Start Here | current | landing (DEP) | incomplete |
| `v2/orchestrators/concepts/role` | Concepts | current | overview (DEP) | incomplete |
| `v2/orchestrators/concepts/capabilities` | Concepts | current | concept | partial |
| `v2/orchestrators/concepts/architecture` | Concepts | current | concept | partial |
| `v2/orchestrators/concepts/incentive-model` | Concepts | current | concept | partial |
| `v2/orchestrators/quickstart/guide` | Quickstart | current | overview (DEP) | incomplete |
| `v2/orchestrators/quickstart/video-transcoding` | Quickstart | current | quickstart (DEP) | incomplete |
| `v2/orchestrators/quickstart/tutorial` | Quickstart | current | tutorial | incomplete |
| `v2/orchestrators/quickstart/AI-prompt-start` | Quickstart | current | guide | incomplete |
| `v2/orchestrators/setup/guide` | Setup | current | overview (DEP) | incomplete |
| `v2/orchestrators/setup/rcs-requirements` | Setup | current | how_to (DEP) | incomplete |
| `v2/orchestrators/setup/rs-install` | Setup | current | how_to (DEP) | incomplete |
| `v2/orchestrators/setup/configure` | Setup | current | how_to (DEP) | incomplete |
| `v2/orchestrators/setup/connect-and-activate` | Setup | current | how_to (DEP) | incomplete |
| `v2/orchestrators/setup/test` | Setup | current | how_to (DEP) | incomplete |
| `v2/orchestrators/setup/r-monitor` | Setup | current | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/operator-considerations/operator-rationale` | Guides — Operator Considerations | current | guide | partial (+ file corruption) |
| `v2/orchestrators/guides/operator-considerations/business-case` | Guides — Operator Considerations | current | guide | partial |
| `v2/orchestrators/guides/operator-considerations/operator-impact` | Guides — Operator Considerations | current | guide | partial |
| `v2/orchestrators/guides/operator-considerations/requirements` | Guides — Operator Considerations | current | reference | partial |
| `v2/orchestrators/guides/deployment-details/setup-options` | Guides — Deployment Details | current | overview (DEP) | incomplete |
| `v2/orchestrators/guides/deployment-details/siphon-setup` | Guides — Deployment Details | current | guide | partial |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration` | Guides — Deployment Details | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` | Guides — Deployment Details | current | guide | partial |
| `v2/orchestrators/guides/deployment-details/join-a-pool` | Guides — Deployment Details | current | quickstart (DEP) | incomplete |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool` | Guides — Deployment Details | current | guide | partial |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options` | Guides — AI and Job Workloads | current | concept | partial |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` | Guides — AI and Job Workloads | current | guide | partial |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | Guides — AI and Job Workloads | current | concept | partial |
| `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` | Guides — AI and Job Workloads | current | guide | partial |
| `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` | Guides — AI and Job Workloads | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | Guides — AI and Job Workloads | current | guide | partial |
| `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` | Guides — AI and Job Workloads | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | Guides — AI and Job Workloads | current | reference | partial |
| `v2/orchestrators/guides/ai-and-job-workloads/model-hosting` | Guides — AI and Job Workloads | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/staking-and-rewards/earning-model` | Guides — Staking and Rewards | current | concept | partial |
| `v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | Guides — Staking and Rewards | current | guide | partial |
| `v2/orchestrators/guides/payments-and-pricing/payment-receipts` | Guides — Payments and Pricing | draft | concept | incomplete |
| `v2/orchestrators/guides/payments-and-pricing/payments` | Guides — Payments and Pricing | current | concept | partial |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | Guides — Staking and Rewards | current | guide | partial |
| `v2/orchestrators/guides/staking-and-rewards/network-participation` | Guides — Staking and Rewards | current | guide | partial |
| `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | Guides — Config and Optimisation | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | Guides — Config and Optimisation | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/config-and-optimisation/ai-model-management` | Guides — Config and Optimisation | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | Guides — Config and Optimisation | current | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` | Guides — Monitoring and Tooling | current | reference | partial |
| `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | Guides — Monitoring and Tooling | current | guide | partial |
| `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | Guides — Monitoring and Tooling | current | guide | partial |
| `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | Guides — Monitoring and Tooling | current | guide | partial |
| `v2/orchestrators/guides/advanced-operations/gateway-relationships` | Guides — Advanced Operations | current | concept | partial |
| `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` | Guides — Advanced Operations | draft | how_to (DEP) | incomplete |
| `v2/orchestrators/guides/advanced-operations/pool-operators` | Guides — Advanced Operations | current | guide | partial |
| `v2/orchestrators/guides/advanced-operations/scale-operations` | Guides — Advanced Operations | current | concept | partial |
| `v2/orchestrators/guides/roadmap-and-funding/funding-and-support` | Guides — Roadmap and Funding | stub | guide | incomplete |
| `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles` | Guides — Roadmap and Funding | stub | guide | incomplete |
| `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test` | Guides — Tutorials | current | tutorial | incomplete |
| `v2/orchestrators/guides/tutorials/zero-to-first-reward` | Guides — Tutorials | current | tutorial | incomplete |
| `v2/orchestrators/guides/tutorials/ai-earning-quickstart` | Guides — Tutorials | current | tutorial | incomplete |
| `v2/orchestrators/guides/tutorials/add-ai-to-video-node` | Guides — Tutorials | current | tutorial | incomplete |
| `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial` | Guides — Tutorials | current | tutorial | incomplete |
| `v2/orchestrators/guides/tutorials/realtime-ai-tutorial` | Guides — Tutorials | current | tutorial | incomplete |
| `v2/orchestrators/resources/faq` | Resources | current | reference | partial |
| `v2/orchestrators/resources/glossary` | Resources | current | glossary (DEP) | partial |
| `v2/orchestrators/resources/community-guides` | Resources | current | reference | partial |
| `v2/orchestrators/resources/community-pools` | Resources | current | reference | partial |
| `v2/orchestrators/resources/technical/cli-flags` | Resources — Technical | current | reference | partial |
| `v2/orchestrators/resources/technical/x-contract-addresses` | Resources — Technical | draft | landing (DEP) | incomplete |
| `v2/orchestrators/resources/gpu-support` | Resources | current | reference | partial |
| `v2/orchestrators/resources/arbitrum-rpc` | Resources | current | reference | partial |
| `v2/orchestrators/resources/arbitrum-exchanges` | Resources | current | reference | partial |
| `v2/orchestrators/resources/compendium/glossary` | Resources — Compendium | draft | reference | incomplete |

---

## Compatibility Verification

This output is designed to feed `structure-audit.md`. Verification:

- **status per page**: All 72 pages assigned status (`current`, `draft`, `stub`). No `empty` pages (all nav paths have files on disk). Stubs flagged explicitly (2 pages). Structure-audit's `missing` type does not apply here — no nav sections exist without any pages.
- **pageType per page**: Recorded for all 72 pages. Deprecated values flagged with canonical replacements. Used in status summary table.
- **Section/group context**: Each page entry includes the nav group. Status summary table includes section column.
- **Heading structure**: Recorded where extractable from first 50 lines of each file. Many pages use JSX component-based headings that are not visible in plain frontmatter scans — this is flagged per page.

**Cross-cutting issues for structure-audit.md attention**:

1. **`lifecycleStage` missing on all 72 pages** — this field is required per canonical schema. Every page will show as `incomplete` until this is addressed tab-wide.
2. **`veracityStatus` not set on all 72 pages** — flagged throughout; not a blocking issue but consistent gap.
3. **Non-canonical status field values** — `published`, `review` used across ~25 pages. These are not part of the canonical schema (status is assigned by scanner, not stored). Pages using these values are treated as `current`.
4. **`purpose` field**: Missing entirely on 20 pages; deprecated values on 38 pages. Only 14 pages have canonical purpose values (`reference` on reference pages, `evaluate`-adjacent on 0 pages).
5. **File corruption**: `v2/orchestrators/guides/operator-considerations/operator-rationale` has garbage characters (`glrw\npwrfs`) before the frontmatter `---` delimiter. This will cause frontmatter parsing failures in Mintlify and CI.
6. **Duplicate glossary pages**: `resources/glossary` and `resources/compendium/glossary` both exist — unclear which is canonical.
7. **Old join-a-pool file**: `guides/deployment-details/join-a-pool` and `guides/deployment-details/new-join-a-pool` both appear in nav with the same title "Join a Pool". The old file should be removed from nav.
