// Callouts while still under construction

export const ComingSoonCallout = () => {
  return (
    <Callout icon="cauldron" color="#ef1a73">
      <div style={{ fontSize: "1.0rem" }}>
        This page is still cooking... <br />
        Expect big things soon!
      </div>
    </Callout>
  );
};

export const PreviewCallout = () => {
  return (
    <Callout icon="tools" color="#b636dd">
      <div style={{ fontSize: "1.0rem" }}>
        Page is under construction. <br />
        Feedback Welcome!
      </div>
    </Callout>
  );
};

export const ReviewCallout = () => {
  return (
    <Callout icon="help" color="#b636dd">
      <div style={{ fontSize: "1.0rem" }}>
        Technical Review Needed! <br />
        Get in touch if you can help
      </div>
    </Callout>
  );
};
