import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      openWindow: (name: WindowNameType) => void
      closeWindow: (name: WindowNameType) => void
      shortCut: (shortCut: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
      openConfigWindow: () => void
      sql: <T>(sql: string, type: SqlActionType, params?: Record<string, any>) => Promise<T>
      selectDatabaseDirectory: () => Promise<string>
      setDatabaseDirectory: (path: string) => void
      initTable: () => void
    }
  }
}
