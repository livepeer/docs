{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL3NvdXJjZS1vZi10cnV0aC1wb2xpY3kubWQiLCJzb3VyY2VSb3V0ZSI6ImRvY3MtZ3VpZGUvc291cmNlLW9mLXRydXRoLXBvbGljeSIsInNvdXJjZUhhc2giOiI0YTNiYzM5OWQ3ZDkyNjhlYzU3YzFhYWUyYmY0MmIwNWMxY2IxNGQ1YjU1Yzg0ZjIzNWNmZGExNDQ1NmFmNTdiIiwibGFuZ3VhZ2UiOiJjbiIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjMwOjE1LjczMFoifQ== */}
# 真相来源政策

本文件定义了规范的所有权边界，以防止在README、docs-guide、测试文档和Mintlify页面之间出现偏差。

## 规范边界

| 关注点 | 规范来源 | 注释 |
|---|---|---|
| 脚本/运行时行为 | 代码 + 测试 | 行为真相始终存在于可执行代码和验证测试中。 |
| 脚本元数据和库存 | 脚本头 + 生成的索引 | 脚本头用于生成脚本索引。 |
| 仓库功能导航图 | `docs-guide/*.md`（手动规范文件） | 内部维护者真相来源。 |
| 公开用户面向文档内容 | `v2/pages/**` | Mintlify 文档在`docs.json`导航中。 |
| CI/测试执行行为 | 工作流文件 + 测试运行器脚本 | 叙述性摘要必须链接到这些文件。 |
| 问题/PR接收行为 | `.github/ISSUE_TEMPLATE/*` + PR模板 + 工作流 | 生成的模板索引总结了使用情况。 |

## 必需的docs-guide规范文件

以下文件必须存在且非空：

- `docs-guide/README.md`
- `docs-guide/feature-map.md`
- `docs-guide/architecture-map.md`
- `docs-guide/lpd.md`
- `docs-guide/quality-gates.md`
- `docs-guide/automation-pipelines.md`
- `docs-guide/content-system.md`
- `docs-guide/data-integrations.md`

## 生成的索引文件

以下文件是生成的，不应直接编辑：

- `docs-guide/scripts-index.md`
- `docs-guide/workflows-index.md`
- `docs-guide/templates-index.md`

重新生成使用：

```bash
node tools/scripts/generate-docs-guide-indexes.js --write
node tests/unit/script-docs.test.js --write --rebuild-indexes
```

## 生成文件横幅

生成的和混合生成的文件应在顶部包含标准化横幅，该横幅记录：

- 生成器脚本（s）
- 目的
- 何时重新运行生成器
- 不要编辑警告

指南：

- 对完全生成的文件使用全文件横幅。
- 对仅包含生成部分的文件使用混合文件横幅。
- 使用`unknown/external`当无法在仓库中确认生成器时。
- 不要直接编辑生成的JSON文件；JSON工件应被清单/报告而不是注释。

如果你的分支包含生成的横幅强制工具，使用：

```bash
node tools/scripts/enforce-generated-file-banners.js --write
node tools/scripts/enforce-generated-file-banners.js --check
```

## README 合同

`README.md`是一个导向文档，而不是完整的操作手册。

它必须包括：

- 仓库是什么
- 如何快速运行（`lpd setup`, `lpd dev`, 基本测试）
- 高级功能图
- 链接到文档指南规范文件

它不应该重复已经存在于以下内容中的深度流程:

- `docs-guide/`
- `tests/*.md`
- `contribute/CONTRIBUTING/*.md`
- `v2/resources/documentation-guide/*.mdx`

## 变更管理规则

1. 任何有意义的流程变更必须在同一个 PR 中更新相关的文档指南规范文件。
2. 任何脚本/工作流/模板的变更必须在同一个 PR 中重新生成索引。
3. 如果 README 和文档指南不一致，文档指南规范文件被视为操作导航的权威来源。
