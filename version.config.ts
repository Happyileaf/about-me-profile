/**
 * 站点默认版本。
 * 访问根路径 / 时，服务端在不改写浏览器地址的前提下渲染该版本；
 * 需要切换默认版本时，只需修改此处取值（例如改为 "v2"）。
 * 各版本仍可通过 /v1、/v2 前缀路径直接访问。
 */
export const ACTIVE_VERSION = "v1" as const;

/** 站点支持的全部版本编号。 */
export type SiteVersion = "v1" | "v2";
