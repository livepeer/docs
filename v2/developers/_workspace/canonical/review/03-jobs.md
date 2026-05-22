# 03. Jobs to be Done: 5 Critical Developer Jobs

**Verdict**: [APPROVE / AMEND / REJECT]

---

## Executive Summary

Developers arrive to accomplish specific **jobs** (outcomes they want). This document maps 5 critical jobs to the documentation that currently serves them, identifies gaps, and scores coverage.

**Framework**: "When [situation], I want to [action], so I can [outcome]"

---

## Job #1: Proof-of-Life (First successful call)

**When**: I found Livepeer and want to see if it actually works
**I want to**: Make one successful API call and see output
**So I can**: Decide in one session whether to integrate into my project

**Personas**: AI Builder (#1), Video Developer (#2), Hackathon Participant (#4)

### Current coverage

| Step | Action | Current page | Size | Status |
|---|---|---|---|---|
| 1 | Confirm it's production-ready | portal.mdx + ai-on-livepeer.mdx | 5.3 + 8.7 KB | ✅ |
| 2 | Find the right quickstart | get-started/setup-paths.mdx | 557B STUB | 🔴 |
| 3 | Copy-paste a working example | get-started/ai-quickstart.mdx | 5.6KB | ✅ |
| 4 | Run the code and see output | (implicit in quickstart) | — | ✅ |
| 5 | Know it worked (not an error) | (needs error guide) | — | ⚠️ |

### Gap analysis

- ✅ **Quickstart content**: AI quickstart is well-structured with working curl/Python/JS examples
- 🔴 **Routing**: `setup-paths.mdx` stub prevents developers from quickly finding the right quickstart
- ⚠️ **Error diagnosis**: Quickstart doesn't explain what successful output looks like vs errors

### Success metric

**Target**: <5 minutes from "show me a working example" to successful first call
**Current**: Likely 5-10 minutes (if they find the quickstart), 15+ if they hit stubs

---

## Job #2: Path Selection (Choosing the right integration approach)

**When**: I want to integrate Livepeer but don't know which approach (Studio API, self-hosted gateway, BYOC, ComfyStream) fits my use case
**I want to**: Understand the trade-offs (cost, complexity, control) and pick one path
**So I can**: Start building without regretting my choice later

**Personas**: AI Builder (#1), Video Developer (#2), Evaluator (#5)

### Current coverage

| Step | Action | Current page | Size | Status |
|---|---|---|---|---|
| 1 | See all available paths | build/workload-fit.mdx | 8.9KB | ✅ |
| 2 | Understand trade-offs | build/workload-fit.mdx | 8.9KB | ✅ |
| 3 | Match my constraints to a path | build/workload-fit.mdx | 8.9KB | ✅ |
| 4 | Route to right quickstart | get-started/setup-paths.mdx | 557B STUB | 🔴 |

### Gap analysis

- ✅ **Decision framework**: `workload-fit.mdx` is comprehensive and clear
- 🔴 **Routing page**: `setup-paths.mdx` stub means developers must manually navigate to their chosen quickstart
- ⚠️ **Disambiguation needed**: "Should I use Studio API or run my own gateway?" — explained well in `workload-fit`, but question appears in Discord frequently, suggesting it's not obvious without reading

### Success metric

**Target**: Developer can state their choice ("I'm using ComfyStream") in <10 minutes
**Current**: Likely 10-15 minutes; some get stuck between workload-fit and quickstart

---

## Job #3: Integration & SDK Usage (Implementing the first feature)

**When**: I chose my path and have a working API call, now I need to build my feature
**I want to**: Find the right SDK, see code examples, understand the API interface
**So I can**: Integrate Livepeer into my application without guessing at the API

**Personas**: AI Builder (#1), Video Developer (#2)

### Current coverage

| Step | Action | Current page | Size | Status |
|---|---|---|---|---|
| 1 | Which SDK? (JS, Python, Go) | resources/sdks.mdx | 1.7KB | ⚠️ Thin |
| 2 | Install the SDK | resources/sdks.mdx | 1.7KB | ⚠️ Thin |
| 3 | Authenticate | (scattered) | — | 🔴 Missing dedicated page |
| 4 | Make requests (working example) | get-started/[quickstart].mdx | 5-10KB | ✅ |
| 5 | Handle responses | (implicit in examples) | — | ⚠️ |
| 6 | Error handling | (scattered) | — | 🔴 Missing |

### Gap analysis

- ⚠️ **SDK reference**: `sdks.mdx` is too thin. Should include:
  - Installation instructions (npm/pip/go get)
  - Constructor/initialization pattern
  - Code examples for each language
  - API method signatures
- 🔴 **Authentication page**: No dedicated page explaining API keys, JWT tokens, or auth patterns
- 🔴 **Error handling**: No page explaining common HTTP errors, retry logic, or rate limits

### Success metric

**Target**: Developer can write 5-10 lines of code using the SDK without consulting external sources
**Current**: Likely requires jumping between quickstart, SDK docs, and API reference

---

## Job #4: Troubleshooting & Diagnosis (Fixing a failed integration)

**When**: I made an API call and it failed (timeout, 5xx, no response, weird output)
**I want to**: Diagnose whether it's my code, the network, the model, or a quota issue
**So I can**: Fix the problem or know whether to escalate to Discord

**Personas**: AI Builder (#1), Video Developer (#2), Hackathon Participant (#4)

### Current coverage

| Step | Action | Current page | Size | Status |
|---|---|---|---|---|
| 1 | "My job timed out" | NOT DOCUMENTED | — | 🔴 |
| 2 | "I got a 502 Bad Gateway" | NOT DOCUMENTED | — | 🔴 |
| 3 | "Network status check" | NOT DOCUMENTED | — | 🔴 |
| 4 | "Model not responding" | NOT DOCUMENTED | — | 🔴 |
| 5 | "Rate limited / quota exceeded" | NOT DOCUMENTED | — | 🔴 |
| 6 | "Still broken — ask for help" | guides/developer-help.mdx | 11.9KB | ✅ |

### Gap analysis

- 🔴 **Critical gap**: No troubleshooting guide at all
- Evidence from Discord: "My job timed out" (3-4x weekly), "Is the network down?" (2-3x weekly) — all answered in Discord, not docs
- Impact: Every troubleshooting question becomes a Discord interrupt

### Success metric

**Target**: Developer can self-diagnose and fix 70% of common issues using docs
**Current**: 0% — no page exists. All troubleshooting happens in Discord.

---

## Job #5: Production Readiness (Shipping to production)

**When**: My demo works and I want to deploy to production
**I want to**: Know what production readiness looks like and have a checklist
**So I can**: Ship without discovering problems in production (rate limits, retries, monitoring)

**Personas**: AI Builder (#1), Video Developer (#2)

### Current coverage

| Step | Action | Current page | Size | Status |
|---|---|---|---|---|
| 1 | "What's production readiness?" | NOT DOCUMENTED | — | 🔴 |
| 2 | "Rate limiting and quotas" | NOT DOCUMENTED | — | 🔴 |
| 3 | "Retry logic and exponential backoff" | NOT DOCUMENTED | — | 🔴 |
| 4 | "Monitoring and observability" | NOT DOCUMENTED | — | 🔴 |
| 5 | "Cost estimation" | NOT DOCUMENTED | — | 🔴 |
| 6 | "Security: API key rotation, access control" | NOT DOCUMENTED | — | 🔴 |
| 7 | "Ready-to-launch checklist" | NOT DOCUMENTED | — | 🔴 |

### Gap analysis

- 🔴 **Critical gap**: No production guidance at all
- Evidence: "How do I go to production?" (1-2x weekly in Discord) — developers stuck at demo stage
- Impact: Developers deploy without understanding rate limits, retry strategy, or error handling

### Success metric

**Target**: Developer has a signed-off checklist before going to production (0 critical issues)
**Current**: No checklist exists. Developers deploy and learn by failing.

---

## Job Completion Matrix

| Job | Job #1 | Job #2 | Job #3 | Job #4 | Job #5 |
|---|---|---|---|---|---|
| **Coverage** | ✅ 80% | ✅ 85% | ⚠️ 60% | 🔴 0% | 🔴 0% |
| **Blockers** | Setup stub | Routing stub | SDK thin, no auth | None (missing entirely) | None (missing entirely) |
| **Discord frequency** | Low (well-covered) | Moderate (unclear) | Moderate (SDK thin) | HIGH (3-4x weekly) | MODERATE (1-2x weekly) |
| **Fix priority** | Low | Medium | Medium | CRITICAL | HIGH |

---

## Review Questions

1. **Job #4 (Troubleshooting)**: Who owns creating the troubleshooting guide? Should it be:
   - `guides/troubleshooting.mdx` (new page)?
   - Part of `guides/developer-help.mdx` (expand existing)?
   - Embedded in each quickstart (examples of common errors)?

2. **Job #5 (Production Readiness)**: Should this be:
   - Single `guides/production-checklist.mdx` page?
   - Split into separate pages (monitoring, rate-limiting, retries)?
   - Integrated into each path's guide (AI, video, ComfyStream)?

3. **Job #3 (SDK/Auth)**: The SDK page is thin. Should we:
   - Expand `resources/sdks.mdx` from 1.7KB to 4-5KB?
   - Create dedicated SDK pages per language (sdks-js.mdx, sdks-python.mdx)?
   - Keep SDK reference in Swagger UI and just link from docs?

4. **Job priorities**: Do we agree the priority order is:
   - #1 (Proof-of-life) — already covered, just needs routing
   - #2 (Path selection) — strong, needs routing
   - #3 (Integration) — moderate, needs expansion
   - #4 (Troubleshooting) — CRITICAL, missing entirely
   - #5 (Production) — HIGH, missing entirely

5. **Routing**: Should `setup-paths.mdx` be a 2-3KB routing page with decision tree, or fully-written guide?

---

## Related Documents

- `02-personas.md` — Who is doing these jobs?
- `04-journey.md` — How jobs fit into persona journeys
- `05-section-structure.md` — Where these jobs live in the IA

---

**Timestamp**: April 7, 2026
