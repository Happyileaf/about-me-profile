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
        role: "计算机科学与技术 · 本科",
        orgHref: "#",
        orgLabel: "@ 江西师范大学",
        date: "2018年09月 — 2022年06月 · 南昌",
        bullets: [
          "主修课程：数据结构、计算机组成原理、操作系统、计算机网络、Web 应用技术、数据库技术。",
          "获奖 / 证书：GPA 3.4 / 4.0，英语（CET-4），国家励志奖学金，校级奖学金。",
        ],
      },
    ],
  },
  {
    title: "工作经历",
    en: "/ Work Experience",
    entries: [
      {
        role: "前端开发工程师",
        orgHref: "https://www.byai.com/",
        orgLabel: "@ 浙江百应科技有限公司（智能运营 SaaS）",
        date: "2024年01月 — 2026年07月 · 杭州",
        bullets: [
          "主要负责通信平台、呼叫中心、MA 等核心业务线的迭代交付与线上稳定性保障。",
          "负责前端基础设施的持续建设，建设 nano 构建工具链与统一组件库，推动多语言方案落地，支撑云服务商迁移，实现全局样式标准化，累计清理技术债务 30+ 项。",
          "推动 AI Agent 在开发流程中落地，建设 fe-harness 与多 agent 平台，优化研发范式。",
          "主导 WhatsApp 渠道接入与 LeadSpark 线索交易平台从 0 到 1 开发，支持出海业务。",
        ],
      },
      {
        role: "前端开发工程师",
        orgHref: "https://www.beisen.com/",
        orgLabel: "@ 北森云计算有限公司（HR SaaS）",
        date: "2022年05月 — 2023年10月 · 北京",
        bullets: [
          "主要负责北森内部数据分析工具 —— Ocean 的项目迭代和线上运维等工作。",
          "参与公司公共组件库建设，包括新增组件（3）、问题处理（7）、性能优化（2）等工作。",
          "参与组内技术文档、业务文档的整理和日常更新工作。",
          "主要负责招聘业务线，社招方向的项目迭代和线上运维等工作。",
          "参与新项目面试运营系统的开发，参与面试官工作台的重构。",
        ],
      },
      {
        role: "前端开发工程师(实习)",
        orgHref: "#",
        orgLabel: "@ 浙江单创品牌管理有限公司（电商）",
        date: "2021年07月 — 2021年09月 · 杭州",
        bullets: [
          "在集团大前端技术部业务支撑组，主要负责 ABM 业务线的项目开发和日常需求迭代。",
          "参与学习中心内容底层改造与素材馆重构 2 个百人日项目，高质高效完成开发工作，保证项目顺利上线。",
          "积极学习团队现有技术栈，熟悉团队协作开发流程；定期参与 Code Review，提升代码质量与规范意识。",
        ],
      },
    ],
  },
  {
    title: "项目经历",
    en: "/ Projects",
    entries: [
      {
        role: "AI Agent 赋能前端体系",
        date: "2026年03月 — 2026年07月",
        bullets: [
          "【项目介绍】推进 AI Agent 驱动前端开发。",
          "【技术栈 / 工具】Codex / Claude Code，Multica.ai，Node.js，Python，Skill 等。",
          "设计和落地 frontend-harness。面向前端项目的 AI Agent 工程化 Skill，将开发流程从“口头规范”固化为可安装、可执行、可校验的闭环工作流，覆盖任务拆解、规格生成、契约验收、QA 门禁、会话收口和运行时升级。",
          "搭建多 agent 平台（基于 multica.ai），模拟研发团队工作流，自动执行 code review、漏洞扫描、提交 MR、bug 修复等操作。",
          "落地多个专用场景 skill，包括技术方案编写、单元测试 / 变异测试、UI 重构（设计稿）、UI 重构（设计 spec）、飞书通知等。参与测试相关 harness 工程的搭建。",
          "推动 frontend-harness 跨团队落地，确保后端同学可以完成简单的前端需求，基于使用反馈持续优化。",
        ],
      },
      {
        role: "LeadSpark 线索交易平台",
        date: "2026年04月 — 2026年06月",
        bullets: [
          "【项目介绍】线索交易平台，运营端管理全局、供应商管理线索供给、需求方采购线索。",
          "【技术栈 / 工具】React，TypeScript，Qiankun，nano（Rsbuild）。",
          "负责前端架构设计：qiankun 微前端 + 三端独立部署 + 流水线 / 构建配置 + 认证和权限等。",
          "负责微前端架构搭建：使用 qiankun 实现微前端，主子应用搭建，支持子应用独立启动和微前端启动两种模式。",
          "负责设计系统落地：Gravity 设计规范落地（令牌基座体系、组件契约、硬编码清除、行为契约、页面蓝图、工程门禁），antd v4 迁移至 Semi Design，支持主题动态切换（亮 / 暗模式 + 多主题色）。",
          "负责工程质量治理：lint 问题修复，CI 流水线优化（artifacts 瘦身 + 离线安装策略），接入单元测试和变异测试。",
        ],
      },
      {
        role: "一体化数据分析工具 —— Ocean",
        date: "2022年05月 — 2023年05月",
        bullets: [
          "【项目介绍】一体化数据分析工具。对业务数据进行搜集、处理、建模，以满足业务报表、业务建模分析、数据价值挖掘。",
          "【技术栈】React，React Hooks，Redux，TypeScript，ECharts，AntV G2，Backbone.js，jQuery，Fetch。",
          "参与数据集、报表、主题等的开发工作，包括数据从获取、建模、呈现、对外提供的全流程。",
          "参与报表设计器、主题设计器的迭代开发，主要包括报表配置（数据整合、图形配置、图表联动）和主题的布局、联动。",
          "参与图形组件库开发，封装（基于 AntV、ECharts）、扩展（辅助线、四象限等）和重构（Backbone.js → React），新旧图形迁移平稳，业务线和客户反馈良好。",
          "辅助把控迭代进度，同步风险，团队间的沟通对齐，问题复盘等工作。",
          "迭代过程中遵循 IPD 流程（方案评审通过率 100%，0 延期，0 线上事务）；参与制定和完善团队内部流程规范（3 项），整理业务和技术文档（15 篇）。",
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
                key={`${sub.title}-${entry.role}-${entry.orgLabel ?? entry.date}`}
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
                  {entry.bullets.map((b, bIdx) => (
                    <li key={`${sub.title}-${entry.role}-${bIdx}`}>{b}</li>
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
