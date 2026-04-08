import { DynamicTable } from '/snippets/components/displays/tables/Tables.jsx'
import { CustomCardTitle } from '/snippets/components/elements/text/Text.jsx'

import {
  linux,
  mac,
  windows,
} from '/v2/gateways/custom/components/iconItems.jsx'

export const DockerSupport = () => {
  const platformRows = [
    {
      OS: linux(),
      Architectures: 'amd64, arm64',
      'GPU Compute Support': 'NVIDIA (GPU workloads only)',
      Notes: 'Full feature support',
    },
    {
      OS: mac(),
      Architectures: 'amd64, arm64',
      'GPU Compute Support': 'No',
      Notes: 'CPU-only transcoding',
    },
    {
      OS: windows(),
      Architectures: 'amd64',
      'GPU Compute Support': 'No',
      Notes: 'CPU-only transcoding',
    },
  ]

  const buildMatrixItems = [
    {
      key: 'linux-matrix',
      content: <>{linux()} amd64/arm64 (CPU and GPU variants)</>,
    },
    {
      key: 'mac-matrix',
      content: <>{mac()} amd64/arm64 (CPU only)</>,
    },
    {
      key: 'windows-matrix',
      content: <>{windows()} amd64 (CPU only)</>,
    },
  ]

  const compilationTargets = [
    'Darwin (macOS) with Intel and Apple Silicon',
    'Linux with x86_64 and ARM64',
    'Windows x86_64',
  ]

  const supportNotes = [
    'ARM64 Docker images are built, but ARM64 support is still experimental.',
    'Linux is recommended for full feature support in production.',
    'macOS and Windows support is primarily for development and testing.',
  ]

  return (
    <div style={{ margin: '1rem 0' }}>
      <Accordion title="Docker Supported Hosts Details" icon="warning">
        <Info>
          Docker supports running Livepeer gateway nodes on {linux()} {mac()}
          {' and '}
          {windows()} with different architecture support and feature
          limitations.
        </Info>

        <DynamicTable
          tableTitle="Supported Platforms"
          headerList={['OS', 'Architectures', 'GPU Compute Support', 'Notes']}
          itemsList={platformRows}
          contentFitColumns={['OS', 'Architectures']}
        />

        <Note>
          NVIDIA drivers are not a baseline requirement for a gateway. They are
          only required when the same host is also running GPU workloads such as
          an orchestrator or AI worker.
        </Note>

        <AccordionGroup>
          <Accordion title="Docker Build Configuration" icon="boxes-stacked">
            The Dockerfile uses a multi-stage build with CUDA base images for
            GPU support. The build process supports cross-compilation for
            multiple architectures.
          </Accordion>

          <Accordion title="Build Matrix" icon="table-cells-large">
            <ul>
              {buildMatrixItems.map(({ key, content }) => (
                <li key={key}>{content}</li>
              ))}
            </ul>
          </Accordion>

          <Accordion title="Cross-Compilation Support" icon="code-branch">
            <ul>
              {compilationTargets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Accordion>
        </AccordionGroup>

        <Warning>
          GPU transcoding is supported on {linux()} hosts only. The Docker
          images include NVIDIA CUDA support, but that path does not apply on
          macOS or Windows hosts.
        </Warning>

        <CardGroup cols={2}>
          {supportNotes.map((note) => (
            <Card
              key={note}
              title={
                <CustomCardTitle title="Support Note" icon="circle-info" />
              }
            >
              {note}
            </Card>
          ))}

          <Card
            title={
              <CustomCardTitle title="Box Example Gateway" icon="github" />
            }
            href="https://github.com/livepeer/go-livepeer/blob/master/box/box.md"
            arrow
            horizontal
          >
            Linux and macOS development environment example.
          </Card>
        </CardGroup>
      </Accordion>
    </div>
  )
}
