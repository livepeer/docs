# .githooks Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `.githooks/install.sh` | Installs git hooks by setting core.hooksPath to .githooks/ | `bash .githooks/install.sh [flags]` | docs |
| `.githooks/pre-commit` | Pre-commit hook orchestrator — runs structural checks, unit tests, codex validation, and docs-index freshness check before allowing commit | `bash .githooks/pre-commit [flags]` | docs |
| `.githooks/pre-commit-no-deletions` | Variant pre-commit hook that blocks file deletions (safety net for content preservation) | `bash .githooks/pre-commit-no-deletions [flags]` | docs |
| `.githooks/pre-push` | Pre-push hook — blocks push if AI stash files present, codex locks stale, or task contract invalid | `bash .githooks/pre-push [flags]` | docs |
| `.githooks/server-manager.js` | Manages Mintlify dev server lifecycle for browser tests (start/stop/health-check) | `node .githooks/server-manager.js [flags]` | docs |
| `.githooks/verify-browser.js` | Verifies browser availability for Puppeteer-based integration tests | `node .githooks/verify-browser.js [flags]` | docs |
| `.githooks/verify.sh` | Pre-commit sub-hook — verifies file-walker is available and runs structural checks on staged files | `bash .githooks/verify.sh [flags]` | docs |
{/* SCRIPT-INDEX:END */}
