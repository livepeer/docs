# Operator Considerations Review Notes

Status:

- non-canonical review artifact
- sanitized on `2026-03-16` after pre-commit MDX parsing failures
- captures rewrite notes for `operator-rationale`, `business-case`, and `protocol-influence`

## Journey Analysis

**Section coherence**
The three pages form a clean decision arc within `Guides > Operator Considerations`: financial evaluation, commercial model, and mission or stewardship. Each page is self-contained but links forward and back cleanly. An operator who only cares about finances reads one page; an operator evaluating full commercial operation reads two; an operator evaluating long-term strategic participation reads all three.

**Persona coverage**

- Persona A: `operator-rationale` covers the decision matrix, cost breakdown, and decision flowchart.
- Persona B: `operator-rationale` routes lower-commitment operators toward `join-a-pool`.
- Persona C: `operator-rationale` plus `business-case` cover the transition from inflation-first thinking to fee-driven commercial operation.
- Persona D: all three pages support a full commercial and strategic evaluation.
- Persona E: `operator-rationale` plus `business-case` cover the video-versus-AI decision and capability selection concerns.

**Gaps addressed**

- `operator-rationale` opened with self-referential copy and was rewritten as entity-led narrative.
- `business-case` had only a literal ``<Note>This page is a stub>`` placeholder and was rewritten from scratch.
- `protocol-influence` was a stub and was expanded with governance mechanics.
- A visual decision aid was added to `operator-rationale`.
- Community and forum links were added across all three pages.

## Operator Rationale Fixes

| Issue | Fix |
| --- | --- |
| Boilerplate opening | Rewritten as entity-led narrative. |
| Weak accordion icons | Replaced with more specific icons such as `microchip`, `coins`, `link`, `wifi`, `bolt`, and `clock`. |
| Missing support imports | Added `LinkArrow`, `ScrollableDiagram`, and `BorderedBox` where needed. |
| Divider and table cleanup | Labeled `CustomDivider` usage and fixed `StyledTable` markup that previously lacked ``<thead>/<tbody>`` structure. |
| Card and heading cleanup | Added missing horizontal arrows and renamed `Continue` to `Related Pages`. |
| Stale paths | Updated links such as `setup-navigator` and `feasibility-and-hardware/hardware-reference` to their current destinations. |
| Premature publish state | Changed `status: published` to `current`. |
| Missing decision aid | Added a Mermaid flowchart to visualize the path matrix. |

## Business Case Additions

- hobbyist versus commercial comparison diagram
- service-fee versus inflation scaling explanation
- `-pricePerGateway` example coverage
- commercial operations requirements for uptime, warm-model management, latency, and monitoring
- accordion coverage for capability selection, pricing discipline, infrastructure investment, and monitoring
- explicit review placeholders where commercial-operator names still need verification

## Protocol Influence Additions

- governance mechanics summary covering quorum, vote threshold, poll creation cost, poll timing, and delegator override
- governance-scope table covering the major categories of protocol decisions
- a "stake as governance capital" framing with the supporting diagram
- sovereign-compute framing across independent media, AI researchers, platform lock-in, and developer-ecosystem concerns
- practical governance participation guidance beyond simply voting
- SPE governance linkage and review placeholders for values that still need periodic verification
