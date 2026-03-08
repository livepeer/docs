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
