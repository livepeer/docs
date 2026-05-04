// ─── Cards — all card components consolidated ─── //

// ─── Custom Cards ─── //

/**
 * @component DisplayCard
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Card with icon, custom title row, and body content.
  * @aiDiscoverability none
 * @usedIn v2/community/guides/guidelines.mdx, v2/developers/guides/opportunities/bug-bounties.mdx, v2/developers/guides/opportunities/grants-and-programmes.mdx, v2/developers/guides/opportunities/oss-contributions.mdx, v2/developers/guides/opportunities/overview.mdx, v2/developers/guides/opportunities/rfps-and-proposals.mdx, v2/home/about/vision.mdx, v2/home/solutions/applications.mdx, v2/internal/rfp/problem-statements.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} icon - Icon configuration used by the component.
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {object} style - Style used by the component.
 * @param {string} [background='var(--lp-color-bg-card)'] - Background used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [className=""] - CSS class name.
 */
export const DisplayCard = ({
  icon,
  title,
  style,
  background = 'var(--lp-color-bg-card)',
  children,
  className = "",
  ...rest
}) => {
  if (!title) {
    console.warn("[DisplayCard] Missing required prop: title");
    return null;
  }

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 1rem)',
    border: '1px solid var(--lp-color-accent)',
    borderRadius: '8px',
    padding: "var(--lp-spacing-4)",
    marginBottom: "var(--lp-spacing-4)",
    backgroundColor: 'var(--lp-color-bg-page)',
    gap: "var(--lp-spacing-4)",
  }
  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: "var(--lp-spacing-2)",
    marginBottom: '0',
    color: 'var(--lp-color-text-primary)',
    fontSize: '1rem',
    fontWeight: 600,
    ...style,
  }
  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: background,
    borderRadius: '8px',
    flex: 1,
    padding: "var(--lp-spacing-2)",
    margin: 0,
  }
  return (
    <div className={className} style={cardStyle} {...rest}>
      <div style={titleStyle}>
        <Icon icon={icon} size={20} color="var(--lp-color-accent)" />
        {title}
      </div>
      <div style={bodyStyle}>{children}</div>
    </div>
  )
}

/**
 * @component WidthCard
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Width-constrained card wrapper with configurable percentage width.
  * @aiDiscoverability none
 * @usedIn v2/gateways/quickstart/gateway-setup.mdx, v2/home/about/benefits.mdx, v2/home/about/roadmap.mdx, v2/resources/compendium/media-kit.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [width='80%'] - Width used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} [cardProps] - Forwarded Card props.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const WidthCard = ({ width = '80%', children, cardProps, className = "", style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        minWidth: 'fit-content',
        ...style,
      }}
      {...rest}
    >
      <div style={{ width: width }}>
        <Card {...cardProps}>{children}</Card>
      </div>
    </div>
  )
}

/**
 * @component InlineImageCard
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Card with inline image alongside content, using negative margin breakout.
  * @aiDiscoverability none
 * @usedIn v2/resources/compendium/media-kit.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} imgProps - Img props used by the component.
 * @param {object} imgStyle - Img style used by the component.
 * @param {object} cardProps - Card props used by the component.
 * @param {object} style - Style used by the component.
 * @param {string} [className=""] - CSS class name.
 */
export const InlineImageCard = ({
  children,
  imgProps,
  imgStyle,
  cardProps,
  style,
  className = "",
  ...rest
}) => {
  if (!imgProps?.src) {
    console.warn("[InlineImageCard] Missing required prop: imgProps.src");
    return null;
  }

  return (
    <Card className={className} {...cardProps} {...rest}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          marginRight: '-1rem',
          width: 'calc(100% + 1rem)',
          ...style,
        }}
      >
        <img
          {...imgProps}
          style={
            imgStyle
              ? imgStyle
              : {
                  maxHeight: '120px',
                  width: 'auto',
                }
          }
        />
        {children}
      </div>
    </Card>
  )
}

// ─── Showcase Cards ─── //

// used in project showcase

/**
 * @component InteractiveCard
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Single interactive card with hover effects.
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [mediaSrc=""] - media Src prop.
 * @param {string} [logo=""] - logo prop.
 * @param {string} [title="Untitled project"] - title prop.
 * @param {string} [subtitle=""] - subtitle prop.
 * @param {string} [description=""] - description prop.
 * @param {string} [href="#"] - href prop.
 * @param {Array} [categoryTags=[]] - category Tags prop.
 * @param {Array} [productTags=[]] - product Tags prop.
 * @param {Array} [links=[]] - links prop.
 * @param {any} style - style prop.
 * @param {string} [className=""] - CSS class name.
 * @param {any} cardProps - card Props prop.
 */
