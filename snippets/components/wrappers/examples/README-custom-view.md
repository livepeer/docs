# Custom View Dropdown Component

A custom, positionable dropdown component that mimics Mintlify's View component
but gives you full control over styling and positioning.

## Features

- ✅ Fully customizable positioning (inline, top-right, top-left, or custom CSS)
- ✅ Matches your Livepeer brand colors (#2b9a66)
- ✅ Supports Font Awesome icons
- ✅ Dark mode support
- ✅ Smooth animations
- ✅ Click-outside-to-close functionality

## Usage

### Basic Example

```jsx
import { CustomViewDropdown } from "/snippets/components/custom-view-dropdown.jsx";

<CustomViewDropdown
  views={[
    {
      title: "Docker",
      icon: "docker",
      iconType: "solid",
      content: (
        <>
          <h2>Docker Setup</h2>
          <p>Your Docker content here...</p>
        </>
      ),
    },
    {
      title: "Linux/Mac",
      icon: "linux",
      iconType: "solid",
      content: (
        <>
          <h2>Linux/Mac Setup</h2>
          <p>Your Linux/Mac content here...</p>
        </>
      ),
    },
  ]}
/>;
```

### Position Options

Control where the dropdown appears:

```jsx
// Inline with content (default)
<CustomViewDropdown position="inline" views={[...]} />

// Fixed to top-right corner
<CustomViewDropdown position="top-right" views={[...]} />

// Fixed to top-left corner
<CustomViewDropdown position="top-left" views={[...]} />
```

### Custom Positioning with CSS

You can add custom positioning in your `style.css`:

```css
/* Custom position for the dropdown */
.custom-view-dropdown-wrapper.position-custom {
  position: fixed;
  top: 100px;
  right: 50px;
  z-index: 1000;
}
```

Then use it:

```jsx
<CustomViewDropdown position="custom" views={[...]} />
```

## Props

### `views` (required)

Array of view objects. Each view object has:

- `title` (string, required): Display name in dropdown
- `icon` (string, optional): Font Awesome icon name (e.g., 'docker', 'linux',
  'windows')
- `iconType` (string, optional): Font Awesome icon type ('solid', 'regular',
  'brands'). Default: 'solid'
- `content` (JSX, required): The content to display when this view is selected

### `position` (optional)

String that controls positioning. Options:

- `'inline'` (default): Appears inline with content
- `'top-right'`: Fixed to top-right corner
- `'top-left'`: Fixed to top-left corner
- Custom value: Add your own CSS class

## Styling

The component uses your Livepeer brand colors:

- Primary: `#2b9a66`
- Dark: `#18794e`

You can override styles in your `style.css`:

```css
/* Change button colors */
.custom-view-dropdown-button {
  background-color: your-color !important;
  border-color: your-color !important;
}

/* Change dropdown menu */
.custom-view-dropdown-menu {
  min-width: 300px !important;
}

/* Change active item color */
.custom-view-dropdown-item.active {
  background-color: your-color !important;
}
```

## Converting from Mintlify View Components

**Before (Mintlify View):**

```jsx
<View title="Docker" icon="docker" iconType="solid">
  ## Docker Setup
  Content here...
</View>

<View title="Linux/Mac" icon="linux" iconType="solid">
  ## Linux/Mac Setup
  Content here...
</View>
```

**After (Custom View Dropdown):**

```jsx
<CustomViewDropdown
  views={[
    {
      title: "Docker",
      icon: "docker",
      iconType: "solid",
      content: <>## Docker Setup Content here...</>,
    },
    {
      title: "Linux/Mac",
      icon: "linux",
      iconType: "solid",
      content: <>## Linux/Mac Setup Content here...</>,
    },
  ]}
/>
```

## Example

See `/snippets/examples/custom-view-example.mdx` for a complete working example.
