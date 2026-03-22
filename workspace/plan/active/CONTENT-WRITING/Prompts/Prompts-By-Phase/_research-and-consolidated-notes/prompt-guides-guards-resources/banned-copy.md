# Banned Words and Phrases

**Sources**: `tools/lib/copy-governance/banned-words.txt` + `tools/lib/copy-governance/banned-phrases.txt`
**What these are**: Machine-readable ban lists for the copy governance system. The `copy-governance.md` file in this folder is the human-readable version with reasons; these are the raw lists used by tooling.
**Use in**: Phase 3 content pass — automated gate after writing. Zero tolerance for banned words/phrases in output.

---

## Files

| File | Contents |
|---|---|
| `tools/lib/copy-governance/banned-words.txt` | Single words never used in documentation (e.g. effectively, essentially, basically, meaningful, significant, real, various, several, obviously, clearly) |
| `tools/lib/copy-governance/banned-phrases.txt` | Multi-word phrases never used (e.g. "This section covers", "it is important to note", "as mentioned above", "and so on") |

---

## Human-readable version with reasons

See `copy-governance.md` in this folder — contains the full ban list with the reason each item is banned. The machine-readable files are authoritative for the count; the `copy-governance.md` file has the explanations.

---

## Note

The `copy-governance.md` in this folder was generated from these source files. If the source `.txt` files are updated, `copy-governance.md` may need regeneration. Source path:
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/copy-governance.md`
