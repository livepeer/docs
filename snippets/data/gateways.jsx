/**
 * NOTE:
 * Mintlify requires you to import this into the page it's being used on.
 * It CANNOT be imported into a snippet file. (WTF Mintlify)
 */

// import { latestVersion } from "/snippets/automations/globals/globals.mdx";

// import { CustomCodeBlock } from "/snippets/components/displays/code/code.jsx";
// import { latestVersion } from "/snippets/automations/globals/globals.mdx";

/**
 *
 * QUICKSTART STEPS LAYOUT
 *
 */
export const GatewaySteps = [
  {
    title: "Install Gateway Software",
    icon: "terminal",
    content: "Install the Livepeer Gateway software.",
  },
  {
    title: "Configure Gateway",
    icon: "wrench",
    content: "Configure transcoding options, models, pipelines & pricing",
  },
  {
    title: "Run Gateway",
    icon: "rocket",
    content: "Start the Gateway service.",
  },
  {
    title: "Connect Gateway",
    icon: "link",
    content: "Connect the Gateway to the Livepeer network.",
  },
  {
    title: "Test Gateway",
    icon: "check-circle",
    content: "Verify the Gateway is working correctly.",
  },
];

/**
 *
 * QUICKSTART PAGE DATA
 *
 */

export const dockerOffChainQuickstart = {
  installStep: (
    <>
      <>
        Pull the docker image from{" "}
        <a href="https://hub.docker.com/r/livepeer/go-livepeer">
          Livepeer Docker Hub{" "}
        </a>
      </>
      <CustomCodeBlock
        codeString="docker pull livepeer/go-livepeer:master"
        language="bash"
        icon="docker"
        filename="Docker go-livepeer"
      />
    </>
  ),
  configureStep: (
    <CustomCodeBlock
      codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
      language="bash"
      icon="terminal"
    />
  ),
  runStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  connectStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  testStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
};

export const dockerOnChainQuickstart = {
  installStep: (
    <CustomCodeBlock
      codeString="docker pull livepeer/go-livepeer:master"
      language="bash"
      icon="terminal"
    />
  ),
  configureStep: (
    <CustomCodeBlock
      codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
      language="bash    "
      icon="terminal"
    />
  ),
  runStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  connectStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  testStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
};

export const linuxOffChainQuickstart = {
  installStep: (
    <CustomCodeBlock
      codeString="sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz"
      placeholderValue={latestVersion}
      language="bash"
      icon="terminal"
    />
  ),
  configureStep: (
    <CustomCodeBlock
      codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
      language="bash"
      icon="terminal"
    />
  ),
  runStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  connectStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  testStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
};

export const linuxOnChainQuickstart = {
  installStep: (
    <CustomCodeBlock
      codeString="sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz"
      placeholderValue={latestVersion}
      language="bash"
      icon="terminal"
    />
  ),
  configureStep: (
    <CustomCodeBlock
      codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
      language="bash"
      icon="terminal"
    />
  ),
  runStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  connectStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  testStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
};

export const windowsOffChainQuickstart = {
  installStep: (
    <CustomCodeBlock
      codeString="https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-windows-amd64.zip"
      placeholderValue={latestVersion}
      language="bash"
      icon="terminal"
    />
  ),
  configureStep: (
    <CustomCodeBlock
      codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
      language="bash"
      icon="terminal"
    />
  ),
  runStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  connectStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  testStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
};

export const windowsOnChainQuickstart = {
  installStep: (
    <CustomCodeBlock
      codeString="https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-windows-amd64.zip"
      placeholderValue={latestVersion}
      language="bash"
      icon="terminal"
    />
  ),
  configureStep: (
    <CustomCodeBlock
      codeString="nano -p /var/lib/docker/volumes/gateway-lpData/_data/aiModels.json"
      language="bash"
      icon="terminal"
    />
  ),
  runStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  connectStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
  testStep: (
    <CustomCodeBlock
      codeString="docker run -p 8935:8935 -p 1935:1935 livepeer/go-livepeer:master -gateway -httpAddr=0.0.0.0:8935 -rtmpAddr=0.0.0.0:1935"
      language="bash"
      icon="terminal"
    />
  ),
};

