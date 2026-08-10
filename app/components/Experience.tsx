import Reveal from "@/app/components/Reveal";

type TimelineEntry = {
  role: string;
  orgHref?: string;
  orgLabel?: string;
  date: string;
  bullets: string[];
};

type ExpSubsection = {
  title: string;
  en: string;
  entries: TimelineEntry[];
};

const SUBSECTIONS: ExpSubsection[] = [
  {
    title: "教育经历",
    en: "/ Education",
    entries: [
      {
        role: "计算机科学与技术 · 硕士",
        orgHref: "#",
        orgLabel: "@ 某 985 高校",
        date: "2018 — 2021 · 南京",
        bullets: [
          "研究方向为人机交互与数据可视化，发表相关论文 2 篇。",
          "负责实验室 Web 可视化平台前端开发，主导多个横向项目落地。",
        ],
      },
      {
        role: "软件工程 · 学士",
        orgHref: "#",
        orgLabel: "@ 某 211 高校",
        date: "2014 — 2018 · 成都",
        bullets: [
          "主修前端工程、数据库系统、计算机网络，连续三年获学业奖学金。",
          "校 ACM 队员与前端技术社团负责人，组织多场校内技术分享。",
        ],
      },
    ],
  },
  {
    title: "工作经历",
    en: "/ Work Experience",
    entries: [
      {
        role: "高级前端工程师",
        orgHref: "#",
        orgLabel: "@ 某 AI 基础设施公司",
        date: "2023 — 至今 · 北京",
        bullets: [
          "主导内部 AI Agent 工作台前端架构，支撑多模型接入、工具调用可视化与对话回放。",
          "设计并落地团队首个基于 Token 流式协议的渲染层，首字延迟降低约 40%。",
          "推动前端设计系统与组件库建设，覆盖 6 条业务线，显著减少重复开发。",
        ],
      },
      {
        role: "前端工程师",
        orgHref: "#",
        orgLabel: "@ 某企业协作 SaaS",
        date: "2021 — 2023 · 杭州",
        bullets: [
          "负责文档与知识库模块重构，基于虚拟滚动与增量渲染支撑十万级文档列表。",
          "搭建前端可观测性体系，接入性能埋点与错误监控，关键路径崩溃率下降 60%。",
          "参与从 Vue 2 到 Vue 3 + TypeScript 的渐进式迁移与工程规范制定。",
        ],
      },
      {
        role: "前端实习生",
        orgHref: "#",
        orgLabel: "@ 某数据可视化创业团队",
        date: "2020 — 2021 · 上海",
        bullets: [
          "基于 Three.js / WebGL 开发行业大屏可视化组件，服务多个政企客户。",
          "抽象通用图表配置层，将新看板交付周期从两周缩短至三天。",
        ],
      },
    ],
  },
  {
    title: "项目经历",
    en: "/ Projects",
    entries: [
      {
        role: "AI Chat Studio · 多模型对话工作台",
        orgHref: "#work",
        orgLabel: "查看作品",
        date: "2024 — 2025",
        bullets: [
          "从 0 到 1 搭建面向团队的 Prompt 版本管理与工具调用可视化平台，支持多模型并行对比。",
          "设计流式消息协议与可回放调用链路，将复杂 Agent 执行过程对非技术同学可视化。",
        ],
      },
      {
        role: "RAG Console · 知识库检索调试平台",
        orgHref: "#work",
        orgLabel: "查看作品",
        date: "2023 — 2024",
        bullets: [
          "可视化文档切片、向量召回与引用溯源，支持多套 Embedding 与向量库 A/B 对比。",
          "将 RAG 链路每一步中间结果暴露给工程师，显著降低调参排错成本。",
        ],
      },
      {
        role: "Agent Flow · 拖拽式工作流编辑器",
        orgHref: "#work",
        orgLabel: "查看作品",
        date: "2023",
        bullets: [
          "基于 React Flow 构建多 Agent 协作画布，支持条件分支与人工介入节点。",
          "内置运行时可视化面板，可逐步回放每一次工具调用与状态变更。",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <div className="section-heading">
          <span className="num">02.</span>
          <h2>经历</h2>
        </div>
      </Reveal>

      {SUBSECTIONS.map((sub, sIdx) => (
        <div className="exp-subsection" key={sub.title}>
          <Reveal>
            <div className="exp-subtitle">
              <span className="dot" />
              <h3>{sub.title}</h3>
              <span className="en">{sub.en}</span>
            </div>
          </Reveal>

          <div className="timeline">
            {sub.entries.map((entry, eIdx) => (
              <Reveal
                key={`${sub.title}-${entry.role}`}
                className="timeline-item"
                delay={(sIdx + eIdx) * 50}
              >
                <h3 className="timeline-role">
                  {entry.role}{" "}
                  {entry.orgHref && entry.orgLabel ? (
                    <a
                      href={entry.orgHref}
                      target={entry.orgHref.startsWith("#") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                    >
                      {entry.orgLabel}
                    </a>
                  ) : null}
                </h3>
                <p className="timeline-date">{entry.date}</p>
                <ul>
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
