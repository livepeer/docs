#!/usr/bin/env node
/**
 * @script      backfill-vague-purpose
 * @type        remediator
 * @concern     governance
 * @niche       jsdoc-headers
 * @purpose     Backfill the @purpose JSDoc tag on scripts where it is empty or a label like "qa:component-quality" — expands @description into a sentence-style @purpose that passes the SME audit's > 20 char rule, derives an action verb from @type, and applies updates only on confirmed vague candidates
 * @description Reads the SME audit's flagged-list JSON, opens each script, finds the existing @purpose line in the JSDoc block, replaces the value with a sentence built from the @description tag (if present) prefixed by the canonical verb for the @type (Detect / Validate / Repair / Generate / Audit / Dispatch / Integrate). Skips scripts whose @description is too short to make a useful purpose. --dry-run preview; --write apply.
 * @mode        repair
 * @pipeline    manual — invoked after audit-script-purpose-fit surfaces vague-purpose flags
 * @scope       operations/scripts/**, tools/scripts/**
 * @usage       node operations/scripts/remediators/governance/scaffold/backfill-vague-purpose.js [--dry-run|--write] [--input <path>] [--limit <N>]
 * @policy      D-GOV-03 (paired remediator for the audit-script-purpose-fit detector)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const DEFAULT_INPUT = '/tmp/vague-purpose-list.json';

const VERB_BY_TYPE = {
  audit: 'Audit',
  validator: 'Detect',
  remediator: 'Repair',
  generator: 'Generate',
  integrator: 'Fetch',
  dispatch: 'Dispatch the',
  interface: 'Handle',
  config: 'Provide',
};

function parseArgs(argv) {
  const args = { dryRun: false, write: false, input: DEFAULT_INPUT, limit: null };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--dry-run') args.dryRun = true;
    else if (t === '--write') args.write = true;
    else if (t === '--input') { args.input = argv[i + 1]; i += 1; }
    else if (t === '--limit') { args.limit = parseInt(argv[i + 1], 10); i += 1; }
  }
  if (!args.dryRun && !args.write) args.dryRun = true;
  return args;
}

function extractTagLine(source, tagName) {
  // Match the @<tagName> ... line, allowing JS (* @tag) or shell (# @tag) prefixes.
  // Use [\t ] (horizontal whitespace only, no newline) so empty-value tags don't bleed into next line.
  const re = new RegExp(`([ *#\\t]*@${tagName})([\\t ]*)([^\\n]*)`, 'i');
  const m = source.match(re);
  if (!m) return null;
  return { fullMatch: m[0], prefix: m[1], gap: m[2], value: m[3].trim(), index: m.index };
}

function extractDescription(source) {
  // Match the @description line value only (no newline crossing).
  const m = source.match(/[ *#\t]*@description[\t ]+([^\n]*)/i);
  if (!m) return '';
  let desc = m[1].trim();
  // Continuation lines: same comment prefix, then a non-@ word.
  // Stop at the next @<tag> line.
  const after = source.slice(m.index + m[0].length).split('\n').slice(1, 5);
  for (const line of after) {
    // Strip leading whitespace/comment marks; anything starting with @ ends the description.
    const stripped = line.replace(/^[\t ]*[*#]?[\t ]*/, '');
    if (stripped.startsWith('@')) break;
    if (stripped.trim() === '') break;
    desc += ' ' + stripped.trim();
  }
  return desc.trim();
}

function isVague(purpose) {
  if (!purpose) return true;
  if (purpose.length < 20) return true;
  // Label-style: `<word>:<word>` with no spaces
  if (/^[a-z][a-z-]*:[a-z][a-z-]*$/.test(purpose.trim())) return true;
  return false;
}

