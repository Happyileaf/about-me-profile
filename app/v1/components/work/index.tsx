import Reveal from "../reveal";
import { GithubIcon, ExternalLinkIcon } from "../icons";

/** 作品项目数据 */
type Project = {
  /** 预览中的代码注释文本 */
  code: string;
  /** 项目标签 */
  tag: string;
  /** 项目标题 */
  title: string;
  /** 项目访问地址，为空表示尚未上线 */
  href: string;
  /** 项目简介 */
  desc: string;
  /** 技术栈列表 */
  tech: string[];
  /** GitHub 仓库地址，可选 */
  github?: string;
  /** 项目状态，design 表示设计中 */
  status?: "design";
  /** 是否反转左右排版 */
  reverse?: boolean;
};

const PROJECTS: Project[] = [
  {
    code: "// project-01",
    tag: "Featured Project",
    title: "Bookmark Lite 轻量书签管理平台",
    href: "https://bookmark-lite.contextlab.top/bookmarks",
    desc: "集 Web 平台、浏览器扩展与 MCP Server 于一体的轻量书签管理平台。支持多标签分类、收藏 / 回收站、导入导出、公共与个人双库，通过 Chrome 扩展一键收藏并同步原生书签，并以 MCP 工具把书签能力接入 Claude、Cursor 等 AI 客户端。",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "MCP"],
    github: "https://github.com/Happyileaf/bookmark-lite",
  },
  {
    code: "// project-02",
    tag: "Featured Project",
    title: "About Me Profile 个人主页",
    href: "https://www.happyhaoya.top/",
    desc: "个人主页，展示个人经历、项目经历、技能等。",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Happyileaf/about-me-profile",
    reverse: true,
  },
  {
    code: "// project-03",
    tag: "In Design",
    title: "Lumen · 摄影作品展示平台",
    href: "",
    desc: "面向独立摄影师的作品集平台。以瀑布流与全屏灯箱呈现作品，支持按专辑 / 标签 / EXIF 信息组织浏览；内置暗色影棚级主题、自适应图像与懒加载，访客可在沉浸式阅读视图中查看拍摄参数、地点与创作手记。",
    tech: ["Next.js", "TypeScript", "Tailwind", "Three.js", "PostgreSQL"],
    status: "design",
  },
];

/** 作品占位预览：模拟浏览器窗口与代码注释 */
function ProjectPreview({ code }: { code: string }) {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="preview-code">{code}</div>
      <div className="browser-chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-bar mid" />
      <div className="preview-bar short" />
      <div className="preview-blocks">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

/** 作品区块：精选项目的图文展示 */
export default function Work() {
  return (
    <section id="work">
      <Reveal>
        <div className="section-heading">
          <span className="num">03.</span>
          <h2>精选作品</h2>
        </div>
      </Reveal>

      {PROJECTS.map((p, i) => (
        <Reveal
          as="article"
          key={p.title}
          className={p.reverse ? "project reverse" : "project"}
          delay={i * 80}
        >
          <ProjectPreview code={p.code} />
          <div className="project-content">
            <p className={`project-tag${p.status === "design" ? " is-design" : ""}`}>
              {p.tag}
            </p>
            <h3 className="project-title">
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            {p.href.startsWith("http") ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-url"
              >
                <ExternalLinkIcon />
                {new URL(p.href).hostname}
              </a>
            ) : null}
            <p className="project-desc">{p.desc}</p>
            <ul className="tech-list">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {p.github ? (
                <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
              ) : null}
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label="外部链接">
                  <ExternalLinkIcon />
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
