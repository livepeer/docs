
# Repo Structure

## Root

### Root Directories
/docs-guide
/tools
/tasks (to rename: /operations)
/scripts (to add - name?)
/assets (to add)
/snippets
/v1 (pages)
/v2 (pages)

### Root Files
**Mintlify**
- docs.json
- style.css
- .mintignore
- .mint/

**Governance**
- .allowlist
- LICENCE
- README.md

**Git**
- .gitignore
- .gitattributes
- .githooks/
- .github/

**IDE**
- .vscode/
- .editorconfig

**Helpers**
- .prettierrc

**AI**
- .claude/
- .codex/
- .cursor/
- .windsurf/
- .cursorrules (?)
- sitemap-ai.xml
- llms.txt
-

**Utility**
- lpd
- .lpdignore
- .cache

### TODO: To Add:
/scripts
/assets

## TODO: Move to subfolder
/ai-tools -> /tools
/api -> ? /scripts?
/contribute -> /docs-guide
/tests -> /scripts
/


# Script Structuring
1. By Type
2. By Concern

## Type
- Validation / Checkers / Reviewers?
- Coordination / Orchestration / ?
- Remediation
- Enforcement (need better name) -> Governance
- Generation (? why not under automations?)
- Automations (external pipelines vs generation ? )

## Concern
- Content Standards
-

# Component Structuring




grouped picker categories
CATEGORIES:
- COMPONENTS
- TRANSFORMS
-

COMPONENT SUB-CATEGORIES: (ant default props too...)
- CONTAINER: [CenteredContainer, BorderedBox]
- grouping/categorising/structuring/composing information: [List, AccordionGroup, Tabs, Steps, Columns, StyledSteps, Views, QuadCard, Table, Carousel, Tree, Tiles, CodeGroup, Update, Color]
- composable of above: [Card, Step, Tab, Accordion, View, Tree.Folder, Color.Row] primitive: [Tree.File, Color.Item]
- complex/multi-dimensional/ information display: [Card, ResponseField, Expandable, Diagram(mermaid), ]
- DISPLAY:
text: [Panel(?), Callout (Tip, Warning, Note, Info), Quote, Banner]
media: [Frame, Video, Image, Diagram, Embed]
specialty: [Code, Math, Prompt(AI), RequestExample,
ResponseExample, ParamField, ResponseField, ]
attention?/distinction primitive? : [Badge, Tooltip, Icon]
- PRIMITIVE : [Link, Icon, CustomDivider,
- TEMPLATE: Page, Page Section,
- COMPOSABLE MDX

CATEGORY: TRANSFORMS
- code transforms

CATEGORY: CONVERSIONS
- bullet list to numbered list
- list to spaced csv


- TRANSFORMS (


CATEGORY:


- ->>optional keybindings scaffold
