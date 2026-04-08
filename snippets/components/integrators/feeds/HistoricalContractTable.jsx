/**
 * @component HistoricalContractTable
 * @category displays
 * @subcategory tables
 * @status stable
 * @description Renders historical contract version series from the generated contracts
 *   pipeline output. Accepts the raw contractAddresses object and derives visible series
 *   for a single category internally. Current rows are excluded from display, and each
 *   contract series is split into separate chain tables to keep version history readable.
 * @aiDiscoverability none
 * @param {string} category - Historical category key to render.
 * @param {Object} sourceData - The full contractAddresses object from the contracts data adapter.
 */
import { ArbitrumIcon } from '/snippets/components/elements/icons/Icons.jsx'

export const HistoricalContractTable = ({ category = "core", sourceData = {} }) => {
  const hp = {padding:"0.3rem 0.4rem",borderBottom:"1px solid var(--lp-color-border-default)",backgroundColor:"transparent",color:"var(--lp-color-text-secondary)",fontWeight:600,fontSize:"0.75rem"}
  const cp = {padding:"0.3rem 0.4rem",border:"none",fontSize:"0.8rem",minWidth:0}
  const ap = {padding:"0.3rem 0.5rem",border:"none",minWidth:0}
  const hs = {display:"inline-flex",alignItems:"center",gap:"0.3rem",whiteSpace:"nowrap"}
  const as_ = {display:"inline-flex",alignItems:"center",gap:"0.3rem",minWidth:0}
  const cs = {fontFamily:"monospace",fontSize:"0.75rem",whiteSpace:"nowrap"}
  const lk = {display:"inline-flex",alignItems:"center",gap:"0.3rem",textDecoration:"none"}
  const typeBadge = {target:"surface-destructive",standalone:"blue",proxy:"surface"}
  const chainOrder = ["arbitrumOne", "ethereumMainnet"]
  const typeRank = { target: 0, proxy: 1, standalone: 2 }
  const byName = new Map()
  ;["arbitrumOne", "ethereumMainnet"].forEach((chainKey) => {
    const groups = sourceData?.[chainKey]?.historicalSeries?.[category] || []
    groups.forEach((group) => {
      const key = group?.canonicalName || group?.name
      if (!key) return
      if (!byName.has(key)) {
        byName.set(key, {
          name: group.name || key,
          entries: [],
        })
      }
      const target = byName.get(key)
      ;(group.entries || []).forEach((entry) => {
        if (!entry?.address) return
        target.entries.push({
          name: group.name || key,
          v: entry.version || "—",
          addr: entry.address,
          ch: entry.chain || chainKey,
          type: entry.type || entry.deploymentKind || "standalone",
          explorer: entry.blockchainHref || null,
          replacedBy: entry.replacedBy || null,
          status: entry.status || null,
          isCurrent: Boolean(entry.isCurrent),
        })
      })
    })
  })

  const sortEntries = (entries = []) =>
    [...entries].sort((left, right) => {
      const leftVersion = Number(String(left.v || "").replace(/^V/i, "")) || 0
      const rightVersion = Number(String(right.v || "").replace(/^V/i, "")) || 0
      return rightVersion - leftVersion
        || (typeRank[left.type] ?? 99) - (typeRank[right.type] ?? 99)
        || String(left.addr || "").localeCompare(String(right.addr || ""), "en", { sensitivity: "base" })
    })

  const visibleSeries = [...byName.values()]
    .map((series) => {
      const historicalEntries = series.entries.filter((entry) => {
        const status = String(entry?.status || '').toLowerCase()
        const metaStatus = String(entry?.meta?.statusLabel || '').toLowerCase()
        const currentSignal = status.includes('current') || metaStatus.includes('current')
        const implementationSignal = status.includes('implementation') || metaStatus.includes('implementation')
        return !entry.isCurrent && !entry?.currentImplementation && !entry?.meta?.currentImplementation && !currentSignal && !implementationSignal
      })
      const entriesByChain = chainOrder
        .map((chainKey) => ({
          chainKey,
          entries: sortEntries(historicalEntries.filter((entry) => entry.ch === chainKey)),
        }))
        .filter((group) => group.entries.length > 0)

      return {
        ...series,
        entriesByChain,
      }
    })
    .filter((series) => series.entriesByChain.length > 0)
    .sort((left, right) => String(left.name || "").localeCompare(String(right.name || ""), "en", { sensitivity: "base" }))

  if (!visibleSeries.length) {
    return (
      <div style={{padding:"0.75rem 0", color:"var(--text-muted)"}}>
        No historical contract versions are currently published for this category.
      </div>
    )
  }

  return (
    <>
      {visibleSeries.map((series) => (
        <div key={series.name} style={{marginBottom:"var(--lp-spacing-4)"}}>
          <h4 style={{margin:"0.5rem 0"}}>{series.name}</h4>
          {series.entriesByChain.map(({ chainKey, entries }) => (
            <div key={`${series.name}:${chainKey}`} style={{marginBottom:"0.9rem"}}>
              <div style={{margin:"0.35rem 0 0.4rem", fontWeight:600, color:"var(--lp-color-text-primary)"}}>
                <span style={hs}>
                  {chainKey === "arbitrumOne"
                    ? <><ArbitrumIcon color="var(--lp-color-arbitrum)" size={13} /> Arbitrum One</>
                    : <><Icon icon="ethereum" color="var(--lp-color-text-primary)" size={13} /> Ethereum Mainnet</>}
                </span>
              </div>
              <table style={{width:"100%",tableLayout:"fixed",borderCollapse:"collapse",borderSpacing:0}}>
                <thead>
                  <tr><th style={{...hp,width:"7%",textAlign:"center"}}>Version</th><th style={hp}>Address</th><th style={{...hp,width:"10%"}}>Type</th><th style={{...hp,width:"22%"}}>Status</th></tr>
                </thead>
                <tbody>
                  {entries.map((c, i) => (
                    <tr key={i}>
                      <td style={{...cp,textAlign:"center"}}>{c.v}</td>
                      <td style={ap}>
                        <span style={as_}>
                          <a href={c.explorer} target="_blank" rel="noopener noreferrer" style={lk}>
                            <Icon icon="arrow-up-right" size={12} color="var(--lp-color-accent)" />
                            <code style={cs}>{c.addr}</code>
                          </a>
                        </span>
                      </td>
                      <td style={cp}><Badge color={typeBadge[c.type] || "surface"}>{c.type.charAt(0).toUpperCase() + c.type.slice(1)}</Badge></td>
                      <td style={cp}><span style={hs}><Icon icon="circle" color="grey" size={8} /> {c.replacedBy ? `Replaced by ${c.replacedBy}` : "Deprecated"}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
