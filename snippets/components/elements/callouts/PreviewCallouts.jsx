// Callouts while still under construction

/**
 * @component ComingSoonCallout
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Renders the coming soon callout component
 * @contentAffinity changelog
 * @owner @livepeer/docs-team
 * @dependencies PreviewCallout, ReviewCallout
 * @usedIn v2/resources/changelog/migration-guide.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {string} [type="page"] - Type used by the component.
 *
 * @example
 * <ComingSoonCallout />
 */
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
    <Callout icon="" color="var(--lp-color-callout-coming-soon)">
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
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Renders the preview callout component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies ComingSoonCallout, ReviewCallout
 * @usedIn v2/developers/ai-inference-on-livepeer/overview.mdx, v2/developers/ai-inference-on-livepeer/workload-fit.mdx, v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/quickstart/video/video-streaming-101.mdx, v2/orchestrators/setup/publish-offerings.mdx, v2/resources/concepts/brief-history-of-video.mdx, v2/resources/references/contract-addresses.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @example
 * <PreviewCallout />
 */
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
    <Callout icon="" color="var(--lp-color-callout-review)">
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
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Renders the review callout component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies ComingSoonCallout, PreviewCallout
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @example
 * <ReviewCallout />
 */
const ReviewCallout = () => {
  return (
    <Callout icon="help" color="var(--lp-color-callout-review)">
      <div style={{ fontSize: "1.0rem" }}>
        Technical Review Needed! <br />
        Get in touch if you can help
      </div>
    </Callout>
  );
};

export { ComingSoonCallout, PreviewCallout, ReviewCallout };
