#!/usr/bin/env python3
"""
Repair ai-tools/registry/ai-tools-registry.json.
Run from the repo root: python3 tasks/scripts/repair-registry.py
"""
import json, copy

REGISTRY = "ai-tools/registry/ai-tools-registry.json"

with open(REGISTRY) as f:
    reg = json.load(f)

arts = reg["artifacts"]

# ─── helpers ────────────────────────────────────────────────────────────────

def make_template(num, name, slug):
    return {
        "id": f"ai-skills-templates-{num}-{slug}-template-md",
        "path": f"ai-tools/ai-skills/templates/{num}-{name}.template.md",
        "artifact_type": "skill-template",
        "category": "ai-skills-templates",
        "lifecycle_state": "canonical-template",
        "current_lane": "templates",
        "target_lane": "templates",
        "canonical_source": ["ai-tools/ai-skills/templates/*.template.md"],
        "derived_outputs": ["ai-tools/agent-packs/skills/**", "~/.codex/skills/**"],
        "runtime_targets": ["portable skill export", "codex local sync"],
        "validators": [
            "tests/unit/skill-docs.test.js",
            "tests/unit/export-portable-skills.test.js",
            "tests/unit/codex-skill-sync.test.js"
        ],
        "repair_commands": [
            "node tools/scripts/automations/ai/agents/export-portable-skills.js --write",
            "node tools/scripts/automations/ai/agents/sync-codex-skills.js"
        ],
        "catalog_group": "ai-skills/templates",
        "status": "canonical-active",
        "migration_wave": "wave-2",
        "notes": "Canonical template-first skill source for the portable/synced skill lifecycle."
    }

def make_template_companion(num, name, ref_slug, ref_file, slug):
    return {
        "id": f"ai-skills-templates-{num}-{slug}-references-{ref_slug}",
        "path": f"ai-tools/ai-skills/templates/{num}-{name}.references/{ref_file}",
        "artifact_type": "template-companion-bundle",
        "category": "ai-skills-templates",
        "lifecycle_state": "canonical-template",
        "current_lane": "templates",
        "target_lane": "templates",
        "canonical_source": ["ai-tools/ai-skills/templates/*.references/**"],
        "derived_outputs": [
            "ai-tools/agent-packs/skills/**/references/**",
            "~/.codex/skills/**/references/**"
        ],
        "runtime_targets": ["portable skill export", "codex local sync"],
        "validators": [
            "tests/unit/export-portable-skills.test.js",
            "tests/unit/codex-skill-sync.test.js"
        ],
        "repair_commands": [
            "node tools/scripts/automations/ai/agents/export-portable-skills.js --write",
            "node tools/scripts/automations/ai/agents/sync-codex-skills.js"
        ],
        "catalog_group": "ai-skills/templates",
        "status": "canonical-active",
        "migration_wave": "wave-2",
        "notes": "Canonical companion reference bundles for template-first skills."
    }

def make_portable_skill(skill_name, slug):
    return {
        "id": f"agent-packs-skills-{slug}-skill-md",
        "path": f"ai-tools/agent-packs/skills/{skill_name}/SKILL.md",
        "artifact_type": "portable-skill",
        "category": "agent-packs-skills",
        "lifecycle_state": "portable-export",
        "current_lane": "exports",
        "target_lane": "exports",
        "canonical_source": ["ai-tools/ai-skills/templates/*.template.md"],
        "derived_outputs": ["ai-tools/agent-packs/skills/**"],
        "runtime_targets": ["Codex", "Cursor", "Claude", "Windsurf"],
        "validators": ["tests/unit/export-portable-skills.test.js"],
        "repair_commands": [
            "node tools/scripts/automations/ai/agents/export-portable-skills.js --write"
        ],
        "catalog_group": "agent-packs/skills",
        "status": "generated-active",
        "migration_wave": "wave-2",
        "notes": "Portable SKILL.md exports derived from canonical templates."
    }

def make_portable_ref(skill_name, slug, ref_file, ref_slug):
    return {
        "id": f"agent-packs-skills-{slug}-references-{ref_slug}",
        "path": f"ai-tools/agent-packs/skills/{skill_name}/references/{ref_file}",
        "artifact_type": "portable-skill-reference",
        "category": "agent-packs-skills",
        "lifecycle_state": "portable-export",
        "current_lane": "exports",
        "target_lane": "exports",
        "canonical_source": ["ai-tools/ai-skills/templates/*.references/**"],
        "derived_outputs": ["ai-tools/agent-packs/skills/**/references/**"],
        "runtime_targets": ["Codex", "Cursor", "Claude", "Windsurf"],
        "validators": ["tests/unit/export-portable-skills.test.js"],
        "repair_commands": [
            "node tools/scripts/automations/ai/agents/export-portable-skills.js --write"
        ],
        "catalog_group": "agent-packs/skills",
        "status": "generated-active",
        "migration_wave": "wave-2",
        "notes": "Portable reference bundles derived from template companion directories."
    }

