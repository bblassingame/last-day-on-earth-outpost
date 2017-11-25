const merge = require('webpack-merge');
const common = require('./webpack.common.js');

var path = require('path');
const CONTENT_DIR = path.resolve(__dirname, 'C:/Apache24/htdocs/');

module.exports = merge(common, {
  devtool: 'inline-source-map',


  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        secure: false
      }
    },
    contentBase: CONTENT_DIR,
    historyApiFallback: true
  },
})