import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'

const config = {
  search: ''
}

export const registerShortCut = (win: BrowserWindow) => {
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
    switch (type) {
      case 'search':
        config.search = shortCut
        return registerSearchShortCut(win, shortCut)
    }
  })
}

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
