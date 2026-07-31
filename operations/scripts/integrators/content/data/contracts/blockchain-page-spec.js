/**
 * @script      blockchain-page-spec
 * @type        integrator
 * @concern     integrations
 * @niche       data
 * @purpose     content:contract-data
 * @description Contract data pipeline module: blockchain-page-spec
 * @mode        integrate
 * @pipeline    manual -> contract data sources -> contract data files
 * @scope       operations/scripts/integrators/content/data/contracts/
 * @usage       Internal module — imported by fetch-contract-addresses.js
 */
const { buildBlockchainContractPageSpec } = require("./spec");

const BLOCKCHAIN_CONTRACT_PAGE_SPEC = buildBlockchainContractPageSpec();

module.exports = {
  BLOCKCHAIN_CONTRACT_PAGE_SPEC,
};
