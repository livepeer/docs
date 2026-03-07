#!/usr/bin/env python3
# @script            audit-python
# @category          validator
# @purpose           qa:repo-health
# @scope             tasks/scripts
# @owner             docs
# @needs             E-C1, R-R14
# @purpose-statement Python audit utility — runs Python-based audit checks (alternative to Node auditors)
# @pipeline          manual — not yet in pipeline
# @usage             python3 tasks/scripts/audit-python.py [flags]
"""
Comprehensive audit script for all v2 pages
Runs file checks, MDX validation, and link checking
"""

import json
import os
from pathlib import Path
from datetime import datetime
import re

# Get absolute path to script, then go up 3 levels
SCRIPT_DIR = Path(__file__).resolve().parent
BASE_DIR = SCRIPT_DIR.parent.parent
DOCS_JSON_PATH = BASE_DIR / 'docs.json'
REPORT_DIR = BASE_DIR / 'tasks' / 'reports' / 'page-audits'
V2_PAGES_DIR = BASE_DIR / 'v2' / 'pages'
SNIPPETS_DIR = BASE_DIR / 'snippets'

# Ensure report directory exists
REPORT_DIR.mkdir(parents=True, exist_ok=True)

def extract_pages(nav, pages=None):
    """Recursively extract all page paths from navigation structure"""
    if pages is None:
        pages = []
    
    if isinstance(nav, list):
        for item in nav:
            extract_pages(item, pages)
    elif isinstance(nav, dict):
        if 'pages' in nav:
            for page in nav['pages']:
                if isinstance(page, str) and page.strip() and page != ' ':
                    pages.append(page)
                elif isinstance(page, dict) and 'pages' in page:
                    extract_pages(page, pages)
        for value in nav.values():
            if isinstance(value, (dict, list)):
                extract_pages(value, pages)
    return pages

def get_v2_pages():
    """Get all v2 pages from docs.json"""
    with open(DOCS_JSON_PATH, 'r') as f:
        docs = json.load(f)
    
    v2_version = next((v for v in docs['navigation']['versions'] if v['version'] == 'v2'), None)
    if not v2_version:
        raise ValueError('v2 version not found in docs.json')
    
    all_pages = extract_pages(v2_version)
    unique_pages = list(set([
        p.replace('.mdx', '').replace('.md', '') 
        for p in all_pages 
        if p and p.strip() and p != ' '
    ]))
    
    return unique_pages

def is_intentional_redirect(page_path):
    """Check if a page path is an intentional redirect"""
    return '/redirect' in page_path or page_path.endswith('/redirect')

def check_file_exists(page_path):
    """Check if file exists and return full path"""
    # Try with .mdx extension
    file_path = BASE_DIR / f"{page_path}.mdx"
    if file_path.exists():
        return {'exists': True, 'path': str(file_path)}
    
    # Try directory with index
    file_path = BASE_DIR / page_path / 'index.mdx'
    if file_path.exists():
        return {'exists': True, 'path': str(file_path)}
    
    # Try README.mdx
    file_path = BASE_DIR / page_path / 'README.mdx'
    if file_path.exists():
        return {'exists': True, 'path': str(file_path)}
    
    return {'exists': False, 'path': None}

def check_mdx_errors(file_path):
    """Check for MDX syntax errors"""
    errors = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for broken imports
        import_pattern = r"import\s+{([^}]+)}\s+from\s+['\"]([^'\"]+)['\"]"
        for match in re.finditer(import_pattern, content):
            import_path = match.group(2)
            if import_path.startswith('/snippets/'):
                full_path = BASE_DIR / import_path.lstrip('/')
                if '/components/' in import_path:
                    # Import path may already include .jsx extension
                    component_file = full_path
                    if not str(component_file).endswith('.jsx') and not str(component_file).endswith('.js'):
                        component_file = Path(str(full_path) + '.jsx')
                    if not component_file.exists():
                        errors.append(f"Missing import: {import_path}")
    except Exception as e:
        errors.append(f"File read error: {str(e)}")
    
    return errors

