# Hook-to-Layer Enforcement Mapping

> Generated 2026-04-08. Maps every hook in the repo to its governance enforcement layer.
> Source: `.claude/settings.json` (Claude hooks), `.githooks/` (git hooks)

---

## Layer 1: Write Time — Claude Code Hooks

Budget: <1s per hook. Fires during agent editing sessions.

### SessionStart (5 hooks)

| Hook | Script | What it enforces |
|---|---|---|
| Zombie cleanup | Inline shell | Kills stale Chromium, Puppeteer, MCP zombies, agent dev servers |
| Session state injection | `operations/scripts/dispatch/governance/session-state.js` | Injects project state, plan status, content pipeline gates into context |
| Session register | `operations/scripts/dispatch/governance/session-register.js` | Detects parallel sessions, prevents conflict |
| Session rules | Inline shell | Writes session start to log, injects CLAUDE.md rules reminder |
| Server lifecycle | `operations/scripts/dispatch/governance/server-lifecycle.js` | Starts Mintlify render verification server (scoped) |

### UserPromptSubmit (4 hooks)

| Hook | Script | What it enforces |
|---|---|---|
| Chrome reaper | Inline shell | Kills orphan Puppeteer Chrome if >15 processes |
| Message backup | `operations/scripts/dispatch/governance/message-backup.js` | Backs up user messages (async, loss prevention) |
| MDX constraints injector | `operations/scripts/dispatch/governance/mdx-constraints-injector.js` | Injects Mintlify constraints when MDX files are in context |
| Friction logger | `operations/scripts/dispatch/governance/friction-logger.js` | Logs friction events for process improvement (async) |

### PreToolUse (4 matchers, 4 hooks)

| Matcher | Script | What it enforces |
|---|---|---|
| Bash | `pre-tool-guard.js` | Blocks destructive commands (rm, git rm), enforces D2 no-deletions policy, blocks execution agents without approval, blocks public service posts |
| Write\|Edit | `mdx-render-gate.js` | Blocks writes to files with failing render verification |
| Write\|Edit | `pre-tool-guard.js` | Blocks writes to auto-generated files, enforces edit-loop limits |
| Write\|Edit | `completion-gate.js` | Blocks writes to completion artifacts while render verification failing |
| Agent | `pre-tool-guard.js` | Blocks execution agents without explicit approval (research/audit pre-approved) |

### PostToolUse (8 matchers, 8 hooks)

| Matcher | Script | What it enforces |
|---|---|---|
| Read | `read-logger.js` | Logs file reads for audit trail (async) |
| Grep | `grep-loop-guard.js` | Detects and breaks grep search loops |
| Edit\|Write | `mdx-frontmatter-sanitise.js` | Validates frontmatter integrity after edits |
| Edit\|Write | `mdx-render-verify.js` | Runs Mintlify render check on edited MDX files |
| Edit\|Write | `blast-radius-scanner.js` | Scans for downstream consumers of edited files |
| Edit\|Write | `phase-gate-hook.js` | Enforces phase checkpoints (content pipeline gates) |
| Edit\|Write | `session-register.js` | Updates session state after edits (async) |
| Edit\|Write | `edit-loop-guard.js` | Triggers hypothesis gate at 3 edits, hard block at 5 edits |
| Edit\|Write | `scope-checkpoint.js` | Every 8th edit requires reconnection to thread outcome |
| Bash | `move-detect-hook.js` | Detects file moves, triggers reference propagation scan |

### PostToolUseFailure (1 hook)

| Script | What it enforces |
|---|---|
| `post-tool-verify.js` | Tracks consecutive failures, triggers circuit breaker at 3 |

### PreCompact (1 hook)

| Script | What it enforces |
|---|---|
| `pre-compact-checkpoint.js` | Writes mid-session checkpoint before context compression |

### SessionEnd (1 hook)

| Script | What it enforces |
|---|---|
| Inline shell | Kills Puppeteer/Chrome and sweep processes on session end |

**All Claude hook scripts live in:** `operations/scripts/dispatch/governance/`

---

## Layer 2: Commit Time — Git Hooks

Budget: <5s. Fires on `git commit` and `git push`.

### pre-commit (5 hard gates)

