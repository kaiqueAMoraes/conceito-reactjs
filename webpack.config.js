const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [{ //cada objeto daqui e um loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
        ]
      },
      {
        test: /.*\.(jpe?g|pgn|gif)$/i,
        use: [{
          loader: 'file-loader'
        }, ]
      }
    ]
  }
}
