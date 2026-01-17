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

const ValueResponseField = ({ description, post = null, ...props }) => {
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
  // console.log("fieldsArray", fieldsArray);
  return (
    <Expandable {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Expandable>
  );
};

const ResponseFieldAccordion = ({ fields = {}, ...props }) => {
  console.log("fields", fields);
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  return (
    <Accordion {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Accordion>
  );
};

// Not Working.
const ResponseFieldGroup = ({
  component = "accordion",
  fields = {},
  ...props
}) => {
  console.log("fields", fields);
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  const componentMap = {
    expandable: Expandable,
    accordion: Accordion,
  };
  console.log("fieldsArray", fieldsArray);
  const Component = componentMap[component];
  console.log("Component", Component.typeOf, Component);
  return (
    <Component>
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
