const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = Merge(CommonConfig, {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'lib'),
        library: 'inferno-monaco-editor',
        libraryTarget: 'commonjs2',
        filename: 'index.js'
    },
    // plugins: [
    //     new CopyWebpackPlugin([
    //         {
    //             from: 'node_modules/monaco-editor/min/vs',
    //             to: 'vs',
    //         }
    //     ]),
    // ]
});