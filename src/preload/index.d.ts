import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      openWindow: (name: WindowNameType) => void
      hideWindow: (name: WindowNameType) => void
      shortCut: (type: 'search', shortCut: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
      openConfigWindow: () => void
      sql: <T>(sql: string, type: SqlActionType, params?: Record<string, any>) => Promise<T>
    }
  }
}
