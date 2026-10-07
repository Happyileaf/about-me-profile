import React from 'react';
import { DividerShell } from './divider-shell';

/**
 * 默认风格分隔栏，透明背景、30px 高，仅以留白与边框分割版面。
 *
 * @returns 默认风格分隔栏
 */
export const PlainDivider: React.FC = () => {
  return (
    <DividerShell innerClassName="py-1.5 min-h-[30px]" />
  );
};
