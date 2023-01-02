import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

import { loadOverrides } from '../utils.mjs'

const overrides = await loadOverrides('webpack.base.config.mjs')
const { entry: entryOverride, module: moduleOverride, plugins: pluginsOverride, ...rest } = overrides

export const buildWebpackBaseConfig = (paths) => ({
  entry: [path.resolve(paths.src, 'index.tsx'), ...(entryOverride ?? [])],
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(paths.build),
  },
  module: {
    ...(moduleOverride ?? {}),
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['swc-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
        exclude: /node_modules/,
      },
      ...(moduleOverride?.rules ?? []),
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: path.join(paths.files, 'index.html'),
    }),
    ...(pluginsOverride ?? []),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', 'jsx', '.js', '.json'],
  },
  ...rest,
})
