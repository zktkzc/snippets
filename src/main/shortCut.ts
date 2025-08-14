import { app, dialog, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import { getWindowByName } from './windows'
import { config } from './db/query'
import { ConfigDataType } from '../../types'

ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, shortCut: string) => {
  return registerSearchShortCut(shortCut)
})

function registerSearchShortCut(shortCut: string) {
  const win = getWindowByName('search')

  if (globalShortcut.isRegistered(shortCut)) {
    dialog.showErrorBox('温馨提示', `快捷键${shortCut}注册失败，请检查快捷键是否已被占用`)
    return false
  }

  return globalShortcut.register(shortCut, () => {
    if (win.isVisible()) {
      win.hide()
    } else {
      win.center()
      win.show()
    }
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

export const registerAppGlobalShortCut = () => {
  const content = config() as ConfigDataType
  if (content.shortCut) registerSearchShortCut(content.shortCut)
}
