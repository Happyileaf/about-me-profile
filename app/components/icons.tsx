import type { ComponentType, SVGProps } from "react";
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

export const GithubIcon = (props: IconProps) => <SiGithub {...props} />;
export const InstagramIcon = (props: IconProps) => <SiInstagram {...props} />;
export const TwitterIcon = (props: IconProps) => <SiX {...props} />;
export const LinkedinIcon = (props: IconProps) => <FaLinkedin {...props} />;
export const CodesandboxIcon = (props: IconProps) => <SiCodesandbox {...props} />;
export const JuejinIcon = (props: IconProps) => <SiJuejin {...props} />;
export const MenuIcon = (props: IconProps) => <LuMenu {...props} />;
export const XIcon = (props: IconProps) => <LuX {...props} />;
export const ExternalLinkIcon = (props: IconProps) => <LuExternalLink {...props} />;

export const ICONS: Record<IconName, ComponentType<IconProps>> = {
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
