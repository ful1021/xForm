process.env.NODE_ENV = 'production';
process.env.RELEASE_VERSION = require('../package.json').version;

const path = require('path');
const readline = require('readline');

const { exec } = require('child_process');
const { promisify } = require('util');
const { writeFile } = require('fs');

const promisifyExec = promisify(exec);
const promisifyWriteFile = promisify(writeFile);

const webpack = require('webpack')
const prodConf = require('../config/webpack.prod.config');
const exampleConf = require('../config/webpack.example.config');

const statsOptions = {
  colors: true,
  modules: false,
  children: false,
  entrypoints: false
}

function getVersion(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入版本号：'
  });

  return new Promise((resolve) => {
    rl.prompt();
    
    rl.on('line', line => {
      if(/[0-9]+\.[0-9]+\.[0-9]+/.test(line)){
        return resolve(line)
      }
      rl.prompt();
    })
  })
}

function updateVersion(version){
  const pkj = require('../package.json');
  pkj.version = version;
  process.env.RELEASE_VERSION = version;
  return promisifyWriteFile(path.resolve(__dirname, '../package.json'), JSON.stringify(pkj, null, 2))
}

function compile(config, name){
  return new Promise((resolve, reject) => {
    console.log(`=> webpack compiling: ${name}`)
    webpack(config, function (err, stats) {
      if (err) return reject(err);

      console.log(stats.toString(statsOptions))
      console.log('=> webpack compiling end. \n\n')
      resolve();
    });
  })
}

getVersion()
  .then(version => {
    return updateVersion(version);
  })
  .then(() => {
    return compile(prodConf, 'production');
  })
  .then(() => {
    return compile(exampleConf, 'example');
  })
  .then(() => {
    return promisifyExec('git add .')
  })
  .then(() => {
    return promisifyExec(`git commit -m "release: ${process.env.RELEASE_VERSION}"`)
  })
  .then(() => {
    return promisifyExec('git push')
  })
  .then(() => {
    return promisifyExec('npm publish')
  })
  .then(() => {
    return process.exit(0)
  })
  .catch(err => console.log(err))