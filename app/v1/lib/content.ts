import type { IconName } from "../components/icons";

/** 联系邮箱 */
export const EMAIL = "997401767@qq.com";

/** GitHub 主页地址 */
export const GITHUB_HREF = "https://github.com/Happyileaf";

/** 简历 PDF 的静态资源路径 */
export const RESUME_HREF = "/前端开发-全栈开发-朱益荣-2026.pdf";

/** 顶部导航项 */
export type NavItem = {
  /** 序号展示文本，如 "01." */
  num: string;
  /** 导航文案 */
  label: string;
  /** 锚点链接 */
  href: string;
  /** 对应区块的元素 id，用于滚动高亮 */
  id: string;
};

/** 顶部导航配置 */
export const NAV_ITEMS: NavItem[] = [
  { num: "01.", label: "关于", href: "#about", id: "about" },
  { num: "02.", label: "经历", href: "#experience", id: "experience" },
  { num: "03.", label: "作品", href: "#work", id: "work" },
  { num: "04.", label: "联系", href: "#contact", id: "contact" },
];

/** 社交外链配置 */
export type SocialLink = {
  /** 平台名称，用作无障碍标签 */
  name: string;
  /** 外链地址 */
  href: string;
  /** 对应的图标标识 */
  icon: IconName;
};

/** 左侧固定社交链接配置 */
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/Happyileaf", icon: "github" },
  { name: "稀土掘金", href: "https://juejin.cn/user/2524134429703063", icon: "juejin" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/%E7%9B%8A%E8%8D%A3-%E6%9C%B1-b2ba91428/", icon: "linkedin" },
  { name: "CodeSandbox", href: "https://codesandbox.io/u/Happyileaf", icon: "codesandbox" },
];
