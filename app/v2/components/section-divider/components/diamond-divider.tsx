import React from 'react';
import { DividerShell } from './divider-shell';

/**
 * 菱形风格分隔栏，透明底上正负 45 度的两条纹理线交叉构成 14px 菱形网格。
 *
 * @returns 菱形风格分隔栏
 */
export const DiamondDivider: React.FC = () => {
  return (
    <DividerShell
      innerClassName="h-[30px]"
      outerStyle={{
        backgroundImage:
          'linear-gradient(45deg, transparent 48%, #eeeeee 48%, #eeeeee 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, #eeeeee 48%, #eeeeee 52%, transparent 52%)',
        backgroundSize: '14px 14px',
      }}
    />
  );
};
