module.exports = {
  entry: './src/app.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [
            require.resolve('babel-preset-es2015')
          ]
        }
      }
    ]
  }
};
