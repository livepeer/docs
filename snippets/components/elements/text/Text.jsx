/**
 * @component Subtitle
 * @category elements
 * @subcategory text
 * @status stable
 * @description Styled subtitle text with configurable colour, size, and alignment.
 * @aiDiscoverability none
 * @param {object} [style={}] - style prop.
 * @param {any} text - text prop.
 * @param {any} children - children prop.
 * @example
 * <Subtitle text="example">Example content</Subtitle>
 * @param {string} [className=''] - Optional CSS class override.
 */
'use client'

export const Subtitle = ({
  style = {},
  text,
  children,
  variant = 'default',
  className = '',
  ...rest
}) => {
  const variants = {
    default: {
      fontSize: '1rem',
      fontStyle: 'italic',
      color: 'var(--lp-color-accent)',
      marginBottom: 0,
    },
    changelog: {
      fontSize: '0.8rem',
      fontStyle: 'normal',
      fontWeight: 700,
      color: 'var(--lp-color-text-primary)',
      marginBottom: 0,
    },
  }
  const base = variants[variant] || variants.default

  return (
    <span
      className={className}
      style={{
        ...base,
        ...style,
      }}
      {...rest}
    >
      {text}
      {children}
    </span>
  )
}

/**
 * @component CopyText
 * @category elements
 * @subcategory text
 * @status stable
 * @description Text with a click-to-copy button that copies content to clipboard.
 * @aiDiscoverability none
 * @usedIn v2/about/protocol/blockchain-contracts.mdx, v2/about/resources/glossary.mdx, v2/community/resources/glossary.mdx, v2/delegators/resources/glossary.mdx, v2/developers/resources/glossary.mdx, v2/gateways/resources/glossary.mdx, v2/home/resources/glossary.mdx, v2/orchestrators/resources/glossary.mdx, v2/resources/resource-hub-terms.mdx, v2/solutions/resources/glossary.mdx, v2/solutions/solution-providers.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-04-09
 * @param {any} text - text prop.
 * @param {any} label - label prop.
 * @example
 * <CopyText text="example" label="example" />
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
export const CopyText = ({
  text,
  label,
  className = '',
  style = {},
  ...rest
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <span
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.2rem 0.4rem',
        borderRadius: "4px",
        fontSize: '0.85rem',
        fontFamily: 'monospace',
        backgroundColor: 'var(--lp-color-bg-card)',
        border: '1px solid var(--lp-color-border-default)',
        minWidth: 0,
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {label && <strong style={{ flexShrink: 0, marginRight: "var(--lp-spacing-2)" }}>{label}</strong>}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
        {text}
      </span>
      <button
        onClick={handleCopy}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0 0 0 0.4rem',
          display: 'inline-flex',
          alignItems: 'center',
          color: 'var(--lp-color-text-secondary)',
          flexShrink: 0,
        }}
        title="Copy to clipboard"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </span>
  )
}

/**
 * @component CardTitleTextWithArrow
 * @category elements
 * @subcategory text
 * @status stable
 * @description Card title with trailing arrow icon for navigation indication.
 * @aiDiscoverability none
 * @usedIn v2/about/protocol/core-mechanisms.mdx, v2/about/protocol/governance-model.mdx, v2/about/protocol/livepeer-token.mdx, v2/about/protocol/overview.mdx, v2/about/protocol/technical-architecture.mdx, v2/about/protocol/treasury.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} children - children prop.
 * @param {any} cardProps - card Props prop.
 * @example
 * <CardTitleTextWithArrow cardProps="example">Example content</CardTitleTextWithArrow>
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
export const CardTitleTextWithArrow = ({
  children,
  className = '',
  style = {},
  ...cardProps
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-1rem',
        ...style,
      }}
    >
      <Card
        arrow={false}
        title={
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {' '}
            {children}{' '}
            <span style={{ margin: '0 -1rem 0.2rem 0.75rem' }}>
              <Icon icon="arrow-up-right" size={16} color="var(--lp-color-text-secondary)" />
            </span>
          </span>
        }
        {...cardProps}
      />
    </div>
  )
  // return (
  //   <span
  //     style={{
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //   >
  //     {" "}
  //     {children}{" "}
  //     <span style={{ margin: "0 -1rem 0.2rem 0.75rem" }}>
  //       <Icon icon="arrow-up-right" size={16} color="var(--lp-color-text-secondary)" />
  //     </span>
  //   </span>
  // );
}

/**
 * @component AccordionTitleWithArrow
 * @category elements
 * @subcategory text
 * @status stable
 * @description Accordion header text with trailing arrow icon.
 * @aiDiscoverability none
 * @param {any} text - text prop.
 * @param {any} children - children prop.
 * @param {string} [color="var(--lp-color-text-secondary)"] - color prop.
 * @example
 * <AccordionTitleWithArrow text="example">Example content</AccordionTitleWithArrow>
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
/**
 * @component CustomCardTitle
 * @category elements
 * @subcategory text
 * @status stable
 * @description Title row with icon and text, using flexbox alignment. Accepts Font Awesome strings or React components as icon. Variant prop controls styling context.
 * @aiDiscoverability none
 * @usedIn v2/about/protocol/blockchain-contracts.mdx, v2/about/protocol/core-mechanisms.mdx, v2/gateways/custom/views/setup/install/docker-install-content.mdx, v2/gateways/custom/views/setup/install/linux-install-content.mdx, v2/gateways/portal.mdx, v2/gateways/setup/guide.mdx, v2/home/about/benefits.mdx, v2/home/about/ecosystem.mdx, v2/home/primer.mdx, v2/resources/changelog/ai-compute/ai-runner.mdx, v2/resources/changelog/ai-compute/comfystream.mdx, v2/resources/changelog/ai-compute/pytrickle.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-go.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-js.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-python.mdx, v2/resources/changelog/apis-sdks/livepeer-js.mdx, v2/resources/changelog/apis-sdks/livepeer-python.mdx, v2/resources/changelog/docs.mdx, v2/resources/changelog/ecosystem/awesome-livepeer.mdx, v2/resources/changelog/ecosystem/website.mdx, v2/resources/changelog/protocol/go-livepeer.mdx, v2/resources/changelog/protocol/lips.mdx, v2/resources/changelog/protocol/naap.mdx, v2/resources/changelog/protocol/subgraph.mdx, v2/resources/changelog/tooling/explorer.mdx, v2/resources/changelog/tooling/livepeer-data.mdx, v2/resources/changelog/tooling/livepeer-python-gateway.mdx, v2/resources/portal.mdx, v2/solutions/daydream/changelog.mdx, v2/solutions/daydream/overview.mdx, v2/solutions/embody/changelog.mdx, v2/solutions/embody/overview.mdx, v2/solutions/frameworks/changelog.mdx, v2/solutions/frameworks/overview.mdx, v2/solutions/livepeer-studio/changelog.mdx, v2/solutions/livepeer-studio/overview.mdx, v2/solutions/portal.mdx, v2/solutions/solution-providers.mdx, v2/solutions/streamplace/changelog.mdx, v2/solutions/streamplace/overview.mdx
 * @breakingChangeRisk high
 * @lastMeaningfulChange 2026-04-09
 * @param {string|React.ReactNode} icon - Font Awesome icon name (string) or React component (e.g. ArbitrumIcon).
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {string} [variant="card"] - Styling context: "card" (default, opinionated), "accordion" (inline, inherits parent styles), "tab" (inline, smaller).
 * @param {number} [iconSize] - Icon size in pixels (applies to Font Awesome icons only). Defaults per variant: card=20, accordion=18, tab=14.
 * @param {object} [style={}] - Inline style overrides.
 * @param {string} [className=""] - CSS class name.
 * @example
 * <CustomCardTitle icon="sparkles" title="Example" />
 */
