/**
 * @component SearchTable
 * @category layout
 * @tier composite
 * @status stable
 * @description Search Table layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/cn/docs-guide/components-index.mdx, v2/cn/docs-guide/indexes/components-index.mdx, v2/es/docs-guide/components-index.mdx, v2/es/docs-guide/indexes/components-index.mdx, v2/fr/docs-guide/components-index.mdx, v2/fr/docs-guide/indexes/components-index.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 * @param {any} [TableComponent=null] - Table Component prop.
 * @param {any} [tableTitle=null] - table Title prop.
 * @param {Array} [headerList=[]] - header List prop.
 * @param {Array} [itemsList=[]] - items List prop.
 * @param {Array} [monospaceColumns=[]] - monospace Columns prop.
 * @param {any} margin - margin prop.
 * @param {string} [searchPlaceholder='Search...'] - search Placeholder prop.
 * @param {Array} [searchColumns=[]] - search Columns prop.
 * @param {string} [categoryColumn='Category'] - category Column prop.
 * @example
 * <SearchTable margin="example" />
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
  const activeColumns = searchColumns.length ? searchColumns : headerList;
  const normalizedQuery = query.trim().toLowerCase();

  const categories = [...new Set(itemsList.map((item) => String(item[categoryColumn] || '')).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  const categoryFilteredItems =
    selectedCategory === 'All'
      ? itemsList
      : itemsList.filter((item) => String(item[categoryColumn] || '') === selectedCategory);

  const searchedItems = !normalizedQuery
    ? categoryFilteredItems
    : categoryFilteredItems.filter((item) =>
        activeColumns.some((column) => {
          const value = item[column] ?? item[String(column).toLowerCase()] ?? '';
          return String(value).toLowerCase().includes(normalizedQuery);
        })
      );

  const withSeparators = [];
  let lastCategory = '';
  searchedItems.forEach((item) => {
    const category = String(item[categoryColumn] || '');
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

      {TableComponent ? (
        <TableComponent
          tableTitle={tableTitle}
          headerList={headerList}
          itemsList={withSeparators}
          monospaceColumns={monospaceColumns}
          margin={margin}
        />
      ) : (
        <Warning>SearchTable requires a `TableComponent` prop.</Warning>
      )}
    </div>
  );
};
