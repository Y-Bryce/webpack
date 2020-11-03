const path = require('path');
const PATH = require('./PATH');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, PATH['dist']),
    filename: '[name].[hash:6].js'
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack - excrise', 
      template: path.resolve( PATH["public"], 'index.html'),
      filename: path.resolve( PATH["dist"], 'index.html'),
      hash: true,
      minify: {
        removeAttributeQuotes: true,  // 去除多余引号
        collapseWhitespace:true,      // 移除空格
        removeComments:true           // 移除注释
      }
    })
  ]
}