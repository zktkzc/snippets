import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './style.scss'
import { Add, DatabaseSetting, FolderClose } from '@icon-park/react'
import { CategoryType } from 'types'

export default function Category() {
  const categories = useLoaderData() as CategoryType[]

  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <NavLink
            to={`/config/category/contentList/${category.id}`}
            key={category.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="flex items-center gap-1">
              <FolderClose theme="outline" size="12" strokeWidth={2} />
              <div className="truncate">{category.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="nav">
        <Add theme="outline" size="20" strokeWidth={2} className="cursor-pointer" />
        <DatabaseSetting theme="outline" size="20" strokeWidth={2} className="cursor-pointer" />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
