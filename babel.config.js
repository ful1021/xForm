const presets = [
  ['@babel/env', {
    modules: false,
    useBuiltIns: false,
    targets: {
      esmodules: process.env.RELEASE_TARGET == 'ES2015' 
    }
  }],
  ['@vue/babel-preset-jsx']
];

const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-jsx'
]

module.exports = {presets, plugins};