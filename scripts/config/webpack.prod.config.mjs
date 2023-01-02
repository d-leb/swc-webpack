import CompressionPlugin from 'compression-webpack-plugin'

import { loadOverrides } from '../utils.mjs'
import { buildWebpackBaseConfig } from './webpack.base.config.mjs'

const overrides = await loadOverrides('webpack.prod.config.mjs')
const { plugins: pluginsOverride, ...rest } = overrides

export const buildWebpackConfig = (paths) => {
  const webpackBaseConfig = buildWebpackBaseConfig(paths)

  return {
    mode: 'production',
    ...webpackBaseConfig,
    devtool: false,
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 81920,
      },
    },
    performance: {
      hints: 'warning',
      maxAssetSize: 81920,
      maxEntrypointSize: 143360,
    },
    plugins: [...webpackBaseConfig.plugins, new CompressionPlugin(), ...(pluginsOverride ?? [])],
    ...rest,
  }
}
