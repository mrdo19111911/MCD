const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devtool:'eval',
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "import",
                { libraryName: "antd", libraryDirectory: "es", style: true }
              ]
            ]
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "import",
                { libraryName: "antd", libraryDirectory: "es", style: true }
              ]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          { loader: 'less-loader', options: { javascriptEnabled: true } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader:
              'url-loader?limit=10000&name=@assets/[name].[ext]',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host:'127.0.0.2',
    port: 3000,
    hot: true,
    open: true,
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
};
