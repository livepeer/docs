/**
 * Callouts — all callout components consolidated into one file.
 *
 * StatusCallout (replaces ComingSoonCallout + PreviewCallout)
 * IconCallout (replaces CustomCallout + TipWithArrow)
 * ReviewCallout
 *
 * Deprecated re-exports maintain backwards compatibility:
 *   ComingSoonCallout, PreviewCallout, CustomCallout, TipWithArrow
 */

// ---------------------------------------------------------------------------
// StatusCallout — unified banner with variant prop
// ---------------------------------------------------------------------------

const STATUS_VARIANTS = {
  'coming-soon': {
    icon: 'cauldron',
    color: 'var(--lp-color-callout-coming-soon)',
    title: (type) =>
      type === 'page'
        ? 'This page is still cooking... Expect big things soon!'
        : 'This Tab Group is still cooking... Expect big things soon!',
  },
  preview: {
    icon: 'tools',
    color: 'var(--lp-color-callout-review)',
    title: () => 'Page is under construction.',
  },
};

/**
 * @component StatusCallout
 * @category elements
 * @subcategory callouts
 * @status stable
 * @description Banner indicating page/feature status (coming soon or preview) with feedback links.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [variant="coming-soon"] - Status variant: "coming-soon" or "preview".
 * @param {string} [type="page"] - Context type: "page" or "tab-group" (affects title text for coming-soon variant).
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 * @example
 * <StatusCallout variant="coming-soon" />
 * <StatusCallout variant="preview" />
 */
export const StatusCallout = ({ variant = 'coming-soon', type = 'page', className = '', style = {}, ...rest }) => {
  const config = STATUS_VARIANTS[variant] || STATUS_VARIANTS['coming-soon'];

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: "var(--lp-spacing-4)",
  };
  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: "var(--lp-spacing-2)",
    fontSize: '1.0rem',
    flex: 1,
  };
  const linkStyle = {
    color: 'var(--lp-color-text-primary)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: "var(--lp-spacing-px-4)",
    paddingTop: '0.2rem',
  };
  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: config.color,
  };

  return (
    <Callout icon="" color={config.color} className={className} style={style} {...rest}>
      <div style={rowStyle}>
        <div style={{ flexShrink: 0 }}>
          <Icon icon={config.icon} size={30} color={config.color} />
        </div>
        <div style={colStyle}>
          <span style={titleStyle}>
            {config.title(type)}
          </span>
          <br />
          <span>
            Check the{' '}
            <a href="https://github.com/livepeer/docs/issues" style={linkStyle}>
              <Icon icon="github" size={12} /> github issues
              <Icon icon="arrow-up-right" size={12} />
            </a>{' '}
            for ways to contribute!{' '}
          </span>
          <span>
            Or provide your feedback in this{' '}
            <a href="https://forms.gle/amWVEdhjvuEKzciR8" style={linkStyle}>
              <Icon icon="message" size={12} />
              quick form
              <Icon icon="arrow-up-right" size={12} />
            </a>
          </span>
        </div>
        <div style={{ flexShrink: 0, paddingRight: "var(--lp-spacing-6)" }}>
          <Icon icon={config.icon} size={30} color={config.color} />
        </div>
      </div>
    </Callout>
  );
};

// ---------------------------------------------------------------------------
// IconCallout — callout box with icon and optional arrow
// ---------------------------------------------------------------------------

/**
 * @component IconCallout
 * @category elements
 * @subcategory callouts
 * @status stable
 * @description Styled callout box with icon, custom colour, and optional corner arrow indicator.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {React.ReactNode} children - Content to display in the callout.
 * @param {string} [icon="lightbulb"] - Icon name to display.
 * @param {string} color - Primary colour for icon, border, and background (defaults to theme accent).
 * @param {number} [iconSize=16] - Size of the main icon in pixels.
 * @param {string} [textSize="0.875rem"] - Font size for the text content.
 * @param {string} textColor - Text colour (defaults to match icon colour).
 * @param {boolean} [showArrow=false] - Show an arrow icon in the top-right corner.
 * @param {string} [arrowIcon="arrow-up-right"] - Arrow icon name (when showArrow is true).
 * @param {number} [arrowSize=16] - Size of the arrow icon in pixels.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 * @example
 * <IconCallout color="#4a9eff">Tip content here</IconCallout>
 * <IconCallout color="#4a9eff" showArrow>Linked tip content</IconCallout>
 */