export const InteractiveCard = ({
  mediaSrc = "",
  logo = "",
  title = "Untitled project",
  subtitle = "",
  description = "",
  href = "#",
  categoryTags = [],
  productTags = [],
  links = [],
  style = {},
  className = "",
  ...cardProps
}) => {
  const previewSrc = mediaSrc || logo || "";
  const safeCategoryTags = Array.isArray(categoryTags) ? categoryTags : [];
  const safeProductTags = Array.isArray(productTags) ? productTags : [];
  const safeLinks = Array.isArray(links) ? links : [];

  return (
    <Card href={href} arrow={false} className={className} {...cardProps}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--lp-spacing-3)", ...style }}>
        {previewSrc ? (
          <img
            src={previewSrc}
            alt={title}
            style={{
              width: "100%",
              maxHeight: 220,
              objectFit: "cover",
              borderRadius: 12,
            }}
          />
        ) : null}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--lp-spacing-2)" }}>
          <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--lp-color-text-secondary)" }}>
            {title}
          </div>
          {subtitle ? <Subtitle text={subtitle} style={{ color: "var(--lp-color-text-muted)" }} /> : null}
          {safeCategoryTags.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {safeCategoryTags.map((tag) => (
                <Badge key={tag} color="gray">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
          {description ? (
            <p style={{ margin: 0, color: "var(--lp-color-text-secondary)" }}>{description}</p>
          ) : null}
          {safeProductTags.length > 0 ? (
            <div style={{ fontSize: "0.8rem", color: "var(--lp-color-text-muted)" }}>
              Powered by {safeProductTags.join(", ")}
            </div>
          ) : null}
          {safeLinks.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--lp-spacing-3)" }}>
              {safeLinks.map((link, index) => {
                const [label, value] = Object.entries(link || {})[0] || [];
                if (!label || !value) return null;
                return (
                  <a
                    key={`${label}-${index}`}
                    href={value}
                    target="_blank" rel="noopener noreferrer"
                    rel="noreferrer noopener"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

/**
 * @component InteractiveCards
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Multi-column layout of interactive cards.
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {Array} [items=[]] - items prop.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const InteractiveCards = ({ items = [], className = "", style = {}, ...rest }) => {
  const safeItems = Array.isArray(items) && items.length > 0
    ? items
    : [
        {
          title: "Example project",
          subtitle: "Interactive showcase card",
          description: "Use this component to present projects in a compact card layout.",
          categoryTags: ["Other"],
          productTags: ["Livepeer"],
        },
        {
          title: "Another example",
          subtitle: "Two-column layout",
          description: "Pass an array of items to render multiple cards.",
          categoryTags: ["Other"],
          productTags: ["Livepeer"],
        },
      ];

  return (
    <Columns cols={2} className={className} style={style} {...rest}>
      {safeItems.map((item, index) => (
        <InteractiveCard key={item.title || `interactive-card-${index}`} {...item} />
      ))}
    </Columns>
  );
};

/**
 * @component ShowcaseCards
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Paginated card layout with search, category, and product filtering.
  * @aiDiscoverability none
 * @usedIn v2/home/solutions/showcase.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {Array} [items=[]] - items prop.
 * @param {any} [limit=null] - limit prop.
 * @param {number} [pageSize=10] - page Size prop.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const ShowcaseCards = ({ items = [], limit = null, pageSize = 10, className = "", style = {}, ...rest }) => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [productFilter, setProductFilter] = useState("All");
  const [page, setPage] = useState(1);

  // Extract unique categories and products from items
  const allCategories = [
    "All",
    ...Array.from(
      new Set(items.flatMap((item) => item.categoryTags || [])),
    ).sort(),
  ];
  const allProducts = [
    "All",
    ...Array.from(
      new Set(
        items.flatMap((item) =>
          (item.productTags || []).map((t) => t.replace(/\s*\(.*?\)\s*/g, "")),
        ),
      ),
    ).sort(),
  ];

  // Filter items
  const filtered = items.filter((item) => {
    const matchesSearch =
      !search ||
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" ||
      (item.categoryTags || []).includes(categoryFilter);
    const matchesProduct =
      productFilter === "All" ||
      (item.productTags || [])
        .map((t) => t.replace(/\s*\(.*?\)\s*/g, ""))
        .includes(productFilter);
    return matchesSearch && matchesCategory && matchesProduct;
  });

  // Pagination
  const totalItems = limit ? Math.min(filtered.length, limit) : filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(page, totalPages);
  const paginatedItems = filtered
    .slice(0, limit || filtered.length)
    .slice((safePage - 1) * pageSize, safePage * pageSize);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, categoryFilter, productFilter]);
  const ShowcaseCard = ({
    mediaSrc: _mediaSrc,
    mediaType = "image",
    logo = "",
    title = "",
    subtitle = "",
    description = "",
    href = "#",
    categoryTags = ["Other"],
    productTags = ["Livepeer"],
    cta = "",
    links = [],
    contact = [],
    style = {},
    arrow = false,
    ...cardProps
  }) => {
    const defaultMedia =
      "/snippets/assets/domain/00_HOME/Hero_Images/hero_showcase.png";
    const mediaSrc = _mediaSrc || defaultMedia;
    const isVideo = mediaType === "video";
    const isImage = mediaType === "image";
    // DATA

    const categoryBadgeKeys = {
      Apps: "blue",
      "Social Media": "purple",
      "Video Streaming": "green",
      Community: "yellow",
      Marketplaces: "orange",
      "Developer Tools": "red",
      "AI-Powered Apps": "cyan",
      default: "gray",
    };
    const productTagHrefKeys = {
      Daydream: [
        "../../../10_products/daydream/overview.mdx",
        "https://daydream.live/",
      ],
      "Stream.place": [
        "../../../10_products/streamplace/overview.mdx",
        "https://stream.place/",
      ],
      "Livepeer Studio": [
        "../../../10_products/livepeer-studio/livepeer-studio.mdx",
        "https://livepeer.studio/",
      ],
      Frameworks: [
        "../../../10_products/frameworks/overview.mdx",
        "https://frameworks.network/",
      ],
      "Livepeer Network": [
        "../../../01_about/concepts/overview.mdx",
        "https://livepeer.org/",
      ],
      default: ["../../../10_products/products/ecosystem-products.mdx", ""],
    };
    const linkIcons = {
      github: "github",
      youtube: "youtube",
      blog: "newspaper",
      x: "x-twitter",
      instagram: "instagram",
      email: "envelope",
      website: "globe-pointer",
      forum: "message",
      discord: "discord",
      bluesky: "bluesky",
      telegram: "telegram",
      linkedin: "linkedin",
      whatsapp: "whatsapp",
      snapchat: "snapchat",
      reddit: "reddit",
      twitch: "twitch",
      android: "google-play",
      other: "link",
    };

    // STYLES
    const mediaContainerStyle = {
      position: "relative",
      display: "block",
      overflow: "hidden",
      isolation: "isolate",
      marginLeft: "-1.5rem",
      marginRight: "-2.5rem",
      marginTop: "-1.5rem",
      borderRadius: 0,
      maxHeight: "300px",
      width: "calc(100% + 4rem)",
      ...style,
    };
    const mediaStyle = {
      display: "block",
      width: "100%",
      height: "300px",
      margin: "0",
      padding: "0",
      borderRadius: 0,
      objectFit: "cover",
    };
    const titleContainerStyle = {
      display: "flex",
      justifyContent: "center",
      zIndex: "10",
      pointerEvents: "none",
    };
    const titleStyle = {
      position: "absolute",
      top: "0",
      marginTop: "var(--lp-spacing-2)",
      background: "var(--lp-color-bg-overlay)",
      color: "var(--lp-color-on-accent)",
      fontSize: "18px",
      fontWeight: "800",
      padding: "6px 16px",
      borderRadius: "6px",
      border: "1px solid var(--lp-color-border-inverse)",
      ...style,
    };
    const logoStyle = {
      position: "absolute",
      bottom: "0",
      width: "60%",
      height: "auto",
      objectFit: "contain",
      alignSelf: "flex-end",
      opacity: 0.8,
      borderRadius: "6px",
      // border: "1px solid rgba(255, 255, 255, 0.5)",
      margin: 0,
      padding: 0,
      marginBottom: "var(--lp-spacing-2)",
    };
    const logoMediaStyle = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "101%",
      height: "auto",
      objectFit: "contain",
      alignSelf: "center",
      justifySelf: "center",
      opacity: 1,
      borderRadius: "6px",
      // border: "1px solid rgba(255, 255, 255, 0.5)",
      margin: 0,
      padding: 0,
      marginBottom: "var(--lp-spacing-2)",
    };
    const subtitleContainerStyle = {
      display: "flex",
      flexDirection: "column",
      gap: "var(--lp-spacing-4)",
      margin: "1rem 0",
      width: "calc(100% + 1.5rem)",
      marginRight: "-1.5rem",
    };
    const subtitleArrowStyle = {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    };
    const subtitleStyle = {
      color: "var(--lp-color-text-primary)",
      width: "100%",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "1rem",
    };
    const scrollBoxStyle = {
      color: "var(--lp-color-text-secondary)",
      fontStyle: "italic",
    };
    const linkIconContainerStyle = {
      display: "flex",
      justifyContent: "center",
      gap: "var(--lp-spacing-2)",
      marginTop: "var(--lp-spacing-4)",
      paddingTop: "var(--lp-spacing-2)",
      width: "fit-content",
      justifySelf: "center",
    };
    const linkIconStyle = {
      borderBottom: "none",
      fontWeight: "bold",
      fontSize: "11px",
      marginLeft: "var(--lp-spacing-1)",
    };
    const dividerStyle = {
      margin: 0,
      marginBottom: "-1rem",
      padding: 0,
      fontSize: "10px",
      minWidth: "70%",
      maxWidth: "85%",
      alignSelf: "center",
      justifySelf: "center",
      width: "90%",
    };
    const productTagContainerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      justifySelf: "center",
      fontSize: "10px",
      margin: 0,
      padding: 0,
    };
    const productTagStyle = {
      borderBottom: "none",
      color: "var(--lp-color-accent)",
      fontWeight: "bold",
      fontSize: "11px",
      marginLeft: "var(--lp-spacing-1)",
    };
    //HELPER FUNCTIONS
    const isDefaultMedia = mediaSrc === defaultMedia;

    // COMPONENTS
    // Media Card (display logo if no media)
    const logoMediaCard = (
      <div style={{ ...mediaContainerStyle, height: "300px" }}>
        <div style={titleContainerStyle}>
          {logo && <img src={logo} alt={title} style={logoMediaStyle} />}
          <span style={titleStyle}>{title}</span>
        </div>
      </div>
    );
    // Media Card (display video or image)
    const mediaCard = (
      <div style={mediaContainerStyle}>
        {/* VIDEO OR IMAGE */}
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
        {/* END MEDIA */}
        {/* TITLE */}
        <div style={titleContainerStyle}>
          {logo && <img src={logo} alt={title} style={logoStyle} />}
          <span style={titleStyle}>{title}</span>
        </div>
        {/* END TITLE */}
      </div>
    );
    // Subtitle & Arrow
    const renderSubtitleArrow = (
      <div style={subtitleArrowStyle}>
        <Subtitle text={subtitle} style={subtitleStyle} />
        <Icon
          icon="arrow-up-right"
          iconType="solid"
          size={14}
          style={{ flexShrink: 0 }}
          color="var(--lp-color-text-muted)"
        />
      </div>
    );
    // Category Tags
    const renderCategoryTags = (
      <div style={{ display: "flex", flexWrap: "nowrap", gap: "var(--lp-spacing-1)" }}>
        {categoryTags.map((tag) => (
          <Badge
            key={tag}
            color={categoryBadgeKeys[tag] || categoryBadgeKeys["default"]}
          >
            {tag}
          </Badge>
        ))}
      </div>
    );
    // Link Icons
    const renderLinkIcons = (
      <div style={linkIconContainerStyle}>
        {links.map((link, index) => {
          if (!link || typeof link !== "object") {
            return null;
          }

          const [key, value] = Object.entries(link)[0] || [];

          if (!key || !value) {
            return null;
          }

          return (
            <a
              href={value}
              target="_blank" rel="noopener noreferrer"
              key={`${key}-${index}`}
              style={linkIconStyle}
              aria-label={`Open ${key} link`}
              rel="noreferrer noopener"
            >
              <Tooltip tip={value}>
                <Icon
                  icon={linkIcons[key] || "link"}
                  iconType="solid"
                  size={16}
                  color="var(--lp-color-text-secondary)"
                />
              </Tooltip>
            </a>
          );
        })}
      </div>
    );
    // Product Tags
    const renderProductTags = (
      <div style={productTagContainerStyle}>
        Powered by
        {productTags.slice(0, 1).map((tag) => (
          <a
            href={(productTagHrefKeys[tag] || productTagHrefKeys["default"])[1]}
            target="_blank" rel="noopener noreferrer"
            key={tag}
            style={productTagStyle}
          >
            {tag}{" "}
            <Icon
              icon="arrow-up-right"
              iconType="solid"
              size={10}
              color="var(--lp-color-text-secondary)"
            />
          </a>
        ))}
      </div>
    );

    return (
      <Card href={href} arrow={false} {...cardProps}>
        {isDefaultMedia && logo ? logoMediaCard : mediaCard}
        <div style={subtitleContainerStyle}>
          {renderSubtitleArrow}
          {renderCategoryTags}
        </div>
        <div
          style={{
            ...scrollBoxStyle,
            height: "150px",
            overflowY: "auto",
          }}
          role="region"
          tabIndex={0}
          aria-label={title ? `Scrollable description for ${title}` : "Scrollable description"}
        >
          {description}
          {renderLinkIcons}
        </div>
        <div>
          <CustomDivider style={dividerStyle} />
          {renderProductTags}
        </div>
      </Card>
    );
  };

  const filterBarStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--lp-spacing-2)",
    alignItems: "center",
    marginBottom: "var(--lp-spacing-4)",
  };
  const inputStyle = {
    flex: "1 1 200px",
    padding: "0.5rem 0.75rem",
    borderRadius: "6px",
    border: "1px solid var(--lp-color-border-default)",
    background: "var(--lp-color-bg-page)",
    color: "var(--lp-color-text-secondary)",
    fontSize: "0.875rem",
    outline: "revert",
  };
  const selectStyle = {
    padding: "0.5rem 0.75rem",
    borderRadius: "6px",
    border: "1px solid var(--lp-color-border-default)",
    background: "var(--lp-color-bg-page)",
    color: "var(--lp-color-text-secondary)",
    fontSize: "0.875rem",
    outline: "revert",
    cursor: "pointer",
  };
  const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "var(--lp-spacing-3)",
    marginTop: "var(--lp-spacing-6)",
  };
  const pageButtonStyle = (disabled) => ({
    padding: "0.4rem 1rem",
    borderRadius: "6px",
    border: "1px solid var(--lp-color-border-default)",
    background: disabled ? "transparent" : "var(--lp-color-bg-page)",
    color: disabled ? "var(--lp-color-border-default)" : "var(--lp-color-text-secondary)",
    cursor: disabled ? "default" : "pointer",
    fontSize: "0.875rem",
    opacity: disabled ? 0.5 : 1,
  });

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
              {cat === "All" ? "All Categories" : cat}
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
              {prod === "All" ? "All Products" : prod}
            </option>
          ))}
        </select>
      </div>
      {paginatedItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "var(--lp-spacing-8)",
            color: "var(--lp-color-text-secondary)",
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
          <span style={{ fontSize: "0.875rem", color: "var(--lp-color-text-secondary)" }}>
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
  );
};