def make_local_skill(skill_dir, slug):
    return {
        "id": f"ai-skills-{slug}-skill-md",
        "path": f"ai-tools/ai-skills/{skill_dir}/SKILL.md",
        "artifact_type": "skill-root",
        "category": "ai-skills-local",
        "lifecycle_state": "local-synced",
        "current_lane": "local",
        "target_lane": "local",
        "canonical_source": ["ai-tools/ai-skills/*/SKILL.md"],
        "derived_outputs": [],
        "runtime_targets": ["repo-local skill use"],
        "validators": ["tests/unit/skill-docs.test.js"],
        "repair_commands": [
            "node tools/scripts/automations/ai/agents/sync-codex-skills.js --check"
        ],
        "catalog_group": "ai-skills/local-skills",
        "status": "canonical-active",
        "migration_wave": "wave-3",
        "notes": "Repo-local SKILL.md file for use via skill loading."
    }

def make_skill_companion(skill_dir, slug, ref_file, ref_slug, artifact_type="framework-doc"):
    return {
        "id": f"ai-skills-{slug}-references-{ref_slug}",
        "path": f"ai-tools/ai-skills/{skill_dir}/references/{ref_file}",
        "artifact_type": artifact_type,
        "category": "ai-skills-framework",
        "lifecycle_state": "manual-doc",
        "current_lane": "manual-doc",
        "target_lane": "manual-doc",
        "canonical_source": [f"ai-tools/ai-skills/{skill_dir}/**"],
        "derived_outputs": [],
        "runtime_targets": ["manual skill loading"],
        "validators": [],
        "repair_commands": [],
        "catalog_group": f"ai-skills/{skill_dir}",
        "status": "active-framework",
        "migration_wave": "wave-2",
        "notes": f"Companion reference file for the {skill_dir} skill."
    }

def make_skill_agent(skill_dir, slug):
    return {
        "id": f"ai-skills-{slug}-agents-openai-yaml",
        "path": f"ai-tools/ai-skills/{skill_dir}/agents/openai.yaml",
        "artifact_type": "agent-config",
        "category": "ai-skills-agents",
        "lifecycle_state": "manual-doc",
        "current_lane": "manual-doc",
        "target_lane": "manual-doc",
        "canonical_source": [f"ai-tools/ai-skills/{skill_dir}/**"],
        "derived_outputs": [],
        "runtime_targets": ["OpenAI / Codex agent runtime"],
        "validators": [],
        "repair_commands": [],
        "catalog_group": f"ai-skills/{skill_dir}",
        "status": "active",
        "migration_wave": "wave-3",
        "notes": f"OpenAI/Codex agent config for the {skill_dir} skill."
    }

def make_codex_manifest(skill_dir, slug):
    return {
        "id": f"ai-skills-{slug}-codex-sync-manifest-json",
        "path": f"ai-tools/ai-skills/{skill_dir}/.codex-sync-manifest.json",
        "artifact_type": "sync-manifest",
        "category": "ai-skills-sync",
        "lifecycle_state": "manual-doc",
        "current_lane": "manual-doc",
        "target_lane": "manual-doc",
        "canonical_source": [f"ai-tools/ai-skills/{skill_dir}/**"],
        "derived_outputs": [],
        "runtime_targets": ["codex local sync"],
        "validators": ["tests/unit/codex-skill-sync.test.js"],
        "repair_commands": [
            "node tools/scripts/automations/ai/agents/sync-codex-skills.js"
        ],
        "catalog_group": f"ai-skills/{skill_dir}",
        "status": "active",
        "migration_wave": "wave-3",
        "notes": f"Codex sync manifest for the {skill_dir} skill."
    }

# ─── 1. Fix stale entries ────────────────────────────────────────────────────

# [55] .AI-SAFEGUARDS.md → _retired/
arts[55]["path"] = "ai-tools/ai-rules/_retired/.AI-SAFEGUARDS.md"
arts[55]["lifecycle_state"] = "retired"
arts[55]["status"] = "retired"
arts[55]["notes"] = "Empty placeholder file. Retired to _retired/; was never used as a meaningful rule source."

