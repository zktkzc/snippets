import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from 'electron'
import * as query from './query'
import { SqlActionType } from '../../../types'
import config from './config'
import { initTable } from './tables'

ipcMain.handle(
  'sql',
  (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType, params = {}) => {
    return query[type](sql, params)
  }
)

ipcMain.on('setDatabaseDirectory', (_event: IpcMainEvent, path: string) => {
  config.databaseDirectory = path
})

ipcMain.on('initTable', (_event: IpcMainEvent) => {
  initTable()
})
