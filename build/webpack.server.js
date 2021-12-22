/*
 * @Des: server端打包配置
 * @Author: Reda
 * @Date: 2021-11-26 14:55:57
 */
const path = require('path');
const merge = require('webpack-merge').merge;
const base = require('./webpack.base');

module.exports = merge(base, {
  target: 'node', // 编译为类 Node.js 环境可用
  entry: './src/entry-server.js',
  output: {
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../dist')
  },
});