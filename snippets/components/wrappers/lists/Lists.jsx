import { GotoLink } from "/snippets/components/elements/links/Links.jsx";

/**
 * @component BasicList
 * @category wrappers
 * @subcategory lists
 * @status planned
 * @description Planned list component — not yet implemented.
  * @aiDiscoverability none
 * @param {any} listItems - list Items prop.
 */
export const BasicList = ({ listItems: array }) => {
  return <></>;
};

/**
 * @component IconList
 * @category wrappers
 * @subcategory lists
 * @status planned
 * @description Planned icon list component — not yet implemented.
  * @aiDiscoverability none
 * @param {any} listItems - list Items prop.
 */
export const IconList = ({ listItems: array }) => {
  return <></>;
};

/**
 * @component StepList
 * @category wrappers
 * @subcategory lists
 * @status stable
 * @description Renders listItems as Mintlify Steps with title, icon, and content.
  * @aiDiscoverability none
 * @param {any} listItems - list Items prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const StepList = ({ listItems, className = "", style = {}, ...rest }) => {
  return (
    <Steps className={className} style={style} {...rest}>
      {listItems.map(({ title, icon, content }, idx) => (
        <Step key={idx} title={title} icon={icon}>
          {content}
        </Step>
      ))}
    </Steps>
  );
};

/**
 * @component StepLinkList
 * @category wrappers
 * @subcategory lists
 * @status stable
 * @description Renders listItems as Mintlify Steps with GotoLink navigation.
  * @aiDiscoverability none
 * @param {any} listItems - list Items prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const StepLinkList = ({ listItems, className = "", style = {}, ...rest }) => {
  return (
    <Steps className={className} style={style} {...rest}>
      {listItems.map(({ title, icon, content, link }, idx) => (
        <Step key={idx} title={title} icon={icon}>
          <GotoLink label={content} relativePath={link} />
        </Step>
      ))}
    </Steps>
  );
};

/**
 * @component UpdateList
 * @category wrappers
 * @subcategory lists
 * @status planned
 * @description Planned update list component — not yet implemented.
  * @aiDiscoverability none
 * @param {any} listItems - list Items prop.
 */
export const UpdateList = ({ listItems: array }) => {
  return (
    <Update label="New Users">
      <div style={{ display: "flex", flexDirection: "column" }}>
        Learn what Livepeer is and how it can benefit you
        <Icon icon="new" /> [About Livepeer](../../01_about/about-home/)
      </div>
    </Update>
  );
};

/**
 * @component UpdateLinkList
 * @category wrappers
 * @subcategory lists
 * @status stable
 * @description Renders update items as linked entries inside Mintlify Update component.
  * @aiDiscoverability none
 * @param {any} listItems - list Items prop.
 */
export const UpdateLinkList = ({ listItems: array }) => {
  return (
    <>
      {array.map(({ title, icon, content, link }, idx) => (
        <Update key={idx} label={title}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {content}
            <GotoLink label={title} relativePath={link} icon={icon} />
          </div>
        </Update>
      ))}
    </>
  );
};
