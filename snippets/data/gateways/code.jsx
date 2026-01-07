// Segmented Code Blocks
// DOCKER

export const DOCKER_CODE = {
  install: {
    filename: "Install go-livepeer",
    icon: "terminal",
    language: "bash",
    codeString: `docker pull livepeer/go-livepeer:master`,
  },
  create: {
    filename: "Create the Gateway Volume",
    icon: "terminal",
    language: "bash",
    codeString: `docker volume create dual-gateway-lpData`,
  },
  run: {
    filename: "Run the Gateway",
    icon: "terminal",
    language: "bash",
    codeString: `docker-compose up -d`,
  },
  verify: {
    filename: "Verify Gateway is Running",
    icon: "terminal",
    language: "bash",
    codeString: `docker logs dual-gateway`,
  },
  flags: {
    filename: "View all available flags",
    icon: "terminal",
    language: "bash",
    codeString: `docker run --rm livepeer/go-livepeer:master -help`,
  },
  sendVideo: {
    filename: "Verify FFmpeg is installed",
    icon: "terminal",
    language: "bash",
    codeString: `docker run --rm -v "$(pwd):/workspace" -w /workspace \  
      jrottenberg/ffmpeg:4.4-alpine \  
      -re -i test-video.mp4 -c copy -f flv rtmp://host.docker.internal:1935/stream/test-key`,
    preNote: "",
    postNote:
      "Use host.docker.internal instead of localhost when running FFmpeg from a Docker container to connect to services on the host machine.",
  },
};

