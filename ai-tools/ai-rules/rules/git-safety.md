# GIT WRITE PROTOCOL
- **ENFORCEMENT:** You MUST verify the existence of local Git hooks in `.git/hooks/` before initiating any write command (commit, push, rebase).
- **TRACKED MOVES:** You MUST use `git mv` for any tracked file rename or relocation. Do not perform rename work as manual delete-plus-add churn.
- **ALIASES:** If both old and new tracked paths must coexist temporarily, you MUST document the old path as an intentional compatibility alias and keep both paths deliberately.
- **DELETION GATE:** You MUST not remove the old tracked path until references/imports have been validated and the commit follows the repository's deletion approval flow.
- **DEFAULT:** Do not bypass hooks (`--no-verify` or `-n`) during normal operation.
- **EXCEPTION:** `git commit --no-verify` is allowed only with explicit human in-thread instruction and required audit metadata per `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`.
- **BEHAVIOR:** When a write command is initiated, you MUST announce: "Initiating [action]. Please approve the safety checkpoint in your terminal."
- **RECOVERY:** If a command fails, suggest restoring from the latest `checkpoint/` branch.
