{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9HSVQtSE9PS1MubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HL0dJVC1IT09LUyIsInNvdXJjZUhhc2giOiJlZDFjNzFjNTQwY2M1ZTA2ZDFiY2IzMzQxMDQ2NzFmYTQyZjE5MDkxMDQxZWFmMmU2YzVkZDI3YTIyNzQxMjFkIiwibGFuZ3VhZ2UiOiJjbiIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjI1OjEwLjExOFoifQ== */}
# Git 钩子文档

本文档解释了此存储库中使用的 git 钩子，以确保代码质量和风格指南的合规性。

## 概述

Git 钩子是在 git 工作流的某些点自动运行的脚本。此存储库使用一个**pre-commit 钩子**来：

1. **强制执行风格指南合规性** - 阻止具有风格违规的提交
2. **运行验证脚本** - 验证语法和结构
3. **防止常见错误** - 在代码到达存储库之前捕获错误

## pre-commit 钩子

### LPD 钩子命令

使用 Livepeer 文档 CLI (`lpd`) 来管理并检查钩子：

```bash
lpd hooks install   # Install/update hooks from .githooks/
lpd hooks status    # Check if installed hook is current/executable
lpd hooks verify    # Run .githooks/verify.sh checks
lpd hooks info      # Print hooks, bypass flags, and override guidance
```

`lpd hooks info` 是钩子脚本、绕过标志 (`SKIP_*`) 和仅人类的尾部覆盖的命令参考。

### 它做什么

当您运行 `git commit` 时，pre-commit 钩子会自动运行。它会检查：

#### 风格指南合规性

- ❌ **ThemeData 使用** - 阻止已弃用的 `ThemeData` 导入来自 `themeStyles.jsx`
- ❌ **硬编码颜色** - 提醒使用 CSS 自定义属性代替十六进制颜色
- ⚠️ **相对导入** - 提醒使用相对路径（应使用从根目录的绝对路径）
- ⚠️ **@mintlify/components 导入** - 提醒不必要的导入（组件是全局的）
- ⚠️ **React 钩子导入** - 提醒不必要的 React 导入（钩子是全局的）

#### 验证脚本

- ✅ **MDX 语法** - 验证 frontmatter 和基本的 MDX 结构
- ✅ **JSON 语法** - 验证 JSON 文件是否可解析
- ✅ **Shell 脚本语法** - 使用 `bash -n`
- ✅ **JavaScript 语法** - 使用 "`node --check`
- ✅ **Mintlify 配置** - 验证 `docs.json`/`mint.json` 语法
- ✅ **导入路径** - 确保代码片段导入使用绝对路径
- ✅ **浏览器验证** - 在无头浏览器中测试 MDX 文件（如果 `mint dev` 正在运行）

#### 测试套件（新）

预提交钩子现在对暂存文件运行全面的测试套件：

- ✅ **样式指南测试** - 全面的样式指南规则验证
- ✅ **MDX 验证** - 高级 MDX 语法和结构检查
- ✅ **拼写测试** - 使用 cspell 进行英国英语拼写验证
- ✅ **质量检查** - 图像替代文本、frontmatter 完整性、链接验证

测试套件在预提交时以快速模式运行（仅限暂存文件，跳过浏览器测试）。要进行完整测试，请手动运行 `npm test` 或查看 CI 结果。

#### 生成页面索引同步

预提交钩子还会保持 `v2/pages` 索引文件同步：

- `node tools/scripts/generate-pages-index.js --staged --write --stage`

这是做什么的：

- 为 `index.mdx` 下的文件夹重新生成 `v2/pages/`。
- 使用章节式输出，首先显示根级别的链接，然后是文件夹标题。
- 在 `v2/pages/index.mdx` 重新构建根聚合文件。
- 删除 `index.md` 中的旧 `v2/pages/` 文件。

### 安装

**先决条件：**在安装 git 钩子之前，您必须安装测试依赖项：

```bash
# Install dependencies (required for hooks to run tests)
cd tools && npm install
```

#### 自动安装（推荐）

```bash
# From repository root
./.githooks/install.sh
```

或者运行本地开发：

```bash
lpd dev
# or without PATH setup
bash lpd dev
```

此命令首先安装/更新钩子，然后启动 `mint dev`。

**注意：** 如果未安装依赖项，钩子仍将运行，但测试将被跳过并显示警告。在 `tools/` 安装依赖项以获得完整的测试覆盖率。

#### 手动安装

```bash
# Copy the hook
cp .githooks/pre-commit .git/hooks/pre-commit

# Make it executable
chmod +x .git/hooks/pre-commit

# Verify installation
ls -la .git/hooks/pre-commit
```

#### 对于 Forks

