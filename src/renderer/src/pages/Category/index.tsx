import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './style.scss'
import { Add, AllApplication, DatabaseSetting, FolderClose } from '@icon-park/react'
import { CategoryType } from 'types'

export default function Category() {
  const categories = useLoaderData() as CategoryType[]

  return (
    <main className="category-page">
      <div className="categories">
        <div className="px-2 mt-2 opacity-90 mb-1">快捷操作</div>
        <NavLink to={`/config/category/contentList`} end className="font-bold mb-2">
          <div className="flex items-center gap-1">
            <AllApplication theme="outline" size="12" strokeWidth={3} />
            <div className="truncate">所有片段</div>
          </div>
        </NavLink>
        <div className="px-2 mt-2 opacity-90 mb-1">具体分类</div>
        {categories.map((category) => (
          <NavLink to={`/config/category/contentList/${category.id}`} key={category.id}>
            <div className="flex items-center gap-1">
              <FolderClose theme="outline" size="12" strokeWidth={3} />
              <div className="truncate">{category.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="nav">
        <Add theme="outline" size="20" strokeWidth={3} className="cursor-pointer" />
        <DatabaseSetting theme="outline" size="20" strokeWidth={3} className="cursor-pointer" />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
