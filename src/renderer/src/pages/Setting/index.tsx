import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './style.scss'
import { ConfigDataType } from 'types'
import { useState } from 'react'

export const Setting = () => {
  const submit = useSubmit()
  const config = useLoaderData() as ConfigDataType
  const [keys, setKeys] = useState<string[]>([])

  return (
    <Form method="POST">
      <main className="setting-page">
        <h1>软件配置</h1>
        <section>
          <h5>快捷键定义</h5>
          <div>
            唤醒搜索
            <input
              type="text"
              name="shortCut"
              defaultValue={config.shortCut}
              readOnly
              onKeyDown={(e) => {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
                  keys.push(e.code.replace(/Left|Right|Key|Digit/, ''))
                  setKeys(keys)
                  e.currentTarget.value = keys.join('+')
                }
              }}
              onKeyUp={(e) => {
                setKeys([])
                if (keys.length > 1) submit(e.currentTarget.form, { method: 'POST' })
              }}
            />
          </div>
        </section>
        <section>
          <h5>数据库配置</h5>
          <div>
            数据保存路径
            <input type="text" name="databaseDirectory" defaultValue={config.databaseDirectory} />
          </div>
        </section>
      </main>
    </Form>
  )
}
