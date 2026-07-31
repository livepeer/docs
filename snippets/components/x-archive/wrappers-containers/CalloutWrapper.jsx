/**
 * @component CalloutWrapper
 * @category wrappers
 * @subcategory callouts
 * @status stable
 * @description Wraps Mintlify callout types (Tip, Info, Warning, Note, Check) with a styled header and description.
 * @aiDiscoverability props-extracted
 * @param {string} [type="tip"] - Mintlify callout type: "tip", "info", "warning", "note", "check"
 * @param {string} header - Bold header text displayed at the top of the callout
 * @param {React.ReactNode} children - Description content below the header
 * @param {string} [headerColor="var(--hero-text)"] - Header text colour
 * @param {string} [headerSize="0.9rem"] - Header font size
 * @param {string} [className=""] - CSS class name
 * @param {object} [style={}] - Inline style overrides
 * @example
 * <CalloutWrapper type="tip" header="Are you a Solution Provider?">
 *   Submit a PR to add your solution here!
 * </CalloutWrapper>
 */
export const CalloutWrapper = ({
  type = "tip",
  header = "",
  children,
  headerColor = "var(--hero-text)",
  headerSize = "0.9rem",
  className = "",
  style = {},
  ...rest
}) => {
  const headerEl = header ? (
    <div style={{ color: headerColor, fontSize: headerSize, fontWeight: 700, marginBottom: "0.2rem" }}>
      {header}
    </div>
  ) : null;

  const bodyEl = children ? (
    <span style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.25rem" }}>
      {children}
    </span>
  ) : null;

  const content = (
    <>
      {headerEl}
      {bodyEl}
    </>
  );

  const types = {
    tip: Tip,
    info: Info,
    warning: Warning,
    note: Note,
    check: Check,
  };

  const Component = types[type] || Tip;

  return (
    <Component className={className} style={style} {...rest}>
      {content}
    </Component>
  );
};
