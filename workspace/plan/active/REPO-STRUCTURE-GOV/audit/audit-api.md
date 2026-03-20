# Audit: `api/`

*Audited: 2026-03-20*

---

## Structure

```
api/
├── ai-worker.yaml           41.4 KB
├── cli-http.yaml            12.3 KB
├── gateway.openapi.yaml     37.8 KB
├── openapi.json             55.1 KB
├── openapi.yaml             41.4 KB
├── openapi.yaml.backup      40.8 KB   ← DUPLICATE
├── studio.yaml              311.4 KB
└── worker/
    └── api/
        ├── gateway.openapi.yaml
        ├── openapi.json
        └── openapi.yaml.backup
```

---

## Duplicate / Redundant Files

**`openapi.yaml` vs `openapi.yaml.backup`** — differ by ~600 bytes (41.4 KB vs 40.8 KB). The `.backup` is a manual backup artifact. Not in `.allowlist`. Safe to delete.

**`worker/api/` sub-tree** — partial mirror of root `api/`. Contains only: `gateway.openapi.yaml`, `openapi.json`, `openapi.yaml.backup`. Not clear whether this is:
- A working copy for the worker service (should be governed separately)
- A stale partial copy (should be deleted)

Git history shows `openapi.yaml` last changed in commit `9bf8281e` (initial docs-v2 import) — no recent updates. This suggests specs may be stale relative to the actual API.

---

## Mintlify / docs.json Routing

`docs.json` does **not** appear to include a dedicated API reference routing section pointing to `api/`. The `api/` directory is likely **not being used by Mintlify as a content root** — unlike `v1/` and `v2/`. This means:

- Moving `api/` would **not** break Mintlify page routing
- The specs may be consumed by a script (e.g. `openapi-sync-and-api-doc-generation` skill) rather than directly by Mintlify
- Or they may be completely disconnected from the published docs

**Action needed:** Verify whether any script or workflow actually reads from `api/` at its current path. Check `tools/scripts/` for references to `api/` path.

---

## Staleness

No recent commits to `api/`. Likely predates the v2 restructure. The OpenAPI specs here may be:
- Actively consumed by scripts (verify)
- Stale copies that are not connected to anything

---

## Summary

| Issue | Severity | Action |
|---|---|---|
| `openapi.yaml.backup` is a stale backup artifact | Low | Delete |
| `worker/api/` is an unexplained partial mirror | Medium | Investigate: active copy or stale? Delete if stale |
| No docs.json routing found — specs may be disconnected | Medium | Verify: is any script reading from `api/`? If not, document or clean up |
| All specs appear stale (last commit: initial import) | Medium | Verify if specs are consumed anywhere live; if not, consider retiring or updating |
| Root placement | Low | Keep at root until routing/consumption verified |
