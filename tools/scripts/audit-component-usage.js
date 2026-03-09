/**
 * @script            audit-component-usage
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Component usage auditor — scans pages for component usage patterns and reports statistics
 * @pipeline          P5, P6
 * @usage             node tools/scripts/audit-component-usage.js [flags]
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPORT_PATH = path.join(__dirname, '..', '..', 'tasks', 'reports', 'repo-ops', 'component-usage-audit.json');

const V2_DOC_ROOTS = [
  'v2/pages',
  'v2/home',
  'v2/solutions',
  'v2/about',
  'v2/community',
  'v2/developers',
  'v2/gateways',
  'v2/orchestrators',
  'v2/lpt',
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

// Get all exported components from snippets/components
function getAllExportedComponents() {
  const components = new Map();
  
  // Read all .jsx files in snippets/components
  const componentFiles = execSync('find snippets/components -name "*.jsx" -o -name "*.mdx" | grep -E "(components|\.jsx|\.mdx)$"', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(f => f);
  
  componentFiles.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Find inline exports: export const ComponentName
      const inlineExports = content.matchAll(/^export (const|function|default) (\w+)/gm);
      for (const match of inlineExports) {
        const componentName = match[2];
        const relativePath = path.relative('snippets/components', file);
        components.set(componentName, {
          name: componentName,
          file: file,
          relativePath: relativePath,
          category: getCategory(relativePath)
        });
      }
      
      // Find export statements at end: export { Component1, Component2 }
      const exportStatements = content.matchAll(/^export\s*{([^}]+)}/gm);
      for (const match of exportStatements) {
        const exports = match[1].split(',').map(e => e.trim());
        exports.forEach(exp => {
          const componentName = exp.trim();
          if (componentName) {
            const relativePath = path.relative('snippets/components', file);
            components.set(componentName, {
              name: componentName,
              file: file,
              relativePath: relativePath,
              category: getCategory(relativePath)
            });
          }
        });
      }
    } catch (e) {
      // Skip files that can't be read
    }
  });
  
  return components;
}

function getCategory(filePath) {
  if (filePath.includes('primitives/')) return 'primitives';
  if (filePath.includes('display/')) return 'display';
  if (filePath.includes('content/')) return 'content';
  if (filePath.includes('layout/')) return 'layout';
  if (filePath.includes('integrations/')) return 'integrations';
  if (filePath.includes('domain/')) return 'domain';
  return 'unknown';
}

// Get components used in component library pages
function getComponentLibraryComponents() {
  const used = new Set();
  const commented = new Set();
  
  const libFiles = [
    resolveFirstExistingPath([
      'v2/resources/documentation-guide/component-library.mdx',
      'v2/resources/documentation-guide/component-library.mdx'
    ]),
    resolveFirstExistingPath([
      'v2/resources/documentation-guide/component-library/primitives.mdx',
      'v2/resources/documentation-guide/component-library/primitives.mdx'
    ]),
    resolveFirstExistingPath([
      'v2/resources/documentation-guide/component-library/display.mdx',
      'v2/resources/documentation-guide/component-library/display.mdx'
    ]),
    resolveFirstExistingPath([
      'v2/resources/documentation-guide/component-library/content.mdx',
      'v2/resources/documentation-guide/component-library/content.mdx'
    ]),
    resolveFirstExistingPath([
      'v2/resources/documentation-guide/component-library/layout.mdx',
      'v2/resources/documentation-guide/component-library/layout.mdx'
    ]),
    resolveFirstExistingPath([
      'v2/resources/documentation-guide/component-library/integrations.mdx',
      'v2/resources/documentation-guide/component-library/integrations.mdx'
    ]),
    resolveFirstExistingPath([
      'v2/resources/documentation-guide/component-library/domain.mdx',
      'v2/resources/documentation-guide/component-library/domain.mdx'
    ])
  ];
  
  libFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    
    // Find imports
    const importMatches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]\/snippets\/components\/([^'"]+)['"]/g);
    for (const match of importMatches) {
      const imports = match[1].split(',').map(i => i.trim());
      imports.forEach(imp => {
        const name = imp.replace(/\/\*.*?\*\//g, '').trim();
        if (name && !name.startsWith('//')) {
          used.add(name);
        }
      });
    }
    
    // Find commented out imports
    const commentedMatches = content.matchAll(/\/\/\s*import\s+{([^}]+)}\s+from/g);
    for (const match of commentedMatches) {
      const imports = match[1].split(',').map(i => i.trim());
      imports.forEach(imp => {
        const name = imp.replace(/\/\*.*?\*\//g, '').trim();
        if (name) {
          commented.add(name);
        }
      });
    }
    
    // Find JSX comments
    const jsxCommentMatches = content.matchAll(/{\/\*\s*([^*]+)\s*\*\/}/g);
    for (const match of jsxCommentMatches) {
      const comment = match[1];
      // Extract component names from comments
      const nameMatches = comment.matchAll(/([A-Z][a-zA-Z0-9]+)/g);
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

// Get components used in v2 pages
function getV2PageComponents() {
  const used = new Map(); // component -> [files]
  const searchRoots = V2_DOC_ROOTS.length > 0 ? V2_DOC_ROOTS : ['v2/pages'];
  const findCommand = `find ${searchRoots.join(' ')} -name "*.mdx" -type f`;
  const v2Files = execSync(findCommand, { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter((f) => f && !f.includes('component-library'));
  
  v2Files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const importMatches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]\/snippets\/components\/([^'"]+)['"]/g);
      
      for (const match of importMatches) {
        const imports = match[1].split(',').map(i => i.trim().replace(/\/\*.*?\*\//g, '').trim());
        imports.forEach(imp => {
          if (imp && !imp.startsWith('//')) {
            if (!used.has(imp)) {
              used.set(imp, []);
            }
            used.get(imp).push(file);
          }
        });
      }
    } catch (e) {
      // Skip
    }
  });
  
  return used;
}

// Get components used in snippets
function getSnippetsComponents() {
  const used = new Map(); // component -> [files]
  
  const snippetFiles = execSync('find snippets -name "*.mdx" -type f', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(f => f);
  
  snippetFiles.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const importMatches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]\/snippets\/components\/([^'"]+)['"]/g);
      
      for (const match of importMatches) {
        const imports = match[1].split(',').map(i => i.trim().replace(/\/\*.*?\*\//g, '').trim());
        imports.forEach(imp => {
          if (imp && !imp.startsWith('//')) {
            if (!used.has(imp)) {
              used.set(imp, []);
            }
            used.get(imp).push(file);
          }
        });
      }
    } catch (e) {
      // Skip
    }
  });
  
  return used;
}

// Main audit
const allComponents = getAllExportedComponents();
const libComponents = getComponentLibraryComponents();
const v2Components = getV2PageComponents();
const snippetComponents = getSnippetsComponents();

// Combine all usage
const allUsed = new Set();
v2Components.forEach((files, comp) => allUsed.add(comp));
snippetComponents.forEach((files, comp) => allUsed.add(comp));
libComponents.used.forEach(comp => allUsed.add(comp));

// Find components NOT in component library but used in v2 pages
const notInLibraryButUsed = [];
v2Components.forEach((files, comp) => {
  if (!libComponents.used.has(comp) && !libComponents.commented.has(comp)) {
    notInLibraryButUsed.push({
      component: comp,
      files: files,
      category: allComponents.get(comp)?.category || 'unknown'
    });
  }
});

// Find components NOT used anywhere
const notUsed = [];
allComponents.forEach((info, comp) => {
  if (!allUsed.has(comp)) {
    notUsed.push({
      component: comp,
      file: info.relativePath,
      category: info.category
    });
  }
});

// Generate report
const report = {
  summary: {
    totalComponents: allComponents.size,
    inComponentLibrary: libComponents.used.size,
    commentedOutInLibrary: libComponents.commented.size,
    usedInV2Pages: v2Components.size,
    usedInSnippets: snippetComponents.size,
    notInLibraryButUsedInV2: notInLibraryButUsed.length,
    notUsedAnywhere: notUsed.length
  },
  notInLibraryButUsedInV2: notInLibraryButUsed.sort((a, b) => a.component.localeCompare(b.component)),
  notUsedAnywhere: notUsed.sort((a, b) => a.component.localeCompare(b.component))
};

console.log(JSON.stringify(report, null, 2));

// Also write to file
fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
