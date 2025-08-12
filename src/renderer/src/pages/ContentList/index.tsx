import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import './style.scss'
import dayjs from 'dayjs'
import { ContentType } from 'types'

export default function ContentList() {
  const contents = useLoaderData() as ContentType[]

  return (
    <main className="contentList-page">
      <div className="list">
        {contents.map((content) => (
          <NavLink
            to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
            key={content.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="truncate">{content.title}</div>
            <div className="text-[10px] opacity-80">
              {dayjs(content.created_at).format('YYYY/MM/DD')}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
