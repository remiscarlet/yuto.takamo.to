// @ts-nocheck
// Need to figure out how to fix 'Unsafe assignment of an `any` value' errors
import * as path from 'path';
import * as webpack from 'webpack';

import * as CopyPlugin from 'copy-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          img: 'src',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '...'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: process.env.NODE_ENV === 'production' ? {
        minifyJS: true,
        minifyCSS: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      } : false,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'content/images/', to: 'assets/images/' },
      ],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!CNAME',
      ],
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default config;
