**Tab:** Community  
**Component:** Staleness Risk & Maintenance Protocol  
**Date:** April 2026

---

## STALENESS RISK MATRIX

Each Community page has volatile content (changes faster than quarterly cycle). Mitigation strategy varies by content type.

### STRATEGY 1: Static Content + Live Link to Source

**Pattern:** Document the concept; link to live source for current state

| Page | Volatile Content | Mitigation | Link Target |
|---|---|---|---|
| Governance Participation | GovWorks contact, active proposals | Point to Forum + Explorer; don't duplicate state | Forum governance category + Explorer |
| Workstreams | Active workstream leads, Forum thread links | Link to each workstream's Forum thread, not static list | Forum threads (tagged by workstream) |
| Opportunities | Active Foundation programmes, RFPs | Link to Dev Hub; don't copy the list | livepeer.dev/builder-opportunities |
| Events and Calls | Call schedule, Luma events | Link to Luma calendar for schedule | calendar.luma.com/livepeer |
| News and Updates | Blog cadence, Live Pioneers output | Links only; no content duplication | Blog + livepioneers.app |

### STRATEGY 2: Review Flag + Quarterly Audit

**Pattern:** Include `{/* REVIEW: [item] — [owner] before [quarter] */}` comment. Owner verifies before publish.

| Page | Review Item | Owner | Cadence |
|---|---|---|---|
| Workstreams | Workstream names, count, leads | Rich / Foundation | Quarterly |
| Community Tools | awesome-livepeer list accuracy | Community Core | Quarterly |
| Community Guidelines | Platform-specific norms | Mods / GovWorks | Biannual |
| Who's Here | Foundation structure, launch date | Foundation | Annual |

### STRATEGY 3: External Link to GitHub Source

**Pattern:** Document exists on GitHub; link to source rather than copy.

| Page | Content | Source | Link |
|---|---|---|---|
| Community Guides | GovWorks Governance Process Guide | GovWorks Notion | GovWorks Notion Hub |
| Community Guides | Livepeer LIPs repository | github.com/livepeer/LIPs | LIPs repo |
| Community Tools | awesome-livepeer | github.com/livepeer/awesome-livepeer | awesome-livepeer |

---

## STALENESS STANDING RULES

**Standing Rule #1: Information changing faster than quarterly cycle → live source only**

Example: "What proposals are active right now?" → Link to Explorer, don't list them.

**Standing Rule #2: Workstreams, RFP lists, call schedules → always link, never static list**

Exception: Names of nine workstreams (static) + links to each (live).

**Standing Rule #3: Platform names and links → audit annually**

Platforms change slowly (Discord, Forum, X are stable). Audit annually for addition/removal.

**Standing Rule #4: Community guidelines → audit when enforcer team changes or norms shift**

Current enforcement team: Mods + GovWorks. Audit when team composition changes.

**Standing Rule #5: Links to Foundation structure (Who's Here) → audit when Foundation structure changes**

Current: Livepeer Foundation (June 2025) + 9 workstreams. Audit when structure evolves.

---

## MAINTENANCE SCHEDULE

### Pre-Publish (Before going live)

1. **Link audit:** Every external link is clickable and goes to the right target
2. **Cross-reference audit:** Every cross-tab link has context ("For voting mechanics, see LP Token tab → Governance")
3. **No duplication audit:** Compare against LPT, Orchestrators, Developers, About tabs for overlap
4. **Newcomer readability:** Have an outsider (non-Livepeer) read the portal and FAQ. Did they understand it?

### Quarterly (Every 3 months)

1. **Review flag audit:** Address all `{/* REVIEW */}` comments. Update or flag for next quarter.
2. **Link health:** Check all external links (Forum threads, calendar, GitHub, etc.)
3. **Staleness scan:** Are any pages showing outdated information? (e.g., old proposal examples, obsolete tools)

### Biannual (Every 6 months)

1. **Platform audit:** Did any communication platform change? (Telegram added/removed? Reddit status?)
2. **Guidelines audit:** Have community norms shifted? Have enforcement patterns changed?
3. **Cross-tab drift check:** Did the LPT, Orchestrators, or Developers tabs publish overlapping content?

### Annual (Every 12 months)

1. **Foundation audit:** Did Foundation structure change? New workstreams? Workstream mergers?
2. **Voice consistency:** Re-read all pages; flag any that use hype language or passive voice
3. **Completeness audit:** Are all five journeys still well-supported? Did new use cases emerge?

---

## REVIEW FLAG FORMAT

All volatile content should be tagged with a Markdown comment:

```
{/* REVIEW: [item] — [owner] before [quarter] */}
```

