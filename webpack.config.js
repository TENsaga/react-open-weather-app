const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env', 'react', 'stage-0' ],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ],
        }),
      },
      {
        test: /\.(ttf|otf|eot|svg|woff|woff2|png?)(\?.+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({ filename: 'index_bundle.css' }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyWebpackPlugin([ { from: 'src/images/weather-icons', to: 'images' } ]),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      process_env: {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true,
      },
      mangle: {
        except: [ '$', 'webpackJsonp' ],
        screw_ie8: true,
        keep_fnames: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new OptimizeCSSAssets(),
  );
}

module.exports = config;
