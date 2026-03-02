#!/usr/bin/env node
/**
 * @script generate-docs-guide-components-index
 * @summary Generate component inventory indexes from snippets/components exports and optionally verify freshness.
 * @owner docs
 * @scope tools/scripts, docs-guide/indexes/components-index.mdx, v2/resources/documentation-guide/component-library/overview.mdx, snippets/components
 *
 * @usage
 *   node tools/scripts/generate-docs-guide-components-index.js --write
 *
 * @inputs
 *   --write Write generated components index file (default behavior when --check is not set).
 *   --check Verify generated components index file is current without writing.
 *
 * @outputs
 *   - docs-guide/indexes/components-index.mdx
 *   - v2/resources/documentation-guide/component-library/overview.mdx
 *
 * @exit-codes
 *   0 = generation/check succeeded
 *   1 = generation/check failed
 *
 * @examples
 *   node tools/scripts/generate-docs-guide-components-index.js --write
 *   node tools/scripts/generate-docs-guide-components-index.js --check
 *
 * @notes
 *   Output intentionally uses Mintlify AccordionGroup + ResponseField patterns and a searchable lookup table.
 */

const fs = require('fs');
const path = require('path');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

const REPO_ROOT = process.cwd();
const SOURCE_ROOT = 'snippets/components';
const OUTPUT_PATHS = [
  'docs-guide/indexes/components-index.mdx',
  'v2/resources/documentation-guide/component-library/overview.mdx'
];

const CATEGORIES = [
  {
    key: 'content',
    title: 'Content',
    description: 'Content components provide code, data, and response-format helpers for documentation pages.'
  },
  {
    key: 'display',
    title: 'Display',
    description: 'Display components handle media, embeds, quotes, and visual presentation patterns.'
  },
  {
    key: 'domain',
    title: 'Domain',
    description: 'Domain components package feature-specific UI blocks used by dedicated documentation domains.'
  },
  {
    key: 'integrations',
    title: 'Integrations',
    description: 'Integration components connect docs pages to external APIs and third-party datasets.'
  },
  {
    key: 'layout',
    title: 'Layout',
    description: 'Layout components provide reusable structure primitives for organizing page content.'
  },
  {
    key: 'primitives',
    title: 'Primitives',
    description: 'Primitive components are foundational UI building blocks reused across the docs system.'
  }
];

const FRONTMATTER_LINES = buildGeneratedFrontmatterLines({
  title: 'Components Index',
  sidebarTitle: 'Components Index',
  description: 'Aggregate inventory of repository components from snippets/components, generated for docs-guide maintenance.',
  keywords: ['livepeer', 'components index', 'aggregate inventory', 'repository', 'snippets']
});

const GENERATED_DETAILS = {
  script: 'tools/scripts/generate-docs-guide-components-index.js',
  purpose: 'Aggregate inventory of repository components from snippets/components for docs-guide maintenance.',
  runWhen: 'Components are added, removed, renamed, or their exported signatures change under `snippets/components`.',
  runCommand: 'node tools/scripts/generate-docs-guide-components-index.js --write'
};

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/').replace(/^\.?\//, '');
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_err) {
    return '';
  }
}

function sortAlpha(values) {
  return [...values].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeJsxAttribute(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function escapeJsString(value) {
  return String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ');
}

function escapeMdInline(value) {
  return String(value || '').replace(/`/g, '\\`');
}

function splitTopLevel(input, separator = ',') {
  const parts = [];
  let current = '';
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let quote = null;
  let escaped = false;

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];

    if (quote) {
      current += ch;
      if (!escaped && ch === '\\') {
        escaped = true;
      } else if (!escaped && ch === quote) {
        quote = null;
      } else {
        escaped = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      current += ch;
      continue;
    }

    if (ch === '(') depthParen += 1;
    else if (ch === ')') depthParen = Math.max(0, depthParen - 1);
    else if (ch === '{') depthBrace += 1;
    else if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);
    else if (ch === '[') depthBracket += 1;
    else if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);

    if (ch === separator && depthParen === 0 && depthBrace === 0 && depthBracket === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }

    current += ch;
  }

  if (current.trim()) {
    parts.push(current.trim());
  }

  return parts;
}

