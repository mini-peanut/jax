const webpack = require('webpack')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    resolve: {
      alias: {
        app: path.resolve(__dirname, './src/index.js'),
        vue: 'vue/dist/vue.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.less$/,
          use: [
              {
                  loader: 'style-loader'
              },
              {
                  loader: 'css-loader',
                  options: {importLoaders: 1}
              },
              {
                  loader: 'less-loader'
              }
          ]
        },
        {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};


