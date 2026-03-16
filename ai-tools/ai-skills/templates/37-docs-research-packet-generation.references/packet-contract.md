# Packet Contract

Use this contract whenever the research packet generator writes a packet root.

## Root Files

Every packet root must contain:

- `00-master-packet.md`
- `packet-summary.json`

## Per-Tranche Files

Every tranche directory must contain:

- `03-research.md`
- `research-pages.md`
- `research-pages.json`
- `research-pr.md`
- `research-pr.json`
- `research-summary.json`

## Report Requirements

- `03-research.md` must summarize counts, findings, registry/path drift, and page-vs-PR deltas.
- `research-summary.json` must wrap registry validation, adjudication validation, page-run status, PR-run status, and the raw page/PR report payloads.
- `packet-summary.json` must match `00-master-packet.md` for tranche order, page membership, run status, and count families.

## Output Quality Bar

- Count families must reconcile back to raw packet artifacts.
- Tranche order must stay stable and source-of-truth aligned.
- Page-run and PR-run disagreements must stay explicit instead of being collapsed into one verdict.
