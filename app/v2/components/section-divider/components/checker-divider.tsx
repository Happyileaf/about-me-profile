import React from 'react';
import { DividerShell } from './divider-shell';

/**
 * 棋盘格风格分隔栏，透明底上两组错位 45 度纹理线叠出 10px 棋盘格。
 *
 * @returns 棋盘格风格分隔栏
 */
export const CheckerDivider: React.FC = () => {
  return (
    <DividerShell
      innerClassName="h-[30px]"
      outerStyle={{
        backgroundImage:
          'linear-gradient(45deg, #eeeeee 25%, transparent 25%, transparent 75%, #eeeeee 75%), linear-gradient(45deg, #eeeeee 25%, transparent 25%, transparent 75%, #eeeeee 75%)',
        backgroundPosition: '0 0, 5px 5px',
        backgroundSize: '10px 10px',
      }}
    />
  );
};
