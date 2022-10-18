module.exports = {
  description: "创建全局模块化状态",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入模块名称",
      validate: (v) => {
        if (!v || v.trim === "") {
          return "模块名称不能为空";
        } else {
          return true;
        }
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: `${data.path}/{{camelCase name}}/index.ts`,
        templateFile: "plop/store/index.hbs",
      },
      {
        type: "add",
        path: `${data.path}/{{camelCase name}}/types.ts`,
      },
    ];
    return actions;
  },
};