function splitTopLevelOnce(input, separator) {
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let quote = null;
  let escaped = false;

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];

    if (quote) {
      if (!escaped && ch === '\\') {
        escaped = true;
      } else if (!escaped && ch === quote) {
        quote = null;
      } else {
        escaped = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }

    if (ch === '(') depthParen += 1;
    else if (ch === ')') depthParen = Math.max(0, depthParen - 1);
    else if (ch === '{') depthBrace += 1;
    else if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);
    else if (ch === '[') depthBracket += 1;
    else if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);

    if (ch === separator && depthParen === 0 && depthBrace === 0 && depthBracket === 0) {
      return [input.slice(0, i), input.slice(i + 1)];
    }
  }

  return [input, ''];
}

function stripComments(value) {
  return String(value || '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .trim();
}

function stripCodeComments(value) {
  return String(value || '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '');
}

function compactWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function truncateText(value, limit = 90) {
  const text = compactWhitespace(value);
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 3)}...`;
}

function walkCategoryFiles(categoryKey) {
  const categoryRoot = path.join(REPO_ROOT, SOURCE_ROOT, categoryKey);
  if (!fs.existsSync(categoryRoot) || !fs.statSync(categoryRoot).isDirectory()) {
    return [];
  }

  const files = [];

  function walk(absDir) {
    const entries = fs.readdirSync(absDir, { withFileTypes: true });
    entries.forEach((entry) => {
      const absPath = path.join(absDir, entry.name);
      const relPath = normalizeRepoPath(path.relative(path.join(REPO_ROOT, SOURCE_ROOT), absPath));
      const lowerName = entry.name.toLowerCase();

      if (entry.isDirectory()) {
        if (lowerName === 'examples') return;
        walk(absPath);
        return;
      }

      if (!entry.isFile()) return;
      if (lowerName === 'readme.md') return;
      if (!/\.(jsx|mdx)$/i.test(lowerName)) return;
      if (relPath.includes('/examples/')) return;

      files.push(relPath);
    });
  }

  walk(categoryRoot);
  return sortAlpha(files);
}

function getDeclarationParams(content, localName) {
  const escapedName = escapeRegExp(localName);
  const patterns = [
    new RegExp(`(?:^|\\n)\\s*(?:export\\s+)?(?:default\\s+)?function\\s+${escapedName}\\s*\\(([\\s\\S]*?)\\)\\s*\\{`, 'm'),
    new RegExp(
      `(?:^|\\n)\\s*(?:export\\s+)?(?:const|let|var)\\s+${escapedName}\\s*=\\s*(?:async\\s*)?\\(([\\s\\S]*?)\\)\\s*=>`,
      'm'
    ),
    new RegExp(
      `(?:^|\\n)\\s*(?:export\\s+)?(?:const|let|var)\\s+${escapedName}\\s*=\\s*(?:async\\s*)?([A-Za-z_$][\\w$]*)\\s*=>`,
      'm'
    ),
    new RegExp(
      `(?:^|\\n)\\s*(?:export\\s+)?(?:const|let|var)\\s+${escapedName}\\s*=\\s*(?:async\\s*)?function(?:\\s+[A-Za-z_$][\\w$]*)?\\s*\\(([\\s\\S]*?)\\)`,
      'm'
    )
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) {
      return compactWhitespace(match[1] || '');
    }
  }

  return '';
}

function extractPropsFromParams(paramsText) {
  const raw = compactWhitespace(paramsText);
  if (!raw) return [];

  if (raw.startsWith('{')) {
    const braceCloseIdx = raw.lastIndexOf('}');
    if (braceCloseIdx > 0) {
      const body = raw.slice(1, braceCloseIdx).trim();
      if (!body) return [];

      return splitTopLevel(body, ',')
        .map((entry) => {
          const cleaned = stripComments(entry).trim();
          if (!cleaned || cleaned.startsWith('...')) return null;

          const [leftRaw, rightRaw] = splitTopLevelOnce(cleaned, '=');
          const left = leftRaw.trim();
          const defaultValue = rightRaw.trim() || null;

          const [propToken] = splitTopLevelOnce(left, ':');
          const propName = propToken.trim().replace(/^['"]|['"]$/g, '');
          if (!propName) return null;
          if (propName.startsWith('{') || propName.startsWith('[')) return null;
          return { name: propName, defaultValue };
        })
        .filter(Boolean);
    }
  }

  return splitTopLevel(raw, ',')
    .map((entry) => {
      const cleaned = stripComments(entry).trim();
      if (!cleaned || cleaned.startsWith('...')) return null;

      const [leftRaw, rightRaw] = splitTopLevelOnce(cleaned, '=');
      const name = leftRaw.trim();
      if (!name || !/^[A-Za-z_$][\w$]*$/.test(name)) return null;
      return { name, defaultValue: rightRaw.trim() || null };
    })
    .filter(Boolean);
}

function parseExportMap(content) {
  const scanContent = stripCodeComments(content);
  const exportMap = new Map();

  const inlineExportRegex = /^\s*export\s+(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)\b/gm;
  let match = inlineExportRegex.exec(scanContent);
  while (match) {
    exportMap.set(match[1], { localName: match[1] });
    match = inlineExportRegex.exec(scanContent);
  }

  const namedDefaultRegex = /^\s*export\s+default\s+function\s+([A-Za-z_$][\w$]*)\b/gm;
  match = namedDefaultRegex.exec(scanContent);
  while (match) {
    exportMap.set(match[1], { localName: match[1] });
    match = namedDefaultRegex.exec(scanContent);
  }

  const exportListRegex = /export\s*{\s*([\s\S]*?)\s*}\s*;?/gm;
  match = exportListRegex.exec(scanContent);
  while (match) {
    const body = stripComments(match[1]);
    splitTopLevel(body, ',').forEach((item) => {
      const cleaned = stripComments(item);
      if (!cleaned) return;

      const aliasMatch = cleaned.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (aliasMatch) {
        exportMap.set(aliasMatch[2], { localName: aliasMatch[1] });
      } else if (/^[A-Za-z_$][\w$]*$/.test(cleaned)) {
        exportMap.set(cleaned, { localName: cleaned });
      }
    });

    match = exportListRegex.exec(scanContent);
  }

  return exportMap;
}

function buildComponentEntries(repoPath) {
  const content = readFileSafe(repoPath);
  const exportMap = parseExportMap(content);

  const components = sortAlpha([...exportMap.keys()])
    .filter((name) => /^[A-Z][A-Za-z0-9_]*$/.test(name))
    .map((name) => {
      const localName = exportMap.get(name).localName;
      const params = getDeclarationParams(content, localName);
      const props = extractPropsFromParams(params);
      return {
        name,
        localName,
        params,
        props
      };
    });

  return components;
}

function formatPropsSummary(props) {
  if (!props.length) {
    return {
      propsLine: 'No explicit props detected from signature.',
      defaultsLine: 'No explicit defaults detected.'
    };
  }

  const names = props.map((prop) => `\`${escapeMdInline(prop.name)}\``).join(', ');
  const defaults = props
    .filter((prop) => prop.defaultValue != null)
    .map((prop) => `\`${escapeMdInline(prop.name)}=${escapeMdInline(truncateText(prop.defaultValue))}\``)
    .join(', ');

  return {
    propsLine: names,
    defaultsLine: defaults || 'None'
  };
}

