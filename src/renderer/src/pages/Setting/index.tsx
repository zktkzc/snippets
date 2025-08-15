import { Form } from 'react-router-dom'
import './style.scss'
import { useState } from 'react'
import { useStore } from '@renderer/store/useStore'
import { Tooltip } from 'antd'

export const Setting = () => {
  const [keys, setKeys] = useState<string[]>([])
  const config = useStore((store) => store.config)
  const setConfig = useStore((store) => store.setConfig)

  return (
    <Form method="POST">
      <main className="setting-page">
        <h1>软件设置</h1>
        <section>
          <h5>快捷键定义</h5>
          <div>
            唤醒搜索
            <Tooltip title="点击录入快捷键" placement="bottom">
              <input
                type="text"
                name="shortCut"
                defaultValue={config.shortCut}
                readOnly
                onKeyDown={(e) => {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
                    const code = e.code.replace(/Left|Right|Key|Digit/, '')
                    if (keys.includes(code)) return
                    keys.push(code)
                    setKeys(keys)
                    if (code.match(/^(\w|Space)$/gi)) {
                      e.currentTarget.value = keys.join('+')
                      setKeys([])
                      setConfig({ ...config, shortCut: e.currentTarget.value })
                      window.api.shortCut(e.currentTarget.value)
                    }
                  }
                }}
              />
            </Tooltip>
          </div>
        </section>
        <section>
          <h5>数据库配置</h5>
          <div>
            数据保存路径
            <Tooltip title="点击选择数据文件保存路径" placement="bottom">
              <input
                type="text"
                name="databaseDirectory"
                readOnly
                defaultValue={config.databaseDirectory}
                onClick={async (e: any) => {
                  const path = await window.api.selectDatabaseDirectory()
                  console.log(path)
                  setConfig({ ...config, databaseDirectory: path })
                  e.target.value = path
                  window.api.setDatabaseDirectory(path)
                  window.api.initTable()
                }}
              />
            </Tooltip>
          </div>
        </section>
      </main>
    </Form>
  )
}
