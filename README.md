# SynthVasc 文档站

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

**vascular-intervention-platform** 的官方文档，由 Astro Starlight 构建，支持中英双语，部署于 GitHub Pages。

**GitHub**: https://github.com/miracle-techlink/vascular-intervention-platform

## 本地开发

```bash
pnpm install
pnpm dev          # http://localhost:4321/zh-cn/
```

## 构建与部署

```bash
pnpm build        # 输出到 dist/
pnpm preview      # 本地预览构建结果
```

推送到 `main` 分支后 GitHub Actions 自动构建并部署到 GitHub Pages。

## 文档结构

```
src/content/docs/
├── zh-cn/        # 中文文档（主语言）
│   ├── index.mdx
│   ├── getting-started/
│   ├── api/
│   ├── backends/
│   ├── procedures/
│   └── dev/
└── en/           # English (in progress)
```

## 技术栈

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- 全文搜索：Pagefind（离线，无需后端）
- 部署：GitHub Pages via Actions

## 相关链接

| 资源 | 链接 |
|------|------|
| 代码仓库 | https://github.com/miracle-techlink/vascular-intervention-platform |
| stEVE 仿真环境 | https://github.com/lkarstensen/stEVE |
| SOFA Framework | https://www.sofa-framework.org |
