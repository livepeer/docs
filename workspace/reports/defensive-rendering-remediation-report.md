# Defensive Rendering Remediation Report

Generated: 2026-03-08T01:36:50.294Z
Source: tasks/reports/component-governance-audit.md (Defensive Rendering section)

## HIGH Crash Risk (11 components)

### BlinkingIcon — snippets/components/primitives/links.jsx

**Risk:** HIGH
**Issue:** Props are passed straight through to `Icon` without runtime normalisation. Invalid `icon` or `size` values can surface as render failures in Mintlify.
**Evidence:** Line 108

**Current code (relevant section):**
```jsx
      <span
        style={{
          display: "inline-flex",
          animation: "blink 3s ease-in-out infinite",
        }}
      >
        <Icon icon={icon} size={size} color={resolvedColor} />
      </span>
    </>
  );
};

/**
```

**Proposed fix:**
```jsx
const resolvedIcon = typeof icon === "string" && icon.trim() ? icon : "terminal";
const resolvedSize = Number.isFinite(Number(size)) ? Number(size) : 16;

return (
  <span style={{ display: "inline-flex", animation: "blink 3s ease-in-out infinite" }}>
    <Icon icon={resolvedIcon} size={resolvedSize} color={resolvedColor} />
  </span>
);
```

**Additional guards needed:**
- [ ] Normalise `icon` before rendering the nested `Icon`.
- [ ] Coerce `size` to a finite number before passing it through.
- [ ] Retain the existing default fallback values.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### BlogDataLayout — snippets/components/content/data.jsx

**Risk:** HIGH
**Issue:** The component assumes `items` is always an array. Non-array inputs can break `slice()` and `map()` during render.
**Evidence:** Line 205

**Current code (relevant section):**
```jsx
 * <CardBlogDataLayout items={blogPosts} />
 *
 * @author Livepeer Documentation Team
 */
export const CardBlogDataLayout = ({ items = [], limit }) => {
  console.debug("items", items);
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems || displayItems.length === 0) {
    return (
      <Note>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No blog posts at this time.
        </p>
```

**Proposed fix:**
```jsx
const safeItems = Array.isArray(items) ? items : [];
const displayItems = limit ? safeItems.slice(0, limit) : safeItems;

if (displayItems.length === 0) {
  return null;
}

return (
  <div>
    {displayItems.map((props, idx) => (
      <BlogCard key={props?.href || idx} {...props} />
    ))}
  </div>
);
```

**Additional guards needed:**
- [ ] Normalise `items` to an array before any collection operations.
- [ ] Use optional chaining for key selection on mapped items.
- [ ] Return a stable empty-state fallback when no valid items remain.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### CardInCardLayout — snippets/components/content/data.jsx

**Risk:** HIGH
**Issue:** The component ignores its `items` prop and renders `forumData`, which is not defined in the file. That is a hard runtime failure.
**Evidence:** Line 427

**Current code (relevant section):**
```jsx
  return (
    <Card
      img="/snippets/automations/forum/Hero_Livepeer_Forum.png"
      href="https://forum.livepeer.org"
      arrow={false}
    >
      <CardColumnsPostLayout cols={2} items={forumData} limit={2} />
    </Card>
  );
};

export const ForumLatestLayout = ({ items = [], limit }) => {
  return (
```

**Proposed fix:**
```jsx
const safeItems = Array.isArray(items) ? items : [];

if (safeItems.length === 0) {
  console.warn("[CardInCardLayout] Missing or invalid items");
  return null;
}

return (
  <Card
    img="/snippets/automations/forum/Hero_Livepeer_Forum.png"
    href="https://forum.livepeer.org"
    arrow={false}
  >
    <CardColumnsPostLayout cols={2} items={safeItems} limit={limit} />
  </Card>
);
```

**Additional guards needed:**
- [ ] Use the actual `items` prop instead of `forumData`.
- [ ] Guard non-array `items` before delegating to `CardColumnsPostLayout`.
- [ ] Warn and return `null` when no usable dataset is available.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### CoinGeckoExchanges — snippets/components/integrations/coingecko.jsx

**Risk:** HIGH
**Issue:** L205: Unguarded map() on sortedExchanges may throw
**Evidence:** Line 205

**Current code (relevant section):**
```jsx
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedExchanges.map((exchange, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid var(--border)",
                }}
              >
```

