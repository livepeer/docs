/**
 * @component SearchTable
 * @category layout
 * @tier pattern
 * @status stable
 * @description Renders the search table component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {string} [TableComponent=null] - Table component used by the component.
 * @param {React.ReactNode} [tableTitle=null] - Table title used by the component.
 * @param {Array} [headerList=[]] - Collection data rendered by the component.
 * @param {Array} [itemsList=[]] - Collection data rendered by the component.
 * @param {Array} [monospaceColumns=[]] - Collection data rendered by the component.
 * @param {string} margin - Margin used by the component.
 * @param {string} [searchPlaceholder='Search...'] - Search placeholder used by the component.
 * @param {Array} [searchColumns=[]] - Collection data rendered by the component.
 * @param {string} [categoryColumn='Category'] - Category column used by the component.
 *
 * @example
 * <SearchTable margin="value" />
 */
export const SearchTable = ({
  TableComponent = null,
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  margin,
  searchPlaceholder = 'Search...',
  searchColumns = [],
  categoryColumn = 'Category'
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const safeHeaderList = Array.isArray(headerList) ? headerList : [];
  const safeItemsList = Array.isArray(itemsList) ? itemsList : [];
  const safeMonospaceColumns = Array.isArray(monospaceColumns)
    ? monospaceColumns
    : [];
  const safeSearchColumns = Array.isArray(searchColumns) ? searchColumns : [];
  const activeColumns = safeSearchColumns.length ? safeSearchColumns : safeHeaderList;
  const normalizedQuery = query.trim().toLowerCase();

  const categories = [...new Set(safeItemsList.map((item) => String(item?.[categoryColumn] || '')).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  const categoryFilteredItems =
    selectedCategory === 'All'
      ? safeItemsList
      : safeItemsList.filter((item) => String(item?.[categoryColumn] || '') === selectedCategory);

  const searchedItems = !normalizedQuery
    ? categoryFilteredItems
    : categoryFilteredItems.filter((item) =>
        activeColumns.some((column) => {
          const value = item?.[column] ?? item?.[String(column).toLowerCase()] ?? '';
          return String(value).toLowerCase().includes(normalizedQuery);
        })
      );

  const withSeparators = [];
  let lastCategory = '';
  searchedItems.forEach((item) => {
    const category = String(item?.[categoryColumn] || '');
    if (category && category !== lastCategory) {
      withSeparators.push({ __separator: true, [categoryColumn]: category });
      lastCategory = category;
    }
    withSeparators.push(item);
  });

  return (
    <div>
      <div
        style={{
          marginBottom: '0.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          value={query}
          placeholder={searchPlaceholder}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Filter table rows"
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            color: 'var(--text)'
          }}
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          aria-label="Filter by category"
          style={{
            minWidth: '200px',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            color: 'var(--text)'
          }}
        >
          <option value="All">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {typeof TableComponent === 'function' ? (
        <TableComponent
          tableTitle={tableTitle}
          headerList={safeHeaderList}
          itemsList={withSeparators}
          monospaceColumns={safeMonospaceColumns}
          margin={margin}
        />
      ) : (
        <Warning>SearchTable requires a `TableComponent` prop.</Warning>
      )}
    </div>
  );
};
