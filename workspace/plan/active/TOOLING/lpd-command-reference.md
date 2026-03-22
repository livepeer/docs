lpd — Command Reference
Version: 0.2.0

Global flag: lpd --json <command> — enables JSON envelope output for any command.

Fallback form: bash lpd <command> when not on PATH.

Discovery
Command What it does
lpd help Print full command reference with examples
lpd info Show command groups and common workflow recipes
lpd version [--json] Print CLI version
Setup & Health
lpd setup — Bootstrap the local repo environment.

Installs tools and operations/tests dependencies, refreshes git hooks, optionally installs Mintlify globally, optionally wires lpd onto PATH, and syncs the agentic-project-management-orchestrator skill to Codex.

bash lpd setup --yes # non-interactive, all defaults
bash lpd setup --no-tests --no-cli # skip test deps + PATH install
bash lpd setup --with-mintlify # also run npm i -g mintlify
bash lpd setup --no-codex-skills # skip skill sync
Flag Effect
--yes Non-interactive — accept all defaults
--no-tools Skip tools npm install
--no-tests Skip operations/tests npm install
--no-hooks Skip hook install
--with-mintlify Install Mintlify globally
--no-cli Skip PATH wiring
--no-codex-skills Skip Codex planner skill sync
lpd doctor — Check whether your environment and repo are ready.

Checks: git context, Node, Mint, tools/node_modules, operations/tests/node_modules, hook sync state.

lpd doctor
lpd doctor --strict # exit non-zero on any warning
lpd --json doctor
Local Development
lpd dev — Run the local Mint docs dev launcher.

Defaults to port 3333. Rejects port 3000. Installs/refreshes pre-commit hooks before starting.

lpd dev
lpd dev -- --port 3333
lpd dev --test --test-mode staged
lpd dev --scoped --scope-prefix v2/orchestrators
lpd dev --scoped --scope-tab Developers
lpd dev --scoped --docs-config docs-gate-work.json
lpd dev --dry-run --scoped --scope-prefix v2/gateways
Flag Effect
--test Run advisory tests before launching server
--test-mode fast|staged|full Which test mode to run with --test
--script <path> Override launcher script (default: tools/dev/mint-dev.sh)
--scoped Generate a reduced dev-only Mint profile
--docs-config <path> Use an alternate docs config as the scoped source
--scope-file <path> Load scope filters from JSON
--scope-version <csv> Limit to specific versions
--scope-language <csv> Limit to specific languages
--scope-tab <csv> Limit to specific tabs
--scope-prefix <csv> Limit by route prefix
--scope-interactive Choose scope filters interactively
--skip-external-fetch Set MINT_SKIP_EXTERNAL_FETCH=1
--disable-openapi Exclude OpenAPI routes from scoped profile
-- <args> Pass remaining args directly to Mint
lpd mint dev — Alias for lpd dev. Same flags.

Testing & CI
lpd test — Run the test suite with optional integration checks.

lpd test --staged # staged files only
lpd test --full # full suite
lpd test --browser # add browser integration
lpd test --staged --wcag # staged tests + WCAG audit
lpd test --full --link-audit-external # full + external link audit
Flag Effect
--staged Scope to staged files only
--full Run full suite
--browser Run browser integration test
--domain v1|v2|both Domain pages audit scope
--wcag Run WCAG audit (autofixes enabled)
--wcag-no-fix Run WCAG audit without autofixes
--link-audit-external Include external URL checks in link audit
--base-url URL Override base URL for domain/browser checks
lpd ci — Run CI-like validation locally (mirrors what runs in GitHub Actions).

lpd ci
lpd ci --skip-browser
lpd ci --base-url http://localhost:3333
Content Operations
lpd move-page <old> <new> — Move a docs page with git mv and run governed docs-path sync (updates docs.json references).

lpd move-page v2/orchestrators/setup/old.mdx v2/orchestrators/guides/new.mdx --check
lpd move-page v2/orchestrators/setup/old.mdx v2/orchestrators/guides/new.mdx --yes
Flag Effect
--check Dry-run — show what would change without moving
--yes Auto-confirm the move
--no-stage Do not git add rewritten files after move
lpd ai-sitemap — Generate or validate sitemap-ai.xml.

lpd ai-sitemap --check # verify it's current
lpd ai-sitemap --write # regenerate it
lpd repair — Run a governed surface repair flow through a deterministic entrypoint.

Surfaces apply bounded fixes to specific domains. Default mode is --check (no writes).

lpd repair --surface script-governance --write --staged
lpd repair --surface component-governance --full --write
lpd repair --surface frontmatter-contract --staged # check-only surface
Flag Effect
--surface <id> Required. Which governed surface to repair
--staged Scope to staged files (default)
--files <csv> Scope to specific file paths
--full Scope to full repo
--write Apply fixes (default is check-only)
--stage Apply fixes + git add outputs (implies --write)
Surfaces:

Surface What it repairs
portable-skills Exports and re-syncs portable skill bundles
docs-guide-generated Regenerates docs-guide index pages
ui-templates Regenerates UI template files
script-governance Repairs script metadata drift (JSDoc headers, registry)
component-governance Repairs component metadata and registry
frontmatter-contract Checks frontmatter compliance (check-only — no writer)
Hooks
lpd hooks — Manage .githooks or run hook scripts directly.

lpd hooks install # install/refresh .git/hooks/pre-commit
lpd hooks status # check installed hook vs source
lpd hooks verify # verify hook is installed and executable
lpd hooks info # describe what the hook checks
lpd hooks verify-browser --dry-run # run a hook script directly
Script Runner
lpd scripts list — Discover managed scripts.

lpd scripts list
lpd scripts list --group tools
lpd scripts list --group tests
lpd scripts list --show-ignored
Groups: tools, workspace, tasks (alias for workspace), tests, v2, hooks

lpd scripts run <group> <tokens> — Resolve and execute a managed script.

lpd scripts run tools generate-ai-sitemap
lpd scripts run workspace run-audit --dry-run
lpd scripts run tests unit mdx.test -- --help
Flag Effect
--dry-run Print the resolved command without running it
--yes Skip confirmation for high-risk script groups
-- <args> Pass remaining args to the script
Shorthands — lpd <group> <tokens> expands to lpd scripts run <group> <tokens>.

lpd tools generate-ai-sitemap
lpd tools dev test-add-callouts -- --help
lpd tests unit mdx.test
lpd workspace run-audit
lpd tasks run-audit # legacy alias for workspace
lpd v2 ensure-mint-watcher-patch
