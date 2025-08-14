import { Add, DatabaseSetting } from '@icon-park/react'
import { Link, useSubmit } from 'react-router-dom'

export const FooterMenu = () => {
  const submit = useSubmit()

  return (
    <div className="nav">
      <Add
        theme="outline"
        size="20"
        strokeWidth={3}
        className="cursor-pointer"
        onClick={(e) => submit(null, { method: 'POST' })}
      />
      <Link to="/config">
        <DatabaseSetting theme="outline" size="20" strokeWidth={3} className="cursor-pointer" />
      </Link>
    </div>
  )
}
