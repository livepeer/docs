/**
 * @component SolutionCard
 * @category wrappers
 * @subcategory cards
 * @status stable
 * @description Card body for Solutions Portal product cards. Accepts pre-rendered JSX slots for badges,
 *              infra tags, and social links. ScrollBox is passed as a component prop for blurb rendering.
 * @aiDiscoverability high
 * @note badges, infraTags, socialLinks accept pre-rendered JSX (ReactNode) — instantiated in the parent MDX page.
 *       ScrollBox is passed as a component reference and called internally to wrap blurb text.
 *       Mintlify does not resolve cross-JSX imports — all sub-components are sourced from the parent MDX page.
 *
 * @param {ReactNode}  [badges]      - Pre-rendered <BadgeWrapper badges={...} />
 * @param {string}     [logoSrc]     - Path to the product logo image.
 * @param {string}     [logoAlt]     - Alt text for the logo image.
 * @param {string}     [subtitle]    - Bold italic one-line product subtitle.
 * @param {ReactNode}  [infraTags]   - Pre-rendered <IconBadgeWrapper items={...} iconColor="var(--accent)" size={12} />
 * @param {string}     [blurb]       - Product description text. Rendered inside ScrollBox.
 * @param {Component}  [ScrollBox]   - ScrollBox component reference, passed from parent MDX.
 * @param {string}     [logoHeight]  - Override logo container height (default '60px').
 * @param {ReactNode}  [socialLinks] - Pre-rendered <SocialLinks links={...} />
 *
 * @example
 * import { BadgeWrapper, IconBadgeWrapper } from '/snippets/components/wrappers/badges/Badges.jsx'
 * import { ScrollBox } from '/snippets/components/wrappers/containers/ScrollBox.jsx'
 * import { SocialLinks } from '/snippets/components/elements/social/SocialLinks.jsx'
 *
 * <SolutionCard
 *   badges={<BadgeWrapper badges={daydreamBadges} />}
 *   logoSrc="/snippets/assets/logos/products/daydream-logo-dark.svg"
 *   logoAlt="Daydream Logo"
 *   subtitle="Open-Source Toolkit For World Models and Real-time AI Video"
 *   infraTags={<IconBadgeWrapper items={daydreamInfra} iconColor="var(--accent)" size={12} />}
 *   blurb="Description here."
 *   ScrollBox={ScrollBox}
 *   socialLinks={<SocialLinks links={daydreamSocials} justify="center" style={{ marginTop: '1rem', marginBottom: '-1rem' }} />}
 * />
 */

export const SolutionCard = ({
  badges,
  logoSrc,
  logoAlt,
  logoHeight = '60px',
  subtitle,
  infraTags,
  blurb,
  ScrollBox,
  socialLinks,
}) => {
  return (
    <div style={{ margin: '0 0 1rem 0' }}>
      {badges}

      {logoSrc && (
        <div
          style={{
            height: logoHeight,
            display: 'flex',
            alignItems: 'center',
            margin: '0.5rem 0',
          }}
        >
          <img
            src={logoSrc}
            alt={logoAlt || 'solution provider logo'}
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              marginTop: '0.25rem',
            }}
          />
        </div>
      )}

      {subtitle && (
        <>
          <style>{`.solution-card-subtitle { color: white !important; font-style: italic }`}</style>
          <div
            className="solution-card-subtitle"
            style={{ fontWeight: 700, fontSize: '1rem' }}
          >
            {subtitle}
          </div>
        </>
      )}

      {infraTags}

      {blurb && ScrollBox && (
        <ScrollBox
          maxHeight={100}
          style={{ fontSize: '0.85rem', lineHeight: '1.1rem' }}
        >
          {blurb}
        </ScrollBox>
      )}

      {socialLinks}
    </div>
  )
}
