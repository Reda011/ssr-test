/*
 * @Des: client端打包配置
 * @Author: Reda
 * @Date: 2021-11-26 14:55:57
 */
const path = require('path');
const merge = require('webpack-merge').merge;
const base = require('./webpack.base');

module.exports = merge(base, {
  entry: './src/entry-client.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.client.js'
  },
});