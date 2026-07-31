import { blockchainContractsPageData } from '/snippets/data/contract-addresses/blockchainContractsPageData.jsx'

export const getContracts = (pageData = {}) => pageData?.contracts || {}

export const getContract = (pageData = {}, slug) => getContracts(pageData)[slug] || null

export const getLastVerifiedDate = (pageData = {}) => pageData?.meta?.lastVerified || 'Pending'

export const controllerContract = (pageData = {}) => getContract(pageData, 'controller')
export const bondingManagerContract = (pageData = {}) => getContract(pageData, 'bonding-manager')
export const ticketBrokerContract = (pageData = {}) => getContract(pageData, 'ticket-broker')
export const roundsManagerContract = (pageData = {}) => getContract(pageData, 'rounds-manager')
export const minterContract = (pageData = {}) => getContract(pageData, 'minter')
export const serviceRegistryContract = (pageData = {}) => getContract(pageData, 'service-registry')
export const aiServiceRegistryContract = (pageData = {}) => getContract(pageData, 'ai-service-registry')
export const livepeerTokenArbitrumContract = (pageData = {}) => getContract(pageData, 'livepeer-token-arbitrum')
export const livepeerTokenEthereumContract = (pageData = {}) => getContract(pageData, 'livepeer-token-ethereum')
export const bridgeMinterContract = (pageData = {}) => getContract(pageData, 'bridge-minter')
export const l2GatewayContract = (pageData = {}) => getContract(pageData, 'l2-lpt-gateway')
export const l1GatewayContract = (pageData = {}) => getContract(pageData, 'l1-lpt-gateway')
export const l1EscrowContract = (pageData = {}) => getContract(pageData, 'l1-escrow')
export const livepeerTokenFaucetContract = (pageData = {}) => getContract(pageData, 'livepeer-token-faucet')
export const bondingVotesContract = (pageData = {}) => getContract(pageData, 'bonding-votes')
export const governorContract = (pageData = {}) => getContract(pageData, 'governor')
export const livepeerGovernorContract = (pageData = {}) => getContract(pageData, 'livepeer-governor')
export const treasuryContract = (pageData = {}) => getContract(pageData, 'treasury')
export const l2MigratorContract = (pageData = {}) => getContract(pageData, 'l2-migrator')
export const merkleSnapshotContract = (pageData = {}) => getContract(pageData, 'merkle-snapshot')

export const controller = controllerContract(blockchainContractsPageData)?.currentAddress || null
export const bondingManagerProxy =
  bondingManagerContract(blockchainContractsPageData)?.proxyAddress ||
  bondingManagerContract(blockchainContractsPageData)?.currentAddress ||
  null
export const bondingManagerTarget = bondingManagerContract(blockchainContractsPageData)?.targetAddress || null
export const ticketBrokerProxy =
  ticketBrokerContract(blockchainContractsPageData)?.proxyAddress ||
  ticketBrokerContract(blockchainContractsPageData)?.currentAddress ||
  null
export const roundsManagerProxy =
  roundsManagerContract(blockchainContractsPageData)?.proxyAddress ||
  roundsManagerContract(blockchainContractsPageData)?.currentAddress ||
  null
export const minter = minterContract(blockchainContractsPageData)?.currentAddress || null
export const serviceRegistryProxy =
  serviceRegistryContract(blockchainContractsPageData)?.proxyAddress ||
  serviceRegistryContract(blockchainContractsPageData)?.currentAddress ||
  null
export const aiServiceRegistry = aiServiceRegistryContract(blockchainContractsPageData)?.currentAddress || null
export const lptArb = livepeerTokenArbitrumContract(blockchainContractsPageData)?.currentAddress || null
export const lptEth = livepeerTokenEthereumContract(blockchainContractsPageData)?.currentAddress || null
export const bridgeMinter = bridgeMinterContract(blockchainContractsPageData)?.currentAddress || null
export const l2Gateway = l2GatewayContract(blockchainContractsPageData)?.currentAddress || null
export const l1Gateway = l1GatewayContract(blockchainContractsPageData)?.currentAddress || null
export const l1Escrow = l1EscrowContract(blockchainContractsPageData)?.currentAddress || null
export const bondingVotesProxy =
  bondingVotesContract(blockchainContractsPageData)?.proxyAddress ||
  bondingVotesContract(blockchainContractsPageData)?.currentAddress ||
  null
