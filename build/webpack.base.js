//公共部分
//导入path模块
const path = require("path");

//引入vue-loader的插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

//引入html-webpack-plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//引入clean-webpack-plugin插件
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

//引入webpack插件
const webpack = require('webpack');

module.exports = {
    //打包入口
    entry: "./src/main.js",
    //打包出口
    output: {
        filename: "bundle.js",
        //需要使用绝对路径
        path: path.resolve(__dirname, "../dist")
    },
    //打包规则
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            // {
            //     test:/\.(jpg|jpeg|png|svg)$/,
            //     loader:'file-loader',
            //     options:{
            //         name:`[name].[ext]`
            //     }
            // },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: "url-loader",
                options: {
                    name: `[name].[ext]`,
                    limit: 2048
                }
            },
            {
                test: /\.css$/,
                //注：这里的书写顺序按照从右到左，从下到上的顺序依次执行
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "postcss-loader",
                    "stylus-loader"
                ]
            }
        ]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    //解决默认导出的是vue.common.js
    resolve: {
        alias: {
            vue: "vue/dist/vue.js",
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'images': path.resolve(__dirname, '../src/assets/images')

        }
    }
};