/*
 * Portal Components
 *
 * @description
 * These Components are used on the Portal pages.
 * Portal pages use mode: frame which is not correctly supported by Mintlify
 * They do this to remove the frontmatter metadata from the page in order to customise the layout.
 * mode: frame also strips all styling except for Mintlify components.
 * Use display/frame-mode.jsx components for headings in frame mode pages.
 *
 * @imports: REQUIRED - These components require imports on the MDX page to function.
 *
 * Note: Components use CSS globals defined in style.css - no imports needed.
 *
 * PortalHeroContent uses CustomDivider which needs to be imported on the MDX page:
 * import { CustomDivider } from "/snippets/components/primitives/divider.jsx";
 *
 * If not imported, components will not render correctly.
 *
 * @author Alison Haire
 */

/*
 * Background Image Container
 *
 * @description
 * A container component for adding a background image to a portal page hero section.
 * It uses className="frame-mode-hero-full" to fill the full width of the page.
 * The image sits behind the hero header.
 *
 * @param {React.ReactNode} children:
 * Should be:
 * <ImageComponent />
 * <HeroContainer />
 * <IntroContent />
 *
 * @author Alison Haire
 */
/**
 * @component HeroSectionContainer
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Outer frame-mode hero section wrapper for portal layouts.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroOverviewContent, LogoHeroContainer, PortalCardsHeader, PortalContentContainer, PortalHeroContent, PortalSectionHeader, RefCardContainer
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {string} [minHeight="fit-content"] - min Height prop.
 * @example
 * <HeroSectionContainer>Example content</HeroSectionContainer>
 */
const HeroSectionContainer = ({ children, minHeight = "fit-content" }) => {
  return (
    <div
      className="frame-mode-hero-full"
      style={{ minHeight: minHeight, marginBottom: "0.5rem" }}
    >
      {children}
      {/* <HeroImageBackgroundComponent /> */}
      {/* <HeroContainer/> */}
    </div>
  );
};

/*
 * Hero Image Background Component
 *
 * @description
 * A container component for the background of a portal page hero section.
 * The background sits behind the hero header.
 * The background is fixed and will not scroll with the page.
 * Currently a gif is generated looking like a starfield using HeroGif.jsx
 * This component should sit in a className="frame-mode-hero-full" element.
 *
 * @param {React.ReactNode} children:
 * The background image component. Defaults to <Starfield />
 * <Starfield /> is created in components/domain/SHARED/HeroGif.jsx
 *
 * @author Alison Haire
 */
/**
 * @component HeroImageBackgroundComponent
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Absolute-positioned hero background wrapper used behind portal hero content.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroOverviewContent, HeroSectionContainer, LogoHeroContainer, PortalCardsHeader, PortalContentContainer, PortalHeroContent, PortalSectionHeader, RefCardContainer
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @example
 * <HeroImageBackgroundComponent>Example content</HeroImageBackgroundComponent>
 */
const HeroImageBackgroundComponent = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {children}
      {/* <Starfield /> */}
    </div>
  );
};

/*
 * Hero Container
 *
 * @description
 * A container component for the hero content of a portal page.
 * Uses className="frame-mode-container" for centering and margins.
 * The content is centered & has margins and gap set.
 *
 * @param {React.ReactNode} children:
 * The content of the hero section.
 * Should be:
 * <PortalHeroHeader />
 * <IntroContent />
 *
 * @author Alison Haire
 */
/**
 * @component HeroContentContainer
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Centered frame-mode container for hero content stacked over hero backgrounds.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroImageBackgroundComponent, HeroOverviewContent, HeroSectionContainer, LogoHeroContainer, PortalCardsHeader, PortalContentContainer, PortalHeroContent, PortalSectionHeader, RefCardContainer
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @example
 * <HeroContentContainer>Example content</HeroContentContainer>
 */
const HeroContentContainer = ({ children }) => {
  return (
    <div
      className="frame-mode-container"
      style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        marginBottom: 0,
      }}
    >
      <div style={{ position: "relative", height: "100%" }}>{children}</div>
    </div>
  );
};

//unused
/**
 * @component HeroOverviewContent
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Centered hero overview wrapper for introductory portal copy blocks.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroSectionContainer, LogoHeroContainer, PortalCardsHeader, PortalContentContainer, PortalHeroContent, PortalSectionHeader, RefCardContainer
 * @usedIn none
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @example
 * <HeroOverviewContent>Example content</HeroOverviewContent>
 */
const HeroOverviewContent = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem 0",
        width: "80%",
        margin: "0 auto",
        fontSize: "1.1rem",
        color: "var(--page-header-description-color)",
      }}
    >
          {children}
          <div style={{ paddingBottom: "2.5rem" }}> 
              <CustomDivider />
         </div>
    </div>
  );
};