**Proposed fix:**
```jsx
const safeExchanges = Array.isArray(sortedExchanges) ? sortedExchanges : [];

if (safeExchanges.length === 0) {
  return <div>No exchanges found for this coin.</div>;
}

return (
  <tbody>
    {safeExchanges.map((exchange, index) => (
      <tr key={exchange?.url || index}>
        {/* existing row markup */}
      </tr>
    ))}
  </tbody>
);
```

**Additional guards needed:**
- [ ] Normalise `sortedExchanges` before mapping.
- [ ] Use stable optional chaining when reading `exchange` fields.
- [ ] Keep the existing loading/error/empty branches intact.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### ColumnsBlogCardLayout — snippets/components/content/data.jsx

**Risk:** HIGH
**Issue:** The component assumes `items` is always array-shaped before calling `slice()` and `map()`.
**Evidence:** Line 205

**Current code (relevant section):**
```jsx
 * <CardBlogDataLayout items={blogPosts} />
 *
 * @author Livepeer Documentation Team
 */
export const CardBlogDataLayout = ({ items = [], limit }) => {
  console.debug("items", items);
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems || displayItems.length === 0) {
    return (
      <Note>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No blog posts at this time.
        </p>
```

**Proposed fix:**
```jsx
const safeItems = Array.isArray(items) ? items : [];
const displayItems = limit ? safeItems.slice(0, limit) : safeItems;

return (
  <Columns cols={cols}>
    {displayItems.map((props, idx) => (
      <BlogCard key={props?.href || idx} {...props} />
    ))}
  </Columns>
);
```

**Additional guards needed:**
- [ ] Normalise `items` before collection work.
- [ ] Use optional chaining when deriving row keys.
- [ ] Preserve current layout when data is valid.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### LinkArrow — snippets/components/primitives/links.jsx

**Risk:** HIGH
**Issue:** Required `href` and `label` props are rendered without any validation. Missing values can create broken anchors or crash downstream consumers.
**Evidence:** Line 351

**Current code (relevant section):**
```jsx
    ...(borderColor && { borderColor }),
  };
  return (
    <>
      {newline && <br />}
      <span style={linkArrowStyle}>
        <a href={href} target="_blank">
          {label}
        </a>
        <Icon icon="arrow-up-right" size={14} color="var(--accent)" />
      </span>
      {description && description}
      {description && <div style={{ height: "0.75rem" }} />}
```

**Proposed fix:**
```jsx
if (!href || !label) {
  console.warn("[LinkArrow] Missing required props: href and label");
  return null;
}

return (
  <>
    {newline && <br />}
    <span style={linkArrowStyle}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
      <Icon icon="arrow-up-right" size={14} color="var(--accent)" />
    </span>
    {description && description}
  </>
);
```

**Additional guards needed:**
- [ ] Return early when `href` or `label` is missing.
- [ ] Add `rel` to the external link branch while touching the anchor.
- [ ] Keep description rendering unchanged for valid inputs.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### PostCard — snippets/components/content/data.jsx

**Risk:** HIGH
**Issue:** L247: Unguarded slice() on items may throw
**Evidence:** Line 179

**Current code (relevant section):**
```jsx
          const el = e.target;
          const atBottom =
            el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
          const hint = el.nextSibling;
          if (hint) hint.style.display = atBottom ? "none" : "block";
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {showScrollHint && <div style={scrollHintStyle}>Scroll for more ↓</div>}
    </Card>
  );
};
```

**Proposed fix:**
```jsx
const contentHtml = typeof content === "string" ? content : "";
const showScrollHint = contentHtml.length > 500;

if (!title || !href) {
  console.warn("[PostCard] Missing required props: title or href");
  return null;
}

return (
  <Card title={title} icon={icon} href={href} cta={cta} img={img} arrow>
    {/* existing header markup */}
    <div
      style={{ maxHeight: 300, overflowY: "auto" }}
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  </Card>
);
```

**Additional guards needed:**
- [ ] Normalise `content` before reading `.length` or using `dangerouslySetInnerHTML`.
- [ ] Guard required `title` and `href` props at the component boundary.
- [ ] Retain existing card layout for valid content.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### SearchTable — snippets/components/layout/SearchTable.jsx

**Risk:** HIGH
**Issue:** L27: Unguarded filter() on categoryFilteredItems may throw
**Evidence:** Line 27

**Current code (relevant section):**
```jsx
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
```

