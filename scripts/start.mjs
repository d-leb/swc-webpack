import { rm } from 'fs'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

import { handleError, paths } from './utils.mjs'
import { buildWebpackConfig } from './config/webpack.devel.config.mjs'

console.log('\nBuilding for development...\n')
console.log('...Begin build\n')

const webpackConfig = buildWebpackConfig(paths)
const { devServer: devServerConfig } = webpackConfig

rm(
  paths.build,
  {
    force: true,
    recursive: true,
  },
  (rmError) => {
    handleError(rmError)

    const compiler = webpack(webpackConfig, (webpackError, stats) => {
      handleError(webpackError)

      process.stdout.write(
        `${stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false,
        })}\n\n`
      )

      console.log('...Build complete\n')

      const server = new webpackDevServer(devServerConfig, compiler)
      server.start()
    })
  }
)
