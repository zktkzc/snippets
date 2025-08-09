import Search from '@renderer/components/Search/Search'
import Result from '@renderer/components/Result/Result'
import { CodeProvider } from '@renderer/context/CodeContext'

function App(): React.JSX.Element {
  return (
    <CodeProvider>
      <Search />
      <Result />
    </CodeProvider>
  )
}

export default App
