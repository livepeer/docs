# Review: livepeer-protocol-and-network.mdx (concepts0)

**Page**: `v2/about/concepts0/livepeer-protocol-and-network.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (10 categories, ~135 checks)

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Livepeer Protocol and Network" | PASS | |
| sidebarTitle | Yes | "Livepeer" | INFO | Single-word sidebar; collides risk if many siblings use the same. |
| description | Yes | "An overview of the Livepeer Protocol and Network - the substrate for real-time video and AI workloads." | PASS | Same as concepts0/about-livepeer.mdx. |
| pageType | Yes | concept | PASS | |
| audience | Yes | community | PASS | |
| purpose | Yes | explain | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | livepeer, about, livepeer protocol, protocol overview, protocol, overview | FAIL | Same generic set used in three other concepts0/ files. |
| OG image | Yes | Complete | PASS | |
| veracityStatus | No | -- | FAIL | Missing. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing veracityStatus. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | |
| 1. Frontmatter | 1.12 | OG image complete | PASS | |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic + duplicated across siblings. |
| 2. Voice | 2.1 | UK English | FAIL | "Decentralizing", "centralized", "monetization", "incentivizes" in YouTube summary Accordion (lines 36-92). |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | PASS | |
| 2. Voice | 2.4 | Zero banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order correct | INFO | Opens with YouTubeVideo + Accordion, then Tip + intro sentence. Reader sees video before page job stated. |
| 2. Voice | 2.6 | Paragraph discipline | INFO | Body prose is ~3 sentences. |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | FAIL | Commented blocks (lines 219, 252) use "Broadcasters" — risk of leak when uncommented. |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | (Active prose only; commented blocks contain "Broadcasters".) |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | PASS | |
| 2. Voice | 2.19 | Terms match canonical | PASS | |
| 2. Voice | 2.21 | First use defined or linked | INFO | DePIN linked; "go-livepeer" not introduced before composables render. |
| 3. Headings | 3.1 | Heading score >=20/25 | INFO | Only h2 in active body is the BorderedBox Tabs (no top-level H2 heading at all in rendered content). Headings inside composables not visible to this file's H2 inventory. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | |
| 3. Headings | 3.7 | Expert editorial choice | PASS | |
| 4. Structure | 4.1 | One purpose, one job | PASS | Job: orient via 4 tabbed views (Overview/Protocol/Network/Participants). |
| 4. Structure | 4.2 | Purpose statement test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | concepts0 not in nav. |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages or Next CTA. Composables may carry their own — not verified here. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | |
| 4. Structure | 4.7 | Info type per section | INFO | Tabs delegate sections to composables. |
| 4. Structure | 4.8 | No content duplication | INFO | Composables `protocol.mdx`, `network.mdx`, `actors.mdx`, `overview.mdx` are reused — design pattern is composable, not duplication. However the page concept itself overlaps with concepts/about-livepeer.mdx and concepts0/about-livepeer.mdx (also titled to cover Protocol+Network). |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | None at this file's level. |
| 4. Structure | 4.11 | Discord test | FAIL | Composables not verified; content depends on them. |
| 4. Structure | 4.12 | Page size appropriate | INFO | ~16KB but ~80% commented out. |
| 4. Structure | 4.13 | No TODO/REVIEW | FAIL | Massive commented blocks lines 121-267. |
| 4. Structure | 4.14 | Flat layout | PASS | Composable pattern is good. |
| 4. Structure | 4.15 | Trade-offs present | INFO | Depends on composables. |
| 4. Structure | 4.16 | Content pass context | PASS | |
| 5. Layout | 5.1 | Correct template | PASS | Uses Tabs-in-BorderedBox pattern with composable imports — clean. |
| 5. Layout | 5.2 | Required sections | INFO | Composable design defers sections. |
| 5. Layout | 5.3 | Only approved components | INFO | YouTubeVideo, Tip, Tabs, BorderedBox, CustomDivider, Accordion. QuadGrid, DynamicTableV2, LinkArrow, CenteredContainer imported but unused. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info type → component | PASS | Tabs for 4 dimensions — appropriate. |
| 5. Layout | 5.6 | MDX renders clean | INFO | Composables resolve at build — verify imports at `/snippets/composables/pages/about/concepts/{protocol,network,actors,overview}.mdx` exist. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | |
| 5. Layout | 5.10 | Component imports | FAIL | QuadGrid, DynamicTableV2, LinkArrow, CenteredContainer imported but unused (would-be-render in commented blocks). |
| 5. Layout | 5.11 | Gold-standard template | INFO | Clean composable orchestration. |
| 5. Layout | 5.12 | Section blocks | INFO | Delegated. |
| 5. Layout | 5.13 | Section ordering | INFO | |
| 5. Layout | 5.14 | Multi-view layout | PASS | 4 tabs = single dimension → Tabs (compliant). |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | |
| 5. Layout | 5.16 | Related Pages footer | FAIL | None at file level. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.18 | Tab icon prop | PASS | All 4 tabs have icons (cube, cube, circle-nodes, users). |
| 5. Layout | 5.19 | Accordion icon prop | PASS | Summary Accordion has icon="video". |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | INFO | YouTubeVideo + Accordion + Tabs(BorderedBox) — borderline. |
| 5. Layout | 5.26 | CustomDivider placement | INFO | |
| 5. Layout | 5.28 | Import section ordering | FAIL | Single block; 4 composable imports below component imports without comment header. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | YouTube paraphrase has many numbers ("$250B", "40%", "10x", "3M minutes weekly") — not flagged. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | concepts0 = drafts. Heavy commented blocks confirm WIP. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Every claim citable | FAIL | YouTube paraphrase numbers unsourced. |
| 6. Veracity | 6.4 | Numbers are real | FAIL | All from YouTube. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | |
| 6. Veracity | 6.10 | Source authority | INFO | YouTube (T3); Stanford (T3 with author). |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | |
| 7. Navigation | 7.7 | File in correct lane | FAIL | |
| 7. Navigation | 7.8 | File naming | PASS | |
| 8. Links | 8.1 | Internal links resolve | N/A | None at file level (composables may have). |
| 8. Links | 8.3 | Snippet imports | INFO | 4 composable imports — verify all exist at `/snippets/composables/pages/about/concepts/`. |
| 8. Links | 8.5 | Page renders | INFO | Pending composable resolution. |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1-9.5 | -- | FAIL | |
| 10. Completeness | 10.1 | Every question has a page | INFO | Depends on composables. |
| 10. Completeness | 10.2 | Zero-to-hero journey | INFO | |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | |

## Summary

**Verdict**: NEEDS WORK — cleanest architectural pattern of the concepts0 set (composable-based Tabs orchestration). But page is barely written at file level — most content delegated; no Related Pages; no closure; heavy commented blocks; missing veracityStatus. Composables not reviewed here.

**Critical issues**:
1. Missing veracityStatus.
2. ~80% of file is commented-out alternative content (lines 121-267).
3. 4 imports unused (QuadGrid, DynamicTableV2, LinkArrow, CenteredContainer).
4. No Related Pages or Next CTA at file level.
5. UK/US mixing in YouTube summary Accordion (matches concepts0/about-livepeer.mdx, concepts0/livepeer-principles.mdx).
6. Generic keyword set duplicated across siblings.
7. Composables imported (`/snippets/composables/pages/about/concepts/{protocol,network,actors,overview}.mdx`) — verify existence as separate audit task.

**Strengths**:
- Best architectural pattern of the set: composable orchestration.
- Tabs use icons.
- Clean intro flow once YouTube/Accordion are removed.
