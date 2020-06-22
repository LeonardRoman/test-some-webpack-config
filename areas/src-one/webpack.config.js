// Core
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Constants
const { PROJECT_ROOT, BUILD_DIRECTORY, APP_DIRECTORY } = require('../../src-general/webpack/constants')
const AREA_NAME = 'one'

// Config
module.exports = () => {
  return {
    mode: 'development',
    entry: APP_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: AREA_NAME + '.js'
    },
    resolve: {
      alias: {
        '@': PROJECT_ROOT
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      }),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['!*.*', AREA_NAME + '.js'],
        verbose: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          }
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
      ]
    }
  }
}

