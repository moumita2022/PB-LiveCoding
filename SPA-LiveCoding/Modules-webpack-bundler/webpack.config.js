const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 

const path = require("path")
module.exports= {
    entry:"./src/js/index.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module:{
        rules: [
            { test: /\.css$/, use:["style-loader", "css-loader"] },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}