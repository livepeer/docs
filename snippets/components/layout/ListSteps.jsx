// listItems = array of objects with <Step> props and children props=any
// stepsConfig = object with <Steps> props

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
