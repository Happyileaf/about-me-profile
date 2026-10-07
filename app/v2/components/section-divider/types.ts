import { SectionDividerVariantEnum } from './variant-enum';

/**
 * 分隔栏支持的视觉风格，取值与 SectionDividerVariantEnum 保持一致。
 *
 * - Plain：透明背景（默认，仅以留白与边框分割版面）
 * - Stripe：深色底 + 45 度重复斜线
 * - Checker：深色底 + 棋盘格
 * - Diamond：深色底 + 交错菱形网格
 * - Text：深色底 + 横向重复文字
 */
export type SectionDividerVariant = SectionDividerVariantEnum;

export interface SectionDividerProps {
  /** 分隔栏视觉风格，默认 Plain */
  variant?: SectionDividerVariant;
  /** variant 为 text 时横向重复的文字片段，默认使用站点作者标识 */
  text?: string;
}
