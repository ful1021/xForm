process.env.NODE_ENV = 'production';
process.env.RELEASE_VERSION = require('../package.json').version;

const webpack = require('webpack')
const webpackConfig = require('../config/webpack.prod.config');

//编译
webpack(webpackConfig, function (err, stats) {
  if (err) throw err;

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n'); 
});