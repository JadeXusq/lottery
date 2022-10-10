/* eslint-env node */

module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 100,
      propList: ["*"],
      selectorBlackList: [".no__rem"],
    },
  },
};
