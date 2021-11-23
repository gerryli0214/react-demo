const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve('./dist')
  },
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/, // 不需要处理node_modules里的内容
        use: 'babel-loader' 
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}