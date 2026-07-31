import { DOCKER_CODE } from '../../data/docker/code.jsx'

export const DockerPull = () => {
  return (
    <>
      Fetch the latest{' '}
      <DoubleIconLink
        label="Livepeer Docker image"
        href="https://hub.docker.com/r/livepeer/go-livepeer"
        iconLeft="docker"
      />{' '}
      from Docker Hub
      <CustomCodeBlock {...DOCKER_CODE.install} wrap />
    </>
  )
}

export const DockerUpdate = () => {
  return (
    <>
      Docker must be installed and on a recent version. Follow the official{' '}
      <DoubleIconLink
        label="Docker Engine"
        href="https://docs.docker.com/engine/install/"
        iconLeft="docker"
      />{' '}
      installation guide for your platform.
      <br /> <br />
      Verify you have Docker installed and on a recent release:
      <CustomCodeBlock {...DOCKER_CODE.dockerSetup} wrap />
      <Note>
        Gateway nodes do not require NVIDIA GPU drivers as a baseline
        prerequisite. NVIDIA drivers apply to orchestrator or other GPU compute
        workloads.
      </Note>
      <Tip>
        Windows hosts should run Docker with WSL2 for best compatibility:
        [Docker Desktop WSL2
        backend](https://docs.docker.com/desktop/windows/wsl/).
      </Tip>
    </>
  )
}

export const DockerInstallCheck = () => {
  return (
    <>
      To quickly test installation, run the gateway with minimal configuration:
      <CustomCodeBlock {...DOCKER_CODE.testInstall} wrap />
      This starts a gateway in off-chain mode with verbose logging. The
      container will exit if no services are enabled, which confirms the binary
      runs correctly.
      <CustomCodeBlock {...DOCKER_CODE.testInstallOutput} wrap />
    </>
  )
}
