import type { NextConfig } from "next";
import { ACTIVE_VERSION } from "./version.config";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        /**
         * beforeFiles 阶段拦截，即使存在根 page 也不执行。
         * source 匹配根路径，destination 内部指向当前激活版本，
         * 浏览器地址栏保持 / 不变。
         */
        source: "/",
        destination: `/${ACTIVE_VERSION}`,
      },
    ];
  },
};

export default nextConfig;