export const IconCallout = ({
  children,
  icon = 'lightbulb',
  color,
  iconSize = 16,
  textSize = '0.875rem',
  textColor,
  showArrow = false,
  arrowIcon = 'arrow-up-right',
  arrowSize = 16,
  className = '',
  style = {},
  ...rest
}) => {
  const resolvedColor = color || 'var(--lp-color-accent)';
  const resolvedTextColor = textColor || resolvedColor;

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div
      className={className}
      style={{
        position: showArrow ? 'relative' : undefined,
        display: 'flex',
        alignItems: 'flex-start',
        gap: "var(--lp-spacing-px-12)",
        padding: '16px 20px',
        ...(showArrow && { paddingRight: '48px' }),
        borderRadius: '16px',
        border: `1px solid ${hexToRgba(resolvedColor, 0.2)}`,
        backgroundColor: hexToRgba(resolvedColor, 0.1),
        marginTop: '16px',
        marginBottom: '16px',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <div style={{ marginTop: '2px', width: iconSize, flexShrink: 0 }}>
        <Icon icon={icon} size={iconSize} color={resolvedColor} />
      </div>
      <div
        style={{
          fontSize: textSize,
          color: resolvedTextColor,
          minWidth: 0,
          width: '100%',
        }}
      >
        {children}
      </div>
      {showArrow && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            opacity: 0.6,
          }}
        >
          <Icon icon={arrowIcon} size={arrowSize} color={resolvedColor} />
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// ReviewCallout — simple technical review banner
// ---------------------------------------------------------------------------

/**
 * @component ReviewCallout
 * @category elements
 * @subcategory callouts
 * @status stable
 * @description Banner indicating content is under technical review.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 * @example
 * <ReviewCallout />
 */
export const ReviewCallout = ({ className = '', style = {}, ...rest }) => {
  return (
    <Callout icon="help" color="var(--lp-color-callout-review)" className={className} style={style} {...rest}>
      <div style={{ fontSize: '1.0rem' }}>
        Technical Review Needed! <br />
        Get in touch if you can help
      </div>
    </Callout>
  );
};

// ---------------------------------------------------------------------------
// Deprecated re-exports — backwards compatibility
// ---------------------------------------------------------------------------

/**
 * @component ComingSoonCallout
 * @category elements
 * @subcategory callouts
 * @status deprecated
 * @usedIn v2/resources/changelog/migration-guide.mdx, v2/resources/help-center.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use StatusCallout with variant="coming-soon" instead.
 * @see StatusCallout
 * @description Banner indicating a feature or page is coming soon. Deprecated wrapper around StatusCallout.
 * @aiDiscoverability none
 */
export const ComingSoonCallout = (props) => <StatusCallout variant="coming-soon" {...props} />;

/**
 * @component PreviewCallout
 * @category elements
 * @subcategory callouts
 * @status deprecated
 * @usedIn v2/resources/concepts/brief-history-of-video.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use StatusCallout with variant="preview" instead.
 * @see StatusCallout
 * @description Banner indicating content is in preview state. Deprecated wrapper around StatusCallout.
 * @aiDiscoverability none
 */
export const PreviewCallout = (props) => <StatusCallout variant="preview" {...props} />;

/**
 * @component CustomCallout
 * @category elements
 * @subcategory callouts
 * @status deprecated
 * @usedIn v2/gateways/setup/connect/connect-with-offerings.mdx, v2/gateways/setup/publish/connect-with-offerings.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use IconCallout instead.
 * @see IconCallout
 * @description Styled callout box. Deprecated alias for IconCallout.
 * @aiDiscoverability none
 */
export const CustomCallout = IconCallout;

/**
 * @component TipWithArrow
 * @category elements
 * @subcategory callouts
 * @status deprecated
 * @usedIn v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/setup/install.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use IconCallout with showArrow instead.
 * @see IconCallout
 * @description Callout with arrow. Deprecated wrapper around IconCallout.
 * @aiDiscoverability none
 */
export const TipWithArrow = (props) => <IconCallout showArrow {...props} />;
