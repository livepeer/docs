// Available AI Endpoints
// The gateway exposes these AI endpoints ai_http.go :

//Change description to an array of objects to render better
export const CONFIG_FLAGS = {
  offchain: {
    required: {
      gateway: {
        name: "-gateway",
        type: "boolean",
        default: "false",
        required: true,
        description: "Enable gateway mode",
      },
      orchAddr: {
        name: "-orchAddr",
        type: "string",
        default: "none",
        required: true,
        description:
          "Set to <Badge color='gray'> `http://<ORCHESTRATOR_IP>:<PORT>` </Badge> to connect to orchestrators",
        post: "http://<ORCHESTRATOR_IP>:<PORT>",
      },
    },
    optional: {
      monitor: {
        name: "-monitor",
        type: "boolean",
        default: "false",
        description: "Enables metrics collection",
      },
      v: {
        name: "-v",
        type: "number",
        default: "4",
        description: "Verbosity level",
        post: ["6"],
      },
      rtmpAddr: {
        name: "-rtmpAddr",
        type: "string",
        default: "127.0.0.1:1935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:1935` </Badge> to allow external RTMP connections",
        post: ["0.0.0.0:1935"],
      },
      httpAddr: {
        name: "-httpAddr",
        type: "string",
        default: "127.0.0.1:8935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:8935` </Badge> to allow external HLS/API access",
        post: ["0.0.0.0:8935"],
      },
      httpIngest: {
        name: "-httpIngest",
        type: "boolean",
        default: "false",
        description:
          "Must be explicitly set when you make `-httpAddr` publicly accessible and do not have -authWebhookUrl set. \n &nspb Enables HTTP video ingest (in addition to RTMP), necessary for AI pipelines and optionally for video ingest",
        required: true,
        post: ["true"],
      },
      cliAddr: {
        name: "-cliAddr",
        type: "string",
        default: "127.0.0.1:7935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:5935` </Badge> to expose the CLI API externally",
        post: ["0.0.0.0:5935"],
      },
      transcodingOptions: {
        name: "-transcodingOptions",
        type: "string",
        default: "P240p30fps16x9,P360p30fps16x9",
        description:
          "Higher quality transcoding options (e.g., P240p30fps16x9,P360p30fps16x9,P720p30fps16x9) or use path/to/transcodingOptions.json",
        post: ["P240p30fps16x9,P360p30fps16x9,P720p30fps16x9"],
      },
      maxSessions: {
        name: "-maxSessions",
        type: "number",
        default: "10",
        description: "Limit concurrent sessions",
        post: ["5"],
      },
    },
  },
  onchain: {
    required: {
      gateway: {
        name: "-gateway",
        type: "boolean",
        default: "false",
        required: true,
        description: "Enable gateway mode (required)",
      },
      network: {
        name: "-network",
        type: "string",
        default: "offchain",
        required: true,
        description: "Network type (offchain, arbitrum-one-mainnet)",
        post: ["arbitrum-one-mainnet"],
      },
      ethUrl: {
        name: "-ethUrl",
        type: "string",
        default: "none",
        required: true,
        description:
          "Set to <Badge color='gray'> `https://arb1.arbitrum.io/rpc` </Badge> to connect to Arbitrum Mainnet",
        post: ["https://arb1.arbitrum.io/rpc"],
      },
      httpIngest: {
        name: "-httpIngest",
        type: "boolean",
        default: "false",
        required: true,
        description:
          "Required to enable AI capabilities. Also enables HTTP video ingest (in addition to RTMP)",
        post: ["true"],
      },
      aiServiceRegistry: {
        name: "-aiServiceRegistry",
        type: "boolean",
        default: "false",
        required: true,
        description: "Enables AI on-chain service registry",
        post: ["true"],
      },
    },
    requiredAI: {
      httpIngest: {
        name: "-httpIngest",
        type: "boolean",
        default: "false",
        description: "Enables AI HTTP endpoints",
      },
      aiServiceRegistry: {
        name: "-aiServiceRegistry",
        type: "boolean",
        default: "false",
        description: "Enables AI on-chain service registry",
      },
    },
    optional: {
      monitor: {
        name: "-monitor",
        type: "boolean",
        default: "false",
        description: "Enables metrics collection",
      },
      v: {
        name: "-v",
        type: "number",
        default: "4",
        description: "Verbosity level",
        post: ["6"],
      },
      rtmpAddr: {
        name: "-rtmpAddr",
        type: "string",
        default: "127.0.0.1:1935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:1935` </Badge> to allow external RTMP connections",
        post: ["0.0.0.0:1935"],
      },
      httpAddr: {
        name: "-httpAddr",
        type: "string",
        default: "127.0.0.1:8935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:8935` </Badge> to allow external HLS/API access",
        post: ["0.0.0.0:8935"],
      },
      cliAddr: {
        name: "-cliAddr",
        type: "string",
        default: "127.0.0.1:7935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:5935` </Badge> to expose the CLI API externally",
        post: ["0.0.0.0:5935"],
      },
      transcodingOptions: {
        name: "-transcodingOptions",
        type: "string",
        default: "P240p30fps16x9,P360p30fps16x9",
        description:
          "Higher quality transcoding options (e.g., P240p30fps16x9,P360p30fps16x9,P720p30fps16x9) or use path/to/transcodingOptions.json",
        post: ["P240p30fps16x9,P360p30fps16x9,P720p30fps16x9"],
      },
      maxSessions: {
        name: "-maxSessions",
        type: "number",
        default: "10",
        description: "Limit concurrent sessions",
        post: ["5"],
      },
    },
    //     # Bring your own ETH account address
    // # - -ethAcctAddr=<ETH_ACCOUNT_ADDRESS>
    // # Path to keystore directory or keyfile
    // # - -ethKeystorePath=/root/.lpData/keystore
    // # Path to password file
    // # - -ethPassword=/root/.lpData/keystore/password.txt

    // # OPTIONAL (Advanced: Pricing Options)
    // # Max price per pixel in wei (defaults to 0: ANY price)
    // # - -maxPricePerUnit=1000000000
    // # Max price per AI capability (pipeline/model)
    // # - -maxPricePerCapability=/path/to/your/config.json
    // # Payment processing frequency for Live AI Video workflows
    // # - -livePaymentInterval=5s
    optionalAdvanced: {
      ethAcctAddr: {
        name: "-ethAcctAddr",
        type: "string",
        default: "none",
        description:
          "Set to <Badge color='gray'> `0xYourETHAddress` </Badge> to specify the ETH account address. \n Leave blank to auto-generate a new wallet",
        post: ["0xYourETHAddress"],
      },
      ethKeystorePath: {
        name: "-ethKeystorePath",
        type: "string",
        default: "none",
        description:
          'Set to <Badge color="gray"> `/path/to/keystore` </Badge> to specify the ETH keystore directory. \n If blank, a new keystore will be auto-generated in the datadir',
        post: ["/path/to/keystore"],
      },
      ethPassword: {
        name: "-ethPassword",
        type: "string",
        default: "none",
        description:
          "Set to <Badge color='gray'> `/path/to/password.txt` </Badge> to specify the ETH keystore password file. \n If left blank, you will be prompted to enter a password when the gateway starts",
        post: ["/path/to/password.txt"],
      },
      maxPricePerUnit: {
        name: "-maxPricePerUnit",
        type: "number",
        default: "0",
        description:
          "Maximum price per pixel unit (in wei) for video transcoding services. Defaults to 0 (no limit)",
        post: ["1000000000"],
      },
      maxPricePerCapability: {
        name: "-maxPricePerCapability",
        type: "string",
        default: "none",
        description:
          "Set to <Badge color='gray'> `path/to/pricing.json` </Badge> to specify AI pricing or path/to/aiPricing.json",
        post: ["path/to/aiPricing.json"],
      },
      livePaymentInterval: {
        name: "-livePaymentInterval",
        type: "string",
        default: "5s",
        description:
          "Payment processing frequency (e.g., 5s, 10s, 300ms) for Live AI Video workflows, where the gateway needs to send periodic payments to the orchestrator. Defaults to 5s",
        post: ["5s"],
      },
      authWebhookUrl: {
        name: "-authWebhookUrl",
        type: "string",
        default: "none",
        description:
          "The -authWebhookUrl flag enables webhook-based authentication for incoming streams in production Livepeer gateways. It's essential for securing publicly accessible gateways.\n Set to <Badge color='gray'> `https://your-auth-webhook.com` </Badge> to enable stream authentication",
        post: ["https://your-auth-webhook.com"],
      },
    },
    optionalWallet: {
      ethAcctAddr: {
        name: "-ethAcctAddr",
        type: "string",
        default: "none",
        description:
          "Set to <Badge color='gray'> `0xYourETHAddress` </Badge> to specify the ETH account address. \n Leave blank to auto-generate a new wallet",
        post: ["0xYourETHAddress"],
      },
      ethKeystorePath: {
        name: "-ethKeystorePath",
        type: "string",
        default: "none",
        description:
          'Set to <Badge color="gray"> `/path/to/keystore` </Badge> to specify the ETH keystore directory. \n If blank, a new keystore will be auto-generated in the datadir',
        post: ["/path/to/keystore"],
      },
      ethPassword: {
        name: "-ethPassword",
        type: "string",
        default: "none",
        description:
          "Set to <Badge color='gray'> `/path/to/password.txt` </Badge> to specify the ETH keystore password file. \n If left blank, you will be prompted to enter a password when the gateway starts",
        post: ["/path/to/password.txt"],
      },
    },
    optionalPricing: {
      maxPricePerUnit: {
        name: "-maxPricePerUnit",
        type: "number",
        default: "0",
        description:
          "Maximum price per unit (wei) for video transcoding services. Defaults to 0 (no limit)",
        post: ["1000000000"],
      },
      maxPricePerCapability: {
        name: "-maxPricePerCapability",
        type: "string",
        default: "none",
        description:
          "Set to <Badge color='gray'> `path/to/pricing.json` </Badge> to specify AI pricing or path/to/aiPricing.json",
        post: ["path/to/pricing.json"],
      },
      livePaymentInterval: {
        name: "-livePaymentInterval",
        type: "string",
        default: "5s",
        description:
          "Payment processing frequency (e.g., 5s, 10s, 300ms) for Live AI Video workflows, where the gateway needs to send periodic payments to the orchestrator. Defaults to 5s",
        post: ["5s"],
      },
    },
  },
  aiEndpoints: {
    textToImage: {
      name: "/text-to-image",
      description: "Generate images from text prompts",
    },
    imageToImage: {
      name: "/image-to-image",
      description: "Transform images with text prompts",
    },
    imageToVideo: {
      name: "/image-to-video",
      description: "Create videos from images",
    },
    upscale: {
      name: "/upscale",
      description: "Increase image resolution",
    },
    audioToText: {
      name: "/audio-to-text",
      description: "Transcribe audio to text",
    },
    llm: {
      name: "/llm",
      description: "Large language model chat",
    },
    segmentAnything2: {
      name: "/segment-anything-2",
      description: "Image segmentation",
    },
    imageToText: {
      name: "/image-to-text",
      description: "Describe images",
    },
    textToSpeech: {
      name: "/text-to-speech",
      description: "Generate audio from text",
    },
    videoToVideo: {
      name: "/video-to-video",
      description: "Live video-to-video AI processing",
    },
  },
};

