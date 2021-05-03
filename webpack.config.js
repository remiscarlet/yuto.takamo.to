import path = require('path');
import CopyPlugin = require('copy-webpack-plugin');
import HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => { // (env, opts) => {
  return {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '...'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Remilia is best 2hu',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'content/images/', to: 'assets/images/' },
        ],
      }),
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
};
