#!/usr/bin/env node
/**
 * @script      phase-3-pipeline-builder
 * @purpose     One-shot generator. Creates all remaining pipeline + meta dispatchers + action YAMLs from a config.
 * @description Reads PIPELINES config below, writes each dispatcher script file with proper 11-tag JSDoc, mode-aware logic, and atomic invocation. Run once.
 * @usage       node workspace/build/phase-3-pipeline-builder.js
 */

'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = path.resolve(__dirname, '../..');

function pipelineTemplate({ concern, niche, dispatchSubPath, atomics, summary, scope, defaultRepairOnManual = true }) {
  const purpose = `Pipeline dispatcher for ${niche} (full lifecycle: detect → repair → verify → escalate)`;
  return `#!/usr/bin/env node
/**
 * @script      dispatch-${niche}
 * @type        dispatch
 * @concern     ${concern}
 * @niche       ${niche}
 * @purpose     ${purpose}
 * @description ${summary}
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       ${scope}
 * @usage       node operations/scripts/dispatch/${dispatchSubPath}/dispatch-${niche}.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = ${JSON.stringify(atomics, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'").split('\n').map((l, i) => i === 0 ? l : '  ' + l).join('\n')};

function scopeFlags(args) {
  if (args.files) return ['--files', args.files];
  if (args.staged) return ['--staged'];
  if (args.full) return ['--full'];
  return [];
}

function runIfExists(p, flags) {
  if (!fs.existsSync(path.join(REPO_ROOT, p))) return 0;
  return runAtomic(path.join(REPO_ROOT, p), flags).exitCode;
}

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-${niche}.js', '${niche}'); process.exit(0); }
  const scope = scopeFlags(args);
  let code = 0;
  // Detect
  for (const p of (ATOMICS.detect || [])) {
    code = Math.max(code, runIfExists(p, scope));
  }
  // Repair (only in scheduled+write or manual)
  if ((args.mode === 'scheduled' && args.write) || args.mode === 'manual') {
    const repairFlags = args.write ? ['--write', '--verify', ...scope] : ['--dry-run', ...scope];
    for (const p of (ATOMICS.repair || [])) {
      code = Math.max(code, runIfExists(p, repairFlags));
    }
  } else if (args.mode === 'pr' && (ATOMICS.repair || []).length > 0) {
    // PR mode: dry-run preview of repairs (advisory)
    for (const p of (ATOMICS.repair || [])) {
      runIfExists(p, ['--dry-run', ...scope]);
    }
  }
  // Generate (for post-merge concerns)
  if (args.mode === 'post-merge' || (args.mode === 'scheduled' && (ATOMICS.generate || []).length > 0)) {
    for (const p of (ATOMICS.generate || [])) {
      code = Math.max(code, runIfExists(p, args.write ? ['--write'] : ['--check']));
    }
  }
  process.exit(code);
}
main();
`;
}

function metaTemplate({ concern, verb, pipelines, summary, dispatchSubPath }) {
  return `#!/usr/bin/env node
/**
 * @script      dispatch-${concern}-${verb}
 * @type        dispatch
 * @concern     ${concern}
 * @niche       meta
 * @purpose     ${verb} meta dispatcher: bundles ${concern} pipelines in --mode ${verb === 'check' ? 'pr' : verb === 'scan' ? 'scheduled' : verb === 'generate' ? 'post-merge' : verb === 'update' ? 'scheduled' : verb === 'sync' ? 'post-merge' : 'manual'}
 * @description ${summary}
 * @mode        dispatch
 * @pipeline    ${verb === 'check' ? 'P3' : verb === 'scan' ? 'P5/P6' : verb === 'generate' ? 'P4' : verb === 'update' ? 'P5-auto' : 'manual'}
 * @scope       all ${concern} pipelines
 * @usage       node operations/scripts/dispatch/${dispatchSubPath}/dispatch-${concern}-${verb}.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = '${verb === 'check' ? 'pr' : verb === 'scan' ? 'scheduled' : verb === 'generate' ? 'post-merge' : verb === 'update' ? 'scheduled' : verb === 'sync' ? 'post-merge' : 'manual'}';
const PIPELINES = ${JSON.stringify(pipelines)}.map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/${dispatchSubPath}', f));

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  const flags = ['--mode', MODE, ...passThroughFlags(args)${verb === 'check' ? '.filter((f) => f !== \'--write\')' : ''}];
  let exitCode = 0;
  for (const p of PIPELINES) {
    console.log(\`\\n=== \${path.basename(p)} ===\`);
    exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode);
  }
  process.exit(exitCode);
}
main();
`;
}

