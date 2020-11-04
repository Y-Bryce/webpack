const path = require('path');
const PATHS = require("./PATH")
const webpack = require('webpack');
const {merge} = require('webpack-merge');           // 导入 merge 方法
const commonConfig = require('./webpack.common');    // 导入公共config

const devServer = {
   compress:true,             // GZip压缩
   host: '127.0.0.1', 
   port: 2000,
}

const devConfig = {
  mode: 'development',
  plugins: [
  ],
  devServer  // 自带热更新
}

module.exports = merge(commonConfig, devConfig) 
// module.exports = {
//   /* 模式 */
//   mode: 'development',
//  /* sorce-map */
//   devtool : 'cheap-module-eval-source-map',
//   /* 插件 */
//   plugins: []
// }