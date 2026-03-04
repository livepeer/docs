# GIT WRITE PROTOCOL
- **ENFORCEMENT:** You MUST verify the existence of local Git hooks in `.git/hooks/` before initiating any write command (commit, push, rebase).
- **DEFAULT:** Do not bypass hooks (`--no-verify` or `-n`) during normal operation.
- **EXCEPTION:** `git commit --no-verify` is allowed only with explicit human in-thread instruction and required audit metadata per `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`.
- **BEHAVIOR:** When a write command is initiated, you MUST announce: "Initiating [action]. Please approve the safety checkpoint in your terminal."
- **RECOVERY:** If a command fails, suggest restoring from the latest `checkpoint/` branch.
