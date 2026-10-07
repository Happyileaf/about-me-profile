import React from 'react';
import { SectionDividerProps } from './types';
import { SectionDividerVariantEnum } from './variant-enum';
import { PlainDivider } from './components/plain-divider';
import { StripeDivider } from './components/stripe-divider';
import { CheckerDivider } from './components/checker-divider';
import { DiamondDivider } from './components/diamond-divider';
import { TextDivider } from './components/text-divider';
import { PORTFOLIO_METADATA } from '../../lib/portfolioData';

export type { SectionDividerProps } from './types';
export {
  SectionDividerVariantEnum,
  SectionDividerVariantLabelMap,
  SectionDividerVariantOptions,
} from './variant-enum';

/** 风格名到子组件的映射表，新增风格只需在此登记并实现子组件 */
const VARIANT_COMPONENTS: Record<
  SectionDividerVariantEnum,
  React.ComponentType<Partial<SectionDividerProps>>
> = {
  [SectionDividerVariantEnum.Plain]: PlainDivider,
  [SectionDividerVariantEnum.Stripe]: StripeDivider,
  [SectionDividerVariantEnum.Checker]: CheckerDivider,
  [SectionDividerVariantEnum.Diamond]: DiamondDivider,
  [SectionDividerVariantEnum.Text]: TextDivider,
};

/**
 * 档案页通用横向分隔栏，按 variant 分发到对应风格子组件，
 * 统一盒模型（30px 高、1080px 内容栏、两侧边框），可用于顶部栏下方或各章节之间。
 *
 * @param props - 组件属性
 * @param props.variant - 分隔栏视觉风格，默认 Stripe
 * @param props.text - Text 风格下重复展示的文字片段
 * @returns 分隔栏元素
 */
export default function SectionDivider({
  variant = SectionDividerVariantEnum.Text,
  text = PORTFOLIO_METADATA.englishName,
}: SectionDividerProps) {
  const VariantComponent = VARIANT_COMPONENTS[variant];

  return <VariantComponent text={text} />;
}
