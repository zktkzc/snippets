import { Outlet } from 'react-router-dom'
import './style.scss'
import { Add, DatabaseSetting } from '@icon-park/react'

export default function Category() {
  return (
    <main className="category-page">
      <div className="categories">Category</div>
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
