# Style and Language Profile

**Source**: `tools/config/style-language-profile-en-gb.json`
**What it is**: Machine-readable style profile for GB English documentation. Defines spelling conventions, punctuation rules, capitalisation standards, and preferred phrase patterns.
**Use in**: Phase 3 and 4 — language compliance check. The copy-governance.md file captures the human-readable rules; this file is the machine-enforceable version.

---

## Key rules (from copy-governance.md + this profile)

- **UK English**: organise, colour, practise (verb), honour, recognised, favour, neighbour — not US spellings
- **Cspell config**: `tools/config/cspell.json` — spell check dictionary for technical terms

---

## Related file

`tools/config/cspell.json` — spell check configuration with custom dictionary for protocol-specific terms (Livepeer, LPT, orchestrator, etc.)
