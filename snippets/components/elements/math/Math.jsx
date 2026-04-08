/**
 * @component MathInline
 * @category elements
 * @subcategory math
 * @status stable
 * @description Renders LaTeX as inline math using KaTeX.
  * @aiDiscoverability none
 * @usedIn v2/delegators/concepts/mechanics.mdx, v2/delegators/concepts/overview.mdx, v2/delegators/concepts/tokenomics.mdx, v2/delegators/delegation/delegation-economics.mdx, v2/delegators/guides/governance/model.mdx, v2/delegators/guides/governance/overview.mdx, v2/delegators/guides/governance/processes.mdx, v2/delegators/guides/treasury/allocations.mdx, v2/delegators/guides/treasury/overview.mdx, v2/delegators/guides/treasury/proposals.mdx, v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-03-29
 * @param {any} latex - latex prop.
 * @param {string} [className=""] - class Name prop.
 * @param {any} ariaLabel - aria Label prop.
 * @example
 * <MathInline latex="example" ariaLabel="example" />
  * @param {object} [style={}] - Optional inline style override.
 */
export const MathInline = ({ latex, className = "", ariaLabel, style = {}, ...rest }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <span className={className} aria-label={ariaLabel || "Math expression"} style={style} {...rest}>
      {`$${value}$`}
    </span>
  );
};

/**
 * @component MathBlock
 * @category elements
 * @subcategory math
 * @status stable
 * @description Renders LaTeX as a block-level math expression using KaTeX.
  * @aiDiscoverability none
 * @usedIn v2/delegators/concepts/mechanics.mdx, v2/delegators/concepts/overview.mdx, v2/delegators/concepts/tokenomics.mdx, v2/delegators/delegation/delegation-economics.mdx, v2/delegators/guides/governance/model.mdx, v2/delegators/guides/governance/overview.mdx, v2/delegators/guides/governance/processes.mdx, v2/delegators/guides/treasury/allocations.mdx, v2/delegators/guides/treasury/overview.mdx, v2/delegators/guides/treasury/proposals.mdx, v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-03-29
 * @param {any} latex - latex prop.
 * @param {string} [className=""] - class Name prop.
 * @param {any} ariaLabel - aria Label prop.
 * @example
 * <MathBlock latex="example" ariaLabel="example" />
  * @param {object} [style={}] - Optional inline style override.
 */
export const MathBlock = ({ latex, className = "", ariaLabel, style = {}, ...rest }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <div className={className} aria-label={ariaLabel || "Math expression"} style={style} {...rest}>
      {`$$\n${value}\n$$`}
    </div>
  );
};
