import Search from '@renderer/components/Search/Search'
import Result from '@renderer/components/Result/Result'
import { CodeContext } from '@renderer/context/CodeContext'
import { useState } from 'react'
import { DataType } from '@renderer/data'

function App(): React.JSX.Element {
  const [data, setData] = useState<DataType[]>([])
  return (
    <CodeContext.Provider value={{ data, setData }}>
      <Search />
      <Result />
    </CodeContext.Provider>
  )
}

export default App
