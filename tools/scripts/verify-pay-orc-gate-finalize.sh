#!/usr/bin/env bash
# @script            verify-pay-orc-gate-finalize
# @category          enforcer
# @purpose           qa:repo-health
# @scope             v2-content
# @owner             docs
# @needs             E-C1, R-R14
# @purpose-statement Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions
# @pipeline          manual — not yet in pipeline
# @usage             bash tools/scripts/verify-pay-orc-gate-finalize.sh [flags]
set -euo pipefail

quiet=0
print_targets=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --quiet)
      quiet=1
      shift
      ;;
    --print-targets)
      print_targets=1
      shift
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

repo_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$repo_root"

# Exact 12 deliverable targets from the current payments/orchestrators plan.
target_files=(
  "v2/gateways/payments/how-payments-work.mdx"
  "v2/gateways/payments/remote-signers.mdx"
  "v2/gateways/payments/payment-clearinghouse.mdx"
  "v2/gateways/payments/overview.mdx"
  "v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx"
  "v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx"
  "v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx"
  "v2/orchestrators/concepts/job-types.mdx"
  "v2/orchestrators/advanced/payments.mdx"
  "v2/orchestrators/get-started/realtime-ai-quickstart.mdx"
  "v2/orchestrators/get-started/batch-ai-quickstart.mdx"
  "v2/orchestrators/guides/setup-paths/setup-navigator.mdx"
)

# Required migration outcomes from implementation steps.
migration_required_files=(
  "v2/orchestrators/quickstart/guide.mdx"
  "v2/orchestrators/guides/setup-paths/join-a-pool.mdx"
  "v2/orchestrators/get-started/AI-prompt-start.mdx"
)

# Legacy files that must not exist after migration.
legacy_blocked_files=(
  "v2/gateways/run-a-gateway/payments/payment-clearinghouse.mdx"
  "v2/orchestrators/quickstart/overview.mdx"
  "v2/orchestrators/quickstart/join-a-pool.mdx"
  "v2/orchestrators/quickstart/guide.mdx"
  "v2/orchestrators/quickstart/realtime-ai-quickstart.mdx"
  "v2/orchestrators/quickstart/batch-ai-quickstart.mdx"
)

if [[ "$print_targets" -eq 1 ]]; then
  echo "Target deliverable files:"
  printf '  %s\n' "${target_files[@]}"
  echo "Required migration files:"
  printf '  %s\n' "${migration_required_files[@]}"
  echo "Legacy files that must be absent:"
  printf '  %s\n' "${legacy_blocked_files[@]}"
fi

missing_targets=()
missing_migrations=()
legacy_present=()

for rel in "${target_files[@]}"; do
  [[ -f "$rel" ]] || missing_targets+=("$rel")
done

for rel in "${migration_required_files[@]}"; do
  [[ -f "$rel" ]] || missing_migrations+=("$rel")
done

for rel in "${legacy_blocked_files[@]}"; do
  [[ ! -e "$rel" ]] || legacy_present+=("$rel")
done

if [[ ${#missing_targets[@]} -eq 0 ]] \
  && [[ ${#missing_migrations[@]} -eq 0 ]] \
  && [[ ${#legacy_present[@]} -eq 0 ]]; then
  if [[ "$quiet" -eq 0 ]]; then
    echo "Pay/Orc/Gate finalize check passed."
    echo "Validated ${#target_files[@]} deliverable targets and migration guardrails."
  fi
  exit 0
fi

if [[ "$quiet" -eq 0 ]]; then
  echo "Pay/Orc/Gate finalize check failed."
fi

for rel in "${missing_targets[@]}"; do
  echo "MISSING_TARGET $rel"
done
for rel in "${missing_migrations[@]}"; do
  echo "MISSING_MIGRATION $rel"
done
for rel in "${legacy_present[@]}"; do
  echo "LEGACY_STILL_PRESENT $rel"
done

exit 1
