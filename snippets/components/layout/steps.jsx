// Custom Steps component with styling support

export const StyledSteps = ({
  children,
  iconColor = "#18794e",
  titleColor = "#2b9a66",
  lineColor = "#2b9a66",
  iconSize = "24px",
}) => {
  const stepsId = `styled-steps-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <style>{`
        #${stepsId} .steps > div > div.absolute > div {
          background-color: ${iconColor} !important;
        }
        #${stepsId} .steps > div > div.w-full > p {
          color: ${titleColor} !important;
        }
        #${stepsId} > div > div > div.absolute.w-px {
          background-color: ${lineColor} !important;
        }
      `}</style>
      <div id={stepsId}>
        <Steps>{children}</Steps>
      </div>
    </>
  );
};

export const StyledStep = ({ title, icon, titleSize = "h3", children }) => {
  return (
    <Step title={title} icon={icon} titleSize={titleSize}>
      {children}
    </Step>
  );
};
