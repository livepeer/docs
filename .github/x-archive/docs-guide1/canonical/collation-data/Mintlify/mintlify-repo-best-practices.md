# Canonical Mintlify and Repo Best Practices

Status:
- Scope: all MDX/JSX authoring, local preview, routing, publishability, and agent guidance for this repo.
- Collated: 2026-04-03.
- Canonical intent: this is the stable operational reference for Mintlify behaviour and repo-specific best practice.

Superseded as first-read operational guidance:
- `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/thread-outputs/research/mintlify-constraints-reference.md`
- `docs-guide/canonical/collation-data/Mintlify/dep-files/snippets/snippetsWiki/mintlify-behaviour.mdx`

Those files still matter as supporting evidence and historical discovery notes. If they conflict with this document, this document wins unless runtime code or a validator proves otherwise.

## Authority Order

Use Mintlify guidance in this order:

1. Runtime and config surfaces: `docs.json`, `.mintignore`, `style.css`, `tools/lpd`, `tools/dev/*`, `.githooks/*`.
2. Enforcement surfaces: `operations/tests/**`, `operations/scripts/validators/**`, `operations/scripts/config/docs-path-sync.js`, and the Mintlify sync-gate registry under `docs-guide/canonical/collation-data/Mintlify/`.
3. Canonical governance and internal docs: `docs-guide/**`, including this file and `docs-guide/policies/governance-index.mdx`.
4. Skill and agent instruction surfaces: `AGENTS.md`, `.github/AGENTS.md`, `.claude/CLAUDE.md`, `ai-tools/ai-skills/**`.
5. Historical research and legacy notes: `docs-guide/canonical/collation-data/Mintlify/dep-files/**`, archives, translations, and deprecated docs.

If runtime behaviour changes, update this file and the relevant agent/skill surfaces in the same change.

## What Mintlify Means In This Repo

- `docs.json` is the routing and navigation source of truth for published docs.
- `.mintignore` is the publishability exclusion surface for files that must exist in the repo but must not ship.
- `style.css` is the repo-level theme and CSS custom property source.
- `tools/lpd` and `docs-guide/tooling/lpd-cli.mdx` define the governed local development entrypoint.
- `v2/**` is the current routed docs surface.
- `snippets/**` is the shared component, data, asset, automation, and MDX-composition surface.
- `docs-guide/**` is internal repo guidance, governance, and tooling documentation.

Do not treat `_workspace`, `x-deprecated`, archived language folders, or `v1/**` as current authoring targets unless the task explicitly requires them.

## Local Development Best Practice

- Use `bash lpd setup --yes` for first-time setup.
- Run `lpd doctor` before deeper troubleshooting.
- Prefer scoped preview for normal work:
  - `lpd dev --scoped --scope-list`
  - `lpd dev --scoped --scope-tab <Tab>`
  - `lpd dev --scoped --scope-prefix <path>`
- Use `lpd dev` as the default launcher instead of ad-hoc Mint commands.
- Agent sessions must not use port `3333` via `lpd dev`, and must not use port `3000` for direct Mint preview runs.

## Routing and Publishability Rules

- `docs.json` alone decides whether a page is routed and where it appears in nav.
- Imported child MDX files used for MDX-in-MDX composition must not also be routed in `docs.json`.
- If a file move changes a routed path, update every dependent route, reference, validator, and generator in the same change.
- Use `.mintignore` for repo-kept but non-publishable files. Do not rely on “people just know this is internal”.
- Keep public page reality in `v2/**`; keep working notes, audits, and archive material outside routed docs surfaces.

## Import and Composition Rules

- Do not import `React` or React hooks. Mintlify provides hooks globally.
- Do not import Mintlify platform globals such as `Card`, `Tabs`, `Accordion`, `Steps`, `Badge`, `Icon`, and similar built-ins.
- Include file extensions in local imports.
- Use root-absolute imports for shared repo resources, especially anything under `snippets/**`.
- Relative imports are acceptable for tightly colocated page-local files such as `./views/*`, `./groups/*`, or `./components/*` inside one route folder. Do not use relative imports for shared cross-repo resources when a root-absolute path is clearer.
- For MDX-facing JSX components, import data in the parent MDX and pass it by props or MDX scope. Do not make new components depend on imported data/constants inside the JSX file itself.
- JSX-to-JSX component imports can work, but they are not the safe default. Use them only for rendering components with a proven working repo pattern. Do not use them for shared data/constants.

## JSX and MDX Safety Rules

- Use arrow-function exports in JSX snippets and components.
- Do not define reusable constants at file scope inside MDX-facing JSX files if exported components depend on them. Define them inside the exported function body or import them from a non-component helper module.
- Keep MDX child files self-contained when possible.
- When parent and child MDX share scope, avoid duplicate imports.
- If a child MDX uses direct JSX interpolation like `{value}`, do not assume parent-scope inheritance will work. Import locally when needed.

