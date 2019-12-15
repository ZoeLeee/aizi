const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const theme = require('../package.json').theme;

const ISDEV = process.env.NODE_ENV === 'development';

const extractLess = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: ISDEV
});

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../src/index.js"),
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /.less$/,
        use: extractLess.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader",
            options: {
              modifyVars: theme,
              javascriptEnabled: true
            }
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.[(png)|(json)]$/,
        loader: "file-loader"
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "./index.html"
    }),
    new CleanWebpackPlugin(["dist"]),
    extractLess,
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/manifest.json')
    }
    ),
    new AddAssetHtmlPlugin(
      [
        {
          filepath: "./dist/*.dll.js",
        },
      ]
    ),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    port: 3333,
    open: true,
    hot: true,
  },
  devtool: ISDEV ? "eval-source-map" : "none"
}



