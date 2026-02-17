# 🤖 PROJECT AGENT RULES & SAFETY PROTOCOLS

## 🛠️ CRITICAL BOUNDARIES (READ FIRST)

- **ALWAYS** check for the existence of local Git hooks in `.git/hooks/` before
  initiating a write command.
- **NEVER** use `--no-verify` or `-n` flags to bypass safety checks. These are
  hard project constraints.
- **NEVER** perform a `git reset --hard` or `git push --force` without an
  explicit, multi-turn plan confirmed by the user.
- **NEVER** perform a `git reset --hard` or `git push --force` without a saved
  branch to revert to in case of failure.

## 📦 GIT WORKFLOW & CHECKPOINTS

This project enforces a "Human-in-the-Loop" (HitL) verification for all
destructive or history-altering actions.

- **Automatic Checkpoints:** Every `commit`, `push`, and `rebase` triggers a
  safety hook that creates a branch named `checkpoint/YYYY-MM-DD_HHMMSS`.
- **Pre-Write Announcement:** Before executing a write command, you MUST state:
  _"I am initiating [COMMAND]. A safety checkpoint will be created. Please
  switch to your terminal to type 'yes' when prompted."_
- **Recovery:** If a command fails, the latest pre-failure state is stored in
  the most recent `checkpoint/` branch.

## 📁 REPOSITORY STRUCTURE RULES

**⚠️ MANDATORY: Read Structure Rules Before Creating/Moving Files**

**BEFORE creating, moving, or organizing files, you MUST read:**
- `contribute/STRUCTURE.md` - Complete repository structure rules (if exists)
- `tasks/plan/migration-plan.md` - Detailed structure documentation (Section 4)

### Critical Structure Rules

1. **Root Directory** - Only essential files allowed:
   - ✅ Allowed: `docs.json`, `package.json`, `README.md`, `LICENSE`, `Dockerfile`, `Makefile`, `style.css`, `.gitignore`, `.mintignore`, `.whitelist`
   - ❌ Forbidden: Scripts, config files, documentation files, temporary files, OpenAPI specs
   - **CRITICAL:** Mintlify only allows ONE CSS file (`style.css`) at root - NO `styles/` folder

2. **File Locations** - Files must be in correct directories:
   - Scripts → `tools/scripts/` (organized by purpose: audit/, generate/, test/, verify/, fetch/)
   - Config files → `tools/config/` **EXCEPT**:
     - `.prettierrc.yaml` → **ROOT** (Prettier convention)
   - `.speakeasy/` → `tools/config/.speakeasy/` (Speakeasy API docs tool config)
   - AI guidelines → `tools/ai-rules/`
   - Public assets → `snippets/assets/` (favicon.png, logo/ in snippets/assets/ - referenced in docs.json)
   - OpenAPI specs → `api/` (consolidated)
   - Contribution docs → `contribute/`
   - Documentation → `docs/v1/` (FROZEN) or `docs/v2/pages/` (active)

3. **Snippets Directory** - MUST follow Mintlify conventions:
   - ✅ Required: `snippets/pages/` (for MDX-in-MDX pattern)
   - ✅ Allowed: `components/`, `data/`, `assets/`, `automations/`, `generated/`
   - ❌ Forbidden: Scripts (→ `tools/scripts/`), wiki/docs (→ `tools/wiki/`), styles (→ root `style.css` only)
   - ✅ All imports must be absolute paths from root: `/snippets/components/...`
   - ❌ Components cannot import other components

4. **Enforcement** - Structure is enforced:
   - `.whitelist` file lists allowed root files/directories
   - Pre-commit hook blocks unauthorized root files/directories
   - Always check structure rules before creating new files

## 🧪 VALIDATION COMMANDS

Before asking for a commit, you should ideally run these to ensure code quality:

```bash
# Verify build
mint dev
```

# Run local test suite

Make a test for mintlify in the v2/tests file. DO NOT EVER run a script without
testing it on a local branch first.
