import merge from 'webpack-merge';
import webpack from 'webpack';

import * as TerserJSPlugin from 'terser-webpack-plugin';
import * as CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import commonConfig from './webpack.common';

const config: webpack.Configuration = merge(commonConfig, {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
});

export default config;
