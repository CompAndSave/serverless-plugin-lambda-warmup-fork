import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  }, {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6
      }
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    }
  }
];