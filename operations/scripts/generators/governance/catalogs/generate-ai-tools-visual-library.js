#!/usr/bin/env node
/**
 * @script      generate-ai-tools-visual-library
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:ai-tools-visual-library
 * @description Generates the canonical AI-tools visual library for GitHub workflows and dispatcher actions, plus staged audit outputs.
 * @mode        read-only
 * @pipeline    manual
 * @scope       .github/workflows, ai-tools/registry, workspace/plan/active/AI-TOOLS-GOVERNANCE/AI-TOOLS, operations/tests/unit/ai-tools-visual-library.test.js
 * @usage       node operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js [--check|--write]
 */

const fs = require('fs');
const path = require('path');

const yaml = require('../../../../../tools/lib/bootstrap/load-js-yaml');
const {
  normalizeRepoPath,
  renderInventoryReport,
  loadRegistry
} = require('../../../../../tools/lib/ai/ai-tools-registry');

const REPO_ROOT = process.cwd();
const WORKFLOWS_DIR = '.github/workflows';
const CANONICAL_ROOT = 'ai-tools/registry';
const WORKFLOWS_ROOT = `${CANONICAL_ROOT}/workflows`;
const DISPATCHERS_ROOT = `${CANONICAL_ROOT}/dispatchers`;
const REGISTRY_PATH = `${CANONICAL_ROOT}/ai-tools-registry.json`;
const INVENTORY_PATH = `${CANONICAL_ROOT}/ai-tools-inventory.md`;
const STAGING_ROOT = 'workspace/plan/active/AI-TOOLS-GOVERNANCE/AI-TOOLS';
const STAGING_WORKFLOWS_ROOT = `${STAGING_ROOT}/workflows`;
const STAGING_DISPATCHERS_ROOT = `${STAGING_ROOT}/dispatchers`;
const SCRIPT_PATH = 'operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js';
const WORKFLOW_SOURCE_GLOB = '.github/workflows/*.{yml,yaml}';
const DISPATCHER_SOURCE_PATH = 'workspace/plan/active/AI-TOOLS-GOVERNANCE/architecture-audit.md';
const VISUAL_LIBRARY_BANNER = {
  script: SCRIPT_PATH,
  purpose: 'AI-tools canonical visual library for workflows and dispatcher actions.',
  runWhen: 'GitHub workflows, dispatcher definitions, registry coverage, or visual-library contracts change.',
  runCommand: `node ${SCRIPT_PATH} --write`
};

const DISPATCHER_DEFINITIONS = [
  {
    id: 'research-review-packet',
    title: 'Research Review Packet',
    concern: 'research',
    status: 'active',
    dispatches: [
      'docs-source-verification',
      'docs-impact-propagation',
      'docs-change-review',
      'docs-research-packet-generation'
    ],
    outputs: [
      'Evidence packet',
      'Contradiction map',
      'Impacted-surface list',
      'Review-ready summary'
    ],
    entry_triggers: [
      'A page or feature needs evidence gathering before review.',
      'A contributor wants source verification before changes ship.'
    ],
    validation_gates: [
      'Primary-source evidence captured.',
      'Impact propagation reviewed.',
      'Unsupported claims downgraded or removed.'
    ],
    workflow_intent:
      'Create a governed research packet that turns scattered source-checking into a reusable review input.',
    downstream_effects: [
      'Feeds review-fix and page-ship workflows.',
      'Produces evidence for handover and audit trails.'
    ],
    risks: [
      'Still a design-time dispatcher rather than a fully executable runtime entrypoint.',
      'Depends on current skill boundaries remaining accurate during consolidation.'
    ],
    consolidation_notes:
      'Keep as a named dispatcher because the repo already performs this work manually across multiple adjacent skills.'
  },
  {
    id: 'review-fix',
    title: 'Review Fix',
    concern: 'review',
    status: 'active',
    dispatches: [
      'docs-review-packet-generation',
      'docs-review-fix-execution',
      'staged-test-suite-runner',
      'precommit-failure-triage'
    ],
    outputs: [
      'Scoped fix plan',
      'Applied edits',
      'Validation summary',
      'Residual-risk notes'
    ],
    entry_triggers: [
      'A PR, audit, or reviewer has produced actionable findings.',
      'A content-quality or workflow gate needs guided remediation.'
    ],
    validation_gates: [
      'Findings triaged by severity.',
      'Relevant tests or validators rerun.',
      'Unresolved issues called out explicitly.'
    ],
    workflow_intent:
      'Turn reviews and failing checks into a disciplined repair workflow instead of ad hoc fix loops.',
    downstream_effects: [
      'Feeds page-ship readiness.',
      'Reduces repeated triage work in shipping threads.'
    ],
    risks: [
      'Different review surfaces still use different evidence formats.',
      'Not every workflow failure maps cleanly to one existing atomic skill yet.'
    ],
    consolidation_notes:
      'Strong dispatcher candidate because the repo already couples review interpretation with validation reruns.'
  },
  {
    id: 'handover-readiness',
    title: 'Handover Readiness',
    concern: 'repo-ops',
    status: 'active',
    dispatches: [
      'rubric-static-review',
      'structure-and-allowlist-guardrails',
      'staged-test-suite-runner',
      'docs-status-table-generation'
    ],
    outputs: [
      'Handover scorecard',
      'Governance blocker list',
      'Validation status',
      'Catalog freshness signals'
    ],
    entry_triggers: [
      'A repo slice needs to be handed off in a documented, low-risk state.',
      'Governance or structure drift needs explicit readiness reporting.'
    ],
    validation_gates: [
      'Structure and allowlist checks pass.',
      'Critical catalogs are current.',
      'Blockers and residual risks are documented.'
    ],
    workflow_intent:
      'Provide a named end-state readiness flow for cleanup and handover work instead of relying on tribal knowledge.',
    downstream_effects: [
      'Feeds repo-cleanup-handover.',
      'Provides a reusable checklist for handoff threads.'
    ],
    risks: [
      'Still depends on multiple governance surfaces outside a single runtime dispatcher.',
      'Readiness criteria may tighten as consolidation progresses.'
    ],
    consolidation_notes:
      'Keep as a dispatcher because handover is a repeated repo-level workflow with clear gates and outputs.'
  },
  {
    id: 'page-ship',
    title: 'Page Ship',
    concern: 'authoring',
    status: 'active',
    dispatches: [
      'page-content-research-review',
      'docs-copy',
      'docs-ia-route-placement',
      'mintlify-authoring-style-compliance',
      'v2-link-audit-runbook',
      'v2-browser-sweep-runbook'
    ],
    outputs: [
      'Ship checklist',
      'Updated page set',
      'Validation evidence',
      'Known-risk notes'
    ],
    entry_triggers: [
      'A page or doc set is ready to move from draft/review into shippable state.',
      'A shipping thread needs a standard path from content edits to validation.'
    ],
    validation_gates: [
      'Content claims reviewed.',
      'Route placement confirmed.',
      'Link and browser validation complete.'
    ],
    workflow_intent:
      'Make page shipping a first-class governed workflow that can be invoked consistently across AI chats.',
    downstream_effects: [
      'Feeds handover-readiness for shipped content.',
      'Coordinates authoring and validation rather than leaving them disconnected.'
    ],
    risks: [
      'Current runtime still spans multiple independent scripts and review steps.',
      'Shipping criteria vary by page type and route complexity.'
    ],
    consolidation_notes:
      'Highest-value dispatcher for delivery work because it directly matches the user’s core shipping process.'
  },
  {
    id: 'repo-cleanup-handover',
    title: 'Repo Cleanup Handover',
    concern: 'repo-ops',
    status: 'active',
    dispatches: [
      'repo-audit-orchestrator',
      'structure-and-allowlist-guardrails',
      'script-header-and-index-sync',
      'rubric-static-review'
    ],
    outputs: [
      'Cleanup audit',
      'Documentation refresh plan',
      'Governance notes',
      'Handover artifact set'
    ],
    entry_triggers: [
      'Repo cleanup and streamlining work needs to be packaged for handover.',
      'Multiple governance or structure fixes need one orchestrated pathway.'
    ],
    validation_gates: [
      'Root-cause fixes documented.',
      'Indexes and headers synchronized.',
      'Residual structure risks recorded.'
    ],
    workflow_intent:
      'Orchestrate cleanup, documentation, and governance packaging into one repeatable handover workflow.',
    downstream_effects: [
      'Provides the repo-ops companion to page-ship.',
      'Supports final delivery and maintenance transitions.'
    ],
    risks: [
      'Still partly conceptual until more repo-ops skills are normalized.',
      'Some cleanup tasks are broader than the current atomic-skill inventory.'
    ],
    consolidation_notes:
      'Keep as a dispatcher because cleanup and handover repeatedly span scripts, governance docs, and human review.'
  }
];

