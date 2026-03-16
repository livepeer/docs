/**
 * @component AccordionGroupList
 * @category layout
 * @tier composite
 * @status stable
 * @description Renders a configurable number of empty accordion sections for scaffold examples.
 * @contentAffinity tutorial, reference
 * @owner docs
 * @dependencies AccordionGroup, Accordion
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
 * @param {number} [num=1] - Number of placeholder accordion sections to render.
 * @example
 * <AccordionGroupList num={3} />
 */
export const AccordionGroupList = ({ num = 1 }) => (
  <AccordionGroup>
    {Array.from({ length: num }, (_, i) => (
      <Accordion key={i} title={`Section ${i + 1}`}></Accordion>
    ))}
  </AccordionGroup>
)

export default AccordionGroupList
