import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { loadOverrides } from '../utils.mjs'
import { buildWebpackConfig } from './webpack.prod.config.mjs'

const overrides = await loadOverrides('webpack.analyze.config.mjs')
const { plugins: pluginsOverride, ...rest } = overrides

export const buildWebpackAnalyzeConfig = (paths) => {
  const webpackProdConfig = buildWebpackConfig(paths)

  return {
    ...webpackProdConfig,
    plugins: [...webpackProdConfig.plugins, pluginsOverride ?? new BundleAnalyzerPlugin()],
    ...rest,
  }
}
