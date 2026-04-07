# Scripts — Patterns

> Extracted rules linked to repo context. Apply these when writing any script.

---

## Pattern 1: 11-tag JSDoc header (strict order)

```js
/**
 * @script      script-name
 * @type        audit | generator | validator | remediator | dispatch | automation
 * @concern     content | components | governance | ai
 * @niche       specific-sub-concern
 * @purpose     domain:specific-purpose
 * @description One-line description of what the script does
 * @mode        read-only | generate | write | edit | execute
 * @pipeline    input → transform → output (one line)
 * @scope       directories this script reads/writes
 * @usage       node path/to/script.js [--flags]
 * @policy      constraints (public APIs only, env vars optional, etc.)
 */
```

**Linked to:** `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`

---

## Pattern 2: Type classification test

If a script does not spawn other scripts → NOT a dispatch.
If a script only scans and reports → NOT a remediator.
If a script edits existing files in place → NOT a generator (it's a remediator).

| Type | What it does | @mode |
|---|---|---|
| audit | Read-only scan, measure, report | read-only |
| generator | Produce new files from source data | generate, write |
| validator | Enforce rules with pass/fail gate | read-only |
| remediator | Bulk fix existing files in place | edit |
| dispatch | Spawn child processes, aggregate results | execute |
| automation | End-to-end pipeline (fetch → transform → write) | write, generate |

**Linked to:** `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` → Classification Rules

---

## Pattern 3: Config-driven design

Scripts read from config, not hardcoded values. Adding a new target = config entry, not code change.

```js
// ✅ Config-driven
const CONFIG_PATH = path.join(REPO_ROOT, "operations/scripts/config/product-social-config.json");
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));

// ❌ Hardcoded
const PRODUCTS = ["daydream", "embody", "frameworks"];
```

**Linked to:** `scripts/exemplars.md` → fetch-contract-addresses-v2.js

---

## Pattern 4: CLI flags for operational flexibility

Every script supports at least `--dry-run`. Complex scripts add `--skip-verify`, `--scan-fix`, etc.

```js
const DRY_RUN = process.argv.includes("--dry-run");
const SKIP_VERIFY = process.argv.includes("--skip-verify");
```

**Linked to:** `scripts/exemplars.md` → fetch-contract-addresses-v2.js

---

## Pattern 5: Three-tier placement

```
operations/scripts/<type>/<concern>/<niche>/script-name.js
```

**Linked to:** `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` → Taxonomy

---

## Quick checklist

- [ ] 11-tag JSDoc header in correct order
- [ ] Correct type classification (use the test)
- [ ] Config-driven (no hardcoded targets)
- [ ] --dry-run flag supported
- [ ] @pipeline tag documents data flow in one line
- [ ] @usage shows exact CLI invocation
- [ ] Placed in correct type/concern/niche folder