def extract_links(file_path):
    """Extract links from MDX file"""
    links = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Markdown links: [text](url)
        markdown_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
        for match in re.finditer(markdown_pattern, content):
            links.append({
                'text': match.group(1),
                'url': match.group(2),
                'type': 'markdown'
            })
        
        # JSX links: <Link href="...">
        jsx_pattern = r'<Link[^>]+href=[\'"]([^\'"]+)[\'"]'
        for match in re.finditer(jsx_pattern, content):
            links.append({
                'text': '',
                'url': match.group(1),
                'type': 'jsx'
            })
        
        # Anchor tags: <a href="...">
        anchor_pattern = r'<a[^>]+href=[\'"]([^\'"]+)[\'"]'
        for match in re.finditer(anchor_pattern, content):
            links.append({
                'text': '',
                'url': match.group(1),
                'type': 'anchor'
            })
    except Exception:
        pass
    
    return links

def check_link(link, current_page_path):
    """Check if link is broken"""
    url = link['url']
    
    # Skip external links
    if url.startswith(('http://', 'https://', 'mailto:', '#')):
        return {'broken': False, 'reason': 'external_or_anchor'}
    
    # Handle relative links
    if url.startswith('/'):
        # Absolute path from root
        target_path = url.lstrip('/').rstrip('/')
        file_check = check_file_exists(f"v2/pages/{target_path}")
        if not file_check['exists']:
            return {'broken': True, 'reason': 'file_not_found', 'expected': f"v2/pages/{target_path}"}
    else:
        # Relative path
        current_dir = Path(current_page_path).parent
        target_path = (current_dir / url).resolve()
        try:
            relative_path = target_path.relative_to(BASE_DIR)
            file_check = check_file_exists(str(relative_path).replace('.mdx', '').replace('.md', ''))
            if not file_check['exists']:
                return {'broken': True, 'reason': 'file_not_found', 'expected': str(relative_path)}
        except ValueError:
            return {'broken': True, 'reason': 'path_outside_repo', 'expected': str(target_path)}
    
    return {'broken': False, 'reason': 'valid'}

# Main execution
# Write progress immediately
progress_file = REPORT_DIR / 'audit-python-progress.log'
try:
    with open(progress_file, 'w') as f:
        f.write(f"Audit started at: {datetime.now().isoformat()}\n")
except Exception as e:
    print(f"Warning: Could not write progress file: {e}")

print('🔍 Extracting v2 pages from docs.json...')
try:
    with open(progress_file, 'a') as f:
        f.write('Extracting v2 pages from docs.json...\n')
except:
    pass

try:
    pages = get_v2_pages()
    try:
        with open(progress_file, 'a') as f:
            f.write(f'Found {len(pages)} pages to audit\n')
    except:
        pass
    print(f'📄 Found {len(pages)} pages to audit\n')
except Exception as e:
    try:
        with open(progress_file, 'a') as f:
            f.write(f'ERROR: {str(e)}\n')
    except:
        pass
    print(f'ERROR: {e}')
    raise

audit_results = {
    'timestamp': datetime.now().isoformat(),
    'totalPages': len(pages),
    'fileChecks': [],
    'mdxErrors': [],
    'brokenLinks': [],
    'summary': {
        'filesMissing': 0,
        'intentionalRedirects': 0,
        'mdxErrors': 0,
        'brokenLinks': 0
    }
}

print('📋 Checking files and MDX errors...\n')
with open(progress_file, 'a') as f:
    f.write('Starting file checks...\n')

