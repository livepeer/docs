# Execution Loop

Run section execution from the packet, not from memory.

## Required Inputs

For each section, read:

- `00-master-packet.md`
- `01-copy-framework.md`
- `02-authoring-style.md`
- `authoring-style-findings.json`

Treat the packet as the only execution source-of-truth.

## Section Order

- Follow tracker order exactly unless the user explicitly reprioritizes the tranche.
- Do not jump by severity, convenience, or file similarity.
- If a section spans more than one directory but is one nav section in the tracker, execute it as one section.

## Per-Section Loop

1. Confirm the page list for the current section.
2. Execute all `[copy-framework]` tasks in page order.
3. Execute all `[authoring-style]` tasks in page order.
4. Rerun targeted section checks.
5. Apply tracker updates only after the reruns pass.
6. Run the final hook gate.
7. Close the section and move to the next one.

## Raw JSON Carry-Forward

If `02-authoring-style.md` under-reports the raw findings:

- use `authoring-style-findings.json` as equal source-of-truth
- deduplicate repeated warnings into one page-level action family
- do not silently drop metadata, MDX, or code-block issues just because the summary was thin
