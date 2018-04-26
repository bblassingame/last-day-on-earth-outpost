const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') }
    }),
    new CopyWebpackPlugin([
      {from: 'sitemap.xml', to: 'sitemap.xml'},
      {from: 'BingSiteAuth.xml', to: 'BingSiteAuth.xml'},
      {from: 'google51ddbd8819b54a7d.html', to: 'google51ddbd8819b54a7d.html'},
      {from: 'browserconfig.xml', to: 'browserconfig.xml'},
      {from: 'favicon.ico', to: 'favicon.ico'},
      {from: 'safari-pinned-tab.svg', to: 'safari-pinned-tab.svg'},
      {from: 'site.webmanifest', to: 'site.webmanifest'},
      {from: 'android-chrome-144x144.png', to: 'android-chrome-144x144.png'},
      {from: 'apple-touch-icon.png', to: 'apple-touch-icon.png'},
      {from: 'favicon-16x16.png', to: 'favicon-16x16.png'},
      {from: 'favicon-32x32.png', to: 'favicon-32x32.png'},
      {from: 'mstile-150x150.png', to: 'mstile-150x150.png'},
    ]),
  ],
})