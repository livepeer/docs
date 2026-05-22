import { AddressLinks, DoubleIconLink } from '/snippets/components/elements/links/Links.jsx'
import { SolidityEmbed } from '/snippets/components/integrators/embeds/DataEmbed.jsx'
import { FunctionField } from '/snippets/components/displays/response-fields/ResponseField.jsx'

export const RenderFactLine = function RenderFactLine(contract) {
  if (!contract) return null
  const text = (contract.facts || []).join(' · ')
  if (!text && !contract.unsupportedNote) return null
  return (
    <div style={{ margin: '0.2rem 0 0.8rem 0' }}>
      {text ? (
        <span style={{ fontStyle: 'italic', color: 'var(--text)' }}>{text}</span>
      ) : null}
      {contract.unsupportedNote ? (
        <div style={{ marginTop: text ? '0.45rem' : 0, color: 'var(--text-secondary)' }}>
          {contract.unsupportedNote}
        </div>
      ) : null}
    </div>
  )
}

export const RenderAddressLine = function RenderAddressLine(label, contract, addressKey = 'currentAddress', hrefKey = 'blockchainHref') {
  if (!contract?.[addressKey]) return null
  return (
    <div style={{ marginBottom: '0.8rem' }}>
      <div style={{ fontWeight: 700, color: 'var(--hero-text)', marginBottom: '0.35rem' }}>
        {label}:
      </div>
      <AddressLinks
        address={contract[addressKey]}
        blockchainHref={contract[hrefKey] || null}
        githubHref={contract.contractCodeHref || null}
      />
    </div>
  )
}

export const RenderSourceInheritance = function RenderSourceInheritance(contract) {
  const bases = contract?.sourceInheritance || []
  if (!bases.length) return null
  return (
    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
      Commit-pinned source inherits from:{' '}
      {bases.map(function renderBase(base, index) {
        return (
          <span key={`${contract?.slug || 'contract'}-base-${base}`}>
            {index ? ', ' : null}
            <code>{base}</code>
          </span>
        )
      })}
    </p>
  )
}

export const RenderGeneratedFunctionFields = function RenderGeneratedFunctionFields(contract) {
  const functions = contract?.functions || []
  if (!functions.length) {
    return (
      <div
        style={{
          margin: '0.6rem 0 0.8rem',
          padding: '0.65rem 0.8rem',
          border: '1px solid var(--border)',
          borderRadius: '0.75rem',
          background: 'var(--card-background)',
          color: 'var(--text-secondary)',
        }}
      >
        No public or external functions were parsed from the commit-pinned source for this contract entry.
      </div>
    )
  }

  return functions.map(function mapGeneratedFunction(fn) {
    return (
      <FunctionField
        key={`${contract.slug}-${fn.name}-${fn.signature}`}
        name={fn.name}
        returns={fn.returns || undefined}
        params={fn.params || []}
      >
        {fn.signature}
      </FunctionField>
    )
  })
}

export const RenderContractEmbed = function RenderContractEmbed(contract) {
  if (!contract?.rawContractCodeHref) {
    return (
      <div
        style={{
          margin: '0.6rem 0 0.8rem',
          padding: '0.65rem 0.8rem',
          border: '1px solid var(--border)',
          borderRadius: '0.75rem',
          background: 'var(--card-background)',
          color: 'var(--text-secondary)',
        }}
      >
        No commit-pinned source file was resolved for this contract entry.
      </div>
    )
  }

  return (
    <SolidityEmbed
      url={contract.rawContractCodeHref}
      title={<DoubleIconLink label={contract.contractCodeLabel || `${contract.name}.sol`} />}
      filename={contract.contractCodeLabel || `${contract.name}.sol`}
    />
  )
}
