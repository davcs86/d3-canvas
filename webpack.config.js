var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    "./lib/Canvas"
  ],
  devtool: process.env.WEBPACK_DEVTOOL || "source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "D3C.Canvas.js",
    library: "D3C",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ["", ".js", ".es6"]
  },
  module: {
    loaders: [
      {
        test: /\.js|\.es6?$/,
        exclude: /(node_modules\/(?!constitute)|bower_components)/,
        loaders: ["babel-loader"]
      },
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
    ],
    preLoaders: [
      {
        test: /\.js|\.es6?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["eslint-loader"]
      }
    ]
  },
  eslint: {
    emitError: true,
    failOnError: true
  },
  devServer: {
      contentBase: "./public",
      noInfo: false,
      hot: true,
      inline: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      reserved: ["class"]
    })
  ]
};
