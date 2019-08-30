const presets = [
  ['@babel/env'],
  ['@vue/babel-preset-jsx']
];

const plugins = [
  'lodash',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-jsx'
]

module.exports = {presets, plugins};