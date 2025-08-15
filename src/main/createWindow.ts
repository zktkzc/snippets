import { is } from '@electron-toolkit/utils'
import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron'
import { join } from 'path'
import url from 'node:url'
import icon from '../../resources/icon.png?asset'

export interface OptionsType extends Partial<BrowserWindowConstructorOptions> {
  openDevTools?: boolean
  hash?: string
  initShow?: boolean
}

export function createWindow(options: OptionsType): BrowserWindow {
  // Create the browser window.
  const win = new BrowserWindow(
    Object.assign(
      {
        width: 500,
        height: 400,
        center: true,
        show: false,
        frame: false,
        transparent: true,
        alwaysOnTop: false,
        autoHideMenuBar: true,
        resizable: false,
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
          preload: join(__dirname, '../preload/index.js'),
          sandbox: false
        }
      },
      options
    )
  )

  if (is.dev && options.openDevTools) win.webContents.openDevTools()

  win.on('ready-to-show', () => {
    options.initShow && win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
  } else {
    win.loadURL(
      url.format({
        pathname: join(__dirname, '../renderer/index.html'),
        protocol: 'file',
        slashes: true,
        hash: 'config/category/contentList'
      })
    )
  }

  return win
}
