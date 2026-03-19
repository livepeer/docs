/**
 * @component ListSteps
 * @category layout
 * @tier pattern
 * @status stable
 * @description This component takes an array of step items and renders them using the Steps/Step
 *   components. Each item in the array is rendered as a Step with its own title, icon, and content
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {Array} listItems - Collection data rendered by the component.
 * @param {object} [stepsConfig={}] - Steps config used by the component.
 *
 * @example
 * <ListSteps listItems={[]} />
 */
export const ListSteps = ({ listItems, stepsConfig = {} }) => {
  const safeItems = Array.isArray(listItems) ? listItems : [];
  if (safeItems.length === 0) {
    console.warn("[ListSteps] Missing required prop: listItems");
    return null;
  }

  return (
    <Steps {...stepsConfig}>
      {safeItems.map(({ title, icon, children, ...props }, idx) => (
        <Step key={idx} title={title} icon={icon} {...props}>
          {children}
        </Step>
      ))}
    </Steps>
  );
};
