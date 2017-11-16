const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',


  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        secure: false
      }
    },
    contentBase: './bin',
    historyApiFallback: true
  },
})