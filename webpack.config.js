const path = require('path');
const webpack = require('webpack');

module.exports = {
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
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
     rules: [{
         test: /\.scss$/,
         use: [
             "style-loader", // creates style nodes from JS strings
             "css-loader",   // translates CSS into CommonJS
             "sass-loader"   // compiles Sass to CSS, using Node Sass by default
         ]
     }]
 }
};
