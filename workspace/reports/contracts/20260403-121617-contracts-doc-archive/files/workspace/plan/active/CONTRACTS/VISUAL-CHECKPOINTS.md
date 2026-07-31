# Contracts Visual Checkpoints

This file contains the authority-backed visual and copy assertions used for non-regression proof. Anything not proven by authority is excluded here and remains `blocked-unverifiable`.

## Contracts Page

### Required proof points

- top verification/trust section
- active contracts table
- proxy contracts table
- historical contracts section

### Required assertions

- The contracts route preserves the authority-backed top trust/verifier area and the `"How this widget works"` expandable from `CPT-004` and `CPT-005`.
- The main searchable contracts surface shows active contracts only per `CPT-009`, `PIPE-010`, and `PIPE-011`.
- The active contracts table satisfies the measurable `COM-017` conditions:
  - the chain column is wide enough for `Arbitrum One` to render without clipping, wrap, or ellipsis at the recovery desktop viewport
  - the type column is visually narrower than the chain and address columns
  - there is no horizontal overflow
- The proxy contracts table satisfies the measurable `COM-005` and `COM-018` conditions:
  - the chain column is wide enough for `Arbitrum One` to render without clipping, wrap, or ellipsis at the recovery desktop viewport
  - the `type` badge columns remain visually balanced and narrower than the chain/address columns
  - paired proxy/target badge columns remain equal width
  - there is no horizontal overflow
- The approved visual affordances from `CPT-008` and `CHATI-006` are present on the live contracts surface:
  - arrow-up-right explorer affordances
  - clickable addresses
  - grey deprecated status treatment where authority-backed
  - type badges
  - chain icons
- Historical contracts satisfy `COM-010`, `COM-019`, and `CHATI-005`:
  - latest-first version ordering
  - current contracts excluded from historical tables
  - historical sections split by chain
- Tip, widget explanation, and workflow verification surfaces are reviewed for factual accuracy per `COM-020`, `COM-021`, and `COM-022`; any exact literals not proven from authority remain excluded from this file.

### Explicitly banned assertions

- any guessed exact percentage widths from current regressed files
- any claim that a contracts-page literal is approved only because it survives in the current file

## Blockchain Page

### Required proof points

- top section and ToC/section entry state
- migration section

### Required assertions

- The blockchain route preserves the required section order `Core -> Token -> Governance -> Migration` per `BCP-003`.
- The page is validated against the same fresh bundle as the contracts route.
- `LivepeerTokenFaucet` uses the exact authority-backed sentence `Local development utility contract.` per `COM-002`, `BCP-007`, and `PIPE-016`.
- User-facing `weak` is absent per `BCP-008`, `PIPE-019`, and `REC-009`.
- Stale hardcoded activity/status claims are absent per `BCP-009`, `PIPE-018`, and `REC-009`.
- `L2Migrator` reflects corrected proxy/target handling per `BCP-010` and `PIPE-017`.

### Explicitly banned assertions

- any hardcoded claim such as recent activity, transaction count, or stale last-active text unless backed by current generated truth
- any guessed exact fact line not proven from authority
