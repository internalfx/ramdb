
var config = {
  cache: true,
  context: __dirname + '/src',
  entry: './ramdb.es6',
  output: {
    path: __dirname + '/dist',
    filename: 'ramdb.js',
    libraryTarget: 'umd',
    library: 'ramdb'
  },
  module: {
    preLoaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.json']
  }
}

module.exports = config