// INDEX FILE - DOES NOT WORK IN MINTLIFY
// Mintlify cannot handle object exports that reference other exports
// You must import the individual quickstart objects directly in your MDX file
// export const QUICKSTARTS = {
//   docker: {
//     offChain: dockerOffChainQuickstart,
//     onChain: dockerOnChainQuickstart,
//   },
//   linux: {
//     offChain: linuxOffChainQuickstart,
//     onChain: linuxOnChainQuickstart,
//   },
//   windows: {
//     offChain: windowsOffChainQuickstart,
//     onChain: windowsOnChainQuickstart,
//   },
// };

/**
 *
 * CONFIG FILES
 *
 * CONFIG FILES
 *
 * */

// INDEX FILE - DOES NOT WORK IN MINTLIFY - will need to combine all into one funciton
// export const CONFIG_FILES = {
//   video: {
//     transcodingOptionsJson,
//   },
//   ai: {
//     aiModelsJson,
//     aiPricingJsonMinimal,
//     aiPricingJson,
//   },
//   dual: {
//     transcodingOptionsJson,
//     aiModelsJson,
//     aiPricingJsonMinimal,
//     aiPricingJson,
//   },
//   onchain: {
//     keyStoreJson,
//   },
// };

export const transcodingOptionsJson = `[
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
]`;

export const aiModelsJson = `[
  {
    "pipeline": "text-to-image",
    "model_id": "stabilityai/sd-turbo",
    "warm": true
  }
]`;

export const aiPricingJsonMinimal = `{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "stabilityai/sd-turbo",
      "price_per_unit": 1000
    }
  ]
}`;

export const aiPricingJson = `
{  
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
}`;

// WRONG / FIX
export const keyStoreJson = `{
  "address": "0x1234567890123456789012345678901234567890",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
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
    "mac": "0x123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
    },
  "id": "unique-id",
  "version": 3
}`;

/* CODE BLOCKS */
// ?? maybe

/**
 *
 * DOCKER YAML
 *
 * DOCKER YAML
 *
 * */

// INDEX FILE (wont work in mintlify)
// export const DOCKER_YML = {
//   offChain: {
//     videoMin: devDockerComposeYmlVideoMinimal,
//     video: devDockerComposeYmlVideo,
//     aiMin: devDockerComposeYmlAiMinimal,
//     ai: devDockerComposeYmlAi,
//     dualMin: devDockerComposeYmlDualMinimal,
//     dual: devDockerComposeYmlDual,
//   },
//   onChain: {
//     video: prodDockerComposeYmlVideo,
//     ai: prodDockerComposeYmlAi,
//     dual: prodDockerComposeYmlDual,
//   },
// };

/** OFFCHAIN  */
const randomNotes = {
  devDocker: {
    // API-only gateway (no RTMP):
    // services:
    //   gateway:
    //     image: livepeer/go-livepeer:master
    //     ports:
    //       - 8935:8935  # HTTP API only
    //     command: '-gateway
    //               -orchAddr=<ORCHESTRATOR_ADDRESSES>
    //               -httpAddr=0.0.0.0:8935'
    // Full video gateway (with RTMP):
    // services:
    //   gateway:
    //     image: livepeer/go-livepeer:master
    //     ports:
    //       - 1935:1935  # RTMP ingest
    //       - 8935:8935  # HTTP API
    //     command: '-gateway
    //               -orchAddr=<ORCHESTRATOR_ADDRESSES>
    //               -httpAddr=0.0.0.0:8935'
    // When you don't specify -httpAddr:
    // The gateway automatically starts an HTTP server on 127.0.0.1:8935 starter.go:195-197
    // This server handles HLS playback, HTTP ingest, and API endpoints
    // Only connections from within the container/localhost can reach it
  },
  recommended: {
    // RECOMMENDED SETUP
    // Essential Flags
    // -gateway - Identifies the node as a gateway flags.go:44
    // -orchAddr - Connects to orchestrators for transcoding (REQUIRED) flags.go:23
    // Network Access
    // -httpAddr=0.0.0.0:8935 - Allows external HLS playback and API access flags.go:14
    // -rtmpAddr=0.0.0.0:1935 - Accepts RTMP streams from external sources flags.go:12
    // Defaults You Get Automatically
    // Network: offchain (simpler, no blockchain needed) starter.go:194
    // Transcoding profiles: P240p30fps16x9,P360p30fps16x9 (basic quality levels) starter.go:210
    // HTTP ingest: Enabled by default starter.go:282-283
  },
  aiEssential: {
    // The only essential flags for an AI gateway are:
    // -gateway - To identify as a gateway
    // -orchAddr - To connect to your orchestrator with AI worker flags.go:23
    // -httpAddr - To expose the API (optional but recommended)
    // Not needed for gateway:
    // -httpIngest # Only needed for HTTP video ingest
    // -aiModels - Only required on AI workers/orchestrators starter.go:231
    // -aiModelsDir - Only relevant for AI workers flags.go:60
    // -aiServiceRegistry - Only needed for on-chain AI discovery
    // ./aiModels.json volume mount - Not used by gateway
  },
};

