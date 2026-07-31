// Segmented Code Blocks
// LINUX / macOS Binary Install

export const LINUX_CODE = {
  // ── Install steps ─────────────────────────────────────────────
  wgetCheck: {
    filename: 'Verify Prerequisites',
    icon: 'terminal',
    language: 'bash',
    codeString: `wget --version | head -1
tar --version | head -1`,
  },
  downloadLinux: {
    filename: 'Download Binary (Linux amd64)',
    icon: 'linux',
    language: 'bash',
    codeString: `sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz`,
  },
  downloadMacIntel: {
    filename: 'Download Binary (macOS Intel)',
    icon: 'apple',
    language: 'bash',
    codeString: `curl -LO https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-darwin-amd64.tar.gz`,
  },
  downloadMacArm: {
    filename: 'Download Binary (macOS Apple Silicon)',
    icon: 'apple',
    language: 'bash',
    codeString: `curl -LO https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-darwin-arm64.tar.gz`,
  },
  extractInstall: {
    filename: 'Extract & Install',
    icon: 'terminal',
    language: 'bash',
    codeString: `sudo tar -zxvf livepeer-linux-amd64.tar.gz
sudo rm livepeer-linux-amd64.tar.gz
sudo mv livepeer-linux-amd64/* /usr/local/bin/`,
  },
  testInstall: {
    filename: 'Run the Gateway',
    icon: 'terminal',
    language: 'bash',
    codeString: `livepeer -gateway`,
  },
  testInstallOutput: {
    filename: 'Expected Log Output',
    icon: 'terminal',
    language: 'txt',
    codeString: `>_ livepeer -gateway

*---------*------*
| Gateway | true |
*---------*------*
I1222 12:37:23.339916   97244 starter.go:537] ***Livepeer is running on the offchain network***
I1222 12:37:23.340276   97244 starter.go:554] Creating data dir: /Users/<me>/.lpData/offchain
I1222 12:37:23.344584   97244 starter.go:723] ***Livepeer is in off-chain mode***
E1222 12:37:23.345022   97244 starter.go:1586] No orchestrator specified; transcoding will not happen
I1222 12:37:23.350972   97244 starter.go:1827] ***Livepeer Running in Gateway Mode***
I1222 12:37:23.350991   97244 starter.go:1828] Video Ingest Endpoint - rtmp://127.0.0.1:1935
I1222 12:37:23.351002   97244 starter.go:1837] Livepeer Node version: 0.8.8
I1222 12:37:23.351124   97244 mediaserver.go:247] HTTP Server listening on http://127.0.0.1:9935
I1222 12:37:23.351398   97244 webserver.go:20] CLI server listening on 127.0.0.1:5935`,
  },

  // ── Existing entries (used by quickstart consumers) ───────────
  downloadBinary: {
    filename: 'Download Binary',
    icon: 'terminal',
    language: 'bash',
    preNote: 'Download the latest binary from the go-livepeer releases page',
    codeString: `sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz`,
  },
  install: {
    filename: 'Install go-livepeer',
    icon: 'terminal',
    language: 'bash',
    codeString: `sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz`,
  },
  clone: {
    filename: 'Clone go-livepeer',
    icon: 'terminal',
    language: 'bash',
    preNote: 'Clone the go-livepeer repository',
    codeString: `
      git clone https://github.com/livepeer/go-livepeer.git
      cd go-livepeer
      `,
  },
  dependecyInstall: {
    go: {
      filename: 'Install Go Dependencies',
      icon: 'terminal',
      language: 'bash',
      preNote: 'Install Go Dependencies',
      codeString: `go mod download`,
    },
    ffmpeg: {
      filename: 'Install FFmpeg',
      icon: 'terminal',
      language: 'bash',
      preNote: 'Install FFmpeg',
      codeString: `./install_ffmpeg.sh`,
    },
  },
}
