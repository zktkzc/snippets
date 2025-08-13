import { Delete, FolderClose } from '@icon-park/react'
import { NavLink, useFetcher, useSubmit } from 'react-router-dom'
import { CategoryType } from 'types'
import style from './style.module.scss'
import { useContextMenu } from 'mantine-contextmenu'
import { useStore } from '@renderer/store/useStore'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  const fetcher = useFetcher()
  const editCategoryId = useStore((store) => store.editCategoryId)
  const setEditCategoryId = useStore((store) => store.setEditCategoryId)

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
          />
        </div>
      ) : (
        <NavLink
          to={`/config/category/contentList/${category.id}`}
          key={category.id}
          className={({ isActive }) => (isActive ? style.active : style.link)}
          onDoubleClick={(e) => setEditCategoryId(category.id)}
          onContextMenu={showContextMenu(
            [
              {
                key: 'remove',
                title: '删除分类',
                icon: <Delete theme="outline" size={18} strokeWidth={3} />,
                onClick: () => {
                  submit({ id: category.id }, { method: 'DELETE' })
                }
              }
            ],
            { className: 'contextMenu' }
          )}
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
