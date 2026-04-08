// ─── Accordions — all accordion components ─── //

/**
 * @component AccordionGroupList
 * @category displays
 * @subcategory accordions
 * @status stable
 * @description Generates N numbered accordion sections inside an AccordionGroup.
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {number} [num=1] - Number of placeholder accordion sections to render.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const AccordionGroupList = ({ num = 1, className = "", style = {}, ...rest }) => (
  <AccordionGroup className={className} style={style} {...rest}>
    {Array.from({ length: num }, (_, i) => (
      <Accordion key={i} title={`Section ${i + 1}`}></Accordion>
    ))}
  </AccordionGroup>
)

export default AccordionGroupList

/**
 * @component AccordionLayout
 * @category displays
 * @subcategory accordions
 * @status stable
 * @description Vertical stack layout with small gap, designed for accordion content sections.
  * @aiDiscoverability none
 * @usedIn v2/about/concepts/mental-model.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} children - children prop.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const AccordionLayout = ({ children, className = "", style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--lp-spacing-1)",
        marginTop: "var(--lp-spacing-1)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
