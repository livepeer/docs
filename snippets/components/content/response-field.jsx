/**
 * @component ValueResponseField
 * @category content
 * @tier composite
 * @status stable
 * @description ResponseField wrapper that renders a labelled post value alongside descriptive content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CustomResponseField, ResponseFieldAccordion, ResponseFieldExpandable, ResponseFieldGroup
 * @usedIn v2/about/livepeer-protocol/core-mechanisms.mdx, v2/cn/about/livepeer-protocol/core-mechanisms.mdx, v2/cn/gateways/quickstart/gateway-setup.mdx, v2/es/about/livepeer-protocol/core-mechanisms.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/fr/about/livepeer-protocol/core-mechanisms.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 * @param {any} description - description prop.
 * @param {any} [post=null] - post prop.
 * @param {string} [label="value"] - label prop.
 * @param {boolean} [line=true] - line prop.
 * @param {any} children - children prop.
 * @param {any} props - props prop.
 * @example
 * <ValueResponseField description="example" props="example">Example content</ValueResponseField>
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
          <span style={{ color: "var(--lp-color-link)" }}>{post[0]}</span>
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
 * @description ResponseField wrapper that removes the default divider for tighter grouped layouts.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies ResponseFieldAccordion, ResponseFieldExpandable, ResponseFieldGroup, ValueResponseField
 * @usedIn v2/cn/gateways/quickstart/gateway-setup.mdx, v2/cn/gateways/run-a-gateway/configure/video-configuration.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/es/gateways/run-a-gateway/configure/video-configuration.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/fr/gateways/run-a-gateway/configure/video-configuration.mdx, v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 * @param {any} description - description prop.
 * @param {any} props - props prop.
 * @example
 * <CustomResponseField description="example" props="example" />
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
 * @description Expandable wrapper that renders a collection of response fields inside Mintlify Expandable.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CustomResponseField, ResponseFieldAccordion, ResponseFieldGroup, ValueResponseField
 * @usedIn v2/cn/gateways/quickstart/gateway-setup.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 * @param {object} [fields={}] - fields prop.
 * @param {any} props - props prop.
 * @example
 * <ResponseFieldExpandable props="example" />
 */
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

/**
 * @component ResponseFieldAccordion
 * @category content
 * @tier composite
 * @status stable
 * @description Accordion wrapper that renders a collection of response fields inside Mintlify Accordion.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CustomResponseField, ResponseFieldExpandable, ResponseFieldGroup, ValueResponseField
 * @usedIn v2/cn/gateways/quickstart/gateway-setup.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 * @param {object} [fields={}] - fields prop.
 * @param {any} props - props prop.
 * @example
 * <ResponseFieldAccordion props="example" />
 */
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
/**
 * @component ResponseFieldGroup
 * @category content
 * @tier composite
 * @status stable
 * @description Runtime wrapper that switches between accordion and expandable response field groupings.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CustomResponseField, ResponseFieldAccordion, ResponseFieldExpandable, ValueResponseField
 * @usedIn none
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 * @param {string} [component="accordion"] - component prop.
 * @param {object} [fields={}] - fields prop.
 * @param {any} props - props prop.
 * @example
 * <ResponseFieldGroup props="example" />
 */
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
