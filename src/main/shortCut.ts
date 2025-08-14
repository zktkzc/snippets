import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import { getWindowByName } from './windows'

const config = {
  search: ''
}

ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
  switch (type) {
    case 'search':
      if (config.search) globalShortcut.unregister(config.search)
      config.search = shortCut
      return registerSearchShortCut(getWindowByName('search'), shortCut)
  }
})

function registerSearchShortCut(win: BrowserWindow, shortCut: string) {
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
