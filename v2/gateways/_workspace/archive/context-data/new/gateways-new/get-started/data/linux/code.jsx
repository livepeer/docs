// Build from Source
export const LINUX_CODE = {
  downloadBinary: {
    filename: "Download Binary",
    icon: "terminal",
    language: "bash",
    preNote: "Download the latest binary from the go-livepeer releases page",
    codeString: `sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz`,
  },
  install: {
    filename: "Install go-livepeer",
    icon: "terminal",
    language: "bash",
    codeString: `sudo wget https://github.com/livepeer/go-livepeer/releases/download/{PLACEHOLDER}/livepeer-linux-amd64.tar.gz`,
  },
  clone: {
    filename: "Clone go-livepeer",
    icon: "terminal",
    language: "bash",
    preNote: "Clone the go-livepeer repository",
    codeString: `
      git clone https://github.com/livepeer/go-livepeer.git
      cd go-livepeer
      `,
  },
  dependecyInstall: {
    go: {
      filename: "Install Go Dependencies",
      icon: "terminal",
      language: "bash",
      preNote: "Install Go Dependencies",
      // codeString: `sudo snap install go --classic`,
      codeString: `go mod download`,
    },
    ffmpeg: {
      filename: "Install FFmpeg",
      icon: "terminal",
      language: "bash",
      preNote: "Install FFmpeg",
      codeString: `./install_ffmpeg.sh`,
    },
  },
};
