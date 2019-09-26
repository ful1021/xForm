const IS_PRODUCTION = process.env.NODE_ENV == 'production';

const path = require('path');
const util = require('./util');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: util.genCssLoader(IS_PRODUCTION)
      },
      {
        test: /\.scss$/,
        use: util.genScssLoader(IS_PRODUCTION)
      },
      { // 处理字体
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: IS_PRODUCTION ? {
          name: 'font/[name].[ext]'
        } : undefined
      },
      {
        test: /\.(png|jpe?g)(\?.*)?$/,
        loader: 'url-loader',
        options: IS_PRODUCTION ? {
          limit: 4096,
          path: '',
          name: 'img/[name].[ext]',
        } : undefined
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@src': path.join(__dirname, '../src')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}