# Phase 1: Check files exist and MDX errors
for i, page_path in enumerate(pages, 1):
    if i % 50 == 0:
        with open(progress_file, 'a') as f:
            f.write(f'Progress: {i}/{len(pages)} pages checked\n')
    progress = f'[{i}/{len(pages)}]'
    print(f'{progress} Checking {page_path}... ', end='', flush=True)
    
    file_check = check_file_exists(page_path)
    
    if not file_check['exists']:
        if is_intentional_redirect(page_path):
            print('⚠️  INTENTIONAL REDIRECT')
            audit_results['fileChecks'].append({
                'pagePath': page_path,
                'exists': False,
                'error': 'File not found',
                'intentional': True,
                'note': 'This is an intentional redirect page, not an error'
            })
            audit_results['summary']['intentionalRedirects'] += 1
        else:
            print('❌ FILE MISSING')
            audit_results['fileChecks'].append({
                'pagePath': page_path,
                'exists': False,
                'error': 'File not found'
            })
            audit_results['summary']['filesMissing'] += 1
    else:
        print('✅')
        mdx_errors = check_mdx_errors(file_check['path'])
        links = extract_links(file_check['path'])
        broken_links = []
        
        # Check each link
        for link in links:
            link_check = check_link(link, file_check['path'])
            if link_check['broken']:
                broken_links.append({**link, **link_check})
        
        audit_results['fileChecks'].append({
            'pagePath': page_path,
            'exists': True,
            'filePath': file_check['path'],
            'mdxErrors': mdx_errors,
            'links': len(links),
            'brokenLinks': len(broken_links)
        })
        
        if mdx_errors:
            audit_results['mdxErrors'].append({
                'pagePath': page_path,
                'filePath': file_check['path'],
                'errors': mdx_errors
            })
            audit_results['summary']['mdxErrors'] += len(mdx_errors)
        
        if broken_links:
            audit_results['brokenLinks'].append({
                'pagePath': page_path,
                'filePath': file_check['path'],
                'links': broken_links
            })
            audit_results['summary']['brokenLinks'] += len(broken_links)

# Generate report
report_path = REPORT_DIR / 'page-audit-python-latest.json'
with open(report_path, 'w') as f:
    json.dump(audit_results, f, indent=2)

# Generate markdown report
md = f"""# Page Audit Report (Python - File Checks Only)

**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
**Type:** File existence and link checks (no browser testing)

## Summary

- Total pages: {audit_results['totalPages']}
- Files missing: {audit_results['summary']['filesMissing']}
- Intentional redirects: {audit_results['summary']['intentionalRedirects']}
- MDX errors: {audit_results['summary']['mdxErrors']}
- Broken links: {audit_results['summary']['brokenLinks']}

"""

missing_files = [f for f in audit_results['fileChecks'] if not f.get('exists') and not f.get('intentional')]
intentional_redirects = [f for f in audit_results['fileChecks'] if not f.get('exists') and f.get('intentional')]

if missing_files:
    md += "## Missing Files\n\n"
    for f in missing_files:
        md += f"- `{f['pagePath']}`\n"
    md += "\n"

if intentional_redirects:
    md += "## Intentional Redirects (Not Errors)\n\n"
    for f in intentional_redirects:
        md += f"- `{f['pagePath']}` - {f.get('note', 'Intentional redirect')}\n"
    md += "\n"

if audit_results['summary']['mdxErrors'] > 0:
    md += "## MDX Errors\n\n"
    for m in audit_results['mdxErrors']:
        md += f"### {m['pagePath']}\n\n"
        for e in m['errors']:
            md += f"- {e}\n"
        md += "\n"

if audit_results['summary']['brokenLinks'] > 0:
    md += "## Broken Links\n\n"
    for b in audit_results['brokenLinks']:
        md += f"### {b['pagePath']}\n\n"
        for l in b['links']:
            md += f"- `{l['url']}` - {l['reason']}\n"
            if 'expected' in l:
                md += f"  - Expected: `{l['expected']}`\n"
        md += "\n"

markdown_path = REPORT_DIR / 'page-audit-python-latest.md'
with open(markdown_path, 'w') as f:
    f.write(md)

# Print summary
print('\n' + '=' * 80)
print('📊 AUDIT SUMMARY')
print('=' * 80)
print(f"Total pages: {audit_results['totalPages']}")
print(f"Files missing: {audit_results['summary']['filesMissing']}")
print(f"Intentional redirects: {audit_results['summary']['intentionalRedirects']}")
print(f"MDX errors: {audit_results['summary']['mdxErrors']}")
print(f"Broken links: {audit_results['summary']['brokenLinks']}")
print('\n📝 Reports saved:')
print(f"   JSON: {report_path}")
print(f"   Markdown: {markdown_path}")
print('=' * 80)