function actionYamlTemplate({ concern, paths, schedule, hasPostMerge }) {
  const triggers = [
    'pull_request:',
    `    paths:${paths.map((p) => `\n      - "${p}"`).join('')}`,
    hasPostMerge ? `  push:\n    branches: [docs-v2]\n    paths:${paths.map((p) => `\n      - "${p}"`).join('')}` : '',
    `  schedule:\n    - cron: "${schedule}"`,
    `  workflow_dispatch:\n    inputs:\n      mode:\n        description: "Mode"\n        type: choice\n        options: [pr, scheduled, manual${hasPostMerge ? ', post-merge' : ''}]\n        default: manual\n      dry_run:\n        type: boolean\n        default: true`,
  ].filter(Boolean).join('\n  ');

  return `# type: dispatch
# concern: ${concern}
# pipeline: composite (P3 + P5/P6 + manual${hasPostMerge ? ' + P4 post-merge' : ''})
# dispatch-${concern}.yml — Action workflow for ${concern} concern.
name: ${concern.charAt(0).toUpperCase() + concern.slice(1)} Pipeline

on:
  ${triggers}

permissions:
  contents: read

concurrency:
  group: dispatch-${concern}-\${{ github.ref }}
  cancel-in-progress: \${{ github.event_name == 'pull_request' }}

jobs:
  pr-check:
    if: github.event_name == 'pull_request'
    name: ${concern.charAt(0).toUpperCase() + concern.slice(1)} · PR Check
    runs-on: ubuntu-latest
    permissions: { contents: read, pull-requests: write }
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: cd tools && npm ci
      - name: ${concern} PR meta
        env: { NODE_PATH: tools/node_modules }
        run: node operations/scripts/dispatch/${concern === 'governance' ? 'governance' : 'content/' + concern}/dispatch-${concern}-check.js --staged
${hasPostMerge ? `
  post-merge-generate:
    if: github.event_name == 'push'
    name: ${concern.charAt(0).toUpperCase() + concern.slice(1)} · Post-merge Generate
    runs-on: ubuntu-latest
    permissions: { contents: write }
    steps:
      - uses: actions/checkout@v4
        with: { ref: \${{ vars.DEPLOY_BRANCH || 'docs-v2' }}, token: \${{ secrets.GITHUB_TOKEN }} }
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: cd tools && npm ci
      - name: ${concern} post-merge meta
        env: { NODE_PATH: tools/node_modules }
        run: node operations/scripts/dispatch/${concern === 'governance' ? 'governance' : 'content/' + concern}/dispatch-${concern}-generate.js --write
` : ''}
  scheduled-scan:
    if: github.event_name == 'schedule' || (github.event_name == 'workflow_dispatch' && inputs.mode == 'scheduled')
    name: ${concern.charAt(0).toUpperCase() + concern.slice(1)} · Scheduled
    runs-on: ubuntu-latest
    permissions: { contents: write, issues: write, pull-requests: write }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: cd tools && npm ci
      - name: ${concern} scheduled meta
        env: { NODE_PATH: tools/node_modules }
        run: |
          FLAGS=""
          if [[ "\${{ inputs.dry_run }}" == "false" ]]; then FLAGS="--write --verify"; fi
          node operations/scripts/dispatch/${concern === 'governance' ? 'governance' : 'content/' + concern}/dispatch-${concern}-${concern === 'copy' ? 'update' : 'scan'}.js $FLAGS

  manual-repair:
    if: github.event_name == 'workflow_dispatch' && inputs.mode == 'manual'
    name: ${concern.charAt(0).toUpperCase() + concern.slice(1)} · Manual Repair
    runs-on: ubuntu-latest
    permissions: { contents: write, pull-requests: write }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: cd tools && npm ci
      - name: ${concern} manual repair
        env: { NODE_PATH: tools/node_modules }
        run: |
          FLAGS=""
          if [[ "\${{ inputs.dry_run }}" == "false" ]]; then FLAGS="--write --verify"; fi
          node operations/scripts/dispatch/${concern === 'governance' ? 'governance' : 'content/' + concern}/dispatch-${concern}-repair.js $FLAGS
      - name: Open PR with fixes
        if: \${{ inputs.dry_run == false }}
        uses: peter-evans/create-pull-request@v7
        with:
          title: "chore(${concern}): manual repair sweep"
          commit-message: "chore(${concern}): apply ${concern} fixes [skip ci]"
          branch: chore/${concern}-repair-\${{ github.run_id }}
          labels: ${concern}, auto-generated, needs-review
`;
}

