import { existsSync } from 'fs'
import path from 'path'
import url from 'url'

const __dirname = process.cwd()
const __moduledir = path.dirname(process.argv[1])

export const paths = {
  base: __dirname,
  build: path.join(__dirname, 'build/'),
  config: path.join(__dirname, '.swc-webpack/'),
  defaults: path.join(__moduledir, `../defaults/`),
  files: path.join(__dirname, 'public/'),
  src: path.join(__dirname, 'src/'),
}

const errorColor = '\x1b[31m'
const defaultColor = '\x1b[0m'

export const handleError = (error) => {
  if (error) {
    console.error(`${errorColor}An error occurred:${defaultColor}\n`)
    throw error
  }
}

export const loadOverrides = async (overrideName) => {
  const overrideUrl = path.join(paths.config, overrideName)
  const overrideModule = existsSync(overrideUrl) ? await import(url.pathToFileURL(overrideUrl).href) : undefined
  return overrideModule ? overrideModule.default() : {}
}
