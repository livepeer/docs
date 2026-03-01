{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL2xwZC5tZCIsInNvdXJjZVJvdXRlIjoiZG9jcy1ndWlkZS9scGQiLCJzb3VyY2VIYXNoIjoiNGY3ZWQzZjFhYWJmOTliZjlkOTZhZDYyZjk0NjFhMzQ4MDQ3MTI0MzQ3ZDI5NzVkMDA1NmQzMzQ4ZTU0N2RmMyIsImxhbmd1YWdlIjoiY24iLCJwcm92aWRlciI6Im9wZW5yb3V0ZXIiLCJtb2RlbCI6InF3ZW4vcXdlbi10dXJibyIsImdlbmVyYXRlZEF0IjoiMjAyNi0wMy0wMVQxNzoyNzo1My41NTlaIn0= */}
# LPD CLI 指南（内部）

`lpd` 是用于设置、本地开发、测试编排、钩子管理和脚本执行的存储库 CLI。

## 命令模型

主要命令组：

- `lpd setup` - 引导依赖项/钩子/CLI 连接
- `lpd doctor` - 环境就绪检查
- `lpd dev` - 启动本地文档开发流程
- `lpd test` - 按范围运行测试套件
- `lpd ai-sitemap` - 生成或验证 sitemap-ai.xml
- `lpd ci` - 本地 CI 类检查
- `lpd hooks` - 安装/状态/验证钩子和钩子脚本执行
- `lpd scripts` - 发现并按组运行托管脚本
- 快捷方式组： `lpd tools ...`, `lpd tasks ...`, `lpd tests ...`, `lpd v2 ...`

## 核心运行手册

### 1) 首次设置

```bash
bash lpd setup --yes
```

预期结果：

- 安装依赖项（基于标志）
- 安装/更新钩子
- 可选地连接 `lpd` 到当前用户的 PATH 中

### 2) 本地文档开发

```bash
lpd dev
# fallback if PATH not yet refreshed
bash lpd dev
```

有用变体：

```bash
lpd dev --test --test-mode staged
lpd dev -- --port 3333
```

### 3) 测试入口点

```bash
lpd test --staged
lpd test --staged --wcag
lpd test --staged --link-audit-external
lpd test --full
lpd test --full --wcag
lpd test --full --wcag --wcag-no-fix
lpd test --full --link-audit-external
lpd test --browser
lpd ci --skip-browser
```

WCAG 审计备注：

- `--wcag` 在正常 `lpd test` 流程后运行 v2 可访问性审计。
- 在默认/快速和 `--staged` 模式下， `lpd` 将 WCAG 映射到已暂存、有限制的运行（`--staged --max-pages 10`）。
- 在 `--full` 模式下， `lpd` 运行完整的 v2 WCAG 扫描。
- WCAG 自动修复默认启用；使用 `--wcag-no-fix` 切换到仅建议模式。
- 自动 WCAG 检查是部分覆盖，不能替代手动可访问性审查。

外部链接审计备注：

- `--link-audit-external` 运行 `tests/integration/v2-link-audit.js` 与 `--external-policy validate`。
- 在默认/快速和 `--staged` 模式下， `lpd` 将外部审计范围映射到 `--staged`。
- 在 `--full` 模式下， `lpd` 将外部审计范围映射到 `--full`。
- 非零外部审计退出在默认/快速模式中是建议性的，但在`--staged`中是阻止性的`--full`。

### 3.5）AI 站点地图生成

```bash
lpd ai-sitemap --check
lpd ai-sitemap --write
```

### 4）Hook 管理

```bash
lpd hooks install
lpd hooks status
lpd hooks verify
lpd hooks info
```

### 5）脚本发现和执行

```bash
lpd scripts list --group tools
lpd scripts run tools generate-docs-guide-indexes -- --check
lpd tools dev test-add-callouts -- --help
lpd tools wcag-repair-common -- --staged --stage
```

### 6）I18n 翻译管道（OpenRouter 仅限免费版默认）

翻译工具通过相同的托管脚本接口可用：

```bash
./lpd tools i18n translate-docs -- --help
./lpd tools i18n generate-localized-docs-json -- --help
./lpd tools i18n validate-generated -- --help
```

注意：

- `v2`本地化页面在以下路径下生成`v2/<lang>/...`（例如`v2/es/...`，`v2/fr/...`，`v2/cn/...`）
- 简体中文使用 Mintlify 代码`cn`；CLI 接受`zh-CN`并将其标准化为`cn`
- `v1`在当前版本中故意保留为英文

典型的本地烟雾测试（真实 OpenRouter 翻译，单页）：

```bash
./lpd tools i18n translate-docs -- \
  --provider openrouter \
  --languages es \
  --scope-mode prefixes \
  --prefixes v2/about/livepeer-network \
  --max-pages 1 \
  --route-map /tmp/i18n-route-map.json \
  --report-json /tmp/i18n-translate-report.json
```

## 脚本发现约束

- 脚本发现支持根`.lpdignore`模式
- 被忽略的脚本将被排除在列表/运行命令之外

参考文件：

- `tools/cli/lpdignore.example`

## 所有权 + 真相

- CLI 行为真相：`lpd`脚本实现
- 操作导航真相：本文件 +`docs-guide/README.md`

要深入了解 hook/test 行为，请使用：

- [`quality-gates.md`](./quality-gates.md)
- `contribute/CONTRIBUTING/GIT-HOOKS.md`