// ============================================================================
// PIPELINE CONFIG
// ============================================================================

const COPY_PIPELINES = [
  {
    niche: 'social-feeds', concern: 'copy', dispatchSubPath: 'content/copy',
    summary: 'Pipeline for scheduled social feed integration (Discord, Forum, Ghost, GitHub, RSS, YouTube). Matrix per-source under one dispatcher.',
    scope: 'snippets/data/social-feeds/',
    atomics: {
      detect: [
        'operations/scripts/integrators/copy/social-feeds/fetch-discord-announcements.js',
        'operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js',
        'operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js',
        'operations/scripts/integrators/copy/social-feeds/fetch-github-discussions.js',
        'operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js',
        'operations/scripts/integrators/copy/social-feeds/fetch-youtube-data.js',
      ],
    },
  },
  { niche: 'changelogs', concern: 'copy', dispatchSubPath: 'content/copy', summary: 'Pipeline for changelog regeneration from upstream repo releases.', scope: 'snippets/data/changelogs/', atomics: { detect: ['operations/scripts/integrators/copy/changelogs/generate-changelog.js'] } },
  { niche: 'translations', concern: 'copy', dispatchSubPath: 'content/copy', summary: 'Pipeline for v2 translation freshness check and refresh.', scope: 'v2/es/, v2/fr/, v2/cn/', atomics: { detect: ['operations/scripts/integrators/content/language-translation/translate-docs.js'] } },
  { niche: 'showcase', concern: 'copy', dispatchSubPath: 'content/copy', summary: 'Pipeline for project showcase data sync.', scope: 'snippets/data/showcase/', atomics: { detect: ['operations/scripts/integrators/copy/showcase/project-showcase-sync.js'] } },
];

const DISCOVERABILITY_PIPELINES = [
  { niche: 'ai-sitemap', concern: 'discoverability', dispatchSubPath: 'content/discoverability', summary: 'AI sitemap pipeline (PR drift check + post-merge regen + verify).', scope: 'sitemap-ai.xml', atomics: { detect: ['operations/scripts/validators/content/structure/verify-ai-sitemap.js'], generate: ['operations/scripts/generators/discoverability/seo/generate-ai-sitemap.js'] } },
  { niche: 'companions', concern: 'discoverability', dispatchSubPath: 'content/discoverability', summary: 'AI companion manifest pipeline (PR drift check + post-merge regen + verify).', scope: 'snippets/data/companions/', atomics: { detect: ['operations/scripts/validators/content/companions/check-companion-manifest.js'], generate: ['operations/scripts/generators/content/reference/generate-glossary-companions.js'] } },
  { niche: 'llms-files', concern: 'discoverability', dispatchSubPath: 'content/discoverability', summary: 'llms.txt + llms-full.txt pipeline.', scope: 'llms.txt, llms-full.txt', atomics: { detect: ['operations/scripts/validators/content/structure/check-llms-files.js'], generate: ['operations/scripts/generators/discoverability/seo/generate-llms-files.js'] } },
  { niche: 'og-images', concern: 'discoverability', dispatchSubPath: 'content/discoverability', summary: 'OG image pipeline (Puppeteer generate + verify per page).', scope: 'public/og-images/', atomics: { generate: ['operations/scripts/generators/discoverability/seo/generate-og-images.js'] } },
  { niche: 'seo-metadata', concern: 'discoverability', dispatchSubPath: 'content/discoverability', summary: 'SEO metadata repair pipeline (frontmatter completeness, descriptions).', scope: 'v2/**/*.mdx', atomics: { repair: ['operations/scripts/remediators/content/seo/repair-seo-metadata.js'] } },
];

