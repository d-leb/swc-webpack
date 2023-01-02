import spawn from 'cross-spawn'
import path from 'path'

process.on('unhandledRejection', (error) => {
  throw error
})

const args = process.argv.slice(2)
const script = args[0]

const commands = ['analyze', 'build', 'defaults', 'start']

if (!script) {
  console.log('swc-webpack: No command provided')
  process.exit(1)
}

if (!commands.includes(script)) {
  console.log(`swc-webpack: Unknown command "${script}"`)
  process.exit(1)
}

const __dirname = path.dirname(process.argv[1])
const modulePath = path.join(__dirname, `../scripts/${script}.mjs`)
const nodeArgs = [modulePath].concat(args.slice(1))
const result = spawn.sync(process.execPath, nodeArgs, { stdio: 'inherit' })

if (['SIGKILL', 'SIGTERM'].includes(result.signal)) {
  console.error('swc-webpack: The command failed because the process exited too early')
  process.exit(1)
}

process.exit(result.status)
