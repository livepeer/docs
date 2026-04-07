You're right. I misread the page's purpose.

**What `setup-options` actually is:** a page documenting the *alternative* deployment configurations - the setups that aren't just "run go-livepeer in combined mode." The standard path lives in the Setup section. This page covers what to do instead.

The alternatives are:

| Alternative | When | vs standard |
|---|---|---|
| **Pool worker** | No LPT; want passive earnings | Don't run an Orchestrator at all - just `-transcoder` pointing at a pool |
| **O-T split** | Multi-GPU; want to separate control plane from data plane | Orchestrator and Transcoder as separate processes |
| **Siphon** | Want key isolation; GPU machine can go down without missing rewards | OrchestratorSiphon for on-chain ops; go-livepeer in transcoder mode for work |
| **Enterprise/fleet** | Multi-node commercial scale | Custom - contact Foundation |

So the correct framing isn't "which path?" - it's "I know I want to run an Orchestrator, but I don't want the standard single-machine combined setup. What are my options?"

That means:
- The decision/routing function lives in the **Navigator** (Start Here section)
- `setup-options` is a **guide** covering the four non-standard configurations with enough detail to choose and begin each one
- `join-a-pool` stays as a standalone because pool workers need the full four-step setup walkthrough
- Siphon content either absorbs here as a detailed section, or stays in Advanced Operations with a summary + link here

Do you want me to rewrite `setup-options` with that framing - focused on the alternatives rather than the navigation decision?

---

Analysis Report
Journey Analysis
Section coherence
The Deployment Details section forms a clean linear flow once inside: Setup Options (which path?) → Requirements (what do I need?) → Benchmarking (how does it perform?) → Session Limits (how many jobs?) → Join a Pool (lowest-barrier path). The dependency chain between Benchmarking and Session Limits is explicit and enforced with cross-references in both directions.
Journey gaps identified
| Gap | Severity | Resolution |
|---|---|---|
| Siphon setup has no page in this section | High | Referenced in setup-options with a note; the dep-siphon-setup.mdx should be published under advanced-operations/orchestrator-transcoder-setup. The IA review had it absorbed but the content is too substantial to fit in setup-options as an accordion. Flagged in REVIEW comments. |
| Enterprise path links to livepeer.org/contact - no confirmation this URL exists | Medium | Added REVIEW flag; path also updated to reference large-scale-operations guide |
| No section landing page / intro | Low | setup-options serves this function adequately with the tag: start here |
| AI benchmarking is absent | Medium | Flagged in benchmarking.mdx - livepeer_bench only covers video transcoding. No AI inference benchmark tool currently exists. Noted in the page scope note. |
Persona coverage

Persona A (Miner with GPU, no LPT): setup-options routes to join-a-pool immediately; join-a-pool delivers a full step-by-step path
Persona B (Easy Earner): same as A, clearest path
Persona C (Pro Operator adding AI): setup-options workload section, requirements AI tiers, session-limits AI capacity config
Persona D (Business at scale): setup-options enterprise row, requirements data centre tiers, flagged REVIEW for enterprise contact
Persona E (AI Native): requirements VRAM tiers, session-limits AI capacity field, benchmarking note on AI gap


Systematic Fixes Applied Across All Five Pages
| Issue | Files affected | Fix |
|---|---|---|
| StyledTable missing `<thead>` `<tbody>` | All five | Added throughout |
| Card in CardGroup missing arrow horizontal | All five | Added to every card |
| "Related" heading → "Related Pages" | requirements, benchmarking, session-limits | Renamed |
| Old section paths (setup-paths/, feasibility-and-hardware/, monitoring-and-troubleshooting/) | All five | Updated to new deployment-details/, operator-considerations/, monitoring-and-tools/ |
| circle-question accordion icons | setup-options, join-a-pool | Replaced with sliders, coins, gauge, calculator, calendar, list-check, clock-rotate-left, link, server, chart-line |
| Second-person voice ("You have a GPU") | setup-options | Rewritten as entity-led |
| sidebarTitle: Navigator conflict | setup-options | Changed to Setup Options |
| Orphan single `<Card>` outside `<CardGroup>` | setup-options | Absorbed into the CardGroup |
| Missing LinkArrow import | setup-options, requirements, benchmarking, session-limits, join-a-pool | Added |
| Missing ScrollableDiagram import | setup-options | Added |
| Script code block using icon="terminal" | benchmarking | Changed to icon="code" for bash scripts |
| JSON code block using icon="terminal" | session-limits | Changed to icon="code" for JSON |
| status: published (premature for several pages) | setup-options, requirements, benchmarking, session-limits, join-a-pool | All changed to current |
| Intro "This page covers..." self-description | benchmarking | Rewritten to narrative opening |
| CardGroup cols=3 on Cards without enough content | join-a-pool (pool choice section) | Changed to cols=2 with proper arrows |
| Intro text of benchmarking was second-person ("you") | benchmarking | Entity-led rewrite |

