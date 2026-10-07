import React from 'react';

interface DividerShellProps {
  /** 外层全宽容器追加的类名（排版等） */
  outerClassName?: string;
  /** 外层全宽容器的内联样式（背景纹理等），纹理据此占满整个视口宽度 */
  outerStyle?: React.CSSProperties;
  /** 内层内容栏追加的类名（高度、排版等） */
  innerClassName?: string;
  /** 内容是否全宽出血，为 true 时内层不再受 1080px 内容栏与两侧竖边框约束 */
  bleed?: boolean;
  /** 分隔栏内容，通常为装饰元素 */
  children?: React.ReactNode;
}

/**
 * 分隔栏通用外壳：背景纹理挂在全宽外层，内层仅约束 1080px 内容栏与两侧竖边框，
 * 各风格子组件只需提供背景与内容差异。
 *
 * @param props - 组件属性
 * @param props.outerClassName - 外层全宽容器追加的类名
 * @param props.outerStyle - 外层全宽容器的内联样式
 * @param props.innerClassName - 内层内容栏追加的类名
 * @param props.bleed - 内容是否全宽出血
 * @param props.children - 分隔栏内容
 * @returns 分隔栏外壳元素
 */
export const DividerShell: React.FC<DividerShellProps> = ({
  outerClassName,
  outerStyle,
  innerClassName,
  bleed = false,
  children,
}) => {
  const frameClassName = bleed
    ? 'w-full overflow-hidden'
    : 'max-w-[1080px] mx-auto px-4 md:px-8 border-x border-[#e5e5e5] overflow-hidden';

  return (
    <div
      aria-hidden="true"
      className={`border-b border-[#e5e5e5] overflow-hidden select-none ${outerClassName ?? ''}`}
      style={outerStyle}
    >
      <div className={`${frameClassName} ${innerClassName ?? ''}`}>
        {children}
      </div>
    </div>
  );
};