# [56] .augment-guidelines → _retired/
arts[56]["path"] = "ai-tools/ai-rules/_retired/.augment-guidelines"
arts[56]["lifecycle_state"] = "retired"
arts[56]["status"] = "retired"
arts[56]["notes"] = "Legacy Augment rule file stored under ai-rules (wrong path for Augment). Superseded by .augment/rules/ at project root. Retired to _retired/."

# [61] .cursor/rules/no-deletions.mdc → removed (file moved outside ai-tools/)
# Remove this entry — the file is now at .cursor/rules/no-deletions.mdc (outside ai-tools/)
arts[61] = None  # mark for removal

# [65] llms.txt.information.md → registry/llms-txt-notes.md
arts[65]["id"] = "registry-llms-txt-notes-md"
arts[65]["path"] = "ai-tools/registry/llms-txt-notes.md"
arts[65]["artifact_type"] = "manual-doc"
arts[65]["category"] = "ai-tools-registry"
arts[65]["lifecycle_state"] = "manual-doc"
arts[65]["current_lane"] = "manual-doc"
arts[65]["target_lane"] = "manual-doc"
arts[65]["canonical_source"] = ["ai-tools/registry/llms-txt-notes.md"]
arts[65]["catalog_group"] = "ai-tools/registry"
arts[65]["status"] = "active"
arts[65]["notes"] = "Notes on llms.txt / Mintlify tooling. Relocated from ai-rules/llms.txt.information.md to registry/ as docs-tooling reference."

# [66] REVIEW_TABLE.md → _retired/
arts[66]["path"] = "ai-tools/ai-rules/_retired/REVIEW_TABLE.md"
arts[66]["lifecycle_state"] = "retired"
arts[66]["status"] = "retired"
arts[66]["notes"] = "Stub review table from an abandoned pre-packet review process. All rows 'Pending'. No connection to current review-packet system. Retired to _retired/."

# [69] rules/imported/AI_GUIDELINES.md → _retired/
arts[69]["path"] = "ai-tools/ai-rules/_retired/AI_GUIDELINES.md"
arts[69]["lifecycle_state"] = "retired"
arts[69]["status"] = "retired"
arts[69]["notes"] = "Exact duplicate of ai-tools/ai-rules/AI_GUIDELINES.md (which already has a legacy notice). Neither is referenced. Retired to _retired/."

# [71] tasks-directory-structure.mdc → _retired/
arts[71]["path"] = "ai-tools/ai-rules/_retired/tasks-directory-structure.mdc"
arts[71]["lifecycle_state"] = "retired"
arts[71]["status"] = "retired"
arts[71]["notes"] = "Old Cursor rule fragment referencing /tasks/PLAN (wrong structure). Misleading. Retired to _retired/."

# [87] canonical_source[0] 33 → 40
src87 = arts[87]["canonical_source"]
arts[87]["canonical_source"] = [
    "ai-tools/ai-skills/templates/40-skill-docs.template.md" if s == "ai-tools/ai-skills/templates/33-skill-docs.template.md" else s
    for s in src87
]

# [107] canonical_source[0] 33 → 40
src107 = arts[107]["canonical_source"]
arts[107]["canonical_source"] = [
    "ai-tools/ai-skills/templates/40-skill-docs.template.md" if s == "ai-tools/ai-skills/templates/33-skill-docs.template.md" else s
    for s in src107
]

# [151] template 32 → 39
arts[151]["id"] = "ai-skills-templates-39-page-content-research-review-template-md"
arts[151]["path"] = "ai-tools/ai-skills/templates/39-page-content-research-review.template.md"

# [155] template 33 → 40
arts[155]["id"] = "ai-skills-templates-40-skill-docs-template-md"
arts[155]["path"] = "ai-tools/ai-skills/templates/40-skill-docs.template.md"

# Remove None entries (index 61)
arts = [a for a in arts if a is not None]

# ─── 2. Collect new entries ──────────────────────────────────────────────────

new_entries = []

# Template 37a: docs-research-packet-generation
new_entries.append(make_template("37", "docs-research-packet-generation", "docs-research-packet-generation"))
new_entries.append(make_template_companion("37", "docs-research-packet-generation", "packet-contract-md", "packet-contract.md", "docs-research-packet-generation"))
new_entries.append(make_template_companion("37", "docs-research-packet-generation", "scope-derivation-md", "scope-derivation.md", "docs-research-packet-generation"))
new_entries.append(make_template_companion("37", "docs-research-packet-generation", "validation-checklist-md", "validation-checklist.md", "docs-research-packet-generation"))

