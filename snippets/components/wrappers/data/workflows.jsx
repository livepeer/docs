/**
 * @component        DataWrap
 * @category         wrappers
 * @subcategory      data
 * @status           stable
 * @description      Transparent wrapper that renders a data value inline. Used to surface pipeline-generated values (e.g. lastVerified dates) in MDX without additional markup.
 * @dataSource       prop
 * @aiDiscoverability none
 *
 * @param {string|number} value - The data value to render.
 */
export const DataWrap = ({ value }) => {
  return <>{value}</>
}
