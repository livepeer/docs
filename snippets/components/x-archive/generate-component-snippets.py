#!/usr/bin/env python3
# @script            generate-component-snippets
# @category          generator
# @purpose           tooling:dev-tools
# @scope             tools/scripts, docs-guide/component-registry.json, .vscode/components.code-snippets
# @owner             docs
# @needs             R-R10
# @purpose-statement Generates VS Code component snippets from the component registry for local editor authoring workflows.
# @pipeline          manual
# @usage             python3 tools/scripts/generate-component-snippets.py
"""Generate VS Code component snippets from component-registry.json"""
import json

with open('docs-guide/component-registry.json') as f:
    data = json.load(f)

snippets = {}
seen = set()

SNIPPET_OVERRIDES = {
    'AccordionGroupList': {
        'body': ['AccordionGroupList num={${1|1,2,3,4,5,6,7,8,9,10|}} />'],
        'description': '[layout] Renders N empty Accordions inside an AccordionGroup'
    },
    'CodeComponent': {
        'body': ['CodeComponent filename="${1:example.sh}" icon="terminal" language="${2:bash}" codeString={"${3:echo hello}"} />']
    },
    'ComplexCodeBlock': {
        'body': ['ComplexCodeBlock filename="${1:example.sh}" icon="${2:terminal}" language="${3:bash}" highlight="${4}" />']
    },
    'CustomCodeBlock': {
        'body': ['CustomCodeBlock filename="${1:example.sh}" icon="${2:terminal}" language="${3:bash}" highlight="${4}" />']
    }
}


def build_prefixes(name):
    lc = name[0].lower() + name[1:]
    prefixes = [lc, name]
    return list(dict.fromkeys(prefixes))


def strip_leading_angle_bracket(line):
    text = str(line or '')
    if text.startswith('</'):
        return text
    return text[1:] if text.startswith('<') else text

for c in data['components']:
    name = c['name']
    if name in seen:
        continue
    seen.add(name)

    status = c.get('status', '')
    if status == 'deprecated' or c.get('deprecated'):
        continue

    cat = c.get('category', 'unknown')
    params = c.get('params', [])
    req_params = [p for p in params if p.get('required')]
    desc = c.get('description', '')

    has_children = any(p['name'] == 'children' for p in params)

    tab_idx = 1
    attrs = []
    for p in req_params:
        if p['name'] == 'children':
            continue
        ptype = p.get('type', 'any')
        pname = p['name']
        if ptype == 'boolean':
            attrs.append(pname)
        elif 'number' in str(ptype) or pname == 'limit':
            attrs.append(pname + '={${' + str(tab_idx) + ':1}}')
        elif ptype == 'object' or str(p.get('defaultValue', '')).startswith('{'):
            attrs.append(pname + '={${' + str(tab_idx) + ':{}}}')
        else:
            attrs.append(pname + '="${' + str(tab_idx) + '}"')
        tab_idx += 1

    attr_str = (' ' + ' '.join(attrs)) if attrs else ''

    if has_children:
        body = [
            name + attr_str + '>',
            '  ${' + str(tab_idx) + ':content}',
            '</' + name + '>'
        ]
    else:
        body = [name + attr_str + ' />']

    override = SNIPPET_OVERRIDES.get(name, {})
    body = [strip_leading_angle_bracket(line) for line in override.get('body', body)]
    snippets[cat + ': ' + name] = {
        'scope': 'mdx,markdown',
        'prefix': build_prefixes(name),
        'body': body,
        'description': override.get('description', '[' + cat + '] ' + desc)
    }

snippets = dict(sorted(snippets.items()))

with open('.vscode/components.code-snippets', 'w') as f:
    json.dump(snippets, f, indent=2)
    f.write('\n')

print('Generated', len(snippets), 'component snippets')
