import { loadOverrides } from '../utils.mjs'
import { buildWebpackBaseConfig } from './webpack.base.config.mjs'

const overrides = await loadOverrides('webpack.devel.config.mjs')
const { output: outputOverride, plugins: pluginsOverride, ...rest } = overrides

export const buildWebpackConfig = (paths) => {
  const webpackBaseConfig = buildWebpackBaseConfig(paths)

  return {
    mode: 'development',
    ...webpackBaseConfig,
    devtool: 'eval-cheap-module-source-map',
    output: {
      ...webpackBaseConfig.output,
      publicPath: '/',
      ...outputOverride,
    },
    stats: 'errors-warnings',
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
      historyApiFallback: true,
      host: 'localhost',
      hot: true,
      port: 3000,
      open: true,
    },
    ...rest,
  }
}
