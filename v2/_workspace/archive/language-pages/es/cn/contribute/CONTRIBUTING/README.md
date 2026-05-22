{/* codex-i18n: eyJraW5kIjoiY29kZXgtaTE4biIsInZlcnNpb24iOjEsInNvdXJjZVBhdGgiOiJjb250cmlidXRlL0NPTlRSSUJVVElORy9SRUFETUUubWQiLCJzb3VyY2VSb3V0ZSI6ImNvbnRyaWJ1dGUvQ09OVFJJQlVUSU5HIiwic291cmNlSGFzaCI6IjZkYTVmNzFhMjU2YzZkOTg5Mzg4YzVjZDQ0MWRmMzNjN2FhY2NhMWE4NTc5OWFhZWU2Y2U0N2Q3MjM4NmY5NDIiLCJsYW5ndWFnZSI6ImNuIiwicHJvdmlkZXIiOiJvcGVucm91dGVyIiwibW9kZWwiOiJxd2VuL3F3ZW4tdHVyYm8iLCJnZW5lcmF0ZWRBdCI6IjIwMjYtMDMtMDFUMTc6MjU6MjkuNjY4WiJ9 */}
# 贡献于 Livepeer 文档

欢迎！本指南将帮助您贡献于 Livepeer 文档。

## 快速入门

1. **阅读样式指南** - `v2/resources/documentation-guide/style-guide.mdx`
2. **安装 Git 钩子** - 查看 [Git 钩子文档](./GIT-HOOKS.md)
3. **分叉和克隆** - 创建您的分叉并将其克隆到本地
4. **进行更改** - 遵循样式指南和组件库
5. **本地测试** - 运行 `lpd dev` 以预览更改（自动安装/更新钩子）。如果 PATH 尚未更新，请使用 `bash lpd dev`。
6. **提交 PR** - 使用您的更改打开一个拉取请求

## 必读内容

在进行任何更改之前，请阅读：

1. **[样式指南](../../resources/documentation-guide/style-guide)** - 生产级样式指南
2. **[组件库](../v2/resources/documentation-guide/component-library.mdx)** - 可用组件
3. **[Git 钩子](./GIT-HOOKS.md)** - 预提交钩子文档
4. **[Mintlify 行为指南](../../snippets/snippetsWiki/mintlify-behaviour.mdx)** - Mintlify 特定模式

## Git 钩子

此仓库使用 Git 钩子来强制执行质量标准。**您必须安装它们：**

```bash
./.githooks/install.sh
```

查看 [Git 钩子文档](./GIT-HOOKS.md) 以获取详细信息。

## 开发设置

```bash
# Install Mintlify CLI
npm i -g mintlify

# Run development server
lpd dev
# or without PATH setup
bash lpd dev

# Optional: add LP CLI script ignore rules
cp tools/cli/lpdignore.example .lpdignore
```

## 样式指南规则

**关键规则：**

- ✅ 使用 CSS 自定义属性： `var(--accent)`, `var(--text)`, 等等。
- ❌ 永远不要使用 `ThemeData` 从 `themeStyles.jsx`（已弃用）
- ❌ 永远不要硬编码应适应主题的十六进制颜色
- ✅ 使用绝对导入： `/snippets/components/...`
- ✅ Mintlify 组件是全局的（无需导入）
- ✅ React 钩子是全局的（无需导入）

## 测试

在提交之前：

- [ ] 运行 `lpd dev`（或 `bash lpd dev`）并验证页面渲染正确
- [ ] 在浅色和深色模式下进行测试
- [ ] 检查所有链接是否正常工作
- [ ] 验证没有控制台错误
- [ ] 确保 git 钩子通过（它们在提交时会自动运行）

## 资源

- [文档指南](../../resources/documentation-guide/documentation-guide)
- [参与文档贡献](../../resources/documentation-guide/contribute-to-the-docs)
- [片段清单](../../resources/documentation-guide/snippets-inventory)
