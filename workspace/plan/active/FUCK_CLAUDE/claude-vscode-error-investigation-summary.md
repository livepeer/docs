# Claude VSCode Error Investigation Summary

Date: 2026-03-27
Scope: VSCode Claude Code extension session loss and headless sessions.

## Verified Findings
1. Claude session transcripts are stored locally as JSONL under:
   - `/Users/alisonhaire/.claude/projects/<project-dir>/*.jsonl`
   - For this workspace: `/Users/alisonhaire/.claude/projects/-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev/`
2. The session list in VSCode is built from those JSONL files and from remote sessions.
   - The extension code’s `listSessions()` enumerates local JSONL files for the current `cwd`.
3. When the VSCode window reloads, the webview requests `list_sessions_request` and `list_remote_sessions`.
4. The extension logs show repeated `list_remote_sessions` calls and responses like `Fetched 1 remote sessions`.
5. Multiple `.claude/projects/*` directories exist for different workspaces, meaning sessions are partitioned by workspace path.

## Primary Root Cause Hypothesis (Most Plausible)
VSCode reload changes the effective workspace root (folder vs `.code-workspace`, or a different repo path).  
Because the Claude extension resolves sessions by current `cwd`, the UI list can appear “wiped” if the workspace root differs. The underlying JSONL sessions still exist, but under a different `~/.claude/projects/<project-dir>` folder.

## Evidence Supporting the Hypothesis
- Session map for `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev` shows 83 sessions in the expected project directory.
- The logs show `launch_claude` with `cwd` and `resume` session IDs, indicating the extension is using `cwd` to locate sessions.
- There are multiple project directories under `~/.claude/projects/` tied to distinct workspace roots.

## What Is Not the Cause
- VSCode `agentSessions.state.cache` is not Claude’s session store; it contains `vscode-chat-session://local/...` and `openai-codex://route/...` entries (VSCode Chat/Codex).

## Next Verification Steps (If Needed)
1. Compare the workspace root VSCode loads after reload with the `cwd` used by Claude (from logs).
2. If they differ, confirm that the missing sessions are present under the alternate `~/.claude/projects/<project-dir>` path.
3. Cross-check for any `list_sessions_response` errors in Claude logs around the time sessions vanish.
