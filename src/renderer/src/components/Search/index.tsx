import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input, Tooltip } from 'antd'
import { useEffect } from 'react'

export default function Search() {
  const { search, handleSearch } = useSearch()

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowUp':
        case 'ArrowDown':
          e.preventDefault()
          break
      }
    })
  }, [])

  return (
    <main className="bg-slate-50 p-3 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg flex items-center gap-1 no-drag">
        <Tooltip title="数据配置" placement="bottom">
          <SettingOne
            theme="outline"
            size="22"
            fill="#34495e"
            strokeWidth={4}
            className="cursor-pointer"
            onClick={() => window.api.openWindow('code')}
          />
        </Tooltip>
        <Input autoFocus value={search} placeholder="请输入片段标题..." onChange={handleSearch} />
      </section>
      <section className="text-center text-slate-600 text-xs mt-2 no-drag select-none">
        tkzc00作品
        <Tooltip title="软件设置" placement="bottom">
          <span
            className="#app-setting text-orange-600 cursor-pointer ml-2 font-bold select-none"
            onClick={() => window.api.openWindow('config')}
          >
            设置
          </span>
        </Tooltip>
      </section>
    </main>
  )
}
