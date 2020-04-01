//用于生产环境

const baseConfig=require("./webpack.base.js")
const merge=require("webpack-merge")

 const prodConfig= {
  //开发模式的打包
  mode: "production"
};

module.exports=merge(baseConfig,prodConfig)
