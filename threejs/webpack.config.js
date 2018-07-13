var path = require('path');
var webpack = require('webpack');
// webpack.config.js
process.env.WEBPACK_MODE === 'development'

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        // rule for .js/.jsx files
        {
          test: /\.(js|jsx)$/,
          include: [path.join(__dirname, "js", "src")],
          exclude: [path.join(__dirname, "node_modules")],
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devServer: {
      host: "localhost",
      port: 8080,
      contentBase: path.join(__dirname, "build"),
      inline: true, // live reloading
      stats: {
        colors: true,
        reasons: true,
        chunks: false,
        modules: false
      }
    },
    devtool: 'source-map'
};