// ─── Solution Cards ─── //

/**
 * @component SolutionCard
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Card body for Solutions Portal product cards. Accepts pre-rendered JSX slots for badges,
 *              infra tags, and social links. ScrollBox is passed as a component prop for blurb rendering.
 * @aiDiscoverability high
 * @note badges, infraTags, socialLinks accept pre-rendered JSX (ReactNode) — instantiated in the parent MDX page.
 *       ScrollBox is passed as a component reference and called internally to wrap blurb text.
 *       Mintlify does not resolve cross-JSX imports — all sub-components are sourced from the parent MDX page.
 *
 * @usedIn v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {ReactNode}  [badges]      - Pre-rendered <BadgeWrapper badges={...} />
 * @param {string}     [logoSrc]     - Path to the product logo image.
 * @param {string}     [logoAlt]     - Alt text for the logo image.
 * @param {string}     [subtitle]    - Bold italic one-line product subtitle.
 * @param {ReactNode}  [infraTags]   - Pre-rendered <IconBadgeWrapper items={...} iconColor="var(--lp-color-accent)" size={12} />
 * @param {string}     [blurb]       - Product description text. Rendered inside ScrollBox.
 * @param {Component}  [ScrollBox]   - ScrollBox component reference, passed from parent MDX.
 * @param {string}     [logoHeight]  - Override logo container height (default '60px').
 * @param {ReactNode}  [socialLinks] - Pre-rendered <SocialLinks links={...} />
 *
 * @example
 * import { BadgeWrapper, IconBadgeWrapper } from '/snippets/components/wrappers/badges/Badges.jsx'
 * import { ScrollBox } from '/snippets/components/wrappers/containers/Layout.jsx'
 * import { SocialLinks } from '/snippets/components/elements/links/Links.jsx'
 *
 * <SolutionCard
 *   badges={<BadgeWrapper badges={daydreamBadges} />}
 *   logoSrc="/snippets/assets/logos/products/daydream-logo-dark.svg"
 *   logoAlt="Daydream Logo"
 *   subtitle="Open-Source Toolkit For World Models and Real-time AI Video"
 *   infraTags={<IconBadgeWrapper items={daydreamInfra} iconColor="var(--lp-color-accent)" size={12} />}
 *   blurb="Description here."
 *   ScrollBox={ScrollBox}
 *   socialLinks={<SocialLinks links={daydreamSocials} justify="center" style={{ marginTop: "var(--lp-spacing-4)", marginBottom: '-1rem' }} />}
 * />
 */

