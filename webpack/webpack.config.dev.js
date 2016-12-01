'use strict'

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, '..', 'src', 'client.js'),
  ],

  output: {
    path: path.join(__dirname, '..'), // Place all results in root folder
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.jpg$/, loader: "url-loader?limit=100000" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.gif$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // Webpack 1.0
    // new webpack.optimize.OccurrenceOrderPlugin(), // Webpack 2.0 fixed this mispelling
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};