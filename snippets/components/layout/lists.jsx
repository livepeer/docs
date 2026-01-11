// Lists
import { GotoLink } from "/snippets/components/primitives/links.jsx";

export const BasicList = ({ listItems: array }) => {
  return <></>;
};

export const IconList = ({ listItems: array }) => {
  return <></>;
};

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