/** OFFCHAIN VIDEO */
export const devDockerComposeYmlVideoMinimal = `
version: '3.9'

  services:  
    video-gateway:  
      image: livepeer/go-livepeer:master  
      container_name: 'gateway'  
      hostname: 'gateway'  
      ports:  
        - 1935:1935  # RTMP for video ingest  
        - 8935:8935  # HTTP API (optional)  
      volumes:  
        - gateway-lpData:/root/.lpData  
      command: '# REQUIRED
                -gateway
                -orchAddr=<ORCHESTRATOR_ADDRESSES>  # Connects to your orchestrator(s)  
                -httpAddr=0.0.0.0:8935  # Optional. Defaults to 127.0.0.1:8935 (container internal only)
            
  volumes:  
    gateway-lpData:  
      external: true
`;

// Below works for both dev & prod
export const devDockerComposeYmlVideo = `
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
        command: '# REQUIRED
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
`;

/** OFFCHAIN AI */
export const devDockerComposeYmlAiMinimal = `
version: '3.9'  
  
services:  
  ai-gateway:  
    image: livepeer/go-livepeer:master  
    container_name: 'ai-gateway'  
    hostname: 'ai-gateway'  
    ports:  
      - 8935:8935  # HTTP API   
    volumes:  
      - ai-gateway-lpData:/root/.lpData  
    command: ' # REQUIRED
                  -gateway
                  -orchAddr=<ORCHESTRATOR_ADDRESSES> # Connects to your orchestrator(s)
                  -httpIngest # Enables AI HTTP endpoints
  
volumes:  
  ai-gateway-lpData:  
    external: true
`;

export const devDockerComposeYmlAi = `
version: '3.9'

  services:  
  ai-gateway:  
    image: livepeer/go-livepeer:master  
    container_name: 'ai-gateway'  
    hostname: 'ai-gateway'  
    ports:  
      - 8935:8935  # HTTP API (Required for AI) 
      - 5935:5935  # CLI port (optional but useful)  
    volumes:  
      - ai-gateway-lpData:/root/.lpData  
    command: '# REQUIRED 
                -gateway
                -orchAddr=<ORCHESTRATOR_ADDRESS> # to connect to your local Orchestrator
                -httpAddr=0.0.0.0:8935 # Exposes AI HTTP endpoints

              # OPTIONAL (Recommended)
                -monitor=true # Metrics collection
                -v=6 # Verbosity level
                -cliAddr=0.0.0.0:5935 # Exposes the CLI API. Defaults to 127.0.0.1:7935 (localhost)

  volumes:
    ai-gateway-lpData:
      external: true
`;

/** OFFCHAIN DUAL */
export const devDockerComposeYmlDualMinimal = `
  version: '3.9'  
    
    services:  
      dual-gateway:
        image: livepeer/go-livepeer:master
        container_name: 'dual-gateway'
        hostname: 'dual-gateway'
        ports:
          - 1935:1935  # RTMP for video ingest
          - 8935:8935  # HTTP API for both video and AI
        volumes:
          - dual-gateway-lpData:/root/.lpData
        command: '# REQUIRED
                    -gateway
                    -orchAddr=<ORCHESTRATOR_ADDRESSES> # Connects to your orchestrator(s)
                    -httpIngest # Enables AI HTTP endpoints

      volumes:
        dual-gateway-lpData:
          external: true
`;

