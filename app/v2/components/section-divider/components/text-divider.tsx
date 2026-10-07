import React from 'react';
import { DividerShell } from './divider-shell';
import { DEFAULT_TEXT, TEXT_REPEAT_TIMES } from '../constants';

interface TextDividerProps {
  /** 横向重复展示的文字片段 */
  text?: string;
}

/**
 * 重复文字风格分隔栏，透明底上单排等宽纹理文字横向重复，形成节奏带。
 *
 * @param props - 组件属性
 * @param props.text - 重复展示的文字片段
 * @returns 重复文字风格分隔栏
 */
export const TextDivider: React.FC<TextDividerProps> = ({
  text = DEFAULT_TEXT,
}) => {
  return (
    <DividerShell
      bleed
      innerClassName="h-[30px] flex items-center whitespace-nowrap text-[10px] font-bold font-mono tracking-[0.25em] text-[#a3a3a3]"
    >
      <span className="shrink-0">{`\u00A0\u00A0${text}\u00A0\u00A0`.repeat(TEXT_REPEAT_TIMES)}</span>
    </DividerShell>
  );
};
