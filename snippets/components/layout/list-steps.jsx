/**
 * ListSteps - Renders a list of items as Steps components
 *
 * @description
 * This component takes an array of step items and renders them using the Steps/Step components.
 * Each item in the array is rendered as a Step with its own title, icon, and content.
 *
 * @param {Array<Object>} listItems - Array of objects with Step props and children
 * @param {string} listItems[].title - The title of the step
 * @param {string} [listItems[].icon] - Optional icon for the step
 * @param {React.ReactNode} listItems[].children - Content to display in the step
 * @param {Object} stepsConfig - Configuration object with Steps component props
 *
 * @example
 * const items = [
 *   { title: "First Step", icon: "check", children: <p>Step content</p> },
 *   { title: "Second Step", icon: "arrow-right", children: <p>More content</p> }
 * ];
 * <ListSteps listItems={items} stepsConfig={{}} />
 *
 * @author Livepeer Documentation Team
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
