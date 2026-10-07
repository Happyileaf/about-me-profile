import React from 'react';
import { DividerShell } from './divider-shell';

/**
 * 斜线风格分隔栏，透明底上以 -45 度纹理线重复平铺。
 *
 * @returns 斜线风格分隔栏
 */
export const StripeDivider: React.FC = () => {
  return (
    <DividerShell
      innerClassName="h-[30px]"
      outerStyle={{
        backgroundImage:
          'repeating-linear-gradient(-45deg, transparent 0, transparent 5px, #eeeeee 5px, #eeeeee 6px)',
      }}
    />
  );
};
