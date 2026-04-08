// used in project showcase

/**
 * @component ShowcaseCards
 * @category integrators
 * @subcategory feeds
 * @status experimental
 * @description Paginated project showcase with search, filtering, and media cards.
 * @dataSource prop (items)
 * @aiDiscoverability props-extracted
 * @param {Array} [items=[]] - Collection data rendered by the component.
 * @param {number} [limit=null] - Limit used by the component.
 * @param {number} [pageSize=10] - Page size used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const ShowcaseCards = ({
  items = [],
  limit = null,
  pageSize = 10,
  className = '',
  style = {},
  ...rest
}) => {
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [productFilter, setProductFilter] = useState('All')
  const [page, setPage] = useState(1)

  // Extract unique categories and products from items
  const allCategories = [
    'All',
    ...Array.from(
      new Set(items.flatMap((item) => item.categoryTags || []))
    ).sort(),
  ]
  const allProducts = [
    'All',
    ...Array.from(
      new Set(
        items.flatMap((item) =>
          (item.productTags || []).map((t) => t.replace(/\s*\(.*?\)\s*/g, ''))
        )
      )
    ).sort(),
  ]

  // Filter items
  const filtered = items.filter((item) => {
    const matchesSearch =
      !search ||
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      categoryFilter === 'All' ||
      (item.categoryTags || []).includes(categoryFilter)
    const matchesProduct =
      productFilter === 'All' ||
      (item.productTags || [])
        .map((t) => t.replace(/\s*\(.*?\)\s*/g, ''))
        .includes(productFilter)
    return matchesSearch && matchesCategory && matchesProduct
  })

  // Pagination
  const totalItems = limit ? Math.min(filtered.length, limit) : filtered.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const safePage = Math.min(page, totalPages)
  const paginatedItems = filtered
    .slice(0, limit || filtered.length)
    .slice((safePage - 1) * pageSize, safePage * pageSize)

  // Reset page when filters change
  useEffect(() => {
    setPage(1)
  }, [search, categoryFilter, productFilter])

  const ShowcaseCard = ({
    mediaSrc: _mediaSrc,
    mediaType = 'image',
    logo = '',
    title = '',
    subtitle = '',
    description = '',
    href = '#',
    categoryTags = ['Other'],
    productTags = ['Livepeer'],
    cta = '',
    links = [],
    contact = [],
    style = {},
    arrow = false,
    className: cardClassName = '',
    ...cardProps
  }) => {
    const defaultMedia =
      '/snippets/assets/domain/00_HOME/Hero_Images/hero_showcase.png'
    const mediaSrc = _mediaSrc || defaultMedia
    const isVideo = mediaType === 'video'
    const isImage = mediaType === 'image'

    const categoryBadgeKeys = {
      Apps: 'blue',
      'Social Media': 'purple',
      'Video Streaming': 'green',
      Community: 'yellow',
      Marketplaces: 'orange',
      'Developer Tools': 'red',
      'AI-Powered Apps': 'cyan',
      default: 'gray',
    }
    const productTagHrefKeys = {
      Daydream: [
        '../../../10_products/daydream/overview.mdx',
        'https://daydream.live/',
      ],
      'Stream.place': [
        '../../../10_products/streamplace/overview.mdx',
        'https://stream.place/',
      ],
      'Livepeer Studio': [
        '../../../10_products/livepeer-studio/livepeer-studio.mdx',
        'https://livepeer.studio/',
      ],
      Frameworks: [
        '../../../10_products/frameworks/overview.mdx',
        'https://frameworks.network/',
      ],
      'Livepeer Network': [
        '../../../01_about/concepts/overview.mdx',
        'https://livepeer.org/',
      ],
      default: ['../../../10_products/products/ecosystem-products.mdx', ''],
    }
    const linkIcons = {
      github: 'github',
      youtube: 'youtube',
      blog: 'newspaper',
      x: 'x-twitter',
      instagram: 'instagram',
      email: 'envelope',
      website: 'globe-pointer',
      forum: 'message',
      discord: 'discord',
      bluesky: 'bluesky',
      telegram: 'telegram',
      linkedin: 'linkedin',
      whatsapp: 'whatsapp',
      snapchat: 'snapchat',
      reddit: 'reddit',
      twitch: 'twitch',
      android: 'google-play',
      other: 'link',
    }

    const mediaContainerStyle = {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      isolation: 'isolate',
      marginLeft: '-1.5rem',
      marginRight: '-2.5rem',
      marginTop: '-1.5rem',
      borderRadius: 0,
      maxHeight: '300px',
      width: 'calc(100% + 4rem)',
      ...style,
    }
    const mediaStyle = {
      display: 'block',
      width: '100%',
      height: '300px',
      margin: '0',
      padding: '0',
      borderRadius: 0,
      objectFit: 'contain',
      backgroundColor: 'var(--lp-color-bg-inverse)',
    }
    const titleContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      zIndex: '10',
      pointerEvents: 'none',
    }
    const titleStyle = {
      position: 'absolute',
      top: '0',
      marginTop: 'var(--lp-spacing-2)',
      background: 'var(--lp-color-overlay-scrim)',
      color: 'white',
      fontSize: '18px',
      fontWeight: '800',
      padding: '6px 16px',
      borderRadius: "6px",
      border: '1px solid var(--lp-color-border-inverse-subtle)',
      ...style,
    }
    const logoStyle = {
      position: 'absolute',
      bottom: '0',
      width: '60%',
      height: 'auto',
      objectFit: 'contain',
      alignSelf: 'flex-end',
      opacity: 0.8,
      borderRadius: "6px",
      margin: 0,
      padding: 0,
      marginBottom: 'var(--lp-spacing-2)',
    }
    const logoMediaStyle = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '101%',
      height: 'auto',
      objectFit: 'contain',
      alignSelf: 'center',
      justifySelf: 'center',
      opacity: 1,
      borderRadius: "6px",
      margin: 0,
      padding: 0,
      marginBottom: 'var(--lp-spacing-2)',
    }
    const subtitleContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--lp-spacing-4)',
      margin: '1rem 0',
      width: 'calc(100% + 1.5rem)',
      marginRight: '-1.5rem',
    }
    const subtitleArrowStyle = {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    }
    const subtitleStyle = {
      color: 'var(--lp-color-text-primary)',
      width: '100%',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '1rem',
    }
    const scrollBoxStyle = {
      color: 'var(--lp-color-text-secondary)',
      fontStyle: 'italic',
    }
    const linkIconContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--lp-spacing-2)',
      marginTop: 'var(--lp-spacing-4)',
      paddingTop: 'var(--lp-spacing-2)',
      width: 'fit-content',
      justifySelf: 'center',
    }
    const linkIconStyle = {
      borderBottom: 'none',
      fontWeight: 'bold',
      fontSize: '11px',
      marginLeft: 'var(--lp-spacing-1)',
    }
    const dividerStyle = {
      margin: '0.5rem auto',
      padding: 0,
      fontSize: '10px',
      minWidth: '70%',
      maxWidth: '85%',
      width: '90%',
    }
    const productTagContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '10px',
      margin: 0,
      padding: '0.25rem 0 0.5rem',
    }
    const productTagStyle = {
      borderBottom: 'none',
      color: 'var(--lp-color-accent)',
      fontWeight: 'bold',
      fontSize: '11px',
      marginLeft: 'var(--lp-spacing-1)',
    }
    const isDefaultMedia = mediaSrc === defaultMedia

    const logoMediaCard = (
      <div style={{ ...mediaContainerStyle, height: '300px' }}>
        <div style={titleContainerStyle}>
          {logo && <img src={logo} alt={title} style={logoMediaStyle} />}
          <span style={titleStyle}>{title}</span>
        </div>
      </div>
    )
    const mediaCard = (
      <div style={mediaContainerStyle}>
        {isVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            src={mediaSrc}
            style={mediaStyle}
          />
        )}
        {isImage && <img src={mediaSrc} alt={title} style={mediaStyle} />}
        <div style={titleContainerStyle}>
          {logo && <img src={logo} alt={title} style={logoStyle} />}
          <span style={titleStyle}>{title}</span>
        </div>
      </div>
    )
    const renderSubtitleArrow = (
      <div style={subtitleArrowStyle}>
        <span style={subtitleStyle}>{subtitle}</span>
        <Icon
          icon="arrow-up-right"
          iconType="solid"
          size={14}
          style={{ flexShrink: 0 }}
          color="var(--lp-color-border-inverse-subtle)"
        />
      </div>
    )
    const renderCategoryTags = (
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          gap: 'var(--lp-spacing-1)',
        }}
      >
        {categoryTags.map((tag) => (
          <Badge
            key={tag}
            color={categoryBadgeKeys[tag] || categoryBadgeKeys['default']}
          >
            {tag}
          </Badge>
        ))}
      </div>
    )
    const renderLinkIcons = (
      <div style={linkIconContainerStyle}>
        {links.map((link, index) => {
          if (!link || typeof link !== 'object') {
            return null
          }

          const [key, value] = Object.entries(link)[0] || []

          if (!key || !value) {
            return null
          }

          return (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              key={`${key}-${index}`}
              style={linkIconStyle}
              aria-label={`Open ${key} link`}
            >
              <Tooltip tip={value}>
                <Icon
                  icon={linkIcons[key] || 'link'}
                  iconType="solid"
                  size={16}
                  color="var(--lp-color-text-secondary)"
                />
              </Tooltip>
            </a>
          )
        })}
      </div>
    )
    const renderProductTags = (
      <div style={productTagContainerStyle}>
        Powered by
        {productTags.slice(0, 1).map((tag) => (
          <a
            href={(productTagHrefKeys[tag] || productTagHrefKeys['default'])[1]}
            target="_blank"
            rel="noopener noreferrer"
            key={tag}
            style={productTagStyle}
          >
            {tag}{' '}
            <Icon
              icon="arrow-up-right"
              iconType="solid"
              size={10}
              color="var(--lp-color-text-secondary)"
            />
          </a>
        ))}
      </div>
    )

    return (
      <Card href={href} arrow={false} className={cardClassName} {...cardProps}>
        {isDefaultMedia && logo ? logoMediaCard : mediaCard}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={subtitleContainerStyle}>
            {renderSubtitleArrow}
            {renderCategoryTags}
          </div>
          <div
            style={{
              ...scrollBoxStyle,
              height: '150px',
              overflowY: 'auto',
              flexShrink: 0,
            }}
            role="region"
            tabIndex={0}
            aria-label={
              title
                ? `Scrollable description for ${title}`
                : 'Scrollable description'
            }
          >
            {description}
            {renderLinkIcons}
          </div>
          <div style={{ marginTop: 'auto' }}>
            <hr style={dividerStyle} />
            {renderProductTags}
          </div>
        </div>
      </Card>
    )
  }

  const filterBarStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--lp-spacing-2)',
    alignItems: 'center',
    marginBottom: 'var(--lp-spacing-4)',
  }
  const inputStyle = {
    flex: '1 1 200px',
    padding: '0.5rem 0.75rem',
    borderRadius: "6px",
    border: '1px solid var(--lp-color-border-default)',
    background: 'var(--lp-color-bg-page)',
    color: 'var(--lp-color-text-secondary)',
    fontSize: '0.875rem',
    outline: 'revert',
  }
  const selectStyle = {
    padding: '0.5rem 0.75rem',
    borderRadius: "6px",
    border: '1px solid var(--lp-color-border-default)',
    background: 'var(--lp-color-bg-page)',
    color: 'var(--lp-color-text-secondary)',
    fontSize: '0.875rem',
    outline: 'revert',
    cursor: 'pointer',
  }
  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--lp-spacing-3)',
    marginTop: 'var(--lp-spacing-6)',
  }
  const pageButtonStyle = (disabled) => ({
    padding: '0.4rem 1rem',
    borderRadius: "6px",
    border: '1px solid var(--lp-color-border-default)',
    background: disabled ? 'transparent' : 'var(--lp-color-bg-page)',
    color: disabled
      ? 'var(--lp-color-border-default)'
      : 'var(--lp-color-text-secondary)',
    cursor: disabled ? 'default' : 'pointer',
    fontSize: '0.875rem',
    opacity: disabled ? 0.5 : 1,
  })

  return (
    <div className={className} style={style} {...rest}>
      <div style={filterBarStyle}>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
          aria-label="Search projects"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={selectStyle}
          aria-label="Filter by category"
        >
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'All' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
        <select
          value={productFilter}
          onChange={(e) => setProductFilter(e.target.value)}
          style={selectStyle}
          aria-label="Filter by product"
        >
          {allProducts.map((prod) => (
            <option key={prod} value={prod}>
              {prod === 'All' ? 'All Products' : prod}
            </option>
          ))}
        </select>
      </div>
      {paginatedItems.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: 'var(--lp-spacing-8)',
            color: 'var(--lp-color-text-secondary)',
            opacity: 0.6,
          }}
        >
          No projects found.
        </div>
      ) : (
        <Columns cols={2}>
          {paginatedItems.map((item) => (
            <ShowcaseCard key={item.title} {...item} />
          ))}
        </Columns>
      )}
      {totalPages > 1 && (
        <div style={paginationStyle}>
          <button
            style={pageButtonStyle(safePage <= 1)}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
          >
            ← Prev
          </button>
          <span
            style={{
              fontSize: '0.875rem',
              color: 'var(--lp-color-text-secondary)',
            }}
          >
            Page {safePage} of {totalPages}
          </span>
          <button
            style={pageButtonStyle(safePage >= totalPages)}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage >= totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
