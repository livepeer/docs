/**
 * @component        ContractVerifier
 * @category         integrators
 * @subcategory      feeds
 * @status           experimental
 * @description      Interactive widget to verify Livepeer contract addresses on-chain. Two modes: look up by name (verifies via Controller RPC or Blockscout depending on contract), verify by pasted address. Consumes lifecycle-safe pipeline data from contractAddressesData.json.
 * @dataSource       prop (contractAddressesData.json — active registry rows, lifecycle metadata, keccak hashes, registration state, explorer URLs, RPC URLs) + Arbitrum One RPC (eth_call) + Blockscout API v2 (/api/v2/addresses/)
 * @aiDiscoverability props-extracted
 *
 * // ContractAddresses: see snippets/data/contract-addresses/contractAddressesData.json
 * @param {ContractAddresses} data - Pipeline contract addresses data object.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}]     - Optional inline style override.
 */
'use client'
import { CopyText } from '/snippets/components/elements/text/Text.jsx'
import { ArbitrumIcon } from '/snippets/components/elements/icons/Icons.jsx'

export const ContractVerifier = ({
  data,
  className = '',
  style = {},
  ...rest
}) => {
  function buildContractVerifierChainData(innerData = {}, chainKey) {
    const chainData = (innerData && innerData[chainKey]) || {}
    const activeEntries = chainData.active || chainData.current || []
    const inventoryEntries = chainData.inventory || [
      ...activeEntries,
      ...(chainData.currentImplementations || []),
    ]
    const canonical = {}

    activeEntries.forEach((entry) => {
      if (!canonical[entry.name]) {
        canonical[entry.name] = entry
      } else if ((entry.type || entry.deploymentKind) === 'proxy') {
        canonical[entry.name] = entry
      }
    })

    return { activeEntries, inventoryEntries, canonical }
  }

  function buildContractVerifierLookupData(innerData = {}) {
    const chainOrder = ['arbitrumOne', 'ethereumMainnet']
    const entriesByName = {}
    const primaryByName = {}

    chainOrder.forEach((chainKey) => {
      const { canonical } = buildContractVerifierChainData(innerData, chainKey)
      Object.values(canonical).forEach((entry) => {
        if (!entriesByName[entry.name]) {
          entriesByName[entry.name] = []
        }
        entriesByName[entry.name].push(entry)
        if (!primaryByName[entry.name]) {
          primaryByName[entry.name] = entry
        }
      })
    })

    Object.values(entriesByName).forEach((entries) => {
      entries.sort((a, b) => {
        const chainA = chainOrder.indexOf(a.chain || '')
        const chainB = chainOrder.indexOf(b.chain || '')
        if (chainA !== chainB) return chainA - chainB
        return a.name.localeCompare(b.name)
      })
    })

    return {
      entriesByName,
      lookupEntries: Object.values(primaryByName),
    }
  }

  function buildContractVerifierGlobalInventory(innerData = {}) {
    const chainOrder = ['arbitrumOne', 'ethereumMainnet']
    const entries = []

    chainOrder.forEach((chainKey) => {
      const chainData = buildContractVerifierChainData(innerData, chainKey)
      chainData.inventoryEntries.forEach((entry) => {
        entries.push(entry)
      })
    })

    return entries
  }

  function normalizeContractVerifierAddress(innerAddress = '') {
    return String(innerAddress || '').trim().toLowerCase()
  }

  function findContractVerifierInventoryMatch(
    innerData = {},
    innerAddress = ''
  ) {
    const needle = normalizeContractVerifierAddress(innerAddress)
    if (!needle) return null

    return (
      buildContractVerifierGlobalInventory(innerData).find(
        (entry) =>
          normalizeContractVerifierAddress(entry?.address) === needle
      ) || null
    )
  }

  function buildContractVerifierVerifyChains(
    innerData = {},
    innerAddress = '',
    preferredChain = 'arbitrumOne'
  ) {
    const chainOrder = ['arbitrumOne', 'ethereumMainnet']
    const pipelineMatch = findContractVerifierInventoryMatch(
      innerData,
      innerAddress
    )
    const ordered = []

    if (pipelineMatch?.chain && chainOrder.includes(pipelineMatch.chain)) {
      ordered.push(pipelineMatch.chain)
    }
    if (
      chainOrder.includes(preferredChain) &&
      !ordered.includes(preferredChain)
    ) {
      ordered.push(preferredChain)
    }
    chainOrder.forEach((chainKey) => {
      if (!ordered.includes(chainKey)) {
        ordered.push(chainKey)
      }
    })

    return ordered
  }

  function isContractVerifierControllerLookupEligible(entry, hasController) {
    const entryMeta = (entry && entry.meta) || {}
    const hash = entryMeta.keccakHash || null
    const structuredRegistered =
      entry?.verification?.controller?.controllerRegistered
    const topLevelRegistered =
      typeof entry?.controllerRegistered === 'boolean'
        ? entry.controllerRegistered
        : null
    const metaRegistered =
      typeof entryMeta.controllerRegistered === 'boolean'
        ? entryMeta.controllerRegistered
        : null
    const registrationState =
      entryMeta.registrationState ||
      entry?.verification?.controller?.registrationState ||
      null
    let isRegistered = null

    if (typeof structuredRegistered === 'boolean') {
      isRegistered = structuredRegistered
    } else if (typeof topLevelRegistered === 'boolean') {
      isRegistered = topLevelRegistered
    } else if (typeof metaRegistered === 'boolean') {
      isRegistered = metaRegistered
    } else if (registrationState === 'registered') {
      isRegistered = true
    } else if (
      registrationState &&
      registrationState !== 'unknown' &&
      registrationState !== 'not_applicable'
    ) {
      isRegistered = false
    } else if (typeof entryMeta.registeredInController === 'boolean') {
      isRegistered = entryMeta.registeredInController
    }

    return Boolean(hasController && hash && isRegistered === true)
  }

  // ── CONSTANTS ──────────────────────────────────────────────────────────
  const ZERO_ADDR = '0x0000000000000000000000000000000000000000'
  const SELECTOR = '0xe16c7d98' // keccak256("getContract(bytes32)")[:4]

  // ── CHAIN CONFIG (derived from pipeline data.meta) ────────────────────
  const meta = (data && data.meta) || {}
  const explorers = meta.explorerUrls || {}
  const rpcUrls = meta.rpcUrls || {}
  const CHAINS = {
    arbitrumOne: {
      label: 'Arbitrum One',
      rpcUrls: rpcUrls.arbitrumOne || ['https://arb1.arbitrum.io/rpc'],
      blockscout:
        explorers.blockscoutArbitrum || 'https://arbitrum.blockscout.com',
      etherscan: explorers.arbiscan || 'https://arbiscan.io',
      hasController: true,
    },
    ethereumMainnet: {
      label: 'Ethereum Mainnet',
      rpcUrls: rpcUrls.ethereumMainnet || ['https://eth.llamarpc.com'],
      blockscout: explorers.blockscoutEthereum || 'https://eth.blockscout.com',
      etherscan: explorers.etherscan || 'https://etherscan.io',
      hasController: false,
    },
  }

  // ── DERIVE CONTRACT LISTS FROM PIPELINE DATA ──────────────────────────
  // ── STATE ─────────────────────────────────────────────────────────────
  const [chain, setChain] = useState('arbitrumOne')
  const [tab, setTab] = useState('lookup')
  const [selectedName, setSelectedName] = useState('')
  const [address, setAddress] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // ── CHAIN-DERIVED DATA ────────────────────────────────────────────────
  const getChainBundle = (chainKey) => {
    const chainData = buildContractVerifierChainData(data, chainKey)
    const activeContracts = chainData.activeEntries
    const controller = activeContracts.find((c) => c.name === 'Controller')

    return {
      chainConfig: CHAINS[chainKey],
      contracts: activeContracts,
      inventoryEntries: chainData.inventoryEntries,
      canonical: chainData.canonical,
      controllerAddress: controller
        ? controller.address
        : '0xD8E8328501E9645d16Cf49539efC04f734606ee4',
    }
  }

  const currentChainBundle = getChainBundle(chain)
  const chainConfig = currentChainBundle.chainConfig
  const { contracts, inventoryEntries } = currentChainBundle
  const globalInventoryEntries = buildContractVerifierGlobalInventory(data)
  const { lookupEntries, entriesByName: lookupEntriesByName } =
    buildContractVerifierLookupData(data)
  const controllerEntry = contracts.find((c) => c.name === 'Controller')
  const CONTROLLER = controllerEntry
    ? controllerEntry.address
    : '0xD8E8328501E9645d16Cf49539efC04f734606ee4'

  // Lookup mode: ALL active contracts from pipeline, grouped by category
  // Controller-registered contracts get an RPC on-chain call
  // Non-registered contracts get a Blockscout verify instead
  const CATEGORY_ORDER = [
    'core',
    'token',
    'governance',
    'bridge',
    'migration',
    'utility',
  ]
  const sortedLookupEntries = lookupEntries.sort((a, b) => {
    const catA = CATEGORY_ORDER.indexOf(a.category || '')
    const catB = CATEGORY_ORDER.indexOf(b.category || '')
    if (catA !== catB) return catA - catB
    return a.name.localeCompare(b.name)
  })

  // Build grouped options for the dropdown
  const lookupGroups = {}
  sortedLookupEntries.forEach((c) => {
    const cat = c.category || 'other'
    if (!lookupGroups[cat]) lookupGroups[cat] = []
    lookupGroups[cat].push(c.name)
  })
  const isLookupReady = selectedName.trim() !== ''
  const CATEGORY_META = {
    core: { label: 'Core', icon: 'gear' },
    token: { label: 'Token', icon: 'coins' },
    governance: { label: 'Governance', icon: 'landmark' },
    bridge: { label: 'Bridge', icon: 'bridge' },
    migration: { label: 'Migration', icon: 'clock-rotate-left' },
    utility: { label: 'Utility', icon: 'wrench' },
    other: { label: 'Other', icon: 'circle' },
  }
  const TYPE_META = {
    proxy: { label: 'Proxy', color: 'surface' },
    target: { label: 'Implementation', color: 'blue' },
    standalone: { label: 'Direct', color: 'green' },
  }

  // ── HANDLERS ──────────────────────────────────────────────────────────

  const lookupByName = async () => {
    const chosenName = selectedName.trim()
    if (!chosenName) {
      setError('Select a contract first.')
      setResult(null)
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const lookupTargets = lookupEntriesByName[chosenName] || []
      if (!lookupTargets.length) {
        setError(`No data available for "${chosenName}".`)
        return
      }

      const verifyLookupEntry = async (entry) => {
        const entryChain = entry?.chain || chain
        const entryChainBundle = getChainBundle(entryChain)
        const entryChainConfig = entryChainBundle.chainConfig
        const entryController = entryChainBundle.controllerAddress
        const canRpcLookup = isContractVerifierControllerLookupEligible(
          entry,
          entryChainConfig.hasController
        )
        const entryMeta = (entry && entry.meta) || {}
        const hash = entryMeta.keccakHash || null

        const blockscoutVerify = async (addr) => {
          const res = await fetch(
            `${entryChainConfig.blockscout}/api/v2/addresses/${addr}`
          )
          if (!res.ok) throw new Error(`Blockscout returned ${res.status}`)
          return await res.json()
        }

        const rpcCallForEntry = async (calldata) => {
          const urls = entryChainConfig.rpcUrls
          for (const url of urls) {
            try {
              const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  jsonrpc: '2.0',
                  method: 'eth_call',
                  params: [{ to: entryController, data: calldata }, 'latest'],
                  id: 1,
                }),
              })
              const json = await res.json()
              if (json.error) throw new Error(json.error.message)
              return json.result
            } catch (e) {
              if (url === urls[urls.length - 1]) throw e
            }
          }
        }

        if (canRpcLookup) {
          const calldata =
            SELECTOR + (hash.startsWith('0x') ? hash.slice(2) : hash)
          const rpcResult = await rpcCallForEntry(calldata)
          const resolved = '0x' + rpcResult.slice(-40)
          const isZero = resolved.toLowerCase() === ZERO_ADDR

          if (isZero) {
            const bsData = await blockscoutVerify(entry.address)
            return {
              mode: 'lookup-entry',
              entry,
              resolved: entry.address,
              isZero: false,
              matches: null,
              name: chosenName,
              expectedAddress: entry.address,
              verifiedVia: 'blockscout',
              is_contract: bsData.is_contract,
              is_verified: bsData.is_verified,
              explorerName: bsData.name || null,
              has_logs: bsData.has_logs || false,
              category: entry.category,
              type: entry.type,
            }
          }

          const matches = resolved.toLowerCase() === entry.address.toLowerCase()

          return {
            mode: 'lookup-entry',
            entry,
            resolved,
            isZero: false,
            matches,
            name: chosenName,
            expectedAddress: entry.address,
            verifiedVia: 'controller',
            category: entry.category,
            type: entry.type,
          }
        }

        const bsData = await blockscoutVerify(entry.address)
        return {
          mode: 'lookup-entry',
          entry,
          resolved: entry.address,
          isZero: false,
          matches: null,
          name: chosenName,
          expectedAddress: entry.address,
          verifiedVia: 'blockscout',
          is_contract: bsData.is_contract,
          is_verified: bsData.is_verified,
          explorerName: bsData.name || null,
          has_logs: bsData.has_logs || false,
          category: entry.category,
          type: entry.type,
        }
      }

      const lookupResults = await Promise.all(
        lookupTargets.map((entry) => verifyLookupEntry(entry))
      )

      setResult({
        mode: 'lookup',
        name: chosenName,
        entries: lookupResults,
      })
    } catch (e) {
      setError(e.message || 'Verification failed')
    } finally {
      setLoading(false)
    }
  }

  const verifyAddress = async () => {
    const trimmed = address.trim()
    if (!/^0x[0-9a-fA-F]{40}$/.test(trimmed)) {
      setError(
        'Invalid address format. Expected 0x followed by 40 hex characters.'
      )
      return
    }
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const pipelineMatch =
        findContractVerifierInventoryMatch(data, trimmed)
      const verifyChains = buildContractVerifierVerifyChains(data, trimmed, chain)
      let explorerResult = null
      let lastExplorerError = null

      for (const chainKey of verifyChains) {
        const verifyChainConfig = CHAINS[chainKey]
        if (!verifyChainConfig?.blockscout) continue

        try {
          const res = await fetch(
            `${verifyChainConfig.blockscout}/api/v2/addresses/${trimmed}`
          )
          if (!res.ok) throw new Error(`Blockscout returned ${res.status}`)
          const bsData = await res.json()
          explorerResult = { chainKey, data: bsData }
          if (bsData?.is_contract || pipelineMatch?.chain === chainKey) {
            break
          }
        } catch (error_) {
          lastExplorerError = error_
        }
      }

      if (!explorerResult && !pipelineMatch) {
        throw lastExplorerError || new Error('Explorer verification failed')
      }

      const bsData = explorerResult?.data || {}
      const resolvedChain =
        pipelineMatch?.chain || explorerResult?.chainKey || chain
      const nameStr = (bsData.name || pipelineMatch?.name || '').toLowerCase()
      const isLivepeerNamed =
        Boolean(pipelineMatch) ||
        nameStr.includes('livepeer') ||
        nameStr.includes('proxy')

      setResult({
        mode: 'verify',
        is_contract: bsData.is_contract ?? Boolean(pipelineMatch),
        is_verified:
          bsData.is_verified ??
          pipelineMatch?.sourceVerified ??
          null,
        name: bsData.name || pipelineMatch?.name || null,
        isLivepeerNamed,
        has_logs: bsData.has_logs || false,
        queriedAddress: trimmed,
        pipelineMatch: pipelineMatch || null,
        resolvedChain,
      })
    } catch (e) {
      setError(e.message || 'Explorer query failed')
    } finally {
      setLoading(false)
    }
  }

  const castFallback = (name) =>
    `cast call ${CONTROLLER} \\\n  "getContract(bytes32)(address)" \\\n  $(cast keccak "${name}") \\\n  --rpc-url ${chainConfig.rpcUrls[0]}`

  const getChainMeta = (chainKey) => {
    if (chainKey === 'ethereumMainnet') {
      return {
        label: 'Ethereum Mainnet',
        explorerLabel: 'Etherscan',
        icon: <Icon icon="ethereum" color="var(--lp-color-text-primary)" size={13} />,
      }
    }

    return {
      label: 'Arbitrum One',
      explorerLabel: 'Arbiscan',
      icon: <ArbitrumIcon color="var(--lp-color-arbitrum)" size={13} />,
    }
  }

  const getVerificationBullets = (entry, lookupResult) => {
    const bullets = []
    const verification = entry?.verification || {}

    if (lookupResult?.verifiedVia === 'controller' && lookupResult?.matches) {
      bullets.push('Matches the current on-chain Controller registry entry.')
    } else if (
      lookupResult?.verifiedVia === 'blockscout' &&
      lookupResult?.is_contract
    ) {
      bullets.push('Explorer confirms this address is a deployed contract.')
    }

    if (
      verification?.controller?.controllerRegistered === true &&
      lookupResult?.verifiedVia !== 'controller'
    ) {
      bullets.push(
        'This contract family is registered in the current Controller registry.'
      )
    }

    if (
      verification?.proxy?.applicable &&
      verification?.proxy?.implementationAddress
    ) {
      if (verification?.proxy?.implementationMatchesExpected === true) {
        bullets.push(
          'Proxy runtime resolves to the expected current implementation.'
        )
      } else if (verification?.proxy?.implementationMatchesExpected === false) {
        bullets.push(
          'Proxy runtime does not match the expected implementation.'
        )
      } else {
        bullets.push(
          'Proxy runtime resolves to a current downstream implementation.'
        )
      }
    }

    if (entry?.sourceVerified || lookupResult?.is_verified) {
      bullets.push('Explorer source code is verified.')
    }

    return [...new Set(bullets)]
  }

  const getVerifyBullets = (verifyResult) => {
    const bullets = []
    const matchedEntry = verifyResult?.pipelineMatch || null

    if (matchedEntry) {
      bullets.push(
        `Matches the published Livepeer registry entry for ${matchedEntry.name}.`
      )
    }
    if (verifyResult?.is_verified) {
      bullets.push('Explorer source code is verified.')
    }
    if (verifyResult?.has_logs) {
      bullets.push('Explorer shows transaction history for this contract.')
    }
    if (verifyResult?.isLivepeerNamed) {
      bullets.push(
        'Explorer labelling identifies this address as Livepeer-related.'
      )
    }

    return [...new Set(bullets)]
  }

  // ── STYLES ────────────────────────────────────────────────────────────

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: "var(--lp-spacing-4)",
      color: 'var(--foreground)',
      ...style,
    },
    tabRow: {
      display: 'flex',
      gap: "var(--lp-spacing-2)",
    },
    tabBase: {
      padding: '0.5rem 1rem',
      border: '1px solid var(--lp-color-border-default)',
      borderRadius: "4px",
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: 600,
      transition: 'background 0.15s, color 0.15s',
    },
    tabActive: {
      background: 'var(--lp-color-accent)',
      color: 'var(--lp-color-on-accent)',
      borderColor: 'var(--lp-color-accent)',
    },
    tabInactive: {
      background: 'transparent',
      color: 'var(--foreground)',
    },
    formRow: {
      display: 'flex',
      gap: "var(--lp-spacing-2)",
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    select: {
      padding: '0.5rem 0.75rem',
      border: '1px solid var(--lp-color-border-default)',
      borderRadius: "4px",
      background: 'var(--lp-color-bg-page)',
      color: 'var(--foreground)',
      fontSize: '0.9rem',
      minWidth: '200px',
    },
    input: {
      padding: '0.5rem 0.75rem',
      border: '1px solid var(--lp-color-border-default)',
      borderRadius: "4px",
      background: 'var(--lp-color-bg-page)',
      color: 'var(--foreground)',
      fontSize: '0.9rem',
      fontFamily: 'monospace',
      flex: '1 1 280px',
      minWidth: '280px',
    },
    button: {
      padding: '0.5rem 1.25rem',
      border: 'none',
      borderRadius: "4px",
      background: 'var(--lp-color-accent)',
      color: 'var(--lp-color-on-accent)',
      fontSize: '0.9rem',
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    card: {
      border: '1px solid var(--lp-color-border-default)',
      borderRadius: "4px",
      padding: "var(--lp-spacing-4)",
      display: 'flex',
      flexDirection: 'column',
      gap: "var(--lp-spacing-3)",
    },
    identityBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem',
    },
    titleRow: {
      display: 'flex',
      alignItems: 'center',
      gap: "var(--lp-spacing-2)",
      flexWrap: 'wrap',
    },
    chainRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.35rem',
      flexWrap: 'wrap',
    },
    titleText: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.3,
    },
    chainText: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      color: 'var(--lp-color-text-muted)',
      fontSize: '0.85rem',
      whiteSpace: 'nowrap',
    },
    categoryRow: {
      display: 'flex',
      alignItems: 'center',
      gap: "var(--lp-spacing-2)",
      flexWrap: 'wrap',
    },
    metaLabel: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: 'var(--lp-color-text-muted)',
    },
    categoryText: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      fontSize: '0.9rem',
      fontWeight: 600,
      color: 'var(--lp-color-text-primary)',
    },
    addressText: {
      fontFamily: 'monospace',
      fontSize: '0.9rem',
      wordBreak: 'break-all',
    },
    badgeMatch: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: "4px",
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-good)',
      color: 'var(--lp-color-on-accent)',
    },
    badgeMismatch: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: "4px",
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-bad)',
      color: 'var(--lp-color-on-accent)',
    },
    badgeWarn: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: "4px",
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-warn)',
      color: 'var(--foreground)',
    },
    badgeGood: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: "4px",
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-good)',
      color: 'var(--lp-color-on-accent)',
    },
    links: {
      display: 'flex',
      gap: "var(--lp-spacing-4)",
      flexWrap: 'wrap',
      fontSize: '0.85rem',
      marginTop: "var(--lp-spacing-1)",
    },
    link: {
      color: 'var(--lp-color-accent)',
      textDecoration: 'none',
    },
    pre: {
      background: 'var(--lp-color-bg-page)',
      color: 'var(--foreground)',
      border: '1px solid var(--lp-color-border-default)',
      borderRadius: "4px",
      padding: '0.75rem 1rem',
      fontSize: '0.85rem',
      fontFamily: 'monospace',
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-all',
    },
    errorText: {
      color: 'var(--lp-color-status-bad)',
      fontSize: '0.9rem',
    },
    signalRow: {
      display: 'flex',
      alignItems: 'center',
      gap: "var(--lp-spacing-2)",
      fontSize: '0.9rem',
    },
    verificationBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
    },
    sectionTitle: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.9rem',
      fontWeight: 600,
      color: 'var(--lp-color-text-primary)',
    },
    verificationList: {
      margin: 0,
      paddingLeft: '1.1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: "var(--lp-spacing-1)",
      fontSize: '0.9rem',
      color: 'var(--foreground)',
    },
    addressBlock: {
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: "var(--lp-spacing-2)",
    },
    mismatchNote: {
      fontSize: '0.85rem',
      color: 'var(--lp-color-status-warn)',
      marginTop: "var(--lp-spacing-1)",
    },
    resultStack: {
      display: 'flex',
      flexDirection: 'column',
      gap: "var(--lp-spacing-3)",
    },
  }

  // ── RENDER HELPERS ────────────────────────────────────────────────────

  const renderIdentity = (entry, statusBadge, fallbackName) => {
    const categoryKey = entry?.category || 'other'
    const category = CATEGORY_META[categoryKey] || CATEGORY_META.other
    const typeMeta = TYPE_META[entry?.type || entry?.deploymentKind] || null
    const chainMeta = getChainMeta(entry?.chain || chain)

    return (
      <div style={styles.identityBlock}>
        <div style={styles.titleRow}>
          {statusBadge}
          <span style={styles.titleText}>{entry?.name || fallbackName}</span>
        </div>
        <div style={styles.chainRow}>
          <span style={styles.chainText}>
            {chainMeta.icon}
            {chainMeta.label}
          </span>
        </div>
        <div style={styles.categoryRow}>
          <span style={styles.metaLabel}>Category:</span>
          <span style={styles.categoryText}>
            <Icon icon={category.icon} color="var(--lp-color-accent)" size={13} />
            {category.label}
          </span>
        </div>
        {typeMeta && (
          <div style={styles.categoryRow}>
            <span style={styles.metaLabel}>Type:</span>
            <Badge color={typeMeta.color}>{typeMeta.label}</Badge>
          </div>
        )}
      </div>
    )
  }

  const renderAddressBlock = (address, chainKey) => {
    if (!address) return null

    return (
      <div style={styles.addressBlock}>
        <div style={styles.sectionTitle}>Address</div>
        <CopyText text={address} style={{ width: '100%' }} />
        {renderExplorerLinks(address, chainKey)}
      </div>
    )
  }

  const renderVerificationBlock = (bullets) => {
    if (!bullets.length) return null

    return (
      <div style={styles.verificationBlock}>
        <div style={styles.sectionTitle}>
          <Icon icon="check" color="var(--lp-color-text-primary)" size={13} />
          Verification:
        </div>
        <ul style={styles.verificationList}>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    )
  }

  const renderExplorerLinks = (address, chainKey) => {
    const chainMeta = getChainMeta(chainKey)

    return (
      <div style={styles.links}>
        <a
          href={`${CHAINS[chainKey].etherscan}/address/${address}`}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View on {chainMeta.explorerLabel}
        </a>
        <a
          href={`${CHAINS[chainKey].blockscout}/address/${address}`}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View on Blockscout
        </a>
      </div>
    )
  }

  const renderLookupCard = (lookupResult, index) => {
    const entry = lookupResult.entry || null
    const verificationBullets = getVerificationBullets(entry, lookupResult)
    const statusBadge =
      lookupResult.verifiedVia === 'controller' ? (
        <span
          style={
            lookupResult.matches ? styles.badgeMatch : styles.badgeMismatch
          }
        >
          {lookupResult.matches ? 'MATCH' : 'MISMATCH'}
        </span>
      ) : (
        <span
          style={lookupResult.is_contract ? styles.badgeGood : styles.badgeWarn}
        >
          {lookupResult.is_contract ? 'VERIFIED' : 'CHECKED'}
        </span>
      )

    return (
      <div
        key={`${lookupResult.name}-${entry?.chain || chain}-${index}`}
        style={styles.card}
      >
        {renderIdentity(entry, statusBadge, lookupResult.name)}
        {renderAddressBlock(lookupResult.resolved, entry?.chain || chain)}
        {renderVerificationBlock(verificationBullets)}
        {lookupResult.explorerName && (
          <div style={styles.signalRow}>
            <span style={{ fontWeight: 600 }}>Explorer label:</span>
            <span>{lookupResult.explorerName}</span>
          </div>
        )}
        {lookupResult.verifiedVia === 'controller' && !lookupResult.matches && (
          <div style={styles.mismatchNote}>
            Mismatch means the page data and current Controller result do not
            agree. Treat this as a blocking proof-chain mismatch until the
            canonical registry is refreshed.
          </div>
        )}
      </div>
    )
  }

  const renderLookupResult = () => {
    if (!result || result.mode !== 'lookup') return null
    if (!Array.isArray(result.entries) || !result.entries.length) return null

    return (
      <div style={styles.resultStack}>
        {result.entries.map((entryResult, index) =>
          renderLookupCard(entryResult, index)
        )}
      </div>
    )
  }

  const renderVerifyResult = () => {
    if (!result || result.mode !== 'verify') return null
    const matchedEntry = result.pipelineMatch || null
    const verificationBullets = getVerifyBullets(result)
    const statusBadge = matchedEntry ? (
      <span style={styles.badgeMatch}>MATCH</span>
    ) : (
      <span style={styles.badgeWarn}>CHECKED</span>
    )

    if (!result.is_contract) {
      return (
        <div style={styles.card}>
          <span style={styles.badgeMismatch}>NOT A CONTRACT</span>
          <span style={{ fontSize: '0.9rem' }}>
            This address is not a contract on Arbitrum One or Ethereum
            Mainnet. It may be an externally owned account (EOA) or does not
            exist on either supported chain.
          </span>
        </div>
      )
    }
    return (
      <div style={styles.card}>
        {renderIdentity(
          matchedEntry || {
            name: result.name || 'Address lookup',
            chain: result.resolvedChain || chain,
          },
          statusBadge,
          result.name || 'Address lookup'
        )}
        {renderAddressBlock(
          result.queriedAddress,
          result.resolvedChain || matchedEntry?.chain || chain
        )}
        {renderVerificationBlock(verificationBullets)}
        {result.name && (
          <div style={styles.signalRow}>
            <span style={{ fontWeight: 600 }}>Explorer label:</span>
            <span>{result.name}</span>
            {result.isLivepeerNamed && !result.pipelineMatch && (
              <span style={styles.badgeGood}>Livepeer identified</span>
            )}
          </div>
        )}
        {!result.pipelineMatch && (
          <div style={styles.signalRow}>
            <span style={styles.badgeWarn}>
              Not matched to the published Livepeer registry
            </span>
          </div>
        )}
      </div>
    )
  }

  // ── RETURN ────────────────────────────────────────────────────────────

  return (
    <div style={styles.wrapper} className={className} {...rest}>
      {/* Description */}
      {tab === 'lookup' && (
        <div style={{ fontSize: '0.9rem', color: 'var(--lp-color-text-muted)' }}>
          Select a published contract and verify its current address against the
          strongest available on-chain or explorer check.
        </div>
      )}
      {tab === 'verify' && (
        <div style={{ fontSize: '0.9rem', color: 'var(--lp-color-text-muted)' }}>
          Paste any address to check bytecode, explorer verification, and
          whether it matches the published Livepeer contract registry on
          Arbitrum One or Ethereum Mainnet.
        </div>
      )}

      {/* Tab buttons */}
      <div style={styles.tabRow}>
        <button
          style={{
            ...styles.tabBase,
            ...(tab === 'lookup' ? styles.tabActive : styles.tabInactive),
          }}
          onClick={() => {
            setTab('lookup')
            setResult(null)
            setError(null)
          }}
          aria-pressed={tab === 'lookup'}
        >
          Look up contract
        </button>
        <button
          style={{
            ...styles.tabBase,
            ...(tab === 'verify' ? styles.tabActive : styles.tabInactive),
          }}
          onClick={() => {
            setTab('verify')
            setResult(null)
            setError(null)
          }}
          aria-pressed={tab === 'verify'}
        >
          Verify address
        </button>
      </div>

      {/* Look up form */}
      {tab === 'lookup' && (
        <div style={styles.formRow}>
          <select
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            style={styles.select}
            aria-label="Contract name"
          >
            <option value="" disabled>
              Select a contract
            </option>
            {CATEGORY_ORDER.filter((cat) => lookupGroups[cat]).map((cat) => (
              <optgroup
                key={cat}
                label={cat.charAt(0).toUpperCase() + cat.slice(1)}
              >
                {lookupGroups[cat].map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <button
            onClick={lookupByName}
            disabled={!isLookupReady || loading}
            style={{
              ...styles.button,
              ...(!isLookupReady || loading ? styles.buttonDisabled : {}),
            }}
          >
            {loading ? 'Querying on-chain...' : 'Look up'}
          </button>
        </div>
      )}

      {/* Verify tab */}
      {tab === 'verify' && (
        <div style={styles.formRow}>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="0x..."
            style={styles.input}
            aria-label="Contract address"
            spellCheck={false}
            autoComplete="off"
          />
          <button
            onClick={verifyAddress}
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
          >
            {loading ? 'Querying Blockscout...' : 'Verify'}
          </button>
        </div>
      )}

      {/* Results */}
      <div role="status" aria-live="polite">
        {renderLookupResult()}
        {renderVerifyResult()}

        {/* Error with fallback */}
        {error && (
          <div>
            <div style={styles.errorText}>{error}</div>
            {tab === 'lookup' && selectedName && (
              <div style={{ marginTop: "var(--lp-spacing-3)" }}>
                <div style={{ fontSize: '0.85rem', marginBottom: "var(--lp-spacing-2)" }}>
                  Verify manually with the Foundry CLI:
                </div>
                <pre style={styles.pre}>{castFallback(selectedName)}</pre>
              </div>
            )}
            {tab === 'verify' && (
              <div style={{ marginTop: "var(--lp-spacing-2)", fontSize: '0.85rem' }}>
                Try inspecting this address directly on{' '}
                <a
                  href={CHAINS.arbitrumOne.etherscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Arbiscan
                </a>{' '}
                or{' '}
                <a
                  href={CHAINS.ethereumMainnet.etherscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  Etherscan
                </a>
                .
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
