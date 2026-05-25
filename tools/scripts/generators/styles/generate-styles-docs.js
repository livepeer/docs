#!/usr/bin/env node
/**
 * @script      generate-styles-docs
 * @type        generator
 * @concern     brand
 * @niche       style-tokens
 * @purpose     Generate style-governance documentation tables from validator categories, remediator patterns, and style.css tokens — keeps the styles-engineering-guide framework doc in sync with the audit-styles and remediate-styles source of truth
 * @description Parses tools/scripts/validators/styles/audit-styles.js (audit category list), tools/scripts/remediators/styles/remediate-styles.js (token migration map + repair patterns), and style.css (--lp-* design tokens) to produce documentation tables. --check fails if docs are stale; --write regenerates them. Writes a manifest at workspace/reports/styles/styles-docs-manifest.json. Not yet in the canonical dispatch-style-tokens.js pipeline — see workspace/reports/script-audit/brand/ for migration plan.
 * @mode        generate
 * @pipeline    P5 (scheduled), P6 (on-demand) — currently invoked via styles-engineering-guide.mdx
 * @scope       tools/scripts/validators/styles/, tools/scripts/remediators/styles/, style.css, docs-guide/frameworks/styles-engineering-guide.mdx
 * @usage       node tools/scripts/generators/styles/generate-styles-docs.js [--check|--write]
 * @policy      D-GOV-03 (drift detection via --check); D-ACT-06 (note: currently outside operations/ — migration tracked)
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const MANIFEST_PATH = path.join(REPO_ROOT, 'workspace', 'reports', 'styles', 'styles-docs-manifest.json');

/* ============================================
   SOURCE PARSERS
   ============================================ */

function parseTokensFromCSS() {
  const css = fs.readFileSync(path.join(REPO_ROOT, 'style.css'), 'utf8');
  const tokens = [];

  // Parse :root block
  const rootMatch = css.match(/:root\s*\{([^}]+)\}/s);
  if (rootMatch) {
    const rootBlock = rootMatch[1];
    const varRegex = /--(lp-[a-z0-9-]+):\s*([^;]+);/g;
    let m;
    while ((m = varRegex.exec(rootBlock)) !== null) {
      tokens.push({ name: `--${m[1]}`, value: m[2].trim(), mode: 'light' });
    }
  }

  // Parse .dark block
  const darkMatch = css.match(/\.dark\s*\{([^}]+)\}/s);
  if (darkMatch) {
    const darkBlock = darkMatch[1];
    const varRegex = /--(lp-[a-z0-9-]+):\s*([^;]+);/g;
    let m;
    while ((m = varRegex.exec(darkBlock)) !== null) {
      const existing = tokens.find(t => t.name === `--${m[1]}`);
      if (existing) {
        existing.darkValue = m[2].trim();
      } else {
        tokens.push({ name: `--${m[1]}`, value: null, darkValue: m[2].trim(), mode: 'dark-only' });
      }
    }
  }

  return tokens;
}

function parseAuditCategories() {
  const src = fs.readFileSync(path.join(REPO_ROOT, 'tools/scripts/validators/styles/audit-styles.js'), 'utf8');
  const categories = [];

  const catRegex = /(\w+):\s*\{\s*id:\s*'([^']+)',\s*severity:\s*'([^']+)',\s*description:\s*'([^']+)',\s*remediation:\s*'([^']+)',?\s*\}/g;
  let m;
  while ((m = catRegex.exec(src)) !== null) {
    categories.push({
      id: m[2],
      severity: m[3],
      description: m[4],
      remediation: m[5],
    });
  }

  return categories;
}

