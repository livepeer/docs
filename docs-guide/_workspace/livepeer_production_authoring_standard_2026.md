# Livepeer Documentation Authoring Standard (2026 Edition)

## Purpose

This document defines the mandatory quality, research, structure, and verification standards for all Livepeer documentation moving forward. It is a reusable internal authoring framework and applies universally across protocol, network, developer, orchestrator, ecosystem, governance, and product materials.

No documentation may be published unless it meets every requirement defined below.

---

# 1. Foundational Principles

## 1.1 Verifiability First
All claims must be:
- Traceable to primary sources (GitHub, deployed contracts, governance proposals, explorer data, forum records, official announcements, conference talks, or recorded product demos).
- Current to the year of publication.
- Technically defensible.

If a statement cannot be verified, it must not appear.

## 1.2 Protocol vs Network Separation
Documentation must strictly distinguish:

**Protocol (On‑Chain / Economic Layer)**
- Smart contracts
- Token mechanics
- Inflation mathematics
- Slashing logic
- Governance logic
- Treasury flows
- Settlement guarantees

**Network (Off‑Chain / Operational Layer)**
- Node software
- Work execution
- Job routing
- AI pipelines
- Video transcoding
- Gateways
- Market behavior

Blurring these layers is prohibited.

## 1.3 Academic Rigor
Documentation must:
- Define all terms precisely
- Introduce formal models where applicable
- Provide mathematical derivations for economic mechanisms
- Use system diagrams to model flows
- Avoid marketing language unless explicitly in a product-forward section

Tone must be analytical, technical, and structured.

---

# 2. Structural Requirements

Each documentation page must include:

1. Executive Summary (clear and concise)
2. Formal Definition of the Component/System
3. Architectural Context (where it fits in the stack)
4. Mechanism-Level Detail
5. Economic or Security Implications (if applicable)
6. Operational Considerations (if applicable)
7. Diagrams (Mermaid required where systems interact)
8. References & Source Links

Minimum depth requirement:
- Sufficient to serve both a protocol researcher and a production engineer.

---

# 3. Mathematical Standards (When Economics Are Involved)

Where token economics or incentives are described:

- All formulas must define variables explicitly.
- Inflation functions must include:
  - Target bonding rate
  - Current bonding rate
  - Adjustment coefficient
  - Update frequency
- Slashing and reward calculations must include equations.
- Any yield discussion must separate protocol issuance from fee revenue.

Derivations must show stepwise logic, not just final formulas.

---

# 4. Smart Contract & ABI Standards

When referencing contracts:

Documentation must include:
- Contract name
- Deployment network
- Verified address
- Link to source repository
- ABI reference link
- Key callable functions and their purpose

All addresses must be verifiable on-chain.

---

# 5. Live Metrics Requirements

Where metrics are referenced, documentation must include:
- Staking participation rate
- Total token supply
- Inflation rate
- Treasury balance (if applicable)
- Fee volume (if relevant)

Metrics must:
- Identify data source
- Specify retrieval date
- Avoid fabricated numbers
- Clearly mark placeholders if live retrieval is pending

---

# 6. Visual Standards

All documentation must include visual components where systems interact.

Required visual types:
- Architecture diagrams
- Sequence diagrams
- State diagrams
- Economic flow charts

Mermaid syntax must be clean, structured, and readable.

---

# 7. External Media & Contextual References

Documentation must reference and integrate external sources where appropriate:
- Technical talks
- Conference presentations
- GitHub repositories
- Forum discussions
- Blog deep dives
- Governance threads

Media must be:
- Directly relevant
- Linked with context
- Supporting the technical explanation

Superficial embedding is not permitted.

---

# 8. Product-Forward Sections

Where applicable, documentation must explain:
- Why the system was designed this way
- Trade-offs compared to alternatives
- Economic alignment implications
- Upgrade paths and modularity
- Real-world deployment implications

These sections must be analytical, not promotional.

---

# 9. Prohibited Practices

The following are not acceptable:
- Bullet-only explanations for complex systems
- High-level marketing summaries without mechanism detail
- Unverified contract references
- Outdated architectural assumptions
- Mixing protocol and network responsibilities
- Draft placeholders labeled as final documentation

---

# 10. Publication Readiness Checklist

Before documentation is considered production-ready, confirm:

- All mechanisms are technically accurate
- All contracts are verifiable
- All formulas are mathematically sound
- All diagrams reflect current architecture
- All references are live and valid
- Protocol vs network separation is explicit
- No speculative or unverifiable claims remain

---

# Enforcement

This standard is mandatory for all future Livepeer documentation prompts and outputs.

Any content failing these criteria must be revised before publication.


---

## Metrics Policy (Revised Standard)

Live network metrics (staking %, inflation rate, circulating supply, fees, etc.) are **not mandatory requirements** for documentation.

This documentation standard requires:

- No fabricated or estimated "current" values.
- No hardcoded dashboard numbers without verifiable timestamp.
- Clear labeling when any numeric example is illustrative.
- Preference for explaining *derivation methods* (contract reads, formula math, explorer query paths) rather than embedding volatile figures.

Metrics may be included when:

- They represent protocol constants defined in contracts.
- They reference historically enacted governance changes (with citation).
- They are clearly marked as examples for educational purposes.

Architectural accuracy, economic rigor, and contract-level verifiability take precedence over transient live dashboard values.


---

## Technical Standards

All documentation must meet the following technical standards:

• Explicit protocol vs network separation. No cross-layer ambiguity.
• Terminology must match current canonical Livepeer definitions (as reflected in the current docs preview and official repos).
• All diagrams must be valid Mermaid syntax and render without errors.
• Mathematical formulas must define variables clearly and include derivation where relevant.
• No speculative language. If uncertain, state assumptions explicitly.
• No outdated architectural references (pre‑Arbitrum migration components must be labeled historical).
• Gateways, orchestrators, platforms, SDKs, and protocol contracts must be clearly differentiated.
• Version-sensitive statements must indicate network version or upgrade context.
• No placeholders, stubs, TODOs, or “draft” language.

Source of Truth Requirement

The current Livepeer documentation preview at:
https://na-36-docs-v2-preview.mintlify.app/v2/pages

is the authoritative context for terminology, structure, and positioning. All future documentation work must:

• Align with the information architecture and definitions used in that preview.
• Avoid contradicting or regressing existing approved language unless explicitly refactoring.
• Treat that preview site as the canonical baseline for CURRENT Livepeer docs.
• Only introduce structural changes when explicitly requested.

This documentation standard applies globally to all future prompts and page builds. It is not page-specific; it governs the entire documentation system.

