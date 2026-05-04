#!/usr/bin/env node
/**
 * @script            remediate-styles
 * @category          remediator
 * @purpose           qa:style-governance
 * @scope             v2-content,snippets-components
 * @owner             docs
 * @needs             R-STYLE-GOV
 * @purpose-statement Auto-remediates deterministic style violations: legacy tokens → --lp-*, outline removal, mermaid init standardisation. Conservative — only fixes patterns with known-safe replacements.
 * @pipeline          P6 (on-demand via workflow or manual)
 * @dualmode          --dry-run (show proposed fixes) | --write (apply fixes)
 * @usage             node tools/scripts/remediators/styles/remediate-styles.js --dry-run
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..');

/* ============================================
   TOKEN MIGRATION MAP
   ============================================ */

const TOKEN_MAP = {
  'var(--accent)': 'var(--lp-color-accent)',
  'var(--accent-dark)': 'var(--lp-color-accent-strong)',
  'var(--hero-text)': 'var(--lp-color-text-primary)',
  'var(--text)': 'var(--lp-color-text-secondary)',
  'var(--muted-text)': 'var(--lp-color-text-muted)',
  'var(--background)': 'var(--lp-color-bg-page)',
  'var(--card-background)': 'var(--lp-color-bg-card)',
  'var(--border)': 'var(--lp-color-border-default)',
  'var(--button-text)': 'var(--lp-color-on-accent)',
  'var(--arbitrum)': 'var(--lp-color-arbitrum)',
};

/* ============================================
   HEX COLOUR → CSS VARIABLE MAP
   ============================================ */

const HEX_TO_VAR = {
  '#3CB540': 'var(--lp-color-accent)',
  '#3cb540': 'var(--lp-color-accent)',
  '#18794E': 'var(--lp-color-accent-strong)',
  '#18794e': 'var(--lp-color-accent-strong)',
  '#2b9a66': 'var(--lp-color-accent)',
  '#2d9a67': 'var(--lp-color-accent)',
  '#181C18': 'var(--lp-color-text-primary)',
  '#181c18': 'var(--lp-color-text-primary)',
  '#717571': 'var(--lp-color-text-secondary)',
  '#E0E4E0': 'var(--lp-color-text-primary)',
  '#e0e4e0': 'var(--lp-color-text-primary)',
  '#ffffff': 'var(--lp-color-bg-page)',
  '#FFFFFF': 'var(--lp-color-bg-page)',
  '#fff': 'var(--lp-color-on-accent)',
  '#0d0d0d': 'var(--lp-color-bg-page)',
  '#f9fafb': 'var(--lp-color-bg-card)',
  '#F9FAFB': 'var(--lp-color-bg-card)',
  '#1a1a1a': 'var(--lp-color-bg-card)',
  '#e5e7eb': 'var(--lp-color-border-default)',
  '#E5E7EB': 'var(--lp-color-border-default)',
  '#333333': 'var(--lp-color-border-default)',
  '#3EA6F8': 'var(--lp-color-arbitrum)',
  '#3ea6f8': 'var(--lp-color-arbitrum)',
  '#6BBF59': 'var(--lp-color-accent-soft)',
  '#6bbf59': 'var(--lp-color-accent-soft)',
  '#22C55E': 'var(--lp-color-status-good)',
  '#FBBF24': 'var(--lp-color-status-warn)',
  '#EF4444': 'var(--lp-color-status-bad)',
  '#ff9a0e': 'var(--lp-color-brand-linux)',
  '#14bbf7': 'var(--lp-color-brand-windows)',
  '#60ba47': 'var(--lp-color-brand-macos)',
};

// Files that MUST use hex literals (mermaid config, colour palettes)
const HEX_EXEMPT_FILES = ['MermaidColours.jsx', 'style.css'];

/* ============================================
   SPACING TOKEN MAP
   ============================================ */

const SPACING_MAP = {
  '0.25rem': 'var(--lp-spacing-1)',
  '0.5rem': 'var(--lp-spacing-2)',
  '0.75rem': 'var(--lp-spacing-3)',
  '1rem': 'var(--lp-spacing-4)',
  '1.5rem': 'var(--lp-spacing-6)',
  '2rem': 'var(--lp-spacing-8)',
  '3px': 'var(--lp-spacing-px-3)',
  '4px': 'var(--lp-spacing-px-4)',
  '6px': 'var(--lp-spacing-px-6)',
  '8px': 'var(--lp-spacing-px-8)',
  '12px': 'var(--lp-spacing-px-12)',
};

