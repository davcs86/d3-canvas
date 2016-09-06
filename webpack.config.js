var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    "./app/app" // Your appʼs entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || "source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    library: "david",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ["", ".js", ".es6"]
  },
  module: {
    loaders: [
      {
        test: /\.js|\.es6?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["babel?presets[]=es2015", "eslint-loader"]
      },
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
    ]
  },
  devServer: {
      contentBase: "./public",
      noInfo: false, //  --no-info option
      hot: true,
      inline: true
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
