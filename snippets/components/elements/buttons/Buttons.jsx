/**
 * @component BasicBtn
 * @type elements
 * @subniche buttons
 * @status deprecated
 * @description Empty placeholder button stub — non-functional.
 * @accepts style, className, ...rest
 * @example
 * <BasicBtn />
 */
export const BasicBtn = ({ className = "", style = {}, ...rest }) => {
  return <div className={className} style={style} {...rest}></div>
}

/**
 * @component DownloadButton
 * @type elements
 * @subniche buttons
 * @status stable
 * @description Lazy-loaded download button with icon that renders on viewport intersection.
 * @accepts style, className, ...rest
 * @aiDiscoverability none
 * @param {string} [label='Download'] - label prop.
 * @param {string} [icon='download'] - icon prop.
 * @param {any} downloadLink - download Link prop.
 * @param {string} [rightIcon=''] - right Icon prop.
 * @param {boolean} [border=false] - border prop.
 * @example
 * <DownloadButton downloadLink="example" />
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
