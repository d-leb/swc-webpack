import { copyFileSync, existsSync, readdir } from 'fs'
import path from 'path'

import { handleError, paths } from './utils.mjs'

console.log('\nCopying default files...')

const copyFiles = (from, to, ignore = []) => {
  readdir(from, (error, files) => {
    handleError(error)

    files.forEach((file) => {
      const sourceFile = path.join(from, file)
      const destFile = path.join(to, file)

      if (!ignore.includes(file)) {
        if (!existsSync(destFile)) {
          copyFileSync(sourceFile, destFile)
          console.log(` ${file} copied.`)
        } else {
          console.log(` ${file} already exists, skipping.`)
        }
      }
    })
  })
}

copyFiles(paths.defaults, paths.base, ['.swc-webpack'])
copyFiles(path.join(paths.defaults, '.swc-webpack/'), paths.config)
