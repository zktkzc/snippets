import { dialog, ipcMain, IpcMainEvent } from 'electron'
import { getWindowByName, getWindowByEvent, WindowNameType } from './windows'

ipcMain.on('openWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindowByName(name).show()
})

ipcMain.on('closeWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindowByName(name).hide()
})

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
    getWindowByEvent(event).setIgnoreMouseEvents(ignore, options)
  }
)

ipcMain.handle('selectDatabaseDirectory', async () => {
  const res = await dialog.showOpenDialog({
    title: '选择数据所在目录',
    properties: ['openDirectory', 'createDirectory']
  })
  return res.canceled ? '' : res.filePaths[0]
})
