#!/usr/bin/env node
/**
 * @script            generate-component-governance-remediation-reports
 * @category          generator
 * @purpose           qa:repo-health
 * @scope             generated-output
 * @owner             docs
 * @needs             R-R10, R-R29
 * @purpose-statement Generates component-governance remediation reports from the approved audit and live repo state, including defensive-rendering guidance for MDX-facing components.
 * @pipeline          manual — report generation
 * @usage             node tools/scripts/generate-component-governance-remediation-reports.js [flags]
 */

const fs = require('fs');
const path = require('path');
const {
  buildGeneratedMarkdownCommentLines,
  sanitizeMarkdownTableCellText
} = require('../lib/mdx-safe-markdown');
const {
  buildMdxFacingComponentIndex
} = require('./validators/components/check-mdx-component-scope');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DEFAULT_AUDIT_FILE = 'tasks/reports/component-governance-audit.md';
const DEFAULT_OUTPUT_DIR = 'tasks/reports';
const REPORT_GENERATOR_SCRIPT = 'tools/scripts/generate-component-governance-remediation-reports.js';
const VALID_REPORTS = ['migration', 'colours', 'tokens', 'defensive'];
const REPORT_FILE_NAMES = {
  migration: 'migration-impact-report.md',
  colours: 'colour-remediation-report.md',
  tokens: 'style-css-token-audit.md',
  defensive: 'defensive-rendering-remediation-report.md'
};
const IMPORTANT_RE = /!important\b/;
const MDX_IMPORT_RE = /^\s*import\s+[\s\S]*?\s+from\s+['"][^'"]+['"]\s*;?/gm;
const ARRAY_METHODS = ['map', 'filter', 'slice', 'forEach', 'reduce', 'some', 'every', 'sort'];
const COLOR_DISTANCE_THRESHOLD = 34;
const LEGACY_TOKEN_EQUIVALENTS = {
  '--accent': '--lp-color-accent',
  '--accent-dark': '--lp-color-accent-dark',
  '--hero-text': '--lp-color-hero-text',
  '--text': '--lp-color-text',
  '--muted-text': '--lp-color-muted-text',
  '--background': '--lp-color-background',
  '--card-background': '--lp-color-card-background',
  '--border': '--lp-color-border',
  '--button-text': '--lp-color-button-text',
  '--background-highlight': '--lp-color-background-highlight'
};
const HIGH_RISK_OVERRIDES = {
  BlinkingIcon: {
    issue:
      'Props are passed straight through to `Icon` without runtime normalisation. Invalid `icon` or `size` values can surface as render failures in Mintlify.',
    snippetSearch: '<Icon icon={icon} size={size} color={resolvedColor} />',
    fix: `const resolvedIcon = typeof icon === "string" && icon.trim() ? icon : "terminal";
const resolvedSize = Number.isFinite(Number(size)) ? Number(size) : 16;

return (
  <span style={{ display: "inline-flex", animation: "blink 3s ease-in-out infinite" }}>
    <Icon icon={resolvedIcon} size={resolvedSize} color={resolvedColor} />
  </span>
);`,
    guards: [
      'Normalise `icon` before rendering the nested `Icon`.',
      'Coerce `size` to a finite number before passing it through.',
      'Retain the existing default fallback values.'
    ]
  },
  BlogDataLayout: {
    issue: 'The component assumes `items` is always an array. Non-array inputs can break `slice()` and `map()` during render.',
    snippetSearch: 'const displayItems = limit ? items.slice(0, limit) : items;',
    fix: `const safeItems = Array.isArray(items) ? items : [];
const displayItems = limit ? safeItems.slice(0, limit) : safeItems;

if (displayItems.length === 0) {
  return null;
}

return (
  <div>
    {displayItems.map((props, idx) => (
      <BlogCard key={props?.href || idx} {...props} />
    ))}
  </div>
);`,
    guards: [
      'Normalise `items` to an array before any collection operations.',
      'Use optional chaining for key selection on mapped items.',
      'Return a stable empty-state fallback when no valid items remain.'
    ]
  },
  CardInCardLayout: {
    issue:
      'The component ignores its `items` prop and renders `forumData`, which is not defined in the file. That is a hard runtime failure.',
    snippetSearch: '<CardColumnsPostLayout cols={2} items={forumData} limit={2} />',
    fix: `const safeItems = Array.isArray(items) ? items : [];

if (safeItems.length === 0) {
  console.warn("[CardInCardLayout] Missing or invalid items");
  return null;
}

return (
  <Card
    img="/snippets/automations/forum/Hero_Livepeer_Forum.png"
    href="https://forum.livepeer.org"
    arrow={false}
  >
    <CardColumnsPostLayout cols={2} items={safeItems} limit={limit} />
  </Card>
);`,
    guards: [
      'Use the actual `items` prop instead of `forumData`.',
      'Guard non-array `items` before delegating to `CardColumnsPostLayout`.',
      'Warn and return `null` when no usable dataset is available.'
    ]
  },
  CoinGeckoExchanges: {
    issue:
      '`sortedExchanges.map()` and several fetch-derived values assume a healthy API response shape. Invalid or partial responses can still break rendering after the fetch resolves.',
    snippetSearch: '{sortedExchanges.map((exchange, index) => (',
    fix: `const safeExchanges = Array.isArray(sortedExchanges) ? sortedExchanges : [];

if (safeExchanges.length === 0) {
  return <div>No exchanges found for this coin.</div>;
}

return (
  <tbody>
    {safeExchanges.map((exchange, index) => (
      <tr key={exchange?.url || index}>
        {/* existing row markup */}
      </tr>
    ))}
  </tbody>
);`,
    guards: [
      'Normalise `sortedExchanges` before mapping.',
      'Use stable optional chaining when reading `exchange` fields.',
      'Keep the existing loading/error/empty branches intact.'
    ]
  },
  ColumnsBlogCardLayout: {
    issue: 'The component assumes `items` is always array-shaped before calling `slice()` and `map()`.',
    snippetSearch: 'const displayItems = limit ? items.slice(0, limit) : items;',
    fix: `const safeItems = Array.isArray(items) ? items : [];
const displayItems = limit ? safeItems.slice(0, limit) : safeItems;

return (
  <Columns cols={cols}>
    {displayItems.map((props, idx) => (
      <BlogCard key={props?.href || idx} {...props} />
    ))}
  </Columns>
);`,
    guards: [
      'Normalise `items` before collection work.',
      'Use optional chaining when deriving row keys.',
      'Preserve current layout when data is valid.'
    ]
  },
  LinkArrow: {
    issue:
      'Required `href` and `label` props are rendered without any validation. Missing values can create broken anchors or crash downstream consumers.',
    snippetSearch: '<a href={href} target="_blank">',
    fix: `if (!href || !label) {
  console.warn("[LinkArrow] Missing required props: href and label");
  return null;
}

return (
  <>
    {newline && <br />}
    <span style={linkArrowStyle}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
      <Icon icon="arrow-up-right" size={14} color="var(--accent)" />
    </span>
    {description && description}
  </>
);`,
    guards: [
      'Return early when `href` or `label` is missing.',
      'Add `rel` to the external link branch while touching the anchor.',
      'Keep description rendering unchanged for valid inputs.'
    ]
  },
  PostCard: {
    issue:
      '`content` is treated as HTML and its length is read before any runtime type guard. Non-string content can break both the length check and `dangerouslySetInnerHTML`.',
    snippetSearch: 'dangerouslySetInnerHTML={{ __html: content }}',
    fix: `const contentHtml = typeof content === "string" ? content : "";
const showScrollHint = contentHtml.length > 500;

if (!title || !href) {
  console.warn("[PostCard] Missing required props: title or href");
  return null;
}

return (
  <Card title={title} icon={icon} href={href} cta={cta} img={img} arrow>
    {/* existing header markup */}
    <div
      style={{ maxHeight: 300, overflowY: "auto" }}
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  </Card>
);`,
    guards: [
      'Normalise `content` before reading `.length` or using `dangerouslySetInnerHTML`.',
      'Guard required `title` and `href` props at the component boundary.',
      'Retain existing card layout for valid content.'
    ]
  },
  SearchTable: {
    issue:
      'The component assumes `itemsList`, `headerList`, and `searchColumns` are always arrays. That makes `map()` and `filter()` vulnerable to invalid inputs.',
    snippetSearch:
      "const categories = [...new Set(itemsList.map((item) => String(item[categoryColumn] || '')).filter(Boolean))]",
    fix: `const safeItemsList = Array.isArray(itemsList) ? itemsList : [];
const safeHeaderList = Array.isArray(headerList) ? headerList : [];
const safeSearchColumns = Array.isArray(searchColumns) ? searchColumns : [];
const activeColumns = safeSearchColumns.length ? safeSearchColumns : safeHeaderList;

const categories = [...new Set(
  safeItemsList
    .map((item) => String(item?.[categoryColumn] || ""))
    .filter(Boolean)
)];

const categoryFilteredItems =
  selectedCategory === "All"
    ? safeItemsList
    : safeItemsList.filter((item) => String(item?.[categoryColumn] || "") === selectedCategory);`,
    guards: [
      'Normalise every collection prop before using array helpers.',
      'Use optional chaining when reading row fields.',
      'Preserve the existing fallback warning when `TableComponent` is missing.'
    ]
  },
  Starfield: {
    issue:
      'The effect assumes the browser canvas API and 2D context are always available. Missing context or image readiness can break the animation setup.',
    snippetSearch: 'const ctx = canvas.getContext("2d");',
    fix: `useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.warn("[Starfield] Canvas 2D context unavailable");
    return;
  }

  const logo = new Image();
  logo.src = "/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg";
  // keep existing resize/draw logic after guards
}, [density]);`,
    guards: [
      'Guard missing browser globals and `canvasRef.current`.',
      'Return early when `getContext("2d")` fails.',
      'Keep image loading and animation logic behind those checks.'
    ]
  },
  StepLinkList: {
    issue: '`listItems.map()` runs without verifying that `listItems` is an array.',
    snippetSearch: '{listItems.map(({ title, icon, content, link }, idx) => (',
    fix: `const safeItems = Array.isArray(listItems) ? listItems : [];

if (safeItems.length === 0) {
  return null;
}

return (
  <Steps>
    {safeItems.map(({ title, icon, content, link }, idx) => (
      <Step key={idx} title={title} icon={icon}>
        <GotoLink label={content} relativePath={link} />
      </Step>
    ))}
  </Steps>
);`,
    guards: [
      'Normalise `listItems` before mapping.',
      'Return `null` instead of throwing on invalid data.',
      'Keep the existing `Step` composition unchanged for valid rows.'
    ]
  },
  UpdateList: {
    issue:
      'The component ignores `listItems` entirely and renders placeholder markup. A defensive fix should stop the render when the expected array input is absent.',
    snippetSearch: 'export const UpdateList = ({ listItems: array }) => {',
    fix: `const safeItems = Array.isArray(array) ? array : [];

if (safeItems.length === 0) {
  console.warn("[UpdateList] Missing or invalid listItems");
  return null;
}

return (
  <>
    {safeItems.map(({ title, content }, idx) => (
      <Update key={title || idx} label={title || "Update"}>
        {content}
      </Update>
    ))}
  </>
);`,
    guards: [
      'Normalise `listItems` before render.',
      'Remove the hardcoded placeholder branch during remediation.',
      'Return `null` when no valid data is available.'
    ]
  }
};

main();

