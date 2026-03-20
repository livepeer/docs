/**
 * @component ListSteps
 * @type wrappers
 * @subniche lists
 * @status stable
 * @description Renders an array of step items inside Mintlify Steps component.
 * @accepts className, style, ...rest
 * @param {Array} listItems - Collection data rendered by the component.
 * @param {object} [stepsConfig={}] - Steps config used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const ListSteps = ({ listItems, stepsConfig = {}, className = "", style = {}, ...rest }) => {
  const safeItems = Array.isArray(listItems) ? listItems : [];
  if (safeItems.length === 0) {
    console.warn("[ListSteps] Missing required prop: listItems");
    return null;
  }

  return (
    <Steps className={className} style={style} {...stepsConfig} {...rest}>
      {safeItems.map(({ title, icon, children, ...props }, idx) => (
        <Step key={idx} title={title} icon={icon} {...props}>
          {children}
        </Step>
      ))}
    </Steps>
  );
};
