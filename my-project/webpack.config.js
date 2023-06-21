'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html',filename:"index.html" }),
    new HtmlWebpackPlugin({ template: './src/contactUs.html',filename:"contactUs.html" }),
    new HtmlWebpackPlugin({ template: './src/about.html',filename:"about.html" }),
    new HtmlWebpackPlugin({ template: './src/t-shirts.html',filename:"t-shirts.html" }),
    new HtmlWebpackPlugin({ template: './src/hats.html',filename:"hats.html" }),
    new HtmlWebpackPlugin({ template: './src/services.html',filename:"services.html" }),
    new HtmlWebpackPlugin({ template: './src/testimonial.html',filename:"testimonial.html" }),



    new miniCssExtractPlugin()
     
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
          },
          
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          },
          
        
          
        ]

      },

      {
        test:/\.html$/,
        loader: "html-loader",
        options: {
          sources: false,

        }
        
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },

    ]
  }
}