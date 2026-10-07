import { Project, ExperienceItem, ProjectExperienceItem, TechStackGroup, TaxonomyCategory, FieldNote, EngineeringPrinciple } from '../types/portfolio';

export const PORTFOLIO_METADATA = {
  author: '好呀',
  englishName: 'Haoya',
  handle: '@haoya',
  role: '前端工程师 · 全栈工程师',
  location: '杭州 / 远程 (Hangzhou / Remote)',
  coordinates: '30.2741° N, 120.1551° E',
  status: '欢迎技术交流、灵感碰撞，随时 Just say hi',
  email: '997401767@qq.com',
  github: 'https://github.com/Happyileaf',
  juejin: 'https://juejin.cn/user/2524134429703063',
  linkedin: 'https://www.linkedin.com/in/%E7%9B%8A%E8%8D%A3-%E6%9C%B1-b2ba91428/',
  codesandbox: 'https://codesandbox.io/u/Happyileaf',
  resume: '/前端开发-全栈开发-朱益荣-2026.pdf',
  twitter: 'https://twitter.com',
  readcv: 'https://www.happyhaoya.top',
  dotfilesRepo: 'https://github.com/Happyileaf',
  pgpKey: '8F4A 2C90 E71B 654D 3822 91FA 0418 BC92 D047 EF38',
  edition: '第 26 卷 // 全栈系统档案',
  shellPrompt: 'haoya@zenith:~$',
  uptime: '99.99% / 全栈服务在线',
  stackSummary: 'TypeScript · React 19 · Node.js / Go · PostgreSQL',
};

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: '01',
    title: '端到端类型安全 (End-to-End Type Safety)',
    motto: '从数据库约束直达前端 DOM。',
    description: '在整个全栈链路中维持不可动摇的类型防线：从数据库 Schema 定义、自动生成的 API 类型契约（tRPC / GraphQL / OpenAPI），无缝连通至 React 前端组件与交互状态。',
  },
  {
    number: '02',
    title: '架构对称与关注点分离 (Architectural Symmetry)',
    motto: '服务端数据模型与前端状态树优雅对齐。',
    description: '清晰界定业务逻辑、数据持久化与呈现层。后端提供正交纯粹的领域服务与数据接口，前端构建声明式、可预测的 UI 状态机，最大化系统的可维护性与测试覆盖。',
  },
  {
    number: '03',
    title: '极致响应与低延迟 (Sub-50ms Perception)',
    motto: '延迟是现代应用不可妥协的核心特性。',
    description: '100ms 的等待就会打破人机直接操纵的连贯感。通过乐观更新（Optimistic UI）、服务端流式渲染、智能数据缓存与亚毫秒级数据库查询，打造极速丝滑的用户体验。',
  },
  {
    number: '04',
    title: '本地优先与弹性网络 (Local-First & Resilience)',
    motto: '离线可用，在线协同，故障自愈。',
    description: '将用户数据的掌控权放在首位。利用 CRDT 数学模型与 IndexedDB 本地存储，支持在弱网甚至断网环境下无缝工作，网络重连时自动进行多端增量对齐。',
  },
  {
    number: '05',
    title: 'Unix 极简哲学与可组合性 (Unix Modularity)',
    motto: '高度正交的小工具，优雅组合解决大问题。',
    description: '编写只专注做好一件事的模块。拒绝为了抽象而堆叠冗余的黑盒框架，用清晰的数据流与简洁的组合模式搭建坚如磐石的现代 Web 系统。',
  },
  {
    number: '06',
    title: '零膨胀前端工艺 (Zero-Bloat Frontend Craft)',
    motto: '现代主义的清晰度胜过化妆式噪点。',
    description: '拒绝拖慢浏览器主线程的第三方追踪脚本与千篇一律的胶囊圆角。以严谨的瑞士网格排印、稳固的 60 FPS 渲染与清晰的信息层级交付专业级人机交互。',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'bookmark-lite',
    tag: 'Featured Project',
    title: 'Bookmark Lite 轻量书签管理平台',
    href: 'https://bookmark-lite.contextlab.top/bookmarks',
    desc: '集 Web 平台、浏览器扩展与 MCP Server 于一体的轻量书签管理平台。支持多标签分类、收藏 / 回收站、导入导出、公共与个人双库，通过 Chrome 扩展一键收藏并同步原生书签，并以 MCP 工具把书签能力接入 Claude、Cursor 等 AI 客户端。',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'MCP'],
    github: 'https://github.com/Happyileaf/bookmark-lite',
  },
  {
    id: 'about-me-profile',
    tag: 'Featured Project',
    title: 'About Me Profile 个人主页',
    href: 'https://www.happyhaoya.top/',
    desc: '个人主页，展示个人经历、项目经历、技能等。',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Happyileaf/about-me-profile',
  },
  {
    id: 'lumen',
    tag: 'In Design',
    title: 'Lumen · 摄影作品展示平台',
    href: '',
    desc: '面向独立摄影师的作品集平台。以瀑布流与全屏灯箱呈现作品，支持按专辑 / 标签 / EXIF 信息组织浏览；内置暗色影棚级主题、自适应图像与懒加载，访客可在沉浸式阅读视图中查看拍摄参数、地点与创作手记。',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Three.js', 'PostgreSQL'],
  },
];

