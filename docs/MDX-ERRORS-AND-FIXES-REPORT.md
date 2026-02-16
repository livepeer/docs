# MDX Errors and Fixes Report

Generated from `mint validate` (Mintlify). Exit code 1 = build validation failed.

---

## 1. Parsing errors (block build)

These cause the validator to fail. Fix or exclude the paths.

| # | File | Location | Error | Suggested fix |
|---|------|----------|--------|----------------|
| 1 | `docs/ABOUT/CONTEXT DATA/Protocol/deep-research-report (1).md` | 178:91 | Unexpected character `5` (U+0035) before name | In JSX/HTML, a digit can't start a tag or attribute name. Find `5` at col 91 (e.g. `<...5` or `"…5`) and escape or rephrase (e.g. wrap in backticks or use `{'5'}` in MDX). |
| 2 | `docs/ABOUT/CONTEXT DATA/Protocol/deep-research-report.md` | 77:118 | Unexpected character `5` (U+0035) before name | Same as above: locate col 118 on line 77, fix invalid JSX/HTML or escape the character. |
| 3 | `snippets/data/gateways/code.jsx` | 2:1 | SyntaxError: Unexpected token | **Cause:** Git merge conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) left in file. Resolve conflicts and remove markers. |
| 4 | `snippets/data/gateways/flags.jsx` | 1:1 | SyntaxError: Unexpected token | **Cause:** Same – merge conflict markers at top of file. Resolve and remove. |
| 5 | `snippets/data/gateways/index.jsx` | 12:0 | SyntaxError: Unexpected token | **Cause:** Likely merge conflict markers or invalid token. Resolve conflicts. |
| 6 | `snippets/data/gateways/quickstart.jsx` | 123:1 | SyntaxError: Unexpected token | **Cause:** Likely merge conflict markers around line 123. Resolve conflicts. |
| 7 | `v2/pages/01_about/_contextData_/deep-research-report (IA).md` | 77:118 | Unexpected character `5` (U+0035) before name | Same as #1/#2. |
| 8 | `v2/pages/01_about/_contextData_/deep-research-report.md` | 227:359 | Unexpected character `5` (U+0035) before name | Same; check line 227, col 359. |
| 9 | `v2/pages/01_about/_contextData_/protocol-frameworks-report.mdx.md` | 200:23 | Could not parse expression with acorn | Invalid JS expression in `{ }`. Fix or remove the expression at line 200. |
| 10 | `v2/pages/03_developers/builder-opportunities/dev-programs.mdx` | 32:1 | Expected a closing tag for `<>` | Add closing `</>` for the fragment that opens at 32:1. |
| 11 | `v2/pages/03_developers/building-on-livepeer/developer-guide.mdx` | 22:1 | Expected a closing tag for `<iframe>` | Add `</iframe>` or use self-closing if supported; ensure iframe is properly closed. |

---

## 2. Import / file warnings

| File / import | Issue | Suggested fix |
|----------------|--------|----------------|
| `react` in CardCarousel.jsx, HeroGif.jsx | Invalid import path; only local imports supported | Mintlify often provides React in the build; try `import React from 'react'` or rely on global. If validator is strict, consider wrapping in a local wrapper component. |
| `mintlify/components` in quote.jsx | Only local imports supported | Use Mintlify's recommended way to use their components (or a local re-export if available). |
| `/snippets/components/display/frame.jsx` | Could not find file (imported from quote.jsx) | Create the file or update quote.jsx to import from the correct path / remove dependency. |
| `/snippets/external/whitepaper.mdx` | Could not find (livepeer-whitepaper.mdx) | Add the file or change livepeer-whitepaper.mdx to embed/link content another way. |
| `/snippets/external/awesome-livepeer-readme.mdx` | Could not find (awesome-livepeer.mdx) | Add file or fix import path. |
| `/snippets/external/wiki-readme.mdx` | Could not find (wiki.mdx) | Add file or fix import path. |
| `/snippets/data/gateways/code.jsx`, `flags.jsx` | Could not find (quickstart-a-gateway.mdx) | Path may be wrong or files excluded; fix path or add files. |
| `/snippets/components/domain/SHARED/dividers.jsx` | Could not find (blockchain-contracts.mdx) | Create dividers.jsx or use `CustomDivider` from primitives/divider.jsx (already used elsewhere). |
| `/snippets/external/box-additional-config.mdx` | Could not find (dual-configuration.mdx) | Add file or fix import. |
| `/snippets/automationData/globals/globals.jsx` | Could not find (windows-install, linux-install) | Add globals.jsx or remove/update imports. |
| `snippets/components/primitives/links.jsx` in overview.mdx | Invalid path; only local imports supported | Use leading slash: `/snippets/components/primitives/links.jsx`. |
| `/snippets/external/gwid-readme.mdx` | Could not find (community-projects.mdx) | Add file or fix import. |

