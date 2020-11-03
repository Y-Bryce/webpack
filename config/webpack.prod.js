// const path = require('path');
// const PATHS = require("./PATH")
// const webpack = require('webpack');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

const proConfig = {
  mode: 'production',
  plugins: []
}

module.exports = merge(commonConfig, proConfig) 

// module.exports = {
//   /* 生产模式 */
//   mode: 'production',

//   /* models */
//   module: {},

//   /* 插件 */
//   plugins: []
// }