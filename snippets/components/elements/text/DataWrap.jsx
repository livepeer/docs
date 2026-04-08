/**
 * @component        DataWrap
 * @category elements
 * @subcategory text
 * @status           stable
 * @description      Transparent wrapper that renders a data value inline. Used to surface pipeline-generated values (e.g. lastVerified dates) in MDX without additional markup.
 * @dataSource       prop
 * @aiDiscoverability none
 *
 * @usedIn v2/about/protocol/blockchain-contracts.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-08
 * @param {string|number} value - The data value to render.
 */
export const DataWrap = ({ value }) => {
  return <>{value}</>
}