function main() {
  try {
    const options = parseArgs(process.argv.slice(2));
    const context = buildContext(options);

    if (context.materialIssues.length > 0 && options.strict) {
      throw new Error(
        `Strict validation failed:\n- ${context.materialIssues.join('\n- ')}`
      );
    }

    if (context.materialIssues.length > 0) {
      console.warn(
        `Warning: continuing with ${context.materialIssues.length} validation issue(s) because --no-strict was set.`
      );
      context.materialIssues.forEach((issue) => console.warn(`- ${issue}`));
    }

    ensureDir(path.join(REPO_ROOT, options.outputDir));

    for (const reportName of options.reports) {
      const reportContent = renderReport(reportName, context);
      const outputPath = path.join(REPO_ROOT, options.outputDir, REPORT_FILE_NAMES[reportName]);
      fs.writeFileSync(outputPath, reportContent, 'utf8');
      console.log(`Wrote ${toPosix(path.relative(REPO_ROOT, outputPath))}`);
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

function parseArgs(argv) {
  const options = {
    auditFile: DEFAULT_AUDIT_FILE,
    outputDir: DEFAULT_OUTPUT_DIR,
    reports: [...VALID_REPORTS],
    strict: true
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--audit-file') {
      options.auditFile = String(argv[index + 1] || '').trim() || DEFAULT_AUDIT_FILE;
      index += 1;
      continue;
    }

    if (token.startsWith('--audit-file=')) {
      options.auditFile = token.slice('--audit-file='.length).trim() || DEFAULT_AUDIT_FILE;
      continue;
    }

    if (token === '--output-dir') {
      options.outputDir = String(argv[index + 1] || '').trim() || DEFAULT_OUTPUT_DIR;
      index += 1;
      continue;
    }

    if (token.startsWith('--output-dir=')) {
      options.outputDir = token.slice('--output-dir='.length).trim() || DEFAULT_OUTPUT_DIR;
      continue;
    }

    if (token === '--reports') {
      options.reports = parseReportList(argv[index + 1]);
      index += 1;
      continue;
    }

    if (token.startsWith('--reports=')) {
      options.reports = parseReportList(token.slice('--reports='.length));
      continue;
    }

    if (token === '--strict') {
      options.strict = true;
      continue;
    }

    if (token === '--no-strict') {
      options.strict = false;
      continue;
    }

    if (token === '--strict=false') {
      options.strict = false;
      continue;
    }

    if (token === '--strict=true') {
      options.strict = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return options;
}

function parseReportList(value) {
  const selected = String(value || '')
    .split(',')
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);

  if (selected.length === 0) {
    throw new Error('The --reports flag requires at least one report name.');
  }

  const invalid = selected.filter((entry) => !VALID_REPORTS.includes(entry));
  if (invalid.length > 0) {
    throw new Error(`Invalid report name(s): ${invalid.join(', ')}`);
  }

  return [...new Set(selected)];
}

function buildContext(options) {
  const auditPath = path.join(REPO_ROOT, options.auditFile);
  if (!fs.existsSync(auditPath)) {
    throw new Error(`Audit file not found: ${toPosix(path.relative(REPO_ROOT, auditPath))}`);
  }

  const stylePath = path.join(REPO_ROOT, 'style.css');
  if (!fs.existsSync(stylePath)) {
    throw new Error('Root style.css not found.');
  }

  const auditMarkdown = fs.readFileSync(auditPath, 'utf8');
  const audit = parseAudit(auditMarkdown);
  const componentFiles = walkFiles('snippets/components', (filePath) => filePath.endsWith('.jsx'));
  const sourceCache = buildSourceCache(componentFiles);
  const componentIndex = buildComponentIndex(componentFiles, sourceCache);
  const mdxFiles = [
    ...walkFiles('v2', (filePath) => filePath.endsWith('.mdx')),
    ...walkFiles('snippets', (filePath) => filePath.endsWith('.mdx'))
  ];
  const mdxImports = parseMdxImports(mdxFiles);
  const styleTokens = parseStyleTokens(fs.readFileSync(stylePath, 'utf8'));
  const tokenUsage = scanComponentTokenUsage(componentFiles, sourceCache, styleTokens);
  const driftNotes = [];
  const materialIssues = [];

  validateAuditExports(audit.exportInventory, componentIndex, driftNotes, materialIssues);
  validateMigrationRows(audit.migrationActions, componentIndex, materialIssues);
  validateDefensiveRows(audit.defensiveRendering, componentIndex, materialIssues);

  const stylingAnalysis = analyseStylingViolations(
    audit.stylingViolations,
    sourceCache,
    styleTokens,
    driftNotes,
    materialIssues
  );
  const migrationAnalysis = analyseMigrationImpact(
    audit.migrationActions,
    componentIndex,
    mdxImports,
    materialIssues
  );
  const tokenAudit = analyseTokenInventory(styleTokens, tokenUsage, stylingAnalysis);
  const defensiveAnalysis = analyseDefensiveRendering(
    audit.defensiveRendering,
    audit.statusAssessment,
    componentIndex,
    buildMdxFacingComponentIndex()
  );

  return {
    generatedAt: new Date().toISOString(),
    auditFile: options.auditFile,
    audit,
    stylePath: 'style.css',
    sourceCache,
    componentIndex,
    mdxImports,
    styleTokens,
    tokenUsage,
    stylingAnalysis,
    migrationAnalysis,
    tokenAudit,
    defensiveAnalysis,
    driftNotes,
    materialIssues
  };
}

function renderReport(reportName, context) {
  if (reportName === 'migration') {
    return renderMigrationImpactReport(context);
  }

  if (reportName === 'colours') {
    return renderColourRemediationReport(context);
  }

  if (reportName === 'tokens') {
    return renderStyleTokenAuditReport(context);
  }

  if (reportName === 'defensive') {
    return renderDefensiveRenderingReport(context);
  }

  throw new Error(`Unhandled report renderer: ${reportName}`);
}

function parseAudit(markdown) {
  return {
    exportInventory: parseExportInventoryRows(parseMarkdownTable(extractSection(markdown, 'Export Inventory'))),
    statusAssessment: parseStatusRows(parseMarkdownTable(extractSection(markdown, 'Status Assessment'))),
    stylingViolations: parseStylingRows(parseMarkdownTable(extractSection(markdown, 'Styling Violations'))),
    defensiveRendering: parseDefensiveRows(parseMarkdownTable(extractSection(markdown, 'Defensive Rendering'))),
    migrationActions: parseMigrationRows(parseMarkdownTable(extractSection(markdown, 'Migration Actions')))
  };
}

function parseExportInventoryRows(rows) {
  return rows.map((row) => ({
    file: row.File || '',
    exports: parseExportList(row.Exports || ''),
    exportCount: Number(row['Export count'] || 0)
  }));
}

function parseStatusRows(rows) {
  return rows.map((row) => ({
    component: row.Component || '',
    status: row.Status || '',
    reason: row.Reason || ''
  }));
}

function parseStylingRows(rows) {
  return rows.map((row) => ({
    file: row.File || '',
    line: Number.parseInt(String(row.Line || '0'), 10) || 0,
    violation: row.Violation || '',
    severity: row.Severity || ''
  }));
}

function parseDefensiveRows(rows) {
  return rows.map((row) => ({
    component: row.Component || '',
    guardsProps: normalizeYesNo(row['Guards props?']),
    guardsArrays: normalizeYesNo(row['Guards arrays?']),
    hasTryCatch: normalizeYesNo(row['Has try-catch?']),
    crashRisk: String(row['Crash risk'] || '').toUpperCase(),
    evidenceLine: parseLineMarker(row.Evidence || '')
  }));
}

function parseMigrationRows(rows) {
  return rows.map((row) => ({
    component: row.Component || '',
    currentPath: row['Current path'] || '',
    targetPath: row['Target path'] || '',
    action: String(row.Action || '').toUpperCase(),
    risk: String(row.Risk || '').toUpperCase(),
    notes: row.Notes || ''
  }));
}

function parseExportList(value) {
  const exportsList = [];
  const re = /([A-Za-z0-9_]+)\s*\(L(\d+)\)/g;
  let match;

  while ((match = re.exec(value)) !== null) {
    exportsList.push({
      name: match[1],
      auditLine: Number.parseInt(match[2], 10)
    });
  }

  return exportsList;
}

function normalizeYesNo(value) {
  const normalized = String(value || '').trim().toLowerCase();
  return normalized === 'yes';
}

function parseLineMarker(value) {
  const match = String(value || '').match(/L(\d+)/);
  return match ? Number.parseInt(match[1], 10) : 1;
}

function extractSection(markdown, title) {
  const marker = `## ${title}`;
  const start = markdown.indexOf(marker);
  if (start === -1) {
    throw new Error(`Missing audit section: ${marker}`);
  }

  const tail = markdown.slice(start + marker.length);
  const match = tail.match(/\n## [^\n]+/);
  const end = match ? start + marker.length + match.index : markdown.length;
  return markdown.slice(start, end);
}

function parseMarkdownTable(sectionText) {
  const lines = sectionText.split('\n');
  const block = [];
  let collecting = false;

  for (const line of lines) {
    if (line.trim().startsWith('|')) {
      block.push(line);
      collecting = true;
      continue;
    }

    if (collecting && block.length > 0) {
      break;
    }
  }

  if (block.length < 2) {
    return [];
  }

  const headers = splitMarkdownRow(block[0]);
  const rows = [];

  for (let index = 2; index < block.length; index += 1) {
    const cells = splitMarkdownRow(block[index]);
    if (cells.length === 0 || cells.every((cell) => !cell)) {
      continue;
    }

    const row = {};
    headers.forEach((header, headerIndex) => {
      row[header] = cells[headerIndex] || '';
    });
    rows.push(row);
  }

  return rows;
}

function splitMarkdownRow(line) {
  return line
    .trim()
    .split('|')
    .slice(1, -1)
    .map((cell) => cell.trim());
}

function buildSourceCache(filePaths) {
  const cache = new Map();

  for (const filePath of filePaths) {
    const absPath = path.join(REPO_ROOT, filePath);
    const content = fs.readFileSync(absPath, 'utf8');
    cache.set(filePath, {
      content,
      lines: content.split('\n')
    });
  }

  return cache;
}

function buildComponentIndex(componentFiles, sourceCache) {
  const liveExportsByFile = new Map();
  const componentMetaByName = new Map();

  for (const filePath of componentFiles) {
    const source = sourceCache.get(filePath);
    const declarations = parseDeclarations(source.content);
    const declarationMap = new Map(declarations.map((entry) => [entry.name, entry]));
    const exportedNames = parseExportedNames(source.content);
    const liveExports = [];

    for (const name of exportedNames) {
      const declaration = declarationMap.get(name) || null;
      const line = declaration ? declaration.line : findNameLine(source.lines, name);
      const blockText = declaration ? declaration.blockText : '';
      const paramsExpression = declaration ? extractParamsExpression(name, declaration.blockText) : '';
      const params = parseParamExpression(paramsExpression);
      const meta = {
        name,
        filePath,
        line,
        blockText,
        paramsExpression,
        params,
        requiredProps: params.filter((entry) => !entry.hasDefault && entry.kind !== 'rest')
      };

      liveExports.push(meta);
      componentMetaByName.set(name, meta);
    }

    liveExports.sort((left, right) => left.line - right.line);
    liveExportsByFile.set(filePath, liveExports);
  }

  return {
    liveExportsByFile,
    componentMetaByName
  };
}

function parseDeclarations(content) {
  const declarations = [];
  const re = /^\s*(?:export\s+default\s+)?(?:export\s+)?(?:const|function)\s+([A-Za-z0-9_]+)\b/gm;
  let match;

  while ((match = re.exec(content)) !== null) {
    declarations.push({
      name: match[1],
      index: match.index,
      line: lineNumberFromIndex(content, match.index)
    });
  }

  declarations.sort((left, right) => left.index - right.index);

  return declarations.map((entry, index) => {
    const nextIndex = index + 1 < declarations.length ? declarations[index + 1].index : content.length;
    return {
      ...entry,
      blockText: content.slice(entry.index, nextIndex).trimEnd()
    };
  });
}

function parseExportedNames(content) {
  const exportedNames = new Set();
  let match;

  const directExportRe = /^\s*export\s+(?:const|function)\s+([A-Za-z0-9_]+)\b/gm;
  while ((match = directExportRe.exec(content)) !== null) {
    exportedNames.add(match[1]);
  }

  const defaultFunctionRe = /^\s*export\s+default\s+function\s+([A-Za-z0-9_]+)\b/gm;
  while ((match = defaultFunctionRe.exec(content)) !== null) {
    exportedNames.add(match[1]);
  }

  const exportBlockRe = /^\s*export\s*{([^}]+)}/gm;
  while ((match = exportBlockRe.exec(content)) !== null) {
    const entries = splitTopLevel(match[1], ',');
    for (const entry of entries) {
      const cleaned = entry.trim();
      if (!cleaned) continue;
      const exportedName = cleaned.split(/\s+as\s+/i)[0].trim();
      if (exportedName) {
        exportedNames.add(exportedName);
      }
    }
  }

  return [...exportedNames];
}

function extractParamsExpression(name, blockText) {
  const arrowRe = new RegExp(
    `(?:export\\s+default\\s+)?(?:export\\s+)?const\\s+${escapeRegExp(name)}\\s*=\\s*(\\([\\s\\S]*?\\)|[A-Za-z0-9_$]+)\\s*=>`
  );
  const arrowMatch = blockText.match(arrowRe);
  if (arrowMatch) {
    return arrowMatch[1];
  }

  const functionRe = new RegExp(
    `(?:export\\s+default\\s+)?(?:export\\s+)?function\\s+${escapeRegExp(name)}\\s*\\(([\\s\\S]*?)\\)`
  );
  const functionMatch = blockText.match(functionRe);
  if (functionMatch) {
    return `(${functionMatch[1]})`;
  }

  return '';
}

function parseParamExpression(expression) {
  const trimmed = String(expression || '').trim();
  if (!trimmed) {
    return [];
  }

  const inner = trimmed.startsWith('(') && trimmed.endsWith(')')
    ? trimmed.slice(1, -1).trim()
    : trimmed;

  if (inner.startsWith('{') && inner.endsWith('}')) {
    return parseDestructuredParams(inner.slice(1, -1));
  }

  return [
    {
      propName: inner,
      localName: inner,
      hasDefault: false,
      kind: 'param'
    }
  ];
}

function parseDestructuredParams(body) {
  return splitTopLevel(body, ',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      if (entry.startsWith('...')) {
        return {
          propName: entry.slice(3).trim(),
          localName: entry.slice(3).trim(),
          hasDefault: false,
          kind: 'rest'
        };
      }

      const equalsIndex = findTopLevelIndex(entry, '=');
      const left = equalsIndex === -1 ? entry : entry.slice(0, equalsIndex).trim();
      const hasDefault = equalsIndex !== -1;
      const colonIndex = findTopLevelIndex(left, ':');

      if (colonIndex === -1) {
        return {
          propName: left.trim(),
          localName: left.trim(),
          hasDefault,
          kind: 'prop'
        };
      }

      return {
        propName: left.slice(0, colonIndex).trim(),
        localName: left.slice(colonIndex + 1).trim(),
        hasDefault,
        kind: 'prop'
      };
    })
    .filter((entry) => entry.propName && !entry.propName.startsWith('{') && !entry.propName.startsWith('['));
}

function parseMdxImports(filePaths) {
  const imports = [];

  for (const filePath of filePaths) {
    const absPath = path.join(REPO_ROOT, filePath);
    const content = fs.readFileSync(absPath, 'utf8');
    let match;

    while ((match = MDX_IMPORT_RE.exec(content)) !== null) {
      const parsed = parseImportStatement(match[0]);
      if (!parsed) {
        continue;
      }

      imports.push({
        filePath,
        line: lineNumberFromIndex(content, match.index),
        statement: match[0].trim(),
        statementCompact: compactWhitespace(match[0].trim()),
        ...parsed
      });
    }
  }

  return imports;
}

function parseImportStatement(statement) {
  const match = statement.match(/^\s*import\s+([\s\S]*?)\s+from\s+(['"])([^'"]+)\2\s*;?\s*$/);
  if (!match) {
    return null;
  }

  const clause = match[1].trim();
  const quote = match[2];
  const sourcePath = normalizeImportSource(match[3]);
  const hasSemicolon = /;\s*$/.test(statement.trim());
  const parsedClause = parseImportClause(clause);

  return {
    quote,
    sourcePath,
    hasSemicolon,
    ...parsedClause
  };
}

function parseImportClause(clause) {
  const namedImports = [];
  let defaultImport = '';
  let namespaceImport = '';
  let remainder = clause.trim();

  const namedMatch = remainder.match(/{([\s\S]*)}/);
  if (namedMatch) {
    const namedBody = namedMatch[1];
    splitTopLevel(namedBody, ',')
      .map((entry) => entry.trim())
      .filter(Boolean)
      .forEach((entry) => {
        const parts = entry.split(/\s+as\s+/i);
        namedImports.push({
          raw: entry,
          exportedName: parts[0].trim(),
          localName: (parts[1] || parts[0]).trim()
        });
      });

    remainder = remainder.replace(namedMatch[0], '').replace(/,\s*,/g, ',').trim();
  }

  const leftover = splitTopLevel(remainder, ',').map((entry) => entry.trim()).filter(Boolean);
  leftover.forEach((entry) => {
    if (entry.startsWith('* as ')) {
      namespaceImport = entry;
    } else if (!defaultImport) {
      defaultImport = entry;
    }
  });

  return {
    defaultImport,
    namespaceImport,
    namedImports
  };
}

function parseStyleTokens(styleContent) {
  const rootVars = parseCssVariables(extractCssBlock(styleContent, ':root'));
  const darkVars = parseCssVariables(extractCssBlock(styleContent, '.dark'));
  const orderedNames = [];
  const seen = new Set();

  for (const token of [...rootVars.keys(), ...darkVars.keys()]) {
    if (seen.has(token)) continue;
    seen.add(token);
    orderedNames.push(token);
  }

  return orderedNames.map((token) => {
    const lightValue = rootVars.get(token) || '';
    const darkValue = darkVars.get(token) || '';
    return {
      token,
      lightValue,
      darkValue,
      category: classifyTokenCategory(token, lightValue || darkValue),
      proposedToken: LEGACY_TOKEN_EQUIVALENTS[token] || proposeLpTokenName(token)
    };
  });
}

function parseCssVariables(blockText) {
  const vars = new Map();
  const re = /^\s*(--[A-Za-z0-9_-]+)\s*:\s*([^;]+);/gm;
  let match;

  while ((match = re.exec(blockText)) !== null) {
    vars.set(match[1], match[2].trim());
  }

  return vars;
}

function scanComponentTokenUsage(componentFiles, sourceCache, styleTokens) {
  const styleTokenSet = new Set(styleTokens.map((entry) => entry.token));
  const usageByToken = new Map();
  const localDefinitionsByFile = new Map();

  for (const filePath of componentFiles) {
    const source = sourceCache.get(filePath);
    const localDefs = new Set();
    let match;

    const localDefRe = /(--[A-Za-z0-9_-]+)\s*:/g;
    while ((match = localDefRe.exec(source.content)) !== null) {
      localDefs.add(match[1]);
    }
    localDefinitionsByFile.set(filePath, localDefs);

    const tokenRe = /var\((--[A-Za-z0-9_-]+)/g;
    while ((match = tokenRe.exec(source.content)) !== null) {
      const token = match[1];
      if (!usageByToken.has(token)) {
        usageByToken.set(token, new Set());
      }
      usageByToken.get(token).add(filePath);
    }
  }

  const undefinedTokens = [...usageByToken.entries()]
    .filter(([token, files]) => {
      if (styleTokenSet.has(token)) {
        return false;
      }

      for (const filePath of files) {
        const localDefs = localDefinitionsByFile.get(filePath) || new Set();
        if (localDefs.has(token)) {
          return false;
        }
      }

      return true;
    })
    .map(([token, files]) => ({
      token,
      files: [...files].sort()
    }))
    .sort((left, right) => left.token.localeCompare(right.token));

  return {
    usageByToken,
    localDefinitionsByFile,
    undefinedTokens
  };
}

function validateAuditExports(auditExportRows, componentIndex, driftNotes, materialIssues) {
  const liveExportsByFile = componentIndex.liveExportsByFile;

  for (const row of auditExportRows) {
    if (!liveExportsByFile.has(row.file)) {
      materialIssues.push(`Audit export inventory references missing file: ${row.file}`);
      continue;
    }

    const liveExports = liveExportsByFile.get(row.file);
    const liveByName = new Map(liveExports.map((entry) => [entry.name, entry]));

    for (const auditedExport of row.exports) {
      const liveExport = liveByName.get(auditedExport.name);
      if (!liveExport) {
        materialIssues.push(
          `Audit export inventory references missing export ${auditedExport.name} in ${row.file}`
        );
        continue;
      }

      if (auditedExport.auditLine !== liveExport.line) {
        driftNotes.push(
          `Export line drift: ${row.file} :: ${auditedExport.name} audit L${auditedExport.auditLine}, live L${liveExport.line}`
        );
      }
    }
  }
}

function validateMigrationRows(migrationRows, componentIndex, materialIssues) {
  const componentMetaByName = componentIndex.componentMetaByName;

  for (const row of migrationRows) {
    const component = componentMetaByName.get(row.component);
    if (!component) {
      materialIssues.push(`Migration action references missing export ${row.component}`);
      continue;
    }

    if (component.filePath !== row.currentPath) {
      materialIssues.push(
        `Migration action path mismatch for ${row.component}: audit ${row.currentPath}, live ${component.filePath}`
      );
    }
  }
}

function validateDefensiveRows(defensiveRows, componentIndex, materialIssues) {
  const componentMetaByName = componentIndex.componentMetaByName;

  for (const row of defensiveRows) {
    if (!componentMetaByName.has(row.component)) {
      materialIssues.push(`Defensive rendering table references missing export ${row.component}`);
    }
  }
}

function analyseStylingViolations(stylingRows, sourceCache, styleTokens, driftNotes, materialIssues) {
  const bannedRows = stylingRows.filter((row) => String(row.severity).toUpperCase() === 'BANNED');
  const colorOccurrences = [];
  const importantOccurrences = [];

  for (const row of bannedRows) {
    const source = sourceCache.get(row.file);
    if (!source) {
      materialIssues.push(`Styling violation references missing file: ${row.file}`);
      continue;
    }

    const resolved = resolveViolationOccurrence(row, source, driftNotes);
    if (!resolved) {
      materialIssues.push(
        `Unable to resolve styling violation ${row.violation} at ${row.file}:L${row.line}`
      );
      continue;
    }

    if (row.violation.includes('!important')) {
      importantOccurrences.push({
        file: row.file,
        line: resolved.line,
        context: compactWhitespace(resolved.text),
        canRemove: classifyImportantRemoval(resolved.text),
        notes: explainImportantUsage(resolved.text)
      });
      continue;
    }

    const values = extractColorLiterals(resolved.text);
    if (values.length === 0) {
      materialIssues.push(`No color literal found for styling violation at ${row.file}:L${resolved.line}`);
      continue;
    }

    values.forEach((value) => {
      colorOccurrences.push({
        value,
        normalizedValue: normalizeColorKey(value),
        file: row.file,
        line: resolved.line,
        context: buildNearbyContext(source.lines, resolved.line, 1)
      });
    });
  }

  const colorGroups = buildColourGroups(colorOccurrences, styleTokens);
  return {
    colorOccurrences,
    colorGroups,
    importantOccurrences
  };
}

function resolveViolationOccurrence(row, source, driftNotes) {
  const expectedPattern = pickViolationPattern(row.violation);
  if (!expectedPattern) {
    return null;
  }

  const preferredLine = source.lines[row.line - 1] || '';
  if (expectedPattern.test(preferredLine)) {
    return {
      line: row.line,
      text: preferredLine
    };
  }

  const windowStart = Math.max(0, row.line - 6);
  const windowEnd = Math.min(source.lines.length, row.line + 5);
  for (let index = windowStart; index < windowEnd; index += 1) {
    if (expectedPattern.test(source.lines[index])) {
      driftNotes.push(
        `Styling line drift: ${row.file} ${row.violation} audit L${row.line}, live L${index + 1}`
      );
      return {
        line: index + 1,
        text: source.lines[index]
      };
    }
  }

  let nearest = null;
  for (let index = 0; index < source.lines.length; index += 1) {
    if (!expectedPattern.test(source.lines[index])) {
      continue;
    }

    const distance = Math.abs(index + 1 - row.line);
    if (!nearest || distance < nearest.distance) {
      nearest = {
        line: index + 1,
        text: source.lines[index],
        distance
      };
    }
  }

  if (nearest) {
    driftNotes.push(
      `Styling line drift: ${row.file} ${row.violation} audit L${row.line}, live L${nearest.line}`
    );
    return {
      line: nearest.line,
      text: nearest.text
    };
  }

  return null;
}

function pickViolationPattern(violation) {
  if (violation.includes('Hardcoded hex')) {
    return /#[0-9a-fA-F]{3,8}\b/;
  }

  if (violation.includes('rgb()/rgba()')) {
    return /\brgba?\([^)]*\)/;
  }

  if (violation.includes('!important')) {
    return /!important\b/;
  }

  return null;
}

function buildColourGroups(colorOccurrences, styleTokens) {
  const groups = new Map();

  for (const occurrence of colorOccurrences) {
    if (!groups.has(occurrence.normalizedValue)) {
      groups.set(occurrence.normalizedValue, {
        displayValue: occurrence.value,
        normalizedValue: occurrence.normalizedValue,
        occurrences: []
      });
    }

    groups.get(occurrence.normalizedValue).occurrences.push(occurrence);
  }

  return [...groups.values()]
    .map((group) => classifyColourGroup(group, styleTokens))
    .sort((left, right) => left.displayValue.localeCompare(right.displayValue));
}

function classifyColourGroup(group, styleTokens) {
  const context = group.occurrences.map((entry) => entry.context).join(' ').toLowerCase();
  const exactMatches = findExactTokenMatches(group.normalizedValue, styleTokens);
  const suggestion = suggestColourToken(group, context, exactMatches);
  let status = 'new';
  let existingTokenMatch = suggestion.existingTokenMatch || [];
  let notes = suggestion.notes || '';

  if (suggestion.deliberate) {
    status = 'deliberate';
  } else if (exactMatches.length === 1) {
    status = 'direct';
    existingTokenMatch = exactMatches;
    notes = notes || `Exact match to ${formatTokenReference(exactMatches[0])}.`;
  } else if (exactMatches.length > 1) {
    status = 'close';
    existingTokenMatch = exactMatches;
    notes =
      notes ||
      `Exact value matches multiple current tokens (${exactMatches
        .map((token) => formatTokenReference(token))
        .join(', ')}); verify semantic intent before replacement.`;
  } else if (suggestion.existingTokenMatch && suggestion.existingTokenMatch.length > 0) {
    status = 'close';
    existingTokenMatch = suggestion.existingTokenMatch;
  } else {
    const closest = findClosestTokenMatch(group.normalizedValue, styleTokens);
    if (closest) {
      status = 'close';
      existingTokenMatch = [closest.token];
      notes =
        notes ||
        `Closest current token is ${formatTokenReference(closest.token)} (distance ${closest.distance.toFixed(
          1
        )}); verify semantic intent before replacement.`;
    }
  }

  const existingToken = existingTokenMatch[0] || '';
  const proposedToken = suggestion.proposedToken || deriveColourTokenFromContext(group, context, existingToken);
  const matchedTokenEntry = styleTokens.find((entry) => entry.token === existingToken);
  const lightValue = matchedTokenEntry ? matchedTokenEntry.lightValue : group.displayValue;
  const darkValue = suggestion.darkValue || (matchedTokenEntry ? matchedTokenEntry.darkValue || matchedTokenEntry.lightValue : group.displayValue);
  const filesSummary = summarizeFiles(group.occurrences);

  return {
    displayValue: group.displayValue,
    normalizedValue: group.normalizedValue,
    occurrences: group.occurrences,
    occurrenceCount: group.occurrences.length,
    filesSummary,
    existingTokenMatch,
    proposedToken,
    action: describeColourAction(status),
    notes,
    status,
    category: suggestion.category || inferColourCategory(context),
    lightValue,
    darkValue,
    deliberate: suggestion.deliberate
  };
}

function suggestColourToken(group, context, exactMatches) {
  const value = group.normalizedValue;

  if (value === normalizeColorKey('#3b82f6')) {
    return {
      proposedToken: '--lp-color-response-field-value',
      category: 'UI / response-field',
      darkValue: group.displayValue,
      notes: 'Highlighted response-field value colour.'
    };
  }

  if (value === normalizeColorKey('#f0f0f0')) {
    return {
      deliberate: true,
      proposedToken: '--lp-color-brand-github',
      category: 'Brand / third-party',
      darkValue: group.displayValue,
      notes: 'GitHub icon colour is currently hardcoded inside the social-links palette.'
    };
  }

  if (context.includes('discord')) {
    return {
      deliberate: true,
      proposedToken: '--lp-color-brand-discord',
      category: 'Brand / third-party',
      darkValue: group.displayValue,
      notes: 'Discord brand colour; decide between explicit brand token and exemption.'
    };
  }

  if (context.includes('forum')) {
    return {
      deliberate: true,
      proposedToken: '--lp-color-brand-forum',
      category: 'Brand / third-party',
      darkValue: group.displayValue,
      notes: 'Forum/social brand colour; decide between explicit brand token and exemption.'
    };
  }

  if (context.includes('github')) {
    return {
      deliberate: true,
      proposedToken: '--lp-color-brand-github',
      category: 'Brand / third-party',
      darkValue: group.displayValue,
      notes: 'GitHub icon colour is currently hardcoded inside the social-links palette.'
    };
  }

  if (context.includes('previewcallout') || context.includes('cauldron') || context.includes('cooking')) {
    return {
      proposedToken: '--lp-color-callout-coming-soon',
      category: 'UI / callout',
      darkValue: group.displayValue,
      notes: 'Preview/coming-soon callout accent colour.'
    };
  }

  if (context.includes('reviewcallout') || context.includes('technical review needed') || context.includes('tools')) {
    return {
      proposedToken: '--lp-color-callout-review',
      category: 'UI / callout',
      darkValue: group.displayValue,
      notes: 'Review callout accent colour.'
    };
  }

  if (context.includes('responsefield')) {
    return {
      proposedToken: '--lp-color-response-field-value',
      category: 'UI / response-field',
      darkValue: group.displayValue,
      notes: 'Highlighted response-field value colour.'
    };
  }

  if (context.includes('livepeer-icon-color') || context.includes('icon')) {
    if (value === normalizeColorKey('#6b7280') || value === normalizeColorKey('#a1a1aa')) {
      return {
        proposedToken: '--lp-color-icon-muted',
        category: 'Icon / muted',
        darkValue: '#a1a1aa',
        notes: 'Muted icon colour currently managed outside root style.css.'
      };
    }
  }

  if (value.startsWith('rgba(0,0,0,')) {
    return {
      proposedToken: '--lp-color-overlay-scrim',
      category: 'Overlay',
      darkValue: group.displayValue,
      notes: 'Black media overlay/scrim.'
    };
  }

  if (value.startsWith('rgba(255,255,255,')) {
    return {
      proposedToken: '--lp-color-border-inverse-subtle',
      category: 'Border / inverse',
      darkValue: group.displayValue,
      notes: 'Semi-transparent white used as an inverse border or hint colour.'
    };
  }

  if (value === normalizeColorKey('#18794e')) {
    return {
      existingTokenMatch: ['--accent-dark'],
      proposedToken: LEGACY_TOKEN_EQUIVALENTS['--accent-dark'],
      category: 'Colour',
      notes: 'Exact match to the current dark accent token.'
    };
  }

  if (value === normalizeColorKey('#ffffff')) {
    return {
      existingTokenMatch: exactMatches,
      proposedToken: '--lp-color-on-emphasis',
      category: 'Text / inverse',
      notes: 'Exact white exists today, but the semantic destination depends on whether usage is text, fill, or surface.'
    };
  }

  return {};
}

function findExactTokenMatches(normalizedColor, styleTokens) {
  return styleTokens
    .filter((token) => {
      const lightKey = normalizeColorKey(token.lightValue);
      const darkKey = normalizeColorKey(token.darkValue);
      return normalizedColor && (normalizedColor === lightKey || normalizedColor === darkKey);
    })
    .map((token) => token.token);
}

function findClosestTokenMatch(normalizedColor, styleTokens) {
  const target = parseColorValue(normalizedColor);
  if (!target) {
    return null;
  }

  let best = null;
  for (const token of styleTokens) {
    const candidates = [token.lightValue, token.darkValue].filter(Boolean);
    for (const candidate of candidates) {
      const parsed = parseColorValue(candidate);
      if (!parsed) continue;
      const distance = colorDistance(target, parsed);
      if (distance > COLOR_DISTANCE_THRESHOLD) continue;
      if (!best || distance < best.distance) {
        best = {
          token: token.token,
          distance
        };
      }
    }
  }

  return best;
}

function describeColourAction(status) {
  if (status === 'direct') {
    return 'Replace in Phase 2b';
  }

  if (status === 'close') {
    return 'Verify intent before replacing';
  }

  if (status === 'deliberate') {
    return 'Human review: tokenise or exempt';
  }

  return 'Add token before Phase 2b';
}

function classifyImportantRemoval(lineText) {
  const normalized = lineText.toLowerCase();
  if (normalized.includes('border-bottom: none !important') || normalized.includes('border: none !important')) {
    return 'Likely yes';
  }

  if (normalized.includes('color:') || normalized.includes('margin-bottom:')) {
    return 'Likely yes';
  }

  return 'Needs verification';
}

function explainImportantUsage(lineText) {
  const normalized = lineText.toLowerCase();
  if (normalized.includes('social-links')) {
    return 'The selector is compensating for Mintlify anchor borders; prefer a stronger scoped selector in style.css or component structure cleanup.';
  }

  if (normalized.includes('.field')) {
    return 'Local override is fighting framework field styles; prefer a scoped class or structural adjustment instead of `!important`.';
  }

  if (normalized.includes('hero-text')) {
    return 'Token value itself is valid; only specificity is the problem.';
  }

  return 'Specificity override should be reworked before Phase 2b token cleanup.';
}

function analyseMigrationImpact(migrationRows, componentIndex, mdxImports, materialIssues) {
  const rowsByFile = new Map();

  for (const row of migrationRows) {
    if (!rowsByFile.has(row.currentPath)) {
      rowsByFile.set(row.currentPath, []);
    }
    rowsByFile.get(row.currentPath).push(row);
  }

  const groups = [];
  for (const [currentPath, rows] of rowsByFile.entries()) {
    const reportableRows = rows.filter((row) => ['MOVE', 'SPLIT', 'RENAME'].includes(row.action));
    if (reportableRows.length === 0) {
      continue;
    }

    const liveExports = componentIndex.liveExportsByFile.get(currentPath) || [];
    const exportTargetMap = new Map();
    const mergeExports = [];

    rows.forEach((row) => {
      if (row.targetPath && row.targetPath !== '—' && !['KEEP', 'FIX', 'REMOVE'].includes(row.action)) {
        exportTargetMap.set(row.component, row.targetPath);
      }
      if (row.action === 'MERGE') {
        mergeExports.push(row.component);
      }
    });

    const uniqueTargets = unique(
      reportableRows
        .map((row) => row.targetPath)
        .filter((targetPath) => targetPath && targetPath !== '—')
    );

    const action = reportableRows.some((row) => row.action === 'SPLIT') || uniqueTargets.length > 1
      ? 'SPLIT'
      : reportableRows.every((row) => row.action === 'RENAME')
        ? 'RENAME'
        : 'MOVE';

    const importRows = buildImportRewriteRows(
      currentPath,
      action,
      uniqueTargets,
      exportTargetMap,
      mdxImports,
      materialIssues
    );
    const totalRewrites = importRows.reduce((sum, row) => sum + row.rewriteCount, 0);
    const localeBreakdown = summarizeLocales(importRows);
    const risk = classifyRewriteRisk(totalRewrites);
    const splitDetails = action === 'SPLIT' ? buildSplitDetails(currentPath, rows, importRows) : null;
    const mergeSensitiveImporters = importRows
      .filter((row) => row.importedExportNames.some((name) => mergeExports.includes(name)))
      .map((row) => row.filePath);

    groups.push({
      currentPath,
      targetPaths: action === 'SPLIT' ? uniqueTargets : uniqueTargets.slice(0, 1),
      action,
      exportsAffected: liveExports.map((entry) => entry.name),
      importRows,
      totalRewrites,
      importSites: importRows.length,
      localeBreakdown,
      risk,
      splitDetails,
      mergeExports,
      mergeSensitiveImporters: unique(mergeSensitiveImporters).sort()
    });
  }

  groups.sort((left, right) => {
    if (right.totalRewrites !== left.totalRewrites) {
      return right.totalRewrites - left.totalRewrites;
    }
    return left.currentPath.localeCompare(right.currentPath);
  });

  const riskSummary = summarizeMigrationRisk(groups);
  return {
    groups,
    riskSummary
  };
}

function buildImportRewriteRows(currentPath, action, targetPaths, exportTargetMap, mdxImports, materialIssues) {
  const matchingImports = mdxImports.filter((entry) => entry.sourcePath === currentPath);
  const rows = [];

  for (const importEntry of matchingImports) {
    const targetGroups = new Map();
    const importedExportNames = [];

    importEntry.namedImports.forEach((specifier) => {
      importedExportNames.push(specifier.exportedName);
      const resolvedTarget = resolveImportTarget(specifier.exportedName, action, targetPaths, exportTargetMap);
      if (!resolvedTarget) {
        materialIssues.push(
          `Unable to resolve target path for import ${specifier.exportedName} from ${currentPath} in ${importEntry.filePath}`
        );
        return;
      }
      if (!targetGroups.has(resolvedTarget)) {
        targetGroups.set(resolvedTarget, []);
      }
      targetGroups.get(resolvedTarget).push(specifier);
    });

    if (targetGroups.size > 1 && (importEntry.defaultImport || importEntry.namespaceImport)) {
      materialIssues.push(
        `Split import rewrite is ambiguous for ${importEntry.filePath} importing ${currentPath}; default or namespace imports cannot be auto-routed.`
      );
    }

    if (targetGroups.size === 0) {
      const fallbackTarget = action === 'SPLIT' && targetPaths.length === 1 ? targetPaths[0] : targetPaths[0];
      if (!fallbackTarget) {
        continue;
      }
      targetGroups.set(fallbackTarget, []);
    }

    const targets = [...targetGroups.entries()];
    const newStatements = targets.map(([targetPath, namedImports], index) =>
      buildImportStatement({
        defaultImport: index === 0 ? importEntry.defaultImport : '',
        namespaceImport: index === 0 ? importEntry.namespaceImport : '',
        namedImports,
        sourcePath: targetPath,
        quote: importEntry.quote,
        hasSemicolon: importEntry.hasSemicolon
      })
    );

    rows.push({
      filePath: importEntry.filePath,
      localeBucket: getLocaleBucket(importEntry.filePath),
      currentImportStatement: importEntry.statementCompact,
      newImportStatements: newStatements,
      rewriteCount: newStatements.length,
      importedExportNames,
      targetPaths: targets.map(([targetPath]) => targetPath)
    });
  }

  rows.sort((left, right) => left.filePath.localeCompare(right.filePath));
  return rows;
}

function resolveImportTarget(exportedName, action, targetPaths, exportTargetMap) {
  if (exportTargetMap.has(exportedName)) {
    return exportTargetMap.get(exportedName);
  }

  if (action !== 'SPLIT' && targetPaths.length === 1) {
    return targetPaths[0];
  }

  return '';
}

function buildSplitDetails(currentPath, rows, importRows) {
  const stayingExports = rows
    .filter((row) => row.action === 'SPLIT' && row.targetPath === currentPath)
    .map((row) => row.component)
    .sort();
  const movingByTarget = new Map();

  rows
    .filter((row) => row.action === 'SPLIT' && row.targetPath !== currentPath && row.targetPath !== '—')
    .forEach((row) => {
      if (!movingByTarget.has(row.targetPath)) {
        movingByTarget.set(row.targetPath, []);
      }
      movingByTarget.get(row.targetPath).push(row.component);
    });

  const multiTargetImporters = importRows
    .filter((row) => row.targetPaths.length > 1)
    .map((row) => row.filePath)
    .sort();

  return {
    stayingExports,
    movingByTarget: [...movingByTarget.entries()].map(([targetPath, exportsList]) => ({
      targetPath,
      exports: exportsList.sort()
    })),
    multiTargetImporters
  };
}

function summarizeMigrationRisk(groups) {
  const summary = {
    HIGH: { fileCount: 0, totalRewrites: 0 },
    MEDIUM: { fileCount: 0, totalRewrites: 0 },
    LOW: { fileCount: 0, totalRewrites: 0 }
  };

  groups.forEach((group) => {
    summary[group.risk].fileCount += 1;
    summary[group.risk].totalRewrites += group.totalRewrites;
  });

  return summary;
}

function summarizeLocales(importRows) {
  const breakdown = {
    en: 0,
    es: 0,
    fr: 0,
    cn: 0,
    other: 0
  };

  importRows.forEach((row) => {
    breakdown[row.localeBucket] += row.rewriteCount;
  });

  return breakdown;
}

function classifyRewriteRisk(totalRewrites) {
  if (totalRewrites >= 50) {
    return 'HIGH';
  }
  if (totalRewrites >= 10) {
    return 'MEDIUM';
  }
  return 'LOW';
}

function analyseTokenInventory(styleTokens, tokenUsage, stylingAnalysis) {
  const usageRows = styleTokens.map((token) => {
    const usedByFiles = [...(tokenUsage.usageByToken.get(token.token) || new Set())].sort();
    return {
      ...token,
      usedByFiles,
      usedByCount: usedByFiles.length
    };
  });

  const summary = {
    Colour: { tokenCount: 0, used: 0, unused: 0 },
    Spacing: { tokenCount: 0, used: 0, unused: 0 },
    Typography: { tokenCount: 0, used: 0, unused: 0 },
    Other: { tokenCount: 0, used: 0, unused: 0 }
  };

  usageRows.forEach((row) => {
    const key = row.category === 'colour'
      ? 'Colour'
      : row.category === 'spacing'
        ? 'Spacing'
        : row.category === 'typography'
          ? 'Typography'
          : 'Other';
    summary[key].tokenCount += 1;
    if (row.usedByCount > 0) {
      summary[key].used += 1;
    } else {
      summary[key].unused += 1;
    }
  });

  const namespaceAnalysis = summarizeNamespaces(usageRows);
  const colourDrivenGaps = stylingAnalysis.colorGroups
    .filter((group) => ['new', 'deliberate'].includes(group.status))
    .map((group) => ({
      token: group.proposedToken,
      requiredBy: unique(group.occurrences.map((entry) => path.basename(entry.file))).join(', '),
      currentHardcodedValue: summarizeHardcodedValues(group.occurrences)
    }));

  const undefinedTokenGaps = tokenUsage.undefinedTokens.map((entry) => ({
    token: entry.token,
    requiredBy: entry.files.map((filePath) => path.basename(filePath)).join(', '),
    currentHardcodedValue: '—'
  }));

  return {
    usageRows,
    summary,
    namespaceAnalysis,
    gaps: dedupeGapRows([...colourDrivenGaps, ...undefinedTokenGaps])
  };
}

function analyseDefensiveRendering(defensiveRows, statusRows, componentIndex, mdxFacingComponentIndex) {
  const statusByComponent = new Map(statusRows.map((row) => [row.component, row]));
  const highRows = [];
  const mediumGroups = new Map();

  defensiveRows.forEach((row) => {
    const componentMeta = componentIndex.componentMetaByName.get(row.component);
    if (!componentMeta) {
      return;
    }

    if (row.crashRisk === 'HIGH') {
      highRows.push(buildHighRiskEntry(row, componentMeta, statusByComponent, mdxFacingComponentIndex));
      return;
    }

    if (row.crashRisk !== 'MEDIUM') {
      return;
    }

    const mediumCategory = classifyMediumRisk(componentMeta, row);
    if (!mediumGroups.has(mediumCategory.key)) {
      mediumGroups.set(mediumCategory.key, {
        ...mediumCategory,
        rows: []
      });
    }
    mediumGroups.get(mediumCategory.key).rows.push({
      component: row.component,
      filePath: componentMeta.filePath,
      line: row.evidenceLine,
      missingGuardFor: mediumCategory.describe(componentMeta)
    });
  });

  const groupedMediumRows = [...mediumGroups.values()].map((group) => ({
    ...group,
    rows: group.rows.sort((left, right) => left.component.localeCompare(right.component))
  }));

  groupedMediumRows.sort((left, right) => left.title.localeCompare(right.title));

  return {
    highRows,
    mediumGroups: groupedMediumRows
  };
}

function buildHighRiskEntry(defensiveRow, componentMeta, statusByComponent, mdxFacingComponentIndex) {
  const source = readSource(componentMeta.filePath);
  const override = HIGH_RISK_OVERRIDES[defensiveRow.component];
  const statusRow = statusByComponent.get(defensiveRow.component) || {};
  const issue =
    statusRow.reason &&
    !statusRow.reason.includes('Renders with no known')
      ? statusRow.reason
      : override
        ? override.issue
        : deriveDefensiveIssue(componentMeta);
  const evidenceLine = pickHighRiskSnippetLine(defensiveRow, statusRow, override, source.lines);

  const currentSnippet = extractSnippet(source.lines, evidenceLine, 6);
  const fixSnippet = override ? override.fix : buildGenericHighRiskFix(componentMeta);
  const guards = override ? [...override.guards] : deriveGenericGuardChecklist(componentMeta);
  if (mdxFacingComponentIndex?.has(componentMeta.filePath)) {
    guards.push(
      'This file is imported directly by routable MDX pages. Do not hoist the fix into a private file-scope helper; keep it inline in the exported component or import it from a colocated .js helper module.'
    );
  }

  return {
    component: defensiveRow.component,
    filePath: componentMeta.filePath,
    line: evidenceLine,
    issue,
    currentSnippet,
    fixSnippet,
    additionalGuards: guards,
    visualImpact:
      'None expected when data is valid; the change only prevents page-killing render failures on invalid input.'
  };
}

function pickHighRiskSnippetLine(defensiveRow, statusRow, override, lines) {
  const reasonLine = extractLineFromStatusReason(statusRow.reason);
  if (reasonLine > 0 && reasonLine <= lines.length) {
    const reasonText = compactWhitespace(lines[reasonLine - 1]);
    if (reasonText && !isCommentOnlyLine(reasonText)) {
      return reasonLine;
    }
  }

  const snippetLine = findLineContaining(lines, override ? override.snippetSearch : '');
  if (snippetLine > 0) {
    return snippetLine;
  }

  if (defensiveRow.evidenceLine > 0 && defensiveRow.evidenceLine <= lines.length) {
    return defensiveRow.evidenceLine;
  }

  return findNameLine(lines, defensiveRow.component);
}

function classifyMediumRisk(componentMeta, defensiveRow) {
  const source = componentMeta.blockText;
  const requiredProps = componentMeta.requiredProps.filter((entry) => entry.propName && entry.propName !== 'children');
  const unsafeCollection = detectUnsafeCollection(componentMeta);

  if (requiredProps.length > 0 && defensiveRow.guardsProps === false) {
    return {
      key: 'missing-prop-guard',
      title: 'Common MEDIUM pattern: Missing prop null guard',
      template: `if (!requiredProp) {
  console.warn("[ComponentName] Missing required prop: requiredProp");
  return null;
}`,
      describe(meta) {
        return meta.requiredProps
          .filter((entry) => entry.propName && entry.propName !== 'children')
          .map((entry) => entry.propName)
          .join(', ');
      }
    };
  }

  if (unsafeCollection) {
    return {
      key: 'missing-collection-guard',
      title: 'Common MEDIUM pattern: Missing array or collection guard',
      template: `const safeItems = Array.isArray(items) ? items : [];
return safeItems.map((item) => /* existing render */);`,
      describe() {
        return unsafeCollection;
      }
    };
  }

  if (/\bwindow\b|\bdocument\b|getContext\(/.test(source)) {
    return {
      key: 'missing-dom-guard',
      title: 'Common MEDIUM pattern: Missing DOM or browser capability guard',
      template: `if (typeof window === "undefined" || !ref.current) {
  return null;
}`,
      describe() {
        return 'browser or DOM API availability';
      }
    };
  }

  return {
    key: 'custom-medium-fix',
    title: 'Common MEDIUM pattern: Component-specific guard required',
    template: `console.warn("[ComponentName] Invalid input");
return null;`,
    describe(meta) {
      return deriveDefensiveIssue(meta);
    }
  };
}

function detectUnsafeCollection(componentMeta) {
  const body = componentMeta.blockText;
  const candidates = componentMeta.params
    .filter((entry) => entry.kind === 'prop')
    .map((entry) => entry.localName);

  for (const candidate of candidates) {
    for (const method of ARRAY_METHODS) {
      const re = new RegExp(`\\b${escapeRegExp(candidate)}\\.${method}\\(`);
      if (re.test(body)) {
        return `${candidate}.${method}()`;
      }
    }
  }

  return '';
}

function deriveDefensiveIssue(componentMeta) {
  const unsafeCollection = detectUnsafeCollection(componentMeta);
  if (unsafeCollection) {
    return `Missing collection guard before ${unsafeCollection} can throw when the input prop is not array-shaped.`;
  }

  const requiredProps = componentMeta.requiredProps.filter((entry) => entry.propName && entry.propName !== 'children');
  if (requiredProps.length > 0) {
    return `Missing entry guard for required prop(s): ${requiredProps.map((entry) => entry.propName).join(', ')}.`;
  }

  if (/\bwindow\b|\bdocument\b|getContext\(/.test(componentMeta.blockText)) {
    return 'Missing DOM or browser capability guard around direct platform API usage.';
  }

  return 'Component lacks defensive validation for runtime inputs and render branches.';
}

function buildGenericHighRiskFix(componentMeta) {
  const requiredProps = componentMeta.requiredProps.filter((entry) => entry.propName && entry.propName !== 'children');
  const unsafeCollection = detectUnsafeCollection(componentMeta);

  if (unsafeCollection) {
    const candidate = unsafeCollection.split('.')[0];
    return `const safe${capitalize(candidate)} = Array.isArray(${candidate}) ? ${candidate} : [];
// Replace ${unsafeCollection} with safe${capitalize(candidate)}.${unsafeCollection.split('.')[1]}`;
  }

  if (requiredProps.length > 0) {
    const guard = requiredProps.map((entry) => `!${entry.localName}`).join(' || ');
    return `if (${guard}) {
  console.warn("[${componentMeta.name}] Missing required prop");
  return null;
}`;
  }

  return `try {
  // existing render logic
} catch (error) {
  console.warn("[${componentMeta.name}]", error?.message);
  return null;
}`;
}

function deriveGenericGuardChecklist(componentMeta) {
  const checklist = [];
  const requiredProps = componentMeta.requiredProps.filter((entry) => entry.propName && entry.propName !== 'children');

  if (requiredProps.length > 0) {
    checklist.push(`Null check at component entry for ${requiredProps.map((entry) => entry.propName).join(', ')}`);
  }

  const unsafeCollection = detectUnsafeCollection(componentMeta);
  if (unsafeCollection) {
    checklist.push(`Array normalisation before ${unsafeCollection}`);
  }

  if (/\bwindow\b|\bdocument\b|getContext\(/.test(componentMeta.blockText)) {
    checklist.push('Browser/DOM capability guard before platform API access');
  }

  if (checklist.length === 0) {
    checklist.push('Fallback warning and null return on invalid input');
  }

  return checklist;
}

function renderMigrationImpactReport(context) {
  const lines = [
    ...buildGeneratedReportPreamble(
      'Migration Impact Report',
      'Summarize component import-rewrite impact and migration risk for the component-governance remediation phase.',
      context
    ),
    `Source: ${context.auditFile}`,
    '',
    '## Risk Summary',
    '',
    '| Risk level | File count | Total import rewrites (estimated) |',
    '|-----------|-----------|----------------------------------|',
    `| HIGH (50+ import rewrites) | ${context.migrationAnalysis.riskSummary.HIGH.fileCount} | ${context.migrationAnalysis.riskSummary.HIGH.totalRewrites} |`,
    `| MEDIUM (10-49 rewrites) | ${context.migrationAnalysis.riskSummary.MEDIUM.fileCount} | ${context.migrationAnalysis.riskSummary.MEDIUM.totalRewrites} |`,
    `| LOW (<10 rewrites) | ${context.migrationAnalysis.riskSummary.LOW.fileCount} | ${context.migrationAnalysis.riskSummary.LOW.totalRewrites} |`,
    '',
    '## Per-File Impact (ordered by total import rewrite count, highest first)',
    ''
  ];

  context.migrationAnalysis.groups.forEach((group) => {
    const targetLabel =
      group.action === 'SPLIT'
        ? unique([
            ...(group.splitDetails && group.splitDetails.stayingExports.length > 0 ? [group.currentPath] : []),
            ...group.targetPaths
          ]).join(' + ')
        : group.targetPaths[0] || group.currentPath;

    lines.push(`### ${group.currentPath} -> ${targetLabel}`);
    lines.push('');
    lines.push(`**Action:** ${group.action}`);
    lines.push(`**Exports affected:** ${formatCodeList(group.exportsAffected)}`);
    lines.push(`**Risk:** ${group.risk}`);
    lines.push('');
    lines.push('**Import rewrite inventory:**');
    lines.push('');
    lines.push('| Importing page | Current import statement | New import statement |');
    lines.push('|---------------|--------------------------|----------------------|');

    if (group.importRows.length === 0) {
      lines.push('| — | — | — |');
    } else {
      group.importRows.forEach((row) => {
        lines.push(
          `| ${escapeMarkdownCell(row.filePath)} | ${escapeMarkdownCell(inlineCode(row.currentImportStatement))} | ${escapeMarkdownCell(row.newImportStatements.map((statement) => inlineCode(statement)).join('<br />'))} |`
        );
      });
    }

    lines.push('');
    lines.push(`**Total rewrites:** ${group.totalRewrites}`);
    lines.push(`**Import sites:** ${group.importSites}`);
    lines.push(
      `**Locale breakdown:** en: ${group.localeBreakdown.en}, es: ${group.localeBreakdown.es}, fr: ${group.localeBreakdown.fr}, cn: ${group.localeBreakdown.cn}, other: ${group.localeBreakdown.other}`
    );

    if (group.splitDetails) {
      lines.push('');
      lines.push('**Split details:**');
      lines.push(`- Exports staying in this file: ${group.splitDetails.stayingExports.length ? formatCodeList(group.splitDetails.stayingExports) : '—'}`);
      group.splitDetails.movingByTarget.forEach((entry) => {
        lines.push(`- Exports moving to ${inlineCode(withLeadingSlash(entry.targetPath))}: ${formatCodeList(entry.exports)}`);
      });
      lines.push(
        `- Pages that import BOTH staying and moving exports: ${group.splitDetails.multiTargetImporters.length ? formatCodeList(group.splitDetails.multiTargetImporters) : '—'}`
      );
    }

    if (group.mergeExports.length > 0) {
      lines.push('');
      lines.push(
        `**Merge-sensitive exports:** ${formatCodeList(group.mergeExports)}`
      );
      lines.push(
        `**Merge-sensitive importers:** ${group.mergeSensitiveImporters.length ? formatCodeList(group.mergeSensitiveImporters) : '—'}`
      );
      lines.push(
        '**Notes:** Symbol names may need consolidation in Phase 2b even when the file-path rewrite is straightforward.'
      );
    }

    lines.push('');
  });

  return appendDriftNotes(lines, context.driftNotes, ['Export line drift:', 'Styling line drift:']);
}

function renderColourRemediationReport(context) {
  const colourGroups = context.stylingAnalysis.colorGroups;
  const hexGroups = colourGroups.filter((group) => !group.displayValue.toLowerCase().startsWith('rgb'));
  const rgbGroups = colourGroups.filter((group) => group.displayValue.toLowerCase().startsWith('rgb'));
  const summary = summarizeColourStatuses(colourGroups);
  const newTokenRows = colourGroups
    .filter((group) => ['new', 'deliberate'].includes(group.status))
    .map((group) => ({
      token: group.proposedToken,
      lightValue: group.displayValue,
      darkValue: group.darkValue || group.displayValue,
      usedBy: unique(group.occurrences.map((entry) => path.basename(entry.file))).join(', '),
      category: group.category
    }));
  const deliberateRows = colourGroups.filter((group) => group.deliberate);

  const lines = [
    ...buildGeneratedReportPreamble(
      'Colour Remediation Report',
      'Catalog hardcoded colour usage, token gaps, and replacement decisions for the component-governance remediation phase.',
      context
    ),
    '',
    '## Token Coverage Summary',
    '',
    '| Status | Count | Action needed |',
    '|--------|-------|--------------|',
    `| Direct token match exists | ${summary.direct} | Replace in Phase 2b |`,
    `| Close match (verify intent) | ${summary.close} | Human confirms before replacing |`,
    `| No token exists — new token needed | ${summary.new} | Add to style.css before Phase 2b |`,
    `| Deliberate hardcoded value (non-token) | ${summary.deliberate} | Human decides: create token or exempt |`,
    '',
    '## Unique Banned Colour Values',
    '',
    '| # | Value | Occurrences | Files | Existing token match | Proposed token | Action | Notes |',
    '|---|-------|-------------|-------|---------------------|---------------|--------|-------|'
  ];

  if (hexGroups.length === 0) {
    lines.push('| 1 | — | 0 | — | — | — | — | No hardcoded hex values were resolved from the audit. |');
  } else {
    hexGroups.forEach((group, index) => {
      lines.push(
        `| ${index + 1} | ${escapeMarkdownCell(group.displayValue)} | ${group.occurrenceCount} | ${escapeMarkdownCell(group.filesSummary)} | ${escapeMarkdownCell(formatTokenMatches(group.existingTokenMatch))} | ${escapeMarkdownCell(group.proposedToken || '—')} | ${escapeMarkdownCell(group.action)} | ${escapeMarkdownCell(group.notes || '—')} |`
      );
    });
  }

  lines.push('');
  lines.push('## rgb/rgba Values');
  lines.push('');
  lines.push('| # | Value | File:Line | Existing token match | Proposed token | Notes |');
  lines.push('|---|-------|-----------|---------------------|---------------|-------|');
  if (rgbGroups.length === 0) {
    lines.push('| 1 | — | — | — | — | No rgb/rgba violations were resolved from the audit. |');
  } else {
    rgbGroups.forEach((group, index) => {
      const firstOccurrence = group.occurrences[0];
      lines.push(
        `| ${index + 1} | ${escapeMarkdownCell(group.displayValue)} | ${escapeMarkdownCell(`${firstOccurrence.file}:${firstOccurrence.line}`)} | ${escapeMarkdownCell(formatTokenMatches(group.existingTokenMatch))} | ${escapeMarkdownCell(group.proposedToken || '—')} | ${escapeMarkdownCell(group.notes || '—')} |`
      );
    });
  }

  lines.push('');
  lines.push('## !important Usage');
  lines.push('');
  lines.push('| # | File:Line | Context | Can be removed? | Notes |');
  lines.push('|---|-----------|---------|----------------|-------|');
  if (context.stylingAnalysis.importantOccurrences.length === 0) {
    lines.push('| 1 | — | — | — | No `!important` usage was resolved from the audit. |');
  } else {
    context.stylingAnalysis.importantOccurrences.forEach((entry, index) => {
      lines.push(
        `| ${index + 1} | ${escapeMarkdownCell(`${entry.file}:${entry.line}`)} | ${escapeMarkdownCell(entry.context)} | ${escapeMarkdownCell(entry.canRemove)} | ${escapeMarkdownCell(entry.notes)} |`
      );
    });
  }

  lines.push('');
  lines.push('## New Tokens Needed (Proposed Additions to style.css)');
  lines.push('');
  lines.push('| Token name | Light value | Dark value | Used by | Category |');
  lines.push('|-----------|-------------|-----------|---------|----------|');
  if (newTokenRows.length === 0) {
    lines.push('| — | — | — | — | No new tokens are required if the direct matches are accepted as-is. |');
  } else {
    dedupeTokenProposalRows(newTokenRows).forEach((row) => {
      lines.push(
        `| ${escapeMarkdownCell(row.token)} | ${escapeMarkdownCell(row.lightValue)} | ${escapeMarkdownCell(row.darkValue)} | ${escapeMarkdownCell(row.usedBy)} | ${escapeMarkdownCell(row.category)} |`
      );
    });
  }

  lines.push('');
  lines.push('## Deliberate Hardcoded Values (Exemption Candidates)');
  lines.push('');
  lines.push('| Value | File | Context | Recommendation |');
  lines.push('|-------|------|---------|---------------|');
  if (deliberateRows.length === 0) {
    lines.push('| — | — | — | No deliberate brand-colour candidates were detected. |');
  } else {
    deliberateRows.forEach((group) => {
      const firstOccurrence = group.occurrences[0];
      lines.push(
        `| ${escapeMarkdownCell(group.displayValue)} | ${escapeMarkdownCell(firstOccurrence.file)} | ${escapeMarkdownCell(compactWhitespace(firstOccurrence.context))} | ${escapeMarkdownCell(`Prefer ${group.proposedToken} for consistency, or explicitly exempt this brand colour.`)} |`
      );
    });
  }

  lines.push('');
  lines.push('## Decision Required Before Phase 2b');
  lines.push('');
  lines.push('1. Review the proposed `--lp-*` token names and confirm any brand-token exemptions.');
  lines.push('2. Review every close-match replacement where the current value could map to more than one legacy token.');
  lines.push('3. Review every `!important` instance and decide whether Phase 2b removes it or defers it.');
  lines.push('4. Add any approved new root tokens to `style.css` before bulk colour replacement begins.');

  return appendDriftNotes(lines, context.driftNotes, ['Styling line drift:']);
}

function renderStyleTokenAuditReport(context) {
  const usageRows = context.tokenAudit.usageRows;
  const lines = [
    ...buildGeneratedReportPreamble(
      'style.css Token Audit',
      'Inventory style.css token usage and namespace gaps for the component-governance remediation phase.',
      context
    ),
    `File: ${context.stylePath}`,
    '',
    '## Token Inventory',
    '',
    '| # | Token | Light value | Dark value | Category | Used by components? |',
    '|---|-------|------------|-----------|----------|-------------------|'
  ];

  usageRows.forEach((row, index) => {
    lines.push(
      `| ${index + 1} | ${escapeMarkdownCell(row.token)} | ${escapeMarkdownCell(row.lightValue || '—')} | ${escapeMarkdownCell(row.darkValue || '—')} | ${escapeMarkdownCell(row.category)} | ${escapeMarkdownCell(row.usedByCount > 0 ? `Yes — ${row.usedByCount} component${row.usedByCount === 1 ? '' : 's'}` : 'No — unused')} |`
    );
  });

  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| Category | Token count | Used by components | Unused |');
  lines.push('|----------|-------------|-------------------|--------|');
  lines.push(
    `| Colour | ${context.tokenAudit.summary.Colour.tokenCount} | ${context.tokenAudit.summary.Colour.used} | ${context.tokenAudit.summary.Colour.unused} |`
  );
  lines.push(
    `| Spacing | ${context.tokenAudit.summary.Spacing.tokenCount} | ${context.tokenAudit.summary.Spacing.used} | ${context.tokenAudit.summary.Spacing.unused} |`
  );
  lines.push(
    `| Typography | ${context.tokenAudit.summary.Typography.tokenCount} | ${context.tokenAudit.summary.Typography.used} | ${context.tokenAudit.summary.Typography.unused} |`
  );
  lines.push(
    `| Other | ${context.tokenAudit.summary.Other.tokenCount} | ${context.tokenAudit.summary.Other.used} | ${context.tokenAudit.summary.Other.unused} |`
  );

  lines.push('');
  lines.push('## Namespace Analysis');
  lines.push('');
  lines.push('| Current prefix | Count | Proposed --lp-* equivalent |');
  lines.push('|---------------|-------|---------------------------|');
  context.tokenAudit.namespaceAnalysis.forEach((entry) => {
    lines.push(
      `| ${escapeMarkdownCell(entry.prefix)} | ${entry.count} | ${escapeMarkdownCell(entry.proposed)} |`
    );
  });

  lines.push('');
  lines.push('## Gaps');
  lines.push('');
  lines.push('| Needed token | Required by | Current hardcoded value |');
  lines.push('|-------------|-------------|------------------------|');
  if (context.tokenAudit.gaps.length === 0) {
    lines.push('| — | — | No root-token gaps were detected beyond the existing inventory. |');
  } else {
    context.tokenAudit.gaps.forEach((entry) => {
      lines.push(
        `| ${escapeMarkdownCell(entry.token)} | ${escapeMarkdownCell(entry.requiredBy)} | ${escapeMarkdownCell(entry.currentHardcodedValue)} |`
      );
    });
  }

  return appendDriftNotes(lines, context.driftNotes, []);
}

function renderDefensiveRenderingReport(context) {
  const lines = [
    ...buildGeneratedReportPreamble(
      'Defensive Rendering Remediation Report',
      'Summarize component crash-risk findings and defensive rendering fixes for the component-governance remediation phase.',
      context
    ),
    `Source: ${context.auditFile} (Defensive Rendering section)`,
    '',
    `## HIGH Crash Risk (${context.defensiveAnalysis.highRows.length} components)`,
    ''
  ];

  context.defensiveAnalysis.highRows.forEach((entry) => {
    lines.push(`### ${entry.component} — ${entry.filePath}`);
    lines.push('');
    lines.push('**Risk:** HIGH');
    lines.push(`**Issue:** ${entry.issue}`);
    lines.push(`**Evidence:** Line ${entry.line}`);
    lines.push('');
    lines.push('**Current code (relevant section):**');
    lines.push('```jsx');
    lines.push(entry.currentSnippet);
    lines.push('```');
    lines.push('');
    lines.push('**Proposed fix:**');
    lines.push('```jsx');
    lines.push(entry.fixSnippet);
    lines.push('```');
    lines.push('');
    lines.push('**Additional guards needed:**');
    entry.additionalGuards.forEach((guard) => {
      lines.push(`- [ ] ${guard}`);
    });
    lines.push('');
    lines.push(`**Visual impact:** ${entry.visualImpact}`);
    lines.push('');
  });

  const mediumComponentCount = context.defensiveAnalysis.mediumGroups.reduce(
    (sum, group) => sum + group.rows.length,
    0
  );

  lines.push(`## MEDIUM Crash Risk (${mediumComponentCount} components)`);
  lines.push('');

  context.defensiveAnalysis.mediumGroups.forEach((group) => {
    lines.push(`### ${group.title}`);
    lines.push('');
    lines.push('```jsx');
    lines.push(group.template);
    lines.push('```');
    lines.push('');
    lines.push('| Component | File | Missing guard for | Line |');
    lines.push('|-----------|------|------------------|------|');
    group.rows.forEach((row) => {
      lines.push(
        `| ${escapeMarkdownCell(row.component)} | ${escapeMarkdownCell(row.filePath)} | ${escapeMarkdownCell(row.missingGuardFor || 'component-specific defensive check')} | ${row.line} |`
      );
    });
    lines.push('');
  });

  lines.push('## Summary');
  lines.push('');
  lines.push('| Risk | Count | Fix complexity |');
  lines.push('|------|-------|---------------|');
  lines.push(`| HIGH — custom fix per component | ${context.defensiveAnalysis.highRows.length} | Medium |`);
  lines.push(`| MEDIUM — grouped defensive guard patterns | ${mediumComponentCount} | Low to Medium |`);

  return appendDriftNotes(lines, context.driftNotes, []);
}

function appendDriftNotes(lines, driftNotes, prefixes = null) {
  const filteredNotes =
    prefixes === null
      ? driftNotes
      : prefixes.length === 0
        ? []
        : driftNotes.filter((note) => prefixes.some((prefix) => note.startsWith(prefix)));

  if (filteredNotes.length === 0) {
    return `${lines.join('\n').trim()}\n`;
  }

  lines.push('');
  lines.push('## Audit Drift Notes');
  lines.push('');
  unique(filteredNotes).forEach((note) => {
    lines.push(`- ${note}`);
  });

  return `${lines.join('\n').trim()}\n`;
}

function buildGeneratedReportPreamble(title, purpose, context) {
  return [
    ...buildGeneratedMarkdownCommentLines({
      marker: 'generated-remediation-report:v1',
      script: REPORT_GENERATOR_SCRIPT,
      purpose,
      runWhen: 'The approved component-governance audit changes or remediation reports need regeneration.',
      runCommand: `node ${REPORT_GENERATOR_SCRIPT}`
    }),
    '',
    `# ${title}`,
    '',
    `Generated: ${context.generatedAt}`
  ];
}

function walkFiles(rootDir, predicate, out = []) {
  const fullRoot = path.join(REPO_ROOT, rootDir);
  if (!fs.existsSync(fullRoot)) {
    return out;
  }

  const entries = fs.readdirSync(fullRoot, { withFileTypes: true });
  entries.forEach((entry) => {
    const relPath = toPosix(path.join(rootDir, entry.name));
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git') {
        return;
      }
      walkFiles(relPath, predicate, out);
      return;
    }

    if (predicate(relPath)) {
      out.push(relPath);
    }
  });

  return out.sort();
}

function findNameLine(lines, name) {
  const re = new RegExp(`\\b${escapeRegExp(name)}\\b`);
  for (let index = 0; index < lines.length; index += 1) {
    if (re.test(lines[index])) {
      return index + 1;
    }
  }
  return 1;
}

function findLineContaining(lines, searchText) {
  const normalizedSearch = compactWhitespace(searchText);
  if (!normalizedSearch) {
    return 0;
  }

  for (let index = 0; index < lines.length; index += 1) {
    if (compactWhitespace(lines[index]).includes(normalizedSearch)) {
      return index + 1;
    }
  }

  return 0;
}

function extractLineFromStatusReason(reason) {
  const match = String(reason || '').match(/\bL(\d+)\b/);
  return match ? Number.parseInt(match[1], 10) : 0;
}

function isCommentOnlyLine(lineText) {
  const value = compactWhitespace(lineText);
  return (
    value.startsWith('/**') ||
    value.startsWith('/*') ||
    value.startsWith('*') ||
    value.startsWith('//')
  );
}

function lineNumberFromIndex(content, index) {
  return content.slice(0, index).split('\n').length;
}

function extractSnippet(lines, lineNumber, radius) {
  const start = Math.max(0, lineNumber - radius - 1);
  const end = Math.min(lines.length, lineNumber + radius);
  return trimBlankLines(lines.slice(start, end).join('\n'));
}

function readSource(filePath) {
  const absPath = path.join(REPO_ROOT, filePath);
  const content = fs.readFileSync(absPath, 'utf8');
  return {
    content,
    lines: content.split('\n')
  };
}

function compactWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function buildNearbyContext(lines, lineNumber, radius) {
  const start = Math.max(0, lineNumber - radius - 1);
  const end = Math.min(lines.length, lineNumber + radius);
  return compactWhitespace(lines.slice(start, end).join(' '));
}

function classifyTokenCategory(token, value) {
  const lowerToken = token.toLowerCase();
  const lowerValue = String(value || '').toLowerCase();

  if (
    lowerToken.includes('color') ||
    lowerToken.includes('accent') ||
    lowerToken.includes('text') ||
    lowerToken.includes('background') ||
    lowerToken.includes('border') ||
    lowerValue.startsWith('#') ||
    lowerValue.startsWith('rgb')
  ) {
    return 'colour';
  }

  if (lowerToken.includes('space') || /\b(rem|px|em|vw|vh)\b/.test(lowerValue)) {
    return 'spacing';
  }

  if (lowerToken.includes('font') || lowerToken.includes('line-height')) {
    return 'typography';
  }

  return 'other';
}

function summarizeNamespaces(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const prefix = deriveNamespacePrefix(row.token);
    if (!groups.has(prefix)) {
      groups.set(prefix, {
        prefix,
        count: 0,
        proposed: deriveNamespaceProposal(prefix)
      });
    }
    groups.get(prefix).count += 1;
  });

  return [...groups.values()].sort((left, right) => left.prefix.localeCompare(right.prefix));
}

function deriveNamespacePrefix(token) {
  if (token.startsWith('--accent')) return '--accent*';
  if (token.startsWith('--hero-')) return '--hero-*';
  if (token.startsWith('--text')) return '--text*';
  if (token.startsWith('--muted-')) return '--muted-*';
  if (token.startsWith('--background')) return '--background*';
  if (token.startsWith('--card-')) return '--card-*';
  if (token.startsWith('--border')) return '--border*';
  if (token.startsWith('--button-')) return '--button-*';
  if (token.startsWith('--lp-')) return '--lp-*';
  return token;
}

function deriveNamespaceProposal(prefix) {
  if (prefix === '--accent*') return '--lp-color-accent*';
  if (prefix === '--hero-*') return '--lp-color-hero-*';
  if (prefix === '--text*' || prefix === '--muted-*') return '--lp-color-text-*';
  if (prefix === '--background*' || prefix === '--card-*') return '--lp-color-surface-*';
  if (prefix === '--border*') return '--lp-color-border*';
  if (prefix === '--button-*') return '--lp-color-button-*';
  if (prefix === '--lp-*') return '--lp-*';
  return `--lp-${prefix.replace(/^--/, '')}`;
}

function dedupeGapRows(rows) {
  const seen = new Map();
  rows.forEach((row) => {
    if (!seen.has(row.token)) {
      seen.set(row.token, { ...row });
      return;
    }

    const existing = seen.get(row.token);
    existing.requiredBy = unique(
      `${existing.requiredBy}, ${row.requiredBy}`
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
    ).join(', ');
    if (existing.currentHardcodedValue === '—' && row.currentHardcodedValue !== '—') {
      existing.currentHardcodedValue = row.currentHardcodedValue;
    }
  });

  return [...seen.values()].sort((left, right) => left.token.localeCompare(right.token));
}

function dedupeTokenProposalRows(rows) {
  const map = new Map();
  rows.forEach((row) => {
    if (!map.has(row.token)) {
      map.set(row.token, { ...row });
      return;
    }

    const existing = map.get(row.token);
    existing.usedBy = unique(
      `${existing.usedBy}, ${row.usedBy}`
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
    ).join(', ');
  });
  return [...map.values()].sort((left, right) => left.token.localeCompare(right.token));
}

function summarizeColourStatuses(groups) {
  return groups.reduce(
    (accumulator, group) => {
      accumulator[group.status] += 1;
      return accumulator;
    },
    {
      direct: 0,
      close: 0,
      new: 0,
      deliberate: 0
    }
  );
}

function summarizeFiles(occurrences) {
  const counts = new Map();
  occurrences.forEach((entry) => {
    const name = path.basename(entry.file);
    counts.set(name, (counts.get(name) || 0) + 1);
  });

  return [...counts.entries()]
    .sort((left, right) => left[0].localeCompare(right[0]))
    .map(([name, count]) => `${name} (${count})`)
    .join(', ');
}

function summarizeHardcodedValues(occurrences) {
  return unique(occurrences.map((entry) => entry.value)).join(', ');
}

function inferColourCategory(context) {
  if (context.includes('overlay')) return 'Overlay';
  if (context.includes('icon')) return 'Icon';
  if (context.includes('callout')) return 'UI / callout';
  if (context.includes('brand')) return 'Brand / third-party';
  return 'Colour';
}

function deriveColourTokenFromContext(group, context, existingToken) {
  if (existingToken && LEGACY_TOKEN_EQUIVALENTS[existingToken]) {
    return LEGACY_TOKEN_EQUIVALENTS[existingToken];
  }

  const baseName = path.basename(group.occurrences[0].file, path.extname(group.occurrences[0].file));
  const sanitizedBase = baseName.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();

  if (context.includes('icon')) {
    return '--lp-color-icon-accent';
  }
  if (context.includes('border')) {
    return '--lp-color-border-custom';
  }
  if (context.includes('background')) {
    return '--lp-color-surface-custom';
  }

  return `--lp-color-${sanitizedBase || 'custom'}`;
}

function proposeLpTokenName(token) {
  const normalized = token.replace(/^--/, '');
  return `--lp-${normalized}`;
}

function formatTokenMatches(tokenNames) {
  if (!tokenNames || tokenNames.length === 0) {
    return '—';
  }
  return tokenNames.map((token) => formatTokenReference(token)).join(', ');
}

function formatTokenReference(token) {
  return `var(${token})`;
}

function inlineCode(value) {
  return `\`${String(value || '')}\``;
}

function formatCodeList(items) {
  if (!items || items.length === 0) {
    return '—';
  }
  return items.map((item) => inlineCode(item)).join(', ');
}

function withLeadingSlash(repoRelativePath) {
  const normalized = toPosix(repoRelativePath);
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

function getLocaleBucket(filePath) {
  const normalized = toPosix(filePath);
  if (normalized.startsWith('v2/es/')) return 'es';
  if (normalized.startsWith('v2/fr/')) return 'fr';
  if (normalized.startsWith('v2/cn/')) return 'cn';
  if (normalized.startsWith('v2/internal/')) return 'other';
  if (/^v2\/x-/.test(normalized)) return 'other';
  if (normalized.startsWith('v2/')) return 'en';
  return 'other';
}

function buildImportStatement({ defaultImport, namespaceImport, namedImports, sourcePath, quote, hasSemicolon }) {
  const parts = [];
  if (defaultImport) {
    parts.push(defaultImport);
  }
  if (namespaceImport) {
    parts.push(namespaceImport);
  }
  if (namedImports.length > 0) {
    parts.push(`{ ${namedImports.map((entry) => entry.raw).join(', ')} }`);
  }

  return `import ${parts.join(', ')} from ${quote}${withLeadingSlash(sourcePath)}${quote}${hasSemicolon ? ';' : ''}`;
}

function normalizeImportSource(value) {
  return toPosix(String(value || '').replace(/^\/+/, ''));
}

function normalizeColorKey(value) {
  const parsed = parseColorValue(value);
  if (!parsed) {
    return String(value || '').trim().toLowerCase();
  }

  if (typeof parsed.a === 'number' && parsed.a !== 1) {
    return `rgba(${parsed.r},${parsed.g},${parsed.b},${trimTrailingZeros(parsed.a)})`;
  }

  return `#${[parsed.r, parsed.g, parsed.b]
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')}`;
}

function extractColorLiterals(value) {
  return String(value || '').match(/#[0-9a-fA-F]{3,8}\b|\brgba?\([^)]*\)/g) || [];
}

function parseColorValue(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  if (normalized.startsWith('#')) {
    const hex = normalized.slice(1);
    if (hex.length === 3) {
      return {
        r: Number.parseInt(hex[0] + hex[0], 16),
        g: Number.parseInt(hex[1] + hex[1], 16),
        b: Number.parseInt(hex[2] + hex[2], 16),
        a: 1
      };
    }

    if (hex.length === 6) {
      return {
        r: Number.parseInt(hex.slice(0, 2), 16),
        g: Number.parseInt(hex.slice(2, 4), 16),
        b: Number.parseInt(hex.slice(4, 6), 16),
        a: 1
      };
    }

    return null;
  }

  const rgbMatch = normalized.match(/^rgba?\(([^)]+)\)$/);
  if (!rgbMatch) {
    return null;
  }

  const parts = rgbMatch[1]
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (parts.length < 3) {
    return null;
  }

  return {
    r: Number.parseInt(parts[0], 10),
    g: Number.parseInt(parts[1], 10),
    b: Number.parseInt(parts[2], 10),
    a: parts.length > 3 ? Number.parseFloat(parts[3]) : 1
  };
}

function colorDistance(left, right) {
  const alphaLeft = typeof left.a === 'number' ? left.a : 1;
  const alphaRight = typeof right.a === 'number' ? right.a : 1;
  const alphaDistance = (alphaLeft - alphaRight) * 255;
  return Math.sqrt(
    (left.r - right.r) ** 2 +
      (left.g - right.g) ** 2 +
      (left.b - right.b) ** 2 +
      alphaDistance ** 2
  );
}

function splitTopLevel(value, delimiter) {
  const out = [];
  let current = '';
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let quote = '';

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    const previous = index > 0 ? value[index - 1] : '';

    if (quote) {
      current += char;
      if (char === quote && previous !== '\\') {
        quote = '';
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      current += char;
      continue;
    }

    if (char === '(') depthParen += 1;
    if (char === ')') depthParen = Math.max(0, depthParen - 1);
    if (char === '{') depthBrace += 1;
    if (char === '}') depthBrace = Math.max(0, depthBrace - 1);
    if (char === '[') depthBracket += 1;
    if (char === ']') depthBracket = Math.max(0, depthBracket - 1);

    if (
      char === delimiter &&
      depthParen === 0 &&
      depthBrace === 0 &&
      depthBracket === 0
    ) {
      out.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  if (current) {
    out.push(current);
  }

  return out;
}

function findTopLevelIndex(value, targetChar) {
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let quote = '';

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    const previous = index > 0 ? value[index - 1] : '';

    if (quote) {
      if (char === quote && previous !== '\\') {
        quote = '';
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '(') depthParen += 1;
    if (char === ')') depthParen = Math.max(0, depthParen - 1);
    if (char === '{') depthBrace += 1;
    if (char === '}') depthBrace = Math.max(0, depthBrace - 1);
    if (char === '[') depthBracket += 1;
    if (char === ']') depthBracket = Math.max(0, depthBracket - 1);

    if (
      char === targetChar &&
      depthParen === 0 &&
      depthBrace === 0 &&
      depthBracket === 0
    ) {
      return index;
    }
  }

  return -1;
}

function extractCssBlock(content, selector) {
  const selectorIndex = content.indexOf(selector);
  if (selectorIndex === -1) {
    return '';
  }

  const braceStart = content.indexOf('{', selectorIndex);
  if (braceStart === -1) {
    return '';
  }

  let depth = 0;
  for (let index = braceStart; index < content.length; index += 1) {
    const char = content[index];
    if (char === '{') depth += 1;
    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return content.slice(braceStart + 1, index);
      }
    }
  }

  return '';
}

function escapeMarkdownCell(value) {
  return sanitizeMarkdownTableCellText(value).replace(/\|/g, '\\|');
}

function trimBlankLines(value) {
  return String(value || '').replace(/^\s*\n/, '').replace(/\n\s*$/, '');
}

function trimTrailingZeros(value) {
  const asString = String(value);
  return asString.includes('.') ? asString.replace(/0+$/, '').replace(/\.$/, '') : asString;
}

function unique(values) {
  return [...new Set(values)];
}

function capitalize(value) {
  const text = String(value || '');
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}
