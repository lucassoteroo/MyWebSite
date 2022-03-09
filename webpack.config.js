const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: './js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
                MiniCssExtract.loader,
                'css-loader'
            ]
        }, {
            test: /\.(jpeg|jpg|png|svg|gif)$/i,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                },
            }
        }]
    },
    plugins: [
        new HtmlWebpack({
            filename: './html/index.html',
            template: './src/html/index.html'
        }),
        new HtmlWebpack({
            filename: './html/previewDevflix.html',
            template: './src/html/previewDevflix.html'
        }),
        new HtmlWebpack({
            filename: './html/previewMentalista.html',
            template: './src/html/previewMentalista.html'
        }),
        new HtmlWebpack({
            filename: './html/previewImersao.html',
            template: './src/html/previewImersao.html'
        }),
        new MiniCssExtract({
            filename: './css/style.css'
        })
    ]
}