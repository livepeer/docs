/**
 * @component HistoricalContractTable
 * @category displays
 * @subcategory tables
 * @status stable
 * @description Renders historical contract address tables. Accepts raw contractAddresses
 *   data and computes the historical lookup internally — avoids Mintlify scope isolation
 *   issues with pre-computed data passed across export boundaries.
 * @aiDiscoverability none
 * @param {Array} contracts - Array of contract name strings to render tables for.
 * @param {Object} sourceData - The full contractAddresses object from contractAddressesData.jsx.
 */
import { ArbitrumIcon } from '/snippets/components/elements/icons/Icons.jsx'

export const HistoricalContractTable = ({ contracts = [], sourceData = {} }) => {
  const hp = {padding:"0.3rem 0.4rem",borderBottom:"1px solid var(--border)",backgroundColor:"transparent",color:"var(--text)",fontWeight:600,fontSize:"0.75rem"}
  const cp = {padding:"0.3rem 0.4rem",border:"none",fontSize:"0.8rem",minWidth:0}
  const ap = {padding:"0.3rem 0.5rem",border:"none",minWidth:0}
  const hs = {display:"inline-flex",alignItems:"center",gap:"0.3rem",whiteSpace:"nowrap"}
  const as_ = {display:"inline-flex",alignItems:"center",gap:"0.3rem",minWidth:0}
  const cs = {fontFamily:"monospace",fontSize:"0.75rem",whiteSpace:"nowrap"}
  const lk = {display:"inline-flex",alignItems:"center",gap:"0.3rem",textDecoration:"none"}
  const typeBadge = {target:"surface-destructive",standalone:"blue",proxy:"surface"}

  const flatten = (chainKey, explorerBase) => {
    const groups = sourceData[chainKey]?.historical || {};
    const rows = [];
    Object.entries(groups).forEach(([key, group]) => {
      const m = key.match(/^([^(]+?)(?:\s*\((\w+)\))?$/);
      const name = m ? m[1].trim() : key;
      const type = m && m[2] ? m[2].toLowerCase() : "standalone";
      (group.entries || []).forEach((e) => {
        rows.push({ name, v: e.version, addr: e.address, ch: chainKey, type, explorer: e.blockchainHref || (explorerBase + e.address), deployedAt: e.deployedAt || null, verified: e.verified != null ? e.verified : null, replacedBy: e.replacedBy || null });
      });
    });
    return rows;
  };

  const data = [
    ...flatten("arbitrumOne", sourceData.meta?.explorerUrls?.arbiscan || "https://arbiscan.io/address/"),
    ...flatten("ethereumMainnet", sourceData.meta?.explorerUrls?.etherscan || "https://etherscan.io/address/"),
  ].reduce((acc, row) => {
    if (!acc[row.name]) acc[row.name] = [];
    acc[row.name].push(row);
    return acc;
  }, {});

  const filtered = contracts.filter((n) => data[n] && data[n].length > 0)

  return (
    <>
      {filtered.map((name) => (
        <div key={name} style={{marginBottom:"1rem"}}>
          <h4 style={{margin:"0.5rem 0"}}>{name}</h4>
          <table style={{width:"100%",tableLayout:"fixed",borderCollapse:"collapse",borderSpacing:0}}>
            <thead>
              <tr><th style={{...hp,width:"5%",textAlign:"center"}}>Version</th><th style={hp}>Address</th><th style={{...hp,width:"15%"}}>Chain</th><th style={{...hp,width:"8%"}}>Type</th><th style={{...hp,width:"17%"}}>Status</th></tr>
            </thead>
            <tbody>
              {data[name].map((c, i) => (
                <tr key={i}>
                  <td style={{...cp,textAlign:"center"}}>{c.v}</td>
                  <td style={ap}>
                    <span style={as_}>
                      <a href={c.explorer} target="_blank" rel="noopener noreferrer" style={lk}>
                        <Icon icon="arrow-up-right" size={12} color="var(--accent)" />
                        <code style={cs}>{c.addr}</code>
                      </a>
                    </span>
                  </td>
                  <td style={cp}>
                    <span style={hs}>
                      {c.ch === "arbitrumOne"
                        ? <><ArbitrumIcon color="var(--arbitrum)" size={13} /> Arbitrum One</>
                        : <><Icon icon="ethereum" color="var(--hero-text)" size={13} /> Ethereum Mainnet</>}
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
    </>
  )
}
