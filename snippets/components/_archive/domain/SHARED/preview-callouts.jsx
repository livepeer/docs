// Callouts while still under construction

const ComingSoonCallout = ({ type = "page" }) => {
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
    color: "var(--hero-text) !important",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    paddingTop: "0.2rem",
  };
  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#ef1a73",
  };

  return (
    <Callout icon="" color="#ef1a73">
      <div style={rowStyle}>
        <div style={{ flexShrink: 0 }}>
          <Icon icon="cauldron" size={30} color="#ef1a73" />
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
          <Icon icon="cauldron" size={30} color="#ef1a73" />
        </div>
      </div>
    </Callout>
  );
};

const PreviewCallout = () => {
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
    color: "var(--hero-text) !important",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    paddingTop: "0.2rem",
  };
  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#b636dd",
  };
  return (
    <Callout icon="" color="#b636dd">
      <div style={rowStyle}>
        <div style={{ flexShrink: 0 }}>
          <Icon icon="tools" size={30} color="#b636dd" />
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
          <Icon icon="tools" size={30} color="#b636dd" />
        </div>
      </div>
    </Callout>
  );
};

const ReviewCallout = () => {
  return (
    <Callout icon="help" color="#b636dd">
      <div style={{ fontSize: "1.0rem" }}>
        Technical Review Needed! <br />
        Get in touch if you can help
      </div>
    </Callout>
  );
};

export { ComingSoonCallout, PreviewCallout, ReviewCallout };
