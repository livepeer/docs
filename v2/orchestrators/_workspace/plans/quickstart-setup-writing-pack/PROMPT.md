# Quickstart and Setup Writing Prompt

## Context

- **Branch**: `docs-v2-dev`
- **Repo**: Livepeer docs v2
- **Tab**: Orchestrators
- **Sections**: Quickstart (2 pages) and Setup (4 pages)

Rewrite the orchestrator Quickstart and Setup sections. Each section has existing content (in `current-pages/`) that should be used as source material - extract accurate commands, flags, and docker-compose patterns. The stubs (in `stubs/`) define what each page SHOULD contain.

## Critical Design Decisions

1. **Quickstart = hardware verification ONLY.** Off-chain. No staking. No ETH. No Arbitrum. "Does my GPU work with Livepeer?" - that's it. Two pages: overview router + one full quickstart page with both video and AI tests.

2. **Setup = production readiness.** On-chain. Staking. All 3 node modes. Does NOT cover earning, pricing strategy, or operational tuning - those are in Guides. Setup ends at "node is on-chain, verified, and has basic monitoring."

3. **No new files or renames.** Write content into the existing filenames. The nav already points to these files.

## Target Files

### Quickstart (2 pages)

| Target file | Stub | Current content | What to write |
|------------|------|----------------|--------------|
| `v2/orchestrators/quickstart/guide.mdx` | `stubs/quickstart-guide.mdx` | `current-pages/quickstart-guide.mdx` (177 lines) | Overview/router. Brief. Links to the quickstart page and forward to Setup. |
| `v2/orchestrators/quickstart/video-transcoding.mdx` | `stubs/quickstart-video-transcoding.mdx` | `current-pages/quickstart-video-transcoding.mdx` (312 lines) | THE quickstart page. Both video AND AI smoke tests. Off-chain only. See stub for full structure. |

**Also read** `current-pages/quickstart-AI-prompt-start.mdx` (298 lines) - has AI setup content to draw from but is NOT a target file. The AI test goes INTO video-transcoding.mdx alongside the video test.

### Setup (4 pages)

| Target file | Stub | Current content | What to write |
|------------|------|----------------|--------------|
| `v2/orchestrators/setup/guide.mdx` | `stubs/setup-guide.mdx` | `current-pages/setup-guide.mdx` (182 lines) | Overview with visual flow + links to Guides sections for post-setup. |
| `v2/orchestrators/setup/rs-install.mdx` | `stubs/setup-install.mdx` | `current-pages/setup-install.mdx` (497 lines) | Install go-livepeer. Docker primary, binary per OS via Views. Current content is strong - rewrite to match stub structure, keep accurate commands. |
| `v2/orchestrators/setup/configure.mdx` | `stubs/setup-configure.mdx` | `current-pages/setup-configure.mdx` (491 lines) | Configure with tabs for Video/AI/Dual. Current content has good flag coverage - restructure into tabbed layout. |
| `v2/orchestrators/setup/connect-and-activate.mdx` | `stubs/setup-connect.mdx` | `current-pages/setup-connect.mdx` (235 lines) | Connect to Arbitrum: fund, stake, register, activate, verify on Explorer. Current content covers this - expand with AI registration step. |
| `v2/orchestrators/setup/test.mdx` | `stubs/setup-test.mdx` | `current-pages/setup-test.mdx` (298 lines) | Verify everything + basic monitoring. Absorb basic monitoring from `current-pages/setup-monitor.mdx` (255 lines). |

**Pages being absorbed/removed from nav (do NOT write these):**
- `r-monitor.mdx` - basic monitoring absorbed into test.mdx. Full monitoring is in Guides.
- `rcs-requirements.mdx` - requirements covered in Guides > Operator Considerations > Requirements. Reference only.
- `s-guide.mdx`, `x-test.mdx` - dead stubs, ignore.

## Source Files

### `current-pages/` (10 files)
The existing content. **Extract accurate commands, flags, docker-compose patterns, and verification steps.** Do NOT invent commands. If a command appears here, use it. If you need one that doesn't, add a REVIEW flag.

### `v1-sources/` (11 files)
Legacy v1 orchestrator docs. Useful for:
- `monitor-metrics.mdx` - Prometheus metric names and monitoring patterns
- `configure-reward-calling.mdx` - reward calling flags
- `o-t-split.mdx` - O-T split configuration reference
- `set-pricing.mdx` - pricing flag reference
- Other files for cross-reference on flag accuracy

### `gateway-reference/` (2 files)
Gateway quickstart and docker-compose templates. Useful for:
- Understanding the off-chain gateway setup pattern (for quickstart, where we run orchestrator + gateway on same machine)
- Docker-compose structure patterns

