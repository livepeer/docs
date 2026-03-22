# Testing Outputs

**Source folder**: `workspace/plan/active/CONTENT-WRITING/Testing/`
**What these are**: Prompt test runs — both the test prompts used and the outputs produced. Use to understand what's been tested, what worked, and what didn't.
**Use in**: Before running a prompt, check if it's been tested here. Test results inform which prompt variants to use.

---

## Folder structure

```
Testing/
└── Site-Tabs/
    ├── 1-site-prompt.md          — Phase 1 site-level prompt test
    ├── 2-tab-prompt.md           — Phase 2 tab-level prompt test
    ├── Site/
    │   ├── 01-updated-brief      — Updated brief for site-level test
    │   └── Outputs/
    │       ├── 1.1-gpt.md        — GPT output for site test
    │       └── 01-site-ownership — Site ownership output
    └── Tabs/
        └── lp-token/
            ├── tab-prompt-lp-token.md   — Test prompt for LP Token tab
            └── outputs/
                └── lpt-claude.md        — Claude output for LP Token tab test
```

---

## Key finding from LP Token test

The LP Token test output (`lpt-claude.md`) shows a known issue: pre-filling the `arriving question` in the context block constrained all downstream Phase 1 design. The `audience-design.md` prompt was updated to never pre-fill this — the AI derives it in Phase 1.

---

## Tutorial writing pack (Orchestrators)
**Source**: `v2/orchestrators/_workspace/plans/tutorial-writing-pack/PROMPT.md`
**What it is**: A domain-specific content prompt for writing orchestrator tutorial pages. Has associated reference files (plan, page-authoring skill, glossary, execution plan).
**Use**: Niche but real — shows how a content prompt is structured for a specific page type + audience combination.
