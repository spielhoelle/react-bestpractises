const path = require("path");

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./src"),
    filename: 'bundle.js',
    publicPath: './src'
  },
  devServer: {
    inline: true,
    port: 8080,
  },

  module: {
    rules: [ 
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
    ],
  }

}
module.exports = config;