export const DOCKER_YML = {
  offChain: {
    videoMin: `version: '3.9'

services:
  video-gateway:
    image: livepeer/go-livepeer:master
    container_name: gateway
    hostname: gateway
    ports:
      # RTMP for video ingest
      - 1935:1935
      # HTTP API (optional)
      - 8935:8935
    volumes:
      - gateway-lpData:/root/.lpData
    command:
      # REQUIRED
      - -gateway
      # Connects to your orchestrator(s)
      - -orchAddr=<ORCHESTRATOR_ADDRESSES>
      # Optional. Defaults to localhost
      - -httpAddr=0.0.0.0:8935

volumes:
  gateway-lpData:
    external: true
`,
    video: `
version: '3.9'

  services:  
    video-gateway:  
        image: livepeer/go-livepeer:master  
        container_name: 'gateway'  
        hostname: 'gateway'  
        ports:  
          - 1935:1935  # Required. RTMP for video ingest  
          - 8935:8935  # HTTP API for both video and AI  
          - 5935:5935  # CLI port (optional - exposes CLI API, defaults to localhost)  
        volumes:  
          - gateway-lpData:/root/.lpData  
        command: 
                    # REQUIRED
                    -gateway
                    -orchAddr=<ORCHESTRATOR_ADDRESSES> # Connects to your orchestrator(s)

                    # OPTIONAL (Recommended)
                    -httpIngest # Enables HTTP video ingest (in addition to RTMP)
                    -monitor=true # Enables metrics collection
                    -v=6 # Verbosity level
                    -rtmpAddr=0.0.0.0:1935 # Open RTMP port to external RTMP (video) stream connections. Defaults to localhost
                    -httpAddr=0.0.0.0:8935 # Open HTTP port to external connections: HLS playback, HTTP ingest, and API endpoints (default: localhost)
                    -cliAddr=0.0.0.0:5935 # Exposes the CLI API. Defaults to 127.0.0.1:7935 (localhost)
                    -transcodingOptions=P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 # Higher Quality transcoding options. Defaults to P240p30fps16x9,P360p30fps16x9
                    # OR -transcodingOptions=/root/.lpData/transcodingOptions.json (path to local file instead)
                    -maxSessions=5 # Limit Concurrent sessions. Defaults to 10

  volumes:  
    gateway-lpData:  
      external: true
`,
    aiMin: `version: '3.9'

services:
  ai-gateway:
    image: livepeer/go-livepeer:master
    container_name: ai-gateway
    hostname: ai-gateway
    ports:
      # HTTP API for AI
      - 8935:8935
    volumes:
      - ai-gateway-lpData:/root/.lpData
    command:
      # REQUIRED
      - -gateway
      # Connects to your orchestrator(s)
      - -orchAddr=<ORCHESTRATOR_ADDRESSES>
      # Enables AI HTTP endpoints
      - -httpIngest

volumes:
  ai-gateway-lpData:
    external: true
`,
    ai: `version: '3.9'

services:
  ai-gateway:
    image: livepeer/go-livepeer:master
    container_name: ai-gateway
    hostname: ai-gateway
    ports:
      # HTTP API for AI (required)
      - 8935:8935
      # CLI port (optional)
      - 5935:5935
    volumes:
      - ai-gateway-lpData:/root/.lpData
    command:
      # REQUIRED
      - -gateway
      # Connects to your orchestrator(s)
      - -orchAddr=<ORCHESTRATOR_ADDRESSES>
      # Enables AI HTTP endpoints
      - -httpIngest

      # OPTIONAL (Recommended)
      # Enables metrics collection
      - -monitor=true
      # Verbosity level
      - -v=6
      # Exposes HTTP API externally
      - -httpAddr=0.0.0.0:8935
      # Exposes the CLI API. Defaults to localhost
      - -cliAddr=0.0.0.0:5935

volumes:
  ai-gateway-lpData:
    external: true
`,
    dualMin: `version: '3.9'

services:
  dual-gateway:
    image: livepeer/go-livepeer:master
    container_name: dual-gateway
    hostname: dual-gateway
    ports:
      # RTMP for video ingest
      - 1935:1935
      # HTTP API for both video and AI
      - 8935:8935
    volumes:
      - dual-gateway-lpData:/root/.lpData
    command:
      # REQUIRED
      - -gateway
      # Connects to your orchestrator(s)
      - -orchAddr=<ORCHESTRATOR_ADDRESSES>
      # Enables AI HTTP endpoints
      - -httpIngest

volumes:
  dual-gateway-lpData:
    external: true
`,
    dual: `version: '3.9'

services:
  dual-gateway:
    image: livepeer/go-livepeer:master
    container_name: dual-gateway
    hostname: dual-gateway
    ports:
      - 1935:1935 # RTMP expose (video)
      - 8935:8935 # HTTP API expose (AI/video)
      - 5935:5935 # CLI port expose (optional)
    volumes:
      - dual-gateway-lpData:/root/.lpData
    command:
      # REQUIRED
      - -gateway
      - -httpIngest
      - -orchAddr=<http://ORCHESTRATOR_IP:PORT>

      # OPTIONAL (Recommended)
      - -monitor=true
      - -v=6
      - -rtmpAddr=0.0.0.0:1935
      - -httpAddr=0.0.0.0:8935
      - -cliAddr=0.0.0.0:5935
      - -transcodingOptions=P240p30fps16x9,P360p30fps16x9,P720p30fps16x9
      - -maxSessions=5

volumes:
  dual-gateway-lpData:
    external: true
`,
  },
  onChain: {
    video: `version: '3.9'

services:
  video-gateway:
    image: livepeer/go-livepeer:master
    container_name: video-gateway
    hostname: video-gateway
    ports:
      # RTMP for video ingest
      - 1935:1935
      # HTTP API for video (optional)
      - 8935:8935
      # CLI port (optional)
      - 5935:5935
    volumes:
      - video-gateway-lpData:/root/.lpData
      # (optional) Mount your own keystore
      # - ./keystore:/root/.lpData/keystore
    command:
      # REQUIRED
      - -gateway
      # Network to connect to (default: offchain)
      - -network=arbitrum-one-mainnet
      # RPC to interface with Arbitrum Mainnet Blockchain
      - -ethUrl=https://arb1.arbitrum.io/rpc

      # OPTIONAL (Recommended)
      # Enables HTTP video ingest (in addition to RTMP)
      - -httpIngest
      # Enables metrics collection
      - -monitor=true
      # Verbosity level
      - -v=6
      # Open RTMP port externally. Defaults to localhost
      - -rtmpAddr=0.0.0.0:1935
      # Open HTTP port externally. Defaults to localhost
      - -httpAddr=0.0.0.0:8935
      # Exposes the CLI API. Defaults to localhost
      - -cliAddr=0.0.0.0:5935
      # Higher quality transcoding options
      - -transcodingOptions=P240p30fps16x9,P360p30fps16x9,P720p30fps16x9
      # Limit concurrent sessions. Defaults to 10
      - -maxSessions=5

      # OPTIONAL (Advanced: Wallet Options - auto-generated if not provided)
      # Bring your own ETH account address
      # - -ethAcctAddr=<ETH_ACCOUNT_ADDRESS>
      # Path to keystore directory or keyfile
      # - -ethKeystorePath=/root/.lpData/keystore
      # Path to password file
      # - -ethPassword=/root/.lpData/keystore/password.txt

      # OPTIONAL (Advanced: Pricing Options)
      # Max price per pixel in wei (defaults to 0: ANY price)
      # - -maxPricePerUnit=1000000000

volumes:
  video-gateway-lpData:
    external: true
`,
    ai: `version: '3.9'

services:
  ai-gateway:
    image: livepeer/go-livepeer:master
    container_name: ai-gateway
    hostname: ai-gateway
    ports:
      # HTTP API for AI
      - 8935:8935
      # CLI port (optional)
      - 5935:5935
    volumes:
      - ai-gateway-lpData:/root/.lpData
      # (optional) Mount your own keystore
      # - ./keystore:/root/.lpData/keystore
    command:
      # REQUIRED
      - -gateway
      # Enables AI HTTP endpoints
      - -httpIngest
      # Enables AI on-chain service registry
      - -aiServiceRegistry
      # Network to connect to (default: offchain)
      - -network=arbitrum-one-mainnet
      # RPC to interface with Arbitrum Mainnet Blockchain
      - -ethUrl=https://arb1.arbitrum.io/rpc

      # OPTIONAL (Recommended)
      # Enables metrics collection
      - -monitor=true
      # Verbosity level
      - -v=6
      # Open HTTP port externally. Defaults to localhost
      - -httpAddr=0.0.0.0:8935
      # Exposes the CLI API. Defaults to localhost
      - -cliAddr=0.0.0.0:5935

      # OPTIONAL (Advanced: Wallet Options - auto-generated if not provided)
      # Bring your own ETH account address
      # - -ethAcctAddr=<ETH_ACCOUNT_ADDRESS>
      # Path to keystore directory or keyfile
      # - -ethKeystorePath=/root/.lpData/keystore
      # Path to password file
      # - -ethPassword=/root/.lpData/keystore/password.txt

      # OPTIONAL (Advanced: Pricing Options)
      # Max price per AI capability (pipeline/model)
      # - -maxPricePerCapability=/path/to/your/config.json
      # Payment processing frequency for Live AI Video workflows
      # - -livePaymentInterval=5s

volumes:
  ai-gateway-lpData:
    external: true
`,
    dual: `version: '3.9'

services:
  dual-gateway:
    image: livepeer/go-livepeer:master
    container_name: dual-gateway
    hostname: dual-gateway
    ports:
      # RTMP for video ingest
      - 1935:1935
      # HTTP API for both video and AI
      - 8935:8935
      # CLI port (optional)
      - 5935:5935
    volumes:
      - dual-gateway-lpData:/root/.lpData
      # (optional) Mount your own keystore
      # - ./keystore:/root/.lpData/keystore
    command:
      # REQUIRED
      - -gateway
      - -httpIngest
      - -aiServiceRegistry
      - -network=arbitrum-one-mainnet
      - -ethUrl=https://arb1.arbitrum.io/rpc

      # OPTIONAL (Recommended)
      - -monitor=true
      - -v=6
      - -rtmpAddr=0.0.0.0:1935
      - -httpAddr=0.0.0.0:8935
      - -cliAddr=0.0.0.0:5935
      - -transcodingOptions=P240p30fps16x9,P360p30fps16x9,P720p30fps16x9
      - -maxSessions=5

      # OPTIONAL (Advanced: Wallet Options - auto-generated if not provided)
      # Bring your own ETH account address
      # - -ethAcctAddr=<ETH_ACCOUNT_ADDRESS>
      # Path to keystore directory or keyfile
      # - -ethKeystorePath=/root/.lpData/keystore
      # Path to password file
      # - -ethPassword=/root/.lpData/keystore/password.txt

      # OPTIONAL (Advanced: Pricing Options)
      # Max price per pixel in wei (defaults to 0: ANY price)
      # - -maxPricePerUnit=1000000000
      # Max price per AI capability (pipeline/model)
      # - -maxPricePerCapability=/path/to/your/config.json
      # Payment processing frequency for Live AI Video workflows
      # - -livePaymentInterval=5s

volumes:
  dual-gateway-lpData:
    external: true
`,
  },
};

