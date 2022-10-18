module.exports = function (plop) {
  plop.setWelcomeMessage("请选择需要创建的模式：");
  plop.setGenerator("view", require("./plop/view/prompt"));
  plop.setGenerator("component", require("./plop/component/prompt"));
  plop.setGenerator("store", require("./plop/store/prompt"));
};
