export const contractsRoutes = {
  reference: '/v2/about/resources/reference/livepeer-contract-addresses',
  verifier: '/v2/about/resources/verify-contract-addresses',
}

export const chainLabel = {
  arbitrumOne: 'Arbitrum One',
  ethereumMainnet: 'Ethereum Mainnet',
}

export const lifecycleLabel = {
  active: 'Active',
  paused: 'Paused',
  migration_residual: 'Migration',
  legacy_operational: 'Legacy operational',
  historical: 'Historical',
}

export const categoryOrder = ['bridge', 'core', 'governance', 'token', 'migration', 'genesis', 'utility', 'other']

export const nonActiveLifecycleOrder = ['paused', 'migration_residual', 'legacy_operational']

export const nonActiveLifecycleConfig = {
  paused: {
    key: 'paused',
    title: 'Paused',
    description: 'Controller-era contracts that remain published for verification but are no longer active.',
    icon: 'pause',
  },
  migration_residual: {
    key: 'migration_residual',
    title: 'Migration',
    description: 'Contracts left in place for late claims or migration completion workflows.',
    icon: 'clock-rotate-left',
  },
  legacy_operational: {
    key: 'legacy_operational',
    title: 'Legacy Operational',
    description: 'Legacy helper contracts that remain deployed for reference or support functions.',
    icon: 'wrench',
  },
}

export const historicalCategoryConfig = {
  core: {
    key: 'core',
    title: 'Core',
    description: 'Historical staking, payments, round progression, and service discovery contracts.',
    icon: 'gear',
  },
  governance: {
    key: 'governance',
    title: 'Governance',
    description: 'Historical voting and proposal contracts.',
    icon: 'landmark',
  },
  migration: {
    key: 'migration',
    title: 'Migration',
    description: 'Historical Confluence upgrade contracts.',
    icon: 'bridge',
  },
  genesis: {
    key: 'genesis',
    title: 'Genesis',
    description: 'Historical libraries and helper contracts from the 2018 launch.',
    icon: 'livepeer',
  },
}

export const normalizeString = (value = '') => String(value || '').trim()

export const normalizeCategoryKey = (value = 'other') => normalizeString(value).toLowerCase() || 'other'

export const normalizeLifecycleKey = (value = 'active') => normalizeString(value).toLowerCase() || 'active'

export const normalizeTypeKey = (value = 'standalone') => normalizeString(value).toLowerCase() || 'standalone'

export const compareByLocale = (left, right) =>
  String(left || '').localeCompare(String(right || ''), 'en', { sensitivity: 'base' })

export const versionToNumber = (value) => Number(String(value || '').replace(/^V/i, '')) || 0

export const getExplorerBase = (sourceData = {}, chain) => {
  const urls = sourceData?.meta?.explorerUrls || {}
  if (chain === 'arbitrumOne') {
    return urls.arbiscanAddress || `${urls.arbiscan || 'https://arbiscan.io'}/address/`
  }
  return urls.etherscanAddress || `${urls.etherscan || 'https://etherscan.io'}/address/`
}

export const normalizeContractsForTable = (sourceData = {}, entries = [], chain, fallbackLifecycle = 'active') =>
  (entries || []).map((contract) => {
    const type = normalizeTypeKey(contract.type || contract.deploymentKind || 'standalone')
    const lifecycle = normalizeLifecycleKey(contract.lifecycle || fallbackLifecycle)
    const category = normalizeCategoryKey(contract.category)

    return {
      Name: contract.name,
      Address: contract.address,
      Status: contract.meta?.statusLabel || lifecycleLabel[lifecycle] || lifecycle,
      Type: type,
      Category: category,
      Version: contract.version || contract.meta?.version || '—',
      Chain: chainLabel[chain] || chain,
      _addressHref: contract.blockchainHref || `${getExplorerBase(sourceData, chain)}${contract.address}`,
      _chainKey: chain,
      _typeKey: type,
      _categoryKey: category,
      _lifecycleKey: lifecycle,
      _source: contract,
    }
  })

export const sortContractsForDisplay = (items = []) =>
  [...items].sort((left, right) => {
    const leftCategory = categoryOrder.indexOf(normalizeCategoryKey(left._categoryKey || left.Category))
    const rightCategory = categoryOrder.indexOf(normalizeCategoryKey(right._categoryKey || right.Category))
    const categoryRankA = leftCategory === -1 ? categoryOrder.length : leftCategory
    const categoryRankB = rightCategory === -1 ? categoryOrder.length : rightCategory

    return (
      categoryRankA - categoryRankB ||
      compareByLocale(left.Name, right.Name) ||
      compareByLocale(left.Chain, right.Chain) ||
      versionToNumber(left.Version) - versionToNumber(right.Version)
    )
  })

