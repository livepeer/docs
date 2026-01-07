// Available AI Endpoints
// The gateway exposes these AI endpoints ai_http.go :
export const CONFIG_FLAGS = {
  offchain: {
    required: {
      gateway: {
        name: "-gateway",
        type: "boolean",
        default: "false",
        description: "Enable gateway mode (required)",
      },
      network: {
        name: "-network",
        type: "string",
        default: "offchain",
        description: "Network type (offchain, arbitrum-one-mainnet)",
        post: ["arbitrum-one-mainnet"],
      },
      orchAddr: {
        name: "-orchAddr",
        type: "string",
        default: "none",
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
        description: "Enable gateway mode (required)",
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
