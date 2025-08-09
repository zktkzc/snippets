import './style.scss'
import classNames from 'classnames'
import useCodeSelect from '@renderer/hooks/useCodeSelect'

export default function Result() {
  const { data, currentIndex } = useCodeSelect()
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
