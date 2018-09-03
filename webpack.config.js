const path = require('path')

const ENV = process.env.NODE_ENV || 'development'

module.exports = {

  mode: ENV,

  devtool: 'cheap-module-source-map',

  entry: {
    popup     : './src/popup.js',
    background: './src/background.js',
    content   : './src/content.js',
  },

  output: {
    path      : path.resolve(__dirname, 'assets'),
    filename  : '[name].js',
    publicPath: '/assets',
  },

  devServer: {
    contentBase: [
      './popup',
      './background',
      './content',
    ],
  },

  module: {
    rules: [
      {
        test   : /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
      },
    ],
  },
}