export const TECH_STACK_GROUPS: TechStackGroup[] = [
  // 1. Front-end (Row 1 Left, 7 cols)
  {
    id: 'frontend',
    index: '01',
    title: 'Front-end',
    subtitle: 'Expériences visuelles & interactives',
    chineseSubtitle: '视觉呈现与交互体验',
    accentColor: '#00d2ff',
    iconType: 'frontend',
    gridSpan: 'lg:col-span-7',
    items: [
      { name: 'Next.js', color: '#000000' },
      { name: 'Nuxt', color: '#00dc82' },
      { name: 'SvelteKit', color: '#ff3e00' },
      { name: 'Astro', color: '#ff5d01' },
      { name: 'Angular', color: '#dd0031' },
      { name: 'React', color: '#61dafb' },
      { name: 'Vue', color: '#42b883' },
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'Tailwind CSS', color: '#38bdf8' },
      { name: 'Qiankun (微前端)', color: '#00d2ff' },
    ],
  },

  // 2. Back-end (Row 1 Right, 5 cols)
  {
    id: 'backend',
    index: '02',
    title: 'Back-end',
    subtitle: 'Logique métier & API',
    chineseSubtitle: '业务逻辑与 API 架构',
    accentColor: '#10b981',
    iconType: 'backend',
    gridSpan: 'lg:col-span-5',
    items: [
      { name: 'Spring Boot', color: '#6db33f' },
      { name: 'Node.js', color: '#539e43' },
      { name: 'Flask', color: '#000000' },
      { name: 'Go', color: '#00add8' },
      { name: 'Fastify / Express', color: '#000000' },
      { name: 'tRPC', color: '#398ccb' },
    ],
  },

  // 3. Mobile (Row 2 Left, 4 cols)
  {
    id: 'mobile',
    index: '03',
    title: 'Mobile',
    subtitle: 'Apps cross-platform',
    chineseSubtitle: '跨平台移动应用与端能力',
    accentColor: '#a855f7',
    iconType: 'mobile',
    gridSpan: 'lg:col-span-4',
    items: [
      { name: 'React Native', color: '#61dafb' },
      { name: 'Flutter', color: '#02569b' },
      { name: 'Swift UI', color: '#f05138' },
      { name: 'Compose', color: '#4285f4' },
      { name: '微信小程序', color: '#07c160' },
    ],
  },

  // 4. DevOps & Cloud (Row 2 Right, 8 cols)
  {
    id: 'devops',
    index: '04',
    title: 'DevOps & Cloud',
    subtitle: 'Déploiement, Scaling & orchestration',
    chineseSubtitle: '部署、伸缩与容器编排',
    accentColor: '#f97316',
    iconType: 'devops',
    gridSpan: 'lg:col-span-8',
    items: [
      { name: 'Docker & Docker Swarm', color: '#2496ed' },
      { name: 'K3s / Kubernetes', color: '#326ce5' },
      { name: 'Proxmox', color: '#e57000' },
      { name: 'CI/CD (流水线)', color: '#fc6d26' },
      { name: 'Apiman', color: '#00a3e0' },
      { name: 'Reverse Proxy (Nginx)', color: '#009639' },
      { name: 'Load Balancer', color: '#00d2ff' },
    ],
  },

  // 5. IA & Data (Row 3 Left, 7 cols)
  {
    id: 'ai-data',
    index: '05',
    title: 'IA & Data',
    subtitle: 'Intelligence & Big Data',
    chineseSubtitle: '大模型智能与现代数据流',
    accentColor: '#ec4899',
    iconType: 'ai',
    gridSpan: 'lg:col-span-7',
    items: [
      { name: 'vLLM', color: '#00d2ff' },
      { name: 'Ollama', color: '#000000' },
      { name: 'LangChain', color: '#1c3c3c' },
      { name: 'LangGraph', color: '#ec4899' },
      { name: 'ChromaDB', color: '#ff6f61' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MongoDB', color: '#47a248' },
      { name: 'Redis', color: '#dc382d' },
    ],
  },

  // 6. Observabilité (Row 3 Right, 5 cols)
  {
    id: 'observability',
    index: '06',
    title: 'Observabilité',
    subtitle: 'Monitoring & Logs',
    chineseSubtitle: '可观测性、监控与日志治理',
    accentColor: '#eab308',
    iconType: 'observability',
    gridSpan: 'lg:col-span-5',
    items: [
      { name: 'Grafana', color: '#f46800' },
      { name: 'Prometheus', color: '#e6522c' },
      { name: 'Loki', color: '#f59e0b' },
      { name: 'Vector', color: '#22c55e' },
      { name: 'OpenTelemetry', color: '#425cc7' },
    ],
  },
];

