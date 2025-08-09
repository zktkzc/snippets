import { app, BrowserWindow, dialog, globalShortcut } from 'electron'

export const registerShortCut = (win: BrowserWindow) => {
  app.whenReady().then(() => {
    let ret = globalShortcut.register('CommandOrControl+Shift+;', () => {
      win.center()
      win.show()
    })

    ret = globalShortcut.register('Escape', () => {
      if (win.isVisible()) win.hide()
    })

    if (!ret) {
      dialog.showErrorBox('温馨提示', '快捷键注册失败')
    }
  })

  app.on('will-quit', () => {
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
