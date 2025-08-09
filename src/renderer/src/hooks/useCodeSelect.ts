import { useCallback, useEffect, useState } from 'react'
import useCode from '@renderer/hooks/useCode'

export default () => {
  const { data } = useCode()
  const [id, setId] = useState<number>(0)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setId((id) => {
            const index = data.findIndex((item) => item.id === id)
            return data[index - 1]?.id || data[data.length - 1].id
          })
          break
        case 'ArrowDown':
          setId((id) => {
            const index = data.findIndex((item) => item.id === id)
            return data[index + 1]?.id || data[0].id
          })
          break
        case 'Enter': {
          selectItem(id)
          break
        }
      }
    },
    [data, id]
  )

  function selectItem(id: number) {
    const content = data.find((item) => item.id === id)?.content
    if (content) navigator.clipboard.writeText(content)
    window.api.hideWindow()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])
  useEffect(() => setId(1), [data])

  return {
    data,
    id,
    selectItem
  }
}
