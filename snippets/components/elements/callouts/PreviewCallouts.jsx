// Callouts while still under construction

/**
 * @component ComingSoonCallout
 * @category elements
 * @subcategory callouts
 * @status stable
 * @description Banner indicating a feature or page is coming soon, with links to related resources.
  * @aiDiscoverability none
 * @param {string} [type="page"] - Type used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 *
 * @example
 * <ComingSoonCallout />
 */
const ComingSoonCallout = ({ type = "page", className = "", style = {}, ...rest }) => {
  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  };
  const colStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    fontSize: "1.0rem",
    flex: 1,
    alignItems: "center",
  };
  const linkStyle = {
    color: "var(--hero-text)",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    paddingTop: "0.2rem",
  };
  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "var(--lp-color-callout-coming-soon)",
  };

  return (
    <Callout icon="" color="var(--lp-color-callout-coming-soon)" className={className} style={style} {...rest}>
      <div style={rowStyle}>
        <div style={{ flexShrink: 0 }}>
          <Icon
            icon="cauldron"
            size={30}
            color="var(--lp-color-callout-coming-soon)"
          />
        </div>
        <div style={colStyle}>
          <span style={titleStyle}>
            {type === "page"
              ? "This page is still cooking... Expect big things soon!"
              : "This Tab Group is still cooking... Expect big things soon!"}
          </span>
          <br />
          <span>
            Check the{" "}
            <a href="https://github.com/livepeer/docs/issues" style={linkStyle}>
              <Icon icon="github" size={12} /> github issues
              <Icon icon="arrow-up-right" size={12} />
            </a>{" "}
            for ways to contribute!{" "}
          </span>
          <span>
            Or provide your feedback in this{" "}
            <a href="https://forms.gle/amWVEdhjvuEKzciR8" style={linkStyle}>
              <Icon icon="message" size={12} />
              quick form
              <Icon icon="arrow-up-right" size={12} />
            </a>
          </span>
        </div>
        <div style={{ flexShrink: 0, paddingRight: "1.5rem" }}>
          <Icon
            icon="cauldron"
            size={30}
            color="var(--lp-color-callout-coming-soon)"
          />
        </div>
      </div>
    </Callout>
  );
};

/**
 * @component PreviewCallout
 * @category elements
 * @subcategory callouts
 * @status stable
 * @description Banner indicating content is in preview/draft state with feedback links.
  * @aiDiscoverability none
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 * @example
 * <PreviewCallout />
 */
const PreviewCallout = ({ className = "", style = {}, ...rest }) => {
  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  };
  const colStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.0rem",
    flex: 1,
  };
  const linkStyle = {
    color: "var(--hero-text)",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    paddingTop: "0.2rem",
  };
  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "var(--lp-color-callout-review)",
  };
  return (
    <Callout icon="" color="var(--lp-color-callout-review)" className={className} style={style} {...rest}>
      <div style={rowStyle}>
        <div style={{ flexShrink: 0 }}>
          <Icon icon="tools" size={30} color="var(--lp-color-callout-review)" />
        </div>
        <div style={colStyle}>
          <span style={titleStyle}>
            Page is under construction. <br />
          </span>
          <br />
          <span>
            Check the{" "}
            <a href="https://github.com/livepeer/docs/issues" style={linkStyle}>
              <Icon icon="github" size={12} /> github issues
              <Icon icon="arrow-up-right" size={12} />
            </a>{" "}
            for ways to contribute!{" "}
          </span>
          <span>
            Or provide your feedback in this{" "}
            <a href="https://forms.gle/amWVEdhjvuEKzciR8" style={linkStyle}>
              <Icon icon="message" size={12} />
              quick form
              <Icon icon="arrow-up-right" size={12} />
            </a>
          </span>
        </div>
        <div style={{ flexShrink: 0, paddingRight: "1.5rem" }}>
          <Icon icon="tools" size={30} color="var(--lp-color-callout-review)" />
        </div>
      </div>
    </Callout>
  );
};

/**
 * @component ReviewCallout
 * @category elements
 * @subcategory callouts
 * @status stable
 * @description Banner indicating content is under review with status links.
  * @aiDiscoverability none
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 * @example
 * <ReviewCallout />
 */
const ReviewCallout = ({ className = "", style = {}, ...rest }) => {
  return (
    <Callout icon="help" color="var(--lp-color-callout-review)" className={className} style={style} {...rest}>
      <div style={{ fontSize: "1.0rem" }}>
        Technical Review Needed! <br />
        Get in touch if you can help
      </div>
    </Callout>
  );
};

/**
 * @component CalloutWrapper
 * @category elements
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
const CalloutWrapper = ({
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

export { ComingSoonCallout, PreviewCallout, ReviewCallout, CalloutWrapper };
