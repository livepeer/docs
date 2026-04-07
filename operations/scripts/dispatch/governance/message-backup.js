/**
 * @script message-backup
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Backs up substantial user messages to prevent data loss from command typos
 * @description UserPromptSubmit hook. If a message is longer than 200 chars, saves it to
 *   workspace/thread-outputs/sessions/message-backup.jsonl. This runs BEFORE the skill
 *   matcher, so even if a mistyped /command eats the message, the content is on disk.
 * @mode read-only
 * @pipeline UserPromptSubmit hook → reads stdin → saves long messages → exits
 * @scope .claude/settings.json UserPromptSubmit hook
 * @usage Called automatically by Claude Code UserPromptSubmit hook. Not invoked directly.
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
    const message = data.message || data.content || '';

    // Only back up substantial messages (200+ chars = real content, not "ok" or "go")
    if (!message || message.length < 200) {
      process.exit(0);
    }

    const logPath = path.join(
      process.cwd(),
      'workspace/thread-outputs/sessions/message-backup.jsonl'
    );

    const entry = {
      timestamp: new Date().toISOString(),
      session: process.env.CLAUDE_SESSION_ID || 'unknown',
      length: message.length,
      content: message
    };

    fs.appendFileSync(logPath, JSON.stringify(entry) + '\n');
    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
