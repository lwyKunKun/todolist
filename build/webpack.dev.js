//用于开发环境

const baseConfig=require("./webpack.base.js")
const merge=require("webpack-merge")

//引入webpack插件
const webpack=require('webpack');

const devConfig = {
  //开发模式的打包
  mode: "development",
  //在开发时快速定位到出错行
  devtool:"cheap-module-eval-source-map",
  //devServer实时加载浏览器
  devServer:{
      contentBase:"./dist",
      open:true,
      hot:true
  },

  //插件
  plugins: [
    //模块热替换
    new webpack.HotModuleReplacementPlugin()
  ],
  //解决默认导出的是vue.common.js
};

module.exports=merge(baseConfig,devConfig)
