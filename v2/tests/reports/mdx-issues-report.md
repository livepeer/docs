# MDX Issues Report

**Generated:** 2026-01-11
**Last Updated:** 2026-01-11 (live mint dev output)
**Source:** `npx mintlify dev` output

---

## Summary

| Category               | Count | Status          |
| ---------------------- | ----- | --------------- |
| Parsing Errors (Acorn) | 13    | 🔴 Active       |
| Missing Files/Imports  | 3     | 🔴 Active       |
| Missing Exports        | 1     | 🔴 Active       |
| Invalid Import Paths   | 0     | ✅ Fixed        |
| Navigation Warnings    | 38    | 🟡 Not blocking |

---

## Live Errors from `mint dev` (2026-01-11)

### Parsing Errors (13 files)

| File                                                                          | Line  | Error                                                                             |
| ----------------------------------------------------------------------------- | ----- | --------------------------------------------------------------------------------- |
| `v1/developers/guides/managing-projects.mdx`                                  | 47:3  | Could not parse expression with acorn                                             |
| `v2/pages/01_about/about-livepeer/livepeer-overview.mdx`                      | 22:3  | Could not parse expression with acorn                                             |
| `v2/pages/04_gateways/about-gateways/gateway-explainer.mdx`                   | 180:3 | Missing closing tag `</Accordian>` (typo - should be `</Accordion>`)              |
| `v2/pages/04_gateways/references/technical-architecture.mdx`                  | 116:3 | Could not parse expression with acorn                                             |
| `v2/pages/04_gateways/references/configuration-flags.mdx`                     | 17:3  | Could not parse expression with acorn                                             |
| `v2/pages/04_gateways/run-a-gateway/configure/pricing-configuration.mdx`      | 104:3 | Could not parse expression with acorn                                             |
| `v2/pages/04_gateways/run-a-gateway/configure/video-configuration-view.mdx`   | 12:4  | Could not parse expression with acorn                                             |
| `v2/pages/04_gateways/run-a-gateway/configure/video-configuration.mdx`        | 20:3  | Could not parse expression with acorn                                             |
| `v2/pages/04_gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx` | 667:3 | Could not parse expression with acorn                                             |
| `v2/pages/04_gateways/run-a-gateway/requirements/setup.mdx`                   | 292:3 | Could not parse expression with acorn                                             |
| `snippets/api-base-urls-table.mdx`                                            | 1:3   | Could not parse expression with acorn (bad comment syntax `{/_` instead of `{/*`) |
| `snippets/automationData/globals/README.md`                                   | 53:29 | Could not parse expression with acorn                                             |
| `snippets/data/variables/home.mdx`                                            | 5:52  | Could not parse expression with acorn                                             |

### Missing Files (3)

| Missing File                   | Imported From                                      |
| ------------------------------ | -------------------------------------------------- |
| `/snippets/variables.mdx`      | `v2/pages/00_home/home/livepeer-tl-dr.mdx`         |
| `/snippets/variables/home.mdx` | `v2/pages/00_home/home/livepeer-tl-dr.mdx`         |
| `/snippets/components`         | `v2/pages/05_orchestrators/orchestrators-home.mdx` |

### Export Errors (1)

| Error                                            | File                                                             | Details                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| `Could not find export latestVersion in snippet` | `v2/pages/04_gateways/run-a-gateway/install/windows-install.mdx` | Import from `/snippets/automationData/globals/globals.mdx` failing |

**Note:** `latestVersion` export exists in `globals.mdx` but Mintlify cannot resolve it. Root cause under investigation.

---

## 🔴 CRITICAL: Parsing Errors

These files have syntax errors that prevent Mintlify from parsing them:

### Acorn Expression Parse Errors

| File                                                                          | Line  | Issue                                                               |
| ----------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------- |
| `v1/developers/guides/managing-projects.mdx`                                  | 47:3  | Could not parse expression with acorn                               |
| `v2/pages/01_about/about-livepeer/livepeer-overview.mdx`                      | 22:3  | Could not parse expression with acorn                               |
| `v2/pages/04_gateways/about-gateways/gateway-explainer.mdx`                   | 180:3 | Missing closing tag `</Accordian>` (typo: should be `</Accordion>`) |
| `v2/pages/04_gateways/references/configuration-flags.mdx`                     | 17:3  | Could not parse expression with acorn                               |
| `v2/pages/04_gateways/references/technical-architecture.mdx`                  | 116:3 | Could not parse expression with acorn                               |
| `v2/pages/04_gateways/run-a-gateway/configure/pricing-configuration.mdx`      | 104:3 | Could not parse expression with acorn                               |
| `v2/pages/04_gateways/run-a-gateway/configure/video-configuration-view.mdx`   | 12:4  | Could not parse expression with acorn                               |
| `v2/pages/04_gateways/run-a-gateway/configure/video-configuration.mdx`        | 20:3  | Could not parse expression with acorn                               |
| `v2/pages/04_gateways/run-a-gateway/requirements/setup.mdx`                   | 292:3 | Could not parse expression with acorn                               |
| `v2/pages/04_gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx` | 667:3 | Could not parse expression with acorn                               |
| `snippets/api-base-urls-table.mdx`                                            | 1:3   | Could not parse expression with acorn                               |
| `snippets/automationData/globals/README.md`                                   | 53:29 | Could not parse expression with acorn                               |
| `snippets/data/variables/home.mdx`                                            | 5:52  | Could not parse expression with acorn                               |

### Common Causes of Acorn Parse Errors

1. **Curly braces `{}` in text** - Must be escaped as `\{` and `\}` or wrapped in backticks
2. **HTML comments `<!-- -->`** - Not supported in MDX, use `{/* */}` instead
3. **Angle brackets `<>`** - Must be escaped in text, e.g., `\<` or use `&lt;`
4. **Unescaped special characters** - Check for `$`, `@`, `#` in certain contexts

