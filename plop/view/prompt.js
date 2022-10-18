const path = require("path");

module.exports = {
  description: "创建页面",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入文件名",
      validate: (v) => {
        if (!v || v.trim === "") {
          return "文件名不能为空";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "styleType",
      message: "预编译工具类型(less、scss、or else)",
      default: "less",
    },
  ],
  actions: (data) => {
    const { name, styleType } = data;
    const baseUrl = `./src/views/{{camelCase name}}`;

    const actions = [
      {
        type: "add",
        path: `${baseUrl}/index.vue`,
        templateFile: "plop/view/page.hbs",
        data: {
          componentName: `${name}`,
          styleType,
        },
      },
      {
        type: "add",
        path: `${baseUrl}/index.${styleType}`,
        templateFile: "plop/view/style.hbs",
      },
    ];
    return actions;
  },
};