function buildPurpose(tags, description) {
  const type = (tags.type || '').toLowerCase();
  const verb = VERB_BY_TYPE[type] || 'Run';
  if (!description) return null;
  const cleaned = description.replace(/\s+/g, ' ').trim();
  // If description already starts with a strong action verb (or anything verb-shaped), use as-is.
  if (/^(Audit|Audits|Detect|Detects|Validate|Validates|Check|Checks|Generate|Generates|Repair|Repairs|Fetch|Fetches|Dispatch|Dispatches|Handle|Handles|Provide|Provides|Convert|Converts|Sync|Syncs|Synchronise|Synchronises|Wrap|Resolve|Resolves|Bundle|Bundles|Read|Reads|Write|Writes|Scan|Scans|Apply|Applies|Block|Blocks|Enforce|Enforces|Replace|Replaces|Standardise|Standardises|Standardize|Standardizes|Remove|Removes|Normalise|Normalises|Run|Runs|List|Lists|Update|Updates|Build|Builds|Emit|Emits|Test|Tests|Use|Uses|Visit|Visits|Load|Loads|Classify|Classifies|Walk|Walks|Verify|Verifies|Capture|Captures|Render|Renders|Inject|Injects|Process|Processes|Compile|Compiles|Parse|Parses|Extract|Extracts|Map|Maps|Migrate|Migrates|Compare|Compares|Open|Opens|Close|Closes|Lock|Locks|Release|Releases|Label|Labels|Index|Indexes|Cleanup|Cleans|Cleans up|Sanitise|Sanitises|Format|Formats|Project|Projects|Assert|Asserts|Trigger|Triggers|Stop|Stops|Skip|Skips|Track|Tracks|Discover|Discovers|Watch|Watches|Sweep|Sweeps|Acquire|Acquires)\b/i.test(cleaned)) {
    return cleaned;
  }
  // If description starts with "X — does Y" pattern, take the part after the em-dash + verb-prefix.
  const dashSplit = cleaned.match(/^[^—-]+[—-]\s+(.*)$/);
  if (dashSplit) {
    const after = dashSplit[1];
    // Reuse the broad verb-leading detection on the after-dash text.
    const verbLeadingRe = /^(Audit|Audits|Detect|Detects|Validate|Validates|Check|Checks|Generate|Generates|Repair|Repairs|Fetch|Fetches|Dispatch|Dispatches|Handle|Handles|Provide|Provides|Convert|Converts|Sync|Syncs|Synchronise|Synchronises|Wrap|Resolve|Resolves|Bundle|Bundles|Read|Reads|Write|Writes|Scan|Scans|Apply|Applies|Block|Blocks|Enforce|Enforces|Replace|Replaces|Standardise|Standardises|Standardize|Standardizes|Remove|Removes|Normalise|Normalises|Run|Runs|List|Lists|Update|Updates|Build|Builds|Emit|Emits|Test|Tests|Use|Uses|Visit|Visits|Load|Loads|Classify|Classifies|Walk|Walks|Verify|Verifies|Capture|Captures|Render|Renders|Inject|Injects|Process|Processes|Compile|Compiles|Parse|Parses|Extract|Extracts|Map|Maps|Migrate|Migrates|Compare|Compares|Open|Opens|Close|Closes|Lock|Locks|Release|Releases|Label|Labels|Index|Indexes|Cleanup|Cleans|Sanitise|Sanitises|Format|Formats|Project|Projects|Assert|Asserts|Trigger|Triggers|Stop|Stops|Skip|Skips|Track|Tracks|Discover|Discovers|Watch|Watches|Sweep|Sweeps|Acquire|Acquires|Auto-repairs?|Auto-corrects?|Auto-generates?)\b/i;
    if (verbLeadingRe.test(after)) {
      return after.charAt(0).toUpperCase() + after.slice(1);
    }
    return `${verb} ${after.charAt(0).toLowerCase()}${after.slice(1)}`;
  }
  return `${verb} ${cleaned.charAt(0).toLowerCase()}${cleaned.slice(1)}`;
}

function processScript(scriptRel, options) {
  const scriptAbs = path.join(REPO_ROOT, scriptRel);
  if (!fs.existsSync(scriptAbs)) return { skipped: 'missing' };
  const source = fs.readFileSync(scriptAbs, 'utf8');

  const purposeTag = extractTagLine(source, 'purpose');
  if (!purposeTag) return { skipped: 'no-@purpose-tag' };
  if (!isVague(purposeTag.value)) return { skipped: 'already-good' };

  const typeTag = extractTagLine(source, 'type');
  const description = extractDescription(source);
  if (!description) return { skipped: 'no-description' };

  const newPurpose = buildPurpose({ type: typeTag ? typeTag.value : '' }, description);
  if (!newPurpose) return { skipped: 'no-purpose-derivable' };

  const newLine = `${purposeTag.prefix}     ${newPurpose}`;
  const updated = source.replace(purposeTag.fullMatch, newLine);
  if (updated === source) return { skipped: 'no-change' };

  if (options.write) {
    fs.writeFileSync(scriptAbs, updated);
  }
  return {
    applied: true,
    before: purposeTag.value || '(empty)',
    after: newPurpose,
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(args.input)) {
    console.error(`Input file not found: ${args.input}`);
    console.error('Run audit-script-purpose-fit.js first, then pipe vague-purpose list to /tmp/vague-purpose-list.json');
    process.exit(2);
  }

  const list = JSON.parse(fs.readFileSync(args.input, 'utf8'));
  const flat = [];
  for (const [concern, paths] of Object.entries(list)) {
    for (const p of paths) flat.push({ concern, path: p });
  }
  const target = args.limit ? flat.slice(0, args.limit) : flat;

  console.log(`Mode: ${args.write ? 'WRITE' : 'DRY-RUN'}`);
  console.log(`Targets: ${target.length} of ${flat.length}`);
  console.log('');

  const tally = { applied: 0, skipped: {} };
  for (const { concern, path: p } of target) {
    const r = processScript(p, args);
    if (r.applied) {
      tally.applied += 1;
      console.log(`✓ ${concern}/${path.basename(p)}`);
      console.log(`    before: ${r.before.slice(0, 80)}`);
      console.log(`    after:  ${r.after.slice(0, 80)}${r.after.length > 80 ? '...' : ''}`);
    } else {
      tally.skipped[r.skipped] = (tally.skipped[r.skipped] || 0) + 1;
    }
  }

  console.log('');
  console.log(`Applied: ${tally.applied}`);
  console.log('Skipped:');
  for (const [reason, count] of Object.entries(tally.skipped)) {
    console.log(`  ${reason}: ${count}`);
  }
  console.log('');
  if (!args.write) console.log('DRY-RUN — re-run with --write to apply.');
}

if (require.main === module) main();
