import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import './style.scss'
import { Add, DatabaseSetting } from '@icon-park/react'
import { useEffect } from 'react'

export default function Category() {
  const categories = useLoaderData() as CategoryType[]
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/config/category/contentList/${categories[0]?.id}`)
  }, [categories])

  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <NavLink
            to={`/config/category/contentList/${category.id}`}
            key={category.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {category.name}
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
