---
title: 关于项目
description: vascular-intervention-platform 项目信息、论文引用、致谢与开源协议。
---

## 项目信息

**SynthVasc / vascular-intervention-platform** 是同济大学血管介入手术机器人课题组开发的
端到端导丝导航研究平台，覆盖从公开 CT 数据到物理机器人部署的完整闭环。

| 信息 | 内容 |
|------|------|
| **GitHub** | https://github.com/miracle-techlink/vascular-intervention-platform |
| **论文** | RA-L + ICRA 2026 投稿中 |
| **单位** | 同济大学计算机学院 |
| **开源协议** | MIT License |

## 论文引用

如使用本平台，请引用：

```bibtex
@article{synthvasc2026,
  title   = {SynthVasc: Synthetic DSA Generation, Sim-to-Real Adaptation,
             and Diffusion Policy Learning for Endovascular Guidewire Navigation},
  author  = {Vascular Intervention Robot Group, Tongji University},
  journal = {RA-L + ICRA},
  year    = {2026}
}
```

同时请引用 stEVE 仿真环境：

```bibtex
@inproceedings{karstensen2025steve,
  title     = {stEVE: Open-source simulation for endovascular interventions},
  author    = {Karstensen, L. and others},
  booktitle = {Comput. Biol. Med.},
  year      = {2025}
}
```

## 致谢

- [stEVE](https://github.com/lkarstensen/stEVE) — 开源血管介入仿真环境基础
- [SOFA Framework](https://www.sofa-framework.org) — 有限元物理仿真引擎
- [TotalSegmentator](https://github.com/wasserth/TotalSegmentator) — CT 血管自动分割
- [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3) — 强化学习算法库
- [guide3d](https://github.com/airvlab/guide3d) — 真实双平面 DSA 数据集
- Sim4EndoR 团队（姚天亮、齐鹏等，同济大学）— 物理机器人平台支持

## 开源协议

MIT License © 2026 血管介入手术机器人课题组，同济大学
