# style.css Audit Report - 2026-03-09

## Baseline
- Lines: 457
- Bytes: 12173
- v2/style.css: didn't exist (already resolved on current docs-v2 head)
- Existing token audit found: yes - reference tasks/reports/style-css-token-audit.md
- Component migration LP-token commit on docs-v2: no - current root style.css still uses legacy root variables plus targeted lp-scoped StyledSteps overrides, not the full lp token migration described in prior governance work.

## Rule Classification Summary
| Classification | Count | Action |
|---|---|---|
| USED | 9 | Kept |
| UNUSED | 2 | Removed |
| MINTLIFY_OVERRIDE | 33 | Kept |
| LP_TOKEN | 0 | Kept |
| LEGACY_ALIAS | 0 | Flagged for review |

## Rules Removed
- `.nav-tabs` (lines 112-115) - Exact duplicate of the .nav-tabs rule at lines 106-109; removing it does not change computed styles.
- `#starfield` (lines 426-433) - No current source emits #starfield. The active Starfield component renders an unscoped canvas.

## Rules Kept (MINTLIFY_OVERRIDE - no explicit usage found but likely Mintlify-generated DOM)
- `.nav-tabs` (lines 106-109) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#navbar > div.z-10.mx-auto.relative > div.hidden.lg\:flex.px-12.h-12 > div` (lines 117-119) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href*='/internal/']` (lines 121-126) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/resources/redirect']` (lines 137-150) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/resources/resources-portal']` (lines 137-150) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/redirect']` (lines 137-150) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/resources-portal']` (lines 137-150) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/resources/redirect'] svg` (lines 158-166) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/resources/resources-portal'] svg` (lines 158-166) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/redirect'] svg` (lines 158-166) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/resources-portal'] svg` (lines 158-166) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/resources_hub'] svg` (lines 158-166) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/resources/redirect'] > div:last-child` (lines 169-175) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/resources/resources-portal'] > div:last-child` (lines 169-175) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/redirect'] > div:last-child` (lines 169-175) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/resources-portal'] > div:last-child` (lines 169-175) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `a.nav-tabs-item[href$='/07_resources/resources_hub'] > div:last-child` (lines 169-175) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#footer .flex-col .flex.gap-4` (lines 178-181) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#footer > div` (lines 184-187) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#chat-assistant-sheet[aria-hidden='true']` (lines 190-192) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `button.text-left.text-gray-600.text-sm.font-medium` (lines 195-199) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `[data-component-part='card-content-container']` (lines 214-216) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `.code-block > div > div > svg` (lines 259-261) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#error-description > span > div > div` (lines 264-266) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `body
  > div.relative.antialiased.text-gray-500.dark\:text-gray-400
  > div.peer-\[\.is-not-custom\]\:lg\:flex.peer-\[\.is-custom\]\:\[\&\>div\:first-child\]\:\!hidden.peer-\[\.is-custom\]\:\[\&\>div\:first-child\]\:sm\:\!hidden.peer-\[\.is-custom\]\:\[\&\>div\:first-child\]\:md\:\!hidden.peer-\[\.is-custom\]\:\[\&\>div\:first-child\]\:lg\:\!hidden.peer-\[\.is-custom\]\:\[\&\>div\:first-child\]\:xl\:\!hidden
  > div.flex.flex-col.items-center.justify-center.w-full.max-w-lg.overflow-x-hidden.mx-auto.py-48.px-5.text-center.\*\:text-center.gap-y-8.not-found-container
  > div` (lines 268-274) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#error-description
  > span
  > div
  > div
  > div.relative.rounded-xl.overflow-hidden.flex.justify-center
  > img` (lines 276-286) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#content
  > div.steps.ml-3\.5.mt-10.mb-6
  > div
  > div.w-full.overflow-hidden.pl-8.pr-px
  > p` (lines 307-313) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `.dark .bg-white\/\[0\.95\].multi-view-dropdown-trigger` (lines 318-321) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#table-of-contents-layout:empty` (lines 358-361) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `#content-side-layout:has(#table-of-contents-layout:empty)` (lines 358-361) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `[data-page-mode='frame'] #pagination` (lines 385-392) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.
- `@media (max-width: 1023px)` (lines 402-424) - Responsive override kept per task rules.
- `.frame-mode-hero-full [data-component-part='card-content-container']` (lines 436-441) - Targets Mintlify or runtime-generated DOM structure; kept conservatively.

## LEGACY_ALIAS rules for review
- None on the current docs-v2 head. Root custom-property rules are active legacy variables, not aliases to `--lp-*` tokens.

## v2/style.css
- Didn't exist on current docs-v2 head (already resolved).

## Post-Edit Metrics
- Lines: 442
- Bytes: 11948
- Reduction: 15 lines, 225 bytes, 1.8%

## Visual Check Required
Alison: please visually spot-check these 5 pages after merge:
1. Mission Control
2. Gateway quickstart
3. Developer guide
4. API reference
5. Any page in dark mode
