const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    devServer: {
        port: 4100,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

    ],
    resolve: {
        alias: {
            '@context': path.resolve(__dirname, 'src/Context.tsx'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
            '@workers': path.resolve(__dirname, 'src/workers'),
            '@hooks': path.resolve(__dirname, 'src/hooks')
        },
        extensions: ['.tsx', '.ts', '.json', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    }
}