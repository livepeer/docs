/**
 * @script session-register
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Registers active sessions and tracks which files each session touches
 * @description SessionStart hook that registers this session in a shared registry file.
 *   PostToolUse on Edit/Write also calls this to log file claims. Pre-tool-guard reads
 *   the registry to warn about cross-session collisions.
 * @mode write (temp file only)
 * @pipeline SessionStart hook / PostToolUse hook → writes to /tmp/claude-session-registry
 * @scope .claude/settings.json SessionStart + PostToolUse hooks
 * @usage Called automatically by Claude Code hooks. Not invoked directly.
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

const REGISTRY = '/tmp/claude-session-registry';
const STALE_MS = 4 * 60 * 60 * 1000; // 4 hours — sessions older than this are pruned

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = input.trim() ? JSON.parse(input) : {};
    const sessionId = process.env.CLAUDE_SESSION_ID || 'unknown';
    const now = Date.now();

    // Load existing registry
    let registry = {};
    try {
      registry = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
    } catch (_) { /* first run or corrupt */ }

    // Prune stale sessions
    for (const [sid, entry] of Object.entries(registry)) {
      if (now - entry.lastSeen > STALE_MS) {
        delete registry[sid];
      }
    }

    // Ensure this session exists
    if (!registry[sessionId]) {
      registry[sessionId] = {
        started: new Date().toISOString(),
        lastSeen: now,
        files: []
      };
    }
    registry[sessionId].lastSeen = now;

    // If called from PostToolUse (Edit/Write), log the file claim
    const toolInput = data.tool_input || {};
    const filePath = toolInput.file_path || '';
    if (filePath) {
      const files = registry[sessionId].files;
      if (!files.includes(filePath)) {
        files.push(filePath);
        // Keep only last 50 files per session
        if (files.length > 50) files.shift();
      }
    }

    // Write back
    fs.writeFileSync(REGISTRY, JSON.stringify(registry, null, 2));

    // On session start (no tool_input), report other active sessions
    if (!filePath) {
      const others = Object.entries(registry)
        .filter(([sid]) => sid !== sessionId)
        .map(([sid, entry]) => {
          const fileCount = entry.files.length;
          const ago = Math.round((now - entry.lastSeen) / 60000);
          const recentFiles = entry.files.slice(-5).map(f => path.basename(f)).join(', ');
          return `  ${sid.slice(0, 8)}... (${ago}m ago, ${fileCount} files${recentFiles ? ': ' + recentFiles : ''})`;
        });

      if (others.length > 0) {
        console.log(JSON.stringify({
          systemMessage: `PARALLEL SESSIONS ACTIVE (${others.length} other):\n${others.join('\n')}\nCheck for file overlap before editing. If another session recently touched the same files, coordinate or ask the user.`
        }));
      }
    }

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
