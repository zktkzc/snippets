import Search from '@renderer/components/Search'
import Result from '@renderer/components/Result'
import Error from '@renderer/components/Error'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
import useShortCut from '@renderer/hooks/useShortCut'

function Home(): React.JSX.Element {
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

export default Home
