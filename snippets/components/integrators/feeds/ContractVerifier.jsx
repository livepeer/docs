/**
 * @component        ContractVerifier
 * @category         integrators
 * @subcategory      feeds
 * @status           experimental
 * @description      Interactive widget to verify Livepeer contract addresses on-chain. Two modes: look up by name (verifies via Controller RPC or Blockscout depending on contract), verify by pasted address. Consumes pipeline data from contractAddressesData.jsx.
 * @dataSource       prop (contractAddressesData.jsx — addresses, keccak hashes, registration status, explorer URLs, RPC URLs) + Arbitrum One RPC (eth_call) + Blockscout API v2 (/api/v2/addresses/)
 * @aiDiscoverability props-extracted
 *
 * // ContractAddresses: see snippets/data/contract-addresses/contractAddressesData.jsx
 * @param {ContractAddresses} data - Pipeline contract addresses data object.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}]     - Optional inline style override.
 */
export const ContractVerifier = ({ data, className = "", style = {}, ...rest }) => {

  // ── CONSTANTS ──────────────────────────────────────────────────────────
  const ZERO_ADDR = '0x0000000000000000000000000000000000000000'
  const SELECTOR  = '0xe16c7d98' // keccak256("getContract(bytes32)")[:4]

  // ── CHAIN CONFIG (derived from pipeline data.meta) ────────────────────
  const meta = (data && data.meta) || {}
  const explorers = meta.explorerUrls || {}
  const rpcUrls = meta.rpcUrls || {}
  const CHAINS = {
    arbitrumOne: {
      label: 'Arbitrum One',
      rpcUrls: rpcUrls.arbitrumOne || ['https://arb1.arbitrum.io/rpc'],
      blockscout: explorers.blockscoutArbitrum || 'https://arbitrum.blockscout.com',
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
  const buildChainData = (chainKey) => {
    const chainData = data && data[chainKey]
    const entries = (chainData && chainData.current) || []
    // Active only: skip historical entries, prefer proxy over standalone over target
    const canonical = {}
    entries.forEach(c => {
      if (c.isHistorical) return
      if (!canonical[c.name]) {
        canonical[c.name] = c
      } else if (c.type === 'proxy') {
        canonical[c.name] = c
      }
    })
    return { entries, canonical }
  }

  // ── STATE ─────────────────────────────────────────────────────────────
  const [chain, setChain] = useState('arbitrumOne')
  const [tab, setTab] = useState('lookup')
  const [selectedName, setSelectedName] = useState('BondingManager')
  const [address, setAddress] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // ── CHAIN-DERIVED DATA ────────────────────────────────────────────────
  const chainConfig = CHAINS[chain]
  const { entries: contracts, canonical: canonicalMap } = buildChainData(chain)
  const controllerEntry = contracts.find(c => c.name === 'Controller')
  const CONTROLLER = controllerEntry
    ? controllerEntry.address
    : '0xD8E8328501E9645d16Cf49539efC04f734606ee4'

  // Lookup mode: ALL active contracts from pipeline, grouped by category
  // Controller-registered contracts get an RPC on-chain call
  // Non-registered contracts get a Blockscout verify instead
  const CATEGORY_ORDER = ['core', 'token', 'governance', 'bridge', 'migration', 'utility']
  const lookupEntries = Object.values(canonicalMap)
    .sort((a, b) => {
      const catA = CATEGORY_ORDER.indexOf(a.category || '')
      const catB = CATEGORY_ORDER.indexOf(b.category || '')
      if (catA !== catB) return catA - catB
      return a.name.localeCompare(b.name)
    })

  // Build grouped options for the dropdown
  const lookupGroups = {}
  lookupEntries.forEach(c => {
    const cat = c.category || 'other'
    if (!lookupGroups[cat]) lookupGroups[cat] = []
    lookupGroups[cat].push(c.name)
  })
  const lookupNames = lookupEntries.map(c => c.name)

  // ── HANDLERS ──────────────────────────────────────────────────────────

  const rpcCall = async (calldata) => {
    const urls = chainConfig.rpcUrls
    for (const url of urls) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_call',
            params: [{ to: CONTROLLER, data: calldata }, 'latest'],
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

  const lookupByName = async () => {
    setLoading(true)
    setError(null)
    setResult(null)
    const entry = canonicalMap[selectedName]
    const entryMeta = (entry && entry.meta) || {}
    const hash = entryMeta.keccakHash || null
    const isRegistered = typeof entryMeta.registeredInController === 'boolean'
      ? entryMeta.registeredInController
      : null
    const canRpcLookup = chainConfig.hasController && hash && isRegistered === true

    try {
      // Helper: verify via Blockscout
      const blockscoutVerify = async (addr) => {
        const res = await fetch(`${chainConfig.blockscout}/api/v2/addresses/${addr}`)
        if (!res.ok) throw new Error(`Blockscout returned ${res.status}`)
        return await res.json()
      }

      if (canRpcLookup) {
        // Path A: Try Controller RPC call
        const calldata = SELECTOR + (hash.startsWith('0x') ? hash.slice(2) : hash)
        const rpcResult = await rpcCall(calldata)
        const resolved = '0x' + rpcResult.slice(-40)
        const isZero = resolved.toLowerCase() === ZERO_ADDR

        if (isZero && entry) {
          // Controller doesn't know this contract — fall through to Blockscout
          const bsData = await blockscoutVerify(entry.address)
          setResult({
            mode: 'lookup',
            resolved: entry.address,
            isZero: false,
            matches: null,
            name: selectedName,
            expectedAddress: entry.address,
            verifiedVia: 'blockscout',
            is_contract: bsData.is_contract,
            is_verified: bsData.is_verified,
            explorerName: bsData.name || null,
            has_logs: bsData.has_logs || false,
            category: entry.category,
            type: entry.type,
          })
        } else {
          const expected = entry ? entry.address : null
          const matches = !isZero && expected
            && resolved.toLowerCase() === expected.toLowerCase()
          setResult({
            mode: 'lookup',
            resolved,
            isZero: false,
            matches,
            name: selectedName,
            expectedAddress: expected,
            verifiedVia: 'controller',
            category: entry ? entry.category : null,
            type: entry ? entry.type : null,
          })
        }
      } else if (entry) {
        // Path B: No Controller lookup available, verify via Blockscout
        const res = await fetch(`${chainConfig.blockscout}/api/v2/addresses/${entry.address}`)
        if (!res.ok) throw new Error(`Blockscout returned ${res.status}`)
        const bsData = await res.json()
        setResult({
          mode: 'lookup',
          resolved: entry.address,
          isZero: false,
          matches: null,
          name: selectedName,
          expectedAddress: entry.address,
          verifiedVia: 'blockscout',
          is_contract: bsData.is_contract,
          is_verified: bsData.is_verified,
          explorerName: bsData.name || null,
          has_logs: bsData.has_logs || false,
          category: entry.category,
          type: entry.type,
        })
      } else {
        setError(`No data available for "${selectedName}".`)
      }
    } catch (e) {
      setError(e.message || 'Verification failed')
    } finally {
      setLoading(false)
    }
  }

  const verifyAddress = async () => {
    const trimmed = address.trim()
    if (!/^0x[0-9a-fA-F]{40}$/.test(trimmed)) {
      setError('Invalid address format. Expected 0x followed by 40 hex characters.')
      return
    }
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch(`${chainConfig.blockscout}/api/v2/addresses/${trimmed}`)
      if (!res.ok) throw new Error(`Blockscout returned ${res.status}`)
      const bsData = await res.json()
      const nameStr = (bsData.name || '').toLowerCase()
      const isLivepeerNamed = nameStr.includes('livepeer') || nameStr.includes('proxy')
      // Check if this address is in our pipeline data
      const pipelineMatch = contracts.find(
        c => c.address.toLowerCase() === trimmed.toLowerCase()
      )
      setResult({
        mode: 'verify',
        is_contract: bsData.is_contract,
        is_verified: bsData.is_verified,
        name: bsData.name || null,
        isLivepeerNamed,
        has_logs: bsData.has_logs || false,
        queriedAddress: trimmed,
        pipelineMatch: pipelineMatch || null,
      })
    } catch (e) {
      setError(e.message || 'Blockscout query failed')
    } finally {
      setLoading(false)
    }
  }

  const castFallback = (name) =>
    `cast call ${CONTROLLER} \\\n  "getContract(bytes32)(address)" \\\n  $(cast keccak "${name}") \\\n  --rpc-url ${chainConfig.rpcUrls[0]}`

  // ── STYLES ────────────────────────────────────────────────────────────

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      color: 'var(--foreground)',
      ...style,
    },
    tabRow: {
      display: 'flex',
      gap: '0.5rem',
    },
    tabBase: {
      padding: '0.5rem 1rem',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: 600,
      transition: 'background 0.15s, color 0.15s',
    },
    tabActive: {
      background: 'var(--accent)',
      color: 'var(--lp-color-on-accent)',
      borderColor: 'var(--accent)',
    },
    tabInactive: {
      background: 'transparent',
      color: 'var(--foreground)',
    },
    formRow: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    select: {
      padding: '0.5rem 0.75rem',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      background: 'var(--background)',
      color: 'var(--foreground)',
      fontSize: '0.9rem',
      minWidth: '200px',
    },
    input: {
      padding: '0.5rem 0.75rem',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      background: 'var(--background)',
      color: 'var(--foreground)',
      fontSize: '0.9rem',
      fontFamily: 'monospace',
      flex: '1 1 280px',
      minWidth: '280px',
    },
    button: {
      padding: '0.5rem 1.25rem',
      border: 'none',
      borderRadius: '4px',
      background: 'var(--accent)',
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
      border: '1px solid var(--border)',
      borderRadius: '4px',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    addressText: {
      fontFamily: 'monospace',
      fontSize: '0.9rem',
      wordBreak: 'break-all',
    },
    badgeMatch: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-good)',
      color: 'var(--lp-color-on-accent)',
    },
    badgeMismatch: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-bad)',
      color: 'var(--lp-color-on-accent)',
    },
    badgeWarn: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-warn)',
      color: 'var(--foreground)',
    },
    badgeGood: {
      display: 'inline-block',
      padding: '0.15rem 0.5rem',
      borderRadius: '4px',
      fontSize: '0.8rem',
      fontWeight: 700,
      background: 'var(--lp-color-status-good)',
      color: 'var(--lp-color-on-accent)',
    },
    links: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      fontSize: '0.85rem',
      marginTop: '0.25rem',
    },
    link: {
      color: 'var(--accent)',
      textDecoration: 'none',
    },
    pre: {
      background: 'var(--background)',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
      borderRadius: '4px',
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
      gap: '0.5rem',
      fontSize: '0.9rem',
    },
    mismatchNote: {
      fontSize: '0.85rem',
      color: 'var(--lp-color-status-warn)',
      marginTop: '0.25rem',
    },
  }

  // ── RENDER HELPERS ────────────────────────────────────────────────────

  const renderLookupResult = () => {
    if (!result || result.mode !== 'lookup') return null

    const addr = result.resolved || result.expectedAddress
    const categoryLabel = result.category
      ? result.category.charAt(0).toUpperCase() + result.category.slice(1)
      : null
    const typeLabel = result.type || null

    // Path A: Controller RPC result (zero results now auto-fall-through to Blockscout in handler)
    if (result.verifiedVia === 'controller') {
      return (
        <div style={styles.card}>
          <div style={styles.signalRow}>
            <span style={result.matches ? styles.badgeMatch : styles.badgeMismatch}>
              {result.matches ? 'MATCH' : 'MISMATCH'}
            </span>
            <span style={{ fontWeight: 600 }}>{result.name}</span>
            {categoryLabel && (
              <span style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>
                ({categoryLabel}{typeLabel ? ', ' + typeLabel : ''})
              </span>
            )}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>Verified on-chain via Controller registry</div>
          <div style={styles.addressText}>{result.resolved}</div>
          {!result.matches && (
            <div style={styles.mismatchNote}>
              MISMATCH may indicate a governance upgrade. Cross-check{' '}
              <a
                href="https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >governor-scripts</a>.
            </div>
          )}
          <div style={styles.links}>
            <a href={`${chainConfig.etherscan}/address/${result.resolved}`} target="_blank" rel="noopener noreferrer" style={styles.link}>View on Arbiscan</a>
            <a href={`${chainConfig.blockscout}/address/${result.resolved}`} target="_blank" rel="noopener noreferrer" style={styles.link}>View on Blockscout</a>
          </div>
        </div>
      )
    }

    // Path B: Blockscout verification (not in Controller)
    if (result.verifiedVia === 'blockscout') {
      return (
        <div style={styles.card}>
          <div style={styles.signalRow}>
            <span style={{ fontWeight: 600 }}>{result.name}</span>
            {categoryLabel && (
              <span style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>
                ({categoryLabel}{typeLabel ? ', ' + typeLabel : ''})
              </span>
            )}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>Verified via Blockscout explorer</div>
          <div style={styles.addressText}>{result.resolved}</div>
          <div style={styles.signalRow}>
            <span style={{ fontWeight: 600 }}>Contract:</span>
            {result.is_contract
              ? <span style={styles.badgeGood}>Yes</span>
              : <span style={styles.badgeMismatch}>Not a contract</span>
            }
          </div>
          <div style={styles.signalRow}>
            <span style={{ fontWeight: 600 }}>Source verified:</span>
            {result.is_verified
              ? <span style={styles.badgeGood}>Verified</span>
              : <span style={styles.badgeWarn}>Not verified</span>
            }
          </div>
          {result.explorerName && (
            <div style={styles.signalRow}>
              <span style={{ fontWeight: 600 }}>Explorer name:</span>
              <span>{result.explorerName}</span>
            </div>
          )}
          <div style={styles.links}>
            <a href={`${chainConfig.etherscan}/address/${result.resolved}`} target="_blank" rel="noopener noreferrer" style={styles.link}>View on Arbiscan</a>
            <a href={`${chainConfig.blockscout}/address/${result.resolved}`} target="_blank" rel="noopener noreferrer" style={styles.link}>View on Blockscout</a>
          </div>
        </div>
      )
    }

    return null
  }

  const renderVerifyResult = () => {
    if (!result || result.mode !== 'verify') return null
    if (!result.is_contract) {
      return (
        <div style={styles.card}>
          <span style={styles.badgeMismatch}>NOT A CONTRACT</span>
          <span style={{ fontSize: '0.9rem' }}>
            This address is not a contract on Arbitrum One. It may be an
            externally owned account (EOA) or does not exist on this chain.
          </span>
        </div>
      )
    }
    return (
      <div style={styles.card}>
        {result.pipelineMatch && (
          <div style={styles.signalRow}>
            <span style={styles.badgeGood}>Known Livepeer contract</span>
            <span style={{ fontWeight: 600 }}>{result.pipelineMatch.name}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>
              ({result.pipelineMatch.type}, {result.pipelineMatch.category})
            </span>
          </div>
        )}
        {result.name && (
          <div style={styles.signalRow}>
            <span style={{ fontWeight: 600 }}>Explorer name:</span>
            <span>{result.name}</span>
            {result.isLivepeerNamed && !result.pipelineMatch && (
              <span style={styles.badgeGood}>Livepeer identified</span>
            )}
          </div>
        )}
        <div style={styles.signalRow}>
          <span style={{ fontWeight: 600 }}>Contract:</span>
          <span style={styles.badgeGood}>Yes</span>
        </div>
        <div style={styles.signalRow}>
          <span style={{ fontWeight: 600 }}>Source verified:</span>
          {result.is_verified
            ? <span style={styles.badgeGood}>Verified</span>
            : <span style={styles.badgeWarn}>Not verified</span>
          }
        </div>
        <div style={styles.signalRow}>
          <span style={{ fontWeight: 600 }}>Transaction logs:</span>
          {result.has_logs
            ? <span style={styles.badgeGood}>Present</span>
            : <span style={styles.badgeWarn}>None found</span>
          }
        </div>
        {!result.pipelineMatch && (
          <div style={styles.signalRow}>
            <span style={styles.badgeWarn}>Not in Livepeer contract registry</span>
          </div>
        )}
        <div style={styles.links}>
          <a
            href={`${chainConfig.etherscan}/address/${result.queriedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >View on Arbiscan</a>
          <a
            href={`${BLOCKSCOUT}/address/${result.queriedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >View on Blockscout</a>
        </div>
      </div>
    )
  }

  // ── RETURN ────────────────────────────────────────────────────────────

  return (
    <div style={styles.wrapper} className={className} {...rest}>
      {/* Description */}
      {tab === 'lookup' && (
        <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>
          Select a contract and verify its address on-chain.
        </div>
      )}
      {tab === 'verify' && (
        <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>
          Paste any address to check whether it is a verified contract on {chainConfig.label}.
        </div>
      )}

      {/* Tab buttons */}
      <div style={styles.tabRow}>
        <button
          style={{ ...styles.tabBase, ...(tab === 'lookup' ? styles.tabActive : styles.tabInactive) }}
          onClick={() => { setTab('lookup'); setResult(null); setError(null) }}
          aria-pressed={tab === 'lookup'}
        >
          Look up contract
        </button>
        <button
          style={{ ...styles.tabBase, ...(tab === 'verify' ? styles.tabActive : styles.tabInactive) }}
          onClick={() => { setTab('verify'); setResult(null); setError(null) }}
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
            {CATEGORY_ORDER.filter(cat => lookupGroups[cat]).map((cat) => (
              <optgroup key={cat} label={cat.charAt(0).toUpperCase() + cat.slice(1)}>
                {lookupGroups[cat].map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </optgroup>
            ))}
          </select>
          <button
            onClick={lookupByName}
            disabled={loading}
            style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
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
            style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
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
            {tab === 'lookup' && (
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  Verify manually with the Foundry CLI:
                </div>
                <pre style={styles.pre}>{castFallback(selectedName)}</pre>
              </div>
            )}
            {tab === 'verify' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                Try inspecting this address directly on{' '}
                <a
                  href={chainConfig.etherscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >Arbiscan</a>.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