const WORKFLOW_MANUAL_OVERRIDES = {
  'build-review-assets': {
    workflow_family: 'placeholder-backlog',
    cleanup_decision: 'retire',
    usage_status: 'placeholder',
    process_fit: 'legacy-or-unclear',
    engineering_action: 'Retire the placeholder workflow file unless an implemented review-assets pipeline is revived with a real script contract.',
    consolidation_target: 'none',
    second_pass_notes: [
      'This workflow is explicitly marked as not yet implemented.',
      'Keeping placeholder workflow files at the top level adds noise without delivery value.'
    ]
  },
  'update-review-template': {
    workflow_family: 'placeholder-backlog',
    cleanup_decision: 'retire',
    usage_status: 'placeholder',
    process_fit: 'legacy-or-unclear',
    engineering_action: 'Retire the placeholder workflow file unless a concrete review-template pipeline is actually needed.',
    consolidation_target: 'none',
    second_pass_notes: [
      'This workflow is explicitly marked as not yet implemented.',
      'Placeholder top-level actions should not survive handover without an owner and implementation path.'
    ]
  },
  'tasks-retention': {
    workflow_family: 'governance-maintenance',
    cleanup_decision: 'needs-investigation',
    usage_status: 'placeholder',
    process_fit: 'handover-support',
    engineering_action: 'Either implement the documented retention policy as a real workflow or remove the placeholder and keep the policy in docs only.',
    consolidation_target: 'dispatcher:repo-cleanup-handover',
    second_pass_notes: [
      'The file is a TODO placeholder, but the retention concern is probably real.',
      'This needs a concrete owner decision before handover.'
    ]
  },
  'update-forum-data': {
    workflow_family: 'data-refresh',
    cleanup_decision: 'merge',
    usage_status: 'compatibility-wrapper',
    process_fit: 'core-shipping',
    engineering_action: 'Keep this as a thin compatibility wrapper until the legacy entrypoint can be retired safely. The canonical implementation now lives in `data-refresh-governance`.',
    consolidation_target: 'data-refresh-governance',
    second_pass_notes: [
      'Generated forum data is retained under snippets/data/social-feeds/forumData.jsx.',
      'GitHub Actions is the canonical owner for this retained data path.',
      'This wrapper should not regain unique logic.'
    ]
  },
  'update-youtube-data': {
    workflow_family: 'data-refresh',
    cleanup_decision: 'merge',
    usage_status: 'compatibility-wrapper',
    process_fit: 'core-shipping',
    engineering_action: 'Keep this as a thin compatibility wrapper until the legacy entrypoint can be retired safely. The canonical implementation now lives in `data-refresh-governance`.',
    consolidation_target: 'data-refresh-governance',
    second_pass_notes: [
      'Generated YouTube data is retained under snippets/data/social-feeds/youtubeData.jsx.',
      'GitHub Actions is the canonical owner for this retained data path.',
      'This wrapper should not regain unique logic.'
    ]
  },
  'data-refresh-governance': {
    workflow_family: 'data-refresh',
    cleanup_decision: 'keep',
    usage_status: 'active',
    process_fit: 'core-shipping',
    engineering_action: 'Keep this as the canonical reusable workflow for the data-refresh family and collapse future scripted refresh changes into this file instead of duplicating logic.',
    consolidation_target: 'data-refresh-governance',
    second_pass_notes: [
      'This is the consolidated reusable source for the scripted data-refresh family.',
      'Legacy family members should remain thin wrappers only until they can be retired safely.'
    ]
  },
  'check-ai-companions': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:ai-runtime-artifacts-workflow'
  },
  'docs-catalog-governance': {
    workflow_family: 'docs-catalog-governance',
    cleanup_decision: 'keep',
    usage_status: 'active',
    process_fit: 'core-shipping',
    engineering_action: 'Keep this as the canonical reusable workflow for the docs-catalog-governance family and collapse future changes into this file instead of duplicating logic.',
    consolidation_target: 'docs-catalog-governance',
    second_pass_notes: [
      'This is the consolidated reusable source for the docs-catalog-governance family.',
      'Legacy family members should remain thin wrappers only until they can be retired safely.'
    ]
  },
  'generate-ai-companions': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:ai-runtime-artifacts-workflow'
  },
  'generate-ai-sitemap': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:ai-runtime-artifacts-workflow'
  },
  'verify-ai-sitemap': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:ai-runtime-artifacts-workflow'
  },
  'generate-llms-files': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:ai-runtime-artifacts-workflow'
  },
  'verify-llms-files': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:ai-runtime-artifacts-workflow'
  },
  'check-docs-guide-catalogs': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:docs-catalog-governance-workflow'
  },
  'generate-docs-guide-catalogs': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:docs-catalog-governance-workflow'
  },
  'check-docs-index': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:docs-catalog-governance-workflow'
  },
  'generate-docs-index': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:docs-catalog-governance-workflow'
  },
  'generate-component-registry': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:docs-catalog-governance-workflow'
  },
  'governance-sync': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:governance-maintenance-workflow'
  },
  'repair-governance': {
    cleanup_decision: 'merge',
    consolidation_target: 'future:governance-maintenance-workflow'
  },
  'broken-links': {
    cleanup_decision: 'consolidate'
  },
  'content-health': {
    cleanup_decision: 'consolidate'
  },
  'freshness-monitor': {
    cleanup_decision: 'consolidate'
  },
  'v2-external-link-audit': {
    cleanup_decision: 'consolidate'
  },
  'style-homogenise': {
    cleanup_decision: 'needs-investigation',
    process_fit: 'legacy-or-unclear'
  },
  'translate-docs': {
    cleanup_decision: 'needs-investigation',
    process_fit: 'legacy-or-unclear'
  },
  'sdk_generation': {
    cleanup_decision: 'needs-investigation',
    process_fit: 'legacy-or-unclear'
  },
  'sync-large-assets': {
    cleanup_decision: 'needs-investigation',
    process_fit: 'legacy-or-unclear'
  },
  'update-blog-data': {
    cleanup_decision: 'consolidate',
    consolidation_target: 'future:data-refresh-dispatcher'
  },
  'update-discord-data': {
    cleanup_decision: 'merge',
    consolidation_target: 'data-refresh-governance'
  },
  'update-ghost-blog-data': {
    cleanup_decision: 'merge',
    consolidation_target: 'data-refresh-governance'
  },
  'update-github-data': {
    cleanup_decision: 'merge',
    consolidation_target: 'data-refresh-governance'
  },
  'update-rss-blog-data': {
    cleanup_decision: 'merge',
    consolidation_target: 'data-refresh-governance'
  },
  'update-youtube-data': {
    consolidation_target: 'data-refresh-governance'
  },
  'update-livepeer-release': {
    cleanup_decision: 'merge',
    consolidation_target: 'data-refresh-governance'
  },
  'generate-review-table': {
    cleanup_decision: 'consolidate'
  },
  'seo-refresh': {
    cleanup_decision: 'consolidate'
  },
  'project-showcase-sync': {
    cleanup_decision: 'needs-investigation',
    process_fit: 'legacy-or-unclear'
  },
  'update-changelogs': {
    cleanup_decision: 'keep'
  },
  'update-contract-addresses': {
    cleanup_decision: 'keep'
  },
  'test-suite': {
    cleanup_decision: 'keep'
  },
  'test-v2-pages': {
    cleanup_decision: 'keep'
  },
  'openapi-reference-validation': {
    cleanup_decision: 'keep'
  },
  'auto-assign-docs-reviewers': {
    cleanup_decision: 'keep'
  },
  'close-linked-issues-docs-v2': {
    cleanup_decision: 'keep'
  },
  'issue-auto-label': {
    cleanup_decision: 'keep'
  },
  'discord-issue-intake': {
    cleanup_decision: 'keep'
  },
  'docs-v2-issue-indexer': {
    cleanup_decision: 'keep'
  },
  'codex-governance': {
    cleanup_decision: 'keep'
  }
};

const DISPATCHER_MANUAL_OVERRIDES = {
  'research-review-packet': {
    cleanup_decision: 'keep',
    readiness: 'phase-1-design',
    next_move: 'Map issue-intake and research-heavy workflows into one explicit dispatcher contract.'
  },
  'review-fix': {
    cleanup_decision: 'keep',
    readiness: 'phase-1-design',
    next_move: 'Absorb validation-sweep and review-repair workflows behind one governed orchestration path.'
  },
  'handover-readiness': {
    cleanup_decision: 'keep',
    readiness: 'phase-1-design',
    next_move: 'Bind AI-runtime and governance-readiness workflows to the same handover scorecard contract.'
  },
  'page-ship': {
    cleanup_decision: 'keep',
    readiness: 'phase-1-design',
    next_move: 'Use this as the main landing zone for shipping-oriented authoring, validation, and content refresh families.'
  },
  'repo-cleanup-handover': {
    cleanup_decision: 'keep',
    readiness: 'phase-1-design',
    next_move: 'Use this as the consolidation target for governance-repair, retention, and repo-cleanup workflows.'
  }
};

const FAMILY_TARGETS = {
  'ai-runtime-artifacts': 'future:ai-runtime-artifacts-workflow',
  'docs-catalog-governance': 'future:docs-catalog-governance-workflow',
  'review-event-automation': 'dispatcher:review-fix',
  'validation-sweeps': 'dispatcher:review-fix',
  'governance-maintenance': 'dispatcher:repo-cleanup-handover',
  'issue-intake-and-triage': 'dispatcher:research-review-packet',
  'data-refresh': 'data-refresh-governance',
  'content-publication': 'dispatcher:page-ship',
  'placeholder-backlog': 'none'
};

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function slugToTitle(value) {
  return String(value || '')
    .replace(/\.[^.]+$/, '')
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function slugToArtifactId(value) {
  return String(value || '').replace(/_/g, '-');
}

function currentDateString() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
}

function escapeYamlSingle(value) {
  return String(value || '').replace(/'/g, "''");
}

function yamlLine(key, value) {
  return `${key}: '${escapeYamlSingle(value)}'`;
}

function yamlArrayLine(key, values) {
  const items = Array.isArray(values) ? values.filter(Boolean).map((value) => `'${escapeYamlSingle(value)}'`) : [];
  return `${key}: [${items.join(', ')}]`;
}

function ensureTrailingNewline(value) {
  return String(value || '').endsWith('\n') ? String(value) : `${String(value || '')}\n`;
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_error) {
    return '';
  }
}

