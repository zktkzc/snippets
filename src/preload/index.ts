import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { SqlActionType } from '../../types'
import { WindowNameType } from '../main/windows'

// Custom APIs for renderer
const api = {
  openWindow: (name: WindowNameType) => {
    ipcRenderer.send('openWindow', name)
  },
  closeWindow: (name: WindowNameType) => {
    ipcRenderer.send('closeWindow', name)
  },
  shortCut: (shortCut: string) => {
    return ipcRenderer.invoke('shortCut', shortCut)
  },
  setIgnoreMouseEvents(ignore: boolean, options?: { forward: boolean }) {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  openConfigWindow() {
    ipcRenderer.send('openConfigWindow')
  },
  sql(sql: string, type: SqlActionType, params = {}) {
    return ipcRenderer.invoke('sql', sql, type, params)
  },
  selectDatabaseDirectory: () => {
    return ipcRenderer.invoke('selectDatabaseDirectory')
  },
  setDatabaseDirectory: (path: string) => {
    ipcRenderer.send('setDatabaseDirectory', path)
  },
  initTable: () => {
    ipcRenderer.send('initTable')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