/*
 * Portal Content Container
 *
 * @description
 * A container component for the portal page content.
 * Provides margins and centering for the page content.
 *
 * @param {React.ReactNode} children:
 * The content of the page.
 *
 * @author Alison Haire
 */
/**
 * @component PortalContentContainer
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Frame-mode content wrapper for portal body sections.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroOverviewContent, HeroSectionContainer, LogoHeroContainer, PortalCardsHeader, PortalHeroContent, PortalSectionHeader, RefCardContainer
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @example
 * <PortalContentContainer>Example content</PortalContentContainer>
 */
const PortalContentContainer = ({ children }) => {
    return (
        <div className="frame-mode-container">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>   
                {children}
            </div>
        </div>
    );
};

/*
 * Portal Hero Content Component
 *
 * @description
 * A custom header component for portal pages that supports theming and optional
 * subheadings/descriptions.
 * Wraps the content in a z-index container to sit on top of the
 * background image by default - can be toggled off with zIndex=false
 *
 * @param {string} title: The title of the hero section.
 * @param {string} subtitle: The subtitle of the hero section.
 * @param {string} description: The description of the hero section.
 * @param {React.ReactNode} children: Any additional content to include in the hero section.
 * @param {string} titleColor: The color of the title text.
 * @param {string} subtitleColor: The color of the subtitle text.
 * @param {string} descriptionColor: The color of the description text.
 *
 * @author Alison Haire
 */
/**
 * @component PortalHeroContent
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Hero scaffold for portal landing pages with title, subtitle, supporting content, and optional callouts.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroOverviewContent, HeroSectionContainer, LogoHeroContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader, RefCardContainer
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {boolean} [zIndex=true] - z Index prop.
 * @param {string} [title="Portal Page"] - title prop.
 * @param {string} [subtitle="Build - Explore - Create"] - subtitle prop.
 * @param {string} [subtitleIcon="/snippets/assets/logos/Livepeer-Logo-Symbol-Green-Theme.svg"] - subtitle Icon prop.
 * @param {any} description - description prop.
 * @param {any} refCardLink - ref Card Link prop.
 * @param {any} overview - overview prop.
 * @param {boolean} [divider=true] - divider prop.
 * @param {any} [callout=null] - callout prop.
 * @param {any} titleColor - title Color prop.
 * @param {any} subtitleColor - subtitle Color prop.
 * @param {any} children - children prop.
 * @example
 * <PortalHeroContent description="example" refCardLink="example">Example content</PortalHeroContent>
 */
const PortalHeroContent = ({
  zIndex = true, //Not working currently
  title = "Portal Page",
  subtitle = "Build - Explore - Create",
  subtitleIcon = "/snippets/assets/logos/Livepeer-Logo-Symbol-Green-Theme.svg",
  description,
  refCardLink,
  overview,
  divider = true,
  callout=null,
  titleColor,
  subtitleColor,
  children,
}) => {
  return (
    // zIndex &&
    <div style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        <H1 align="center"
        >
          {title}
        </H1>
        {subtitle && (
          //   wrapper for icons
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            {subtitleIcon && (
              <span
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <Icon icon={subtitleIcon} size={20} />
              </span>
            )}
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                opacity: 1,
                color: subtitleColor || "var(--accent)",
              }}
            >
              {subtitle} {/* flipped icon */}
              {subtitleIcon && (
                <span
                  style={{
                    display: "inline-block",
                    transform: "scaleX(-1)",
                    marginLeft: "0.5rem",
                  }}
                >
                  <Icon icon={subtitleIcon} size={20} />
                </span>
              )}
            </h2>
          </div>
        )}
        {description && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem 0",
              width: "80%",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "var(--text)",
              paddingTop: "3rem",
            }}
          >
            {description}
          </div>
        )}
        {refCardLink && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              margin: "0 auto",
              marginTop: "1rem",
            }}
           >
            {refCardLink}
          </div>
              )}
         <div style={{ width: "80%", margin: "0 auto", paddingBottom: "1rem" }}>
          {callout && callout}
          {divider ? <CustomDivider /> : null }
          {/* <CustomDivider /> */}
        </div>
        {overview && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem 0",
              width: "80%",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "var(--text)",
            }}
          >
            {overview}
          </div>
              )}
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "1.5rem", paddingBottom: "0.1rem" }}>
          {children ? <>{children}<CustomDivider /></> :  <CustomDivider />}
        </div>
        </div>
      {/* zIndex && */}
    </div>
  );
};

/**
 * @component PortalCardsHeader
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Header wrapper for portal card groups and section intros.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroOverviewContent, HeroSectionContainer, LogoHeroContainer, PortalContentContainer, PortalHeroContent, PortalSectionHeader, RefCardContainer
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {any} title - title prop.
 * @example
 * <PortalCardsHeader title="example">Example content</PortalCardsHeader>
 */
