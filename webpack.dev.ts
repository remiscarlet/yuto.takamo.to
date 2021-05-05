import * as path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import commonConfig from './webpack.common';

const config: webpack.Configuration = commonConfig;

export default config;
