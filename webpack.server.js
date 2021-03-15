const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');

const config = {
  target: 'node',
  entry: './src/index.ts',
  externals: [nodeExternals()],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['ignore-loader'],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
