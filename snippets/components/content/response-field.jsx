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

const ValueResponseField = ({
  description,
  post = null,
  label = "value",
  line = true,
  children,
  ...props
}) => {
  const value = post
    ? [
        <span>
          <span style={{ color: "gray" }}>{label}: </span>
          <span style={{ color: "#3b82f6" }}>{post[0]}</span>
        </span>,
      ]
    : null;

  return (
    <div className={!line ? "vrf-noline" : undefined}>
      <style>{`
        .vrf-noline > .field {
          border-bottom: none !important;
          margin-bottom: -0.5rem !important;
          padding: 0;
        }
      `}</style>
      <ResponseField {...props} post={value}>
        {typeof description === "function" ? description() : description}
        {children}
      </ResponseField>
    </div>
  );
};

const expandableCode = () => {
  return (
    <Expandable title="Required Flags">
      <ResponseField name="flag" type="type" default="hi">
        Description
      </ResponseField>
    </Expandable>
  );
};

const CustomResponseField = ({ description, ...props }) => {
  const uniqueId = `custom-rf-${Math.random().toString(36).substring(2, 11)}`;

  return (
    <div className={uniqueId}>
      <style>{`
        .${uniqueId} > .field {
          border-bottom: none !important;
          margin-bottom: -20px !important;
        }
      `}</style>
      <ResponseField {...props}>{description}</ResponseField>
    </div>
  );
};

const ResponseFieldExpandable = ({ fields = {}, ...props }) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  return (
    <Expandable {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Expandable>
  );
};

const ResponseFieldAccordion = ({ fields = {}, ...props }) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  return (
    <Accordion {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Accordion>
  );
};

// Wrapper that chooses accordion or expandable layout at runtime.
const ResponseFieldGroup = ({
  component = "accordion",
  fields = {},
  ...props
}) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  const componentMap = {
    expandable: Expandable,
    accordion: Accordion,
  };
  const Component = componentMap[component] || Accordion;
  return (
    <Component {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Component>
  );
};

export {
  ValueResponseField,
  CustomResponseField,
  ResponseFieldExpandable,
  ResponseFieldAccordion,
  ResponseFieldGroup,
};