const PortalCardsHeader = ({ children, title }) => {
    return (
    <div style={{ alignContent: "center", justifyContent: "center" }}>
        <H2 icon="signs-post" iconSize={32} >
            {title}
        </H2>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.1rem" }}>
                <span style={{ lineHeight: "1", color: "var(--text-primary)", opacity: 1, fontStyle: "italic", fontSize: "1.2rem" }}>
                    Choose Your Mission:
                </span>
                {children}
        </div>
    </div>
  );
};

/**
 * @component PortalSectionHeader
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Section heading wrapper for portal subsections with optional icon treatment.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroOverviewContent, HeroSectionContainer, LogoHeroContainer, PortalCardsHeader, PortalContentContainer, PortalHeroContent, RefCardContainer
 * @usedIn v2/cn/community/community-portal.mdx, v2/community/community-portal.mdx, v2/es/community/community-portal.mdx, v2/fr/community/community-portal.mdx, v2/lpt/token-portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {any} title - title prop.
 * @param {any} icon - icon prop.
 * @example
 * <PortalSectionHeader title="example" icon="example">Example content</PortalSectionHeader>
 */
const PortalSectionHeader = ({ children, title, icon }) => {
    return (
    <div style={{ alignContent: "center", justifyContent: "center", gap: "1rem 0" }}>
        <H3 icon={icon} iconSize={32} >
            {title}
        </H3>
        {children}
    </div>
  );
};

/*
 * Logo Hero Container Component
 *
 * @description
 * A component for displaying a logo in the hero section of a portal page.
 * Has:
 * - A wrapper container for centering & constraining the image size
 * - A Centered Image with objectFit: "contain" to resize the logo.
 *
 * @param {string} src: The source of the logo image. Defaults to theme mode aware Livepeer Logo in "/snippets/assets/logos/Livepeer-Logo-Full-Theme.svg"
 * @param {string} alt: The alt text for the logo image. Defaults to "Livepeer Logo"
 * @param {string} height: The height of the logo image. Defaults to "100px".
 * @param {string} width: The width of the logo image. Defaults to "100%".
 * @param {string} margin: The margin around the logo image. Defaults to "2rem auto".
 * @param {string} imgHeight: The height of the logo image. Defaults to "100%".
 * @param {string} imgWidth: The width of the logo image. Defaults to "auto".
 * @param {string} objectFit: The object-fit property of the logo image. Defaults to "contain".
 *
 * @author Alison Haire
 */
/**
 * @component LogoHeroContainer
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Portal hero logo wrapper that centers a themed brand asset above hero content.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroOverviewContent, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalHeroContent, PortalSectionHeader, RefCardContainer
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {string} [src="/snippets/assets/logos/Livepeer-Logo-Full-Theme.svg"] - src prop.
 * @param {string} [alt="Livepeer Logo"] - alt prop.
 * @param {string} [width="100%"] - width prop.
 * @param {string} [margin="1rem auto 0 auto"] - margin prop.
 * @param {string} [imgHeight="20px"] - img Height prop.
 * @param {string} [imgWidth="auto"] - img Width prop.
 * @param {string} [objectFit="contain"] - object Fit prop.
 * @param {any} children - children prop.
 * @example
 * <LogoHeroContainer>Example content</LogoHeroContainer>
 */
const LogoHeroContainer = ({
  src = "/snippets/assets/logos/Livepeer-Logo-Full-Theme.svg",
  alt = "Livepeer Logo",
  width = "100%",
  margin = "1rem auto 0 auto",
  imgHeight = "20px",
  imgWidth = "auto",
  objectFit = "contain",
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: margin,
        width: width,
        paddingBottom: children ? "3.5rem" : "0",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={src}
          alt={alt}
          style={{ height: imgHeight, width: imgWidth, objectFit: objectFit, display: "block" }}
        />
        {children &&
          <div style={{
            position: "absolute",
            top: "100%",
            right: "0",
            fontSize: "2rem",
            color: "var(--accent)",
            fontWeight: "500",
            lineHeight: "1",
            paddingTop:"0.5rem"
          }}>
            {children}
          </div>
        }
      </div>
    </div>
  );
};

/**
 * @component RefCardContainer
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Container for portal reference cards and related CTA blocks.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies HeroContentContainer, HeroImageBackgroundComponent, HeroOverviewContent, HeroSectionContainer, LogoHeroContainer, PortalCardsHeader, PortalContentContainer, PortalHeroContent, PortalSectionHeader
 * @usedIn none
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @example
 * <RefCardContainer>Example content</RefCardContainer>
 */
const RefCardContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export {
    HeroImageBackgroundComponent,
    HeroContentContainer,
    PortalContentContainer,
    PortalHeroContent,
    LogoHeroContainer,
    RefCardContainer,
    HeroOverviewContent,
    HeroSectionContainer,
    PortalCardsHeader,
    PortalSectionHeader
};
