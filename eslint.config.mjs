import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig } from "eslint/config";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];

export default defineConfig([
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error"
    }
  }
]);