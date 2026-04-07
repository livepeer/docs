> **STATUS: RESEARCH INPUT — valid reference**
> Evaluation of 3 OSS governance frameworks (Sane Labels, GitHub Guides, CNCF/Kubernetes). The hybrid recommendation (F1 + F2 + selective F3) remains valid input for Phase 2 design.
> Last reviewed: 2026-03-27

---

# OSS Governance Frameworks

Three established frameworks for managing open source repositories on GitHub, evaluated for the livepeer/docs documentation repo.keywords: ["livepeer", "internal", "governance", "open source", "frameworks", "labels", "github", "oss", "community", "contributions"] 

This page presents three established frameworks for managing open source repositories on GitHub. Each is evaluated for fit against the `livepeer/docs` repository: a community-facing documentation estate with 44 existing labels, 8 issue templates, 17 CI workflows, and a contributor base spanning Foundation staff, community members, and AI agents.

**Recommendation** - Adopt a hybrid approach combining Framework 1 (prefixed taxonomy for all labels) with Framework 2 (governance artefacts and contributor lifecycle) and selective elements from Framework 3 (lifecycle labels and the docs-SIG ownership pattern). This maps precisely to what `livepeer/docs` already has partially built.

## **Framework 1: Prefixed Label Taxonomy (Sane Labels Model)**

Originating from Dave Lunny's influential 2016 article and refined through adoption by projects like freeCodeCamp, Robin, and numerous mid-scale OSS repos, the Prefixed Label Taxonomy organises every label into a small number of prefix groups. The core principle is that a label's prefix declares its category, while its suffix declares its value.

### **Core Prefix Groups**

| **Prefix Purpose Example values** |
| --- |

| **type:** | **What kind of work** | **bug, enhancement, documentation, question** |
| --- | --- | --- |
| status: | Current lifecycle state | needs-triage, in-progress, blocked, backlog |
| priority: | Maintainer scheduling | critical, high, medium, low |
| area: | Which subsystem or section | gateways, developers, orchestrators |
| kind: | Issue sub-classification | factual-error, broken-link, unclear-instructions |

### **Key Principles**

An issue has one type, one status, one priority. This prevents conflicting signals. An issue can combine `type: bug` + `priority: high` + `area: gateways` without ambiguity. All labels in a prefix group share a colour family for at-a-glance scanning. Labels are applied to add context, not to fill mandatory slots. The absence of a label is itself a signal (untriaged). `good first issue`, `help wanted`, and `wontfix` are GitHub conventions and do not require prefixes. Strengths and Weaknesses

- Intuitive for new contributors who can understand the system at a glance - Directly automatable: GitHub Actions can parse prefix groups for auto-labelling workflows - Scales well from 20 to 100+ labels without confusion - Already partially implemented in `livepeer/docs` via `issue-auto-label.yml` - Requires discipline to prevent prefix proliferation (too many groups creates cognitive overload) - No built-in governance layer; needs a separate `GOVERNANCE.md` or policy document on top References

1. Lunny, D. (2016). "Sane GitHub Labels". Medium
1. Zak, D. (2020). "GitHub Pro Tips For Your Development Team". Medium
1. Gorohovsky, J. (2024). "Best Practices for Using GitHub Issues". Rewind/JetBrains
1. Robin (2023). "GitHub Issues: Tagging Best Practices". robinpowered.com
1. SE-Education (ongoing). "Working with GitHub labels". se-education.org

## **Framework 2: GitHub Open Source Guides / Apache Meritocracy Model**

GitHub's own Open Source Guides (`opensource.guide`), maintained publicly on GitHub and heavily influenced by the Apache Software Foundation's meritocratic governance model, provide a holistic framework that goes beyond labels to cover contributor roles, decision-making, and project lifecycle.

### **Governance Structures**

The Guides identify three common OSS governance models:

| **Model Description Example projects** |
| --- |

| **BDFL** | **Benevolent Dictator for Life; one person has final say on all major decisions** | **Python, Linux kernel** |
| --- | --- | --- |
| Meritocracy | Active contributors earn decision-making roles through quality and quantity of contributions. Voting-based consensus | Apache projects, Node.js |
| Liberal Contribution | Wide commit access; those who contribute gain influence. Lighter governance, consensus-driven | Rust, smaller community projects |

### **Key Artefacts**

