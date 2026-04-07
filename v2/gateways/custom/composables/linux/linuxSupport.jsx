import { DynamicTable } from '/snippets/components/wrappers/tables/Table.jsx'
import { CustomCardTitle } from '/snippets/components/elements/text/CustomCardTitle.jsx'

import {
  linux,
  mac,
} from '/v2/gateways/custom/components/iconItems.jsx'

export const LinuxSupport = () => {
  const distroRows = [
    {
      Distribution: 'Ubuntu 20.04+',
      Status: 'Tested in CI',
      Notes: 'Primary platform',
    },
    {
      Distribution: 'Debian and derivatives',
      Status: 'Supported',
      Notes: '',
    },
    {
      Distribution: 'CentOS / RHEL',
      Status: 'Supported',
      Notes: 'With adjustments',
    },
    {
      Distribution: 'Arch Linux',
      Status: 'Community supported',
      Notes: '',
    },
  ]

  const archRows = [
    {
      Architecture: 'x86_64 / amd64',
      Status: 'Primary platform',
      Binary: 'livepeer-linux-amd64',
    },
    {
      Architecture: 'ARM64 / aarch64',
      Status: 'For ARM servers',
      Binary: 'livepeer-linux-arm64',
    },
  ]

  const macArchRows = [
    {
      Architecture: 'x86_64 / amd64 (Intel)',
      Binary: 'livepeer-darwin-amd64',
    },
    {
      Architecture: 'ARM64 (Apple Silicon)',
      Binary: 'livepeer-darwin-arm64',
    },
  ]

  const prereqItems = [
    {
      key: 'wget',
      content: (
        <>
          <code>wget</code> or <code>curl</code> — for downloading binaries
        </>
      ),
    },
    {
      key: 'tar',
      content: (
        <>
          <code>tar</code> — pre-installed on most Linux distributions and macOS
        </>
      ),
    },
  ]

  const supportNotes = [
    'Linux is recommended for full feature support in production.',
    'macOS support is primarily for development and testing.',
    'GPU transcoding (NVIDIA) is supported on Linux only.',
  ]

  return (
    <div style={{ margin: '1rem 0' }}>
      <Accordion title="Binary Install Supported Platforms" icon="warning">
        <Info>
          Pre-built binaries are available for {linux()} and {mac()} on amd64
          and arm64 architectures.
        </Info>

        <DynamicTable
          tableTitle="Supported Linux Distributions"
          headerList={['Distribution', 'Status', 'Notes']}
          itemsList={distroRows}
          contentFitColumns={['Status']}
        />

        <AccordionGroup>
          <Accordion title="Linux Architectures" icon="linux">
            <DynamicTable
              tableTitle="Linux Binaries"
              headerList={['Architecture', 'Status', 'Binary']}
              itemsList={archRows}
              contentFitColumns={['Status']}
            />
          </Accordion>

          <Accordion title="macOS Architectures" icon="apple">
            <DynamicTable
              tableTitle="macOS Binaries"
              headerList={['Architecture', 'Binary']}
              itemsList={macArchRows}
            />
          </Accordion>

          <Accordion title="Prerequisites" icon="list-check">
            <ul>
              {prereqItems.map(({ key, content }) => (
                <li key={key}>{content}</li>
              ))}
            </ul>
          </Accordion>
        </AccordionGroup>

        <Warning>
          <strong>FFmpeg</strong> is a common cause of errors when building from
          source. Livepeer uses a custom build of FFmpeg that must not conflict
          with existing installations. Pre-built binaries include the correct
          FFmpeg version — no separate FFmpeg install is required.
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
              <CustomCardTitle title="go-livepeer Releases" icon="github" />
            }
            href="https://github.com/livepeer/go-livepeer/releases"
            arrow
            horizontal
          >
            All available binaries and release notes.
          </Card>
        </CardGroup>
      </Accordion>
    </div>
  )
}
