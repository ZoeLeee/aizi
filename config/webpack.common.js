const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

exports.config = {
  entry: path.join(__dirname, "../src/index.js"),
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
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
        test: /\.[(png)|(json)]$/,
        loader: "file-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'images/[hash].[ext]',
            limit: 5000,
          }
        }
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
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/manifest.json')
    }
    ),
    new AddAssetHtmlPlugin(
      [
        {
          filepath:path.resolve(__dirname,  "../dist/*.dll.js"),
        },
      ]
    ),
  ],
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
}



