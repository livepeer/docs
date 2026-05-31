import { blockchainContractsPageData } from '/snippets/data/contract-addresses/blockchainContractsPageData.jsx'
import {
  getBlockchainContractAddress,
  getBlockchainContracts,
  getNamedBlockchainContract,
} from '/snippets/data/contract-addresses/view-model.jsx'

export const controller = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'Controller')
export const bondingManagerProxy = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'BondingManager', 'proxy')
export const ticketBrokerProxy = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'TicketBroker', 'proxy')
export const roundsManagerProxy = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'RoundsManager', 'proxy')
export const minter = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'Minter')
export const serviceRegistryProxy = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'ServiceRegistry', 'proxy')
export const aiServiceRegistry = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'AIServiceRegistry')
export const lptArb = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'LivepeerToken')
export const lptEth = getBlockchainContractAddress(blockchainContractsPageData, 'ethereumMainnet', 'LivepeerToken')
export const bridgeMinter = getBlockchainContractAddress(blockchainContractsPageData, 'ethereumMainnet', 'BridgeMinter')
export const l2Gateway = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'L2LPTGateway')
export const l1Gateway = getBlockchainContractAddress(blockchainContractsPageData, 'ethereumMainnet', 'L1LPTGateway')
export const l1Escrow = getBlockchainContractAddress(blockchainContractsPageData, 'ethereumMainnet', 'L1Escrow')
export const bondingVotesProxy = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'BondingVotes', 'proxy')
export const governor = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'Governor')
export const livepeerGovernorProxy = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'LivepeerGovernor', 'proxy')
export const treasury = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'Treasury')
export const l2Migrator = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'L2Migrator', 'proxy')
export const merkleSnapshot = getBlockchainContractAddress(blockchainContractsPageData, 'arbitrumOne', 'MerkleSnapshot')
