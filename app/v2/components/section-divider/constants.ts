import { PORTFOLIO_METADATA } from '../../lib/portfolioData';

/**
 * 重复文字的复制份数。
 * 单份片段约 12 个字符，200 份可覆盖约 16000px 的容器宽度，超宽屏也不会露出空白；
 * 多出的部分由外壳 overflow-hidden 裁掉，不会破坏布局。
 */
export const TEXT_REPEAT_TIMES = 200;

/** text 风格默认重复的文字片段，取自站点作者英文名与档案标识 */
export const DEFAULT_TEXT = `${PORTFOLIO_METADATA.englishName} · PORTFOLIO ·`;
