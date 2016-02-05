module.exports = {
  entry: './src/js/app.js',
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
      },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
