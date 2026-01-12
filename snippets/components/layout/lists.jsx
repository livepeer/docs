import { GotoLink } from "/snippets/components/primitives/links.jsx";

/**
 * BasicList - A basic list component (placeholder)
 *
 * @description
 * Placeholder component for basic list functionality. Currently returns empty fragment.
 *
 * @param {Array} listItems - Array of list items
 *
 * @author Livepeer Documentation Team
 */
export const BasicList = ({ listItems: array }) => {
  return <></>;
};

/**
 * IconList - A list component with icons (placeholder)
 *
 * @description
 * Placeholder component for icon list functionality. Currently returns empty fragment.
 *
 * @param {Array} listItems - Array of list items with icons
 *
 * @author Livepeer Documentation Team
 */
export const IconList = ({ listItems: array }) => {
  return <></>;
};

/**
 * StepList - Renders a list of items as Steps
 *
 * @description
 * Displays an array of items using the Steps/Step components.
 * Each item includes a title, optional icon, and content.
 *
 * @param {Array<Object>} listItems - Array of step objects
 * @param {string} listItems[].title - Step title
 * @param {string} [listItems[].icon] - Optional icon name
 * @param {React.ReactNode} listItems[].content - Step content
 *
 * @example
 * const steps = [
 *   { title: "Install", icon: "download", content: "Run npm install" },
 *   { title: "Configure", icon: "gear", content: "Set up your config" }
 * ];
 * <StepList listItems={steps} />
 *
 * @author Livepeer Documentation Team
 */
export const StepList = ({ listItems }) => {
  console.log("listItems", listItems);
  return (
    <Steps>
      {listItems.map(({ title, icon, content }, idx) => (
        <Step key={idx} title={title} icon={icon}>
          {content}
        </Step>
      ))}
    </Steps>
  );
};

/**
 * StepLinkList - Renders a list of steps with navigation links
 *
 * @description
 * Similar to StepList but each step contains a GotoLink component for navigation.
 *
 * @param {Array<Object>} listItems - Array of step objects with links
 * @param {string} listItems[].title - Step title
 * @param {string} [listItems[].icon] - Optional icon name
 * @param {string} listItems[].content - Link label text
 * @param {string} listItems[].link - Relative path for the link
 *
 * @example
 * const steps = [
 *   { title: "Getting Started", icon: "rocket", content: "Start Here", link: "/guides/start" },
 *   { title: "Advanced", icon: "star", content: "Learn More", link: "/guides/advanced" }
 * ];
 * <StepLinkList listItems={steps} />
 *
 * @author Livepeer Documentation Team
 */
export const StepLinkList = ({ listItems }) => {
  console.log("listItems", listItems);
  return (
    <Steps>
      {listItems.map(({ title, icon, content, link }, idx) => (
        <Step key={idx} title={title} icon={icon}>
          <GotoLink label={content} relativePath={link} />
        </Step>
      ))}
    </Steps>
  );
};

/**
 * UpdateList - Displays an update/announcement list (placeholder)
 *
 * @description
 * Placeholder component for displaying updates. Currently shows hardcoded content.
 *
 * @param {Array} listItems - Array of update items
 *
 * @author Livepeer Documentation Team
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
 * UpdateLinkList - Renders a list of updates with links
 *
 * @description
 * Displays multiple Update components, each with a title, content, and navigation link.
 *
 * @param {Array<Object>} listItems - Array of update objects
 * @param {string} listItems[].title - Update title/label
 * @param {string} [listItems[].icon] - Optional icon for the link
 * @param {React.ReactNode} listItems[].content - Update content
 * @param {string} listItems[].link - Relative path for the link
 *
 * @example
 * const updates = [
 *   { title: "New Feature", icon: "star", content: "Check out our new feature", link: "/features/new" },
 *   { title: "Bug Fix", icon: "bug", content: "Important bug fix", link: "/changelog" }
 * ];
 * <UpdateLinkList listItems={updates} />
 *
 * @author Livepeer Documentation Team
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