### `reference/` (2 files)
- `glossary.mdx` - canonical terminology
- `page-authoring-SKILL.md` - authoring standards

## Standards (apply to ALL pages)

### Frontmatter
Keep existing frontmatter from current files. Update `status` to `current` and `lastVerified` to `2026-03-16` when content is complete. Update `description` to match the stub's description.

### Components
- `Steps` for sequential procedures (Mintlify global, do NOT import)
- Code blocks with `icon="terminal"` and short `filename` for bash
- `StyledTable` for any data tables (import from `/snippets/components/layout/tables.jsx`)
- `Note`, `Warning`, `Tip` for callouts (Mintlify globals)
- `CustomDivider` between major sections (import from `/snippets/components/primitives/divider.jsx`)
- `CardGroup` / `Card` for Related Pages (Mintlify globals)
- `BorderedBox variant="accent"` around tab groups (import from `/snippets/components/layout/containers.jsx`)
- `View` components for OS selection on install page (Mintlify global)
- `Tabs` / `Tab` for node mode selection on configure page (Mintlify globals)

### Style
- UK spelling throughout
- No em dashes (use hyphens)
- Entity-led voice ("the orchestrator" not "your orchestrator")
- Headers concise and technical
- Every code block has `icon="terminal"` for bash, `icon="code"` for config, plus short `filename`

## Page-Specific Instructions

### quickstart/guide.mdx
- KEEP IT SHORT. This is a router, not content.
- 2-3 sentences explaining what the quickstart proves
- CardGroup linking to video-transcoding.mdx
- "After the Quickstart" CardGroup linking to Setup, Operator Rationale, Join a Pool
- ~50-80 lines total

### quickstart/video-transcoding.mdx
- This is the MAIN quickstart page. Both video AND AI tests.
- Use the PAGE STRUCTURE from the stub verbatim as your outline
- Video test: orchestrator (`-network offchain`) + gateway on same machine + ffmpeg
- AI test: orchestrator + AI runner + curl test
- LLM alternative accordion for 8-16 GB GPUs
- Every step has a verification ("Expected output: ...")
- Be HONEST: "This verifies hardware. It does not earn revenue."
- ~300-400 lines

### setup/guide.mdx
- Visual flow (mermaid or numbered list) showing: Install → Configure → Connect → Verify
- "What You Will Need" summary table
- "After Setup" CardGroup linking to 6 Guides sections (Staking and Earning, Config and Optimisation, Monitoring and Tools, Workloads and AI, Deployment Details, Troubleshooting)
- ~100-150 lines

### setup/rs-install.mdx
- Use View components for OS: Docker, Linux, Windows, macOS
- Docker is PRIMARY and RECOMMENDED
- Current content (497 lines) has good commands - restructure, don't reinvent
- For dual mode: note to also pull AI runner container
- Verification step per platform
- ~400-500 lines

### setup/configure.mdx
- Tabs inside BorderedBox for Video / AI / Dual Mode
- docker-compose template per mode with exact flags
- Common Configuration section below tabs: networking, GPU selection, pricing basics, persistent data
- Current content (491 lines) has good flag coverage - restructure into tabs
- Link to Guides > Config and Optimisation for detailed pricing and tuning
- ~400-500 lines

### setup/connect-and-activate.mdx
- StyledSteps for the 8-step connection flow (see stub)
- Be honest about LPT acquisition time (hours to days)
- Include AI capability registration (Step 6 in stub)
- Include reward calling enablement (Step 8 in stub)
- Troubleshooting accordion at bottom for common connection issues
- ~250-350 lines

### setup/test.mdx
- StyledSteps for 6 verification checks (see stub)
- Absorb basic monitoring check from r-monitor.mdx (Step 6: verify Prometheus endpoint responds)
- Do NOT include full monitoring setup (that's Guides > Monitoring and Tools)
- "Setup Complete" note at bottom with CardGroup to Guides sections
- Clear boundary: "The node is now operational. Earning starts in Guides."
- ~250-350 lines

## General Rules

1. **Do NOT fabricate commands.** Use commands from `current-pages/` or `v1-sources/`. REVIEW flag anything uncertain.
2. **Do NOT include pricing strategy, earning projections, or delegation guidance.** Those are Guides concerns.
3. **Every step has a verification.** "Run X" is incomplete. "Run X. Expected output: Y" is complete.
4. **Time estimates must be honest.** LPT acquisition = hours to days. Model download = minutes to 30 min.
5. **Quickstart is off-chain. Setup is on-chain.** Do not mix.
6. **Keep existing filenames.** Write INTO the current files, not new ones.
