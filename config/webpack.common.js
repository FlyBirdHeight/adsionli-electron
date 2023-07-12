const webpack = require('webpack')
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, "../dist")
    },
    target: 'web',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        }, {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }],
    },
    plugins: [],
}