**Proposed fix:**
```jsx
const safeItemsList = Array.isArray(itemsList) ? itemsList : [];
const safeHeaderList = Array.isArray(headerList) ? headerList : [];
const safeSearchColumns = Array.isArray(searchColumns) ? searchColumns : [];
const activeColumns = safeSearchColumns.length ? safeSearchColumns : safeHeaderList;

const categories = [...new Set(
  safeItemsList
    .map((item) => String(item?.[categoryColumn] || ""))
    .filter(Boolean)
)];

const categoryFilteredItems =
  selectedCategory === "All"
    ? safeItemsList
    : safeItemsList.filter((item) => String(item?.[categoryColumn] || "") === selectedCategory);
```

**Additional guards needed:**
- [ ] Normalise every collection prop before using array helpers.
- [ ] Use optional chaining when reading row fields.
- [ ] Preserve the existing fallback warning when `TableComponent` is missing.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### Starfield — snippets/components/domain/SHARED/HeroGif.jsx

**Risk:** HIGH
**Issue:** L49: Unguarded map() on COLORS may throw
**Evidence:** Line 45

**Current code (relevant section):**
```jsx
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let rafId;
//     let stars = [];

//     const logoImages = COLORS.map(makeLogoImage);

//     const resize = () => {
```

**Proposed fix:**
```jsx
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.warn("[Starfield] Canvas 2D context unavailable");
    return;
  }

  const logo = new Image();
  logo.src = "/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg";
  // keep existing resize/draw logic after guards
}, [density]);
```

**Additional guards needed:**
- [ ] Guard missing browser globals and `canvasRef.current`.
- [ ] Return early when `getContext("2d")` fails.
- [ ] Keep image loading and animation logic behind those checks.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### StepLinkList — snippets/components/layout/lists.jsx

**Risk:** HIGH
**Issue:** L68: Unguarded map() on listItems may throw
**Evidence:** Line 90

**Current code (relevant section):**
```jsx
 * @author Livepeer Documentation Team
 */
export const StepLinkList = ({ listItems }) => {
  console.log("listItems", listItems);
  return (
    <Steps>
      {listItems.map(({ title, icon, content, link }, idx) => (
        <Step key={idx} title={title} icon={icon}>
          <GotoLink label={content} relativePath={link} />
        </Step>
      ))}
    </Steps>
  );
```

**Proposed fix:**
```jsx
const safeItems = Array.isArray(listItems) ? listItems : [];

if (safeItems.length === 0) {
  return null;
}

return (
  <Steps>
    {safeItems.map(({ title, icon, content, link }, idx) => (
      <Step key={idx} title={title} icon={icon}>
        <GotoLink label={content} relativePath={link} />
      </Step>
    ))}
  </Steps>
);
```

**Additional guards needed:**
- [ ] Normalise `listItems` before mapping.
- [ ] Return `null` instead of throwing on invalid data.
- [ ] Keep the existing `Step` composition unchanged for valid rows.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

### UpdateList — snippets/components/layout/lists.jsx

**Risk:** HIGH
**Issue:** L102: Unguarded map() on listItems may throw
**Evidence:** Line 109

**Current code (relevant section):**
```jsx
 * Placeholder component for displaying updates. Currently shows hardcoded content.
 *
 * @param {Array} listItems - Array of update items
 *
 * @author Livepeer Documentation Team
 */
export const UpdateList = ({ listItems: array }) => {
  return (
    <Update label="New Users">
      <div style={{ display: "flex", flexDirection: "column" }}>
        Learn what Livepeer is and how it can benefit you
        <Icon icon="new" /> [About Livepeer](../../01_about/about-home/)
      </div>
```

**Proposed fix:**
```jsx
const safeItems = Array.isArray(array) ? array : [];

if (safeItems.length === 0) {
  console.warn("[UpdateList] Missing or invalid listItems");
  return null;
}

return (
  <>
    {safeItems.map(({ title, content }, idx) => (
      <Update key={title || idx} label={title || "Update"}>
        {content}
      </Update>
    ))}
  </>
);
```

**Additional guards needed:**
- [ ] Normalise `listItems` before render.
- [ ] Remove the hardcoded placeholder branch during remediation.
- [ ] Return `null` when no valid data is available.

**Visual impact:** None expected when data is valid; the change only prevents page-killing render failures on invalid input.

## MEDIUM Crash Risk (37 components)

### Common MEDIUM pattern: Component-specific guard required

```jsx
console.warn("[ComponentName] Invalid input");
return null;
```

