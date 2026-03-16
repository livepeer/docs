const categoryTags = [
  "Video Streaming",
  "Creative Industry",
  "Social Media",
  "Events & Communication",
  "Community & Social Good",
  "AI-Powered Apps",
  "Gaming",
  "Other",
];

const linkIcons = {
  github: "github",
  youtube: "youtube",
  blog: "newspaper",
  x: "x-twitter",
  instagram: "instagram",
  email: "envelope",
  website: "globe-pointer",
  forum: "message",
  discord: "discord",
  bluesky: "bluesky",
  telegram: "telegram",
  linkedin: "linkedin",
  whatsapp: "whatsapp",
  snapchat: "snapchat",
  reddit: "reddit",
  twitch: "twitch",
  other: "link",
};

const hrefs = [
  { title: "BeyondClub", href: "https://www.beyondclub.xyz" },
  { title: "Bonfire", href: "https://www.bonfire.xyz" },
  { title: "Buttrfly", href: "https://buttrfly.app" },
  { title: "DiverseHQ", href: "https://diversehq.gitbook.io" },
  { title: "EthGlobal.tv", href: "https://ethglobal.tv" },
  { title: "Gummys", href: "https://gummys.io" },
  { title: "Hey", href: "https://hey.xyz" },
  { title: "Huddle01", href: "https://huddle01.com" },
  { title: "Hypeshot", href: "https://www.hypeshot.io" },
  { title: "Kavarii", href: "https://kavarii.com" },
  { title: "Lens Media Snapshots", href: "https://www.lens.xyz" },
  { title: "Lenspeer", href: "https://lenspeer.com" },
  { title: "LensPlay", href: "https://lensplay.xyz" },
  { title: "LensPort", href: "https://lensport.io" },
  { title: "Lenster", href: "https://lenster.xyz" },
  { title: "Tape", href: "https://tape.xyz" },
  { title: "LensShare", href: "https://www.lens.xyz" },
  { title: "Livepeer Studio", href: "https://livepeer.studio" },
  { title: "Livespace", href: "https://linktr.ee/livespace" },
  { title: "LongTake NFT Publisher", href: "https://www.longtake.xyz" },
  { title: "Minds", href: "https://www.minds.com" },
  { title: "Mintflick", href: "https://mintflick.app" },
  { title: "Monaverse", href: "https://monaverse.com" },
  { title: "Orb", href: "https://orb.ac" },
  { title: "Picarto.tv", href: "https://picarto.tv" },
  { title: "Pinsta", href: "https://pinsta.xyz" },
  { title: "Radar", href: "https://www.radardao.xyz" },
  { title: "SankoTV", href: "https://sanko.tv" },
  { title: "Serraform (Decentraland)", href: "https://www.serraform.com" },
  { title: "Soclly", href: "https://app.soclly.com" },
  { title: "StreamETH", href: "https://info.streameth.org" },
  { title: "Switchboard", href: "https://switchboard.live" },
  { title: "The Lot Radio", href: "https://www.thelotradio.com" },
  { title: "Tribe Social", href: "https://www.tribesocial.io" },
  { title: "Unlonely", href: "https://www.unlonely.app" },
  { title: "Waves", href: "https://www.wav3s.app" },

  { title: "Tsunameme", href: "https://www.tsunameme.ai" },
  { title: "Cloud AI Generator", href: "https://ai-generator.livepeer.cloud" },
  { title: "Let's Generate", href: "https://letsgenerate.ai" },
  { title: "Inference By Stronk", href: "https://inference.stronk.rocks" },
  { title: "Origin Stories", href: "https://mobile.x.com" },
  { title: "Flipguard", href: "https://www.flipguard.xyz" },
  { title: "Refraction", href: "https://www.refractionfestival.com" },
  { title: "Kitana (Katana Video)", href: "https://katana.video" },
  { title: "New Coin", href: "https://www.newcoin.org" },
  { title: "Operator", href: "https://operator.io" },
];

