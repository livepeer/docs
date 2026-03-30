/**
 * @component ExternalLinkButton
 * @category elements
 * @subcategory buttons
 * @status stable
 * @description Icon button that opens an external link in a new tab. Bordered with rounded corners, hover colour transition.
 * @aiDiscoverability none
 * @param {string} href - URL to open on click.
 * @param {string} [icon='arrow-up-right'] - Icon name to display.
 * @param {number} [size=14] - Icon size in pixels.
 * @param {string} [ariaLabel='Open external link'] - Accessible label.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 * @example
 * <ExternalLinkButton href="https://example.com" />
 */
export const ExternalLinkButton = ({
  href,
  icon = "arrow-up-right",
  size = 14,
  ariaLabel = "Open external link",
  className = "",
  style = {},
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={ariaLabel}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px",
        background: hovered ? "var(--border)" : "transparent",
        border: `1.5px solid ${hovered ? "var(--accent)" : "var(--hero-text)"}`,
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.15s ease",
        lineHeight: 0,
        ...style,
      }}
      {...rest}
    >
      <Icon
        icon={icon}
        size={size}
        color={hovered ? "var(--accent)" : "var(--hero-text)"}
      />
    </button>
  );
};

/**
 * @component DownloadButton
 * @category elements
 * @subcategory buttons
 * @status stable
 * @description Lazy-loaded download button with icon that renders on viewport intersection.
 * @aiDiscoverability none
 * @param {string} [label='Download'] - label prop.
 * @param {string} [icon='download'] - icon prop.
 * @param {any} downloadLink - download Link prop.
 * @param {string} [rightIcon=''] - right Icon prop.
 * @param {boolean} [border=false] - border prop.
 * @example
 * <DownloadButton downloadLink="example" />
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const DownloadButton = ({
  label = 'Download',
  icon = 'download',
  downloadLink,
  rightIcon = '',
  border = false,
  className = "",
  style = {},
  ...rest
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  downloadLink = downloadLink ? downloadLink : 'https://Livepeer.org'

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = downloadLink
    a.download = ''
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  if (!isVisible) {
    return (
      <span ref={ref} className={className} style={{ minHeight: '20px', display: 'inline-block', ...style }} {...rest} />
    )
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{
        ...(border
          ? {
              border: '1px solid grey',
              borderRadius: '6px',
              padding: '6px 10px',
              display: 'inline-block',
              cursor: 'pointer',
            }
          : { cursor: 'pointer' }),
        ...style,
      }}
      {...rest}
    >
      <Icon icon={icon} size={18} color="var(--accent)" />
      <button
        onClick={handleDownload}
        style={{
          marginRight: 8,
          marginLeft: 8,
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
          textDecoration: 'underline',
          padding: 0,
          font: 'inherit',
        }}
      >
        {label}
      </button>
      {rightIcon && (
        <Icon
          icon={rightIcon}
          style={{ marginLeft: 8 }}
          size={18}
          color="var(--accent)"
        />
      )}
    </span>
  )
}
