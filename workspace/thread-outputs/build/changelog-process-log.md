# Changelog Pipeline — Process Log

> Every run, mistake, fix, and pattern. After 2-3 runs this becomes the skill.

---

## Run 1 — 2026-03-26: Streamplace GitLab changelog (initial build)

### Context
- Streamplace code lives on self-hosted GitLab at `git.stream.place/streamplace/streamplace` (project ID: 1, public, no auth)
- Also mirrored on GitHub at `github.com/streamplace/streamplace` (5 tags, no formal releases)
- No changelog.mdx existed for Streamplace
- Existing pipeline only supported GitHub

### Steps taken

1. **Config** — Added `gitlab` section to `product-social-config.json` with `releasesActive: true, primary: true`. Enabled GitHub `releasesActive: true` too. Added `changelogRepos` arrays to both.

2. **Template** — Created `v2/solutions/streamplace/changelog.mdx` from Daydream template. Links to both GitLab and GitHub releases.

3. **Navigation** — Added `v2/solutions/streamplace/changelog` to docs.json Streamplace group.

4. **Script enhancement** — Extended `generate-solutions-changelog.js`:
   - Added `gitlabGet()` function (parallel to `githubGet()`)
   - Added `fetchGitLabRepoReleases()` with normalisation to GitHub-like shape
   - Added `fetchGitLabCommitsBetweenTags()` for LLM context
   - Added `mergeReleases()` for deduplication by `tag_name`
   - Modified `loadProductConfig()` to check both sources
   - Modified `processProduct()` to fetch from both, merge, dispatch to correct provider
   - Added `_source` field to every release for icon/label selection
   - Added `isPlaceholderBody()` to detect useless release descriptions

5. **Workflow** — Added `GITLAB_TOKEN` env var to both enhanced and fallback steps in `update-solutions-changelog.yml`.

6. **UI updates** — Added GitLab to socials.jsx, community.mdx, overview.mdx for Streamplace.

### Mistakes and fixes

| # | What happened | Root cause | Fix | Time lost |
|---|---|---|---|---|
| M1 | First run produced bare entries (version + link only, no content) | All 131 GitLab releases have placeholder description: "Changelog script didn't work. Very sad." | Added `isPlaceholderBody()` detection. Without `--enhance` flag, raw extraction produces nothing from placeholder text. Must use `--enhance` for Streamplace. | ~5 min |
| M2 | `--enhance` run failed: "No endpoints found for google/gemini-2.5-pro-exp-03-25:free" | Hardcoded model ID was stale — removed from OpenRouter | Changed default to `google/gemini-2.0-flash-001`, then to `openrouter/free` (auto-routing, no stale IDs) | ~5 min |
| M3 | `openrouter/free` returned empty content on 2/3 requests | Free router is flaky — intermittent availability or rate limiting on free tier | Added retry logic: 3 attempts with exponential backoff (2s, 4s) before falling back to raw extraction | ~3 min |
| M4 | Ran without `--enhance` first, populated changelog with bare entries, then had to clear and re-run with `--enhance` | Should have tested with `--dry-run --enhance` first | Always dry-run first. Only run for real once output looks correct. | ~3 min |
| M5 | `OPENROUTER_API_KEY` not available locally — it was in GitHub Secrets only | Key was commented out in `.env`, not set in environment | User provided key inline. For CI: key is in GitHub Secrets. Locally: must set env var or uncomment in `.env`. | ~2 min |

### Patterns identified

**P1: Always dry-run first.**
Run with `--dry-run --enhance` before real runs. Check output quality before writing to file.

**P2: Placeholder detection is essential for GitLab sources.**
GitLab self-hosted repos often have empty or placeholder release descriptions. The script must detect this and rely on commit messages between tags for LLM context.

**P3: Never hardcode model IDs.**
Use `openrouter/free` as default (auto-routes to best available free model). Override with `OPENROUTER_MODEL` env var when needed for reliability.

**P4: GitLab field mapping.**
| GitLab | GitHub equivalent |
|---|---|
| `description` | `body` |
| `released_at` | `published_at` |
| `_links.self` | `html_url` |
| `upcoming_release` | `prerelease` |
| (no equivalent) | `draft` |

**P5: Dedup key is `tag_name`.**
When both sources have the same tag, the primary source wins (controlled by `gitlab.primary: true` in config).

**P6: GitHub may have 0 formal releases even with tags.**
`fetchRepoReleases()` filters for non-prerelease, non-draft releases. Tags without release objects don't count. Streamplace GitHub had 5 tags but 0 releases.