export const collectLifecycleEntries = (sourceData = {}, lifecycle, fallbackLifecycle = lifecycle) => [
  ...normalizeContractsForTable(sourceData, sourceData?.arbitrumOne?.[lifecycle], 'arbitrumOne', fallbackLifecycle),
  ...normalizeContractsForTable(sourceData, sourceData?.ethereumMainnet?.[lifecycle], 'ethereumMainnet', fallbackLifecycle),
]

export const getActiveEntries = (sourceData = {}) => [
  ...normalizeContractsForTable(sourceData, sourceData?.arbitrumOne?.active || sourceData?.arbitrumOne?.current, 'arbitrumOne', 'active'),
  ...normalizeContractsForTable(sourceData, sourceData?.ethereumMainnet?.active || sourceData?.ethereumMainnet?.current, 'ethereumMainnet', 'active'),
]

export const getImplementationEntries = (sourceData = {}) => [
  ...normalizeContractsForTable(sourceData, sourceData?.arbitrumOne?.currentImplementations, 'arbitrumOne', 'historical'),
  ...normalizeContractsForTable(sourceData, sourceData?.ethereumMainnet?.currentImplementations, 'ethereumMainnet', 'historical'),
]

export const getActiveTableItems = (sourceData = {}) => [
  ...getActiveEntries(sourceData).filter((item) => item._typeKey === 'standalone'),
  ...getImplementationEntries(sourceData),
]

export const getProxyTableItems = (sourceData = {}) => {
  const implementationLookup = getImplementationEntries(sourceData).reduce((lookup, item) => {
    lookup.set(`${item.Name}:${item._chainKey}`, item)
    return lookup
  }, new Map())

  return getActiveEntries(sourceData)
    .filter((item) => item._typeKey === 'proxy')
    .map((item) => {
      const target = implementationLookup.get(`${item.Name}:${item._chainKey}`)
      return {
        Name: item.Name,
        Proxy: 'proxy',
        'Proxy Address': item.Address,
        '_Proxy AddressHref': item._addressHref,
        Chain: item.Chain,
        Category: item.Category,
        Target: target?._typeKey || 'target',
        'Target Address': target?.Address || '—',
        '_Target AddressHref': target?._addressHref || null,
        _chainKey: item._chainKey,
        _categoryKey: item._categoryKey,
        _source: item._source,
      }
    })
}

export const getLifecycleTableItems = (sourceData = {}, lifecycle = 'paused') =>
  sortContractsForDisplay(collectLifecycleEntries(sourceData, lifecycle, lifecycle)).reduce((rows, item) => {
    const category = item.Category
    const lastCategory = rows.length > 0 ? rows[rows.length - 1]._separatorCategory : null

    if (category && category !== lastCategory) {
      rows.push({
        __separator: true,
        Name: String(category).toUpperCase(),
        _separatorCategory: category,
      })
    }

    rows.push({
      Name: item.Name,
      Address: item.Address,
      Chain: item.Chain,
      Type: item.Type,
      Category: category,
      _addressHref: item._addressHref,
      _chainKey: item._chainKey,
      _typeKey: item._typeKey,
      _categoryKey: item._categoryKey,
      _source: item._source,
    })

    return rows
  }, [])

export const getNonActiveGroups = (sourceData = {}) =>
  nonActiveLifecycleOrder
    .map((lifecycle) => ({
      ...nonActiveLifecycleConfig[lifecycle],
      items: getLifecycleTableItems(sourceData, lifecycle),
    }))
    .filter((group) => group.items.length > 0)

export const getHistoricalCategories = (sourceData = {}) =>
  Object.values(historicalCategoryConfig).filter(({ key }) => {
    const arbitrumSeries = sourceData?.arbitrumOne?.historicalSeries?.[key] || []
    const ethereumSeries = sourceData?.ethereumMainnet?.historicalSeries?.[key] || []
    return arbitrumSeries.length > 0 || ethereumSeries.length > 0
  })

export const getHistoricalCategoryMeta = (category) =>
  historicalCategoryConfig[category] || {
    key: category,
    title: normalizeString(category)
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase()),
    description: 'Historical contract versions grouped by generator-owned contract series.',
    icon: 'clock-rotate-left',
  }

