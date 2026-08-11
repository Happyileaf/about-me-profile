import type { IconName } from "@/app/components/icons";

export const EMAIL = "997401767@qq.com";
export const GITHUB_HREF = "https://github.com/Happyileaf";
export const RESUME_HREF = "/前端开发-朱益荣-2026.pdf";

export type NavItem = {
  num: string;
  label: string;
  href: string;
  id: string;
};

export const NAV_ITEMS: NavItem[] = [
  { num: "01.", label: "关于", href: "#about", id: "about" },
  { num: "02.", label: "经历", href: "#experience", id: "experience" },
  { num: "03.", label: "作品", href: "#work", id: "work" },
  { num: "04.", label: "联系", href: "#contact", id: "contact" },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: IconName;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/Happyileaf", icon: "github" },
  { name: "稀土掘金", href: "https://juejin.cn/user/2524134429703063", icon: "juejin" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/%E7%9B%8A%E8%8D%A3-%E6%9C%B1-b2ba91428/", icon: "linkedin" },
  { name: "CodeSandbox", href: "https://codesandbox.io/u/Happyileaf", icon: "codesandbox" },
];
