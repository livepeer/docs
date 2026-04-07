# Snippets/Assets — Overall Review

> **Purpose:** Production-ready, easy to govern and maintain.
> **Thread:** Cleanup | **Date opened:** 2026-04-04

---

# Snippets

Snippets are used (mintlify description)
In this repo snippets contain...

# Snippets Repo Structure - Planned Outcome

<!-- Convert to tree -->
<!-- will fill in folders & files as we do each top level folder -->

/assets
/components
/composables
/data
/templates (potentially align with composables)
guide.mdx (canonical human-authored framework, placement rules, and folder metadata)
snippets-registry.mdx (generated tree and folder registry)

deprecated / folded in elsewhere / unclassified now
/automationsI
/snippetsWiki

# Snippets Per folder

**Assets**

- Media

**Components**

**Composables**

**Data**

**Templates**

## 1. Current Folders (Audit Phase)

### Mintlify Tree

<Tree>
  <Tree.Folder name="snippets" defaultOpen>
    <Tree.File name="README.md" />
      <Tree.File name="guide.mdx" />
      <Tree.File name="snippets-registry.mdx" />
    <Tree.Folder name="_workspace" defaultOpen>
      <Tree.Folder name="archive" />
      <Tree.Folder name="asset-staging" />
      <Tree.File name="snippets-review.md" />
    </Tree.Folder>
    <Tree.Folder name="assets" defaultOpen>
      <Tree.File name="catalog.mdx" />
      <Tree.Folder name="logos">
        <Tree.Folder name="custom" />
        <Tree.Folder name="livepeer" />
        <Tree.Folder name="solutions" />
      </Tree.Folder>
      <Tree.Folder name="media">
        <Tree.Folder name="heros" />
        <Tree.Folder name="og-images" />
        <Tree.Folder name="images" />
        <Tree.Folder name="videos" />
        <Tree.Folder name="files" />
      </Tree.Folder>
    </Tree.Folder>
    <Tree.Folder name="data" defaultOpen>
      <Tree.Folder name="showcase-feed">
        <Tree.File name="showcaseData.jsx" />
      </Tree.Folder>
      <Tree.Folder name="social-feeds">
        <Tree.File name="discordAnnouncementsData.jsx" />
        <Tree.File name="forumData.jsx" />
        <Tree.File name="ghostBlogData.jsx" />
        <Tree.File name="lumaEventsData.jsx" />
        <Tree.Folder name="transformers">
          <Tree.File name="filterVideos.js" />
        </Tree.Folder>
        <Tree.File name="youtubeData.jsx" />
      </Tree.Folder>
      <Tree.Folder name="social-feed-solutions">
        <Tree.Folder name="daydream" />
        <Tree.Folder name="embody" />
        <Tree.Folder name="frameworks" />
        <Tree.Folder name="livepeer-studio" />
        <Tree.Folder name="streamplace" />
      </Tree.Folder>
    </Tree.Folder>
    <Tree.Folder name="automations" defaultOpen>
      <Tree.Folder name="blog" />
      <Tree.Folder name="discord" />
      <Tree.Folder name="forum" />
      <Tree.Folder name="globals">
        <Tree.File name="README.mdx" />
        <Tree.File name="globals.jsx" />
        <Tree.File name="globals.mdx" />
      </Tree.Folder>
      <Tree.Folder name="luma" />
      <Tree.Folder name="showcase" />
      <Tree.Folder name="solutions" />
      <Tree.Folder name="youtube" />
    </Tree.Folder>
    <Tree.Folder name="components" defaultOpen>
      <Tree.File name="README.md" />
      <Tree.File name="component-composition-template.mdx" />
      <Tree.File name="component-framework-realignment-note.md" />
      <Tree.File name="components-catalog.mdx" />
      <Tree.Folder name="config">
        <Tree.File name="MermaidColours.jsx" />
      </Tree.Folder>
      <Tree.Folder name="displays">
        <Tree.Folder name="code">
          <Tree.File name="Code.jsx" />
        </Tree.Folder>
        <Tree.Folder name="diagrams">
          <Tree.File name="ZoomableDiagram.jsx" />
        </Tree.Folder>
        <Tree.Folder name="examples">
          <Tree.File name="code-examples.mdx" />
          <Tree.File name="diagrams-examples.mdx" />
          <Tree.File name="embed-examples.mdx" />
          <Tree.File name="external-content-examples.mdx" />
          <Tree.File name="quote-examples.mdx" />
          <Tree.File name="quotes-examples.mdx" />
          <Tree.File name="response-field-examples.mdx" />
          <Tree.File name="response-fields-examples.mdx" />
          <Tree.File name="video-examples.mdx" />
          <Tree.File name="zoomable-diagram-examples.mdx" />
        </Tree.Folder>
        <Tree.Folder name="pages">
          <Tree.File name="BlockchainContractsRenderers.jsx" />
        </Tree.Folder>
        <Tree.Folder name="quotes">
          <Tree.File name="Quote.jsx" />
        </Tree.Folder>
        <Tree.Folder name="response-fields">
          <Tree.File name="ResponseField.jsx" />
        </Tree.Folder>
        <Tree.Folder name="tables">
          <Tree.File name="HistoricalContractTable.jsx" />
        </Tree.Folder>
        <Tree.Folder name="video">
          <Tree.File name="Video.jsx" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="elements">
        <Tree.Folder name="a11y">
          <Tree.File name="A11y.jsx" />
        </Tree.Folder>
        <Tree.Folder name="buttons">
          <Tree.File name="Buttons.jsx" />
        </Tree.Folder>
        <Tree.Folder name="callouts">
          <Tree.File name="PreviewCallouts.jsx" />
        </Tree.Folder>
        <Tree.Folder name="examples">
          <Tree.File name="a11y-examples.mdx" />
          <Tree.File name="buttons-examples.mdx" />
          <Tree.File name="callouts-examples.mdx" />
          <Tree.File name="divider-examples.mdx" />
          <Tree.File name="icons-examples.mdx" />
          <Tree.File name="image-examples.mdx" />
          <Tree.File name="images-examples.mdx" />
          <Tree.File name="links-examples.mdx" />
          <Tree.File name="math-examples.mdx" />
          <Tree.File name="preview-callouts-examples.mdx" />
          <Tree.File name="social-examples.mdx" />
          <Tree.File name="social-links-examples.mdx" />
          <Tree.File name="spacing-examples.mdx" />
          <Tree.File name="text-examples.mdx" />
        </Tree.Folder>
        <Tree.Folder name="icons">
          <Tree.File name="Icons.jsx" />
        </Tree.Folder>
        <Tree.Folder name="images">
          <Tree.File name="Image.jsx" />
        </Tree.Folder>
        <Tree.Folder name="links">
          <Tree.File name="Links.jsx" />
        </Tree.Folder>
        <Tree.Folder name="math">
          <Tree.File name="Math.jsx" />
        </Tree.Folder>
        <Tree.Folder name="social">
          <Tree.File name="SocialLinks.jsx" />
        </Tree.Folder>
        <Tree.Folder name="spacing">
          <Tree.File name="Divider.jsx" />
          <Tree.File name="Spacer.jsx" />
        </Tree.Folder>
        <Tree.Folder name="text">
          <Tree.File name="CustomCardTitle.jsx" />
          <Tree.File name="Text.jsx" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="integrators">
        <Tree.Folder name="blog">
          <Tree.File name="Data.jsx" />
        </Tree.Folder>
        <Tree.Folder name="embeds">
          <Tree.File name="DataEmbed.jsx" />
          <Tree.File name="ExternalContent.jsx" />
        </Tree.Folder>
        <Tree.Folder name="examples">
          <Tree.File name="blog-examples.mdx" />
          <Tree.File name="coingecko-examples.mdx" />
          <Tree.File name="embeds-examples.mdx" />
          <Tree.File name="feeds-examples.mdx" />
          <Tree.File name="release-examples.mdx" />
          <Tree.File name="video-data-examples.mdx" />
        </Tree.Folder>
        <Tree.Folder name="feeds">
          <Tree.File name="Coingecko.jsx" />
          <Tree.File name="ContractVerifier.jsx" />
          <Tree.File name="Release.jsx" />
          <Tree.File name="ShowcaseCards.jsx" />
          <Tree.File name="contractVerifierData.cjs" />
          <Tree.File name="contractVerifierData.js" />
        </Tree.Folder>
        <Tree.Folder name="video-data">
          <Tree.File name="VideoData.jsx" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="scaffolding">
        <Tree.Folder name="examples">
          <Tree.File name="frame-mode-examples.mdx" />
          <Tree.File name="heroes-examples.mdx" />
          <Tree.File name="portals-examples.mdx" />
        </Tree.Folder>
        <Tree.Folder name="frame-mode">
          <Tree.File name="FrameMode.jsx" />
        </Tree.Folder>
        <Tree.Folder name="heroes">
          <Tree.File name="HeroGif.jsx" />
        </Tree.Folder>
        <Tree.Folder name="page-containers" />
        <Tree.Folder name="portals">
          <Tree.File name="Portals.jsx" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="wrappers">
        <Tree.Folder name="accordions">
          <Tree.File name="AccordionGroupList.jsx" />
          <Tree.File name="AccordionLayout.jsx" />
        </Tree.Folder>
        <Tree.Folder name="badges">
          <Tree.File name="Badges.jsx" />
        </Tree.Folder>
        <Tree.Folder name="cards">
          <Tree.File name="CustomCards.jsx" />
          <Tree.File name="ShowcaseCards.jsx" />
          <Tree.File name="SolutionCard.jsx" />
        </Tree.Folder>
        <Tree.Folder name="containers">
          <Tree.File name="Containers.jsx" />
          <Tree.File name="Layout.jsx" />
          <Tree.File name="LazyLoad.jsx" />
          <Tree.File name="ScrollBox.jsx" />
        </Tree.Folder>
        <Tree.Folder name="custom">
          <Tree.File name="SolutionItem.jsx" />
        </Tree.Folder>
        <Tree.Folder name="data">
          <Tree.File name="workflows.jsx" />
        </Tree.Folder>
        <Tree.Folder name="examples">
          <Tree.File name="README-custom-view.md" />
          <Tree.File name="accordions-examples.mdx" />
          <Tree.File name="card-carousel-examples.mdx" />
          <Tree.File name="cards-examples.mdx" />
          <Tree.File name="containers-examples.mdx" />
          <Tree.File name="grids-examples.mdx" />
          <Tree.File name="lists-examples.mdx" />
          <Tree.File name="quad-grid-examples.mdx" />
          <Tree.File name="showcase-cards-examples.mdx" />
          <Tree.File name="steps-examples.mdx" />
          <Tree.File name="table-examples.mdx" />
          <Tree.File name="tables-examples.mdx" />
        </Tree.Folder>
        <Tree.Folder name="grids">
          <Tree.File name="CardCarousel.jsx" />
          <Tree.File name="QuadGrid.jsx" />
        </Tree.Folder>
        <Tree.Folder name="lists">
          <Tree.File name="ListSteps.jsx" />
          <Tree.File name="Lists.jsx" />
        </Tree.Folder>
        <Tree.Folder name="steps">
          <Tree.File name="Steps.jsx" />
        </Tree.Folder>
        <Tree.Folder name="tables">
          <Tree.File name="ApiBaseUrlsTable.mdx" />
          <Tree.File name="SearchTable.jsx" />
          <Tree.File name="Table.jsx" />
          <Tree.File name="Tables.jsx" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="x-archive">
        <Tree.File name="CATALOG.md" />
        <Tree.Folder name="notes" />
      </Tree.Folder>
    </Tree.Folder>
    <Tree.Folder name="composables" defaultOpen>
      <Tree.File name="README.md" />
      <Tree.File name="composables-catalog.mdx" />
      <Tree.Folder name="pages">
        <Tree.Folder name="about">
          <Tree.Folder name="concepts">
            <Tree.File name="actors.mdx" />
            <Tree.File name="network.mdx" />
            <Tree.File name="overview.mdx" />
            <Tree.File name="protocol.mdx" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="canonical">
          <Tree.File name="livepeer-contract-addresses-data.json" />
          <Tree.File name="livepeer-contract-addresses.mdx" />
          <Tree.File name="verify-contract-addresses.mdx" />
          <Tree.Folder name="data">
            <Tree.File name="blockchain-contracts-data.jsx" />
            <Tree.File name="livepeer-contract-addresses-page-data.jsx" />
            <Tree.File name="livepeer-contract-addresses-page-model.jsx" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="gpu">
          <Tree.Folder name="diagrams">
            <Tree.File name="orchestratorRole.mdx" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="home">
          <Tree.File name="project-showcase.mdx" />
        </Tree.Folder>
        <Tree.Folder name="internal">
          <Tree.File name="docs-philosophy.mdx" />
        </Tree.Folder>
        <Tree.Folder name="shared">
          <Tree.File name=".last_fetch" />
          <Tree.File name="FrameModePageHeader.mdx" />
          <Tree.File name="awesome-livepeer-readme.mdx" />
          <Tree.File name="box-additional-config.mdx" />
          <Tree.File name="eth-account-setup.mdx" />
          <Tree.File name="gwid-readme.mdx" />
          <Tree.File name="whitepaper.mdx" />
          <Tree.File name="wiki-readme.mdx" />
        </Tree.Folder>
        <Tree.Folder name="unclassified">
          <Tree.File name="accordion-faq-section.mdx" />
          <Tree.File name="accordion-glossary-section.mdx" />
          <Tree.File name="accordion-troubleshooting-section.mdx" />
          <Tree.File name="overview-intro-section.mdx" />
          <Tree.File name="prerequisites-section.mdx" />
          <Tree.File name="related-resources-section.mdx" />
          <Tree.File name="steps-section.mdx" />
          <Tree.File name="validation-section.mdx" />
        </Tree.Folder>
      </Tree.Folder>
    </Tree.Folder>
    <Tree.Folder name="data" defaultOpen>
      <Tree.File name="data-catalog.mdx" />
      <Tree.Folder name="API">
        <Tree.File name="README.md" />
      </Tree.Folder>
      <Tree.Folder name="about">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="changelogs">
        <Tree.File name="contractAddressesData.jsx" />
      </Tree.Folder>
      <Tree.Folder name="community">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="contract-addresses">
        <Tree.File name="_branch-watch-state.json" />
        <Tree.File name="_health-checks.json" />
        <Tree.File name="blockchainContractsPageData.json" />
        <Tree.File name="blockchainContractsPageData.jsx" />
        <Tree.File name="contractAddressesData.json" />
        <Tree.File name="contractAddressesData.jsx" />
        <Tree.File name="index.jsx" />
        <Tree.File name="research.md" />
        <Tree.File name="view-model.js" />
        <Tree.File name="view-model.jsx" />
      </Tree.Folder>
      <Tree.Folder name="delegators">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="developers">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="gateways">
        <Tree.File name="configuration-flags.jsx" />
        <Tree.File name="hrefs.jsx" />
        <Tree.File name="notes.mdx" />
        <Tree.File name="version.jsx" />
      </Tree.Folder>
      <Tree.File name="gateways.jsx" />
      <Tree.Folder name="home">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="internal">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="orchestrators">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="reference-maps">
        <Tree.File name="icon-map.jsx" />
      </Tree.Folder>
      <Tree.Folder name="references">
        <Tree.File name="chainlist.jsx" />
      </Tree.Folder>
      <Tree.Folder name="resources">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="snapshots">
        <Tree.File name="coingecko-arbitrum.json" />
        <Tree.File name="coingecko-livepeer.json" />
      </Tree.Folder>
      <Tree.Folder name="solutions">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="unknown">
        <Tree.File name="hrefs.jsx" />
      </Tree.Folder>
      <Tree.Folder name="variables">
        <Tree.File name="about.mdx" />
        <Tree.File name="community.mdx" />
        <Tree.File name="delegators.mdx" />
        <Tree.File name="developers.mdx" />
        <Tree.File name="gateways.mdx" />
        <Tree.File name="home.mdx" />
        <Tree.File name="orchestrators.mdx" />
        <Tree.File name="pages.mdx" />
        <Tree.File name="resources.mdx" />
      </Tree.Folder>
      <Tree.File name="variables.mdx" />
    </Tree.Folder>
    <Tree.Folder name="snippetsWiki" defaultOpen>
      <Tree.File name="README.md" />
      <Tree.File name="index.mdx" />
      <Tree.File name="theme-colors.mdx" />
      <Tree.Folder name="componentLibrary">
        <Tree.File name="index.mdx" />
        <Tree.Folder name="examples">
          <Tree.File name="frame-mode.mdx" />
          <Tree.File name="tip-with-arrow-examples.mdx" />
        </Tree.Folder>
      </Tree.Folder>
    </Tree.Folder>
    <Tree.Folder name="templates" defaultOpen>
      <Tree.File name="README.mdx" />
      <Tree.File name="templates-catalog.mdx" />
      <Tree.Folder name="blocks">
        <Tree.File name="comparison-matrix.mdx" />
        <Tree.File name="comparison-table.mdx" />
        <Tree.File name="related-pages-cards.mdx" />
        <Tree.File name="related-pages-cta.mdx" />
      </Tree.Folder>
      <Tree.Folder name="docs-guide">
        <Tree.File name="component-catalog-template.mdx" />
        <Tree.File name="feature-map-page.mdx" />
        <Tree.File name="framework-page.mdx" />
        <Tree.File name="policy-page.mdx" />
        <Tree.File name="script-catalog.mdx" />
        <Tree.File name="tooling-reference-page.mdx" />
      </Tree.Folder>
      <Tree.Folder name="pages">
        <Tree.File name="page-composition-framework.mdx" />
        <Tree.Folder name="canonical">
          <Tree.File name="template-catalog.mdx" />
        </Tree.Folder>
        <Tree.Folder name="concepts-overviews">
          <Tree.File name="overview-page.mdx" />
        </Tree.Folder>
        <Tree.Folder name="data-imports">
          <Tree.File name="social-data-page.mdx" />
        </Tree.Folder>
        <Tree.Folder name="domain-pages">
          <Tree.File name="solutions-overview-template.mdx" />
        </Tree.Folder>
        <Tree.Folder name="landing-and-navigation">
          <Tree.File name="landing-frame-page.mdx" />
          <Tree.File name="navigation-page.mdx" />
          <Tree.File name="portal-page.mdx" />
        </Tree.Folder>
        <Tree.Folder name="repo-documentation">
          <Tree.File name="source-of-truth-template.mdx" />
          <Tree.File name="source-of-truth.mdx" />
        </Tree.Folder>
        <Tree.Folder name="resources">
          <Tree.File name="changelog-automated-template.mdx" />
          <Tree.File name="changelog-solutions-template.mdx" />
          <Tree.File name="changelog-template.mdx" />
          <Tree.File name="openapi-endpoint-page.mdx" />
          <Tree.File name="reference-page.mdx" />
          <Tree.Folder name="compendium">
            <Tree.File name="faq-page.mdx" />
            <Tree.File name="glossary-consolidated-template.mdx" />
            <Tree.File name="glossary-consolidated.mdx" />
            <Tree.File name="glossary-tab-template.mdx" />
            <Tree.File name="glossary-tab.mdx" />
            <Tree.File name="troubleshooting-page.mdx" />
          </Tree.Folder>
          <Tree.Folder name="technical-reference">
            <Tree.File name="openapi-endpoint-page.mdx" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="setup-and-code-layouts">
          <Tree.File name="multi-view-page.mdx" />
        </Tree.Folder>
        <Tree.Folder name="tutorial-and-guides">
          <Tree.File name="how-to-page.mdx" />
          <Tree.File name="tutorial-page.mdx" />
          <Tree.File name="tutorial-template.md" />
          <Tree.File name="tutorial.mdx" />
        </Tree.Folder>
      </Tree.Folder>
    </Tree.Folder>
  </Tree.Folder>
