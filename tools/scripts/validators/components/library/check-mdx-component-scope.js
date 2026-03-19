#!/usr/bin/env node
/**
 * @script            check-mdx-component-scope
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts/validators/components, tests/run-all.js, tests/run-pr-checks.js, snippets/components, tests/utils
 * @owner             docs
 * @needs             R-R10, R-R29
 * @purpose-statement Validates MDX-facing component modules do not depend on private file-scope helper bindings from exported components.
 * @pipeline          manual
 * @usage             node tools/scripts/validators/components/check-mdx-component-scope.js [--files path[,path...]] [--staged]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  getMdxFiles,
  getStagedDocsPageFiles,
  getStagedFiles
} = require('../../../../tests/utils/file-walker');
const { extractImports } = require('../../../../tests/utils/mdx-parser');

const RULE_LABEL = '[4.12]';
const DEFAULT_COMPONENT_ROOT = 'snippets/components';
const COMPONENT_EXPORT_NAME_RE = /^[A-Z][A-Za-z0-9]*$/;
const KNOWN_GLOBALS = new Set([
  'Array',
  'Boolean',
  'Date',
  'Error',
  'Function',
  'JSON',
  'Map',
  'Math',
  'Number',
  'Object',
  'Promise',
  'Reflect',
  'RegExp',
  'Set',
  'String',
  'Symbol',
  'URL',
  'URLSearchParams',
  'WeakMap',
  'WeakSet',
  'BigInt',
  'Infinity',
  'NaN',
  'undefined',
  'console',
  'document',
  'window',
  'navigator',
  'location',
  'history',
  'localStorage',
  'sessionStorage',
  'requestAnimationFrame',
  'cancelAnimationFrame',
  'setTimeout',
  'clearTimeout',
  'setInterval',
  'clearInterval',
  'fetch',
  'Headers',
  'Request',
  'Response',
  'AbortController',
  'IntersectionObserver',
  'MutationObserver',
  'ResizeObserver',
  'HTMLElement',
  'Node',
  'process',
  '__dirname',
  '__filename',
  'require',
  'module',
  'exports',
  'global',
  'globalThis',
  'Intl'
]);

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

const REPO_ROOT = getRepoRoot();
if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}

function loadBabelParser() {
  try {
    return require('@babel/parser');
  } catch (_error) {
    return require(path.join(REPO_ROOT, 'tools', 'node_modules', '@babel', 'parser'));
  }
}

const { parse } = loadBabelParser();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/validators/components/check-mdx-component-scope.js [options]',
      '',
      'Options:',
      `  --files <path[,path]>   Limit validation to specific component files under ${DEFAULT_COMPONENT_ROOT}`,
      '  --staged               Validate changed component files plus components imported by staged routable MDX pages',
      '  --help, -h             Show this message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    files: [],
    staged: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--staged') {
      args.staged = true;
      continue;
    }

    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => args.files.push(part));
      }
      index += 1;
      continue;
    }

    if (token.startsWith('--files=')) {
      token
        .slice('--files='.length)
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((part) => args.files.push(part));
      continue;
    }

    if (token.startsWith('--file=')) {
      token
        .slice('--file='.length)
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((part) => args.files.push(part));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  args.files = [...new Set(args.files)];
  return args;
}

function normalizeRepoPath(inputPath) {
  const raw = String(inputPath || '').trim();
  if (!raw) return '';
  const absolute = path.isAbsolute(raw) ? path.resolve(raw) : path.resolve(REPO_ROOT, raw);
  return toPosix(path.relative(REPO_ROOT, absolute));
}

function isSafeRepoRelative(relPath) {
  return relPath && relPath !== '..' && !relPath.startsWith('../');
}

function resolveImportTarget(importPath, importerFile) {
  const raw = String(importPath || '').trim();
  if (!raw) return '';

  let basePath = '';
  if (raw.startsWith('/')) {
    basePath = path.resolve(REPO_ROOT, raw.replace(/^\/+/, ''));
  } else if (raw.startsWith('.')) {
    basePath = path.resolve(path.dirname(importerFile), raw);
  } else {
    return '';
  }

  const candidates = [];
  if (path.extname(basePath)) {
    candidates.push(basePath);
  } else {
    candidates.push(basePath);
    candidates.push(`${basePath}.jsx`);
    candidates.push(`${basePath}.js`);
    candidates.push(path.join(basePath, 'index.jsx'));
    candidates.push(path.join(basePath, 'index.js'));
  }

  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    const stat = fs.statSync(candidate);
    if (!stat.isFile()) continue;
    const relPath = normalizeRepoPath(candidate);
    if (!isSafeRepoRelative(relPath)) continue;
    return relPath;
  }

  return '';
}

function resolveComponentImportsFromMdx(mdxFile) {
  const source = fs.readFileSync(mdxFile, 'utf8');
  const imports = extractImports(source);
  const componentFiles = new Set();

  imports.forEach((entry) => {
    const relPath = resolveImportTarget(entry.path, mdxFile);
    if (!relPath) return;
    if (!relPath.startsWith('snippets/components/')) return;
    if (!relPath.endsWith('.jsx')) return;
    componentFiles.add(relPath);
  });

  return [...componentFiles].sort((left, right) => left.localeCompare(right));
}

function buildMdxFacingComponentIndex(options = {}) {
  const hasExplicitMdxFiles = Object.prototype.hasOwnProperty.call(options, 'mdxFiles');
  const mdxFiles = hasExplicitMdxFiles
    ? (Array.isArray(options.mdxFiles) ? options.mdxFiles : []).map((filePath) => path.resolve(filePath))
    : getMdxFiles(REPO_ROOT).map((filePath) => path.resolve(filePath));
  const index = new Map();

  mdxFiles.forEach((mdxFile) => {
    if (!fs.existsSync(mdxFile)) return;
    const importerRelPath = normalizeRepoPath(mdxFile);
    resolveComponentImportsFromMdx(mdxFile).forEach((componentRelPath) => {
      if (!index.has(componentRelPath)) {
        index.set(componentRelPath, {
          componentPath: componentRelPath,
          importers: new Set()
        });
      }
      index.get(componentRelPath).importers.add(importerRelPath);
    });
  });

  return index;
}

function getComponentFilesImportedByMdxFiles(mdxFiles, options = {}) {
  const index = buildMdxFacingComponentIndex({ ...options, mdxFiles });
  return [...index.keys()].sort((left, right) => left.localeCompare(right));
}

function dedupe(values) {
  return [...new Set(values)];
}

function collectScopedFiles(options = {}) {
  const explicitFiles = Array.isArray(options.files) ? options.files : [];
  if (explicitFiles.length > 0) {
    return dedupe(
      explicitFiles
        .map(normalizeRepoPath)
        .filter(Boolean)
        .filter((filePath) => filePath.startsWith(`${DEFAULT_COMPONENT_ROOT}/`) && filePath.endsWith('.jsx'))
    ).sort((left, right) => left.localeCompare(right));
  }

  if (options.stagedOnly) {
    const stagedFiles = getStagedFiles(REPO_ROOT).map(normalizeRepoPath).filter(Boolean);
    const stagedComponents = stagedFiles.filter(
      (filePath) => filePath.startsWith(`${DEFAULT_COMPONENT_ROOT}/`) && filePath.endsWith('.jsx')
    );
    const stagedMdxFiles = getStagedDocsPageFiles(REPO_ROOT).filter((filePath) => filePath.endsWith('.mdx'));
    const stagedMdxComponents = getComponentFilesImportedByMdxFiles(stagedMdxFiles);
    return dedupe([...stagedComponents, ...stagedMdxComponents]).sort((left, right) =>
      left.localeCompare(right)
    );
  }

  return [...buildMdxFacingComponentIndex().keys()].sort((left, right) => left.localeCompare(right));
}

function collectPatternNames(pattern, out = []) {
  if (!pattern || typeof pattern !== 'object') return out;

  switch (pattern.type) {
    case 'Identifier':
      out.push(pattern.name);
      return out;
    case 'RestElement':
      return collectPatternNames(pattern.argument, out);
    case 'AssignmentPattern':
      return collectPatternNames(pattern.left, out);
    case 'ArrayPattern':
      pattern.elements.forEach((element) => collectPatternNames(element, out));
      return out;
    case 'ObjectPattern':
      pattern.properties.forEach((property) => {
        if (!property) return;
        if (property.type === 'RestElement') {
          collectPatternNames(property.argument, out);
          return;
        }
        collectPatternNames(property.value || property.argument, out);
      });
      return out;
    default:
      return out;
  }
}

function createBindingMeta(name, node, kind, options = {}) {
  return {
    name,
    kind,
    node,
    loc: node?.loc?.start || options.loc || { line: 1, column: 0 },
    imported: Boolean(options.imported),
    exported: Boolean(options.exported),
    declarationKind: options.declarationKind || '',
    componentNode: options.componentNode || null
  };
}

function markExportedBinding(bindings, name) {
  if (!name) return;
  const entry = bindings.get(name);
  if (entry) {
    entry.exported = true;
  }
}

function collectTopLevelBindings(ast) {
  const bindings = new Map();

  function addBinding(name, node, kind, options = {}) {
    if (!name || bindings.has(name)) return;
    bindings.set(name, createBindingMeta(name, node, kind, options));
  }

  function addVariableBindings(declaration, options = {}) {
    declaration.declarations.forEach((item) => {
      const names = collectPatternNames(item.id, []);
      names.forEach((name) => {
        addBinding(name, item.id || item, 'variable', {
          ...options,
          declarationKind: declaration.kind,
          componentNode: item.init || item
        });
      });
    });
  }

  ast.program.body.forEach((node) => {
    if (!node) return;

    if (node.type === 'ImportDeclaration') {
      node.specifiers.forEach((specifier) => {
        addBinding(specifier.local?.name, specifier.local || specifier, 'import', { imported: true });
      });
      return;
    }

    if (node.type === 'ExportNamedDeclaration') {
      if (node.declaration) {
        const declaration = node.declaration;
        if (declaration.type === 'VariableDeclaration') {
          addVariableBindings(declaration, { exported: true });
        } else if (declaration.type === 'FunctionDeclaration' || declaration.type === 'ClassDeclaration') {
          addBinding(declaration.id?.name, declaration.id || declaration, declaration.type, {
            exported: true,
            componentNode: declaration
          });
        }
      }

      node.specifiers.forEach((specifier) => {
        markExportedBinding(bindings, specifier.local?.name);
      });
      return;
    }

    if (node.type === 'ExportDefaultDeclaration') {
      const declaration = node.declaration;
      if (
        declaration &&
        (declaration.type === 'FunctionDeclaration' || declaration.type === 'ClassDeclaration')
      ) {
        addBinding(declaration.id?.name, declaration.id || declaration, declaration.type, {
          exported: true,
          componentNode: declaration
        });
      } else if (declaration && declaration.type === 'Identifier') {
        markExportedBinding(bindings, declaration.name);
      }
      return;
    }

    if (node.type === 'VariableDeclaration') {
      addVariableBindings(node);
      return;
    }

    if (node.type === 'FunctionDeclaration' || node.type === 'ClassDeclaration') {
      addBinding(node.id?.name, node.id || node, node.type, { componentNode: node });
    }
  });

  return bindings;
}

function isComponentLikeBinding(binding) {
  if (!binding || !COMPONENT_EXPORT_NAME_RE.test(binding.name)) return false;
  if (binding.kind === 'FunctionDeclaration' || binding.kind === 'ClassDeclaration') return true;
  if (binding.kind !== 'variable') return false;
  const node = binding.componentNode;
  if (!node) return false;
  const init = node.type === 'VariableDeclarator' ? node.init : node;
  return Boolean(
    init &&
      (
        init.type === 'ArrowFunctionExpression' ||
        init.type === 'FunctionExpression' ||
        init.type === 'ClassExpression' ||
        init.type === 'CallExpression'
      )
  );
}

function shouldCountIdentifier(node, parent, key) {
  if (!node || !parent) return true;

  if ((parent.type === 'MemberExpression' || parent.type === 'OptionalMemberExpression') && key === 'property' && !parent.computed) {
    return false;
  }

  if ((parent.type === 'ObjectProperty' || parent.type === 'Property') && key === 'key' && !parent.computed) {
    return false;
  }

  if (
    parent.type === 'ObjectMethod' ||
    parent.type === 'ClassMethod' ||
    parent.type === 'ClassPrivateMethod' ||
    parent.type === 'ClassProperty' ||
    parent.type === 'ClassPrivateProperty' ||
    parent.type === 'ImportSpecifier' ||
    parent.type === 'ImportDefaultSpecifier' ||
    parent.type === 'ImportNamespaceSpecifier' ||
    parent.type === 'MetaProperty'
  ) {
    return false;
  }

  if (
    (parent.type === 'LabeledStatement' ||
      parent.type === 'BreakStatement' ||
      parent.type === 'ContinueStatement' ||
      parent.type === 'JSXAttribute' ||
      parent.type === 'ExportSpecifier') &&
    key === 'name'
  ) {
    return false;
  }

  if (parent.type === 'ExportSpecifier' && key === 'exported') {
    return false;
  }

  if (parent.type === 'PrivateName') {
    return false;
  }

  return true;
}

function shouldCountJsxIdentifier(node, parent, key) {
  if (!node || !parent) return false;
  if (!COMPONENT_EXPORT_NAME_RE.test(node.name)) return false;
  if (parent.type === 'JSXAttribute' && key === 'name') return false;
  if (parent.type === 'JSXMemberExpression' && key === 'property') return false;
  return (
    (parent.type === 'JSXOpeningElement' && key === 'name') ||
    (parent.type === 'JSXClosingElement' && key === 'name') ||
    (parent.type === 'JSXMemberExpression' && key === 'object')
  );
}

function collectDeclaredAndReferencedNames(componentNode, componentName) {
  const declaredNames = new Set(componentName ? [componentName] : []);
  const references = new Map();
  const visited = new WeakSet();

  function addReference(name, loc) {
    if (!name || declaredNames.has(name) || KNOWN_GLOBALS.has(name)) return;
    if (!references.has(name)) {
      references.set(name, loc?.start?.line || loc?.line || 1);
    }
  }

  function walk(node, parent = null, key = '') {
    if (!node || typeof node !== 'object') return;
    if (visited.has(node)) return;
    visited.add(node);

    switch (node.type) {
      case 'Identifier':
        if (shouldCountIdentifier(node, parent, key)) {
          addReference(node.name, node.loc);
        }
        return;
      case 'JSXIdentifier':
        if (shouldCountJsxIdentifier(node, parent, key)) {
          addReference(node.name, node.loc);
        }
        return;
      case 'VariableDeclarator':
        collectPatternNames(node.id, []).forEach((name) => declaredNames.add(name));
        walk(node.init, node, 'init');
        return;
      case 'FunctionDeclaration':
      case 'FunctionExpression':
      case 'ArrowFunctionExpression':
        if (node.id?.name) {
          declaredNames.add(node.id.name);
        }
        node.params.forEach((param) => {
          collectPatternNames(param, []).forEach((name) => declaredNames.add(name));
        });
        if (node.type === 'ArrowFunctionExpression' && node.expression) {
          walk(node.body, node, 'body');
        } else {
          walk(node.body, node, 'body');
        }
        return;
      case 'ClassDeclaration':
      case 'ClassExpression':
        if (node.id?.name) {
          declaredNames.add(node.id.name);
        }
        walk(node.superClass, node, 'superClass');
        walk(node.body, node, 'body');
        return;
      case 'CatchClause':
        if (node.param) {
          collectPatternNames(node.param, []).forEach((name) => declaredNames.add(name));
        }
        walk(node.body, node, 'body');
        return;
      case 'ImportDeclaration':
        return;
      default:
        break;
    }

    Object.entries(node).forEach(([childKey, childValue]) => {
      if (
        childKey === 'loc' ||
        childKey === 'start' ||
        childKey === 'end' ||
        childKey === 'leadingComments' ||
        childKey === 'innerComments' ||
        childKey === 'trailingComments'
      ) {
        return;
      }

      if (Array.isArray(childValue)) {
        childValue.forEach((entry) => walk(entry, node, childKey));
        return;
      }

      walk(childValue, node, childKey);
    });
  }

  walk(componentNode);
  return { declaredNames, references };
}

function parseComponentAst(sourceText, filePath) {
  return parse(sourceText, {
    sourceType: 'module',
    sourceFilename: filePath,
    plugins: [
      'jsx',
      'classProperties',
      'optionalChaining',
      'nullishCoalescingOperator',
      'objectRestSpread',
      'dynamicImport'
    ]
  });
}

function analyseComponentFile(filePath, mdxFacingIndex) {
  const relPath = normalizeRepoPath(filePath);
  if (!mdxFacingIndex.has(relPath)) {
    return [];
  }

  const sourceText = fs.readFileSync(path.resolve(REPO_ROOT, relPath), 'utf8');
  let ast;
  try {
    ast = parseComponentAst(sourceText, relPath);
  } catch (error) {
    return [
      {
        file: relPath,
        line: 1,
        component: '',
        helper: '',
        importers: [...mdxFacingIndex.get(relPath).importers].sort(),
        message: `Failed to parse component file: ${error.message}`
      }
    ];
  }

  const bindings = collectTopLevelBindings(ast);
  const privateBindings = new Map();
  const exportedComponents = [];

  bindings.forEach((binding) => {
    if (binding.imported) return;
    if (binding.exported && isComponentLikeBinding(binding)) {
      exportedComponents.push(binding);
      return;
    }
    if (!binding.exported) {
      privateBindings.set(binding.name, binding);
    }
  });

  const findings = [];
  const importers = [...mdxFacingIndex.get(relPath).importers].sort();

  exportedComponents.forEach((binding) => {
    const componentNode =
      binding.kind === 'variable'
        ? binding.componentNode?.init || binding.componentNode
        : binding.componentNode || binding.node;
    if (!componentNode) return;

    const { references } = collectDeclaredAndReferencedNames(componentNode, binding.name);
    references.forEach((referenceLine, helperName) => {
      const helperBinding = privateBindings.get(helperName);
      if (!helperBinding) return;

      findings.push({
        file: relPath,
        line: helperBinding.loc?.line || referenceLine || 1,
        component: binding.name,
        helper: helperName,
        importers,
        message:
          `Exported MDX-facing component "${binding.name}" references private top-level local "${helperName}". ` +
          'Inline the logic inside the component or move it to a colocated .js helper import.'
      });
    });
  });

  return findings.sort((left, right) => {
    if (left.file !== right.file) return left.file.localeCompare(right.file);
    if (left.line !== right.line) return left.line - right.line;
    if (left.component !== right.component) return left.component.localeCompare(right.component);
    return left.helper.localeCompare(right.helper);
  });
}

function run(options = {}) {
  const mdxFacingIndex = buildMdxFacingComponentIndex();
  const scopedFiles = collectScopedFiles(options);
  const findings = [];

  scopedFiles.forEach((filePath) => {
    findings.push(...analyseComponentFile(filePath, mdxFacingIndex));
  });

  return {
    findings,
    scannedFiles: scopedFiles,
    mdxFacingFiles: [...mdxFacingIndex.keys()].sort((left, right) => left.localeCompare(right))
  };
}

function formatFinding(finding) {
  return `${RULE_LABEL} ${finding.file}:${finding.line} ${finding.message}`;
}

function main(argv = process.argv.slice(2)) {
  try {
    const args = parseArgs(argv);
    if (args.help) {
      usage();
      return 0;
    }

    const result = run({
      files: args.files,
      stagedOnly: args.staged
    });

    if (result.findings.length === 0) {
      console.log('✅ MDX-facing component scope checks passed');
      return 0;
    }

    result.findings.forEach((finding) => {
      console.error(formatFinding(finding));
    });
    console.error(`\n❌ ${result.findings.length} MDX-facing component scope finding(s)`);
    return 1;
  } catch (error) {
    console.error(`❌ Failed to run MDX-facing component scope checks: ${error.message}`);
    return 1;
  }
}

if (require.main === module) {
  process.exit(main());
}

module.exports = {
  RULE_LABEL,
  buildMdxFacingComponentIndex,
  getComponentFilesImportedByMdxFiles,
  collectScopedFiles,
  collectTopLevelBindings,
  collectDeclaredAndReferencedNames,
  analyseComponentFile,
  formatFinding,
  parseArgs,
  resolveComponentImportsFromMdx,
  run
};
