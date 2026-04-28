---
title: Changelog
description: SynthVasc 版本更新记录。
---

## v0.1.0 — 2026-04-28

**S0 脚手架完成**

### 新增
- 5 层架构：Foundation / Simulator / Scene / Env / Models
- `PhysicsState` / `DerivedState` / `ObsState` 数据结构
- `BackendABC` 抽象接口 + `MockBackend` 实现
- `Registry` 组件注册表 + `@configclass` 装饰器
- `SynthVascEnv` Gymnasium 环境（Mock 后端）
- 39 个测试用例（unit + contract + integration）
- GitHub Actions CI：lint → typecheck → test → env_checker
- Makefile + pyproject.toml (hatchling) + pre-commit 配置
- OSS 自动备份 cron（每日增量 + 每周全量）
- `cas_v1.yaml` 首个术式配置
- 文档：STUDY_PLAN.md / LEARNING_ROADMAP.md

### 验证
- ruff check: 0 errors
- mypy: 0 errors
- pytest: 39/39 passed
- Gymnasium env_checker: passing
