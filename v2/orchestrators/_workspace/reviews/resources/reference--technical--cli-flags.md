# Review: CLI Flags Reference
**File:** v2/orchestrators/resources/reference/technical/cli-flags.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. `Keywords` capitalised (should be `keywords`). Keywords contain non-relevant terms: "straight", "chatgpt". |
| Voice | 2.1-2.22 | WARN | Line 58: Uses emoji warning ">" -- should use Warning component instead of raw `>` blockquote. Lines 61-68: OpenAPI YAML block uses `Version: v0-derived` (capitalised V) -- inconsistent casing. |
| Headings | 3.1-3.10 | WARN | Line 55: "Mintlify-compatible OpenAPI (reference-only, derived from gRPC)" -- heading is too long and contains parenthetical qualifiers. |
| Structure | 4.1-4.16 | WARN | Page title is "CLI Flags Reference" but most content is OpenAPI spec and capability matrix, not a comprehensive CLI flags listing. The actual flag mapping table (lines 158-200) covers only 7 flags. Missing: comprehensive flag list that operators expect from a "CLI Flags Reference" page. |
| Layout | 5.1-5.16 | WARN | StyledTable and CustomDivider used. However, the OpenAPI YAML block (lines 61-153) is very long and dominates the page without clear operator value. No Related Pages/CTA at bottom. |
| Veracity | 6.1-6.12 | WARN | OpenAPI spec is marked "reference only, derived from gRPC" with caveat "Not a supported public API" -- appropriate disclaimer but the spec content itself is sparse (most schemas are just `type: object` with description). |
| Nav | 7.1-7.11 | PASS | In docs.json under Technical Reference group. |
| Links | 8.1-8.6 | PASS | No internal links. No broken references. |
| Process | 9.1-9.6 | FAIL | `status: review`. TODO block present. No human sign-off. |
| Completeness | 10.1-10.5 | FAIL | Title promises "CLI Flags Reference" but delivers only 7 flag mappings plus a proto spec and capability matrix. Missing: comprehensive listing of all operator-relevant flags (-orchestrator, -transcoder, -nvidia, -maxSessions, -dataDir, -network, -ethUrl, -serviceAddr, -reward, -aiWorker, -aiModels, etc.). |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | CLI Flags Reference | PASS |
| sidebarTitle | Yes | CLI Flags | PASS |
| description | Yes | 71 chars | PASS (but short) |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | WARN | `Keywords` (capital K), contains "straight" and "chatgpt" | FAIL |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Mintlify-compatible OpenAPI (reference-only, derived from gRPC) | 3 | 4 | 4 | 2 | 3 | 16 |
| CLI flags <-> proto field mapping | 5 | 5 | 5 | 4 | 5 | 24 |
| Capability matrix: Transcoding vs AI jobs | 5 | 5 | 5 | 5 | 5 | 25 |

## Verdict: NEEDS WORK
Key issues: Page does not deliver on its title -- "CLI Flags Reference" should contain a comprehensive flags listing, not just 7 proto mappings. `Keywords` capitalisation. Junk keywords ("straight", "chatgpt"). Missing `complexity` and `lifecycleStage`. OpenAPI spec block is hollow (schemas are stubs). First heading is excessively long.
