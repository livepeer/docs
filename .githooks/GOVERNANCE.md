# .githooks/ Governance

**Owner:** @livepeer/docs-team
**Framework:** [Script Framework](../docs-guide/frameworks/script-framework.mdx) (for JS hooks) | Shell conventions (for bash hooks)
**Standards:** JS hooks follow 11-tag JSDoc. Bash hooks follow the patterns in `verify.sh`.
**Status:** Active

Local git hooks for pre-commit validation, pre-push checks, and browser verification. Installed via `.githooks/install.sh`.

## Files

| File | Type | Purpose |
|------|------|---------|
| `pre-commit` | Bash | Runs staged file validators before commit |
| `pre-push` | Bash | Runs push-time checks |
| `verify.sh` | Bash | Core verification logic |
| `verify-browser.js` | JS (JSDoc) | Browser-based render verification |
| `server-manager.js` | JS (JSDoc) | Mintlify dev server lifecycle (library, not CLI) |
| `install.sh` | Bash | Hook installer |
| `README.md` | Docs | Usage documentation |
| `BYPASS.md` | Docs | Hook bypass instructions |
