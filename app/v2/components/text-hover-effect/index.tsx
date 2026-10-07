"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, type TargetAndTransition } from 'motion/react';

interface Point {
  x: number;
  y: number;
}

interface TextHoverEffectProps {
  text: string;
  duration?: number;
}

const VIEW_BOX_HEIGHT = 256;
const FONT_SIZE = 184;
const STROKE_WIDTH = 0.77;
const DASH_LENGTH = 2560;

export const TextHoverEffect = ({ text, duration }: TextHoverEffectProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState<Point>({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState<TargetAndTransition>({ cx: '50%', cy: '50%' });
  const [viewBoxWidth, setViewBoxWidth] = useState<number>(1920);

  useEffect(() => {
    if (!svgRef.current) return;

    const updateViewBox = () => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0) return;
      setViewBoxWidth((rect.width / rect.height) * VIEW_BOX_HEIGHT);
    };

    updateViewBox();

    const observer = new ResizeObserver(updateViewBox);
    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    if (svgRect.width === 0 || svgRect.height === 0) return;
    const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
    const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
    setMaskPosition({
      cx: `${cxPercentage}%`,
      cy: `${cyPercentage}%`,
    });
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBoxWidth} ${VIEW_BOX_HEIGHT}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="objectBoundingBox"
          r="20%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: 'easeOut' }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={STROKE_WIDTH}
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        style={{ fontSize: FONT_SIZE, opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={STROKE_WIDTH}
        className="fill-transparent stroke-neutral-300 font-[helvetica] font-bold dark:stroke-neutral-700"
        style={{ fontSize: FONT_SIZE }}
        initial={{ strokeDashoffset: DASH_LENGTH, strokeDasharray: DASH_LENGTH }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: DASH_LENGTH,
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth={STROKE_WIDTH}
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] font-bold"
        style={{ fontSize: FONT_SIZE }}
      >
        {text}
      </text>
    </svg>
  );
};