export const showcaseData = [
  {
    title: "NYTV.live",
    subtitle: "New York City’s free, independent 24/7 TV network",
    href: "https://nytv.live/",
    mediaSrc:
      "https://raw.githubusercontent.com/livepeer/docs/1507052999ca4a633e26d20d1d038d00883168ec/snippets/assets/media/videos/nytvlive.mp4",
    logo: "/snippets/assets/media/images/nytv-logo.png",
    categoryTags: ["Video Streaming"],
    productTags: ["Livepeer Network"],
    description:
      "NYTV is a free, independent internet TV network that broadcasts live shows, documentaries, and news programs 24/7 from New York City. It uses Livepeer for its video streaming infrastructure, ensuring low latency and high quality for its viewers. ",
    cta: "",
    links: [
      { bluesky: "https://bsky.app/profile/nytv.live" },
      { email: "info@nytv.live" },
      { website: "https://nytv.live/" },
      { instagram: "https://www.instagram.com/newyorktelevision/" },
    ],
  },
  {
    title: "BeyondClub",
    subtitle: "Loyalty and membership",
    href: "https://www.beyondclub.xyz",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.beyondclub.xyz",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "A Web3 loyalty and membership platform enabling gated video content and live experiences using decentralized video delivery via Livepeer, allowing communities to own engagement without centralized platforms.",
    cta: "Follow @beyondClub_xyz for campaign announcements.",
    links: [
      { github: "https://github.com/BeyondClub" },
      { x: "https://x.com/beyondClub_xyz" },
    ],
  }, // :contentReference[oaicite:1]{index=1}

  {
    title: "Bonfire",
    subtitle: "No-code community engagement platform for web3 creators.",
    href: "https://www.bonfire.xyz",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.bonfire.xyz",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "An open-source, no-code community platform. Livepeer enables decentralized video for calls, announcements, and events, keeping community coordination censorship-resistant.",
    cta: "Read the repo + follow @SwitchToBonfire.",
    links: [
      { github: "https://github.com/bonfire-networks/bonfire-app" },
      { blog: "https://bonfirenetworks.org" },
      { x: "https://x.com/SwitchToBonfire" },
    ],
  }, // :contentReference[oaicite:2]{index=2}

  {
    title: "Buttrfly",
    subtitle:
      "Connect with friends on Farcaster and Lens. Browse and mint content on Zora, Sound, and more.",
    href: "https://buttrfly.app",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://buttrfly.app",
    categoryTags: ["Apps", "Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "A decentralized social aggregator across Farcaster and Lens. Livepeer powers native video playback, enabling cross-graph video feeds without centralized CDNs.",
    cta: "Follow @buttrfly_app for releases/updates.",
    links: [
      { github: null },
      { youtube: null },
      { blog: null },
      { x: "https://x.com/buttrfly_app" },
    ],
  }, // :contentReference[oaicite:3]{index=3}

  {
    title: "DiverseHQ",
    subtitle: "Watch EthGlobal events live",
    href: "https://diversehq.gitbook.io",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "A community knowledge and event hub. Uses Livepeer to stream and archive live Ethereum community events at low cost.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:4]{index=4}

  {
    title: "EthGlobal.tv",
    subtitle: "Watch EthGlobal events live",
    href: "https://ethglobal.tv",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://ethglobal.tv",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Official livestream hub for ETHGlobal hackathons. Livepeer supports global-scale live event streaming efficiently.",
    cta: "Open the site during an ETHGlobal event.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:5]{index=5}

  {
    title: "Gummys",
    subtitle: "No-code community engagement platform for web3 creators.",
    href: "https://gummys.io",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Apps", "Community"],
    productTags: ["Livepeer Network"],
    description:
      "Community engagement and rewards platform. Livepeer enables video-based engagement and announcements inside tokenized communities.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:6]{index=6}

  {
    title: "Hey",
    subtitle:
      "A community-built decentralized, and permissionless social media app built on Lens Protocol",
    href: "https://hey.xyz",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://hey.xyz",
    categoryTags: ["Apps", "Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Lens-based decentralized social app. Livepeer powers video posts and playback, ensuring decentralized social + media infrastructure.",
    cta: "Explore Hey and Lens posting.",
    links: [
      { github: "https://github.com/heyxyz" },
      { youtube: null },
      { blog: null },
      { x: null },
    ],
  }, // :contentReference[oaicite:7]{index=7}

  {
    title: "Huddle01",
    subtitle: "The world's first web3 native video meeting solution.",
    href: "https://huddle01.com",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://huddle01.com",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Web3-native video meetings. Livepeer provides decentralized live video transport alongside wallet-based identity.",
    cta: "Check their site/docs for SDK + product updates.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:8]{index=8}

  {
    title: "Hypeshot",
    subtitle: "Crypto-enabled livestreaming",
    href: "https://www.hypeshot.io",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Apps", "Marketplaces"],
    productTags: ["Livepeer Network"],
    description:
      "Crypto-enabled livestreaming marketplace. Livepeer supports creator monetization through decentralized live video.",
    cta: "No verifiable source found (official site/social) in this pass.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:9]{index=9}

  {
    title: "Kavarii",
    subtitle:
      "Web3 video streaming platform that promotes freedom of expression and provides more monetization options for creators",
    href: "https://kavarii.com",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Creator-focused Web3 video streaming platform. Uses Livepeer for censorship-resistant video distribution.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:10]{index=10}

  {
    title: "Lenspeer",
    subtitle: "All-in-One decentralized social platform",
    href: "https://lenspeer.com",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://lenspeer.com",
    categoryTags: ["Apps", "Video Streaming"],
    productTags: ["Livepeer Network"],
    description:
      "All-in-one decentralized social platform. Livepeer enables livestreams and video posts inside Lens-based UX.",
    cta: "Follow @Lenspeer for updates.",
    links: [
      { github: null },
      { youtube: null },
      { blog: null },
      { x: "https://x.com/Lenspeer" },
    ],
  }, // :contentReference[oaicite:11]{index=11}

  {
    title: "LensPlay",
    subtitle:
      "mobile-first decentralized video-sharing app that empowers creators, leveraging Lens Protocol and Livepeer to transform content sharing for a global audience.",
    href: "https://lensplay.xyz",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://lensplay.xyz",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Mobile-first decentralized video sharing app. Built directly on Livepeer for streaming and playback.",
    cta: "Open LensPlay and follow their socials (not verified in this pass).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:12]{index=12}

  {
    title: "LensPort",
    subtitle: "Discover, collect, and sell Post NFTs on Lens.",
    href: "https://lensport.io",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://lensport.io",
    categoryTags: ["Apps", "Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "NFT marketplace for Lens posts. Livepeer supports video NFT playback.",
    cta: "Use 'Join the community' on LensPort and follow Lens/Twitter links from the site.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:13]{index=13}

  {
    title: "LongTake NFT Publisher",
    subtitle:
      "Create a video NFT from files up to 10GB and share it on any NFT marketplace.",
    href: "https://www.longtake.xyz",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Apps", "Marketplaces"],
    productTags: ["Livepeer Network"],
    description:
      "Tool for minting large video NFTs. Livepeer handles video encoding and delivery.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:14]{index=14}

  {
    title: "Minds",
    subtitle: "Free speech-focused decentralized social platform",
    href: "https://www.minds.com",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.minds.com",
    categoryTags: ["Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Decentralized social network. Livepeer enables video streaming without corporate platforms.",
    cta: "Explore Minds channels; look for their official community links on-site.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:15]{index=15}

  {
    title: "Mintflick",
    subtitle: "Platform for minting and sharing video NFTs.",
    href: "https://mintflick.app",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://mintflick.app",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Video NFT minting and sharing platform using Livepeer for heavy video workloads.",
    cta: "Open Mintflick and look for their community links in footer/about.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:16]{index=16}

  {
    title: "Monaverse (Mona)",
    subtitle: "Interoperable 3D objects, avatars and experiences",
    href: "https://monaverse.com",
    mediaSrc: "https://www.youtube.com/@monaverse",
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://monaverse.com",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Interoperable 3D worlds platform. Livepeer powers live events and streaming inside virtual worlds.",
    cta: "Join their Discord and follow @monaverse.",
    links: [
      { github: "https://github.com/monaverse" },
      { youtube: "https://www.youtube.com/@monaverse" },
      { blog: null },
      { x: "https://x.com/monaverse" },
      { discord: "https://monaverse.com/discord" },
    ],
  }, // :contentReference[oaicite:17]{index=17}

  {
    title: "Orb",
    subtitle: "Decentralized social network alternative.",
    href: "https://orb.ac",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://orb.ac",
    categoryTags: ["Apps", "Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Web3 discovery and social app. Livepeer enables embedded video.",
    cta: "Open Orb and follow their on-site socials (not verified in this pass).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:18]{index=18}

  {
    title: "Picarto.tv",
    subtitle: "Creative live streaming service for artists",
    href: "https://picarto.tv",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://picarto.tv",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Artist-focused livestreaming platform. Uses Livepeer for cost-efficient live streaming.",
    cta: "Browse live streams; developers can inspect Picarto’s public repos.",
    links: [
      { github: "https://github.com/picartotv" },
      { youtube: null },
      { blog: null },
      { x: null },
    ],
  }, // :contentReference[oaicite:19]{index=19}

  {
    title: "Pinsta",
    subtitle: "Decentralized Image & Video Sharing service",
    href: "https://pinsta.xyz",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://pinsta.xyz",
    categoryTags: ["Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Decentralized image and video sharing app. Livepeer supports video hosting and playback.",
    cta: "Join their Discord and follow @PinstaApp.",
    links: [
      { github: "https://github.com/PinstaApp" },
      { youtube: null },
      { blog: null },
      { x: "https://x.com/PinstaApp" },
      { discord: "https://discord.com/invite/7eCKW2Y3az" },
    ],
  }, // :contentReference[oaicite:20]{index=20}

  {
    title: "Radar",
    subtitle: null,
    href: "https://www.radardao.xyz",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.radardao.xyz",
    categoryTags: ["Community"],
    productTags: ["Livepeer Network"],
    description:
      "Community events discovery platform using Livepeer for video announcements.",
    cta: "Open RadarDAO site; use on-site socials (not verified in this pass).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:21]{index=21}

  {
    title: "SankoTV",
    subtitle: "A clubhouse for creatives",
    href: "https://sanko.tv",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://sanko.tv",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Creator clubhouse and streaming platform built on Livepeer video infrastructure.",
    cta: "Open SankoTV and follow their published socials (not verified in this pass).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:22]{index=22}

  {
    title: "Serraform",
    subtitle: null,
    href: "https://www.serraform.com",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Apps", "Developer Tools"],
    productTags: ["Livepeer Network"],
    description:
      "Virtual world experiences with live video, powered by Livepeer.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:23]{index=23}

  {
    title: "Soclly",
    subtitle: "Decentralized app for social connections.",
    href: "https://app.soclly.com",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://app.soclly.com",
    categoryTags: ["Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Decentralized social app with video content delivered via Livepeer.",
    cta: "Open Soclly and look for official socials in-app/site (not verified in this pass).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:24]{index=24}

  {
    title: "StreamETH",
    subtitle: "Open-source livestreaming platform for Ethereum conferences.",
    href: "https://info.streameth.org",
    mediaSrc: "https://streameth.org/tv",
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://info.streameth.org",
    categoryTags: ["Apps", "Video Streaming", "AI-Powered Apps"],
    productTags: ["Livepeer Studio", "Livepeer AI"],
    description:
      "Open-source Ethereum event streaming platform using Livepeer Studio and Livepeer AI.",
    cta: "Watch on StreamETH TV and browse the open-source repo.",
    links: [
      { github: "https://github.com/streamethorg/streameth-platform" },
      { youtube: null },
      { blog: null },
      { x: null },
    ],
  }, // :contentReference[oaicite:25]{index=25}

  {
    title: "Switchboard",
    subtitle: "Tool for launching decentralized livestreams.",
    href: "https://switchboard.live",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://switchboard.live",
    categoryTags: ["Developer Tools"],
    productTags: ["Livepeer Network"],
    description:
      "Developer tool for launching decentralized livestreams on Livepeer.",
    cta: "Open Switchboard and use their docs/onboarding.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:26]{index=26}

  {
    title: "The Lot Radio",
    subtitle: "24/7 Livestream of over 165 resident DJs",
    href: "https://www.thelotradio.com",
    mediaSrc: "https://www.youtube.com/thelotradio",
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.thelotradio.com",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Studio (case study)"],
    description:
      "24/7 radio livestream using Livepeer Studio for always-on streaming.",
    cta: "Watch on YouTube; read the Livepeer Studio story.",
    links: [
      { github: null },
      { youtube: "https://www.youtube.com/thelotradio" },
      { blog: "https://livepeer.studio/blog/lotradio" },
      { x: null },
    ],
  }, // :contentReference[oaicite:27]{index=27}

  {
    title: "Tribe Social",
    subtitle:
      "Premium alternative to Facebook Private Groups with a custom app platform",
    href: "https://www.tribesocial.io",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.tribesocial.io",
    categoryTags: ["Apps", "Community"],
    productTags: ["Livepeer Network"],
    description:
      "Private community platform with video features powered by Livepeer.",
    cta: "Book a demo or install the Android app.",
    links: [
      { github: null },
      { youtube: null },
      { blog: "https://www.tribesocial.io/blog" },
      { x: null },
      {
        android:
          "https://play.google.com/store/apps/details?id=com.tribesocial.app",
      },
    ],
  }, // :contentReference[oaicite:28]{index=28}

  {
    title: "Unlonely",
    subtitle:
      "Crypto-native livestreaming platform with fun, gamified features",
    href: "https://www.unlonely.app",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.unlonely.app",
    categoryTags: ["Apps"],
    productTags: ["Livepeer Network"],
    description:
      "Crypto-native livestreaming platform with gamified creator mechanics using Livepeer.",
    cta: "Follow @unlonely_app for stream drops and updates.",
    links: [
      { github: null },
      { youtube: null },
      { blog: null },
      { x: "https://x.com/unlonely_app" },
    ],
  }, // :contentReference[oaicite:29]{index=29}

  {
    title: "Waves",
    subtitle: "Promote content onchain",
    href: "https://www.wav3s.app",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://www.wav3s.app",
    categoryTags: ["Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "On-chain content promotion platform with Livepeer video support.",
    cta: "Open WAV3S and find their official socials on-site (not verified in this pass).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:30]{index=30}

  // Video Streaming category-only item
  {
    title: "Livespace",
    subtitle:
      "Next-gen livestreaming platform built by creators, for creators.",
    href: "https://linktr.ee/livespace",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Video Streaming"],
    productTags: ["Livepeer Network"],
    description:
      "Creator-driven livestreaming platform. Livepeer provides scalable live video backend.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:31]{index=31}

  // Social Media list items that are “names only” on the ecosystem page output we received
  {
    title: "Tape",
    subtitle:
      "Video-centric social app for sharing and interacting with clips.",
    href: "https://tape.xyz",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Video-centric decentralized social app. Livepeer handles video distribution.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:32]{index=32}

  {
    title: "Lenster",
    subtitle: "Social platform for publishing on Lens Protocol.",
    href: "https://lenster.xyz",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Popular Lens social frontend. Livepeer enables embedded video media without centralized hosting.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:33]{index=33}

  {
    title: "LensShare",
    subtitle: "Media sharing app within the Lens ecosystem.",
    href: "https://www.lens.xyz",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Listed under Social Media; no official URL verified in this pass.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:34]{index=34}

  {
    title: "Lens Media Snapshots",
    subtitle: "Decentralized media sharing app built on the Lens Protocol.",
    href: "https://www.lens.xyz",
    mediaSrc: null,
    logo: "",
    categoryTags: ["Apps", "Social Media"],
    productTags: ["Livepeer Network"],
    description:
      "Lens ecosystem video/media app using Livepeer for decentralized video delivery.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:35]{index=35}

  // AI-Powered Apps (the ones with actual URLs visible in our ecosystem scrape)
  {
    title: "Tsunameme",
    subtitle: "Making GIF expressions with generative AI",
    href: "https://www.tsunameme.ai",
    mediaSrc: null,
    logo: "",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network"],
    description:
      "AI-generated GIF and video expressions using Livepeer AI compute.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:36]{index=36}

  {
    title: "Cloud AI Generator",
    subtitle: "A Livepeer Image and video Generation Testing Tool",
    href: "https://ai-generator.livepeer.cloud",
    mediaSrc: null,
    logo: "https://www.google.com/s2/favicons?sz=256&domain_url=https://ai-generator.livepeer.cloud",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network"],
    description: "Livepeer-hosted demo for AI image/video generation.",
    cta: "Open the generator and test outputs.",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:37]{index=37}

  {
    title: "Let's Generate",
    subtitle: "Image generation",
    href: "https://letsgenerate.ai",
    mediaSrc: null,
    logo: "",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network"],
    description: "Image generation app built atop Livepeer AI infrastructure.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:38]{index=38}

  {
    title: "Inference (by Stronk)",
    subtitle: "Craft images and videos from text",
    href: "https://inference.stronk.rocks",
    mediaSrc: null,
    logo: "",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network"],
    description: "Text-to-image/video app using Livepeer AI inference.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:39]{index=39}

  {
    title: "Origin Stories",
    subtitle: "Custom generation tools & co-created experiences",
    href: "https://mobile.x.com",
    mediaSrc: null,
    logo: "",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network"],
    description:
      "AI-driven creative experiences leveraging Livepeer video + AI.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:40]{index=40}

  {
    title: "Flipguard",
    subtitle:
      "Web3 to discord with flipsuite for engagement, reward systems, games, and economy.",
    href: "https://www.flipguard.xyz",
    mediaSrc: null,
    logo: "",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network (ecosystem listing only)"],
    description:
      "Discord engagement and rewards platform with Livepeer-powered video content.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:41]{index=41}

  {
    title: "Refraction",
    subtitle: "Artist-owned community for digital art, music and culture",
    href: "https://www.refractionfestival.com",
    mediaSrc: null,
    logo: "",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network (ecosystem listing only)"],
    description:
      "Artist-owned digital culture community with Livepeer-backed video.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:42]{index=42}

  {
    title: "New Coin",
    subtitle: "Earn Newcoin based on your Creative Energy, measured in Watts.",
    href: "https://www.newcoin.org",
    mediaSrc: null,
    logo: "",
    categoryTags: ["AI-Powered Apps"],
    productTags: ["Livepeer Network (ecosystem listing only)"],
    description:
      "Creative economy platform measuring “creative energy” with Livepeer-based media.",
    cta: "No verifiable source found (official link/social).",
    links: [{ github: null }, { youtube: null }, { blog: null }, { x: null }],
  }, // :contentReference[oaicite:43]{index=43}
];
