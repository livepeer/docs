#!/usr/bin/env node
/**
 * @script            docs-page-research.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/docs-page-research.js, tools/scripts/docs-fact-registry.js, tasks/research/claims
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests docs-page-research.js — validates claim extraction, contradiction detection, and evidence-source adapters for the experimental research runner.
 * @pipeline          manual — experimental research system
 * @usage             node tests/unit/docs-page-research.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const research = require('../../tools/scripts/docs-page-research');

let errors = [];

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absPath, value) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, value, 'utf8');
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({ name, message: error.message });
  }
}

async function withMockedFetch(handler, fn) {
  const previous = global.fetch;
  global.fetch = handler;
  try {
    await fn();
  } finally {
    global.fetch = previous;
  }
}

async function runTests() {
  errors = [];
  console.log('🧪 Docs Page Research Unit Tests');

  await runCase('Claim extraction keeps material factual statements', async () => {
    const content = `
---
title: Test
---
The active set currently rewards only the top 100 orchestrators.
Pool workers do not need LPT.
This page is nice.
Batch AI requires 24 GB VRAM for competitive diffusion pipelines.
`;
    const claims = research.extractClaimsFromContent(content);
    assert.ok(claims.some((entry) => entry.includes('top 100 orchestrators')));
    assert.ok(claims.some((entry) => entry.includes('24 GB VRAM')));
    assert.ok(!claims.some((entry) => entry.includes('This page is nice')));
  });

  await runCase('Pattern extraction finds contradictory numeric values', async () => {
    const snippets = [
      'Batch AI inference needs 16 GB for basic workloads.',
      'The key threshold is 24 GB for competitive diffusion pipelines.'
    ];
    const values = research.extractPatternValues(snippets, ['\\b(?:8|12|16|24)\\s*GB\\b']);
    assert.deepStrictEqual(values, ['16 GB', '24 GB']);
  });

  await runCase('GitHub evidence adapter reads repository metadata', async () => {
    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({ full_name: 'Stronk-Tech/OrchestratorSiphon', description: 'OrchestratorSiphon' });
      }
    }), async () => {
      const evidence = await research.fetchEvidenceRef({
        type: 'github-repo',
        ref: 'https://github.com/Stronk-Tech/OrchestratorSiphon',
        match_any: ['OrchestratorSiphon']
      });
      assert.strictEqual(evidence.ok, true);
      assert.strictEqual(evidence.matched, true);
    });
  });

  await runCase('Forum evidence adapter reads topic json', async () => {
    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({ title: 'SPE Milestone Report', cooked: 'Streamplace and Livepeer Cloud updates' });
      }
    }), async () => {
      const evidence = await research.fetchEvidenceRef({
        type: 'forum-topic',
        ref: 'https://forum.livepeer.org/t/spe-milestone-report/3035',
        match_any: ['Streamplace']
      });
      assert.strictEqual(evidence.ok, true);
      assert.strictEqual(evidence.matched, true);
    });
  });

  await runCase('Evidence adapter matches equivalent wording with fuzzy token matching', async () => {
    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({
          title: 'Pool worker setup',
          cooked: 'Pool workers do not require LPT staking and can join with GPU only.'
        });
      }
    }), async () => {
      const evidence = await research.fetchEvidenceRef({
        type: 'forum-topic',
        ref: 'https://forum.livepeer.org/t/pool-worker-setup/9999',
        match_any: ['No LPT required']
      });
      assert.strictEqual(evidence.ok, true);
      assert.strictEqual(evidence.matched, true);
    });
  });

  await runCase('Evidence adapter matches weaker semantic variants for business-case wording', async () => {
    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({
          title: 'Operator viability notes',
          cooked: 'The payback period depends on electricity costs and whether the setup is commercially viable.'
        });
      }
    }), async () => {
      const evidence = await research.fetchEvidenceRef({
        type: 'forum-topic',
        ref: 'https://forum.livepeer.org/t/operator-viability/9998',
        match_any: ['break-even economics', 'worth it']
      });
      assert.strictEqual(evidence.ok, true);
      assert.strictEqual(evidence.matched, true);
    });
  });

  await runCase('Evidence adapter matches public GA and repo Discord signal variants', async () => {
    const root = mkTmpDir('docs-page-research-discord-');
    const repoDir = path.join(root, 'repo');
    const workflowPath = path.join(repoDir, '.github/workflows/discord-issue-intake.yml');
    writeFile(
      workflowPath,
      'name: discord-issue-intake\non:\n  repository_dispatch:\n    types: [discord]\n# discord.com/channels/livepeer\n'
    );

    const previousCwd = process.cwd();
    process.chdir(repoDir);
    try {
      const signalEvidence = await research.fetchEvidenceRef({
        type: 'repo-discord-signal',
        ref: '.github/workflows/discord-issue-intake.yml',
        match_any: ['discord.com/channels', 'repository_dispatch']
      });
      assert.strictEqual(signalEvidence.ok, true);
      assert.strictEqual(signalEvidence.matched, true);
    } finally {
      process.chdir(previousCwd);
    }

    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({
          title: 'Clearinghouse status',
          cooked: 'No public clearinghouse service is at general availability yet; the community remote signer is still the testing path.'
        });
      }
    }), async () => {
      const evidence = await research.fetchEvidenceRef({
        type: 'forum-topic',
        ref: 'https://forum.livepeer.org/t/clearinghouse-status/9997',
        match_any: ['public use status', 'community signer']
      });
      assert.strictEqual(evidence.ok, true);
      assert.strictEqual(evidence.matched, true);
    });
  });

  await runCase('Research runner reports contradictions on real value drift', async () => {
    const root = mkTmpDir('docs-page-research-runner-');
    const repoDir = path.join(root, 'repo');
    const registryDir = path.join(repoDir, 'tasks/research/claims');
    const guideA = 'v2/orchestrators/a.mdx';
    const guideB = 'v2/orchestrators/b.mdx';
    writeFile(path.join(repoDir, guideA), 'Batch AI inference needs 16 GB for basic workloads.');
    writeFile(path.join(repoDir, guideB), 'The key threshold is 24 GB for competitive diffusion pipelines.');
    writeFile(
      path.join(registryDir, 'orchestrators.json'),
      `${JSON.stringify(
        {
          version: 1,
          domain: 'orchestrators',
          claim_families: [
            {
              claim_id: 'orch-batch-ai-vram-threshold',
              claim_family: 'hardware-vram-minimums',
              entity: 'orchestrator',
              claim_summary: 'Batch AI VRAM wording differs across pages.',
              canonical_owner: guideA,
              source_type: 'repo-doc-reference',
              source_ref: guideA,
              evidence_date: '2026-03-16',
              status: 'conflicted',
              freshness_class: 'review-on-change',
              dependent_pages: [guideB],
              related_claims: [],
              last_reviewed_by: 'codex',
              notes: 'test',
              match_terms: ['batch ai', 'gb'],
              comparison_patterns: ['\\b(?:16|24)\\s*GB\\b'],
              evidence_refs: [
                {
                  type: 'repo-file',
                  ref: guideA,
                  match_any: ['16 GB']
                }
              ]
            }
          ]
        },
        null,
        2
      )}\n`
    );

    const previousCwd = process.cwd();
    process.chdir(repoDir);
    try {
      const reportPath = path.join(root, 'report.json');
      await research.run({
        registry: 'tasks/research/claims',
        page: guideA,
        files: [],
        reportMd: '',
        reportJson: reportPath,
        quiet: true
      });
      const parsed = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      assert.strictEqual(parsed.conflicted_claims.length, 1);
      assert.strictEqual(parsed.cross_page_contradictions.length, 1);
      assert.deepStrictEqual(
        parsed.cross_page_contradictions[0].pages.map((entry) => entry.values[0]).sort(),
        ['16 GB', '24 GB']
      );
    } finally {
      process.chdir(previousCwd);
    }
  });

  await runCase('Markdown report escapes raw braces in extracted claims', async () => {
    const root = mkTmpDir('docs-page-research-markdown-');
    const repoDir = path.join(root, 'repo');
    const registryDir = path.join(repoDir, 'tasks/research/claims');
    const guideA = 'v2/gateways/a.mdx';
    writeFile(path.join(repoDir, guideA), '{/* TODO: test */}\nThe public clearinghouse is not at general availability yet.');
    writeFile(
      path.join(registryDir, 'gateways.json'),
      `${JSON.stringify(
        {
          version: 1,
          domain: 'gateways',
          claim_families: [
            {
              claim_id: 'gw-clearinghouse-public-readiness',
              claim_family: 'clearinghouse-public-readiness',
              entity: 'gateway',
              claim_summary: 'Use current public clearinghouse status wording.',
              canonical_owner: guideA,
              source_type: 'repo-doc-reference',
              source_ref: guideA,
              evidence_date: '2026-03-16',
              status: 'time-sensitive',
              freshness_class: 'review-periodic',
              dependent_pages: [],
              related_claims: [],
              last_reviewed_by: 'codex',
              notes: 'test',
              match_terms: ['general availability'],
              comparison_patterns: [],
              evidence_refs: [
                {
                  type: 'repo-file',
                  ref: guideA,
                  match_any: ['general availability']
                }
              ]
            }
          ]
        },
        null,
        2
      )}\n`
    );

    const previousCwd = process.cwd();
    process.chdir(repoDir);
    try {
      const reportPath = path.join(root, 'report.md');
      await research.run({
        registry: 'tasks/research/claims',
        page: guideA,
        files: [],
        reportMd: reportPath,
        reportJson: '',
        quiet: true
      });
      const markdown = fs.readFileSync(reportPath, 'utf8');
      assert.ok(!markdown.includes('{'));
      assert.ok(!markdown.includes('{/* TODO: test */}'));
    } finally {
      process.chdir(previousCwd);
    }
  });

  return {
    passed: errors.length === 0,
    total: 9,
    errors
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ Docs page research unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} docs page research unit test failure(s)`);
      result.errors.forEach((entry) => {
        console.error(`  - ${entry.name}: ${entry.message}`);
      });
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ Docs page research unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}