export const BASH_CODE = {
  sendVideo: {
    filename: "Send a Video Stream",
    icon: "terminal",
    language: "bash",
    codeString: `ffmpeg -re -i test-video.mp4 -c copy -f flv rtmp://localhost:1935/stream/test-key`,
    wrap: true,
    preNote: "",
  },
  testRTMPingest: {
    filename: "Test RTMP Ingest",
    icon: "terminal",
    language: "bash",
    codeString: `ffmpeg -re -i test-video.mp4 -c copy -f flv rtmp://localhost:1935/stream/test-key`,
    preNote: "Send a Video Stream using FFmpeg:",
  },
  testHTTPingest: {
    filename: "Test HTTP Ingest",
    icon: "terminal",
    language: "bash",
    codeString: `curl -X PUT http://localhost:8935/live/test/0.ts --data-binary @test-segment.ts`,
    preNote: "Push a segment via HTTP:",
  },
  testHLS: {
    filename: "Access HLS Stream",
    icon: "terminal",
    language: "bash",
    codeString: `curl http://localhost:8935/hls/test-key/index.m3u8`,
    preNote: "Test playback by accessing the HLS stream:",
  },
  scriptVerify: {
    filename: "Use the build-in test stream to verify",
    icon: "terminal",
    language: "bash",
    codeString: `# Generate a test pattern and stream  
        ffmpeg -re -f lavfi -i testsrc=size=1280x720:rate=30,format=yuv420p \  
        -c:v libx264 -b:v 1000k -f flv rtmp://localhost:1935/stream/test-key`,
  },
  checkStatus: {
    filename: "Check Gateway Status",
    icon: "terminal",
    language: "bash",
    codeString: `curl http://localhost:5935/status`,
  },
  aiCapabilities: {
    filename: "Check Orchestrator's available capabilities",
    icon: "terminal",
    language: "bash",
    codeString: `curl http://localhost:5935/getOrchestrators`,
    preNote: "Check the orchestrator's AI capabilities:",
  },
};

