# Claude Code VS Code Extension — Community Research

> Full research on complaints, workarounds, third-party tools, and Anthropic engagement.
> Researched: 2026-03-29. Sources: GitHub issues, Reddit, dev.to, community tools.

---

## Scale of the problem

- **82 open issues** with `data-loss` label in anthropics/claude-code
- **50+ open issues** specifically about session loss/ordering/naming
- **Zero Anthropic staff responses** on session management issues
- **One issue** (#16970) has `oncall` label — still no human response
- **Automated bot** closes issues as duplicates, fragmenting community engagement below triage thresholds
- Affects all platforms: macOS, Windows, Linux, WSL, Remote SSH

---

## Session loss / disappearance (28 issues)

| # | Title | State | Date | Labels |
|---|---|---|---|---|
| 40390 | Cleared cache per help instruction, sessions no longer load | OPEN | 03-28 | bug, macos |
| 40319 | Session resume loads zero history — silently drops all context | OPEN | 03-28 | bug, has repro |
| 40318 | Remote-WSL: inconsistent session persistence | OPEN | 03-28 | bug, has repro |
| 40081 | Named session lost after system restart | OPEN | 03-28 | bug, has repro |
| 39970 | Remote control: timeout, resume failure, no context persistence | OPEN | 03-27 | bug |
| 39933 | Session silently terminates while churning | OPEN | 03-27 | bug |
| 39667 | Session .jsonl files silently deleted, sessions-index.json stops updating | OPEN | 03-27 | bug, has repro |
| 39316 | Unrecoverable session after dropped tool_result | OPEN | 03-26 | bug |
| 38340 | /resume picker doesn't discover sessions via filesystem scan | OPEN | 03-24 | bug, has repro |
| 38032 | Desktop: conversation history lost after reboot (Windows) | OPEN | 03-24 | bug |
| 37474 | CLI sessions missing from /resume list due to missing ai-title | OPEN | 03-22 | bug |
| 37437 | Session resume after 403 breaks parentUuid chain — loses everything | OPEN | 03-22 | bug, data-loss |
| 36566 | Cannot view/restore archived conversations | OPEN | 03-20 | bug |
| 36272 | CLI silently deletes .jsonl files from older versions during update | OPEN | 03-19 | bug, data-loss |
| 35085 | fetchSessions() 64KB buffer silently drops large sessions | OPEN | 03-16 | bug, has repro |
| 35022 | deserializeWebviewPanel ignores saved sessionId | OPEN | 03-16 | bug, has repro |
| 33651 | SubAgent chain overtakes main chain — messages lost | OPEN | 03-12 | bug, data-loss |
| 33140 | Can't find sessions on mapped network drives | OPEN | 03-11 | bug |
| 29331 | sessions-index.json out of sync (3 of 61 indexed) | CLOSED | 02-27 | bug, stale |
| 26452 | Sessions disappeared after logout/restart | OPEN | — | 15+ "same here" |
| 26123 | /resume broken since v2.1.31 (3 root causes) | OPEN | — | 22+ thumbs-up |
| 24172 | CRITICAL: Conversations disappear when closing VSCode | OPEN | — | 100% reproducible |
| 22215 | Past conversations not showing despite valid index | OPEN | — | Multiple confirmations |
| 13872 | Chat history lost on restart (macOS) | OPEN | — | — |
| 9258 | History sessions lost (original Oct 2025 report) | OPEN | — | — |

---

## Session naming / renaming (12 issues)

| # | Title | State | Key finding |
|---|---|---|---|
| 40367 | /rename doesn't persist across /clear | OPEN | — |
| 40278 | Tab names change inconsistently on reload | OPEN | — |
| 39590 | STOP AUTO-RENAMING my chats | OPEN | — |
| 38515 | Custom names lost after restart | OPEN | — |
| 39136 | Name, colour, and index lost after reboot | OPEN | — |
| 37628 | Sidebar rename doesn't sync terminal tab | OPEN | **User reverse-engineered extension: reactive watcher reads `summary.value` not `customTitle`** |
| 33165 | Title eviction family (~20 bugs, same root cause) | OPEN | — |
| 32150 | Titles revert to last-prompt text after close | OPEN | **Community mapped 12-issue duplicate chain with 3-pronged failure analysis** |
| 29922 | Name lost after context compaction | OPEN | Regression from v2.1.47 fix |
| 25090 | Rename works on first resume, disappears after second exit | OPEN | — |

### Community root cause analysis (from #32150 and #37628)

1. **Scanner logic error:** ignores `sessionId` field, applies titles to wrong sessions
2. **LIFO "last entry wins":** `last-prompt` entry on close overrides `custom-title`
3. **Index cache mismatch:** `sessions-index.json` lacks `displayName` and `customTitle` fields
4. **Reactive watcher bug:** webview always reads `summary.value` (AI-generated), never checks `customTitle`

---

## Sidebar ordering (7 issues)

| # | Title | State |
|---|---|---|
| 40405 | listSessions() drops sessions with large base64 images | OPEN |
| 38070 | Timestamps reset to restart time, breaking chronological order | CLOSED (dup) |
| 37977 | Timestamps reset to same time after restart | CLOSED (dup) |
| 31116 | Sessions with ide_opened_file as first message invisible (**89% of VS Code sessions**) | OPEN |
| 25974 | Session pinning, reordering, sort-by-last-activity (feature request) | CLOSED (dup) |

---

## VS Code extension crashes (16 issues)

| # | Title | State | Key detail |
|---|---|---|---|
| 40410 | React #185 render loop on "Switch branch and continue" | OPEN | 03-29 |
| 39885 | Installing plugin corrupts VS Code | OPEN | Windows |
| 39253 | Kernel panics on MacBook Pro M3 Pro 18GB | OPEN | macOS |
| 39229 | Extension host "Not responding" — heartbeat timeout | OPEN | 8 comments |
| 38994 | All agent panels go gray/unresponsive simultaneously | OPEN | Windows |
| 25101 | Extension restarts VS Code when loading past conversations | OPEN | — |
| 23953 | VS Code crashes when most recent session is 467MB | OPEN | — |
| 23463 | SubAgent results overflow context — unrecoverable crash | OPEN | 10 comments |

---

## Data loss beyond sessions (82 issues with `data-loss` label)

**These go beyond session management into Claude destroying user work:**

| # | Title | Date |
|---|---|---|
| 40352 | Compaction race condition destroys entire transcript | 03-28 |
| 40321 | Sandbox half-broken — writes hit real filesystem, reads sandboxed — **destroyed entire project** | 03-28 |
| 39460 | rm -rf with unexpanded ${LOCALAPPDATA} **deletes real system directory** | 03-26 |
| 39394 | git checkout with uncommitted changes — silent data loss | 03-26 |
| 38287 | Worktree cleanup silently **deletes branches with unmerged commits** | 03-24 |
| 38055 | Minor version update **permanently deletes chat history and scheduled tasks** | 03-24 |
| 37888 | Claude runs **explicitly forbidden destructive git commands**, ignores own memory rules | 03-23 |
| 37875 | Claude unaware of case-insensitive filesystems, **uses unsafe rm -rf on user data** | 03-23 |
| 37331 | Claude **deleted all my files** | 03-22 |
| 37150 | Opus 4.6: **destroyed working files by careless git operations** | 03-21 |
| 36339 | rm -rf on pnpm project **deleted entire C:\Users via NTFS junction traversal** | 03-19 |
| 36233 | Claude **deleted entire Mac filesystem** during security cleanup task | 03-19 |
| 36183 | Claude ran **prisma db push --force-reset on production database** | 03-19 |

---

## Workarounds (community-verified)

### Immediate recovery

| Workaround | How |
|---|---|
| CLI resume bypasses VS Code | `claude --resume <session-id>` from terminal |
| Restart Extension Host only | Cmd+Shift+P > "Restart Extension Host" — preserves files/terminals |
| Rebuild sessions-index.json | Create with `{"version": 1, "entries": []}` — forces reindex |
| `ccfind` bash script | Community script to search .jsonl files directly by content |

### Preventative

| Setting/approach | How |
|---|---|
| `cleanupPeriodDays: 99999` | Add to `~/.claude/settings.json` — prevents auto file deletion |
| Externalise context | CLAUDE.md, memory files, handover docs — not chat history |
| Keep sessions small | Start new session approaching 2MB, carry context via files |
| Use terminal not VS Code | Terminal has own process space, more stable |
| `find-session.py` timer | Runs every 2min, detects/fixes `last-prompt` overwriting `custom-title`, restores mtime |

### Community fix script: find-session.py

Systemd timer that runs every 2 minutes:
1. Scans all `.jsonl` files
2. Detects where `last-prompt` has overwritten `custom-title`
3. Appends corrected `custom-title` entry
4. Restores file mtime to preserve sidebar sort order

---

## Third-party tools

### VS Code extensions

| Extension | What | Status |
|---|---|---|
| agsoft.claude-history-viewer | Browse sessions, view diffs, track tokens | **Installed (v0.4.3)** |
| AndrePimenta.claude-code-chat | SQLite-backed chat with search | **Installed (v1.1.0)** |
| doorsofperception.claude-code-history | Browse/search history locally, no telemetry | Not installed |
| AlexZanfir.claude-chats | Rename, organise, archive conversations | Not installed |

### Standalone session managers

| Tool | What | Link |
|---|---|---|
| **ccmanager** | Terminal TUI for listing/switching sessions. npm install. Most popular. | github.com/kbwo/ccmanager |
| **Nimbalyst** | Desktop app. Visual kanban for sessions. Inline diff review. | nimbalyst.com |
| **Context Manager** | macOS menubar. Auto-labels with Haiku. Git-like workflows. | contextmanager.cc |
| **Cozempic** | Defers compaction, `cozempic list` bypasses broken index | github.com/Ruya-AI/cozempic |
| **claude-code-memory** | SQLite + ChromaDB storage outside context window | github.com/AbdoKnbGit/claude-code-memory |

### MCP solutions

| Tool | What |
|---|---|
| **claude-session-continuity-mcp** | Zero-config session continuity via hooks. Auto-captures/restores context. Saves ~98% context window. |
| **Session Continuity Manager** | MCP skill for persistent session state (mcpmarket.com) |

---

## Alternative editors mentioned by community

| Tool | Why people switch |
|---|---|
| **Cursor** | Multi-model support, visual inline diffs, plugin marketplace |
| **Cline** | 5M+ installs, open source, native subagents, works across VS Code/Cursor/JetBrains/Zed/Neovim |
| **Claude Code CLI (terminal)** | More stable than VS Code extension — own process space |

---

## Anthropic engagement summary

- **Zero staff comments** found on any session management issue
- **One `oncall` label** on #16970 — no human response visible
- **Automated bot** aggressively closes as duplicates, fragmenting engagement
- **Partial fix in v2.1.47:** /resume limit raised 10 → 50, Windows case-sensitivity fix
- **Core bugs unfixed** since February 2026 (sessions-index.json staleness, fetchSessions buffer, state.cache wipe)
- **No PRs found** addressing session management architecture
- Enterprise users report this is **blocking adoption** for longer development tasks

---

## Applied to this machine (2026-03-29)

- [x] `cleanupPeriodDays: 99999` added to `~/.claude/settings.json`
- [x] Extension patched: 2 buffers 64KB → 512KB (v2.1.86)
- [x] Automated backup cron: every 30 minutes
- [x] Full repair toolkit: `workspace/plan/active/FUCK_CLAUDE/scripts/`
- [x] Canonical diagnostic: `workspace/plan/active/FUCK_CLAUDE/CANONICAL-DIAGNOSTIC.md`
- [ ] Consider: ccmanager (npm install for backup session browser)
- [ ] Consider: claude-session-continuity-mcp (auto context preservation)
- [ ] Consider: find-session.py timer (auto title fix)

---

_Researched by: Claude Code session on 2026-03-29. Sources: GitHub API, web search, community forums._
