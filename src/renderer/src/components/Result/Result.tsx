import useCode from '@renderer/hooks/useCode'
import { useEffect, useState } from 'react'
import './style.scss'
import classNames from 'classnames'

export default function Result() {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const handleKeyEvent = (e: KeyboardEvent) => {
    if (data.length === 0) return
    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((pre) => (pre - 1 < 0 ? data.length - 1 : pre - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((pre) => (pre + 1 >= data.length ? 0 : pre + 1))
        break
      case 'Enter':
        console.log(data[currentIndex].content)
        navigator.clipboard.writeText(data[currentIndex].content)
        break
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data, currentIndex])
  return (
    <main>
      {data.map((item, index) => (
        <div key={item.id} className={classNames({ active: currentIndex === index })}>
          {item.content}
        </div>
      ))}
    </main>
  )
}
