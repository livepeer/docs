# Section Summary: v2/gateways/custom/

**Audit date:** 2026-04-08
**Total files:** 24 MDX files
**Total size:** ~170 KB

---

## Overview

All 24 files are **view/composable files** -- none appear in `docs.json` directly. They are included by parent pages via imports or snippet includes. This means Nav (Cat 7) is N/A for all files. Frontmatter is inconsistent: some files have full frontmatter, some have partial, and 13 have none at all.

---

## Tier Classification

### Tier 1: EXCELLENT (3 files)
High-quality content ready for production with minor fixes (frontmatter only).

| File | Avg Score | Key Strength |
|------|-----------|-------------|
| `views/setup/verify/docker-verify-content.mdx` | 8.0 | Best-structured verification guide. Video/AI/Dual tabs. On-chain checks. |
| `views/setup/verify/linux-verify-content.mdx` | 8.0 | Mirrors Docker quality with Linux tooling. |
| `views/setup/connect/docker-connect-content.mdx` | 7.5 | Clear 4-step connection flow. Off-chain/on-chain tabs. |

### Tier 2: GOOD (7 files)
Solid content with minor issues. Needs frontmatter and small fixes.

| File | Avg Score | Key Issue |
|------|-----------|----------|
| `views/setup/connect/linux-connect-content.mdx` | 7.5 | Needs frontmatter |
| `views/setup/connect/windows-connect-content.mdx` | 7.5 | Needs frontmatter |
| `views/setup/monitor/docker-monitor-content.mdx` | 7.5 | Needs frontmatter. Link livepeer-monitoring repo |
| `views/setup/monitor/linux-monitor-content.mdx` | 7.5 | Needs frontmatter |
| `views/setup/monitor/windows-monitor-content.mdx` | 7.5 | Needs frontmatter |
| `views/setup/verify/windows-verify-content.mdx` | 7.0 | Needs frontmatter. Good port verification addition |
| `views/setup/configure/dual-configuration-content.mdx` | 6.5 | Typos ("verfiy", "Developement"), `${env:HOME}` in bash |

### Tier 3: NEEDS WORK (6 files)
Substantial content exists but has significant issues requiring attention.

| File | Avg Score | Key Issue |
|------|-----------|----------|
| `views/setup/configure/ai-configuration-content.mdx` | 5.5 | No frontmatter. Reader-directed question. Pinned commit hashes |
| `views/setup/configure/video-configuration-content.mdx` | 5.0 | 19KB, duplicate docker-compose blocks, 5 empty tabs, dead "old docs" |
| `views/quickstart/docker/dockerOnChainTab.mdx` | 4.5 | Description is dev note. Missing keywords/og:image. Danger marker. Typos |
| `views/quickstart/docker/dockerOffChainTab.mdx` | 4.5 | 4 visible Danger fix-me markers. Malformed link |
| `views/setup/install/docker-install-content.mdx` | 5.0 | ~70% commented-out content |
| `views/setup/install/windows-install-content.mdx` | 4.0 | Visible TODO markers. Marked UNVERIFIED. v1 reference |

### Tier 4: STUBS / CLEANUP CANDIDATES (8 files)
Empty scaffolding or files that should be deleted.

| File | Avg Score | Verdict |
|------|-----------|---------|
| `composables/linux/macSupport.mdx` | 1.0 | Empty. Single WIP warning. Delete or populate |
| `views/quickstart/linux/linuxOnChainTab.mdx` | 1.0 | All 7 steps empty. Title/filename mismatch |
| `views/quickstart/windows/windowsOffChainTab.mdx` | 1.0 | All 6 steps empty |
| `views/quickstart/windows/windowsOnChainTab.mdx` | 1.0 | All 7 steps empty |
| `views/quickstart/linux/linuxOffChainTab.mdx` | 2.0 | Only 1 of 6 steps has content. Dead code |
| `composables/linux/linuxSupport.mdx` | 4.5 | Commented-out code, incomplete platform coverage |
| `views/setup/install/linux-install-content-copy.mdx` | 3.0 | Likely superseded by clean version. Delete candidate |
| `views/setup/install/linux-install-content.mdx` | 5.0 | Acceptable but commented-out content |

---

## Cross-Cutting Issues

### 1. Frontmatter Inconsistency (ALL files)
- 11 files have frontmatter (composables + quickstart views)
- 13 files have no frontmatter (all setup views)
- Among files with frontmatter: `PageType` vs `pageType` casing varies
- Multiple files missing `sidebarTitle`, `lastVerified`, `keywords`, `og:image`
- **Recommendation:** Decide whether view files need frontmatter. If yes, standardise and add to all. If no, remove from those that have it

### 2. Commented-Out Content (7 files)
Dead code in `dockerOffChainTab`, `dockerOnChainTab`, `linuxOffChainTab`, `docker-install-content`, `linux-install-content`, `linux-install-content-copy`, `video-configuration-content`. Some of this content is valuable (docker-compose setup, systemd services, auth webhooks) but needs to be migrated to the correct views or deleted.

### 3. Visible TODO / Danger Markers (4 files)
`dockerOffChainTab` (4 markers), `dockerOnChainTab` (1 marker), `windows-install-content` (TODO in Warning), `linux-install-content-copy` (typos). These are visible to readers in production.

### 4. Empty Stubs (4 files)
`macSupport`, `linuxOnChainTab`, `windowsOffChainTab`, `windowsOnChainTab` are pure scaffolding with zero content. They exist in the codebase but serve no purpose.

### 5. Duplicate File (1 file)
`linux-install-content-copy.mdx` appears to be an older version superseded by `linux-install-content.mdx`.

### 6. Stale References (3 files)
- Pinned GitHub commit hashes (`5691cb48`) in `ai-configuration-content` and `dual-configuration-content`
- Deprecated testnet reference ("arbitrum-one-goerli") in `dockerOnChainTab`
- v1 docs reference in `windows-install-content`

---

## Priority Actions

### P0 -- Immediate
1. Remove or mark as draft the 4 visible TODO/Danger markers in quickstart views
2. Delete `linux-install-content-copy.mdx` after confirming nothing unique is lost
3. Delete or properly flag the 4 empty stubs (macSupport, linuxOnChainTab, windowsOffChainTab, windowsOnChainTab)

### P1 -- Short Term
4. Fix typos: "Aribtum", "verfiy", "Developement", "Gtihub", "bre upgrade", "Linu/MacOS"
5. Standardise frontmatter across all view files
6. Migrate commented-out content to correct views or delete
7. Fix `${env:HOME}` to `$HOME` in bash code blocks
8. Update stale testnet reference from Goerli to Sepolia

### P2 -- Medium Term
9. Complete the 5 empty tabs in `video-configuration-content` (CLI, Config File, Env Variables, Binary)
10. Deduplicate docker-compose blocks in `video-configuration-content`
11. Replace pinned commit hashes with `main` branch links or tagged releases
12. Verify AIServiceRegistry contract address in connect views
13. Add explicit links to `livepeer/livepeer-monitoring` repo in monitor views

---

## Score Distribution

| Score Range | Count | % |
|-------------|-------|---|
| 8.0+ (Excellent) | 3 | 12.5% |
| 6.0-7.9 (Good) | 8 | 33.3% |
| 4.0-5.9 (Needs Work) | 6 | 25.0% |
| 0-3.9 (Stub/Delete) | 7 | 29.2% |

**Section average: ~5.2/10**

The newer setup views (connect, verify, monitor) are consistently high quality. The older quickstart views and composables are the weakest. The configure views are mixed -- good structure but execution issues.
