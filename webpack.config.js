require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "core-js/modules/es6.promise",
    "core-js/modules/es6.array.iterator",
    "./src/index.js",
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './public/',
    historyApiFallback: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules'
    ],
    alias: {
     jquery: 'jquery/src/jquery'
    }
  },
}
