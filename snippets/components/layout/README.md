Layout components are used to structure the UI. They are not interactive and
should not contain any business logic. They are also the second most reusable
components after primitives.

Index of Layout Components

- Container
- Grid
- Stack
- Spacer
- QuadGrid

---

## QuadGrid

A 2x2 grid layout with a centered spinning icon overlay.

**Import:** `import { QuadGrid } from '/snippets/components/layout/quadGrid.jsx'`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | 4 Card components |
| `icon` | string | `"arrows-spin"` | Center icon name |
| `iconSize` | number | `50` | Icon size in px |
| `iconColor` | string | `"var(--accent)"` | Icon color |
| `spinDuration` | string | `"10s"` | Animation duration |

**Example:**
```jsx
<QuadGrid icon="arrows-spin" iconSize={50}>
  <Card title="Card 1" href="#1">Description</Card>
  <Card title="Card 2" href="#2">Description</Card>
  <Card title="Card 3" href="#3">Description</Card>
  <Card title="Card 4" href="#4">Description</Card>
</QuadGrid>
```
- QuadGrid

---

## QuadGrid

A 2x2 grid layout with a centered spinning icon overlay. Designed for displaying 4 related cards with a visual connection element.

### Import

```jsx
import { QuadGrid } from '/snippets/components/layout/quadGrid.jsx'
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | 4 Card components to display in the grid |
| `icon` | string | `"arrows-spin"` | FontAwesome icon name for the center overlay |
| `iconSize` | number | `50` | Size of the center icon in pixels |
| `iconColor` | string | `"var(--accent)"` | Color of the center icon |
| `spinDuration` | string | `"10s"` | Duration of one full rotation animation |

### Usage

```jsx
<QuadGrid icon="arrows-spin" iconSize={50}>
  <Card title="Card 1" icon="icon1" href="#card1">
    Description 1
  </Card>
  <Card title="Card 2" icon="icon2" href="#card2">
    Description 2
  </Card>
  <Card title="Card 3" icon="icon3" href="#card3">
    Description 3
  </Card>
  <Card title="Card 4" icon="icon4" href="#card4">
    Description 4
  </Card>
</QuadGrid>
```
