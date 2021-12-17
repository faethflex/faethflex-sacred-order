'use strict';

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.css$/i, loader: "css-loader", }],
  },
};