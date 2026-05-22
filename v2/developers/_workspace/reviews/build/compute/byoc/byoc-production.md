# Review: byoc-production.mdx

**Page**: `v2/developers/build/compute/byoc/byoc-production.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A6
**pageType (from frontmatter)**: `guide` (line 8)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 3,638
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `guide` |
| 1. Frontmatter | 1.3 | pageVariant | INFO | Absent; `troubleshooting` or `compendium` could fit |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `operate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `advanced` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `operate` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Production requirements for BYOC containers..." 145 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "behaviour" (line 34) — UK ✓ |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | MIXED | Line 34: "A BYOC container that works locally may fail in production" — uses `may` in a value claim (2.14); rubric flags `may [verb]` as hedging |
| 2. Voice | 2.5 | Opening order | PASS | Line 34: "A BYOC container..." — subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | PASS | Uses "BYOC container" consistently without expanding; expansion is on overview/quickstart |
| 2. Voice | 2.12 | Em-dashes | PASS | Zero |
| 2. Voice | 2.13 | Entity-led voice | PASS | "A BYOC container", "The orchestrator", "The `/health` endpoint" lead paragraphs |
| 2. Voice | 2.14 | No hedging verbs | FAIL | Line 34: "may fail in production"; line 76: "may produce incomplete output" — both hedging |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | NOT-TESTED | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "SIGTERM" (line 58) named without link to POSIX signal reference; "Prometheus" (line 90) named without link or context |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first opening | N/A | Guide |
| 2. Voice | 2.D2 | API/method has code | PASS | Code shown for shutdown handler, load test |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for nvidia-smi, Prometheus, go-livepeer; `maxSessions` config flag named (line 52) with no link |
| 2. Voice | 2.D4 | Errors in main content | PASS | |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | All ≥21 |
| 3. Headings | 3.2 | Banned/weak terms | PASS | "Monitoring" (line 88) acceptable; "Graceful shutdown" specific; no "Overview", "Notes", etc. |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | All headings contain domain noun |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "BYOC production" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Production hardening checklist |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer harden a BYOC container for production" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Parent compute/overview missing |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing pointer at line 103; no Related Pages footer |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | Guide for production hardening; no Prerequisites listed (GPU, nvidia-smi, Prometheus scraper, working dev container). Reader needs to know "you should have completed the BYOC quickstart" before this page |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "production-hardening-checklist" (line 103) routes to gateway-side production |
| 4. Structure | 4.7 | Info type per section | PASS | Procedural / operational |
| 4. Structure | 4.8 | No content duplication | MIXED | Health check section (lines 80-84) overlaps `byoc-architecture.mdx` Health check contract (lines 91-101) — but with operational depth that arch page lacks |
| 4. Structure | 4.9 | Section orientation | FAIL | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero |
| 4. Structure | 4.11 | Discord test | MIXED | "How do I run BYOC in prod?" partially answered — covers GPU OOM, SIGTERM, health checks, monitoring. Missing: capacity planning, logging, security boundaries, autoscaling, restart policies, image-registry workflow |
| 4. Structure | 4.12 | Page size | FAIL | 3.6 KB — below the ≥5 KB substantive threshold for guide pages (rubric 4.12) |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | GPU OOM under load named (line 29-34); SIGTERM timeout named (line 76); GPU resource competition (5-concurrent test) named; container size + cold start NOT named (brief specifies these) |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | bash (42), python (60) tagged |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states main | PASS | Failure modes in main flow |
| 4. Structure | 4.20 | API/method has code/link | MIXED | `maxSessions` named (line 52) without link |
| 5. Layout | 5.1 | Correct template | MIXED | Guide template OK; missing Related Pages footer |
| 5. Layout | 5.2 | Required sections | FAIL | Guide matrix requires Related Pages footer; this page has prose pointer only |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | Metrics table (92-97) raw markdown — should be `<StyledTable>`; operational checklist content would benefit from `<StyledSteps>` or `<AccordionGroup>` |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 10) legacy field |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | Metrics names (`byoc_sessions_active`, etc.) hardcoded; if there's a canonical Prometheus exporter, the names should come from a shared snippet |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | NEITHER. Prose pointer at line 103 only |
| 5. Layout | 5.17 | Related Pages format | FAIL | No section |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | FAIL | bash block (42) and python block (60) both missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | Not procedural Steps |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | N/A | No nav cards |
| 5. Layout | 5.23 | StyledTable | FAIL | Metrics table (92-97) raw markdown |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider line 32 OK; divider at line 36 between intro line 34 and first H2 line 38 — violates 5.26 |
| 5. Layout | 5.27 | Mermaid | MIXED | No diagram; concurrent-session profiling and health-check-under-load would benefit from a state/flow diagram |
| 5. Layout | 5.28 | Import ordering | PASS | element → wrapper |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | FAIL | "default 10 seconds" SIGTERM timeout (line 76) — no source (Docker default? go-livepeer-orchestrator config?); "Prometheus scraper picks up metrics from containers on the same Docker network" (line 99) — no link to orchestrator's Prometheus config |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "5 concurrent sessions" arbitrary; "default 10 seconds" needs source |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary | NOT-TESTED | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No version pin for go-livepeer; `maxSessions` config flag not linked to go-livepeer flag reference |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No T1 links: no `livepeer/go-livepeer` link, no Prometheus docs link, no Docker SIGTERM docs link |
| 6. Veracity | 6.11 | Glossary defs | NOT-TESTED | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | NOT-TESTED | |
| 7. Nav/IA | 7.2 | Mirrors fs | FAIL | Parent missing |
| 7. Nav/IA | 7.3 | Portal routes | FAIL | |
| 7. Nav/IA | 7.4 | Orphans | MIXED | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona-3 graduation point but no signposting to Orchestrators tab where the BYOC operator side lives |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | Zero |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | FAIL | 3.6 KB — below substantive threshold (4.12) |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | Two links at line 103 resolve |
| 8. Links | 8.2 | External | N/A | |
| 8. Links | 8.3 | Snippets | PASS | CustomDivider imported (line 25) |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | "How do I run BYOC in prod" partly answered — see 4.11 |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Misses image-registry workflow, logging, autoscaling |
| 10. Completeness | 10.3 | Persona paths | MIXED | |
| 10. Completeness | 10.4 | Scope | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | |
| 10. Completeness | 10.6 | Language paths | PASS | bash + python |
| 10. Completeness | 10.7 | Persona guides | MIXED | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "BYOC production" | PASS | 2 words |
| sidebarTitle | Yes | "Production" | PASS | |
| description | Yes | "Production requirements..." | PASS | 145 chars |
| pageType | Yes | guide | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Missing — `operate` |
| complexity | No | — | FAIL | Missing — `advanced` |
| lifecycleStage | No | — | FAIL | Missing — `operate` |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Missing |
| status | Yes | current | FAIL | Legacy |
| lastVerified | Yes | 2026-05-15 | PASS | |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | Imported ✓; line 36 placement violates 5.26 |
| `<CenteredContainer>` | Yes (1×) | — | — | OK |
| `<Tip>` | Yes (1×) | Recommended | — | OK |
| `<StyledTable>` | No | Required | — | Metrics table 92-97 raw markdown |
| `<Columns>` / `<Card>` | No | Required (Related Pages) | — | NO Related Pages footer (FAIL 5.16) |
| `<CustomCardTitle>` | No | Required for nav Cards | — | |
| `<AccordionGroup>` | No | Recommended for failure modes | — | Multiple failure modes covered as prose — Accordion would scan better |
| Fenced code w/ icon+title | No | Required | — | 2 blocks missing |
| `<Tabs>` | No | — | — | |
| Mermaid | No | Recommended | — | Health-check-under-load state diagram would help |

