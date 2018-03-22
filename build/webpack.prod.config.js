const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.common.config');

const webpackConfig = merge(baseWebpackConfig, {

});

module.exports = webpackConfig;
