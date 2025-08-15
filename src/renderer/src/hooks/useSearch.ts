import { ChangeEvent } from 'react'
import { useStore } from '@renderer/store/useStore'
import { ContentType } from 'types'

export default () => {
  const { search, setSearch, setData } = useStore((state) => state)

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const data = await window.api.sql(
      `select * from contents where title like @content limit 6;`,
      'findAll',
      {
        content: `%${e.target.value}%`
      }
    )
    setData(data as ContentType[])
  }

  return {
    search,
    handleSearch
  }
}
