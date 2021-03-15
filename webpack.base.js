module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx|\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