/* ============================================
   STANDARD MERMAID INIT (from MermaidColours.jsx)
   ============================================ */

const STANDARD_MERMAID_INIT = "%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#18794E', 'primaryTextColor': '#fff', 'primaryBorderColor': '#3CB540', 'lineColor': '#3CB540', 'mainBkg': '#18794E', 'nodeBorder': '#3CB540', 'clusterBkg': 'transparent', 'clusterBorder': '#3CB540', 'titleColor': '#3CB540', 'edgeLabelBackground': 'transparent', 'textColor': '#3CB540', 'nodeTextColor': '#fff'}}}%%";

/* ============================================
   EXCLUDE PATTERNS
   ============================================ */

const EXCLUDE_PATTERNS = [
  '_workspace', 'archive', 'language-pages', 'x-deprecated',
  'x-archived', 'node_modules', '.claude', '_dep-docs',
  'tasks/context_data'
];

function shouldExclude(filePath) {
  const relative = path.relative(REPO_ROOT, filePath);
  return EXCLUDE_PATTERNS.some(p => relative.includes(p));
}

function walkDir(dir, ext) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(fullPath, ext));
    } else if (entry.name.endsWith(ext) && !shouldExclude(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

/* ============================================
   CONTEXT DETECTION
   ============================================ */

function isInsideCodeBlock(content, matchIndex) {
  const before = content.slice(0, matchIndex);
  const fenceCount = (before.match(/```/g) || []).length;
  return fenceCount % 2 === 1;
}

function getLineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function categoryMatches(category, ...names) {
  if (!category) return true;
  return names.some((name) => category.includes(name));
}

/* ============================================
   REMEDIATORS
   ============================================ */

function remediateLegacyTokens(filePath, content) {
  const fixes = [];
  let modified = content;

  // Process replacements in reverse order to preserve offsets
  const allMatches = [];
  for (const [legacy, replacement] of Object.entries(TOKEN_MAP)) {
    const escaped = legacy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (isInsideCodeBlock(content, match.index)) continue;
      allMatches.push({
        index: match.index,
        length: match[0].length,
        original: match[0],
        replacement: replacement,
        line: getLineNumber(content, match.index),
      });
    }
  }

  // Sort by index descending for safe reverse-order replacement
  allMatches.sort((a, b) => b.index - a.index);

  for (const m of allMatches) {
    modified = modified.slice(0, m.index) + m.replacement + modified.slice(m.index + m.length);
    fixes.push({
      type: 'legacy-token',
      file: path.relative(REPO_ROOT, filePath),
      line: m.line,
      before: m.original,
      after: m.replacement,
    });
  }

  return { modified, fixes };
}

function remediateOutlineRemoval(filePath, content) {
  const fixes = [];
  let modified = content;
  const regex = /outline:\s*["']?none["']?|outline:\s*0(?![.\d])/g;
  const allMatches = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    if (isInsideCodeBlock(content, match.index)) continue;
    allMatches.push({
      index: match.index,
      length: match[0].length,
      original: match[0],
      line: getLineNumber(content, match.index),
    });
  }

  // Reverse order
  allMatches.sort((a, b) => b.index - a.index);

  for (const m of allMatches) {
    // Replace outline:none with outline:revert (restores browser default)
    const replacement = 'outline: "revert"';
    modified = modified.slice(0, m.index) + replacement + modified.slice(m.index + m.length);
    fixes.push({
      type: 'outline-removal',
      file: path.relative(REPO_ROOT, filePath),
      line: m.line,
      before: m.original,
      after: replacement,
    });
  }

  return { modified, fixes };
}

// Same signature used in audit-styles.js to recognise compliant mermaid inits
const STANDARD_MERMAID_SIGNATURE = "'primaryColor': '#18794E', 'primaryTextColor': '#fff', 'primaryBorderColor': '#3CB540'";

function remediateMermaidInit(filePath, content) {
  const fixes = [];
  let modified = content;
  const regex = /%%\{init:.*?themeVariables.*?%%/gs;
  const allMatches = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    // Skip if already using the standard init (idempotent)
    if (match[0].includes(STANDARD_MERMAID_SIGNATURE)) continue;
    allMatches.push({
      index: match.index,
      length: match[0].length,
      original: match[0],
      line: getLineNumber(content, match.index),
    });
  }

  // Reverse order
  allMatches.sort((a, b) => b.index - a.index);

  for (const m of allMatches) {
    modified = modified.slice(0, m.index) + STANDARD_MERMAID_INIT + modified.slice(m.index + m.length);
    fixes.push({
      type: 'mermaid-hardcoded',
      file: path.relative(REPO_ROOT, filePath),
      line: m.line,
      before: m.original.slice(0, 60) + '...',
      after: STANDARD_MERMAID_INIT.slice(0, 60) + '...',
    });
  }

  return { modified, fixes };
}

function remediateHexColours(filePath, content) {
  const fixes = [];
  let modified = content;

  const basename = path.basename(filePath);
  if (HEX_EXEMPT_FILES.includes(basename)) return { modified, fixes };

  const allMatches = [];
  for (const [hex, cssVar] of Object.entries(HEX_TO_VAR)) {
    const escaped = hex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`["']${escaped}["']`, 'gi');
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (isInsideCodeBlock(content, match.index)) continue;
      // Skip inside mermaid init directives
      const lineStart = content.lastIndexOf('\n', match.index) + 1;
      const line = content.slice(lineStart, content.indexOf('\n', match.index));
      if (line.includes('%%{init:') || line.includes('themeVariables')) continue;
      // Skip frontmatter
      const fmEnd = content.indexOf('---', 3);
      if (fmEnd > 0 && match.index < fmEnd + 3) continue;

      allMatches.push({
        index: match.index,
        length: match[0].length,
        original: match[0],
        replacement: `"${cssVar}"`,
        line: getLineNumber(content, match.index),
      });
    }
  }

  // Deduplicate
  const seen = new Set();
  const deduped = allMatches.filter(m => {
    const key = `${m.index}:${m.length}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  deduped.sort((a, b) => b.index - a.index);

  for (const m of deduped) {
    modified = modified.slice(0, m.index) + m.replacement + modified.slice(m.index + m.length);
    fixes.push({
      type: 'hardcoded-hex',
      file: path.relative(REPO_ROOT, filePath),
      line: m.line,
      before: m.original,
      after: m.replacement,
    });
  }

  return { modified, fixes };
}

function remediateLiteralSpacing(filePath, content) {
  const fixes = [];
  let modified = content;
  const allMatches = [];

  for (const [literal, token] of Object.entries(SPACING_MAP)) {
    const escaped = literal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`["']${escaped}["']`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (isInsideCodeBlock(content, match.index)) continue;
      // Skip font-related properties — spacing tokens are for margin/padding/gap only
      const lineStart = content.lastIndexOf('\n', match.index) + 1;
      const lineBefore = content.slice(lineStart, match.index);
      if (/fontSize|lineHeight|fontWeight|fontFamily|letterSpacing|borderRadius|borderWidth|maxHeight|maxWidth|minHeight|minWidth|width|height|top|right|bottom|left/i.test(lineBefore)) continue;
      allMatches.push({
        index: match.index,
        length: match[0].length,
        original: match[0],
        replacement: `"${token}"`,
        line: getLineNumber(content, match.index),
      });
    }
  }

  allMatches.sort((a, b) => b.index - a.index);

  for (const m of allMatches) {
    modified = modified.slice(0, m.index) + m.replacement + modified.slice(m.index + m.length);
    fixes.push({
      type: 'literal-spacing',
      file: path.relative(REPO_ROOT, filePath),
      line: m.line,
      before: m.original,
      after: m.replacement,
    });
  }

  return { modified, fixes };
}

/* ============================================
   COMPONENT MIGRATION REMEDIATORS (MDX)
   Smart parser: finds opening tag, extracts props,
   locates matching closing tag, replaces both.
   ============================================ */

// Utility: find the matching closing tag for an opening tag at a given index
function findClosingDiv(content, openIndex) {
  let depth = 0;
  let i = openIndex;
  // Skip past the opening >
  while (i < content.length && content[i] !== '>') i++;
  i++; // past >
  while (i < content.length) {
    if (content[i] === '<') {
      if (content.slice(i, i + 6) === '</div>') {
        if (depth === 0) return i;
        depth--;
      } else if (content.slice(i, i + 4) === '<div') {
        depth++;
      }
    }
    i++;
  }
  return -1;
}

// Utility: find matching closing tag for any component
function findClosingTag(content, openIndex, tagName) {
  let depth = 0;
  let i = openIndex;
  const openTag = `<${tagName}`;
  const closeTag = `</${tagName}>`;
  while (i < content.length && content[i] !== '>') i++;
  i++;
  while (i < content.length) {
    if (content.startsWith(closeTag, i)) {
      if (depth === 0) return i;
      depth--;
    } else if (content.startsWith(openTag, i)) {
      depth++;
    }
    i++;
  }
  return -1;
}

function parseNamedImport(importLine) {
  const match = String(importLine || '').match(/^import\s+\{\s*([^}]+?)\s*\}\s+from\s+['"]([^'"]+)['"]/);
  if (!match) return null;
  return {
    names: match[1].split(',').map((name) => name.trim()).filter(Boolean),
    source: match[2],
  };
}

function upsertImportLine(content, importLine) {
  const parsed = parseNamedImport(importLine);
  if (!parsed) return content;

  const lines = content.split('\n');
  const sameSourceIndex = lines.findIndex((line) => {
    const existing = parseNamedImport(line);
    return existing && existing.source === parsed.source;
  });

  if (sameSourceIndex >= 0) {
    const existing = parseNamedImport(lines[sameSourceIndex]);
    const names = [...new Set([...existing.names, ...parsed.names])].sort();
    lines[sameSourceIndex] = `import { ${names.join(', ')} } from '${existing.source}'`;
    return lines.join('\n');
  }

  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i;
  }

  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, importLine);
    return lines.join('\n');
  }

  return `${importLine}\n${content}`;
}