---

## 3. Navigation (docs.json) – missing pages

References in `docs.json` that point to non-existent files. Fix by creating the missing page or removing/updating the nav entry.

### Developers (03_developers)

- `v2/pages/03_developers/building-on-livepeer` (group/page)
- `v2/pages/03_developers/building-on-livepeer/developer-guide`
- `v2/pages/03_developers/livepeer-real-time-video/video-streaming-on-livepeer/README.mdx`
- `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/overview`
- `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/byoc`
- `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/comfystream`
- `v2/pages/03_developers/builder-opportunities/dev-programs`
- `v2/pages/03_developers/technical-references-sdks.-and-apis/sdks`
- `v2/pages/03_developers/technical-references-sdks.-and-apis/apis`

### Gateways (04_gateways)

- `v2/pages/04_gateways/run-a-gateway/quickstart-a-gateway`
- `v2/pages/04_gateways/run-a-gateway/get-AI-to-setup-the-gateway`
- `v2/pages/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx`
- `v2/pages/04_gateways/run-a-gateway/test/test-gateway`
- `v2/pages/04_gateways/run-a-gateway/test/publish-content`
- `v2/pages/04_gateways/run-a-gateway/test/playback-content`
- `v2/pages/04_gateways/references/video-flags`
- `v2/pages/04_gateways/using-gateways/gateway-providers/streamplace`

### Orchestrators (05_orchestrators)

- `v2/pages/05_orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer`
- `v2/pages/05_orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers` (multiple refs)

### Community (02_community)

- `v2/pages/02_community/livepeer-community/trending-test`
- `v2/pages/02_community/livepeer-community/media-kit`
- `v2/pages/02_community/livepeer-community/latest-topics`

### Resources (07_resources)

- `v2/pages/07_resources/redirect` (multiple)
- `v2/pages/07_resources/concepts/livepeer-core-concepts`
- `v2/pages/07_resources/concepts/livepeer-actors`
- `v2/pages/07_resources/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory`
- `v2/pages/07_resources/changelog/migration-guides`

### Home (00_home)

- `v2/pages/00_home/changelog/changelog`
- `v2/pages/00_home/changelog/migration-guide`

### Products (010_products)

- `v2/pages/010_products/products/streamplace/streamplace-funding`

### Help (08_help)

- `v2/pages/08_help/redirect`

### AI / other

- `ai/contributors/coming-soon` (multiple)
- `" "` (empty or space-only nav entry – remove or fix in docs.json)

---

## 4. Quick-fix checklist

**Done:**

- **.mintignore added** — `docs/ABOUT/CONTEXT DATA/` and `v2/pages/01_about/_contextData_/` excluded (8 parsing errors removed).
- **dev-programs.mdx** — Removed unclosed `<>` fragment; replaced with placeholder text.
- **developer-guide.mdx** — Iframe closed with `/>`.
- **overview.mdx** — Import path fixed to `/snippets/components/primitives/links.jsx`.

**To unblock remaining parsing (4 errors):**

1. **Resolve git merge conflicts in gateway data JSX**  
   Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) from:
   - `snippets/data/gateways/code.jsx`
   - `snippets/data/gateways/flags.jsx`
   - `snippets/data/gateways/index.jsx`
   - `snippets/data/gateways/quickstart.jsx`  
   Keep the intended version of each conflicted block.

2. ~~Fix dev-programs.mdx~~ *(Done.)*

4. ~~Fix developer-guide.mdx~~  
   Close the `<iframe>` at line 22 properly (e.g. add `</iframe>`). *(Done: use `/>`.)*

5. ~~Fix overview.mdx import~~ *(Done: leading slash added.)*

**Then:**

- Add or fix missing snippet files (external/*.mdx, dividers.jsx, globals.jsx, etc.) or update imports.
- Clean `docs.json`: remove or redirect nav entries that reference missing pages; remove `" "` entries.
- Optionally add a `.mintignore` so CONTEXT DATA and non-doc JSX are not parsed.

---

## 5. Summary

| Category | Count | Action |
|----------|--------|--------|
| Parsing errors (MDX/JS) | 11 | Exclude context/data via .mintignore; fix 2 page MDX fragments/iframe; fix or exclude gateway .jsx |
| Import / missing file | 14+ | Add missing files or fix paths; use `/snippets/` for overview.mdx |
| Nav missing pages | 40+ | Remove or fix docs.json entries; remove empty `" "` entries |

**Build result:** `mint validate` exited with 1. After fixes: **4 parsing errors** left (gateway JSX merge conflicts), **70 warnings** (imports + nav). Fix the 4 JSX conflicts to clear parsing errors; then address missing files and docs.json.

---

## 6. Run validation again

```bash
mint validate
```

After applying fixes, the command should exit with 0. Use `mint validate --disable-openapi` if OpenAPI processing is slow or failing.
