import { BrowserWindow } from 'electron'
import { createWindow } from './window'

let win = null as null | BrowserWindow

const createConfigWindow = () => {
  if (!win) win = createWindow()
  else {
    win.center()
    win.show()
  }
  win.on('closed', () => (win = null))
}

export { createConfigWindow }
