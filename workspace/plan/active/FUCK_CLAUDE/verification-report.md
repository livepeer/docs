# Verification Report — Claude VSCode Session Loss Folder

Date: 2026-03-27
Scope: Critical verification of claims in this folder against local evidence.

## Verified (Evidence in Local Files)
1. **No `sessions-index.json` exists under `~/.claude/`**.  
   - Evidence: `find /Users/alisonhaire/.claude -name sessions-index.json` returned no results.
2. **Claude session transcripts are stored as JSONL under `~/.claude/projects/<project>/`.**  
   - Evidence: [`claude-session-map.md`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/workspace/plan/active/FUCK_CLAUDE/claude-session-map.md) lists `projectDir` paths and sessions.
3. **For Docs-v2-dev, there are 83 sessions on disk.**  
   - Evidence: [`claude-session-map.md`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/workspace/plan/active/FUCK_CLAUDE/claude-session-map.md) shows 83 sessions for `-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev`.
4. **`agentSessions.state.cache` contains VS Code Chat/Codex sessions, not Claude sessions.**  
   - Evidence: `state.vscdb` entry shows `vscode-chat-session://local/...` and `openai-codex://...`, no `claude-code` entries.
5. **`hiddenSessionIds` is currently empty in global state.**  
   - Evidence: `~/Library/Application Support/Code/User/globalStorage/state.vscdb` key `Anthropic.claude-code` shows `"hiddenSessionIds": []`.
6. **The extension uses a 64KB head/tail reader for session files.**  
   - Evidence: `extension.js` sets `pU=65536` and reads only head/tail blocks before extracting titles.
7. **Sessions with no detected title are dropped by the extension.**  
   - Evidence: `extension.js` returns `null` if it cannot extract `customTitle`, `aiTitle`, `lastPrompt`, or `summary`.
8. **The currently installed extension appears patched to bypass hiddenSessionIds filtering.**  
   - Evidence: `extension.js` shows `let H=new Set([]); return {type:"list_sessions_response", sessions:B}`.
9. **No `anthropic.claude-code` globalStorage directory exists.**  
   - Evidence: Only `/Users/alisonhaire/Library/Application Support/Code/User/globalStorage/agsoft.claude-history-viewer` exists.

## Currently False or Inconsistent
1. **“74 JSONL session files intact”** is inconsistent with the current count of **83**.  
   - Evidence: [`claude-session-map.md`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/workspace/plan/active/FUCK_CLAUDE/claude-session-map.md).
2. **“agentSessions.model.cache contained 149 session entries”** is inconsistent with the current count.  
   - Evidence: current `agentSessions.model.cache` parses to 162 entries, with 83 claude-like entries.
3. **“hiddenSessionIds had 20–23 entries”** is not true now.  
   - Evidence: `hiddenSessionIds: []` in global state.

## Not Verifiable From Local Evidence
1. **Crash time (~02:13 2026-03-27)** is not confirmed in [`ClaudeVSCode.log`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/workspace/plan/active/FUCK_CLAUDE/ClaudeVSCode.log).
2. **Claims of killing Puppeteer processes or Claude processes** are not corroborated by any log in this folder.
3. **GitHub issue numbers, timelines, and engagement claims** are unverified locally.
4. **“Claude Assist shows 107 sessions”** is unverified locally.
5. **Specific reports about 200+ GitHub issues and Anthropic engagement** are unverified locally.

## Corrections to Existing Reports
If you want these reports to be corrected, the minimum edits are:
1. Update session counts to 83 where 74 is claimed.
2. Replace “agentSessions.model.cache = 149 entries” with “162 entries, 83 claude-like”.
3. Remove or reframe hiddenSessionIds counts as “not currently present; may have been historical”.
4. Replace “listSessions filters hiddenSessionIds” with “current extension.js is patched to bypass hiddenSessionIds”.
5. Mark GitHub issue references and engagement statements as unverified unless supported by local evidence.

## Recommended Next Verification Steps
1. Pull the exact `Claude VSCode` log file from the VSCode logs directory around the reported crash time and compare to the `ClaudeVSCode.log` in this folder.
2. If you want to verify the “hiddenSessionIds” hypothesis historically, check archived `state.vscdb` backups if any exist.
3. If you want to validate GitHub issue claims, record sources or export issue pages into the workspace as evidence.
