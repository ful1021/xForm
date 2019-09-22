const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  genCssLoader(isProduction){
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      isProduction ? 'postcss-loader' : null,
    ].filter(loader => null != loader);
  },
  genScssLoader(isProduction){
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      isProduction ? 'postcss-loader' : null,
      'sass-loader'
    ].filter(loader => null != loader);
  }
}