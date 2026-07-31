# Layout — Patterns

> Extracted rules linked to repo context. Apply these when designing page layouts.

---

## Pattern 1: Data-driven pages

Never hardcode data in MDX. Import from data files.

```jsx
{/* ✅ Data from pipeline */}
import { contractAddresses } from '/snippets/data/contract-addresses/contractAddressesData.jsx'

{/* ❌ Hardcoded in MDX */}
The BondingManager proxy is at 0x35Bcf3c30594191d53231E4FF333E8A770453e40
```

**Linked to:** CLAUDE.md Hard Boundaries — "No hardcoded data in MDX pages"

---

## Pattern 2: Component composition over inline JSX

Never inline a component's internals into MDX. Import and use the component.

```jsx
{/* ✅ Import component */}
<SearchTable TableComponent={DynamicTable} headerList={[...]} itemsList={data} />

{/* ❌ Build table inline */}
<table><thead>...</thead><tbody>{data.map(...)}</tbody></table>
```

**Linked to:** CLAUDE.md Hard Boundaries — "Never inline a component's internals into MDX"

---

## Pattern 3: Badge colour consistency

Use consistent Badge colours throughout the page and across the site.

| Colour | Meaning |
|---|---|
| blue | Video workload |
| purple | AI workload |
| green | Dual / go-livepeer / active |
| yellow | Siphon / experimental |
| surface | Generic / neutral |

**Linked to:** `layout/exemplars.md` → setup-options, gateway-setup

---

## Pattern 4: Progressive disclosure

Heavy detail goes in Accordions. The main flow stays clean.

```jsx
{/* ✅ Main flow clean, detail available */}
<StyledSteps>
  <StyledStep title="Choose a Pool">
    Joining a pool is akin to entering an operational partnership.
    <Accordion title="Pool Due Diligence Checklist" icon="check-to-slot">
      [detailed checklist here]
    </Accordion>
  </StyledStep>
</StyledSteps>

{/* ❌ Everything at same level */}
## Choose a Pool
[paragraph]
[detailed checklist]
[more paragraphs]
```

**Linked to:** `layout/exemplars.md` → join-a-pool

---

## Pattern 5: Audience entry points

For pages serving multiple backgrounds, use Accordions at the top to let readers self-select.

```jsx
<AccordionGroup>
  <Accordion title="From a Cloud Background?" icon="cloud">
    [Analogy framing for cloud ops]
  </Accordion>
  <Accordion title="From a Crypto Background?" icon="bitcoin">
    [Analogy framing for crypto natives]
  </Accordion>
</AccordionGroup>
```

**Linked to:** `layout/exemplars.md` → role.mdx

---

## Pattern 6: Verification log in comments

For pages with verified technical content, document corrections in JSX comments.

```jsx
{/*
VERIFICATION LOG — 28 March 2026
Sources: Blockscout MCP (Arbitrum One), GitHub livepeer/protocol

Errors corrected:
1. Governor functions: Transaction[] → Update memory
2. BondingManager: added checkpointBondingState
3. TicketBroker: getSender() → getSenderInfo()
*/}
```

**Linked to:** `layout/exemplars.md` → blockchain-contracts

---

## Pattern 7: CustomDivider spacing

Use CustomDivider for visual section separation. Standard margin patterns:

```jsx
<CustomDivider />                                          {/* Default */}
<CustomDivider style={{margin: "0"}} />                    {/* Tight */}
<CustomDivider style={{margin: "-0.5rem 0 -1.5rem 0"}} /> {/* Compact */}
<CustomDivider style={{margin: "-1rem 0 -1rem 0"}} />     {/* Minimal */}
```

**Linked to:** `ai-tools/ai-skills/page-authoring/SKILL.md`

---

## Quick checklist (apply to every page layout)

- [ ] Data imported, never hardcoded
- [ ] Components imported, never inlined
- [ ] Imports organised by category (components, data, pages, composables)
- [ ] Root-absolute paths for shared snippets imports; page-local relative imports only for colocated route files
- [ ] .jsx extension included on all imports
- [ ] No React/hook imports (globally available)
- [ ] Badge colours consistent with site convention
- [ ] Max one major layout element per page
- [ ] Progressive disclosure for heavy detail
- [ ] CustomDivider for section separation
