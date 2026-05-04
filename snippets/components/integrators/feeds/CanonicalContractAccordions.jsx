/**
 * @component CanonicalContractAccordions
 * @category displays
 * @subcategory accordions
 * @status stable
 * @description Renders the non-active and historical contract accordion groups for the canonical
 *   contract addresses page. Accepts pre-shaped data from the contracts pipeline output
 *   (canonicalContractsPageData) and a row renderer. Iterates inside the component body so the
 *   Mintlify MDX preprocessor leaves identifiers untouched.
 * @aiDiscoverability none
 * @param {Array<{key,title,description,icon,items}>} groups - Pre-grouped non-active lifecycle entries.
 * @param {Function} renderRows - Row builder (typically buildCategoryAccordionRows from page-data).
 */
import { AccordionTitle } from '/snippets/components/elements/text/Text.jsx'
import { DynamicTable } from '/snippets/components/displays/tables/Tables.jsx'
import { HistoricalContractTable } from '/snippets/components/integrators/feeds/HistoricalContractTable.jsx'
import { LivepeerIcon } from '/snippets/components/elements/icons/Icons.jsx'

export const NonActiveContractsAccordion = ({ groups = [], renderRows = (items) => items }) => (
  <AccordionGroup>
    {groups.map((group) => (
      <Accordion key={group.key} title={group.title} icon={group.icon}>
        <p
          style={{
            color: 'var(--text)',
            fontStyle: 'italic',
            marginBottom: '0.75rem',
          }}
        >
          {group.description}
        </p>
        <DynamicTable
          headerList={['Name', 'Address', 'Chain', 'Type']}
          itemsList={renderRows(group.items)}
          columnWidths={{ Chain: '36%' }}
          showSeparators={true}
        />
      </Accordion>
    ))}
  </AccordionGroup>
)

export const HistoricalContractsAccordion = ({
  categories = [],
  sourceData = {},
  getIcon = () => null,
}) => (
  <AccordionGroup>
    {categories.map((group) => (
      <Accordion
        key={group.key}
        title={
          <AccordionTitle
            icon={getIcon(group.meta.key)}
            title={group.meta.title}
            description={group.meta.description}
          />
        }
      >
        <HistoricalContractTable category={group.key} sourceData={sourceData} />
      </Accordion>
    ))}
  </AccordionGroup>
)
