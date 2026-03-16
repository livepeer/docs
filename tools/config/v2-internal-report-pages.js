/**
 * @script            v2-internal-report-pages
 * @category          config
 * @purpose           tooling:dev-tools
 * @scope             full-repo
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Configuration data — list of internal report page paths for publish-v2-internal-reports.js
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/config/v2-internal-report-pages.js [flags]
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
      scriptPath: 'tests/unit/docs-navigation.test.js',
      title: 'Docs Navigation Route Report',
      sidebarTitle: 'Docs Navigation',
      description:
        'Generated docs.json route validation report from tests/unit/docs-navigation.test.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/navigation-links/navigation-report.md',
      targetSlug: 'docs-navigation',
    },
    {
      publish: true,
      categorySlug: 'navigation-links',
      docsGroupSlugs: ['navigation-links', 'tests'],
      scriptId: 'v2-link-audit',
      scriptPath: 'tests/integration/v2-link-audit.js',
      title: 'V2 Link Audit Report',
      sidebarTitle: 'Link Audit',
      description:
        'Generated V2 MDX link audit report from tests/integration/v2-link-audit.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/navigation-links/LINK_TEST_REPORT.md',
      targetSlug: 'v2-link-audit',
    },
    {
      publish: true,
      categorySlug: 'quality-accessibility',
      docsGroupSlugs: ['quality-accessibility', 'tests'],
      scriptId: 'v2-wcag-audit',
      scriptPath: 'tests/integration/v2-wcag-audit.js',
      title: 'V2 WCAG Audit Report',
      sidebarTitle: 'WCAG Audit',
      description:
        'Generated WCAG audit report from tests/integration/v2-wcag-audit.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/quality-accessibility/v2-wcag-audit-report.md',
      targetSlug: 'v2-wcag-audit',
    },
    {
      publish: true,
      categorySlug: 'quality-accessibility',
      scriptId: 'wcag-repair-common',
      scriptPath: 'tools/scripts/wcag-repair-common.js',
      title: 'WCAG Repair Common Report',
      sidebarTitle: 'WCAG Repair',
      description:
        'Generated WCAG repair report from tools/scripts/wcag-repair-common.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/quality-accessibility/v2-wcag-repair-common-report.md',
      targetSlug: 'wcag-repair-common',
    },
    {
      publish: true,
      categorySlug: 'quality-accessibility',
      scriptId: 'audit-v2-usefulness',
      scriptPath: 'tools/scripts/audit-v2-usefulness.js',
      title: 'V2 Usefulness Audit Summary',
      sidebarTitle: 'Usefulness Audit',
      description:
        'Generated usefulness audit summary from tools/scripts/audit-v2-usefulness.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/quality-accessibility/docs-usefulness/latest/summary.md',
      sourceFallbackGlobs: [
        'tasks/reports/quality-accessibility/docs-usefulness/*/summary.md',
      ],
      targetSlug: 'audit-v2-usefulness',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'test-all-pages-comprehensive',
      scriptPath: 'tools/scripts/archive/legacy/test-all-pages-comprehensive.js',
      title: 'All Pages Comprehensive Browser Report',
      sidebarTitle: 'Browser Report',
      description:
        'Generated browser report from tools/scripts/archive/legacy/test-all-pages-comprehensive.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/page-audits/browser-test-report.md',
      targetSlug: 'test-all-pages-comprehensive',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'audit-all-pages',
      scriptPath: 'tools/scripts/archive/legacy/audit-all-pages.js',
      title: 'All Pages Audit (Legacy Browser Script)',
      sidebarTitle: 'Audit All Pages',
      description:
        'Generated audit report from tools/scripts/archive/legacy/audit-all-pages.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/page-audits/page-audit-latest.md',
      targetSlug: 'audit-all-pages',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'audit-all-pages-simple',
      scriptPath: 'tools/scripts/archive/legacy/audit-all-pages-simple.js',
      title: 'All Pages Audit Simple (File Checks)',
      sidebarTitle: 'Audit Simple',
      description:
        'Generated file-check audit report from tools/scripts/archive/legacy/audit-all-pages-simple.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/page-audits/page-audit-simple-latest.md',
      targetSlug: 'audit-all-pages-simple',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      scriptId: 'audit-python',
      scriptPath: 'tasks/scripts/audit-python.py',
      title: 'All Pages Audit (Python)',
      sidebarTitle: 'Audit Python',
      description:
        'Generated Python audit report from tasks/scripts/audit-python.py.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/page-audits/page-audit-python-latest.md',
      targetSlug: 'audit-python',
    },
    {
      publish: true,
      categorySlug: 'page-audits',
      docsGroupSlugs: ['page-audits', 'tests'],
      scriptId: 'domain-pages-audit',
      scriptPath: 'tests/integration/domain-pages-audit.js',
      title: 'Domain Page Load Audit Report',
      sidebarTitle: 'Domain Pages',
      description:
        'Generated deployed page load audit report from tests/integration/domain-pages-audit.js.',
      sourceType: 'file',
      sourcePath: 'tests/reports/domain-page-load-report.md',
      targetSlug: 'domain-pages-audit',
    },
    {
      publish: true,
      categorySlug: 'repo-ops',
      scriptId: 'audit-scripts',
      scriptPath: 'tools/scripts/audit-scripts.js',
      title: 'Script Audit Report',
      sidebarTitle: 'Script Audit',
      description:
        'Generated script inventory audit report from tools/scripts/audit-scripts.js.',
      sourceType: 'file',
      sourcePath: 'tasks/reports/repo-ops/SCRIPT_AUDIT.md',
      targetSlug: 'audit-scripts',
    },
    {
      publish: true,
      categorySlug: 'repo-ops',
      scriptId: 'audit-tasks-folders',
      scriptPath: 'tools/scripts/audit-tasks-folders.js',
      title: 'Tasks Folder Audit Reports',
      sidebarTitle: 'Tasks Folder Audits',
      description:
        'Generated tasks folder audit reports from tools/scripts/audit-tasks-folders.js.',
      sourceType: 'glob',
      sourceGlob: 'tasks/reports/repo-ops/*_audit.md',
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
      scriptPath: 'tools/scripts/audit-tasks-folders.js',
      title: 'Tasks Folder Recommendation Conflicts',
      sidebarTitle: 'Audit Conflicts',
      description:
        'Generated recommendation conflicts report from tools/scripts/audit-tasks-folders.js.',
      optionalWhenMissing: true,
      sourceType: 'file',
      sourcePath: 'tasks/reports/repo-ops/recommendation-conflicts.md',
      targetSlug: 'recommendation-conflicts',
      legacyTargetSlugs: ['audit-tasks-folders--recommendation-conflicts'],
    },
  ],
};