export const TAXONOMY: TaxonomyCategory[] = [
  {
    index: '01',
    name: 'Front-end · 前端与视觉交互',
    focus: 'React 19 / Next.js / Vue / TypeScript / 微前端架构 / 响应式瑞士网格排印。',
    technologies: ['Next.js', 'React', 'Vue', 'Nuxt', 'SvelteKit', 'Astro', 'TypeScript', 'Tailwind CSS', 'Qiankun'],
    invariants: '严格零布局偏移 (Zero-CLS)、60 FPS 交互流畅度、设计系统令牌基座。',
    productionRigor: '主导大型出海线索平台与中台微前端架构，支撑千万级交互。',
  },
  {
    index: '02',
    name: 'Back-end · 服务端与 API 架构',
    focus: '高性能 Web 服务、Node.js / Go / Spring Boot、tRPC、RESTful API、分布式逻辑。',
    technologies: ['Node.js', 'Go', 'Spring Boot', 'Flask', 'Fastify', 'Express', 'tRPC'],
    invariants: '端到端强类型约束、优雅的错误处理中间件、高并发无状态扩展。',
    productionRigor: '构建高可靠企业级通信平台与呼叫中心后端服务集群。',
  },
  {
    index: '03',
    name: 'Mobile · 跨平台移动端',
    focus: 'React Native、Flutter、SwiftUI、Compose 及全功能微信小程序全流程交付。',
    technologies: ['React Native', 'Flutter', 'Swift UI', 'Compose', '微信小程序'],
    invariants: '端原生帧率表现、跨端状态模型复用与离线数据同步。',
    productionRigor: '交付招聘系统移动端、面试官工作台及微信小程序闭环体验。',
  },
  {
    index: '04',
    name: 'DevOps & Cloud · 云原生与编排',
    focus: 'Docker 容器化、K3s / Kubernetes、CI/CD 自动化流水线、反向代理与网关。',
    technologies: ['Docker', 'K3s', 'Proxmox', 'CI/CD 流水线', 'Apiman', 'Nginx 反代', '负载均衡'],
    invariants: '一次构建多环境无缝复现、自动化测试门禁与秒级灰度发布。',
    productionRigor: '主导 CI/CD 流水线瘦身与离线安装策略，构建速度提升 75%。',
  },
  {
    index: '05',
    name: 'IA & Data · AI 应用与数据流',
    focus: 'AI Agent 工程化 (fe-harness)、LangChain / LangGraph、本地大模型与数据库架构。',
    technologies: ['vLLM', 'Ollama', 'LangChain', 'LangGraph', 'ChromaDB', 'PostgreSQL', 'MongoDB', 'Redis'],
    invariants: 'Prompt / Skill 契约规范化、向量检索高精准度与强类型 Schema。',
    productionRigor: '落地团队多 agent 协同平台，开发效率提升 40% 以上。',
  },
  {
    index: '06',
    name: 'Observabilité · 可观测性与监控',
    focus: 'Grafana 监控看板、Prometheus 指标搜集、Loki 日志归集与性能预警链路。',
    technologies: ['Grafana', 'Prometheus', 'Loki', 'Vector', 'OpenTelemetry'],
    invariants: '实时错误告警分发、请求链路透明可溯与亚秒级日志检索。',
    productionRigor: '全天候保障智能运营 SaaS 核心业务线线上 99.99% 稳定性。',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  // 1. 工作经历
  {
    id: 'exp-byai',
    period: '2024.01 — 2026.07',
    role: '前端开发工程师',
    organization: '浙江百应科技有限公司（智能运营 SaaS）',
    location: '杭州',
    link: 'https://www.byai.com/',
    description: '主要负责通信平台、呼叫中心、MA 等核心业务线的迭代交付与线上稳定性保障，深度参与前端基础设施建设与 AI Agent 研发工作流落地。',
    deliverables: [
      '主要负责通信平台、呼叫中心、MA 等核心业务线的迭代交付与线上稳定性保障',
      '负责前端基础设施的持续建设，建设 nano 构建工具链与统一组件库，推动多语言方案落地，支撑云服务商迁移，实现全局样式标准化，累计清理技术债务 30+ 项',
      '推动 AI Agent 在开发流程中落地，建设 fe-harness 与多 agent 平台，优化研发范式',
      '主导 WhatsApp 渠道接入与 LeadSpark 线索交易平台从 0 到 1 开发，支持出海业务',
    ],
    techStack: ['React', 'TypeScript', 'Qiankun', 'nano (Rsbuild)', 'Semi Design', 'AI Agent / Harness'],
    status: 'ACTIVE',
  },
  {
    id: 'exp-beisen',
    period: '2022.05 — 2023.10',
    role: '前端开发工程师',
    organization: '北森云计算有限公司（HR SaaS）',
    location: '北京',
    link: 'https://www.beisen.com/',
    description: '主要负责北森内部数据分析工具 —— Ocean 的项目迭代和线上运维等工作，参与公司公共组件库建设与社招方向业务线交付。',
    deliverables: [
      '主要负责北森内部数据分析工具 —— Ocean 的项目迭代和线上运维等工作',
      '参与公司公共组件库建设，包括新增组件 (3)、问题处理 (7)、性能优化 (2) 等工作',
      '主要负责招聘业务线，社招方向的项目迭代和线上运维等工作',
      '参与新项目面试运营系统的开发，参与面试官工作台的重构与性能优化',
      '参与组内技术文档、业务文档的整理和日常更新工作（累计输出 15 篇规范文档）',
    ],
    techStack: ['React', 'React Hooks', 'Redux', 'TypeScript', 'ECharts', 'AntV G2', 'Fetch'],
    status: 'ARCHIVED',
  },
  {
    id: 'exp-singleplus',
    period: '2021.07 — 2021.09',
    role: '前端开发工程师 (实习)',
    organization: '浙江单创品牌管理有限公司（电商）',
    location: '杭州',
    description: '在集团大前端技术部业务支撑组，主要负责 ABM 业务线的项目开发和日常需求迭代，参与百人日级系统底层改造。',
    deliverables: [
      '在集团大前端技术部业务支撑组，主要负责 ABM 业务线的项目开发和日常需求迭代',
      '参与学习中心内容底层改造与素材馆重构 2 个百人日项目，高质高效完成开发工作，保证项目顺利上线',
      '积极学习团队现有技术栈，熟悉团队协作开发流程；定期参与 Code Review，提升代码质量与规范意识',
    ],
    techStack: ['Vue', 'Vue Router', 'Vuex', 'Element UI', 'Ant Design', 'axios'],
    status: 'ARCHIVED',
  },
];

export const EDUCATIONS: ExperienceItem[] = [
  {
    id: 'exp-edu-jxnu',
    period: '2018.09 — 2022.06',
    role: '计算机科学与技术 · 本科 (工学学士)',
    organization: '江西师范大学 (Jiangxi Normal University)',
    location: '南昌',
    description: '',
    deliverables: [
      '主修课程：数据结构、计算机组成原理、操作系统、计算机网络、Web 应用技术、数据库技术',
      '学术与学业表现：GPA 3.4 / 4.0，英语 CET-4 认证',
      '荣誉奖项：国家励志奖学金、校级奖学金',
    ],
    status: 'ARCHIVED',
  },
];

export const PROJECT_EXPERIENCES: ProjectExperienceItem[] = [
  {
    id: 'proj-exp-agent',
    index: '01',
    title: 'AI Agent 赋能前端体系',
    subtitle: 'fe-harness 与多 Agent 协同研发平台',
    period: '2026.03 — 2026.07',
    role: '工程化设计与落地负责人',
    domain: '研发效能 / AI Agent 驱动',
    tag: 'AI Agent 工程化',
    intro: '推进 AI Agent 驱动前端开发。设计和落地面向前端项目的 AI Agent 工程化 Skill，将开发流程从“口头规范”固化为可安装、可执行、可校验的闭环工作流。',
    techStack: ['Codex / Claude Code', 'Multica.ai', 'Node.js', 'Python', 'Agent Skill Harness', 'GitLab MR API'],
    responsibilities: [
      '设计和落地 frontend-harness：面向前端项目的 AI Agent 工程化 Skill，将开发流程从“口头规范”固化为可安装、可执行、可校验的闭环工作流，覆盖任务拆解、规格生成、契约验收、QA 门禁、会话收口和运行时升级。',
      '搭建多 agent 平台（基于 multica.ai），模拟研发团队工作流，自动执行 code review、漏洞扫描、提交 MR、bug 修复等操作。',
      '落地多个专用场景 skill，包括技术方案编写、单元测试 / 变异测试、UI 重构（设计稿）、UI 重构（设计 spec）、飞书通知等。参与测试相关 harness 工程的搭建。',
      '推动 frontend-harness 跨团队落地，确保后端同学可以完成简单的前端需求，基于使用反馈持续优化。',
    ],
    achievements: [
      '将团队日常重复性 CRUD 与测试编写耗时缩短 40% 以上',
      '实现规格驱动的前端代码自动审查与 QA 自动化门禁闭环',
    ],
    status: 'ACTIVE',
  },
  {
    id: 'proj-exp-leadspark',
    index: '02',
    title: 'LeadSpark 线索交易平台',
    subtitle: '出海线索交易多端微前端系统',
    period: '2026.04 — 2026.06',
    role: '前端架构与开发负责人',
    domain: '出海业务 / 微前端架构',
    tag: '微前端架构',
    intro: '线索交易平台，运营端管理全局、供应商管理线索供给、需求方采购线索。主导从 0 到 1 前端架构设计与设计系统落地。',
    techStack: ['React', 'TypeScript', 'Qiankun 微前端', 'nano (Rsbuild)', 'Semi Design', 'CI/CD Pipeline'],
    responsibilities: [
      '负责前端架构设计：qiankun 微前端 + 三端独立部署 + 流水线 / 构建配置 + 认证和权限等。',
      '负责微前端架构搭建：使用 qiankun 实现微前端，主子应用搭建，支持子应用独立启动和微前端启动两种模式。',
      '负责设计系统落地：Gravity 设计规范落地（令牌基座体系、组件契约、硬编码清除、行为契约、页面蓝图、工程门禁），antd v4 迁移至 Semi Design，支持主题动态切换（亮 / 暗模式 + 多主题色）。',
      '负责工程质量治理：lint 问题修复，CI 流水线优化（artifacts 瘦身 + 离线安装策略），接入单元测试和变异测试。',
    ],
    achievements: [
      '支持三端子应用秒级独立部署与微前端无缝聚合运行',
      '完成全站 UI 令牌基座治理，全面支持暗黑模式与多套主题定制',
    ],
    status: 'ARCHIVED',
  },
  {
    id: 'proj-exp-ocean',
    index: '03',
    title: '一体化数据分析工具 —— Ocean',
    subtitle: '企业级数据建模、报表设计器与图形引擎',
    period: '2022.05 — 2023.05',
    role: '核心开发工程师',
    domain: 'HR SaaS / 数据智能分析',
    tag: '数据可视化',
    intro: '一体化数据分析工具。对业务数据进行搜集、处理、建模，以满足业务报表、业务建模分析、数据价值挖掘。',
    techStack: ['React', 'React Hooks', 'Redux', 'TypeScript', 'ECharts', 'AntV G2', 'Backbone.js', 'Fetch'],
    responsibilities: [
      '参与数据集、报表、主题等的开发工作，包括数据从获取、建模、呈现、对外提供的全流程。',
      '参与报表设计器、主题设计器的迭代开发，主要包括报表配置（数据整合、图形配置、图表联动）和主题的布局、联动。',
      '参与图形组件库开发，封装（基于 AntV、ECharts）、扩展（辅助线、四象限等）和重构（Backbone.js → React），新旧图形迁移平稳，业务线和客户反馈良好。',
      '辅助把控迭代进度，同步风险，团队间的沟通对齐，问题复盘等工作。',
      '迭代过程中遵循 IPD 流程（方案评审通过率 100%，0 延期，0 线上事务）；参与制定和完善团队内部流程规范（3 项），整理业务和技术文档（15 篇）。',
    ],
    achievements: [
      '方案评审通过率 100%，保持 0 延期与 0 线上事故',
      '完成老旧 Backbone 图形引擎向 React 高性能平稳升级',
    ],
    status: 'ARCHIVED',
  },
  {
    id: 'proj-exp-recruitment',
    index: '04',
    title: '招聘管理系统 & 面试官工作台',
    subtitle: '一体化招聘全流程业务系统与移动端协同',
    period: '2023.06 — 2023.10',
    role: '前端核心研发',
    domain: 'HR SaaS / 招聘管理',
    tag: 'SaaS 业务系统',
    intro: '招聘业务场景一体化的管理系统，覆盖应聘者、人才、面试、背调等全业务流程。',
    techStack: ['React', 'React Hooks', 'Redux', 'TypeScript', '微信小程序', '性能工程'],
    responsibilities: [
      '负责招聘管理系统 PC 主站、移动端、微信小程序的项目迭代与线上运维。',
      '参与新项目面试运营系统，主导题库相关内容的开发及已有业务系统的接入。',
      '参与面试官工作台重构，负责首页、面试日程模块的重构与性能优化。',
      '负责 Ocean 新能力接入与已接入能力的改造优化，收集业务线使用反馈，协助完善 Ocean 对外支持的标准规范。',
    ],
    achievements: [
      '完成面试官工作台首页首屏渲染耗时大幅度优化',
      '实现 PC、移动 H5 与微信小程序全端业务闭环',
    ],
    status: 'ARCHIVED',
  },
  {
    id: 'proj-exp-learning',
    index: '05',
    title: '学习中心内容底层改造',
    subtitle: '课程类目、讲师中心与规则中台底层重构',
    period: '2021.07 — 2021.09',
    role: '前端研发',
    domain: '电商培训 / 课程中台',
    tag: '架构底层改造',
    intro: '学习中心内容底层改造，支持前台场景灵活、产品化地组织课程。',
    techStack: ['Vue', 'Vue Router', 'Vuex', 'Element UI', 'Ant Design', 'axios'],
    responsibilities: [
      '针对课程分类重合、缺乏细化标签和规则、前台场景无法灵活组织课程等问题参与底层改造。',
      '负责课程类目、讲师中心模块及其他模块中课程列表相关功能的开发。',
      '严格遵循 PRD，积极与产品、后端及测试沟通，准确理解需求，提高联调与测试效率，项目准时上线。',
    ],
    achievements: [
      '百人日项目按时准点上线，交付质量 0 严重缺陷',
      '构建灵活清晰的课程分类与多维标签筛选体系',
    ],
    status: 'ARCHIVED',
  },
];

export const FIELD_NOTES: FieldNote[] = [
  {
    id: 'fn-01',
    dispatchNumber: '笔记 01',
    title: '什么是真正的现代全栈工程？',
    subtitle: '从数据库 Schema 数据模型，到用户界面的无缝统一视角。',
    date: '2026 年 3 月',
    readTime: '阅读时长 5 分钟',
    excerpt: '当今行业往往将“全栈”简单误解为“会写 React 也会写几个增删改查”。但真正的全栈工程，必须能够从整体上把握一条数据在系统中的生命轨迹：从数据库约束、网络通信，一直贯穿到前端状态与像素级渲染。',
    tags: ['全栈工程', '系统架构', '软件设计'],
    content: [
      '现代软件工业将“全栈”这个概念严重庸俗化了——似乎一个工程师只要会写几行前端组件、用 ORM 查几张数据表，就自诩为全栈。然而，这种拼凑式的认知割裂了连接两端的所有系统现实。',
      '当你的 React 应用引发一连串不必要的重渲染时，这绝不仅仅是一个纯前端组件问题；它与后端数据的结构设计、状态变更事件的粒度以及网络数据包的组织方式密切相关。',
      '同样，当一个后端 API 响应迟缓时，罪魁祸首往往不仅是数据库查询本身，而是缺乏对客户端实际交互场景的深度理解：过度获取（Over-fetching）、深层级 N+1 关联查询，以及缺乏合理的缓存边界。',
      '真正的全栈工程师拥有全局视角的“架构对称性”：他们清楚如何从数据库底层建立稳固的 Schema 约束，通过端到端类型安全打通整个通信链路，并以高标准的现代设计语言为用户交付兼具性能与美感的专业体验。',
    ],
  },
  {
    id: 'fn-02',
    dispatchNumber: '笔记 02',
    title: '端到端类型安全：全栈 TypeScript 范式的变革',
    subtitle: '从数据库约束到前端 DOM 的坚固类型闭环。',
    date: '2026 年 1 月',
    readTime: '阅读时长 5 分钟',
    excerpt: '前后端通信的“契约黑盒”曾是软件缺陷的最大温床。当你的整个全栈链路能够共享同一套类型系统并在编译期捕获所有变更时，重构将变得前所未有的安全与从容。',
    tags: ['TypeScript', '端到端类型', 'API 契约'],
    content: [
      '在传统的开发模式中，前端与后端往往依靠脆弱的口头文档或容易失步的 API 说明书来维系契约。一旦后端字段发生改动，前端往往在运行时才以难以追踪的白屏或 Bug 暴露出来。',
      '以 TypeScript 为核心的全栈现代工具链（如 tRPC、Prisma、Zod 等）从根本上消灭了这一隐患：后端的数据库模型直接映射为领域实体类型，API 路由的输入输出自动推导为前端组件的入参类型。',
      '当你在后端修改一个字段名或调整业务参数时，TypeScript 编译器会在毫秒内精准标出前端所有受影响的组件与页面位置。',
      '这不仅极大提升了团队的开发速度，更为复杂企业级应用的长期演进构筑了一道不可逾越的质量防线。',
    ],
  },
  {
    id: 'fn-03',
    dispatchNumber: '笔记 03',
    title: '抵制前端膨胀：作为技术不变量的瑞士排印',
    subtitle: '为什么处理高密度信息的专业 Web 工具，天然需要现代主义设计。',
    date: '2025 年 10 月',
    readTime: '阅读时长 4 分钟',
    excerpt: '当一个应用充斥着浮夸的圆角药丸、毫无意义的弹跳动画和五颜六色的渐变时，它实际上是在消耗用户的认知能量。专业开发者和用户需要的，是如同精密仪表般克制、清晰且高效的界面。',
    tags: ['现代主义', '瑞士排印', '前端工艺'],
    content: [
      '界面的视觉膨胀与底层的技术衰退之间，往往存在着不可忽视的强相关性。当一个团队习惯于添加漫无目的的动画、重重叠叠的半透明卡片以及未经审视的第三方分析脚本时，软件的响应速度与内在质量往往也在同步下滑。',
      '迪特·拉姆斯（Dieter Rams）与约瑟夫·米勒-布罗克曼（Josef Müller-Brockmann）早就教导过我们：好的设计是尽可能少的设计。网格从来不是限制创造力的枷锁，而是让复杂数据清晰呼吸的建筑骨架。',
      '对于与高密度数据、系统流程打交道的专业用户而言，清晰就是生产力。干净利落的发丝分割线、严密对齐的等宽制表数字、未经胶囊盒装污染的纯净文本，以及低于 50ms 的点击响应，不仅是设计美学——更是现代全栈工程不可动摇的技术承诺。',
    ],
  },
];

export const CLI_COMMANDS: Record<string, string> = {
  help: `可用系统指令 (COMMANDS):
  help        - 显示指令帮助索引
  bio         - 输出工程师个人简介与全栈理念
  stack       - 打印全栈开发技术矩阵
  projects    - 列出核心生产级系统与工程作品
  principles  - 输出全栈工程师六大核心准则
  contact     - 打印通信渠道与直连邮箱
  clear       - 清空终端屏幕`,
  bio: `好呀 [Haoya / @haoya]
坐标: 杭州 / 远程 (Hangzhou / Remote)
身份: 全栈工程师 · 现代 Web 系统架构师
专注: 前端架构、AI Agent 体系、微前端、高并发服务端与现代主义瑞士排印前端
背景: 江西师范大学 计算机科学与技术 工学学士 (GPA 3.4)
哲学: 端到端类型安全、架构对称性、低延迟体验、零膨胀前端工艺`,
  stack: `全栈技术矩阵:
  后端与 API : Node.js, Go, TypeScript, Fastify, Express, REST, WebSocket
  数据库与流 : PostgreSQL, Redis, ClickHouse, SQL 建模分析
  前端与交互 : React 19, TypeScript, Next.js, Vite, Tailwind CSS v4, Qiankun 微前端
  AI 与效能  : AI Agent Harness, Multi-Agent 研发平台, Prompt / Skill 自动化`,
  projects: `代表性项目经历:
  1. [PROJ.01] AI Agent 赋能前端体系 (fe-harness / 多 Agent 平台)
  2. [PROJ.02] LeadSpark 线索交易平台 (出海微前端架构 / Gravity 设计系统)
  3. [PROJ.03] 一体化数据分析工具 —— Ocean (报表/主题设计器/图形引擎)
  4. [PROJ.04] 招聘管理系统 & 面试官工作台 (全流程系统重构/小程序)
  5. [PROJ.05] 学习中心内容底层改造 (课程中台/讲师中心底层改造)`,
  principles: `全栈工程师核心准则:
  1. 端到端类型安全 (从数据库 Schema 约束直达前端 DOM)
  2. 架构对称与关注点分离 (服务端数据模型与前端状态树优雅对齐)
  3. 极致响应与低延迟 (无论网络状况，追求亚 50ms 即时响应)
  4. 本地优先与弹性网络 (离线可用、在线协同、故障自愈)
  5. Unix 极简哲学与可组合性 (高度正交的小模块优雅解决大问题)
  6. 零膨胀前端工艺 (瑞士网格排印，坚决摒弃圆角胶囊与杂乱噪点)`,
  contact: `联络与交流渠道:
  邮箱: happyaihaoya@gmail.com
  主页: https://www.happyhaoya.top
  GitHub: https://github.com/Happyileaf
  Twitter: @haoya`,
};

export const COLOPHON_DATA = {
  typography: [
    { role: '标题与重点文字', font: 'Newsreader / Noto Serif SC', spec: '可变光学校正衬线体，纯正编辑质感' },
    { role: '正文与导航', font: 'Plus Jakarta Sans / Noto Sans SC', spec: '字重 400/500/600，高可读性无衬线体' },
    { role: '指标与代码数据', font: 'JetBrains Mono', spec: '等宽等高数字 (Tabular Numerals)，高精度对齐' },
  ],
  gridSystem: {
    columns: '瑞士 12 栏模块化基线网格 (12-Column Modular Baseline)',
    baselineRhythm: '24px 纵向行高基线节奏',
    gutters: '1px 极细发丝网格分割线 (#e5e5e5)',
    viewportDiscipline: '针对 1080px 经典紧凑大屏优化，兼顾移动端自适应折叠',
  },
  palette: [
    { name: '主色 Primary', hex: '#000000', role: '核心墨黑：标题、结构边界、终端底色' },
    { name: '副色 Secondary', hex: '#ffffff', role: '纯白画布：底色与反白文字' },
    { name: '强调 1 (红色)', hex: '#ff0000', role: '标度红：终端提示符、章节序号、主状态' },
    { name: '强调 2 (蓝色)', hex: '#0057b8', role: '国际蓝：全栈分层标示、数据链接与网格线' },
    { name: '强调 3 (黄色)', hex: '#ffcc00', role: '几何黄：运行状态指示灯、展开标记' },
    { name: '强调 4 (琥珀)', hex: '#6c3b00', role: '深琥珀：系统不变量印章、哲学格言' },
  ],
};
