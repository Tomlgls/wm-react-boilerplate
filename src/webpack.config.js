var webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "react-hot-loader/patch", "./src/index.js"],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  devServer: {
    inline: true,
    historyApiFallback: false,
    contentBase: './public/',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loaders: 'babel-loader',
        options: {
          presets: ['env', 'react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules'
    ],
    alias: {
     TweenLite: 'gsap/src/uncompressed/TweenLite',
     jquery: 'jquery/src/jquery'
    }
  },
}