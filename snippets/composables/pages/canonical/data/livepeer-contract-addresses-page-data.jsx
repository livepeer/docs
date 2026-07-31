import { LinkIcon } from '/snippets/components/elements/links/Links.jsx'
import { CopyText } from '/snippets/components/elements/text/Text.jsx'
import { ArbitrumIcon, LivepeerIcon } from '/snippets/components/elements/icons/Icons.jsx'

export const buildCategoryAccordionRows = (
  items = [],
  { includeType = true, includeVersion = false } = {},
) => {
  const renderAddressCell = (address, href) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        width: '100%',
        minWidth: 0,
      }}
    >
      <CopyText text={address} style={{ flex: 1 }} />
      {href ? <LinkIcon href={href} color="var(--accent)" /> : null}
    </div>
  )

  const renderChainCell = (chainKey) => (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
      }}
    >
      {chainKey === 'ethereumMainnet' ? (
        <>
          <Icon icon="ethereum" color="var(--hero-text)" size={13} />
          Ethereum Mainnet
        </>
      ) : (
        <>
          <ArbitrumIcon color="var(--arbitrum)" />
          Arbitrum One
        </>
      )}
    </span>
  )

  const renderTypeBadge = (type) => {
    const colorMap = {
      standalone: 'blue',
      target: 'surface-destructive',
      proxy: 'surface',
    }

    return <Badge color={colorMap[type] || 'surface'}>{type}</Badge>
  }

  return (items || []).map((item) => {
    if (item.__separator) {
      return item
    }

    const row = {
      ...item,
      Name: <strong>{item.Name}</strong>,
      Address: renderAddressCell(item.Address, item._addressHref),
      Chain: renderChainCell(item._chainKey),
    }

    if (includeVersion) {
      row.Version = item.Version || '—'
    }

    if (includeType) {
      row.Type = renderTypeBadge(item._typeKey || item.Type)
    }

    return row
  })
}

export const historicalCategoryIcon = (category) => {
  const iconNameByCategory = {
    core: 'gear',
    governance: 'landmark',
    migration: 'bridge',
    genesis: 'livepeer',
  }

  const iconName = iconNameByCategory[category] || 'clock-rotate-left'

  return iconName === 'livepeer'
    ? <LivepeerIcon color="var(--accent)" size={16} />
    : <Icon icon={iconName} color="var(--accent)" />
}
