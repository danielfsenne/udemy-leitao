const modoDev = process.env.NODE_ENV !=='production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js', 
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache:true,
                parallel:true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"estilo.css"
        })
    ],
    module:{
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
               // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpretar @import, url()... 
                'sass-loader',
            ]
        }]
    }
  }

  