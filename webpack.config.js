const webpack = require('webpack');
const path = require('path');
const request = require('sync-request');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

console.log('Started ', isProd ? 'production' : 'development', ' build');

// Get link to latest release download URL
const RELEASES_URL = 'https://api.github.com/repos/KELiON/cerebro/releases';
const response = request('GET', RELEASES_URL, {
  'headers': {
    'user-agent': 'webpack'
  }
});
const download_url = JSON.parse(response.body)[0].assets[0].browser_download_url;
console.log('Latest release download url: ', download_url)

// Added google analytics script only in prod
const analytics = isProd ? fs.readFileSync('./src/html/analytics.html') : '';

module.exports = {
  entry: {
    index: ['./src/js/index.js'],
    styles: ['./src/css/application.css'],
  },
  output: {
    path: './dist',
    chunkFilename: '[name].js',
    filename: isProd ? '[name].[chunkhash].js' : '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'eslint-loader' }
      ]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: "css-loader!postcss-loader"
      }),
    }]
  },
  plugins: [
    new ExtractTextPlugin(isProd ? '[name].[contenthash].css' : '[name].css'),
    new HtmlWebpackPlugin({
      download_url,
      analytics,
      template: 'src/index.html',
      filename: 'index.html',
      inject: false,
    }),
    new CopyWebpackPlugin([
      { from: './src/images/*.png', to: './images/[name].[ext]' },
      { from: './src/images/plugins/*.png', to: './images/plugins/[name].[ext]' },
    ]),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "zopfli",
        test: /\.js$|\.html|\.css$/,
        minRatio: 0.8
    })
  ]
};
