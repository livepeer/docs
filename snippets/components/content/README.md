# Content Components

Content components handle code display, external content loading, and data presentation.

## Component Reference

| File                   | Exports                                                                                                                | Description                   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `code.jsx`             | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection`                                                  | Code display with placeholder support |
| `external-content.jsx` | `ExternalContent`                                                                                                      | External content loader (GitHub repos) |
| `math.jsx`             | `MathInline`, `MathBlock`                                                                                              | Math wrapper components (no deps) |
| `release.jsx`          | `LatestVersion`                                                                                                        | Version display component     |
| `response-field.jsx`    | `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion`, `ResponseFieldGroup` | API response field components |

## Usage

```jsx
import { CustomCodeBlock, CodeComponent } from "/snippets/components/content/code.jsx";
import { ExternalContent } from "/snippets/components/content/external-content.jsx";
import { MathInline, MathBlock } from "/snippets/components/primitives/math.jsx";
import { LatestVersion } from "/snippets/components/data/release.jsx";
import { ResponseFieldExpandable } from "/snippets/components/content/response-field.jsx";
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

### MathInline / MathBlock
- Wraps LaTeX in Mintlify math delimiters without external dependencies
- Use `String.raw` to keep backslashes and braces intact

## Examples

See the `examples/` folder for runnable MDX examples of each component.

### Math Example

```mdx
import { MathInline, MathBlock } from "/snippets/components/primitives/math.jsx";

Inline: <MathInline latex={String.raw`V_i = \frac{B_i}{B_T}`} />

<MathBlock latex={String.raw`R_t = S_t \cdot r_t`} />
```
