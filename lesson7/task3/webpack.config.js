const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('../task1/webpack.config');
const webpack = require('webpack');
module.exports = {
entry: './src/index.js',
output: {
    filename: 'buidle.js'
},
module: {
    rules: [
        {
            test: /.js$/,
            use: ['babel-loader']
        },
        {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /.(jpg|png)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit:8192,
                        name:'[name].[ext]',
                        outputPath:'images'
                    }
                }
            ]
        }
    ]
},
plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
]
};