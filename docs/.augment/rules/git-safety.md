# GIT WRITE PROTOCOL
- **ENFORCEMENT:** You MUST verify the existence of local Git hooks in `.git/hooks/` before initiating any write command (commit, push, rebase).
- **FORBIDDEN:** You are STRICTLY FORBIDDEN from using `--no-verify` or `-n`.
- **BEHAVIOR:** When a write command is initiated, you MUST announce: "Initiating [action]. Please approve the safety checkpoint in your terminal."
- **RECOVERY:** If a command fails, suggest restoring from the latest `checkpoint/` branch.
