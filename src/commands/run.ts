import {Args, Command, Flags} from '@oclif/core'
import * as child_process from "child_process";

export default class Run extends Command {
  static description = 'Push to Deploy'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    // name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    // force: Flags.boolean({char: 'f'}),
  }

  static args = {
    // file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Run)

    // const name = flags.name ?? 'world'
    this.log('Running gitlog')

    // eslint-disable-next-line camelcase
    child_process.exec('ls -la', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }

      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }

      console.log(`stdout: ${stdout}`)
    })
  }
}
