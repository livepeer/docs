#!/bin/bash
# Auto-updates snippets/snippetsWiki/componentLibrary/index.mdx
# Run this script after changes to snippets/components/

COMPONENTS_DIR="snippets/components"
OUTPUT_FILE="snippets/snippetsWiki/componentLibrary/index.mdx"

# Generate tree structure
generate_tree() {
    local dir="$1"
    local indent="$2"
    
    # Get subdirectories
    for subdir in "$dir"/*/; do
        if [ -d "$subdir" ]; then
            local name=$(basename "$subdir")
            # Skip examples folders
            [[ "$name" == "examples" ]] && continue
            
            echo "${indent}<Tree.Folder name=\"$name\">"
            
            # List files in this directory
            for file in "$subdir"*.{jsx,tsx,js}; do
                if [ -f "$file" ]; then
                    local filename=$(basename "$file")
                    echo "${indent}    <Tree.File name=\"$filename\" />"
                fi
            done
            
            # Recurse into subdirectories (for domain folder)
            if [ "$name" == "domain" ]; then
                for domain_subdir in "$subdir"*/; do
                    if [ -d "$domain_subdir" ]; then
                        local domain_name=$(basename "$domain_subdir")
                        echo "${indent}    <Tree.Folder name=\"$domain_name\" />"
                    fi
                done
            fi
            
            echo "${indent}</Tree.Folder>"
        fi
    done
}

# Build the new content
build_content() {
    cat << 'HEADER'
---
title: Component Library
description: Library of custom components used in Livepeer documentation
sidebarTitle: Component Library
---

{/* AUTO-GENERATED: Do not edit below this line. Run snippets/scripts/update-component-library.sh to update. */}

## Components Structure

Below is the current list of components found under `snippets/components/`.

<Tree>
    <Tree.Folder name="components" defaultOpen>
HEADER

    # Generate primitives
    echo '        <Tree.Folder name="primitives">'
    for file in "$COMPONENTS_DIR/primitives"/*.{jsx,tsx,js} 2>/dev/null; do
        [ -f "$file" ] && echo "            <Tree.File name=\"$(basename "$file")\" />"
    done
    echo '        </Tree.Folder>'

    # Generate layout
    echo '        <Tree.Folder name="layout">'
    for file in "$COMPONENTS_DIR/layout"/*.{jsx,tsx,js} 2>/dev/null; do
        [ -f "$file" ] && echo "            <Tree.File name=\"$(basename "$file")\" />"
    done
    echo '        </Tree.Folder>'

    # Generate display
    echo '        <Tree.Folder name="display">'
    for file in "$COMPONENTS_DIR/display"/*.{jsx,tsx,js} 2>/dev/null; do
        [ -f "$file" ] && echo "            <Tree.File name=\"$(basename "$file")\" />"
    done
    echo '        </Tree.Folder>'

    # Generate content
    echo '        <Tree.Folder name="content">'
    for file in "$COMPONENTS_DIR/content"/*.{jsx,tsx,js} 2>/dev/null; do
        [ -f "$file" ] && echo "            <Tree.File name=\"$(basename "$file")\" />"
    done
    echo '        </Tree.Folder>'

    # Generate integrations
    echo '        <Tree.Folder name="integrations">'
    for file in "$COMPONENTS_DIR/integrations"/*.{jsx,tsx,js} 2>/dev/null; do
        [ -f "$file" ] && echo "            <Tree.File name=\"$(basename "$file")\" />"
    done
    echo '        </Tree.Folder>'

    # Generate groupedItems
    echo '        <Tree.Folder name="groupedItems">'
    for file in "$COMPONENTS_DIR/groupedItems"/*.{jsx,tsx,js} 2>/dev/null; do
        [ -f "$file" ] && echo "            <Tree.File name=\"$(basename "$file")\" />"
    done
    echo '        </Tree.Folder>'

    # Generate domain folders
    echo '        <Tree.Folder name="domain">'
    for domain_dir in "$COMPONENTS_DIR/domain"/*/; do
        if [ -d "$domain_dir" ]; then
            echo "            <Tree.Folder name=\"$(basename "$domain_dir")\" />"
        fi
    done
    echo '        </Tree.Folder>'

    # Generate gateways (legacy)
    if [ -d "$COMPONENTS_DIR/gateways" ]; then
        echo '        <Tree.Folder name="gateways">'
        for file in "$COMPONENTS_DIR/gateways"/*.{jsx,tsx,js} 2>/dev/null; do
            [ -f "$file" ] && echo "            <Tree.File name=\"$(basename "$file")\" />"
        done
        echo '        </Tree.Folder>'
    fi

    cat << 'FOOTER'
    </Tree.Folder>
</Tree>

{/* END AUTO-GENERATED */}

---

## Component Examples

{/* Add component examples below */}

FOOTER
}

# Run and save
build_content > "$OUTPUT_FILE"
echo "Updated $OUTPUT_FILE"

