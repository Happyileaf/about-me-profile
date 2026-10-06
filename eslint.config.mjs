import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // v1 版本只能引用自身目录内的模块，禁止引用其他版本。
    files: ["app/v1/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/v[2-9]/**"],
              message: "禁止跨版本引用：v1 只能依赖 app/v1 目录内的代码。",
            },
          ],
        },
      ],
    },
  },
  {
    // v2 版本只能引用自身目录内的模块，禁止引用其他版本。
    files: ["app/v2/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/v1/**", "**/v[3-9]/**"],
              message: "禁止跨版本引用：v2 只能依赖 app/v2 目录内的代码。",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
