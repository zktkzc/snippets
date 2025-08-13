import { FolderClose } from '@icon-park/react'
import { NavLink } from 'react-router-dom'
import { CategoryType } from 'types'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  return (
    <NavLink to={`/config/category/contentList/${category.id}`} key={category.id}>
      <div className="flex items-center gap-1">
        <FolderClose theme="outline" size="12" strokeWidth={3} />
        <div className="truncate">{category.name}</div>
      </div>
    </NavLink>
  )
}
