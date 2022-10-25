/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "./.eslintrc-auto-import",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 关闭驼峰命名规则
    "vue/multi-word-component-names": 0,
  },
};
