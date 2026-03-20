export const gatewayConfigurationFlagSections = [
  {
    title: "Network & Addresses",
    rows: [
      { flag: "-network", type: "Both", tone: "both", description: "Network to connect to (offchain, arbitrum-one-mainnet, etc.)" },
      { flag: "-rtmpAddr", type: "Video", tone: "video", description: "Address to bind for RTMP commands (video ingest)" },
      { flag: "-cliAddr", type: "Both", tone: "both", description: "Address to bind for CLI commands" },
      { flag: "-httpAddr", type: "Both", tone: "both", description: "Address to bind for HTTP commands" },
      { flag: "-serviceAddr", type: "Both", tone: "both", description: "Orchestrator service URI for broadcasters to contact" },
      { flag: "-gatewayHost", type: "Both", tone: "both", description: "External hostname where Gateway node is running" }
    ]
  },
  {
    title: "Node Type",
    rows: [
      { flag: "-gateway", type: "Both", tone: "both", description: "Set to true to be a gateway (handles both video and AI)" },
      { flag: "-orchestrator", type: "Both", tone: "both", description: "Set to true to be an orchestrator" },
      { flag: "-transcoder", type: "Video", tone: "video", description: "Set to true to be a transcoder" },
      { flag: "-aiWorker", type: "AI", tone: "ai", description: "Set to true to run an AI worker" },
      { flag: "-broadcaster", type: "Video", tone: "video", description: "Set to true to be a broadcaster (deprecated, use -gateway)" }
    ]
  },
  {
    title: "Video Transcoding",
    rows: [
      { flag: "-transcodingOptions", type: "Video", tone: "video", description: "Transcoding profiles for broadcast job" },
      { flag: "-maxAttempts", type: "Video", tone: "video", description: "Maximum transcode attempts" },
      { flag: "-maxSessions", type: "Both", tone: "both", description: "Max concurrent sessions (transcoding for orchestrator, RTMP streams for gateway)" },
      { flag: "-nvidia", type: "Video", tone: "video", description: "Comma-separated list of Nvidia GPU device IDs" },
      { flag: "-netint", type: "Video", tone: "video", description: "Comma-separated list of NetInt device GUIDs" },
      { flag: "-hevcDecoding", type: "Video", tone: "video", description: "Enable or disable HEVC decoding" },
      { flag: "-testTranscoder", type: "Video", tone: "video", description: "Test Nvidia GPU transcoding at startup" },
      { flag: "-currentManifest", type: "Video", tone: "video", description: "Expose active ManifestID as \"/stream/current.m3u8\"" }
    ]
  },
  {
    title: "AI Processing",
    rows: [
      { flag: "-aiServiceRegistry", type: "AI", tone: "ai", description: "Use an AI ServiceRegistry contract address" },
      { flag: "-aiModels", type: "AI", tone: "ai", description: "Models (pipeline:model_id) for AI worker to load" },
      { flag: "-aiModelsDir", type: "AI", tone: "ai", description: "Directory where AI model weights are stored" },
      { flag: "-aiRunnerImage", type: "AI", tone: "ai", description: "Docker image for the AI runner (deprecated use -aiRunnerImageOverrides)" },
      { flag: "-aiRunnerImageOverrides", type: "AI", tone: "ai", description: "Docker image overrides for different pipelines" },
      { flag: "-aiVerboseLogs", type: "AI", tone: "ai", description: "Enable verbose logs for AI runner containers" },
      { flag: "-aiProcessingRetryTimeout", type: "AI", tone: "ai", description: "Timeout for retrying AI processing requests" },
      { flag: "-aiRunnerContainersPerGPU", type: "AI", tone: "ai", description: "Number of AI runner containers per GPU" }
    ]
  },
  {
    title: "Live AI Video",
    rows: [
      { flag: "-mediaMTXApiPassword", type: "AI", tone: "ai", description: "HTTP basic auth password for MediaMTX API" },
      { flag: "-liveAITrickleHostForRunner", type: "AI", tone: "ai", description: "Trickle Host used by AI Runner" },
      { flag: "-liveAIAuthApiKey", type: "AI", tone: "ai", description: "API key for Live AI authentication requests" },
      { flag: "-liveAIAuthWebhookUrl", type: "AI", tone: "ai", description: "Live AI RTMP authentication webhook URL" },
      { flag: "-livePaymentInterval", type: "AI", tone: "ai", description: "Interval for Gateway ↔ Orchestrator payments for Live AI" }
    ]
  },
  {
    title: "Orchestrator Selection",
    rows: [
      { flag: "-orchAddr", type: "Video", tone: "video", description: "Comma-separated list of orchestrators to connect to" },
      { flag: "-orchWebhookUrl", type: "Video", tone: "video", description: "Orchestrator discovery callback URL" },
      { flag: "-orchBlocklist", type: "Video", tone: "video", description: "Comma-separated list of blocklisted orchestrators" },
      { flag: "-orchMinLivepeerVersion", type: "Video", tone: "video", description: "Minimal go-livepeer version for orchestrators" },
      { flag: "-selectRandFreq", type: "Video", tone: "video", description: "Weight of random factor in orchestrator selection" },
      { flag: "-selectStakeWeight", type: "Video", tone: "video", description: "Weight of stake factor in orchestrator selection" },
      { flag: "-selectPriceWeight", type: "Video", tone: "video", description: "Weight of price factor in orchestrator selection" },
      { flag: "-selectPriceExpFactor", type: "Video", tone: "video", description: "Significance of small price changes in selection" },
      { flag: "-orchPerfStatsUrl", type: "Video", tone: "video", description: "URL of Orchestrator Performance Stream Tester" },
      { flag: "-region", type: "Video", tone: "video", description: "Region where broadcaster is deployed" },
      { flag: "-minPerfScore", type: "Video", tone: "video", description: "Minimum orchestrator performance score to accept" },
      { flag: "-discoveryTimeout", type: "Video", tone: "video", description: "Time to wait for orchestrator info for manifest" }
    ]
  },
  {
    title: "Pricing & Payments",
    rows: [
      { flag: "-maxPricePerUnit", type: "Video", tone: "video", description: "Maximum transcoding price per pixelsPerUnit" },
      { flag: "-maxPricePerCapability", type: "AI", tone: "ai", description: "JSON list of prices per AI capability/model" },
      { flag: "-ignoreMaxPriceIfNeeded", type: "Both", tone: "both", description: "Allow exceeding max price if no orchestrator meets requirement" },
      { flag: "-pricePerUnit", type: "Video", tone: "video", description: "Price per pixelsPerUnit amount for transcoding" },
      { flag: "-pixelsPerUnit", type: "Both", tone: "both", description: "Amount of pixels per unit for pricing" },
      { flag: "-priceFeedAddr", type: "Both", tone: "both", description: "ETH address of Chainlink price feed contract" },
      { flag: "-autoAdjustPrice", type: "Video", tone: "video", description: "Enable automatic price adjustments" },
      { flag: "-pricePerGateway", type: "Video", tone: "video", description: "JSON list of price per gateway" },
      { flag: "-pricePerBroadcaster", type: "Video", tone: "video", description: "JSON list of price per broadcaster" }
    ]
  },
  {
    title: "Blockchain / Ethereum",
    rows: [
      { flag: "-ethAcctAddr", type: "Both", tone: "both", description: "Existing ETH account address" },
      { flag: "-ethPassword", type: "Both", tone: "both", description: "Password for ETH account or path to file" },
      { flag: "-ethKeystorePath", type: "Both", tone: "both", description: "Path to ETH keystore directory or keyfile" },
      { flag: "-ethOrchAddr", type: "Both", tone: "both", description: "ETH address of on-chain registered orchestrator" },
      { flag: "-ethUrl", type: "Both", tone: "both", description: "Ethereum node JSON-RPC URL" },
      { flag: "-ethController", type: "Both", tone: "both", description: "Protocol smart contract address" },
      { flag: "-transactionTimeout", type: "Both", tone: "both", description: "Time to wait for ETH transaction confirmation" },
      { flag: "-maxTransactionReplacements", type: "Both", tone: "both", description: "Number of times to replace pending ETH transactions" },
      { flag: "-gasLimit", type: "Both", tone: "both", description: "Gas limit for ETH transactions" },
      { flag: "-minGasPrice", type: "Both", tone: "both", description: "Minimum gas price for ETH transactions in wei" },
      { flag: "-maxGasPrice", type: "Both", tone: "both", description: "Maximum gas price for ETH transactions in wei" }
    ]
  },
  {
    title: "Ticket System",
    rows: [
      { flag: "-ticketEV", type: "Both", tone: "both", description: "Expected value for PM tickets" },
      { flag: "-maxFaceValue", type: "Both", tone: "both", description: "Max ticket face value in WEI" },
      { flag: "-maxTicketEV", type: "Both", tone: "both", description: "Maximum acceptable expected value for one PM ticket" },
      { flag: "-maxTotalEV", type: "Both", tone: "both", description: "Maximum acceptable expected value for one PM payment" },
      { flag: "-depositMultiplier", type: "Both", tone: "both", description: "Deposit multiplier for max acceptable ticket faceValue" }
    ]
  },
  {
    title: "Services",
    rows: [
      { flag: "-redeemer", type: "Both", tone: "both", description: "Run a ticket redemption service" },
      { flag: "-redeemerAddr", type: "Both", tone: "both", description: "URL of ticket redemption service to use" },
      { flag: "-reward", type: "Both", tone: "both", description: "Run a reward service" },
      { flag: "-initializeRound", type: "Both", tone: "both", description: "Transcoder should automatically initialize new rounds" },
      { flag: "-initializeRoundMaxDelay", type: "Both", tone: "both", description: "Maximum delay before initializing a round" }
    ]
  },
  {
    title: "Monitoring & Metrics",
    rows: [
      { flag: "-monitor", type: "Both", tone: "both", description: "Send performance metrics" },
      { flag: "-metricsPerStream", type: "Both", tone: "both", description: "Group performance metrics per stream" },
      { flag: "-metricsClientIP", type: "Both", tone: "both", description: "Expose client's IP in metrics" },
      { flag: "-metadataQueueUri", type: "Both", tone: "both", description: "URI for message broker to send operation metadata" },
      { flag: "-metadataAmqpExchange", type: "Both", tone: "both", description: "Name of AMQP exchange for operation metadata" },
      { flag: "-metadataPublishTimeout", type: "Both", tone: "both", description: "Max time to wait for publishing metadata events" }
    ]
  },
  {
    title: "Storage",
    rows: [
      { flag: "-dataDir", type: "Both", tone: "both", description: "Directory that data is stored in" },
      { flag: "-objectStore", type: "Both", tone: "both", description: "URL of primary object store" },
      { flag: "-recordStore", type: "Both", tone: "both", description: "URL of object store for recordings" }
    ]
  }
];

export const gatewayConfigurationFlagRows = gatewayConfigurationFlagSections.flatMap(
  ({ title, rows }) => [
    {
      Flag: title,
      __separator: true,
    },
    ...rows.map((row) => ({
      Flag: row.flag,
      Type: row.type,
      Description: row.description,
    })),
  ]
);
