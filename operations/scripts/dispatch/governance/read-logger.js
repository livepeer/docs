/**
 * @script read-logger
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Tracks which files Claude reads per session for context-gate enforcement
 * @description PostToolUse hook on Read. Logs file paths to a session-scoped temp file.
 *   The pre-tool-guard checks this log before allowing Edit/Write to warn when Claude
 *   has not read the target file or broader context.
 * @mode write (temp file only)
 * @pipeline PostToolUse hook (Read) → reads stdin → appends file path to /tmp/claude-reads-{session}
 * @scope .claude/settings.json PostToolUse hook (Read matcher)
 * @usage Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolInput = data.tool_input || {};
    const filePath = toolInput.file_path || '';

    if (!filePath) {
      process.exit(0);
    }

    const sessionId = process.env.CLAUDE_SESSION_ID || 'default';
    const logPath = path.join('/tmp', `claude-reads-${sessionId}`);

    fs.appendFileSync(logPath, filePath + '\n');
    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