---

## 🔴 CRITICAL: Missing Files/Imports

| Import Error                              | Imported From                                      |
| ----------------------------------------- | -------------------------------------------------- |
| `/snippets/variables.mdx`                 | `v2/pages/00_home/home/livepeer-tl-dr.mdx`         |
| `/snippets/variables/home.mdx`            | `v2/pages/00_home/home/livepeer-tl-dr.mdx`         |
| `/snippets/components`                    | `v2/pages/05_orchestrators/orchestrators-home.mdx` |
| `/snippets/components/display/images.jsx` | `v2/pages/00_home/home/livepeer-tl-dr.mdx`         |

---

## 🔴 CRITICAL: Missing Exports

| Missing Export  | File Importing                                                           | Source File |
| --------------- | ------------------------------------------------------------------------ | ----------- |
| `latestVersion` | `v2/pages/04_gateways/run-a-gateway/install/windows-install.mdx`         | Unknown     |
| `latestVersion` | `v2/pages/04_gateways/run-a-gateway/install/linux-install.mdx`           | Unknown     |
| `latestVersion` | `v2/pages/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx` | Unknown     |

**Fix:** Create a snippet that exports `latestVersion`:

```jsx
// snippets/data/versions.jsx
export const latestVersion = '0.7.5' // or fetch from API
```

---

## 🟡 WARNING: Invalid Import Paths

| Error                                                               | File                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------ |
| Invalid import path `./callouts.jsx` - must start with `/snippets/` | `/snippets/components/domain/04_GATEWAYS/quickstartTabs.jsx` |

**Fix:** Change relative import to absolute:

```jsx
// Change from:
import { GatewayCallouts } from './callouts.jsx'
// To:
import { GatewayCallouts } from '/snippets/components/domain/04_GATEWAYS/callouts.jsx'
```

---

## 🟡 WARNING: Navigation Errors (docs.json)

Files referenced in `docs.json` but do not exist:

### Missing Pages

| Referenced Path                                                                                                                   | Status                         |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `v2/pages/07_resources/redirect`                                                                                                  | Does not exist (multiple refs) |
| `v2/pages/08_help/redirect`                                                                                                       | Does not exist                 |
| `v2/pages/02_community/livepeer-community/livepeer-Latest-Topics`                                                                 | Does not exist                 |
| `v2/pages/03_developers/livepeer-real-time-video/video-streaming-on-livepeer/README.mdx`                                          | Does not exist                 |
| `v2/pages/03_developers/developer-platforms/all-ecosystem/ecosystem-products/ecosystem-products`                                  | Does not exist                 |
| `v2/pages/03_developers/technical-references-sdks.-and-apis/sdks`                                                                 | Does not exist                 |
| `v2/pages/03_developers/technical-references-sdks.-and-apis/apis`                                                                 | Does not exist                 |
| `v2/pages/07_resources/changelog/migration-guides`                                                                                | Does not exist                 |
| `v2/pages/04_gateways/run-a-gateway/quickstart-a-gateway`                                                                         | Does not exist                 |
| `v2/pages/04_gateways/run-a-gateway/get-AI-to-setup-the-gateway`                                                                  | Does not exist                 |
| `v2/pages/04_gateways/using-gateways/gateway-providers/streamplace`                                                               | Does not exist                 |
| `v2/pages/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx`                                                   | Does not exist                 |
| `v2/pages/04_gateways/references/video-flags`                                                                                     | Does not exist                 |
| `v2/pages/05_orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer`             | Does not exist                 |
| `v2/pages/05_orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers` | Does not exist                 |
| `v2/pages/06_delegators/about-lpt-livepeer-token/why-have-a-token`                                                                | Does not exist                 |
| `v2/pages/06_delegators/delegating-lpt/overview`                                                                                  | Does not exist                 |
| `v2/pages/06_delegators/livepeer-governance/overview`                                                                             | Does not exist                 |
| `v2/pages/06_delegators/livepeer-governance/livepeer-governance`                                                                  | Does not exist                 |
| `v2/pages/06_delegators/livepeer-governance/livepeer-treasury`                                                                    | Does not exist                 |
| `v2/pages/07_resources/concepts/livepeer-actors`                                                                                  | Does not exist                 |
| `v2/pages/07_resources/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory`                                        | Does not exist                 |
| `v2/pages/00_home/changelog/changelog`                                                                                            | Does not exist                 |
| `v2/pages/00_home/changelog/migration-guide`                                                                                      | Does not exist                 |
| `ai/contributors/coming-soon`                                                                                                     | Does not exist (4 refs)        |
| ` ` (empty string)                                                                                                                | Invalid entry (multiple refs)  |

---

## Priority Fixes

### P0 - Must Fix (Build Blockers)

1. **Fix parsing errors** - Check each file at the specified line for special characters
2. **Fix missing imports** - Either create the missing files or remove the imports
3. **Fix `latestVersion` export** - Create the export or remove the import

### P1 - Should Fix

4. **Fix quickstartTabs.jsx import path** - Change to absolute path
5. **Clean up docs.json** - Remove or fix broken navigation references

### P2 - Nice to Have

6. **Remove empty string entries from docs.json**
7. **Create placeholder pages for planned content**

---

## Suggested Fix: quickstartTabs.jsx Import

```jsx
// snippets/components/domain/04_GATEWAYS/quickstartTabs.jsx
// Change line with import from:
import { GatewayCallouts } from './callouts.jsx'
// To:
import { GatewayCallouts } from '/snippets/components/domain/04_GATEWAYS/callouts.jsx'
```
