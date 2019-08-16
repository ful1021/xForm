const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'xform': ['./src/index.js']
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { 
          discardComments: { removeAll: true } 
        }]
      }
    })
  ]
})