const MAINTENANCE_PIPELINES = [
  { niche: 'docs-index', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'docs-index.json pipeline (PR drift check + post-merge regen).', scope: 'docs-index.json', atomics: { detect: ['operations/scripts/validators/content/catalogs/check-docs-index.js'], generate: ['operations/scripts/generators/content/catalogs/generate-docs-index.js'] } },
  { niche: 'catalogs', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'docs-guide catalog pipeline (PR check + post-merge regen).', scope: 'docs-guide/catalog/', atomics: { detect: ['operations/scripts/validators/content/catalogs/check-docs-guide-catalogs.js'], generate: ['operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js', 'operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js', 'operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js'] } },
  { niche: 'component-registry', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'Component registry pipeline (PR drift check + post-merge regen + component validators).', scope: 'snippets/components/, component-registry.json', atomics: { detect: ['operations/scripts/validators/components/library/check-component-health.js', 'operations/scripts/validators/components/library/check-component-imports.js', 'operations/scripts/validators/components/library/check-component-css.js', 'operations/scripts/validators/components/library/check-naming-conventions.js'], generate: ['operations/scripts/generators/components/library/generate-component-registry.js'] } },
  { niche: 'sdk-clients', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'SDK client generation (Speakeasy wrapper).', scope: 'snippets/sdks/', atomics: { generate: ['operations/scripts/generators/content/sdk/generate-sdk-clients.sh'] } },
  { niche: 'contract-addresses', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'Contract addresses fetch from on-chain.', scope: 'snippets/data/contract-addresses/', atomics: { detect: ['operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js'] } },
  { niche: 'contract-shadow', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'Shadow contract pipeline (verify production matches shadow).', scope: 'snippets/data/contract-addresses/', atomics: { detect: ['operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses-shadow.js'] } },
  { niche: 'release-version', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'go-livepeer release version fetcher.', scope: 'snippets/data/releases/', atomics: { detect: ['operations/scripts/integrators/maintenance/releases/fetch-livepeer-release.js'] } },
  { niche: 'large-assets', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'Large asset sync to docs-v2-assets branch.', scope: 'public/', atomics: { detect: ['operations/scripts/integrators/maintenance/assets/sync-large-assets-to-branch.js'] } },
  { niche: 'config-flags', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'go-livepeer config flags fetcher.', scope: 'snippets/data/config-flags/', atomics: { detect: ['operations/scripts/integrators/maintenance/config/fetch-config-flags.js'] } },
  { niche: 'exchanges-data', concern: 'maintenance', dispatchSubPath: 'content/maintenance', summary: 'CoinGecko exchanges data fetcher.', scope: 'snippets/data/exchanges/', atomics: { detect: ['operations/scripts/integrators/maintenance/exchanges/fetch-exchanges-data.js'] } },
];