export const CustomCardTitle = ({ icon, title, variant = "card", iconSize, style = {}, className = "", ...rest }) => {
  const variants = {
    card: { display: 'flex', alignItems: 'center', gap: "var(--lp-spacing-2)", marginBottom: "var(--lp-spacing-3)", color: 'var(--lp-color-text-primary)', fontSize: '1rem', fontWeight: 600 },
    accordion: { display: 'inline-flex', alignItems: 'center', gap: "var(--lp-spacing-2)" },
    tab: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem' },
  }
  const sizes = { card: 20, accordion: 18, tab: 14 }
  const size = iconSize || sizes[variant] || 20
  const baseStyle = variants[variant] || variants.card

  return variant === 'card' ? (
    <div className={className} style={{ ...baseStyle, ...style }} {...rest}>
      {typeof icon === 'string' ? <Icon icon={icon} size={size} color="var(--lp-color-accent)" /> : icon}
      {title}
    </div>
  ) : (
    <span className={className} style={{ ...baseStyle, ...style }} {...rest}>
      {typeof icon === 'string' ? <Icon icon={icon} size={size} color="var(--lp-color-accent)" /> : icon}
      {title}
    </span>
  )
}

/**
 * @component AccordionTitle
 * @category elements
 * @subcategory text
 * @status stable
 * @description Accordion title with icon, name, and optional description subtitle. Wraps CustomCardTitle with an italic description line underneath.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string|React.ReactNode} icon - Font Awesome icon name (string) or React component.
 * @param {React.ReactNode} title - Title text.
 * @param {React.ReactNode} [description] - Optional subtitle shown below the title in italic.
 * @param {string} [descriptionColor="var(--lp-color-text-secondary)"] - Description text colour.
 * @param {string} [descriptionSize="0.85em"] - Description font size.
 * @param {object} [style={}] - Inline style overrides on the wrapper.
 * @param {string} [className=""] - CSS class name.
 * @example
 * <AccordionTitle icon="gear" title="Core" description="Staking, payments, and service discovery" />
 */
export const AccordionTitle = ({ icon, title, description, descriptionColor = "var(--lp-color-text-secondary)", descriptionSize = "0.85em", style = {}, className = "", ...rest }) => (
  <span className={className} style={{ display: "block", ...style }} {...rest}>
    <CustomCardTitle variant="accordion" icon={icon} title={title} />
    {description && (
      <span style={{ display: "block", color: descriptionColor, fontStyle: "italic", fontSize: descriptionSize, fontWeight: 400, marginTop: "0.2rem" }}>
        {description}
      </span>
    )}
  </span>
);

export const AccordionTitleWithArrow = ({
  text,
  children,
  color = 'var(--lp-color-text-secondary)',
  className = '',
  style = {},
  ...rest
}) => {
  const label = text ?? children
  return (
    <span
      className={className}
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        color: color,
        display: 'flex',
        alignItems: 'center',
        gap: "var(--lp-spacing-2)",
        padding: '0.25rem 0',
        minHeight: 44,
        ...style,
      }}
      {...rest}
    >
      {label}
      <span style={{ alignSelf: 'flex-end' }}>
        <Icon icon="arrow-up-right" size={14} color="var(--lp-color-text-secondary)" />
      </span>
    </span>
  )
}