function fileExists(repoPath) {
  return fs.existsSync(path.join(REPO_ROOT, repoPath));
}

function listWorkflowFiles() {
  const fullDir = path.join(REPO_ROOT, WORKFLOWS_DIR);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((name) => /\.(yml|yaml)$/i.test(name))
    .map((name) => toPosix(path.join(WORKFLOWS_DIR, name)))
    .sort();
}

function parseYaml(content) {
  try {
    return yaml.load(content) || {};
  } catch (_error) {
    return {};
  }
}

function uniqSorted(values) {
  return [...new Set((values || []).filter(Boolean))].sort((left, right) => left.localeCompare(right));
}

function firstSentence(value, fallback) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (!text) return fallback;
  const match = text.match(/^(.+?[.!?])(?:\s|$)/);
  return match ? match[1].trim() : text;
}

function workflowOverride(slug) {
  return WORKFLOW_MANUAL_OVERRIDES[slug] || {};
}

function dispatcherOverride(id) {
  return DISPATCHER_MANUAL_OVERRIDES[id] || {};
}

function inferConcern(slug, content) {
  const raw = `${slug} ${String(content || '')}`.toLowerCase();
  if (/codex|llms|ai-companions|ai-sitemap/.test(slug)) return 'agent-runtime';
  if (/governance|tasks-retention|sync-large-assets|docs-guide-catalogs|docs-index|component-registry/.test(slug)) {
    return 'repo-ops';
  }
  if (/review|reviewers|label|issue|project-showcase|discord-issue-intake/.test(slug)) return 'review';
  if (/test|check|verify|validate|audit|health|freshness|broken-links|style-homogenise/.test(slug)) {
    return 'validation';
  }
  if (/release/.test(slug)) return 'release';
  if (/migrate|migration/.test(slug)) return 'migration';
  if (/translate|generate|seo|sdk|update-|sync|changelog|contract-addresses/.test(slug) || /translate/.test(raw)) {
    return 'authoring';
  }
  return 'repo-ops';
}

function inferWorkflowFamily(slug, dispatcherCandidate, content) {
  const override = workflowOverride(slug);
  if (override.workflow_family) return override.workflow_family;
  const raw = `${slug} ${String(content || '')}`.toLowerCase();
  if (/not yet implemented|todo: implement/.test(raw)) return 'placeholder-backlog';
  if (/ai-companions|ai-sitemap|llms/.test(slug)) return 'ai-runtime-artifacts';
  if (/docs-catalog-governance/.test(slug)) return 'docs-catalog-governance';
  if (/data-refresh-governance/.test(slug)) return 'data-refresh';
  if (/codex-governance|governance-sync|repair-governance|tasks-retention|sync-large-assets/.test(slug)) {
    return 'governance-maintenance';
  }
  if (/docs-guide-catalogs|docs-index|component-registry/.test(slug)) return 'docs-catalog-governance';
  if (/auto-assign|close-linked-issues|issue-auto-label/.test(slug)) return 'review-event-automation';
  if (/discord-issue-intake|docs-v2-issue-indexer|project-showcase-sync/.test(slug)) return 'issue-intake-and-triage';
  if (/update-blog-data|update-discord-data|update-forum-data|update-ghost-blog-data|update-github-data|update-rss-blog-data|update-youtube-data|update-livepeer-release/.test(slug)) {
    return 'data-refresh';
  }
  if (/translate|seo-refresh|sdk_generation|generate-review-table|update-changelogs|update-contract-addresses/.test(slug)) {
    return 'content-publication';
  }
  if (/test|check|verify|audit|broken-links|content-health|freshness|style-homogenise|openapi-reference-validation/.test(raw)) {
    return 'validation-sweeps';
  }
  if (dispatcherCandidate === 'page-ship') return 'content-publication';
  if (dispatcherCandidate === 'repo-cleanup-handover') return 'governance-maintenance';
  if (dispatcherCandidate === 'research-review-packet') return 'issue-intake-and-triage';
  return 'validation-sweeps';
}

function inferDispatcherCandidate(slug, content) {
  const raw = `${slug} ${String(content || '')}`.toLowerCase();
  if (/codex-governance|check-ai-companions|generate-ai-companions|generate-ai-sitemap|verify-ai-sitemap|generate-llms-files|verify-llms-files/.test(slug)) {
    return 'handover-readiness';
  }
  if (/governance-sync|repair-governance|tasks-retention|sync-large-assets/.test(slug)) {
    return 'repo-cleanup-handover';
  }
  if (/docs-v2-issue-indexer|discord-issue-intake|project-showcase-sync/.test(slug)) {
    return 'research-review-packet';
  }
  if (/generate-docs|generate-review|seo|translate|sdk|update-|changelog|contract-addresses|update-livepeer-release/.test(slug)) {
    return 'page-ship';
  }
  if (/test|check|verify|validate|audit|broken-links|content-health|freshness|openapi-reference-validation|style-homogenise|build-review-assets|auto-assign-docs-reviewers|issue-auto-label|close-linked-issues/.test(raw)) {
    return 'review-fix';
  }
  return 'none';
}

function inferUsageStatus(slug, content) {
  const override = workflowOverride(slug);
  if (override.usage_status) return override.usage_status;
  const raw = String(content || '').toLowerCase();
  if (/not yet implemented|todo: implement/.test(raw)) return 'placeholder';
  if (/uses:\s*\.\/\.github\/workflows\/docs-catalog-governance\.ya?ml/.test(raw)) {
    return 'compatibility-wrapper';
  }
  if (/uses:\s*\.\/\.github\/workflows\/data-refresh-governance\.ya?ml/.test(raw)) {
    return 'compatibility-wrapper';
  }
  if (/this github action will only run on main branch/.test(raw)) return 'legacy-unclear';
  if (/continue-on-error:\s*true/.test(raw) || /\(advisory\)/.test(raw)) return 'active-advisory';
  if (/git\s+push/i.test(content) || /\bcontents:\s*write\b/i.test(content)) return 'active-mutating';
  return 'active';
}

function inferCleanupDecision(slug, family, usageStatus) {
  const override = workflowOverride(slug);
  if (override.cleanup_decision) return override.cleanup_decision;
  if (usageStatus === 'placeholder') return 'retire';
  if (usageStatus === 'compatibility-wrapper') return 'merge';
  if (usageStatus === 'legacy-unclear') return 'needs-investigation';
  if (family === 'ai-runtime-artifacts' || family === 'docs-catalog-governance') return 'merge';
  if (family === 'data-refresh') return 'consolidate';
  if (family === 'review-event-automation' || family === 'issue-intake-and-triage') return 'keep';
  if (family === 'governance-maintenance') return 'needs-investigation';
  if (family === 'validation-sweeps') return 'consolidate';
  if (family === 'content-publication') return 'consolidate';
  return 'keep';
}

function inferProcessFit(slug, cleanupDecision, family, dispatcherCandidate, usageStatus) {
  const override = workflowOverride(slug);
  if (override.process_fit) return override.process_fit;
  if (usageStatus === 'placeholder' || usageStatus === 'legacy-unclear' || cleanupDecision === 'needs-investigation') {
    return 'legacy-or-unclear';
  }
  if (dispatcherCandidate === 'page-ship' || dispatcherCandidate === 'review-fix') return 'core-shipping';
  if (dispatcherCandidate === 'handover-readiness' || dispatcherCandidate === 'repo-cleanup-handover' || family === 'governance-maintenance') {
    return 'handover-support';
  }
  return 'supporting-infra';
}

function inferConsolidationTarget(slug, family, dispatcherCandidate) {
  const override = workflowOverride(slug);
  if (override.consolidation_target) return override.consolidation_target;
  if (dispatcherCandidate && dispatcherCandidate !== 'none') {
    if (family === 'ai-runtime-artifacts' || family === 'docs-catalog-governance' || family === 'data-refresh') {
      return FAMILY_TARGETS[family];
    }
    return `dispatcher:${dispatcherCandidate}`;
  }
  return FAMILY_TARGETS[family] || 'none';
}

function inferEngineeringAction(slug, cleanupDecision, dispatcherCandidate, family, consolidationTarget) {
  const override = workflowOverride(slug);
  if (override.engineering_action) return override.engineering_action;
  if (cleanupDecision === 'keep') {
    return 'Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.';
  }
  if (cleanupDecision === 'merge') {
    return `Merge this workflow with its sibling family into \`${consolidationTarget}\` so one workflow owns both check and write modes.`;
  }
  if (cleanupDecision === 'consolidate') {
    return `Consolidate this workflow under \`${consolidationTarget}\` and keep the script or validator layer as the reusable implementation boundary.`;
  }
  if (cleanupDecision === 'retire') {
    return 'Retire this workflow file and preserve any remaining intent in backlog or dispatcher documentation only.';
  }
  return `Trace actual runtime use, owner, and downstream dependencies before deciding whether to keep, merge, or retire it. Current nearest dispatcher: \`${dispatcherCandidate}\`.`;
}