export const CLI_CODE = {
  cliOptions: {
    filename: "CLI Options",
    icon: "terminal",
    language: "bash",
    codeString: `# Get current status  
        curl http://localhost:5935/status  
          
        # Get broadcast config  
        curl http://localhost:5935/getBroadcastConfig  
          
        # Get orchestrator info  
        curl http://localhost:5935/getOrchestrators`,
  },
  status: {
    filename: "Current Status",
    icon: "terminal",
    language: "bash",
    codeString: `curl http://localhost:5935/status`,
  },
  broadcastConfig: {
    filename: "Broadcast Configuration",
    icon: "terminal",
    language: "bash",
    codeString: `curl http://localhost:5935/getBroadcastConfig`,
  },
  orchestrators: {
    filename: "Orchestrator Information",
    icon: "terminal",
    language: "bash",
    codeString: `curl http://localhost:5935/getOrchestrators`,
  },
};

export const AI_TEST_COMMANDS = {
  textToImage: {
    filename: "Text-to-Image",
    icon: "terminal",
    language: "bash",
    wrap: true,
    codeString: `curl -X POST http://localhost:8935/text-to-image \  
        -H "Content-Type: application/json" \  
        -d '{  
          "prompt": "A beautiful sunset over mountains",  
          "model_id": "stabilityai/sdxl-turbo"  
        }'`,
    preNote: "Test Text-to-Image:",
  },
  imageToImage: {
    filename: "Image-to-Image",
    icon: "terminal",
    language: "bash",
    wrap: true,
    codeString: `curl -X POST http://localhost:8935/image-to-image \  
      -F "prompt=Turn this into a watercolor painting" \  
      -F "model_id=stabilityai/sdxl-turbo" \  
      -F "image=@input.jpg"`,
    preNote: "Test Image-to-Image:",
  },
  LLM: {
    filename: "LLM",
    icon: "terminal",
    language: "bash",
    wrap: true,
    codeString: `curl -X POST http://localhost:8935/llm \  
        -H "Content-Type: application/json" \  
        -d '{  
          "model": "meta-llama/llama-3.1-8B-Instruct",  
          "messages": [  
            {"role": "user", "content": "What is Livepeer?"}  
          ]  
        }'`,
    preNote: "Test LLM:",
  },
  liveVideoAI: {
    filename: "Live Video AI",
    icon: "terminal",
    language: "bash",
    wrap: true,
    codeString: `# Start a live AI video session  
      curl -X POST http://localhost:8935/live/video-to-video/mystream/start \  
        -H "Content-Type: application/json" \  
        -d '{  
          "model_id": "your-live-model"  
        }'`,
    preNote: "For live video-to-vdieo AI processing:",
  },
};

