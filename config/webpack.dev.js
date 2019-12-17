const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common').config;
const merge = require('webpack-merge');
const theme = require('../package.json').theme;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-ma',
  module: {
    rules: [
      {
        test: /.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader",
          options: {
            modifyVars: theme,
            javascriptEnabled: true
          }
        }]
      },

    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3333,
    open: true,
    hot: true,
    compress:true,
    contentBase: path.resolve(__dirname, "../dist/"),
  },
  plugins: [
    new webpack.NamedModulesPlugin(),//Hot
    new webpack.HotModuleReplacementPlugin(),//Hot
  ]
});