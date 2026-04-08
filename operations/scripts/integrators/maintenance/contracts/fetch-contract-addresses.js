/**
 * @script      fetch-contract-addresses
 * @type        integrator
 * @concern     maintenance
 * @niche       contracts
 * @purpose     infrastructure:data-feeds
 * @description Thin CLI entrypoint for the chain-first contracts pipeline.
 * @mode        integrate
 * @pipeline    manual
 * @scope       .github/scripts, operations/scripts/integrators/content/data/contracts/, snippets/data/contract-addresses/, snippets/composables/pages/canonical/
 * @usage       node .github/scripts/fetch-contract-addresses.js [--dry-run] [--check] [--skip-verify]
 * @policy      Docs-local files do not define publishable contract truth.
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
} = require(path.join(process.cwd(), "operations/scripts/integrators/content/data/contracts/pipeline.js"));

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
