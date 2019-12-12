
const webpack = require('webpack');
const path=require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const vendors = [
    'react',
    'react-dom',
    // ...其它库
];
const dllName = "dll";

module.exports = {
    mode:"production",
    output: {
        path:path.resolve(__dirname, '../dist'),
        filename: '[name].dll.js',
        library: dllName,
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path:path.resolve(__dirname,'../dist/manifest.json'),
            name: dllName,
            context: __dirname,
        }),
        new CleanWebpackPlugin([`./dist/*.dll.js`,`./dist/*.json`], { root: path.resolve(__dirname, "../") }),
    ]
  }
