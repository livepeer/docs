# Review: FAQ and Troubleshooting
**File:** v2/orchestrators/resources/reference/faq.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. `Keywords` capitalised (should be `keywords` lowercase). `purpose: faq` not in allowed list (should be `troubleshoot` or `reference`). |
| Voice | 2.1-2.22 | WARN | Line 56: "the most common errors orchestrators encounter" -- sentence fragment, missing subject. Line 127: uses en-dash "3--5" (should be "3-5"). Otherwise UK English, entity-led, no self-ref. |
| Headings | 3.1-3.10 | PASS | All headings descriptive and technical. |
| Structure | 4.1-4.16 | PASS | Well-organised into 6 sections (installation, networking, jobs, AI, earnings, FAQ). Self-contained entries. Escalation paths at bottom. Exceeds 2KB significantly. |
| Layout | 5.1-5.16 | PASS | AccordionGroup with icons throughout. CustomDivider between sections. CardGroup for escalation. Code blocks have `icon="terminal"`. |
| Veracity | 6.1-6.12 | PASS | Instructions are accurate and actionable. Commands are correct. No unsubstantiated claims. |
| Nav | 7.1-7.11 | PASS | In docs.json under Reference group. Redirects configured. |
| Links | 8.1-8.6 | PASS | Internal links use correct paths. External links to Explorer, Discord, Forum, GitHub are standard. No TODO/TBD placeholders. |
| Process | 9.1-9.6 | FAIL | `status: review`. TODO block present (lines 30-52). No human sign-off. |
| Completeness | 10.1-10.5 | PASS | Covers the full troubleshooting journey: installation, networking, job routing, AI pipelines, earnings. FAQ covers common operational questions. Escalation paths provided. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | FAQ and Troubleshooting | PASS |
| sidebarTitle | Yes | FAQ | PASS |
| description | Yes | 158 chars | PASS |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | faq | FAIL -- not in allowed list |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | WARN | `Keywords` (capital K) -- may not be parsed correctly | WARN |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Troubleshooting -- Installation and GPU Detection | 5 | 5 | 5 | 4 | 5 | 24 |
| Troubleshooting -- Networking and Connectivity | 5 | 5 | 5 | 4 | 5 | 24 |
| Troubleshooting -- Not Receiving Jobs | 5 | 5 | 5 | 4 | 5 | 24 |
| Troubleshooting -- AI Pipeline Errors | 5 | 5 | 5 | 4 | 5 | 24 |
| Troubleshooting -- Earnings and Payments | 5 | 5 | 5 | 4 | 5 | 24 |
| FAQ -- General Questions | 5 | 5 | 5 | 5 | 5 | 25 |
| Still Stuck? | 4 | 4 | 5 | 5 | 5 | 23 |

## Verdict: NEEDS WORK
Key issues: `Keywords` capitalisation may break parsing, `purpose: faq` not in allowed enum, missing `complexity` and `lifecycleStage`, line 56 sentence fragment (missing leading subject), `status: review`.
