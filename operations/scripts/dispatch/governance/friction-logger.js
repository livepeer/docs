/**
 * @script friction-logger
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Detects and logs friction signals from user messages in real-time
 * @description UserPromptSubmit hook. Scans user messages for frustration indicators
 *   (swearing, ALL CAPS, corrections, explicit rule-violation callouts) and logs each
 *   incident to workspace/thread-outputs/sessions/friction-log.jsonl with timestamp,
 *   session ID, signal type, and triggering context. Never blocks input.
 * @mode read-only
 * @pipeline UserPromptSubmit hook → reads stdin → pattern match → append to friction log
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
    if (!message || message.length < 2) { process.exit(0); }

    const signals = [];

    // --- Frustration: swearing ---
    if (/\b(fuck|shit|cunt|bloody hell|goddamn|ffs|wtf|stfu)\b/i.test(message)) {
      signals.push({ type: 'frustration', subtype: 'swearing' });
    }

    // --- Frustration: ALL CAPS blocks (3+ consecutive caps words) ---
    if (/\b[A-Z]{2,}\s+[A-Z]{2,}\s+[A-Z]{2,}\b/.test(message)) {
      signals.push({ type: 'frustration', subtype: 'caps_block' });
    }

    // --- Correction: wrong target ---
    if (/\b(wrong file|wrong one|not that file|not that one|wrong page|wrong branch)\b/i.test(message)) {
      signals.push({ type: 'correction', subtype: 'wrong_target' });
    }

    // --- Correction: misunderstood request ---
    if (/\b(i said|i asked|i meant|i told you|that's not what|read (my|the) (message|instruction|request))\b/i.test(message)) {
      signals.push({ type: 'correction', subtype: 'misunderstood' });
    }

    // --- Correction: stop / undo ---
    if (/\b(stop|revert|undo|put it back|restore|roll back)\b/i.test(message) &&
        /\b(that|this|what you|immediately|now|right now)\b/i.test(message)) {
      signals.push({ type: 'correction', subtype: 'stop_undo' });
    }

    // --- Violation callout: user says Claude broke a rule ---
    if (/\b(without (my |)permission|who (said|told) you|didn.t ask you|not approved|violation|broke.*rule|read (your|the) rules)\b/i.test(message)) {
      signals.push({ type: 'violation_callout', subtype: 'rule_breach' });
    }

    // --- Violation callout: unverified claim ---
    if (/\b(that.s (wrong|not true|incorrect|false)|doesn.t exist|it does exist|check (first|again|before)|you didn.t (check|verify|test|read))\b/i.test(message)) {
      signals.push({ type: 'violation_callout', subtype: 'unverified_claim' });
    }

    // --- Excessive changes callout ---
    if (/\b(too (much|many)|overwrote|entire file|didn.t ask for|no.?one said|who asked)\b/i.test(message)) {
      signals.push({ type: 'violation_callout', subtype: 'excessive_changes' });
    }

    // --- Nothing detected ---
    if (signals.length === 0) { process.exit(0); }

    // --- Log to friction-log.jsonl ---
    const logPath = path.join(
      process.cwd(),
      'workspace/thread-outputs/sessions/friction-log.jsonl'
    );

    const sessionId = process.env.CLAUDE_SESSION_ID || 'unknown';

    // Truncate message for log (first 200 chars, no sensitive data)
    const context = message.substring(0, 200).replace(/\n/g, ' ');

    const entry = {
      timestamp: new Date().toISOString(),
      session: sessionId,
      signals: signals,
      context: context
    };

    fs.appendFileSync(logPath, JSON.stringify(entry) + '\n');

    // Also emit a systemMessage so Claude knows friction was detected
    // but ONLY for severe signals (swearing or violation callouts)
    const severe = signals.some(s =>
      s.type === 'frustration' && s.subtype === 'swearing' ||
      s.type === 'violation_callout'
    );

    if (severe) {
      console.log(JSON.stringify({
        systemMessage: `FRICTION DETECTED: User is frustrated or calling out a rule violation. STOP what you are doing. Re-read the user's message carefully. If you made a mistake, acknowledge it plainly — do not deflect. If the user says stop, stop. Do not ask follow-up questions. Do not retry the same approach.`
      }));
    }

    process.exit(0);
  } catch (e) {
    // Never block user input
    process.exit(0);
  }
});
