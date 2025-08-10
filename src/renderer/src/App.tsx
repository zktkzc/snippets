import Search from '@renderer/components/Search/Search'
import Result from '@renderer/components/Result/Result'
import useShortCut from './hooks/useShortCut'
import Error from './components/Error'

function App(): React.JSX.Element {
  const { register } = useShortCut()
  register('search', 'CommandOrControl+Shift+;')

  return (
    <main className="relative">
      <Error />
      <Search />
      <Result />
    </main>
  )
}

export default App