如果你正在分叉此仓库，钩子位于 `.githooks/` 但需要安装：

```bash
# Clone your fork
git clone <your-fork-url>
cd <repo-name>

# Install hooks
./.githooks/install.sh
```

**注意：** Git 钩子不在 `.git/hooks/` 中版本控制（它们在 `.githooks/` 中），因此每个开发人员都需要安装它们。

### 它是如何工作的

1. 当你运行 `git commit` 时，钩子会自动运行
2. 它会扫描所有已暂存的文件（`.jsx`，`.tsx`，`.js`，`.mdx`）
3. 检查风格指南违规
4. 运行验证脚本
5. **阻止提交** 如果发现违规
6. 显示清晰的错误信息及修复方法

### 示例输出

#### 成功

```
🔍 Checking style guide compliance...
Checking for ThemeData usage (deprecated)...
Checking for hardcoded colors...
Checking for relative imports...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 Running verification checks...
Checking MDX syntax...
Checking JSON syntax...
✓ All verification checks passed!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Style guide compliance check passed!
```

#### 失败

```
🔍 Checking style guide compliance...
Checking for ThemeData usage (deprecated)...
❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
╔═══════════════════════════════════════════════════════════════╗
║  STYLE GUIDE VIOLATIONS DETECTED - COMMIT BLOCKED           ║
╚═══════════════════════════════════════════════════════════════╝

Found 1 violation(s):

❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 MANDATORY: Read the Style Guide before committing:
   v2/resources/documentation-guide/style-guide.mdx

Key Rules:
  • Use CSS Custom Properties: var(--accent), var(--text), etc.
  • NEVER use ThemeData from themeStyles.jsx (deprecated)
  • NEVER hardcode hex colors that should adapt to theme
  • Use absolute imports: /snippets/components/...
  • Mintlify components are global (no imports needed)
  • React hooks are global (no imports needed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Commit blocked. Fix violations and try again.
```

## 文件结构

```
.githooks/
├── pre-commit          # Main pre-commit hook (source)
├── verify.sh           # Verification script (runs syntax checks)
├── install.sh          # Installation script
└── README.md           # Quick reference

.git/hooks/
└── pre-commit          # Active hook (installed from .githooks/)
```

## 浏览器验证

预提交钩子包含 **无头浏览器验证** 以捕获通过语法检查但无法在浏览器中渲染的 MDX 文件。

### 它是如何工作的

1. **提取已暂存的 MDX 文件** - 仅测试您正在提交的文件
2. **转换为 URLs** - 将文件路径映射到 Mintlify URLs
3. **在 Puppeteer 中测试** - 在无头 Chrome 中访问每个页面
4. **检查错误**:
   - 控制台错误
   - 页面错误
   - 渲染失败
   - 空页面
   - 请求失败

### 要求

- **Node.js** - 必须安装
- **Puppeteer** - 必须在 `package.json` devDependencies
- **Mintlify server** - `mint dev` 必须运行（或设置 `MINT_BASE_URL`)

### 使用方法

如果满足以下条件，浏览器验证将自动运行：
- 已安装 Puppeteer（`npm install` 或 `package.json`）
- `mint dev` 正在运行（或 `MINT_BASE_URL` 已设置）

如果服务器未运行，检查将 **跳过**（不会阻止提交）。

### 示例输出

```
🌐 Browser validation: Testing 3 staged MDX file(s)...
✅ Server accessible at http://localhost:3000

  Testing v2/resources/documentation-guide/style-guide.mdx... ✅
  Testing v2/resources/documentation-guide/snippets-inventory.mdx... ✅
  Testing v2/resources/documentation-guide/component-library.mdx... ❌
     Error: Failed to resolve import: /snippets/components/Component.jsx

✅ All 2 page(s) rendered successfully in browser
❌ 1 of 3 page(s) failed browser validation:

  v2/resources/documentation-guide/component-library.mdx:
    - Failed to resolve import: /snippets/components/Component.jsx

💡 Fix errors and try committing again.
```

### 性能

- **限制为10页** - 预提交仅测试最多10个已暂存的MDX文件
- **15秒超时** - 每页有15秒超时
- **快速失败** - 遇到第一个错误时停止以提高速度

要进行完整站点测试，请使用：`npm run test:v2-pages`

## 自定义

### 添加新检查

#### 添加到样式指南检查

编辑 `.githooks/pre-commit` 并添加新的检查部分：

```bash
# Check 6: Your new check
echo "Checking for [your check]..."
for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        if grep -q "pattern-to-check" "$file" 2>/dev/null; then
            WARNINGS+=("❌ $file: Your error message")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
    fi
done
```

#### 添加到验证脚本

编辑 `.githooks/verify.sh` 并添加新的检查：

