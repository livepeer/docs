{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJkb2NzLWd1aWRlL1JFQURNRS5tZCIsInNvdXJjZVJvdXRlIjoiZG9jcy1ndWlkZSIsInNvdXJjZUhhc2giOiIzZjk3NzI5NWQ4YTUyMWRlMDg1NzgzMTU0MGQ3ZjBlOWJkMDMxZDdmZTI0OTVkZmNlYzg5MjViMGIwYmZhZDg2IiwibGFuZ3VhZ2UiOiJjbiIsInByb3ZpZGVyIjoib3BlbnJvdXRlciIsIm1vZGVsIjoicXdlbi9xd2VuLXR1cmJvIiwiZ2VuZXJhdGVkQXQiOiIyMDI2LTAzLTAxVDE3OjI1OjQ1LjE0OFoifQ== */}
# 文档指南（内部权威来源）

此文件夹是仓库功能和功能的内部维护者导航权威来源。它不是 Mintlify 导航的一部分，`docs.json`；它的存在是为了保持操作文档的可发现性、非重复性和可维护性。

## 权威来源模型

- 运行时行为：权威来源是代码和测试。
- 功能和操作导航：权威来源是这个 `docs-guide/` 文件夹。
- 公共文档用户体验/内容：权威来源是 Mintlify 页面下的 `v2/pages/`。
- 生成的目录：权威来源是生成脚本；生成的文件是只读的。

查看 [source-of-truth-policy.md](./source-of-truth-policy.md) 以了解完整的边界。

## 从这里开始

| 如果您需要了解... | 规范文件 |
|---|---|
| 治理和规范所有权 | [source-of-truth-policy.md](./source-of-truth-policy.md) |
| 完整的仓库功能图 | [feature-map.md](./feature-map.md) |
| 系统间的数据和控制流 | [architecture-map.md](./architecture-map.md) |
| CLI 行为和操作手册 | [lpd.md](./lpd.md) |
| 验证和强制检查点 | [quality-gates.md](./quality-gates.md) |
| GitHub Actions、n8n 和自动化流水线 | [automation-pipelines.md](./automation-pipelines.md) |
| 信息架构和内容策略 | [content-system.md](./content-system.md) |
| API 和外部数据集成 | [data-integrations.md](./data-integrations.md) |
| 脚本目录（生成的） | [scripts-index.md](./scripts-index.md) |
| 工作流目录（生成的） | [workflows-index.md](./workflows-index.md) |
| 问题/PR 模板目录（生成的） | [templates-index.md](./templates-index.md) |

## 更新规则

1. 当行为、流程、所有权或架构发生变化时，更新手动文档。
2. 当脚本、工作流或模板发生变化时，重新生成生成的目录：
   - `node tools/scripts/generate-docs-guide-indexes.js --write`
   - `node tests/unit/script-docs.test.js --write --rebuild-indexes`
3. 保持 `README.md` 高层次，并链接到规范文档指南文件以获取详细信息。
4. 不要在 README、测试文档和文档指南中跨多个地方重复长篇的指导说明。而是链接到规范页面。

## 相关区域

- 根目录导航： [`README.md`](../README.md)
- 公共文档指南： [`v2/resources/documentation-guide/`](../v2/resources/documentation-guide/)
- 贡献者流程： [`contribute/CONTRIBUTING/`](../contribute/CONTRIBUTING/)
- 测试矩阵和 CI 行为： [`tests/`](../tests/)
