# Audit: `contribute/`

*Audited: 2026-03-20*

---

## Structure

```
contribute/
├── CONTRIBUTING.mdx         11.3 KB — main entry point (MDX for docs rendering)
└── CONTRIBUTING/
    ├── README.md            2.7 KB
    ├── GIT-HOOKS.md         1.2 KB
    └── AGENT-INSTRUCTIONS.md  7.6 KB
```

**Total: 4 files, ~23 KB**

---

## Contents

**CONTRIBUTING.mdx** (11.3 KB) — Primary entry point. MDX format for Mintlify rendering. Covers contribution workflow, standards, and process.

**CONTRIBUTING/README.md** (2.7 KB) — Traditional GitHub-style README for contributors. Mirrors CONTRIBUTING.mdx but in plain Markdown.

**CONTRIBUTING/GIT-HOOKS.md** (1.2 KB) — Git hooks documentation. Referenced directly by `docs-guide/policies/root-allowlist-governance.mdx` as a dependency path (`contribute/CONTRIBUTING/GIT-HOOKS.md`).

**CONTRIBUTING/AGENT-INSTRUCTIONS.md** (7.6 KB) — Comprehensive AI agent onboarding. Substantial; actively maintained.

---

## Issues

**Structural redundancy:** `CONTRIBUTING.mdx` (MDX, rendered in docs) and `CONTRIBUTING/README.md` (plain Markdown, for GitHub) cover overlapping ground. This is intentional dual-format but requires keeping both in sync.

**Pre-commit hook dependency:** `contribute/CONTRIBUTING/GIT-HOOKS.md` is referenced by path in at least one governance policy. If `contribute/` is moved to `docs-guide/contributing/`, this path must be updated in:
- `docs-guide/policies/root-allowlist-governance.mdx` (confirmed reference)
- Pre-commit hook itself (likely referenced)
- `AGENTS.md` required context section (#3: `contribute/**`)
- `README.md`

---

## Scratch / Stale Files

None found. No `notes.txt`, no scratch files. Clean.

---

## Move Assessment

`contribute/` is a **confirmed move candidate** per `root-allowlist-governance.mdx`. Proposed destination: `docs-guide/contributing/`.

**Before moving, must update:**
1. `AGENTS.md` — required context #3 (`contribute/**` → `docs-guide/contributing/**`)
2. `docs-guide/policies/root-allowlist-governance.mdx` — path reference
3. Pre-commit hook — any hardcoded `contribute/` paths
4. `README.md` — contributor links
5. `.allowlist` — remove `contribute`, no new entry needed (goes under `docs-guide`)

**Risk:** Low. No Mintlify routing depends on `contribute/` being at root (it's not a content directory like v1/v2).

---

## Summary

| Issue | Severity | Action |
|---|---|---|
| Clean, no stale files | — | No cleanup needed |
| Move candidate to `docs-guide/contributing/` | Low risk | Do after SCRIPT-GOVERNANCE completes; dependency map above is complete |
| CONTRIBUTING.mdx + CONTRIBUTING/README.md can drift | Low | Keep as-is (dual format is intentional); add note to update both |
