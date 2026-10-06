import type { NextConfig } from "next";
import { ACTIVE_VERSION } from "./version.config";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          /**
           * 必须放在 beforeFiles：数组形式的 rewrites 属于 afterFiles，
           * 会在文件系统路由（app/page.tsx）之后才检查，导致根路径
           * 命中返回 null 的占位页而白屏。
           * beforeFiles 在文件检查之前拦截，内部指向当前激活版本，
           * 浏览器地址栏保持 / 不变。
           */
          source: "/",
          destination: `/${ACTIVE_VERSION}`,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
