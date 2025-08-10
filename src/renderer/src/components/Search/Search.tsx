import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'
import { useEffect, useRef } from 'react'

export default function Search() {
  const { search, handleSearch, handleInputKeyDown } = useSearch()
  const mainRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    mainRef.current?.addEventListener('mouseover', (e: MouseEvent) => {
      window.api.setIgnoreMouseEvents(false)
    })

    mainRef.current?.addEventListener('mouseout', (e: MouseEvent) => {
      window.api.setIgnoreMouseEvents(true, { forward: true })
    })
  }, [])

  return (
    <main className="bg-slate-50 p-3 rounded-lg drag" ref={mainRef}>
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
    </main>
  )
}