| Gate | What it enforces | Human override |
|---|---|---|
| Codex branch isolation | Blocks Codex sessions from committing to docs-v2 | `--trailer "allow-main-commit=true"` |
| File deletion guard | Blocks all file deletions (D2 no-deletions policy) | `--trailer "allow-deletions=true"` |
| .allowlist protection | Blocks changes to root allowlist file | `--trailer "allowlist-edit=true"` |
| docs.json redirect integrity | Validates redirect surface consistency with scoped nav config | None (fix the conflict) |
| Root directory structure | Blocks unauthorized root files/dirs against .allowlist | `SKIP_STRUCTURE_CHECK=1` |
| v1/ freeze | Blocks all changes to v1/ (immutable) | None |

Additional Codex-specific gates (on codex/* branches):
- Task contract validation (`validate-codex-task-contract.js`)
- Local lock ownership (`validate-locks.js`)
- AI stash policy (`check-no-ai-stash.sh`)

### pre-push (3 gates)

| Gate | What it enforces | Human override |
|---|---|---|
| Codex docs-v2 push block | Blocks Codex sessions from pushing to docs-v2 | `ALLOW_MAIN_PUSH=1` |
| Task contract validation | Validates codex task contract before push | None |
| Non-fast-forward block | Blocks force push on codex/* branches | `ALLOW_CODEX_FORCE_PUSH=1` |

### Other git hooks

| File | Status |
|---|---|
| `post-commit.disabled` | Disabled |
| `pre-commit-no-deletions` | Alternative variant (not active) |
| `verify.sh` | Hook verification utility |
| `verify-browser.js` | Browser verification tool |
| `server-manager.js` | Library (not a hook) |
| `install.sh` | Hook installer |

---

## Layers 3–6: CI Enforcement (GitHub Actions)

Detailed workflow mapping exists in `.github/workspace/outcomes.md` (5 Mermaid diagrams). Summary:

| Layer | Pipeline tag | Trigger | Count | Response |
|---|---|---|---|---|
| 3: PR Validators | P2 (hard gate) | pull_request | 2 | Block merge |
| 3: PR Validators | P3 (advisory) | pull_request | 11 | Warning annotation |
| 4: Post-Merge | P4 (auto-commit) | push to deploy branch | 7 | Auto-commit generated files |
| 5: Scheduled Scans | P5 (read-only) | cron | 5 | Rolling issue (create/update/close) |
| 5: Scheduled Integrators | P5-auto (read-write) | cron | 12 | Auto-commit data updates |
| 6: Self-Heal | P6 | weekly cron | 1 | Auto-fix PR |
| Event-driven | Interfaces | issues/repository_dispatch | 5 | Label/assign/index/intake |

---

## Decision Cross-Reference

| Hook/Gate | Implements decision |
|---|---|
| Pre-tool-guard deletion block | D2 (no-deletions policy), D-GOV-02 (archive, never delete) |
| Pre-tool-guard auto-gen block | D-ACT-08 (workflows are dispatchers, scripts carry type) |
| Pre-tool-guard agent approval | CLAUDE.md (execution agents require explicit approval) |
| Pre-commit deletion guard | D2, D-GOV-02 |
| Pre-commit Codex isolation | D-GOV-05 (branch isolation for AI agents) |
| Pre-commit allowlist protection | D-GOV-01 (root structure locked) |
| Pre-commit docs.json redirect integrity | D-GOV-04 (tooling makes correct the default) |
| Pre-commit v1/ freeze | D-GOV-01 (v1 immutable) |
| Pre-push Codex push block | D-GOV-05 |
| Edit-loop-guard | CLAUDE.md (3-edit hypothesis gate, 5-edit hard block) |
| Scope-checkpoint | CLAUDE.md (every 8th edit reconnects to thread outcome) |
| MDX-render-verify | CLAUDE.md (verify renders before declaring done) |
| Completion-gate | CLAUDE.md (no completion artifacts while render failing) |
| P2 hard gates (CI) | D-ACT-02 (P2 blocks merge) |
| P3 advisory (CI) | D-ACT-02 (P3 advisory only) |
| P4 generators (CI) | D-ACT-03 (post-merge auto-commit) |
| P5 scanners (CI) | D-GOV-03 (every detection must self-repair or escalate) |
| P6 self-heal (CI) | D-GOV-03 |
