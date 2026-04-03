/**
 * @script            fetch-contract-addresses
 * @category          automation
 * @purpose           infrastructure:data-feeds
 * @scope             generated-output
 * @domain            docs
 * @needs             R-R10
 * @purpose-statement Fetches and verifies Livepeer contract-address data, then generates the contracts datasets and canonical page inputs consumed by docs-v2.
 * @pipeline          P5, P6
 * @usage             node .github/scripts/fetch-contract-addresses.js [--dry-run] [--check] [--skip-verify]
 */

const {
  buildBlockchainContractsPageData,
  buildChainPayload,
  buildHistoricalArtifacts,
  buildHistoricalEntriesFromEventLogs,
  buildContractProofCatalog,
  computeIncidentFingerprint,
  decodeSetContractInfoLog,
  diffBranchWatchState,
  fetchControllerSetContractInfoLogs,
  resolveCodeSource,
  resolveDeploymentArtifact,
  resolveRepoPath,
  resolveRuntimeConsumerEvidence,
  resolveAuthority,
  resolveGovernorSeries,
  runContractsPipeline,
} = require("../../operations/scripts/automations/content/data/contracts/pipeline.js");

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const check = process.argv.includes("--check");
  const skipVerify = process.argv.includes("--skip-verify");
  if (dryRun && check) {
    throw new Error("--dry-run and --check are mutually exclusive");
  }
  await runContractsPipeline({ dryRun, check, skipVerify });
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Error: ${error.message}`);
    if (Array.isArray(error.failures)) {
      error.failures.forEach((failure) => {
        console.error(`- ${failure.failureClass}: ${failure.endpoint}: ${failure.detail}`);
      });
    }
    process.exit(1);
  });
}

module.exports = {
  buildBlockchainContractsPageData,
  buildChainPayload,
  buildHistoricalArtifacts,
  buildHistoricalEntriesFromEventLogs,
  computeIncidentFingerprint,
  decodeSetContractInfoLog,
  diffBranchWatchState,
  fetchControllerSetContractInfoLogs,
  loadContractProofCatalog: buildContractProofCatalog,
  resolveCodeSource,
  resolveDeploymentArtifact,
  resolveRepoPath,
  resolveRuntimeConsumerEvidence,
  resolveAuthority,
  resolveGovernorSeries,
  runContractsPipeline,
};
