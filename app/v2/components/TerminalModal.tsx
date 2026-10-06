"use client";


import React, { useState, useRef, useEffect } from 'react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#000000]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-3xl max-h-[85vh] bg-[#000000] text-[#ffffff] border border-[#333333] flex flex-col shadow-2xl font-mono text-xs overflow-hidden">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-[#111111] border-b border-[#222222] flex items-center justify-between text-[#a3a3a3]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff0000] inline-block" />
            <span className="text-[#ffffff] font-semibold">
              {PORTFOLIO_METADATA.shellPrompt.replace('$', '')} — fullstack (pts/1)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-[#a3a3a3] hover:text-[#ffffff] cursor-pointer"
            >
              [ESC / ✕]
            </button>
          </div>
        </div>

        {/* 快捷指令芯片 */}
        <div className="px-4 py-2 bg-[#0a0a0a] border-b border-[#222222] flex flex-wrap items-center gap-2 text-[11px] text-[#a3a3a3]">
          <span className="text-[#737373]">快捷指令:</span>
          {['help', 'bio', 'stack', 'projects', 'principles', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 border border-[#333333] hover:border-[#0057b8] hover:text-[#ffffff] transition-colors cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* 滚动命令记录区 */}
        <div 
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 space-y-4 select-text leading-relaxed font-mono min-h-[320px] max-h-[500px]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#a3a3a3]">
                <span className="text-[#ff0000]">❯</span>
                <span className="text-[#ffffff] font-semibold">{item.command}</span>
              </div>
              <pre className="text-[#e5e5e5] whitespace-pre-wrap pl-4 font-mono text-[11px] sm:text-xs leading-normal">
                {item.output}
              </pre>
            </div>
          ))}

          {/* 活跃命令行输入 */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#ff0000]">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent text-[#ffffff] border-none outline-none font-mono text-xs focus:ring-0 placeholder-[#555555]"
              placeholder="输入系统指令 (可键入 'help' 或 'stack')..."
            />
          </div>
        </div>

        {/* 终端底栏 */}
        <div className="px-4 py-2 bg-[#0a0a0a] border-t border-[#222222] flex items-center justify-between text-[10px] text-[#737373]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffcc00]" />
            <span>服务状态: {PORTFOLIO_METADATA.uptime}</span>
          </span>
          <span>按上下箭头键浏览历史指令 · ESC 退出</span>
        </div>
      </div>
    </div>
  );
};
