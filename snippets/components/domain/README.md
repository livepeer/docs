# Domain Components

Domain-specific components organized by feature area. These components are tailored for specific sections of the documentation.

## Folder Structure

```
domain/
├── 04_GATEWAYS/         # Gateway-specific components
│   ├── callouts.jsx     # Gateway warning/note callouts
│   └── quickstartTabs.jsx # Gateway quickstart UI
└── SHARED/              # Shared across multiple domains
    ├── HeroGif.jsx      # Starfield animation
    ├── Portals.jsx      # Portal page layouts
    └── previewCallouts.jsx # Preview/coming soon callouts
```

## 04_GATEWAYS/

Components for the Gateways documentation section.

| File                 | Exports                                                                                      | Description               |
| -------------------- | -------------------------------------------------------------------------------------------- | ------------------------- |
| `callouts.jsx`       | `GatewayOffChainWarning`, `GatewayOnChainWarning`, `GatewayOnChainTTestnetNote`, `OrchAddrNote`, `TestVideoDownload`, `FfmpegWarning` | Gateway-specific callouts |
| `quickstartTabs.jsx` | `QuickStartTabs`, `QuickStartSteps`                                                          | Gateway quickstart UI     |

### Usage

```jsx
import {
  GatewayOffChainWarning,
  GatewayOnChainWarning,
} from "/snippets/components/domain/04_GATEWAYS/callouts.jsx";

import {
  QuickStartTabs,
  QuickStartSteps,
} from "/snippets/components/domain/04_GATEWAYS/quickstartTabs.jsx";
```

## SHARED/

Components shared across multiple documentation sections.

| File                  | Exports                                                    | Description                |
| --------------------- | ---------------------------------------------------------- | -------------------------- |
| `HeroGif.jsx`         | `Starfield`                                                | Animated starfield background |
| `Portals.jsx`         | `HeroSectionContainer`, `HeroContentContainer`, `PortalHeroContent`, `LogoHeroContainer`, etc. | Portal page layout components |
| `previewCallouts.jsx` | `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout`     | Preview/WIP callouts       |

### Usage

```jsx
import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";
import {
  PortalHeroContent,
  HeroSectionContainer,
} from "/snippets/components/domain/SHARED/Portals.jsx";
import {
  ComingSoonCallout,
  PreviewCallout,
} from "/snippets/components/domain/SHARED/previewCallouts.jsx";
```

## Theme Support

- `callouts.jsx` uses `ThemeData` for icon colors
- `Portals.jsx` uses `ThemeData` for page header colors
- `previewCallouts.jsx` uses semantic colors (intentionally fixed)

## Examples

See the `examples/` folder for runnable MDX examples.
