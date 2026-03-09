/**
 * @component ListSteps
 * @category layout
 * @tier composite
 * @status stable
 * @description List Steps layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies none
 * @usedIn none
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 * @example
 * <ListSteps />
 */
export const ListSteps = (listItems, stepsConfig) => {
  return (
    <Steps {...stepsConfig}>
      {listItems.map(({ title, icon, children, ...props }, idx) => (
        <Step key={idx} title={title} icon={icon} {...props}>
          {children}
        </Step>
      ))}
    </Steps>
  );
};
