import { app, BrowserWindow, IpcMainEvent, IpcMainInvokeEvent } from 'electron'
import { createWindow, OptionsType } from './createWindow'

export type WindowNameType = 'search' | 'config' | 'code'

export const config = {
  search: {
    id: 0,
    options: {
      hash: '',
      initShow: true
    }
  },
  code: {
    id: 0,
    options: {
      initShow: false,
      width: 1300,
      height: 700,
      frame: true,
      transparent: false,
      resizable: true,
      hash: '/#config/category/contentList'
    }
  },
  config: {
    id: 0,
    options: {
      initShow: false,
      width: 500,
      height: 350,
      frame: true,
      transparent: false,
      resizable: true,
      hash: '/#config'
    }
  }
} as Record<WindowNameType, { id: number; options: OptionsType }>

export const getWindowByName = (name: WindowNameType) => {
  let win = BrowserWindow.fromId(config[name].id)
  if (!win) {
    win = createWindow(config[name].options)
    config[name].id = win.id
  }
  return win
}

export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

app.whenReady().then(() => {
  getWindowByName('search')
  getWindowByName('config')
})
