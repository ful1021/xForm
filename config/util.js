const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  genCssLoader(isProduction){
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      isProduction ? null : 'postcss-loader'
    ].filter(loader => null != loader);
  },
  genScssLoader(isProduction){
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      isProduction ? null : 'postcss-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/assets/scss/common/variable.scss'), 
            path.resolve(__dirname, '../src/assets/scss/common/mixin.scss')
          ]
        }
      }
    ].filter(loader => null != loader);
  }
}