const webpack = require('webpack')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'xform': ['./src/index.js']
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'xForm',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new LodashModuleReplacementPlugin(),
    new OptimizeCSSPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    }),
    new webpack.BannerPlugin({
      banner: `[name] v${process.env.RELEASE_VERSION} (https://github.com/dongls/xForm)\nCopyright 2019 dongls\nReleased under the MIT License`
    })
  ]
})