/**
 * @component LatestVersion
 * @type integrators
 * @subniche feeds
 * @status experimental
 * @description Displays the latest release version string from automation data.
 * @dataSource release-version workflow
 * @accepts {any} version, {string} className, {object} style, ...rest
  * @aiDiscoverability none
 * @param {any} version - version prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */

export const LatestVersion = ({ version, className = "", style = {}, ...rest }) => {
  return <span className={className} style={style} {...rest}>{version}</span>;
};