export const bondingVotesTarget = bondingVotesContract(blockchainContractsPageData)?.targetAddress || null
export const governor = governorContract(blockchainContractsPageData)?.currentAddress || null
export const livepeerGovernorProxy =
  livepeerGovernorContract(blockchainContractsPageData)?.proxyAddress ||
  livepeerGovernorContract(blockchainContractsPageData)?.currentAddress ||
  null
export const livepeerGovernorTarget = livepeerGovernorContract(blockchainContractsPageData)?.targetAddress || null
export const treasury = treasuryContract(blockchainContractsPageData)?.currentAddress || null
export const l2Migrator =
  l2MigratorContract(blockchainContractsPageData)?.proxyAddress ||
  l2MigratorContract(blockchainContractsPageData)?.currentAddress ||
  null
export const merkleSnapshot = merkleSnapshotContract(blockchainContractsPageData)?.currentAddress || null
export const lastVerifiedDate = getLastVerifiedDate(blockchainContractsPageData)

export const blockchainContractsPageMeta = blockchainContractsPageData.meta

const explorerBase = {
  arbitrumOne:
    blockchainContractsPageMeta?.explorerUrls?.arbiscanAddress
    || `${blockchainContractsPageMeta?.explorerUrls?.arbiscan || 'https://arbiscan.io'}/address/`,
  ethereumMainnet:
    blockchainContractsPageMeta?.explorerUrls?.etherscanAddress
    || `${blockchainContractsPageMeta?.explorerUrls?.etherscan || 'https://etherscan.io'}/address/`,
}

const contractByName = {
  arbitrumOne: {
    Controller: controllerContract(blockchainContractsPageData),
    BondingManager: bondingManagerContract(blockchainContractsPageData),
    TicketBroker: ticketBrokerContract(blockchainContractsPageData),
    RoundsManager: roundsManagerContract(blockchainContractsPageData),
    Minter: minterContract(blockchainContractsPageData),
    ServiceRegistry: serviceRegistryContract(blockchainContractsPageData),
    AIServiceRegistry: aiServiceRegistryContract(blockchainContractsPageData),
    LivepeerToken: livepeerTokenArbitrumContract(blockchainContractsPageData),
    L2LPTGateway: l2GatewayContract(blockchainContractsPageData),
    BondingVotes: bondingVotesContract(blockchainContractsPageData),
    Governor: governorContract(blockchainContractsPageData),
    LivepeerGovernor: livepeerGovernorContract(blockchainContractsPageData),
    Treasury: treasuryContract(blockchainContractsPageData),
    L2Migrator: l2MigratorContract(blockchainContractsPageData),
    MerkleSnapshot: merkleSnapshotContract(blockchainContractsPageData),
  },
  ethereumMainnet: {
    LivepeerToken: livepeerTokenEthereumContract(blockchainContractsPageData),
    BridgeMinter: bridgeMinterContract(blockchainContractsPageData),
    L1LPTGateway: l1GatewayContract(blockchainContractsPageData),
    L1Escrow: l1EscrowContract(blockchainContractsPageData),
  },
}

const getNamedContract = (chain, name) => contractByName?.[chain]?.[name] || null

export const codeHref = (chain, name, type = null) => {
  const contract = getNamedContract(chain, name)
  if (!contract) return null
  if (type === 'proxy') return contract.proxyContractCodeHref || contract.contractCodeHref || null
  if (type === 'target') return contract.targetContractCodeHref || contract.contractCodeHref || null
  return contract.contractCodeHref || null
}

export const explorerHref = (chain, name, type = null) => {
  const contract = getNamedContract(chain, name)
  if (!contract) return null
  if (type === 'proxy') return contract.proxyBlockchainHref || contract.blockchainHref || null
  if (type === 'target') return contract.targetBlockchainHref || contract.blockchainHref || null
  const address = contract.currentAddress || contract.proxyAddress || contract.targetAddress || null
  return contract.blockchainHref || (address ? `${explorerBase[chain] || ''}${address}` : null)
}

export const rawCodeHref = (chain, name, type = null) => {
  const contract = getNamedContract(chain, name)
  if (!contract) return null
  if (type === 'proxy') return contract.proxyRawContractCodeHref || contract.rawContractCodeHref || null
  if (type === 'target') return contract.targetRawContractCodeHref || contract.rawContractCodeHref || null
  return contract.rawContractCodeHref || null
}
