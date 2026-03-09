/**
 * @component AccordionLayout
 * @category layout
 * @tier composite
 * @status stable
 * @description Accordion Layout layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/mental-model.mdx, v2/cn/about/mental-model.mdx, v2/es/about/mental-model.mdx, v2/fr/about/mental-model.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} children - children prop.
 * @example
 * <AccordionLayout>Example content</AccordionLayout>
 */
export const AccordionLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        marginTop: "0.25rem",
      }}
    >
      {children}
    </div>
  );
};
