const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.common.config');

const webpackConfig = merge(baseWebpackConfig, {


    devServer: {
        contentBase: './demo',
        hot: true
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
});

module.exports = webpackConfig;
