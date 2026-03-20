/**
 * @component AccordionGroupList
 * @type wrappers
 * @subniche accordions
 * @status stable
 * @description Generates N numbered accordion sections inside an AccordionGroup.
 * @accepts className, style, ...rest
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
