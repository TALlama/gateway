const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    contentBase: './docs',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  module: {
     rules: [{
       test: /\.(css|scss)$/,
       use: [
         "style-loader", // creates style nodes from JS strings
         "css-loader",   // translates CSS into CommonJS
         "sass-loader"   // compiles Sass to CSS, using Node Sass by default
       ]
     }, {
       test: /\.(vue)$/,
       use: [
         'vue-loader'
       ]
     }, {
       test: /\.(woff|woff2|eot|ttf|otf|svg|jpg)$/,
       use: [
         'file-loader'
       ]
     }]
 }
};
