1. Import rule — which component confirms it?

snippets/components/wrappers/lists/Lists.jsx — StepLinkList imports directly from another Livepeer component file:

import { GotoLink } from "/snippets/components/elements/links/Links.jsx";
The rule as written in the template is confirmed accurate.

2. Are @category and @tier actual JSDoc tags?

@category — NOT in the official JSDoc 3 specification. It's a common extension used by TypeDoc and JSDoc plugins, but not a core tag. Our repo replaced it with @type, which IS in the official spec — but @type in official JSDoc means JavaScript type annotation (e.g., @type {string}). We are misusing @type by giving it values like elements or wrappers. This is a spec collision.

@tier — Not official JSDoc at all. Completely invented.

The correct alignment to standard JSDoc would be: use @category (which is the closest conventional tag for taxonomy/grouping), and use @subcategory or @memberof for the subniche layer. Or define a proper @typedef extension.

3. Is @dependencies an actual JSDoc tag?

No. The nearest official tag is @requires (declares a module dependency). @dependencies is not in the spec.

For "what the MDX page must import," the closest official approach would be @requires, or documenting it via @example (showing the import in an example block). There is no official "consumer-side imports" concept in JSDoc.

4. @example — are we using it anywhere?

No. The governance standard explicitly lists @example as a forbidden tag. The spec says it was "not part of the canonical tag set" — but @example is an official JSDoc tag in the core specification. It's designed exactly for code examples showing how to use the component. Removing it means no component in the library has machine-readable or IDE-surfaced usage examples. That's a governance error.

Official JSDoc 3 specification: jsdoc.app

Full tag index: jsdoc.app/tags

Official tags relevant to this repo: @param, @returns, @type, @example, @deprecated, @requires, @description, @since, @version, @see, @typedef, @property.

Summary of misalignments:

Our tag Official status Problem
@type elements @type exists but means JS type annotation Spec collision — our value isn't a JS type
@subniche Not in spec Custom; no standard equivalent
@category (removed) Not in core spec but widely adopted Removing it wasn't aligned to industry usage
@tier (removed) Not in spec Correctly removed
@example (removed) Core official tag Incorrect removal — should be required
@dependencies (removed) Not in spec Correctly removed; @requires is the standard
@accepts Not in spec Custom
@dataSource Not in spec Custom
@aiDiscoverability Not in spec Custom (appropriate for repo-specific tooling)
