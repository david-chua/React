var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      //When a .js file runs, it looks at  javascript files and uses babel loader and transpile es6 classes and react code.
      // css loader takes any css files and everytime it sees a css import changes it to a require statement and insert it on the page where it's active on the page.
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader','css-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  mode: "development"
};
