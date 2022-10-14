/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "./.eslintrc-auto-import"
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 关闭驼峰命名规则
    "vue/multi-word-component-names": 0,
  },
};
