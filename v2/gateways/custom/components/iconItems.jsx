const video = () => <Badge color="blue">Video</Badge>
const ai = () => <Badge color="purple">AI</Badge>
const dual = () => <Badge color="green">Dual-mode</Badge>
const offChain = () => (
  <span>
    <Icon icon="floppy-disk" size={20} /> <strong>off-chain</strong>
  </span>
)
const onChain = () => (
  <span>
    <Icon icon="server" size={20} /> <strong>on-chain</strong>
  </span>
)
const linux = () => (
  <span>
    <Icon icon="linux" color="#ff9a0e" size={22} /> <Badge> Linux </Badge>
  </span>
)
const mac = () => (
  <span>
    <Icon icon="apple" color="#60ba47" size={22} /> <Badge> MacOS </Badge>
  </span>
)
const windows = () => (
  <span>
    <Icon icon="windows" color="#0078d6" size={22} /> <Badge> Windows </Badge>
  </span>
)
const docker = () => (
  <span>
    <Icon icon="docker" color="#2496ed" size={22} /> <Badge> Docker </Badge>
  </span>
)
const dockerGroup = () => (
  <div
    style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      marginBottom: '1rem',
    }}
  >
    <span>
      <Icon icon="linux" color="#ff9a0e" size={22} /> <Badge> Linux </Badge>
    </span>
    <span>
      <Icon icon="windows" color="#0078d6" size={22} /> <Badge> Windows </Badge>
    </span>
    <span>
      <Icon icon="apple" color="#60ba47" size={22} /> <Badge> macOS </Badge>
    </span>
  </div>
)
const linuxGroup = () => (
  <div
    style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      marginBottom: '1rem',
    }}
  >
    <span>
      <Icon icon="linux" color="#ff9a0e" size={22} /> <Badge> Linux </Badge>
    </span>
    <span>
      <Icon icon="apple" color="#60ba47" size={22} /> <Badge> macOS </Badge>
    </span>
  </div>
)

const windowsGroup = () => (
  <div
    style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      marginBottom: '1rem',
    }}
  >
    <span>
      <Icon icon="windows" color="#0078d6" size={22} /> <Badge> Windows </Badge>
    </span>
  </div>
)

export {
  video,
  ai,
  dual,
  offChain,
  onChain,
  linux,
  mac,
  windows,
  docker,
  dockerGroup,
  linuxGroup,
  windowsGroup,
}