</Tree>

**Assets**

<Tree>
    <Tree.Folder name="assets" defaultOpen>
    <!--  -->
      <Tree.File name="README.mdx" />
      <Tree.File name="assets-catalog.mdx" />
      <Tree.File name="favicon.png" />
      <Tree.Folder name="data">
        <Tree.File name="protocol-overview.html" />
      </Tree.Folder>
      <Tree.Folder name="domain">
        <Tree.Folder name="00_HOME">
          <Tree.File name="Livepeer-Logo-Full-Dark.svg" />
          <Tree.File name="Livepeer-Logo-Full-Light.svg" />
          <Tree.File name="LivepeerStats.png" />
          <Tree.File name="livepeer-logo.png" />
          <Tree.File name="livepeer_usage_messari.png" />
          <Tree.File name="whitepaper_diagram.png" />
          <Tree.Folder name="Hero_Images">
            <Tree.File name="hero_about.png" />
            <Tree.File name="hero_ai_run.png" />
            <Tree.File name="hero_community.png" />
            <Tree.File name="hero_delegators.png" />
            <Tree.File name="hero_developer.png" />
            <Tree.File name="hero_developer1.png" />
            <Tree.File name="hero_developer_logo.png" />
            <Tree.File name="hero_gateways.png" />
            <Tree.File name="hero_gpu.png" />
            <Tree.File name="hero_help.png" />
            <Tree.File name="hero_logo_developer.png" />
            <Tree.File name="hero_logo_developer_sml.png" />
            <Tree.File name="hero_logo_new.png" />
            <Tree.File name="hero_opportunity.png" />
            <Tree.File name="hero_partner.png" />
            <Tree.File name="hero_reference.png" />
            <Tree.File name="hero_research.png" />
            <Tree.File name="hero_researchers.png" />
            <Tree.File name="hero_showcase.png" />
            <Tree.File name="hero_video_stream.png" />
            <Tree.File name="hero_word_NEW.png" />
            <Tree.File name="hero_word_developer.png" />
          </Tree.Folder>
          <Tree.Folder name="home">
            <Tree.File name="primerImage.svg" />
          </Tree.Folder>
          <Tree.Folder name="showcase">
            <Tree.Folder name="nytv.live">
              <Tree.Folder name="logo" />
              <Tree.Folder name="mediaSrc" />
            </Tree.Folder>
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="01_ABOUT">
          <Tree.File name="ProtocolNodeDiagram.png" />
        </Tree.Folder>
        <Tree.Folder name="02_COMMUNITY">
          <Tree.Folder name="hero-images">
            <Tree.File name="Hero_90_Youtube.png" />
            <Tree.File name="Hero_Blogging.png" />
            <Tree.File name="Hero_Calendar.png" />
            <Tree.File name="Hero_Events.png" />
            <Tree.File name="Hero_Follow.png" />
            <Tree.File name="Hero_Forum.png" />
            <Tree.File name="Hero_Github.png" />
            <Tree.File name="Hero_Medium.png" />
            <Tree.File name="Hero_Meeting.png" />
            <Tree.File name="Hero_Newsletter.png" />
            <Tree.File name="Hero_Reddit.png" />
            <Tree.File name="Hero_Telegran.png" />
            <Tree.File name="Hero_Yotube.png" />
            <Tree.File name="hero-x-1.png" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="04_GATEWAYS">
          <Tree.File name="view-dropdown.png" />
          <Tree.Folder name="code_examples">
            <Tree.File name="eliteproxy_launch.example..json" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="10_PRODUCTS">
          <Tree.Folder name="Embody">
            <Tree.Folder name="Avatars">
              <Tree.File name="girl2.png" />
            </Tree.Folder>
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="SHARED">
          <Tree.File name="LivepeerDocsHero.svg" />
          <Tree.File name="LivepeerDocsLogo.svg" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="logos">
        <Tree.File name="Livepeer-Logo-Full-Dark.svg" />
        <Tree.File name="Livepeer-Logo-Full-Light.svg" />
        <Tree.File name="Livepeer-Logo-Full-Theme.svg" />
        <Tree.File name="Livepeer-Logo-Symbol-Dark.svg" />
        <Tree.File name="Livepeer-Logo-Symbol-Green-Theme.svg" />
        <Tree.File name="Livepeer-Logo-Symbol-Green.svg" />
        <Tree.File name="Livepeer-Logo-Symbol-Light.svg" />
        <Tree.File name="Livepeer-Logo-Symbol-Mask.svg" />
        <Tree.File name="Livepeer-Logo-Symbol-Theme.svg" />
        <Tree.File name="Livepeer-Logo-Symbol.svg" />
        <Tree.File name="dark.svg" />
        <Tree.File name="light.svg" />
        <Tree.Folder name="Arbitrum">
          <Tree.File name="Arbitrum-Logo-Theme.svg" />
          <Tree.File name="Arbitrum-Logo-White.png" />
          <Tree.File name="Arbitrum-Logo-White.svg" />
          <Tree.File name="Arbitrum-Logo.svg" />
        </Tree.Folder>
        <Tree.Folder name="products">
          <Tree.File name="SolutionProviders.png" />
          <Tree.File name="daydream-logo-dark.svg" />
          <Tree.File name="embody-logo.png" />
          <Tree.File name="embody-logo.svg" />
          <Tree.File name="embodyLogo.png" />
          <Tree.File name="frameworks-logo.svg" />
          <Tree.File name="livepeer-studio-logo.svg" />
          <Tree.File name="streamplace-cube.png" />
          <Tree.File name="streamplace-logo.svg" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="media">
        <Tree.Folder name="heros">
          <Tree.File name="Hero_Livepeer_Full.png" />
          <Tree.File name="Hero_Livepeer_Full_sml.png" />
          <Tree.File name="hero_about.png" />
          <Tree.File name="hero_community.png" />
          <Tree.File name="hero_delegators.png" />
          <Tree.File name="hero_developer.png" />
          <Tree.File name="hero_developer1.png" />
          <Tree.File name="hero_developer_logo.png" />
          <Tree.File name="hero_gateways.png" />
          <Tree.File name="hero_gpu.png" />
          <Tree.File name="hero_help.png" />
          <Tree.File name="hero_logo_developer.png" />
          <Tree.File name="hero_logo_developer_sml.png" />
          <Tree.File name="hero_logo_new.png" />
          <Tree.File name="hero_opportunity.png" />
          <Tree.File name="hero_partner.png" />
          <Tree.File name="hero_reference.png" />
          <Tree.File name="hero_researchers.png" />
          <Tree.File name="hero_showcase.png" />
          <Tree.File name="hero_word_NEW.png" />
          <Tree.File name="hero_word_developer.png" />
          <Tree.Folder name="solutions">
            <Tree.Folder name="daydream">
              <Tree.File name="Daydream_Hero_Background.png" />
              <Tree.File name="Daydream_Hero_Explore-Workflows.png" />
              <Tree.File name="Daydream_Hero_Get-Started.png" />
              <Tree.File name="Daydream_Hero_Quickstart.png" />
              <Tree.File name="Daydream_Hero_Try-App.png" />
              <Tree.File name="Daydream_Hero_Workflows.png" />
            </Tree.Folder>
            <Tree.Folder name="embody">
              <Tree.File name="Embody_Hero_Agent-App.png" />
              <Tree.File name="Embody_Hero_Background.png" />
              <Tree.File name="Embody_Hero_Builders.png" />
              <Tree.File name="Embody_Hero_Human-App.png" />
              <Tree.File name="Embody_Hero_Updates.png" />
            </Tree.Folder>
            <Tree.Folder name="frameworks">
              <Tree.File name="Frameworks_Hero_Background.png" />
              <Tree.File name="Frameworks_Hero_Docs.png" />
              <Tree.File name="Frameworks_Hero_Proposal.png" />
              <Tree.File name="Frameworks_Hero_Quickstart.png" />
              <Tree.File name="Frameworks_Hero_Try-App.png" />
            </Tree.Folder>
            <Tree.Folder name="streamplace">
              <Tree.File name="Streamplace_Hero_Background.png" />
              <Tree.File name="Streamplace_Hero_Dashboard.png" />
              <Tree.File name="Streamplace_Hero_Docs.png" />
              <Tree.File name="Streamplace_Hero_Integrate.png" />
              <Tree.File name="Streamplace_Hero_Run-Node.png" />
            </Tree.Folder>
            <Tree.Folder name="studio">
              <Tree.File name="Studio_Hero_Background.png" />
              <Tree.File name="Studio_Hero_Dashboard.png" />
              <Tree.File name="Studio_Hero_Quickstart.png" />
              <Tree.File name="Studio_Hero_Studio-API.png" />
              <Tree.File name="Studio_Hero_Studio-CLI.png" />
            </Tree.Folder>
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="images">
          <Tree.File name="DelegatorImg.avif" />
          <Tree.File name="daydream-hero-demo.gif" />
          <Tree.File name="gpu-callout.png" />
          <Tree.File name="livepeer-stats.png" />
          <Tree.File name="nytv-logo.png" />
          <Tree.Folder name="showcase">
            <Tree.File name="nytv-logo.svg" />
          </Tree.Folder>
        </Tree.Folder>
        <Tree.Folder name="videos">
          <Tree.File name="Embody-placeholder.mp4" />
          <Tree.File name="daydream-hero-demo.mp4" />
          <Tree.File name="frameworks-placeholder.mp4" />
          <Tree.File name="livepeer-studio-hero-demo.mp4" />
          <Tree.File name="streamplace-placeholder.mp4" />
          <Tree.File name="studio-hero-video.mp4" />
          <Tree.File name="the-lott-hero-video.mp4" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="scripts">
        <Tree.Folder name="n8n">
          <Tree.File name="README-discord-issue-intake-workflow.md" />
          <Tree.File name="README-project-showcase-application-workflow.md" />
        </Tree.Folder>
      </Tree.Folder>
      <Tree.Folder name="site">
        <Tree.File name="favicon.png" />
        <Tree.File name="sitemap-ai.xml" />
        <Tree.File name="united-kingdom-flag-icon.svg" />
        <Tree.Folder name="favicon">
          <Tree.File name="apple-touch-icon.png" />
          <Tree.File name="favicon-96x96.png" />
          <Tree.File name="favicon.ico" />
          <Tree.File name="favicon.svg" />
          <Tree.File name="site.webmanifest" />
          <Tree.File name="web-app-manifest-192x192.png" />
          <Tree.File name="web-app-manifest-512x512.png" />
        </Tree.Folder>
        <Tree.Folder name="images">
          <Tree.File name="layered-image.webp" />
        </Tree.Folder>
        <Tree.Folder name="og-image">
          <Tree.File name="fallback.png" />
          <Tree.File name="manifest.json" />
          <Tree.Folder name="cn">
            <Tree.File name="about.png" />
            <Tree.File name="community.png" />
            <Tree.File name="delegators.png" />
            <Tree.File name="developers.png" />
            <Tree.File name="gateways.png" />
            <Tree.File name="gpu-old.png" />
            <Tree.File name="gpu-v2-dev.png" />
            <Tree.File name="home.png" />
            <Tree.File name="internal-hub.png" />
            <Tree.File name="orchestrators.png" />
            <Tree.File name="page-blockchain-contracts.png" />
            <Tree.File name="page-livepeer-contract-addresses.png" />
            <Tree.File name="resource-hub.png" />
            <Tree.File name="solutions.png" />
          </Tree.Folder>
          <Tree.Folder name="en">
            <Tree.File name="about.png" />
            <Tree.File name="community.png" />
            <Tree.File name="delegators.png" />
            <Tree.File name="developers.png" />
            <Tree.File name="gateways.png" />
            <Tree.File name="gpu-old.png" />
            <Tree.File name="gpu-v2-dev.png" />
            <Tree.File name="home.png" />
            <Tree.File name="internal-hub.png" />
            <Tree.File name="orchestrators.png" />
            <Tree.File name="page-blockchain-contracts.png" />
            <Tree.File name="page-livepeer-contract-addresses.png" />
            <Tree.File name="resource-hub.png" />
            <Tree.File name="solutions.png" />
          </Tree.Folder>
          <Tree.Folder name="es">
            <Tree.File name="about.png" />
            <Tree.File name="community.png" />
            <Tree.File name="delegators.png" />
            <Tree.File name="developers.png" />
            <Tree.File name="gateways.png" />
            <Tree.File name="gpu-old.png" />
            <Tree.File name="gpu-v2-dev.png" />
            <Tree.File name="home.png" />
            <Tree.File name="internal-hub.png" />
            <Tree.File name="orchestrators.png" />
            <Tree.File name="page-blockchain-contracts.png" />
            <Tree.File name="page-livepeer-contract-addresses.png" />
            <Tree.File name="resource-hub.png" />
            <Tree.File name="solutions.png" />
          </Tree.Folder>
          <Tree.Folder name="fr">
            <Tree.File name="about.png" />
            <Tree.File name="community.png" />
            <Tree.File name="delegators.png" />
            <Tree.File name="developers.png" />
            <Tree.File name="gateways.png" />
            <Tree.File name="gpu-old.png" />
            <Tree.File name="gpu-v2-dev.png" />
            <Tree.File name="home.png" />
            <Tree.File name="internal-hub.png" />
            <Tree.File name="orchestrators.png" />
            <Tree.File name="page-blockchain-contracts.png" />
            <Tree.File name="page-livepeer-contract-addresses.png" />
            <Tree.File name="resource-hub.png" />
            <Tree.File name="solutions.png" />
          </Tree.Folder>
        </Tree.Folder>
      </Tree.Folder>
    </Tree.Folder>
