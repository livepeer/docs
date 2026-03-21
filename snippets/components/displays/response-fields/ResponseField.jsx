/**
 * @component ValueResponseField
 * @type displays
 * @subniche response-fields
 * @status stable
 * @description API response field with name, type, and value display.
 * @accepts children, className, style, ...props
  * @aiDiscoverability none
 * @param {React.ReactNode} description - Primary content rendered by the component.
 * @param {string} [post=null] - Post used by the component.
 * @param {string} [label="value"] - Label text rendered by the component.
 * @param {boolean} [line=true] - Boolean flag that controls component behaviour.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} [props] - Additional props forwarded to ResponseField.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const ValueResponseField = ({
  description,
  post = null,
  label = "value",
  line = true,
  children,
  className = "",
  style = {},
  ...props
}) => {
  const hasDescription =
    typeof description === "function" || description != null || children != null;

  if (!hasDescription) {
    console.warn("[ValueResponseField] Missing required prop: description");
    return null;
  }

  const value = post
    ? [
        <span>
          <span style={{ color: "gray" }}>{label}: </span>
          <span style={{ color: "var(--lp-color-response-field-value)" }}>{post[0]}</span>
        </span>,
      ]
    : null;

  return (
    <div className={[!line ? "vrf-noline" : "", className].filter(Boolean).join(" ") || undefined} style={style}>
      <style>{`
        .vrf-noline > .field {
          border-bottom: none;
          margin-bottom: -0.5rem;
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

/**
 * @component CustomResponseField
 * @type displays
 * @subniche response-fields
 * @status stable
 * @description Custom-styled API response field with configurable margin.
 * @accepts className, style, ...props
  * @aiDiscoverability none
 * @param {React.ReactNode} description - Primary content rendered by the component.
 * @param {object} [props] - Additional props forwarded to ResponseField.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const CustomResponseField = ({ description, className = "", style = {}, ...props }) => {
  const uniqueId = `custom-rf-${Math.random().toString(36).substring(2, 11)}`;

  return (
    <div className={[uniqueId, className].filter(Boolean).join(" ")} style={style}>
      <style>{`
        .${uniqueId} > .field {
          border-bottom: none;
          margin-bottom: -20px;
        }
      `}</style>
      <ResponseField {...props}>{description}</ResponseField>
    </div>
  );
};

/**
 * @component ResponseFieldExpandable
 * @type displays
 * @subniche response-fields
 * @status stable
 * @description Expandable response field that reveals nested content on click.
 * @accepts className, style, ...props
  * @aiDiscoverability none
 * @param {object} [fields={}] - Fields used by the component.
 * @param {object} [props] - Additional props forwarded to Expandable.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const ResponseFieldExpandable = ({ fields = {}, className = "", style = {}, ...props }) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  if (fieldsArray.length === 0) {
    return null;
  }

  return (
    <Expandable className={className} style={style} {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Expandable>
  );
};

/**
 * @component ResponseFieldAccordion
 * @type displays
 * @subniche response-fields
 * @status stable
 * @description Accordion-style response field with collapsible detail section.
 * @accepts className, style, ...props
  * @aiDiscoverability none
 * @param {object} [fields={}] - Fields used by the component.
 * @param {object} [props] - Additional props forwarded to Accordion.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const ResponseFieldAccordion = ({ fields = {}, className = "", style = {}, ...props }) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  if (fieldsArray.length === 0) {
    console.warn("[ResponseFieldAccordion] Missing or invalid fields");
    return null;
  }

  return (
    <Accordion className={className} style={style} {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Accordion>
  );
};

// Wrapper that chooses accordion or expandable layout at runtime.
/**
 * @component ResponseFieldGroup
 * @type displays
 * @subniche response-fields
 * @status stable
 * @description Container for grouping multiple response fields with consistent spacing.
 * @accepts className, style, ...props
  * @aiDiscoverability none
 * @param {string} [component="accordion"] - Component used by the component.
 * @param {object} [fields={}] - Fields used by the component.
 * @param {object} [props] - Additional props forwarded to the selected wrapper component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const ResponseFieldGroup = ({
  component = "accordion",
  fields = {},
  className = "",
  style = {},
  ...props
}) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  if (fieldsArray.length === 0) {
    console.warn("[ResponseFieldGroup] Missing or invalid fields");
    return null;
  }

  const componentMap = {
    expandable: Expandable,
    accordion: Accordion,
  };
  const Component = componentMap[component] || Accordion;
  return (
    <Component className={className} style={style} {...props}>
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
