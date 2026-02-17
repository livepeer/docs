# Task 19: Automate Snippets Inventory Generation

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/19-automate-snippets-inventory` |
| **First step** | Create the branch: `git checkout -b docs-plan/19-automate-snippets-inventory` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/19-automate-snippets-inventory-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: 
1. **MANDATORY: Read the Style Guide** - `v2/pages/07_resources/documentation-guide/style-guide.mdx`
2. Run the first step (create branch), then perform the task.

On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Automate the generation of the snippets inventory page (`v2/pages/07_resources/documentation-guide/snippets-inventory.mdx`) to keep it up-to-date with changes to the snippets folder structure.

## Scope

- All directories in `snippets/`:
  - `components/` - React/JSX components
  - `data/` - Data files (JSX, MDX)
  - `pages/` - Modular MDX content
  - `scripts/` - Automation scripts
  - `automations/` - Data fetching automation files
  - `assets/` - Images, logos, media files
  - `styles/` - Styling definitions
  - `snippetsWiki/` - Internal documentation

## Deliverables

1. **Script** - `snippets/scripts/generate-snippets-inventory.sh` that:
   - Scans all directories in `snippets/`
   - Generates categorized file listings with descriptions
   - Includes file counts and metadata
   - Generates markdown with Tree components where appropriate
   - Updates `v2/pages/07_resources/documentation-guide/snippets-inventory.mdx`

2. **Documentation** - Update script README with usage instructions

3. **Testing** - Verify script generates accurate inventory matching current structure

## Implementation Options

### Option 1: Extend Existing Script (Recommended)

Extend `snippets/scripts/update-component-library.sh` to generate a complete inventory:

**Enhancements:**
1. Add sections for data, pages, scripts, automations, assets, styles, snippetsWiki
2. Include file counts and descriptions
3. Generate markdown tables with file details
4. Add last-modified timestamps (optional)
5. Use Tree components for visual structure

**Implementation:**
```bash
# Add to update-component-library.sh or create new functions
generate_data_section() {
  echo "## Data Files"
  find "$REPO_ROOT/snippets/data" -type f \( -name "*.jsx" -o -name "*.mdx" -o -name "*.json" \) | while read file; do
    echo "- $(basename "$file") - [description]"
  done
}
```

### Option 2: Create New Comprehensive Script

Create `snippets/scripts/generate-snippets-inventory.sh`:

**Features:**
- Scan all directories in `snippets/`
- Generate categorized file listings
- Include file sizes and line counts (optional)
- Generate markdown with Tree components
- Update `v2/pages/07_resources/documentation-guide/snippets-inventory.mdx` automatically
- Preserve frontmatter and manual sections
- Use `paths.config.json` for path configuration (like existing script)

**Script Structure:**
```bash
#!/bin/bash
# Auto-updates v2/pages/07_resources/documentation-guide/snippets-inventory.mdx
# Run this script after changes to snippets/ folder structure

# 1. Read paths from paths.config.json
# 2. Generate frontmatter
# 3. Generate each section (components, data, pages, scripts, etc.)
# 4. Generate usage patterns section
# 5. Generate automation section (current state only)
# 6. Generate related resources section
# 7. Write to output file
```

### Option 3: GitHub Actions Automation

Set up GitHub Actions to auto-update on changes to `snippets/`:

**Workflow:**
```yaml
name: Update Snippets Inventory
on:
  push:
    paths:
      - 'snippets/**'
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate Inventory
        run: ./snippets/scripts/generate-snippets-inventory.sh
      - name: Commit Changes
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add v2/pages/07_resources/documentation-guide/snippets-inventory.mdx
          git commit -m "Auto-update snippets inventory" || exit 0
          git push
```

## Recommended Implementation Approach

### Phase 1: Manual Script (Required)

1. Create `generate-snippets-inventory.sh` script
2. Generate complete inventory with all sections:
   - Components (by category: primitives, layout, display, content, integrations, domain)
   - Data files
   - Page modules
   - Scripts
   - Automations
   - Assets (summary only - don't list all 100+ files)
   - Styles
   - SnippetsWiki
3. Include file descriptions where known (from READMEs)
4. Test and refine output format
5. Ensure script preserves frontmatter and manual sections

### Phase 2: Pre-commit Hook (Optional)

1. Add pre-commit hook to run script
2. Auto-update inventory before commits
3. Ensure inventory stays current

### Phase 3: CI/CD Integration (Optional)

1. Add GitHub Actions workflow
2. Auto-update on changes to `snippets/`
3. Create PR with updates if needed (or commit directly to branch)

## Requirements

### Script Requirements

- Must use `paths.config.json` for path configuration (consistent with existing scripts)
- Must preserve frontmatter in output file
- Must preserve manual sections (Usage Patterns, Related Resources)
- Must generate accurate file listings
- Must handle nested directories (e.g., `components/domain/04_GATEWAYS/`)
- Must exclude `examples/` folders and other non-production directories
- Must be idempotent (can run multiple times safely)

### Output Requirements

- Maintain current page structure and sections
- Generate accurate file counts
- Include file descriptions where available
- Use consistent formatting
- Preserve manual content sections

## References

- `snippets/scripts/update-component-library.sh` - Existing automation script pattern
- `snippets/scripts/paths.config.json` - Path configuration
- `v2/pages/07_resources/documentation-guide/snippets-inventory.mdx` - Target output file
- `snippets/components/README.md` - Component descriptions
- `snippets/README.md` - Snippets folder overview

## Testing

1. Run script and verify output matches current structure
2. Make a test change to snippets folder
3. Run script again and verify it updates correctly
4. Check that frontmatter and manual sections are preserved
5. Verify file counts are accurate
6. Test with pre-commit hook (if implemented)
7. Test with GitHub Actions (if implemented)

## Success Criteria

- [ ] Script generates complete inventory matching current structure
- [ ] Script preserves frontmatter and manual sections
- [ ] Script can be run manually and produces correct output
- [ ] File listings are accurate and up-to-date
- [ ] Script documentation is clear and complete
- [ ] (Optional) Pre-commit hook works correctly
- [ ] (Optional) GitHub Actions workflow works correctly
