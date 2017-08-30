const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const MonacoEditorSrc = path.join(__dirname, 'src');

module.exports = Merge(CommonConfig, {
    entry: path.join(__dirname, 'examples', 'index.tsx'),
    // Enables iPads etc. to hit a locally-run demo instance.
    devServer: {
        disableHostCheck: true,
    },
    output: {
        path: path.resolve(__dirname, 'examples', 'lib'),
    },
    plugins: CommonConfig.plugins.concat([
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'examples/index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: 'node_modules/monaco-editor/dev/vs',
                to: 'vs',
            }
        ]),
    ]),
});