function collectSecondPassNotes(slug, family, cleanupDecision, usageStatus, content) {
  const override = workflowOverride(slug);
  const notes = Array.isArray(override.second_pass_notes) ? [...override.second_pass_notes] : [];
  const raw = String(content || '').toLowerCase();
  if (usageStatus === 'active-mutating') {
    notes.push('This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.');
  }
  if (usageStatus === 'active-advisory') {
    notes.push('This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.');
  }
  if (family === 'ai-runtime-artifacts' || family === 'docs-catalog-governance') {
    notes.push('This family already has obvious check/generate pairings that likely want one governed workflow with mode flags.');
  }
  if (family === 'data-refresh') {
    notes.push('This belongs to a repeating data-refresh pattern and should not stay as an uncoordinated top-level workflow forever.');
  }
  if (cleanupDecision === 'keep') {
    notes.push('The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.');
  }
  if (cleanupDecision === 'needs-investigation' && !/not yet implemented|todo: implement/.test(raw)) {
    notes.push('Current repo evidence is not strong enough to justify either deletion or consolidation without tracing real usage first.');
  }
  return uniqSorted(notes);
}

function buildDecisionRows(items, valueKey) {
  const counts = new Map();
  items.forEach((item) => {
    const value = String(item[valueKey] || '').trim() || '(unset)';
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  return [...counts.entries()].sort((left, right) => left[0].localeCompare(right[0]));
}

function dominantValue(items, valueKey) {
  const rows = buildDecisionRows(items, valueKey);
  return rows
    .slice()
    .sort((left, right) => {
      if (right[1] !== left[1]) return right[1] - left[1];
      return left[0].localeCompare(right[0]);
    })[0]?.[0] || '(unset)';
}

function renderCountsTable(title, rows) {
  const lines = [`### ${title}`, '', '| Value | Count |', '| --- | ---: |'];
  rows.forEach(([value, count]) => {
    lines.push(`| \`${value}\` | ${count} |`);
  });
  lines.push('');
  return lines;
}

function inferRiskLevel(content, jobCount) {
  const raw = String(content || '');
  if (
    /localhost:3000/.test(raw) ||
    /git\s+push/i.test(raw) ||
    /\bcontents:\s*write\b/i.test(raw) ||
    /\bpull-requests:\s*write\b/i.test(raw)
  ) {
    return 'high';
  }
  if (/schedule:|repository_dispatch|continue-on-error:\s*true|secrets\./i.test(raw) || jobCount > 1) {
    return 'medium';
  }
  return 'low';
}

function inferOutputs(content, slug) {
  const raw = String(content || '');
  const outputs = [];
  if (/GITHUB_STEP_SUMMARY/.test(raw)) outputs.push('GitHub step summary');
  if (/upload-artifact/i.test(raw)) outputs.push('Uploaded artifacts');
  if (/git\s+push/i.test(raw)) outputs.push('Repository commits or branch updates');
  if (/gh\s+pr\s+comment|gh\s+issue|pull-requests:\s*write/i.test(raw)) outputs.push('GitHub issue or PR metadata');
  if (/generate-|update-|sync|fetch/i.test(slug)) outputs.push('Generated or refreshed repository data');
  if (outputs.length === 0) outputs.push('Workflow logs and job status');
  return uniqSorted(outputs);
}

function inferFrailtyNotes(content, triggers, dependencies, riskLevel) {
  const raw = String(content || '');
  const notes = [];
  if (/localhost:3000/.test(raw)) {
    notes.push('Uses `localhost:3000`, which conflicts with the repo baseline that forbids port 3000 for local Mintlify sessions.');
  }
  if (/continue-on-error:\s*true/.test(raw)) {
    notes.push('Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.');
  }
  if (/git\s+push/i.test(raw)) {
    notes.push('Mutates repository state from CI, which raises coordination and safety risk.');
  }
  if (/secrets\./i.test(raw)) {
    notes.push('Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.');
  }
  if (dependencies.length === 0) {
    notes.push('No local repo dependencies were detected automatically; verify whether this is truly standalone.');
  }
  if (triggers.includes('schedule')) {
    notes.push('Scheduled execution can hide drift until the next cron window.');
  }
  if (notes.length === 0) {
    notes.push(`Current heuristic risk level is \`${riskLevel}\`; no exceptional frailty markers were detected in the file scan.`);
  }
  return notes;
}

function collectTriggers(doc, content) {
  const onValue = doc && Object.prototype.hasOwnProperty.call(doc, 'on') ? doc.on : null;
  const triggers = [];
  if (typeof onValue === 'string') triggers.push(onValue);
  if (Array.isArray(onValue)) triggers.push(...onValue.map((item) => String(item || '').trim()));
  if (onValue && typeof onValue === 'object') triggers.push(...Object.keys(onValue));
  if (triggers.length === 0) {
    ['pull_request', 'push', 'schedule', 'workflow_dispatch', 'repository_dispatch', 'workflow_call'].forEach((key) => {
      if (new RegExp(`\\b${key}\\b`).test(String(content || ''))) triggers.push(key);
    });
  }
  return uniqSorted(triggers);
}

function collectTriggerDetails(doc, triggers) {
  const details = [];
  const onValue = doc && Object.prototype.hasOwnProperty.call(doc, 'on') ? doc.on : null;
  triggers.forEach((trigger) => {
    const triggerConfig = onValue && typeof onValue === 'object' && !Array.isArray(onValue) ? onValue[trigger] : null;
    if (!triggerConfig || typeof triggerConfig !== 'object' || Array.isArray(triggerConfig)) {
      details.push(`${trigger}: default event configuration`);
      return;
    }
    const parts = [];
    if (Array.isArray(triggerConfig.branches) && triggerConfig.branches.length > 0) {
      parts.push(`branches=${triggerConfig.branches.join(', ')}`);
    }
    if (Array.isArray(triggerConfig.types) && triggerConfig.types.length > 0) {
      parts.push(`types=${triggerConfig.types.join(', ')}`);
    }
    if (Array.isArray(triggerConfig.paths) && triggerConfig.paths.length > 0) {
      parts.push(`paths=${triggerConfig.paths.join(', ')}`);
    }
    if (Array.isArray(triggerConfig.schedule) && triggerConfig.schedule.length > 0) {
      parts.push(`cron=${triggerConfig.schedule.map((item) => item.cron).filter(Boolean).join(', ')}`);
    }
    details.push(`${trigger}: ${parts.length > 0 ? parts.join('; ') : 'configured in workflow file'}`);
  });
  return details;
}

function extractSecrets(content) {
  const secrets = [];
  const raw = String(content || '');
  const regex = /secrets\.([A-Z0-9_]+)/g;
  let match;
  while ((match = regex.exec(raw)) !== null) {
    secrets.push(`secret:${match[1]}`);
  }
  return uniqSorted(secrets);
}

function extractRepoPaths(text) {
  const paths = [];
  const regex =
    /(?:^|[\s"'`()])((?:\.\/)?(?:ai-tools|operations|tools|snippets|docs-guide|workspace|v1|v2|\.github|\.claude|\.cursor|\.windsurf|\.codex)\/[A-Za-z0-9._/-]+)/gm;
  let match;
  while ((match = regex.exec(String(text || ''))) !== null) {
    const candidate = normalizeRepoPath(match[1]);
    if (candidate) paths.push(candidate);
  }
  return uniqSorted(paths);
}

function summarizeRun(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  const firstLine = text.split('\n').map((line) => line.trim()).find(Boolean) || '';
  return firstLine.length > 120 ? `${firstLine.slice(0, 117)}...` : firstLine;
}

function parseJobs(doc, workflowPath) {
  const jobs = [];
  const localDependencies = [];
  const externalDependencies = [];
  const inputs = [];
  const jobEntries = doc && doc.jobs && typeof doc.jobs === 'object' ? Object.entries(doc.jobs) : [];

  jobEntries.forEach(([jobId, job]) => {
    const name = String((job && job.name) || jobId);
    const needs = Array.isArray(job && job.needs)
      ? job.needs
      : job && typeof job.needs === 'string'
        ? [job.needs]
        : [];
    const steps = Array.isArray(job && job.steps) ? job.steps : [];
    const stepSummaries = [];

    steps.forEach((step, index) => {
      const stepName = String((step && (step.name || step.id)) || `step-${index + 1}`);
      const usesValue = step && step.uses ? String(step.uses).trim() : '';
      const runValue = step && step.run ? String(step.run) : '';

      if (usesValue) {
        if (usesValue.startsWith('./')) {
          localDependencies.push(normalizeRepoPath(usesValue.replace(/^\.\//, '')));
        } else {
          externalDependencies.push(`action:${usesValue}`);
        }
      }

      extractRepoPaths(runValue).forEach((repoPath) => localDependencies.push(repoPath));

      stepSummaries.push({
        name: stepName,
        uses: usesValue || '',
        run: summarizeRun(runValue)
      });
    });

    jobs.push({
      id: jobId,
      name,
      runs_on: String((job && job['runs-on']) || ''),
      needs: uniqSorted(needs),
      steps: stepSummaries
    });
  });

  const onValue = doc && Object.prototype.hasOwnProperty.call(doc, 'on') ? doc.on : null;
  ['workflow_dispatch', 'workflow_call'].forEach((key) => {
    const config = onValue && typeof onValue === 'object' && !Array.isArray(onValue) ? onValue[key] : null;
    const inputMap = config && typeof config === 'object' && config.inputs && typeof config.inputs === 'object'
      ? config.inputs
      : null;
    if (!inputMap) return;
    Object.entries(inputMap).forEach(([inputName, inputValue]) => {
      const required = inputValue && typeof inputValue === 'object' && inputValue.required ? 'required' : 'optional';
      inputs.push(`${key}:${inputName} (${required})`);
    });
  });

  return {
    jobs,
    inputs: uniqSorted(inputs),
    localDependencies: uniqSorted(localDependencies),
    externalDependencies: uniqSorted(externalDependencies)
  };
}

function buildWorkflowSummary(name, triggers, outputs) {
  const triggerLabel = triggers.length > 0 ? triggers.join(', ') : 'unknown triggers';
  const outputLabel = outputs.length > 0 ? outputs[0].toLowerCase() : 'workflow status';
  return `${name} runs on ${triggerLabel} and primarily produces ${outputLabel}.`;
}

function buildConsolidationFlag(dispatcherCandidate, triggerMode) {
  if (dispatcherCandidate === 'none') return 'keep-standalone until stronger dispatcher overlap is proven';
  return `review for alignment with \`${dispatcherCandidate}\` while preserving current ${triggerMode} trigger behavior`;
}

function buildWorkflowMermaid(workflow) {
  const lines = ['```mermaid', 'flowchart TD'];
  lines.push(`  trigger["Trigger: ${workflow.trigger_mode}"]`);
  lines.push(`  workflow["Workflow: ${workflow.title}"]`);
  lines.push('  trigger --> workflow');
  workflow.jobs.forEach((job, index) => {
    const nodeId = `job${index + 1}`;
    lines.push(`  ${nodeId}["Job: ${job.name}"]`);
    lines.push(`  workflow --> ${nodeId}`);
  });
  lines.push(`  outputs["Outputs: ${workflow.outputs.join(', ')}"]`);
  if (workflow.jobs.length === 0) {
    lines.push('  workflow --> outputs');
  } else {
    workflow.jobs.forEach((_job, index) => {
      const nodeId = `job${index + 1}`;
      lines.push(`  ${nodeId} --> outputs`);
    });
  }
  lines.push('```');
  return lines.join('\n');
}

function buildDispatcherMermaid(dispatcher) {
  const lines = ['```mermaid', 'flowchart TD'];
  lines.push(`  trigger["Entry: ${dispatcher.entry_triggers[0]}"]`);
  lines.push(`  dispatcher["Dispatcher: ${dispatcher.title}"]`);
  lines.push('  trigger --> dispatcher');
  dispatcher.dispatches.forEach((skill, index) => {
    const nodeId = `skill${index + 1}`;
    lines.push(`  ${nodeId}["Atomic skill: ${skill}"]`);
    lines.push(`  dispatcher --> ${nodeId}`);
  });
  lines.push(`  outputs["Outputs: ${dispatcher.outputs.join(', ')}"]`);
  if (dispatcher.dispatches.length === 0) {
    lines.push('  dispatcher --> outputs');
  } else {
    dispatcher.dispatches.forEach((_skill, index) => {
      const nodeId = `skill${index + 1}`;
      lines.push(`  ${nodeId} --> outputs`);
    });
  }
  lines.push('```');
  return lines.join('\n');
}

function formatBulletList(items, fallback) {
  const values = Array.isArray(items) ? items.filter(Boolean) : [];
  if (values.length === 0) return `- ${fallback}`;
  return values.map((item) => `- ${item}`).join('\n');
}

function formatTable(headers, rows) {
  const lines = [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`
  ];
  rows.forEach((row) => {
    lines.push(`| ${row.join(' | ')} |`);
  });
  return lines.join('\n');
}

function generatedBannerLines() {
  return [
    '{/*',
    'generated-file-banner: ai-tools-visual-library:v1',
    `Generation Script: ${VISUAL_LIBRARY_BANNER.script}`,
    `Purpose: ${VISUAL_LIBRARY_BANNER.purpose}`,
    `Run when: ${VISUAL_LIBRARY_BANNER.runWhen}`,
    `Run command: ${VISUAL_LIBRARY_BANNER.runCommand}`,
    '*/}',
    '',
    '<Note>',
    `**Generation Script**: This file is generated from script(s): \`${VISUAL_LIBRARY_BANNER.script}\`. <br/>`,
    `**Purpose**: ${VISUAL_LIBRARY_BANNER.purpose} <br/>`,
    `**Run when**: ${VISUAL_LIBRARY_BANNER.runWhen} <br/>`,
    `**Important**: Do not manually edit this file; run \`${VISUAL_LIBRARY_BANNER.runCommand}\`. <br/>`,
    '</Note>',
    ''
  ];
}

function buildWorkflowFrontmatter(workflow) {
  return [
    '---',
    yamlLine('title', workflow.title),
    yamlLine('kind', 'workflow'),
    yamlLine('status', workflow.status),
    yamlLine('concern', workflow.concern),
    yamlLine('source_path', workflow.source_path),
    yamlLine('trigger_mode', workflow.trigger_mode),
    yamlLine('risk_level', workflow.risk_level),
    yamlLine('consolidation_flag', workflow.consolidation_flag),
    yamlLine('dispatcher_candidate', workflow.dispatcher_candidate),
    yamlLine('workflow_family', workflow.workflow_family),
    yamlLine('cleanup_decision', workflow.cleanup_decision),
    yamlLine('usage_status', workflow.usage_status),
    yamlLine('process_fit', workflow.process_fit),
    yamlLine('consolidation_target', workflow.consolidation_target),
    yamlLine('last_verified', workflow.last_verified),
    '---',
    ''
  ].join('\n');
}

function buildDispatcherFrontmatter(dispatcher) {
  return [
    '---',
    yamlLine('title', dispatcher.title),
    yamlLine('kind', 'dispatcher'),
    yamlLine('status', dispatcher.status),
    yamlLine('concern', dispatcher.concern),
    yamlLine('source_path', dispatcher.source_path),
    yamlLine('cleanup_decision', dispatcher.cleanup_decision),
    yamlLine('readiness', dispatcher.readiness),
    yamlArrayLine('dispatches', dispatcher.dispatches),
    yamlArrayLine('outputs', dispatcher.outputs),
    yamlLine('last_verified', dispatcher.last_verified),
    '---',
    ''
  ].join('\n');
}

function buildWorkflowPage(workflow) {
  const jobRows = workflow.jobs.length > 0
    ? workflow.jobs.map((job) => [
        `\`${job.id}\``,
        job.name.replace(/\|/g, '\\|'),
        job.runs_on ? `\`${job.runs_on}\`` : 'n/a',
        job.needs.length > 0 ? job.needs.map((value) => `\`${value}\``).join(', ') : 'none',
        job.steps.length > 0 ? String(job.steps.length) : '0'
      ])
    : [['none', 'No jobs parsed', 'n/a', 'n/a', '0']];
  const stepLines = workflow.jobs.flatMap((job) => {
    const lines = [`### ${job.name}`, ''];
    if (job.steps.length === 0) {
      lines.push('- No steps parsed.');
      lines.push('');
      return lines;
    }
    job.steps.forEach((step) => {
      const parts = [`\`${step.name}\``];
      if (step.uses) parts.push(`uses ${step.uses}`);
      if (step.run) parts.push(`runs \`${step.run}\``);
      lines.push(`- ${parts.join(' | ')}`);
    });
    lines.push('');
    return lines;
  });
  const sections = [
    buildWorkflowFrontmatter(workflow),
    ...generatedBannerLines(),
    `# ${workflow.title}`,
    '',
    '## Summary',
    '',
    workflow.summary,
    '',
    '## Why It Exists',
    '',
    workflow.why_it_exists,
    '',
    '## Triggers',
    '',
    formatBulletList(workflow.trigger_details, 'No trigger details parsed.'),
    '',
    '## Jobs',
    '',
    formatTable(['Job ID', 'Name', 'Runs On', 'Needs', 'Step Count'], jobRows),
    '',
    ...stepLines,
    '## Inputs',
    '',
    formatBulletList(workflow.inputs, 'No explicit workflow inputs declared.'),
    '',
    '## Second Pass Assessment',
    '',
    formatBulletList(
      [
        `Workflow family: \`${workflow.workflow_family}\``,
        `Usage status: \`${workflow.usage_status}\``,
        `Cleanup decision: \`${workflow.cleanup_decision}\``,
        `Process fit: \`${workflow.process_fit}\``,
        `Consolidation target: \`${workflow.consolidation_target}\``,
        `Recommended engineering action: ${workflow.engineering_action}`
      ],
      'No second-pass assessment available.'
    ),
    '',
    '## Outputs',
    '',
    formatBulletList(workflow.outputs, 'Workflow logs and job status only.'),
    '',
    '## Dependencies',
    '',
    formatBulletList(workflow.dependencies, 'No direct dependencies identified in current repo scan.'),
    '',
    '## Dependants',
    '',
    formatBulletList(workflow.dependants, 'No direct dependants identified in current repo scan.'),
    '',
    '## Mermaid Pipeline',
    '',
    buildWorkflowMermaid(workflow),
    '',
    '## Frailty And Risk',
    '',
    formatBulletList(workflow.frailty_notes, 'No notable frailty markers identified.'),
    '',
    '## Consolidation Notes',
    '',
    workflow.consolidation_notes,
    '',
    '## Cleanup Rationale',
    '',
    formatBulletList(workflow.second_pass_notes, 'No additional cleanup rationale recorded.'),
    '',
    '## Handover Notes',
    '',
    workflow.handover_notes,
    ''
  ];
  return ensureTrailingNewline(sections.join('\n'));
}

function buildDispatcherPage(dispatcher) {
  const sections = [
    buildDispatcherFrontmatter(dispatcher),
    ...generatedBannerLines(),
    `# ${dispatcher.title}`,
    '',
    '## Summary',
    '',
    dispatcher.summary,
    '',
    '## Workflow Intent',
    '',
    dispatcher.workflow_intent,
    '',
    '## Child Actions And Skills',
    '',
    formatBulletList(dispatcher.dispatches.map((value) => `\`${value}\``), 'No child skills declared.'),
    '',
    '## Entry Triggers',
    '',
    formatBulletList(dispatcher.entry_triggers, 'No entry triggers documented.'),
    '',
    '## Required Inputs',
    '',
    formatBulletList(dispatcher.required_inputs, 'No explicit structured inputs defined yet; this dispatcher is still design-time.'),
    '',
    '## Validation Gates',
    '',
    formatBulletList(dispatcher.validation_gates, 'No validation gates documented.'),
    '',
    '## Second Pass Assessment',
    '',
    formatBulletList(
      [
        `Cleanup decision: \`${dispatcher.cleanup_decision}\``,
        `Readiness: \`${dispatcher.readiness}\``,
        `Next move: ${dispatcher.next_move}`
      ],
      'No second-pass assessment available.'
    ),
    '',
    '## Dependencies',
    '',
    formatBulletList(dispatcher.dependencies, 'No dependency list documented.'),
    '',
    '## Dependants',
    '',
    formatBulletList(dispatcher.dependants, 'No dependant list documented.'),
    '',
    '## Mermaid Pipeline',
    '',
    buildDispatcherMermaid(dispatcher),
    '',
    '## Downstream Effects',
    '',
    formatBulletList(dispatcher.downstream_effects, 'No downstream effects documented.'),
    '',
    '## Risks',
    '',
    formatBulletList(dispatcher.risks, 'No specific risks documented.'),
    '',
    '## Consolidation Notes',
    '',
    dispatcher.consolidation_notes,
    '',
    '## Cleanup Rationale',
    '',
    formatBulletList(dispatcher.second_pass_notes, 'No additional cleanup rationale recorded.'),
    '',
    '## Handover Notes',
    '',
    dispatcher.handover_notes,
    ''
  ];
  return ensureTrailingNewline(sections.join('\n'));
}

function buildCatalogFrontmatter(title, description) {
  return [
    '---',
    yamlLine('title', title),
    yamlLine('kind', 'catalog'),
    yamlLine('status', 'active'),
    yamlLine('concern', 'repo-ops'),
    yamlLine('last_verified', currentDateString()),
    yamlLine('description', description),
    '---',
    ''
  ].join('\n');
}

function buildWorkflowsCatalog(workflows) {
  const rows = workflows.map((workflow) => [
    `[${workflow.title}](./${workflow.slug}.mdx)`,
    `\`${workflow.workflow_family}\``,
    `\`${workflow.cleanup_decision}\``,
    `\`${workflow.usage_status}\``,
    `\`${workflow.process_fit}\``,
    `\`${workflow.concern}\``,
    `\`${workflow.risk_level}\``,
    `\`${workflow.dispatcher_candidate}\``,
    `\`${workflow.trigger_mode}\``,
    `\`${workflow.consolidation_target}\``
  ]);
  const decisionRows = buildDecisionRows(workflows, 'cleanup_decision');
  const familyRows = buildDecisionRows(workflows, 'workflow_family');
  const sections = [
    buildCatalogFrontmatter(
      'Workflow Visual Library',
      'Canonical visual library for repository GitHub workflows.'
    ),
    ...generatedBannerLines(),
    '# Workflow Visual Library',
    '',
    `Tracks ${workflows.length} workflow file pages under \`${WORKFLOWS_DIR}\` and keeps the canonical visual source under \`${WORKFLOWS_ROOT}\`.`,
    '',
    '## Cleanup Summary',
    '',
    ...renderCountsTable('Cleanup Decisions', decisionRows),
    ...renderCountsTable('Workflow Families', familyRows),
    '## Catalog',
    '',
    formatTable(
      ['Workflow', 'Family', 'Decision', 'Usage', 'Process Fit', 'Concern', 'Risk', 'Dispatcher', 'Trigger Mode', 'Target'],
      rows
    ),
    '',
    '## Visual Overview',
    '',
    '```mermaid',
    'flowchart LR',
    '  events["GitHub events"] --> workflows["Workflow pages"]',
    '  workflows --> checks["Validation and delivery checks"]',
    '  workflows --> updates["Content/data updates"]',
    '  workflows --> governance["Governance and agent runtime"]',
    '```',
    ''
  ];
  return ensureTrailingNewline(sections.join('\n'));
}

function buildDispatchersCatalog(dispatchers) {
  const rows = dispatchers.map((dispatcher) => [
    `[${dispatcher.title}](./${dispatcher.id}.mdx)`,
    `\`${dispatcher.cleanup_decision}\``,
    `\`${dispatcher.readiness}\``,
    `\`${dispatcher.concern}\``,
    dispatcher.dispatches.length > 0 ? String(dispatcher.dispatches.length) : '0',
    dispatcher.outputs.length > 0 ? String(dispatcher.outputs.length) : '0'
  ]);
  const sections = [
    buildCatalogFrontmatter(
      'Dispatcher Visual Library',
      'Canonical visual library for governed dispatcher actions.'
    ),
    ...generatedBannerLines(),
    '# Dispatcher Visual Library',
    '',
    `Tracks ${dispatchers.length} phase-1 dispatcher pages under \`${DISPATCHERS_ROOT}\`.`,
    '',
    '## Catalog',
    '',
    formatTable(['Dispatcher', 'Decision', 'Readiness', 'Concern', 'Child Skills', 'Declared Outputs'], rows),
    '',
    '## Visual Overview',
    '',
    '```mermaid',
    'flowchart LR',
    '  requests["User / repo trigger"] --> dispatchers["Dispatcher pages"]',
    '  dispatchers --> atomic["Atomic skills and scripts"]',
    '  atomic --> outputs["Delivery / handover artifacts"]',
    '```',
    ''
  ];
  return ensureTrailingNewline(sections.join('\n'));
}

function buildStagingWorkflowDraft(workflow) {
  const sections = [
    `# Workflow Audit Draft: ${workflow.title}`,
    '',
    `- Source path: \`${workflow.source_path}\``,
    `- Workflow family: \`${workflow.workflow_family}\``,
    `- Cleanup decision: \`${workflow.cleanup_decision}\``,
    `- Usage status: \`${workflow.usage_status}\``,
    `- Process fit: \`${workflow.process_fit}\``,
    `- Concern: \`${workflow.concern}\``,
    `- Risk level: \`${workflow.risk_level}\``,
    `- Dispatcher candidate: \`${workflow.dispatcher_candidate}\``,
    `- Consolidation target: \`${workflow.consolidation_target}\``,
    '',
    '## Summary',
    '',
    workflow.summary,
    '',
    '## Recommended Engineering Action',
    '',
    workflow.engineering_action,
    '',
    '## Dependencies',
    '',
    formatBulletList(workflow.dependencies, 'No direct dependencies identified in current repo scan.'),
    '',
    '## Dependants',
    '',
    formatBulletList(workflow.dependants, 'No direct dependants identified in current repo scan.'),
    '',
    '## Frailty Notes',
    '',
    formatBulletList(workflow.frailty_notes, 'No notable frailty markers identified.'),
    '',
    '## Cleanup Rationale',
    '',
    formatBulletList(workflow.second_pass_notes, 'No additional cleanup rationale recorded.'),
    ''
  ];
  return ensureTrailingNewline(sections.join('\n'));
}

function buildStagingDispatcherDraft(dispatcher) {
  const sections = [
    `# Dispatcher Audit Draft: ${dispatcher.title}`,
    '',
    `- Source path: \`${dispatcher.source_path}\``,
    `- Concern: \`${dispatcher.concern}\``,
    `- Status: \`${dispatcher.status}\``,
    `- Cleanup decision: \`${dispatcher.cleanup_decision}\``,
    `- Readiness: \`${dispatcher.readiness}\``,
    '',
    '## Summary',
    '',
    dispatcher.summary,
    '',
    '## Child Skills',
    '',
    formatBulletList(dispatcher.dispatches.map((value) => `\`${value}\``), 'No child skills declared.'),
    '',
    '## Risks',
    '',
    formatBulletList(dispatcher.risks, 'No specific risks documented.'),
    '',
    '## Next Move',
    '',
    dispatcher.next_move,
    '',
    '## Cleanup Rationale',
    '',
    formatBulletList(dispatcher.second_pass_notes, 'No additional cleanup rationale recorded.'),
    ''
  ];
  return ensureTrailingNewline(sections.join('\n'));
}

function buildWorkflowModel(workflowPath, reverseDependants) {
  const content = readFileSafe(workflowPath);
  const doc = parseYaml(content);
  const slug = path.basename(workflowPath).replace(/\.(yml|yaml)$/i, '');
  const title = String(doc.name || slugToTitle(slug)).trim();
  const triggers = collectTriggers(doc, content);
  const parsedJobs = parseJobs(doc, workflowPath);
  const concern = inferConcern(slug, content);
  const dispatcherCandidate = inferDispatcherCandidate(slug, content);
  const workflowFamily = inferWorkflowFamily(slug, dispatcherCandidate, content);
  const usageStatus = inferUsageStatus(slug, content);
  const cleanupDecision = inferCleanupDecision(slug, workflowFamily, usageStatus);
  const processFit = inferProcessFit(slug, cleanupDecision, workflowFamily, dispatcherCandidate, usageStatus);
  const consolidationTarget = inferConsolidationTarget(slug, workflowFamily, dispatcherCandidate);
  const riskLevel = inferRiskLevel(content, parsedJobs.jobs.length);
  const outputs = inferOutputs(content, slug);
  const dependencies = uniqSorted([
    ...parsedJobs.localDependencies,
    ...parsedJobs.externalDependencies,
    ...extractSecrets(content)
  ]);
  const dependants = uniqSorted([
    ...(reverseDependants.get(workflowPath) || []),
    dispatcherCandidate !== 'none' ? `dispatcher:${dispatcherCandidate}` : ''
  ]);
  return {
    slug,
    title,
    kind: 'workflow',
    status: 'active',
    concern,
    source_path: workflowPath,
    trigger_mode: triggers.length > 0 ? triggers.join(' + ') : 'unknown',
    risk_level: riskLevel,
    consolidation_flag: buildConsolidationFlag(dispatcherCandidate, triggers.length > 0 ? triggers.join(' + ') : 'unknown'),
    dispatcher_candidate: dispatcherCandidate,
    workflow_family: workflowFamily,
    cleanup_decision: cleanupDecision,
    usage_status: usageStatus,
    process_fit: processFit,
    consolidation_target: consolidationTarget,
    last_verified: currentDateString(),
    summary: buildWorkflowSummary(title, triggers, outputs),
    why_it_exists: `Govern the \`${workflowPath}\` workflow as a human-readable, visually explorable source-of-truth page inside \`${WORKFLOWS_ROOT}\`.`,
    trigger_details: collectTriggerDetails(doc, triggers),
    jobs: parsedJobs.jobs,
    inputs: parsedJobs.inputs,
    outputs,
    dependencies,
    dependants,
    frailty_notes: inferFrailtyNotes(content, triggers, dependencies, riskLevel),
    engineering_action: inferEngineeringAction(slug, cleanupDecision, dispatcherCandidate, workflowFamily, consolidationTarget),
    consolidation_notes: `Dispatcher suggestion: \`${dispatcherCandidate}\`. Second-pass target: \`${consolidationTarget}\`. This is a governance recommendation, not an automatic rewrite instruction.`,
    second_pass_notes: collectSecondPassNotes(slug, workflowFamily, cleanupDecision, usageStatus, content),
    handover_notes:
      'Use this page as the human-facing workflow brief during audits, cleanup, and handover. Promote any missing operational knowledge back into the canonical page rather than leaving it in chat.',
    raw_content: content
  };
}

function buildDispatcherModel(definition) {
  const override = dispatcherOverride(definition.id);
  return {
    ...definition,
    kind: 'dispatcher',
    source_path: DISPATCHER_SOURCE_PATH,
    last_verified: currentDateString(),
    summary: `${definition.title} is a governed dispatcher concept that coordinates ${definition.dispatches.length} child capability surfaces into one named workflow.`,
    required_inputs: [
      'Task intent or shipping goal',
      'Relevant repo scope',
      'Known blockers or constraints'
    ],
    cleanup_decision: override.cleanup_decision || 'keep',
    readiness: override.readiness || 'phase-1-design',
    next_move: override.next_move || 'Bind this dispatcher to executable entrypoints without letting wrappers own unique logic.',
    dependencies: definition.dispatches.map((value) => `skill:${value}`),
    dependants: ['agent:Claude', 'agent:Codex', 'agent:Cursor', 'agent:Windsurf'],
    second_pass_notes: [
      'Dispatcher pages are canonical workflow design surfaces and should remain thinner than runtime adapters.',
      'They exist to reduce chat-only orchestration and make repeated delivery patterns visible.'
    ],
    handover_notes:
      'These dispatcher pages are canonical design surfaces now and should later converge with executable adapter entrypoints without duplicating workflow logic.'
  };
}

function buildReverseDependants(workflowFiles) {
  const reverseMap = new Map();
  workflowFiles.forEach((workflowPath) => reverseMap.set(workflowPath, []));

  workflowFiles.forEach((workflowPath) => {
    const content = readFileSafe(workflowPath);
    workflowFiles.forEach((candidate) => {
      if (candidate === workflowPath) return;
      const relative = normalizeRepoPath(path.posix.relative(path.posix.dirname(workflowPath), candidate));
      const patterns = [candidate, `./${candidate}`, `./${relative}`, relative];
      if (patterns.some((pattern) => pattern && content.includes(pattern))) {
        reverseMap.set(candidate, uniqSorted([...(reverseMap.get(candidate) || []), `workflow:${workflowPath}`]));
      }
    });
  });

  return reverseMap;
}

function buildRegistryEntry({ id, repoPath, artifactType, category, canonicalSource, notes }) {
  return {
    id,
    path: repoPath,
    artifact_type: artifactType,
    category,
    lifecycle_state: 'manual-doc',
    current_lane: 'manual-doc',
    target_lane: 'manual-doc',
    canonical_source: canonicalSource,
    derived_outputs: [repoPath],
    runtime_targets: ['human', 'agent'],
    validators: [
      'operations/tests/unit/ai-tools-registry.test.js',
      'operations/tests/unit/ai-tools-visual-library.test.js'
    ],
    repair_commands: [`node ${SCRIPT_PATH} --write`],
    catalog_group: 'ai-tools/registry/visual-library',
    status: 'generated-active',
    migration_wave: 'wave-1',
    notes
  };
}

function buildManagedRegistryArtifacts(workflows, dispatchers) {
  const artifacts = [];

  artifacts.push(
    buildRegistryEntry({
      id: 'registry-workflows-index-mdx',
      repoPath: `${WORKFLOWS_ROOT}/index.mdx`,
      artifactType: 'visual-library-catalog',
      category: 'workflow-visual-library',
      canonicalSource: [WORKFLOW_SOURCE_GLOB, SCRIPT_PATH],
      notes: 'Generated workflow catalog that links every canonical workflow visual-library page.'
    })
  );

  workflows.forEach((workflow) => {
    artifacts.push(
      buildRegistryEntry({
        id: `registry-workflow-${slugToArtifactId(workflow.slug)}-mdx`,
        repoPath: `${WORKFLOWS_ROOT}/${workflow.slug}.mdx`,
        artifactType: 'visual-library-detail',
        category: 'workflow-visual-library',
        canonicalSource: [workflow.source_path, SCRIPT_PATH],
        notes: `Generated canonical workflow detail page for ${workflow.source_path}.`
      })
    );
  });

  artifacts.push(
    buildRegistryEntry({
      id: 'registry-dispatchers-index-mdx',
      repoPath: `${DISPATCHERS_ROOT}/index.mdx`,
      artifactType: 'visual-library-catalog',
      category: 'dispatcher-visual-library',
      canonicalSource: [DISPATCHER_SOURCE_PATH, SCRIPT_PATH],
      notes: 'Generated dispatcher catalog for the phase-1 governed dispatcher family.'
    })
  );

  dispatchers.forEach((dispatcher) => {
    artifacts.push(
      buildRegistryEntry({
        id: `registry-dispatcher-${dispatcher.id}-mdx`,
        repoPath: `${DISPATCHERS_ROOT}/${dispatcher.id}.mdx`,
        artifactType: 'visual-library-detail',
        category: 'dispatcher-visual-library',
        canonicalSource: [DISPATCHER_SOURCE_PATH, SCRIPT_PATH],
        notes: `Generated canonical dispatcher detail page for ${dispatcher.id}.`
      })
    );
  });

  return artifacts;
}

function buildRegistryContent(workflows, dispatchers) {
  const registry = loadRegistry(REPO_ROOT, REGISTRY_PATH);
  const managedPathPrefixes = [`${WORKFLOWS_ROOT}/`, `${DISPATCHERS_ROOT}/`];
  registry.artifacts = registry.artifacts
    .filter((artifact) => !managedPathPrefixes.some((prefix) => String(artifact.path || '').startsWith(prefix)))
    .concat(buildManagedRegistryArtifacts(workflows, dispatchers));
  return ensureTrailingNewline(JSON.stringify(registry, null, 2));
}

function writeIfChanged(repoPath, content, shouldWrite) {
  const normalizedPath = normalizeRepoPath(repoPath);
  const existing = readFileSafe(normalizedPath);
  const changed = existing !== content;
  if (changed && shouldWrite) {
    fs.mkdirSync(path.dirname(path.join(REPO_ROOT, normalizedPath)), { recursive: true });
    fs.writeFileSync(path.join(REPO_ROOT, normalizedPath), content, 'utf8');
  }
  return { path: normalizedPath, changed };
}

function removeStaleFiles(baseDir, expectedFiles, shouldWrite) {
  const normalizedBase = normalizeRepoPath(baseDir);
  const fullBase = path.join(REPO_ROOT, normalizedBase);
  const removed = [];
  if (!fs.existsSync(fullBase)) return removed;

  const stack = [fullBase];
  while (stack.length > 0) {
    const current = stack.pop();
    fs.readdirSync(current, { withFileTypes: true }).forEach((entry) => {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        return;
      }
      const repoPath = normalizeRepoPath(path.relative(REPO_ROOT, fullPath));
      if (!expectedFiles.has(repoPath)) {
        removed.push(repoPath);
        if (shouldWrite) fs.unlinkSync(fullPath);
      }
    });
  }

  return removed.sort((left, right) => left.localeCompare(right));
}

function buildOutputs() {
  const workflowFiles = listWorkflowFiles();
  const reverseDependants = buildReverseDependants(workflowFiles);
  const workflows = workflowFiles.map((workflowPath) => buildWorkflowModel(workflowPath, reverseDependants));
  const dispatchers = DISPATCHER_DEFINITIONS.map(buildDispatcherModel);
  const familyRows = buildDecisionRows(workflows, 'workflow_family');
  const decisionRows = buildDecisionRows(workflows, 'cleanup_decision');

  const outputs = new Map();
  outputs.set(`${WORKFLOWS_ROOT}/index.mdx`, buildWorkflowsCatalog(workflows));
  outputs.set(`${DISPATCHERS_ROOT}/index.mdx`, buildDispatchersCatalog(dispatchers));
  workflows.forEach((workflow) => {
    outputs.set(`${WORKFLOWS_ROOT}/${workflow.slug}.mdx`, buildWorkflowPage(workflow));
    outputs.set(`${STAGING_WORKFLOWS_ROOT}/${workflow.slug}.md`, buildStagingWorkflowDraft(workflow));
  });
  dispatchers.forEach((dispatcher) => {
    outputs.set(`${DISPATCHERS_ROOT}/${dispatcher.id}.mdx`, buildDispatcherPage(dispatcher));
    outputs.set(`${STAGING_DISPATCHERS_ROOT}/${dispatcher.id}.md`, buildStagingDispatcherDraft(dispatcher));
  });

  outputs.set(
    `${STAGING_ROOT}/workflows-audit.json`,
    ensureTrailingNewline(JSON.stringify(workflows.map((workflow) => ({
      slug: workflow.slug,
      title: workflow.title,
      source_path: workflow.source_path,
      workflow_family: workflow.workflow_family,
      cleanup_decision: workflow.cleanup_decision,
      usage_status: workflow.usage_status,
      process_fit: workflow.process_fit,
      concern: workflow.concern,
      trigger_mode: workflow.trigger_mode,
      risk_level: workflow.risk_level,
      dispatcher_candidate: workflow.dispatcher_candidate,
      consolidation_target: workflow.consolidation_target,
      engineering_action: workflow.engineering_action,
      dependencies: workflow.dependencies,
      dependants: workflow.dependants,
      outputs: workflow.outputs,
      frailty_notes: workflow.frailty_notes,
      second_pass_notes: workflow.second_pass_notes
    })), null, 2))
  );
  outputs.set(
    `${STAGING_ROOT}/dispatchers-audit.json`,
    ensureTrailingNewline(JSON.stringify(dispatchers.map((dispatcher) => ({
      id: dispatcher.id,
      title: dispatcher.title,
      concern: dispatcher.concern,
      source_path: dispatcher.source_path,
      cleanup_decision: dispatcher.cleanup_decision,
      readiness: dispatcher.readiness,
      next_move: dispatcher.next_move,
      dispatches: dispatcher.dispatches,
      outputs: dispatcher.outputs,
      validation_gates: dispatcher.validation_gates,
      risks: dispatcher.risks,
      second_pass_notes: dispatcher.second_pass_notes
    })), null, 2))
  );

  const dependencyLines = [
    '# Workflow Dependency Map',
    '',
    '| Workflow | Dependencies | Dependants |',
    '| --- | --- | --- |'
  ];
  workflows.forEach((workflow) => {
    dependencyLines.push(
      `| \`${workflow.source_path}\` | ${workflow.dependencies.length > 0 ? workflow.dependencies.map((value) => `\`${value}\``).join(', ') : '_none detected_'} | ${workflow.dependants.length > 0 ? workflow.dependants.map((value) => `\`${value}\``).join(', ') : '_none detected_'} |`
    );
  });
  dependencyLines.push('');
  outputs.set(`${STAGING_ROOT}/workflow-dependency-map.md`, ensureTrailingNewline(dependencyLines.join('\n')));

  const cleanupMatrixLines = [
    '# Workflow Cleanup Matrix',
    '',
    '| Workflow | Family | Decision | Usage | Process Fit | Dispatcher | Target | Action |',
    '| --- | --- | --- | --- | --- | --- | --- | --- |'
  ];
  workflows.forEach((workflow) => {
    cleanupMatrixLines.push(
      `| \`${workflow.source_path}\` | \`${workflow.workflow_family}\` | \`${workflow.cleanup_decision}\` | \`${workflow.usage_status}\` | \`${workflow.process_fit}\` | \`${workflow.dispatcher_candidate}\` | \`${workflow.consolidation_target}\` | ${workflow.engineering_action.replace(/\|/g, '\\|')} |`
    );
  });
  cleanupMatrixLines.push('');
  outputs.set(`${STAGING_ROOT}/workflow-cleanup-matrix.md`, ensureTrailingNewline(cleanupMatrixLines.join('\n')));

  const familyMapLines = [
    '# Workflow Family Recommendations',
    '',
    '## Summary',
    '',
    ...renderCountsTable('Workflow Families', familyRows),
    ...renderCountsTable('Cleanup Decisions', decisionRows),
    '## Families',
    ''
  ];
  familyRows.forEach(([family]) => {
    const familyWorkflows = workflows.filter((workflow) => workflow.workflow_family === family);
    const familyTargets = uniqSorted(familyWorkflows.map((workflow) => workflow.consolidation_target));
    familyMapLines.push(`### ${family}`);
    familyMapLines.push('');
    familyMapLines.push(`- Count: ${familyWorkflows.length}`);
    familyMapLines.push(`- Dominant decision: ${dominantValue(familyWorkflows, 'cleanup_decision')}`);
    familyMapLines.push(`- Targets: ${familyTargets.map((value) => `\`${value}\``).join(', ')}`);
    familyMapLines.push('- Members:');
    familyWorkflows.forEach((workflow) => {
      familyMapLines.push(`  - \`${workflow.source_path}\` -> \`${workflow.cleanup_decision}\``);
    });
    familyMapLines.push('');
  });
  outputs.set(`${STAGING_ROOT}/workflow-family-recommendations.md`, ensureTrailingNewline(familyMapLines.join('\n')));

  const dispatcherMatrixLines = [
    '# Dispatcher Cleanup Matrix',
    '',
    '| Dispatcher | Decision | Readiness | Next Move |',
    '| --- | --- | --- | --- |'
  ];
  dispatchers.forEach((dispatcher) => {
    dispatcherMatrixLines.push(
      `| \`${dispatcher.id}\` | \`${dispatcher.cleanup_decision}\` | \`${dispatcher.readiness}\` | ${dispatcher.next_move.replace(/\|/g, '\\|')} |`
    );
  });
  dispatcherMatrixLines.push('');
  outputs.set(`${STAGING_ROOT}/dispatcher-cleanup-matrix.md`, ensureTrailingNewline(dispatcherMatrixLines.join('\n')));

  const registryContent = buildRegistryContent(workflows, dispatchers);
  outputs.set(REGISTRY_PATH, registryContent);

  const registry = JSON.parse(registryContent);
  const inventoryContent = ensureTrailingNewline(
    renderInventoryReport(registry, {
      summary: {
        totalArtifacts: Array.isArray(registry.artifacts) ? registry.artifacts.length : 0
      }
    })
  );
  outputs.set(INVENTORY_PATH, inventoryContent);

  return { outputs, workflows, dispatchers };
}

