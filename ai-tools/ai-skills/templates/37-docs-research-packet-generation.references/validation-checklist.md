# Validation Checklist

Run this before handing off a generated research packet.

## Packet Integrity

- Confirm `00-master-packet.md` exists.
- Confirm `packet-summary.json` exists.
- Confirm every tranche directory contains the full research artifact set.

## Scope Integrity

- Confirm scope was derived from the declared nav source, manifest, or explicit path request.
- Confirm deprecated and helper files were excluded by default.
- Confirm no file appears in more than one tranche unless the scope contract explicitly allows it.

## Count Integrity

- Confirm `03-research.md` counts match `research-summary.json`.
- Confirm `packet-summary.json` matches `00-master-packet.md`.
- Confirm propagation, contradiction, and evidence counts reconcile with raw reports.

## Run Integrity

- Confirm registry validation passed.
- Confirm adjudication-ledger validation passed.
- Confirm no adjudication entries were written during packet generation.
- Confirm blocked tranches or missing files are called out explicitly instead of hidden.
