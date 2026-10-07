/**
 * 分隔栏视觉风格枚举
 */
export enum SectionDividerVariantEnum {
  /**
   * 默认风格，透明背景，仅以留白与边框分割版面
   */
  Plain = 'Plain',

  /**
   * 斜线风格，深色底配 45 度重复斜线
   */
  Stripe = 'Stripe',

  /**
   * 棋盘格风格，深色底配棋盘格纹理
   */
  Checker = 'Checker',

  /**
   * 菱形风格，深色底配交错菱形网格
   */
  Diamond = 'Diamond',

  /**
   * 重复文字风格，深色底配横向重复文字
   */
  Text = 'Text',
}

/**
 * 分隔栏视觉风格名称映射
 */
export const SectionDividerVariantLabelMap: Record<
  SectionDividerVariantEnum,
  string
> = {
  /**
   * 默认风格
   */
  [SectionDividerVariantEnum.Plain]: '默认',

  /**
   * 斜线风格
   */
  [SectionDividerVariantEnum.Stripe]: '斜线',

  /**
   * 棋盘格风格
   */
  [SectionDividerVariantEnum.Checker]: '棋盘格',

  /**
   * 菱形风格
   */
  [SectionDividerVariantEnum.Diamond]: '菱形',

  /**
   * 重复文字风格
   */
  [SectionDividerVariantEnum.Text]: '重复文字',
};

/**
 * 分隔栏视觉风格选项数据源，供选择器等场景按统一顺序消费
 */
export const SectionDividerVariantOptions = [
  {
    label: SectionDividerVariantLabelMap[SectionDividerVariantEnum.Plain],
    value: SectionDividerVariantEnum.Plain,
  },
  {
    label: SectionDividerVariantLabelMap[SectionDividerVariantEnum.Stripe],
    value: SectionDividerVariantEnum.Stripe,
  },
  {
    label: SectionDividerVariantLabelMap[SectionDividerVariantEnum.Checker],
    value: SectionDividerVariantEnum.Checker,
  },
  {
    label: SectionDividerVariantLabelMap[SectionDividerVariantEnum.Diamond],
    value: SectionDividerVariantEnum.Diamond,
  },
  {
    label: SectionDividerVariantLabelMap[SectionDividerVariantEnum.Text],
    value: SectionDividerVariantEnum.Text,
  },
];
