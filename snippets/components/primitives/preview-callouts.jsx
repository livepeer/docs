// Callouts while still under construction

/**
 * @component ComingSoonCallout
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Callout announcing work-in-progress content and contribution links.
 * @contentAffinity universal
 * @owner docs
 * @dependencies PreviewCallout, ReviewCallout
 * @usedIn v2/cn/orchestrators/about-orchestrators/architecture.mdx, v2/cn/orchestrators/about-orchestrators/economics.mdx, v2/cn/orchestrators/orchestrator-tools-and-resources/community-pools.mdx, v2/cn/resources/changelog/migration-guide.mdx, v2/cn/resources/resources-portal.mdx, v2/es/orchestrators/about-orchestrators/architecture.mdx, v2/es/orchestrators/about-orchestrators/economics.mdx, v2/es/orchestrators/orchestrator-tools-and-resources/community-pools.mdx, v2/es/resources/changelog/migration-guide.mdx, v2/es/resources/resources-portal.mdx, v2/fr/orchestrators/about-orchestrators/architecture.mdx, v2/fr/orchestrators/about-orchestrators/economics.mdx, v2/fr/orchestrators/orchestrator-tools-and-resources/community-pools.mdx, v2/fr/resources/changelog/migration-guide.mdx, v2/fr/resources/resources-portal.mdx, v2/resources/changelog/migration-guide.mdx, v2/x-deprecated/unmatched/09_internal/ecosystem.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {string} [type="page"] - type prop.
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
    color: "var(--lp-color-brand-coming-soon)",
  };

  return (
    <Callout icon="" color="var(--lp-color-brand-coming-soon)">
      <div style={rowStyle}>
        <div style={{ flexShrink: 0 }}>
          <Icon icon="cauldron" size={30} color="var(--lp-color-brand-coming-soon)" />
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
          <Icon icon="cauldron" size={30} color="var(--lp-color-brand-coming-soon)" />
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
 * @description Callout highlighting preview-state content and feedback channels.
 * @contentAffinity universal
 * @owner docs
 * @dependencies ComingSoonCallout, ReviewCallout
 * @usedIn v2/cn/orchestrators/about-orchestrators/orchestrator-functions.mdx, v2/cn/orchestrators/about-orchestrators/overview.mdx, v2/cn/orchestrators/quickstart/orchestrator-setup.mdx, v2/cn/orchestrators/quickstart/overview.mdx, v2/cn/orchestrators/references/cli-flags.mdx, v2/cn/resources/changelog/changelog.mdx, v2/cn/resources/documentation-guide/style-guide.mdx, v2/cn/resources/livepeer-glossary.mdx, v2/developers/ai-inference-on-livepeer/overview.mdx, v2/developers/ai-inference-on-livepeer/workload-fit.mdx, v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/quickstart/video/video-streaming-101.mdx, v2/es/orchestrators/about-orchestrators/orchestrator-functions.mdx, v2/es/orchestrators/about-orchestrators/overview.mdx, v2/es/orchestrators/quickstart/orchestrator-setup.mdx, v2/es/orchestrators/quickstart/overview.mdx, v2/es/orchestrators/references/cli-flags.mdx, v2/es/resources/changelog/changelog.mdx, v2/es/resources/documentation-guide/style-guide.mdx, v2/es/resources/livepeer-glossary.mdx, v2/fr/orchestrators/about-orchestrators/orchestrator-functions.mdx, v2/fr/orchestrators/about-orchestrators/overview.mdx, v2/fr/orchestrators/quickstart/orchestrator-setup.mdx, v2/fr/orchestrators/quickstart/overview.mdx, v2/fr/orchestrators/references/cli-flags.mdx, v2/fr/resources/changelog/changelog.mdx, v2/fr/resources/documentation-guide/style-guide.mdx, v2/fr/resources/livepeer-glossary.mdx, v2/orchestrators/setting-up-an-orchestrator/publish-offerings.mdx, v2/resources/concepts/brief-history-of-video.mdx, v2/resources/references/contract-addresses.mdx, v2/x-deprecated/about-livepeer/moved/livepeer-ecosystem.mdx, v2/x-deprecated/about-livepeer/moved/livepeer-evolution.mdx, v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx, v2/x-deprecated/about-livepeer/moved/why-livepeer.mdx, v2/x-deprecated/unmatched/04_gateways/_tests-to-delete/why.mdx, v2/x-deprecated/unmatched/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx, v2/x-deprecated/unmatched/09_internal/definitions.mdx, v2/x-deprecated/unmatched/09_internal/references.mdx, v2/x-experimental/copy-trending-at-livepeer.mdx, v2/x-experimental/trending-layout-tests.mdx
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
    color: "var(--lp-color-brand-preview)",
  };
  return (
    <Callout icon="" color="var(--lp-color-brand-preview)">
      <div style={rowStyle}>
        <div style={{ flexShrink: 0 }}>
          <Icon icon="tools" size={30} color="var(--lp-color-brand-preview)" />
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
          <Icon icon="tools" size={30} color="var(--lp-color-brand-preview)" />
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
 * @description Callout requesting technical review support on incomplete content.
 * @contentAffinity universal
 * @owner docs
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
    <Callout icon="help" color="var(--lp-color-brand-preview)">
      <div style={{ fontSize: "1.0rem" }}>
        Technical Review Needed! <br />
        Get in touch if you can help
      </div>
    </Callout>
  );
};

export { ComingSoonCallout, PreviewCallout, ReviewCallout };
