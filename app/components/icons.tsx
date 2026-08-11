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

function wrap(Raw: IconType): IconComponent {
  const C = Raw as unknown as ComponentType<IconProps>;
  return function Icon(props: IconProps): ReactElement {
    return createElement(C, props);
  };
}

export const GithubIcon = wrap(SiGithub);
export const InstagramIcon = wrap(SiInstagram);
export const TwitterIcon = wrap(SiX);
export const LinkedinIcon = wrap(FaLinkedin);
export const CodesandboxIcon = wrap(SiCodesandbox);
export const JuejinIcon = wrap(SiJuejin);
export const MenuIcon = wrap(LuMenu);
export const XIcon = wrap(LuX);
export const ExternalLinkIcon = wrap(LuExternalLink);

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
