# MD Viewer - Markdown & Mermaid Preview

## Flash Mintlify

FlashDocs.flash-mintlify
https://marketplace.visualstudio.com/items?itemName=FlashDocs.flash-mintlify

Streamlines Mintlify documentation development inside VS Code. Requires VS Code 1.73.0+ and a project with a `docs.json` configuration file. Supports `.md`, `.mdx`, `.json`, `.yaml`, and `.yml` files.

Features

- In-Editor Preview - View documentation rendering directly in the editor (does not render project custom components)
- Visual Editors - Graphical interfaces for editing frontmatter and component properties
- Slash Commands - Quick access to common actions via "/" trigger
- Smart Completions - Intelligent suggestions for components (triggered by `<`) and code blocks (triggered by `` ``` ``)
- Link Management - Real-time validation of internal links and automatic file resolution
- File Reference Tracking - Automatically updates imports and links when files are moved or renamed
- CodeLens Actions - Inline commands for opening files and generating heading anchors

Usage
Install via VS Code Quick Open (`Ctrl+P` / `Cmd+P`) and paste:
ext install FlashDocs.flash-mintlify

---

## VnELabs.mdviewer

https://marketplace.visualstudio.com/items?itemName=VnELabs.mdviewer

MD Viewer - Markdown & Mermaid Preview
A clean and modern Markdown preview extension for VS Code with Mermaid diagram support.

Features
Clean Markdown Rendering - GitHub-style markdown appearance
Mermaid Diagram Support - Flowcharts, sequence diagrams, gantt charts and more
Plan File Support - YAML frontmatter with name, overview, and todos
Interactive Todos - Click to toggle status, dropdown for quick changes
Collapsible Sections - Click headings to collapse/expand content
Multi-Panel Support - Open multiple previews for different files
PDF Export - Export to PDF with print-friendly styling
Theme Aware - Automatically adapts to VS Code theme

### Usage

**Open any .md file**
**Press Cmd+Shift+V (Mac) or Ctrl+Shift+V (Windows/Linux)**
Or click the eye icon in the editor title bar
Plan File Format
You can use YAML frontmatter to create structured plan documents:

---

name: Project Name
overview: Brief description of the project
todos:

- id: task1
  content: First task description
  status: completed
- id: task2
  content: Second task description
  status: in_progress
- id: task3
  content: Third task description
  status: pending

---

Todo Statuses
pending - Not started
in_progress - Currently working on
completed - Finished
cancelled - No longer needed
Mermaid Support
Create diagrams using mermaid code blocks:

flowchart TD
A[Start] --> B{Decision?}
B -->|Yes| C[Action 1]
B -->|No| D[Action 2]
C --> E[End]
D --> E

Commands
Command Shortcut Description
MD Viewer: Open Preview - Open preview in current panel
MD Viewer: Open Preview to the Side Cmd+Shift+V Open preview in side panel
Development

# Install dependencies

npm install

# Compile

npm run compile

# Package

npm run package