function parseArgs(argv) {
  const check = argv.includes('--check');
  return {
    check,
    write: argv.includes('--write') || !check
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const { outputs, workflows, dispatchers } = buildOutputs();
  const changed = [];

  outputs.forEach((content, repoPath) => {
    const result = writeIfChanged(repoPath, content, args.write);
    if (result.changed) changed.push(result.path);
  });

  const expectedCanonicalFiles = new Set(
    [...outputs.keys()].filter((repoPath) => repoPath.startsWith(`${WORKFLOWS_ROOT}/`) || repoPath.startsWith(`${DISPATCHERS_ROOT}/`))
  );
  const expectedStagingFiles = new Set(
    [...outputs.keys()].filter((repoPath) => repoPath.startsWith(`${STAGING_WORKFLOWS_ROOT}/`) || repoPath.startsWith(`${STAGING_DISPATCHERS_ROOT}/`))
  );
  const staleFiles = [
    ...removeStaleFiles(WORKFLOWS_ROOT, expectedCanonicalFiles, args.write),
    ...removeStaleFiles(DISPATCHERS_ROOT, expectedCanonicalFiles, args.write),
    ...removeStaleFiles(STAGING_WORKFLOWS_ROOT, expectedStagingFiles, args.write),
    ...removeStaleFiles(STAGING_DISPATCHERS_ROOT, expectedStagingFiles, args.write)
  ];

  if (args.check) {
    if (changed.length > 0 || staleFiles.length > 0) {
      console.error('AI-tools visual library is out of date.');
      changed.forEach((repoPath) => console.error(`  stale: ${repoPath}`));
      staleFiles.forEach((repoPath) => console.error(`  stale-extra: ${repoPath}`));
      console.error(`Run: node ${SCRIPT_PATH} --write`);
      process.exit(1);
    }
    console.log(`AI-tools visual library is up to date (${workflows.length} workflows, ${dispatchers.length} dispatchers).`);
    return;
  }

  if (changed.length === 0 && staleFiles.length === 0) {
    console.log('No changes. AI-tools visual library already current.');
    return;
  }

  changed.forEach((repoPath) => console.log(`Updated ${repoPath}`));
  staleFiles.forEach((repoPath) => console.log(`Removed stale ${repoPath}`));
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  buildOutputs,
  buildWorkflowModel,
  buildDispatcherModel,
  listWorkflowFiles,
  main
};
