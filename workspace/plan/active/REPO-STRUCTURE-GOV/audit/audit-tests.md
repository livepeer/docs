# Audit: `tests/`

*Audited: 2026-03-20*

---

## Structure

```
tests/
├── unit/                        62 test files (.test.js)
├── integration/                 8 integration test scripts
├── config/                      test configuration
├── fixtures/
│   └── mdx-safe-markdown/       MDX fixtures
├── copy-lint-fixtures/          copy linting test fixtures
├── reports/                     test output reports (lifecycle unclear)
├── utils/                       test utilities
├── package.json                 own dependency manifest
├── package-lock.json
├── README.md                    17 KB — comprehensive
├── README.mdx                   EMPTY
├── WHEN-TESTS-RUN.md            8.8 KB
├── PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md  21.6 KB
├── run-all.js                   test orchestrator
├── run-pr-checks.js             PR-specific runner
└── script-index.md              test index
```

---

## Test Coverage

**Unit tests (62 files):** Cover ai-tools-registry, authoring-tools, codex-*, component-*, copy-lint, docs-*, mdx, style-guide, etc.

**Integration tests (8 files):** browser, domain-pages-audit, mdx-component-runtime-smoke, openapi-reference-audit, v2-link-audit, v2-wcag-audit, selftest variants.

---

## Invocation

- Pre-commit hooks: `lpd test --staged`
- CI: `run-pr-checks.js` (GitHub Actions)
- Manual: `npm test` → `run-all.js`
- CLI: `lpd test`

`tests/` has its own `package.json` + `node_modules`. It is an independent package, not a subfolder of tools.

---

## Issues

**`README.mdx` is empty** — likely a generated placeholder stub. The real documentation is `README.md` (17 KB, comprehensive). The `.mdx` file is dead weight.

**`reports/` has no defined lifecycle** — test output reports accumulate here with no stated TTL or cleanup policy. Unlike `tasks/reports/` (which has a retention workflow), `tests/reports/` has no governance.

---

## Move Assessment

`tests/` was identified as a move candidate to `tools/` in the REPO-STRUCTURE-GOV research. However:
- Has its own `package.json` and `node_modules`
- Hardcoded in `lpd`, pre-commit hook, and CI configurations
- SCRIPT-GOVERNANCE deferred the `/tools` folder restructure — `tests/` move should be evaluated at the same time

**Keep at root for now.**

---

## Summary

| Issue | Severity | Action |
|---|---|---|
| `README.mdx` is empty | Low | Delete |
| `tests/reports/` has no retention policy | Medium | Add cleanup policy (mirror tasks/reports TTL) |
| `tests/` is a move candidate | Low risk — defer | Evaluate move to `tools/tests/` after SCRIPT-GOVERNANCE completes |
