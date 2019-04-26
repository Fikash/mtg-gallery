let path = require('path')
let HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve (__dirname, 'bundle'),
    filename: 'index_bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.(jsx|js)$/, loader: 'babel-loader',  exclude: /(node_modules)/ },
      { test: /\.css$/, use: [ {loader: 'style-loader'} , {loader: 'css-loader'}], exclude: /(node_modules)/ }
    ]
  },
  devServer: {
    "port": 8080,
    "proxy": {"/": "http://localhost:3000"}
  },

  plugins: [
    new HtmlWebpackPlugin ({ 
      template: 'app/index.html'
    })
  ]
}