| Component | File | Missing guard for | Line |
|-----------|------|------------------|------|
| AccordionLayout | snippets/components/layout/text.jsx | Component lacks defensive validation for runtime inputs and render branches. | 1 |
| BorderedBox | snippets/components/primitives/containers.jsx | Component lacks defensive validation for runtime inputs and render branches. | 1 |
| FlexContainer | snippets/components/primitives/layout.jsx | Component lacks defensive validation for runtime inputs and render branches. | 1 |
| HeroContentContainer | snippets/components/domain/SHARED/Portals.jsx | Component lacks defensive validation for runtime inputs and render branches. | 83 |
| HeroImageBackgroundComponent | snippets/components/domain/SHARED/Portals.jsx | Component lacks defensive validation for runtime inputs and render branches. | 51 |
| HeroOverviewContent | snippets/components/domain/SHARED/Portals.jsx | Component lacks defensive validation for runtime inputs and render branches. | 115 |
| LivepeerIconFlipped | snippets/components/primitives/icons.jsx | Component lacks defensive validation for runtime inputs and render branches. | 57 |
| LivepeerIconOld | snippets/components/primitives/icons.jsx | Component lacks defensive validation for runtime inputs and render branches. | 34 |
| LogoHeroContainer | snippets/components/domain/SHARED/Portals.jsx | Component lacks defensive validation for runtime inputs and render branches. | 341 |
| PortalContentContainer | snippets/components/domain/SHARED/Portals.jsx | Component lacks defensive validation for runtime inputs and render branches. | 139 |
| QuadGrid | snippets/components/layout/quadGrid.jsx | Component lacks defensive validation for runtime inputs and render branches. | 1 |
| Quote | snippets/components/display/quote.jsx | Component lacks defensive validation for runtime inputs and render branches. | 1 |
| RefCardContainer | snippets/components/domain/SHARED/Portals.jsx | Component lacks defensive validation for runtime inputs and render branches. | 407 |
| ResponseFieldAccordion | snippets/components/content/responseField.jsx | Component lacks defensive validation for runtime inputs and render branches. | 83 |
| ResponseFieldGroup | snippets/components/content/responseField.jsx | Component lacks defensive validation for runtime inputs and render branches. | 94 |
| StyledTable | snippets/components/primitives/tables.jsx | Component lacks defensive validation for runtime inputs and render branches. | 1 |

### Common MEDIUM pattern: Missing prop null guard

```jsx
if (!requiredProp) {
  console.warn("[ComponentName] Missing required prop: requiredProp");
  return null;
}
```

| Component | File | Missing guard for | Line |
|-----------|------|------------------|------|
| AccordionTitleWithArrow | snippets/components/primitives/text.jsx | text | 124 |
| CardCarousel | snippets/components/display/CardCarousel.jsx | style | 1 |
| CardVideo | snippets/components/display/video.jsx | embedUrl, title, style | 499 |
| CopyText | snippets/components/primitives/text.jsx | text, label | 19 |
| CustomCallout | snippets/components/primitives/links.jsx | color, textColor | 1 |
| DisplayCard | snippets/components/display/customCards.jsx | icon, title, style | 1 |
| FullWidthContainer | snippets/components/primitives/containers.jsx | backgroundColor | 94 |
| GridContainer | snippets/components/primitives/layout.jsx | columns | 49 |
| H1 | snippets/components/display/frameMode.jsx | icon, iconColor | 95 |
| InlineImageCard | snippets/components/display/customCards.jsx | imgProps, imgStyle, cardProps, style | 94 |
| ListSteps | snippets/components/layout/ListSteps.jsx | listItems, stepsConfig | 1 |
| LivepeerIcon | snippets/components/primitives/icons.jsx | color | 82 |
| PageHeader | snippets/components/display/frameMode.jsx | title, subtitle, description, titleColor, subtitleColor, descriptionColor | 1 |
| PortalCardsHeader | snippets/components/domain/SHARED/Portals.jsx | title | 313 |
| PortalHeroContent | snippets/components/domain/SHARED/Portals.jsx | description, refCardLink, overview, titleColor, subtitleColor | 161 |
| PortalSectionHeader | snippets/components/domain/SHARED/Portals.jsx | title, icon | 330 |
| ScrollBox | snippets/components/layout/cards.jsx | style | 1 |
| StyledSteps | snippets/components/layout/steps.jsx | iconColor, titleColor, lineColor | 1 |
| Subtitle | snippets/components/primitives/text.jsx | text | 1 |
| TipWithArrow | snippets/components/primitives/links.jsx | color | 245 |
| ValueResponseField | snippets/components/content/responseField.jsx | description | 1 |

## Summary

| Risk | Count | Fix complexity |
|------|-------|---------------|
| HIGH — custom fix per component | 11 | Medium |
| MEDIUM — grouped defensive guard patterns | 37 | Low to Medium |
