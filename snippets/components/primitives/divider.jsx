const LivepeerIcon = ({ ...props }) => {
  return (
    <Icon
      icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg"
      {...props}
    />
  );
};

const LivepeerIconFlipped = ({ ...props }) => {
  return (
    <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
      <Icon
        icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg"
        {...props}
      />
    </span>
  );
};

export const CustomDivider = ({ color, middleText }) => {
  const dividerColor = "#e5e7eb";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "24px 0",
        fontSize: "16px",
      }}
    >
      <span
        style={{
          marginRight: "8px",
          opacity: 0.2,
          color: `${dividerColor} !important`,
        }}
      >
        <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg" />
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: dividerColor,
          opacity: 0.2,
        }}
      ></div>
      {middleText && (
        <>
          <Icon icon="circle" size={2} />
          <span
            style={{
              margin: "0 8px",
              fontWeight: "bold",
              // fontSize: "12px",
              // textTransform: "uppercase",
              // fontStyle: "uppercase",
              fontColor: color,
              color: color,
              opacity: 0.4,
            }}
          >
            {middleText}
          </span>
          <Icon icon="circle" size={2} />
        </>
      )}
      <div
        style={{
          flex: 1,
          height: "1px",
          background: dividerColor,
          opacity: 0.2,
        }}
      ></div>
      <span style={{ marginLeft: "8px", opacity: 0.2 }}>
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
          <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg" />
        </span>
      </span>
    </div>
  );
};
