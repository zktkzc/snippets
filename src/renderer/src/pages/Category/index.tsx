import { Outlet, useLoaderData } from 'react-router-dom'
import './style.scss'
import { Add, DatabaseSetting, FolderClose } from '@icon-park/react'

export default function Category() {
  const categories = useLoaderData() as CategoryType[]

  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="item">
            <FolderClose theme="outline" size={12} strokeWidth={3} />
            {category.name}
          </div>
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
