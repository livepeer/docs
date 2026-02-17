# Merge Plan Quick Reference: merge-docs-v2-tests → docs-v2-preview

**Quick reference guide** - See [full merge plan](./merge-plan-docs-v2-preview.md) for details.

---

## 🎯 Key Decisions

1. **Preserve current branch structure** - Follows README.md (source of truth)
2. **Accept comprehensive README.md** - 532 lines, authoritative
3. **Merge docs.json carefully** - Preserve new product pages
4. **Accept enhanced git hooks** - Better structure enforcement
5. **Add .whitelist** - Structure enforcement
6. **Ignore target's `docs/`** - We use `tasks/` per README.md

---

## ⚠️ Critical Conflicts

| File | Strategy | Priority |
|------|----------|----------|
| `README.md` | Accept current (comprehensive) | 🔴 CRITICAL |
| `docs.json` | Manual merge (preserve new products) | 🔴 CRITICAL |
| `.githooks/pre-commit` | Accept current (enhanced) | 🟠 HIGH |
| `.whitelist` | Accept current (new file) | 🟠 HIGH |
| Directory structure | Keep current (per README.md) | 🟠 HIGH |

---

## 📋 Quick Merge Steps

```bash
# 1. Backup
git branch backup-before-merge-$(date +%Y%m%d-%H%M%S)

# 2. Start merge
git checkout -b merge-to-docs-v2-preview
git merge origin/docs-v2-preview --no-commit --no-ff

# 3. Resolve critical files
git checkout --ours README.md
git checkout --ours .githooks/pre-commit
git checkout --ours .whitelist
# Manual merge: docs.json

# 4. Verify structure
.githooks/pre-commit

# 5. Commit
git add -A
git commit -m "Merge docs-v2-preview: preserve structure, merge content"
```

---

## ✅ Post-Merge Checklist

- [ ] `.whitelist` exists
- [ ] `tools/scripts/` has all scripts (none at root)
- [ ] `api/` has all API specs
- [ ] `ai-tools/` at root (not in v2/)
- [ ] `tasks/plan/` exists (lowercase)
- [ ] `README.md` is comprehensive (532+ lines)
- [ ] `docs.json` is valid JSON
- [ ] Pre-commit hooks pass
- [ ] Navigation works
- [ ] New product pages accessible

---

## 🚨 Rollback

```bash
git merge --abort  # If not committed
# OR
git reset --hard backup-before-merge-YYYYMMDD-HHMMSS
```

---

**See full plan:** [merge-plan-docs-v2-preview.md](./merge-plan-docs-v2-preview.md)
