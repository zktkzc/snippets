import { FolderClose } from '@icon-park/react'
import { NavLink, useFetcher } from 'react-router-dom'
import { CategoryType } from 'types'
import style from './style.module.scss'
import { useStore } from '@renderer/store/useStore'
import { useCategory } from '@renderer/hooks/useCategory'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  const fetcher = useFetcher()
  const editCategoryId = useStore((store) => store.editCategoryId)
  const setEditCategoryId = useStore((store) => store.setEditCategoryId)
  const { contextMenu, dragHandle } = useCategory(category)

  return (
    <>
      {editCategoryId === category.id ? (
        <div className={style.input}>
          <input
            name="name"
            defaultValue={category.name}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetcher.submit({ id: category.id, name: e.currentTarget.value }, { method: 'PUT' })
                setEditCategoryId(0)
              }
            }}
            onBlur={(e) => {
              fetcher.submit({ id: category.id, name: e.currentTarget.value }, { method: 'PUT' })
              setEditCategoryId(0)
            }}
          />
        </div>
      ) : (
        <NavLink
          to={`/config/category/contentList/${category.id}`}
          key={category.id}
          className={({ isActive }) => (isActive ? style.active : style.link)}
          onDoubleClick={(e) => setEditCategoryId(category.id)}
          onContextMenu={contextMenu()}
          {...dragHandle}
        >
          <div className="flex items-center gap-1">
            <FolderClose theme="outline" size="12" strokeWidth={3} />
            <div className="truncate">{category.name}</div>
          </div>
        </NavLink>
      )}
    </>
  )
}
