"use client";


import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { CLI_COMMANDS, PORTFOLIO_METADATA } from '../lib/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'motd',
      output: `好呀 — 全栈系统工程控制台 [v26.0]
输入 'help' 检视可用指令，或点击下方快捷按钮快速探索。`,
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>(['motd']);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      setPastCommands((prev) => [...prev, 'clear']);
      setHistoryIndex(-1);
      return;
    }

    if (trimmed === 'exit' || trimmed === 'quit') {
      onClose();
      return;
    }

    const output = CLI_COMMANDS[trimmed] || `zsh: 未找到指令: ${trimmed}。输入 'help' 检视所有可用指令。`;

    setHistory((prev) => [...prev, { command: cmdText, output }]);
    setPastCommands((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = historyIndex === -1 ? pastCommands.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(pastCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= pastCommands.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(pastCommands[nextIdx]);
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="终端"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
        className="w-full max-w-3xl max-h-[85vh] bg-[#1e1e1e] text-[#f5f5f7] border border-black/60 rounded-xl flex flex-col shadow-[0_24px_70px_rgba(0,0,0,0.55),0_2px_12px_rgba(0,0,0,0.4)] font-mono text-xs overflow-hidden"
      >
        {/* macOS 窗口标题栏 */}
        <div className="h-9 px-3.5 bg-[#2b2b2d] border-b border-black/40 flex items-center">
          <div className="flex items-center gap-2 group">
            <button
              type="button"
              onClick={onClose}
              aria-label="关闭"
              className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] flex items-center justify-center cursor-pointer"
            >
              <svg
                viewBox="0 0 10 10"
                className="w-[7px] h-[7px] text-[#4d0000] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path
                  d="M2 2 L8 8 M8 2 L2 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-hidden="true"
              tabIndex={-1}
              className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d99e1c] flex items-center justify-center cursor-default"
            >
              <svg
                viewBox="0 0 10 10"
                className="w-[7px] h-[7px] text-[#5c3c00] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path
                  d="M2.2 5 H7.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-hidden="true"
              tabIndex={-1}
              className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] flex items-center justify-center cursor-default"
            >
              <svg
                viewBox="0 0 10 10"
                className="w-[7px] h-[7px] text-[#0a3d0a] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path
                  d="M2 5.2 L4.2 7.4 L8 2.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 text-center px-3 pointer-events-none">
            <span className="text-[11px] text-[#a9a9ad] font-medium truncate">
              {PORTFOLIO_METADATA.shellPrompt.replace('$', '')} — zsh — 80×24
            </span>
          </div>

          <div className="w-[52px]" />
        </div>

        {/* 快捷指令芯片 */}
        <div className="px-4 py-2 bg-[#1e1e1e] border-b border-white/[0.08] flex flex-wrap items-center gap-2 text-[11px] text-[#a9a9ad]">
          <span className="text-[#7a7a7e]">快捷指令:</span>
          {['help', 'bio', 'stack', 'projects', 'principles', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded-md border border-white/15 text-[#c7c7cc] hover:border-[#0a84ff] hover:bg-[#0a84ff]/10 hover:text-white transition-colors cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* 滚动命令记录区 */}
        <div 
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 space-y-4 select-text leading-relaxed font-mono min-h-[320px] max-h-[500px] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.18)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/[0.15] hover:[&::-webkit-scrollbar-thumb]:bg-white/[0.25]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#a9a9ad]">
                <span className="text-[#28c840]">❯</span>
                <span className="text-[#f5f5f7] font-semibold">{item.command}</span>
              </div>
              <pre className="text-[#cbcbcf] whitespace-pre-wrap pl-4 font-mono text-[11px] sm:text-xs leading-normal">
                {item.output}
              </pre>
            </div>
          ))}

          {/* 活跃命令行输入 */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#28c840]">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent text-[#f5f5f7] border-none outline-none font-mono text-xs focus:ring-0 placeholder-[#6e6e73] caret-[#0a84ff]"
              placeholder="输入系统指令 (可键入 'help' 或 'stack')..."
            />
          </div>
        </div>

        {/* 终端底栏 */}
        <div className="px-4 py-2 bg-[#2b2b2d] border-t border-white/[0.08] flex items-center justify-between text-[10px] text-[#8e8e93]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
            <span>服务状态: {PORTFOLIO_METADATA.uptime}</span>
          </span>
          <span>↑↓ 浏览历史指令 · ESC 退出</span>
        </div>
      </motion.div>
    </div>
  );
};