export const devDockerComposeYmlDual = `
  version: '3.9'  
    
    services:  
      dual-gateway:
        image: livepeer/go-livepeer:master
        container_name: 'dual-gateway'
        hostname: 'dual-gateway'
        ports:
          - 1935:1935  # RTMP for video ingest
          - 8935:8935  # HTTP API for both video and AI
          - 5935:5935  # CLI port (optional - exposes useful CLI API)
        volumes:
          - dual-gateway-lpData:/root/.lpData
        command: '# REQUIRED
                    -gateway
                    -httpIngest # Enables AI HTTP endpoints
                    -orchAddr=<ORCHESTRATOR_ADDRESSES> # Connects to your orchestrator(s)

                  # OPTIONAL (Recommended) 
                    -monitor=true # Enables metrics collection
                    -v=6 # Verbosity level
                    -rtmpAddr=0.0.0.0:1935 # Open RTMP port to external RTMP (video) stream connections. Defaults to localhost
                    -httpAddr=0.0.0.0:8935 # Open HTTP port to external connections: HLS playback, HTTP ingest, and API endpoints (default: localhost)
                    -cliAddr=0.0.0.0:5935 #Exposes the CLI API. Defaults to 127.0.0.1:7935 (localhost)
                    -transcodingOptions=P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 # Higher Quality transcoding options. Defaults to P240p30fps16x9,P360p30fps16x9
                    # OR -transcodingOptions=/root/.lpData/transcodingOptions.json (path to local file instead)
                    -maxSessions=5 # Limit Concurrent sessions. Defaults to 10

      volumes:
        dual-gateway-lpData:
          external: true
`;

/** ONCHAIN */
/** ONCHAIN VIDEO */
export const prodDockerComposeYmlVideo = `
version: '3.9'
  
  services:  
    video-gateway:  
      image: livepeer/go-livepeer:master  
      container_name: 'video-gateway'  
      hostname: 'video-gateway'  
      ports:  
        - 1935:1935  # RTMP for video ingest  
        - 8935:8935  # HTTP API for video (optional) 
        - 5935:5935  # CLI port (optional - exposes CLI API)  
      volumes:  
        - video-gateway-lpData:/root/.lpData  
        # (optional) - ./keystore:/root/.lpData/keystore  
      command: ' # REQUIRED
                  -gateway  
                  -network arbitrum-one-mainnet # Network to connect to (default: offchain)
                  -ethUrl=https://arb1.arbitrum.io/rpc  # RPC to interface with Arbitrum Mainnet Blockchain (check status on Chainlist)

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

                # OPTIONAL (Advanced: Wallet Options - will be auto-generated if not provided)
                  -ethAcctAddr=<ETH_ACCOUNT_ADDRESS>  # Bring your own ETH account address to use for on-chain operations
                  -ethKeystorePath=/root/.lpData/keystore  # Path to keystore directory or keyfile (leave blank to autogenerate)
                  -ethPassword=/root/.lpData/keystore/password.txt # Path to password file (leave blank to autogenerate)

                # OPTIONAL (Advanced: Pricing Options)
                  -maxPricePerUnit=1000000000' # Optional: Max price (video) per pixel denominated in wei (defaults to 0: ANY price)
  
  volumes:  
    video-gateway-lpData:  
      external: true
`;

/** ONCHAIN AI */
export const prodDockerComposeYmlAi = `
version: '3.9'
  
  services:  
    ai-gateway:
      image: livepeer/go-livepeer:master  
      container_name: 'ai-gateway'  
      hostname: 'ai-gateway'  
      ports:  
        - 8935:8935  # HTTP API for AI  
        - 5935:5935  # CLI port (optional - exposes CLI API)  
      volumes:  
        - ai-gateway-lpData:/root/.lpData
        # (optional) -./keystore:/root/.lpData/keystore
      command: '# REQUIRED
                  -gateway
                  -httpIngest # Enables AI HTTP endpoints
                  -aiServiceRegistry # Enables AI on-chain service registry (find AI models/orchestrators)
                  -network arbitrum-one-mainnet # Network to connect to (default: offchain)
                  -ethUrl=https://arb1.arbitrum.io/rpc  # RPC to interface with Arbitrum Mainnet Blockchain (check status on Chainlist)

                # OPTIONAL (Recommended)
                  -monitor=true # Enables metrics collection
                  -v=6 # Verbosity level
                  -httpAddr=0.0.0.0:8935 # Open HTTP port to external connections: HLS playback, HTTP ingest, and API endpoints (default: localhost)
                  -cliAddr=0.0.0.0:5935 # Exposes the CLI API. Defaults to 127.0.0.1:7935 (localhost)

                # OPTIONAL (Advanced Wallet Options. Auto-generated if not provided)
                  -ethAcctAddr=<ETH_ACCOUNT_ADDRESS>  # Bring your own ETH account address to use for on-chain operations
                  -ethKeystorePath=/root/.lpData/keystore  # Path to keystore directory or keyfile (leave blank to autogenerate)
                  -ethPassword=/root/.lpData/keystore/password.txt # Path to password file (leave blank to autogenerate)

                # OPTIONAL (Advanced: Pricing Options)
                  # -maxPricePerCapability=/path/to/your/config.json # Optional: Max price per AI capability (pipeline/model). Defaults to 0 (ANY price)
                  # OR -maxPricePerCapability={"capabilities_prices": [{"pipeline": "text-to-image", "model_id": "stabilityai/sd-turbo", "price_per_unit": 1000}]} # Max price for specific pipeline/model
                  # -livePaymentInterval=5s # Optional: Payment processing frequency (e.g. 5s, 10s, 300ms) for Live AI Video workflows, where the gateway needs to send periodic payments to the orchestrator. Defaults to 5s

  volumes:
    ai-gateway-lpData:
      external: true
`;

