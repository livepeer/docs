# Review: Install go-livepeer
**File:** v2/orchestrators/setup/install.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Install go-livepeer | Pass |
| sidebarTitle | Yes | Install | Pass |
| description | Yes | "Install the go-livepeer binary on Linux..." (132 chars) | Pass |
| pageType | Yes | tutorial | Pass |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | Yes | 9 keywords | Pass |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | **Fail** - uses non-quoted `og:image` key format (line 9: `og:image:` instead of `'og:image':`) |
| status | Yes | current | Pass |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Prerequisites | 5 | 4 | 5 | 5 | 5 | 24 |
| Install go-livepeer | 5 | 5 | 5 | 5 | 4 | 24 |
| Verify your installation | 5 | 5 | 5 | 5 | 4 | 24 |
| Next steps | 4 | 3 | 5 | 5 | 5 | 22 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: purpose, complexity, lifecycleStage. `og:image` key not quoted (may cause YAML parse issues) |
| 2. VOICE | 2.1-2.22 | PASS | Excellent technical voice. UK English where applicable. No banned words. Entity-led sentences |
| 3. HEADINGS | 3.1-3.10 | PASS | All >= 22/25 |
| 4. STRUCTURE | 4.1-4.16 | PASS | Well-structured multi-OS install guide. Clear prerequisites. Verification steps. Over 5KB. Tab views for Linux/Docker/macOS/Windows |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | Uses "Next steps" not "Related Pages" for the closing section. REVIEW comment in source (line 143). Card href `/v2/orchestrators/setup/orch-config` uses old slug |
| 6. VERACITY | 6.1-6.12 | **FAIL** | REVIEW flag at line 143 re: build dependencies. Version v0.8.9 and Go 1.25.0 need verification as current. CUDA 12.0.0 minimum driver versions cited (525.60.13, 527.41) - need sourcing |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2832 |
| 8. LINKS | 8.1-8.6 | **FAIL** | `/v2/orchestrators/setup/orch-config` uses old slug (should be `/v2/orchestrators/setup/configure`). `/v2/orchestrators/get-started/quickstart` path unverified. `/v2/orchestrators/resources/faq` path unverified |
| 9. PROCESS | 9.1-9.6 | **FAIL** | REVIEW flag in source. No human sign-off evidence |
| 10. COMPLETENESS | 10.1-10.5 | PASS | Comprehensive 4-platform install coverage. Build from source included. Verification steps included |

## Verdict: NEEDS WORK
