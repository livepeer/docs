# **Performance Framework**

How to measure whether the documentation system is fast, healthy, and maintainable. Defines metrics, baselines, measurement methods, and thresholds.

## **Four Performance Domains**

| **Domain** | **What It Measures** | **Who Cares** |
| --- | --- | --- |
| Build performance | How fast the site compiles and deploys | Contributors, CI budget |
| Page load performance | How fast readers experience the site | Readers, SEO |
| Developer experience | How fast contributors can work | Contributors, maintainers |
| Content pipeline freshness | How current the automated data is | Readers, stakeholders |

## **Domain 1: Build Performance**

### **Metrics**

| **Metric** | **How to Measure** | **Baseline (Current)** | **Target** |
| --- | --- | --- | --- |
| Pre-commit time | Time from git commit to hook completion | ~10-30s (varies by staged files) | &lt;30s |
| PR CI time | Time from push to all checks passing | Measure from workflow logs | &lt;5 min |
| Mintlify preview build | Time from push to preview URL live | Measure from Mintlify dashboard | &lt;3 min |
| Production deploy | Time from merge to live site updated | Measure from Mintlify dashboard | &lt;5 min |
| Git clone time | Time for Mintlify to clone the repo | f(repo size) — currently 431 MB | &lt;60s |

### **Known Bottlenecks**

- **Repo size (431 MB):** 78% is `snippets/assets/`. Every build clones the full repo. Removing the 156 MB of GIFs would cut clone time by ~36%.
- **Browser tests:** Puppeteer launch + page load × N pages. Scales linearly with page count.
- **Pre-commit scope creep:** 10+ checks on every commit. If more are added, commit friction increases.

### **Measurement Script Requirements**

## **Domain 2: Page Load Performance**

### **Metrics**

| **Metric** | **How to Measure** | **Baseline** | **Target** |
| --- | --- | --- | --- |
| Largest Contentful Paint (LCP) | Lighthouse or WebPageTest | Measure | &lt;2.5s |
| First Input Delay (FID) | Lighthouse | Measure | &lt;100ms |
| Cumulative Layout Shift (CLS) | Lighthouse | Measure | &lt;0.1 |
| Total page weight | DevTools Network tab | Measure per page type | &lt;500 KB (doc page) |
| Asset weight per page | Count images + their sizes | Measure | &lt;200 KB images per page |
| JavaScript bundle size | DevTools Network tab | Measure | Mintlify-controlled |
| Time to Interactive (TTI) | Lighthouse | Measure | < 3.5s |

### **Known Bottlenecks**

- **Client-side component rendering:** Custom JSX components (37 total) render client-side. Heavy components (data fetchers, embed renderers) add TTI.
- **Import depth:** Gateway quickstart has 19 imports. Each resolved import adds to the page JS bundle.
- **Oversized images:** Multiple 1-4 MB PNGs. No image optimisation pipeline.
- `style.css`** (444 lines):** Loaded globally for all pages including those that don't use overrides.
- **No lazy loading:** Components that fetch data (CoinGecko, markdown embed) block on load.

### **Page Type Budgets**

| **Page Type** | **Max Total Weight** | **Max Image Weight** | **Max JS (Custom)** |
| --- | --- | --- | --- |
| Landing (frame mode) | 800 KB | 300 KB | 100 KB |
| Standard doc page | 500 KB | 200 KB | 50 KB |
| Reference page | 600 KB | 100 KB | 80 KB |
| API playground | 1 MB | 50 KB | 200 KB (playground JS) |

### **Measurement Script Requirements**

Uses Puppeteer (already in the repo for browser tests) with `--enable-performance-metrics` flag. Captures:

- LCP, FID, CLS (Core Web Vitals)
- Total transfer size
- Number of requests
- Image sizes
- Custom JS execution time

## **Domain 3: Developer Experience**

### **Metrics**

| **Metric** | **How to Measure** | **Baseline** | **Target** |
| --- | --- | --- | --- |
| Local dev start time | Time from mintlify dev to localhost:3000 ready | Measure | < 30s |
| Hot reload time | Time from file save to preview update | Measure | < 2s |
| Time to first meaningful edit | Clone → install → dev → edit → see result | Measure | < 5 min |
| Pre-commit failure rate | % of commits blocked by hooks | Git hook logs | < 10% |
| CI false positive rate | % of CI failures that aren't real issues | Manual review | < 5% |
| Import path correctness | % of imports that resolve on first try | v2-link-audit.js | 100% |
| Docs for tooling | % of scripts with complete JSDoc headers | script-docs.test.js | 100% |