```bash
# Check 7: Your new verification
echo "Checking [your check]..."
if command -v your-tool &>/dev/null; then
    # Run your check
    if ! your-tool check "$file"; then
        WARNINGS+=("❌ $file: Your error message")
        VIOLATIONS=$((VIOLATIONS + 1))
    fi
fi
```

### 禁用特定检查

要临时禁用检查，请在 `.githooks/pre-commit` 中注释掉它：

```bash
# Check 1: ThemeData import/usage (DEPRECATED)
# echo "Checking for ThemeData usage (deprecated)..."
# ... (commented out)
```

### 将检查改为警告而不是错误

更改退出代码或移除违规计数：

```bash
# Warning only (doesn't block commit)
WARNINGS+=("⚠️  $file: Warning message")
# Don't increment VIOLATIONS

# Error (blocks commit)
WARNINGS+=("❌ $file: Error message")
VIOLATIONS=$((VIOLATIONS + 1))
```

## 绕过钩子（不推荐）

**⚠️ 警告：** 仅在有正当理由且了解后果时才绕过钩子。

### 受保护的 `.allowlist` 编辑（仅限人工）

预提交钩子默认保护 `.allowlist`。

如果人工需要更新 `.allowlist`，请使用：

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

此覆盖仅适用于 `.allowlist` 编辑，并仍运行所有其他预提交检查。

### 受保护的删除（仅限人工）

预提交钩子会阻止除 `tasks/` 默认情况下。

如果人类有意需要允许删除，请使用：

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

此覆盖仅适用于删除，并仍运行所有其他预提交检查。

```bash
# Bypass pre-commit hook
git commit --no-verify -m "message"
```

**为什么应避免这样做：**
- 违反样式指南合规性
- 可能导致破坏构建的错误
- 使代码审查更困难
- 可能导致其他开发人员出现问题

## 故障排除

### 钩子未运行

1. **检查钩子是否已安装：**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **检查钩子是否可执行：**
   ```bash
   chmod +x .git/hooks/pre-commit
   ```

3. **重新安装：**
   ```bash
   ./.githooks/install.sh
   ```

### 误报

如果检查错误地标记了有效的代码：

1. **检查样式指南** - 确保您的代码符合指南
2. **查看错误信息** - 钩子会解释哪里出错了
3. **修复违规** - 遵循样式指南的建议
4. **如果是 bug** - 报告它或修复钩子模式

### 钩子太慢

如果钩子运行太慢：

1. **检查验证脚本** - 一些检查（如 Mintlify 构建）可能很慢
2. **使检查可选** - 在本地开发时注释掉慢速检查
3. **使用 `--no-verify`** - 仅在绝对必要时使用（参见上面的警告）

## 对于 CI/CD

这些钩子专为本地开发设计。对于 CI/CD：

1. **使用 GitHub Actions 的等效项** 而不是直接运行 pre-commit。
2. **将静态检查范围限定为 PR 中的更改文件** 以避免因遗留的全仓库债务而被阻塞。
3. **保持浏览器扫描全站** 以确保运行时/渲染安全。

当前 CI 映射：

- `.github/workflows/test-suite.yml` (`Docs CI - Content Quality Suite`)
  - 拉取请求：更改文件阻塞检查
    - 样式指南、MDX、拼写、质量、链接/导入
    - 对更改的脚本进行脚本文档强制执行
    - 对更改的文档页面进行严格的 V2 链接审计
  - 集成 PR 例外：`docs-v2 -> main` 将更改文件静态失败视为建议性
  - 还会运行来自 `docs.json`
  - 的浏览器测试
- `.github/workflows/test-v2-pages.yml` (`Docs CI - V2 Browser Sweep`)
  - Full V2 browser sweep
  - Posts/updates PR comments and uploads JSON artifact
- `.github/workflows/broken-links.yml`
  - Advisory only (non-blocking) while legacy link cleanup is in progress

## Style Guide Reference

The hooks enforce rules from:

- **Style Guide:** `v2/resources/documentation-guide/style-guide.mdx`
- **Component Library:** `v2/resources/documentation-guide/component-library.mdx`
- **Mintlify Behavior:** `snippets/snippetsWiki/mintlify-behaviour.mdx`

## Related Documentation

- [Style Guide](../v2/resources/documentation-guide/style-guide.mdx)
- [Component Library](../v2/resources/documentation-guide/component-library.mdx)
- [Contribution Guide](./CONTRIBUTING.md) (if exists)
- [Agent Prerequisites](../PLAN/AGENT-PREREQUISITES.md)

## Support

If you encounter issues:

1. Check this documentation
2. Review the style guide
3. Check `.githooks/README.md` for quick reference
4. Open an issue or ask in the repository
