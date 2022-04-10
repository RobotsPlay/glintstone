const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    glintsone: ['./src/js/main.js', './src/scss/main.scss']
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
        loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
            outputPath: '../'
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },{
          loader: 'css-loader',
          options: { url: false }
        },{
          loader: 'postcss-loader'
        },{
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader!css-loader',
          options: { url: false }
        },{
          loader: 'postcss-loader'
        }]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
};