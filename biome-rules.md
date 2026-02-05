# Biome 配置说明 (biome.json 规则注释)

| 配置项 | 说明 |
|--------|------|
| **$schema** | 使用 Biome 2.3.14 的 schema，用于编辑器和校验 |
| **vcs** | 版本控制相关：只对已纳入 Git 的文件进行检查/格式化，并尊重 `.gitignore` |
| **vcs.enabled** | 启用 VCS 集成 |
| **vcs.clientKind** | 使用 Git 作为版本控制 |
| **vcs.useIgnoreFile** | 使用仓库的 ignore 文件（如 .gitignore）排除文件 |
| **files** | 文件处理相关 |
| **files.ignoreUnknown** | `false`：不忽略未知类型文件，会按配置尝试处理 |
| **formatter** | 代码格式化器 |
| **formatter.enabled** | 启用格式化 |
| **formatter.indentStyle** | 缩进风格：`tab`（Tab 缩进） |
| **linter** | 代码检查（Lint） |
| **linter.enabled** | 启用 Linter |
| **linter.rules.recommended** | 使用推荐规则集 |
| **javascript.formatter.quoteStyle** | JS/TS 字符串引号：`double`（双引号） |
| **assist** | 代码辅助（如自动整理 import） |
| **assist.enabled** | 启用代码辅助 |
| **assist.actions.source.organizeImports** | 保存时自动整理 import 顺序（`on`） |
