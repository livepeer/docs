import { blockchainContractsPageData } from '/snippets/data/contract-addresses/blockchainContractsPageData.jsx'
import {
  getBlockchainContracts,
  getBlockchainCodeHref,
  getBlockchainExplorerHref,
  getNamedBlockchainContract,
} from '/snippets/data/contract-addresses/view-model.jsx'

export const codeHref = (chain, name, type = null) =>
  getBlockchainCodeHref(blockchainContractsPageData, chain, name, type)

export const explorerHref = (chain, name, type = null) =>
  getBlockchainExplorerHref(blockchainContractsPageData, chain, name, type)
