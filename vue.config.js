module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/vant-demo/" : "/",
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         // 直接覆盖变量
  //         "button-primary-background-color": "#191919",
  //         "text-color": "#111",
  //         "border-color": "#eee",
  //         // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //         // hack: `true; @import "your-less-file-path.less";`,
  //         hack: `true; @import "${resolve("./src/utils/vant.less")}";`,
  //       },
  //     },
  //   },
  // },
};
