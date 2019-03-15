const path = require('path');
const webpack = require('webpack');
const config = require('../config');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.jsx', '.js', '.json'],
        alias: {
            'com:': resolve('/src/components'),
            'mod:': resolve('/src/modules'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env', 'stage-0', 'react', 'es2017'],
                    plugins: ['react-hot-loader/babel', ['transform-runtime', {
                        regenerator: true,
                    }], ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
                    ],
                },
            },
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /node_modules/,
                use: ['eslint-loader'],
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                }],
            },
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                loader: 'url-loader?limit=1000000',
            },
        ],
    },
    plugins: [
    ],
};
