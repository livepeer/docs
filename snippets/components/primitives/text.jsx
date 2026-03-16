/**
 * @component Subtitle
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Subtitle primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/mental-model.mdx, v2/about/resources/blockchain-contracts.mdx, v2/home/solutions/showcase.mdx, v2/home/solutions/verticals.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {object} [style={}] - style prop.
 * @param {any} text - text prop.
 * @param {any} children - children prop.
 * @example
 * <Subtitle text="example">Example content</Subtitle>
 */
export const Subtitle = ({ style = {}, text, children }) => {
  return (
    <>
      <span
        style={{
          fontSize: style.fontSize ? style.fontSize : "1rem",
          fontStyle: style.fontStyle ? style.fontStyle : "italic",
          color: style.color ? style.color : "var(--accent)",
          marginBottom: style.marginBottom ? style.marginBottom : 0,
          ...style,
        }}
      >
        {text}
        {children}
      </span>
    </>
  );
};

/**
 * @component CopyText
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Copy Text primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/resources/blockchain-contracts.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} text - text prop.
 * @param {any} label - label prop.
 * @example
 * <CopyText text="example" label="example" />
 */
export const CopyText = ({ text, label }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
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
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Card Title Text With Arrow primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/livepeer-protocol/core-mechanisms.mdx, v2/about/livepeer-protocol/governance-model.mdx, v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/overview.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/about/livepeer-protocol/treasury.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} children - children prop.
 * @param {any} cardProps - card Props prop.
 * @example
 * <CardTitleTextWithArrow cardProps="example">Example content</CardTitleTextWithArrow>
 */
export const CardTitleTextWithArrow = ({ children, ...cardProps }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-1rem",
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
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Accordion Title With Arrow primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/livepeer-protocol/core-mechanisms.mdx, v2/about/livepeer-protocol/governance-model.mdx, v2/about/livepeer-protocol/livepeer-token.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} text - text prop.
 * @param {any} children - children prop.
 * @param {string} [color="var(--text)"] - color prop.
 * @example
 * <AccordionTitleWithArrow text="example">Example content</AccordionTitleWithArrow>
 */
export const AccordionTitleWithArrow = ({
  text,
  children,
  color = "var(--text)",
}) => {
  const label = text ?? children;
  return (
    <span
      style={{
        justifyContent: "center",
        alignContent: "center",
        color: color,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.25rem 0",
        minHeight: 44,
      }}
    >
      {label}
      <span style={{ alignSelf: "flex-end" }}>
        <Icon icon="arrow-up-right" size={14} color="var(--text)" />
      </span>
    </span>
  );
};
