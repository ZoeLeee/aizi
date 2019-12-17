const common = require('./webpack.common').config;
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const theme = require('../package.json').theme;

const ISDEV = process.env.NODE_ENV === 'development';

const extractLess = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: ISDEV
});
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [
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
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 244 * 1024,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({//压缩js
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin()//压缩css
    ]
  },
  plugins: [
    new CleanWebpackPlugin([`./dist/*.bundle.js`, `./dist/*.html`, `./dist/*.css`], { root: path.resolve(__dirname, "../") }),
    extractLess,
    // new BundleAnalyzerPlugin({ analyzerPort: 8081 })
  ]
});