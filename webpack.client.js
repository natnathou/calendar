const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  entry: './src/client/index.tsx',

  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: 'ignore-loader',
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
