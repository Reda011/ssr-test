/*
 * @Des: webpack基础设置
 * @Author: Reda
 * @Date: 2021-11-26 14:55:57
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader', 'less-loader']
      },
      { test: /\.vue$/, 
        use: 'vue-loader' 
      },
    ]
  },
  plugins: [   
    new VueLoaderPlugin()
  ],
};