export const SolutionCard = ({
  badges,
  logoSrc,
  logoAlt,
  logoHeight = '60px',
  subtitle,
  infraTags,
  blurb,
  ScrollBox,
  socialLinks,
}) => {
  return (
    <div style={{ margin: '0 0 1rem 0' }}>
      {badges}

      {logoSrc && (
        <div
          style={{
            height: logoHeight,
            display: 'flex',
            alignItems: 'center',
            margin: '0.5rem 0',
          }}
        >
          <img
            src={logoSrc}
            alt={logoAlt || 'solution provider logo'}
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              marginTop: "var(--lp-spacing-1)",
            }}
          />
        </div>
      )}

      {subtitle && (
        <>
          <style>{`.solution-card-subtitle { color: white !important; font-style: italic }`}</style>
          <div
            className="solution-card-subtitle"
            style={{ fontWeight: 700, fontSize: '1rem' }}
          >
            {subtitle}
          </div>
        </>
      )}

      {infraTags}

      {blurb && ScrollBox && (
        <ScrollBox
          maxHeight={100}
          style={{ fontSize: '0.85rem', lineHeight: '1.1rem' }}
        >
          {blurb}
        </ScrollBox>
      )}

      {socialLinks}
    </div>
  )
}

// ─── Solution Item ─── //

