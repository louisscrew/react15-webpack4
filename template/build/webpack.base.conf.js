const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let outputPath = path.resolve(__dirname, "../dist");
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  entry: {
    main: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: outputPath,
    filename: '[name].[hash:8].js',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: [
      "node_modules"
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // 回滚
          publicPath: '../', //解决css背景图的路径问题
          use: [{
            loader: 'css-loader',
            options: {
              autoprefixer: false
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({ //分离less编译后的css文件
          fallback: 'style-loader',
          publicPath: '../', //解决css背景图的路径问题
          use: [{
            loader: 'css-loader',
            options: {
              autoprefixer: false
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'less-loader'
          }]
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../', //解决css背景图的路径问题
          use: [{
            loader: 'css-loader',
            options: {
              autoprefixer: false
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: ('assets/img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: ('assets/media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: ('assets/fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true // true->'head' || false->'body'
    }),
    new ExtractTextPlugin({
      filename:"./css/[name].css",
      allChunks: true
    })
  ]
}
