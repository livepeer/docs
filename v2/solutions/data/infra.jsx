// Central source of truth for Solutions Portal product infra tags.
// Referenced by: portal.mdx, each product's data/infra.jsx
// DO NOT add or change values here without updating portal.mdx SolutionCard entries.

export const daydreamInfra = [
  { icon: 'torii-gate', label: 'gateway' },
  { icon: 'server',     label: 'self-hosted' },
  { icon: 'toolbox',    label: 'sdk' },
]

export const studioInfra = [
  { icon: 'plug',       label: 'api' },
  { icon: 'cloud',      label: 'saas' },
  { icon: 'torii-gate', label: 'gateway' },
]

export const frameworksInfra = [
  { icon: 'server',     label: 'self-hosted' },
  { icon: 'cloud',      label: 'saas' },
  { icon: 'torii-gate', label: 'gateway' },
]

export const streamplaceInfra = [
  { icon: 'toolbox', label: 'sdk' },
]

export const embodyInfra = [
  { icon: 'plug',  label: 'api' },
  { icon: 'cloud', label: 'saas' },
]