/**
 * @component SolutionItem
 * @category displays
 * @subcategory cards
 * @status stable
 * @description Renders a solution entry with link, icon badges, and description. Designed for solution listing pages.
 * @aiDiscoverability props-extracted
 * @usedIn v2/solutions/solution-providers.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {React.ReactNode} link - Link element (e.g. <LinkArrow />), rendered as the heading
 * @param {React.ReactNode} [iconWrapper=null] - Icon badges element (e.g. <IconBadgeWrapper />)
 * @param {React.ReactNode} [description=null] - Description text or element
 * @param {boolean} [divider=true] - Show bottom border divider
 * @param {string} [className=""] - CSS class name
 * @param {object} [style={}] - Inline style overrides
 * @example
 * <SolutionItem
 *   link={<LinkArrow href="https://daydream.live" label="Daydream" />}
 *   iconWrapper={<IconBadgeWrapper items={daydreamInfra} iconColor="var(--lp-color-accent)" size={12} />}
 *   description="Real-time AI video, world models"
 *   divider={true}
 * />
 */
export const SolutionItem = ({
  title,
  iconWrapper = null,
  description = null,
  divider = true,
  className = '',
  style = {},
  ...rest
}) => {
  const containerStyle = {
    paddingBottom: divider ? "var(--lp-spacing-3)" : "var(--lp-spacing-1)",
    ...style,
  }
  const spanStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: "var(--lp-spacing-2)",
  }
  const descriptionStyle = {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: "var(--lp-spacing-1)",
  }
  const dividerStyle = {
    marginTop: "var(--lp-spacing-3)",
    borderBottom: '1px solid var(--lp-color-border-default)',
  }

  return (
    <div style={containerStyle} {...rest}>
      <div>
        <span style={spanStyle}>{title}</span>
        {iconWrapper}
      </div>
      {description && <div style={descriptionStyle}>{description}</div>}
      {divider && <div style={dividerStyle} />}
    </div>
  )
}