export const DYNAMIC_CLI = {
  config: {
    filename: "Dynamic Configuration",
    icon: "terminal",
    language: "bash",
    codeString: `# Update transcoding options  
        curl -X POST http://localhost:5935/setTranscodingOptions \  
          -d "transcodingOptions=P240p30fps16x9,P720p30fps16x9"  
          
        # Set max price  
        curl -X POST http://localhost:5935/setMaxPricePerUnit \  
          -d "maxPricePerUnit=1000000000"`,
    wrap: true,
    preNote:
      "Update transcoding options and set max price while running a Gateway:",
  },
};

export const CONFIG_FILES = {
  video: {
    transcodingOptionsJson: `[
  {
    "name": "240p",
    "width": 426,
    "height": 240,
    "bitrate": 250000,
    "fps": 30,
    "profile": "h264constrainedhigh"
  },
  {
    "name": "360p",
    "width": 640,
    "height": 360,
    "bitrate": 500000,
    "fps": 30,
    "profile": "h264constrainedhigh"
  },
  {
    "name": "720p",
    "width": 1280,
    "height": 720,
    "bitrate": 3000000,
    "fps": 30,
    "profile": "h264constrainedhigh"
  }
]`,
  },
  ai: {
    aiModelsJson: `[
  {
    "pipeline": "text-to-image",
    "model_id": "stabilityai/sd-turbo",
    "warm": true
  }
]`,
    aiPricingJsonMinimal: `{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "stabilityai/sd-turbo",
      "price_per_unit": 1000
    }
  ]
}`,
    aiPricingJson: `{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "stabilityai/sd-turbo",
      "price_per_unit": 1000,
      "pixels_per_unit": 1,
      "currency": "WEI"
    },
    {
      "pipeline": "image-to-video",
      "model_id": "default",
      "price_per_unit": 2000,
      "pixels_per_unit": 3,
      "currency": "WEI"
    },
    {
      "pipeline": "upscale",
      "model_id": "default",
      "price_per_unit": 1200,
      "pixels_per_unit": 1,
      "currency": "WEI"
    }
  ]
}`,
  },
  dual: {
    transcodingOptionsJson: `[
  {
    "name": "240p",
    "width": 426,
    "height": 240,
    "bitrate": 250000,
    "fps": 30,
    "profile": "h264constrainedhigh"
  },
  {
    "name": "360p",
    "width": 640,
    "height": 360,
    "bitrate": 500000,
    "fps": 30,
    "profile": "h264constrainedhigh"
  },
  {
    "name": "720p",
    "width": 1280,
    "height": 720,
    "bitrate": 3000000,
    "fps": 30,
    "profile": "h264constrainedhigh"
  }
]`,
    aiModelsJson: `[
  {
    "pipeline": "text-to-image",
    "model_id": "stabilityai/sd-turbo",
    "warm": true
  }
]`,
    aiPricingJsonMinimal: `{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "stabilityai/sd-turbo",
      "price_per_unit": 1000
    }
  ]
}`,
    aiPricingJson: `{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "stabilityai/sd-turbo",
      "price_per_unit": 1000,
      "pixels_per_unit": 1,
      "currency": "WEI"
    },
    {
      "pipeline": "image-to-video",
      "model_id": "default",
      "price_per_unit": 2000,
      "pixels_per_unit": 3,
      "currency": "WEI"
    },
    {
      "pipeline": "upscale",
      "model_id": "default",
      "price_per_unit": 1200,
      "pixels_per_unit": 1,
      "currency": "WEI"
    }
  ]
}`,
  },
  onchain: {
    keyStoreJson: `{
  "address": "0x1234567890123456789012345678901234567890",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
    "cipherparams": {
      "iv": "0x12345678901234567890123456789012"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
    },
    "mac": "0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
  },
  "id": "unique-id",
  "version": 3
}`,
  },
};

