const webpack = require('webpack')
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { htmlWebpackPlugin } = require('./htmlWebpackPlugin')

const mode = 'development';

module.exports = merge(common, {
    mode,
    devtool: 'inline-source-map',
    devServer: {
        client: {
            logging: 'info',
            overlay: {
                errors: true,
                warnings: false
            },
            progress: true
        },
        hot: true,
        static: {
            directory: path.join(__dirname, "../dist")
        },
        compress: true,
        historyApiFallback: {
            index: '../public/index.html'
        },
        port: 8854
    },
    plugins: [
        htmlWebpackPlugin(mode),
        new webpack.HotModuleReplacementPlugin()
    ]
})