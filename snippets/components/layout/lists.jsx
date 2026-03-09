import { GotoLink } from "/snippets/components/primitives/links.jsx";

/**
 * @component BasicList
 * @category layout
 * @tier composite
 * @status stable
 * @description Basic List layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StepLinkList, StepList, UpdateLinkList
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} listItems - list Items prop.
 * @example
 * <BasicList listItems={[]} />
 */
export const BasicList = ({ listItems: array }) => {
  return <></>;
};

/**
 * @component IconList
 * @category layout
 * @tier composite
 * @status stable
 * @description Icon List layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StepLinkList, StepList, UpdateLinkList
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} listItems - list Items prop.
 * @example
 * <IconList listItems={[]} />
 */
export const IconList = ({ listItems: array }) => {
  return <></>;
};

/**
 * @component StepList
 * @category layout
 * @tier composite
 * @status stable
 * @description Step List layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StepLinkList, UpdateLinkList
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} listItems - list Items prop.
 * @example
 * <StepList listItems={[]} />
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
 * @component StepLinkList
 * @category layout
 * @tier composite
 * @status stable
 * @description Step Link List layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StepList, UpdateLinkList
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} listItems - list Items prop.
 * @example
 * <StepLinkList listItems={[]} />
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
 * @component UpdateList
 * @category layout
 * @tier composite
 * @status stable
 * @description Update List layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StepLinkList, StepList, UpdateLinkList
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} listItems - list Items prop.
 * @example
 * <UpdateList listItems={[]} />
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
 * @category layout
 * @tier composite
 * @status stable
 * @description Update Link List layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StepLinkList, StepList
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} listItems - list Items prop.
 * @example
 * <UpdateLinkList listItems={[]} />
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