---

Short answer: no, they don't really belong there either - they've been in the wrong place from the start.

Here's the honest diagnosis:

---

## Where Benchmarking and Session Limits Actually Belong

### The problem

Both pages were originally in **Operator Considerations** (flagged as "weird??" in the IA). The v2 review moved them to **Deployment Details** - which is better, but still not right. The issue is neither page is about *deployment architecture decisions*. Deployment Details should answer "which configuration do I use?" - not "how do I validate my hardware before going live?"

### What each page actually does

| Page | Real purpose | Real stage |
|---|---|---|
| `benchmarking.mdx` | One-time pre-launch diagnostic - measure GPU capacity | Between **Requirements** and **Setup** |
| `session-limits.mdx` | Configuration step - set `-maxSessions` correctly | **During Setup** (it's a flag you set) |

### The right home for each

**`benchmarking`** → **absorb into `requirements.mdx` as a section**

Requirements already covers *what hardware you need*. Benchmarking covers *how much capacity that hardware has*. They answer the same question at different depths. A `### Testing Your Hardware Capacity` section at the bottom of requirements with the `livepeer_bench` essentials is cleaner than a standalone page for what is ultimately a one-time diagnostic run.

If it must stay standalone (the content is genuinely substantial), it belongs under **Monitoring & Tools** alongside `metrics-monitoring` - both are about measuring your node's performance. Pre-launch and post-launch variants of the same activity.

**`session-limits`** → **absorb into Setup > `r-configure`**

`-maxSessions` is a flag. Setting it correctly is a configuration step. The calculation logic (min of hardware limit vs bandwidth limit) is genuinely useful, but it belongs inside the configuration page alongside `-pricePerUnit` and `-nvidia`, not as a standalone guide. The AI `capacity` field in `aiModels.json` similarly belongs in the AI configuration guide.

---

### Revised Deployment Details

After those moves, **Deployment Details** becomes cleaner and more coherent:

```
Deployment Details (3-4 pages)
├── setup-options     → "Which path?" (pool / solo / split / fleet)
├── requirements      → "What do I need?" + hardware testing (absorbs benchmarking)
└── join-a-pool       → "How do I join a pool?"
```

Siphon setup stays in **Advanced Operations > `orchestrator-transcoder-setup`** as planned - it's an advanced architectural pattern, not a standard deployment path.

---

### What to do with the files produced

The benchmarking and session-limits files I produced are correct content - they just need relocating:

- Extract the `livepeer_bench` essentials into a `### Testing Your Hardware` section at the bottom of `requirements.mdx`
- Fold the `-maxSessions` calculation into `r-configure.mdx` under a `### Session Limit` heading
- Archive the standalone files or keep them as stubs that redirect to their absorbed locations

Want me to produce the merged `requirements.mdx` with benchmarking absorbed, and flag the session-limits content for the configure page?

---




You're right. I misread the page's purpose.

**What `setup-options` actually is:** a page documenting the *alternative* deployment configurations - the setups that aren't just "run go-livepeer in combined mode." The standard path lives in the Setup section. This page covers what to do instead.

The alternatives are:

| Alternative | When | vs standard |
|---|---|---|
| **Pool worker** | No LPT; want passive earnings | Don't run an Orchestrator at all - just `-transcoder` pointing at a pool |
| **O-T split** | Multi-GPU; want to separate control plane from data plane | Orchestrator and Transcoder as separate processes |
| **Siphon** | Want key isolation; GPU machine can go down without missing rewards | OrchestratorSiphon for on-chain ops; go-livepeer in transcoder mode for work |
| **Enterprise/fleet** | Multi-node commercial scale | Custom - contact Foundation |

So the correct framing isn't "which path?" - it's "I know I want to run an Orchestrator, but I don't want the standard single-machine combined setup. What are my options?"

That means:
- The decision/routing function lives in the **Navigator** (Start Here section)
- `setup-options` is a **guide** covering the four non-standard configurations with enough detail to choose and begin each one
- `join-a-pool` stays as a standalone because pool workers need the full four-step setup walkthrough
- Siphon content either absorbs here as a detailed section, or stays in Advanced Operations with a summary + link here

Do you want me to rewrite `setup-options` with that framing - focused on the alternatives rather than the navigation decision?
