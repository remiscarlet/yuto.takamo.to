import * as path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import commonConfig from './webpack.common';

import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

// Type weirdness from webpack-dev-server. Workaround by explicitly merging types.
// https://github.com/survivejs/webpack-merge/issues/141
interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  ...commonConfig,
  devtool: 'inline-source-map',
  devServer: {
    stats: {
      children: false,
    },
    compress: true,
    public: "remi.takamo.to",
    port: 8001
  }
};

export default config;
