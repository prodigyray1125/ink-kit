import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import importsPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["dist", "storybook-static"],
  },
  ...compat.extends(),
  eslintPluginPrettierRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      "react-hooks": reactHooksPlugin,
      import: importsPlugin,
    },

    rules: {
      "react-hooks/exhaustive-deps": "error",

      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],

      "unused-imports/no-unused-imports": "error",

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^@?\\w"],
            ["^(@)(/.*|$)"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.?(css)$"],
          ],
        },
      ],

      "simple-import-sort/exports": "error",
    },
  },
];