</Tree>

- **Components**

**Composables**

**Data**

**Templates**

# Audit

### Summary Counts

| Category       | Files          | Active          | Unreferenced    | Duplicate          |
| -------------- | -------------- | --------------- | --------------- | ------------------ |
| Logos          | 28             | ~18             | ~6              | ~4 (across 3 dirs) |
| Domain assets  | 45             | ~22             | ~19 (community) | —                  |
| Media (images) | 8              | ~3              | ~5              | —                  |
| Media (heroes) | 21 + solutions | solutions only  | 21 top-level    | 9 (of domain)      |
| Media (videos) | 7              | 2               | 5               | —                  |
| OG images      | 14             | 14              | —               | —                  |
| Site/favicon   | 7              | 7               | —               | 1 (root dup)       |
| Data           | 1              | 0               | 1               | —                  |
| Scripts        | 2              | 0 (backup only) | —               | —                  |
| **Total**      | **~178**       | **~55-70**      | **~100+**       | **~14**            |

### Immediate Removal Flags

| Item                                          | Reason                                      | Action                  |
| --------------------------------------------- | ------------------------------------------- | ----------------------- |
| 7 x .DS_Store                                 | macOS junk, already .gitignored but tracked | `git rm --cached`       |
| `domain/02_COMMUNITY/hero-images/` (19 files) | Zero references, ~20 MB                     | Move to deprecated      |
| `media/heros/*.png` top-level (21 files)      | Duplicates of domain/00_HOME                | Move to deprecated      |
| `data/protocol-overview.html`                 | Zero references, 4.3 MB                     | Move to deprecated      |
| Root `favicon.png`                            | Duplicate — canonical at `site/favicon/`    | Move to deprecated      |
| 5 placeholder videos                          | Zero references                             | Move to deprecated      |
| `logo/` directory (3 files)                   | Duplicate — canonical is `logos/`           | Consolidate then delete |
| `_workspace-catalog.mdx`                      | Empty template                              | Deleted                 |
| `component-drafts/`                           | Empty, wrong location                       | Deleted                 |
| `governance-review/`                          | Empty, wrong location                       | Deleted                 |