Documents roles, decision processes, and how people advance through the contributor ladder. Step-by-step contributor pathway including code review expectations and style requirements. Community behaviour standards and procedures for handling incidents. Maps code areas to responsible reviewers, enforced by GitHub's review system. Strengths and Weaknesses

- Battle-tested at massive scale (Apache, CNCF, Node.js Foundation) - Addresses the full contributor lifecycle, not just issue categorisation - Explicit paths for contributor advancement reduce bus-factor risk - Strong documentation culture aligns with a documentation-focused project - Can feel heavy for small teams; full meritocracy tooling suits 20+ active contributors - Label strategy is not prescriptive - you still need a taxonomy layer on top References

1. GitHub (ongoing). "Leadership and Governance". opensource.guide
1. Apache Software Foundation. "How the ASF Works". apache.org
1. Red Hat (2022). "A guide to open source project governance models". redhat.com
1. Linux Foundation (2023). "Recommended Practices for Hosting and Managing Open Source Projects on GitHub". Dr Ibrahim Haddad

## **Framework 3: CNCF / Kubernetes SIG-Based Governance**

The Cloud Native Computing Foundation (CNCF) and its flagship project Kubernetes represent the most structured governance model in open source. While designed for large multi-team projects, the patterns are directly transferable to documentation repos that serve multiple stakeholder groups - exactly the situation `livepeer/docs` is in.

### **Core Organisational Units**

| **Unit Description** |
| --- |

| **SIG (Special Interest Group)** | **Persistent group owning an area of the codebase. Has its own charter, chair, and meeting cadence** |
| --- | --- |
| Working Group | Temporary cross-cutting group formed for a specific goal. Disbands when done |
| Committee | Handles sensitive topics (security, CoC) with non-public membership |
| Subproject | Every file in the repo is owned by a subproject within a SIG |

### **Label System (Kubernetes Pattern)**

Kubernetes uses a fully automated, bot-managed label system via the Prow CI bot with 500+ labels. Labels are prefixed, machine-applied, and govern merge permissions. The key prefix groups are:

1. `sig/` - which SIG owns the issue (e.g. `sig/network`, `sig/docs`)
1. `kind/` - issue type (bug, feature, cleanup, documentation, flake)
1. `priority/` - scheduling urgency (critical-urgent, important-soon, important-longterm, backlog)
1. `lifecycle/` - staleness tracking (active, frozen, stale, rotten)
1. `area/` - subsystem or component (e.g. `area/api`, `area/kubectl`)
1. `triage/` - triage state (accepted, needs-information)
1. `size/` - estimated change size (XS, S, M, L, XL, XXL)
1. `lgtm`, `approved`, `do-not-merge/*` - merge-gate labels managed by bots

### **Strengths and Weaknesses**

### **- Maximum automation: bots apply and remove labels, enforce merge gates, ping stale issues - Ownership is encoded in the label system itself, not just CODEOWNERS - Lifecycle labels prevent issue graveyards (stale then rotten then auto-close) - The docs SIG pattern maps directly to a documentation repository - High overhead to set up and maintain the bot infrastructure - 500+ labels is overkill for a repo with fewer than 50 active issues - Requires dedicated tooling (Prow, GitHub Apps) that most small projects lack References**

1. Kubernetes Community (ongoing). "governance.md". github.com/kubernetes/community
1. Kubernetes (ongoing). "Labels and Selectors". kubernetes.io/docs
1. CNCF (ongoing). "Technical Oversight Committee". github.com/cncf/toc

## **Framework Comparison Matrix**

| **Dimension Prefixed Labels GitHub/Apache CNCF/K8s** |
| --- |

| **Setup complexity** | **Low** | **Medium** | **High** |
| --- | --- | --- | --- |
| Label governance | Strong | Light | Maximum |
| Contributor lifecycle | Not covered | Strong | Strong |
| Automation support | Good | Good | Excellent |
| Scales to 100+ issues | Yes | Yes | Yes |
| Fit for livepeer/docs | High | High | Medium (selective) |

The recommended approach for `livepeer/docs` is a **hybrid** combining the prefixed taxonomy from Framework 1, the governance artefacts and contributor lifecycle from Framework 2, and selective lifecycle labels from Framework 3. See the [Repo Management Proposal](./repo-management-proposal) and [Label Proposal](./label-proposal) for implementation details. Concrete recommendations for livepeer/docs governance Full target label set with implementation sequence