# Template 37b: docs-review-packet-generation.references (no template file, just references dir)
new_entries.append(make_template_companion("37", "docs-review-packet-generation", "packet-contract-md", "packet-contract.md", "docs-review-packet-generation"))
new_entries.append(make_template_companion("37", "docs-review-packet-generation", "scope-derivation-md", "scope-derivation.md", "docs-review-packet-generation"))
new_entries.append(make_template_companion("37", "docs-review-packet-generation", "tracker-contract-md", "tracker-contract.md", "docs-review-packet-generation"))
new_entries.append(make_template_companion("37", "docs-review-packet-generation", "validation-checklist-md", "validation-checklist.md", "docs-review-packet-generation"))

# Template 38a: docs-research-to-implementation-plan
new_entries.append(make_template("38", "docs-research-to-implementation-plan", "docs-research-to-implementation-plan"))
new_entries.append(make_template_companion("38", "docs-research-to-implementation-plan", "findings-triage-md", "findings-triage.md", "docs-research-to-implementation-plan"))
new_entries.append(make_template_companion("38", "docs-research-to-implementation-plan", "plan-shape-md", "plan-shape.md", "docs-research-to-implementation-plan"))

# Template 38b: docs-review-fix-execution.references (references only, template was renamed to 42)
new_entries.append(make_template_companion("38", "docs-review-fix-execution", "execution-loop-md", "execution-loop.md", "docs-review-fix-execution"))
new_entries.append(make_template_companion("38", "docs-review-fix-execution", "residual-warning-policy-md", "residual-warning-policy.md", "docs-review-fix-execution"))
new_entries.append(make_template_companion("38", "docs-review-fix-execution", "section-closeout-md", "section-closeout.md", "docs-review-fix-execution"))
new_entries.append(make_template_companion("38", "docs-review-fix-execution", "tracker-update-rules-md", "tracker-update-rules.md", "docs-review-fix-execution"))

# Templates 41 and 42 (newly numbered)
new_entries.append(make_template("41", "docs-review-packet-generation", "docs-review-packet-generation"))
new_entries.append(make_template("42", "docs-review-fix-execution", "docs-review-fix-execution"))

# agent-packs portable exports for the 4 new skills
new_entries.append(make_portable_skill("docs-research-packet-generation", "docs-research-packet-generation"))
new_entries.append(make_portable_ref("docs-research-packet-generation", "docs-research-packet-generation", "packet-contract.md", "packet-contract-md"))
new_entries.append(make_portable_ref("docs-research-packet-generation", "docs-research-packet-generation", "scope-derivation.md", "scope-derivation-md"))
new_entries.append(make_portable_ref("docs-research-packet-generation", "docs-research-packet-generation", "validation-checklist.md", "validation-checklist-md"))

new_entries.append(make_portable_skill("docs-research-to-implementation-plan", "docs-research-to-implementation-plan"))
new_entries.append(make_portable_ref("docs-research-to-implementation-plan", "docs-research-to-implementation-plan", "findings-triage.md", "findings-triage-md"))
new_entries.append(make_portable_ref("docs-research-to-implementation-plan", "docs-research-to-implementation-plan", "plan-shape.md", "plan-shape-md"))

new_entries.append(make_portable_skill("docs-review-fix-execution", "docs-review-fix-execution"))
new_entries.append(make_portable_skill("docs-review-packet-generation", "docs-review-packet-generation"))

# Local skills: docs-review-fix-execution and docs-review-packet-generation
new_entries.append(make_local_skill("docs-review-fix-execution", "docs-review-fix-execution"))
new_entries.append(make_codex_manifest("docs-review-fix-execution", "docs-review-fix-execution"))
new_entries.append(make_skill_agent("docs-review-fix-execution", "docs-review-fix-execution"))
new_entries.append(make_skill_companion("docs-review-fix-execution", "docs-review-fix-execution", "execution-loop.md", "execution-loop-md"))
new_entries.append(make_skill_companion("docs-review-fix-execution", "docs-review-fix-execution", "residual-warning-policy.md", "residual-warning-policy-md"))
new_entries.append(make_skill_companion("docs-review-fix-execution", "docs-review-fix-execution", "section-closeout.md", "section-closeout-md"))
new_entries.append(make_skill_companion("docs-review-fix-execution", "docs-review-fix-execution", "tracker-update-rules.md", "tracker-update-rules-md"))

