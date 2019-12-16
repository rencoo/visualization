'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ],
    module: {
        rules: [
            {
                test:/\.css$/, 
                loader: 'style-loader!css-loader'
            },
        ]
    }
}