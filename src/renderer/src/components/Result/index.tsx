import './style.scss'
import classNames from 'classnames'
import useSelect from '@renderer/hooks/useCodeSelect'

export default function Result() {
  const { data, id, selectItem } = useSelect()
  return (
    <main className="result">
      {data.map((item) => (
        <div
          key={item.id}
          className={classNames({ active: item.id === id })}
          onClick={() => selectItem(item.id)}
        >
          {item.title}
        </div>
      ))}
    </main>
  )
}