new_entries.append(make_local_skill("docs-review-packet-generation", "docs-review-packet-generation"))
new_entries.append(make_codex_manifest("docs-review-packet-generation", "docs-review-packet-generation"))
new_entries.append(make_skill_agent("docs-review-packet-generation", "docs-review-packet-generation"))
new_entries.append(make_skill_companion("docs-review-packet-generation", "docs-review-packet-generation", "packet-contract.md", "packet-contract-md"))
new_entries.append(make_skill_companion("docs-review-packet-generation", "docs-review-packet-generation", "scope-derivation.md", "scope-derivation-md"))
new_entries.append(make_skill_companion("docs-review-packet-generation", "docs-review-packet-generation", "tracker-contract.md", "tracker-contract-md"))
new_entries.append(make_skill_companion("docs-review-packet-generation", "docs-review-packet-generation", "validation-checklist.md", "validation-checklist-md"))

# docs-copy new sub-files
new_entries.append(make_codex_manifest("docs-copy", "docs-copy"))
new_entries.append(make_skill_agent("docs-copy", "docs-copy"))
new_entries.append(make_skill_companion("docs-copy", "docs-copy", "handoff-checklist.md", "handoff-checklist-md"))
new_entries.append(make_skill_companion("docs-copy", "docs-copy", "task-routing.md", "task-routing-md"))
new_entries.append(make_skill_companion("docs-copy", "docs-copy", "workflow.md", "workflow-md"))

# _workspace files
new_entries.append({
    "id": "ai-skills-workspace-readme-md",
    "path": "ai-tools/ai-skills/_workspace/README.md",
    "artifact_type": "framework-doc",
    "category": "ai-skills-workspace",
    "lifecycle_state": "manual-doc",
    "current_lane": "workspace",
    "target_lane": "workspace",
    "canonical_source": ["ai-tools/ai-skills/_workspace/**"],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-skills/workspace",
    "status": "active",
    "migration_wave": "wave-2",
    "notes": "README for the _workspace staging area."
})
new_entries.append({
    "id": "ai-skills-workspace-examples-claude-coauthoring-md",
    "path": "ai-tools/ai-skills/_workspace/examples/claude-coauthoring.md",
    "artifact_type": "research-or-package-doc",
    "category": "ai-skills-workspace",
    "lifecycle_state": "legacy-active",
    "current_lane": "workspace",
    "target_lane": "workspace",
    "canonical_source": ["ai-tools/ai-skills/_workspace/**"],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-skills/workspace",
    "status": "workspace-staging",
    "migration_wave": "wave-4",
    "notes": "Example or research document in workspace staging area."
})
new_entries.append({
    "id": "ai-skills-workspace-research-product-writing-research-md",
    "path": "ai-tools/ai-skills/_workspace/research/product-writing-research.md",
    "artifact_type": "research-or-package-doc",
    "category": "ai-skills-workspace",
    "lifecycle_state": "legacy-active",
    "current_lane": "workspace",
    "target_lane": "workspace",
    "canonical_source": ["ai-tools/ai-skills/_workspace/**"],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-skills/workspace",
    "status": "workspace-staging",
    "migration_wave": "wave-4",
    "notes": "Product-writing research document in workspace staging area."
})
new_entries.append({
    "id": "ai-skills-workspace-research-product-writing-md",
    "path": "ai-tools/ai-skills/_workspace/research/product-writing.md",
    "artifact_type": "research-or-package-doc",
    "category": "ai-skills-workspace",
    "lifecycle_state": "legacy-active",
    "current_lane": "workspace",
    "target_lane": "workspace",
    "canonical_source": ["ai-tools/ai-skills/_workspace/**"],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-skills/workspace",
    "status": "workspace-staging",
    "migration_wave": "wave-4",
    "notes": "Product-writing skill package in workspace staging area."
})

