/**
 * @script            v2-internal-report-pages
 * @category          config
 * @type              config
 * @purpose           tooling:dev-tools
 * @scope             operations/config/content/reports, operations/scripts/integrators/governance/pipelines, v2/internal, docs.json, workspace/reports, operations/tests/reports
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Configuration data — list of internal report page paths for publish-v2-internal-reports.js
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node operations/config/content/reports/v2-internal-report-pages.js [flags]
 */
module.exports = {
  categories: [
    {
      slug: 'navigation-links',
      groupTitle: 'Navigation & Links',
    },
    {
      slug: 'quality-accessibility',
      groupTitle: 'Quality & Accessibility',
    },
    {
      slug: 'page-audits',
      groupTitle: 'Page Audits',
    },
    {
      slug: 'repo-ops',
      groupTitle: 'Repo Ops',
    },
  ],
  docsGroups: [
    {
      slug: 'navigation-links',
      groupTitle: 'Navigation & Links',
    },
    {
      slug: 'quality-accessibility',
      groupTitle: 'Quality & Accessibility',
    },
    {
      slug: 'page-audits',
      groupTitle: 'Page Audits',
    },
    {
      slug: 'repo-ops',
      groupTitle: 'Repo Ops',
    },
    {
      slug: 'tests',
      groupTitle: 'Tests',
    },
  ],
  entries: [
    {
      publish: true,
      categorySlug: 'navigation-links',
      docsGroupSlugs: ['navigation-links', 'tests'],
      scriptId: 'docs-navigation.test',
      scriptPath: 'operations/tests/unit/docs-navigation.test.js',
      title: 'Docs Navigation Route Report',
      sidebarTitle: 'Docs Navigation',
      description:
        'Generated docs.json route validation report from operations/tests/unit/docs-navigation.test.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/navigation-links/navigation-report.md',
      targetSlug: 'docs-navigation',
    },
    {
      publish: true,
      categorySlug: 'navigation-links',
      docsGroupSlugs: ['navigation-links', 'tests'],
      scriptId: 'page-links-audit',
      scriptPath: 'operations/scripts/audits/content/health/page-links-audit.js',
      title: 'Page Links Audit Report',
      sidebarTitle: 'Link Audit',
      description:
        'Generated page links audit report from operations/scripts/audits/content/health/page-links-audit.js.',
      sourceType: 'file',
      sourcePath: 'operations/reports/health/page-links/page-links-audit.md',
      targetSlug: 'v2-link-audit',
    },
    {
      publish: true,
      categorySlug: 'quality-accessibility',
      docsGroupSlugs: ['quality-accessibility', 'tests'],
      scriptId: 'v2-wcag-audit',
      scriptPath: 'operations/tests/integration/v2-wcag-audit.js',
      title: 'V2 WCAG Audit Report',
      sidebarTitle: 'WCAG Audit',
      description:
        'Generated WCAG audit report from operations/tests/integration/v2-wcag-audit.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/quality-accessibility/v2-wcag-audit-report.md',
      targetSlug: 'v2-wcag-audit',
    },
    {
      publish: true,
      categorySlug: 'quality-accessibility',
      scriptId: 'wcag-repair-common',
      scriptPath: 'operations/scripts/remediators/content/style/wcag-repair-common.js',
      title: 'WCAG Repair Common Report',
      sidebarTitle: 'WCAG Repair',
      description:
        'Generated WCAG repair report from operations/scripts/remediators/content/style/wcag-repair-common.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/quality-accessibility/v2-wcag-repair-common-report.md',
      targetSlug: 'wcag-repair-common',
    },
    {
      publish: true,
      categorySlug: 'quality-accessibility',
      scriptId: 'audit-v2-usefulness',
      scriptPath: 'operations/scripts/audits/content/quality/audit-v2-usefulness.js',
      title: 'V2 Usefulness Audit Summary',
      sidebarTitle: 'Usefulness Audit',
      description:
        'Generated usefulness audit summary from operations/scripts/audits/content/quality/audit-v2-usefulness.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/quality-accessibility/docs-usefulness/latest/summary.md',
      sourceFallbackGlobs: [
        'workspace/reports/quality-accessibility/docs-usefulness/*/summary.md',
      ],
      targetSlug: 'audit-v2-usefulness',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'test-all-pages-comprehensive',
      scriptPath: 'operations/scripts/archive/legacy/test-all-pages-comprehensive.js',
      title: 'All Pages Comprehensive Browser Report',
      sidebarTitle: 'Browser Report',
      description:
        'Generated browser report from operations/scripts/archive/legacy/test-all-pages-comprehensive.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/page-audits/browser-test-report.md',
      targetSlug: 'test-all-pages-comprehensive',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'audit-all-pages',
      scriptPath: 'operations/scripts/archive/legacy/audit-all-pages.js',
      title: 'All Pages Audit (Legacy Browser Script)',
      sidebarTitle: 'Audit All Pages',
      description:
        'Generated audit report from operations/scripts/archive/legacy/audit-all-pages.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/page-audits/page-audit-latest.md',
      targetSlug: 'audit-all-pages',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'audit-all-pages-simple',
      scriptPath: 'operations/scripts/archive/legacy/audit-all-pages-simple.js',
      title: 'All Pages Audit Simple (File Checks)',
      sidebarTitle: 'Audit Simple',
      description:
        'Generated file-check audit report from operations/scripts/archive/legacy/audit-all-pages-simple.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/page-audits/page-audit-simple-latest.md',
      targetSlug: 'audit-all-pages-simple',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'audit-python',
      scriptPath: 'operations/scripts/audits/content/quality/audit-python.py',
      title: 'All Pages Audit (Python)',
      sidebarTitle: 'Audit Python',
      description:
        'Generated Python audit report from operations/scripts/audits/content/quality/audit-python.py.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/page-audits/page-audit-python-latest.md',
      targetSlug: 'audit-python',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      docsGroupSlugs: ['page-audits', 'tests'],
      scriptId: 'domain-pages-audit',
      scriptPath: 'operations/tests/integration/domain-pages-audit.js',
      title: 'Domain Page Load Audit Report',
      sidebarTitle: 'Domain Pages',
      description:
        'Generated deployed page load audit report from operations/tests/integration/domain-pages-audit.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/page-audits/domain-page-load-report.md',
      targetSlug: 'domain-pages-audit',
    },
    {
      publish: true,
      categorySlug: 'repo-ops',
      scriptId: 'audit-scripts',
      scriptPath: 'operations/scripts/audits/governance/scripts/audit-script-categories.js',
      title: 'Script Audit Report',
      sidebarTitle: 'Script Audit',
      description:
        'Generated script inventory audit report from operations/scripts/audits/governance/scripts/audit-script-categories.js.',
      sourceType: 'file',
      sourcePath: 'workspace/reports/repo-ops/SCRIPT_AUDIT.md',
      targetSlug: 'audit-scripts',
    },
    {
      publish: true,
      categorySlug: 'repo-ops',
      scriptId: 'audit-tasks-folders',
      scriptPath: 'operations/scripts/audits/governance/repo/audit-tasks-folders.js',
      title: 'Tasks Folder Audit Reports',
      sidebarTitle: 'Tasks Folder Audits',
      description:
        'Generated tasks folder audit reports from operations/scripts/audits/governance/repo/audit-tasks-folders.js.',
      sourceType: 'glob',
      sourceGlob: 'workspace/reports/repo-ops/*_audit.md',
      sourceBasenameAllowList: [
        'errors_audit.md',
        'reports_navigation-links_audit.md',
        'reports_page-audits_audit.md',
        'reports_quality-accessibility_audit.md',
        'reports_quality-accessibility_docs-usefulness_audit.md',
        'scripts_audit.md',
      ],
      dynamicTitleFromScope: true,
      legacyTargetSlugPrefixes: ['audit-tasks-folders--'],
    },
    {
      publish: true,
      categorySlug: 'repo-ops',
      scriptId: 'audit-tasks-folders',
      scriptPath: 'operations/scripts/audits/governance/repo/audit-tasks-folders.js',
      title: 'Tasks Folder Recommendation Conflicts',
      sidebarTitle: 'Audit Conflicts',
      description:
        'Generated recommendation conflicts report from operations/scripts/audits/governance/repo/audit-tasks-folders.js.',
      optionalWhenMissing: true,
      sourceType: 'file',
      sourcePath: 'workspace/reports/repo-ops/recommendation-conflicts.md',
      targetSlug: 'recommendation-conflicts',
      legacyTargetSlugs: ['audit-tasks-folders--recommendation-conflicts'],
    },
  ],
};