---

## 2. Research and Design Phase

### Framework Applicability

| Framework            | Applies?                    | Reference                                                               |
| -------------------- | --------------------------- | ----------------------------------------------------------------------- |
| Repo Structure Gov   | YES                         | `workspace/plan/active/REPO-STRUCTURE-GOV/folder-structure.md`          |
| Snippets Subplan     | YES — primary               | `workspace/plan/active/REPO-STRUCTURE-GOV/snippets/subplan-snippets.md` |
| Component Governance | NO (assets, not components) | —                                                                       |
| Script Governance    | NO (assets, not scripts)    | —                                                                       |
| Asset Governance     | DOES NOT EXIST — gap        | Needs creation                                                          |

### Governance Gaps

- **No canonical asset naming/placement rules** — new asset decisions are ad hoc
- **No asset metadata standard** — no JSDoc equivalent for assets
- **README.mdx out of sync** — documents 5 dirs that don't exist, misses 1 that does
- **Domain numbering inconsistent** — 00, 01, 02, 04, 10 with gaps unexplained
- **Placement reference silent on assets** — `component-script-placement-reference.md` covers components and scripts only

### What's in Git vs Mintlify

- Everything under `snippets/` is accessible to Mintlify (importable via `<Snippet>`)
- `_workspace/` is NOT rendered (no nav entry) but IS in git — workspace pattern
- `.DS_Store` files are in .gitignore but 7 were committed before the rule

