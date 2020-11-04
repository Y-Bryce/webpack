// const path = require('path');
// const PATHS = require("./PATH")
// const webpack = require('webpack');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const proConfig = {
  mode: 'production',
  module: {
    rules: [      
      {
        test: /\.(scss|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader    // CSS 单独抽离一个文件
          },
          'css-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css'  
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: true,  // 启用多线程并行运行提高编译速度
      }),
      new OptimizeCSSAssetsPlugin(),
    ]
  }
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