function normalizeDefaultForLookup(defaultValue) {
  const value = compactWhitespace(String(defaultValue || ''));
  if (!value) return '""';

  const quotedMatch = value.match(/^(['"`])([\s\S]*)\1$/);
  if (quotedMatch) {
    return `"${quotedMatch[2].replace(/"/g, '\\"')}"`;
  }

  return truncateText(value, 36);
}

function buildLookupPropsList(props) {
  const usageProps = props.filter((prop) => /^[A-Za-z_$][\w$]*$/.test(prop.name));
  if (!usageProps.length) return 'none';

  return usageProps
    .map((prop) => {
      if (prop.defaultValue != null) {
        return `${prop.name}=${normalizeDefaultForLookup(prop.defaultValue)}`;
      }
      return prop.name;
    })
    .join(', ');
}

function buildUsageSnippet(componentName, props) {
  const lines = [];
  const usageProps = props.filter((prop) => /^[A-Za-z_$][\w$]*$/.test(prop.name) && prop.name !== 'children');

  if (!usageProps.length) {
    lines.push(`<${componentName} />`);
    return lines;
  }

  function inferPlaceholderValue(name) {
    const key = String(name || '').toLowerCase();
    if (/^(is|has|can)[a-z]/.test(name) || /(enabled|disabled|loading|visible|open|required|active)/.test(key)) {
      return 'false';
    }
    if (/(count|size|limit|width|height|duration|index|page|offset|amount|num)/.test(key)) {
      return '0';
    }
    if (/(items|list|array|rows|columns|tabs)/.test(key)) {
      return '[]';
    }
    if (/(style|config|options|map|fields|props|data|meta)/.test(key)) {
      return '{}';
    }
    return '"<value>"';
  }

  lines.push(`<${componentName}`);
  usageProps.forEach((prop) => {
    const value = prop.defaultValue != null ? truncateText(prop.defaultValue, 120) : inferPlaceholderValue(prop.name);
    lines.push(`  ${prop.name}={${value}}`);
  });
  lines.push('/>');
  return lines;
}

function indentLines(lines, spaces) {
  const pad = ' '.repeat(spaces);
  return lines.map((line) => `${pad}${line}`);
}

function serializeLookupRows(rows) {
  if (!rows.length) return '[]';
  const lines = ['['];
  rows.forEach((row) => {
    lines.push(
      `    { Category: "${escapeJsString(row.Category)}", Page: "${escapeJsString(row.Page)}", Component: "${escapeJsString(row.Component)}", Props: "${escapeJsString(row.Props)}" },`
    );
  });
  lines.push('  ]');
  return lines.join('\n');
}

function buildInventory() {
  const inventory = [];

  CATEGORIES.forEach((category) => {
    const files = walkCategoryFiles(category.key).map((repoPath) => {
      const components = buildComponentEntries(path.posix.join(SOURCE_ROOT, repoPath));
      return {
        repoPath,
        title: repoPath.slice(`${category.key}/`.length),
        components
      };
    });

    inventory.push({ ...category, files });
  });

  return inventory;
}

function buildContent() {
  const inventory = buildInventory();
  const lookupRows = [];

  const lines = [...FRONTMATTER_LINES, ''];
  lines.push('import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";');
  lines.push('import { DynamicTable } from "/snippets/components/layout/table.jsx";');
  lines.push('');
  buildGeneratedHiddenBannerLines(GENERATED_DETAILS).forEach((line) => lines.push(line));
  lines.push('');
  buildGeneratedNoteLines(GENERATED_DETAILS).forEach((line) => lines.push(line));
  lines.push('');

  inventory.forEach((category) => {
    lines.push(`## ${category.title}`);
    lines.push(category.description);
    lines.push('');
    lines.push('<AccordionGroup>');

    category.files.forEach((file) => {
      lines.push(`  <Accordion title="${escapeJsxAttribute(file.title)}" icon="file-code">`);

      if (!file.components.length) {
        lines.push('    <ResponseField name="No exported components found" type="info">');
        lines.push('      No exported components were detected in this file.');
        lines.push('    </ResponseField>');
      } else {
        file.components.forEach((component) => {
          const summary = formatPropsSummary(component.props);
          const importLine = `import { ${component.name} } from "/${path.posix.join(SOURCE_ROOT, file.repoPath)}";`;
          const usageLines = buildUsageSnippet(component.name, component.props);
          const exampleLines = [importLine, '', ...usageLines];
          const lookupProps = buildLookupPropsList(component.props);

          lookupRows.push({ Category: category.title, Page: file.repoPath, Component: component.name, Props: lookupProps });

          lines.push(`    <ResponseField name="${escapeJsxAttribute(component.name)}" type="component">`);
          lines.push(`      **Props**: ${summary.propsLine} <br/>`);
          lines.push(`      **Defaults**: ${summary.defaultsLine}`);
          lines.push('');
          lines.push('      <CodeGroup>');
          lines.push('```jsx lines Example');
          indentLines(exampleLines, 0).forEach((line) => lines.push(line));
          lines.push('```');
          lines.push('      </CodeGroup>');
          lines.push('    </ResponseField>');
        });
      }

      lines.push('  </Accordion>');
    });

    lines.push('</AccordionGroup>');
    lines.push('');
  });

  const sortedLookupRows = [...lookupRows].sort((a, b) => {
    if (a.Category !== b.Category) return a.Category.localeCompare(b.Category, 'en', { sensitivity: 'base' });
    if (a.Page !== b.Page) return a.Page.localeCompare(b.Page, 'en', { sensitivity: 'base' });
    return a.Component.localeCompare(b.Component, 'en', { sensitivity: 'base' });
  });

  lines.push('## Lookup Table');
  lines.push('Search by category, page path, or component name.');
  lines.push('');
  lines.push('<SearchTable');
  lines.push('  TableComponent={DynamicTable}');
  lines.push('  tableTitle="Component Lookup"');
  lines.push('  headerList={["Category", "Page", "Component", "Props"]}');
  lines.push(`  itemsList={${serializeLookupRows(sortedLookupRows)}}`);
  lines.push('  searchPlaceholder="Search category, page, component, or props..."');
  lines.push('  monospaceColumns={[1, 2, 3]}');
  lines.push('/>');
  lines.push('');

  return `${lines.join('\n').trimEnd()}\n`;
}

function writeIfChanged(repoPath, nextContent, shouldWrite) {
  const current = readFileSafe(repoPath);
  const changed = current !== nextContent;

  if (changed && shouldWrite) {
    fs.mkdirSync(path.dirname(path.join(REPO_ROOT, repoPath)), { recursive: true });
    fs.writeFileSync(path.join(REPO_ROOT, repoPath), nextContent, 'utf8');
  }

  return { changed, path: repoPath };
}

function parseArgs(argv) {
  const check = argv.includes('--check');
  const write = argv.includes('--write') || !check;
  return { check, write };
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  let content = '';
  try {
    content = buildContent();
  } catch (error) {
    console.error(`Failed to generate components indexes: ${error.message}`);
    process.exit(1);
  }

  const results = OUTPUT_PATHS.map((outputPath) => writeIfChanged(outputPath, content, args.write));

  if (args.check) {
    const outdated = results.filter((result) => result.changed);
    if (outdated.length > 0) {
      outdated.forEach((result) => {
        console.error(`Components index is out of date: ${result.path}`);
      });
      console.error('Run: node tools/scripts/generate-docs-guide-components-index.js --write');
      process.exit(1);
    }
    console.log('Components indexes are up to date.');
    return;
  }

  const updated = results.filter((result) => result.changed);
  if (updated.length > 0) {
    updated.forEach((result) => {
      console.log(`Updated ${result.path}`);
    });
  } else {
    console.log('No changes. Components indexes already current.');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildContent
};
