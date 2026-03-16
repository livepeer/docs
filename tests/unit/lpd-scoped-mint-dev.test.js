#!/usr/bin/env node
/**
 * @script            lpd-scoped-mint-dev.test
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tests/unit, lpd, tools/scripts/mint-dev.sh, tools/scripts/dev/generate-mint-dev-scope.js
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Tests lpd scoped mint-dev functionality — validates dev server scope filtering
 * @pipeline          manual — developer tool
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/lpd-scoped-mint-dev.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { EventEmitter } = require('events');
const { spawnSync } = require('child_process');
const {
  collectRoutesFromNavigation,
  collectOptionsFromNavigation,
  buildScopedNavigation,
  buildScopedMetadata,
  buildScopedMintignore,
  ScopedMintSessionSupervisor,
  createScopedManifest,
  createScopedProfile
} = require('../../tools/scripts/dev/generate-mint-dev-scope');

const REPO_ROOT = process.cwd();
const LPD_PATH = path.join(REPO_ROOT, 'lpd');
const SCOPE_SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/dev/generate-mint-dev-scope.js');

const SAMPLE_NAVIGATION = {
  versions: [
    {
      version: 'v2',
      languages: [
        {
          language: 'en',
          tabs: [
            {
              tab: 'Developers',
              anchors: [
                {
                  anchor: 'Build',
                  groups: [
                    {
                      group: 'Dev',
                      pages: ['v2/dev/get-started', 'v2/dev/api-reference/auth']
                    }
                  ]
                }
              ]
            },
            {
              tab: 'Gateways',
              anchors: [
                {
                  anchor: 'Run',
                  groups: [
                    {
                      group: 'Gateway',
                      pages: ['v2/gateways/overview']
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          language: 'es',
          tabs: [
            {
              tab: 'Developers',
              anchors: [
                {
                  anchor: 'Construir',
                  groups: [
                    {
                      group: 'Dev',
                      pages: ['v2/es/dev/get-started']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      version: 'v1',
      languages: [
        {
          language: 'en',
          tabs: [
            {
              tab: 'Legacy',
              anchors: [
                {
                  anchor: 'Legacy',
                  groups: [
                    {
                      group: 'Legacy',
                      pages: ['v1/legacy/overview']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function runLpd(args) {
  return spawnSync('bash', [LPD_PATH, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
}

function runScopeScript(args, cwd) {
  return spawnSync('node', [SCOPE_SCRIPT_PATH, ...args], {
    cwd,
    encoding: 'utf8'
  });
}

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createSupervisorProfile(overrides = {}) {
  const sourceDocsConfig = overrides.sourceDocsConfig || '/tmp/repo/docs.json';
  const sourceMintignore = overrides.sourceMintignore || '/tmp/repo/.mintignore';
  return {
    workspaceDir: overrides.workspaceDir || '/tmp/lpd-scoped-workspace',
    controlDir: overrides.controlDir || '/tmp/lpd-control/scoped-session',
    scopeHash: overrides.scopeHash || 'scoped-session',
    selection: {
      versions: ['v2'],
      languages: ['en'],
      tabs: ['Developers'],
      prefixes: ['v2/dev'],
      disableOpenapi: false,
      ...(overrides.selection || {})
    },
    sourceDocsConfig,
    sourceScopeFile: overrides.sourceScopeFile || '',
    sourceMintignore,
    routeCounts: overrides.routeCounts || { original: 4, scoped: 2 },
    scopedRoutes: overrides.scopedRoutes || ['v2/dev/get-started', 'v2/dev/overview'],
    watchFiles: overrides.watchFiles || [sourceDocsConfig, sourceMintignore],
    disabledOpenapi: Boolean(overrides.disabledOpenapi)
  };
}

function createFakeMintChild() {
  const child = new EventEmitter();
  child.exitCode = null;
  child.signalCode = null;
  child.kills = [];
  child.kill = (signal = 'SIGTERM') => {
    child.kills.push(signal);
    child.signalCode = signal;
    setImmediate(() => child.emit('exit', 0, signal));
    return true;
  };
  return child;
}

async function runTests() {
  const failures = [];
  const cases = [];
  const createSupervisorHarness = (profiles) => {
    const repoRoot = mkTmpDir('lpd-scope-supervisor-');
    const logMessages = [];
    const errorMessages = [];
    const watchPaths = [];
    const watchListeners = [];
    const children = [];
    const profileCalls = [];
    let activeWatchFiles = new Set();

    const remapRepoPath = (value) => {
      if (!value || typeof value !== 'string' || !value.startsWith('/tmp/repo')) {
        return value;
      }
      const relPath = path.relative('/tmp/repo', value);
      return path.join(repoRoot, relPath);
    };

    const createScopedProfileStub = async (args) => {
      profileCalls.push({
        docsConfig: args.docsConfig,
        scopeFile: args.scopeFile || '',
        workspaceId: args.workspaceId || '',
        versions: [...(args.versions || [])],
        languages: [...(args.languages || [])],
        tabs: [...(args.tabs || [])],
        prefixes: [...(args.prefixes || [])]
      });
      const next = profiles.shift();
      if (next instanceof Error) {
        throw next;
      }

      const realized = {
        ...next,
        sourceDocsConfig: remapRepoPath(next.sourceDocsConfig),
        sourceScopeFile: remapRepoPath(next.sourceScopeFile || ''),
        sourceMintignore: remapRepoPath(next.sourceMintignore || ''),
        watchFiles: (next.watchFiles || []).map(remapRepoPath)
      };

      activeWatchFiles = new Set(realized.watchFiles || []);
      activeWatchFiles.forEach((filePath) => {
        writeFile(filePath, `${Date.now()}\n`);
      });

      return realized;
    };

    const spawnProcess = (_command, args, options) => {
      const child = createFakeMintChild();
      child.spawnArgs = args;
      child.spawnOptions = options;
      children.push(child);
      return child;
    };

    const watchFactory = (watchPath, handler) => {
      watchPaths.push(watchPath);
      watchListeners.push(handler);
      return {
        close() {}
      };
    };

    const supervisor = new ScopedMintSessionSupervisor(
      {
        repoRoot,
        workspaceBase: '/tmp/lpd-workspaces',
        docsConfig: '',
        scopeFile: '',
        versions: [],
        languages: [],
        tabs: [],
        prefixes: [],
        interactive: false,
        disableOpenapi: false,
        debounceMs: 5
      },
      {
        createScopedProfile: createScopedProfileStub,
        spawnProcess,
        watchFactory,
        log: (message) => logMessages.push(message),
        logError: (message) => errorMessages.push(message)
      }
    );

    return {
      supervisor,
      logMessages,
      errorMessages,
      watchPaths,
      children,
      profileCalls,
      repoRoot,
      emit(eventType, filename) {
        if (filename) {
          [...activeWatchFiles]
            .filter((filePath) => path.basename(filePath) === filename)
            .forEach((filePath) => {
              writeFile(filePath, `${Date.now()}:${Math.random()}\n`);
            });
        }
        watchListeners.forEach((handler) => handler(eventType, filename));
      }
    };
  };

  cases.push(async () => {
    const selection = {
      versions: ['v2'],
      languages: ['en'],
      tabs: ['Developers'],
      prefixes: ['v2/dev'],
      disableOpenapi: true
    };
    const scoped = buildScopedNavigation(SAMPLE_NAVIGATION, selection);
    const routes = collectRoutesFromNavigation(scoped);
    assert.deepStrictEqual(routes, ['v2/dev/get-started']);
  });

  cases.push(async () => {
    const selection = {
      versions: ['v2'],
      languages: ['en'],
      tabs: ['Developers'],
      prefixes: ['v2/dev'],
      disableOpenapi: true
    };
    const optionData = collectOptionsFromNavigation(SAMPLE_NAVIGATION);
    const allRoutes = collectRoutesFromNavigation(SAMPLE_NAVIGATION);
    const scopedRoutes = ['v2/dev/get-started'];
    const metadata = buildScopedMetadata(selection, optionData, allRoutes, scopedRoutes);
    const scopedMintignore = buildScopedMintignore('# base ignore\n', metadata);
    assert.match(scopedMintignore, /\/v1\/\*\*/, 'should exclude unselected version');
    assert.match(scopedMintignore, /\/v2\/es\/\*\*/, 'should exclude unselected language directory');
    assert.match(scopedMintignore, /api-reference/, 'should include openapi exclusion patterns');
  });

  cases.push(async () => {
    const run = runLpd([
      'dev',
      '--dry-run',
      '--scoped',
      '--scope-version',
      'v2',
      '--scope-language',
      'en',
      '--scope-tab',
      'Developers',
      '--scope-prefix',
      'v2/dev',
      '--disable-openapi'
    ]);
    assert.strictEqual(run.status, 0, `lpd dry-run failed: ${run.stderr || run.stdout}`);
    assert.match(run.stdout, /Scoped mint profile: enabled/);
    assert.match(run.stdout, /scope_versions:\s*v2/);
    assert.match(run.stdout, /scope_languages:\s*en/);
    assert.match(run.stdout, /scope_tabs:\s*Developers/);
    assert.match(run.stdout, /OpenAPI docs scope: disabled/);
    assert.match(run.stdout, /tools\/scripts\/mint-dev\.sh/);
  });

  cases.push(async () => {
    const tmp = mkTmpDir('lpd-alt-docs-config-');
    const altDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Alt Fixture Docs',
      navigation: {
        versions: [
          {
            version: 'v2',
            languages: [
              {
                language: 'en',
                tabs: [
                  {
                    tab: 'Orchestrators',
                    groups: [
                      {
                        group: 'Operations',
                        pages: ['v2/orchestrators/operations/x-running-workloads']
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
    writeFile(path.join(tmp, 'docs-orch-work.json'), `${JSON.stringify(altDocs, null, 2)}\n`);

    const run = runLpd(['dev', '--dry-run', '--scoped', '--docs-config', path.join(tmp, 'docs-orch-work.json')]);
    assert.strictEqual(run.status, 0, `lpd dry-run with docs config failed: ${run.stderr || run.stdout}`);
    assert.match(run.stdout, /Scoped mint profile: enabled/);
    assert.match(run.stdout, /docs_config:/);
    assert.match(run.stdout, /docs-orch-work\.json/);
  });

  cases.push(async () => {
    const run = runLpd(['dev', '--dry-run', '--', '--port', '3333']);
    assert.strictEqual(run.status, 0, `lpd pass-through dry-run failed: ${run.stderr || run.stdout}`);
    assert.doesNotMatch(run.stdout, /Scoped mint profile: enabled/);
    assert.match(run.stdout, /--port/);
    assert.match(run.stdout, /3333/);
  });

  cases.push(async () => {
    const tmp = mkTmpDir('lpd-scope-test-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Fixture Docs',
      navigation: SAMPLE_NAVIGATION
    };
    writeFile(path.join(tmp, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(tmp, '.mintignore'), '# fixture\n');
    writeFile(path.join(tmp, 'v2/dev/get-started.mdx'), '# Get started\n');
    writeFile(path.join(tmp, 'v2/dev/api-reference/auth.mdx'), '# Auth\n');
    writeFile(path.join(tmp, 'v2/gateways/overview.mdx'), '# Gateway overview\n');
    writeFile(path.join(tmp, 'v2/es/dev/get-started.mdx'), '# Empezar\n');
    writeFile(path.join(tmp, 'v1/legacy/overview.mdx'), '# Legacy\n');

    const run = runScopeScript(
      ['--repo-root', tmp, '--versions', 'v2', '--languages', 'en', '--tabs', 'Developers', '--disable-openapi', '--print-only'],
      REPO_ROOT
    );
    assert.strictEqual(run.status, 0, `scope generator failed: ${run.stderr || run.stdout}`);
    const payload = JSON.parse(String(run.stdout || '{}').trim());
    assert.ok(payload.routeCounts.original > payload.routeCounts.scoped, 'scoped profile should reduce route count');
    assert.strictEqual(payload.routeCounts.scoped, 1, 'expected Developers tab route count after OpenAPI filter');
  });

  cases.push(async () => {
    const tmp = mkTmpDir('lpd-alt-scope-source-');
    const rootDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Root Docs',
      navigation: SAMPLE_NAVIGATION
    };
    const altDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Alt Docs',
      navigation: {
        versions: [
          {
            version: 'v2',
            languages: [
              {
                language: 'en',
                tabs: [
                  {
                    tab: 'Orchestrators',
                    groups: [
                      {
                        group: 'Operations',
                        pages: ['v2/orchestrators/operations/x-running-workloads']
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
    writeFile(path.join(tmp, 'docs.json'), `${JSON.stringify(rootDocs, null, 2)}\n`);
    writeFile(path.join(tmp, 'docs-orch-work.json'), `${JSON.stringify(altDocs, null, 2)}\n`);
    writeFile(path.join(tmp, '.mintignore'), '# fixture\n');
    writeFile(path.join(tmp, 'v2/orchestrators/operations/x-running-workloads.mdx'), '# Workloads\n');

    const run = runScopeScript(['--repo-root', tmp, '--docs-config', path.join(tmp, 'docs-orch-work.json'), '--print-only'], REPO_ROOT);
    assert.strictEqual(run.status, 0, `scope generator with docs config failed: ${run.stderr || run.stdout}`);
    const payload = JSON.parse(String(run.stdout || '{}').trim());
    assert.strictEqual(payload.routeCounts.original, 1, 'alternate docs config should replace root docs.json as route source');
    assert.strictEqual(payload.routeCounts.scoped, 1, 'alternate docs config should remain active without extra filters');
    assert.match(payload.sourceDocsConfig, /docs-orch-work\.json$/);
  });

  cases.push(async () => {
    const tmp = mkTmpDir('lpd-alt-docs-fallback-');
    const rootDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Root Docs',
      navigation: SAMPLE_NAVIGATION
    };
    const altDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Moved Alt Docs',
      navigation: {
        versions: [
          {
            version: 'v2',
            languages: [
              {
                language: 'en',
                tabs: [
                  {
                    tab: 'Gateways',
                    groups: [
                      {
                        group: 'Guides',
                        pages: ['v2/gateways/guides/roadmap-and-funding/operator-support']
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
    writeFile(path.join(tmp, 'docs.json'), `${JSON.stringify(rootDocs, null, 2)}\n`);
    writeFile(path.join(tmp, '.mintignore'), '# fixture\n');
    writeFile(
      path.join(tmp, 'tools/config/scoped-navigation/docs-gate-work.json'),
      `${JSON.stringify(altDocs, null, 2)}\n`
    );
    writeFile(path.join(tmp, 'v2/gateways/guides/roadmap-and-funding/operator-support.mdx'), '# Operator Support\n');

    const run = runScopeScript(['--repo-root', tmp, '--docs-config', 'docs-gate-work.json', '--print-only'], REPO_ROOT);
    assert.strictEqual(run.status, 0, `scope generator with moved docs config failed: ${run.stderr || run.stdout}`);
    const payload = JSON.parse(String(run.stdout || '{}').trim());
    assert.strictEqual(payload.routeCounts.original, 1, 'legacy docs-config basename should resolve moved scoped navigation file');
    assert.match(payload.sourceDocsConfig, /tools\/config\/scoped-navigation\/docs-gate-work\.json$/);
  });

  cases.push(async () => {
    const tmp = mkTmpDir('lpd-alt-scopefile-fallback-');
    const rootDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Root Docs',
      navigation: SAMPLE_NAVIGATION
    };
    const movedScopeDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Moved Scope Docs',
      navigation: {
        versions: [
          {
            version: 'v2',
            languages: [
              {
                language: 'en',
                tabs: [
                  {
                    tab: 'Gateways',
                    groups: [
                      {
                        group: 'Guides',
                        pages: ['v2/gateways/guides/roadmap-and-funding/gateway-showcase']
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
    writeFile(path.join(tmp, 'docs.json'), `${JSON.stringify(rootDocs, null, 2)}\n`);
    writeFile(path.join(tmp, '.mintignore'), '# fixture\n');
    writeFile(
      path.join(tmp, 'tools/config/scoped-navigation/docs-gate-work.json'),
      `${JSON.stringify(movedScopeDocs, null, 2)}\n`
    );
    writeFile(path.join(tmp, 'v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx'), '# Gateway Showcase\n');

    const run = runScopeScript(['--repo-root', tmp, '--scope-file', 'docs-gate-work.json', '--print-only'], REPO_ROOT);
    assert.strictEqual(run.status, 0, `scope generator with moved scope file failed: ${run.stderr || run.stdout}`);
    const payload = JSON.parse(String(run.stdout || '{}').trim());
    assert.strictEqual(payload.routeCounts.original, 1, 'legacy scope-file basename should resolve moved scoped navigation file');
    assert.match(payload.sourceDocsConfig, /tools\/config\/scoped-navigation\/docs-gate-work\.json$/);
  });

  cases.push(async () => {
    const repoRoot = mkTmpDir('lpd-scope-manifest-');
    const workspaceBase = mkTmpDir('lpd-scope-manifest-out-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Manifest Fixture',
      navigation: {
        tabs: [
          {
            tab: 'Developers',
            groups: [
              {
                group: 'Dev',
                pages: ['v2/dev/get-started']
              }
            ]
          }
        ]
      }
    };

    writeFile(path.join(repoRoot, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(repoRoot, '.mintignore'), '# fixture\n');
    writeFile(path.join(repoRoot, 'style.css'), ':root { --border: #e5e7eb; }\n');
    writeFile(path.join(repoRoot, 'v2/dev/get-started.mdx'), 'import Demo from "/snippets/components/demo.jsx";\n<Demo />\n');
    writeFile(path.join(repoRoot, 'snippets/components/demo.jsx'), 'export default function Demo() { return null; }\n');
    writeFile(path.join(repoRoot, 'snippets/components/unused.jsx'), 'export default function Unused() { return null; }\n');

    const manifest = await createScopedManifest({
      repoRoot,
      workspaceBase,
      docsConfig: '',
      scopeFile: '',
      versions: [],
      languages: [],
      tabs: [],
      prefixes: ['v2/dev'],
      interactive: false,
      disableOpenapi: false,
      workspaceId: '',
      printOnly: false,
      help: false
    });

    assert.ok(manifest.controlDir.startsWith(path.join(workspaceBase, '.lpd-control')), 'manifest control dir should live outside the Mint workspace');
    assert.ok(manifest.watchFiles.includes(path.join(repoRoot, 'docs.json')), 'manifest should watch the active docs config');
    assert.ok(manifest.watchFiles.includes(path.join(repoRoot, '.mintignore')), 'manifest should watch the repo mintignore');
    assert.ok(manifest.watchFiles.includes(path.join(repoRoot, 'v2/dev/get-started.mdx')), 'manifest should watch routed page sources');
    assert.ok(manifest.watchFiles.includes(path.join(repoRoot, 'snippets/components/demo.jsx')), 'manifest should watch reachable dependencies');
    assert.ok(!manifest.watchFiles.includes(path.join(repoRoot, 'snippets/components/unused.jsx')), 'manifest should exclude unused files');
  });

  cases.push(async () => {
    const repoRoot = mkTmpDir('lpd-scope-draft-route-');
    const workspaceBase = mkTmpDir('lpd-scope-draft-route-out-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Draft Route Fixture',
      navigation: {
        tabs: [
          {
            tab: 'Orchestrators',
            groups: [
              {
                group: 'Guides',
                pages: ['v2/orchestrators/guides/deployment-details/draft1-setup-options']
              }
            ]
          }
        ]
      }
    };

    writeFile(path.join(repoRoot, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(repoRoot, '.mintignore'), '# fixture\n');
    writeFile(path.join(repoRoot, 'v2/orchestrators/_workspace/drafts/draft1-setup-options.mdx'), '# Draft setup options\n');

    const result = await createScopedProfile({
      repoRoot,
      workspaceBase,
      scopeFile: '',
      versions: [],
      languages: [],
      tabs: [],
      prefixes: ['v2/orchestrators/guides/deployment-details'],
      interactive: false,
      disableOpenapi: false,
      printOnly: false,
      help: false
    });

    assert.ok(
      fs.existsSync(path.join(result.workspaceDir, 'v2/orchestrators/_workspace/drafts/draft1-setup-options.mdx')),
      'routes should resolve governed draft files from section _workspace/drafts when no live page exists'
    );
  });

  cases.push(async () => {
    const repoRoot = mkTmpDir('lpd-scope-missing-local-import-');
    const workspaceBase = mkTmpDir('lpd-scope-missing-local-import-out-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Missing Import Fixture',
      navigation: {
        tabs: [
          {
            tab: 'Developers',
            groups: [
              {
                group: 'Dev',
                pages: ['v2/dev/get-started']
              }
            ]
          }
        ]
      }
    };

    writeFile(path.join(repoRoot, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(repoRoot, '.mintignore'), '# fixture\n');
    writeFile(path.join(repoRoot, 'v2/dev/get-started.mdx'), 'import Demo from "./missing-demo.jsx";\n<Demo />\n');

    await assert.rejects(
      () =>
        createScopedProfile({
          repoRoot,
          workspaceBase,
          scopeFile: '',
          versions: [],
          languages: [],
          tabs: [],
          prefixes: ['v2/dev'],
          interactive: false,
          disableOpenapi: false,
          printOnly: false,
          help: false
        }),
      /Could not resolve local import reference "\.\/missing-demo\.jsx"/,
      'scoped projection should fail closed on missing local dependencies'
    );
  });

  cases.push(async () => {
    const repoRoot = mkTmpDir('lpd-scope-workspace-');
    const workspaceBase = mkTmpDir('lpd-scope-workspace-out-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Workspace Fixture',
      favicon: '/snippets/assets/favicon.png',
      navigation: {
        tabs: [
          {
            tab: 'Developers',
            groups: [
              {
                group: 'Dev',
                pages: ['v2/dev/get-started']
              }
            ]
          }
        ]
      }
    };

    writeFile(path.join(repoRoot, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(repoRoot, '.mintignore'), '# fixture\n');
    writeFile(path.join(repoRoot, 'style.css'), ':root { --border: #e5e7eb; }\n');
    writeFile(
      path.join(repoRoot, 'v2/dev/get-started.mdx'),
      ['import Demo from "/snippets/components/demo.jsx";', '', '![Diagram](./diagram.png)', '', '<Demo />', ''].join('\n')
    );
    writeFile(
      path.join(repoRoot, 'snippets/components/demo.jsx'),
      ['import logo from "../assets/logo.svg";', 'import { getLabel } from "../shared/util.js";', '', 'export default function Demo() {', '  return <img src={logo} alt={getLabel()} />;', '}', ''].join('\n')
    );
    writeFile(path.join(repoRoot, 'snippets/shared/util.js'), 'export function getLabel() { return "demo"; }\n');
    writeFile(path.join(repoRoot, 'snippets/assets/logo.svg'), '<svg />\n');
    writeFile(path.join(repoRoot, 'snippets/assets/favicon.png'), 'PNG\n');
    writeFile(path.join(repoRoot, 'v2/dev/diagram.png'), 'PNG\n');
    writeFile(path.join(repoRoot, 'snippets/components/unused.jsx'), 'export default function Unused() { return null; }\n');
    writeFile(
      path.join(repoRoot, 'snippets/components/primitives/deep/nested-divider.jsx'),
      'export default function NestedDivider() { return null; }\n'
    );
    writeFile(path.join(repoRoot, 'v2/index.mdx'), '- [Broken](gateways/guides/advanced-operations/sources.md)\n');

    const result = await createScopedProfile({
      repoRoot,
      workspaceBase,
      scopeFile: '',
      versions: [],
      languages: [],
      tabs: [],
      prefixes: ['v2/dev'],
      interactive: false,
      disableOpenApi: false,
      printOnly: false,
      help: false
    });

    const v2Dir = path.join(result.workspaceDir, 'v2');
    const snippetsDir = path.join(result.workspaceDir, 'snippets');
    const rootStyleFile = path.join(result.workspaceDir, 'style.css');
    const pageFile = path.join(result.workspaceDir, 'v2/dev/get-started.mdx');
    const snippetFile = path.join(result.workspaceDir, 'snippets/components/demo.jsx');
    const helperFile = path.join(result.workspaceDir, 'snippets/shared/util.js');
    const logoFile = path.join(result.workspaceDir, 'snippets/assets/logo.svg');
    const faviconFile = path.join(result.workspaceDir, 'snippets/assets/favicon.png');
    const imageFile = path.join(result.workspaceDir, 'v2/dev/diagram.png');
    const unusedFile = path.join(result.workspaceDir, 'snippets/components/unused.jsx');
    const deeplyNestedSnippetFile = path.join(result.workspaceDir, 'snippets/components/primitives/deep/nested-divider.jsx');
    const rootIndexFile = path.join(result.workspaceDir, 'v2/index.mdx');
    const legacyWorkspaceMetadataFile = path.join(result.workspaceDir, '.lpd-scope.json');
    const controlManifestFile = path.join(result.controlDir, 'manifest.json');

    assert.ok(fs.lstatSync(v2Dir).isDirectory(), 'workspace v2 should be a real directory');
    assert.ok(!fs.lstatSync(v2Dir).isSymbolicLink(), 'workspace v2 should not be a symlink');
    assert.ok(fs.lstatSync(snippetsDir).isDirectory(), 'workspace snippets should be a real directory');
    assert.ok(!fs.lstatSync(snippetsDir).isSymbolicLink(), 'workspace snippets should not be a symlink');
    assert.ok(fs.lstatSync(rootStyleFile).isSymbolicLink(), 'root style.css should be included in the scoped workspace');
    assert.ok(fs.lstatSync(pageFile).isSymbolicLink(), 'workspace page file should remain a symlink');
    assert.ok(fs.lstatSync(snippetFile).isSymbolicLink(), 'workspace snippet file should remain a symlink');
    assert.ok(fs.lstatSync(helperFile).isSymbolicLink(), 'transitive helper import should remain a symlink');
    assert.ok(fs.lstatSync(logoFile).isSymbolicLink(), 'transitive asset import should remain a symlink');
    assert.ok(fs.lstatSync(faviconFile).isSymbolicLink(), 'docs config asset should remain a symlink');
    assert.ok(fs.lstatSync(imageFile).isSymbolicLink(), 'page asset should remain a symlink');
    assert.ok(!fs.existsSync(unusedFile), 'unused snippet files should be excluded from the scoped workspace');
    assert.ok(!fs.existsSync(deeplyNestedSnippetFile), 'deeply nested unused snippet files should be excluded from the scoped workspace');
    assert.ok(!fs.existsSync(rootIndexFile), 'out-of-scope generated indexes should be excluded from scoped workspace');
    assert.ok(!fs.existsSync(legacyWorkspaceMetadataFile), 'controller metadata should stay outside the Mint workspace');
    assert.ok(fs.existsSync(controlManifestFile), 'control manifest should be written outside the Mint workspace');
  });

  cases.push(async () => {
    const repoRoot = mkTmpDir('lpd-scope-generated-index-');
    const workspaceBase = mkTmpDir('lpd-scope-generated-index-out-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Generated Index Fixture',
      navigation: {
        tabs: [
          {
            tab: 'Gateways',
            groups: [
              {
                group: 'Gateway',
                pages: ['v2/gateways', 'v2/gateways/overview']
              }
            ]
          }
        ]
      }
    };

    writeFile(path.join(repoRoot, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(repoRoot, '.mintignore'), '# fixture\n');
    writeFile(
      path.join(repoRoot, 'v2/gateways/index.mdx'),
      [
        '---',
        'title: Gateways Index',
        '---',
        '',
        '{/*',
        'generated-file-banner: generated-file-banner:v1',
        'Generation Script: tools/scripts/generate-pages-index.js',
        '*/}',
        '',
        '- [Overview](overview.mdx)',
        '- [Sources](guides/advanced-operations/sources.md)',
        ''
      ].join('\n')
    );
    writeFile(path.join(repoRoot, 'v2/gateways/overview.mdx'), '# Overview\n');

    const result = await createScopedProfile({
      repoRoot,
      workspaceBase,
      scopeFile: '',
      versions: [],
      languages: [],
      tabs: [],
      prefixes: ['v2/gateways'],
      interactive: false,
      disableOpenApi: false,
      printOnly: false,
      help: false
    });

    const generatedIndexFile = path.join(result.workspaceDir, 'v2/gateways/index.mdx');
    const generatedIndexContent = fs.readFileSync(generatedIndexFile, 'utf8');

    assert.ok(!fs.lstatSync(generatedIndexFile).isSymbolicLink(), 'selected generated index should be rewritten in scoped workspace');
    assert.match(generatedIndexContent, /\[Overview]\(overview\.mdx\)/, 'in-scope generated index links should be preserved');
    assert.doesNotMatch(
      generatedIndexContent,
      /\[Sources]\(guides\/advanced-operations\/sources\.md\)/,
      'missing or out-of-scope generated index links should be removed'
    );
  });

  cases.push(async () => {
    const repoRoot = mkTmpDir('lpd-scope-refresh-root-');
    const workspaceBase = mkTmpDir('lpd-scope-refresh-out-');
    const docsPath = path.join(repoRoot, 'docs.json');
    const initialDocs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Initial Docs',
      navigation: {
        tabs: [
          {
            tab: 'Developers',
            groups: [
              {
                group: 'Dev',
                pages: ['v2/dev/get-started']
              }
            ]
          }
        ]
      }
    };

    writeFile(docsPath, `${JSON.stringify(initialDocs, null, 2)}\n`);
    writeFile(path.join(repoRoot, '.mintignore'), '# fixture\n');
    writeFile(path.join(repoRoot, 'v2/dev/get-started.mdx'), '# Get started\n');

    const args = {
      repoRoot,
      workspaceBase,
      scopeFile: '',
      versions: [],
      languages: [],
      tabs: [],
      prefixes: ['v2/dev'],
      interactive: false,
      disableOpenapi: false,
      printOnly: false,
      help: false
    };

    const firstResult = await createScopedProfile(args);
    const firstScopedDocs = JSON.parse(fs.readFileSync(path.join(firstResult.workspaceDir, 'docs.json'), 'utf8'));
    assert.strictEqual(firstScopedDocs.name, 'Initial Docs');

    const refreshedDocs = { ...initialDocs, name: 'Updated Docs' };
    writeFile(docsPath, `${JSON.stringify(refreshedDocs, null, 2)}\n`);

    const secondResult = await createScopedProfile(args);
    const secondScopedDocs = JSON.parse(fs.readFileSync(path.join(secondResult.workspaceDir, 'docs.json'), 'utf8'));

    assert.strictEqual(secondResult.workspaceDir, firstResult.workspaceDir, 'workspace should remain stable across docs config refresh');
    assert.strictEqual(secondScopedDocs.name, 'Updated Docs', 'scoped workspace should be rewritten in place');
  });

  cases.push(async () => {
    const repoRoot = mkTmpDir('lpd-scope-stale-symlink-root-');
    const workspaceBase = mkTmpDir('lpd-scope-stale-symlink-out-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Stable Workspace Fixture',
      navigation: {
        tabs: [
          {
            tab: 'Gateways',
            groups: [
              {
                group: 'Node Pipelines',
                pages: ['v2/gateways/guides/node-pipelines/guide']
              }
            ]
          }
        ]
      }
    };

    writeFile(path.join(repoRoot, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(repoRoot, '.mintignore'), '# fixture\n');
    writeFile(path.join(repoRoot, 'v2/gateways/guides/node-pipelines/guide.mdx'), '# Guide\n');

    const args = {
      repoRoot,
      workspaceBase,
      scopeFile: '',
      versions: [],
      languages: [],
      tabs: [],
      prefixes: ['v2/gateways/guides/node-pipelines'],
      interactive: false,
      disableOpenapi: false,
      workspaceId: 'stable-node-pipelines',
      printOnly: false,
      help: false
    };

    const firstResult = await createScopedProfile(args);
    const staleLink = path.join(firstResult.workspaceDir, 'v2/gateways/guides/node-pipelines/node-pipelines.mdx');
    const missingTarget = path.join(repoRoot, 'v2/gateways/guides/node-pipelines/node-pipelines.mdx');
    fs.mkdirSync(path.dirname(staleLink), { recursive: true });
    fs.symlinkSync(missingTarget, staleLink, 'file');
    assert.ok(fs.lstatSync(staleLink).isSymbolicLink(), 'fixture should create a stale broken symlink');

    const secondResult = await createScopedProfile(args);

    assert.strictEqual(secondResult.workspaceDir, firstResult.workspaceDir, 'stable workspace id should reuse the same workspace directory');
    assert.throws(() => fs.lstatSync(staleLink), /ENOENT/, 'rebuild should prune stale broken symlinks from reused workspaces');
  });

  cases.push(async () => {
    const harness = createSupervisorHarness([
      createSupervisorProfile({ sourceDocsConfig: '/tmp/repo/docs.json', scopeHash: 'root-session' }),
      createSupervisorProfile({ sourceDocsConfig: '/tmp/repo/docs.json', scopeHash: 'root-session', routeCounts: { original: 5, scoped: 3 } })
    ]);

    const sessionPromise = harness.supervisor.start();
    await waitFor(20);
    assert.deepStrictEqual(harness.watchPaths, [harness.repoRoot]);

    harness.emit('change', 'not-the-config.json');
    await waitFor(20);
    assert.strictEqual(harness.profileCalls.length, 1, 'unrelated filenames should not trigger scoped refresh');

    harness.emit('change', 'docs.json');
    await waitFor(40);
    assert.strictEqual(harness.profileCalls.length, 2, 'active root docs.json should trigger refresh');
    assert.strictEqual(harness.children.length, 1, 'config refresh should not restart mint');
    assert.ok(
      harness.logMessages.some((message) => message.includes('Scoped workspace refreshed in place')),
      'config refresh should reconcile the workspace in place'
    );

    await harness.supervisor.shutdown();
    await sessionPromise;
  });

  cases.push(async () => {
    const harness = createSupervisorHarness([
      createSupervisorProfile({ sourceDocsConfig: '/tmp/repo/docs-gate-work.json', scopeHash: 'alt-session' }),
      createSupervisorProfile({ sourceDocsConfig: '/tmp/repo/docs-gate-work.json', scopeHash: 'alt-session', routeCounts: { original: 7, scoped: 4 } })
    ]);

    const sessionPromise = harness.supervisor.start();
    await waitFor(20);

    harness.emit('change', 'docs.json');
    await waitFor(20);
    assert.strictEqual(harness.profileCalls.length, 1, 'non-active configs should be ignored');

    harness.emit('change', 'docs-gate-work.json');
    await waitFor(40);
    assert.strictEqual(harness.profileCalls.length, 2, 'active alternate docs config should trigger refresh');

    await harness.supervisor.shutdown();
    await sessionPromise;
  });

  cases.push(async () => {
    const harness = createSupervisorHarness([
      createSupervisorProfile({ sourceDocsConfig: '/tmp/repo/docs.json', scopeHash: 'debounce-session' }),
      createSupervisorProfile({ sourceDocsConfig: '/tmp/repo/docs.json', scopeHash: 'debounce-session', routeCounts: { original: 6, scoped: 4 } })
    ]);

    const sessionPromise = harness.supervisor.start();
    await waitFor(20);

    harness.emit('change', 'docs.json');
    harness.emit('rename', 'docs.json');
    await waitFor(40);

    assert.strictEqual(harness.profileCalls.length, 2, 'debounced config events should collapse into a single refresh');
    assert.strictEqual(harness.children.length, 1, 'debounced refresh should not restart mint');

    await harness.supervisor.shutdown();
    await sessionPromise;
  });

  cases.push(async () => {
    const harness = createSupervisorHarness([
      createSupervisorProfile({
        sourceDocsConfig: '/tmp/repo/docs.json',
        scopeHash: 'content-session',
        watchFiles: ['/tmp/repo/docs.json', '/tmp/repo/.mintignore', '/tmp/repo/v2/dev/get-started.mdx']
      }),
      createSupervisorProfile({
        sourceDocsConfig: '/tmp/repo/docs.json',
        scopeHash: 'content-session',
        routeCounts: { original: 8, scoped: 5 },
        watchFiles: ['/tmp/repo/docs.json', '/tmp/repo/.mintignore', '/tmp/repo/v2/dev/get-started.mdx', '/tmp/repo/snippets/components/demo.jsx']
      })
    ]);

    const sessionPromise = harness.supervisor.start();
    await waitFor(20);
    assert.deepStrictEqual(harness.watchPaths.sort(), [harness.repoRoot, path.join(harness.repoRoot, 'v2/dev')].sort());

    harness.emit('change', 'get-started.mdx');
    await waitFor(60);

    assert.strictEqual(harness.profileCalls.length, 2, 'watched projected content changes should refresh the scoped workspace');
    assert.strictEqual(harness.children.length, 1, 'content refresh should not restart mint');
    assert.deepStrictEqual(
      harness.watchPaths.sort(),
      [harness.repoRoot, path.join(harness.repoRoot, 'v2/dev'), path.join(harness.repoRoot, 'snippets/components')].sort()
    );

    await harness.supervisor.shutdown();
    await sessionPromise;
  });

  cases.push(async () => {
    const harness = createSupervisorHarness([
      createSupervisorProfile({
        sourceDocsConfig: '/tmp/repo/docs.json',
        scopeHash: 'mintignore-session',
        watchFiles: ['/tmp/repo/docs.json', '/tmp/repo/.mintignore', '/tmp/repo/v2/dev/get-started.mdx']
      }),
      createSupervisorProfile({
        sourceDocsConfig: '/tmp/repo/docs.json',
        scopeHash: 'mintignore-session',
        routeCounts: { original: 5, scoped: 2 },
        watchFiles: ['/tmp/repo/docs.json', '/tmp/repo/.mintignore', '/tmp/repo/v2/dev/get-started.mdx']
      })
    ]);

    const sessionPromise = harness.supervisor.start();
    await waitFor(20);

    harness.emit('change', '.mintignore');
    await waitFor(40);

    assert.strictEqual(harness.profileCalls.length, 2, 'repo .mintignore changes should refresh the projection');
    assert.strictEqual(harness.children.length, 1, 'mintignore refresh should not restart mint');

    await harness.supervisor.shutdown();
    await sessionPromise;
  });

  cases.push(async () => {
    const harness = createSupervisorHarness([
      createSupervisorProfile({
        sourceDocsConfig: '/tmp/repo/docs.json',
        scopeHash: 'ignore-unrelated-session',
        watchFiles: ['/tmp/repo/docs.json', '/tmp/repo/.mintignore', '/tmp/repo/v2/dev/get-started.mdx']
      }),
      createSupervisorProfile({
        sourceDocsConfig: '/tmp/repo/docs.json',
        scopeHash: 'ignore-unrelated-session',
        routeCounts: { original: 5, scoped: 2 },
        watchFiles: ['/tmp/repo/docs.json', '/tmp/repo/.mintignore', '/tmp/repo/v2/dev/get-started.mdx']
      })
    ]);

    const sessionPromise = harness.supervisor.start();
    await waitFor(20);

    harness.emit('change', 'draft-not-in-scope.mdx');
    await waitFor(40);

    assert.strictEqual(harness.profileCalls.length, 1, 'out-of-scope file changes should be ignored');

    await harness.supervisor.shutdown();
    await sessionPromise;
  });

  cases.push(async () => {
    const harness = createSupervisorHarness([
      createSupervisorProfile({ sourceDocsConfig: '/tmp/repo/docs.json', scopeHash: 'invalid-session' }),
      new Error('Unexpected token } in JSON at position 10')
    ]);

    const sessionPromise = harness.supervisor.start();
    await waitFor(20);

    harness.emit('change', 'docs.json');
    await waitFor(40);

    assert.strictEqual(harness.children.length, 1, 'refresh failure should keep the existing mint child alive');
    assert.ok(
      harness.errorMessages.some((message) => message.includes('Scoped workspace refresh failed')),
      'refresh failure should be reported clearly'
    );

    await harness.supervisor.shutdown();
    await sessionPromise;
  });

  for (let index = 0; index < cases.length; index += 1) {
    const label = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
      console.log(`   ✓ ${label}`);
    } catch (error) {
      failures.push(`${label}: ${error.message}`);
    }
  }

  return {
    passed: failures.length === 0,
    total: cases.length,
    errors: failures
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ lpd scoped mint-dev tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} lpd scoped mint-dev test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ lpd scoped mint-dev tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