const GOVERNANCE_PIPELINES = [
  { niche: 'governance-map', concern: 'governance', dispatchSubPath: 'governance', summary: 'Governance markers validity + drift repair pipeline.', scope: 'GOVERNANCE.md markers across repo', atomics: { detect: ['operations/scripts/validators/governance/compliance/check-governance-markers.js'], repair: ['operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js'] } },
  { niche: 'workflow-governance', concern: 'governance', dispatchSubPath: 'governance', summary: 'Workflow YAML governance header pipeline.', scope: '.github/workflows/*.yml', atomics: { detect: ['operations/scripts/validators/governance/pr/check-workflow-governance.js'], repair: ['operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js'] } },
  { niche: 'jsdoc-headers', concern: 'governance', dispatchSubPath: 'governance', summary: '11-tag JSDoc enforcement pipeline.', scope: 'operations/scripts/**/*.js', atomics: { detect: ['operations/scripts/validators/governance/compliance/check-jsdoc-headers.js'], repair: ['operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js', 'operations/scripts/remediators/content/classification/add-framework-headers.js'] } },
  { niche: 'new-file-governance', concern: 'governance', dispatchSubPath: 'governance', summary: 'New file metadata enforcement pipeline.', scope: 'newly staged files', atomics: { detect: ['operations/scripts/validators/governance/compliance/check-new-file-governance.js'], repair: ['operations/scripts/remediators/content/classification/assign-purpose-metadata.js', 'operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js', 'operations/scripts/remediators/content/classification/add-pagetype-mechanical.js'] } },
  { niche: 'codex-compliance', concern: 'governance', dispatchSubPath: 'governance', summary: 'Codex branch + task contract compliance.', scope: 'codex/* branches', atomics: { detect: ['operations/scripts/validators/governance/compliance/validate-codex-task-contract.js'] } },
  { niche: 'script-locations', concern: 'governance', dispatchSubPath: 'governance', summary: 'Script folder placement enforcement.', scope: 'operations/scripts/**/*.js', atomics: { detect: ['operations/scripts/validators/governance/compliance/check-script-locations.js'] } },
  { niche: 'script-inventory', concern: 'governance', dispatchSubPath: 'governance', summary: 'Script registry inventory pipeline.', scope: 'operations/scripts/**', atomics: { detect: ['operations/scripts/validators/governance/pr/audit-script-inventory.js'], repair: ['operations/scripts/remediators/governance/scripts/repair-script-inventory.js'] } },
  { niche: 'workspace-retention', concern: 'governance', dispatchSubPath: 'governance', summary: 'Workspace structure + retention audit.', scope: 'workspace/', atomics: { detect: ['operations/scripts/audits/governance/repo/audit-tasks-folders.js'] } },
  { niche: 'pipelines', concern: 'governance', dispatchSubPath: 'governance', summary: 'Weekly governance repair orchestrator wrapper.', scope: 'cross-concern governance state', atomics: { detect: ['operations/scripts/dispatch/governance/pipelines/governance-pipeline.js'] } },
  { niche: 'root-governance', concern: 'governance', dispatchSubPath: 'governance', summary: 'Root governance artifact regen + sync check.', scope: '.allowlist, root manifests', atomics: { detect: ['operations/scripts/validators/governance/compliance/check-root-governance-sync.js'], generate: ['operations/scripts/generators/governance/root/generate-root-governance-artifacts.js', 'operations/scripts/generators/governance/reports/generate-repo-governance-status.js'] } },
  { niche: 'action-docs', concern: 'governance', dispatchSubPath: 'governance', summary: 'Self-doc pipeline: regenerate actions-library on workflow changes.', scope: '.github/workflows/, .github/workspace/actions-library/', atomics: { generate: ['.github/workspace/actions-library/generate-action-pages.js'] } },
  { niche: 'script-registry', concern: 'governance', dispatchSubPath: 'governance', summary: 'Script registry self-doc pipeline.', scope: 'operations/scripts/, tools/config/registry/script-registry.json', atomics: { generate: ['operations/scripts/generators/governance/catalogs/generate-script-registry.js'] } },
];

const COPY_META = [
  { concern: 'copy', verb: 'check', pipelines: ['dispatch-canonical-sync.js', 'dispatch-ownerless-language.js'], summary: 'PR meta for copy concern.', dispatchSubPath: 'content/copy' },
  { concern: 'copy', verb: 'update', pipelines: ['dispatch-social-feeds.js', 'dispatch-changelogs.js', 'dispatch-translations.js', 'dispatch-showcase.js'], summary: 'Scheduled meta for copy integrators.', dispatchSubPath: 'content/copy' },
  { concern: 'copy', verb: 'repair', pipelines: ['dispatch-canonical-sync.js', 'dispatch-ownerless-language.js'], summary: 'Manual repair meta for copy concern.', dispatchSubPath: 'content/copy' },
];

const DISC_META = [
  { concern: 'discoverability', verb: 'check', pipelines: ['dispatch-ai-sitemap.js', 'dispatch-companions.js', 'dispatch-llms-files.js'], summary: 'PR meta for discoverability concern.', dispatchSubPath: 'content/discoverability' },
  { concern: 'discoverability', verb: 'generate', pipelines: ['dispatch-ai-sitemap.js', 'dispatch-companions.js', 'dispatch-llms-files.js', 'dispatch-og-images.js'], summary: 'Post-merge meta for discoverability generators.', dispatchSubPath: 'content/discoverability' },
  { concern: 'discoverability', verb: 'repair', pipelines: ['dispatch-seo-metadata.js'], summary: 'Manual repair meta for discoverability concern.', dispatchSubPath: 'content/discoverability' },
];

