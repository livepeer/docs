/**
 * @component SearchTable
 * @category wrappers
 * @subcategory tables
 * @status stable
 * @deprecated Use SearchTableV2 for new tables that need content-driven sizing and composable column behaviour.
 * @description Generic filterable table wrapper with search input, category dropdown(s), and optional separators.
 * @aiDiscoverability props-extracted
 * @param {Function} [TableComponent=null] - Table renderer component (e.g. DynamicTable).
 * @param {React.ReactNode} [tableTitle=null] - Table title.
 * @param {Array} [headerList=[]] - Column header names.
 * @param {Array} [itemsList=[]] - Row data objects. Cell values can be strings or JSX.
 * @param {Array} [monospaceColumns=[]] - Column indices to render in monospace.
 * @param {string} margin - Margin passed to TableComponent.
 * @param {string} [searchPlaceholder='Search...'] - Placeholder text for the search input.
 * @param {Array} [searchColumns=[]] - Column names to search against. Defaults to all headers.
 * @param {string} [categoryColumn='Category'] - Field name the first dropdown filters on.
 * @param {Array} [filterColumns=[]] - Additional column names that get dropdown filters. Each scoped by selections above it.
 * @param {object} [columnWidths={}] - Column width overrides keyed by header name. Passed to TableComponent.
 * @param {Array} [contentFitColumns=[]] - Column names that should size to their contents when supported by TableComponent.
 * @param {object} [columnVariant={}] - Column display variants keyed by header name. Supported: "bold", "badge", "textIcon", "addressWrapper".
 * @param {Array} [categoryBadges=[]] - Array of {color, label} for "badge" variant rendering. Matched by label (case-insensitive).
 * @param {Array} [textIcons=[]] - Array of {label, icon} for "textIcon" variant rendering. Icon is JSX rendered inline before the label text.
 * @param {boolean} [showSeparators=false] - When true, inserts category separator rows. Labels are uppercased.
 * @param {string} [separatorColumn=null] - Override which column drives separators. Default: categoryColumn.
 * @param {boolean} [boldFirstColumn=true] - Auto-wraps first column in <strong> if value is a plain string.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
'use client'
import { LinkIcon } from '/snippets/components/elements/links/Links.jsx'
import { CopyText } from '/snippets/components/elements/text/Text.jsx'

export const SearchTable = ({
  TableComponent = null,
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  margin,
  searchPlaceholder = 'Search...',
  searchColumns = [],
  categoryColumn = 'Category',
  filterColumns = [],
  columnWidths = {},
  contentFitColumns = [],
  columnVariant = {},
  categoryBadges = [],
  textIcons = [],
  showSeparators = false,
  separatorColumn = null,
  boldFirstColumn = true,
  className = '',
  style = {},
}) => {
  // All filter columns: categoryColumn first, then any extras
  const allFilterCols = [categoryColumn, ...filterColumns]

  // State: one selection per filter column
  const [query, setQuery] = useState('')
  const [selections, setSelections] = useState(() => {
    const init = {}
    allFilterCols.forEach((col) => {
      init[col] = 'All'
    })
    return init
  })

  const safeHeaderList = Array.isArray(headerList) ? headerList : []
  const safeItemsList = Array.isArray(itemsList) ? itemsList : []
  const safeMonospaceColumns = Array.isArray(monospaceColumns)
    ? monospaceColumns
    : []
  const safeSearchColumns = Array.isArray(searchColumns) ? searchColumns : []
  const activeColumns = safeSearchColumns.length
    ? safeSearchColumns
    : safeHeaderList
  const normalizedQuery = query.trim().toLowerCase()

  // --- Badge colour map ---
  const badgeColorMap = {}
  categoryBadges.forEach((b) => {
    badgeColorMap[b.label.toLowerCase()] = b.color
  })

  // --- Text icon map ---
  const textIconMap = {}
  textIcons.forEach((t) => {
    textIconMap[t.label.toLowerCase()] = t.icon
  })

  // --- Dropdown options for each filter column ---
  const getOptionsForColumn = (colName, colIndex) => {
    // Scope options by selections of all columns before this one
    let scoped = safeItemsList
    for (let i = 0; i < colIndex; i++) {
      const prevCol = allFilterCols[i]
      const prevSel = selections[prevCol]
      if (prevSel !== 'All') {
        scoped = scoped.filter(
          (item) => String(item?.[prevCol] || '') === prevSel
        )
      }
    }
    return [
      ...new Set(
        scoped.map((item) => String(item?.[colName] || '')).filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
  }

  // --- Filtering ---
  const filteredItems = safeItemsList.filter((item) =>
    allFilterCols.every((col) => {
      const sel = selections[col]
      return sel === 'All' || String(item?.[col] || '') === sel
    })
  )

  const searchedItems = !normalizedQuery
    ? filteredItems
    : filteredItems.filter((item) =>
        activeColumns.some((column) => {
          const value =
            item?.[column] ?? item?.[String(column).toLowerCase()] ?? ''
          return String(value).toLowerCase().includes(normalizedQuery)
        })
      )

  // --- Sort by filter columns in order ---
  const sortedItems = [...searchedItems].sort((a, b) => {
    for (const col of allFilterCols) {
      const cmp = String(a[col] || '').localeCompare(
        String(b[col] || ''),
        'en',
        { sensitivity: 'base' }
      )
      if (cmp !== 0) return cmp
    }
    return 0
  })

  // --- Apply column variants ---
  const firstColumnName = safeHeaderList[0]

  const renderVariant = (value, variant, item, header) => {
    if (variant === 'bold' && typeof value === 'string') {
      return <strong>{value}</strong>
    }
    if (variant === 'badge' && typeof value === 'string') {
      const colorName = badgeColorMap[value.toLowerCase()]
      if (colorName) {
        return <Badge color={colorName}>{value}</Badge>
      }
    }
    if (variant === 'textIcon' && typeof value === 'string') {
      const icon = textIconMap[value.toLowerCase()]
      if (icon) {
        return (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            {icon} {value}
          </span>
        )
      }
    }
    if (variant === 'addressWrapper' && typeof value === 'string') {
      const href = item?.[`_${header}Href`] ?? item?._addressHref
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            width: '100%',
            minWidth: 0,
          }}
        >
          <CopyText text={value} style={{ flex: 1 }} />
          {href && <LinkIcon href={href} color="var(--accent)" />}
        </div>
      )
    }
    return value
  }

  const displayItems = sortedItems.map((item) => {
    const out = {
      ...item,
      _sepKey: String(item[separatorColumn || categoryColumn] || ''),
    }
    for (const header of safeHeaderList) {
      if (columnVariant[header] && out[header] !== undefined) {
        out[header] = renderVariant(out[header], columnVariant[header], item, header)
      }
    }
    if (
      boldFirstColumn &&
      firstColumnName &&
      !columnVariant[firstColumnName] &&
      typeof out[firstColumnName] === 'string'
    ) {
      out[firstColumnName] = <strong>{out[firstColumnName]}</strong>
    }
    return out
  })

  // --- Separators ---
  const withSeparators = []
  let lastSep = ''
  displayItems.forEach((item) => {
    const sepKey = item._sepKey || ''
    if (showSeparators && sepKey && sepKey !== lastSep) {
      withSeparators.push({
        __separator: true,
        [safeHeaderList[0]]: sepKey.toUpperCase(),
      })
      lastSep = sepKey
    }
    withSeparators.push(item)
  })

  // --- Render ---
  const selectStyle = {
    minWidth: '150px',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    background: 'var(--background)',
    color: 'var(--text)',
  }

  const updateSelection = (col, colIndex, value) => {
    const next = { ...selections, [col]: value }
    // Reset all downstream filter selections
    for (let i = colIndex + 1; i < allFilterCols.length; i++) {
      next[allFilterCols[i]] = 'All'
    }
    setSelections(next)
  }

  return (
    <div className={className} style={style}>
      <div
        style={{
          marginBottom: '0.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={query}
          placeholder={searchPlaceholder}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter table rows"
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            color: 'var(--text)',
          }}
        />
        {allFilterCols.map((col, colIndex) => {
          const options = getOptionsForColumn(col, colIndex)
          if (options.length === 0) return null
          const parentLabel =
            colIndex > 0 && selections[allFilterCols[colIndex - 1]] !== 'All'
              ? selections[allFilterCols[colIndex - 1]]
              : col.toLowerCase() + 's'
          return (
            <select
              key={col}
              value={selections[col]}
              onChange={(e) => updateSelection(col, colIndex, e.target.value)}
              aria-label={`Filter by ${col}`}
              style={selectStyle}
            >
              <option value="All">All {parentLabel}</option>
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )
        })}
      </div>

      {typeof TableComponent === 'function' ? (
        <TableComponent
          tableTitle={tableTitle}
          headerList={safeHeaderList}
          itemsList={withSeparators}
          monospaceColumns={safeMonospaceColumns}
          columnWidths={columnWidths}
          contentFitColumns={contentFitColumns}
          showSeparators={showSeparators}
          margin={margin}
        />
      ) : (
        <Warning>SearchTable requires a `TableComponent` prop.</Warning>
      )}
    </div>
  )
}

/**
 * @component SearchTableV2
 * @category wrappers
 * @subcategory tables
 * @status experimental
 * @description Generic filterable table wrapper with intrinsic-width sizing for badge, icon, and primary text columns.
 * @aiDiscoverability props-extracted
 * @param {Function} [TableComponent=null] - Table renderer component (e.g. DynamicTableV2).
 * @param {React.ReactNode} [tableTitle=null] - Table title.
 * @param {Array} [headerList=[]] - Column header names.
 * @param {Array} [itemsList=[]] - Row data objects. Cell values can be strings or JSX.
 * @param {Array} [monospaceColumns=[]] - Column indices to render in monospace.
 * @param {string} margin - Margin passed to TableComponent.
 * @param {string} [searchPlaceholder='Search...'] - Placeholder text for the search input.
 * @param {Array} [searchColumns=[]] - Column names to search against. Defaults to all headers.
 * @param {string} [categoryColumn='Category'] - Field name the first dropdown filters on.
 * @param {Array} [filterColumns=[]] - Additional column names that get dropdown filters. Each scoped by selections above it.
 * @param {object} [columnWidths={}] - Column width overrides keyed by header name. Passed to TableComponent.
 * @param {object} [columnConfig={}] - Optional column sizing overrides merged with V2 defaults.
 * @param {object} [columnVariant={}] - Column display variants keyed by header name. Supported: "bold", "badge", "textIcon", "addressWrapper".
 * @param {Array} [categoryBadges=[]] - Array of {color, label} for "badge" variant rendering. Matched by label (case-insensitive).
 * @param {Array} [textIcons=[]] - Array of {label, icon} for "textIcon" variant rendering.
 * @param {boolean} [showSeparators=false] - When true, inserts category separator rows. Labels are uppercased.
 * @param {string} [separatorColumn=null] - Override which column drives separators. Default: categoryColumn.
 * @param {boolean} [boldFirstColumn=true] - Auto-wraps first column in <strong> if value is a plain string.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const SearchTableV2 = ({
  TableComponent = null,
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  margin,
  searchPlaceholder = 'Search...',
  searchColumns = [],
  categoryColumn = 'Category',
  filterColumns = [],
  columnWidths = {},
  columnConfig = {},
  columnVariant = {},
  categoryBadges = [],
  textIcons = [],
  showSeparators = false,
  separatorColumn = null,
  boldFirstColumn = true,
  className = '',
  style = {},
}) => {
  const allFilterCols = [categoryColumn, ...filterColumns]

  const [query, setQuery] = useState('')
  const [selections, setSelections] = useState(() => {
    const init = {}
    allFilterCols.forEach((col) => {
      init[col] = 'All'
    })
    return init
  })

  const safeHeaderList = Array.isArray(headerList) ? headerList : []
  const safeItemsList = Array.isArray(itemsList) ? itemsList : []
  const safeMonospaceColumns = Array.isArray(monospaceColumns)
    ? monospaceColumns
    : []
  const safeSearchColumns = Array.isArray(searchColumns) ? searchColumns : []
  const activeColumns = safeSearchColumns.length
    ? safeSearchColumns
    : safeHeaderList
  const normalizedQuery = query.trim().toLowerCase()

  const badgeColorMap = {}
  categoryBadges.forEach((b) => {
    badgeColorMap[b.label.toLowerCase()] = b.color
  })

  const textIconMap = {}
  textIcons.forEach((t) => {
    textIconMap[t.label.toLowerCase()] = t.icon
  })

  const getOptionsForColumn = (colName, colIndex) => {
    let scoped = safeItemsList
    for (let i = 0; i < colIndex; i++) {
      const prevCol = allFilterCols[i]
      const prevSel = selections[prevCol]
      if (prevSel !== 'All') {
        scoped = scoped.filter(
          (item) => String(item?.[prevCol] || '') === prevSel
        )
      }
    }
    return [
      ...new Set(
        scoped.map((item) => String(item?.[colName] || '')).filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
  }

  const filteredItems = safeItemsList.filter((item) =>
    allFilterCols.every((col) => {
      const sel = selections[col]
      return sel === 'All' || String(item?.[col] || '') === sel
    })
  )

  const searchedItems = !normalizedQuery
    ? filteredItems
    : filteredItems.filter((item) =>
        activeColumns.some((column) => {
          const value =
            item?.[column] ?? item?.[String(column).toLowerCase()] ?? ''
          return String(value).toLowerCase().includes(normalizedQuery)
        })
      )

  const sortedItems = [...searchedItems].sort((a, b) => {
    for (const col of allFilterCols) {
      const cmp = String(a[col] || '').localeCompare(
        String(b[col] || ''),
        'en',
        { sensitivity: 'base' }
      )
      if (cmp !== 0) return cmp
    }
    return 0
  })

  const firstColumnName = safeHeaderList[0]

  const renderVariant = (value, variant, item, header) => {
    if (variant === 'bold' && typeof value === 'string') {
      return <strong>{value}</strong>
    }
    if (variant === 'badge' && typeof value === 'string') {
      const colorName = badgeColorMap[value.toLowerCase()]
      if (colorName) {
        return (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <Badge color={colorName}>{value}</Badge>
          </span>
        )
      }
    }
    if (variant === 'textIcon' && typeof value === 'string') {
      const icon = textIconMap[value.toLowerCase()]
      if (icon) {
        return (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
            }}
          >
            {icon}
            <span>{value}</span>
          </span>
        )
      }
    }
    if (variant === 'addressWrapper' && typeof value === 'string') {
      const href = item?.[`_${header}Href`] ?? item?._addressHref
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            width: '100%',
            minWidth: 0,
          }}
        >
          <CopyText text={value} style={{ flex: 1 }} />
          {href && <LinkIcon href={href} color="var(--accent)" />}
        </div>
      )
    }
    return value
  }

  const displayItems = sortedItems.map((item) => {
    const out = {
      ...item,
      _sepKey: String(item[separatorColumn || categoryColumn] || ''),
    }
    for (const header of safeHeaderList) {
      if (columnVariant[header] && out[header] !== undefined) {
        out[header] = renderVariant(
          out[header],
          columnVariant[header],
          item,
          header
        )
      }
    }
    if (
      boldFirstColumn &&
      firstColumnName &&
      !columnVariant[firstColumnName] &&
      typeof out[firstColumnName] === 'string'
    ) {
      out[firstColumnName] = <strong>{out[firstColumnName]}</strong>
    }
    return out
  })

  const withSeparators = []
  let lastSep = ''
  displayItems.forEach((item) => {
    const sepKey = item._sepKey || ''
    if (showSeparators && sepKey && sepKey !== lastSep) {
      withSeparators.push({
        __separator: true,
        [safeHeaderList[0]]: sepKey.toUpperCase(),
      })
      lastSep = sepKey
    }
    withSeparators.push(item)
  })

  const resolvedColumnConfig = safeHeaderList.reduce(
    (accumulator, header, index) => {
      const variant = columnVariant[header]
      const override = columnConfig?.[header] || {}

      accumulator[header] = {
        fitContent:
          override.fitContent ??
          (index === 0 || variant === 'badge' || variant === 'textIcon'),
        nowrap:
          override.nowrap ??
          (index === 0 || variant === 'badge' || variant === 'textIcon'),
        fluid: override.fluid ?? variant === 'addressWrapper',
      }
      return accumulator
    },
    {}
  )

  const selectStyle = {
    minWidth: '150px',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    background: 'var(--background)',
    color: 'var(--text)',
  }

  const updateSelection = (col, colIndex, value) => {
    const next = { ...selections, [col]: value }
    for (let i = colIndex + 1; i < allFilterCols.length; i++) {
      next[allFilterCols[i]] = 'All'
    }
    setSelections(next)
  }

  return (
    <div className={className} style={style}>
      <div
        style={{
          marginBottom: '0.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={query}
          placeholder={searchPlaceholder}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter table rows"
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            color: 'var(--text)',
          }}
        />
        {allFilterCols.map((col, colIndex) => {
          const options = getOptionsForColumn(col, colIndex)
          if (options.length === 0) return null
          const parentLabel =
            colIndex > 0 && selections[allFilterCols[colIndex - 1]] !== 'All'
              ? selections[allFilterCols[colIndex - 1]]
              : col.toLowerCase() + 's'
          return (
            <select
              key={col}
              value={selections[col]}
              onChange={(e) => updateSelection(col, colIndex, e.target.value)}
              aria-label={`Filter by ${col}`}
              style={selectStyle}
            >
              <option value="All">All {parentLabel}</option>
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )
        })}
      </div>

      {typeof TableComponent === 'function' ? (
        <TableComponent
          tableTitle={tableTitle}
          headerList={safeHeaderList}
          itemsList={withSeparators}
          monospaceColumns={safeMonospaceColumns}
          columnWidths={columnWidths}
          columnConfig={resolvedColumnConfig}
          showSeparators={showSeparators}
          margin={margin}
        />
      ) : (
        <Warning>SearchTable requires a `TableComponent` prop.</Warning>
      )}
    </div>
  )
}
