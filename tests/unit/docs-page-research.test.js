#!/usr/bin/env node
/**
 * @script            docs-page-research.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/docs-page-research.js, tools/scripts/docs-fact-registry.js, tasks/research/claims
 * @domain            docs
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
    if (typeof research.resetCaches === 'function') {
      research.resetCaches();
    }
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

  await runCase('Collect evidence inherits family-level match terms when refs are too literal', async () => {
    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({
          title: 'Gateway payments',
          cooked: 'Off-chain does not mean free. PM tickets are still used, but ETH custody is delegated to a signer.'
        });
      }
    }), async () => {
      const evidence = await research.collectEvidence({
        claim_family: 'off-chain-payment-obligation',
        claim_summary: 'Off-chain gateways still pay through PM tickets even when the gateway process holds no ETH key.',
        canonical_owner: 'v2/gateways/guides/payments-and-pricing/payment-guide.mdx',
        match_terms: ['off-chain does not mean free', 'PM tickets', 'no ETH in gateway'],
        evidence_refs: [
          {
            type: 'forum-topic',
            ref: 'https://forum.livepeer.org/t/gateway-payments/9996',
            match_any: ['delegated custody']
          }
        ]
      });
      assert.strictEqual(evidence[0].ok, true);
      assert.strictEqual(evidence[0].matched, true);
    });
  });

  await runCase('Collect evidence prefers stronger official sources for current-sensitive claims', async () => {
    await withMockedFetch(async (url) => {
      if (String(url).includes('livepeer.org')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return '<html><body>The programme is currently active and recommended for startups building AI video.</body></html>';
          }
        };
      }
      return {
        ok: true,
        status: 200,
        async text() {
          return JSON.stringify({
            title: 'Older forum note',
            cooked: 'The programme was previously discussed with limited public detail.'
          });
        }
      };
    }, async () => {
      const evidence = await research.collectEvidence({
        claim_family: 'programme-availability',
        claim_summary: 'Support pages should describe current programme availability with current evidence.',
        canonical_owner: 'v2/gateways/guides/roadmap-and-funding/operator-support.mdx',
        status: 'time-sensitive',
        notes: 'current cohort timing matters',
        match_terms: ['currently active', 'recommended for startups', 'programme availability'],
        evidence_refs: [
          {
            type: 'forum-topic',
            ref: 'https://forum.livepeer.org/t/startup-programme/9995',
            match_any: ['programme']
          },
          {
            type: 'official-page',
            ref: 'https://www.livepeer.org/dev-hub',
            match_any: ['developer']
          }
        ]
      });
      assert.strictEqual(evidence[0].type, 'official-page');
      assert.strictEqual(evidence[0].matched, true);
      assert.ok(evidence[0].selection_score > evidence[1].selection_score);
    });
  });

  await runCase('Collect evidence prefers recent GitHub release or merged PR for implementation-sensitive claims', async () => {
    await withMockedFetch(async (url) => {
      if (String(url).includes('/releases/latest')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              tag_name: 'v0.8.0',
              published_at: '2026-03-12T00:00:00Z',
              body: 'Clearinghouse and remote signer support updated.'
            });
          }
        };
      }
      if (String(url).includes('/issues/3810')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              state: 'open',
              updated_at: '2025-10-01T00:00:00Z',
              body: 'Old note about clearinghouse support'
            });
          }
        };
      }
      return {
        ok: true,
        status: 200,
        async text() {
          return JSON.stringify({
            merged_at: '2026-03-10T00:00:00Z',
            body: 'Remote signer support for clearinghouse path'
          });
        }
      };
    }, async () => {
      const evidence = await research.collectEvidence({
        claim_family: 'clearinghouse-public-readiness',
        claim_summary: 'Current implementation readiness should be tied to recent GitHub implementation evidence.',
        canonical_owner: 'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx',
        source_type: 'github-pr',
        freshness_class: 'review-on-change',
        status: 'time-sensitive',
        notes: 'implementation readiness',
        match_terms: ['clearinghouse', 'remote signer support', 'current scope'],
        evidence_refs: [
          {
            type: 'github-issue',
            ref: 'https://github.com/livepeer/go-livepeer/issues/3810',
            match_any: ['clearinghouse']
          },
          {
            type: 'github-pr',
            ref: 'https://github.com/livepeer/go-livepeer/pull/3822',
            match_any: ['remote signer']
          },
          {
            type: 'github-release',
            ref: 'https://github.com/livepeer/go-livepeer/releases/latest',
            match_any: ['clearinghouse']
          }
        ]
      });
      assert.strictEqual(evidence[0].type, 'github-release');
      assert.ok(evidence[0].selection_score > evidence[1].selection_score);
      assert.ok(evidence[1].selection_score > evidence[2].selection_score);
    });
  });

  await runCase('Collect evidence prefers forum over GitHub for programme and support claims', async () => {
    await withMockedFetch(async (url) => {
      if (String(url).includes('forum.livepeer.org')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              title: 'SPE milestone report',
              last_posted_at: '2026-03-01T00:00:00Z',
              cooked: 'Current SPE support remains active and the programme continues this quarter.'
            });
          }
        };
      }
      return {
        ok: true,
        status: 200,
        async text() {
          return JSON.stringify({
            state: 'open',
            updated_at: '2026-03-10T00:00:00Z',
            body: 'Issue mentions support but not the programme state.'
          });
        }
      };
    }, async () => {
      const evidence = await research.collectEvidence({
        claim_family: 'programme-availability',
        claim_summary: 'Support pages should describe current programme availability and support status from public programme sources.',
        canonical_owner: 'v2/gateways/guides/roadmap-and-funding/operator-support.mdx',
        source_type: 'forum-milestone-report',
        freshness_class: 'review-periodic',
        status: 'time-sensitive',
        notes: 'support and programme status',
        match_terms: ['support', 'programme', 'active'],
        evidence_refs: [
          {
            type: 'github-issue',
            ref: 'https://github.com/livepeer/docs/issues/999',
            match_any: ['support']
          },
          {
            type: 'forum-topic',
            ref: 'https://forum.livepeer.org/t/spe-milestone-report/3035',
            match_any: ['support', 'programme']
          }
        ]
      });
      assert.strictEqual(evidence[0].type, 'forum-topic');
      assert.ok(evidence[0].preference_score > 0);
    });
  });

  await runCase('Implementation-status families do not take a forum penalty from generic support wording', async () => {
    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({
          pushed_at: '2026-03-12T00:00:00Z',
          archived: false,
          description: 'Community-maintained tooling for split setup support.'
        });
      }
    }), async () => {
      const evidence = await research.collectEvidence({
        claim_family: 'community-tooling-status',
        claim_summary:
          'Split-setup guidance depends on a community-maintained project still being active and checked against the current GitHub repository.',
        canonical_owner: 'v2/orchestrators/guides/deployment-details/setup-options.mdx',
        source_type: 'github-repo',
        freshness_class: 'review-periodic',
        status: 'verified',
        notes: 'Use GitHub repository metadata to confirm the project still exists and is publicly accessible.',
        match_terms: ['OrchestratorSiphon', 'split setup'],
        evidence_refs: [
          {
            type: 'github-repo',
            ref: 'https://github.com/Stronk-Tech/OrchestratorSiphon',
            match_any: ['OrchestratorSiphon', 'Stronk-Tech']
          }
        ]
      });
      assert.strictEqual(evidence[0].type, 'github-repo');
      assert.ok(evidence[0].preference_score >= 0);
    });
  });

  await runCase('Repo Discord signals stay lower-ranked than matched official sources', async () => {
    const root = mkTmpDir('docs-page-research-discord-rank-');
    const repoDir = path.join(root, 'repo');
    writeFile(
      path.join(repoDir, '.github/workflows/discord-issue-intake.yml'),
      'name: discord-issue-intake\n# support programme active discord.com/channels/livepeer\n'
    );

    await withMockedFetch(async () => ({
      ok: true,
      status: 200,
      async text() {
        return '<html><body>The support programme is currently active and officially documented.</body></html>';
      }
    }), async () => {
      const previousCwd = process.cwd();
      process.chdir(repoDir);
      try {
        const evidence = await research.collectEvidence({
          claim_family: 'programme-availability',
          claim_summary: 'Current support programme status should prioritize official evidence over repo Discord hints.',
          canonical_owner: 'v2/gateways/guides/roadmap-and-funding/operator-support.mdx',
          source_type: 'official-program-page',
          freshness_class: 'review-periodic',
          status: 'time-sensitive',
          notes: 'support programme status',
          match_terms: ['support programme active', 'currently active'],
          evidence_refs: [
            {
              type: 'repo-discord-signal',
              ref: '.github/workflows/discord-issue-intake.yml',
              match_any: ['support programme active', 'discord.com/channels']
            },
            {
              type: 'official-page',
              ref: 'https://www.livepeer.org/dev-hub',
              match_any: ['support programme active']
            }
          ]
        });
        assert.strictEqual(evidence[0].type, 'official-page');
        assert.ok(evidence[1].selection_score <= 59);
      } finally {
        process.chdir(previousCwd);
      }
    });
  });

  await runCase('Family selection uses path affinity for current IA siblings', async () => {
    const families = [
      {
        claim_id: 'gw-offchain-payment-obligation',
        claim_family: 'off-chain-payment-obligation',
        canonical_owner: 'v2/gateways/guides/payments-and-pricing/payment-guide.mdx',
        dependent_pages: ['v2/gateways/guides/payments-and-pricing/remote-signers.mdx'],
        match_terms: ['pm tickets', 'off-chain']
      }
    ];
    const files = ['v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx'];
    const contents = {
      'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx':
        'A clearinghouse handles PM signing and ETH custody for off-chain gateway operators.'
    };
    const selected = research.selectFamilies(families, files, contents);
    assert.strictEqual(selected.length, 1);
    assert.strictEqual(selected[0].claim_id, 'gw-offchain-payment-obligation');
  });

  await runCase('Family selection includes support contact family for explicit gateway support-channel wording', async () => {
    const families = [
      {
        claim_id: 'gw-support-contact-channel',
        claim_family: 'gateway-support-contact-channel',
        domain: 'gateways',
        canonical_owner: 'v2/gateways/guides/roadmap-and-funding/operator-support.mdx',
        dependent_pages: [],
        match_terms: ['#local-gateways', 'primary real-time support channel', 'Forum', 'GitHub']
      }
    ];
    const files = ['v2/gateways/guides/roadmap-and-funding/operator-support.mdx'];
    const contents = {
      'v2/gateways/guides/roadmap-and-funding/operator-support.mdx':
        'The #local-gateways channel on Discord is the primary real-time support channel. Forum and GitHub remain the durable support paths.'
    };
    const selected = research.selectFamilies(families, files, contents);
    assert.strictEqual(selected.length, 1);
    assert.strictEqual(selected[0].claim_id, 'gw-support-contact-channel');
  });

  await runCase('Narrowed community signal family does not match generic support wording alone', async () => {
    const families = [
      {
        claim_id: 'gw-discord-community-signal',
        claim_family: 'discord-intake-repo-signal',
        domain: 'gateways',
        canonical_owner: 'v2/gateways/guides/operator-considerations/production-gateways.mdx',
        dependent_pages: [],
        match_terms: ['discord-issue-intake', 'repository_dispatch', 'discord.com/channels']
      }
    ];
    const files = ['v2/gateways/guides/roadmap-and-funding/operator-support.mdx'];
    const contents = {
      'v2/gateways/guides/roadmap-and-funding/operator-support.mdx':
        'Discord is the primary real-time support channel for operators and the community responds within a few hours.'
    };
    const selected = research.selectFamilies(families, files, contents);
    assert.strictEqual(selected.length, 0);
  });

  await runCase('Family selection matches operator-rationale economics pages through canonical and dependent ownership', async () => {
    const families = [
      {
        claim_id: 'orch-dual-revenue-model',
        claim_family: 'operator-revenue-model',
        domain: 'orchestrators',
        canonical_owner: 'v2/orchestrators/guides/operator-considerations/operator-rationale.mdx',
        dependent_pages: ['v2/orchestrators/guides/operator-considerations/business-case.mdx'],
        match_terms: ['ETH job fees', 'LPT inflation rewards', 'variable upside']
      }
    ];
    const files = ['v2/orchestrators/guides/operator-considerations/operator-rationale.mdx'];
    const contents = {
      'v2/orchestrators/guides/operator-considerations/operator-rationale.mdx':
        'Orchestrators earn from ETH job fees and LPT inflation rewards. Service fees scale with workload volume.'
    };
    const selected = research.selectFamilies(families, files, contents);
    assert.strictEqual(selected.length, 1);
    assert.strictEqual(selected[0].claim_id, 'orch-dual-revenue-model');
  });

  await runCase('Inference finds current sibling pages without explicit dependent mapping', async () => {
    const root = mkTmpDir('docs-page-research-infer-');
    const repoDir = path.join(root, 'repo');
    writeFile(
      path.join(repoDir, 'v2/gateways/guides/payments-and-pricing/payment-guide.mdx'),
      'Off-chain gateways still pay orchestrators through PM tickets.'
    );
    writeFile(
      path.join(repoDir, 'v2/gateways/guides/payments-and-pricing/funding-guide.mdx'),
      'Funding guide for on-chain gateways.'
    );
    writeFile(
      path.join(repoDir, 'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx'),
      'A clearinghouse delegates PM signing and ETH custody.'
    );

    const previousCwd = process.cwd();
    process.chdir(repoDir);
    try {
      const inferred = research.inferFamilyPages(
        {
          claim_id: 'gw-offchain-payment-obligation',
          claim_family: 'off-chain-payment-obligation',
          domain: 'gateways',
          canonical_owner: 'v2/gateways/guides/payments-and-pricing/payment-guide.mdx',
          dependent_pages: [],
          match_terms: ['pm tickets', 'off-chain', 'ETH custody']
        },
        ['v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx']
      );
      assert.ok(inferred.includes('v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx'));
      assert.ok(!inferred.includes('v2/gateways/guides/payments-and-pricing/funding-guide.mdx'));
    } finally {
      process.chdir(previousCwd);
    }
  });

  await runCase('Family selection does not bleed across domains via path affinity', async () => {
    const families = [
      {
        claim_id: 'orch-pool-worker-offchain-payouts',
        claim_family: 'pool-worker-payout-model',
        domain: 'orchestrators',
        canonical_owner: 'v2/orchestrators/guides/deployment-details/setup-options.mdx',
        dependent_pages: ['v2/orchestrators/guides/deployment-details/join-a-pool.mdx'],
        match_terms: ['pool worker', 'off-chain payouts']
      }
    ];
    const files = ['v2/gateways/guides/payments-and-pricing/payment-guide.mdx'];
    const contents = {
      'v2/gateways/guides/payments-and-pricing/payment-guide.mdx':
        'Off-chain gateways still use PM tickets, but they do not hold ETH in the gateway process.'
    };
    const selected = research.selectFamilies(families, files, contents);
    assert.strictEqual(selected.length, 0);
  });

  await runCase('Family selection survives renamed current pages when canonical path is stale', async () => {
    const root = mkTmpDir('docs-page-research-renamed-');
    const repoDir = path.join(root, 'repo');
    writeFile(
      path.join(repoDir, 'v2/orchestrators/guides/operator-considerations/operator-rationale.mdx'),
      'Running a Livepeer Orchestrator costs real money and time. ETH job fees and LPT inflation rewards behave differently.'
    );

    const previousCwd = process.cwd();
    process.chdir(repoDir);
    try {
      const selected = research.selectFamilies(
        [
          {
            claim_id: 'orch-dual-revenue-model',
            claim_family: 'operator-revenue-model',
            domain: 'orchestrators',
            canonical_owner: 'v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx',
            dependent_pages: [],
            match_terms: ['ETH job fees', 'LPT inflation rewards', 'costs real money and time']
          }
        ],
        ['v2/orchestrators/guides/operator-considerations/operator-rationale.mdx'],
        {
          'v2/orchestrators/guides/operator-considerations/operator-rationale.mdx':
            'Running a Livepeer Orchestrator costs real money and time. ETH job fees and LPT inflation rewards behave differently.'
        }
      );
      assert.strictEqual(selected.length, 1);
      assert.strictEqual(selected[0].claim_id, 'orch-dual-revenue-model');
    } finally {
      process.chdir(previousCwd);
    }
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
      assert.ok(parsed.report_id);
      assert.strictEqual(parsed.report_kind, 'page-research');
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

  await runCase('Runner falls back to inferred target pages when canonical owner is missing', async () => {
    const root = mkTmpDir('docs-page-research-fallback-');
    const repoDir = path.join(root, 'repo');
    const registryDir = path.join(repoDir, 'tasks/research/claims');
    const livePage = 'v2/gateways/guides/payments-and-pricing/remote-signers.mdx';
    writeFile(
      path.join(repoDir, livePage),
      'Remote signing is not supported for video transcoding and is currently used for Live AI workloads.'
    );
    writeFile(
      path.join(repoDir, 'v2/gateways/guides/payments-and-pricing/payment-guide.mdx'),
      'Video transcoding requires the on-chain self-managed path.'
    );
    writeFile(
      path.join(registryDir, 'gateways.json'),
      `${JSON.stringify(
        {
          version: 1,
          domain: 'gateways',
          claim_families: [
            {
              claim_id: 'gw-remote-signer-current-scope',
              claim_family: 'remote-signer-current-scope',
              entity: 'gateway',
              claim_summary: 'Remote signer support is current for Live AI and not supported for video transcoding.',
              canonical_owner: 'v2/gateways/guides/payments-and-pricing/old-remote-signers.mdx',
              source_type: 'repo-doc-reference',
              source_ref: livePage,
              evidence_date: '2026-03-16',
              status: 'time-sensitive',
              freshness_class: 'review-on-change',
              dependent_pages: [],
              related_claims: [],
              last_reviewed_by: 'codex',
              notes: 'test',
              match_terms: ['Live AI workloads', 'not supported for video transcoding', 'remote signing'],
              comparison_patterns: ['\\bnot supported for video transcoding\\b'],
              evidence_refs: [
                {
                  type: 'repo-file',
                  ref: livePage,
                  match_any: ['not supported for video transcoding']
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
        page: livePage,
        files: [],
        reportMd: '',
        reportJson: reportPath,
        quiet: true
      });
      const parsed = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      assert.strictEqual(parsed.time_sensitive_claims.length, 1);
      assert.ok(
        parsed.propagation_queue.some(
          (entry) => entry.file === livePage && entry.role === 'inferred-page'
        )
      );
    } finally {
      process.chdir(previousCwd);
    }
  });

  await runCase('Runner annotates primary evidence and weaker-source reasons', async () => {
    const root = mkTmpDir('docs-page-research-primary-');
    const repoDir = path.join(root, 'repo');
    const registryDir = path.join(repoDir, 'tasks/research/claims');
    const guideA = 'v2/gateways/a.mdx';
    writeFile(path.join(repoDir, guideA), 'The support programme is currently active.');
    writeFile(
      path.join(registryDir, 'gateways.json'),
      `${JSON.stringify(
        {
          version: 1,
          domain: 'gateways',
          claim_families: [
            {
              claim_id: 'gw-startup-program-current',
              claim_family: 'programme-availability',
              entity: 'gateway',
              claim_summary: 'Support programme status should use current public evidence.',
              canonical_owner: guideA,
              source_type: 'official-program-page',
              source_ref: 'https://www.livepeer.org/dev-hub',
              evidence_date: '2026-03-16',
              status: 'time-sensitive',
              freshness_class: 'review-periodic',
              dependent_pages: [],
              related_claims: [],
              last_reviewed_by: 'codex',
              notes: 'support and programme status',
              match_terms: ['support programme', 'currently active'],
              comparison_patterns: [],
              evidence_refs: [
                {
                  type: 'official-page',
                  ref: 'https://www.livepeer.org/dev-hub',
                  match_any: ['support programme']
                },
                {
                  type: 'forum-topic',
                  ref: 'https://forum.livepeer.org/t/programme/9999',
                  match_any: ['support programme']
                }
              ]
            }
          ]
        },
        null,
        2
      )}\n`
    );

    await withMockedFetch(async (url) => {
      if (String(url).includes('forum.livepeer.org')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({ cooked: 'Support programme discussed historically.', last_posted_at: '2025-01-01T00:00:00Z' });
          }
        };
      }
      return {
        ok: true,
        status: 200,
        async text() {
          return '<html><body>The support programme is currently active.</body></html>';
        }
      };
    }, async () => {
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
        assert.strictEqual(parsed.time_sensitive_claims[0].primary_evidence.type, 'official-page');
        const weaker = parsed.evidence_sources.find((entry) => entry.type === 'forum-topic');
        assert.strictEqual(weaker.selection_role, 'weaker');
        assert.ok(weaker.comparison_reason.length > 0);
      } finally {
        process.chdir(previousCwd);
      }
    });
  });

  await runCase('Runner emits trust summary with explicit and inferred page coverage', async () => {
    const summary = research.buildTrustSummary({
      unverified_or_historical_claims: [{ claim_id: 'a' }, { claim_id: 'b' }],
      cross_page_contradictions: [{ claim_id: 'c' }],
      evidence_sources: [{ ref: 'one' }, { ref: 'two' }, { ref: 'three' }],
      propagation_queue: [
        { file: 'v2/gateways/a.mdx', role: 'canonical-owner' },
        { file: 'v2/gateways/b.mdx', role: 'dependent-page' },
        { file: 'v2/gateways/c.mdx', role: 'inferred-page' },
        { file: 'v2/gateways/c.mdx', role: 'inferred-page' }
      ]
    });

    assert.deepStrictEqual(summary, {
      unresolved_claims: 2,
      contradiction_groups: 1,
      evidence_sources: 3,
      explicit_page_targets: 2,
      inferred_page_targets: 1
    });
  });

  await runCase('Repo discovery prefers v1 evidence ahead of context lanes for historical lineage claims', async () => {
    const root = mkTmpDir('docs-page-research-history-');
    const repoDir = path.join(root, 'repo');
    writeFile(
      path.join(repoDir, 'v2/gateways/guides/payments-and-pricing/payment-guide.mdx'),
      'Current payment guide for gateways.'
    );
    writeFile(
      path.join(repoDir, 'v1/gateways/payment-guide.mdx'),
      'Legacy gateway flow used broadcaster payments and older payment routing terminology.'
    );
    writeFile(
      path.join(repoDir, 'v2/gateways/_contextData/payment-guide.mdx'),
      'Legacy gateway flow appears in internal research notes.'
    );
    writeFile(
      path.join(repoDir, 'v2/x-archived/gateways/payment-guide.mdx'),
      'Legacy gateway flow is also described in archived gateway docs.'
    );

    const previousCwd = process.cwd();
    process.chdir(repoDir);
    try {
      const evidence = await research.collectEvidence(
        {
          claim_family: 'gateway-payment-lineage',
          claim_summary: 'Legacy gateway payment terminology should use historical lineage evidence.',
          canonical_owner: 'v2/gateways/guides/payments-and-pricing/payment-guide.mdx',
          truth_mode: 'historical_lineage',
          freshness_class: 'review-periodic',
          notes: 'legacy gateway flow historical lineage',
          match_terms: ['legacy gateway flow', 'broadcaster payments'],
          discovery: {
            repo_lanes: ['v1', 'context', 'archive'],
            github: false,
            deepwiki: false,
            search_hints: ['legacy gateway flow']
          },
          evidence_refs: []
        },
        ['v2/gateways/guides/payments-and-pricing/payment-guide.mdx']
      );

      const v1Evidence = evidence.find((entry) => entry.type === 'repo-v1-file');
      const contextEvidence = evidence.find((entry) => entry.type === 'repo-context-file');
      assert.ok(v1Evidence, 'expected repo-v1-file evidence');
      assert.ok(contextEvidence, 'expected repo-context-file evidence');
      assert.strictEqual(evidence[0].type, 'repo-v1-file');
      assert.ok(v1Evidence.selection_score > contextEvidence.selection_score);
      assert.strictEqual(v1Evidence.source_origin, 'discovered');
    } finally {
      process.chdir(previousCwd);
    }
  });

  await runCase('GitHub discovery finds livepeer issue PR and release candidates for implementation claims', async () => {
    await withMockedFetch(async (url) => {
      const ref = String(url);
      if (ref.includes('/search/issues?') && ref.includes('is%3Aissue')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              items: [{ html_url: 'https://github.com/livepeer/go-livepeer/issues/7001' }]
            });
          }
        };
      }
      if (ref.includes('/search/issues?') && ref.includes('is%3Apr')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              items: [{ html_url: 'https://github.com/livepeer/go-livepeer/pull/7002' }]
            });
          }
        };
      }
      if (ref.includes('/issues/7001')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              state: 'open',
              updated_at: '2026-03-15T00:00:00Z',
              body: 'Clearinghouse support issue tracks current scope and remote signer work.'
            });
          }
        };
      }
      if (ref.includes('/pulls/7002')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              merged_at: '2026-03-16T00:00:00Z',
              body: 'Remote signer and clearinghouse support merged for gateways.'
            });
          }
        };
      }
      if (ref.includes('/releases/latest')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              published_at: '2026-03-17T00:00:00Z',
              body: 'Remote signer and clearinghouse support shipped in the latest release.'
            });
          }
        };
      }
      throw new Error(`Unexpected fetch in GitHub discovery test: ${ref}`);
    }, async () => {
      const evidence = await research.collectEvidence({
        claim_family: 'clearinghouse-public-readiness',
        claim_summary: 'Current clearinghouse readiness should prefer current implementation evidence.',
        canonical_owner: 'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx',
        truth_mode: 'implementation_status',
        freshness_class: 'review-on-change',
        notes: 'current implementation status',
        github_repos: ['livepeer/go-livepeer'],
        match_terms: ['clearinghouse', 'remote signer support'],
        discovery: {
          repo_lanes: [],
          github: true,
          deepwiki: false,
          search_hints: ['clearinghouse', 'remote signer support']
        },
        evidence_refs: []
      });

      assert.strictEqual(evidence[0].type, 'github-release');
      assert.ok(evidence.some((entry) => entry.type === 'github-pr'));
      assert.ok(evidence.some((entry) => entry.type === 'github-issue'));
      assert.ok(evidence.every((entry) => entry.source_origin === 'discovered'));
      assert.ok(evidence[0].ranking_reason.includes('discovered via github-release-latest'));
    });
  });

  await runCase('DeepWiki stays corroboration-only below stronger current sources', async () => {
    await withMockedFetch(async (url) => {
      const ref = String(url);
      if (ref.includes('livepeer.example.com/remote-signer')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return '<html><body>Remote signing is currently supported for Live AI workloads and not for video transcoding.</body></html>';
          }
        };
      }
      if (ref.includes('deepwiki.com/livepeer/go-livepeer')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return '<html><body>DeepWiki notes describe remote signer architecture and clearinghouse internals.</body></html>';
          }
        };
      }
      if (ref.includes('deepwiki.com/search?q=')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return '<html><body>Search results for remote signer support.</body></html>';
          }
        };
      }
      throw new Error(`Unexpected fetch in DeepWiki test: ${ref}`);
    }, async () => {
      const evidence = await research.collectEvidence({
        claim_family: 'remote-signer-current-scope',
        claim_summary: 'Remote signer support boundaries should use stronger current sources than summaries.',
        canonical_owner: 'v2/gateways/guides/payments-and-pricing/remote-signers.mdx',
        truth_mode: 'implementation_status',
        freshness_class: 'review-on-change',
        notes: 'current support boundary',
        deepwiki_repos: ['livepeer/go-livepeer'],
        match_terms: ['remote signer', 'video transcoding'],
        discovery: {
          repo_lanes: [],
          github: false,
          deepwiki: true,
          search_hints: ['remote signer support']
        },
        evidence_refs: [
          {
            type: 'official-page',
            ref: 'https://livepeer.example.com/remote-signer',
            match_any: ['remote signing is currently supported']
          }
        ]
      });

      const deepwiki = evidence.find((entry) => entry.type === 'deepwiki-page');
      assert.strictEqual(evidence[0].type, 'official-page');
      assert.ok(deepwiki, 'expected deepwiki corroboration evidence');
      assert.strictEqual(deepwiki.source_origin, 'discovered');
      assert.ok(deepwiki.selection_score < evidence[0].selection_score);
    });
  });

  await runCase('Runner records discovered source metadata in report outputs', async () => {
    const root = mkTmpDir('docs-page-research-discovered-report-');
    const repoDir = path.join(root, 'repo');
    const registryDir = path.join(repoDir, 'tasks/research/claims');
    const guideA = 'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx';
    writeFile(
      path.join(repoDir, guideA),
      'The clearinghouse protocol is implemented, but no public clearinghouse is generally available yet.'
    );
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
              claim_summary: 'Current clearinghouse readiness should use implementation status evidence.',
              canonical_owner: guideA,
              source_type: 'github-pr',
              source_ref: 'https://github.com/livepeer/go-livepeer/pull/7002',
              evidence_date: '2026-03-17',
              status: 'time-sensitive',
              freshness_class: 'review-on-change',
              truth_mode: 'implementation_status',
              github_repos: ['livepeer/go-livepeer'],
              discovery: {
                repo_lanes: [],
                github: true,
                deepwiki: false,
                search_hints: ['clearinghouse', 'remote signer support']
              },
              dependent_pages: [],
              related_claims: [],
              last_reviewed_by: 'codex',
              notes: 'implementation status',
              match_terms: ['clearinghouse', 'generally available', 'remote signer support'],
              comparison_patterns: [],
              evidence_refs: []
            }
          ]
        },
        null,
        2
      )}\n`
    );

    await withMockedFetch(async (url) => {
      const ref = String(url);
      if (ref.includes('/search/issues?') && ref.includes('is%3Aissue')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              items: [{ html_url: 'https://github.com/livepeer/go-livepeer/issues/7101' }]
            });
          }
        };
      }
      if (ref.includes('/search/issues?') && ref.includes('is%3Apr')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              items: [{ html_url: 'https://github.com/livepeer/go-livepeer/pull/7102' }]
            });
          }
        };
      }
      if (ref.includes('/issues/7101')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              state: 'open',
              updated_at: '2026-03-15T00:00:00Z',
              body: 'Issue tracks public clearinghouse readiness and current scope.'
            });
          }
        };
      }
      if (ref.includes('/pulls/7102')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              merged_at: '2026-03-16T00:00:00Z',
              body: 'Merged clearinghouse remote signer support changes.'
            });
          }
        };
      }
      if (ref.includes('/releases/latest')) {
        return {
          ok: true,
          status: 200,
          async text() {
            return JSON.stringify({
              published_at: '2026-03-17T00:00:00Z',
              body: 'Clearinghouse remote signer release.'
            });
          }
        };
      }
      throw new Error(`Unexpected fetch in discovered report test: ${ref}`);
    }, async () => {
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
        const discoveredRelease = parsed.evidence_sources.find(
          (entry) => entry.type === 'github-release' && entry.source_origin === 'discovered'
        );
        const discoveredIssue = parsed.evidence_sources.find(
          (entry) => entry.type === 'github-issue' && entry.source_origin === 'discovered'
        );
        assert.ok(discoveredRelease, 'expected discovered release evidence');
        assert.ok(discoveredIssue, 'expected discovered issue evidence');
        assert.strictEqual(discoveredRelease.evidence_class, 'active-current');
        assert.strictEqual(discoveredIssue.issue_truth_role, 'status-evidence');
        assert.ok(discoveredRelease.discovered_via.length > 0);
      } finally {
        process.chdir(previousCwd);
      }
    });
  });

  return {
    passed: errors.length === 0,
    total: 29,
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
