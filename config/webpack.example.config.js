require('./utils');

const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'example': ['./example/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../example/dist'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new LodashModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
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