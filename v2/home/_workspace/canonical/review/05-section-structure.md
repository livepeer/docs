# Home Tab: Section Structure

**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**: Maps the current Home tab pages and sections to canonical structure. Identifies what exists, where gaps are, and how to organize content logically.

---

## Current Home IA (As of 2026-04-07)

```
v2/home/
├── index.mdx (2KB)
│   ├── Auto-generated TOC
│   └── Links to all subsections
│
├── [HERO SECTION]
│   ├── mission-control.mdx (6.3KB)
│   │   └── 9-card routing hub with Starfield hero + Daydream GIF
│   └── primer.mdx (10.6KB)
│       └── "What is Livepeer" — 10-minute read, strong content
│
├── [ROUTING SECTION]
│   └── get-started.mdx (7.5KB)
│       └── 6-persona routing with discovery cards + mermaid diagram
│
├── [TRENDING SECTION]
│   └── trending.mdx (6.4KB)
│       └── Current network activity (⚠️ stale-risk if static content)
│
├── about-livepeer/
│   ├── vision.mdx (8.8KB) ✅ Good
│   ├── evolution.mdx (7.9KB) ⚠️ Needs AI pivot audit
│   ├── ecosystem.mdx (25.7KB) ✅ Strong — Foundation covered here
│   ├── benefits.mdx (9.9KB) ✅ Good
│   └── roadmap.mdx (1.8KB) 🔴 STUB — high priority
│
└── get-started/ (4 stubs)
    ├── ai-pipelines.mdx 🔴 STUB "Coming Soon"
    ├── build-on-livepeer.mdx 🔴 STUB "Coming Soon"
    ├── stream-video.mdx 🔴 STUB "Coming Soon"
    └── use-livepeer.mdx 🔴 STUB "Coming Soon"

(solutions/ and resources/ subdirectories — contents unconfirmed)
```

---

## Canonical Section Mapping

Home should be organized around **jobs and personas**, not technical categories. Here's the canonical structure:

### SECTION 1: HERO (~2-3KB)
**Job**: Comprehend what Livepeer is  
**Visitors**: All personas, first-time viewers  
**Content**:
- Headline: "Livepeer is real-time AI infrastructure for video"
- Subheading: One-liner value prop (e.g., "Build, operate, or invest in decentralized AI video")
- Hero image/video: Starfield or architecture visualization
- CTA button: "Get started" or "Learn more"

**Current mapping**:
- `mission-control.mdx` (6.3KB) — contains hero + 9-card routing hub
- Check: Is hero definition clear? Is it "AI infrastructure" or something else?

**Status**: ✅ Exists (but definition clarity TBD)

---

### SECTION 2: PRIMER (Optional depth) (~10KB)
**Job**: Provide 5-10 minute context for curious newcomers  
**Visitors**: Newcomers, evaluators, anyone asking "what actually happens?"  
**Content**:
- What problem does Livepeer solve?
- How does it work at a high level? (No technical depth yet)
- Why is this approach better? (decentralization, openness, fairness)
- What's the current state? (Active network, real projects, community)

**Current mapping**:
- `primer.mdx` (10.6KB) — strong content, good job

**Status**: ✅ Good

---

### SECTION 3: ROLE DISCOVERY (~1-2KB)
**Job**: Self-identify and route to correct tab  
**Visitors**: All personas post-comprehension  
**Content**:
- 7-8 role cards with intent language ("I want to...", not "I am...")
- One-line description of each path
- Destination links (Developers, Orchestrators, Delegators, Solutions, About, Community)
- Order by volume: Newcomer → Developer → GPU operator → Token holder → etc.

**Current mapping**:
- `mission-control.mdx` (9-card hub) and/or `get-started.mdx` (6-persona routing)
- Question: Are these complementary or redundant?

**Status**: ⚠️ Exists but structure unclear

---

