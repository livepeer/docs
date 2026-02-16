# Content Components

Content components handle code display, external content loading, and data presentation.

## Component Reference

| File                   | Exports                                                                                                                | Description                   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `code.jsx`             | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection`                                                  | Code display with placeholder support |
| `external-content.jsx` | `ExternalContent`                                                                                                      | External content loader (GitHub repos) |
| `release.jsx`          | `LatestVersion`                                                                                                        | Version display component     |
| `responseField.jsx`    | `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion`, `ResponseFieldGroup` | API response field components |

## Usage

```jsx
import { CustomCodeBlock, CodeComponent } from "/snippets/components/content/code.jsx";
import { ExternalContent } from "/snippets/components/content/external-content.jsx";
import { LatestVersion } from "/snippets/components/content/release.jsx";
import { ResponseFieldExpandable } from "/snippets/components/content/responseField.jsx";
```

## Theme Support

All components use `ThemeData` for theme-aware colors:
- `CustomCodeBlock` and `ComplexCodeBlock` use theme muted text colors for notes
- `ExternalContent` uses theme accent and background colors

## Key Features

### CustomCodeBlock
- Supports `{PLACEHOLDER}` replacement
- Pre/post notes with theme styling
- Expandable expected output section

### ExternalContent
- Displays content from external sources (GitHub)
- Header with repo name and "View on GitHub" link
- Scrollable content area

## Examples

See the `examples/` folder for runnable MDX examples of each component.
