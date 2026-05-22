# Cross-Tab Journey Map — Stub

**This file is a stub.** It is populated during Phase 3 (IA Audit), not before. Do not fill in journey paths, graduation conditions, or shared terminology until Phase 3 has run and produced a reviewed tab-map for the relevant tabs.

The stub exists so Phase 3 has a defined output location. Writing to this file before Phase 3 produces reviewed artefacts introduces unverified assumptions into a file that downstream phases will treat as authoritative.

---

## Primary Graduation Paths

Populated during Phase 3 IA Audit. A graduation path is only recorded here after: the source tab's tab-map is approved, the destination tab's IA Approved gate is open, and a human has confirmed the entry/exit conditions are coherent.

| From Tab | Entry Persona | Exit Condition | To Tab | Arriving Persona | Required CTA/Handoff |
|---|---|---|---|---|---|

### Known paths to confirm during Phase 3

The following graduation paths are expected based on product context. They are listed here as stubs — not as confirmed paths. Phase 3 must validate each one against actual tab structure before they are written into the table above.

- **Founder → About → Builder → Developers (or Gateways)**: A founder learning about the protocol (About) who decides to build should graduate into the Developers or Gateways tab depending on whether they are building applications or running infrastructure. Entry condition and CTA TBD in Phase 3.
- **Builder → Developer graduation**: A builder who hits technical depth limits in the Developers tab may need a separate graduation point. Exact exit condition TBD.
- **Delegator → About (protocol context)**: A delegator seeking to understand why the protocol works the way it does graduates into the About tab. Entry condition and what page they land on TBD in Phase 3.
- **Orchestrator → Gateway (dual-mode operator)**: An orchestrator who wants to also run a gateway needs a clear graduation path. This is a dual-mode operator journey — both tabs must be aware of it. CTA and entry point TBD in Phase 3.

---

## Cross-Tab Shared Terminology

Populated during Phase 12. Do not fill in before Phase 12 runs.

This section records terminology that must be consistent across tabs — terms that appear in more than one tab with different or potentially conflicting definitions. Phase 12 resolves those conflicts and records the canonical form here.

---

## Cross-Tab AI Discoverability

**Flag for Phase 6 content-pass.md output requirements.**

SearchTable and ShowcaseCards pages require companion `.json` files for AI discoverability and search indexing. When a tab contains pages using these components, Phase 6 WRITE mode must produce both the `.mdx` content and the companion `.json` data file as paired outputs.

This requirement applies across tabs — any tab with a portal, showcase, or navigator page pattern carries this dependency. Phase 3 should flag these pages in the tab-map so Phase 6 knows the paired output is required.

---

## Phase 12 Trigger Note

**Decision required at Phase 0**: Run Phase 12 once (all 5 tabs complete) or incrementally (minimum 3 tabs sharing a cross-tab journey)?

- **Once**: simpler, fully coherent, but blocks cross-tab consistency until the last tab completes.
- **Incremental**: faster value, but produces provisional cross-tab locks — conventions locked for the tabs that ran, with "pending [remaining tabs]" items open. An incremental run requires a second pass when remaining tabs complete.

Suggested minimum tab set for an incremental run: Gateways + Orchestrators + Developers (shared graduation path). About and Delegators can run in the second pass.

**This decision must be recorded in `decision-registry.md` before Phase 12 is scheduled.**