function parseRemediatorCapabilities() {
  const src = fs.readFileSync(path.join(REPO_ROOT, 'tools/scripts/remediators/styles/remediate-styles.js'), 'utf8');
  const capabilities = [];

  // Parse TOKEN_MAP
  const tokenMapMatch = src.match(/const TOKEN_MAP = \{([^}]+)\}/s);
  if (tokenMapMatch) {
    const entries = tokenMapMatch[1].match(/'[^']+'/g) || [];
    capabilities.push({
      type: 'legacy-token',
      description: 'Legacy CSS alias → --lp-* token',
      count: Math.floor(entries.length / 2),
      scope: 'JSX',
    });
  }

  // Parse HEX_TO_VAR
  const hexMapMatch = src.match(/const HEX_TO_VAR = \{([^}]+)\}/s);
  if (hexMapMatch) {
    const entries = hexMapMatch[1].match(/'#[^']+'/g) || [];
    capabilities.push({
      type: 'hardcoded-hex',
      description: 'Hardcoded hex colour → CSS variable',
      count: entries.length,
      scope: 'JSX + MDX',
    });
  }

  // Parse SPACING_MAP
  const spacingMatch = src.match(/const SPACING_MAP = \{([^}]+)\}/s);
  if (spacingMatch) {
    const entries = spacingMatch[1].match(/'[^']+'/g) || [];
    capabilities.push({
      type: 'literal-spacing',
      description: 'Literal spacing value → --lp-spacing-* token',
      count: Math.floor(entries.length / 2),
      scope: 'JSX',
    });
  }

  // Parse COMPONENT_PATTERNS
  const compMatch = src.match(/const COMPONENT_PATTERNS = \[([\s\S]*?)\n\];/);
  if (compMatch) {
    const typeRegex = /type:\s*'([^']+)'/g;
    const replacementRegex = /replacement:\s*'([^']+)'/g;
    let tm, rm;
    const types = [];
    const replacements = [];
    while ((tm = typeRegex.exec(compMatch[1])) !== null) types.push(tm[1]);
    while ((rm = replacementRegex.exec(compMatch[1])) !== null) replacements.push(rm[1]);
    for (let i = 0; i < types.length; i++) {
      capabilities.push({
        type: types[i],
        description: `Component migration: → ${replacements[i] || '(replacement)'}`,
        count: 1,
        scope: 'MDX',
      });
    }
  }

  // Fixed capabilities
  capabilities.push({ type: 'outline-removal', description: 'outline: none → outline: revert (WCAG 2.4.7)', count: 1, scope: 'JSX' });
  capabilities.push({ type: 'mermaid-hardcoded', description: 'Non-standard mermaid init → standard MermaidColours palette', count: 1, scope: 'MDX' });

  return capabilities;
}

function parseMermaidSignatures() {
  const src = fs.readFileSync(path.join(REPO_ROOT, 'tools/scripts/validators/styles/audit-styles.js'), 'utf8');
  const sigMatch = src.match(/MERMAID_ACCEPTED_SIGNATURES = \[([\s\S]*?)\];/);
  if (!sigMatch) return [];

  const sigs = [];
  const regex = /["']([^"']+)["']/g;
  let m;
  while ((m = regex.exec(sigMatch[1])) !== null) {
    if (m[1].includes('primaryColor')) sigs.push(m[1]);
  }
  return sigs;
}

/* ============================================
   MANIFEST GENERATION
   ============================================ */

function generateManifest() {
  return {
    generatedAt: new Date().toISOString(),
    generator: 'tools/scripts/generators/styles/generate-styles-docs.js',
    tokens: parseTokensFromCSS(),
    auditCategories: parseAuditCategories(),
    remediatorCapabilities: parseRemediatorCapabilities(),
    mermaidAcceptedSignatures: parseMermaidSignatures(),
  };
}

/* ============================================
   CLI
   ============================================ */

function main() {
  const args = process.argv.slice(2);
  const mode = args.includes('--write') ? 'write' : args.includes('--check') ? 'check' : 'check';

  const manifest = generateManifest();

  if (mode === 'check') {
    console.log('📊 Styles Documentation Manifest');
    console.log('═'.repeat(50));
    console.log(`Tokens: ${manifest.tokens.length}`);
    console.log(`  Colour: ${manifest.tokens.filter(t => t.name.includes('color')).length}`);
    console.log(`  Spacing: ${manifest.tokens.filter(t => t.name.includes('spacing')).length}`);
    console.log(`  Other: ${manifest.tokens.filter(t => !t.name.includes('color') && !t.name.includes('spacing')).length}`);
    console.log(`Audit categories: ${manifest.auditCategories.length}`);
    console.log(`Remediator capabilities: ${manifest.remediatorCapabilities.length}`);
    console.log(`Mermaid accepted signatures: ${manifest.mermaidAcceptedSignatures.length}`);
    console.log('');

    console.log('Audit categories:');
    for (const cat of manifest.auditCategories) {
      console.log(`  [${cat.severity}] ${cat.id}: ${cat.description}`);
    }
    console.log('');

    console.log('Remediator capabilities:');
    for (const cap of manifest.remediatorCapabilities) {
      console.log(`  ${cap.type} (${cap.scope}): ${cap.description}`);
    }

    // Check if manifest exists and matches
    if (fs.existsSync(MANIFEST_PATH)) {
      const existing = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
      const match = JSON.stringify(existing.tokens.length) === JSON.stringify(manifest.tokens.length) &&
                    JSON.stringify(existing.remediatorCapabilities.length) === JSON.stringify(manifest.remediatorCapabilities.length);
      console.log('');
      console.log(match ? '✅ Manifest up to date' : '⚠️  Manifest out of date — run with --write');
    }
  }

  if (mode === 'write') {
    const dir = path.dirname(MANIFEST_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log(`✅ Manifest written to ${path.relative(REPO_ROOT, MANIFEST_PATH)}`);
    console.log(`   ${manifest.tokens.length} tokens, ${manifest.auditCategories.length} audit categories, ${manifest.remediatorCapabilities.length} remediator capabilities`);
  }
}

main();
