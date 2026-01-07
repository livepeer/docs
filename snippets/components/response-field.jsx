/**
 * CustomResponseField - ResponseField wrapper that hides the bottom divider
 *
 * Usage:
 *   <CustomResponseField name="field_name" type="string">
 *     Description text
 *   </CustomResponseField>
 *
 * Props:
 *   - All ResponseField props are supported (name, type, default, required, post, etc.)
 */
export const CustomResponseField = ({ children, ...props }) => {
  const uniqueId = `custom-rf-${Math.random().toString(36).substring(2, 11)}`;

  return (
    <div className={uniqueId}>
      <style>{`
        .${uniqueId} > .field {
          border-bottom: none !important;
          margin-bottom: -20px !important;
        }
      `}</style>
      <ResponseField {...props}>{children}</ResponseField>
    </div>
  );
};

export const ValueResponseField = ({ description, post = null, ...props }) => {
  const uniqueId = `custom-rf-${Math.random().toString(36).substring(2, 11)}`;

  const value = post
    ? [
        <span>
          <span style={{ color: "gray" }}>value: </span>
          <span style={{ color: "#3b82f6" }}>{post[0]}</span>
        </span>,
      ]
    : null;

  return (
    <div className={uniqueId}>
      <ResponseField {...props} post={value}>
        {typeof description === "function" ? description() : description}
      </ResponseField>
    </div>
  );
};
