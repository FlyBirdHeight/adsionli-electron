const webpack = require('webpack')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { htmlWebpackPlugin } = require('./htmlWebpackPlugin')

const mode = 'production';

module.exports = merge(common, {
    mode,
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        htmlWebpackPlugin(mode)
    ]
})