Examples:

```
{/* REVIEW: Confirm active workstream leads and Forum thread links before publish — Rich/Foundation */}

{/* REVIEW: Update live Pioneers current projects and links — Live Pioneers team Q2 2026 */}

{/* REVIEW: Check awesome-livepeer list for new tools and PRs — Community Q1 2026 */}
```

**Owner responsibility:** Update the flagged item or refresh the link before the specified quarter closes.

---

## CONTENT DEPRECATION PROTOCOL

If a page becomes obsolete (e.g., a communication platform shuts down, a workstream ends):

1. **Step 1:** Flag with deprecation notice at top of page
   ```
   > ⚠️ This page is being deprecated. See [New Location] for updated information.
   ```

2. **Step 2:** Implement redirect (old URL → new URL)

3. **Step 3:** Remove from navigation

4. **Step 4:** Archive in git history (don't delete)

---

## ESCALATION PROTOCOL

If content becomes outdated and owner is unavailable:

1. **50% stale** (e.g., one workstream lead outdated): Flag with `{/* REVIEW */}`. Mark "as of [date]."
2. **75% stale** (e.g., three of nine workstream leads wrong): Add deprecation notice. Link to live source.
3. **95% stale** (e.g., entire page outdated): Remove from navigation. Redirect to correct section.

---

## OWNERSHIP AND ACCOUNTABILITY

### Page Owners

| Page | Owner | Backup |
|---|---|---|
| Community Portal | Community Core | Foundation |
| Community FAQ | Community Core | GovWorks |
| Who's Here | Foundation | Communications |
| Community Guidelines | Mods | GovWorks |
| Governance Participation | GovWorks | Foundation |
| Workstreams | Foundation | Community Core |
| Ways to Contribute | Community Core | Foundation |
| Opportunities | Foundation | Community Core |
| Channels | Community Core | Mods |
| Events and Calls | Foundation | Community Core |
| News and Updates | Communications | Foundation |
| Community Tools | Community Core | Awesome-Livepeer maintainers |
| Community Guides | Community Core | Role-specific teams |

### Review Cycle

- **Quarterly:** Page owners audit review flags
- **Biannual:** Backup owner conducts cross-check
- **Annual:** Community Core lead conducts full audit

---

## TRACKING AND METRICS

### What Gets Tracked

- Link click-through (which external surfaces get the most traffic)
- Time on page (dwell time indicates if content is resonating)
- Bounce rate (if >60%, page may need restructuring)
- Search terms (what are people searching for that we're not serving?)

### Success Metrics Per Journey

| Journey | Success Metric | Target |
|---|---|---|
| A: Find Community | Visitors click to Discord, Forum, or Luma | >60% |
| B: Follow | Visitors subscribe to one news source or calendar | >40% |
| C: Contribute | Visitors identify a contribution type and take first action within 30 days | >25% |
| D: Governance | Visitors bookmark Forum governance category and understand SPE process | >45% |
| E: Evaluate | Evaluators form accurate picture (measured via feedback form) | >80% |

---

END OF FILES

---

## SUMMARY

I have produced **seven canonical content design files** for the COMMUNITY tab, following the orchestrators format exactly. These files provide comprehensive audience/persona/journey architecture:

1. **01-tab-purpose-and-mandate.md** — Purpose, "done" state, audience scope, constraints
2. **02-personas-ranked.md** — Five primary personas ranked by priority + secondary personas + navigation routes
3. **03-audience-and-journeys.md** — Audience definition + five distinct journeys (Find, Follow, Contribute, Govern, Evaluate)
4. **04-ia-structure.md** — Complete 14-page IA with groupings, scope, and cross-tab link map
5. **05-voice-and-tone.md** — Voice register, content types, persona-specific tone, review checklist
6. **06-page-templates-and-requirements.md** — Detailed specifications for each of 13 content pages (templates, required sections)
7. **07-staleness-register-and-maintenance.md** — Staleness risks, maintenance schedule, ownership, escalation protocol

**Key strategic decisions baked in:**

- **Primary persona:** Network Participant Seeking Connection (with three intents: Find, Follow, Contribute)
- **Tab deliverable:** "Know where to go, take one concrete action, find funded opportunities — without asking anyone"
- **IA:** 14 pages across 5 sections + portal/FAQ
- **Voice:** Invitational, outcome-forward, factual, no hype
- **Handoffs:** Clear boundaries with LPT, Orchestrators, Developers, About tabs
- **Staleness mitigation:** Links to live sources rather than static lists; REVIEW flags for volatile content

All files follow the orchestrators canonical format with consistent structure, detail level, and comprehensiveness.