# _retired files for ai-rules
new_entries.append({
    "id": "ai-rules-retired-ai-safeguards-md",
    "path": "ai-tools/ai-rules/_retired/.AI-SAFEGUARDS.md",
    "artifact_type": "governance-doc",
    "category": "ai-rules-retired",
    "lifecycle_state": "retired",
    "current_lane": "retired",
    "target_lane": "retired",
    "canonical_source": [],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-rules/_retired",
    "status": "retired",
    "migration_wave": "wave-4",
    "notes": "Retired placeholder file. Moved to _retired/ in Phase 8."
})
new_entries.append({
    "id": "ai-rules-retired-augment-guidelines",
    "path": "ai-tools/ai-rules/_retired/.augment-guidelines",
    "artifact_type": "rule-file",
    "category": "ai-rules-retired",
    "lifecycle_state": "retired",
    "current_lane": "retired",
    "target_lane": "retired",
    "canonical_source": [],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-rules/_retired",
    "status": "retired",
    "migration_wave": "wave-4",
    "notes": "Retired legacy Augment rule file. Superseded by .augment/rules/ at project root. Moved to _retired/ in Phase 9."
})
new_entries.append({
    "id": "ai-rules-retired-review-table-md",
    "path": "ai-tools/ai-rules/_retired/REVIEW_TABLE.md",
    "artifact_type": "governance-doc",
    "category": "ai-rules-retired",
    "lifecycle_state": "retired",
    "current_lane": "retired",
    "target_lane": "retired",
    "canonical_source": [],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-rules/_retired",
    "status": "retired",
    "migration_wave": "wave-4",
    "notes": "Retired stub review table. Moved to _retired/ in Phase 8."
})
new_entries.append({
    "id": "ai-rules-retired-ai-guidelines-md",
    "path": "ai-tools/ai-rules/_retired/AI_GUIDELINES.md",
    "artifact_type": "imported-rule-copy",
    "category": "ai-rules-retired",
    "lifecycle_state": "retired",
    "current_lane": "retired",
    "target_lane": "retired",
    "canonical_source": [],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-rules/_retired",
    "status": "retired",
    "migration_wave": "wave-4",
    "notes": "Retired duplicate import of AI_GUIDELINES.md. Moved to _retired/ in Phase 8."
})
new_entries.append({
    "id": "ai-rules-retired-tasks-directory-structure-mdc",
    "path": "ai-tools/ai-rules/_retired/tasks-directory-structure.mdc",
    "artifact_type": "rule-file",
    "category": "ai-rules-retired",
    "lifecycle_state": "retired",
    "current_lane": "retired",
    "target_lane": "retired",
    "canonical_source": [],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-rules/_retired",
    "status": "retired",
    "migration_wave": "wave-4",
    "notes": "Retired stale Cursor rule fragment with wrong task directory structure. Moved to _retired/ in Phase 8."
})

# registry/ new files
new_entries.append({
    "id": "registry-readme-md",
    "path": "ai-tools/registry/README.md",
    "artifact_type": "framework-doc",
    "category": "ai-tools-registry",
    "lifecycle_state": "manual-doc",
    "current_lane": "manual-doc",
    "target_lane": "manual-doc",
    "canonical_source": ["ai-tools/registry/README.md"],
    "derived_outputs": [],
    "runtime_targets": ["human-readable registry orientation"],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-tools/registry",
    "status": "active",
    "migration_wave": "wave-1",
    "notes": "Registry README created in Phase 8.5. Explains purpose, file table, and when/how to update."
})

# ai-tools root README
new_entries.append({
    "id": "ai-tools-readme-md",
    "path": "ai-tools/README.md",
    "artifact_type": "framework-doc",
    "category": "ai-tools-root",
    "lifecycle_state": "manual-doc",
    "current_lane": "manual-doc",
    "target_lane": "manual-doc",
    "canonical_source": ["ai-tools/README.md"],
    "derived_outputs": [],
    "runtime_targets": [],
    "validators": [],
    "repair_commands": [],
    "catalog_group": "ai-tools",
    "status": "active",
    "migration_wave": "wave-1",
    "notes": "Root README for ai-tools/ created in Phase 8.7. Orients contributors to the directory structure."
})

# ─── 3. Merge and write ───────────────────────────────────────────────────────

# Check for duplicate IDs/paths before adding
existing_ids = {a["id"] for a in arts}
existing_paths = {a["path"] for a in arts}

added = 0
for e in new_entries:
    if e["id"] in existing_ids:
        print(f"SKIP (duplicate id): {e['id']}")
        continue
    if e["path"] in existing_paths:
        print(f"SKIP (duplicate path): {e['path']}")
        continue
    arts.append(e)
    existing_ids.add(e["id"])
    existing_paths.add(e["path"])
    added += 1

reg["artifacts"] = arts
print(f"Fixed 10 stale entries, removed 1, added {added} new entries. Total: {len(arts)}")

with open(REGISTRY, "w") as f:
    json.dump(reg, f, indent=2)
    f.write("\n")

print("Done. Run: node tools/scripts/validators/governance/compliance/validate-ai-tools-registry.js --check --coverage")