// The FFmpeg command:
// Reads test-video.mp4 from your local filesystem
// Streams it to the gateway's RTMP endpoint at localhost:1935
// Uses the stream key test-key ingest.md:21-33

export const FFMPEG_CODE = {
  install: {
    macOS: {
      filename: "Install FFmpeg using Brew",
      icon: "apple",
      language: "bash",
      codeString: `brew install ffmpeg`,
    },
    linux: {
      filename: "Install FFmpeg on Linux",
      icon: "linux",
      language: "bash",
      codeString: `sudo apt install ffmpeg`,
    },
    windows: {
      filename: "Install FFmpeg using Chocolatey",
      icon: "windows",
      language: "bash",
      codeString: `choco install ffmpeg`,
    },
  },
};

//MOVE THESE
export const createCodeBlock = (codeString, language, icon, ...props) => {
  const code = `docker pull livepeer/go-livepeer:master`;
  return (
    <CustomCodeBlock
      codeString={code}
      language="bash"
      icon="terminal"
      {...props}
    />
  );
};

export const expandableCode = () => {
  return (
    <Expandable title="Required Flags">
      <ResponseField name="flag" type="type" default="hi">
        Description
      </ResponseField>
    </Expandable>
  );
};

export const CustomResponseField = ({ description, ...props }) => {
  const uniqueId = `custom-rf-${Math.random().toString(36).substring(2, 11)}`;

  return (
    <div className={uniqueId}>
      <style>{`
        .${uniqueId} > .field {
          border-bottom: none !important;
          margin-bottom: -20px !important;
        }
      `}</style>
      <ResponseField {...props}>{description}</ResponseField>
    </div>
  );
};

export const ResponseFieldExpandable = ({ fields = {}, ...props }) => {
  const fieldsArray = Array.isArray(fields) ? fields : Object.values(fields);
  console.log("fieldsArray", fieldsArray);
  return (
    <Expandable {...props}>
      {fieldsArray.map((field, index) => (
        <ValueResponseField key={index} {...field} />
      ))}
    </Expandable>
  );
};

// old stuff
// ```bash icon="terminal" docker-compose.yml
//           version: '3.9'

//           services:
//             dual-gateway:
//               image: livepeer/go-livepeer:master
//               container_name: 'dual-gateway'
//               hostname: 'dual-gateway'
//               ports:
//                 - 1935:1935  # RTMP for video ingest
//                 - 8935:8935  # HTTP API for both video and AI
//                 - 5935:5935  # CLI port
//               volumes:
//                 - dual-gateway-lpData:/root/.lpData
//                 - ./aiModels.json:/root/.lpData/aiModels.json
//                 - ./models:/root/.lpData/models
//               command: '-network offchain
//                         -gateway
//                         -httpIngest
//                         -aiServiceRegistry
//                         -monitor=true
//                         -v=6
//                         -rtmpAddr=0.0.0.0:1935
//                         -httpAddr=0.0.0.0:8935
//                         -cliAddr=0.0.0.0:5935
//                         -orchAddr=<ORCHESTRATOR_ADDRESSES>
//                         -transcodingOptions=P240p30fps16x9,P360p30fps16x9,P720p30fps16x9
//                         -aiModels=/root/.lpData/aiModels.json
//                         -aiModelsDir=/root/.lpData/models
//                         -livePaymentInterval=5s'

//             volumes:
//               dual-gateway-lpData:
//                 external: true
//         ```;
