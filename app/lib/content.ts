import type { IconName } from "@/app/components/icons";

export const EMAIL = "hello@haoya.dev";

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
  { name: "GitHub", href: "https://github.com/", icon: "github" },
  { name: "Instagram", href: "https://github.com/", icon: "instagram" },
  { name: "Twitter", href: "https://github.com/", icon: "twitter" },
  { name: "LinkedIn", href: "https://github.com/", icon: "linkedin" },
  { name: "CodePen", href: "https://github.com/", icon: "codepen" },
];
