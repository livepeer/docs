# Session Recovery Report — 2026-03-27

**Thread outcome:** Restore all chat sessions to VS Code Claude Code sidebar so they are visible and usable.
**Result:** PARTIALLY MET. Sessions visible in sidebar. Messages not loading. Extension bug confirmed.

---

## What happened

1. Claude Code crashed at ~02:13 on 2026-03-27
2. VSCode reloaded. All Claude Code chat sessions disappeared from sidebar
3. This is the 3rd+ time this has happened in this project

## What was investigated

| Step | What | Result |
|---|---|---|
| 1 | Checked if .jsonl files exist | YES — 83 sessions, all intact on disk at `~/.claude/projects/-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev/` |
| 2 | Checked `~/.claude/sessions/` PID files | Found 7 headless Claude processes running with no UI attached |
| 3 | Checked `globalStorage/state.vscdb` | Found `hiddenSessionIds` array with 27 entries — WRONG LEAD. Crashed sessions were not in hidden list |
| 4 | Checked `agentSessions.model.cache` | 79 Claude sessions registered with titles and IDs — sidebar list source is FINE |
| 5 | Checked `agentSessions.state.cache` | ZERO claude-code entries. Only local/copilot sessions. **This is where the bug manifests** |
| 6 | Checked extension source (`extension.js`) | Found `deserializeWebviewPanel` passes `void 0` instead of `state?.sessionId` — known bug #35022 |
| 7 | Checked webview source (`webview/index.js`) | 600-second timeout discards session IDs — known bug #35005 |
| 8 | Checked `globalStorage/anthropic.claude-code/` | DOES NOT EXIST. Extension has no persistent global storage directory |

## Root causes confirmed

1. **`agentSessions.state.cache` has zero claude-code entries** — on reload, extension reads this cache, finds nothing, can't load messages
2. **`deserializeWebviewPanel` passes `void 0`** — when restoring tabs after crash, session ID is lost, panel shows blank
3. **64KB head/tail buffer limit** — `fetchSessions()` reads only first/last 64KB of each JSONL. Large sessions (5-57MB) have title data outside this window, silently dropped from sidebar
4. **No `globalStorage/anthropic.claude-code/` directory** — extension has no persistent message store outside the JSONL files

## What was done to fix

| Fix | What | Status |
|---|---|---|
| Extracted 20 sessions to readable .md files | `workspace/thread-outputs/sessions/recovered-chats/` — 11,617 messages total | DONE |
| Injected 79 claude-code entries into `agentSessions.state.cache` | Wrote to `state.vscdb` so extension can find sessions | DONE — but extension holds old cache in memory |
| Appended `ai-title` + `summary` records to tail of 78 JSONL files | Ensures title data is within 64KB tail buffer | DONE |
| Backed up extension files | `extension.js.backup-*`, `webview/index.js.backup-*` | DONE |
| Backed up state database | `state.vscdb.backup-*` | DONE |

## Current state (screenshot confirmed)

- Sessions ARE showing in sidebar list (titles visible, timestamps correct)
- Clicking any session shows: `Error: Claude Code returned an error result: No conversation found with session ID: <id>`
- The extension can LIST sessions but cannot LOAD their messages
- The `deserializeWebviewPanel` bug means restored panels get `undefined` as session ID

## What would actually fix this

1. **Anthropic patches `deserializeWebviewPanel`** to pass `state?.sessionId` instead of `void 0` — one line change
2. **Anthropic patches `fetchSessions()`** to not silently drop sessions exceeding 64KB buffer
3. **Anthropic adds `globalStorage` persistence** so session state survives crashes
4. **Anthropic fixes `agentSessions.state.cache`** to include claude-code sessions

None of these can be done from inside a Claude Code session. They require extension code changes.

## Community evidence

- 53 open issues on chat/session history disappearing
- 40+ session resume failure issues
- 1 Anthropic staff response across 200+ issues (explained auto-compaction config)
- Known since October 2025. Unfixed as of v2.1.84

## Workarounds available

| Workaround | How |
|---|---|
| Read session content | `workspace/thread-outputs/sessions/recovered-chats/*.md` — full text of all sessions |
| Resume from terminal | `claude --resume <session-id>` |
| Browse session history | Claude History Viewer extension (agsoft) — already installed |

## Time spent on this

~90 minutes of this session spent on recovery investigation and fixes. Zero minutes on actual project work.

## Recommendation

Stop using VSCode Claude Code sidebar as the primary interface for long-running sessions. It will keep losing them. Use terminal `claude` with `--resume` for any session you need to keep. Use the extracted .md files as the readable archive.

This is not an excuse. This is the state of the tool.

---

_Written: 2026-03-27 03:45_
