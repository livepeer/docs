# Changelog Pipeline — Thread Brief

> For the new changelog thread. VERIFY EVERYTHING before acting — do not trust this brief blindly.

---

## Outcome

Finish the changelog pipeline: delete legacy workflow, fix resource format, add all repos, create shell pages in Resource Hub.

**Contracts page is a separate thread. Do not touch contracts here.**

---

## What to verify first

Before doing anything, confirm each of these against the actual repo:

### 1. Scripts
- [ ] `operations/scripts/generators/generate-changelog.js` exists and is the unified script
- [ ] `operations/scripts/generators/generate-solutions-changelog.js` exists and is the LEGACY script to delete
- [ ] Read both — confirm generate-changelog.js replaces generate-solutions-changelog.js fully

### 2. Config
- [ ] `operations/scripts/config/product-social-config.json` — read the `changelogs` section
- [ ] Count how many targets are registered
- [ ] For each target: confirm the GitHub/GitLab repo URL is valid, mode (releases/commits) is correct

### 3. Workflows
- [ ] `.github/workflows/update-changelogs.yml` exists and is the active workflow
- [ ] `.github/workflows/update-solutions-changelog.yml` exists and is the legacy workflow to delete
- [ ] Confirm both run on Monday — deletion is URGENT to prevent double-run conflict
- [ ] Read both — confirm update-changelogs.yml covers everything update-solutions-changelog.yml did

### 4. Existing pages
- [ ] List every file in `v2/resources/changelog/` — read first 20 lines of each
- [ ] List every file matching `v2/solutions/*/changelog.mdx` — confirm these are done
- [ ] For each shell page: what's actually in it? Frontmatter only? Any content?

### 5. Architecture plan
- [ ] `workspace/plan/active/CHANGELOG-PIPELINE/architecture.md` — read it
- [ ] Note phases CP-A through CP-H — which are done, which remain

---

## Tasks (in order)

### URGENT — Before Monday
1. Delete `operations/scripts/generators/generate-solutions-changelog.js`
2. Delete `.github/workflows/update-solutions-changelog.yml`
3. Verify `update-changelogs.yml` covers all solutions targets

### Batch — Resource Hub changelogs
4. Fix resource changelog page format to match solutions template
5. Add these repos to `product-social-config.json` changelogs section:
   - explorer (releases)
   - go-livepeer (releases)
   - docs (commits, docs-v2 branch)
   - ai-runner (NEW — verify repo exists: livepeer/ai-runner or similar)
   - pytrickle (NEW — verify repo exists)
   - subgraph (verify repo exists)
   - livepeer-python-gateway (NEW — verify repo exists)
   - protocol (verify repo exists)
   - website (NEW — Adam's repo, verify name and org)
   - LIPs (commits mode — no releases currently)
   - livepeer-python (SDK, not actively maintained — verify repo)
   - livepeer-js (SDK, not actively maintained — verify repo)
   - Studio (already in solutions — add to resources too? or just link?)
   - NaaP (maybe too new — verify repo exists and has releases)
6. Create shell MDX pages in `v2/resources/changelog/` for each new repo
7. Test `generate-changelog.js` dry-run on one new target before batch

### Verify
8. Run `generate-changelog.js --dry-run` on all new targets
9. Confirm `update-changelogs.yml` picks up new targets from config

---

## Key files

| File | Purpose |
|---|---|
| `operations/scripts/generators/generate-changelog.js` | Unified changelog generator |
| `operations/scripts/generators/generate-solutions-changelog.js` | LEGACY — delete |
| `operations/scripts/config/product-social-config.json` | Config registry for all targets |
| `.github/workflows/update-changelogs.yml` | Active weekly workflow |
| `.github/workflows/update-solutions-changelog.yml` | LEGACY — delete |
| `v2/resources/changelog/` | Resource Hub changelog pages |
| `v2/solutions/*/changelog.mdx` | Solutions changelogs (done) |
| `workspace/plan/active/CHANGELOG-PIPELINE/architecture.md` | Full architecture plan |

---

## Do not

- Touch contract-addresses or blockchain-contracts — separate thread
- Regenerate solutions changelogs — they're done
- Build new scripts — use what exists
- Assume any repo name/URL is correct — verify each one against github.com/livepeer
