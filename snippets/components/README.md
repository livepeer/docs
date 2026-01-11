Components Folder Structure:

These components are organised **By Function/Purpose**

Additionally some items are organised by **Domain** where domain specific
components are extracted to their own folder. ie. code strings used on multiple
pages, or callouts to users.

```bash
components/
├── primitives/ # Basic UI elements
│   ├── buttons.jsx
│   ├── dividers.jsx
│   ├── links.jsx
│   └── .jsx
│── composite/ # [TBD] Composed from multiple primitives
│   ├── .jsx
│   └── .jsx
├── layout/ # Custom layouts for multiple items
│   ├── cards.jsx
│   ├── lists.jsx
│   ├── tables.jsx
│   └── steps.jsx
├── display/ # Display elements for media or embeds
│   ├── embeds.jsx
│   ├── images.jsx
│   ├── diagrams.jsx
│   └── video.jsx
├── content/ # Content & Data Display Groups
│   ├── code.jsx
│   ├── responseFields.jsx
│   └── .jsx
├── integrations/ # Might belong under domain
│   ├── coingecko.jsx
│   └── chainlist.jsx
└── domain/ # Domain specific un-composable components (eg. with data hardcoded in to the component)
    ├── shared/
    │   ├── callouts.jsx
    │   └── .jsx
    ├── home/
    │   ├── tldr.jsx
    │   └── trending.jsx
    └── gateways/
        ├── callouts.jsx
        └── responseFields.jsx
```