export const CLI_OPTIONS = {
  status: {
    name: "status",
    description: "Get current status",
  },
  broadcastConfig: {
    name: "getBroadcastConfig",
    description: "Get broadcast configuration",
  },
};

// The CLI commands map to HTTP endpoints on the CLI server (default port 5935) :

// - `/status` - Node status
// - `/protocolParameters` - Protocol info
// - `/registeredOrchestrators` - Orchestrator list
// - `/bond`, `/unbond`, `/rebond` - Staking operations
// - `/activateOrchestrator` - Orchestrator activation
// - `/setBroadcastConfig` - Broadcast configuration
// - `/setMaxPriceForCapability` - AI pricing
// - `/reward` - Claim rewards
// - `/transferTokens` - Token transfers
// - `/signMessage` - Message signing
export const HTTP_API_OPTIONS = {
  status: {
    name: "/status",
    description: "Get current status",
  },
  broadcastConfig: {
    name: "/getBroadcastConfig",
    description: "Get broadcast configuration",
  },
};

export const CONFIG_FLAGS_DUAL = {
  offchain: {
    required: {
      gateway: {
        name: "-gateway",
        type: "boolean",
        default: "false",
        required: true,
        description: "Enable gateway mode (required)",
      },
      httpIngest: {
        name: "-httpIngest",
        type: "boolean",
        default: "false",
        required: true,
        description: "Enables AI HTTP endpoints",
      },
      orchAddr: {
        name: "-orchAddr",
        type: "string",
        default: "none",
        required: true,
        description:
          "Set to <Badge color='gray'> `http://<ORCHESTRATOR_IP>:<PORT>` </Badge> to connect to orchestrators",
        post: ["http://<ORCHESTRATOR_IP>:<PORT>"],
      },
    },
    optional: {
      monitor: {
        name: "-monitor",
        type: "boolean",
        default: "false",
        description: "Enables metrics collection",
      },
      v: {
        name: "-v",
        type: "number",
        default: "4",
        description: "Verbosity level",
        post: ["6"],
      },
      rtmpAddr: {
        name: "-rtmpAddr",
        type: "string",
        default: "127.0.0.1:1935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:1935` </Badge> to allow external RTMP connections",
        post: ["0.0.0.0:1935"],
      },
      httpAddr: {
        name: "-httpAddr",
        type: "string",
        default: "127.0.0.1:8935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:8935` </Badge> to allow external HLS/API access",
        post: ["0.0.0.0:8935"],
      },
      cliAddr: {
        name: "-cliAddr",
        type: "string",
        default: "127.0.0.1:7935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:5935` </Badge> to expose the CLI API externally",
        post: ["0.0.0.0:5935"],
      },
      transcodingOptions: {
        name: "-transcodingOptions",
        type: "string",
        default: "P240p30fps16x9,P360p30fps16x9",
        description:
          "Higher quality transcoding options (e.g., P240p30fps16x9,P360p30fps16x9,P720p30fps16x9)",
        post: ["P240p30fps16x9,P360p30fps16x9,P720p30fps16x9"],
      },
      maxSessions: {
        name: "-maxSessions",
        type: "number",
        default: "10",
        description: "Limit concurrent sessions",
        post: ["5"],
      },
    },
  },
  onchain: {
    required: {
      gateway: {
        name: "-gateway",
        type: "boolean",
        default: "false",
        description: "Enable gateway mode (required)",
      },
      httpIngest: {
        name: "-httpIngest",
        type: "boolean",
        default: "false",
        description: "Enables AI HTTP endpoints",
      },
      aiServiceRegistry: {
        name: "-aiServiceRegistry",
        type: "boolean",
        default: "false",
        description: "Enables AI on-chain service registry",
      },
      network: {
        name: "-network",
        type: "string",
        default: "offchain",
        description: "Network type (offchain, arbitrum-one-mainnet)",
        post: ["arbitrum-one-mainnet"],
      },
      ethUrl: {
        name: "-ethUrl",
        type: "string",
        default: "none",
        description:
          "Set to <Badge color='gray'> `https://arb1.arbitrum.io/rpc` </Badge> to connect to Arbitrum Mainnet",
        post: ["https://arb1.arbitrum.io/rpc"],
      },
    },
    optional: {
      monitor: {
        name: "-monitor",
        type: "boolean",
        default: "false",
        description: "Enables metrics collection",
      },
      v: {
        name: "-v",
        type: "number",
        default: "4",
        description: "Verbosity level",
        post: ["6"],
      },
      rtmpAddr: {
        name: "-rtmpAddr",
        type: "string",
        default: "127.0.0.1:1935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:1935` </Badge> to allow external RTMP connections",
        post: ["0.0.0.0:1935"],
      },
      httpAddr: {
        name: "-httpAddr",
        type: "string",
        default: "127.0.0.1:8935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:8935` </Badge> to allow external HLS/API access",
        post: ["0.0.0.0:8935"],
      },
      cliAddr: {
        name: "-cliAddr",
        type: "string",
        default: "127.0.0.1:7935",
        description:
          "Set to <Badge color='gray'> `0.0.0.0:5935` </Badge> to expose the CLI API externally",
        post: ["0.0.0.0:5935"],
      },
      transcodingOptions: {
        name: "-transcodingOptions",
        type: "string",
        default: "P240p30fps16x9,P360p30fps16x9",
        description:
          "Higher quality transcoding options (e.g., P240p30fps16x9,P360p30fps16x9,P720p30fps16x9)",
        post: ["P240p30fps16x9,P360p30fps16x9,P720p30fps16x9"],
      },
      maxSessions: {
        name: "-maxSessions",
        type: "number",
        default: "10",
        description: "Limit concurrent sessions",
        post: ["5"],
      },
    },
  },
};

// All Available Flags
// The gateway supports numerous configuration flags flags.go:1-148 :

// Network & Addresses:

// -rtmpAddr - RTMP bind address (default: 127.0.0.1:1935)
// -httpAddr - HTTP bind address (default: 127.0.0.1:8935)
// -cliAddr - CLI bind address (default: 127.0.0.1:5935)
// -orchAddr - Orchestrator addresses to connect to
// Transcoding:

// -transcodingOptions - Video profiles to create
// -maxSessions - Maximum concurrent sessions
// AI:

// -httpIngest - Enable HTTP ingest (required for AI)
// Monitoring:

// -monitor - Enable metrics collection
// -v - Verbosity level (0-6)

// For a complete list of all available flags, run:

// docker run --rm livepeer/go-livepeer:master -help

// The gateway will automatically create the data directory structure on first run
// All configuration can be updated dynamically via the CLI API without restarting
// The -orchAddr flag is required and must point to a running orchestrator
// For production use, consider adding authentication via -authWebhookUrl flags.go:136