/** ONCHAIN DUAL */
export const prodDockerComposeYmlDual = `
version: '3.9'

  services:  
  dual-gateway:  
    image: livepeer/go-livepeer:master  
    container_name: 'dual-gateway'  
    hostname: 'dual-gateway'  
    ports:  
      - 1935:1935  # RTMP for video ingest  
      - 8935:8935  # HTTP API for both video and AI  
      - 5935:5935  # CLI port (optional - exposes CLI API)  
    volumes:  
      - dual-gateway-lpData:/root/.lpData  
      # (optional) - ./keystore:/root/.lpData/keystore  
    command: '# REQUIRED
                -gateway
                -httpIngest # Enables AI HTTP endpoints
                -aiServiceRegistry # Enables AI on-chain service registry (find AI models/orchestrators)
                -network arbitrum-one-mainnet # Network to connect to (default: offchain)
                -ethUrl=https://arb1.arbitrum.io/rpc  # RPC to interface with Arbitrum Mainnet Blockchain (check status on Chainlist)

              # OPTIONAL (Recommended)
                -monitor=true # Enables metrics collection
                -v=6 # Verbosity level
                -httpAddr=0.0.0.0:8935 # Open HTTP port to external connections: HLS playback, HTTP ingest, and API endpoints (default: localhost)
                -cliAddr=0.0.0.0:5935 # Exposes the CLI API. Defaults to 127.0.0.1:7935 (localhost)
                -rtmpAddr=0.0.0.0:1935 # Open RTMP port to external RTMP (video) stream connections. Defaults to localhost
                -transcodingOptions=P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 # Higher Quality transcoding options. Defaults to P240p30fps16x9,P360p30fps16x9
                # OR -transcodingOptions=/root/.lpData/transcodingOptions.json (path to local file instead)
                -maxSessions=5 # Limit Concurrent sessions. Defaults to 10

              # OPTIONAL (Advanced: Wallet Options - will be auto-generated if not provided)
                -ethAcctAddr=<ETH_ACCOUNT_ADDRESS>  # Bring your own ETH account address to use for on-chain operations
                -ethKeystorePath=/root/.lpData/keystore  # Path to keystore directory or keyfile (leave blank to autogenerate)
                -ethPassword=/root/.lpData/keystore/password.txt # Path to password file (leave blank to autogenerate)

              # OPTIONAL (Advanced: Pricing Options)
                -maxPricePerUnit=1000000000' # Optional: Max price per unit denominated in wei (defaults to 0: ANY price)
                # -maxPricePerCapability=/path/to/your/config.json # Optional: Max price per AI capability (pipeline/model). Defaults to 0 (ANY price)
                # OR -maxPricePerCapability={"capabilities_prices": [{"pipeline": "text-to-image", "model_id": "stabilityai/sd-turbo", "price_per_unit": 1000}]} # Max price for specific pipeline/model
                -livePaymentInterval=5s # Optional: Payment processing frequency for Live AI Video workflows, where the gateway needs to send periodic payments to the orchestrator. Defaults to 5s
              
  volumes:
    gateway-lpData:
      external: true
`;
