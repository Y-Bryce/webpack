const path = require('path');
const PATH = require('./PATH');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, PATH['dist']),
    filename: 'js/[name].[contenthash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' } // options 在 .babelrc 定义
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test:/\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
        loader: 'url-loader',
        options:{
          limit:8 * 1024,    // 8 kb以下转 base64
          esModule:false,    // 关闭默认 es模块引入方式
          outputPath: 'images',   // 将文件打包到哪里
          publicPath: './images', 
          name: '[hash:8].[ext]'  // .ext 文件扩展名，jpg\png
        }
      },
    ]
  },
  plugins: [
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