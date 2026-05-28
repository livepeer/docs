{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9BR0VOVC1JTlNUUlVDVElPTlMubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HL0FHRU5ULUlOU1RSVUNUSU9OUyIsInNvdXJjZUhhc2giOiIzMzM5ZDA2MTlmMjYyMjcwOTk0ODM4ZGNiNzA0ZTYzYmVkN2Q4NGNlYWZjMDY5ZDk2Y2U1MzllODg0ZTllMjBjIiwibGFuZ3VhZ2UiOiJjbiIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjIzOjIzLjkzNloifQ== */}
# 代理指令用于Git钩子

本文件为在此仓库中工作的AI代理提供了具体指令。

## 强制：安装Git钩子

在进行任何更改之前，代理必须确保已安装git钩子：

```bash
./.githooks/install.sh
```

## 钩子如何工作

pre-commit钩子在您尝试提交时自动运行。它：

1. **扫描已暂存的文件** - 检查所有`.jsx`, `.tsx`, `.js`, `.mdx` 文件
2. **运行样式检查** - 根据样式指南规则进行验证
3. **运行验证** - 执行语法和验证检查
4. **阻止提交** - 阻止存在违规的提交

## 检查内容

### 样式指南违规（阻止提交）

- `ThemeData` 或 `themeStyles.jsx` 导入 → **阻止**
- 硬编码主题颜色（"`#3CB540`, `#2b9a66`等） → **阻止**
- 对片段的相对导入 → **警告**
- `@mintlify/components` 导入 → **警告**
- React钩子导入 → **警告**

### 验证检查（阻止提交）

- 无效的MDX前导内容 → **阻止**
- 无效的JSON语法 → **阻止**
- shell脚本语法错误 → **阻止**
- JavaScript语法错误 → **阻止**
- 无效的 Mintlify 配置 → **阻止**
- 浏览器渲染失败 → **阻止**（如果 `mint dev` 正在运行）

## 代理工作流程

### 在提交之前

1. **检查钩子是否已安装：**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **暂存您的更改：**
   ```bash
   git add <files>
   ```

3. **尝试提交**（钩子会自动运行）：
   ```bash
   git commit -m "your message"
   ```

4. **如果被阻止：**
   - 阅读错误信息
   - 修复违规
   - 再次尝试提交

### 常见违规及修复方法

#### 使用 ThemeData

**错误：**
```
❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead
```

**修复：**
```jsx
// ❌ WRONG
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
<div style={{ color: ThemeData.light.accent }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### 硬编码颜色

**错误：**
```
⚠️  file.mdx: Contains hardcoded theme colors - use CSS Custom Properties
```

**修复：**
```jsx
// ❌ WRONG
<div style={{ color: "#3CB540" }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### 相对导入

**错误：**
```
⚠️  file.jsx: Uses relative imports - use absolute paths from root
```

**修复：**
```jsx
// ❌ WRONG
import { Component } from "../components/Component.jsx";

// ✅ CORRECT
import { Component } from "/snippets/components/Component.jsx";
```

## 绕过钩子

**⚠️ 严重：**代理必须在获得用户明确许可的情况下才能绕过钩子。

`AGENTS.md` 和 `docs-guide/policies/agent-governance-framework.mdx` 中的规范明确指出：
- **绝不要**使用 “`--no-verify`” 标志来绕过钩子
- 这是一个硬性项目约束

如果您遇到误报：
1. 向用户报告
2. 请求指导
3. 不要绕过钩子

如果有人明确需要编辑 “`.allowlist`”，他们必须使用：

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

如果有人明确需要允许文件删除，他们必须使用：

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

## 浏览器验证

该钩子包含 “**无头浏览器验证**” 用于测试 MDX 文件是否在浏览器中实际渲染。

### 要求

- `mint dev`必须运行（或设置 “`MINT_BASE_URL`环境变量）
- Puppeteer 必须安装（“`npm install`或在 “`package.json`” 中）

### 它是如何工作的

1. 提取已暂存的 MDX 文件
2. 将文件路径转换为 URL
3. 使用 Puppeteer 在无头 Chrome 中测试每个页面
4. 检查以下内容：
   - 控制台错误
   - 页面错误
   - 渲染失败
   - 空页面

### 如果服务器未运行

如果`mint dev` 未运行，浏览器验证将被**跳过**（不会阻止提交）。这使得钩子在本地开发中运行迅速。

### 全面测试

要测试所有页面（而不仅仅是已暂存的）：
```bash
npm run test:v2-pages
```

## 测试钩子

要测试钩子是否正常工作：

```bash
# Create a test file with a violation
echo 'import { ThemeData } from "/snippets/styles/themeStyles.jsx";' > test-violation.jsx
git add test-violation.jsx
git commit -m "test"  # Should be blocked

# Clean up
rm test-violation.jsx
git reset HEAD test-violation.jsx
```

### 测试浏览器验证

```bash
# Start mint dev in one terminal
mint dev

# In another terminal, create a test MDX file
echo '---\ntitle: Test\n---\n# Test' > v2/pages/test.mdx
git add v2/pages/test.mdx
git commit -m "test browser validation"  # Will test in browser
```

## 故障排除

### 钩子未运行

```bash
# Reinstall
./.githooks/install.sh

# Verify
ls -la .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### 钩子错误

如果钩子本身有错误：

1. 检查`.githooks/pre-commit` 语法
2. 检查`.githooks/verify.sh` 语法
3. 手动运行：`bash .githooks/pre-commit`
4. 向用户报告问题

## 对于分叉

当在分叉上工作时：

1. 克隆分叉
2. 安装钩子：`./.githooks/install.sh`
3. 钩子将以相同方式工作

## 相关文档

- [完整 Git 钩子文档](./GIT-HOOKS)
- [风格指南](../../resources/documentation-guide/style-guide)
- [代理前提条件](../../PLAN/AGENT-PREREQUISITES.md)
- [代理治理框架](../../../../docs-guide/policies/agent-governance-framework.mdx)
- [根 allowlist 治理](../../../../docs-guide/policies/root-allowlist-governance.mdx)
