import { LINUX_CODE } from '../../data/linux/code.jsx'

export const LinuxPrerequisites = () => {
  return (
    <>
      Ensure <code>wget</code> (or <code>curl</code>) and <code>tar</code> are
      installed and up to date on your system. Both are pre-installed on most
      Linux distributions.
      <CustomCodeBlock {...LINUX_CODE.wgetCheck} wrap />
      <Tip>
        macOS users can install <code>wget</code> via{' '}
        <a href="https://brew.sh/">Homebrew</a>: <code>brew install wget</code>.
        macOS also ships with <code>curl</code> and <code>tar</code> by default.
      </Tip>
    </>
  )
}

export const LinuxInstallBinary = () => {
  return (
    <>
      Download the latest{' '}
      <DoubleIconLink
        label="go-livepeer binary"
        href="https://github.com/livepeer/go-livepeer/releases"
        iconLeft="github"
      />{' '}
      for your platform
      <Tabs>
        <Tab title="Linux" icon="linux">
          <CustomCodeBlock
            {...LINUX_CODE.downloadLinux}
            placeholderValue={latestVersion}
            wrap
          />
        </Tab>
        <Tab title="macOS Intel" icon="apple">
          <CustomCodeBlock
            {...LINUX_CODE.downloadMacIntel}
            placeholderValue={latestVersion}
            wrap
          />
        </Tab>
        <Tab title="macOS Apple Silicon" icon="apple">
          <CustomCodeBlock
            {...LINUX_CODE.downloadMacArm}
            placeholderValue={latestVersion}
            wrap
          />
        </Tab>
      </Tabs>
      Unpack the archive and move the binary into your PATH:
      <CustomCodeBlock {...LINUX_CODE.extractInstall} wrap />
      <Note>
        Adjust the archive filename if you downloaded a macOS or ARM64 variant.
      </Note>
    </>
  )
}

export const LinuxInstallCheck = () => {
  return (
    <>
      To quickly test installation, run the gateway in off-chain mode:
      <CustomCodeBlock {...LINUX_CODE.testInstall} wrap />
      The gateway starts in off-chain mode by default, which requires no
      blockchain connectivity. This confirms the binary is installed correctly.
      <CustomCodeBlock {...LINUX_CODE.testInstallOutput} wrap />
    </>
  )
}