### **Known Bottlenecks**

- **No root **`package.json`**:** `npm test` at root doesn't work. Must `cd tests && npm test` or `cd tools && npm test`.
- **Pre-commit hook weight:** 10+ checks means commits take 10-30s. Contributors may bypass with `--no-verify`.
- `docs.json`** editing:** 1,704 lines of unformatted JSON. Adding a page requires finding the right 6-deep nested array.
- **Import path guessing:** No IDE autocompletion for `/snippets/...` paths. Wrong path only caught at build time.
- **336 MB clone:** First-time contributors wait for a large download.

### **Measurement Script Requirements**

## **Domain 4: Content Pipeline Freshness**

### **Metrics**

| **Metric** | **How to Measure** | **Baseline** | **Target** |
| --- | --- | --- | --- |
| Blog data age | Last modified date of ghostBlogData.jsx | Check git log | < 24 hours |
| Forum data age | Last modified date of forumData.jsx | Check git log | < 24 hours |
| YouTube data age | Last modified date of youtubeData.jsx | Check git log | < 7 days |
| Showcase data age | Last modified date of showcaseData.jsx | Check git log | < 7 days |
| Release version accuracy | globals.mdx version vs latest GitHub release | Compare | Match latest |
| Pipeline success rate | % of scheduled workflow runs that succeed | GitHub Actions API | >95% |
| Pipeline failure detection | Time from pipeline failure to human awareness | Manual | < 24 hours |

### **Known Bottlenecks**

- **Silent failures:** If a scheduled workflow fails (API down, auth expired), nobody is notified unless they check the Actions tab.
- **No freshness dashboard:** No single view showing when each data source was last updated.
- **Dead pipeline data:** `showcaseDataOld.jsx` and `showcaseData copy.jsx` are dead files still in the repo.
- **n8n workflows:** 5 workflow JSONs in `snippets/assets/data/n8n/`. Their relationship to the GitHub Actions workflows is unclear — are they alternatives, predecessors, or complementary?

### **Measurement Script Requirements**

For each pipeline data file:

- Read `git log -1 --format=%ci {file}` → last commit date
- Compare to now → staleness in hours
- Compare version strings to latest GitHub release (for globals)
- Query GitHub Actions API → last 5 run statuses per workflow

## **Composite Health Score**

A single number (0-100) representing overall system health:

## **Measurement Script Architecture**

A single orchestrator script that calls domain-specific measurement functions:

**Output:**

- `performance-{domain}-{date}.json` — raw measurements
- `performance-summary-{date}.md` — human-readable report with health score
- `performance-baseline.json` — stored baseline for comparison (committed to repo)

**Dependencies:**

- Puppeteer (for page load measurement — already in repo)
- GitHub Actions API (for CI timing and pipeline status)
- Git CLI (for file dates and commit timing)
- `mintlify dev` (for local DX measurement — optional, manual)

## **Thresholds & Alerts**

| **Metric** | **Green** | **Yellow** | **Red** |
| --- | --- | --- | --- |
| Pre-commit time | < 30s | 30-60s | >60s |
| PR CI time | < 5 min | 5-10 min | >10 min |
| LCP (p75) | < 2.5s | 2.5-4s | >4s |
| Total page weight | < 500 KB | 500 KB-1 MB | >1 MB |
| Pipeline freshness | < 24h | 24-72h | >72h |
| Clone time | < 60s | 60-120s | >120s |
| Health score | 80-100 | 50-79 | < 50 |

## **Baseline Establishment**

Before any optimisation, capture current baselines:

1. Run `measure-performance.js --domain all` against current HEAD
1. Store results as `tasks/reports/performance/baseline-{date}.json`
1. Commit baseline to repo
1. All future measurements compare against this baseline
1. After significant changes (asset cleanup, component refactor), establish a new baseline

## **Integration with CI**

**Phase 1 (manual):** Run performance measurement script manually, review reports.

**Phase 2 (scheduled):** Add a nightly GitHub Actions workflow:

**Phase 3 (PR-integrated):** Run page load measurement on changed pages in PR CI. Flag if a change degrades performance beyond threshold.
