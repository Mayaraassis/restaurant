const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/assets/css/variables.less";`,
      },
    },
  },
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule("svg");

  //   svgRule.uses.clear();

  //   svgRule
  //     .use("babel-loader")
  //     .loader("babel-loader")
  //     .end()
  //     .use("vue-svg-loader")
  //     .loader("vue-svg-loader");
  // },
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/, 
          loader: 'vue-svg-loader', 
        },
      ],
    }      
  },
});
