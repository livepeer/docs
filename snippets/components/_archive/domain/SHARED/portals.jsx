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
