const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer:{
    contentBase:'./dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'},
        ]
        // exclude: /node_modules/   
      }

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"勇敢的心",
      template:"src/assets/index.html"
    })
  ]
};