**P7: The prompt matters for `openrouter/free`.**
The free router selects the model based on prompt content. A clear task description at the top ("You are a technical changelog writer...") helps it route to instruction-following models.

**P8: Retry before fallback.**
Free-tier models have intermittent availability. 3 retries with backoff catches transient failures without blocking the pipeline.

### Script changes summary

| Function | Change |
|---|---|
| `loadProductConfig()` | Checks `github.releasesActive` OR `gitlab.releasesActive` |
| `buildPrompt()` | Task-first description, source-agnostic, detects placeholder bodies |
| `buildUpdateBlock()` | New `rawNotes` param — shows LLM summary + raw notes in Accordion |
| `generateUpdateBlockRaw()` | Passes `null` for rawNotes (raw mode: highlights are the content) |
| `generateUpdateBlockEnhanced()` | Passes cleaned raw body as rawNotes when not placeholder |
| `processProduct()` | Dual-source fetch, merge, provider dispatch |
| `callLLM()` | Wraps callLLMOnce with 3 retries + exponential backoff |
| NEW: `gitlabGet()` | GitLab API client |
| NEW: `fetchGitLabRepoReleases()` | Fetch + normalise GitLab releases |
| NEW: `fetchGitLabCommitsBetweenTags()` | Commit context for LLM |
| NEW: `mergeReleases()` | Deduplicate by tag_name, primary source wins |
| NEW: `isPlaceholderBody()` | Detect useless release descriptions |

### Config changes

`product-social-config.json` Streamplace section now has:
- `github.releasesActive: true` with `changelogRepos`
- `gitlab` section with `instanceUrl`, `projectId`, `releasesActive: true`, `primary: true`, `changelogRepos`

### Output quality

