// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://miracle-techlink.github.io/synthvasc-docs',
  base: '/synthvasc-docs',
  integrations: [
    starlight({
      title: 'SynthVasc',
      description: '端到端血管介入导丝导航平台，从公开 CT 数据到物理机器人部署的完整闭环。',

      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/miracle-techlink/vascular-intervention-platform' },
      ],

      defaultLocale: 'zh-cn',
      locales: {
        'zh-cn': { label: '中文', lang: 'zh-CN' },
        'en':    { label: 'English', lang: 'en' },
      },

      sidebar: [
        {
          label: '入门',
          translations: { en: 'Getting Started' },
          items: [
            { label: '总览',     translations: { en: 'Overview' },      slug: 'getting-started/overview' },
            { label: '快速开始', translations: { en: 'Quick Start' },   slug: 'getting-started/quickstart' },
            { label: '安装部署', translations: { en: 'Installation' },  slug: 'getting-started/installation' },
            { label: '架构概览', translations: { en: 'Architecture' },  slug: 'getting-started/architecture' },
          ],
        },
        {
          label: '核心 API',
          translations: { en: 'Core API' },
          items: [
            {
              label: 'Foundation (L1)',
              collapsed: false,
              items: [
                { label: 'PhysicsState', slug: 'api/foundation/physics-state' },
                { label: 'BackendABC',   slug: 'api/foundation/backend-abc' },
                { label: 'Registry',     slug: 'api/foundation/registry' },
                { label: '@configclass', slug: 'api/foundation/configclass' },
              ],
            },
            {
              label: 'Simulator (L2)',
              collapsed: true,
              items: [
                { label: '三频 Decimation', translations: { en: 'Tri-rate Decimation' }, slug: 'api/simulator/decimation' },
                { label: 'O(1) Reset',      slug: 'api/simulator/reset' },
              ],
            },
            {
              label: 'Scene (L3)',
              badge: { text: 'WIP', variant: 'caution' },
              collapsed: true,
              items: [
                { label: 'SceneGraph',   slug: 'api/scene/scene-graph' },
                { label: 'Entity Types', slug: 'api/scene/entities' },
              ],
            },
            {
              label: 'Env (L4)',
              badge: { text: 'WIP', variant: 'caution' },
              collapsed: true,
              items: [
                { label: 'SynthVascEnv', slug: 'api/env/synthvasc-env' },
                { label: 'Managers',     slug: 'api/env/managers' },
              ],
            },
            {
              label: 'Models (L6)',
              badge: { text: 'TODO', variant: 'note' },
              collapsed: true,
              items: [
                { label: 'ModelBridge', slug: 'api/models/model-bridge' },
              ],
            },
          ],
        },
        {
          label: '后端',
          translations: { en: 'Backends' },
          items: [
            { label: 'Mock Backend',    slug: 'backends/mock',    badge: { text: 'Done', variant: 'success' } },
            { label: 'SOFA Backend',    slug: 'backends/sofa',    badge: { text: 'WIP',  variant: 'caution' } },
            { label: 'Blender Backend', slug: 'backends/blender', badge: { text: 'TODO', variant: 'note' } },
          ],
        },
        {
          label: '术式 / 场景',
          translations: { en: 'Procedures' },
          items: [
            { label: 'CAS 颈动脉支架', translations: { en: 'CAS Carotid Stenting' }, slug: 'procedures/cas' },
            { label: 'AVT 数据集',     translations: { en: 'AVT Dataset' },           slug: 'procedures/avt-dataset' },
          ],
        },
        {
          label: '开发者',
          translations: { en: 'Developer' },
          items: [
            { label: '6 周学习计划', translations: { en: 'Study Plan' },   slug: 'dev/study-plan' },
            { label: '贡献指南',     translations: { en: 'Contributing' }, slug: 'dev/contributing' },
            { label: 'Changelog',    slug: 'dev/changelog' },
          ],
        },
        {
          label: '关于',
          translations: { en: 'About' },
          items: [
            { label: '关于项目', translations: { en: 'About' }, slug: 'about' },
          ],
        },
      ],

      customCss: ['./src/styles/custom.css'],

      editLink: {
        baseUrl: 'https://github.com/miracle-techlink/vascular-intervention-platform/edit/main/docs/',
      },

      lastUpdated: true,
      pagination: true,
    }),
  ],
});
