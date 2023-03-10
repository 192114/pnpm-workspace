import { Command } from 'commander'
import { create } from '../commands/create'
import { remove } from '../commands/remove'
import path from 'path'

interface IActionOptionType {
  c: string
}

const excutePath = process.cwd()

const program = new Command()

const defaultConfigPath = path.resolve(excutePath, './configs/appList.json')

program
  .command('create [projectName]')
  .option('-c', '--config', defaultConfigPath)
  .description('初始化项目')
  .action(async (projectName: string, option: IActionOptionType) => {
    const configPath = option.c
    await create(projectName, configPath)
  })

program
  .command('remove [projectName]')
  .option('-c', '--config', defaultConfigPath)
  .description('移除项目')
  .action(async (projectName: string, option: IActionOptionType) => {
    const configPath = option.c
    await remove(projectName, configPath)
  })

program.parse()