### Pending Decisions (from subplan-snippets.md)

| ID  | Item                                                     | Status  |
| --- | -------------------------------------------------------- | ------- |
| D2  | `domain/10_PRODUCTS/Embody/` — keep or remove?           | PENDING |
| D3  | `site/og-image/` — consolidate 12 to 3 + locale routing? | PENDING |
| D7  | Rename numbered dirs (00_HOME to home)?                  | PENDING |

---

## 3. Outcomes and Requirements

### What Needs Consolidating

- [ ] `logo/` + `site/logo/` into `logos/` (single canonical location)
- [ ] Root `favicon.png` removed (canonical at `site/favicon/`)
- [ ] Duplicate hero images resolved (keep domain/, deprecate media/heros/ top-level)

### Workflow Needs

- [ ] Asset governance framework document (naming, placement, metadata)
- [ ] Pre-commit hook or CI check for .DS_Store files
- [ ] README.mdx kept in sync with actual structure (or generated)
- [ ] `_workspace/archive/deprecated/` as the deprecation path (not delete)

---

## 4. Implementation Phase

### Execution Order

| Step | Task                                                     | Status                              | Depends on      |
| ---- | -------------------------------------------------------- | ----------------------------------- | --------------- |
| 1    | Remove .DS_Store from git tracking                       | DONE — already untracked            | —               |
| 2    | Move zero-ref assets to `_workspace/archive/deprecated/` | PENDING                             | —               |
| 3    | Consolidate `logo/` into `logos/`                        | DONE — 5 refs updated, dirs deleted | Reference audit |
| 4    | Update `README.mdx` to match actual structure            | PENDING                             | Steps 1-3       |
| 5    | Flag missing Embody avatars                              | PENDING                             | —               |

### Deprecated Assets Manifest

Will be written to `_workspace/archive/deprecated/MANIFEST.md` on execution — lists every moved file, original path, reason, date.

---

## 5. Documentation

- [ ] Updated `README.mdx` (actual structure, not aspirational)
- [ ] Deprecated assets manifest
- [ ] Session log entry
- [ ] Flag any pending decisions for human review
