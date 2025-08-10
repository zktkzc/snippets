import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'

export default function Search() {
  const { search, handleSearch, handleInputKeyDown } = useSearch()
  return (
    <div className="bg-slate-50 p-3 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg flex items-center gap-1 no-drag">
        <SettingOne
          theme="outline"
          size="22"
          fill="#34495e"
          strokeWidth={4}
          onClick={() => alert('显示配置页面')}
        />
        <Input autoFocus value={search} onChange={handleSearch} onKeyDown={handleInputKeyDown} />
      </section>
      <section className="text-center text-slate-600 text-xs mt-2">tkzc00作品</section>
    </div>
  )
}