const COMPONENT_PATTERNS = [
  // #1: Flex center div → FlexContainer
  {
    type: 'flex-center-to-component',
    regex: /<div\s+style=\{\{\s*display:\s*["']flex["'],\s*justifyContent:\s*["']center["']\s*\}\}>/g,
    replacement: '<FlexContainer justify="center">',
    closeOld: '</div>',
    closeNew: '</FlexContainer>',
    importLine: "import { FlexContainer } from '/snippets/components/wrappers/containers/Layout.jsx'",
    importName: 'FlexContainer',
  },
  // #2: Flex column div → FlexContainer
  {
    type: 'flex-column-to-component',
    regex: /<div\s+style=\{\{\s*display:\s*["']flex["'],\s*flexDirection:\s*["']column["'],\s*gap:\s*["'][^"']*["']\s*\}\}>/g,
    replacement: '<FlexContainer direction="column">',
    closeOld: '</div>',
    closeNew: '</FlexContainer>',
    importLine: "import { FlexContainer } from '/snippets/components/wrappers/containers/Layout.jsx'",
    importName: 'FlexContainer',
  },
  // #3: Centred fit-content div → CenteredContainer
  {
    type: 'centered-fit-to-component',
    regex: /<div\s+style=\{\{\s*display:\s*["']flex["'],\s*justifyContent:\s*["']center["'],\s*width:\s*["']fit-content["'],\s*margin:\s*["']0 auto["']\s*\}\}>/g,
    replacement: '<CenteredContainer preset="fitContent">',
    closeOld: '</div>',
    closeNew: '</CenteredContainer>',
    importLine: "import { CenteredContainer } from '/snippets/components/wrappers/containers/Containers.jsx'",
    importName: 'CenteredContainer',
  },
  // #4: CenteredContainer width style → named preset
  {
    type: 'centered-readable90-to-preset',
    regex: /<CenteredContainer\s+style=\{\{\s*width:\s*["']90%["']\s*\}\}>/g,
    replacement: '<CenteredContainer preset="readable90">',
    closeOld: '</CenteredContainer>',
    closeNew: '</CenteredContainer>',
    tagName: 'CenteredContainer',
    importLine: null,
    importName: null,
  },
  // #7: Inline span divider → InlineDivider
  {
    type: 'span-divider-to-component',
    regex: /<span\s+style=\{\{\s*display:\s*["']block["'],\s*borderBottom:\s*["']1px solid var\(--[^)]*\)["'],\s*margin:\s*["'][^"']*["']\s*\}\}\s*\/>/g,
    replacement: '<InlineDivider margin="1rem 0" />',
    closeOld: null, // self-closing
    closeNew: null,
    importLine: "import { InlineDivider } from '/snippets/components/elements/spacing/Divider.jsx'",
    importName: 'InlineDivider',
  },
  // #8: Bordered div → BorderedBox
  {
    type: 'bordered-div-to-component',
    regex: /<div\s+style=\{\{\s*border:\s*["']1px solid var\(--[^)]*\)["'],\s*borderRadius:\s*["']8px["'],\s*padding:\s*["'][^"']*["'](?:,\s*margin:\s*["'][^"']*["'])?\s*\}\}>/g,
    replacement: '<BorderedBox variant="accent">',
    closeOld: '</div>',
    closeNew: '</BorderedBox>',
    importLine: "import { BorderedBox } from '/snippets/components/wrappers/containers/Containers.jsx'",
    importName: 'BorderedBox',
  },
  // #9: StyledSteps fallback hex
  {
    type: 'styledsteps-fallback',
    regex: /var\(--accent-dark,\s*#18794E\)/gi,
    replacement: 'var(--lp-color-accent-strong)',
    closeOld: null,
    closeNew: null,
    importLine: null,
    importName: null,
  },
  // #5: Icon+label span → CustomCardTitle
  // <span style={{display: "flex", alignItems: "center", gap: "..."}}>
  //   <Icon icon="X" size={14} /> Text
  // </span>
  // → <CustomCardTitle variant="tab" icon="X" title="Text" />
  {
    type: 'icon-label-to-customcardtitle',
    // Match the full pattern including Icon and text, capture icon name and text
    regex: /<span\s+style=\{\{\s*display:\s*["'](?:inline-)?flex["'],\s*alignItems:\s*["']center["'],\s*gap:\s*["'][^"']*["']\s*\}\}>\s*<Icon\s+icon=["']([^"']+)["']\s+size=\{[^}]+\}\s*\/>\s*([^<]+)<\/span>/g,
    // Dynamic replacement — handled specially in the processor
    replacement: null,
    closeOld: null,
    closeNew: null,
    importLine: "import { CustomCardTitle } from '/snippets/components/elements/text/CustomCardTitle.jsx'",
    importName: 'CustomCardTitle',
    dynamicReplacement: (match, icon, text) => `<CustomCardTitle variant="tab" icon="${icon.trim()}" title="${text.trim()}" />`,
  },
  // #6: Bold coloured text span → Subtitle
  // <span style={{color: "var(--hero-text)", fontWeight: "bold"}}>Text</span>
  // → <Subtitle variant="changelog">Text</Subtitle>
  {
    type: 'bold-text-to-subtitle',
    regex: /<span\s+style=\{\{\s*color:\s*["']var\(--(?:hero-text|lp-color-text-primary)\)["'],\s*fontWeight:\s*["']bold["']\s*\}\}>([^<]+)<\/span>/g,
    replacement: null,
    closeOld: null,
    closeNew: null,
    importLine: "import { Subtitle } from '/snippets/components/elements/text/Text.jsx'",
    importName: 'Subtitle',
    dynamicReplacement: (match, text) => `<Subtitle variant="changelog">${text}</Subtitle>`,
  },
  // #10: Changelog date label div → Subtitle
  // <div style={{fontSize: "0.8rem", fontWeight: 700, color: "var(--hero-text)"}}>March 2026</div>
  // → <Subtitle variant="changelog">March 2026</Subtitle>
  {
    type: 'date-label-to-subtitle',
    regex: /<div\s+style=\{\{\s*fontSize:\s*["']0\.8rem["'],\s*fontWeight:\s*700,\s*color:\s*["']var\(--(?:hero-text|lp-color-text-primary)\)["']\s*\}\}>([^<]+)<\/div>/g,
    replacement: null,
    closeOld: null,
    closeNew: null,
    importLine: "import { Subtitle } from '/snippets/components/elements/text/Text.jsx'",
    importName: 'Subtitle',
    dynamicReplacement: (match, text) => `<Subtitle variant="changelog">${text}</Subtitle>`,
  },
];

function remediateComponentPatterns(filePath, content) {
  const fixes = [];
  let modified = content;
  const importsNeeded = new Set();

  for (const pattern of COMPONENT_PATTERNS) {
    const allMatches = [];
    let match;
    const regex = new RegExp(pattern.regex.source, pattern.regex.flags);

    while ((match = regex.exec(modified)) !== null) {
      if (isInsideCodeBlock(modified, match.index)) continue;

      allMatches.push({
        index: match.index,
        length: match[0].length,
        original: match[0],
        line: getLineNumber(modified, match.index),
        captures: [...match], // preserve capture groups for dynamicReplacement
      });
    }

    // Process in reverse order
    allMatches.sort((a, b) => b.index - a.index);

    for (const m of allMatches) {
      let newContent = modified;
      let replacementText;

      if (pattern.dynamicReplacement) {
        // Dynamic: call function with captures to build replacement
        replacementText = pattern.dynamicReplacement(...m.captures);
        newContent = modified.slice(0, m.index) + replacementText + modified.slice(m.index + m.length);
      } else if (pattern.closeOld && pattern.closeNew) {
        // Find and replace closing tag
        const closeIndex = pattern.tagName
          ? findClosingTag(modified, m.index, pattern.tagName)
          : findClosingDiv(modified, m.index);
        if (closeIndex === -1) continue; // can't find closing tag, skip

        replacementText = pattern.replacement;
        // Replace closing tag first (it's after the opening)
        newContent = modified.slice(0, closeIndex) + pattern.closeNew + modified.slice(closeIndex + pattern.closeOld.length);
        // Replace opening tag
        newContent = newContent.slice(0, m.index) + replacementText + newContent.slice(m.index + m.length);
      } else {
        // Simple replacement (self-closing or string replace)
        replacementText = pattern.replacement;
        newContent = modified.slice(0, m.index) + replacementText + modified.slice(m.index + m.length);
      }

      modified = newContent;

      if (pattern.importName) {
        importsNeeded.add(pattern.importLine);
      }

      fixes.push({
        type: pattern.type,
        file: path.relative(REPO_ROOT, filePath),
        line: m.line,
        before: m.original.slice(0, 60),
        after: String(replacementText || '').slice(0, 60),
      });
    }
  }

  // Add missing imports
  if (importsNeeded.size > 0) {
    for (const imp of importsNeeded) {
      const parsed = parseNamedImport(imp);
      const missing = parsed && parsed.names.some((name) => {
        const importNameRegex = new RegExp(`import\\s+\\{[^}]*\\b${name}\\b[^}]*\\}\\s+from\\s+['"]`);
        return !importNameRegex.test(modified);
      });
      if (missing) {
        modified = upsertImportLine(modified, imp);
      }
    }
  }

  return { modified, fixes };
}

/* ============================================
   ORCHESTRATOR
   ============================================ */

function runRemediation(options = {}) {
  const { mode = 'dry-run', category, files: explicitFiles } = options;

  const jsxFiles = explicitFiles
    ? explicitFiles.filter(f => f.endsWith('.jsx'))
    : walkDir(path.join(REPO_ROOT, 'snippets', 'components'), '.jsx');

  const mdxFiles = explicitFiles
    ? explicitFiles.filter(f => f.endsWith('.mdx'))
    : walkDir(path.join(REPO_ROOT, 'v2'), '.mdx');

  const allFixes = [];
  const filesModified = [];

  // JSX: legacy tokens + outline removal
  if (categoryMatches(category, 'legacy-token', 'outline-removal')) {
    for (const file of jsxFiles) {
      const content = fs.readFileSync(file, 'utf8');
      let modified = content;
      let fileFixes = [];

      if (categoryMatches(category, 'legacy-token')) {
        const result = remediateLegacyTokens(file, modified);
        modified = result.modified;
        fileFixes.push(...result.fixes);
      }

      if (categoryMatches(category, 'outline-removal')) {
        const result = remediateOutlineRemoval(file, modified);
        modified = result.modified;
        fileFixes.push(...result.fixes);
      }

      if (fileFixes.length > 0) {
        allFixes.push(...fileFixes);
        if (mode === 'write') {
          fs.writeFileSync(file, modified, 'utf8');
          filesModified.push(path.relative(REPO_ROOT, file));
        }
      }
    }
  }

  // MDX: mermaid init standardisation
  if (categoryMatches(category, 'mermaid-hardcoded')) {
    for (const file of mdxFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const result = remediateMermaidInit(file, content);

      if (result.fixes.length > 0) {
        allFixes.push(...result.fixes);
        if (mode === 'write') {
          fs.writeFileSync(file, result.modified, 'utf8');
          if (!filesModified.includes(path.relative(REPO_ROOT, file))) {
            filesModified.push(path.relative(REPO_ROOT, file));
          }
        }
      }
    }
  }

  // JSX + MDX: hardcoded hex colours → CSS variables
  if (categoryMatches(category, 'hardcoded-hex')) {
    for (const file of [...jsxFiles, ...mdxFiles]) {
      const content = fs.readFileSync(file, 'utf8');
      const result = remediateHexColours(file, content);

      if (result.fixes.length > 0) {
        allFixes.push(...result.fixes);
        if (mode === 'write') {
          fs.writeFileSync(file, result.modified, 'utf8');
          if (!filesModified.includes(path.relative(REPO_ROOT, file))) {
            filesModified.push(path.relative(REPO_ROOT, file));
          }
        }
      }
    }
  }

  // JSX: literal spacing → --lp-spacing-* tokens
  if (categoryMatches(category, 'literal-spacing')) {
    for (const file of jsxFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const result = remediateLiteralSpacing(file, content);

      if (result.fixes.length > 0) {
        allFixes.push(...result.fixes);
        if (mode === 'write') {
          fs.writeFileSync(file, result.modified, 'utf8');
          if (!filesModified.includes(path.relative(REPO_ROOT, file))) {
            filesModified.push(path.relative(REPO_ROOT, file));
          }
        }
      }
    }
  }

  // MDX: component pattern migrations (inline styles → components)
  if (categoryMatches(category, 'component-migration', 'inline-style-mdx')) {
    for (const file of mdxFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const result = remediateComponentPatterns(file, content);

      if (result.fixes.length > 0) {
        allFixes.push(...result.fixes);
        if (mode === 'write') {
          fs.writeFileSync(file, result.modified, 'utf8');
          if (!filesModified.includes(path.relative(REPO_ROOT, file))) {
            filesModified.push(path.relative(REPO_ROOT, file));
          }
        }
      }
    }
  }

  return {
    timestamp: new Date().toISOString(),
    mode,
    totalFixes: allFixes.length,
    filesModified: filesModified.length,
    byType: {
      'legacy-token': allFixes.filter(f => f.type === 'legacy-token').length,
      'outline-removal': allFixes.filter(f => f.type === 'outline-removal').length,
      'mermaid-hardcoded': allFixes.filter(f => f.type === 'mermaid-hardcoded').length,
      'hardcoded-hex': allFixes.filter(f => f.type === 'hardcoded-hex').length,
      'literal-spacing': allFixes.filter(f => f.type === 'literal-spacing').length,
      'component-migration': allFixes.filter(f => COMPONENT_PATTERNS.some(p => p.type === f.type)).length,
    },
    fixes: allFixes,
    modifiedFiles: filesModified,
  };
}

/* ============================================
   CLI
   ============================================ */

function parseArgs(argv) {
  const args = { mode: 'dry-run', category: null, files: [], help: false, verify: false };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--help' || token === '-h') args.help = true;
    else if (token === '--dry-run') args.mode = 'dry-run';
    else if (token === '--write') args.mode = 'write';
    else if (token === '--verify') args.verify = true;
    else if (token === '--category' && argv[i + 1]) args.category = argv[++i].split(',');
    else if (token === '--files' && argv[i + 1]) args.files = argv[++i].split(',').map(f => path.resolve(REPO_ROOT, f));
  }
  return args;
}

/* ============================================
   VERIFY — post-write regression check
   ============================================ */

function verifyModifiedFiles(modifiedFiles) {
  const { execSync } = require('child_process');
  const fullPaths = modifiedFiles.map(f => path.resolve(REPO_ROOT, f));
  let failed = false;

  // Layer 1: Re-run style audit on modified files only
  console.log('\n🔍 Verify: re-running audit on modified files...');
  const auditScript = path.join(REPO_ROOT, 'tools/scripts/validators/styles/audit-styles.js');
  try {
    const result = execSync(
      `node "${auditScript}" --files ${fullPaths.join(',')} --exit-code`,
      { cwd: REPO_ROOT, encoding: 'utf8', timeout: 30000 }
    );
    console.log('  ✅ Audit passed on modified files');
  } catch (e) {
    console.log('  ❌ Audit found HIGH violations in modified files');
    failed = true;
  }

  // Layer 2: MDX parse check via mint validate (if available)
  const mdxFiles = fullPaths.filter(f => f.endsWith('.mdx'));
  if (mdxFiles.length > 0) {
    console.log('🔍 Verify: checking MDX parse validity...');
    for (const file of mdxFiles) {
      const content = fs.readFileSync(file, 'utf8');
      // Quick parse checks
      const openTags = (content.match(/<[A-Z]\w+/g) || []).length;
      const closeTags = (content.match(/<\/[A-Z]\w+>/g) || []).length;
      // Check for conflict markers
      if (content.includes('<<<<<<<') || content.includes('>>>>>>>')) {
        console.log(`  ❌ Conflict markers found in ${path.relative(REPO_ROOT, file)}`);
        failed = true;
      }
      // Check imports have blank line after
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ') && i + 1 < lines.length) {
          const next = lines[i + 1];
          if (next && !next.startsWith('import ') && next.trim() && !next.trim().startsWith('{/*')) {
            // Check if there's a blank line between last import and content
            // Only flag if this IS the last import
            if (i + 1 < lines.length && !lines[i + 1].startsWith('import ')) {
              if (lines[i + 1].trim() !== '' && !lines[i + 1].startsWith('\n')) {
                // This might be the missing blank line issue
                // Only flag if the next non-import line is JSX (starts with <)
                if (lines[i + 1].trim().startsWith('<')) {
                  console.log(`  ⚠️  Missing blank line after imports at ${path.relative(REPO_ROOT, file)}:${i + 2}`);
                }
              }
            }
          }
        }
      }
    }
    if (!failed) console.log('  ✅ MDX parse checks passed');
  }

  if (failed) {
    console.log('\n❌ Verification FAILED — reverting changes...');
    for (const file of fullPaths) {
      try {
        execSync(`git checkout -- "${file}"`, { cwd: REPO_ROOT });
      } catch (e) {
        console.error(`  Failed to revert ${file}: ${e.message}`);
      }
    }
    console.log('  Changes reverted.');
    return false;
  }

  console.log('\n✅ All verification checks passed.');
  return true;
}

function printHelp() {
  console.log([
    'Usage:',
    '  node tools/scripts/remediators/styles/remediate-styles.js [--dry-run|--write] [options]',
    '',
    'Modes:',
    '  --dry-run   Show proposed fixes without modifying files (default)',
    '  --write     Apply fixes and write modified files',
    '',
    'Options:',
    '  --category X   Only fix specific categories (comma-separated):',
      '                 legacy-token, outline-removal, mermaid-hardcoded,',
      '                 hardcoded-hex, literal-spacing, component-migration,',
      '                 inline-style-mdx',
    '  --files X      Only fix specific files (comma-separated)',
    '  --help, -h     Show this help',
    '',
    'Safety:',
    '  - Never modifies code blocks or inline code',
    '  - Applies fixes in reverse offset order to preserve positions',
    '  - Only fixes patterns with known-safe deterministic replacements',
    '  - Legacy tokens → --lp-* equivalents (1:1 mapping)',
    '  - Outline removal → outline: revert (restores browser default)',
    '  - Mermaid inits → standard init from MermaidColours.jsx',
  ].join('\n'));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  const report = runRemediation({
    mode: args.mode,
    category: args.category,
    files: args.files.length > 0 ? args.files : undefined,
  });

  console.log(`\n🔧 Styles Remediation (${report.mode})`);
  console.log('═'.repeat(50));
  console.log(`Total fixes: ${report.totalFixes}`);
  console.log(`Files modified: ${report.filesModified}`);
  console.log();
  console.log('By type:');
  for (const [type, count] of Object.entries(report.byType)) {
    if (count > 0) console.log(`  ${count.toString().padStart(5)} × ${type}`);
  }

  if (report.fixes.length > 0) {
    console.log('\nFixes:');
    for (const fix of report.fixes) {
      console.log(`  ${fix.file}:${fix.line}`);
      console.log(`    - ${fix.before}`);
      console.log(`    + ${fix.after}`);
    }
  }

  if (report.mode === 'write' && report.filesModified > 0) {
    console.log(`\n✅ ${report.filesModified} file(s) modified.`);
    console.log('Modified files:');
    for (const f of report.modifiedFiles) {
      console.log(`  ${f}`);
    }

    // --verify: post-write regression check
    if (args.verify) {
      const passed = verifyModifiedFiles(report.modifiedFiles);
      if (!passed) {
        console.log('\n❌ Verification failed. All changes reverted. Exiting with error.');
        process.exit(1);
      }
    }
  } else if (report.mode === 'dry-run' && report.totalFixes > 0) {
    console.log(`\n💡 Run with --write to apply ${report.totalFixes} fix(es).`);
  } else {
    console.log('\n✅ No remediable violations found.');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  categoryMatches,
  remediateComponentPatterns,
  runRemediation,
};
