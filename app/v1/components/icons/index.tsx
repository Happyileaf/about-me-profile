import { createElement, type ComponentType, type ReactElement, type SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiCodesandbox,
  SiJuejin,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { LuMenu, LuX, LuExternalLink } from "react-icons/lu";

/** 支持的图标标识 */
export type IconName =
  | "github"
  | "instagram"
  | "twitter"
  | "linkedin"
  | "codesandbox"
  | "juejin"
  | "menu"
  | "x"
  | "external-link";

type IconProps = SVGProps<SVGSVGElement>;
type IconComponent = (props: IconProps) => ReactElement;

/** 将 react-icons 组件包装为统一签名的 SVG 组件 */
function wrap(Raw: IconType): IconComponent {
  const C = Raw as unknown as ComponentType<IconProps>;
  return function Icon(props: IconProps): ReactElement {
    return createElement(C, props);
  };
}

/** GitHub 图标 */
export const GithubIcon = wrap(SiGithub);
/** Instagram 图标 */
export const InstagramIcon = wrap(SiInstagram);
/** X(Twitter) 图标 */
export const TwitterIcon = wrap(SiX);
/** LinkedIn 图标 */
export const LinkedinIcon = wrap(FaLinkedin);
/** CodeSandbox 图标 */
export const CodesandboxIcon = wrap(SiCodesandbox);
/** 稀土掘金图标 */
export const JuejinIcon = wrap(SiJuejin);
/** 菜单图标 */
export const MenuIcon = wrap(LuMenu);
/** 关闭图标 */
export const XIcon = wrap(LuX);
/** 外链图标 */
export const ExternalLinkIcon = wrap(LuExternalLink);

/** 图标标识到组件的映射表 */
export const ICONS: Record<IconName, IconComponent> = {
  github: GithubIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  codesandbox: CodesandboxIcon,
  juejin: JuejinIcon,
  menu: MenuIcon,
  x: XIcon,
  "external-link": ExternalLinkIcon,
};
