# VS Code Claude Code Extension — Canonical Diagnostic

> **Single source of truth.** Supersedes all prior investigation files in this directory.
> Read this before touching anything. Every future session starts here.
>
> Last verified: 2026-03-29
> Extension version at time of writing: v2.1.86 (active), v2.1.84 (patched, dead)

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                VS Code Chat Sidebar                          │
│  Renders sessions in agentSessions.model.cache array order   │
└──────────────┬──────────────────────────┬────────────────────┘
               │                          │
    ┌──────────▼──────────────┐  ┌───────▼─────────────────┐
    │  agentSessions          │  │  agentSessions          │
    │  .model.cache           │  │  .state.cache            │
    │  (172 entries as of     │  │  (104 entries as of      │
    │   2026-03-29)           │  │   2026-03-29)            │
    │                         │  │                          │
    │  Fields:                │  │  Fields:                 │
    │  - label (sidebar title)│  │  - read (timestamp)      │
    │  - timing.created       │  │  - archived (bool)       │
    │  - timing.lastReqEnded  │  │  - resource (URI)        │
    │  - resource (URI)       │  │                          │
    │  - badge, status        │  │                          │
    │  - providerType         │  │                          │
    │  - metadata.cwd         │  │                          │
    └──────────┬──────────────┘  └───────┬──────────────────┘
               │                          │
               │    Both stored in:       │
               └────────────┬─────────────┘
                            │
                ┌───────────▼────────────────────────┐
                │  state.vscdb (SQLite)               │
                │  ItemTable: key TEXT, value BLOB     │
                │                                     │
                │  Location (workspace-specific):      │
                │  ~/Library/Application Support/      │
                │  Code/User/workspaceStorage/         │
                │  037ec7ad.../state.vscdb             │
                └───────────┬────────────────────────┘
                            │
           ┌────────────────┼─────────────────┐
           │                │                  │
  ┌────────▼─────────┐ ┌───▼──────────┐ ┌────▼──────────────┐
  │ claude-code:/     │ │ vscode-chat  │ │ openai-codex://    │
  │ 93 sessions       │ │ 24 sessions  │ │ 1 session          │
  │                   │ │              │ │                    │
  │ Stored at:        │ │ Stored at:   │ │                    │
  │ ~/.claude/        │ │ chatSessions/│ │                    │
  │ projects/...      │ │ *.jsonl|json │ │                    │
  │ /*.jsonl          │ │              │ │                    │
  └───────────────────┘ └──────────────┘ └────────────────────┘
```

### Three session providers

| Provider | URI scheme | Count | Storage |
|---|---|---|---|
| Claude Code | `claude-code:/UUID` | 93 | `~/.claude/projects/{workspace-hash}/*.jsonl` |
| Copilot Chat | `vscode-chat-session://local/BASE64` | 24 | `chatSessions/*.jsonl\|json` in workspace storage |
| OpenAI Codex | `openai-codex://route/local/UUID` | 1 | Unknown |

### Session counts (verified 2026-03-29)

| Location | Count | Size |
|---|---|---|
| `~/.claude/projects/-...-Docs-v2-dev/*.jsonl` | 94 | 1.2 GB |
| `~/.claude/projects/-...-observer-sessions/*.jsonl` | 336 | 364 MB |
| `~/.claude/projects/` (all projects total) | 560 | 2.9 GB |
| `chatSessions/` (Copilot panel, primary workspace) | 33 | 342 MB |
| `model.cache` entries (total / Claude Code) | 172 / 93 | — |
| `state.cache` entries (total / Claude Code) | 104 / 79 | — |

### Key state database keys

| Key | What | Size |
|---|---|---|
| `agentSessions.model.cache` | Session metadata array (labels, timing, resources) — **controls sidebar** | Large |
| `agentSessions.state.cache` | Read timestamps and archived flags | Medium |
| `chat.ChatSessionStore.index` | Copilot Chat session metadata (31 entries) | Medium |
| `agentSessions.readDateBaseline2` | Baseline timestamp for read status | Small |

### JSONL file structure (Claude Code sessions)

Session files are append-only JSONL. Key entry types:
```
{"type": "queue-operation", "operation": "enqueue", "timestamp": "...", "sessionId": "..."}
{"type": "user", ...}           — user messages
{"type": "text", ...}           — assistant responses
{"type": "custom-title", "customTitle": "...", "sessionId": "..."}  — user-set title
{"type": "ai-title", "aiTitle": "...", "sessionId": "..."}         — auto-generated title
{"type": "summary", "title": "...", "summary": "..."}              — session summary
{"type": "last-prompt", ...}    — last user prompt
{"type": "file-history-snapshot", ...}  — file state snapshot
```

**Title resolution priority:** custom-title > ai-title > UUID fallback

---

## 12 Confirmed Root Causes

### Critical severity

| # | Cause | Detail | Evidence | GitHub issues |
|---|---|---|---|---|
| 1 | `sessions-index.json` not written | Extension stopped writing session index around v2.1.31. Without it, session discovery relies on filesystem scan. | Verified: no sessions-index.json exists for this project | #26123, #24729, #18619, #29331 |
| 2 | 64KB head/tail buffer truncation | `fetchSessions()` reads only first/last 64KB of each JSONL. Sessions >128KB have title data outside this window and are silently dropped. | Verified: pU=65536 in v2.1.84 extension.js. Sessions up to 57MB exist. | #35085 |
| 5 | CLI deletes session files on update | Auto-updates delete JSONL files. Irrecoverable data loss. | GitHub issue #36272 (labelled `data-loss`) | #36272 |
| 9 | `deserializeWebviewPanel` passes void 0 | When restoring tabs after crash, session ID is lost. Panel shows blank. | Verified in extension.js: passes `void 0` instead of `state?.sessionId` | #35022 |
| 11 | `state.cache` wiped to [] on crash | After VS Code crash, `agentSessions.state.cache` contains zero claude-code entries. Extension can list but not load sessions. | Verified 2026-03-27: state.cache was empty after crash | Recovery report |

### High severity

| # | Cause | Detail | Evidence | GitHub issues |
|---|---|---|---|---|
| 3 | Cross-project cache contamination | Cache is global, not per-project. Opening a different workspace can contaminate session list. | GitHub reports | #22215 |
| 6 | No sort in broadcastSessionStates() | Sessions broadcast as `Array.from(this.sessionStates.values())` — Map insertion order, not chronological. Depends on filesystem read order. | Verified in extension.js: no sort before broadcast | This session |
| 7 | hiddenSessionIds in-memory overwrite | Extension loads hidden list into memory on startup. External DB changes are overwritten when extension writes back. | Verified: `let H=new Set(this.settings.getHiddenSessionIds())` | Diagnosis #2 |
| 10 | 600-second webview timeout | Webview discards session IDs after 600s timeout. | Found in webview/index.js | #35005 |
| 12 | Bulk timestamp stamping on load | On every load, extension batch-stamps `lastRequestEnded` on all sessions. 61 sessions stamped at `2026-03-29 09:47`. Destroys any time-based ordering. | Verified: model.cache analysis | This session |

### Medium severity

| # | Cause | Detail | Evidence |
|---|---|---|---|
| 4 | macOS file permissions | Dirs created 0700, extension may run as different user. | GitHub #12872 |
| 8 | Title resolution garbage fallback | Falls back to ai-title (garbage like `<ide_selection>The user selected lines 70-71`) or raw UUID. 3 sessions currently have UUID-only labels. | Verified: model.cache analysis |

---

## Discrepancies (verified 2026-03-29)

| Issue | Count | Detail |
|---|---|---|
| In model.cache but NOT in state.cache | 14 | Sessions visible in metadata but missing state tracking |
| On disk but NOT in model.cache | 1 | `e500d233` — file exists, completely absent from sidebar |
| Sessions with UUID-only labels | 3 | `59a30141`, `d23807e4`, `b81aad92` — no title resolved |
| model.cache vs state.cache total gap | 68 | 172 model entries vs 104 state entries |

---

## Applied Patches (historical)

### Patch 1: Buffer size increase (v2.1.84 — DEAD)
- **Date:** 2026-03-27 03:35:03
- **Target:** `~/.vscode/extensions/anthropic.claude-code-2.1.84-darwin-arm64/extension.js`
- **Change:** `var pU=65536` → `var pU=524288` (64KB → 512KB, 8x increase)
- **Backup:** `extension.js.backup-20260327-033503`
- **Status:** DEAD — v2.1.86 is now active. Patch only on v2.1.84.
- **Need:** Re-apply to v2.1.86

### Patch 2: State cache injection (v2.1.84 era)
- **Date:** 2026-03-27
- **Target:** `state.vscdb` → `agentSessions.state.cache`
- **Change:** Injected 79 claude-code entries
- **Status:** Likely overwritten by extension on subsequent loads

### Patch 3: JSONL title injection
- **Date:** 2026-03-27
- **Target:** 78 JSONL session files (appended ai-title + summary records to tail)
- **Status:** Persistent — append-only, still present in files

### Patch 4: hiddenSessionIds cleared
- **Date:** 2026-03-27
- **Target:** `globalStorage/state.vscdb` → `Anthropic.claude-code` → `hiddenSessionIds`
- **Status:** Likely overwritten by extension's in-memory copy on next reload

---

## Hackable Paths (quick reference)

### Read current state
```bash
WSID="037ec7ad625e14c50d909078ee7849d3"
STATEDB="$HOME/Library/Application Support/Code/User/workspaceStorage/$WSID/state.vscdb"
GLOBALDB="$HOME/Library/Application Support/Code/User/globalStorage/state.vscdb"
SESSIONS="$HOME/.claude/projects/-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev"

# model.cache (sidebar metadata)
sqlite3 "$STATEDB" "SELECT value FROM ItemTable WHERE key='agentSessions.model.cache';" | python3 -m json.tool

# state.cache (read timestamps, archived)
sqlite3 "$STATEDB" "SELECT value FROM ItemTable WHERE key='agentSessions.state.cache';" | python3 -m json.tool

# hiddenSessionIds
sqlite3 "$GLOBALDB" "SELECT value FROM ItemTable WHERE key='Anthropic.claude-code';" | python3 -m json.tool

# session files on disk
ls "$SESSIONS"/*.jsonl | wc -l

# extract title from a session file
grep '"custom-title"' "$SESSIONS/{UUID}.jsonl" | tail -1
```

### Modify state (close VS Code first)
```bash
# Re-sort model.cache by created date (newest first)
sqlite3 "$STATEDB" "SELECT value FROM ItemTable WHERE key='agentSessions.model.cache';" | \
  python3 -c "import sys,json; d=json.loads(sys.stdin.read()); d.sort(key=lambda e: e.get('timing',{}).get('created',0), reverse=True); print(json.dumps(d))" | \
  python3 -c "import sys; open('/tmp/mc.json','w').write(sys.stdin.read())"
# Then write back:
sqlite3 "$STATEDB" "UPDATE ItemTable SET value=readfile('/tmp/mc.json') WHERE key='agentSessions.model.cache';"

# Clear hidden session IDs
sqlite3 "$GLOBALDB" "UPDATE ItemTable SET value=json_set(value, '$.hiddenSessionIds', json('[]')) WHERE key='Anthropic.claude-code';"
```

---

## GitHub Issues (all known related)

| Issue | Title | Status | Root cause # |
|---|---|---|---|
| #9258 | History Sessions lost (original Oct 2025) | Open | Multiple |
| #12872 | Past conversations not loaded after restart (macOS) | Open | 4 |
| #18619 | sessions-index.json not written | Open | 1 |
| #22215 | Past conversations not showing despite valid index | Open | 3 |
| #24172 | CRITICAL: Conversations disappear when closing VSCode | Open, high-priority | 11 |
| #24729 | sessions-index.json not indexed since v2.1.31 | Open | 1 |
| #26123 | Consolidated: 3 root causes identified | Closed (still broken) | 1, 2, 3 |
| #28577 | Session resume loads blank (4.5MB file intact) | Open | 2, 9 |
| #29331 | sessions-index.json severely out of sync | Open | 1 |
| #29736 | Chat history lost when dragging tab to new window | Open | 11 |
| #33165 | Title eviction family (~20 bugs from same root cause) | Open | 8 |
| #35005 | 600-second webview timeout discards session IDs | Open | 10 |
| #35022 | deserializeWebviewPanel passes void 0 | Open | 9 |
| #35085 | fetchSessions() silently drops large sessions | Open | 2 |
| #36272 | CLI silently deletes session files during updates | Open, data-loss | 5 |
| #38691 | All sessions lost after Claude Desktop update | Open | 5 |
| #39136 | Session name, color, and index lost after reboot | Open | 8, 11 |

---

## Third-party extensions (researched 2026-03-29)

| Extension | What it does | Install status |
|---|---|---|
| `agsoft.claude-history-viewer` | Browse Claude session history in sidebar | **Installed** (has globalStorage) |
| `AndrePimenta.claude-code-chat` | SQLite-backed chat interface with search | Not installed |
| Claude Code and Codex Assist | Unified session browser for Claude + Codex | Not installed |

---

## Prior investigation files in this directory

| File | Date | Summary | Status |
|---|---|---|---|
| `ClaudeVSCode.log` | 03-27 | Raw extension logs (OTEL errors, diagnostics spam) | Reference |
| `claude-session-map.md` | 03-27 | Session inventory across all projects (150 observer, 83 main) | Superseded by this doc |
| `claude-vscode-error-investigation-summary.md` | 03-27 | Initial investigation — cwd hypothesis | Superseded by this doc |
| `completion-report-2026-03-27.md` | 03-27 | Session completion report — recovery partially met | Reference |
| `corrections-report.md` | 03-27 | Corrections needed in other files (count mismatches) | Applied here |
| `session-loss-diagnosis.md` | 03-27 | First diagnosis — 5 root causes, zombie processes | Superseded by this doc |
| `session-loss-diagnosis-2026-03-27.md` | 03-27 | Second diagnosis — hiddenSessionIds, listSessions code | Superseded by this doc |
| `session-recovery-report.md` | 03-27 | Recovery actions — injected state.cache, appended titles | Superseded by this doc |
| `verification-report.md` | 03-27 | Unknown (not read this session) | Check if still relevant |

---

## Community research

Full research report: `workspace/plan/active/FUCK_CLAUDE/COMMUNITY-RESEARCH-2026-03-29.md`

Covers: 82 data-loss issues, 50+ session issues, community workarounds, third-party tools (ccmanager, Cozempic, claude-session-continuity-mcp), alternative editors, Anthropic engagement (zero).

---

## Fix toolkit

Scripts at `workspace/plan/active/FUCK_CLAUDE/scripts/`:
- `backup-vscode-state.sh` — snapshot state.vscdb + export model.cache
- `restore-vscode-state.sh` — restore from backup
- `sort-sessions.sh` — re-sort model.cache by created date
- `recover-dropped-sessions.sh` — find missing sessions, inject into cache
- `fix-titles.sh` — resolve UUID-only labels from JSONL custom-title entries
- `patch-extension.sh` — apply buffer + archive fixes to current extension version
- `full-repair.sh` — runs all above in sequence

Automated backup: `com.alison.claude-backup.plist` — launchd agent, every 30 minutes

---

_Maintained by: Alison Haire (Wonderland). Updated: 2026-03-29._
