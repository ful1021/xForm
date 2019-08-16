const presets = [
  ['@babel/env', {useBuiltIns: 'usage', 'corejs': '3'}],
  ['@vue/babel-preset-jsx']
];

const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-jsx'
]

module.exports = {presets, plugins};