## Cross-page duplication and link gaps

- **OVERLAP**: Health check section (80-84) re-covers `byoc-architecture.mdx` Health check contract (91-101) with operational depth. Could be consolidated: arch page = "what `/health` is"; production page = "how to keep it green under load".
- **LINK GAPS**:
  - "`maxSessions` orchestrator config" (line 52) — no link to go-livepeer flag reference.
  - "SIGTERM" "default 10 seconds" (line 76) — no source.
  - "Prometheus" (line 90, 99) — no link to Prometheus docs or to go-livepeer's `/metrics` endpoint config.
  - "Docker socket" relationship to orchestrator — not stated; reader hasn't been told how the orchestrator and container co-locate.
  - No reference to brief repos (muxionlabs/byoc-sdk has deployment helpers; muxionlabs/runner-router handles multi-container routing — both production-relevant).
- **STRANDED**: Production page ends with link to `production-hardening-checklist` (gateway-side). Reader who finishes hardening their BYOC container has no signposted next step to "register on mainnet" or "list capability on the Orchestrators tab".
- **MISSING TOPICS** for a guide titled "BYOC production":
  - Image-registry workflow (how to ship the image from CI to the orchestrator).
  - Logging strategy (structured logs, log forwarding to orchestrator).
  - Autoscaling and resource quotas under Kubernetes or Docker Compose.
  - Restart policy (Docker `--restart`, k8s `restartPolicy`).
  - Security boundary (Docker socket access risk, rootless Docker, container scanning).
  - Pricing tuning (per-second compute math, `price_per_unit` calibration).

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 2 | line 34: "may fail in production"; line 76: "may produce incomplete output" — hedging in value claims (2.14) |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| GPU memory profiling | 5 | 4 | 5 | 5 | 5 | 24 |
| Graceful shutdown | 4 | 4 | 5 | 5 | 5 | 23 |
| Health check under load | 5 | 4 | 5 | 5 | 5 | 24 |
| Monitoring | 3 | 3 | 4 | 5 | 5 | 20 (borderline; 3.2 doesn't ban it but "Monitoring" is broad — "BYOC metrics" or "Prometheus metrics" would score higher) |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 42 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20; should be `icon="terminal" title="load-test.sh"` |
| 60 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20; should be `icon="code" title="shutdown.py"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page is named "BYOC production" — readers come here to harden their container before mainnet. The current content covers four operational concerns (GPU OOM, SIGTERM, health-under-load, Prometheus metrics) but misses six others critical for a real production deploy: image-registry workflow, structured logging, autoscaling/quotas, restart policy, Docker socket security boundary, and price calibration. Reader leaves having patched the most visible failure modes but no holistic checklist of "is this container ready for mainnet?"
- **Fix step:** Add a §"Production readiness checklist" `<AccordionGroup>` at the top, mirroring the rest of the page's sections but as a scannable 10-item gate: image versioning, logging, restart policy, autoscaling, GPU profiling, SIGTERM handling, health-under-load, Prometheus metrics, price calibration, capacity planning. Each accordion expands the requirement + the pass criterion. Keep the existing four sections as deep dives for the items that need them.
- **Source/exemplar:** Parallel pattern in `_workspace/audit-2026-05-12/task-3-rewrite-scope.md`; production-hardening-checklist page referenced at line 103 (which is gateway-side — this page should be its BYOC-side counterpart).

### Layer 2 — Composition
- **Gap:** No Related Pages footer (5.16 + 5.17 FAIL). Raw markdown metrics table (5.23 FAIL). Divider placement at line 36 (5.26 FAIL). Code blocks missing icon+title (5.20 FAIL). Four `<AccordionGroup>` candidates (GPU OOM diagnosis, SIGTERM handler patterns, health-under-load patterns, metric tuning) all rendered as flat prose. No Mermaid diagram of the health-check-failover lifecycle (orchestrator polls `/health` → fails → stops advertising → re-polls → restored).
- **Fix step:** (a) Add `<Columns cols={2}>` Related Pages with `<CustomCardTitle>` cards before EOF. (b) Convert metrics table (92-97) to `<StyledTable>`. (c) Remove divider at line 36. (d) Add `icon="terminal" title="load-test.sh"` to bash block, `icon="code" title="shutdown.py"` to python block. (e) Add Mermaid `stateDiagram` showing health-check states: Advertised → Health Failing → Quarantined → Health OK → Re-advertised. (f) Convert the four section bodies to `<AccordionGroup>` per section OR keep prose but add an `<AccordionGroup>` "Common failure modes" section pulling each known issue into a separate Accordion.
- **Source/exemplar:** `_packet/component-matrix.md` guide row; section-1 review pattern.

### Layer 3 — Cross-page integration
- **Gap:** Page ends with one prose pointer to gateway-side production checklist. Zero cross-tab. No link to `livepeer/go-livepeer` for `maxSessions`, SIGTERM timeout default, or Prometheus config. No link to brief repos: `muxionlabs/byoc-sdk` ships deployment helpers, `muxionlabs/runner-router` handles multi-container orchestrators — both directly relevant to "BYOC production" but unmentioned.
- **Fix step:** Add Related Pages `<Columns>` with: (1) `byoc-architecture.mdx`, (2) `byoc-quickstart.mdx`, (3) `/v2/orchestrators/setup/operate` (the operator-side production guide on the Orchestrators tab), (4) `/v2/developers/guides/payments/per-second-compute` (price calibration). Inline link `livepeer/go-livepeer` at line 52 (for `maxSessions`). Add §"Multi-container deployments" pointing to `muxionlabs/runner-router`. Add §"CLI tooling" pointing to `muxionlabs/byoc-sdk` deployment helpers.
- **Source/exemplar:** brief repos list; sibling `byoc-sdk.mdx` table at lines 54-59 already lists these — copy the same references.

### Layer 4 — Veracity and source authority
- **Gap:** "default 10 seconds" SIGTERM timeout (line 76) — no source. Docker default is 10s; orchestrator may override. "5 concurrent sessions" load-test number (line 47) — arbitrary; should reference orchestrator default `maxSessions`. "Prometheus scraper picks up metrics from containers on the same Docker network" (line 99) — orchestrator's Prometheus integration not linked. Metrics names (`byoc_sessions_active`, etc.) (lines 92-97) — invented vs. extracted? No source. `veracityStatus` field absent.
- **Fix step:** (a) Add `veracityStatus: unverified` to frontmatter. (b) Source SIGTERM timeout at line 76: `{/* REVIEW: confirm default — Docker default 10s; orchestrator override? */}` then cite go-livepeer source. (c) Replace "5 concurrent sessions" with "the orchestrator default `maxSessions=<N>`" with a `{/* REVIEW: confirm */}` placeholder. (d) Source the metric names: are they emitted by a canonical Livepeer Prometheus exporter, or example names this page is proposing? Add `{/* REVIEW: confirm metric naming — proposed vs emitted */}`. (e) Add `TESTED:` label to code blocks.
- **Source/exemplar:** `livepeer/go-livepeer` flag reference; Docker SIGTERM docs.

### Layer 5 — Product-forward depth
- **Gap:** Page is titled "Production" but doesn't tell the reader what production-readiness looks like. No "pre-mainnet checklist" gate. No SLO target. No worked example of price calibration (the per-second compute model means `price_per_unit` must reflect actual GPU-second cost — but no math shown). No safety topics (Docker socket exposure, image scanning). No autoscaling guidance. Brief specifies container-size / cold-start / debugging-cost trade-offs; this page covers them partly (cold start implied in GPU OOM section) but doesn't surface them as a named hazard set.
- **Fix step:** Add §"Pricing calibration" with one worked example: "If your container processes 10 frames/sec at 80W GPU draw, GPU-second cost = $X; with 30% margin, `price_per_unit` = Y wei". Add §"Security boundaries" `<Warning>`: Docker socket access, image scanning, network isolation between BYOC and orchestrator host. Add §"Autoscaling" pointing to `muxionlabs/runner-router` for multi-instance patterns. Add `<Badge>Phase 4 — mainnet</Badge>` near top. Add SLO line to intro: "Target `/health` success rate ≥99.5% under nominal load to stay advertised."
- **Source/exemplar:** brief task-3-rewrite-scope.md; per-second-compute page; `.claude/references/layout/exemplars.md` maturity badge.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. No Related Pages footer (5.16 + 5.17 FAIL). Page ends with one inline link.
2. 4 required frontmatter fields missing (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`); legacy `status: current` present.
3. Page size 3.6 KB — below ≥5 KB substantive threshold (4.12). Production guide undersized; misses 6 critical topics (registry, logging, autoscaling, restart, security, pricing).
4. Hedging in value claims at lines 34 and 76 ("may fail", "may produce") — direct assertion required.
5. Multiple unsourced operational claims (SIGTERM default, maxSessions, metric names) — no go-livepeer / Prometheus / Docker links anywhere.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `<Columns cols={2}>` Related Pages footer with 4 `<Card>` + `<CustomCardTitle>` before EOF: byoc-architecture, byoc-quickstart, `/v2/orchestrators/setup/operate`, `/v2/developers/guides/payments/per-second-compute` | EOF | HIGH | M | check 5.16, 5.17, 5.22 |
| 2 | Add `purpose: operate`, `complexity: advanced`, `lifecycleStage: operate`, `veracityStatus: unverified` to frontmatter | 8-22 | HIGH | S | check 1.1 |
| 3 | Remove `status: current` (line 10) | 10 | MEDIUM | S | check 5.7 |
| 4 | Convert metrics table (92-97) to `<StyledTable>` | 92-97 | HIGH | S | check 5.23 |
| 5 | Add `icon="terminal" title="load-test.sh"` to bash block (42); `icon="code" title="shutdown.py"` to python block (60) | 42, 60 | HIGH | S | check 5.20 |
| 6 | Remove divider at line 36 (between intro and first H2) | 36 | MEDIUM | S | check 5.26 |
| 7 | Rewrite hedging at lines 34 and 76: "may fail" → "fails"; "may produce" → "produces" | 34, 76 | HIGH | S | check 2.14 |
| 8 | Add §"Production readiness checklist" `<AccordionGroup>` near top with 10 items: image versioning, logging, restart policy, autoscaling, GPU profiling, SIGTERM handling, health-under-load, Prometheus metrics, price calibration, capacity planning | after line 34 | HIGH | L | brief; check 10.1 |
| 9 | Add §"Pricing calibration" with worked example (`price_per_unit` math) | new section | HIGH | M | brief; per-second-compute |
| 10 | Add §"Security boundaries" `<Warning>`: Docker socket access, image scanning, network isolation | new section | HIGH | M | check 4.15 |
| 11 | Source SIGTERM timeout at line 76; replace "default 10 seconds" with confirmed source citation (Docker default + go-livepeer override) | 76 | HIGH | S | check 6.1 |
| 12 | Source metric names (92-97): confirm whether emitted by a canonical exporter or proposed; add `{/* REVIEW: confirm metric naming */}` | 92-97 | HIGH | S | check 6.1 |
| 13 | Link `livepeer/go-livepeer` at first mention of `maxSessions` (line 52) | 52 | HIGH | S | check 6.10 |
| 14 | Define "SIGTERM" + "Prometheus" on first use (link or one-line gloss) | 58, 90 | MEDIUM | S | check 2.21 |
| 15 | Add ≥3 cross-tab graduation cards in Related Pages (covered in step 1) | EOF | HIGH | M | check 4.10, 7.6 |
| 16 | Reference brief repos: `muxionlabs/runner-router` for multi-container, `muxionlabs/byoc-sdk` for deployment helpers — under new §"Tooling" or in Related Pages | new section / EOF | MEDIUM | M | brief |
| 17 | Add Mermaid `stateDiagram` for health-check failover lifecycle (Advertised → Failing → Quarantined → Restored) | new section | MEDIUM | M | check 5.27 |
| 18 | Add Prerequisites bullet list at top: completed byoc-quickstart, Docker 24+, nvidia-smi, Prometheus scraper, working dev container | after line 34 | HIGH | S | check 4.5 |
| 19 | Expand page to ≥5 KB substantive by completing steps 1, 8, 9, 10 | full page | MEDIUM | implicit | check 4.12 |
| 20 | Rename H2 "Monitoring" → "Prometheus metrics" (scores higher on Precision) | 88 | INFO | S | check 3.1 |
