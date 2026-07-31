TASK 1: Section Journey Review
Section pages (5 active):

payment-guide.mdx - entry/decision guide
funding-guide.mdx - how to fund on-chain
pricing-strategy.mdx - price cap configuration
remote-signers.mdx - key isolation
clearinghouse-guide.mdx - delegated payments
Journey: Do I need ETH? → Fund it → Set prices → Isolate keys → Delegate everything

Section-level issues
1. Terminology conflict: "Payment Models" vs "Operational Mode"
The gateway glossary defines on-chain/off-chain as Operational Mode (matching your prior feedback). But payment-guide.mdx calls them "Payment Models" and "Payment Architectures". All 5 pages should use "Operational Mode" consistently.

2. Gateway type matrix conflates three axes
payment-guide.mdx creates a "Gateway type" matrix that bundles node type + operational mode + business model into one column:

"Video Gateway (on-chain)" = node type + operational mode
"AI Gateway (off-chain)" = node type + operational mode
"Gateway-as-a-Service" = business model
"SDK / alternative gateway" = setup type
The glossary defines three separate axes (setup type, operational mode, node type). The matrix should separate the decision into: what node type → then what operational mode, rather than pre-bundling them.

3. Cross-page PM explanation duplication
The PM system is explained in payment-guide.mdx (lines 39-41), remote-signers.mdx (contextually), and clearinghouse-guide.mdx (contextually). payment-guide.mdx should be the canonical brief explanation; other pages should cross-ref.

4. Broken cross-links

payment-guide.mdx links to /v2/gateways/guides/payments-and-pricing/fund-your-gateway but file is funding-guide.mdx
payment-guide.mdx links to /v2/gateways/guides/payments-and-pricing/related/how-payments-work - likely not in nav
funding-guide.mdx links to payment-paths but file is payment-guide.mdx
remote-signers.mdx and clearinghouse-guide.mdx both use port 8937 (should be 8935)
5. Style violations across section

remote-signers.mdx line 30: # Remote Signers H1 repeating frontmatter title
clearinghouse-guide.mdx line 30: # Payment Clearinghouses H1 repeating frontmatter title
funding-guide.mdx: uses --- throughout (not CustomDivider), markdown tables (not StyledTable), missing tab/accordion icons
pricing-strategy.mdx: uses --- throughout, markdown tables, missing StyledTable/LinkArrow imports
