import Search from '@renderer/components/Search/Search'
import Result from '@renderer/components/Result/Result'
import useShortCut from './hooks/useShortCut'
import Error from './components/Error'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'

function App(): React.JSX.Element {
  const { register } = useShortCut()
  register('search', 'CommandOrControl+Shift+;')

  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  const mainRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
  }, [])

  return (
    <main className="relative p-3" ref={mainRef}>
      <Error />
      <Search />
      <Result />
    </main>
  )
}

export default App