With `google/gemini-2.0-flash-001`: 10/10 releases enhanced, 79-622 chars each. Good structure (### New features / ### Updates / ### Bug fixes), terse bullets, no preamble.

With `openrouter/free`: 1/3 success rate before retry logic added. After retry logic: untested (used explicit model for the real run).

### Open items

- [ ] `openrouter/free` with retry logic needs a full 10-release test run
- [x] Audit other changelog pipelines for hardcoded models — CLEAN (only 2 defaults, both env-overridable)
- [x] Test append behaviour — PASSED (see Run 4 below)
- [ ] Verify Accordion component renders correctly for products with real release notes (e.g., Daydream)
- [ ] CORS test for GitLab raw file access (community page MarkdownEmbed)

---

## Run 4 — 2026-03-27: Append/dedup test (Daydream)

### Test procedure
1. Backed up `daydream/changelog.mdx` to `.bak`
2. Deleted last 2 Update blocks (TouchDesigner v0.1.3 and v0.1.2)
3. Ran `--dry-run` — script detected exactly 2 missing entries
4. Ran for real — 2 entries appended
5. Diffed against backup — format is byte-identical
6. Restored backup

### Result: PASS

### Observations
- **Insertion position:** Re-added entries go to the TOP of the automation zone (right after marker), not back at the bottom. This means if old entries are deleted and re-added, they appear above newer entries. Acceptable for the dedup use case (re-adding missing entries) but worth noting.
- **Format match:** Generated output is byte-identical to the original entries. Tags, labels, ScrollBox wrapping, DoubleIconLink — all match.
- **Multi-repo dedup:** Script correctly scanned all 6 Daydream repos (37 releases total) and only flagged the 2 that were missing from the file.

### Pattern: P9 — append test procedure
1. Back up the file (`.bak`)
2. Delete 2-3 entries from the bottom
3. `--dry-run` first — verify count matches
4. Run for real
5. Diff against backup — verify format
6. Restore backup

---

## Run 5 — 2026-03-27: Realignment — correct entry format, proper test

### Context
- User corrected multiple mistakes in the changelog pipeline work
- Accordion was built without approval (user asked for ScrollBox)
- Previous append test tested dedup (deleting old entries) not new entry generation
- Template was out of date with deployed pages

### Mistakes and fixes

| # | What happened | Root cause | Fix | Rule |
|---|---|---|---|---|
| M6 | Built Accordion for raw notes — user wanted ScrollBox | Treated user's description of intent as approval. User said "ScrollBox for the full notes" — I built Accordion instead. | Reverted to ScrollBox. LLM summary bare, raw notes in ScrollBox. | **"Silence = not approval." Read the exact words. ScrollBox ≠ Accordion.** |
| M7 | Previous test deleted OLD entries to test dedup, not NEW entries | Misunderstood what "test append" means. The real test is: does the script generate correct NEW entries with the new format? | Deleted 3 NEWEST entries (v0.1.9, v0.1.8, v0.1.7) and ran `--enhance`. Script generated them with correct dual-content format. | **Test the actual workflow: new entries with --enhance, not dedup of old entries.** |
| M8 | LLM summary was in a ScrollBox | Copied the raw-mode pattern (content in ScrollBox) for the enhanced mode too | LLM summary goes BARE (directly under heading). Only raw notes go in ScrollBox. | **Summary: bare. Raw notes: ScrollBox. Match the live pattern.** |
| M9 | Proceeded with changes without presenting findings first | CLAUDE.md: "Findings before fixes. Get approval, then execute." I went straight to building. | Stopped. Re-read CLAUDE.md. Re-aligned. | **Present, get approval, then execute. Every time.** |
| M10 | Template was stale — didn't match deployed entries | Template had no ScrollBox, no styled description div, no DoubleIconLink | Updated template with Mode A (enhanced) and Mode B (raw) examples + rules | **Template first, pages second. Keep template current with deployed pattern.** |

### Correct entry format (locked)

**Mode A — Enhanced (LLM + raw notes):**
```
<Update label="..." tags={[...]} rss={{...}} description={<div ...>Month YYYY</div>}>
  ## heading

  ### New features
  - **Name** — One sentence.

  ### Bug fixes
  - **Name** — One sentence.

  <ScrollBox maxHeight="250px" showHint={true}>
    Raw engineer release notes (full body from GitHub/GitLab)
  </ScrollBox>

  <DoubleIconLink label="View release on ..." href="..." iconLeft="..." />
</Update>
```

**Mode B — Raw (no LLM):**
```
<Update ...>
  ## heading

  <ScrollBox maxHeight="250px" showHint={true}>
    Extracted highlights
  </ScrollBox>

  <DoubleIconLink ... />
</Update>
```

### Test result: PASS
- Deleted newest 3 Daydream entries (Scope v0.1.9, v0.1.8, v0.1.7)
- Ran `--enhance --dry-run` with gemini-2.0-flash
- 3/3 enhanced successfully (324, 535, 640 chars)
- Output: LLM summary bare + raw notes in ScrollBox + DoubleIconLink
- Restored backup

### Patterns confirmed
- **P10:** Summary bare, raw notes in ScrollBox — matches live Daydream pattern
- **P11:** Delete NEWEST entries to test, not oldest — tests the real workflow
- **P12:** "Silence = not approval" — present the format, get explicit "go", then build

---

## Run 2 — 2026-03-26: Solutions Changelog (Daydream, Embody, Frameworks, Studio)

### Context
- Mintlify workflows didn't work well — user wanted GitHub Action equivalent
- Watching `daydreamlive` org repos for product releases
- Extended to all 4 solution products

### Steps that worked
1. Read existing fetch scripts for patterns (native Node.js https, config-driven)
2. Multi-repo support via `changelogRepos[]` in product-social-config.json
3. Idempotent append — checks existing entries before adding
4. `--dry-run` flag for safe testing
5. `vars.TEST_BRANCH` / `vars.DEPLOY_BRANCH` in workflow

### Mistakes and fixes
| # | Mistake | Root cause | Fix | Rule |
|---|---|---|---|---|
| 1 | Page rendered nothing after template reset | Truncated page during testing, forgot to regenerate | Re-ran script | Always regenerate after truncating |
| 2 | Link only pointed to scope repo | Hardcoded single repo before multi-repo support | Updated to org root URL | Use org URL when tracking multiple repos |
| 3 | Date lumped with version in green label box | Used `label="Scope: v0.1.9 — March 2026"` | Moved date to `description` prop with styled `<div>` | Keep label short (version only). Date in description. |
| 4 | `description` renders plain text — can't bold | Mintlify renders string `description` as-is | JSX in description: `description={<div style={{...}}>March 2026</div>}` | `description` prop accepts JSX elements |
| 5 | ScrollBox not imported | Added to wrap long changelogs | Added import to template + all pages | Always update template AND regenerate pages |
| 6 | Updated pages but not template | Edited pages directly instead of template first | Template is source of truth — update template, then regenerate | **Template first, pages second.** |

### Styling decisions locked
- `description={<div style={{fontSize: "0.8rem", fontWeight: 700, color: "var(--hero-text)"}}>{date}</div>}`
- `<ScrollBox maxHeight="250px" showHint={true}>`
- `<DoubleIconLink label="View release on GitHub" href={url} iconLeft="github" />`
- `<Tip>` with RSS feed link

---

## Run 3 — 2026-03-26 to 2026-03-27: Blockchain Contract Addresses

### Context
- Contract address pages outdated (BondingManager V11 shown as current, V12+V13 deployed)
- Same content duplicated across 3+ locations with no shared source
- Canonical source: `livepeer/governor-scripts` → `updates/addresses.js`
- Co-design gates: 4 gates, user approves schema/layout before build

### Steps that worked
1. Fetched governor-scripts/addresses.js via GitHub Contents API — parsed JS object with regex
2. Merged with supplement JSON for contracts not tracked by governor-scripts
3. Arbiscan verification using `eth_getCode` — 49/49 verified
4. Minimum count validation (abort if < 20 Arbitrum entries)
5. `.bak` before overwriting data file
6. `--scan-fix` mode for stale address detection in v2/

### Mistakes and fixes
| # | Mistake | Root cause | Fix | Rule |
|---|---|---|---|---|
| 1 | Arbiscan verification: 0/25 verified | Used `getabi` (checks verified source, not contract existence) | Switched to `eth_getCode` (checks bytecode) | **`eth_getCode` for contract existence. `getabi` for source verification.** |
| 2 | Used `.map()` in MDX body | Did not read mintlify-constraints-reference.md | Created JSX component, data passed as prop | **NEVER `.map()` in MDX. All dynamic rendering in JSX components.** |
| 3 | `new Date().toLocaleDateString()` inline in MDX | Same — inline JS in MDX doesn't compile | Removed from MDX | **No complex JS expressions in MDX body.** |
| 4 | Page 404 | File at `v2/resources/references/` — not in docs.json, not in scoped dev tabs | Moved to `v2/about/resources/`, added to docs.json | **Check: (a) in docs.json? (b) in scoped dev tabs?** |
| 5 | Dismissed smoke test errors as Mintlify internals | Partially correct but masked real issues (2-4) | Fix actual issues first, then assess noise | **Fix known issues before dismissing errors as noise.** |
| 6 | Proposed 3 new scripts | Did not check existing scripts first | User caught it. Extended existing scripts instead. | **Always check if existing script can be extended.** |
| 7 | Template used `.map()` in MDX | Did not trace how solutions pages actually work | Read `daydream/community.mdx`: import data, pass to component | **Trace the working pattern before building.** |
| 8 | Skipped reading mintlify-constraints-reference.md | CLAUDE.md says to read it before MDX/JSX work | Read it after failure | **Non-negotiable pre-flight: read constraints reference.** |

### Mintlify rules confirmed (from failures)
1. No `.map()` in MDX — all dynamic rendering in JSX components
2. No `new Date()` or complex expressions in MDX
3. Data imported in MDX, passed to components via props
4. JSX components CAN use `.map()`, `useState` — hooks are globally available
5. Scoped dev only renders specified tabs — file must be in served path

### Pending
- [ ] Visual render verification of `v2/about/resources/contract-addresses`
- [ ] `ContractAddressDisplay.jsx` renders in Mintlify
- [ ] GATE 3: Changelog format co-design
- [ ] GATE 4: Scanner behaviour co-design

---

## Patterns — future skill

### Data automation page recipe
1. Read `mintlify-constraints-reference.md`
2. Read a working page with similar pattern (e.g. `daydream/community.mdx`)
3. Create data file in `snippets/automations/` (ESM export)
4. Create rendering component in `snippets/components/displays/` (handles all `.map()`)
5. MDX page: `import data` + `import Component` + `<Component data={data} />`
6. Add to docs.json
7. Verify render BEFORE declaring done
8. `vars.TEST_BRANCH` / `vars.DEPLOY_BRANCH` in all workflows

### Pre-flight checklist (before writing any MDX page)
- [ ] Read `mintlify-constraints-reference.md`
- [ ] Read a working reference page with similar pattern
- [ ] No `.map()` in MDX body
- [ ] No `new Date()` or complex JS in MDX body
- [ ] All dynamic rendering in JSX components
- [ ] Data imported in MDX, passed as props
- [ ] File path is in docs.json
- [ ] File path is within user's scoped dev tabs
- [ ] Smoke test or visual verify after writing
