/**
 * @script      audit-component-usage
 * @type        audit
 * @concern     maintenance
 * @niche       documentation
 * @purpose     
 * @description Component usage auditor — scans pages for component usage patterns and reports statistics
 * @mode        scan
 * @pipeline    manual
 * @scope       operations/scripts
 * @usage       node operations/scripts/audits/components/documentation/audit-component-usage.js
 */
const fs = require('fs');
const path = require('path');
const {
  REPO_ROOT,
  extractExports,
  getCategoryFromPath,
  getComponentFiles,
  getEnglishComponentLibraryDocPaths,
  scanMDXImports
} = require('../../../../../tools/lib/governance/component-governance-utils');

const REPORT_PATH = path.join(REPO_ROOT, 'tasks', 'reports', 'repo-ops', 'component-usage-audit.json');

const V2_DOC_ROOTS = [
  'v2/pages',
  'v2/home',
  'v2/solutions',
  'v2/about',
  'v2/community',
  'v2/developers',
  'v2/gateways',
  'v2/orchestrators',
  'v2/delegators',
  'v2/resources',
  'v2/internal',
  'v2/deprecated',
  'v2/experimental',
  'v2/notes'
].filter((root) => fs.existsSync(root));

function resolveFirstExistingPath(candidates) {
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return candidates[0];
}

function getComponentLibraryAuditFiles() {
  return getEnglishComponentLibraryDocPaths()
    .map((filePath) => resolveFirstExistingPath([filePath]))
    .filter((filePath, index, files) => filePath && files.indexOf(filePath) === index)
    .filter((filePath) => fs.existsSync(filePath));
}

function getAllExportedComponents() {
  const components = new Map();
  getComponentFiles().forEach((file) => {
    extractExports(file.displayPath).forEach((entry) => {
      const relativePath = file.displayPath.replace('snippets/components/', '');
      components.set(entry.name, {
        name: entry.name,
        file: file.absolutePath,
        relativePath,
        category: getCategoryFromPath(file.displayPath)
      });
    });
  });
  return components;
}

function getComponentLibraryComponents() {
  const used = new Set();
  const commented = new Set();
  const libFiles = getComponentLibraryAuditFiles();

  libFiles.forEach((file) => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');

    const importMatches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]\/snippets\/components\/([^'"]+)['"]/g);
    for (const match of importMatches) {
      const imports = match[1].split(',').map((i) => i.trim());
      imports.forEach((imp) => {
        const name = imp.replace(/\/\*.*?\*\//g, '').trim();
        if (name && !name.startsWith('//')) {
          used.add(name);
        }
      });
    }

    const commentedMatches = content.matchAll(/\/\/\s*import\s+{([^}]+)}\s+from/g);
    for (const match of commentedMatches) {
      const imports = match[1].split(',').map((i) => i.trim());
      imports.forEach((imp) => {
        const name = imp.replace(/\/\*.*?\*\//g, '').trim();
        if (name) commented.add(name);
      });
    }

    const jsxCommentMatches = content.matchAll(/{\/\*\s*([^*]+)\s*\*\/}/g);
    for (const match of jsxCommentMatches) {
      const nameMatches = match[1].matchAll(/([A-Z][a-zA-Z0-9]+)/g);
      for (const nameMatch of nameMatches) {
        const name = nameMatch[1];
        if (name.length > 3 && !['This', 'These', 'They', 'That'].includes(name)) {
          commented.add(name);
        }
      }
    }
  });

  return { used, commented };
}

function buildReport() {
  const allComponents = getAllExportedComponents();
  const libComponents = getComponentLibraryComponents();

  const v2Imports = scanMDXImports('v2/**/*.mdx', { publishedOnly: false });
  const snippetImports = scanMDXImports('snippets/**/*.mdx', { publishedOnly: false });

  const allUsed = new Set();
  v2Imports.forEach((_data, componentName) => allUsed.add(componentName));
  snippetImports.forEach((_data, componentName) => allUsed.add(componentName));
  libComponents.used.forEach((componentName) => allUsed.add(componentName));

  const notInLibraryButUsed = [];
  v2Imports.forEach((data, componentName) => {
    if (!libComponents.used.has(componentName) && !libComponents.commented.has(componentName)) {
      notInLibraryButUsed.push({
        component: componentName,
        files: data.pages,
        category: allComponents.get(componentName)?.category || 'unknown'
      });
    }
  });

  const notUsed = [];
  allComponents.forEach((info, componentName) => {
    if (!allUsed.has(componentName)) {
      notUsed.push({
        component: componentName,
        file: info.relativePath,
        category: info.category
      });
    }
  });

  return {
    summary: {
      totalComponents: allComponents.size,
      inComponentLibrary: libComponents.used.size,
      commentedOutInLibrary: libComponents.commented.size,
      usedInV2Pages: v2Imports.size,
      usedInSnippets: snippetImports.size,
      notInLibraryButUsedInV2: notInLibraryButUsed.length,
      notUsedAnywhere: notUsed.length
    },
    notInLibraryButUsedInV2: notInLibraryButUsed.sort((left, right) =>
      left.component.localeCompare(right.component)
    ),
    notUsedAnywhere: notUsed.sort((left, right) =>
      left.component.localeCompare(right.component)
    )
  };
}

function writeReport(report) {
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
}

function run() {
  const report = buildReport();
  console.log(JSON.stringify(report, null, 2));
  writeReport(report);
  return report;
}

if (require.main === module) {
  run();
}

module.exports = {
  getComponentLibraryAuditFiles,
  getComponentLibraryComponents,
  buildReport,
  run
};
