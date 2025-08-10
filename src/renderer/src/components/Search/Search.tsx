import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'
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
        <SettingOne
          theme="outline"
          size="22"
          fill="#34495e"
          strokeWidth={4}
          className="cursor-pointer"
          onClick={() => window.api.openConfigWindow()}
        />
        <Input autoFocus value={search} onChange={handleSearch} />
      </section>
      <section className="text-center text-slate-600 text-xs mt-2">tkzc00作品</section>
    </main>
  )
}
