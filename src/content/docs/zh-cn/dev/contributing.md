---
title: 贡献指南
description: 如何为 SynthVasc 贡献代码。
---

## 开发环境

```bash
git clone https://github.com/miracle-techlink/vascular-intervention-platform
cd vascular-intervention-platform/synthvasc
pip install -e ".[dev]"
pre-commit install
```

## 代码规范

- **格式化**: ruff format（自动）
- **Lint**: ruff check（0 errors 才能合并）
- **类型**: mypy strict（0 errors）
- **测试**: pytest 全绿，新功能需附带测试

## PR 流程

1. 从 `develop` 分支创建 feature 分支
2. 实现功能 + 测试
3. `make lint && make test` 全绿
4. 提交 PR，填写模板中的 Safety Checklist
5. CI 通过后 squash merge

## 测试分层

```
tests/
├── unit/        # 单函数测试，无 I/O
├── contract/    # BackendABC 契约测试（所有后端必须通过）
└── integration/ # 端到端 episode 测试
```
