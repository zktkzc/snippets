import { Add } from '@icon-park/react'
import { Tooltip } from 'antd'
import { useSubmit } from 'react-router-dom'

export const FooterMenu = () => {
  const submit = useSubmit()

  return (
    <div className="nav">
      <Tooltip title="新建分类" placement="top">
        <Add
          theme="outline"
          size="20"
          strokeWidth={3}
          className="cursor-pointer"
          onClick={() => submit(null, { method: 'POST' })}
        />
      </Tooltip>
    </div>
  )
}
