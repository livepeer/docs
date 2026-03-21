// Callouts while still under construction

/**
 * @component ComingSoonCallout
 * @type elements
 * @subniche callouts
 * @status stable
 * @description Banner indicating a feature or page is coming soon, with links to related resources.
 * @accepts style, className, ...rest
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
 * @type elements
 * @subniche callouts
 * @status stable
 * @description Banner indicating content is in preview/draft state with feedback links.
 * @accepts style, className, ...rest
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
 * @type elements
 * @subniche callouts
 * @status stable
 * @description Banner indicating content is under review with status links.
 * @accepts style, className, ...rest
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

export { ComingSoonCallout, PreviewCallout, ReviewCallout };
