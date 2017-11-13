let webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        app: './src/js/app.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './build/')
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader?presets[]=env'
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [
                    { loader: 'css-loader?importLoaders=1!postcss-loader' },
                    { loader: 'sass-loader' }
                ],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(gif|png|jpe?g|bmp|svg)$/,
            loader: 'file-loader?name=[name].[ext]&outputPath=images/'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/app.css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            Vue: 'vue',
        })
    ]
};