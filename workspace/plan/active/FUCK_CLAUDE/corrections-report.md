# Corrections Report (No Fixes Applied)

Date: 2026-03-27  
Scope: Identify statements in this folder that require correction or reclassification.  
Action: **No files edited.** This report only lists required corrections.

## Corrections Required (Current Evidence)
1. **Session count mismatch**  
   - Reported: “74 JSONL session files intact”  
   - Evidence now: 83 sessions for `Docs-v2-dev` in [`claude-session-map.md`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/workspace/plan/active/FUCK_CLAUDE/claude-session-map.md).  
   - Correction: Update all references from 74 → 83 (or explicitly date-stamp the count).

2. **agentSessions.model.cache count mismatch**  
   - Reported: “149 session entries”  
   - Evidence now: 162 entries total, 83 claude-like.  
   - Correction: Replace the stated count or mark as time-bound.

3. **hiddenSessionIds present**  
   - Reported: “20–23 entries”  
   - Evidence now: `hiddenSessionIds: []` in global state.  
   - Correction: Reframe as “historical/unverified” unless backed by a dated backup.

4. **patched vs unpatched hiddenSessionIds filtering**  
   - Reported: filter in listSessions.  
   - Evidence now: extension.js currently shows `let H=new Set([]); return ... sessions:B` (patched state).  
   - Correction: Update to reflect that the installed extension is patched; original behavior should be marked as pre-patch.

5. **Crash timestamp**  
   - Reported: crash at ~02:13 2026-03-27.  
   - Evidence: not confirmed in `ClaudeVSCode.log` in this folder.  
   - Correction: Mark as unverified unless corroborated by logs from VS Code’s logs directory.

6. **Process kills / zombie processes**  
   - Reported: killing Puppeteer and Claude sessions.  
   - Evidence: no corroboration in folder logs.  
   - Correction: Mark as unverified unless backed by terminal history or logs.

7. **GitHub issue references and engagement claims**  
   - Reported: 200+ issues, timelines, zero engagement, specific issue IDs.  
   - Evidence: no local evidence in this folder.  
   - Correction: Mark as unverified or attach sources.

8. **Third-party “Claude Assist shows 107 sessions”**  
   - Evidence: none in this folder.  
   - Correction: Mark as unverified.

## Files Impacted
- `session-loss-diagnosis.md`
- `session-loss-diagnosis-2026-03-27.md`
- `session-recovery-report.md`
- `claude-vscode-error-investigation-summary.md` (minor clarifications on counts)

## Recommended Correction Method (If You Want Fixes Later)
1. Replace counts with evidence-based values or date-stamp counts.  
2. Add “Verified” vs “Unverified” labels to each root-cause claim.  
3. Attach log excerpts or command output inline for any high-stakes claims.

No changes applied. This is a correction plan only.
