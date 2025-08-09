import { DataType } from '@renderer/data'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface ContextProps {
  data: DataType[],
  setData: Dispatch<SetStateAction<DataType[]>>
}

interface Props {
  children: React.ReactNode
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)

export const CodeProvider = ({ children }: Props) => {
  const [data, setData] = useState<DataType[]>([])
  return <CodeContext.Provider value={{ data, setData }}>{children}</CodeContext.Provider>
}
