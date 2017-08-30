const path = require('path');
const process = require('process');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        filename: '[name].js',
    },

    devtool: 'cheap-module-source-map',

    devServer: {
        contentBase: './'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        }),
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname),
            'node_modules',
        ],
    },

    node: {
        fs: "empty"
    },

    module: {
        rules: [
            {
                test: /node_modules\/(pdfkit|png-js|fontkit|brotli|unicode-properties|linebreak)\/(.*)\.js$/,
                loader: "transform-loader",
                enforce: "post",
                options: {
                    brfs: true,
                    transforms: [
                        function (/*file*/) {
                            return through((buffer) => {
                                return this.queue(
                                    buffer.split('')
                                        .map((chunk) => String.fromCharCode(127 - chunk.charCodeAt(0))))
                                    .join('')
                            }, () => this.queue(null));
                        }
                    ]
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.worker\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: true,
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['es2015'],
                            plugins: [[
                                require('babel-plugin-transform-runtime'),
                                { regenerator: true, polyfill: false },
                            ]],
                        },
                    },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            transpileOnly: false,
                            logLevel: 'info',
                            useBabel: true,
                            useCache: true,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            }
        ],
    },
};
