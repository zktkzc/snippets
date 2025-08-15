import { ConfigDataType, ContentType } from 'types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface StateProps {
  data: ContentType[]
  setData: (data: ContentType[]) => void
  search: string
  setSearch: (search: string) => void
  error: string
  setError: (message: string) => void
  id: number
  setId: (id: number) => void
  editCategoryId: number
  setEditCategoryId: (id: number) => void
  config: ConfigDataType
  setConfig: (config: ConfigDataType) => void
}

export const useStore = create(
  persist<StateProps>(
    (set) => ({
      data: [],
      setData: (data) => set({ data }),
      search: '',
      setSearch: (search) => set({ search }),
      error: '',
      setError: (message) => set({ error: message }),
      id: 0,
      setId: (id) => set({ id }),
      editCategoryId: 0,
      setEditCategoryId: (editCategoryId) => set({ editCategoryId }),
      config: { databaseDirectory: '', shortCut: '' },
      setConfig: (config) => set({ config })
    }),
    {
      name: 'snippets-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
