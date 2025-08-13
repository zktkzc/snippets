import { Outlet, useLoaderData } from 'react-router-dom'
import './style.scss'
import { CategoryType } from 'types'
import { CategoryItem } from '@renderer/components/CategoryItem'
import { QuickNav } from '@renderer/components/QuickNav'
import { FooterMenu } from '@renderer/components/FooterMenu'

export default function Category() {
  const categories = useLoaderData() as CategoryType[]

  return (
    <main className="category-page">
      <div className="categories">
        <QuickNav />
        <div className="px-2 mt-2 opacity-90 mb-1 text-[10px]">具体分类</div>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
      <FooterMenu />
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
