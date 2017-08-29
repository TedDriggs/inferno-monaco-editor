const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = Merge(CommonConfig, {
    entry: path.join(__dirname, 'examples', 'index.tsx'),
    // Enables iPads etc. to hit a locally-run demo instance.
    devServer: {
        disableHostCheck: true,
    },
    output: {
        path: path.resolve(__dirname, 'examples', 'dist'),
    },
    plugins: CommonConfig.plugins.concat([
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'examples/index.html',
        }),
    ]),
});