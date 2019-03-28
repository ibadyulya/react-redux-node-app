const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath:
            process.env.NODE_ENV === 'production'
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.json'],
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            'com:': resolve('/src/components'),
            'mod:': resolve('/src/modules')
        }
    },
    module: {
        rules: [
            {
                test: /(\.jsx$|\.js$)/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: { javascriptEnabled: true }
                    }
                ]
            },
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                loader: 'url-loader?limit=1000000'
            }
        ]
    },
    plugins: []
};