### SECTION 4: PROOF / CREDIBILITY (~1-2KB)
**Job**: Show this is real (not vaporware)  
**Visitors**: Evaluators, skeptical personas (#2, #4, #5)  
**Content**:
- Live products using Livepeer: Daydream, Stream Video, Livepeer Studio, ComfyStream
- Protocol metrics: Active orchestrators, total stake, daily fees
- Foundation info: Mission, funding, roadmap
- Community proof: Discord members, GitHub activity, blog archive

**Current mapping**:
- Scattered across: `mission-control.mdx`, `ecosystem.mdx`, About section
- Visibility: Unclear if this is prominent on Home

**Status**: 🔴 Exists but not consolidated on Home

---

### SECTION 5: QUICK FACTS / FAQ (~1-2KB)
**Job**: Answer quick questions without long-form reading  
**Visitors**: Hurried personas, quick-answer seekers  
**Content**:
- "What is LPT?" — 1 sentence
- "How much can I earn?" — 1-2 sentences with caveats
- "Is this production-ready?" — Yes/No/How-To-Check
- "How do I get started?" — 3 link options
- "What's the difference between [role] and [role]?" — Quick compare table

**Current mapping**:
- Not visible on current Home; scattered across tab-specific docs

**Status**: 🔴 Missing

---

### SECTION 6: ROADMAP / VISION (~2-3KB)
**Job**: Show strategic direction (evaluators, investors)  
**Visitors**: Evaluators, long-term thinkers, token holders  
**Content**:
- Foundation's 3-phase plan: 2025 (Foundation), 2026-27 (Scaling), 2028+ (Decentralization)
- Key milestones for next 12 months
- Innovation direction: AI pivot narrative, next technology priorities
- Link to full roadmap (in About section)

**Current mapping**:
- `about-livepeer/roadmap.mdx` (1.8KB) — STUB, needs full content

**Status**: 🔴 STUB at 1.8KB — HIGH PRIORITY

---

### SECTION 7: RESEARCH & TECHNICAL (~1KB + links)
**Job**: Access research artifacts (researchers, deep-divers)  
**Visitors**: Researchers (#5), protocol engineers, analysts  
**Content**:
- Whitepaper: Direct link
- Architecture docs: Smart contract, protocol mechanics
- Smart contracts: GitHub links
- Technical blog: Archive of technical posts
- API reference: Link to Developers tab

**Current mapping**:
- Scattered: whitepaper location TBD, architecture docs in About/ecosystem.mdx
- Visibility: Unclear

**Status**: ⚠️ Exists but not consolidated; whitepaper link visibility TBD

---

### SECTION 8: COMMUNITY & ENGAGEMENT (~1-2KB)
**Job**: Show how to contribute and participate  
**Visitors**: Community contributors (#6), engaged users  
**Content**:
- Ways to contribute: Dev, infrastructure, governance, content, community
- Community channels: Discord (links to channels), Twitter, blog
- Active initiatives: Foundation projects, bounties, working groups
- Skill matching: "If you know X, you can help with Y"

**Current mapping**:
- NOT ON HOME — entire section missing
- Should link to Community tab (if exists) or community.livepeer.org

**Status**: 🔴 Missing entirely — HIGH PRIORITY

---

### SECTION 9: QUICK NAVIGATION (Persistent, not scrolling)
**Job**: Help returning users jump to target  
**Visitors**: Returning users (#7), all users on every Home visit  
**Content**:
- Sticky header nav with Home, About, Developers, Orchestrators, Delegators, Solutions, Community
- Quick-links: Popular pages (primer, roadmap, API docs, calculator, ecosystem)
- Search box
- Breadcrumbs: "Home > About > Ecosystem"

**Current mapping**:
- Assumed in global site nav (not specific to Home)
- Sticky quality TBD

**Status**: ⚠️ Assumed to exist in global nav; quality unknown

---

## Gap Analysis & Priority

### 🔴 HIGH PRIORITY GAPS

#### Gap 1: Roadmap Content (Section 6)
- **What**: `roadmap.mdx` is 1.8KB, needs full Foundation 3-phase plan
- **Why**: Evaluators and investors need this to assess viability
- **Impact**: Without this, investment credibility suffers
- **Source**: Foundation blog posts, Transformation SPE docs, strategy documents
- **Effort**: Medium (need to collate from Foundation sources, write summary)

#### Gap 2: Community & Engagement Section (Section 8)
- **What**: No Home section for "How to contribute," "Join community," "Get involved"
- **Why**: Persona #6 (Community Contributor) has no pathway from Home
- **Impact**: Community potential untapped; organic contributions lost
- **Solution**: Add section with contribution paths, Discord links, active initiatives
- **Effort**: Low (collate existing info, link to Discord/projects)

#### Gap 3: Section 4 Proof/Credibility Visibility (Section 4)
- **What**: Proof content exists (Daydream, Studio, metrics) but not visible on Home above the fold
- **Why**: Skeptical personas (#2, #4, #5) need to see "is this real?" signals early
- **Solution**: Dedicated proof carousel with live projects + metrics
- **Effort**: Medium (consolidate from existing sources, design carousel)

### ⚠️ MEDIUM PRIORITY GAPS

#### Gap 4: Section 5 FAQ/Quick Facts (Section 5)
- **What**: No quick-answer section on Home for common questions
- **Why**: Hurried personas need TL;DR answers
- **Solution**: 5-8 quick-fact cards answering top questions
- **Effort**: Low (write 1-3 sentence answers, design cards)

#### Gap 5: Section 3 Role Discovery Clarity (Section 3)
- **What**: `mission-control.mdx` and `get-started.mdx` both provide routing; unclear which is primary
- **Why**: Redundancy causes confusion about "official" path
- **Solution**: Consolidate or clearly separate (quick vs. detailed)
- **Effort**: Low (clarify existing structure, update nav)

#### Gap 6: Definition Accuracy (Section 1)
- **What**: Hero definition of Livepeer unclear (AI infrastructure? GPU network? Video infrastructure?)
- **Why**: Newcomers can't answer "what is this?" without clarity
- **Solution**: Audit evolution.mdx, confirm AI pivot is lead story, update hero definition
- **Effort**: Low (review + edit)

### ✅ GOOD (No action needed)

#### Section 2: Primer
- primer.mdx (10.6KB) is strong, well-written, good job

#### Section 7: Research & Technical
- Content exists (whitepaper, architecture, specs) but link visibility needs audit

#### Section 9: Navigation
- Assumed in global site nav; quality depends on site-wide nav design

---

## Proposed Home Organization (Canonical)

```
HOME TAB STRUCTURE (Reorganized for jobs + personas)

╔═══════════════════════════════════════════════════════════╗
║                       HERO SECTION                         ║
║  [Headline] Livepeer is real-time AI infrastructure       ║
║  [Image]    Starfield / Architecture visualization        ║
║  [CTA]      "Get started" / "Learn more"                  ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║                 ROLE DISCOVERY SECTION                     ║
║  [Cards] 7-8 "I want to..." cards → destination links    ║
║  Order: Newcomer → Developer → GPU Op → Investor → ...    ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║              OPTIONAL: QUICK FACTS SECTION                 ║
║  Q: What is LPT?                                           ║
║  Q: How much can I earn?                                   ║
║  Q: Is this production-ready?                              ║
║  → Links to deeper content                                 ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║                   PROOF SECTION (carousel)                 ║
║  [Daydream]  "AI video in production"                      ║
║  [Studio]    "Live streaming platform"                     ║
║  [ComfyStream] "AI art creation"                           ║
║  [Metrics]   "Active orchestrators, daily fees"            ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║              COMMUNITY & ENGAGEMENT SECTION                ║
║  [Cards] 5 ways to contribute + Discord link              ║
║  [Links] Active initiatives, bounties, working groups     ║
╚═══════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════╗
║                    DEEP DIVES (Links)                      ║
║  [Primer]      → 10-minute "what is Livepeer?"            ║
║  [Vision]      → Where is this going?                      ║
║  [Roadmap]     → Foundation 3-phase plan                   ║
║  [Ecosystem]   → Who's building?                           ║
║  [Whitepaper]  → Technical details                         ║
║  [Benefits]    → Why choose Livepeer?                      ║
╚═══════════════════════════════════════════════════════════╝
```

---

## Current Content Status Summary

| Section | Name | Current file(s) | Status | Gap | Action |
|---|---|---|---|---|---|
| 1 | Hero | `mission-control.mdx` | ✅ Exists | Definition clarity | Audit definition |
| 2 | Primer | `primer.mdx` | ✅ Good | None | —— |
| 3 | Role Discovery | `mission-control.mdx` + `get-started.mdx` | ⚠️ Unclear | Redundancy | Clarify or consolidate |
| 4 | Proof | Scattered | 🔴 Not visible | Not consolidated | Create carousel section |
| 5 | Quick Facts | —— | 🔴 Missing | Entire section missing | Create FAQ cards |
| 6 | Roadmap | `roadmap.mdx` | 🔴 STUB (1.8KB) | Content missing | Fill in Foundation plan |
| 7 | Research | Scattered | ⚠️ Not consolidated | Link visibility | Consolidate + link visibility audit |
| 8 | Community | —— | 🔴 Missing | Entire section missing | Create engagement section |
| 9 | Navigation | Global nav | ⚠️ Quality TBD | Sticky quality | Site-wide nav audit |

---

## Integrity Check

Section structure is working when:
- [ ] Each section serves a clear job (Comprehend, Route, Proof, Decide, Engage, Return)
- [ ] Each job maps to 1-2 sections max (no scattered content)
- [ ] High-value sections (Hero, Role Discovery, Proof) are visible above the fold
- [ ] All 7 personas can find their relevant sections
- [ ] Navigation is sticky and always available
- [ ] All sections link appropriately to deeper content

---

## Review Questions

1. **Section order**: Is this the right order? Should Proof come before Role Discovery?

2. **FAQ/Quick Facts section**: Is this necessary, or should these questions be answered in-context within other sections?

3. **"Get started" stubs**: Should the `/get-started/` subdirectory stubs be filled in, or should those paths go directly to tab-specific docs?

4. **Community section prominence**: Should "Get involved" be above the fold or below?

5. **Proof section content**: Should this focus on products (Daydream, Studio) or protocol metrics (fees, active ops), or both?

6. **Definition audit**: What is the single, correct definition of Livepeer for the hero section?

7. **Sticky nav**: Should Home have its own sticky nav, or rely on global site nav?

8. **About subsections**: Should about-livepeer/ pages be reorganized for clarity, or are they fine as-is?
