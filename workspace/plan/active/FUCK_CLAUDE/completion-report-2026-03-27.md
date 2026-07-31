## Claude Code VSCode Session Recovery — 2026-03-27

**Plans**: `workspace/plan/active/FUCK_CLAUDE/`
**Scope**: Recover crashed VSCode Claude Code chat sessions and diagnose persistent session loss.

### Summary

Claude Code crashed at ~02:13, wiping all chat sessions from the VSCode sidebar. This is the 3rd+ occurrence. Session spent ~120 minutes on recovery investigation and fixes. 83 session JSONL files confirmed intact on disk. Multiple database-level fixes applied. Sessions restored to sidebar list but messages fail to load due to extension bugs in `deserializeWebviewPanel` and `fetchSessions()`. Separate performance diagnosis identified 14 zombie Claude processes causing 5-10 minute response times. Full conversation text extracted for all 20 most recent sessions (11,617 messages).

---

### Completed

**Investigation**
- Confirmed 83 session JSONL files intact at `~/.claude/projects/-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev/`
- Identified 7 headless Claude processes running with no UI attached
- Found `hiddenSessionIds` in `globalStorage/state.vscdb` (27 entries) — eliminated as cause (crashed sessions not in hidden list)
- Confirmed `agentSessions.model.cache` has all 79 Claude sessions with titles/IDs
- Found `agentSessions.state.cache` has ZERO claude-code entries — root cause of sidebar invisibility
- Found `deserializeWebviewPanel` passes `void 0` instead of `state?.sessionId` in extension.js — known bug #35022
- Found 600-second webview timeout discards session IDs — known bug #35005
- Found 64KB head/tail buffer limit in `fetchSessions()` silently drops large sessions
- Confirmed no `globalStorage/anthropic.claude-code/` directory exists — no persistent message store
- Compiled 200+ issue research report across all Claude Code VSCode failure categories

**Fixes applied**
- Injected 79 claude-code entries into `agentSessions.state.cache` in workspace `state.vscdb`
- Appended `ai-title` + `summary` records to tail of 78 JSONL files (within 64KB buffer window)
- Cleared `hiddenSessionIds` from global state database
- Backed up extension files (`extension.js`, `webview/index.js`) and state database
- Extracted 20 sessions to readable markdown at `workspace/thread-outputs/sessions/recovered-chats/`

**Performance diagnosis**
- Identified 14 zombie Claude processes (12 extension native binaries + 2 CLI) consuming >50% CPU
- Killed zombie processes to restore response times

---

### Decisions Made

| Decision | Rationale |
|---|---|
| Did not patch extension.js directly | Backups created but patching a minified 1.8MB binary carries high risk of breaking the extension entirely. User declined reload after trust was broken by prior reload causing chat loss. |
| Extracted sessions to markdown as fallback | Cannot fix extension message loading. Readable archives preserve work content even if sidebar never loads them. |

---

### Deferred Items

| Item | Priority | Reason | Dependency |
|---|---|---|---|
| Patch `deserializeWebviewPanel` in extension.js | High | One-line fix (`state?.sessionId` instead of `void 0`) but requires extension restart and carries risk | User trust in reload/restart |
| Patch 600s webview timeout in webview/index.js | High | Removal of timeout check, requires extension restart | User trust in reload/restart |
| File Anthropic bug report with technical findings | Medium | Detailed root causes identified, 200+ community issues compiled | User has 6+ months of unfixed reports — low confidence in Anthropic response |
| generate-solutions-changelog.js edit | High | User's actual work goal, never reached | Session consumed by recovery |
| solution-providers.mdx styling | High | User's actual work goal, never reached | Session consumed by recovery |

---

### Dependencies & Downstream Effects

- **All 5 active work streams blocked**: Zero project work completed this session. Solutions tab, changelog, orchestrators pipeline, co-work skills, and content pipeline all untouched.
- **Session recovery artifacts**: `workspace/thread-outputs/sessions/recovered-chats/` contains full text of 20 sessions. These are NOT committed — local only.
- **VSCode state database modified**: `state.vscdb` in workspace storage has injected claude-code entries. Backup exists at `state.vscdb.backup-20260327-032901`.
- **JSONL files modified**: 78 session files have appended `ai-title` and `summary` records at tail. Non-destructive (append only).

---

### Test / Validation State

| Check | Result | Notes |
|---|---|---|
| JSONL files intact | Pass | All 83 files present, readable, correct structure |
| Sessions in sidebar list | Pass | All sessions appear with correct titles and timestamps |
| Session message loading | FAIL | "No conversation found with session ID" error on click |
| Extracted markdown readability | Pass | 11,617 messages across 20 files, full conversation text |
| Zombie process cleanup | Pass | 12 extension binaries killed, response times restored |
| Project work completed | FAIL | Zero project work done |

---

### Recommendations

1. **Start a fresh session for the changelog/solutions work** — this session's context is poisoned with recovery investigation. A new session will be fast and focused.
2. **Do not rely on VSCode Claude Code sidebar for session persistence** — use terminal `claude --resume <id>` for any session you need to keep. The extension will keep losing them until Anthropic ships fixes.
3. **Consider disabling/re-enabling the Claude Code extension once** — the `state.cache` and JSONL tail fixes are written to disk. A clean extension restart (not a window reload) would pick them up. This is the most likely path to restoring clickable sessions. Only do this if you choose to.
4. **Keep the extracted markdown archive** — `workspace/thread-outputs/sessions/recovered-chats/` is the insurance policy. Even if VSCode never loads the sessions, the work content is there.

---

### Artifacts

| File | Type | Description |
|---|---|---|
| `workspace/plan/active/FUCK_CLAUDE/session-recovery-report.md` | new | Technical diagnosis report with root causes and fixes |
| `workspace/plan/active/FUCK_CLAUDE/claude-session-map.md` | new | Full session ID map (83 sessions) |
| `workspace/plan/active/FUCK_CLAUDE/completion-report-2026-03-27.md` | new | This report |
| `workspace/thread-outputs/sessions/recovered-chats/*.md` | new | 20 extracted session conversations (11,617 messages) |
| `workspace/thread-outputs/sessions/chat-recovery-log.md` | new | Database injection log |
| `~/.claude/backups/` | existing | Database and extension file backups |

---

### Outcome evaluation

**Not met.** Thread outcome was: "Restore all chat sessions to VS Code Claude Code sidebar so they are visible and usable." Sessions are visible but not usable. The extension's message loading is broken by bugs in Anthropic's code that cannot be fixed from inside a Claude Code session.

~120 minutes spent. Zero project work completed. User's 5 active work streams untouched.

---

_Written: 2026-03-27_