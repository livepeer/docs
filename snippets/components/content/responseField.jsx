/**
 * @component ValueResponseField
 * @category content
 * @tier composite
 * @status stable
 * @description CustomResponseField - ResponseField wrapper that hides the bottom divider
 * @contentAffinity concept
 * @owner @livepeer/docs-team
 * @dependencies CustomResponseField, ResponseFieldAccordion, ResponseFieldExpandable,
 *   ResponseFieldGroup
 * @usedIn v2/about/livepeer-protocol/core-mechanisms.mdx, v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} description - Primary content rendered by the component.
 * @param {string} [post=null] - Post used by the component.
 * @param {string} [label="value"] - Label text rendered by the component.
 * @param {boolean} [line=true] - Boolean flag that controls component behaviour.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} [props] - Additional props forwarded to ResponseField.
 *
 * @example
 * <ValueResponseField description="Example" />
 */
const ValueResponseField = ({
  description,
  post = null,
  label = "value",
  line = true,
  children,
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
    <div className={!line ? "vrf-noline" : undefined}>
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
 * @category content
 * @tier composite
 * @status stable
 * @description Renders the custom response field component
 * @contentAffinity how_to
 * @owner @livepeer/docs-team
 * @dependencies ResponseFieldAccordion, ResponseFieldExpandable, ResponseFieldGroup,
 *   ValueResponseField
 * @usedIn v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} description - Primary content rendered by the component.
 * @param {object} [props] - Additional props forwarded to ResponseField.
 *
 * @example
 * <CustomResponseField description="Example" />
 */
const CustomResponseField = ({ description, ...props }) => {
  const uniqueId = `custom-rf-${Math.random().toString(36).substring(2, 11)}`;

  return (
    <div className={uniqueId}>
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
 * @category content
 * @tier composite
 * @status stable
 * @description Renders the response field expandable component
 * @contentAffinity how_to
 * @owner @livepeer/docs-team
 * @dependencies CustomResponseField, ResponseFieldAccordion, ResponseFieldGroup, ValueResponseField
 * @usedIn v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {object} [fields={}] - Fields used by the component.
 * @param {object} [props] - Additional props forwarded to Expandable.
 *
 * @example
 * <ResponseFieldExpandable />
 */
const ResponseFieldExpandable = ({ fields = {}, ...props }) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  if (fieldsArray.length === 0) {
    return null;
  }

  return (
    <Expandable {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Expandable>
  );
};

/**
 * @component ResponseFieldAccordion
 * @category content
 * @tier composite
 * @status stable
 * @description Renders the response field accordion component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies CustomResponseField, ResponseFieldExpandable, ResponseFieldGroup,
 *   ValueResponseField
 * @usedIn v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {object} [fields={}] - Fields used by the component.
 * @param {object} [props] - Additional props forwarded to Accordion.
 *
 * @example
 * <ResponseFieldAccordion />
 */
const ResponseFieldAccordion = ({ fields = {}, ...props }) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  if (fieldsArray.length === 0) {
    console.warn("[ResponseFieldAccordion] Missing or invalid fields");
    return null;
  }

  return (
    <Accordion {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Accordion>
  );
};

// Wrapper that chooses accordion or expandable layout at runtime.
/**
 * @component ResponseFieldGroup
 * @category content
 * @tier composite
 * @status stable
 * @description Renders the response field group component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies CustomResponseField, ResponseFieldAccordion, ResponseFieldExpandable,
 *   ValueResponseField
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {string} [component="accordion"] - Component used by the component.
 * @param {object} [fields={}] - Fields used by the component.
 * @param {object} [props] - Additional props forwarded to the selected wrapper component.
 *
 * @example
 * <ResponseFieldGroup />
 */
const ResponseFieldGroup = ({
  component = "accordion",
  fields = {},
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