## Styling Rules

- Use CSS custom properties from `style.css` for colours, spacing, radius, typography, and shared theme values.
- `ThemeData` is deprecated and must not be introduced.
- Do not use inline styles in MDX pages.
- In JSX components, inline style objects are acceptable only when the value is component-local or runtime-dynamic and there is no cleaner governed component/API path. Keep those style objects inside the export body and use CSS custom properties instead of hardcoded theme values.
- Do not introduce hardcoded hex colours or ad-hoc theme tokens when an existing CSS variable already covers the use case.
- Tailwind may be available in Mintlify, but it is not the canonical repo styling system here. The repo standard remains governed components plus CSS custom properties until governance docs explicitly change.

## Static Content, Data, and AI Discoverability

- Mintlify is a client-rendered docs platform, but search and AI crawlers are most reliable on static MDX content and precompiled data.
- Important canonical facts must exist in static MDX or prebuilt repo data that renders at load time.
- Client-side `useEffect` fetching can support interactive enhancements, but it must not be the only place a critical fact exists.

## Frontmatter and Data Safety

- Quote hex strings, addresses, IDs, and other values that look numeric in YAML frontmatter.
- Do not rely on YAML coercion for values that must remain strings.
- Keep frontmatter aligned to the repo taxonomy and validation rules used by `tools/lib/docs/frontmatter-taxonomy.js` and the MDX/style tests.

## Validation Baseline

Run the smallest relevant check set for the change:

- `lpd test --staged` for normal staged work.
- `node operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js --json` when this file, the routed Mintlify companion, the Mintlify registry, or a registered Mintlify consumer changes.
- `node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json` for agent-doc or governance-surface edits.
- `node operations/tests/unit/mdx.test.js --staged` for MDX validity.
- `node operations/tests/unit/style-guide.test.js --staged` for style-guide compliance.
- `node operations/tests/integration/mdx-component-runtime-smoke.js --routes <route>` for render-risk MDX/JSX changes.

If a validator and this document disagree, fix the document or the code. Do not keep both.

## Sync Gate

If this canonical file changes, update its direct consumer surfaces in the same change.

- Dependency registry: `docs-guide/canonical/collation-data/Mintlify/mintlify-canonical-consumers.json`
- Validator: `operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js`
- Remediator: `operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js`
- Shared library: `operations/scripts/config/mintlify-canonical-sync.js`
- Unit test: `operations/tests/unit/check-mintlify-canonical-sync.test.js`

The registry is the machine-readable contract for which files must cite this canonical page directly, which public docs must point at the routed wrapper, which legacy files were archived under `dep-files/`, and which retained source surfaces still stay live after cleanup.

## Resolved Contradictions

| Topic | Canonical answer | Legacy drift to ignore |
|---|---|---|
| Relative imports | Use root-absolute imports for shared resources; page-local relative imports are acceptable for colocated route files. | Blanket claims that all relative imports are forbidden or that all relative imports are equally good. |
| JSX nested imports | JSX may import rendering components in limited proven cases. Do not import shared data/constants into MDX-facing JSX. | Blanket claims that all JSX-to-JSX imports fail, or that any nested import pattern is safe. |
| Inline styles | No inline styles in MDX. In JSX, limited component-local dynamic inline styles are acceptable if they use CSS variables and stay inside the export body. | Claims that inline styles are always fine, or that all JSX inline styling must be banned equally. |
| Tailwind | Availability is not the same as repo standard. Governed CSS-variable styling remains canonical. | Claims that Tailwind support means the repo has adopted Tailwind. |
| Mintlify behaviour references | This file is the operational canonical source. | Treating archived discovery notes or thread research packets as the first-read rulebook. |

## Read With This File

- `AGENTS.md`
- `.github/AGENTS.md`
- `.claude/CLAUDE.md`
- `docs-guide/policies/governance-index.mdx`
- `ai-tools/ai-skills/page-authoring/SKILL.md`
- `workspace/thread-outputs/research/component-script-placement-reference.md`

## Legacy and Drift Notes

- `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/thread-outputs/research/mintlify-constraints-reference.md` remains the best supporting research packet and evidence snapshot, but it is a research output, not the stable repo contract.
- `docs-guide/canonical/collation-data/Mintlify/dep-files/snippets/snippetsWiki/mintlify-behaviour.mdx` contains useful discovery history and examples, but some guidance is hypothesis-led, overly broad, or superseded by later repo evidence.
- Archived language pages and deprecated docs preserve older Mintlify guidance that should not be used as current repo instruction.
