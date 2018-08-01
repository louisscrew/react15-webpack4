const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: ('js/[name].[hash:8].js'),
    chunkFilename: ('js/[name]-[id].[hash:8].js')
  },
  //4.0配置
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, '../dist/*'), {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true
    })
  ]
})

module.exports = webpackConfig;
