/**
 * @component Subtitle
 * @type elements
 * @subniche text
 * @status stable
 * @description Styled subtitle text with configurable colour, size, and alignment.
 * @accepts children, style, className, ...rest
  * @aiDiscoverability none
 * @param {object} [style={}] - style prop.
 * @param {any} text - text prop.
 * @param {any} children - children prop.
 * @example
 * <Subtitle text="example">Example content</Subtitle>
  * @param {string} [className=''] - Optional CSS class override.
 */
export const Subtitle = ({ style = {}, text, children, className = "", ...rest }) => {
  return (
    <span
      className={className}
      style={{
        fontSize: style.fontSize ? style.fontSize : "1rem",
        fontStyle: style.fontStyle ? style.fontStyle : "italic",
        color: style.color ? style.color : "var(--accent)",
        marginBottom: style.marginBottom ? style.marginBottom : 0,
        ...style,
      }}
      {...rest}
    >
      {text}
      {children}
    </span>
  );
};

/**
 * @component CopyText
 * @type elements
 * @subniche text
 * @status stable
 * @description Text with a click-to-copy button that copies content to clipboard.
 * @accepts style, className, ...rest
  * @aiDiscoverability none
 * @param {any} text - text prop.
 * @param {any} label - label prop.
 * @example
 * <CopyText text="example" label="example" />
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const CopyText = ({ text, label, className = "", style = {}, ...rest }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", ...style }}
      {...rest}
    >
      {label && <strong>{label}</strong>}
      <code
        style={{
          padding: "0.2rem 0.4rem",
          borderRadius: "4px",
          fontSize: "0.85rem",
          fontFamily: "monospace",
          backgroundColor: "var(--card-background)",
          border: "1px solid var(--border)",
        }}
      >
        {text}
      </code>
      <button
        onClick={handleCopy}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.25rem",
          display: "inline-flex",
          alignItems: "center",
          color: "var(--text)",
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
  );
};

/**
 * @component CardTitleTextWithArrow
 * @type elements
 * @subniche text
 * @status stable
 * @description Card title with trailing arrow icon for navigation indication.
 * @accepts children, style, className, ...cardProps
  * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {any} cardProps - card Props prop.
 * @example
 * <CardTitleTextWithArrow cardProps="example">Example content</CardTitleTextWithArrow>
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const CardTitleTextWithArrow = ({ children, className = "", style = {}, ...cardProps }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        width: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-1rem",
        ...style,
      }}
    >
      <Card
        arrow={false}
        title={
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            {children}{" "}
            <span style={{ margin: "0 -1rem 0.2rem 0.75rem" }}>
              <Icon icon="arrow-up-right" size={16} color="var(--text)" />
            </span>
          </span>
        }
        {...cardProps}
      />
    </div>
  );
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
  //       <Icon icon="arrow-up-right" size={16} color="var(--text)" />
  //     </span>
  //   </span>
  // );
};

/**
 * @component AccordionTitleWithArrow
 * @type elements
 * @subniche text
 * @status stable
 * @description Accordion header text with trailing arrow icon.
 * @accepts children, style, className, ...rest
  * @aiDiscoverability none
 * @param {any} text - text prop.
 * @param {any} children - children prop.
 * @param {string} [color="var(--text)"] - color prop.
 * @example
 * <AccordionTitleWithArrow text="example">Example content</AccordionTitleWithArrow>
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const AccordionTitleWithArrow = ({
  text,
  children,
  color = "var(--text)",
  className = "",
  style = {},
  ...rest
}) => {
  const label = text ?? children;
  return (
    <span
      className={className}
      style={{
        justifyContent: "center",
        alignContent: "center",
        color: color,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.25rem 0",
        minHeight: 44,
        ...style,
      }}
      {...rest}
    >
      {label}
      <span style={{ alignSelf: "flex-end" }}>
        <Icon icon="arrow-up-right" size={14} color="var(--text)" />
      </span>
    </span>
  );
};
