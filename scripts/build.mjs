import { rm } from 'fs'
import webpack from 'webpack'

import { handleError, paths } from './utils.mjs'
import { buildWebpackConfig } from './config/webpack.prod.config.mjs'

console.log('\nBuilding for production...\n')
console.log('...Begin build\n')

const webpackConfig = buildWebpackConfig(paths)

rm(
  paths.build,
  {
    force: true,
    recursive: true,
  },
  (rmError) => {
    handleError(rmError)

    webpack(webpackConfig, (webpackError, stats) => {
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
    })
  }
)
