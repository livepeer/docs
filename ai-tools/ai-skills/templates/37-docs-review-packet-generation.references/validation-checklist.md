# Validation Checklist

Run this before handing off a generated packet.

## Packet Integrity

- Confirm the packet root path is correct for the requested scope.
- Confirm `00-master-packet.md` and `packet-summary.json` exist.
- Confirm every nav section in scope has a directory.
- Confirm every section directory contains all required phase summaries and raw artifacts.

## Scope Integrity

- Confirm section order matches the nav source exactly.
- Confirm page membership matches the live nav pages only.
- Confirm helper, deprecated, and review-only files were excluded.

## Tracker Integrity

- Confirm every live page has exactly one `[copy-framework]` bullet.
- Confirm every live page has exactly one `[authoring-style]` bullet.
- Confirm pages with no style findings still have an explicit style line.
- Confirm no per-page research bullets appear.

## Count Integrity

- Confirm tracker counts reconcile with the raw findings.
- Confirm `packet-summary.json` matches the tracker for:
  - section names
  - section order
  - page membership
  - copy-framework counts
  - authoring-style counts
  - research counts

## Run Integrity

- Confirm no content page files were modified.
- Confirm skipped scripts or partial runs are called out explicitly.
- Confirm unresolved nav mismatches, stale raw outputs, or missing artifacts are documented instead of hidden.