const MAINT_META = [
  { concern: 'maintenance', verb: 'check', pipelines: ['dispatch-docs-index.js', 'dispatch-catalogs.js', 'dispatch-component-registry.js'], summary: 'PR meta for maintenance concern.', dispatchSubPath: 'content/maintenance' },
  { concern: 'maintenance', verb: 'generate', pipelines: ['dispatch-docs-index.js', 'dispatch-catalogs.js', 'dispatch-component-registry.js', 'dispatch-sdk-clients.js'], summary: 'Post-merge meta for maintenance generators.', dispatchSubPath: 'content/maintenance' },
  { concern: 'maintenance', verb: 'update', pipelines: ['dispatch-contract-addresses.js', 'dispatch-contract-shadow.js', 'dispatch-release-version.js', 'dispatch-large-assets.js', 'dispatch-config-flags.js', 'dispatch-exchanges-data.js'], summary: 'Scheduled meta for maintenance integrators.', dispatchSubPath: 'content/maintenance' },
];

const GOV_META = [
  { concern: 'governance', verb: 'check', pipelines: ['dispatch-folder-allowlist.js', 'dispatch-governance-map.js', 'dispatch-workflow-governance.js', 'dispatch-jsdoc-headers.js', 'dispatch-new-file-governance.js', 'dispatch-codex-compliance.js', 'dispatch-script-locations.js', 'dispatch-script-inventory.js'], summary: 'PR meta for governance concern.', dispatchSubPath: 'governance' },
  { concern: 'governance', verb: 'scan', pipelines: ['dispatch-folder-allowlist.js', 'dispatch-governance-map.js', 'dispatch-workspace-retention.js', 'dispatch-pipelines.js', 'dispatch-script-inventory.js'], summary: 'Scheduled meta for governance scans.', dispatchSubPath: 'governance' },
  { concern: 'governance', verb: 'sync', pipelines: ['dispatch-root-governance.js', 'dispatch-folder-allowlist.js', 'dispatch-governance-map.js'], summary: 'Post-merge meta for governance state repair.', dispatchSubPath: 'governance' },
  { concern: 'governance', verb: 'generate', pipelines: ['dispatch-action-docs.js', 'dispatch-script-registry.js'], summary: 'Self-doc generate meta.', dispatchSubPath: 'governance' },
];

// ============================================================================
// WRITE
// ============================================================================

let written = 0;
function write(rel, content) {
  const abs = path.join(REPO_ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
  written += 1;
}

for (const p of [...COPY_PIPELINES, ...DISCOVERABILITY_PIPELINES, ...MAINTENANCE_PIPELINES, ...GOVERNANCE_PIPELINES]) {
  write(`operations/scripts/dispatch/${p.dispatchSubPath}/dispatch-${p.niche}.js`, pipelineTemplate(p));
}

for (const m of [...COPY_META, ...DISC_META, ...MAINT_META, ...GOV_META]) {
  write(`operations/scripts/dispatch/${m.dispatchSubPath}/dispatch-${m.concern}-${m.verb}.js`, metaTemplate(m));
}

// Action YAMLs
write('.github/workflows/dispatch-copy.yml', actionYamlTemplate({ concern: 'copy', paths: ['v2/**/*.mdx', 'snippets/data/**'], schedule: '0 3 * * *', hasPostMerge: false }));
write('.github/workflows/dispatch-discoverability.yml', actionYamlTemplate({ concern: 'discoverability', paths: ['v2/**', 'snippets/**', 'docs.json'], schedule: '0 4 * * *', hasPostMerge: true }));
write('.github/workflows/dispatch-maintenance.yml', actionYamlTemplate({ concern: 'maintenance', paths: ['snippets/components/**', 'snippets/data/**', 'docs.json'], schedule: '0 5 * * *', hasPostMerge: true }));
write('.github/workflows/dispatch-governance.yml', actionYamlTemplate({ concern: 'governance', paths: ['.github/**', 'operations/scripts/**', 'docs-guide/**', 'tools/config/**', 'snippets/**'], schedule: '0 7 * * *', hasPostMerge: true }));

console.log(`phase-3-pipeline-builder: wrote ${written} files`);
