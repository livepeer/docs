/**
 * @script      constants
 * @type              integrator
 * @concern     content
 * @niche       data
 * @purpose     content:contract-data
 * @description Contract data pipeline module: constants
 * @mode        execute
 * @pipeline    manual -> contract data sources -> contract data files
 * @scope       operations/scripts/integrators/content/data/contracts/
 * @usage       Internal module — imported by fetch-contract-addresses.js
 */
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "../../../../../../");

const OUTPUT_JSON_PATH = path.join(
  REPO_ROOT,
  "snippets/data/contract-addresses/contractAddressesData.json"
);
const OUTPUT_JSX_PATH = path.join(
  REPO_ROOT,
  "snippets/data/contract-addresses/contractAddressesData.jsx"
);
const BLOCKCHAIN_PAGE_DATA_JSON_PATH = path.join(
  REPO_ROOT,
  "snippets/data/contract-addresses/blockchainContractsPageData.json"
);
const BLOCKCHAIN_PAGE_DATA_JSX_PATH = path.join(
  REPO_ROOT,
  "snippets/data/contract-addresses/blockchainContractsPageData.jsx"
);
const HEALTH_CHECK_PATH = path.join(
  REPO_ROOT,
  "snippets/data/contract-addresses/_health-checks.json"
);
const BRANCH_WATCH_STATE_PATH = path.join(
  REPO_ROOT,
  "snippets/data/contract-addresses/_branch-watch-state.json"
);
const ANOMALY_JSON_PATH = path.join(
  REPO_ROOT,
  "workspace/reports/contracts/contract-pipeline-anomaly-report.json"
);
const ANOMALY_MD_PATH = path.join(
  REPO_ROOT,
  "workspace/reports/contracts/contract-pipeline-anomaly-report.md"
);
const ISSUE_PAYLOAD_PATH = path.join(
  REPO_ROOT,
  "workspace/reports/contracts/contract-pipeline-issue-payload.json"
);

const GOVERNOR_REPO = "livepeer/governor-scripts";
const GOVERNOR_FILE = "updates/addresses.js";

const WATCHED_REPOS = [
  {
    repo: "livepeer/protocol",
    preferredBranches: ["delta", "streamflow", "master"],
    role: "controller-and-provenance",
  },
  {
    repo: "livepeer/arbitrum-lpt-bridge",
    preferredBranches: ["main"],
    role: "bridge-and-token",
  },
  {
    repo: "livepeer/go-livepeer",
    preferredBranches: ["master", "main"],
    role: "runtime-consumer",
  },
  {
    repo: GOVERNOR_REPO,
    preferredBranches: ["master", "main"],
    role: "governance-discovery",
  },
];

const CONTROLLERS = {
  arbitrumOne: "0xD8E8328501E9645d16Cf49539efC04f734606ee4",
  ethereumMainnet: "0xf96d54e490317c557a967abfa5d6e33006be69b3",
};

const LIVEPEER_DEPLOYER = "0xB5Af4138f0f33be0D6414Eb25271B9C2Dc245fb5";

const EXPLORER_URLS = {
  arbiscan: "https://arbiscan.io",
  arbiscanAddress: "https://arbiscan.io/address/",
  etherscan: "https://etherscan.io",
  etherscanAddress: "https://etherscan.io/address/",
  blockscoutArbitrum: "https://arbitrum.blockscout.com",
  blockscoutEthereum: "https://eth.blockscout.com",
};

const DEFAULT_RPC_URLS = {
  arbitrumOne: [
    process.env.ARBITRUM_RPC_URL,
    process.env.ARBITRUM_RPC_FALLBACK_URL,
    "https://arb1.arbitrum.io/rpc",
    "https://arbitrum-one-rpc.publicnode.com",
    "https://arbitrum.drpc.org",
  ].filter(Boolean),
  ethereumMainnet: [
    process.env.ETHEREUM_RPC_URL,
    process.env.ETHEREUM_RPC_FALLBACK_URL,
    "https://eth.llamarpc.com",
    "https://ethereum-rpc.publicnode.com",
    "https://eth.drpc.org",
  ].filter(Boolean),
};

const CONTRACTS_PIPELINE_CADENCE = {
  defaultLabel: "daily",
  mainScheduleCron: "0 2 * * *",
  shadowScheduleCron: "30 2 * * *",
  configurable: true,
};

const BLOCKING_BRANCH_DIFF_TYPES = [
  "new-repo-watch",
  "default-branch-change",
  "new-branch",
  "missing-branch",
];

const ACTIVE_LIFECYCLES = new Set(["active"]);
const PUBLISHED_LIFECYCLES = new Set([
  "active",
  "paused",
  "migration_residual",
  "legacy_operational",
  "historical",
]);
const FAILURE_CLASSES = {
  rpc: "rpc-failure",
  truth: "truth-reconciliation-failure",
  provenance: "provenance-failure",
  link: "explorer-link-failure",
  branch: "branch-watch-anomaly",
  output: "output-contract-failure",
};

module.exports = {
  ACTIVE_LIFECYCLES,
  ANOMALY_JSON_PATH,
  ANOMALY_MD_PATH,
  BLOCKCHAIN_PAGE_DATA_JSX_PATH,
  BLOCKCHAIN_PAGE_DATA_JSON_PATH,
  BRANCH_WATCH_STATE_PATH,
  CONTROLLERS,
  DEFAULT_RPC_URLS,
  EXPLORER_URLS,
  FAILURE_CLASSES,
  GOVERNOR_FILE,
  GOVERNOR_REPO,
  HEALTH_CHECK_PATH,
  ISSUE_PAYLOAD_PATH,
  LIVEPEER_DEPLOYER,
  BLOCKING_BRANCH_DIFF_TYPES,
  CONTRACTS_PIPELINE_CADENCE,
  OUTPUT_JSX_PATH,
  OUTPUT_JSON_PATH,
  PUBLISHED_LIFECYCLES,
  REPO_ROOT,
  WATCHED_REPOS,
};