export const getBlockchainContracts = (pageData = {}) => pageData?.contracts || {}

export const getBlockchainContract = (pageData = {}, slug) => getBlockchainContracts(pageData)[slug] || null

export const getBlockchainLastVerifiedDate = (pageData = {}) => pageData?.meta?.lastVerified || 'Pending'

export const getNamedBlockchainContract = (pageData = {}, chain, name) => {
  const contracts = Object.values(getBlockchainContracts(pageData))
  return (
    contracts.find((contract) => contract?.chain === chain && contract?.name === name) ||
    null
  )
}

export const getBlockchainContractAddress = (pageData = {}, chain, name, type = null) => {
  const contract = getNamedBlockchainContract(pageData, chain, name)
  if (!contract) return null
  if (type === 'proxy') return contract.proxyAddress || contract.currentAddress || null
  if (type === 'target') return contract.targetAddress || null
  return contract.currentAddress || contract.proxyAddress || contract.targetAddress || null
}

export const getBlockchainExplorerHref = (pageData = {}, chain, name, type = null) => {
  const contract = getNamedBlockchainContract(pageData, chain, name)
  if (!contract) return null
  if (type === 'proxy') return contract.proxyBlockchainHref || contract.blockchainHref || null
  if (type === 'target') return contract.targetBlockchainHref || null
  return contract.blockchainHref || contract.proxyBlockchainHref || contract.targetBlockchainHref || null
}

export const getBlockchainCodeHref = (pageData = {}, chain, name, type = null) => {
  const contract = getNamedBlockchainContract(pageData, chain, name)
  if (!contract) return null
  if (type === 'proxy') return contract.proxyContractCodeHref || contract.contractCodeHref || null
  if (type === 'target') return contract.targetContractCodeHref || contract.contractCodeHref || null
  return contract.contractCodeHref || null
}

export const getBlockchainRawCodeHref = (pageData = {}, slug) =>
  getBlockchainContract(pageData, slug)?.rawContractCodeHref || null

export const getBlockchainContractBindings = (pageData = {}) => ({
  controller: getBlockchainContractAddress(pageData, 'arbitrumOne', 'Controller'),
  bondingManagerProxy: getBlockchainContractAddress(pageData, 'arbitrumOne', 'BondingManager', 'proxy'),
  ticketBrokerProxy: getBlockchainContractAddress(pageData, 'arbitrumOne', 'TicketBroker', 'proxy'),
  roundsManagerProxy: getBlockchainContractAddress(pageData, 'arbitrumOne', 'RoundsManager', 'proxy'),
  minter: getBlockchainContractAddress(pageData, 'arbitrumOne', 'Minter'),
  serviceRegistryProxy: getBlockchainContractAddress(pageData, 'arbitrumOne', 'ServiceRegistry', 'proxy'),
  aiServiceRegistry: getBlockchainContractAddress(pageData, 'arbitrumOne', 'AIServiceRegistry'),
  lptArb: getBlockchainContractAddress(pageData, 'arbitrumOne', 'LivepeerToken'),
  lptEth: getBlockchainContractAddress(pageData, 'ethereumMainnet', 'LivepeerToken'),
  bridgeMinter: getBlockchainContractAddress(pageData, 'ethereumMainnet', 'BridgeMinter'),
  l2Gateway: getBlockchainContractAddress(pageData, 'arbitrumOne', 'L2LPTGateway'),
  l1Gateway: getBlockchainContractAddress(pageData, 'ethereumMainnet', 'L1LPTGateway'),
  l1Escrow: getBlockchainContractAddress(pageData, 'ethereumMainnet', 'L1Escrow'),
  bondingVotesProxy: getBlockchainContractAddress(pageData, 'arbitrumOne', 'BondingVotes', 'proxy'),
  governor: getBlockchainContractAddress(pageData, 'arbitrumOne', 'Governor'),
  livepeerGovernorProxy: getBlockchainContractAddress(pageData, 'arbitrumOne', 'LivepeerGovernor', 'proxy'),
  treasury: getBlockchainContractAddress(pageData, 'arbitrumOne', 'Treasury'),
  l2Migrator: getBlockchainContractAddress(pageData, 'arbitrumOne', 'L2Migrator', 'proxy'),
  merkleSnapshot: getBlockchainContractAddress(pageData, 'arbitrumOne', 'MerkleSnapshot'),
})
